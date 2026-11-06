import localPages from '../data/pages.json';

export interface PageData {
  id: number;
  slug: string;
  title: string;
  url: string;
  originalLink: string;
  html: string;
  excerpt: string;
  imageCount: number;
  pdfCount: number;
  images: string[];
  pdfs: string[];
}

export interface PostData {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
  html: string;
}

const WP_API_BASE = 'https://acpce.ac.in/wp-json/wp/v2';

function parseWpPost(item: any): PageData {
  const rawHtml = item.content?.rendered || '';
  
  // Clean legacy staging URLs and standardize protocol
  const cleanHtml = rawHtml
    .replace(/https?:\/\/dodgerblue-jaguar-171172\.hostingersite\.com/g, 'https://acpce.ac.in')
    .replace(/http:\/\/acpce\.ac\.in/g, 'https://acpce.ac.in');

  const cleanText = cleanHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  // Extract PDFs
  const pdfMatches = cleanHtml.match(/href=["']([^"']+\.pdf)["']/gi) || [];
  const pdfs: string[] = Array.from(
    new Set(pdfMatches.map((m: string) => m.replace(/href=["']/i, '').replace(/["']$/, '')))
  );

  // Extract images
  const imgMatches = cleanHtml.match(/<img[^>]*src=["']([^"']+)["']/gi) || [];
  const images = imgMatches.map((m: string) => {
    const srcMatch = m.match(/src=["']([^"']+)["']/i);
    return srcMatch ? srcMatch[1] : '';
  }).filter(Boolean);

  let title = item.title?.rendered || '';
  title = title
    .replace(/&#8211;/g, '-')
    .replace(/&#038;|&amp;/g, '&')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/<[^>]+>/g, '')
    .trim();

  return {
    id: item.id,
    slug: item.slug,
    title,
    url: `/${item.slug}`,
    originalLink: item.link || `https://acpce.ac.in/${item.slug}/`,
    html: cleanHtml,
    excerpt: cleanText.slice(0, 200) + (cleanText.length > 200 ? '...' : ''),
    imageCount: images.length,
    pdfCount: pdfs.length,
    images: images.slice(0, 10),
    pdfs
  };
}

/**
 * Fetch a single page from WordPress REST API with Next.js ISR (revalidate every 60s)
 */
export async function getWordPressPage(slug: string): Promise<PageData | null> {
  const normalized = slug.replace(/^\/|\/$/g, '').toLowerCase();

  try {
    const res = await fetch(`${WP_API_BASE}/pages?slug=${normalized}`, {
      next: { revalidate: 60 } // Next.js ISR: checks WordPress for updates every 60s
    });

    if (res.ok) {
      const items = await res.json();
      if (Array.isArray(items) && items.length > 0) {
        return parseWpPost(items[0]);
      }
    }
  } catch (err) {
    console.warn(`[WordPress API] Could not fetch live slug "${normalized}", falling back to local archive:`, err);
  }

  // Resilient fallback to local archive if WP is temporarily unreachable
  const fallback = (localPages as Record<string, any>)[normalized];
  return fallback || null;
}

/**
 * Fetch latest news/circulars from WordPress
 */
export async function getWordPressPosts(perPage: number = 6): Promise<PostData[]> {
  try {
    const res = await fetch(`${WP_API_BASE}/posts?per_page=${perPage}`, {
      next: { revalidate: 60 }
    });

    if (res.ok) {
      const items = await res.json();
      return items.map((p: any) => ({
        id: p.id,
        slug: p.slug,
        date: p.date?.slice(0, 10) || '',
        title: (p.title?.rendered || '').replace(/&#038;|&amp;/g, '&').replace(/<[^>]+>/g, ''),
        excerpt: (p.excerpt?.rendered || '').replace(/<[^>]+>/g, '').trim(),
        link: `/post/${p.slug}`,
        html: p.content?.rendered || ''
      }));
    }
  } catch (err) {
    console.warn('[WordPress API] Could not fetch live posts:', err);
  }

  return [];
}
