import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  Download,
  ExternalLink,
  ChevronRight,
  BookOpen,
  ArrowLeft
} from 'lucide-react';
import { getWordPressPage } from '../../lib/wordpress';
import localPages from '../../data/pages.json';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getWordPressPage(slug);

  if (!page) {
    return {
      title: 'Page Not Found | A. C. Patil College of Engineering'
    };
  }

  return {
    title: `${page.title} | A. C. Patil College of Engineering`,
    description: page.excerpt || 'A. C. Patil College of Engineering (ACPCE), Navi Mumbai.'
  };
}

// Generate static routes for the most popular pages at build time
export async function generateStaticParams() {
  const slugs = Object.keys(localPages);
  // Pre-generate top 25 popular pages, rest will be ISR on-demand
  return slugs.slice(0, 25).map((slug) => ({
    slug
  }));
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = await getWordPressPage(slug);

  if (!pageData) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6 flex-wrap">
          <Link href="/" className="hover:text-amber-600 transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-400">Pages</span>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#0f2b48] font-semibold truncate max-w-xs sm:max-w-md">
            {pageData.title}
          </span>
        </nav>

        {/* Page Header Banner */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-8 relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-blue-50/60 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-2">
                A. C. Patil College of Engineering
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#0f2b48] tracking-tight">
                {pageData.title}
              </h1>
              <p className="text-xs text-gray-400 mt-2 flex items-center gap-3">
                <span>URL: <code className="text-gray-600 font-mono">https://acpce.ac.in/{pageData.slug}/</code></span>
                {pageData.pdfCount > 0 && (
                  <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded font-medium">
                    {pageData.pdfCount} Official Document{pageData.pdfCount > 1 ? 's' : ''} attached
                  </span>
                )}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-2">
              <a
                href={`https://acpce.ac.in/${pageData.slug}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition"
                title="View original on live WordPress site"
              >
                Original Live Page <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article Content */}
          <main className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-10">
              {/* Document/PDF Highlights if any */}
              {pageData.pdfs && pageData.pdfs.length > 0 && (
                <div className="mb-8 p-4 md:p-6 bg-gradient-to-r from-blue-50/80 to-amber-50/40 rounded-xl border border-blue-100">
                  <h3 className="text-sm font-bold text-[#0f2b48] uppercase tracking-wide flex items-center mb-3">
                    <Download className="w-4 h-4 mr-2 text-amber-600" />
                    Available Downloads & Official PDFs ({pageData.pdfs.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {pageData.pdfs.map((pdfUrl: string, idx: number) => {
                      const filename = decodeURIComponent(
                        pdfUrl.split('/').pop()?.replace('.pdf', '') || `Document ${idx + 1}`
                      ).replace(/[-_]/g, ' ');
                      return (
                        <a
                          key={idx}
                          href={pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-amber-400 hover:shadow-sm transition group"
                        >
                          <div className="flex items-center space-x-2.5 overflow-hidden">
                            <div className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 font-bold text-[10px]">
                              PDF
                            </div>
                            <span className="text-xs font-medium text-gray-800 group-hover:text-blue-900 truncate capitalize">
                              {filename}
                            </span>
                          </div>
                          <Download className="w-3.5 h-3.5 text-gray-400 group-hover:text-amber-600 flex-shrink-0 ml-2" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Injected Clean HTML Content from WordPress */}
              <div
                className="wp-content-view prose prose-blue max-w-none prose-img:rounded-xl prose-headings:text-[#0f2b48]"
                dangerouslySetInnerHTML={{ __html: pageData.html }}
              />
            </div>
          </main>

          {/* Right Sidebar: Quick Navigation & Help */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Admissions Banner Widget */}
            <div className="bg-gradient-to-br from-[#0f2b48] to-[#1b3a5b] text-white rounded-2xl p-6 shadow-md border border-blue-900">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                Admissions 2026-27
              </span>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                Study Engineering at A. C. Patil
              </h3>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                Join our NAAC-accredited undergraduate and postgraduate degree programs affiliated with Mumbai University.
              </p>
              <div className="space-y-2">
                <Link
                  href="/admission-criteria"
                  className="block text-center w-full py-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-xs rounded-lg transition"
                >
                  Admission Criteria
                </Link>
                <Link
                  href="/fees-structure"
                  className="block text-center w-full py-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded-lg transition"
                >
                  View Fee Structure
                </Link>
              </div>
            </div>

            {/* Direct Contacts Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                Need Assistance?
              </h4>
              <p className="text-xs text-gray-600 mb-4">
                Have questions regarding syllabus, admissions, or verification?
              </p>
              <div className="space-y-2 text-xs">
                <div className="font-semibold text-gray-800">College Administration:</div>
                <div className="text-gray-600">Tel: 022 2774 5722 / 32</div>
                <div className="text-gray-600">Email: principal@acpce.ac.in</div>
                <div className="pt-2">
                  <Link href="/contact-us" className="text-amber-600 hover:text-amber-700 font-semibold flex items-center">
                    Visit Campus & Contact Info <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                Key Accreditations
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/naac-cycle-2" className="text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="w-3 h-3 mr-1 text-gray-400" /> NAAC Cycle 2 Information
                  </Link>
                </li>
                <li>
                  <Link href="/aqar" className="text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="w-3 h-3 mr-1 text-gray-400" /> AQAR Reports
                  </Link>
                </li>
                <li>
                  <Link href="/placement" className="text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="w-3 h-3 mr-1 text-gray-400" /> Placement Records
                  </Link>
                </li>
                <li>
                  <Link href="/statutory-bodies" className="text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="w-3 h-3 mr-1 text-gray-400" /> Statutory Bodies
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
