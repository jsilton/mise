import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { gzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { loadRecipes, createPaprikaRecipe, assertRecipeSet } from './lib/recipe-exports.mjs';

const command = (name, args, options = {}) =>
  execFileSync(name, args, { maxBuffer: 128 * 1024 * 1024, ...options });

// A repeat export must retain the identity of newly added Mise recipes too.
export function miseUid(slug) {
  const hex = createHash('sha256').update(`mise:recipe:${slug}`).digest('hex').toUpperCase();
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-5${hex.slice(13, 16)}-A${hex.slice(17, 20)}-${hex.slice(20, 32)}`;
}

export function sourceDigest(record) {
  const canonical = (value) => {
    if (Array.isArray(value)) return value.map(canonical);
    if (value && typeof value === 'object')
      return Object.fromEntries(
        Object.keys(value)
          .sort()
          .map((key) => [key, canonical(value[key])])
      );
    return value;
  };
  return createHash('sha256')
    .update(JSON.stringify(canonical(record)))
    .digest('hex');
}

export function mergePaprika(originals, recipes, plan) {
  assertRecipeSet(
    originals.map((r) => r.uid),
    plan.recipes.map((r) => r.uid)
  );
  assertRecipeSet(
    recipes.map((r) => r.slug),
    recipes.map((r) => r.slug)
  );
  const bySlug = new Map(recipes.map((r) => [r.slug, r]));
  const decisions = new Map(plan.recipes.map((r) => [r.uid, r]));
  const covered = new Set();
  const entries = originals.map((original) => {
    const decision = decisions.get(original.uid);
    if (decision.paprikaName !== original.name)
      throw new Error(`${original.uid}: source name changed; review the new export first`);
    if (decision.sourceDigest && decision.sourceDigest !== sourceDigest(original))
      throw new Error(`${original.name}: source content changed; review the new export first`);
    if (decision.action === 'draft') return structuredClone(original);
    if (!['shared', 'add'].includes(decision.action)) throw new Error('Unknown sync decision');
    const recipe = bySlug.get(decision.slug);
    if (!recipe) throw new Error(`${decision.slug}: missing Mise recipe`);
    covered.add(recipe.slug);
    const current = createPaprikaRecipe(recipe, original.uid);
    // Retain native photos, creation metadata, hash and unknown native fields.
    // Cooking text comes from the reconciled Mise source. Obsolete original
    // notes remain in the backed-up source export, not mixed into the method.
    return {
      ...structuredClone(original),
      ...current,
      categories: [...new Set([...(original.categories || []), ...current.categories])],
      rating: original.rating || current.rating,
      description: recipe.data.description || recipe.parsed.chefNote,
      photo: original.photo,
      photo_hash: original.photo_hash,
      image_url: original.image_url,
    };
  });
  for (const recipe of recipes) {
    if (!covered.has(recipe.slug)) {
      entries.push({
        ...createPaprikaRecipe(recipe, miseUid(recipe.slug)),
        description: recipe.data.description || recipe.parsed.chefNote,
      });
    }
  }
  assertRecipeSet(
    entries.map((r) => r.uid),
    entries.map((r) => r.uid)
  );
  return entries;
}

export async function readPaprika(source) {
  // macOS Info-ZIP misdecodes some UTF-8 Paprika entry names. Python's standard
  // ZIP reader addresses entries by their actual archive identity, without
  // extracting paths or interpreting any recipe content as executable code.
  const program = `import sys,zipfile,io,gzip,json
z=zipfile.ZipFile(sys.argv[1])
if z.testzip() is not None: raise ValueError('Bad ZIP CRC')
names=z.namelist()
nested=[n for n in names if not n.startswith('__MACOSX/') and n.endswith('.paprikarecipes')]
if nested:
 if len(nested)!=1: raise ValueError('Expected one native Paprika archive')
 z=zipfile.ZipFile(io.BytesIO(z.read(nested[0])))
 if z.testzip() is not None: raise ValueError('Bad native ZIP CRC')
 names=z.namelist()
if not names or any(not n.endswith('.paprikarecipe') for n in names): raise ValueError('Expected native Paprika payloads')
json.dump([json.loads(gzip.decompress(z.read(n))) for n in names],sys.stdout,ensure_ascii=False)
`;
  return JSON.parse(
    command('python3', ['-c', program, path.resolve(source)], { encoding: 'utf8' })
  );
}

export async function writePaprika(entries, output) {
  assertRecipeSet(
    entries.map((r) => r.uid),
    entries.map((r) => r.uid)
  );
  output = path.resolve(output);
  await fs.mkdir(path.dirname(output), { recursive: true });
  const temporary = await fs.mkdtemp(path.join(path.dirname(output), '.paprika-sync-'));
  try {
    const names = entries.map((_, i) => `${String(i + 1).padStart(4, '0')}.paprikarecipe`);
    for (const [i, record] of entries.entries())
      await fs.writeFile(path.join(temporary, names[i]), gzipSync(JSON.stringify(record)));
    const archive = path.join(temporary, 'collection.zip');
    command('zip', ['-q', '-0', archive, ...names], { cwd: temporary });
    command('unzip', ['-tqq', archive]);
    const roundTrip = await readPaprika(archive);
    if (!isDeepStrictEqual(roundTrip, entries)) throw new Error('Paprika round-trip mismatch');
    await fs.rename(archive, output);
  } finally {
    await fs.rm(temporary, { recursive: true, force: true });
  }
}

export async function syncPaprika(source, destination = 'exports/paprika-sync-2026-10-05') {
  if (!source) throw new Error('Pass the original native Paprika export or My Recipes.zip');
  const originals = await readPaprika(source);
  const plan = JSON.parse(await fs.readFile('docs/paprika-sync/2026-10-05-plan.json', 'utf8'));
  const recipes = await loadRecipes();
  const entries = mergePaprika(originals, recipes, plan);
  await writePaprika(entries, path.join(destination, 'mise-paprika-synced.paprikarecipes'));
  const testUid = plan.recipes.find((r) => r.slug === 'basmati-rice').uid;
  await writePaprika(
    entries.filter((r) => r.uid === testUid),
    path.join(destination, 'test-basmati-update.paprikarecipes')
  );
  const oldUids = new Set(originals.map((r) => r.uid));
  await writePaprika(
    entries.filter((r) => !oldUids.has(r.uid)),
    path.join(destination, 'mise-only-additions.paprikarecipes')
  );
  const summary = {
    date: plan.date,
    paprikaBefore: originals.length,
    miseBefore: 608,
    miseAfter: recipes.length,
    paprikaImportRecords: entries.length,
    existingPaprikaRecordsUpdated: plan.recipes.filter((r) => r.action !== 'draft').length,
    miseOnlyAdditions: entries.filter((r) => !oldUids.has(r.uid)).length,
    paprikaRecipesAddedToMise: plan.recipes.filter((r) => r.action === 'add').length,
    draftsRetained: plan.recipes.filter((r) => r.action === 'draft').length,
    originalUidsPreserved: originals.every((r) => entries.some((e) => e.uid === r.uid)),
    ratedRecordsPreserved: originals.filter((r) => r.rating).length,
    photoRecordsPreserved: originals.filter((r) => r.photo_data || r.photo || r.photos?.length)
      .length,
    inAppImportVerified: false,
    postImportExportVerified: false,
    productionDeploymentVerified: false,
  };
  await fs.writeFile(
    path.join(destination, 'summary.json'),
    JSON.stringify(summary, null, 2) + '\n'
  );
  return summary;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  syncPaprika(process.argv[2], process.argv[3])
    .then(console.log)
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
}
