const fractions = {
  '¼': '1/4',
  '½': '1/2',
  '¾': '3/4',
  '⅓': '1/3',
  '⅔': '2/3',
  '⅛': '1/8',
  '⅜': '3/8',
  '⅝': '5/8',
  '⅞': '7/8',
};
const number = '(?:\\d+\\s+\\d+/\\d+|\\d+/\\d+|\\d+(?:\\.\\d+)?)';
const leading = new RegExp(`^(${number})(?:\\s*[–—-]\\s*(${number}))?(?=\\s|$)`);
const countedUnits = [
  'cup',
  'tablespoon',
  'teaspoon',
  'ounce',
  'pound',
  'gram',
  'kilogram',
  'liter',
  'litre',
  'quart',
  'pint',
  'clove',
  'egg white',
  'egg yolk',
  'egg',
  'can',
  'bottle',
];
const unitAtStart = new RegExp(
  `^(\\s+(?:\\([^)]*\\)\\s+)?(?:small\\s+|medium\\s+|large\\s+)?(?:garlic\\s+)?)(${countedUnits.join('|')})(s?)\\b`,
  'i'
);
function scaledUnit(unit, value) {
  const singular = unit.replace(/s$/i, '');
  return value <= 1 ? singular : singular + (unit === unit.toUpperCase() ? 'S' : 's');
}
const produceForms = [
  ['lemon', 'lemons'],
  ['lime', 'limes'],
  ['onion', 'onions'],
  ['carrot', 'carrots'],
  ['scallion', 'scallions'],
  ['pepper', 'peppers'],
  ['tomato', 'tomatoes'],
  ['avocado', 'avocados'],
  ['mango', 'mangoes'],
  ['cucumber', 'cucumbers'],
  ['jalapeño', 'jalapeños'],
  ['shallot', 'shallots'],
];
const produceAtStart = new RegExp(
  `^(\\s+(?:(?:small|medium|large|ripe|firm|but|Hass|Roma|English|red|green|yellow|bell|fresh)\\s+)*)(${produceForms
    .flat()
    .sort((a, b) => b.length - a.length)
    .join('|')})(?=,|$)`,
  'i'
);
function inflectProduce(word, value) {
  const forms = produceForms.find((pair) => pair.includes(word.toLowerCase()));
  const result = forms[value <= 1 ? 0 : 1];
  if (word === word.toUpperCase()) return result.toUpperCase();
  return word[0] === word[0].toUpperCase() ? result[0].toUpperCase() + result.slice(1) : result;
}
function inflectLeadingUnit(rest, value) {
  return (
    rest
      .replace(
        unitAtStart,
        (_match, prefix, unit, plural) => prefix + scaledUnit(unit + plural, value)
      )
      // Only unambiguous counted produce followed by a preparation comma/end.
      // Do not turn a compound ingredient such as "lemon zest" into "lemons zest".
      .replace(produceAtStart, (_match, prefix, word) => prefix + inflectProduce(word, value))
  );
}
function numeric(value) {
  const parts = value.trim().split(/\s+/);
  const sum = parts.reduce((total, part) => {
    if (!part.includes('/')) return total + Number(part);
    const [a, b] = part.split('/').map(Number);
    return b ? total + a / b : NaN;
  }, 0);
  return Number.isFinite(sum) ? sum : null;
}
export function formatQuantity(value) {
  if (!Number.isFinite(value) || value <= 0) return '';
  const whole = Math.floor(value);
  const remainder = value - whole;
  for (const [n, d] of [
    [0, 1],
    [1, 8],
    [1, 6],
    [1, 4],
    [1, 3],
    [3, 8],
    [1, 2],
    [5, 8],
    [2, 3],
    [3, 4],
    [5, 6],
    [7, 8],
    [1, 1],
  ]) {
    if (Math.abs(remainder - n / d) < 0.001) {
      if (n === 0) return String(whole);
      if (n === d) return String(whole + 1);
      return `${whole ? whole + ' ' : ''}${n}/${d}`;
    }
  }
  return String(Number(value.toFixed(value < 0.1 ? 4 : 2)));
}
export function scaleIngredient(text, factor) {
  if (!Number.isFinite(factor) || factor <= 0) return text;
  if (factor === 1) return text;
  const normalized = text
    .replace(/(\d)([¼½¾⅓⅔⅛⅜⅝⅞])/g, '$1 $2')
    .replace(/[¼½¾⅓⅔⅛⅜⅝⅞]/g, (ch) => fractions[ch]);
  const match = normalized.match(leading);
  if (!match) return text;
  const values = [match[1], match[2]].filter(Boolean).map(numeric);
  if (values.some((v) => v === null)) return text;
  const quantity = values.map((v) => formatQuantity(v * factor)).join('–');
  let rest = inflectLeadingUnit(normalized.slice(match[0].length), Math.max(...values) * factor);
  // Scale equivalent weights/volumes only when the leading amount also has a unit.
  // A counted package's size, e.g. "2 (14 oz) cans", stays fixed.
  if (
    /^\s*(?:oz|ounces?|lbs?|pounds?|g|grams?|kg|cups?|tbsp|tsp|ml|l|liters?|litres?|quarts?)\b/i.test(
      rest
    )
  ) {
    const equivalent = new RegExp(
      `\\((about\\s+)?(${number})\\s*(g|kg|ml|oz|lbs?|l|liters?|litres?|cups?|tbsp|tsp)\\)`,
      'gi'
    );
    rest = rest.replace(equivalent, (match, qualifier, amount, unit) => {
      const value = numeric(amount);
      return value === null
        ? match
        : `(${qualifier || ''}${formatQuantity(value * factor)} ${countedUnits.includes(unit.toLowerCase().replace(/s$/, '')) ? scaledUnit(unit, value * factor) : unit})`;
    });
  }
  const additionalOrAlternative = new RegExp(
    `(\\b(?:or|plus)(?:\\s+up\\s+to)?\\s+)(${number})(\\s+(?:cups?|tbsp|tsp|oz|lbs?|g|ml|egg\\s+(?:whites?|yolks?)|eggs?|cloves?)\\b)`,
    'gi'
  );
  rest = rest.replace(additionalOrAlternative, (match, prefix, amount, unit) => {
    const value = numeric(amount);
    return value === null
      ? match
      : prefix + formatQuantity(value * factor) + inflectLeadingUnit(unit, value * factor);
  });
  return quantity + rest;
}

// Scale a clearly stated yield, but never multiply pan dimensions or silently
// leave a second yield (e.g. "4 servings / 24 meatballs") at its original size.
export function formatYield(text, factor = 1) {
  if (!Number.isFinite(factor) || factor <= 0) return `Original yield: ${text}`;
  // Roll and piece counts describe the same batch; scale both while keeping
  // dimensions and ambiguous parenthetical yields on the original-yield path.
  const rolls = text.match(/^(\d+) rolls? \((\d+) pieces?\)$/i);
  if (rolls && Number.isFinite(factor) && factor > 0) {
    const count = Number(rolls[1]) * factor;
    const pieces = Number(rolls[2]) * factor;
    if (count > 0 && pieces > 0 && Number.isInteger(count) && Number.isInteger(pieces)) {
      return `${count} ${count === 1 ? 'roll' : 'rolls'} (${pieces} ${pieces === 1 ? 'piece' : 'pieces'})`;
    }
  }
  const match = text.match(leading);
  const suffix = match ? text.slice(match[0].length) : '';
  const simple = match && !/\d|[¼½¾⅓⅔⅛⅜⅝⅞]/.test(suffix);
  if (simple) {
    const values = [match[1], match[2]].filter(Boolean).map(numeric);
    if (values.every((v) => v !== null && v > 0) && Number.isFinite(factor) && factor > 0) {
      const scaled = values.map((v) => formatQuantity(v * factor)).join('–');
      return suffix.trim() ? `${scaled}${suffix}` : `Serves ${scaled}`;
    }
  }
  return `Original yield: ${text}${factor === 1 ? '' : ` · ${factor}× ingredients`}`;
}
