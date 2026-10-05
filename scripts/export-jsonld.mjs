import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  loadRecipes,
  createJsonCollection,
  validateJsonCollection,
  writeValidatedFile,
} from './lib/recipe-exports.mjs';

export async function exportJsonLd(
  outputPath = path.resolve('exports/mise-recipes-schema.json'),
  recipes = null
) {
  recipes ||= await loadRecipes();
  const output = JSON.stringify(createJsonCollection(recipes), null, 2) + '\n';
  await writeValidatedFile(outputPath, output, (value) =>
    validateJsonCollection(JSON.parse(value), recipes)
  );
  return recipes.length;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  exportJsonLd(process.argv[2])
    .then((count) => console.log(`Exported and validated ${count} JSON-LD recipes.`))
    .catch((error) => {
      console.error('Export failed:', error.message);
      process.exitCode = 1;
    });
}
