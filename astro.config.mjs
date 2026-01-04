import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://jsilton.github.io',
  base: '/silton-mise',
  integrations: [tailwind()],
  server: {
    host: true,
  },
});
