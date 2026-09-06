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
const routine = decisions.filter(
  (d) => d.category === 'routine-edit' && d.disposition !== 'pending'
);
const accepted = routine.filter((d) => d.disposition === 'accepted').length;
const adjudicatedDefects = decisions.filter(
  (d) => d.category === 'material-defect' && d.disposition !== 'pending'
);
console.log(
  JSON.stringify(
    {
      frozenInputs: manifest.recipes.length,
      families: families.size,
      adjudicatedRoutineEdits: routine.length,
      acceptedWithoutCorrection: accepted,
      routineAcceptanceRate: routine.length ? accepted / routine.length : null,
      adjudicatedMaterialDefects: adjudicatedDefects.length,
      missedMaterialDefects: adjudicatedDefects.length
        ? adjudicatedDefects.filter((d) => d.disposition === 'missed').length
        : null,
      evaluationComplete: false,
      note: 'Input integrity and recorded decisions only; no culinary certification. Missing results are not passes.',
    },
    null,
    2
  )
);
