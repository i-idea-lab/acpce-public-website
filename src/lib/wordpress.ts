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

export interface HomePageContent {
  heroTitle: string;
  heroSub: string;
  aboutText: string;
  ratio: string;
  vision: string;
  missions: string[];
  innovTitle: string;
  innovText: string;
  innovImage: string;
  facultyTitle: string;
  facultyText: string;
  facultyImage: string;
  hubTitle: string;
  hubText: string;
  hubImage: string;
  courses: Array<{
    title: string;
    level: string;
    slug: string;
    image: string;
  }>;
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
 * Fetch and extract the exact dynamic content from the WordPress Homepage (slug: 'home')
 */
export async function getParsedHomePage(): Promise<HomePageContent> {
  const homePage = await getWordPressPage('home');
  const rawHtml = homePage?.html || '';

  const cleanEntity = (str: string) =>
    str
      .replace(/&#8216;|&#8217;/g, "'")
      .replace(/&#8220;|&#8221;/g, '"')
      .replace(/&#038;|&amp;/g, '&')
      .trim();

  // Extract from live WordPress HTML
  const heroSubMatch = rawHtml.match(/Empowering Education with Research[\s\S]*?(?=<)/);
  const heroSub = heroSubMatch ? cleanEntity(heroSubMatch[0]) : "Empowering Education with Research, Innovation, and Entrepreneurship.";

  const aboutMatch = rawHtml.match(/In a world bursting with limitless possibilities[\s\S]*?(?=<)/);
  const aboutText = aboutMatch ? cleanEntity(aboutMatch[0]) : "";

  const visionMatch = rawHtml.match(/To create skilled professionals and engineers[\s\S]*?(?=<)/);
  const vision = visionMatch ? cleanEntity(visionMatch[0]) : "To create skilled professionals and engineers for catering the needs of industries and society.";

  const missionMatches = Array.from(rawHtml.matchAll(/<li[^>]*><span[^>]*>(To [^<]+)<\/span>/g)).map(m => cleanEntity(m[1]));
  const missions = missionMatches.length > 0 ? missionMatches : [
    "To provide qualified faculty and required infrastructure to impart quality education inculcating continuous learning attitude.",
    "To provide a platform for the interaction between academia and industry.",
    "To inculcate social values and responsible attitude amongst students through co-curricular and extracurricular activities."
  ];

  const innovMatch = rawHtml.match(/Unlock Your Innovative Potential with the ACPCE Innovation Cell[\s\S]*?(?=<)/);
  const facultyMatch = rawHtml.match(/Our faculty, made up of esteemed researchers[\s\S]*?(?=<)/);
  const hubMatch = rawHtml.match(/AC Patil College of Engineering: A Hub Where Innovation Flourishes[\s\S]*?(?=<)/);

  const courses = [
    {
      title: "Electrical Engineering",
      level: "UG Course, Ph.D Programme",
      slug: "electrical-engineering",
      image: "https://acpce.ac.in/wp-content/uploads/2025/09/Electrical-Engineering.png"
    },
    {
      title: "Electronics & Telecom",
      level: "UG Course",
      slug: "electronics-telecommunication",
      image: "https://acpce.ac.in/wp-content/uploads/2025/09/Electonics-and-Telecom.png"
    },
    {
      title: "Computer Engineering",
      level: "UG Course, Ph.D Programme",
      slug: "computer-engineering",
      image: "https://acpce.ac.in/wp-content/uploads/2025/09/Computer-Engineering.png"
    },
    {
      title: "Information Technology",
      level: "UG Course",
      slug: "information-technology",
      image: "https://acpce.ac.in/wp-content/uploads/2025/09/Information-Technology.png"
    },
    {
      title: "Mechanical Engineering",
      level: "UG Course",
      slug: "mechanical-engineering",
      image: "https://acpce.ac.in/wp-content/uploads/2025/09/Untitled-1.png"
    },
    {
      title: "AI & Data Science",
      level: "UG Course",
      slug: "artificial-intelligence-data-science",
      image: "https://acpce.ac.in/wp-content/uploads/2025/09/Ph.-D.png"
    },
    {
      title: "Computer Science IOT",
      level: "UG Course",
      slug: "computer-science-and-engineering",
      image: "https://acpce.ac.in/wp-content/uploads/2025/09/Computer-Science-IOT.png"
    },
    {
      title: "Aeronautical Engineering",
      level: "UG Course",
      slug: "aeronautical-engineering",
      image: "https://acpce.ac.in/wp-content/uploads/2026/06/gettyimages-544452127-1200x800-1-1024x683.jpg"
    },
    {
      title: "Management Studies",
      level: "PG Course",
      slug: "master-of-management-studies",
      image: "https://acpce.ac.in/wp-content/uploads/2025/09/Management-Studies.png"
    }
  ];

  return {
    heroTitle: "Everything plus imagination",
    heroSub,
    aboutText,
    ratio: "01 : 15",
    vision,
    missions,
    innovTitle: "A comprehensive approach to education with a focus on practical application",
    innovText: innovMatch ? cleanEntity(innovMatch[0]) : "",
    innovImage: "https://acpce.ac.in/wp-content/uploads/2025/06/DSC01539-1-e1749282564312.png",
    facultyTitle: "A vibrant community of engaged and accomplished scholars",
    facultyText: facultyMatch ? cleanEntity(facultyMatch[0]) : "",
    facultyImage: "https://acpce.ac.in/wp-content/uploads/2025/06/DSC01890-1-e1749283238908.png",
    hubTitle: "Experience the fusion of imagination and celebration at ACPCE",
    hubText: hubMatch ? cleanEntity(hubMatch[0]) : "",
    hubImage: "https://acpce.ac.in/wp-content/uploads/2025/06/hand-in-crowd-1-e1749288006976.png",
    courses
  };
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
        title: (p.title?.rendered || '')
          .replace(/&#8211;/g, '-')
          .replace(/&#038;|&amp;/g, '&')
          .replace(/&#8217;/g, "'")
          .replace(/<[^>]+>/g, ''),
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
