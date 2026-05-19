import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hermesmissionfreedom.ai',
  output: 'static',
  integrations: [tailwind()],
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});