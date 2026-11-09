import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkDropChefsNote from './src/lib/remark-drop-chefs-note.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://jordansilton.com',
  base: '/mise/',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkDropChefsNote],
  },
  vite: {
    server: {
      fs: {
        // Keep Vite's default exclusions and protect local Paprika working data.
        deny: [
          '.env',
          '.env.*',
          '*.{crt,pem}',
          '**/.git/**',
          '**/.mise/**',
          '**/tmp/paprika-sync*/**',
          '*.paprikarecipe',
          '*.paprikarecipes',
        ],
      },
    },
  },
  server: {
    host: '127.0.0.1',
  },
});
