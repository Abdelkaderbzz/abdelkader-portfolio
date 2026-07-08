export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/\.(sa|com|me|app|net|life)$/i, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
