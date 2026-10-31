// Puts the recipe's help where the cook needs it: each "back on track" fix under the step it
// belongs to, and each swap under the ingredient it replaces.

const STOP = new Set(
  `a an and are as at be but by for from has have if in into is it its of on or so than that the
  their them then there these this to too until up was were when which while will with without you
  your more less very not no all any can may might should would could add use keep make just
  about after before again over under out off back down too much many most some such only own same
  other each per one two three cup cups tbsp tsp teaspoon teaspoons tablespoon tablespoons pound
  pounds lb lbs ounce ounces oz gram grams g kg ml minute minutes optional plus taste fine large
  medium small whole fresh finely thinly chopped diced sliced minced divided`
    .split(/\s+/)
    .filter(Boolean)
);

function stem(word) {
  return word
    .replace(/(ies)$/, 'y')
    .replace(/(sses)$/, 'ss')
    .replace(/(ing|ed|es|s)$/, '')
    .replace(/(.)\1$/, '$1');
}

export function contentWords(text = '') {
  return String(text)
    .toLowerCase()
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[^a-z\s-]/g, ' ')
    .split(/[\s-]+/)
    .filter((w) => w.length > 2 && !STOP.has(w))
    .map(stem)
    .filter((w) => w.length > 2);
}

/**
 * The 1-based step a troubleshooting item belongs to, by the words it shares with each step.
 * The problem counts double because it names what the cook sees. With no overlap, the last step.
 */
export function stepForFix(item, steps = []) {
  if (!steps.length) return 0;
  const weights = new Map();
  const add = (text, weight) =>
    new Set(contentWords(text)).forEach((w) => weights.set(w, (weights.get(w) || 0) + weight));
  add(item.problem, 2);
  add(item.cause, 1);
  add(item.fix, 1);
  let best = steps.length;
  let bestScore = 0;
  steps.forEach((step, i) => {
    const words = new Set(contentWords(typeof step === 'string' ? step : step?.text));
    let score = 0;
    words.forEach((w) => (score += weights.get(w) || 0));
    if (score > bestScore) {
      bestScore = score;
      best = i + 1;
    }
  });
  return best;
}

/**
 * The index of the ingredient line a swap replaces, or -1 when no line clearly names it.
 * Every word of a short name must appear; longer names need most of their words.
 */
export function ingredientForSwap(swapIngredient, ingredients = [], isDivider = () => false) {
  const want = [...new Set(contentWords(swapIngredient))];
  if (!want.length) return -1;
  const needed = want.length <= 2 ? want.length : Math.ceil(want.length * 0.6);
  let best = -1;
  let bestHits = 0;
  ingredients.forEach((line, i) => {
    if (isDivider(line)) return;
    const have = new Set(contentWords(line.split(',')[0]));
    const hits = want.filter((w) => have.has(w)).length;
    if (hits >= needed && hits > bestHits) {
      bestHits = hits;
      best = i;
    }
  });
  return best;
}

/** Groups swaps by ingredient index; swaps no line names are returned separately. */
export function placeSwaps(substitutions = [], ingredients = [], isDivider) {
  const byIngredient = new Map();
  const unplaced = [];
  substitutions.forEach((swap) => {
    const i = ingredientForSwap(swap.ingredient, ingredients, isDivider);
    if (i === -1) unplaced.push(swap);
    else byIngredient.set(i, [...(byIngredient.get(i) || []), swap]);
  });
  return { byIngredient, unplaced };
}
