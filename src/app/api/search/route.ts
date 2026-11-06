import { NextResponse } from 'next/server';
import localPages from '../../../data/pages.json';
import type { PageData } from '../../../lib/wordpress';

interface WpSearchRawItem {
  id: number;
  slug: string;
  title?: {
    rendered?: string;
  };
  excerpt?: {
    rendered?: string;
  };
}

export interface SearchEntry {
  id: number;
  slug: string;
  title: string;
  url: string;
  excerpt: string;
  pdfCount?: number;
}

const WP_API_BASE = process.env.WP_API_BASE_URL || 'https://acpce.ac.in/wp-json/wp/v2';

export async function GET() {
  try {
    const [res1, res2] = await Promise.all([
      fetch(`${WP_API_BASE}/pages?per_page=100&page=1&_fields=id,slug,title,excerpt`, {
        next: { revalidate: 600 }
      }),
      fetch(`${WP_API_BASE}/pages?per_page=100&page=2&_fields=id,slug,title,excerpt`, {
        next: { revalidate: 600 }
      })
    ]);

    if (res1.ok) {
      const data1: unknown = await res1.json();
      const data2: unknown = res2.ok ? await res2.json() : [];
      const arr1 = Array.isArray(data1) ? (data1 as WpSearchRawItem[]) : [];
      const arr2 = Array.isArray(data2) ? (data2 as WpSearchRawItem[]) : [];
      const combined = [...arr1, ...arr2];

      const searchItems: SearchEntry[] = combined.map((p) => {
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
  const typedLocalPages = localPages as Record<string, PageData>;
  const fallbackItems: SearchEntry[] = Object.values(typedLocalPages).map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    url: p.url,
    excerpt: p.excerpt,
    pdfCount: p.pdfCount
  }));

  return NextResponse.json(fallbackItems);
}
