import type { NextConfig } from 'next';

const nextConfig: NextConfig = process.env.DEPLOY_TARGET === 'github-pages' ? {
  output: 'export',
  // Asset URLs include the Pages project path; prerender the page at its root.
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/FRONT39',
  // Vinext beta prerenders /bio without following its own trailing-slash 308.
  // prepare-pages.mjs creates directory indexes for the public /bio/ URL.
  trailingSlash: false,
  images: { unoptimized: true },
} : {};

export default nextConfig;
