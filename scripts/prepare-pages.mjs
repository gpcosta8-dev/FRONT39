import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const client = resolve(root, 'dist/client');
const output = resolve(root, 'out');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/FRONT39';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gpcosta8-dev.github.io/FRONT39';
const assetDirectory = basePath.replace(/^\/+|\/+$/g, '');

if (!/^\/[A-Za-z0-9_-]+$/.test(basePath)) throw new Error('Pages requires a single project path, for example /FRONT39.');
if (!existsSync(resolve(client, 'index.html'))) throw new Error('The static homepage was not generated.');
if (output !== resolve(root, 'out') || !output.startsWith(resolve(root) + sep)) throw new Error('Invalid output directory.');
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

// GitHub already mounts the artifact at /FRONT39; avoid a second nested prefix.
for (const entry of readdirSync(client)) {
  if (entry === assetDirectory || entry === '.vite') continue;
  cpSync(resolve(client, entry), resolve(output, entry), { recursive: true });
}
cpSync(resolve(client, assetDirectory), output, { recursive: true });
writeFileSync(resolve(output, '.nojekyll'), '');

// Vinext's static exporter currently omits generated metadata routes.
writeFileSync(resolve(output, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
writeFileSync(resolve(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}/</loc><changefreq>monthly</changefreq><priority>1</priority></url></urlset>\n`);

const html = readFileSync(resolve(output, 'index.html'), 'utf8');
const assetUrls = [...html.matchAll(/(?:src|href)="(\/[^"?#]+)(?:[?#][^"]*)?"/g)].map(match => match[1]);
for (const url of new Set(assetUrls)) {
  if (!url.startsWith(`${basePath}/`)) throw new Error(`Asset is missing the Pages prefix: ${url}`);
  const target = resolve(output, decodeURIComponent(url.slice(basePath.length + 1)));
  if (!target.startsWith(output + sep) || !existsSync(target)) throw new Error(`Missing Pages asset: ${url}`);
}
if (!html.includes(`${siteUrl}/`) || !html.includes('Mude sua vida.')) throw new Error('The exported homepage is incomplete.');
console.log(`GitHub Pages: out/ ready, ${new Set(assetUrls).size} homepage assets verified.`);
