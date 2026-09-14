export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://front39-bjj.nutrimesalva.chatgpt.site';

export function sitePath(path: string) {
  return `${siteBasePath}${path}`;
}
