import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const root = new URL('../', import.meta.url);
const read = (path) => fs.readFileSync(new URL(path, root));
const manifest = JSON.parse(read('docs/pilot/manifest.json'));
assert.equal(manifest.recipes.length, 24, 'Pilot must contain 24 recipes');
assert.equal(new Set(manifest.recipes.map((r) => r.slug)).size, 24, 'Duplicate pilot slug');
const families = new Map();
for (const recipe of manifest.recipes) {
  families.set(recipe.family, (families.get(recipe.family) || 0) + 1);
  const bytes = read(`docs/pilot/inputs/${recipe.slug}.md`);
  assert.equal(
    crypto.createHash('sha256').update(bytes).digest('hex'),
    recipe.inputSha256,
    `Changed frozen input: ${recipe.slug}`
  );
}
assert.equal(families.size, 6, 'Pilot must contain six families');
for (const [family, count] of families) assert.equal(count, 4, family);
const decisions = JSON.parse(read('docs/pilot/decisions.json'));
const ids = new Set();
for (const decision of decisions) {
  assert(!ids.has(decision.id), 'Duplicate decision id');
  ids.add(decision.id);
  assert(
    manifest.recipes.some((r) => r.slug === decision.slug),
    'Unknown recipe'
  );
  assert(['routine-edit', 'material-defect', 'unsupported-addition'].includes(decision.category));
  assert(['accepted', 'corrected', 'rejected', 'missed', 'pending'].includes(decision.disposition));
  assert(decision.rationale?.trim(), 'Decision needs reviewer rationale');
}
const trialNames = [...new Set(decisions.map((d) => d.trial))];
const trials = Object.fromEntries(
  trialNames.map((trial) => {
    const entries = decisions.filter((d) => d.trial === trial);
    const routine = entries.filter(
      (d) => d.category === 'routine-edit' && d.disposition !== 'pending'
    );
    const defects = entries.filter(
      (d) => d.category === 'material-defect' && d.disposition !== 'pending'
    );
    const accepted = routine.filter((d) => d.disposition === 'accepted').length;
    return [
      trial,
      {
        adjudicatedRoutineEdits: routine.length,
        acceptedWithoutCorrection: accepted,
        routineAcceptanceRate: routine.length ? accepted / routine.length : null,
        adjudicatedMaterialDefects: defects.length,
        missedMaterialDefects: defects.length
          ? defects.filter((d) => d.disposition === 'missed').length
          : null,
        conditionalReferenceConcerns: entries.filter(
          (d) => d.category === 'material-defect' && d.disposition === 'pending'
        ).length,
      },
    ];
  })
);
const sourceWorkers = [
  'quick-seafood',
  'braises',
  'grain-hydration',
  'pasta-sauces',
  'quick-batters',
  'roasted-vegetables',
];
const workerSlugs = new Set();
for (const family of sourceWorkers) {
  const worker = JSON.parse(read(`docs/pilot/workers/${family}.json`));
  assert.equal(worker.recipes.length, 4, `Worker count: ${family}`);
  for (const recipe of worker.recipes) {
    const expected = manifest.recipes.find((r) => r.slug === recipe.slug);
    assert.equal(expected?.family, family);
    assert.equal(recipe.inputSha256, expected.inputSha256);
    assert(!workerSlugs.has(recipe.slug), 'Duplicate worker recipe');
    workerSlugs.add(recipe.slug);
  }
}
let referenceCount = 0;
for (const group of ['group-a', 'group-b']) {
  for (const recipe of JSON.parse(read(`docs/pilot/reference/${group}.json`)).recipes) {
    for (const finding of recipe.findings || recipe.materialFindings) {
      referenceCount++;
      assert.equal(
        decisions.filter((d) => d.trial === 'source-backed-v2' && d.referenceId === finding.id)
          .length,
        1,
        `Missing/duplicate adjudication: ${finding.id}`
      );
    }
  }
}
console.log(
  JSON.stringify(
    {
      frozenInputs: manifest.recipes.length,
      families: families.size,
      sourceBackedWorkerRecipes: workerSlugs.size,
      referenceFindingsCompared: referenceCount,
      trials,
      evaluationComplete: false,
      rolloutApproved: false,
      note: 'Quality assessment failed. Economic comparison incomplete. Conditional concerns excluded from confirmed-defect denominator; baseline and source-backed trials remain separate. No culinary certification.',
    },
    null,
    2
  )
);
