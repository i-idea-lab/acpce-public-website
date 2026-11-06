'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, FileText, ArrowRight } from 'lucide-react';
import type { SearchEntry } from '../app/api/search/route';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [allPages, setAllPages] = useState<SearchEntry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    fetch('/api/search')
      .then((res) => res.json())
      .then((data: unknown) => {
        if (Array.isArray(data)) {
          setAllPages(data as SearchEntry[]);
        } else if (data && typeof data === 'object') {
          setAllPages(Object.values(data) as SearchEntry[]);
        }
      })
      .catch((err) => console.error('Failed to load search data:', err));

    const timer = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || q.length < 2) return [];

    const matches: SearchEntry[] = [];

    for (const page of allPages) {
      const titleMatch = (page.title || '').toLowerCase().includes(q);
      const contentMatch = (page.excerpt || '').toLowerCase().includes(q);

      if (titleMatch || contentMatch) {
        matches.push({
          id: page.id,
          slug: page.slug,
          title: page.title,
          excerpt: page.excerpt,
          url: page.url,
          pdfCount: page.pdfCount || 0
        });
      }
      if (matches.length >= 15) break;
    }

    return matches;
  }, [query, allPages]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-950/70 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-200">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-gray-200 flex items-center space-x-3 bg-gray-50">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all 180+ pages (e.g., Computer Engineering, NAAC, Fees, Syllabus)..."
            className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 text-sm md:text-base font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-gray-400 hover:text-gray-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="px-2.5 py-1 text-xs font-semibold text-gray-500 hover:text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-md transition cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          {query.trim().length < 2 ? (
            <div className="py-8 text-center text-gray-400 text-sm">
              <p>Type at least 2 characters to search across all courses, criteria, notifications, and reports.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Admissions', 'NAAC', 'Computer Engineering', 'Fee Structure', 'Placements', 'Library'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs bg-gray-100 hover:bg-amber-100 hover:text-amber-800 text-gray-600 px-3 py-1 rounded-full transition cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-gray-500 text-sm">
              No matching pages found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            results.map((res) => (
              <Link
                key={res.slug}
                href={res.url}
                onClick={handleClose}
                className="block p-3 rounded-xl hover:bg-blue-50/60 border border-transparent hover:border-blue-100 transition group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-900 text-sm flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-amber-500" />
                    {res.title}
                  </h4>
                  {res.pdfCount != null && res.pdfCount > 0 && (
                    <span className="text-[10px] bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded-full">
                      {res.pdfCount} PDF{res.pdfCount > 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {res.excerpt}
                </p>
                <div className="text-[11px] text-blue-600 mt-1 font-medium flex items-center">
                  <span>acpce.ac.in{res.url}</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
