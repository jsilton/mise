import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { gzipSync, gunzipSync } from 'node:zlib';
import { isDeepStrictEqual } from 'node:util';
import { loadRecipes, createPaprikaRecipe, assertRecipeSet } from './lib/recipe-exports.mjs';

const command = (program, args, options = {}) =>
  execFileSync(program, args, { maxBuffer: 32 * 1024 * 1024, ...options });

// Validate ZIP CRCs, exact membership, every gzip stream, JSON body and content.
// `zip` and `unzip` are explicit CLI dependencies (available on macOS/Linux).
export async function validatePaprikaArchive(filename, recipes, run = command) {
  if (!(await fs.stat(filename)).size) throw new Error('Paprika archive is empty');
  run('unzip', ['-tqq', filename]);
  const entries = run('unzip', ['-Z1', filename], { encoding: 'utf8' }).trim().split('\n');
  const names = recipes.map(({ slug }) => `${slug.replaceAll('/', '__')}.paprikarecipe`);
  assertRecipeSet(entries, names);
  const uids = new Set();
  for (const [index, entry] of names.entries()) {
    const value = JSON.parse(gunzipSync(run('unzip', ['-p', filename, entry])).toString('utf8'));
    if (typeof value.uid !== 'string' || !value.uid.trim() || uids.has(value.uid))
      throw new Error(`${entry}: invalid or duplicate UID`);
    uids.add(value.uid);
    const expected = createPaprikaRecipe(recipes[index], value.uid);
    if (!isDeepStrictEqual(value, expected))
      throw new Error(`${entry}: stale or incomplete recipe`);
  }
  return entries.length;
}

export async function exportPaprika(
  outputPath = path.resolve('exports/mise-recipes.paprikarecipes'),
  recipes = null,
  run = command
) {
  recipes ||= await loadRecipes();
  assertRecipeSet(
    recipes.map(({ slug }) => slug),
    recipes.map(({ slug }) => slug)
  );
  outputPath = path.resolve(outputPath);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  const temporary = await fs.mkdtemp(path.join(path.dirname(outputPath), '.paprika-temp-'));
  const archive = path.join(temporary, 'collection.zip');
  try {
    const entries = [];
    for (const recipe of recipes) {
      const filename = `${recipe.slug.replaceAll('/', '__')}.paprikarecipe`;
      entries.push(filename);
      await fs.writeFile(
        path.join(temporary, filename),
        gzipSync(JSON.stringify(createPaprikaRecipe(recipe)))
      );
    }
    assertRecipeSet(entries, [...new Set(entries)]);
    run('zip', ['-q', '-0', archive, ...entries], { cwd: temporary });
    await validatePaprikaArchive(archive, recipes, run);
    await fs.rename(archive, outputPath);
    return recipes.length;
  } finally {
    await fs.rm(temporary, { recursive: true, force: true });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  exportPaprika(process.argv[2])
    .then((count) => console.log(`Exported and validated ${count} Paprika recipes.`))
    .catch((error) => {
      console.error('Export failed:', error.message);
      process.exitCode = 1;
    });
}
