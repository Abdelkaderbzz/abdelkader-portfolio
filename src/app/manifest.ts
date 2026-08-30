import type { MetadataRoute } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} Portfolio`,
    short_name: 'Abdelkader',
    description:
      'Software Engineer portfolio — selected work, writing, and contact.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f0e8',
    theme_color: '#f5f0e8',
    icons: [
      {
        src: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/images/rounded.png',
        sizes: '768x768',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    lang: 'en',
    id: SITE_URL,
  };
}
