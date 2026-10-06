import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { parseRecipeContent } from '../../src/lib/recipe-content.mjs';
import { buildRecipeSchema } from '../../src/lib/recipe-schema.mjs';
import {
  loadRecipes,
  createJsonCollection,
  validateJsonCollection,
  createPaprikaRecipe,
  normalizeIngredientLinks,
  createCombinedText,
  validateCombinedText,
  assertRecipeSet,
} from '../lib/recipe-exports.mjs';

function flatten(items) {
  return items.flatMap((item) =>
    item['@type'] === 'HowToStep' ? [item] : flatten(item.itemListElement)
  );
}

test('Markdown AST handles bold colons, multiline steps, nested lists, links and preambles', () => {
  const parsed = parseRecipeContent(
    `## Chef's Note\n\nA dish with **history**.\n\n## Directions\n\nUse the minimum liquid required by your cooker.\n\n1. **Prep:** Slice [onion](/mise/recipes/onion).\n   Keep the pieces even.\n\n   - Reserve the greens.\n   - Keep chilled.\n\n2. **Cook**: Heat until tender.\n\n   1. Stir once.\n   2. Cover.\n\n3. Serve & enjoy.\n\n## Notes\n\n1. This is not a method step.\n`
  );
  assert.deepEqual(
    parsed.steps.map((step) => step.text),
    [
      'Prep: Slice onion. Keep the pieces even. - Reserve the greens. - Keep chilled.',
      'Cook: Heat until tender. 1. Stir once. 2. Cover.',
      'Serve & enjoy.',
    ]
  );
  assert.equal(parsed.instructions[0]['@type'], 'HowToSection');
  assert.equal(
    parsed.instructions[0].description,
    'Use the minimum liquid required by your cooker.'
  );
  assert.deepEqual(flatten(parsed.instructions), parsed.steps);
  assert.match(parsed.directionsText, /Use the minimum liquid/);
  assert.doesNotMatch(parsed.directionsText, /not a method step/);
  assert.match(parsed.notesText, /not a method step/);
  assert.equal(parsed.chefNote, 'A dish with history.');
});

test('subsections survive and code, unordered tips and inline hashes do not invent steps', () => {
  const parsed = parseRecipeContent(
    '## Directions\n\n### Dough\n\n1. Mix.\n2. Rest.\n\n#### Cold option\n\n1. Chill.\n\n### Filling\n\n4. Add salt ## this is inline.\n\n```md\n1. Not an instruction.\n## Not a heading.\n```\n\n### Tips\n\n- Do not overfill.\n\n## Serving\n\n1. An alternative outside Directions.'
  );
  assert.equal(parsed.steps.length, 4);
  assert.deepEqual(flatten(parsed.instructions), parsed.steps);
  assert.equal(parsed.instructions[0].name, 'Dough');
  assert.equal(parsed.instructions[0].itemListElement[2].name, 'Cold option');
  assert.equal(parsed.instructions[1].name, 'Filling');
  assert.match(parsed.steps[3].text, /## this is inline/);
  assert.match(parsed.directionsText, /Do not overfill/);
  assert.match(parsed.notesText, /An alternative/);
});

test('missing methods and empty ordered-list items are not fabricated', () => {
  assert.deepEqual(parseRecipeContent('## Directions\n\nUse a pot.').steps, []);
  assert.deepEqual(parseRecipeContent('## Notes\n\n1. A note.').steps, []);
  assert.throws(() => parseRecipeContent('## Directions\n\n1.\n'), /empty ordered-list/);
});

test('all current sources have nonempty, aligned schema and export representations', async () => {
  const recipes = await loadRecipes();
  assert.equal(
    recipes.length,
    (await fs.readdir('src/content/recipes')).filter((name) => name.endsWith('.md')).length
  );
  const collection = createJsonCollection(recipes);
  validateJsonCollection(JSON.parse(JSON.stringify(collection)), recipes);
  validateCombinedText(createCombinedText(recipes), recipes);
  for (const [index, recipe] of recipes.entries()) {
    const schema = collection.recipes[index];
    assert.deepEqual(schema, buildRecipeSchema(recipe.data, recipe.body, recipe.url), recipe.slug);
    assert.deepEqual(flatten(schema.recipeInstructions), recipe.parsed.steps, recipe.slug);
    assert.ok(recipe.parsed.steps.length > 0, recipe.slug);
    const paprika = createPaprikaRecipe(recipe);
    assert.equal(paprika.directions, recipe.parsed.directionsText, recipe.slug);
    assert.ok(!('author' in schema), recipe.slug);
    assert.ok(!('nutrition' in schema), recipe.slug);
    assert.equal(paprika.nutritional_info, '', recipe.slug);
    if (recipe.data.source) assert.equal(schema.citation.name, recipe.data.source, recipe.slug);
    if (recipe.data.sourceUrl)
      assert.equal(schema.citation.url, recipe.data.sourceUrl, recipe.slug);
  }
});

test('all seven known method mismatches have their actual authored step counts', async () => {
  const recipes = new Map((await loadRecipes()).map((recipe) => [recipe.slug, recipe]));
  for (const [slug, count] of Object.entries({
    'boston-style-peking-ravioli': 10,
    'homemade-pizza-night': 9,
    'instant-pot-butternut-squash-soup': 7,
    'instant-pot-potato-leek-soup': 8,
    'red-zone-margarita': 6,
    'spatchcocked-roast-chicken': 9,
    'tonkotsu-style-ramen': 16,
  }))
    assert.equal(recipes.get(slug).parsed.steps.length, count, slug);
});

test('export policy preserves attributed sources, notes, quantities and uncertain durations', () => {
  const data = {
    title: 'Family dish',
    source: 'Aunt Jane',
    sourceUrl: 'https://example.com/original',
    origin: 'Italy',
    ingredients: ['--- Sauce ---', '1 cup cream'],
    prepTime: '10–20 min',
    notes: 'Keep the family version.',
    nutrition: { calories: 123 },
  };
  const body =
    "## Chef's Note\n\nFamily history.\n\n## Directions\n\nUse a 6-quart pot.\n\n1. **Cook:** Simmer.\n\n## Variation\n\nUse the oven for a double batch.";
  const parsed = parseRecipeContent(body);
  const recipe = { data, body, parsed, url: 'https://jordansilton.com/mise/recipes/family/' };
  const schema = buildRecipeSchema(data, body, recipe.url);
  const paprika = createPaprikaRecipe(recipe);
  assert.deepEqual(schema.recipeIngredient, ['1 cup cream']);
  assert.equal(schema.citation.name, 'Aunt Jane');
  assert.equal(schema.citation.url, data.sourceUrl);
  assert.ok(!('author' in schema));
  assert.ok(!('nutrition' in schema));
  assert.ok(!('prepTime' in schema));
  assert.ok(!('datePublished' in schema));
  assert.equal(paprika.prep_time, '10–20 min');
  assert.match(paprika.notes, /Family history/);
  assert.match(paprika.notes, /Variation/);
  assert.match(paprika.notes, /double batch/);
  assert.match(paprika.notes, /Keep the family version/);
  assert.match(paprika.notes, /Aunt Jane/);
  assert.equal(paprika.source_url, data.sourceUrl);
  assert.match(paprika.notes, /Mise recipe: https/);
});

test('validation rejects empty, missing, legacy, duplicate and stale recipe exports', async () => {
  assert.throws(() => assertRecipeSet([], []), /empty/);
  assert.throws(() => assertRecipeSet(['rice'], ['rice', 'beans']), /missing \[beans\]/);
  assert.throws(
    () => assertRecipeSet(['rice', 'old-beans'], ['rice', 'beans']),
    /extra \[old-beans\]/
  );
  assert.throws(() => assertRecipeSet(['rice', 'rice'], ['rice']), /Duplicate/);
  const recipes = (await loadRecipes()).slice(0, 2);
  const stale = createJsonCollection(recipes);
  stale.recipes[0].recipeInstructions = [];
  assert.throws(() => validateJsonCollection(stale, recipes), /incomplete/);
  assert.throws(
    () => validateCombinedText(createCombinedText(recipes).replace('CONTENT:', 'STALE:'), recipes),
    /stale/
  );
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'mise-invalid-'));
  try {
    await assert.rejects(loadRecipes(dir), /empty/);
    await fs.writeFile(
      path.join(dir, 'invalid.md'),
      '---\ntitle: Broken\ningredients: [Salt]\n---\n## Directions\n\nUse a pot.'
    );
    await assert.rejects(loadRecipes(dir), /no ordered Directions/);
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
});

test('text exports retain inline and reference-link URLs, including original source credits', () => {
  const parsed = parseRecipeContent(
    "## Chef's Note\n\nAdapted from [Publisher][original].\n\n## Directions\n\n1. Use [Rice](/mise/recipes/rice/).\n\n## Source\n\n[Author](https://example.com/author)\n\n[original]: https://example.com/original"
  );
  assert.equal(parsed.steps[0].text, 'Use Rice.');
  assert.match(parsed.directionsText, /Rice \(\/mise\/recipes\/rice\/\)/);
  assert.match(parsed.notesText, /Publisher \(https:\/\/example.com\/original\)/);
  assert.match(parsed.notesText, /Author \(https:\/\/example.com\/author\)/);
});

test('Paprika body links resolve against the canonical recipe page outside the website', () => {
  const parsed = parseRecipeContent(
    '## Directions\n\n1. Use [Rice](/mise/recipes/rice/?batch=2#directions), [Beans](../beans/), or see [this step](#directions).',
    { linkBaseUrl: 'https://jordansilton.com/mise/recipes/supper/' }
  );
  assert.match(
    parsed.directionsText,
    /https:\/\/jordansilton.com\/mise\/recipes\/rice\/\?batch=2#directions/
  );
  assert.match(parsed.directionsText, /https:\/\/jordansilton.com\/mise\/recipes\/beans\//);
  assert.match(
    parsed.directionsText,
    /https:\/\/jordansilton.com\/mise\/recipes\/supper\/#directions/
  );
});

test('Paprika ingredient links retain quantities and labels while applying the site base rule', () => {
  const url = 'https://jordansilton.com/mise/recipes/supper/';
  assert.equal(
    normalizeIngredientLinks(
      '1 cup [Onions](/recipes/pickled-red-onions?batch=2#ingredients), drained',
      url
    ),
    '1 cup [Onions](https://jordansilton.com/mise/recipes/pickled-red-onions?batch=2#ingredients), drained'
  );
  assert.equal(
    normalizeIngredientLinks('4 [Pita](/mise/recipes/warm-pita-bread)', url),
    '4 [Pita](https://jordansilton.com/mise/recipes/warm-pita-bread)'
  );
  assert.equal(
    normalizeIngredientLinks('1/2 [Rice](../rice/), prepared', url),
    '1/2 [Rice](https://jordansilton.com/mise/recipes/rice/), prepared'
  );
  assert.equal(
    normalizeIngredientLinks('2 cups [Original](https://example.com/unchanged)', url),
    '2 cups [Original](https://example.com/unchanged)'
  );
  assert.equal(normalizeIngredientLinks('2 (14 oz) cans tomatoes', url), '2 (14 oz) cans tomatoes');
});

test('every corpus ingredient link exports its existing target as an absolute URL', async () => {
  const recipes = await loadRecipes();
  let links = 0;
  let legacyBaseLinks = 0;
  for (const recipe of recipes) {
    const exported = createPaprikaRecipe(recipe).ingredients.split('\n');
    for (const [index, original] of recipe.data.ingredients.entries()) {
      const originalLinks = [...original.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
      if (!originalLinks.length) continue;
      const exportedLinks = [...exported[index].matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
      assert.equal(exportedLinks.length, originalLinks.length, recipe.slug);
      assert.equal(
        exported[index].replace(/\]\([^)]+\)/g, ']()'),
        original.replace(/\]\([^)]+\)/g, ']()'),
        recipe.slug
      );
      for (const [position, originalLink] of originalLinks.entries()) {
        const target = originalLink[2];
        const expected = new URL(
          target.startsWith('/recipes/') ? `/mise${target}` : target,
          recipe.url
        ).href;
        assert.equal(exportedLinks[position][1], originalLink[1], recipe.slug);
        assert.equal(exportedLinks[position][2], expected, recipe.slug);
        assert.match(exportedLinks[position][2], /^https?:\/\//, recipe.slug);
        links++;
        if (target.startsWith('/recipes/')) legacyBaseLinks++;
      }
    }
  }
  assert.ok(links >= 34, 'covers all current component links');
  assert.ok(legacyBaseLinks >= 3, 'covers the three legacy root recipe links');
  const bySlug = new Map(recipes.map((recipe) => [recipe.slug, recipe]));
  // The source-reviewed pizza/shells batch removes two semantic mislinks.
  // The remaining corpus links still use the same normalization assertions above.
  assert.doesNotMatch(createPaprikaRecipe(bySlug.get('pizza')).ingredients, /fresh-pasta-dough/);
  assert.doesNotMatch(
    createPaprikaRecipe(bySlug.get('stuffed-shells-filled-with-spinach-and-ricotta')).ingredients,
    /roasted-tomato-basil-soup/
  );
});

test('Paprika marks only recognized ingredient dividers as colon-ended headings', async () => {
  const data = {
    title: 'Heading format',
    ingredients: [
      '--- Sauce ---',
      '1 cup cream',
      '--- Filling: ---',
      '2 tbsp butter',
      'Plain label',
      '---Unrecognized---',
    ],
  };
  const original = structuredClone(data);
  const body = '## Directions\n\n1. Mix.';
  const recipe = {
    data,
    body,
    parsed: parseRecipeContent(body),
    url: 'https://jordansilton.com/mise/recipes/heading-format/',
  };
  assert.equal(
    createPaprikaRecipe(recipe).ingredients,
    'Sauce:\n1 cup cream\nFilling:\n2 tbsp butter\nPlain label\n---Unrecognized---'
  );
  assert.deepEqual(data, original);
  assert.deepEqual(buildRecipeSchema(data, body, recipe.url).recipeIngredient, [
    '1 cup cream',
    '2 tbsp butter',
    'Plain label',
    '---Unrecognized---',
  ]);
  for (const recipe of await loadRecipes()) {
    const exported = createPaprikaRecipe(recipe).ingredients.split('\n');
    for (const [index, ingredient] of recipe.data.ingredients.entries()) {
      const divider = ingredient.match(/^-{3}\s+(.+?)\s+-{3}$/);
      if (!divider) continue;
      const label = divider[1];
      assert.equal(exported[index], label.endsWith(':') ? label : `${label}:`, recipe.slug);
    }
  }
});

test('combined text preserves selected frontmatter attribution without dumping legacy fields', () => {
  const recipe = {
    slug: 'family-dish',
    url: 'https://jordansilton.com/mise/recipes/family-dish/',
    data: {
      title: 'Family Dish',
      cuisines: ['Italian'],
      ingredients: ['1 cup cream'],
      source: 'Aunt Jane via Publisher',
      sourceUrl: 'https://example.com/original',
      nutrition: { calories: 123 },
      origin: 'Italy',
      learning: { review: { status: 'editorial-review' } },
    },
    body: "\n## Chef's Note\n\nThe full authored story.\n\n## Directions\n\n1. **Cook:** Simmer.\n",
  };
  const original = structuredClone(recipe);
  const output = createCombinedText([recipe]);
  assert.match(output, /^={70}\nRECIPE: Family Dish \(family-dish\.md\)\nCUISINES: Italian\n/);
  assert.ok(
    output.includes(
      `URL: ${recipe.url}\nSOURCE: ${recipe.data.source}\nSOURCE_URL: ${recipe.data.sourceUrl}\nINGREDIENTS:\n`
    )
  );
  assert.ok(output.endsWith(`INGREDIENTS:\n  - 1 cup cream\nCONTENT:\n${recipe.body}\n\n`));
  assert.doesNotMatch(output, /calories|nutrition|editorial-review|learning|ORIGIN:/);
  assert.deepEqual(recipe, original);
  const withoutCredit = createCombinedText([
    { ...recipe, data: { title: 'Plain', ingredients: ['Salt'] } },
  ]);
  assert.ok(withoutCredit.includes(`URL: ${recipe.url}\n`));
  assert.doesNotMatch(withoutCredit, /SOURCE:|SOURCE_URL:|undefined/);
});

test('combined text retains every current source credit, including frontmatter-only URLs', async () => {
  const recipes = await loadRecipes();
  const combined = createCombinedText(recipes);
  const blocks = combined.split(`${'='.repeat(70)}\n`).filter(Boolean);
  assert.equal(blocks.length, recipes.length);
  let frontmatterOnly = 0;
  for (const [index, recipe] of recipes.entries()) {
    const block = blocks[index];
    assert.equal(block.match(/^RECIPE:\s*(.*)/m)[1], `${recipe.data.title} (${recipe.slug}.md)`);
    assert.ok(block.includes(`\nURL: ${recipe.url}\n`), recipe.slug);
    if (recipe.data.source)
      assert.ok(block.includes(`\nSOURCE: ${recipe.data.source}\n`), recipe.slug);
    if (recipe.data.sourceUrl) {
      assert.ok(block.includes(`\nSOURCE_URL: ${recipe.data.sourceUrl}\n`), recipe.slug);
      if (!recipe.body.includes(recipe.data.sourceUrl)) frontmatterOnly++;
    }
    assert.ok(block.endsWith(`CONTENT:\n${recipe.body}\n\n`), recipe.slug);
  }
  assert.ok(frontmatterOnly >= 18, 'covers source URLs absent from authored bodies');
});
