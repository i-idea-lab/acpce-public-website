'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationData } from '../data/navigation';
import {
  Phone,
  Mail,
  Search,
  Menu,
  X,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  }, [pathname]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md transition-all duration-200">
      {/* Top Notification / Utility Bar */}
      <div className="bg-[#0b1f33] text-gray-200 text-xs py-2 px-4 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6 flex-wrap">
            <div className="flex items-center space-x-1.5">
              <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-semibold text-[11px] border border-amber-500/30">
                DTE CODE: 3146
              </span>
              <span className="hidden sm:inline text-gray-400">|</span>
              <span className="text-gray-300 font-medium">NAAC Accredited Grade Institute</span>
            </div>
            <div className="hidden lg:flex items-center space-x-4 text-gray-300">
              <a href="tel:02227745722" className="flex items-center hover:text-amber-400 transition">
                <Phone className="w-3.5 h-3.5 mr-1 text-amber-400" />
                022 2774 5722 / 32
              </a>
              <a href="mailto:principal@acpce.ac.in" className="flex items-center hover:text-amber-400 transition">
                <Mail className="w-3.5 h-3.5 mr-1 text-amber-400" />
                principal@acpce.ac.in
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3 ml-auto">
            <a
              href="https://portal.vmedulife.com/public/auth/#/login/acpcoe-navi-mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-300 hover:text-amber-200 font-medium flex items-center"
            >
              ERP Login <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            <span className="text-gray-600">|</span>
            <Link
              href="/admission-enquiry"
              className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold px-3 py-1 rounded text-xs transition uppercase tracking-wider"
            >
              Admission 2026-27
            </Link>
          </div>
        </div>
      </div>

      {/* Main Branding & Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo & Institute Title */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-white rounded-lg p-1 border border-gray-200 shadow-sm flex items-center justify-center">
              <img
                src="https://acpce.ac.in/wp-content/uploads/2025/06/New-Logo-300x151-1.webp"
                alt="A. C. Patil College of Engineering Logo"
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-amber-600">
                  Jawahar Education Society's
                </span>
              </div>
              <h1 className="text-lg md:text-xl font-extrabold text-[#0f2b48] leading-tight tracking-tight">
                A. C. PATIL COLLEGE OF ENGINEERING
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                Approved by AICTE | Affiliated to University of Mumbai | Kharghar, Navi Mumbai
              </p>
            </div>
          </Link>

          {/* Right Action Icons (Search & Mobile Toggle) */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-gray-600 hover:text-[#0f2b48] hover:bg-gray-100 transition focus:outline-none cursor-pointer"
              title="Search website (180+ pages) - Press Ctrl+K"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Main Navigation Bar */}
      <nav className="hidden lg:block bg-[#0f2b48] text-white border-t border-blue-900/60 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center space-x-1 justify-between text-[13px] font-medium tracking-wide">
            <li className="py-2.5">
              <Link
                href="/"
                className={`px-3 py-2 rounded transition hover:bg-blue-900/80 ${
                  pathname === '/' ? 'text-amber-400 font-bold bg-blue-950/60' : 'text-gray-100'
                }`}
              >
                Home
              </Link>
            </li>

            {navigationData.map((item, idx) => {
              const hasChildren = item.children && item.children.length > 0;
              const isHovered = activeDropdown === item.title;

              return (
                <li
                  key={idx}
                  className="relative group py-2.5"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubDropdown(null);
                  }}
                >
                  {item.href ? (
                    item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded transition hover:bg-blue-900/80 text-gray-100 hover:text-amber-300 flex items-center"
                      >
                        {item.title}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-3 py-2 rounded transition hover:bg-blue-900/80 hover:text-amber-300 flex items-center ${
                          pathname === item.href ? 'text-amber-400 font-bold bg-blue-950/60' : 'text-gray-100'
                        }`}
                      >
                        {item.title}
                      </Link>
                    )
                  ) : (
                    <button
                      className={`px-3 py-2 rounded transition hover:bg-blue-900/80 hover:text-amber-300 flex items-center cursor-pointer ${
                        isHovered ? 'text-amber-400 bg-blue-900/60' : 'text-gray-100'
                      }`}
                    >
                      {item.title}
                      <ChevronDown className="w-3.5 h-3.5 ml-1 transition-transform group-hover:rotate-180" />
                    </button>
                  )}

                  {/* Level 1 Dropdown */}
                  {hasChildren && isHovered && (
                    <div className="absolute left-0 top-full pt-1 w-64 z-50">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2 text-gray-800">
                        {item.children!.map((subItem, sIdx) => {
                          const hasSubChildren = subItem.children && subItem.children.length > 0;
                          const isSubHovered = activeSubDropdown === subItem.title;

                          return (
                            <div
                              key={sIdx}
                              className="relative"
                              onMouseEnter={() => setActiveSubDropdown(subItem.title)}
                            >
                              {subItem.href ? (
                                subItem.isExternal ? (
                                  <a
                                    href={subItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between px-4 py-2 hover:bg-amber-50 hover:text-amber-700 text-xs font-medium text-gray-700 transition"
                                  >
                                    <span>{subItem.title}</span>
                                    <ExternalLink className="w-3 h-3 text-gray-400" />
                                  </a>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    className={`block px-4 py-2 hover:bg-amber-50 hover:text-amber-700 text-xs font-medium transition ${
                                      pathname === subItem.href
                                        ? 'bg-amber-100 text-amber-900 font-bold'
                                        : 'text-gray-700'
                                    }`}
                                  >
                                    {subItem.title}
                                  </Link>
                                )
                              ) : (
                                <div className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer">
                                  <span>{subItem.title}</span>
                                  <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400" />
                                </div>
                              )}

                              {/* Level 2 Sub-dropdown */}
                              {hasSubChildren && isSubHovered && (
                                <div className="absolute left-full top-0 pl-1 w-64 z-50">
                                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2 text-gray-800">
                                    {subItem.children!.map((nested, nIdx) => (
                                      <div key={nIdx}>
                                        {nested.isExternal ? (
                                          <a
                                            href={nested.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between px-4 py-2 hover:bg-amber-50 hover:text-amber-700 text-xs text-gray-700 transition"
                                          >
                                            <span className="truncate">{nested.title}</span>
                                            <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0 ml-1" />
                                          </a>
                                        ) : (
                                          <Link
                                            href={nested.href || '#'}
                                            className={`block px-4 py-2 hover:bg-amber-50 hover:text-amber-700 text-xs transition ${
                                              pathname === nested.href
                                                ? 'bg-amber-100 text-amber-900 font-bold'
                                                : 'text-gray-700'
                                            }`}
                                          >
                                            {nested.title}
                                          </Link>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 bg-white/95 backdrop-blur-md z-40 overflow-y-auto border-t border-gray-200 px-4 py-6 shadow-2xl">
          <div className="space-y-4">
            <Link
              href="/"
              className="block font-bold text-gray-900 text-base py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {navigationData.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-2">
                <div
                  className="flex items-center justify-between font-bold text-gray-800 py-2 cursor-pointer"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.title ? null : item.title)
                  }
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-800 hover:text-amber-600"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span>{item.title}</span>
                  )}
                  {item.children && (
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>

                {item.children && activeDropdown === item.title && (
                  <div className="pl-4 space-y-1.5 mt-1 border-l-2 border-amber-400">
                    {item.children.map((sub, sIdx) => (
                      <div key={sIdx}>
                        {sub.isExternal ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs text-gray-600 py-1.5 hover:text-amber-600"
                          >
                            <span>{sub.title}</span>
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        ) : (
                          <Link
                            href={sub.href || '#'}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs text-gray-600 py-1.5 hover:text-amber-600"
                          >
                            {sub.title}
                          </Link>
                        )}

                        {sub.children && (
                          <div className="pl-3 space-y-1 mt-1 border-l border-gray-200">
                            {sub.children.map((child, cIdx) => (
                              <div key={cIdx}>
                                {child.isExternal ? (
                                  <a
                                    href={child.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-[11px] text-gray-500 py-1 hover:text-amber-600"
                                  >
                                    <span>{child.title}</span>
                                    <ExternalLink className="w-2.5 h-2.5 ml-1" />
                                  </a>
                                ) : (
                                  <Link
                                    href={child.href || '#'}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-[11px] text-gray-500 py-1 hover:text-amber-600"
                                  >
                                    {child.title}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
