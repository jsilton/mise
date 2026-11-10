import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';
import remarkDropChefsNote from './src/lib/remark-drop-chefs-note.mjs';
import { exportText } from './scripts/export-text.mjs';

// The all-recipes text file is written from the recipe sources on every build, so the
// published copy always matches the pages. It is not kept in public/ or in git.
const combinedRecipeText = {
  name: 'mise-combined-recipe-text',
  hooks: {
    'astro:build:done': async ({ dir, logger }) => {
      const output = fileURLToPath(new URL('recipes/all-recipes-combined.txt', dir));
      const count = await exportText(output);
      logger.info(`Wrote ${count} recipes to recipes/all-recipes-combined.txt`);
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://jordansilton.com',
  base: '/mise/',
  integrations: [tailwind(), combinedRecipeText],
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
