import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';

const entries = JSON.parse(
  readFileSync(new URL('../../src/data/recipe-preservations.json', import.meta.url), 'utf8')
);

// This disposition preserves an exact original at the user's request. It grants
// no editorial or kitchen-test status and waives only the added Chef's Note.
export function cookingHash({ data, content }) {
  const publicData = Object.fromEntries(
    Object.entries(data)
      .filter(([key]) => key !== 'miseId')
      .sort(([a], [b]) => a.localeCompare(b))
  );
  return createHash('sha256')
    .update(JSON.stringify({ data: publicData, body: content.trim() }))
    .digest('hex');
}

export function assertOriginalPreservation(recipe, manifest = entries) {
  const entry = manifest[recipe.slug];
  if (!entry) return false;
  if (
    entry.status !== 'original-preserved-by-user' ||
    !existsSync(entry.record) ||
    !/^[a-f0-9]{64}$/.test(entry.cookingSha256) ||
    cookingHash(recipe) !== entry.cookingSha256 ||
    recipe.data.learning ||
    recipe.data.formula
  ) {
    throw new Error(
      `${recipe.slug}: original-preservation disposition no longer matches the source`
    );
  }
  return true;
}
