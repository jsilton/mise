// Checks whether each listed ingredient is used somewhere in a recipe's directions.
// Directions often name ingredients by group ("the cheese", "the oil", "all the
// spices") or in another form ("lemons" vs "lemon juice"), so a plain substring
// match flags many lines that are actually used. This is a hint, not a gate.

const STRIP_WORDS = new Set([
  'and',
  'the',
  'for',
  'with',
  'into',
  'from',
  'about',
  'some',
  'such',
  'other',
  'all',
  'purpose',
  'taste',
  'divided',
  'optional',
  'fresh',
  'freshly',
  'ground',
  'chopped',
  'finely',
  'coarsely',
  'thinly',
  'roughly',
  'shredded',
  'grated',
  'sliced',
  'diced',
  'minced',
  'package',
  'packages',
  'warmed',
  'melted',
  'dry',
  'dried',
  'kosher',
  'sea',
  'fine',
  'black',
  'white',
  'neutral',
  'cooking',
  'extra',
  'virgin',
  'olive',
  'oil',
  'plus',
  'serving',
  'servings',
  'halved',
  'quartered',
  'crushed',
  'beaten',
  'drained',
  'rinsed',
  'washed',
  'peeled',
  'whole',
  'large',
  'small',
  'medium',
  'cup',
  'cups',
  'tbsp',
  'tsp',
  'tablespoon',
  'tablespoons',
  'teaspoon',
  'teaspoons',
  'ounce',
  'ounces',
  'pound',
  'pounds',
  'can',
  'cans',
  'total',
  'piece',
  'pieces',
  'inch',
  'parts',
  'part',
  'ripe',
  'smoked',
  'sweet',
  'leaves',
  'cloves',
  'clove',
]);

// [what the ingredient line says, what the directions may call it instead]
const GROUP_NAMES = [
  [/\boils?\b/, /\boils?\b/],
  [
    /\b(cheese|cheddar|parmesan|parmigiano|reggiano|pecorino|romano|gruyere|emmentaler|swiss|mozzarella|cotija|queso|feta|ricotta|monterey|jack|provolone|fontina|gouda|asiago)\b/,
    /\bchees/,
  ],
  [
    /\b(spaghetti|rigatoni|penne|linguine|fettuccine|bucatini|macaroni|elbow|shells|orzo|farfalle|fusilli|rotini|ziti|cavatappi|strozzapreti|orecchiette|tagliatelle|pappardelle|noodles?|pasta)\b/,
    /\b(pasta|noodles?)\b/,
  ],
  [
    /\b(cumin|coriander|turmeric|cinnamon|paprika|allspice|nutmeg|cloves?|cardamom|cayenne|chili powder|chile powder|garlic powder|onion powder|oregano|ginger|curry powder|garam masala|five-spice|mustard powder|fennel seeds?|bay leaf|bay leaves)\b/,
    /\b(spices?|spiced|seasonings?|spice (mix|mixture|blend|rub|paste)|rub|dry ingredients|aromatics)\b/,
  ],
  [
    /\b(cilantro|parsley|mint|thyme|rosemary|basil|dill|chives|tarragon|sage|microgreens)\b/,
    /\b(herbs?|garnish(es)?|greens)\b/,
  ],
  [/\b(salt|pepper)\b/, /\b(season(ed|ing)?|salt|pepper)\b/],
  [/\b(scallions?|green onions?)\b/, /\b(scallions?|green onions?)\b/],
  [
    /\b(spinach|bok choy|spring mix|greens|arugula|kale|lettuce)\b/,
    /\b(greens|leaves|spinach|bok choy)\b/,
  ],
  [/\b(cream|creme|milk|half and half|yogurt|buttermilk)\b/, /\b(dairy|cream|milk)\b/],
  [/\b(chickpeas?|beans?|lentils?)\b/, /\b(beans?|legumes|pulses)\b/],
  [
    /\b(jalapenos?|serranos?|chil(e|i|ie)s?|poblanos?)\b/,
    /\b(chil(e|i|ie)s?|peppers?|vegetables)\b/,
  ],
  [
    /\b(cheese|cheddar|sour cream|cilantro|avocados?|scallions?|chips|jalapenos?|lime)\b/,
    /\btoppings?\b/,
  ],
];

// Directions that hand over a whole group of lines at once.
const BULK_USE =
  /\b(all|remaining|rest of the|other|listed|measured|marinade|sauce|dressing|glaze|filling|topping|spice|dry|wet|seasoning|batter)\s+(of\s+the\s+)?ingredients\b/;

// Lines a reader adds at the table or may leave out.
const SERVING_LINE =
  /\b(optional|if using|for serving|to serve|at serving|for garnish|garnish|as desired|for drizzling|for finishing|to finish)\b/;

export function normalizeText(text) {
  return String(text)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\[\[([^\]|]+)(\|([^\]]+))?\]\]/g, (_, target, __, label) => label || target)
    .replace(/[-_]/g, ' ');
}

export function stem(word) {
  if (word.length > 4 && word.endsWith('ies')) return word.slice(0, -3);
  if (word.length > 4 && word.endsWith('y')) return word.slice(0, -1);
  if (word.length > 4 && /(ches|shes|sses|xes|oes)$/.test(word)) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1);
  if (word.length > 5 && word.endsWith('ing')) {
    const base = word.slice(0, -3);
    // "studding" → "stud", "chopping" → "chop": drop the doubled consonant a suffix adds.
    return /([bdgmnprt])\1$/.test(base) ? base.slice(0, -1) : base;
  }
  return word;
}

export function ingredientKeywords(line) {
  const words = normalizeText(line)
    .replace(/[0-9]+/g, ' ')
    .replace(/[\/\\()[\].,:;!@#$%^&*+=?"'’]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STRIP_WORDS.has(word));
  return [...new Set(words.map(stem))];
}

export function isIngredientHeadingLine(line) {
  const text = String(line).trim();
  if (text.startsWith('---')) return false;
  // "For the filling:" or "to serve:" is a section heading, not an ingredient.
  return /^[^0-9].{0,40}:$/.test(text) && !/\d/.test(text);
}

export function isIngredientMentioned(line, directionsText) {
  const directions = normalizeText(directionsText);
  const ingredient = normalizeText(line);
  const keywords = ingredientKeywords(line);
  if (keywords.length === 0) return true;
  if (keywords.some((keyword) => directions.includes(keyword))) return true;
  return GROUP_NAMES.some(
    ([inLine, inDirections]) => inLine.test(ingredient) && inDirections.test(directions)
  );
}

export function findUnmentionedIngredients(ingredients, directionsText) {
  const directions = normalizeText(directionsText);
  if (BULK_USE.test(directions)) return [];
  return ingredients.filter((line) => {
    const text = String(line);
    if (text.startsWith('---') || isIngredientHeadingLine(text)) return false;
    if (SERVING_LINE.test(normalizeText(text))) return false;
    return !isIngredientMentioned(text, directionsText);
  });
}
