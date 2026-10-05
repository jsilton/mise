import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  loadRecipes,
  createCombinedText,
  validateCombinedText,
  writeValidatedFile,
} from './lib/recipe-exports.mjs';

export async function exportText(
  outputPath = path.resolve('public/recipes/all-recipes-combined.txt'),
  recipes = null
) {
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
