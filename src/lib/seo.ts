import {
  SITE_AVATAR,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SAME_AS,
  SITE_URL,
} from '@/lib/site';

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${SITE_AVATAR}`,
    sameAs: [...SITE_SAME_AS],
    jobTitle: 'Software Engineer',
    description: SITE_DESCRIPTION,
    worksFor: {
      '@type': 'Organization',
      name: 'Revixa',
      url: 'https://www.revixa.agency/',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sousse',
      addressCountry: 'TN',
    },
    knowsAbout: [
      'Software Engineering',
      'Frontend Development',
      'React',
      'TypeScript',
      'Next.js',
      'Web Design',
      'E-commerce',
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: `${SITE_NAME} Portfolio`,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#person` },
    inLanguage: 'en',
  };
}

export function caseStudyJsonLd({
  title,
  description,
  slug,
  image,
  datePublished,
  keywords,
}: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  datePublished?: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    headline: title,
    description,
    url: `${SITE_URL}/work/${slug}`,
    image: image ? [image] : undefined,
    author: { '@id': `${SITE_URL}/#person` },
    creator: { '@id': `${SITE_URL}/#person` },
    datePublished,
    keywords: keywords?.join(', '),
    inLanguage: 'en',
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };
}
