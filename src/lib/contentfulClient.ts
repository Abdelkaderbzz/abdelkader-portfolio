import * as contentful from 'contentful';

export const contentfulClient = contentful.createClient({
  space: '3k73j1bqwg64',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'EyZ_Ynxs4P1R-hj1jM_WR63P8b9YR-coGhyfRcSRF7Q',
});
