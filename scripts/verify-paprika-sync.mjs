import { isDeepStrictEqual } from 'node:util';
import { readPaprika } from './sync-paprika.mjs';

const [
  freshExport,
  expectedFile = 'exports/paprika-sync-2026-10-05/mise-paprika-synced.paprikarecipes',
] = process.argv.slice(2);
if (!freshExport) {
  console.error('Pass a fresh Paprika export taken after importing the sync file.');
  process.exit(1);
}
const expected = await readPaprika(expectedFile);
const actual = await readPaprika(freshExport);
const byUid = new Map(actual.map((r) => [r.uid, r]));
const expectedUids = new Set(expected.map((r) => r.uid));
const differences = [];
for (const record of expected) {
  const found = byUid.get(record.uid);
  if (!found) {
    differences.push(`${record.name}: missing expected UID ${record.uid}`);
    continue;
  }
  for (const field of [
    'name',
    'description',
    'difficulty',
    'ingredients',
    'directions',
    'notes',
    'servings',
    'prep_time',
    'cook_time',
    'total_time',
    'source',
    'source_url',
    'rating',
  ]) {
    if ((found[field] ?? '') !== (record[field] ?? ''))
      differences.push(`${record.name}: ${field} differs`);
  }
  if (
    !isDeepStrictEqual([...(found.categories || [])].sort(), [...(record.categories || [])].sort())
  )
    differences.push(`${record.name}: categories differ`);
  if (record.photo_hash && found.photo_hash !== record.photo_hash)
    differences.push(`${record.name}: thumbnail hash differs`);
  if (record.photo_data && found.photo_data !== record.photo_data)
    differences.push(`${record.name}: thumbnail image differs`);
  if (!isDeepStrictEqual(found.photos || [], record.photos || []))
    differences.push(`${record.name}: photo gallery differs`);
}
for (const record of actual) {
  if (!expectedUids.has(record.uid))
    differences.push(`${record.name}: unexpected record ${record.uid}`);
}
if (actual.length !== byUid.size) differences.push('Duplicate UIDs in fresh export');
if (differences.length) {
  console.error(differences.join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    `Verified ${expected.length} Paprika records against the prepared sync file, including cooking text, identities, ratings, categories and photo galleries.`
  );
}
