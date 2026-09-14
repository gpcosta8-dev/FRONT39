import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://front39-bjj.nutrimesalva.chatgpt.site/sitemap.xml' };
}
