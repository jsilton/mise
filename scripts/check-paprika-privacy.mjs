import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { readIdentities } from './lib/paprika-identities.mjs';
import { loadRecipes } from './lib/recipe-exports.mjs';

export async function checkPaprikaPrivacy(directory, registry = null, sourceIds = []) {
  const tokens = [
    ...sourceIds,
    ...(registry
      ? [...registry.recipes, ...registry.drafts].flatMap((entry) => [
          entry.miseId,
          entry.paprikaUid,
          ...(entry.additionalPaprikaUids || []),
        ])
      : []),
  ];
  const problems = [];
  async function visit(folder) {
    for (const entry of await fs.readdir(folder, { withFileTypes: true })) {
      const file = path.join(folder, entry.name);
      if (entry.isDirectory()) await visit(file);
      else if (entry.isFile()) {
        if (/\.paprikarecipes?$|paprika-identities\.json$/.test(entry.name))
          problems.push(`${file}: private Paprika artifact`);
        if (!/\.(?:html|json|js|txt|xml|css|svg|map)$/.test(entry.name)) continue;
        const text = await fs.readFile(file, 'utf8');
        if (
          /\b(?:paprikaUid|paprikaAdditionalUids|miseId)\s*["']?\s*:/.test(text) ||
          tokens.some((token) => text.includes(token))
        )
          problems.push(`${file}: private recipe identity metadata`);
      }
    }
  }
  await visit(directory);
  if (problems.length) throw new Error(problems.join('\n'));
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    await checkPaprikaPrivacy(
      process.argv[2] || 'dist',
      await readIdentities(undefined, true),
      (await loadRecipes()).map((recipe) => recipe.data.miseId).filter(Boolean)
    );
    console.log('Published assets contain no private recipe IDs or Paprika archives.');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
