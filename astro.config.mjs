import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.hermesdispatch.dev',
  output: 'static',
  integrations: [tailwind()],
  vite: {
    build: {
      minify: true,
    },
  },
});