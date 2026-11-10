// Recipe search by word matching.
//
// The query is split into words and every word must match the recipe (AND).
// A query word matches a recipe word when they are equal or are the same word
// in singular and plural. So "dal" never finds "salt".
// A query word completes longer words ("chick" finds chicken) only when it is
// not itself a word somewhere in the collection. So "corn" does not find
// cornstarch and "pot" does not find potato. Words of three letters or fewer
// only complete words in titles.
// A one-letter typo is forgiven only for words of 5+ letters that match nothing
// on their own, and only when the strict pass finds nothing at all.
// Results rank title hits above tag hits above ingredient hits above body hits.
import { QUICK_PICKS, COURSES, quickPicksFor } from './quick-picks.mjs';

const STOP_WORDS = new Set(
  (
    'a an and are can could do for from have how i in is it make me my of on or ' +
    'recipe recipes should some something that the to use using want we what with'
  ).split(' ')
);

// Phrases a cook uses for the same thing. Either side of a pair finds both.
const SYNONYMS = [
  [
    ['instant', 'pot'],
    ['pressure', 'cooker'],
  ],
  [['instapot'], ['pressure', 'cooker']],
  [['bbq'], ['barbecue']],
  [['barbeque'], ['barbecue']],
  [['barbeque'], ['bbq']],
];

// Quick picks whose label is a word a cook would type. "Under 30 min" is a time, not a word.
const PICK_LABELS = Object.fromEntries(
  QUICK_PICKS.filter((p) => !['under30', 'learn'].includes(p.key)).map((p) => [p.key, p.label])
);
const COURSE_LABELS = Object.fromEntries(COURSES.map((c) => [c.key, c.label]));

const TIERS = ['title', 'tags', 'ingredients', 'body'];
const TIER_SCORE = { title: 4000, tags: 3000, ingredients: 2000, body: 1000 };
const MIN_TYPO_LENGTH = 5;
const MIN_PREFIX_LENGTH = 4;
const MIN_COMPOUND_LENGTH = 5;

/** Lowercase words. "gluten-free" and "gluten free" both become the one word "gluten_free". */
export function tokenize(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['\u2018\u2019\u02bc]/g, '')
    .replace(/\b([a-z]+)[\s-]+free\b/g, '$1_free')
    .split(/[^a-z0-9_]+/)
    .filter(Boolean);
}

/**
 * The query words that must all match. Filler words and single letters drop out.
 * An empty list means there is nothing to search for.
 */
export function queryTokens(query) {
  return [...new Set(tokenize(query))].filter((t) => t.length > 1 && !STOP_WORDS.has(t));
}

/** A word with its simple singular forms: eggs → egg, tomatoes → tomato, leaves → leaf. */
export function wordForms(word) {
  const forms = [word];
  if (word.length > 3 && word.endsWith('s') && !word.endsWith('ss')) {
    forms.push(word.slice(0, -1));
    if (/(ch|sh|x|z|s|o)es$/.test(word)) forms.push(word.slice(0, -2));
    if (word.endsWith('ies') && word.length > 4) forms.push(`${word.slice(0, -3)}y`);
    if (word.endsWith('ves') && word.length > 4)
      forms.push(`${word.slice(0, -3)}f`, `${word.slice(0, -3)}fe`);
  }
  return forms;
}

const sameWord = (a, b) => {
  if (a === b) return true;
  const fb = wordForms(b);
  return wordForms(a).some((f) => fb.includes(f));
};

/** True when the two words are one insert, delete, swap or neighbor transposition apart. */
export function withinOneEdit(a, b) {
  if (a === b) return true;
  const la = a.length;
  const lb = b.length;
  if (Math.abs(la - lb) > 1) return false;
  let i = 0;
  while (i < la && i < lb && a[i] === b[i]) i++;
  if (la === lb) {
    if (a.slice(i + 1) === b.slice(i + 1)) return true;
    return a[i] === b[i + 1] && a[i + 1] === b[i] && a.slice(i + 2) === b.slice(i + 2);
  }
  return la > lb ? a.slice(i + 1) === b.slice(i) : a.slice(i) === b.slice(i + 1);
}

// Ingredient names, not amounts: "2 cups (250 g) flour, sifted" → "flour".
export const ingredientName = (line) =>
  String(line)
    .toLowerCase()
    .replace(/\([^)]*\)/g, ' ')
    .replace(/^[\d\s/.,½¼¾⅓⅔⅛-]+/, '')
    .replace(
      /^(cups?|tablespoons?|tbsp|teaspoons?|tsp|pounds?|lbs?|ounces?|oz|grams?|g|kg|ml|liters?|l|cloves?|pinch|dash|cans?|large|medium|small|whole|bunch)\b\.?\s*/g,
      ''
    )
    .split(',')[0]
    .replace(/\s+/g, ' ')
    .trim();

/**
 * The search record for one recipe. Built at build time and shipped to the page.
 * `extra.lessons` are technique lesson slugs ("browning") and `extra.description` is the blurb.
 */
export function buildSearchItem(recipe, extra = {}) {
  const d = recipe.data;
  const picks = quickPicksFor(d)
    .map((k) => PICK_LABELS[k])
    .filter(Boolean);
  const tags = [
    // "vegan-option" means the recipe is not vegan as written, so it is not a vegan hit.
    // Drinks are left out of vegetarian and vegan, the same as the Vegetarian quick pick.
    ...(d.dietary || []).filter(
      (t) => !/-option$/.test(t) && !(d.role === 'drink' && /^(vegetarian|vegan)$/.test(t))
    ),
    ...(d.occasions || []),
    ...(d.cuisines || []),
    ...(d.cookingMethods || []),
    d.role,
    COURSE_LABELS[d.role],
    d.origin,
    ...picks,
  ].filter(Boolean);
  const ingredients = [
    ...new Set(
      (d.ingredients || [])
        .filter((line) => !/^---/.test(line))
        .map(ingredientName)
        .filter(Boolean)
    ),
  ];
  const body = [...(d.flavorProfile || []), ...(extra.lessons || []), extra.description].filter(
    Boolean
  );
  return { slug: recipe.slug, title: d.title, tags, ingredients, body };
}

const uniqueWords = (texts) => [...new Set(texts.flatMap(tokenize))];

// One tier of one recipe: its words, every singular form of them, and the first halves of
// compound diet words ("gluten" for "gluten_free").
function tierWords(words) {
  const forms = new Set();
  const heads = new Set();
  const plain = [];
  for (const w of words) {
    if (w.includes('_')) {
      forms.add(w);
      heads.add(w.split('_')[0]);
    } else {
      plain.push(w);
      for (const f of wordForms(w)) forms.add(f);
    }
  }
  return { words: plain, forms, heads };
}

/**
 * Prepare records for searching. Runs once, on the first search.
 * The returned list also carries `vocab`, every word form in the collection.
 */
export function createSearchIndex(items) {
  const vocab = new Set();
  const index = items.map((item) => {
    const titleWords = tokenize(item.title);
    // Ingredient words remember the earliest line they appear on. Main ingredients come first.
    const ingredientRank = new Map();
    (item.ingredients || []).forEach((name, i) => {
      for (const w of tokenize(name))
        for (const f of wordForms(w)) if (!ingredientRank.has(f)) ingredientRank.set(f, i);
    });
    const tiers = {
      title: tierWords([...new Set(titleWords)]),
      tags: tierWords(uniqueWords(item.tags || [])),
      ingredients: tierWords(uniqueWords(item.ingredients || [])),
      body: tierWords(uniqueWords(item.body || [])),
    };
    for (const tier of TIERS) for (const f of tiers[tier].forms) vocab.add(f);
    return {
      slug: item.slug,
      title: item.title,
      titleFirst: titleWords[0] || '',
      ingredientRank,
      tiers,
    };
  });
  index.vocab = vocab;
  return index;
}

const ingredientBonus = (entry, word) =>
  Math.max(0, 40 - 4 * (entry.ingredientRank.get(word) ?? 10));

// The best place one query word matches one recipe. Whole word 3, completed word 2, typo 1.
function tokenScore(q, entry, typo) {
  for (const tier of TIERS) {
    const t = entry.tiers[tier];
    let level = 0;
    let bonus = 0;
    for (const f of q.forms) {
      if (!t.forms.has(f)) continue;
      level = 3;
      if (tier === 'title' && wordForms(entry.titleFirst).includes(f)) bonus = 50;
      if (tier === 'ingredients') bonus = Math.max(bonus, ingredientBonus(entry, f));
    }
    // "gluten" alone finds "gluten-free". Short words stay out, so "nut" does not find nut-free.
    if (!level && q.word.length >= MIN_COMPOUND_LENGTH && q.forms.some((f) => t.heads.has(f)))
      level = 2;
    if (!level && q.prefix && (tier === 'title' || q.word.length >= MIN_PREFIX_LENGTH)) {
      for (const w of t.words) {
        if (!w.startsWith(q.word)) continue;
        level = 2;
        if (tier === 'title' && w === entry.titleFirst) bonus = 50;
        if (tier === 'ingredients') bonus = Math.max(bonus, ingredientBonus(entry, w));
      }
    }
    if (!level && typo && q.typo) {
      if (t.words.some((w) => wordForms(w).some((f) => withinOneEdit(q.word, f)))) level = 1;
    }
    if (level) return { tier, score: TIER_SCORE[tier] + level * 100 + bonus };
  }
  return null;
}

// What each query word is allowed to do against this collection.
function prepareTokens(tokens, index) {
  return tokens.map((word) => {
    const forms = wordForms(word);
    // A word the collection already knows is searched as that word, never as a prefix.
    const prefix = !forms.some((f) => index.vocab.has(f));
    const q = { word, forms, prefix, typo: false };
    // Only a word that finds nothing on its own may be read as a typo.
    q.typo = word.length >= MIN_TYPO_LENGTH && !index.some((entry) => tokenScore(q, entry, false));
    return q;
  });
}

function runPass(index, prepared, typo, found) {
  for (const entry of index) {
    let total = 0;
    let top = null;
    let ok = true;
    for (const q of prepared) {
      const hit = tokenScore(q, entry, typo);
      if (!hit) {
        ok = false;
        break;
      }
      total += hit.score;
      if (!top || TIERS.indexOf(hit.tier) < TIERS.indexOf(top)) top = hit.tier;
    }
    if (!ok) continue;
    const score = total / prepared.length;
    const seen = found.get(entry.slug);
    if (!seen || score > seen.score)
      found.set(entry.slug, { slug: entry.slug, title: entry.title, score, matchType: top });
  }
}

// The query plus the same query with each known synonym swapped in.
function queryVariants(tokens) {
  const variants = [tokens];
  const swap = (from, to) => {
    for (let i = 0; i + from.length <= tokens.length; i++) {
      if (!from.every((w, k) => tokens[i + k] === w)) continue;
      const next = [...tokens.slice(0, i), ...to, ...tokens.slice(i + from.length)];
      variants.push([...new Set(next)]);
    }
  };
  for (const [a, b] of SYNONYMS) {
    swap(a, b);
    swap(b, a);
  }
  return variants;
}

/**
 * Search the index. Returns [{ slug, title, score, matchType }] with the best match first.
 * `matchType` is the strongest place the query matched: title, tags, ingredients or body.
 * A query with nothing to search for (empty, filler words, one letter) returns [].
 */
export function searchRecipes(query, index) {
  const tokens = queryTokens(query);
  if (!tokens.length) return [];
  const variants = queryVariants(tokens).map((v) => prepareTokens(v, index));
  const found = new Map();
  for (const prepared of variants) runPass(index, prepared, false, found);
  if (!found.size)
    for (const prepared of variants)
      if (prepared.some((q) => q.typo)) runPass(index, prepared, true, found);
  return [...found.values()].sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}

/**
 * The technique lesson a query names, if any: "browning" → the browning lesson.
 * `lessons` is [{ slug, title }]. Every query word must be a word of the lesson slug.
 */
export function lessonForQuery(query, lessons) {
  const tokens = queryTokens(query);
  if (!tokens.length) return null;
  return (
    lessons.find((lesson) => {
      const words = tokenize(lesson.slug);
      return tokens.every((t) => words.some((w) => sameWord(t, w)));
    }) || null
  );
}
