// The one list of allowed tag values for recipes and meals.
// The content schema, the validator, the filters and the tests all read from here,
// so a value outside these lists fails the build instead of adding a stray filter option.

export const ROLES = ['main', 'side', 'base', 'dessert', 'drink', 'condiment'];
export const VIBES = ['quick', 'nutritious', 'comfort', 'technical', 'holiday'];
export const DIFFICULTIES = ['easy', 'intermediate', 'medium', 'hard'];

export const COOKING_METHODS = [
  'assemble',
  'bake',
  'blend',
  'boil',
  'braise',
  'broil',
  'char',
  'fry',
  'griddle',
  'grill',
  'infuse',
  'marinate',
  'mix',
  'no-cook',
  'pan-fry',
  'poach',
  'raw',
  'roast',
  'saute',
  'sear',
  'shape',
  'simmer',
  'slow-cook',
  'smoke',
  'steam',
  'stir-fry',
  'toast',
  'toss',
];

// "vegetarian" means no meat, poultry or fish and none of their stocks or sauces.
// Reviewed recipes tag a dish made with Parmigiano-Reggiano, Pecorino Romano, Gruyère or Grana
// Padano as "vegetarian-option", since those cheeses use animal rennet. Other cheeses count
// as vegetarian.
export const DIETARY = [
  'dairy-free',
  'dairy-free-option',
  'egg-free',
  'gluten-free',
  'gluten-free-option',
  'keto',
  'low-carb',
  'nut-free',
  'pescatarian',
  'vegan',
  'vegan-option',
  'vegetarian',
  'vegetarian-option',
];

export const OCCASIONS = [
  'appetizer',
  'bbq',
  'breakfast',
  'comfort-food',
  'date-night',
  'entertaining',
  'everyday',
  'family-meal',
  'game-day',
  'grilling',
  'holiday',
  'kid-friendly',
  'light-and-fresh',
  'lunch',
  'make-ahead',
  'meal-prep',
  'picnic',
  'potluck',
  'quick-lunch',
  'snack',
  'special-occasion',
  'sunday-dinner',
  'weekend-brunch',
  'weekend-dinner',
  'weekend-project',
  'weeknight',
];

export const FLAVOR_PROFILES = [
  'acidic',
  'aromatic',
  'bitter',
  'bright',
  'briny',
  'buttery',
  'caramelized',
  'clean',
  'complex',
  'creamy',
  'crispy',
  'earthy',
  'fresh',
  'herbaceous',
  'mild',
  'neutral',
  'nutty',
  'peppery',
  'rich',
  'salty',
  'savory',
  'smoky',
  'spicy',
  'sweet',
  'tangy',
  'umami',
  'warm',
  'zesty',
];

// No "-inspired" or hyphenated forms. Tex-Mex is Mexican plus American, Chinese-American is
// Chinese plus American, and a Sichuan dish carries Sichuan plus Chinese.
export const CUISINES = [
  'American',
  'Argentine',
  'Asian',
  'Belgian',
  'Cantonese',
  'Caribbean',
  'Chinese',
  'Eastern European',
  'Ethiopian',
  'French',
  'German',
  'Greek',
  'Hawaiian',
  'Indian',
  'Israeli',
  'Italian',
  'Japanese',
  'Jewish',
  'Korean',
  'Lebanese',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'North African',
  'Scandinavian',
  'Sichuan',
  'South American',
  'Southeast Asian',
  'Southern',
  'Spanish',
  'Swiss',
  'Thai',
  'Vietnamese',
];

export const SEASONS = ['fall', 'spring', 'summer', 'winter', 'year-round'];
const NAMED_SEASONS = SEASONS.filter((s) => s !== 'year-round');

export const ADVANCE_PREP = [
  'brine-overnight',
  'chill-dough',
  'chill-to-set',
  'components-ahead',
  'cook-ahead',
  'dressing-ahead',
  'freeze-ahead',
  'make-ahead',
  'make-ahead-sauce',
  'marinate-overnight',
  'meal-prep-friendly',
  'overnight-soak',
  'prep-vegetables',
  'rest-dough',
  'rise-dough',
  'season-ahead',
  'use-day-old-rice',
];

export const NUTRITIONAL_DENSITY = ['light', 'moderate', 'hearty'];
export const LEFTOVERS = ['poor', 'good', 'excellent'];
export const MEAL_TEMPLATES = [
  'plate',
  'bowl',
  'pasta-night',
  'soup-and-side',
  'one-pot',
  'grazing',
];

/** Tag list fields and their allowed values, per collection. */
export const RECIPE_TAG_LISTS = {
  cookingMethods: COOKING_METHODS,
  dietary: DIETARY,
  occasions: OCCASIONS,
  flavorProfile: FLAVOR_PROFILES,
  cuisines: CUISINES,
  seasons: SEASONS,
  advancePrep: ADVANCE_PREP,
};
export const MEAL_TAG_LISTS = { cuisines: CUISINES, occasions: OCCASIONS, seasons: SEASONS };

/** Single-value tag fields and their allowed values, per collection. */
export const RECIPE_TAG_VALUES = {
  role: ROLES,
  vibe: VIBES,
  difficulty: DIFFICULTIES,
  nutritionalDensity: NUTRITIONAL_DENSITY,
  leftovers: LEFTOVERS,
};
export const MEAL_TAG_VALUES = {
  template: MEAL_TEMPLATES,
  overallDifficulty: DIFFICULTIES,
  nutritionalDensity: NUTRITIONAL_DENSITY,
};

// Every frontmatter key the content schema names (src/content/config.ts). The schema is
// strict, so a key missing from these lists fails the build. Keep the two in step.
export const RECIPE_KEYS = [
  'miseId',
  'kb',
  'audience',
  'aliases',
  'title',
  'origin',
  'role',
  'vibe',
  'difficulty',
  'prepTime',
  'cookTime',
  'totalTime',
  'servings',
  'scaling',
  'cookingMethods',
  'dietary',
  'occasions',
  'flavorProfile',
  'cuisines',
  'seasons',
  'nutritionalDensity',
  'leftovers',
  'advancePrep',
  'equipment',
  'pairsWith',
  'pairingNotes',
  'isVariationOf',
  'usesBase',
  'extractedFrom',
  'source',
  'sourceUrl',
  'nutrition',
  'categories',
  'rating',
  'notes',
  'description',
  'learning',
  'formula',
  'ingredients',
];
export const MEAL_KEYS = [
  'title',
  'template',
  'aliases',
  'main',
  'sides',
  'base',
  'salad',
  'sauce',
  'dessert',
  'drink',
  'componentPreparation',
  'totalPrepTime',
  'totalCookTime',
  'totalActiveTime',
  'totalTime',
  'review',
  'overallDifficulty',
  'cuisines',
  'occasions',
  'seasons',
  'nutritionalDensity',
  'servings',
];

// Old frontmatter keys that the schema never read. They must not come back.
export const RETIRED_KEYS = ['season', 'healthiness', 'makeAhead'];

/** "year-round" stands alone, and all four seasons together are written as "year-round". */
export function seasonsIssue(seasons) {
  if (!Array.isArray(seasons)) return null;
  const named = NAMED_SEASONS.filter((s) => seasons.includes(s));
  if (seasons.includes('year-round') && named.length)
    return '"year-round" cannot sit beside named seasons. Keep the peak seasons or year-round.';
  if (named.length === NAMED_SEASONS.length) return 'All four seasons listed. Use "year-round".';
  return null;
}

/**
 * Every tag problem in one frontmatter object, as plain sentences.
 * kind is "recipe" or "meal".
 */
export function tagIssues(data, kind = 'recipe') {
  const lists = kind === 'meal' ? MEAL_TAG_LISTS : RECIPE_TAG_LISTS;
  const values = kind === 'meal' ? MEAL_TAG_VALUES : RECIPE_TAG_VALUES;
  const issues = [];
  for (const [field, allowed] of Object.entries(lists)) {
    if (!(field in data)) continue;
    const value = data[field];
    if (!Array.isArray(value)) {
      issues.push(
        value == null
          ? `${field} is empty. Give it a value or remove the line.`
          : `${field} must be a list`
      );
      continue;
    }
    for (const item of value)
      if (!allowed.includes(item)) issues.push(`${field}: "${item}" is not a canonical value`);
    if (new Set(value).size !== value.length) issues.push(`${field} lists a value twice`);
  }
  for (const [field, allowed] of Object.entries(values)) {
    if (!(field in data)) continue;
    const value = data[field];
    if (value == null) issues.push(`${field} is empty. Give it a value or remove the line.`);
    else if (!allowed.includes(value)) issues.push(`${field}: "${value}" is not a canonical value`);
  }
  const known = kind === 'meal' ? MEAL_KEYS : RECIPE_KEYS;
  for (const key of Object.keys(data)) {
    if (RETIRED_KEYS.includes(key)) issues.push(`${key} is a retired key. Remove it.`);
    else if (!known.includes(key)) issues.push(`${key} is not a key the content schema knows`);
  }
  const seasons = seasonsIssue(data.seasons);
  if (seasons) issues.push(`seasons: ${seasons}`);
  return issues;
}

// ── Cuisine filter groups ────────────────────────────────────────────────
// The cuisine filter shows about twenty groups. Regional and one-recipe cuisines roll up
// into a parent, so "Chinese" finds Cantonese and Sichuan dishes too.
export const CUISINE_GROUPS = [
  { key: 'American', label: 'American', members: ['American', 'Hawaiian'] },
  { key: 'Southern', label: 'Southern', members: ['Southern'] },
  { key: 'Mexican', label: 'Mexican', members: ['Mexican'] },
  {
    key: 'Latin American',
    label: 'Latin American',
    members: ['Caribbean', 'South American', 'Argentine'],
  },
  { key: 'Italian', label: 'Italian', members: ['Italian'] },
  { key: 'French', label: 'French', members: ['French'] },
  { key: 'Spanish', label: 'Spanish', members: ['Spanish'] },
  { key: 'Greek', label: 'Greek', members: ['Greek'] },
  { key: 'Mediterranean', label: 'Mediterranean', members: ['Mediterranean'] },
  {
    key: 'European',
    label: 'Other European',
    members: ['German', 'Belgian', 'Swiss', 'Scandinavian', 'Eastern European'],
  },
  { key: 'Jewish', label: 'Jewish', members: ['Jewish'] },
  {
    key: 'Middle Eastern',
    label: 'Middle Eastern and African',
    members: ['Middle Eastern', 'Lebanese', 'Israeli', 'North African', 'Ethiopian'],
  },
  { key: 'Indian', label: 'Indian', members: ['Indian'] },
  { key: 'Chinese', label: 'Chinese', members: ['Chinese', 'Cantonese', 'Sichuan'] },
  { key: 'Japanese', label: 'Japanese', members: ['Japanese'] },
  { key: 'Korean', label: 'Korean', members: ['Korean'] },
  { key: 'Thai', label: 'Thai', members: ['Thai'] },
  { key: 'Vietnamese', label: 'Vietnamese', members: ['Vietnamese'] },
  { key: 'Asian', label: 'Other Asian', members: ['Asian', 'Southeast Asian'] },
];
const GROUP_OF = new Map(CUISINE_GROUPS.flatMap((g) => g.members.map((m) => [m, g.key])));
const GROUP_LABEL = new Map(CUISINE_GROUPS.map((g) => [g.key, g.label]));

// A Southern dish is American too, so the American filter finds it.
const ALSO_IN = { Southern: ['American'] };

/** The filter groups a recipe's cuisines fall under, without repeats. */
export function cuisineGroups(cuisines) {
  const groups = (cuisines || []).map((c) => GROUP_OF.get(c)).filter(Boolean);
  return [...new Set(groups.flatMap((g) => [g, ...(ALSO_IN[g] || [])]))];
}

// Filter values from links saved before the tags were made canonical.
const OLD_CUISINES = { 'Tex-Mex': 'Mexican', 'North African': 'Middle Eastern' };

/** The current value for an old ?cuisine=, ?dietary= or ?difficulty= link value. */
export function currentFilterValue(filter, value) {
  if (filter === 'difficulty') return value === 'advanced' ? 'hard' : value;
  if (filter === 'dietary') return value.endsWith('-option') ? DIET_OPTION_KEY : value;
  if (filter === 'cuisine') {
    const base = value.replace(/-inspired$/, '').replace(/-American$/, '');
    return OLD_CUISINES[base] || GROUP_OF.get(base) || base;
  }
  return value;
}
export const cuisineGroupLabel = (key) => GROUP_LABEL.get(key) || key;

// ── Dietary filter keys ──────────────────────────────────────────────────
// A vegan recipe is also vegetarian, dairy-free and egg-free, whether or not it says so.
// Every "-option" tag folds into one choice.
export const DIET_OPTION_KEY = 'adaptable';
const DIET_LABELS = { [DIET_OPTION_KEY]: 'Has a diet swap' };

/** The dietary values a recipe matches in the filter. */
export function dietaryFilterKeys(dietary) {
  const tags = dietary || [];
  const keys = new Set(tags.filter((t) => !t.endsWith('-option')));
  if (keys.has('vegan'))
    for (const implied of ['vegetarian', 'dairy-free', 'egg-free']) keys.add(implied);
  if (tags.some((t) => t.endsWith('-option'))) keys.add(DIET_OPTION_KEY);
  return [...keys];
}
export const dietaryLabel = (key) =>
  DIET_LABELS[key] || key.charAt(0).toUpperCase() + key.slice(1).replace(/-/g, ' ');

/** Dropdown choices with at least `min` recipes behind them, in a steady order. */
export function dietaryFilterOptions(recipes, min = 3) {
  const counts = {};
  for (const { data } of recipes)
    for (const key of dietaryFilterKeys(data.dietary)) counts[key] = (counts[key] || 0) + 1;
  return [...DIETARY.filter((d) => !d.endsWith('-option')), DIET_OPTION_KEY].filter(
    (key) => (counts[key] || 0) >= min
  );
}

/** Cuisine dropdown choices that have at least one recipe, in group order. */
export function cuisineFilterOptions(recipes) {
  const used = new Set(recipes.flatMap(({ data }) => cuisineGroups(data.cuisines)));
  return CUISINE_GROUPS.filter((g) => used.has(g.key)).map((g) => ({ key: g.key, label: g.label }));
}
