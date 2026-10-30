import { applyIdentities } from '../../lib/paprika-identities.mjs';
import { loadRecipes } from '../../lib/recipe-exports.mjs';

// The real Paprika registry is private and absent from clones and CI. Tests that
// exercise export content, not identity binding, pin placeholder UIDs for any
// recipe the private registry does not cover. Real pinned UIDs win when present;
// production exports still fail closed without the registry.
export function withPlaceholderIdentities(recipes) {
  const missing = recipes.filter((recipe) => recipe.data.miseId && !recipe.data.paprikaUid);
  if (!missing.length) return recipes;
  const pinned = new Map(
    applyIdentities(missing, {
      version: 1,
      recipes: missing.map(({ data }) => ({
        miseId: data.miseId,
        paprikaUid: `TEST-${data.miseId}`,
      })),
      drafts: [],
    }).map((recipe) => [recipe.slug, recipe])
  );
  return recipes.map((recipe) => pinned.get(recipe.slug) || recipe);
}

export async function loadTestRecipes(directory) {
  return withPlaceholderIdentities(await loadRecipes(directory));
}
