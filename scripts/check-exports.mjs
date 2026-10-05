import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  loadRecipes,
  validateJsonCollection,
  validateCombinedText,
} from './lib/recipe-exports.mjs';
import { validatePaprikaArchive } from './export-paprika.mjs';
import { PAPRIKA_EXPORT } from './lib/paprika-identities.mjs';

export async function checkExports(
  directory = 'exports',
  textPath = 'public/recipes/all-recipes-combined.txt'
) {
  const recipes = await loadRecipes();
  const checks = [
    [
      'JSON-LD',
      async () =>
        validateJsonCollection(
          JSON.parse(await fs.readFile(path.join(directory, 'mise-recipes-schema.json'), 'utf8')),
          recipes
        ),
    ],
    [
      'Paprika',
      () =>
        validatePaprikaArchive(
          directory === 'exports'
            ? PAPRIKA_EXPORT
            : path.resolve(directory, 'mise-recipes.paprikarecipes'),
          recipes
        ),
    ],
    [
      'Combined text',
      async () => validateCombinedText(await fs.readFile(textPath, 'utf8'), recipes),
    ],
  ];
  const failures = [];
  for (const [name, check] of checks) {
    try {
      await check();
    } catch (error) {
      failures.push(`${name}: ${error.message}`);
    }
  }
  if (failures.length) throw new Error(failures.join('\n'));
  return recipes.length;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  checkExports(process.argv[2], process.argv[3])
    .then((count) => console.log(`All three exports match ${count} current recipes.`))
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
}
