import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';

const root = fileURLToPath(new URL('../../', import.meta.url));
export const PAPRIKA_IDENTITIES = path.join(root, '.mise/paprika-identities.json');
export const PAPRIKA_EXPORT = path.join(root, '.mise/paprika-exports/mise-recipes.paprikarecipes');

export function validateIdentities(registry) {
  if (
    registry?.version !== 1 ||
    !Array.isArray(registry.recipes) ||
    !Array.isArray(registry.drafts)
  )
    throw new Error('Invalid private Paprika identity registry');
  const ids = new Set();
  const uids = new Set();
  for (const entry of [...registry.recipes, ...registry.drafts]) {
    if (typeof entry.miseId !== 'string' || !entry.miseId.trim() || ids.has(entry.miseId))
      throw new Error('Missing or duplicate stable mise ID');
    ids.add(entry.miseId);
    if (entry.additionalPaprikaUids !== undefined && !Array.isArray(entry.additionalPaprikaUids))
      throw new Error('Invalid additional Paprika IDs');
    for (const uid of [entry.paprikaUid, ...(entry.additionalPaprikaUids || [])]) {
      if (typeof uid !== 'string' || !uid.trim() || uids.has(uid))
        throw new Error('Missing or duplicate pinned Paprika UID');
      uids.add(uid);
    }
  }
  return registry;
}

export async function readIdentities(filename = PAPRIKA_IDENTITIES, optional = false) {
  try {
    return validateIdentities(JSON.parse(await fs.readFile(filename, 'utf8')));
  } catch (error) {
    if (error.code === 'ENOENT' && optional) return null;
    if (error.code === 'ENOENT')
      throw new Error(
        'Private Paprika identity registry is missing. Restore .mise/paprika-identities.json; do not generate replacement IDs.'
      );
    throw error;
  }
}

export async function writeIdentities(registry, filename = PAPRIKA_IDENTITIES) {
  validateIdentities(registry);
  await fs.mkdir(path.dirname(filename), { recursive: true, mode: 0o700 });
  const temporary = `${filename}.${randomUUID()}.tmp`;
  try {
    await fs.writeFile(temporary, JSON.stringify(registry, null, 2) + '\n', { mode: 0o600 });
    await fs.rename(temporary, filename);
  } finally {
    await fs.rm(temporary, { force: true });
  }
}

export function applyIdentities(recipes, registry) {
  if (registry) validateIdentities(registry);
  const entries = new Map((registry?.recipes || []).map((entry) => [entry.miseId, entry]));
  const seen = new Set();
  return recipes.map((recipe) => {
    const id = recipe.data.miseId;
    if (!id) return recipe;
    if (seen.has(id)) throw new Error(`${recipe.slug}: duplicate stable mise ID`);
    seen.add(id);
    const entry = entries.get(id);
    if (!entry) return recipe;
    return {
      ...recipe,
      data: {
        ...recipe.data,
        paprikaUid: entry.paprikaUid,
        paprikaAdditionalUids: [...(entry.additionalPaprikaUids || [])],
      },
    };
  });
}

export function assertPinnedRecipes(recipes) {
  const uids = new Set();
  for (const recipe of recipes) {
    if (!recipe.data.miseId || !recipe.data.paprikaUid)
      throw new Error(
        `${recipe.slug}: missing pinned Paprika ID. Restore the private registry or pin a new recipe with npm run pin:paprika -- <recipe-file>.`
      );
    for (const uid of [recipe.data.paprikaUid, ...(recipe.data.paprikaAdditionalUids || [])]) {
      if (uids.has(uid)) throw new Error(`${recipe.slug}: duplicate pinned Paprika UID`);
      uids.add(uid);
    }
  }
}

export async function registerIdentity(miseId, filename = PAPRIKA_IDENTITIES) {
  const registry = await readIdentities(filename);
  const existing = registry.recipes.find((entry) => entry.miseId === miseId);
  if (existing) return existing.paprikaUid;
  const paprikaUid = randomUUID().toUpperCase();
  registry.recipes.push({ miseId, paprikaUid });
  await writeIdentities(registry, filename);
  return paprikaUid;
}
