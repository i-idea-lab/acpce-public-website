import { NextResponse } from 'next/server';
import localPages from '../../../data/pages.json';

export async function GET() {
  try {
    const [res1, res2] = await Promise.all([
      fetch('https://acpce.ac.in/wp-json/wp/v2/pages?per_page=100&page=1&_fields=id,slug,title,excerpt', {
        next: { revalidate: 600 }
      }),
      fetch('https://acpce.ac.in/wp-json/wp/v2/pages?per_page=100&page=2&_fields=id,slug,title,excerpt', {
        next: { revalidate: 600 }
      })
    ]);

    if (res1.ok) {
      const data1 = await res1.json();
      const data2 = res2.ok ? await res2.json() : [];
      const combined = [...data1, ...(Array.isArray(data2) ? data2 : [])];

      const searchItems = combined.map((p: any) => {
        let title = p.title?.rendered || '';
        title = title
          .replace(/&#8211;/g, '-')
          .replace(/&#038;|&amp;/g, '&')
          .replace(/&#8217;/g, "'")
          .replace(/&#8220;|&#8221;/g, '"')
          .replace(/<[^>]+>/g, '')
          .trim();

        const cleanExcerpt = (p.excerpt?.rendered || '')
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();

        return {
          id: p.id,
          slug: p.slug,
          title,
          url: `/${p.slug}`,
          excerpt: cleanExcerpt.slice(0, 180) + (cleanExcerpt.length > 180 ? '...' : '')
        };
      });

      return NextResponse.json(searchItems);
    }
  } catch (err) {
    console.warn('[API Search] Live WordPress query failed, falling back to local snapshot:', err);
  }

  // Resilient fallback to local snapshot
  const fallbackItems = Object.values(localPages as Record<string, any>).map((p: any) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    url: p.url,
    excerpt: p.excerpt
  }));

  return NextResponse.json(fallbackItems);
}
