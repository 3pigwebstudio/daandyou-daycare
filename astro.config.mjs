import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://daandyou-daycare.3pig-webstudio.workers.dev',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
