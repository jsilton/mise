import { parseRecipeContent, isIngredientDivider, recipeDescription } from './recipe-content.mjs';
import { timeToISO } from './time.mjs';

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
    const duration = timeToISO(data[key]);
    if (duration) schema[key] = duration;
  }
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
