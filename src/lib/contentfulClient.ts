import 'server-only';

import * as contentful from 'contentful';

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const contentfulClient = contentful.createClient({
  space: requiredEnv('CONTENTFUL_SPACE_ID'),
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  accessToken: requiredEnv('CONTENTFUL_ACCESS_TOKEN'),
});
