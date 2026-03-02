import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const RECIPES_DIR = path.resolve('src/content/recipes');

// Cuisine compatibility map — same cuisine always matches; these are extra cross-cuisine affinities
const CUISINE_COMPLEMENTS = {
  Japanese: ['Korean'],
  Korean: ['Japanese'],
  Chinese: ['Japanese'],
  Mexican: ['American'],
  Italian: ['Mediterranean'],
  Mediterranean: ['Italian', 'Greek'],
  Greek: ['Mediterranean'],
  Indian: ['Middle Eastern'],
  'Middle Eastern': ['Indian', 'Lebanese'],
  Lebanese: ['Middle Eastern'],
  Thai: ['Vietnamese', 'Southeast-Asian'],
  Vietnamese: ['Thai'],
  'Southeast-Asian': ['Thai', 'Vietnamese'],
  Southern: ['American'],
  American: ['Mexican', 'Southern'],
  French: ['Italian', 'Mediterranean'],
  Spanish: ['Mediterranean'],
};

// Which roles naturally pair with which other roles
const ROLE_PAIRINGS = {
  main: ['side', 'base', 'condiment'],
  side: ['main'],
  base: ['main'],
  condiment: ['main'],
  dessert: [], // desserts don't automatically pair
  drink: [], // drinks don't automatically pair
};

/**
 * Load every recipe's frontmatter and raw text into a Map keyed by slug.
 */
async function loadAllRecipes() {
  const files = await fs.readdir(RECIPES_DIR);
  const recipes = new Map();

  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    const raw = await fs.readFile(path.join(RECIPES_DIR, file), 'utf-8');
    const { data } = matter(raw);
    recipes.set(slug, { data, raw, file });
  }

  return recipes;
}

/**
 * Build an index of existing cross-references so we can reciprocate them.
 * Returns a Map<slug, Set<slug>> of "slug is referenced by these other slugs".
 */
function buildReverseIndex(recipes) {
  const referencedBy = new Map();

  for (const [slug, { data }] of recipes) {
    const pairs = data.pairsWith;
    if (!Array.isArray(pairs)) continue;
    for (const target of pairs) {
      if (!referencedBy.has(target)) {
        referencedBy.set(target, new Set());
      }
      referencedBy.get(target).add(slug);
    }
  }

  return referencedBy;
}

/**
 * Check whether two cuisine arrays have a match (same or complementary).
 */
function cuisinesMatch(cuisinesA, cuisinesB) {
  if (!cuisinesA?.length || !cuisinesB?.length) return false;

  for (const a of cuisinesA) {
    for (const b of cuisinesB) {
      if (a === b) return true;
      const complements = CUISINE_COMPLEMENTS[a] || [];
      if (complements.includes(b)) return true;
    }
  }

  return false;
}

/**
 * Check whether two cuisine arrays share the exact same cuisine.
 */
function cuisinesExactMatch(cuisinesA, cuisinesB) {
  if (!cuisinesA?.length || !cuisinesB?.length) return false;
  for (const a of cuisinesA) {
    for (const b of cuisinesB) {
      if (a === b) return true;
    }
  }
  return false;
}

/**
 * Score a candidate pairing for a given recipe.
 * Higher is better. Returns 0 if invalid.
 */
function scorePairing(recipe, candidate, candidateSlug, referencedBy, recipeSlug) {
  const recipeData = recipe.data;
  const candData = candidate.data;

  if (candidateSlug === recipeSlug) return 0;

  const validTargetRoles = ROLE_PAIRINGS[recipeData.role] || [];
  if (!validTargetRoles.includes(candData.role)) return 0;

  let score = 0;

  // Reciprocation bonus: if candidate already lists this recipe, strong signal
  const refs = referencedBy.get(recipeSlug);
  if (refs && refs.has(candidateSlug)) {
    score += 50;
  }

  // Exact cuisine match is best
  if (cuisinesExactMatch(recipeData.cuisines, candData.cuisines)) {
    score += 30;
  } else if (cuisinesMatch(recipeData.cuisines, candData.cuisines)) {
    score += 15;
  }

  // Shared flavor profile overlap
  if (recipeData.flavorProfile?.length && candData.flavorProfile?.length) {
    const shared = recipeData.flavorProfile.filter((f) => candData.flavorProfile.includes(f));
    score += shared.length * 3;
  }

  // Shared occasion overlap
  if (recipeData.occasions?.length && candData.occasions?.length) {
    const shared = recipeData.occasions.filter((o) => candData.occasions.includes(o));
    score += shared.length * 2;
  }

  // Slight preference for easy sides/bases (they pair broadly)
  if (['side', 'base'].includes(candData.role) && candData.difficulty === 'easy') {
    score += 2;
  }

  return score;
}

/**
 * Determine if a recipe needs pairsWith filled.
 */
function needsPairsWith(data) {
  if (!('pairsWith' in data)) return true;
  if (Array.isArray(data.pairsWith) && data.pairsWith.length === 0) return true;
  return false;
}

/**
 * Suggest pairings for a recipe that needs them.
 * Returns an array of 1-3 slugs.
 */
function suggestPairings(recipeSlug, recipes, referencedBy) {
  const recipe = recipes.get(recipeSlug);
  if (!recipe) return [];

  const candidates = [];

  for (const [candSlug, candidate] of recipes) {
    const score = scorePairing(recipe, candidate, candSlug, referencedBy, recipeSlug);
    if (score > 0) {
      candidates.push({ slug: candSlug, score });
    }
  }

  candidates.sort((a, b) => b.score - a.score);

  const topN = Math.min(3, candidates.length);
  return candidates.slice(0, topN).map((c) => c.slug);
}

/**
 * Surgically update the raw file content to add or replace pairsWith
 * without reformatting the rest of the frontmatter.
 *
 * Strategy:
 *  - If the file has `pairsWith: []`, replace that line.
 *  - If the file has no pairsWith at all, insert it before the `ingredients:` line
 *    (or before the closing `---` if no ingredients line).
 */
function updateRawContent(raw, slugs) {
  const pairsLine = `pairsWith: [${slugs.join(', ')}]`;

  // Case 1: file already has pairsWith: [] — replace it
  if (/^pairsWith:\s*\[\s*\]\s*$/m.test(raw)) {
    return raw.replace(/^pairsWith:\s*\[\s*\]\s*$/m, pairsLine);
  }

  // Case 2: no pairsWith field — insert before ingredients: line
  const lines = raw.split('\n');
  const insertIndex = findInsertIndex(lines);

  if (insertIndex !== -1) {
    lines.splice(insertIndex, 0, pairsLine);
    return lines.join('\n');
  }

  // Fallback: shouldn't happen, but just in case — return unchanged
  return raw;
}

/**
 * Find the best line index to insert pairsWith.
 * Prefer inserting just before `ingredients:`.
 * Fallback to just before the closing `---`.
 */
function findInsertIndex(lines) {
  let closingFence = -1;
  let ingredientsLine = -1;
  let inFrontmatter = false;

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true;
        continue;
      }
      // This is the closing ---
      closingFence = i;
      break;
    }
    if (inFrontmatter && trimmed.startsWith('ingredients:')) {
      ingredientsLine = i;
    }
  }

  if (ingredientsLine !== -1) return ingredientsLine;
  if (closingFence !== -1) return closingFence;
  return -1;
}

async function main() {
  console.log('Loading recipes...');
  const recipes = await loadAllRecipes();
  console.log(`Loaded ${recipes.size} recipes.`);

  const referencedBy = buildReverseIndex(recipes);

  let updatedCount = 0;
  const updates = [];

  for (const [slug, recipe] of recipes) {
    if (!needsPairsWith(recipe.data)) continue;

    // Skip desserts and drinks — they rarely cross-pair meaningfully
    if (['dessert', 'drink'].includes(recipe.data.role)) continue;

    const suggestions = suggestPairings(slug, recipes, referencedBy);
    if (suggestions.length === 0) continue;

    const newRaw = updateRawContent(recipe.raw, suggestions);
    if (newRaw === recipe.raw) continue; // no change made

    recipe.newRaw = newRaw;
    updatedCount++;
    updates.push({ slug, pairsWith: suggestions });
  }

  // Write back updated files
  let writeCount = 0;
  for (const [, recipe] of recipes) {
    if (!recipe.newRaw) continue;

    const filePath = path.join(RECIPES_DIR, recipe.file);
    await fs.writeFile(filePath, recipe.newRaw, 'utf-8');
    writeCount++;
  }

  // Print summary
  console.log(`\n--- Summary ---`);
  console.log(`Total recipes: ${recipes.size}`);
  console.log(`Recipes updated: ${updatedCount}`);
  console.log(`Files written: ${writeCount}`);

  if (updates.length > 0) {
    console.log(`\nUpdated recipes:`);
    for (const { slug, pairsWith } of updates) {
      console.log(`  ${slug}: [${pairsWith.join(', ')}]`);
    }
  } else {
    console.log(`\nNo recipes needed pairsWith updates.`);
  }
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
