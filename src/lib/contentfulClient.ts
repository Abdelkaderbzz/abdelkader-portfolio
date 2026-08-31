import 'server-only';

import * as contentful from 'contentful';

type ContentfulClient = ReturnType<typeof contentful.createClient>;

let client: ContentfulClient | null = null;

export function hasContentfulConfig() {
  return Boolean(
    process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
  );
}

export function getContentfulClient(): ContentfulClient {
  if (client) return client;

  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!space || !accessToken) {
    throw new Error(
      'Missing Contentful env vars. Set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in your host (e.g. Netlify Site settings → Environment variables).'
    );
  }

  client = contentful.createClient({
    space,
    environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
    accessToken,
  });

  return client;
}
