import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  loadRecipes,
  createCombinedText,
  validateCombinedText,
  writeValidatedFile,
} from './lib/recipe-exports.mjs';

// The site build writes this file into dist (see astro.config.mjs). It is generated, never
// committed, so the default output is the built site and not public/.
export const COMBINED_TEXT_PATH = 'dist/recipes/all-recipes-combined.txt';

export async function exportText(outputPath = path.resolve(COMBINED_TEXT_PATH), recipes = null) {
  recipes ||= await loadRecipes();
  await writeValidatedFile(outputPath, createCombinedText(recipes), (value) =>
    validateCombinedText(value, recipes)
  );
  return recipes.length;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  exportText(process.argv[2])
    .then((count) => console.log(`Exported and validated ${count} text recipes.`))
    .catch((error) => {
      console.error('Export failed:', error.message);
      process.exitCode = 1;
    });
}
