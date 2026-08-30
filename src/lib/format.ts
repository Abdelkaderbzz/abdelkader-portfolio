export function assetUrl(url?: string | null): string | undefined {
  if (!url) return undefined;
  if (url.startsWith('//')) return `https:${url}`;
  return url;
}

export function getDisplayTitle(slug: string, title: string) {
  return slug === 'thekey' || title.toLowerCase() === 'thekey'
    ? 'The Key'
    : title;
}
