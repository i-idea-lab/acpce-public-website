'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationData, type NavItem } from '../data/navigation';
import {
  Phone,
  Mail,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
}

interface DesktopDropdownMenuProps {
  items: NavItem[];
  pathname: string;
  onClose: () => void;
  alignRight?: boolean;
}

/**
 * Recursive desktop flyout dropdown supporting arbitrary live menu nesting depth.
 */
const DesktopDropdownMenu: React.FC<DesktopDropdownMenuProps> = ({
  items,
  pathname,
  onClose,
  alignRight = false
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-1.5 w-60 text-gray-800">
      {items.map((subItem, idx) => {
        const hasChildren = Boolean(subItem.children && subItem.children.length > 0);
        const isHovered = hoveredIdx === idx;
        const isActive = Boolean(subItem.href && !subItem.isExternal && pathname === subItem.href);

        const rowClasses = `flex items-center justify-between px-3.5 py-2 text-xs leading-snug transition cursor-pointer ${
          isActive
            ? 'bg-amber-100 text-amber-900 font-bold'
            : isHovered
              ? 'bg-amber-50 text-amber-700 font-semibold'
              : hasChildren && !subItem.href
                ? 'font-semibold text-gray-900'
                : 'font-medium text-gray-700'
        }`;

        const trailingIcon = hasChildren ? (
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 ml-2" />
        ) : subItem.isExternal ? (
          <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0 ml-2" />
        ) : null;

        return (
          <div
            key={`${subItem.title}-${idx}`}
            className="relative"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {subItem.href ? (
              subItem.isExternal ? (
                <a
                  href={subItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className={rowClasses}
                >
                  <span>{subItem.title}</span>
                  {trailingIcon}
                </a>
              ) : (
                <Link href={subItem.href} onClick={onClose} className={rowClasses}>
                  <span>{subItem.title}</span>
                  {trailingIcon}
                </Link>
              )
            ) : (
              <div className={rowClasses}>
                <span>{subItem.title}</span>
                {trailingIcon}
              </div>
            )}

            {hasChildren && isHovered && (
              <div
                className={`absolute top-0 z-50 ${
                  alignRight ? 'right-full pr-1.5' : 'left-full pl-1.5'
                }`}
              >
                <DesktopDropdownMenu
                  items={subItem.children!}
                  pathname={pathname}
                  onClose={onClose}
                  alignRight={alignRight}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

interface MobileNavItemProps {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
  depth?: number;
}

/**
 * Recursive accordion navigation item for the mobile drawer menu.
 */
const MobileNavItem: React.FC<MobileNavItemProps> = ({
  item,
  pathname,
  onNavigate,
  depth = 0
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = Boolean(item.children && item.children.length > 0);
  const isActive = Boolean(item.href && !item.isExternal && pathname === item.href);

  const labelClasses =
    depth === 0
      ? `font-bold text-sm py-2 ${isActive ? 'text-amber-700' : 'text-gray-800 hover:text-amber-600'}`
      : `text-xs py-1.5 ${isActive ? 'text-amber-700 font-bold' : 'text-gray-600 hover:text-amber-600'}`;

  return (
    <div className={depth === 0 ? 'border-b border-gray-100 pb-1.5' : ''}>
      <div className="flex items-center justify-between gap-2">
        {item.href ? (
          item.isExternal ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onNavigate}
              className={`flex-1 flex items-center gap-1.5 ${labelClasses}`}
            >
              <span>{item.title}</span>
              <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
            </a>
          ) : (
            <Link href={item.href} onClick={onNavigate} className={`flex-1 block ${labelClasses}`}>
              {item.title}
            </Link>
          )
        ) : (
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={`flex-1 text-left cursor-pointer ${labelClasses} ${depth > 0 ? 'font-semibold text-gray-800' : ''}`}
          >
            {item.title}
          </button>
        )}

        {hasChildren && (
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={`Toggle ${item.title} submenu`}
            className="p-1.5 text-gray-500 hover:text-amber-600 cursor-pointer"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </div>

      {hasChildren && isOpen && (
        <div
          className={`pl-3.5 space-y-1 mt-1 border-l-2 ${
            depth === 0 ? 'border-amber-400' : 'border-gray-200'
          }`}
        >
          {item.children!.map((child, idx) => (
            <MobileNavItem
              key={`${child.title}-${idx}`}
              item={child}
              pathname={pathname}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

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
                  Jawahar Education Society&apos;s
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
          <ul className="flex items-center justify-between text-[13px] font-medium tracking-wide">
            {navigationData.map((item, idx) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isHovered = activeDropdown === item.title;
              const alignRight = idx >= navigationData.length - 3;

              return (
                <li
                  key={item.title}
                  className="relative group py-2.5"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.href ? (
                    item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenus}
                        className="px-3 py-2 rounded transition hover:bg-blue-900/80 text-gray-100 hover:text-amber-300 flex items-center"
                      >
                        {item.title}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenus}
                        className={`px-3 py-2 rounded transition hover:bg-blue-900/80 hover:text-amber-300 flex items-center ${
                          pathname === item.href ? 'text-amber-400 font-bold bg-blue-950/60' : 'text-gray-100'
                        }`}
                      >
                        {item.title}
                      </Link>
                    )
                  ) : (
                    <button
                      type="button"
                      className={`px-3 py-2 rounded transition hover:bg-blue-900/80 hover:text-amber-300 flex items-center cursor-pointer ${
                        isHovered ? 'text-amber-400 bg-blue-900/60' : 'text-gray-100'
                      }`}
                    >
                      {item.title}
                      <ChevronDown className="w-3.5 h-3.5 ml-1 transition-transform group-hover:rotate-180" />
                    </button>
                  )}

                  {hasChildren && isHovered && (
                    <div className={`absolute top-full pt-1 z-50 ${alignRight ? 'right-0' : 'left-0'}`}>
                      <DesktopDropdownMenu
                        items={item.children!}
                        pathname={pathname}
                        onClose={closeMenus}
                        alignRight={alignRight}
                      />
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
          <div className="space-y-3">
            <Link
              href="/"
              className="block font-bold text-gray-900 text-sm py-2 border-b border-gray-100"
              onClick={closeMenus}
            >
              Home
            </Link>

            {navigationData.map((item) => (
              <MobileNavItem
                key={item.title}
                item={item}
                pathname={pathname}
                onNavigate={closeMenus}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
