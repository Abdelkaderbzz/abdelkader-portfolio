'use client';

import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { HashScroll } from '@/components/HashScroll';
import { SiteContext } from '@/components/site-context';

function CalWidget() {
  useEffect(() => {
    let cancelled = false;
    const calLink = process.env.NEXT_PUBLIC_CAL_LINK || 'abdelkader/30min';

    const load = () => {
      if (cancelled) return;
      void import('@calcom/embed-react').then(async ({ getCalApi }) => {
        if (cancelled) return;
        const cal = await getCalApi({ namespace: '30min' });
        cal('floatingButton', {
          calLink,
          buttonPosition: 'bottom-left',
          config: { layout: 'month_view', theme: 'light' },
        });
        cal('ui', {
          theme: 'light',
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      });
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(load, { timeout: 4000 });
    } else {
      timeoutId = setTimeout(load, 2500);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  return null;
}

export function Providers({
  children,
  cvUrl,
}: {
  children: ReactNode;
  cvUrl: string;
}) {
  const value = useMemo(() => ({ cvUrl }), [cvUrl]);
  const [showToasts, setShowToasts] = useState(false);

  useEffect(() => {
    setShowToasts(true);
  }, []);

  return (
    <SiteContext.Provider value={value}>
      <TooltipProvider delayDuration={300}>
        <HashScroll />
        <CalWidget />
        {children}
        {showToasts ? (
          <>
            <Toaster />
            <Sonner />
          </>
        ) : null}
      </TooltipProvider>
    </SiteContext.Provider>
  );
}
