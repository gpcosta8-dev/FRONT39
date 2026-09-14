import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://front39-bjj.nutrimesalva.chatgpt.site/', changeFrequency: 'monthly', priority: 1 }];
}
