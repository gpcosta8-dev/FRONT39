import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const client = resolve(root, 'dist/client');
const output = resolve(root, 'out');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/FRONT39';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gpcosta8-dev.github.io/FRONT39';
const assetDirectory = basePath.replace(/^\/+|\/+$/g, '');

if (basePath !== '' && !/^\/[A-Za-z0-9_-]+$/.test(basePath)) throw new Error('Use an empty base path or a single project path, for example /FRONT39.');
if (!existsSync(resolve(client, 'index.html'))) throw new Error('The static homepage was not generated.');
if (output !== resolve(root, 'out') || !output.startsWith(resolve(root) + sep)) throw new Error('Invalid output directory.');
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

// GitHub already mounts the artifact at /FRONT39; avoid a second nested prefix.
for (const entry of readdirSync(client)) {
  if (entry === assetDirectory || entry === '.vite') continue;
  cpSync(resolve(client, entry), resolve(output, entry), { recursive: true });
}
if (assetDirectory) cpSync(resolve(client, assetDirectory), output, { recursive: true });
writeFileSync(resolve(output, '.nojekyll'), '');
// Keep the site's existing error page instead of the exporter's generic 404.
const custom404 = resolve(root, 'public/404.html');
if (existsSync(custom404)) writeFileSync(resolve(output, '404.html'), readFileSync(custom404, 'utf8').replace(/(href|src)="\/(?!\/)/g, `$1="${basePath}/`));

// Vinext's static exporter currently omits generated metadata routes.
writeFileSync(resolve(output, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
const routes = [{ path: '/', title: 'Mude sua vida.', priority: 1 }, { path: '/bio/', title: 'Seu primeiro passo | FRONT39', priority: 0.8 }];
writeFileSync(resolve(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>${siteUrl}${route.path}</loc><changefreq>monthly</changefreq><priority>${route.priority}</priority></url>`).join('')}</urlset>\n`);

const assetUrls = new Set();
const routeUrls = new Set(routes.map(route => `${basePath}${route.path}`));
for (const route of routes) {
  const page = resolve(output, `.${route.path}`, 'index.html');
  if (route.path !== '/' && !existsSync(page)) {
    const flatPage = resolve(output, `${route.path.slice(1, -1)}.html`);
    if (existsSync(flatPage)) {
      mkdirSync(resolve(output, `.${route.path}`), { recursive: true });
      cpSync(flatPage, page);
    }
  }
  if (!existsSync(page)) throw new Error(`Static page was not generated: ${route.path}`);
  let html = readFileSync(page, 'utf8');
  if (route.path === '/') {
    html = html.replace(`rel="canonical" href="${siteUrl}"`, `rel="canonical" href="${siteUrl}/"`);
    writeFileSync(page, html);
  }
  const urls = [...html.matchAll(/(?:src|href)="(\/[^"?#]+)(?:[?#][^"]*)?"/g)].map(match => match[1]);
  urls.push(...[...html.matchAll(/\bsrcset="([^"]+)"/gi)].flatMap(match => match[1].split(',').map(candidate => candidate.trim().split(/\s+/)[0])).filter(url => url.startsWith('/')));
  for (const url of urls) {
    if (routeUrls.has(url)) continue;
    if (!url.startsWith(`${basePath}/`)) throw new Error(`Asset is missing the Pages prefix: ${url}`);
    const target = resolve(output, decodeURIComponent(url.slice(basePath.length + 1)));
    if (!target.startsWith(output + sep) || !existsSync(target)) throw new Error(`Missing Pages asset: ${url}`);
    assetUrls.add(url);
  }
  if (!html.includes(`${siteUrl}${route.path}`) || !html.includes(route.title)) throw new Error(`The exported page is incomplete: ${route.path}`);
}
console.log(`Static site: out/ ready, ${routes.length} pages and ${assetUrls.size} assets verified.`);
