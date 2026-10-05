import { isDeepStrictEqual } from 'node:util';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { readPaprika } from './sync-paprika.mjs';

export function comparePaprika(expected, actual) {
  const byUid = new Map(actual.map((r) => [r.uid, r]));
  const expectedUids = new Set(expected.map((r) => r.uid));
  const differences = [];
  const categoryLabelDuplicates = [];
  const categoryMembership = (labels) => [...new Set(labels || [])].sort();
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
    // Compare membership as a set, while reporting repeated exported labels.
    if (
      !isDeepStrictEqual(
        categoryMembership(found.categories),
        categoryMembership(record.categories)
      )
    )
      differences.push(`${record.name}: categories differ`);
    const labels = found.categories || [];
    const repeated = [...new Set(labels.filter((label, i) => labels.indexOf(label) !== i))];
    if (repeated.length)
      categoryLabelDuplicates.push({ uid: record.uid, name: record.name, labels: repeated });
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
  if (expected.length !== expectedUids.size) differences.push('Duplicate UIDs in expected file');
  if (!expected.length || !actual.length) differences.push('Recipe collection is empty');
  return {
    matched: differences.length === 0,
    expectedRecords: expected.length,
    actualRecords: actual.length,
    uniqueActualUids: byUid.size,
    differences,
    categoryLabelDuplicates,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [
    freshExport,
    expectedFile = 'exports/paprika-sync-2026-10-05/mise-paprika-synced.paprikarecipes',
  ] = process.argv.slice(2);
  if (!freshExport) {
    console.error('Pass a fresh Paprika export taken after importing the sync file.');
    process.exit(1);
  }
  const result = comparePaprika(await readPaprika(expectedFile), await readPaprika(freshExport));
  if (!result.matched) {
    console.error(result.differences.join('\n'));
    process.exitCode = 1;
  } else {
    console.log(
      `Verified ${result.expectedRecords} Paprika records against the prepared sync file, including cooking text, identities, ratings, category membership and photo payloads.`
    );
  }
  if (result.categoryLabelDuplicates.length)
    console.warn(
      `Export repeats category labels on ${result.categoryLabelDuplicates.length} recipes; category memberships were compared without repeated labels.`
    );
}
