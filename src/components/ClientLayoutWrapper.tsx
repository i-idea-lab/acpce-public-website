'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import { SearchModal } from './SearchModal';

const normalizeRoutePath = (path: string) => path.replace(/\/+$/, '') || '/';

/**
 * Slim fixed top progress bar that activates immediately on internal route clicks
 * and completes smoothly once Next.js finishes transitioning to the new pathname.
 */
const TopNavigationProgress: React.FC = () => {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement | null>(null);
  const lastPathRef = useRef<string>(normalizeRoutePath(pathname));
  const isActiveRef = useRef(false);
  const progressRef = useRef(0);
  const trickleTimerRef = useRef<number | null>(null);
  const finishTimerRef = useRef<number | null>(null);
  const resetTimerRef = useRef<number | null>(null);
  const safetyTimerRef = useRef<number | null>(null);

  const clearAllTimers = useCallback(() => {
    if (trickleTimerRef.current !== null) {
      window.clearInterval(trickleTimerRef.current);
      trickleTimerRef.current = null;
    }
    if (finishTimerRef.current !== null) {
      window.clearTimeout(finishTimerRef.current);
      finishTimerRef.current = null;
    }
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
    if (safetyTimerRef.current !== null) {
      window.clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
  }, []);

  const completeProgress = useCallback(() => {
    if (!isActiveRef.current) return;
    clearAllTimers();
    isActiveRef.current = false;

    const bar = barRef.current;
    if (!bar) return;

    bar.style.transition = 'width 180ms ease-out, opacity 220ms ease';
    bar.style.width = '100%';
    bar.style.opacity = '1';

    finishTimerRef.current = window.setTimeout(() => {
      if (!barRef.current) return;
      barRef.current.style.opacity = '0';

      resetTimerRef.current = window.setTimeout(() => {
        if (!barRef.current) return;
        barRef.current.style.transition = 'none';
        barRef.current.style.width = '0%';
        progressRef.current = 0;
      }, 220);
    }, 180);
  }, [clearAllTimers]);

  const startProgress = useCallback(() => {
    const bar = barRef.current;
    if (!bar) return;

    clearAllTimers();
    isActiveRef.current = true;
    progressRef.current = 18;

    bar.style.transition = 'none';
    bar.style.width = '0%';
    bar.style.opacity = '1';
    void bar.offsetWidth;

    bar.style.transition = 'width 260ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease';
    bar.style.width = '18%';

    trickleTimerRef.current = window.setInterval(() => {
      if (!barRef.current || !isActiveRef.current) return;
      progressRef.current = Math.min(92, progressRef.current + (92 - progressRef.current) * 0.16);
      barRef.current.style.width = `${progressRef.current.toFixed(1)}%`;
    }, 180);

    safetyTimerRef.current = window.setTimeout(() => {
      completeProgress();
    }, 15000);
  }, [clearAllTimers, completeProgress]);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;

      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const rawHref = anchor.getAttribute('href');
      if (!rawHref || rawHref.startsWith('#') || /^(mailto:|tel:|javascript:)/i.test(rawHref)) {
        return;
      }

      try {
        const targetUrl = new URL(anchor.href, window.location.href);
        if (targetUrl.origin !== window.location.origin) return;

        const isSameRoute =
          normalizeRoutePath(targetUrl.pathname) === normalizeRoutePath(window.location.pathname) &&
          targetUrl.search === window.location.search;
        if (isSameRoute) return;

        startProgress();
      } catch {
        // Ignore malformed URLs safely
      }
    };

    const handlePopState = () => {
      if (normalizeRoutePath(window.location.pathname) !== lastPathRef.current) {
        startProgress();
      }
    };

    document.addEventListener('click', handleDocumentClick, true);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
      window.removeEventListener('popstate', handlePopState);
      clearAllTimers();
    };
  }, [startProgress, clearAllTimers]);

  useEffect(() => {
    lastPathRef.current = normalizeRoutePath(pathname);
    completeProgress();
  }, [pathname, completeProgress]);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none"
    >
      <div
        ref={barRef}
        className="h-full w-0 opacity-0 bg-gradient-to-r from-amber-500 via-amber-300 to-yellow-200 shadow-[0_0_10px_rgba(245,158,11,0.9)]"
      />
    </div>
  );
};

export const ClientLayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-gray-950">
      <TopNavigationProgress />
      <Header onOpenSearch={() => setIsSearchOpen(true)} />
      <div className="flex-grow">{children}</div>
      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};
