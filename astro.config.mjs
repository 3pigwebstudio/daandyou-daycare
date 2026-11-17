import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dnucare.co.kr',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
