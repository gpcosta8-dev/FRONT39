import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://front39-bjj.giving-melon-9980.chatgpt.site/sitemap.xml' };
}
