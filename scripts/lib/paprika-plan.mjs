import { createHash } from 'node:crypto';

// Public decisions retain a one-way reference, never the native UID itself.
// Binding requires the exact UID supplied by a native export; titles are not
// identity evidence. Older in-memory plans remain usable by existing callers.
export function nativeIdentityDigest(uid) {
  if (typeof uid !== 'string' || !uid.trim()) throw new Error('Missing native identity');
  return createHash('sha256').update(uid).digest('hex');
}

export function decisionIdentityDigest(decision) {
  const digest = decision.nativeIdentityDigest || nativeIdentityDigest(decision.uid);
  if (!/^[a-f0-9]{64}$/.test(digest)) throw new Error('Invalid native identity digest');
  if (decision.uid && nativeIdentityDigest(decision.uid) !== digest)
    throw new Error('Conflicting native identity reference');
  return digest;
}

export function bindPaprikaPlan(originals, plan) {
  const byDigest = new Map();
  for (const record of originals) {
    const digest = nativeIdentityDigest(record.uid);
    if (byDigest.has(digest)) throw new Error('Duplicate native identity');
    byDigest.set(digest, record);
  }
  const used = new Set();
  const recipes = plan.recipes.map((decision) => {
    const digest = decisionIdentityDigest(decision);
    if (used.has(digest)) throw new Error('Duplicate plan identity');
    used.add(digest);
    const original = byDigest.get(digest);
    if (!original) throw new Error('Recipe set mismatch: reviewed native identity missing');
    return { ...decision, uid: original.uid };
  });
  if (used.size !== byDigest.size)
    throw new Error('Recipe set mismatch: unreviewed native identity');
  return { ...plan, recipes };
}
