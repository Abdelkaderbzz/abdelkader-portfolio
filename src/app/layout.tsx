import type { Metadata } from 'next';
import { Fraunces, Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import { Providers } from './providers';
import { personJsonLd, websiteJsonLd } from '@/lib/seo';
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
} from '@/lib/site';
import './globals.css';

export const revalidate = 3600;

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Software Engineer`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: `${SITE_NAME} Portfolio`,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'technology',
  keywords: [
    'Abdelkader Bouzomita',
    'Software Engineer',
    'Frontend Developer',
    'Revixa',
    'portfolio',
    'web developer',
    'React',
    'TypeScript',
    'Next.js',
    'UI',
    'UX',
    'Sousse',
    'Tunisia',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: `${SITE_NAME} Portfolio`,
    title: `${SITE_NAME} | Software Engineer`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Software Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Software Engineer`,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
    creator: '@abdelkaderbouzomita',
    site: '@abdelkaderbouzomita',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/manifest.webmanifest',
  other: {
    'theme-color': '#f5f0e8',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Keep the root layout free of CMS calls so /_not-found can build without Contentful.
  const cvUrl = '/Abdelkader-bouzomita_CV.pdf';
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const feeduserToken = process.env.NEXT_PUBLIC_FEEDUSER_TOKEN;
  const structuredData = [personJsonLd(), websiteJsonLd()];

  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${fraunces.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
        {umamiId ? (
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id={umamiId}
            strategy="lazyOnload"
          />
        ) : null}
        {feeduserToken ? (
          <Script id="feeduser-widget" strategy="lazyOnload">
            {`window.Fu=window.Fu||{};Fu.access_token=${JSON.stringify(feeduserToken)};(function(d){var s=d.createElement("script");s.async=true;s.defer=true;s.src="https://widget.feeduser.me/widget/v1.js";(d.head||d.body).appendChild(s);})(document);`}
          </Script>
        ) : null}
        <Providers cvUrl={cvUrl}>{children}</Providers>
      </body>
    </html>
  );
}
