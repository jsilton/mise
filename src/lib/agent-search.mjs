// Recipe search for AI agents, served as /.well-known/search.
//
// The site search box matches every typed word (AND) because a person types two or three words.
// An agent sends a whole question ("a vegetarian dinner under 30 minutes the kids will eat"), so
// this search reads the question differently:
// - Times, diets, courses and "without X" become hard filters. A recipe that can't promise the
//   time is left out, the same rule as the "Under 30 min" quick pick. An excluded ingredient is
//   checked against every ingredient line, the title and any linked sub-recipe, and a group word
//   ("nuts", "shellfish", "dairy") covers its members, because these questions are often allergies.
// - Words like "kids", "weeknight", "potluck" or "Thai" become preferences that lift matching
//   recipes without hiding the rest, since many good recipes are not tagged for every occasion.
// - "What goes with salmon" returns the pairings the recipes list, not more salmon.
// - The remaining words are ranked with BM25 across fields. A title match counts most, then
//   ingredients (main ingredients first), then tags, then the description and steps. A recipe
//   does not need every word, but each missing word costs it, and a word found only in the
//   steps counts for half, so filler like "bring" can't carry a recipe.
// The index records are built once at build time (buildAgentSearchRecord), so this module only
// ranks and formats. It has no dependencies beyond the shared word rules, so a Worker can run it.
import { tokenize, wordForms, withinOneEdit, ingredientName } from './recipe-search.mjs';
import { quickPicksFor } from './quick-picks.mjs';
import { timeBand } from './time-band.mjs';
import { dietaryFilterKeys, cuisineGroups, CUISINE_GROUPS } from './tag-vocabulary.mjs';

export const SITE_URL = 'https://jordansilton.com/mise/';
export const DEFAULT_LIMIT = 5;
export const MAX_LIMIT = 20;
export const MAX_QUERY_LENGTH = 300;
// More words than this add little to a ranking and a lot to the work per request.
const MAX_WORDS = 12;

// Words that carry no meaning in a question about recipes. Words that name a time, diet,
// course or preference are not here, because the question parser reads them first.
const STOP_WORDS = new Set(
  (
    'a about all also an and any anything are as at be best but can could did do does dish ' +
    'dishes find for from get give good great have help how i id ideas idea if im in into is ' +
    'it its just like looking make makes making me meal meals my need of on one or our please ' +
    'recipe recipes recommend should show so some something suggest tell that the them there ' +
    'they thing things this to tonight try use using want we what whats which who will with ' +
    'would you your cook cooking eat night family food foods bring ready ingredient ' +
    'ingredients goes go going takes take people person serves serving servings over least ' +
    'not nothing few option options version today kind sort type ive got under hands active prep ' +
    'less than fewer within below maximum max tops most keep keeping made friendly he she him her his their us'
  ).split(' ')
);

// Diets read from recipe tags. A recipe whose title names the diet counts too.
const DIET_PHRASES = [
  [/\bvegan\b/, 'vegan'],
  [/\b(?:vegetarian|veggie only|meatless|meat free)\b/, 'vegetarian'],
  [/\bpescatarian\b/, 'pescatarian'],
  [/\b(?:gluten free|celiac|coeliac)\b/, 'gluten-free'],
];
const DIET_TITLE = {
  vegan: /\bvegan\b/,
  vegetarian: /\b(?:vegetarian|vegan|veggie)\b/,
  pescatarian: /\bpescatarian\b/,
  'gluten-free': /\bgluten[- ]free\b/,
  keto: /\bketo\b/,
  'low-carb': /\b(?:low[- ]carb|keto)\b/,
};
// Diets that are really an ingredient left out. Few recipes carry these tags, so these read the
// ingredient lists, which cover every recipe.
const DIET_EXCLUDES = {
  'dairy-free': 'dairy',
  'nut-free': 'nuts',
  'egg-free': 'egg',
};

// Hard course filters, only for words that can only mean the course.
const ROLE_PHRASES = [
  [/\b(?:desserts?|sweet treats?)\b/, 'dessert'],
  [/\b(?:cocktails?|mocktails?|drinks?|beverages?)\b/, 'drink'],
  [/\b(?:side dish(?:es)?|sides?)\b/, 'side'],
  [/\bmain (?:course|dish)(?:es|s)?\b/, 'main'],
];

const hasOccasion = (r, ...tags) => tags.some((t) => r.occasions.includes(t));

// Soft preferences. Each one names the quick pick, tag or field test it rewards. A `keep` word
// is also searched as a word, since recipes put it in their titles ("Breakfast Tacos").
const PREFERENCES = [
  {
    key: 'kids',
    label: 'kid friendly',
    re: /\b(?:kids?|children|child|toddlers?|picky eaters?)\b/,
    test: (r) => r.picks.includes('kids'),
  },
  {
    key: 'weeknight',
    label: 'weeknight',
    re: /\b(?:weeknights?|school nights?|busy nights?)\b/,
    test: (r) => r.picks.includes('weeknight'),
  },
  {
    key: 'quick',
    label: 'quick',
    re: /\b(?:quick|quickly|fast|speedy)\b/,
    test: (r) => r.minutes > 0 && r.minutes <= 30 && !r.open,
  },
  {
    key: 'easy',
    label: 'easy',
    re: /\b(?:easy|simple|beginners?)\b/,
    test: (r) => r.difficulty === 'easy',
  },
  {
    key: 'light',
    label: 'light and fresh',
    re: /\b(?:healthy|healthier|light|lighter)\b/,
    test: (r) => r.picks.includes('light'),
  },
  {
    key: 'comfort',
    label: 'comfort food',
    re: /\b(?:comfort|comforting|cozy|cosy|hearty)\b/,
    keep: true,
    test: (r) => r.picks.includes('comfort'),
  },
  {
    key: 'potluck',
    label: 'potluck',
    re: /\bpotlucks?\b/,
    test: (r) => hasOccasion(r, 'potluck'),
  },
  {
    key: 'game_day',
    label: 'game day',
    re: /\b(?:game_day|tailgat\w*)\b/,
    test: (r) => hasOccasion(r, 'game-day'),
  },
  {
    key: 'date_night',
    label: 'date night',
    re: /\b(?:date_night|romantic|anniversary)\b/,
    test: (r) => hasOccasion(r, 'date-night', 'special-occasion'),
  },
  {
    key: 'sunday_dinner',
    label: 'Sunday dinner',
    re: /\bsunday_dinner\b/,
    test: (r) => hasOccasion(r, 'sunday-dinner', 'family-meal', 'weekend-dinner'),
  },
  {
    key: 'crowd',
    label: 'for a crowd',
    re: /\b(?:crowd|party|parties|entertaining|guests|big group)\b/,
    test: (r) => r.picks.includes('crowd') || hasOccasion(r, 'entertaining'),
  },
  {
    key: 'snack',
    label: 'snack or appetizer',
    re: /\b(?:snacks?|snacking|appetizers?|apps|hors doeuvres?|finger foods?|starters?|nibbles)\b/,
    test: (r) => hasOccasion(r, 'snack', 'appetizer', 'game-day'),
  },
  {
    key: 'picnic',
    label: 'picnic',
    re: /\bpicnics?\b/,
    test: (r) => hasOccasion(r, 'picnic', 'potluck'),
  },
  {
    key: 'lunch',
    label: 'lunch',
    re: /\blunch(?:es)?\b/,
    test: (r) => hasOccasion(r, 'quick-lunch', 'lunch'),
  },
  {
    key: 'ahead',
    label: 'make ahead',
    re: /\b(?:make ahead|ahead of time|meal prep|prep ahead|leftovers)\b/,
    test: (r) => r.picks.includes('ahead'),
  },
  {
    key: 'freezer',
    label: 'freezer friendly',
    re: /\b(?:freezer|freeze|freezable)\b/,
    test: (r) => r.picks.includes('freezer'),
  },
  {
    key: 'breakfast',
    label: 'breakfast',
    re: /\bbreakfast\b/,
    keep: true,
    test: (r) => r.picks.includes('breakfast'),
  },
  {
    key: 'brunch',
    label: 'brunch',
    re: /\bbrunch\b/,
    keep: true,
    test: (r) => r.picks.includes('breakfast') || hasOccasion(r, 'weekend-brunch'),
  },
  {
    key: 'holiday',
    label: 'holiday',
    re: /\b(?:thanksgiving|christmas|easter|passover|hanukkah|chanukah|holidays?|festive)\b/,
    keep: true,
    test: (r) => r.vibe === 'holiday' || hasOccasion(r, 'holiday'),
  },
  {
    key: 'keto',
    label: 'keto or low carb',
    re: /\b(?:keto|low carb|low carbs)\b/,
    keep: true,
    test: (r) => r.dietary.some((d) => d === 'keto' || d === 'low-carb') || DIET_TITLE['low-carb'].test(r.title.toLowerCase()),
  },
  {
    key: 'dinner',
    label: 'a main dish',
    re: /\b(?:dinner|supper|entree|sunday_dinner)\b/,
    test: (r) => r.role === 'main' && !r.picks.includes('breakfast'),
  },
];

// A cuisine named in the question is a strong preference. "Asian" covers the Asian groups.
const CUISINE_NAMES = new Map();
for (const g of CUISINE_GROUPS)
  for (const name of [g.key, ...g.members]) CUISINE_NAMES.set(name.toLowerCase(), [g.key]);
CUISINE_NAMES.set('asian', ['Chinese', 'Japanese', 'Korean', 'Thai', 'Vietnamese', 'Asian']);
CUISINE_NAMES.set('tex mex', ['Mexican']);
CUISINE_NAMES.set('cajun', ['Southern']);
CUISINE_NAMES.set('creole', ['Southern']);
const CUISINE_RE = new RegExp(
  `\\b(${[...CUISINE_NAMES.keys()].sort((a, b) => b.length - a.length).join('|')})\\b`,
  'g'
);
// Cuisine words in ingredient names ("Italian sausage", "Greek yogurt") say nothing about the
// dish, so they stay out of the ingredient field.
const CUISINE_WORDS = new Set([...CUISINE_NAMES.keys()].flatMap((n) => n.split(' ')));
const CUISINE_BOOST = 0.6;

// Words written two ways in recipes. A query word on either side also searches the other.
const SYNONYMS = [
  ['chickpea', 'garbanzo'],
  ['cilantro', 'coriander'],
  ['scallion', 'scallions'],
  ['shrimp', 'prawn'],
  ['eggplant', 'aubergine'],
  ['zucchini', 'courgette'],
  ['bbq', 'barbecue'],
  ['no_cook', 'raw'],
  ['veggie', 'veggies', 'vegetable'],
  ['chile', 'chili', 'chilli'],
];

// A word that names a group also searches its members. One way only: "salmon" stays salmon.
const CATEGORIES = {
  fish: 'salmon cod tilapia halibut tuna trout snapper bass mahi swordfish haddock sardine anchovy branzino',
  seafood:
    'fish salmon cod tilapia halibut tuna trout shrimp prawn scallop mussel clam crab lobster squid calamari',
  poultry: 'chicken turkey duck',
  greens: 'spinach kale chard collard arugula',
};

// What "without X" leaves out when X names a group. Wider than CATEGORIES, because leaving out
// too much is safe and leaving out too little isn't. Two-word members are written with a space.
const FISH = `${CATEGORIES.fish} fish fish_sauce fish_stock worcestershire bonito dashi caesar`;
const SHELLFISH =
  'shellfish shrimp prawn scallop mussel clam crab lobster crawfish crayfish oyster oyster_sauce langoustine squid calamari octopus';
const NUTS =
  'nut almond walnut pecan cashew pistachio hazelnut peanut macadamia chestnut praline nutella marzipan ' +
  'frangipane gianduja nougat pesto';
const DAIRY =
  'dairy milk butter buttermilk cream cheese yogurt yoghurt ghee whey casein kefir parmesan parmigiano mozzarella ' +
  'cheddar ricotta feta mascarpone gruyere brie burrata pecorino halloumi queso cotija paneer gouda provolone ' +
  'fontina manchego asiago romano labneh creme crema half_and_half custard stracciatella quark skyr emmental ' +
  'havarti camembert gorgonzola roquefort stilton raclette comte taleggio';
const MEAT =
  'meat beef pork chicken lamb turkey duck veal bacon sausage ham prosciutto pancetta chorizo salami pepperoni ' +
  'guanciale lard steak brisket chicken_stock beef_stock pork_stock turkey_stock bone_stock gelatin';
const EXCLUDE_GROUPS = {
  nut: NUTS,
  'tree nut': NUTS,
  peanut: 'peanut',
  shellfish: SHELLFISH,
  fish: FISH,
  seafood: `${FISH} ${SHELLFISH}`,
  dairy: DAIRY,
  lactose: DAIRY,
  cheese: DAIRY.replace(/\b(?:dairy|milk|butter|buttermilk|cream|yogurt|yoghurt|ghee|whey|casein|kefir|creme|crema|half_and_half|custard|skyr)\b/g, ''),
  egg: 'egg mayonnaise mayo aioli meringue',
  alcohol:
    'alcohol booze liquor gin vodka rum tequila mezcal whiskey whisky bourbon brandy cognac vermouth campari aperol ' +
    'liqueur cointreau triple_sec wine beer sake champagne prosecco cava kahlua amaretto bitters absinthe chartreuse ' +
    'schnapps sherry marsala grand_marnier lager stout port madeira mirin shaoxing soju limoncello cachaca pisco ' +
    'sambuca ouzo grappa kirsch curacao baileys',
  meat: MEAT,
  pork: 'pork bacon ham sausage prosciutto pancetta chorizo salami pepperoni guanciale lard pork_stock',
  beef: 'beef steak brisket sirloin ribeye chuck beef_stock',
  chicken: 'chicken chicken_stock',
  poultry: 'chicken turkey duck chicken_stock turkey_stock',
  spicy:
    'chile chili chilli jalapeno serrano habanero cayenne sriracha gochujang gochugaru chipotle harissa sambal tabasco ' +
    'hot_sauce pepper_flakes poblano',
  chocolate: 'chocolate cocoa cacao nutella',
  onion: 'onion scallion',
  soy: 'soy tofu tamari edamame miso tempeh',
  sesame: 'sesame tahini',
  wheat:
    'wheat flour bread breadcrumbs panko pasta spaghetti linguine fettuccine penne rigatoni macaroni orzo lasagna ' +
    'noodle ramen udon couscous semolina bulgur farro barley seitan pita naan tortilla cracker crouton biscuit ' +
    'pie_crust puff_pastry phyllo pastry crust dough wonton dumpling ravioli tortellini gnocchi pierogi empanada ' +
    'pizza matzo bun roll baguette brioche ciabatta soy',
};
const GROUP_ALIASES = {
  nuts: 'nut',
  'tree nuts': 'tree nut',
  peanuts: 'peanut',
  eggs: 'egg',
  booze: 'alcohol',
  liquor: 'alcohol',
  spirits: 'alcohol',
  alcoholic: 'alcohol',
  meats: 'meat',
  spice: 'spicy',
  heat: 'spicy',
  hot: 'spicy',
  onions: 'onion',
  milk: 'dairy',
  flour: 'wheat',
};
// "Coconut milk" and "peanut butter" have no dairy in them.
const NOT_DAIRY_BEFORE = new Set(
  'coconut almond oat soy rice cashew peanut nut cocoa apple shea vegan plant dairy_free'.split(' ')
);
const DAIRY_WORDS = new Set('milk butter cream cheese yogurt'.split(' '));

// Phrases rewritten the same way in questions and recipes, so a two-word name stays one thing.
// "fish sauce" becomes one word, so a question about fish doesn't find every Thai sauce, and
// "no-knead" stays the bread, not a request to leave out kneading.
const PHRASES = [
  [/\binstant ?pots?\b|\binstapots?\b|\bpressure cookers?\b/g, 'pressure_cooker'],
  [/\bcrock ?pots?\b|\bslow cookers?\b/g, 'slow_cooker'],
  [/\bfish sauce\b/g, 'fish_sauce'],
  [/\boyster sauce\b/g, 'oyster_sauce'],
  [/\bhot sauce\b/g, 'hot_sauce'],
  [/\b(?:red )?pepper flakes\b/g, 'pepper_flakes'],
  [/\btriple sec\b/g, 'triple_sec'],
  [/\bgrand marnier\b/g, 'grand_marnier'],
  [/\bhalf[- ]and[- ]half\b/g, 'half_and_half'],
  [/\bcream of tartar\b/g, 'cream_of_tartar'],
  [/\bbutter beans?\b/g, 'butter_beans'],
  [/\b(chicken|beef|pork|turkey|bone|fish|vegetable|veggie|seafood)\s+(?:stock|broth|bouillon)\b/g, '$1_stock'],
  [/\b(?:green|spring) onions?\b/g, 'scallion'],
  [/\bno[- ]?(bake|cook)\b/g, 'no_cook'],
  [/\bno[- ](knead|churn|boil|fuss|fail|stress|mess|brainer|frills|sugar added)\b/g, 'no_$1'],
  [/\b(?:super bowl|game day|gameday)\b/g, 'game_day'],
  [/\bdate night\b/g, 'date_night'],
  [/\bsunday (?:dinner|supper)\b/g, 'sunday_dinner'],
  [/\bweekend brunch\b/g, 'brunch'],
  [/\bquick lunch\b/g, 'lunch'],
];

/** Lower case with accents, apostrophes and repeated spaces taken out, as tokenize reads text. */
const normalize = (text) =>
  String(text || '')
    .toLowerCase()
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['‘’ʼ]/g, '')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ');
const rewritePhrases = (text) => PHRASES.reduce((t, [re, to]) => t.replace(re, to), normalize(text));
const words = (text) => tokenize(rewritePhrases(text));

// How much a match in each field counts, and how much a long field dilutes it (BM25 b).
const FIELDS = {
  title: { weight: 4, b: 0.3 },
  ingredients: { weight: 2.5, b: 0.5 },
  tags: { weight: 1.5, b: 0.2 },
  description: { weight: 1, b: 0.6 },
  steps: { weight: 0.4, b: 0.75 },
};
const FIELD_LIST = Object.entries(FIELDS);
const K1 = 1.2;
const PREFERENCE_BOOST = 0.35;
const RELEVANCE_FLOOR = 0.25;
const MIN_PREFIX_LENGTH = 4;
const MIN_TYPO_LENGTH = 5;
const MIN_TWO_TYPO_LENGTH = 7;

// ── Building records (build time) ─────────────────────────────────────────

// The Directions steps and Chef's Note read straight from the Markdown, so the record builder
// needs no Markdown library and runs anywhere the recipe text is available.
function markdownSection(body, name) {
  const lines = String(body || '').split('\n');
  const start = lines.findIndex((l) => new RegExp(`^##\\s+${name}\\s*$`, 'i').test(l.trim()));
  if (start < 0) return '';
  const rest = lines.slice(start + 1);
  const end = rest.findIndex((l) => /^##\s/.test(l));
  return (end < 0 ? rest : rest.slice(0, end)).join('\n');
}

const plainText = (md) =>
  md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\[[^\]]*\]/g, '$1')
    .replace(/[*_`]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();

function directionSteps(body) {
  const steps = [];
  for (const line of markdownSection(body, 'Directions').split('\n')) {
    const m = line.match(/^\d+\.\s+(.*)$/);
    if (m) steps.push(plainText(m[1]));
    else if (steps.length && /^\s{2,}\S/.test(line) && !/^\s*[-*\d]/.test(line))
      steps[steps.length - 1] += ` ${plainText(line)}`;
  }
  return steps.filter(Boolean);
}

/** The description a card shows: the frontmatter blurb, or the Chef's Note's first two sentences. */
function describe(data, body) {
  if (data.description) return plainText(String(data.description));
  const note = plainText(markdownSection(body, "Chef's Note"));
  const sentences = note.match(/[^.!?]*[.!?]+/g);
  return sentences?.slice(0, 2).map((s) => s.trim()).join(' ') || note || `${data.title} recipe`;
}

// "Chicken thighs, boneless" names the chicken, but "Boneless, skinless chicken thighs" puts a
// describing word first, so the name comes from what follows it.
const DESCRIBING = /^(?:boneless|skinless|bone in|bone-in|skin on|skin-on|boneless and skinless|fresh|frozen|organic)$/;
function nameOf(line) {
  const plain = plainText(line);
  const name = ingredientName(plain);
  if (!DESCRIBING.test(name)) return name;
  const rest = plain.split(',').slice(1).join(',');
  return ingredientName(rest) ? `${name} ${ingredientName(rest)}` : name;
}

/**
 * One public index record for one recipe. Only fields the recipe page already shows go in.
 * Internal fields (miseId, kb, audience, review notes) are never copied.
 */
export function buildAgentSearchRecord({ slug, data, body, url }) {
  const band = timeBand(data.totalTime);
  // Ingredient lines keep their links, made absolute so they work outside the site.
  const ingredients = (data.ingredients || [])
    .filter((line) => !/^---/.test(line))
    .map((line) => String(line).replace(/\]\(\/mise\//g, `](${SITE_URL}`));
  return {
    slug,
    url: url || new URL(`recipes/${slug}/`, SITE_URL).href,
    title: data.title,
    role: data.role || '',
    cuisines: data.cuisines || [],
    // Drinks are left out of vegetarian and vegan, the same as the site's Vegetarian quick pick.
    dietary: dietaryFilterKeys(data.dietary).filter(
      (k) => k !== 'adaptable' && !(data.role === 'drink' && /^(vegetarian|vegan)$/.test(k))
    ),
    occasions: data.occasions || [],
    methods: data.cookingMethods || [],
    vibe: data.vibe || '',
    difficulty: data.difficulty || '',
    picks: quickPicksFor(data),
    totalTime: data.totalTime || '',
    minutes: band.minutes || 0,
    open: band.open,
    servings: data.servings ? String(data.servings) : '',
    description: describe(data, body),
    ingredients,
    ingredientNames: [...new Set(ingredients.map(nameOf).filter(Boolean))],
    steps: directionSteps(body),
    pairsWith: (data.pairsWith || []).filter((slug) => typeof slug === 'string'),
  };
}

// ── Reading the question ──────────────────────────────────────────────────

const NUMBER_WORDS = {
  a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, ten: 10,
  fifteen: 15, twenty: 20, thirty: 30, forty: 40, 'forty five': 45, fifty: 50, sixty: 60, ninety: 90,
};
const QTY = String.raw`(?:\d+|an?|one|two|three|four) and a half|\d+(?:\.\d+)?(?: \d\/\d)?|\d\/\d|an?|one|two|three|four|five|six|ten|fifteen|twenty|thirty|forty five|forty|fifty|sixty|ninety`;
const HOURS = String.raw`(?:hours?|hrs?)\b`;
const MINUTES = String.raw`(?:minutes?|mins?)\b`;
// One duration: "30 minutes", "1 hr 30 min", "an hour and a half", "1 1/2 hours", "half an hour".
const DURATION = new RegExp(
  String.raw`\bhalf an? hour\b|\b(${QTY}) ?${HOURS}(?: (?:and )?(?:(a half)\b|(${QTY}) ?${MINUTES}))?|\b(${QTY}) ?${MINUTES}`,
  'g'
);

function amount(text) {
  if (!text) return 0;
  const half = / and a half$/.test(text);
  const t = text.replace(/ and a half$/, '');
  let n = 0;
  const mixed = t.match(/^(\d+) (\d)\/(\d)$/);
  const frac = t.match(/^(\d)\/(\d)$/);
  if (mixed) n = Number(mixed[1]) + Number(mixed[2]) / Number(mixed[3]);
  else if (frac) n = Number(frac[1]) / Number(frac[2]);
  else if (/^\d/.test(t)) n = Number(t);
  else n = NUMBER_WORDS[t] || 0;
  return n + (half ? 0.5 : 0);
}

// A duration only limits the total time when the question says so ("under", "in", "or less",
// "30-minute pasta"). "Marinate for 4 hours", "at least 3 hours" and "10 minutes of prep" don't.
const LIMIT_BEFORE = /\b(?:under|less than|within|no more than|at most|up to|fewer than|below|max|maximum|tops|in|takes?|taking|only|just)\s*$/;
const ABOUT_BEFORE = /\b(?:about|around|roughly|approximately|approx)\s*$/;
const LIMIT_AFTER = /^\s*(?:or (?:less|fewer|under)|max|maximum|tops|and under)\b/;
const ABOUT_AFTER = /^\s*or so\b/;
const IGNORE_BEFORE =
  /\b(?:at least|over|more than|longer than|minimum|upwards of|with|marinat\w*|rest\w*|chill\w*|soak\w*|brin\w*|braise\w*|simmer\w*|bak\w*|roast\w*|cook(?:s|ed)?|rise|rising|proof\w*|freez\w*|smok\w*|steep\w*|sit\w*|cool\w*|refrigerat\w*)\s+(?:it |them )?(?:for )?(?:about |around )?$/;
const IGNORE_AFTER = /^\s*(?:of )?(?:to )?(?:prep\w*|hands on|active|marinat\w*|rest\w*|chill\w*|ahead|before)\b/;

function readTimes(text) {
  const found = [];
  text = text.replace(/\b(\d+) ?h ?(\d+)(?: ?m(?:in)?)?\b/g, '$1 hours $2 minutes');
  text = text.replace(/\b(\d+(?:\.\d+)?) ?h\b/g, '$1 hours').replace(/\b(\d+) ?m\b/g, '$1 minutes');
  text = text.replace(DURATION, (match, h, half, m, onlyM, offset, whole) => {
    const minutes = /^half/.test(match)
      ? 30
      : h
        ? amount(h) * 60 + (half ? 30 : amount(m))
        : amount(onlyM);
    const before = whole.slice(Math.max(0, offset - 40), offset);
    const after = whole.slice(offset + match.length, offset + match.length + 30);
    let kind = 'bare';
    if (IGNORE_AFTER.test(after) || (IGNORE_BEFORE.test(before) && !LIMIT_BEFORE.test(before))) kind = 'ignore';
    else if (ABOUT_BEFORE.test(before) || ABOUT_AFTER.test(after)) kind = 'about';
    else if (LIMIT_BEFORE.test(before) || LIMIT_AFTER.test(after)) kind = 'limit';
    if (minutes > 0) found.push({ minutes: Math.round(minutes), kind });
    return ' ';
  });
  text = text.replace(/\b(?:ready|done|on the table|finished) in (\d{1,3})\b(?! (?:servings?|people|portions))/g, (m, n) => {
    found.push({ minutes: Number(n), kind: 'limit' });
    return ' ';
  });
  text = text.replace(/\b(?:or (?:less|fewer|under)|or so)\b/g, ' ');
  // With a limit word, the smallest limit wins. "About 15 minutes" allows a little more.
  const limits = found
    .filter((t) => t.kind === 'limit' || t.kind === 'about')
    .map((t) => (t.kind === 'about' ? Math.ceil((t.minutes * 1.2) / 5) * 5 : t.minutes));
  if (limits.length) return { text, maxMinutes: Math.min(...limits) };
  // A single duration with no limit word ("30 minute meals") is a limit too. Two of them
  // ("a 5 minute sauce for a 2 hour roast") can't be told apart, so neither is used.
  const plain = found.filter((t) => t.kind === 'bare');
  return { text, maxMinutes: plain.length === 1 && found.length === 1 ? plain[0].minutes : 0 };
}

// "without X", "no X", "allergic to X", "avoid X", "X-free". X runs to the end of its phrase
// and may be a list ("no mushrooms or olives").
const EXCLUDE_TRIGGER =
  /\b(?:without|w\/o|w\/out|wout|no|non|not|nothing|skip|skipping|minus|sans|hold the|leave out|leaving out|avoid|avoiding|exclude|excluding|all?ergic to|all?ergy to|all?ergies to|intolerant to|free of|free from|isnt|arent|(?:doesnt|does not) (?:have|contain|use|include)|(?:dont|do not|wont|will not|never) (?:like|eat|want|have|use|need)|(?:cant|cannot|can not) (?:have|eat|stand|do|tolerate)|hate|hates|dislike|dislikes|except|but no)\s+/g;
const EXCLUDE_FILLER = new Set(
  'the any all added a an too very so overly real extra much more of eating having using with contain containing those that anything something stuff food foods both either neither kind kinds type types sort sorts form forms'.split(' ')
);
// Words that end an excluded phrase: question words, courses and the like.
const PHRASE_END = new Set([
  ...STOP_WORDS,
  ...'dinner dinners lunch breakfast brunch dessert desserts side sides snack snacks dish dishes meal meals recipe recipes please today tonight kids kid family idea ideas ingredients quick easy healthy'.split(' '),
]);
const LIST_JOIN = new Set(['and', 'or', 'nor', '&', 'plus', ',', ';']);
// Punctuation that ends a phrase. A comma or semicolon may continue a list, and a full stop ends it.
const PUNCTUATION = new Set([',', ';', '.', '!', '?']);
const NOT_EXCLUDED = new Set('fuss stress time oven stove mess problem problems way worries judgment stick sure matter fancy complicated idea clue'.split(' '));

// A list ends where a new "no" or "without" starts, so that one is read on its own.
const TRIGGER_AT_START = new RegExp(`^${EXCLUDE_TRIGGER.source}`);

function readExclusions(text) {
  text = text.replace(/:/g, ' ');
  const exclude = [];
  const maybe = [];
  const takePhrase = (tokens, i) => {
    while (i < tokens.length && EXCLUDE_FILLER.has(tokens[i])) i++;
    const phrase = [];
    while (
      i < tokens.length &&
      phrase.length < 3 &&
      !PHRASE_END.has(tokens[i]) &&
      !LIST_JOIN.has(tokens[i]) &&
      !PUNCTUATION.has(tokens[i]) &&
      !/^\d/.test(tokens[i])
    )
      phrase.push(tokens[i++]);
    return { phrase, i };
  };
  // Work on the text as tokens so a phrase ends at the next question word.
  let out = '';
  let rest = text;
  let m;
  EXCLUDE_TRIGGER.lastIndex = 0;
  while ((m = EXCLUDE_TRIGGER.exec(rest))) {
    out += rest.slice(0, m.index) + ' ';
    const tail = rest.slice(m.index + m[0].length);
    // "dairy/eggs" is a list too.
    const tokens = tail.replace(/\//g, ',').replace(/([,;.!?])/g, ' $1 ').split(/\s+/).filter(Boolean);
    let { phrase, i } = takePhrase(tokens, 0);
    const items = [];
    if (phrase.length) items.push(phrase);
    // A list continues after "and", "or" or a comma, unless an article starts a new thought
    // ("without mushrooms and a side salad").
    while (items.length && items.length < 16 && i < tokens.length) {
      if (!LIST_JOIN.has(tokens[i])) break;
      let j = i + 1;
      // ", and" and ", or" join the next item too.
      if (LIST_JOIN.has(tokens[j])) j++;
      if (['a', 'an', 'the', 'some', 'my'].includes(tokens[j])) break;
      if (TRIGGER_AT_START.test(`${tokens.slice(j, j + 4).join(' ')} `)) break;
      const next = takePhrase(tokens, j);
      if (!next.phrase.length || next.i === j) break;
      // The last item after a bare comma may start a new thought ("no dairy, soup") rather than
      // continue the list ("no dairy, garlic"). The search decides from how recipes use it.
      const bareComma = j === i + 1 && (tokens[i] === ',' || tokens[i] === ';');
      if (bareComma && !LIST_JOIN.has(tokens[next.i])) next.phrase.maybe = true;
      items.push(next.phrase);
      i = next.i;
    }
    for (const item of items) {
      if (NOT_EXCLUDED.has(item[0])) continue;
      const named = item.join(' ');
      (item.maybe && !EXCLUDE_GROUPS[GROUP_ALIASES[named] || named] ? maybe : exclude).push(named);
    }
    rest = tokens.slice(i).join(' ');
    EXCLUDE_TRIGGER.lastIndex = 0;
  }
  out += rest;
  // "nut-free", "onion free": tokenize has already joined these as nut_free.
  // "dairy/egg free" leaves out both.
  out = out.replace(/\b([a-z]+(?: ?\/ ?[a-z]+)*) (?:free|allergy|allergies|allergic)\b/g, (whole, list) => {
    const items = list.split(/ ?\/ ?/);
    if (items.some((x) => ['hands', 'stress', 'hassle', 'fuss', 'mess', 'guilt', 'care', 'worry', 'sugar_added'].includes(x)))
      return whole;
    exclude.push(...items);
    return ' ';
  });
  return { text: out, exclude, maybe };
}

// "What goes with salmon", "a side for steak": the recipes Mise lists as pairings for salmon.
const PAIRING =
  /\b(?:to go with|goes with|go with|going with|to serve with|serve with|served with|serving with|pairs? with|pairing with|pairings? for|(side dish(?:es)?|sides?) for|to accompany|accompaniments? for|alongside|(dessert) after)\s+/;

function readPairing(text) {
  const m = text.match(PAIRING);
  if (!m) return { text, pairFor: '', role: '' };
  const tail = text.slice(m.index + m[0].length).replace(/([,;.!?])/g, ' $1 ').split(/\s+/).filter(Boolean);
  const anchor = [];
  let i = 0;
  while (i < tail.length && EXCLUDE_FILLER.has(tail[i])) i++;
  while (
    i < tail.length &&
    anchor.length < 4 &&
    !PHRASE_END.has(tail[i]) &&
    !PUNCTUATION.has(tail[i]) &&
    !/^\d/.test(tail[i])
  )
    anchor.push(tail[i++]);
  // "Something for a party" names an occasion, not a dish to pair with.
  if (!anchor.length || PREFERENCES.some((p) => p.re.test(` ${anchor.join(' ')} `))) return { text, pairFor: '', role: '' };
  return {
    text: `${text.slice(0, m.index)} ${tail.slice(i).join(' ')}`,
    pairFor: anchor.join(' '),
    role: m[1] ? 'side' : m[2] ? 'dessert' : '',
  };
}

const MAX_INGREDIENTS = /\b(?:(?:under|fewer than|less than|at most|no more than|only|just) )?(\d+|three|four|five|six|seven|eight|ten) ingredients?(?: or (?:less|fewer))?\b/;

/**
 * Split a question into hard filters, soft preferences and search words.
 * Explicit parameters (max_minutes, diet, role, cuisine) are added to what the text states.
 */
export function parseAgentQuery(query, params = {}) {
  let text = ` ${rewritePhrases(String(query || '').slice(0, MAX_QUERY_LENGTH))} `;
  const filters = { maxMinutes: 0, maxIngredients: 0, diets: [], role: '', cuisine: '', exclude: [] };
  const consume = (re, fn) => {
    text = text.replace(new RegExp(re.source, 'g'), (...m) => {
      fn(m);
      return ' ';
    });
  };

  const times = readTimes(text);
  text = times.text;
  filters.maxMinutes = times.maxMinutes;
  consume(MAX_INGREDIENTS, (m) => (filters.maxIngredients = amount(m[1])));

  // Drinks with no alcohol in them.
  consume(/\b(?:mocktails?|non alcoholic|alcohol free|zero proof|spirit free|booze free|virgin)\b/, () => {
    filters.role ||= 'drink';
    filters.exclude.push('alcohol');
  });
  for (const [re, key] of DIET_PHRASES) consume(re, () => filters.diets.push(key));

  const exclusions = readExclusions(text);
  text = exclusions.text;
  filters.exclude.push(...exclusions.exclude);
  const maybeExclude = exclusions.maybe;
  // Gluten is in flour, bread, pasta and soy sauce under other names, so "no gluten" uses the
  // gluten-free tag rather than looking for the word.
  filters.exclude = filters.exclude.filter((x) => {
    if (!/^(?:gluten|celiac|coeliac)\b/.test(x)) return true;
    filters.diets.push('gluten-free');
    return false;
  });
  // Read after the exclusions, so "what goes with salmon, no dairy" pairs with salmon alone.
  const pairing = readPairing(text);
  text = pairing.text;
  if (pairing.role) filters.role = pairing.role;
  for (const [re, key] of ROLE_PHRASES) consume(re, () => (filters.role ||= key));

  const preferences = [];
  // "Dinner" means a main dish that isn't breakfast, unless the question names another course.
  if (!filters.role && /\b(?:dinner|supper|entree|sunday_dinner)s?\b/.test(text)) {
    filters.role = 'main';
    filters.notBreakfast = !/\bbreakfast|brunch\b/.test(text);
  }
  for (const p of PREFERENCES) {
    if (!p.re.test(text)) continue;
    preferences.push(p);
    if (!p.keep) consume(p.re, () => {});
  }
  const cuisines = [...new Set([...text.matchAll(CUISINE_RE)].flatMap((m) => CUISINE_NAMES.get(m[1])))];
  if (cuisines.length)
    preferences.push({
      key: 'cuisine',
      label: cuisines.join(' or '),
      weight: CUISINE_BOOST,
      test: (r) => cuisineGroups(r.cuisines).some((g) => cuisines.includes(g)) || r.cuisines.some((c) => cuisines.includes(c)),
    });

  const maxParam = Number(params.max_minutes ?? params.maxMinutes);
  if (Number.isFinite(maxParam) && maxParam > 0)
    filters.maxMinutes = filters.maxMinutes ? Math.min(filters.maxMinutes, Math.round(maxParam)) : Math.round(maxParam);
  for (const d of [].concat(params.diet || [])) {
    const key = String(d).toLowerCase().trim().replace(/[\s_]+/g, '-');
    if (DIET_EXCLUDES[key]) filters.exclude.push(DIET_EXCLUDES[key]);
    else if (DIET_TITLE[key]) filters.diets.push(key);
  }
  if (params.role) filters.role = String(params.role).toLowerCase().trim();
  if (params.cuisine) filters.cuisine = String(params.cuisine).toLowerCase().trim();
  filters.diets = [...new Set(filters.diets)];
  filters.exclude = [...new Set(filters.exclude)];

  const found = [...new Set(tokenize(text))].filter(
    (w) => w.length > 1 && !STOP_WORDS.has(w) && !/^\d+$/.test(w) && !/_free$/.test(w)
  );
  return { filters, preferences, words: found.slice(0, MAX_WORDS), pairFor: pairing.pairFor, maybeExclude };
}

// ── The index ─────────────────────────────────────────────────────────────

// Each field keeps a count for every form of every word, so "tomatoes" in a question finds
// "tomato" in a recipe and the other way round.
function fieldStats(texts, drop) {
  const counts = new Map();
  let length = 0;
  // One pass over the joined text is much faster than one per line, and the separator keeps
  // a phrase from running across two lines.
  for (const w of words(texts.join(' | '))) {
    if (drop?.has(w)) continue;
    length++;
    for (const f of wordForms(w)) counts.set(f, (counts.get(f) || 0) + 1);
  }
  return { counts, length: length || 1 };
}

const STAPLE = /^(?:(?:kosher |sea |table |fine |flaky )?salt(?: and (?:black )?pepper)?|(?:freshly ground |ground )?(?:black )?pepper|water|ice|(?:extra virgin |olive |vegetable |canola |neutral |avocado |cooking )*oil|cooking spray)$/;
const LINKED_SLUG = /\/mise\/recipes\/([a-z0-9-]+)\//g;
const LINE_BREAK = 'zzlinebreak';
const splitLines = (tokens) => {
  const lines = [[]];
  for (const t of tokens) t === LINE_BREAK ? lines.push([]) : lines.at(-1).push(t);
  return lines;
};

/** Prepare records for ranking. Runs once per index load. */
export function createAgentIndex(records) {
  const bySlug = new Map(records.map((r) => [r.slug, r]));
  const lineCache = new Map();
  // The words of every ingredient line, the title and the lines of linked sub-recipes, two
  // levels deep, so "without nuts" also leaves out a dish whose pesto has pine nuts.
  const linesOf = (record, depth = 0, seen = new Set()) => {
    if (seen.has(record.slug)) return [];
    seen.add(record.slug);
    const own =
      lineCache.get(record.slug) ||
      splitLines(words([record.title, ...record.ingredients.map(plainText)].join(` ${LINE_BREAK} `)));
    lineCache.set(record.slug, own);
    if (depth >= 2) return own;
    const linked = record.ingredients.flatMap((l) => [...l.matchAll(LINKED_SLUG)].map((m) => bySlug.get(m[1])));
    return [...own, ...linked.filter(Boolean).flatMap((r) => linesOf(r, depth + 1, seen))];
  };
  const vocab = new Set();
  // Which recipes hold each word, so a search reads only the recipes that can match.
  const postings = new Map();
  const docs = records.map((record, id) => {
    const fields = {
      title: fieldStats([record.title]),
      ingredients: fieldStats(record.ingredientNames, CUISINE_WORDS),
      tags: fieldStats([
        ...record.cuisines,
        ...record.dietary,
        ...record.occasions,
        ...record.methods,
        record.role,
        record.vibe,
      ]),
      description: fieldStats([record.description]),
      steps: fieldStats(record.steps),
    };
    // Where each ingredient word first appears. Main ingredients are listed first.
    const ingredientRank = new Map();
    splitLines(words(record.ingredientNames.join(` ${LINE_BREAK} `))).forEach((line, i) => {
      for (const w of line) for (const f of wordForms(w)) if (!ingredientRank.has(f)) ingredientRank.set(f, i);
    });
    const fieldForms = new Set(Object.values(fields).flatMap((field) => [...field.counts.keys()]));
    for (const f of fieldForms) {
      vocab.add(f);
      if (!postings.has(f)) postings.set(f, []);
      postings.get(f).push(id);
    }
    const ingredientCount = record.ingredientNames.filter((n) => !STAPLE.test(n)).length;
    const lines = linesOf(record).map((line) => line.map(wordForms));
    const forms = new Set(lines.flat(2));
    return { id, record, fields, ingredientRank, ingredientCount, lines, forms };
  });
  const avgLength = {};
  for (const name of Object.keys(FIELDS))
    avgLength[name] = docs.reduce((s, d) => s + d.fields[name].length, 0) / (docs.length || 1);
  // Two-typo matching compares a word only with words of about the same length and first letter.
  const vocabByLength = new Map();
  for (const v of vocab) {
    if (!vocabByLength.has(v.length)) vocabByLength.set(v.length, []);
    vocabByLength.get(v.length).push(v);
  }
  return { docs, vocab: [...vocab], vocabSet: vocab, vocabByLength, postings, avgLength, size: docs.length, bySlug };
}

// Two edits at most, for longer words ("brocolli"), checked cheaply: lengths first.
function withinTwoEdits(a, b) {
  if (Math.abs(a.length - b.length) > 2) return false;
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      best = Math.min(best, cur[j]);
    }
    if (best > 2) return false;
    prev = cur;
  }
  return prev[b.length] <= 2;
}

// A query word and every form it should match: its plural and singular forms and its synonyms.
// A word the collection doesn't know may complete a longer word or forgive a typo.
function expandWord(word, index) {
  const forms = new Set(wordForms(word));
  for (const group of SYNONYMS)
    if (group.some((g) => g === word || wordForms(word).includes(g)))
      for (const g of group) for (const f of wordForms(g)) forms.add(f);
  const members = CATEGORIES[wordForms(word).find((f) => CATEGORIES[f])];
  if (members) for (const m of members.split(' ')) for (const f of wordForms(m)) forms.add(f);
  if (![...forms].some((f) => index.vocabSet.has(f))) {
    let fallback = [];
    if (word.length >= MIN_PREFIX_LENGTH)
      fallback = index.vocab.filter((v) => v.startsWith(word) && v.length > word.length);
    if (!fallback.length && word.length >= MIN_TYPO_LENGTH)
      fallback = index.vocab.filter((v) => withinOneEdit(word, v));
    if (!fallback.length && word.length >= MIN_TWO_TYPO_LENGTH)
      for (let n = word.length - 2; n <= word.length + 2; n++)
        for (const v of index.vocabByLength.get(n) || [])
          if (v[0] === word[0] && withinTwoEdits(word, v)) fallback.push(v);
    for (const f of fallback.slice(0, 8)) forms.add(f);
  }
  return { word, forms: [...forms] };
}

function fieldCount(field, term) {
  let most = 0;
  for (const f of term.forms) {
    const n = field.counts.get(f);
    if (n > most) most = n;
  }
  return most;
}

// ── Leaving ingredients out ───────────────────────────────────────────────

// The phrases one excluded item stands for: a group's members, or the item and its synonyms.
function exclusionTerms(item) {
  const key = GROUP_ALIASES[item] || item;
  const group = EXCLUDE_GROUPS[key] || EXCLUDE_GROUPS[wordForms(key).find((f) => EXCLUDE_GROUPS[f])];
  const terms = group ? group.split(/\s+/).filter(Boolean) : [item];
  const out = new Set();
  for (const term of terms) {
    out.add(term);
    for (const syn of SYNONYMS) if (syn.includes(term)) for (const s of syn) out.add(s);
    const members = !group && CATEGORIES[term];
    if (members) for (const m of members.split(' ')) out.add(m);
  }
  return [...out].map((t) => t.split(' ').map((w) => new Set(wordForms(w))));
}

// Does the recipe list the phrase? Lines hold each word's forms. "Coconut milk" and "peanut
// butter" aren't dairy, so a dairy word right after one of those doesn't count.
function holds(doc, phrase) {
  for (const set of phrase) {
    let found = false;
    for (const f of set)
      if (doc.forms.has(f)) {
        found = true;
        break;
      }
    if (!found) return false;
  }
  for (const line of doc.lines)
    for (let i = 0; i + phrase.length <= line.length; i++) {
      let ok = true;
      for (let k = 0; k < phrase.length && ok; k++) ok = line[i + k].some((f) => phrase[k].has(f));
      if (!ok) continue;
      if (
        phrase.length === 1 &&
        i > 0 &&
        line[i - 1].some((f) => NOT_DAIRY_BEFORE.has(f)) &&
        [...phrase[0]].some((f) => DAIRY_WORDS.has(f))
      )
        continue;
      return true;
    }
  return false;
}

// An excluded phrase the collection never lists may be a phrase plus a dish ("cilantro tacos").
// The longest start that some recipe lists is excluded, and the rest goes back to the search.
function resolveExclusions(index, items, maybe = []) {
  const exclude = [];
  const back = [];
  const isGroup = (w) => Boolean(EXCLUDE_GROUPS[GROUP_ALIASES[w] || w]);
  const listed = (phrase, terms) => index.docs.some((d) => terms.some((t) => holds(d, t)));
  for (const item of items) {
    let tokens = item.split(' ');
    while (tokens.length) {
      let k = tokens.length;
      for (; k > 1; k--) {
        const phrase = tokens.slice(0, k).join(' ');
        if (isGroup(phrase) || listed(phrase, exclusionTerms(phrase))) break;
      }
      const phrase = tokens.slice(0, k).join(' ');
      exclude.push({ phrase, terms: exclusionTerms(phrase) });
      tokens = tokens.slice(k);
      // "no dairy eggs nuts" names three groups. Anything else left over is the dish.
      if (!tokens.length || !isGroup(tokens[0])) break;
    }
    back.push(...tokens);
  }
  // A word recipes use as an ingredient more than as a dish name is left out. One that names
  // dishes ("soup", "tacos") goes back to the search.
  for (const item of maybe) {
    const words = item.split(' ').map(wordForms);
    const has = (field) => words.every((forms) => forms.some((f) => field.counts.has(f)));
    let asIngredient = 0;
    let asTitle = 0;
    for (const d of index.docs) {
      if (has(d.fields.ingredients)) asIngredient++;
      if (has(d.fields.title)) asTitle++;
    }
    if (isGroup(item) || asIngredient > asTitle) exclude.push({ phrase: item, terms: exclusionTerms(item) });
    else back.push(...item.split(' '));
  }
  return { exclude, back };
}

function passesFilters(doc, filters, exclude, used) {
  const record = doc.record;
  if (filters.maxMinutes && !(record.minutes > 0 && record.minutes <= filters.maxMinutes && !record.open))
    return false;
  if (filters.maxIngredients && doc.ingredientCount > filters.maxIngredients) return false;
  const title = record.title.toLowerCase();
  if (filters.diets.some((d) => !record.dietary.includes(d) && !DIET_TITLE[d]?.test(title))) return false;
  if (filters.role && record.role !== filters.role) return false;
  if (filters.notBreakfast && record.picks.includes('breakfast')) return false;
  if (
    filters.cuisine &&
    !record.cuisines.some((c) => c.toLowerCase() === filters.cuisine) &&
    !cuisineGroups(record.cuisines).some((g) => g.toLowerCase() === filters.cuisine)
  )
    return false;
  const hit = exclude.find((x) => x.terms.some((t) => holds(doc, t)));
  if (hit) {
    used.add(hit);
    return false;
  }
  return true;
}

// ── Ranking ───────────────────────────────────────────────────────────────

// The recipes Mise lists as pairings for the dish the question names, in either direction.
function listedPairings(index, pairFor) {
  const anchorTerms = pairFor
    .split(' ')
    .filter((w) => w && !STOP_WORDS.has(w))
    .map((w) => expandWord(w, index));
  if (!anchorTerms.length) return { anchors: [], linked: new Map() };
  const named = (d, field) => anchorTerms.every((t) => fieldCount(d.fields[field], t) > 0);
  let anchors = index.docs.filter((d) => named(d, 'title'));
  if (!anchors.length)
    anchors = index.docs.filter((d) =>
      anchorTerms.every((t) => t.forms.some((f) => (d.ingredientRank.get(f) ?? 99) < 3))
    );
  anchors = anchors.sort((a, b) => a.record.title.length - b.record.title.length).slice(0, 8);
  const anchorSlugs = new Set(anchors.map((a) => a.record.slug));
  const linked = new Map();
  const add = (slug) => !anchorSlugs.has(slug) && linked.set(slug, (linked.get(slug) || 0) + 1);
  for (const a of anchors) for (const slug of a.record.pairsWith) add(slug);
  for (const d of index.docs)
    for (const slug of d.record.pairsWith) if (anchorSlugs.has(slug)) add(d.record.slug);
  return { anchors, linked };
}

/**
 * Rank the index for a question. Returns the parsed question and the top results, each with
 * the fields and the query words it matched.
 */
export function searchAgentIndex(index, query, params = {}) {
  const parsed = parseAgentQuery(query, params);
  const filters = parsed.filters;
  const limit = Math.min(MAX_LIMIT, Math.max(1, Math.round(Number(params.limit)) || DEFAULT_LIMIT));
  const { exclude, back } = resolveExclusions(index, filters.exclude, parsed.maybeExclude);
  filters.exclude = exclude.map((x) => x.phrase);
  // An excluded word no recipe lists ("oven") changes nothing, and the answer says so.
  const used = new Set();
  const searchWords = [...new Set([...parsed.words, ...back.filter((w) => !STOP_WORDS.has(w))])].slice(0, MAX_WORDS);
  let pool = index.docs.filter((d) => passesFilters(d, filters, exclude, used));
  // An exclusion that removed nothing here may still be listed by recipes the other filters
  // dropped. Only one no recipe lists at all is reported.
  const unusedExclusions = exclude
    .filter((x) => !used.has(x) && !index.docs.some((d) => x.terms.some((t) => holds(d, t))))
    .map((x) => x.phrase);

  const pairing = parsed.pairFor ? listedPairings(index, parsed.pairFor) : null;
  const usePairings = pairing && pairing.linked.size > 0;
  if (usePairings) pool = pool.filter((d) => pairing.linked.has(d.record.slug));
  // With no listed pairings, the dish's name is searched like any other words.
  if (pairing && !usePairings) searchWords.push(...parsed.pairFor.split(' ').filter((w) => !STOP_WORDS.has(w)));

  // Document frequency over the whole collection, so a filter doesn't change how rare a word is.
  // A word no recipe uses at all ("tonights") is set aside and reported.
  const unmatched = [];
  const terms = [];
  const idf = [];
  const candidates = new Set();
  for (const word of searchWords) {
    const term = expandWord(word, index);
    const holders = new Set(term.forms.flatMap((f) => index.postings.get(f) || []));
    for (const id of holders) candidates.add(id);
    const df = holders.size;
    if (!df) {
      // "Thanksgiving" or "Ethiopian" was already read as a preference, so it isn't unknown.
      const understood =
        parsed.preferences.some((p) => p.keep && p.re.test(word)) || CUISINE_NAMES.has(word);
      if (!understood) unmatched.push(word);
      continue;
    }
    terms.push(term);
    idf.push(Math.log(1 + (index.size - df + 0.5) / (df + 0.5)));
  }
  // Every word was unknown: say so rather than return the whole collection.
  // With a filter or preference, the unknown words are set aside and the filters still answer
  // ("gluten free dessert for Zoe").
  const constrained =
    filters.maxMinutes ||
    filters.maxIngredients ||
    filters.diets.length ||
    filters.role ||
    filters.cuisine ||
    exclude.length ||
    parsed.preferences.length;
  const nothingMatched = unmatched.length > 0 && !terms.length && !usePairings && !constrained;
  // When no recipe that fits the filters has any of the words ("vegan dessert for grandma"),
  // the words are set aside and the answer lists what fits the filters, saying so.
  // A word several recipes are named for or cook with ("cookies") is the dish itself, so the
  // answer says none fit instead of listing something else.
  const setAside = [];
  const noneFit = terms.length > 0 && !usePairings && pool.length > 0 && !pool.some((d) => candidates.has(d.id));
  const namesDishes = (term) =>
    index.docs.filter((d) => fieldCount(d.fields.title, term) || fieldCount(d.fields.ingredients, term)).length >= 3;
  if (noneFit && constrained && !terms.some(namesDishes)) {
    setAside.push(...terms.map((t) => t.word));
    terms.length = 0;
    idf.length = 0;
  }

  // A question with only filters and preferences ("vegan", "a potluck dish") lists the recipes
  // that fit a preference, and leaves drinks, sauces and basics out unless that course was asked.
  if (!terms.length && !usePairings) {
    const preferred = pool.filter((d) => parsed.preferences.some((p) => p.test(d.record)));
    if (preferred.length) pool = preferred;
    if (!filters.role) pool = pool.filter((d) => !['drink', 'condiment', 'base'].includes(d.record.role));
  }

  const scored = [];
  const fitCount = pool.length;
  if (terms.length && !usePairings) pool = pool.filter((d) => candidates.has(d.id));
  for (const doc of nothingMatched ? [] : pool) {
    let score = 0;
    let coverage = 0;
    const matchedFields = new Set();
    const matchedWords = [];
    terms.forEach((term, i) => {
      let tf = 0;
      let outsideSteps = false;
      for (const [name, { weight, b }] of FIELD_LIST) {
        const field = doc.fields[name];
        const count = fieldCount(field, term);
        if (!count) continue;
        matchedFields.add(name);
        if (name !== 'steps') outsideSteps = true;
        let boost = 1;
        if (name === 'ingredients') {
          let rank = 99;
          for (const f of term.forms) rank = Math.min(rank, doc.ingredientRank.get(f) ?? 99);
          boost = rank < 3 ? 1.5 : rank < 6 ? 1.2 : 1;
        }
        tf += (weight * boost * count) / (1 - b + (b * field.length) / index.avgLength[name]);
      }
      if (tf) {
        // A word found only in the steps ("bring to a boil") counts for half.
        coverage += outsideSteps ? 1 : 0.5;
        matchedWords.push(term.word);
        score += idf[i] * ((tf * (K1 + 1)) / (tf + K1));
      }
    });
    if (terms.length) {
      if (!coverage && !usePairings) continue;
      // Each missing word costs a recipe a share of its score.
      score *= (coverage / terms.length) ** 1.5;
      if (terms.every((t) => fieldCount(doc.fields.title, t) > 0)) score *= 1.25;
    }
    // A listed pairing ranks by how many of the named dishes list it, then by the other words.
    if (usePairings) score = pairing.linked.get(doc.record.slug) + score / 10;
    else if (!terms.length) score = 1;
    // A sauce or a basic shares ingredients with the dishes it goes in. Unless the question
    // names it or asks for that course, it ranks below the dishes themselves.
    if (
      ['condiment', 'base'].includes(doc.record.role) &&
      filters.role !== doc.record.role &&
      !terms.some((t) => fieldCount(doc.fields.title, t) > 0)
    )
      score *= 0.6;
    const prefs = parsed.preferences.filter((p) => p.test(doc.record));
    score *= 1 + prefs.reduce((s, p) => s + (p.weight || PREFERENCE_BOOST), 0);
    scored.push({ doc, score, matchedFields: [...matchedFields], matchedWords, preferences: prefs.map((p) => p.label) });
  }
  // Results far below the best one are noise ("Banana Pudding" for "banana bread").
  if (terms.length && scored.length) {
    const best = Math.max(...scored.map((s) => s.score));
    for (let i = scored.length - 1; i >= 0; i--) if (scored[i].score < best * RELEVANCE_FLOOR) scored.splice(i, 1);
  }
  // When nothing that fits has the words outside its steps, the answer says so.
  const onlyWeakMatches =
    terms.length > 0 && scored.length > 0 && !scored.some((s) => s.matchedFields.some((f) => f !== 'steps' && f !== 'description'));
  const mainFirst = !terms.length && !filters.role;
  scored.sort(
    (a, b) =>
      b.score - a.score ||
      (mainFirst ? (b.doc.record.role === 'main') - (a.doc.record.role === 'main') : 0) ||
      (a.doc.record.minutes || 9999) - (b.doc.record.minutes || 9999) ||
      a.doc.record.title.localeCompare(b.doc.record.title)
  );
  return {
    query: String(query || '').slice(0, MAX_QUERY_LENGTH),
    filters,
    preferences: parsed.preferences.map((p) => p.label),
    words: searchWords,
    unmatched,
    unusedExclusions,
    nothingMatched,
    setAside,
    noneFit: noneFit && !setAside.length,
    onlyWeakMatches,
    pairFor: parsed.pairFor,
    pairedWith: pairing ? pairing.anchors.map((a) => ({ title: a.record.title, url: a.record.url })) : [],
    pairingsListed: Boolean(usePairings),
    // When the filters leave nothing, how many recipes they removed, so the answer can say so.
    withoutFilters: fitCount ? null : index.size,
    total: scored.length,
    collection: index.size,
    results: scored.slice(0, limit).map((s) => ({
      ...s.doc.record,
      score: Number(s.score.toFixed(3)),
      matchedFields: s.matchedFields,
      matchedWords: s.matchedWords,
      matchedPreferences: s.preferences,
      excerpt: bestStep(s.doc.record, terms),
      pairings: (s.doc.record.pairsWith || [])
        .map((slug) => index.bySlug.get(slug))
        .filter(Boolean)
        .slice(0, 4)
        .map((r) => ({ title: r.title, url: r.url })),
    })),
  };
}

// The step that mentions the most query words, when the match is about method, not just name.
function bestStep(record, terms) {
  if (!terms.length) return '';
  let best = '';
  let bestHits = 0;
  for (const step of record.steps) {
    const forms = new Set(words(step).flatMap(wordForms));
    const hits = terms.filter((t) => t.forms.some((f) => forms.has(f))).length;
    if (hits > bestHits) {
      best = step;
      bestHits = hits;
    }
  }
  return best.length > 320 ? `${best.slice(0, 317).replace(/\s+\S*$/, '')}…` : best;
}

// ── Output ────────────────────────────────────────────────────────────────

const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
const label = (s) => cap(String(s).replace(/[-_]/g, ' '));
// Text from the question goes into the answer as plain text, so it can't add a heading or link.
const plain = (s) => String(s).replace(/\s+/g, ' ').replace(/[\\`*_[\]()#<>|!~]/g, '\\$&').trim();

/** What the search understood, in a line an agent can repeat back to its user. */
export function describeFilters(result) {
  const parts = [];
  const f = result.filters;
  if (f.maxMinutes) parts.push(`total time ${f.maxMinutes} min or less`);
  if (f.maxIngredients) parts.push(`${f.maxIngredients} ingredients or fewer, not counting salt, pepper, oil and water`);
  for (const d of f.diets) parts.push(label(d).toLowerCase());
  if (f.role) parts.push(`course: ${f.role}`);
  if (f.cuisine) parts.push(`cuisine: ${f.cuisine}`);
  for (const x of f.exclude) parts.push(`no ${x.replace(/_/g, ' ')}`);
  return parts;
}

/** The response as Markdown: one section per recipe, each with its canonical URL. */
const ALLERGY_NOTE =
  'Left-out ingredients are checked against each ingredient list and its linked sub-recipes. ' +
  'Check the recipe and labels before cooking for an allergy.';

export function renderMarkdown(result) {
  const lines = [`# Mise recipe search: ${plain(result.query) || '(no query)'}`, ''];
  const filters = describeFilters(result);
  if (filters.length) lines.push(`Filters: ${plain(filters.join(', '))}.`);
  if (result.preferences.length) lines.push(`Preferred: ${result.preferences.join(', ')}.`);
  if (result.filters.exclude.length) lines.push(ALLERGY_NOTE);
  if (result.unusedExclusions.length)
    lines.push(`No recipe lists ${plain(result.unusedExclusions.join(', ').replace(/_/g, ' '))}, so leaving it out changed nothing.`);
  if (result.pairFor)
    lines.push(
      result.pairingsListed
        ? `Pairings the recipes list for: ${result.pairedWith.map((p) => `[${p.title}](${p.url})`).join(', ')}.`
        : `No recipe lists pairings for "${plain(result.pairFor)}", so these are ordinary matches.`
    );
  const scope = result.pairingsListed
    ? `${result.total} listed pairings fit`
    : result.words.length && !result.setAside.length
      ? `${result.total} of ${result.collection} recipes match, best first`
      : `${result.total} of ${result.collection} recipes fit`;
  lines.push(
    `${scope}. Showing ${result.results.length}. Times are total elapsed time, waits included. ` +
      `Source: ${SITE_URL}`,
    ''
  );
  if (result.onlyWeakMatches)
    lines.push(
      'No recipe that fits the filters has these words in its title, ingredients or tags. ' +
        'These only mention them in passing.',
      ''
    );
  if (result.setAside.length)
    lines.push(
      `No recipe that fits the filters mentions ${plain(result.setAside.join(', '))}, so these fit the filters alone.`,
      ''
    );
  if (result.unmatched.length)
    lines.push(`No recipe mentions: ${plain(result.unmatched.join(', '))}. Those words were left out.`, '');
  if (!result.results.length)
    lines.push(
      result.nothingMatched
        ? 'No recipe matches any of these words. Try other words for the dish or ingredient.'
        : result.noneFit
          ? `No recipe that fits the filters mentions ${plain(result.words.join(', '))}.`
          : result.withoutFilters
            ? 'No recipe passes all of these filters together. Drop one to see more.'
          : 'No recipe matches. Try fewer words or drop a filter.',
      ''
    );
  result.results.forEach((r, i) => {
    const facts = [
      label(r.role),
      ...r.cuisines,
      r.totalTime ? `Total time: ${r.totalTime}` : 'Time not listed',
      r.servings ? (/^\d+$/.test(r.servings) ? `Serves ${r.servings}` : `Makes ${r.servings}`) : '',
      r.difficulty ? label(r.difficulty) : '',
      ...r.dietary.map(label),
    ].filter(Boolean);
    lines.push(`## ${i + 1}. [${r.title}](${r.url})`, '', facts.join(' · '), '', r.description, '');
    lines.push(`**Ingredients:** ${r.ingredients.join('; ')}`, '');
    if (r.excerpt) lines.push(`**From the directions:** ${r.excerpt}`, '');
    if (r.pairings.length)
      lines.push(`**Serve with:** ${r.pairings.map((p) => `[${p.title}](${p.url})`).join(', ')}`, '');
  });
  return lines.join('\n').trimEnd() + '\n';
}

/** The response as JSON. Steps stay out so a result list stays small, and the URL has them. */
export function renderJson(result) {
  const { notBreakfast, ...filters } = result.filters;
  return {
    query: result.query,
    filters,
    preferences: result.preferences,
    total: result.total,
    collection: result.collection,
    unmatched: result.unmatched,
    unusedExclusions: result.unusedExclusions,
    ...(filters.exclude.length ? { allergyNote: ALLERGY_NOTE } : {}),
    nothingMatched: result.nothingMatched,
    setAside: result.setAside,
    noneFit: result.noneFit,
    withoutFilters: result.withoutFilters,
    pairedWith: result.pairedWith,
    results: result.results.map(({ steps, picks, pairsWith, ...r }) => r),
  };
}

/** Usage text for a request with no question. */
export const USAGE = `# Mise recipe search

Search the Mise family recipe collection (${SITE_URL}).

GET /.well-known/search?q=<question>

- q: a dish, ingredients or a whole question, like "vegetarian dinner under 30 minutes".
  Times ("under 30 minutes"), diets ("vegan", "gluten-free"), courses ("dessert", "side dish"),
  "5 ingredients or fewer" and "without <ingredient>" or "allergic to <ingredient>" become hard
  filters. "What goes with <dish>" returns the pairings the recipes list.
- max_minutes, diet, role, cuisine: the same filters as parameters. diet also takes
  dairy-free, nut-free and egg-free, which leave those ingredients out.
- limit: results to return, 1 to ${MAX_LIMIT} (default ${DEFAULT_LIMIT}).
- format: markdown (default) or json.

Each result links to its recipe page, which has the full method.
`;
