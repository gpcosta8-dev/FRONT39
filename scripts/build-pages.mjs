import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const result = spawnSync(process.execPath, [fileURLToPath(new URL('./run-vinext-build.mjs', import.meta.url)), 'build'], {
  cwd: root,
  stdio: 'inherit',
  env: {
    ...process.env,
    DEPLOY_TARGET: 'github-pages',
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '/FRONT39',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://gpcosta8-dev.github.io/FRONT39',
  },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
await import('./prepare-pages.mjs');
