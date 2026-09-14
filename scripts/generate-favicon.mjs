import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const source = await readFile(new URL('../public/images/front39-original.svg', import.meta.url), 'utf8');
const artwork = source.replace(/^[\s\S]*?<svg\b[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const roundSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1079 1079">
  <defs><clipPath id="round"><circle cx="539.5" cy="536.5" r="534"/></clipPath></defs>
  <g transform="translate(0 3)"><g clip-path="url(#round)">${artwork}</g></g>
</svg>`);

const pngs = new Map();
for (const size of [16, 32, 48, 96]) {
  const png = await sharp(roundSvg).resize(size, size).png().toBuffer();
  pngs.set(size, png);
  if (size === 32 || size === 96) {
    await writeFile(new URL(`../public/favicon-round-${size}.png`, import.meta.url), png);
  }
}

const sizes = [16, 32, 48];
const directory = Buffer.alloc(6 + 16 * sizes.length);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
for (const [index, size] of sizes.entries()) {
  const png = pngs.get(size);
  const entry = 6 + index * 16;
  directory[entry] = size;
  directory[entry + 1] = size;
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(png.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += png.length;
}
await writeFile(new URL('../public/favicon.ico', import.meta.url), Buffer.concat([directory, ...sizes.map(size => pngs.get(size))]));
console.log('Generated transparent round FRONT39 favicons (16, 32, 48 and 96px).');
