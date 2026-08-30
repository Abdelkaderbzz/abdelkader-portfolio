'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function scrollToHash(hash: string) {
  if (!hash) return;
  const element = document.querySelector(hash);
  if (!element) return;
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - 80,
    behavior: 'smooth',
  });
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;
    const hash = window.location.hash;
    if (!hash) return;
    const timer = window.setTimeout(() => scrollToHash(hash), 80);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => scrollToHash(window.location.hash);

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.includes('#')) return;

      const url = new URL(href, window.location.origin);
      if (url.pathname !== pathname && url.pathname !== '/') return;
      if (url.pathname === '/' && pathname !== '/') return;

      const hash = url.hash;
      if (!hash) return;
      const element = document.querySelector(hash);
      if (!element) return;

      event.preventDefault();
      window.history.pushState(null, '', `${url.pathname}${hash}`);
      scrollToHash(hash);
    };

    window.addEventListener('hashchange', onHashChange);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      document.removeEventListener('click', onClick);
    };
  }, [pathname]);

  return null;
}
