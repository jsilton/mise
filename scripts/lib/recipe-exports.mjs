import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import matter from 'gray-matter';
import { parseRecipeContent, isIngredientDivider } from '../../src/lib/recipe-content.mjs';
import { buildRecipeSchema } from '../../src/lib/recipe-schema.mjs';

export const RECIPES_DIR = path.resolve('src/content/recipes');
export const SITE_URL = 'https://jordansilton.com/mise/';

export async function loadRecipes(directory = RECIPES_DIR) {
  async function files(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    return (
      await Promise.all(
        entries.map((entry) => {
          const file = path.join(dir, entry.name);
          return entry.isDirectory()
            ? files(file)
            : entry.isFile() && file.endsWith('.md')
              ? [file]
              : [];
        })
      )
    ).flat();
  }
  const recipes = [];
  for (const file of (await files(directory)).sort()) {
    const { data, content: body } = matter(await fs.readFile(file, 'utf8'));
    const slug = path.relative(directory, file).split(path.sep).join('/').replace(/\.md$/, '');
    const url = new URL(`recipes/${slug}/`, SITE_URL).href;
    const parsed = parseRecipeContent(body, { linkBaseUrl: url });
    if (!data.title?.trim()) throw new Error(`${slug}: missing title`);
    if (
      !Array.isArray(data.ingredients) ||
      !data.ingredients.every((value) => typeof value === 'string' && value.trim()) ||
      !data.ingredients.some((value) => !isIngredientDivider(value))
    ) {
      throw new Error(`${slug}: missing or invalid ingredients`);
    }
    if (!parsed.steps.length) throw new Error(`${slug}: no ordered Directions steps`);
    recipes.push({ slug, data, body, parsed, url });
  }
  assertRecipeSet(
    recipes.map((recipe) => recipe.slug),
    recipes.map((recipe) => recipe.slug)
  );
  return recipes;
}

export function assertRecipeSet(actual, expected) {
  if (!expected.length || !actual.length) throw new Error('Recipe collection is empty');
  if (new Set(actual).size !== actual.length || new Set(expected).size !== expected.length)
    throw new Error('Duplicate recipe identifiers');
  const actualSet = new Set(actual);
  const expectedSet = new Set(expected);
  const missing = expected.filter((slug) => !actualSet.has(slug));
  const extra = actual.filter((slug) => !expectedSet.has(slug));
  if (missing.length || extra.length)
    throw new Error(
      `Recipe set mismatch: missing [${missing.join(', ')}]; extra [${extra.join(', ')}]`
    );
}

export function createJsonCollection(recipes) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Collection',
    name: 'Mise Kitchen Standard - Recipes',
    description:
      'A comprehensive culinary knowledge base and collection of recipes from the Mise Kitchen Standard',
    url: SITE_URL,
    recipes: recipes.map(({ data, body, parsed, url }) =>
      buildRecipeSchema(data, body, url, parsed)
    ),
  };
}

export function validateJsonCollection(collection, recipes) {
  if (!Array.isArray(collection?.recipes)) throw new Error('Missing JSON recipe collection');
  assertRecipeSet(
    collection.recipes.map((recipe) => recipe.url),
    recipes.map((recipe) => recipe.url)
  );
  const expected = new Map(
    createJsonCollection(recipes).recipes.map((recipe) => [recipe.url, recipe])
  );
  for (const recipe of collection.recipes) {
    if (!isDeepStrictEqual(recipe, expected.get(recipe.url)))
      throw new Error(`${recipe.url}: stale or incomplete JSON recipe`);
  }
}

// Preserve ingredient quantities and Markdown labels byte-for-byte. Match the
// inline-link form supported by the site's ingredient renderer, including its
// legacy /recipes/ base rule; do not substitute a different recipe target.
export function normalizeIngredientLinks(ingredient, pageUrl) {
  return ingredient.replace(/(\[[^\]]+\]\()([^\s)]+)(\))/g, (match, open, target, close) => {
    if (/^[a-z][a-z\d+.-]*:/i.test(target)) return match;
    const absolute = target.startsWith('/recipes/')
      ? new URL(target.slice(1), SITE_URL).href
      : new URL(target, pageUrl).href;
    return `${open}${absolute}${close}`;
  });
}

export function createPaprikaRecipe(recipe, uid = randomUUID()) {
  const { data, parsed, url } = recipe;
  const attribution =
    data.source || data.sourceUrl
      ? `Source: ${[data.source, data.sourceUrl].filter(Boolean).join('\n')}`
      : '';
  return {
    uid,
    name: data.title,
    ingredients: data.ingredients
      .map((ingredient) => {
        if (!isIngredientDivider(ingredient)) return normalizeIngredientLinks(ingredient, url);
        const label = ingredient.replace(/^-{3}\s+|\s+-{3}$/g, '');
        // Paprika recognizes ingredient headings by their final colon.
        return label.endsWith(':') ? label : `${label}:`;
      })
      .join('\n'),
    // Keep section names, numbering, equipment preambles and prose. Only actual
    // ordered-list items become JSON-LD steps, but Paprika is a text format.
    directions: parsed.directionsText,
    servings: data.servings || '',
    prep_time: data.prepTime || '',
    cook_time: data.cookTime || '',
    total_time: data.totalTime || '',
    source: data.source || 'Mise Kitchen Standard',
    source_url: data.sourceUrl || url,
    categories: [
      ...new Set(
        [data.role, data.vibe, ...(data.cuisines || []), ...(data.categories || [])].filter(Boolean)
      ),
    ],
    difficulty: data.difficulty || '',
    nutritional_info: '',
    notes: [parsed.notesText, data.notes, attribution, `Mise recipe: ${url}`]
      .filter(Boolean)
      .join('\n\n'),
    rating: data.rating || 0,
    photo: '',
    photo_hash: '',
    image_url: '',
  };
}

export function createCombinedText(recipes) {
  assertRecipeSet(
    recipes.map(({ slug }) => slug),
    recipes.map(({ slug }) => slug)
  );
  return recipes
    .map(({ slug, data, body, url }) => {
      // Keep the existing record/body markers; add only selected provenance.
      const attribution = [
        url && `URL: ${url}\n`,
        data.source && `SOURCE: ${data.source}\n`,
        data.sourceUrl && `SOURCE_URL: ${data.sourceUrl}\n`,
      ]
        .filter(Boolean)
        .join('');
      return `${'='.repeat(70)}\nRECIPE: ${data.title} (${slug}.md)\nCUISINES: ${data.cuisines ? data.cuisines.join(', ') : 'None'}\n${attribution}INGREDIENTS:\n${data.ingredients.map((value) => `  - ${value}\n`).join('')}CONTENT:\n${body}\n\n`;
    })
    .join('');
}

export function validateCombinedText(value, recipes) {
  if (value !== createCombinedText(recipes))
    throw new Error('Combined text is stale or incomplete');
}

export async function writeValidatedFile(filename, value, validate) {
  await fs.mkdir(path.dirname(filename), { recursive: true });
  const temporary = `${filename}.${randomUUID()}.tmp`;
  try {
    await fs.writeFile(temporary, value);
    validate(await fs.readFile(temporary, 'utf8'));
    await fs.rename(temporary, filename);
  } finally {
    await fs.rm(temporary, { force: true });
  }
}
