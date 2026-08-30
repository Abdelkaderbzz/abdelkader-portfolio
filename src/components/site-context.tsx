'use client';

import { createContext, useContext } from 'react';

type SiteContextValue = {
  cvUrl: string;
};

export const SiteContext = createContext<SiteContextValue>({
  cvUrl: '/Abdelkader-bouzomita_CV.pdf',
});

export function useSite() {
  return useContext(SiteContext);
}
