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
import { COMBINED_TEXT_PATH } from './export-text.mjs';

// All three exports are generated files that are not kept in git. The text file is written
// by the site build, the JSON file by `pnpm run export:jsonld`, and the Paprika archive lives
// in the private .mise folder. Each one that exists must match the current recipes exactly.
// One that has not been generated is reported as skipped, and a stale one fails. The command
// also fails when it found nothing to check.
export async function checkExports(directory = 'exports', textPath = COMBINED_TEXT_PATH) {
  const recipes = await loadRecipes();
  const paprikaPath =
    directory === 'exports'
      ? PAPRIKA_EXPORT
      : path.resolve(directory, 'mise-recipes.paprikarecipes');
  const checks = [
    [
      'JSON-LD',
      path.join(directory, 'mise-recipes-schema.json'),
      async (file) => validateJsonCollection(JSON.parse(await fs.readFile(file, 'utf8')), recipes),
    ],
    ['Paprika', paprikaPath, (file) => validatePaprikaArchive(file, recipes)],
    [
      'Combined text',
      textPath,
      async (file) => validateCombinedText(await fs.readFile(file, 'utf8'), recipes),
    ],
  ];
  const failures = [];
  const checked = [];
  const skipped = [];
  for (const [name, file, check] of checks) {
    try {
      await fs.access(file);
    } catch {
      skipped.push(name);
      continue;
    }
    try {
      await check(file);
      checked.push(name);
    } catch (error) {
      failures.push(`${name}: ${error.message}`);
    }
  }
  if (failures.length) throw new Error(failures.join('\n'));
  return { count: recipes.length, checked, skipped };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  checkExports(process.argv[2], process.argv[3])
    .then(({ count, checked, skipped }) => {
      if (checked.length)
        console.log(`Up to date with ${count} current recipes: ${checked.join(', ')}.`);
      if (skipped.length) console.log(`Not generated here, so not checked: ${skipped.join(', ')}.`);
      if (!checked.length) {
        console.error('Nothing was checked. Run `pnpm run build` to write the text file first.');
        process.exitCode = 1;
      }
    })
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
}
