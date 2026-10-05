import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import matter from 'gray-matter';
import { loadRecipes, RECIPES_DIR } from './lib/recipe-exports.mjs';
import { readPaprika } from './sync-paprika.mjs';
import { nativeIdentityDigest, decisionIdentityDigest } from './lib/paprika-plan.mjs';
import {
  readIdentities,
  writeIdentities,
  registerIdentity,
  assertPinnedRecipes,
} from './lib/paprika-identities.mjs';

export function withMiseId(text, id) {
  const existing = matter(text).data.miseId;
  if (existing) {
    if (existing !== id) throw new Error('Cannot replace an existing stable mise ID');
    return text;
  }
  return text.startsWith('---\n')
    ? text.replace(/^---\n/, `---\nmiseId: ${id}\n`)
    : `---\nmiseId: ${id}\n---\n\n${text}`;
}

// Recover only explicit mise links and already reviewed drafts. Never guess
// identities from similar titles, ingredients or recipe filenames alone.
export async function pinFromExport(source) {
  const recipes = await loadRecipes();
  const records = await readPaprika(source);
  const plan = JSON.parse(await fs.readFile('docs/paprika-sync/2026-10-05-plan.json', 'utf8'));
  const draftDecisions = new Map(
    plan.recipes.filter((r) => r.action === 'draft').map((r) => [decisionIdentityDigest(r), r])
  );
  const existing = await readIdentities(undefined, true);
  const known = new Map((existing?.recipes || []).map((entry) => [entry.miseId, entry]));
  const bySlug = new Map();
  for (const recipe of recipes)
    for (const slug of [recipe.slug, ...(recipe.data.aliases || [])]) {
      if (bySlug.has(slug) && bySlug.get(slug) !== recipe)
        throw new Error(`Ambiguous recipe alias ${slug}`);
      bySlug.set(slug, recipe);
    }
  const groups = new Map();
  const drafts = [];
  const writes = [];
  for (const record of records) {
    const draft = draftDecisions.get(nativeIdentityDigest(record.uid));
    if (draft) {
      const filename = `docs/paprika-sync/drafts/${draft.slug}.md`;
      const raw = await fs.readFile(filename, 'utf8');
      const miseId = matter(raw).data.miseId || randomUUID();
      drafts.push({ miseId, paprikaUid: record.uid, draftPath: filename });
      writes.push([filename, withMiseId(raw, miseId)]);
      continue;
    }
    const link = record.notes?.match(/^Mise recipe: (https?:\/\/\S+)\s*$/m)?.[1];
    const url = link ? new URL(link) : null;
    const slug =
      url?.hostname === 'jordansilton.com'
        ? url.pathname.match(/^\/mise\/recipes\/(.+?)\/?$/)?.[1]
        : null;
    const recipe = slug ? bySlug.get(decodeURIComponent(slug)) : null;
    if (!recipe)
      throw new Error(
        `${record.name}: no reviewed mise identity; reconcile this recipe before pinning`
      );
    if (!groups.has(recipe.slug)) groups.set(recipe.slug, []);
    groups.get(recipe.slug).push(record.uid);
  }
  const entries = [];
  for (const recipe of recipes) {
    const uids = groups.get(recipe.slug);
    if (!uids?.length)
      throw new Error(`${recipe.slug}: missing from Paprika export; cannot infer an ID`);
    const miseId = recipe.data.miseId || randomUUID();
    const previous = known.get(miseId);
    if (previous && !uids.includes(previous.paprikaUid))
      throw new Error(`${recipe.slug}: export would replace its pinned ID`);
    const paprikaUid = previous?.paprikaUid || uids[0];
    entries.push({
      miseId,
      paprikaUid,
      ...(uids.length > 1
        ? { additionalPaprikaUids: uids.filter((uid) => uid !== paprikaUid).sort() }
        : {}),
    });
    const filename = path.join(RECIPES_DIR, `${recipe.slug}.md`);
    writes.push([filename, withMiseId(await fs.readFile(filename, 'utf8'), miseId)]);
  }
  const registry = { version: 1, recipes: entries, drafts };
  // Write the validated private registry before introducing source bindings.
  await writeIdentities(registry);
  for (const [filename, text] of writes) await fs.writeFile(filename, text);
  return { recipes: entries.length, drafts: drafts.length, paprikaIds: records.length };
}

export async function pinNewRecipe(filename) {
  await readIdentities(); // A missing registry requires recovery, not replacement IDs.
  const raw = await fs.readFile(filename, 'utf8');
  const miseId = matter(raw).data.miseId || randomUUID();
  await registerIdentity(miseId);
  await fs.writeFile(filename, withMiseId(raw, miseId));
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2);
    if (args[0] === '--from' && args.length === 2) console.log(await pinFromExport(args[1]));
    else if (!args.length || (args[0] === '--check' && args.length === 1)) {
      await readIdentities();
      const recipes = await loadRecipes();
      assertPinnedRecipes(recipes);
      console.log(`Verified private Paprika IDs for ${recipes.length} complete recipes.`);
    } else if (args.every((arg) => !arg.startsWith('--'))) {
      for (const filename of args) await pinNewRecipe(filename);
      console.log(`Pinned ${args.length} recipe files.`);
    } else throw new Error('Use --check, --from <verified-native-export>, or <new-recipe-file>...');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
