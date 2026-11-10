import { parseRecipeContent, isIngredientDivider, recipeDescription } from './recipe-content.mjs';
import { timeToISODuration } from './time-parse.mjs';

const categories = {
  main: 'Main course',
  side: 'Side dish',
  base: 'Base',
  dessert: 'Dessert',
  drink: 'Beverage',
  condiment: 'Condiment',
};
const diets = {
  'gluten-free': 'GlutenFreeDiet',
  vegan: 'VeganDiet',
  vegetarian: 'VegetarianDiet',
  kosher: 'KosherDiet',
  halal: 'HalalDiet',
};

// Every recipe has a 960 x 640 photo in public/images/dishes, named for its slug
// (src/data/dish-visuals.ts). The photo sits beside the recipes folder on the site, so its
// absolute address comes from the recipe's own page address.
export const RECIPE_IMAGE_SIZE = { width: 960, height: 640 };
export function recipeImageUrl(url) {
  const match = /^(https?:\/\/.+\/)recipes\/([^/]+)\/$/.exec(url || '');
  return match ? `${match[1]}images/dishes/${match[2]}.webp` : null;
}

// One representation for the site and the JSON export. Source is attribution,
// not proof of authorship; legacy nutrition is unverified and stays withheld.
export function buildRecipeSchema(data, body, url, parsed = parseRecipeContent(body)) {
  const ingredients = (data.ingredients || []).filter((value) => !isIngredientDivider(value));
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: data.title,
    description: recipeDescription(data, parsed),
    url,
    recipeIngredient: ingredients,
    recipeInstructions: parsed.instructions,
  };
  for (const key of ['prepTime', 'cookTime', 'totalTime']) {
    // Full elapsed time, with any numbered or overnight wait. A total written as a range gives
    // its upper bound. A prep or cook range stays out rather than inventing precision, and so
    // does any time with an unnumbered wait ("plus cooling").
    const duration = timeToISODuration(data[key], { ranges: key === 'totalTime' });
    if (duration) schema[key] = duration;
  }
  const image = recipeImageUrl(url);
  if (image) schema.image = [image];
  if (data.servings) schema.recipeYield = data.servings;
  if (data.role) schema.recipeCategory = categories[data.role] || data.role;
  if (data.cuisines?.length) schema.recipeCuisine = data.cuisines;
  const keywords = ['cuisines', 'flavorProfile', 'occasions', 'cookingMethods']
    .flatMap((key) => data[key] || [])
    .filter((value) => typeof value === 'string' && value);
  if (keywords.length) schema.keywords = keywords.join(', ');
  const suitableForDiet = (data.dietary || []).flatMap((diet) =>
    diets[diet.toLowerCase()] ? [`https://schema.org/${diets[diet.toLowerCase()]}`] : []
  );
  if (suitableForDiet.length) schema.suitableForDiet = suitableForDiet;
  if (data.source || data.sourceUrl) {
    schema.citation = {
      '@type': 'CreativeWork',
      ...(data.source ? { name: data.source } : {}),
      ...(data.sourceUrl ? { url: data.sourceUrl } : {}),
    };
  }
  return schema;
}
