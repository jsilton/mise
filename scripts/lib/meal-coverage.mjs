import assert from 'node:assert/strict';

// A consolidation preserves an original dinner plan's identity and URL. It
// cannot hide a missing original, leave duplicate content, or create a chain.
export function validateMealCoverage(originals, liveSlugs, aliases) {
  const originalSet = new Set(originals);
  const live = new Set(liveSlugs);
  const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  assert.equal(originalSet.size, originals.length, 'Duplicate original meal in baseline');
  for (const [alias, target] of Object.entries(aliases)) {
    assert(
      slugPattern.test(alias) && typeof target === 'string' && slugPattern.test(target),
      `Invalid meal alias: ${alias}`
    );
    assert(originalSet.has(alias), `Meal alias is not an original: ${alias}`);
    assert(!live.has(alias), `Consolidated meal still exists as duplicate content: ${alias}`);
    assert(!Object.hasOwn(aliases, target), `Meal redirect chain or cycle: ${alias} -> ${target}`);
    assert(live.has(target), `Missing canonical meal: ${target}`);
  }
  for (const original of originals) {
    assert(
      live.has(original) || Object.hasOwn(aliases, original),
      `Original meal disappeared: ${original}`
    );
  }
}
