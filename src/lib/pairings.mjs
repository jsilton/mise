// Reverse pairings. A side, base or condiment page lists the dishes that name it under
// "Serve it with", so a one-way pairing shows from both pages.

export const REVERSE_PAIRING_ROLES = ['side', 'base', 'condiment'];
export const REVERSE_PAIRING_LIMIT = 6;

/**
 * Dishes that pair with `recipe` but that `recipe` does not list itself.
 * Dishes that share a cuisine come first, then the rest, each by title.
 * @param {{ slug: string, data: Record<string, any> }} recipe
 * @param {{ slug: string, data: Record<string, any> }[]} allRecipes
 * @returns {{ slug: string, title: string, note: string }[]}
 */
export function reversePairings(recipe, allRecipes, limit = REVERSE_PAIRING_LIMIT) {
  if (!REVERSE_PAIRING_ROLES.includes(recipe.data.role)) return [];
  const own = new Set(recipe.data.pairsWith || []);
  const cuisines = new Set(recipe.data.cuisines || []);
  const sharesCuisine = (other) => (other.data.cuisines || []).some((c) => cuisines.has(c));
  return allRecipes
    .filter(
      (other) =>
        other.slug !== recipe.slug &&
        !own.has(other.slug) &&
        (other.data.pairsWith || []).includes(recipe.slug)
    )
    .sort(
      (a, b) =>
        Number(sharesCuisine(b)) - Number(sharesCuisine(a)) ||
        a.data.title.localeCompare(b.data.title)
    )
    .slice(0, limit)
    .map((other) => ({
      slug: other.slug,
      title: other.data.title,
      note: other.data.pairingNotes?.[recipe.slug] || '',
    }));
}
