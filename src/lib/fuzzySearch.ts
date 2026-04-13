// Fuzzy search utility using fuse.js
// Provides recipe search with typo tolerance

import Fuse from 'fuse.js';

export interface RecipeSearchItem {
  slug: string;
  title: string;
  cuisines?: string[];
  ingredients?: string[];
  flavorProfile?: string[];
  cookingMethods?: string[];
  origin?: string;
}

export interface SearchResult {
  slug: string;
  title: string;
  score: number;
  matchType: 'title' | 'ingredient' | 'cuisine' | 'other';
}

// Initialize Fuse.js with recipe search configuration
export function createRecipeSearchIndex(recipes: RecipeSearchItem[]): Fuse<RecipeSearchItem> {
  return new Fuse(recipes, {
    keys: [
      { name: 'title', weight: 10 }, // Title matches weighted highest
      { name: 'ingredients', weight: 5 }, // Ingredients weighted medium
      { name: 'cuisines', weight: 3 }, // Cuisines weighted lower
      { name: 'flavorProfile', weight: 2 }, // Flavor profiles weighted lowest
      { name: 'cookingMethods', weight: 2 },
      { name: 'origin', weight: 2 },
    ],
    threshold: 0.35, // Allow typos and fuzzy matching (0.35 = moderate strictness)
    minMatchCharLength: 2, // Minimum 2 chars for a match
    includeScore: true,
    useExtendedSearch: false,
  });
}

// Perform fuzzy search on recipes
export function searchRecipes(
  query: string,
  fuse: Fuse<RecipeSearchItem>,
  recipes: RecipeSearchItem[]
): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const results = fuse.search(query.trim());

  return results.map((result) => {
    const recipe = result.item;
    // Determine match type based on which field matched best
    let matchType: 'title' | 'ingredient' | 'cuisine' | 'other' = 'other';

    if (result.matches && result.matches.length > 0) {
      const firstMatch = result.matches[0];
      if (firstMatch.key === 'title') {
        matchType = 'title';
      } else if (firstMatch.key === 'ingredients') {
        matchType = 'ingredient';
      } else if (firstMatch.key === 'cuisines') {
        matchType = 'cuisine';
      }
    }

    return {
      slug: recipe.slug,
      title: recipe.title,
      score: 1 - (result.score || 0),
      matchType,
    };
  });
}
