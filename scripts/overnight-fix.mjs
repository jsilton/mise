#!/usr/bin/env node
/**
 * overnight-fix.mjs — Automated recipe metadata + formatting sweep
 *
 * Fills gaps in: origin, dietary, seasons, equipment, advancePrep
 * Fixes: unformatted direction steps (adds bold step headers)
 *
 * Run modes:
 *   node scripts/overnight-fix.mjs --dry-run       Preview changes, write nothing
 *   node scripts/overnight-fix.mjs                  Apply all changes
 *
 * Output: logs every change to stdout and writes a summary report to
 *   public/recipes/overnight-fix-report.json
 */

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const RECIPES_DIR = path.resolve('src/content/recipes');
const REPORT_PATH = path.resolve('public', 'recipes', 'overnight-fix-report.json');
const DRY_RUN = process.argv.includes('--dry-run');

// ═══════════════════════════════════════════════════════
//  MAPPINGS & HEURISTIC DATA
// ═══════════════════════════════════════════════════════

const CUISINE_TO_ORIGIN = {
  Chinese: 'China',
  Japanese: 'Japan',
  Korean: 'Korea',
  Thai: 'Thailand',
  Vietnamese: 'Vietnam',
  Indian: 'India',
  Italian: 'Italy',
  French: 'France',
  Spanish: 'Spain',
  Mexican: 'Mexico',
  Greek: 'Greece',
  Turkish: 'Turkey',
  Lebanese: 'Lebanon',
  Moroccan: 'Morocco',
  Ethiopian: 'Ethiopia',
  American: 'United States',
  Southern: 'United States',
  Cajun: 'United States',
  Brazilian: 'Brazil',
  Peruvian: 'Peru',
  Argentine: 'Argentina',
  British: 'United Kingdom',
  German: 'Germany',
  Irish: 'Ireland',
  Polish: 'Poland',
  Russian: 'Russia',
  Filipino: 'Philippines',
  Indonesian: 'Indonesia',
  Malaysian: 'Malaysia',
  Cuban: 'Cuba',
  Jamaican: 'Jamaica',
  Hawaiian: 'United States',
  'Middle Eastern': 'Middle East',
  Mediterranean: 'Mediterranean',
  Caribbean: 'Caribbean',
  'Southeast-Asian': 'Southeast Asia',
};

// When multiple cuisines exist, priority order for origin
const ORIGIN_PRIORITY = [
  'Chinese',
  'Japanese',
  'Korean',
  'Thai',
  'Vietnamese',
  'Indian',
  'Italian',
  'French',
  'Spanish',
  'Greek',
  'Turkish',
  'Lebanese',
  'Moroccan',
  'Ethiopian',
  'Mexican',
  'Cuban',
  'Jamaican',
  'Brazilian',
  'Peruvian',
  'Argentine',
  'Filipino',
  'Indonesian',
  'Malaysian',
  'German',
  'Irish',
  'Polish',
  'Russian',
  'British',
  'Southern',
  'Cajun',
  'Hawaiian',
  'Middle Eastern',
  'Mediterranean',
  'Caribbean',
  'Southeast-Asian',
  'American', // lowest priority — too generic
];

// ─── Dietary inference keywords ───
const MEAT_WORDS = [
  'chicken',
  'beef',
  'pork',
  'lamb',
  'turkey',
  'bacon',
  'sausage',
  'steak',
  'brisket',
  'ribs',
  'prosciutto',
  'pancetta',
  'chorizo',
  'ham',
  'veal',
  'duck',
  'venison',
  'goat',
  'meatball',
  'ground beef',
  'ground pork',
  'ground turkey',
  'ground chicken',
  'short rib',
  'tenderloin',
  'salami',
  'pepperoni',
  'hot dog',
  'bratwurst',
  'andouille',
  'kielbasa',
  'carnitas',
  'pulled pork',
  'corned beef',
  'pastrami',
];

const FISH_WORDS = [
  'salmon',
  'tuna',
  'shrimp',
  'cod',
  'fish',
  'crab',
  'lobster',
  'scallop',
  'mussel',
  'clam',
  'oyster',
  'anchov',
  'sardine',
  'swordfish',
  'tilapia',
  'halibut',
  'mahi',
  'calamari',
  'squid',
  'octopus',
  'prawn',
  'crawfish',
  'catfish',
  'trout',
  'snapper',
  'sea bass',
  'mackerel',
  'bonito',
  'fish sauce',
  'dashi',
];

// Seafood-only words (not fish sauce / dashi which are condiments in many vegetarian contexts)
const STRICT_FISH_WORDS = [
  'salmon',
  'tuna',
  'shrimp',
  'cod',
  'fish',
  'crab',
  'lobster',
  'scallop',
  'mussel',
  'clam',
  'oyster',
  'sardine',
  'swordfish',
  'tilapia',
  'halibut',
  'mahi',
  'calamari',
  'squid',
  'octopus',
  'prawn',
  'crawfish',
  'catfish',
  'trout',
  'snapper',
  'sea bass',
  'mackerel',
];

const DAIRY_WORDS = [
  'milk',
  'cream',
  'cheese',
  'butter',
  'yogurt',
  'sour cream',
  'mascarpone',
  'ricotta',
  'mozzarella',
  'parmesan',
  'cheddar',
  'gruyere',
  'brie',
  'feta',
  'gouda',
  'cream cheese',
  'half-and-half',
  'ghee',
  'buttermilk',
  'whipping cream',
  'heavy cream',
  'crème',
  'pecorino',
  'provolone',
  'fontina',
  'manchego',
  'goat cheese',
  'queso',
  'cotija',
  'paneer',
  'labneh',
];

const GLUTEN_WORDS = [
  'flour',
  'bread',
  'pasta',
  'noodle',
  'tortilla',
  'pita',
  'baguette',
  'crouton',
  'breadcrumb',
  'panko',
  'soy sauce',
  'couscous',
  'orzo',
  'farro',
  'barley',
  'rye',
  'wheat',
  'seitan',
  'udon',
  'ramen',
  'wonton',
  'dumpling',
  'gyoza',
  'pizza dough',
  'pie crust',
  'puff pastry',
  'phyllo',
  'croissant',
  'brioche',
  'sourdough',
  'all-purpose flour',
  'cake flour',
  'bread flour',
];

const EGG_WORDS = ['egg', 'eggs', 'yolk', 'egg white', 'meringue', 'custard', 'aioli'];

const NUT_WORDS = [
  'almond',
  'walnut',
  'pecan',
  'cashew',
  'pistachio',
  'peanut',
  'hazelnut',
  'macadamia',
  'pine nut',
  'chestnut',
  'nut butter',
  'almond butter',
  'peanut butter',
  'cashew cream',
  'tahini',
];

// ─── Equipment keyword → slug mapping ───
const EQUIPMENT_KEYWORDS = [
  { pattern: /\b(dutch oven)\b/i, slug: 'dutch-oven' },
  { pattern: /\b(cast[- ]iron)\b/i, slug: 'cast-iron-skillet' },
  { pattern: /\b(sheet pan|baking sheet|rimmed baking)\b/i, slug: 'baking-sheet' },
  { pattern: /\b(food processor)\b/i, slug: 'food-processor' },
  { pattern: /\b(immersion blender|stick blender)\b/i, slug: 'immersion-blender' },
  { pattern: /\b(stand mixer)\b/i, slug: 'stand-mixer' },
  { pattern: /\b(hand mixer|electric mixer)\b/i, slug: 'hand-mixer' },
  { pattern: /\b(instant pot|pressure cooker)\b/i, slug: 'instant-pot' },
  { pattern: /\b(slow cooker|crock[- ]?pot)\b/i, slug: 'slow-cooker' },
  { pattern: /\b(rice cooker)\b/i, slug: 'rice-cooker' },
  { pattern: /\b(air fryer)\b/i, slug: 'air-fryer' },
  { pattern: /\b(sous vide)\b/i, slug: 'sous-vide' },
  { pattern: /\bblender\b/i, slug: 'blender' },
  { pattern: /\b(wok)\b/i, slug: 'wok' },
  { pattern: /\bgrill(?:ed|ing)?\b/i, slug: 'grill' },
  { pattern: /\b(smoker|smoking)\b/i, slug: 'smoker' },
  { pattern: /\b(mandoline)\b/i, slug: 'mandoline' },
  { pattern: /\b(thermometer)\b/i, slug: 'thermometer' },
  { pattern: /\b(rolling pin)\b/i, slug: 'rolling-pin' },
  { pattern: /\b(mortar and pestle|mortar & pestle)\b/i, slug: 'mortar-and-pestle' },
  { pattern: /\b(springform)\b/i, slug: 'springform-pan' },
  { pattern: /\b(bundt)\b/i, slug: 'bundt-pan' },
  { pattern: /\b(muffin tin|muffin pan)\b/i, slug: 'muffin-tin' },
  { pattern: /\b(loaf pan)\b/i, slug: 'loaf-pan' },
  { pattern: /\b(pie dish|pie pan|pie plate)\b/i, slug: 'pie-dish' },
  { pattern: /\b(box grater)\b/i, slug: 'box-grater' },
  { pattern: /\b(microplane|zester)\b/i, slug: 'microplane' },
  { pattern: /\b(potato ricer)\b/i, slug: 'potato-ricer' },
  { pattern: /\b(colander)\b/i, slug: 'colander' },
  { pattern: /\b(mixing bowl)\b/i, slug: 'mixing-bowl' },
  { pattern: /\b(9x13|baking dish|casserole dish)\b/i, slug: 'baking-dish' },
  { pattern: /\b(ramekin)\b/i, slug: 'ramekin' },
  { pattern: /\b(skillet|frying pan)\b(?!.*cast)/i, slug: 'skillet' },
  { pattern: /\b(saucepan)\b/i, slug: 'saucepan' },
  { pattern: /\b(stockpot)\b/i, slug: 'stockpot' },
];

// ─── Seasonal ingredient signals ───
const SUMMER_INGREDIENTS = [
  'watermelon',
  'peach',
  'nectarine',
  'corn on the cob',
  'zucchini',
  'tomato',
  'basil',
  'cucumber',
  'bell pepper',
  'berry',
  'blueberr',
  'strawberr',
  'raspberry',
  'blackberry',
  'melon',
  'grilled',
];
const FALL_INGREDIENTS = [
  'pumpkin',
  'butternut',
  'acorn squash',
  'apple cider',
  'cranberr',
  'sweet potato',
  'sage',
  'cinnamon',
  'nutmeg',
  'maple',
];
const WINTER_INGREDIENTS = [
  'stew',
  'braise',
  'pot roast',
  'mulled',
  'gingerbread',
  'hot cocoa',
  'root vegetable',
  'parsnip',
  'turnip',
  'rutabaga',
];

// ─── Advance prep signals ───
const ADVANCE_PREP_SIGNALS = [
  { pattern: /\bmarinate?\b.*\b(overnight|hours|day|ahead)\b/i, tag: 'marinate-overnight' },
  { pattern: /\bmarinate?\b/i, tag: 'marinate-ahead' },
  { pattern: /\b(brine|dry[- ]brine)\b/i, tag: 'brine-ahead' },
  { pattern: /\bmake[- ]?ahead\b/i, tag: 'make-ahead' },
  { pattern: /\b(day before|night before|ahead of time|in advance)\b/i, tag: 'make-ahead' },
  { pattern: /\b(can be made|prepare.*earlier|prep.*advance)\b/i, tag: 'make-ahead' },
  { pattern: /\b(refrigerat|chill).*\b(hour|overnight|day)\b/i, tag: 'make-ahead' },
  { pattern: /\brest.*\b(overnight|day)\b/i, tag: 'make-ahead' },
  { pattern: /\b(dough|batter).*\brest\b/i, tag: 'components-ahead' },
  { pattern: /\bsoak.*\b(overnight|hours)\b/i, tag: 'soak-overnight' },
  { pattern: /\b(sauce|dressing|vinaigrette).*\bahead\b/i, tag: 'make-ahead-sauce' },
];

// ═══════════════════════════════════════════════════════
//  INFERENCE FUNCTIONS
// ═══════════════════════════════════════════════════════

/**
 * Infer origin from the cuisines array.
 * Uses priority ordering: more specific cuisines first.
 */
function inferOrigin(data) {
  const cuisines = data.cuisines;
  if (!cuisines?.length) return null;

  // Pick the highest-priority cuisine that has a mapping
  for (const c of ORIGIN_PRIORITY) {
    if (cuisines.includes(c) && CUISINE_TO_ORIGIN[c]) {
      return CUISINE_TO_ORIGIN[c];
    }
  }

  // Fallback: just try the first cuisine
  return CUISINE_TO_ORIGIN[cuisines[0]] || null;
}

/**
 * Infer dietary tags from ingredients list + body text.
 * Only returns tags we're confident about.
 */
function inferDietary(data, bodyText) {
  const searchText = [...(data.ingredients || []), data.title || '', bodyText]
    .join(' ')
    .toLowerCase();

  const tags = [];

  const hasMeat = MEAT_WORDS.some((w) => searchText.includes(w));
  const hasFish = STRICT_FISH_WORDS.some((w) => searchText.includes(w));
  const hasDairy = DAIRY_WORDS.some((w) => searchText.includes(w));
  const hasEgg = EGG_WORDS.some((w) => searchText.includes(w));
  const hasGluten = GLUTEN_WORDS.some((w) => searchText.includes(w));
  const hasNuts = NUT_WORDS.some((w) => searchText.includes(w));

  if (!hasMeat && !hasFish) tags.push('vegetarian');
  if (!hasMeat && !hasFish && !hasDairy && !hasEgg) tags.push('vegan');
  if (!hasGluten) tags.push('gluten-free');
  if (!hasDairy) tags.push('dairy-free');
  if (!hasNuts) tags.push('nut-free');

  return tags;
}

/**
 * Infer seasons from recipe characteristics.
 */
function inferSeasons(data, bodyText) {
  const searchText = [...(data.ingredients || []), data.title || '', bodyText]
    .join(' ')
    .toLowerCase();

  const occasions = data.occasions || [];
  const cookingMethods = data.cookingMethods || [];

  // Check for seasonal signals
  let spring = false,
    summer = false,
    fall = false,
    winter = false;

  // Occasion-based signals
  if (occasions.includes('comfort-food')) {
    fall = true;
    winter = true;
  }
  if (occasions.includes('light-and-fresh')) {
    spring = true;
    summer = true;
  }
  if (occasions.includes('bbq')) {
    spring = true;
    summer = true;
  }
  if (occasions.includes('grilling')) {
    spring = true;
    summer = true;
  }
  if (occasions.includes('holiday')) {
    fall = true;
    winter = true;
  }
  if (occasions.includes('thanksgiving')) {
    fall = true;
  }
  if (occasions.includes('summer-party')) {
    summer = true;
  }

  // Cooking method signals
  if (cookingMethods.includes('grill')) {
    spring = true;
    summer = true;
  }
  if (cookingMethods.includes('braise')) {
    fall = true;
    winter = true;
  }
  if (cookingMethods.includes('slow-cook')) {
    fall = true;
    winter = true;
  }
  if (cookingMethods.includes('no-cook')) {
    spring = true;
    summer = true;
  }

  // Ingredient signals
  if (SUMMER_INGREDIENTS.some((w) => searchText.includes(w))) {
    summer = true;
  }
  if (FALL_INGREDIENTS.some((w) => searchText.includes(w))) {
    fall = true;
  }
  if (WINTER_INGREDIENTS.some((w) => searchText.includes(w))) {
    winter = true;
  }

  // If we found specific seasonal signals, build the array
  const seasons = [];
  if (spring) seasons.push('spring');
  if (summer) seasons.push('summer');
  if (fall) seasons.push('fall');
  if (winter) seasons.push('winter');

  // If we found none, or found all four, default to year-round
  if (seasons.length === 0 || seasons.length === 4) {
    return ['spring', 'summer', 'fall', 'winter'];
  }

  // If only found summer signals, add spring too (shoulder season)
  if (seasons.length === 1 && seasons[0] === 'summer') seasons.unshift('spring');
  // If only found winter signals, add fall too
  if (seasons.length === 1 && seasons[0] === 'winter') seasons.unshift('fall');

  return seasons;
}

/**
 * Detect equipment from directions and notes text.
 */
function inferEquipment(bodyText) {
  const found = new Set();

  for (const { pattern, slug } of EQUIPMENT_KEYWORDS) {
    if (pattern.test(bodyText)) {
      found.add(slug);
    }
  }

  // Don't return overly generic items alone — mixing-bowl on its own isn't useful
  if (found.size === 1 && found.has('mixing-bowl')) return [];
  if (found.size === 1 && found.has('skillet')) return ['skillet'];

  return [...found].sort();
}

/**
 * Detect advance prep possibilities from recipe text.
 */
function inferAdvancePrep(bodyText) {
  const found = new Set();

  for (const { pattern, tag } of ADVANCE_PREP_SIGNALS) {
    if (pattern.test(bodyText)) {
      found.add(tag);
    }
  }

  // Deduplicate: if we have marinate-overnight, drop marinate-ahead
  if (found.has('marinate-overnight')) found.delete('marinate-ahead');

  return [...found].sort();
}

// ═══════════════════════════════════════════════════════
//  BOLD STEP HEADER FORMATTING
// ═══════════════════════════════════════════════════════

/**
 * Extract a short bold header from a direction step.
 *
 * Handles:
 *   "Preheat oven to 400°F."             → "**Preheat oven** to 400°F."
 *   "In a large skillet, heat olive oil"  → "**Heat olive oil:** In a large skillet, heat..."
 *   "Season chicken with salt and pepper" → "**Season chicken** with salt and pepper"
 */
function addBoldHeader(stepText) {
  // Already has bold — skip
  if (/\*\*/.test(stepText)) return stepText;

  const trimmed = stepText.trim();

  // Pattern: starts with prepositional phrase "In a..., " "On a..., " "Using a..., "
  const prepMatch = trimmed.match(
    /^(In an?|On an?|Using an?|With an?|Over|From|Into|Through)\b[^,]*,\s*/i
  );
  if (prepMatch) {
    const afterPrep = trimmed.slice(prepMatch[0].length);
    const header = extractVerbPhrase(afterPrep);
    if (header) {
      return `**${header}:** ${trimmed}`;
    }
  }

  // Pattern: starts directly with a verb
  const header = extractVerbPhrase(trimmed);
  if (header) {
    const rest = trimmed.slice(header.length).replace(/^\s*/, '');
    // If rest starts with punctuation like - or : keep it, otherwise add :
    if (/^[:\-–—]/.test(rest)) {
      return `**${header}** ${rest}`;
    }
    return `**${header}:** ${rest}`;
  }

  // Fallback: bold the first 2-3 words
  const words = trimmed.split(/\s+/);
  const headerLen = Math.min(3, words.length - 1);
  if (headerLen >= 1 && words.length > 1) {
    const hdr = words.slice(0, headerLen).join(' ');
    const remaining = words.slice(headerLen).join(' ');
    return `**${hdr}:** ${remaining}`;
  }

  return trimmed;
}

/**
 * Extract a 1-4 word verb phrase from the start of text.
 * Stops at prepositions, conjunctions, or natural break points.
 */
function extractVerbPhrase(text) {
  const words = text.split(/\s+/);
  if (words.length === 0) return null;

  // Stop words — these mark the end of the verb phrase
  const STOP_WORDS = new Set([
    'in',
    'on',
    'to',
    'for',
    'with',
    'until',
    'over',
    'into',
    'from',
    'at',
    'by',
    'about',
    'through',
    'according',
    'and',
    'or',
    'but',
    'while',
    'then',
    'so',
    'if',
    'when',
    'before',
    'after',
  ]);

  // Verbs that take a direct object — we want 2 words
  const TRANSITIVE_VERBS = new Set([
    'preheat',
    'heat',
    'season',
    'cook',
    'add',
    'mix',
    'combine',
    'whisk',
    'stir',
    'fold',
    'toss',
    'place',
    'arrange',
    'layer',
    'pour',
    'drizzle',
    'spread',
    'brush',
    'rub',
    'coat',
    'top',
    'slice',
    'dice',
    'chop',
    'mince',
    'julienne',
    'shred',
    'grate',
    'sear',
    'brown',
    'roast',
    'bake',
    'broil',
    'grill',
    'fry',
    'sauté',
    'saute',
    'braise',
    'simmer',
    'boil',
    'steam',
    'poach',
    'blanch',
    'toast',
    'char',
    'smoke',
    'marinate',
    'brine',
    'prepare',
    'make',
    'build',
    'assemble',
    'create',
    'form',
    'shape',
    'roll',
    'stuff',
    'fill',
    'line',
    'grease',
    'butter',
    'remove',
    'transfer',
    'strain',
    'drain',
    'squeeze',
    'press',
    'blend',
    'puree',
    'process',
    'mash',
    'crush',
    'pound',
    'trim',
    'peel',
    'core',
    'seed',
    'debone',
    'butterfly',
    'reduce',
    'deglaze',
    'mount',
    'finish',
    'garnish',
    'plate',
    'serve',
    'rest',
    'cool',
    'chill',
    'freeze',
    'thaw',
    'set',
    'bring',
    'let',
    'check',
    'taste',
    'adjust',
    'temper',
  ]);

  // First word should ideally be a verb
  const firstWord = words[0].toLowerCase().replace(/[^a-z]/g, '');

  // Single-word actions that are complete on their own
  const STANDALONE = new Set(['serve', 'rest', 'cool', 'chill', 'garnish', 'plate', 'finish']);
  if (STANDALONE.has(firstWord) && words.length > 1) {
    // Check if word 2 is a stop word → standalone
    if (words.length === 1 || STOP_WORDS.has(words[1].toLowerCase())) {
      return words[0];
    }
  }

  // Build the phrase up to 4 words, stopping at stop words
  const phrase = [words[0]];
  const maxWords = TRANSITIVE_VERBS.has(firstWord) ? 4 : 3;

  for (let i = 1; i < Math.min(words.length, maxWords); i++) {
    const w = words[i].toLowerCase().replace(/[^a-z'-]/g, '');
    if (STOP_WORDS.has(w)) break;
    // Also stop at "the" unless it's word 2 (e.g., "Remove the chicken")
    if (w === 'the' && i > 1) break;
    phrase.push(words[i]);
  }

  // Don't return a phrase that's the entire step
  if (phrase.length >= words.length) {
    // If it's a short step (3 words or less), just bold the first word
    return words[0];
  }

  return phrase.join(' ');
}

/**
 * Process the Directions section of a recipe body.
 * Returns { newBody, stepsFixed } if any changes were made.
 */
function fixDirectionsFormatting(body) {
  // Find the Directions section
  const directionsHeader = /^##\s*Directions\s*$/im;
  const headerMatch = body.match(directionsHeader);
  if (!headerMatch) return { newBody: body, stepsFixed: 0 };

  const headerIndex = headerMatch.index;
  const afterHeader = body.slice(headerIndex);

  // Find the end of the Directions section (next ## header or end of file)
  const nextHeaderMatch = afterHeader.match(/\n##\s+/);
  const sectionEnd = nextHeaderMatch ? headerIndex + nextHeaderMatch.index : body.length;

  const sectionText = body.slice(headerIndex, sectionEnd);

  // Check if any steps already have bold formatting
  const hasBoldSteps = /\d+\.\s+\*\*/.test(sectionText);

  // If ALL steps already have bold, skip
  const stepLines = sectionText.match(/^\d+\.\s+.+$/gm) || [];
  const unformattedSteps = stepLines.filter((l) => !/\*\*/.test(l));

  if (unformattedSteps.length === 0) return { newBody: body, stepsFixed: 0 };

  // If some steps have bold and others don't, only fix the unformatted ones
  // If no steps have bold, fix all of them
  let newSection = sectionText;
  let stepsFixed = 0;

  for (const line of unformattedSteps) {
    const numMatch = line.match(/^(\d+\.\s+)/);
    if (!numMatch) continue;

    const prefix = numMatch[1]; // e.g., "1. " or "1.  "
    const stepText = line.slice(prefix.length);
    const newStepText = addBoldHeader(stepText);

    if (newStepText !== stepText) {
      // Escape regex special chars in the original line for replacement
      const escaped = line.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      newSection = newSection.replace(new RegExp(escaped), `${prefix}${newStepText}`);
      stepsFixed++;
    }
  }

  if (stepsFixed === 0) return { newBody: body, stepsFixed: 0 };

  const newBody = body.slice(0, headerIndex) + newSection + body.slice(sectionEnd);
  return { newBody, stepsFixed };
}

// ═══════════════════════════════════════════════════════
//  FILE SURGERY — add fields without reformatting YAML
// ═══════════════════════════════════════════════════════

/**
 * Insert a field into frontmatter text without changing existing formatting.
 * Inserts before `ingredients:` or before closing `---`.
 */
function insertField(raw, fieldName, value) {
  let yamlValue;
  if (Array.isArray(value)) {
    yamlValue = `[${value.join(', ')}]`;
  } else {
    yamlValue = value;
  }

  const newLine = `${fieldName}: ${yamlValue}`;
  const lines = raw.split('\n');

  // Find insertion point: before ingredients, or before closing ---
  let insertIndex = -1;
  let inFrontmatter = false;

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true;
        continue;
      }
      // Closing ---
      if (insertIndex === -1) insertIndex = i;
      break;
    }
    if (inFrontmatter && trimmed.startsWith('ingredients:')) {
      insertIndex = i;
      break;
    }
    // For equipment/advancePrep, insert before pairsWith if it exists
    if (inFrontmatter && trimmed.startsWith('pairsWith:')) {
      if (insertIndex === -1) insertIndex = i;
    }
  }

  if (insertIndex === -1) return raw; // shouldn't happen

  lines.splice(insertIndex, 0, newLine);
  return lines.join('\n');
}

/**
 * Replace an existing empty array field: `field: []` → `field: [values]`
 */
function replaceEmptyArray(raw, fieldName, values) {
  const pattern = new RegExp(`^${fieldName}:\\s*\\[\\s*\\]\\s*$`, 'm');
  const replacement = `${fieldName}: [${values.join(', ')}]`;
  return raw.replace(pattern, replacement);
}

// ═══════════════════════════════════════════════════════
//  MAIN PROCESSING
// ═══════════════════════════════════════════════════════

async function loadAllRecipes() {
  const files = await fs.readdir(RECIPES_DIR);
  const recipes = [];

  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    const raw = await fs.readFile(path.join(RECIPES_DIR, file), 'utf-8');
    const { data, content: body } = matter(raw);
    recipes.push({ slug, data, raw, body, file });
  }

  return recipes;
}

async function main() {
  const startTime = Date.now();
  console.log(`\n${'═'.repeat(60)}`);
  console.log('  OVERNIGHT FIX — Automated Recipe Improvement Sweep');
  console.log(`${'═'.repeat(60)}`);
  if (DRY_RUN) console.log('  *** DRY RUN — no files will be modified ***\n');

  const recipes = await loadAllRecipes();
  console.log(`Loaded ${recipes.length} recipes.\n`);

  const report = {
    totalRecipes: recipes.length,
    dryRun: DRY_RUN,
    startedAt: new Date().toISOString(),
    changes: [],
    summary: {
      originAdded: 0,
      dietaryAdded: 0,
      seasonsAdded: 0,
      equipmentAdded: 0,
      advancePrepAdded: 0,
      stepsFormatted: 0,
      recipesModified: 0,
      recipesSkipped: 0,
    },
  };

  let filesWritten = 0;

  for (const recipe of recipes) {
    const changes = [];
    let raw = recipe.raw;

    // ─── 1. Origin ───
    if (!recipe.data.origin) {
      const origin = inferOrigin(recipe.data);
      if (origin) {
        raw = insertField(raw, 'origin', origin);
        changes.push({ field: 'origin', value: origin });
        report.summary.originAdded++;
      }
    }

    // ─── 2. Dietary ───
    if (
      !recipe.data.dietary ||
      (Array.isArray(recipe.data.dietary) && recipe.data.dietary.length === 0)
    ) {
      const dietary = inferDietary(recipe.data, recipe.body);
      if (dietary.length > 0) {
        if (Array.isArray(recipe.data.dietary) && recipe.data.dietary.length === 0) {
          raw = replaceEmptyArray(raw, 'dietary', dietary);
        } else {
          raw = insertField(raw, 'dietary', dietary);
        }
        changes.push({ field: 'dietary', value: dietary });
        report.summary.dietaryAdded++;
      }
    }

    // ─── 3. Seasons ───
    if (
      !recipe.data.seasons ||
      (Array.isArray(recipe.data.seasons) && recipe.data.seasons.length === 0)
    ) {
      const seasons = inferSeasons(recipe.data, recipe.body);
      if (seasons.length > 0) {
        if (Array.isArray(recipe.data.seasons) && recipe.data.seasons.length === 0) {
          raw = replaceEmptyArray(raw, 'seasons', seasons);
        } else {
          raw = insertField(raw, 'seasons', seasons);
        }
        changes.push({ field: 'seasons', value: seasons });
        report.summary.seasonsAdded++;
      }
    }

    // ─── 4. Equipment ───
    if (
      !recipe.data.equipment ||
      (Array.isArray(recipe.data.equipment) && recipe.data.equipment.length === 0)
    ) {
      const equipment = inferEquipment(recipe.body);
      if (equipment.length > 0) {
        if (Array.isArray(recipe.data.equipment) && recipe.data.equipment.length === 0) {
          raw = replaceEmptyArray(raw, 'equipment', equipment);
        } else {
          raw = insertField(raw, 'equipment', equipment);
        }
        changes.push({ field: 'equipment', value: equipment });
        report.summary.equipmentAdded++;
      }
    }

    // ─── 5. Advance Prep ───
    if (
      !recipe.data.advancePrep ||
      (Array.isArray(recipe.data.advancePrep) && recipe.data.advancePrep.length === 0)
    ) {
      const advancePrep = inferAdvancePrep(recipe.body);
      if (advancePrep.length > 0) {
        if (Array.isArray(recipe.data.advancePrep) && recipe.data.advancePrep.length === 0) {
          raw = replaceEmptyArray(raw, 'advancePrep', advancePrep);
        } else {
          raw = insertField(raw, 'advancePrep', advancePrep);
        }
        changes.push({ field: 'advancePrep', value: advancePrep });
        report.summary.advancePrepAdded++;
      }
    }

    // ─── 6. Bold step headers ───
    // We need to work on the body portion of the raw content
    const fmEnd = raw.indexOf('---', raw.indexOf('---') + 3);
    if (fmEnd !== -1) {
      const frontmatterPart = raw.slice(0, fmEnd + 3);
      const bodyPart = raw.slice(fmEnd + 3);
      const { newBody, stepsFixed } = fixDirectionsFormatting(bodyPart);
      if (stepsFixed > 0) {
        raw = frontmatterPart + newBody;
        changes.push({ field: 'directionsFormatting', value: `${stepsFixed} steps formatted` });
        report.summary.stepsFormatted += stepsFixed;
      }
    }

    // ─── Write if changed ───
    if (changes.length > 0) {
      report.changes.push({ slug: recipe.slug, changes });
      report.summary.recipesModified++;

      if (!DRY_RUN) {
        await fs.writeFile(path.join(RECIPES_DIR, recipe.file), raw, 'utf-8');
        filesWritten++;
      }

      // Log progress every recipe
      const fieldsSummary = changes.map((c) => c.field).join(', ');
      console.log(`  ✓ ${recipe.slug}: ${fieldsSummary}`);
    } else {
      report.summary.recipesSkipped++;
    }
  }

  // ─── Write report ───
  report.completedAt = new Date().toISOString();
  report.durationMs = Date.now() - startTime;

  try {
    await fs.mkdir(path.dirname(REPORT_PATH), { recursive: true });
    await fs.writeFile(REPORT_PATH, JSON.stringify(report, null, 2));
  } catch (e) {
    console.warn(`Warning: Could not write report to ${REPORT_PATH}: ${e.message}`);
  }

  // ─── Summary ───
  console.log(`\n${'═'.repeat(60)}`);
  console.log('  OVERNIGHT FIX — Summary');
  console.log(`${'═'.repeat(60)}`);
  console.log(`  Total recipes:       ${recipes.length}`);
  console.log(`  Recipes modified:    ${report.summary.recipesModified}`);
  console.log(`  Recipes unchanged:   ${report.summary.recipesSkipped}`);
  if (!DRY_RUN) console.log(`  Files written:       ${filesWritten}`);
  console.log('');
  console.log(`  Origin added:        ${report.summary.originAdded}`);
  console.log(`  Dietary added:       ${report.summary.dietaryAdded}`);
  console.log(`  Seasons added:       ${report.summary.seasonsAdded}`);
  console.log(`  Equipment added:     ${report.summary.equipmentAdded}`);
  console.log(`  Advance prep added:  ${report.summary.advancePrepAdded}`);
  console.log(`  Steps formatted:     ${report.summary.stepsFormatted}`);
  console.log('');
  console.log(`  Duration:            ${((Date.now() - startTime) / 1000).toFixed(1)}s`);
  console.log(`  Report:              ${REPORT_PATH}`);
  if (DRY_RUN) console.log('\n  *** DRY RUN — re-run without --dry-run to apply ***');
  console.log(`${'═'.repeat(60)}\n`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
