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
const number = '(?:\\d+\\s+\\d+/\\d+|\\d+/\\d+|\\d{1,3}(?:,\\d{3})+(?:\\.\\d+)?|\\d+(?:\\.\\d+)?)';
const leading = new RegExp(
  `^(${number})(?:(?:\\s*[–—-]\\s*|\\s+to\\s+)(${number}))?(?=\\s|$)`,
  'i'
);
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
  'stick',
  'pack',
  'package',
  'piece',
  'head',
  'barspoon',
  'jar',
  'bag',
];
const unitAtStart = new RegExp(
  `^(\\s+(?:(?:\\([^)]*\\)|\uE000\\d+\uE001)\\s+)?(?:(?:small|medium|large|whole|full|pasteurized)\\s+)*(?:garlic\\s+)?)(${countedUnits.join('|')})(s?)\\b`,
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
    .join('|')})(?=,|$|\\s*\uE000)`,
  'i'
);
function inflectProduce(word, value) {
  const forms = produceForms.find((pair) => pair.includes(word.toLowerCase()));
  const result = forms[value <= 1 ? 0 : 1];
  if (word === word.toUpperCase()) return result.toUpperCase();
  return word[0] === word[0].toUpperCase() ? result[0].toUpperCase() + result.slice(1) : result;
}
const compoundCountForms = [
  ['banana', 'bananas'],
  ['bunch', 'bunches'],
  ['rack', 'racks'],
  ['thigh', 'thighs'],
  ['drumstick', 'drumsticks'],
  ['wing', 'wings'],
  ['bay leaf', 'bay leaves'],
  ['breast half', 'breast halves'],
  ['celery stalk', 'celery stalks'],
  ['Earl Grey Tea Bag', 'Earl Grey Tea Bags'],
  ['Star Anise pod', 'Star Anise pods'],
];
const compoundCountAtStart = new RegExp(
  `^(\\s+(?:(?:small|medium|large|very|ripe|whole)\\s+)*)(${compoundCountForms
    .flat()
    .sort((a, b) => b.length - a.length)
    .join('|')})(?=,|;|$|\\s)`,
  'i'
);
function inflectCompoundCount(rest, value) {
  return rest.replace(compoundCountAtStart, (_, prefix, word) => {
    const forms = compoundCountForms.find((pair) =>
      pair.some((form) => form.toLowerCase() === word.toLowerCase())
    );
    const result = forms[value <= 1 ? 0 : 1];
    if (word === word.toUpperCase()) return prefix + result.toUpperCase();
    return (
      prefix +
      (word[0] === word[0].toLowerCase()
        ? result.toLowerCase()
        : result[0].toUpperCase() + result.slice(1))
    );
  });
}
function inflectLeadingUnit(rest, value) {
  return (
    inflectCompoundCount(rest, value)
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
  const parts = value.replace(/,/g, '').trim().split(/\s+/);
  const sum = parts.reduce((total, part) => {
    if (!part.includes('/')) return total + Number(part);
    const [a, b] = part.split('/').map(Number);
    return b ? total + a / b : NaN;
  }, 0);
  return Number.isFinite(sum) ? sum : null;
}
const quantityGrid = [
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
];
// Amounts print as whole numbers and kitchen fractions (eighths, thirds and sixths). A scaled
// value between two fractions goes to the nearest eighth, so no decimal reaches the page, and
// nothing positive prints as zero. `exact` is for an amount as the author wrote it (a 1.27 oz
// packet), which keeps its decimal.
export function formatQuantity(value, { exact = false } = {}) {
  if (!Number.isFinite(value) || value <= 0) return '';
  const whole = Math.floor(value);
  const remainder = value - whole;
  for (const [n, d] of quantityGrid) {
    if (Math.abs(remainder - n / d) < 0.001) {
      if (n === 0) return String(whole);
      if (n === d) return String(whole + 1);
      return `${whole ? whole + ' ' : ''}${n}/${d}`;
    }
  }
  if (exact) return String(Number(value.toFixed(value < 0.1 ? 4 : 2)));
  return formatQuantity(Math.max(1, Math.round(value * 8)) / 8);
}

// ---------- Kitchen measures for scaled amounts ----------
// A scaled amount has to be something a cook can measure. Small cups step down to
// tablespoons, small tablespoons to teaspoons, and less than 1/8 tsp is a pinch.
// Each function returns parts such as [[1, 'cup'], [1, 'tbsp']] ("1 cup plus 1 tbsp")
// or [['pinch']].
const close = (a, b, tolerance = 0.02) => Math.abs(a - b) <= tolerance * b + 1e-9;
function snapTo(value, steps, tolerance) {
  for (const step of steps) {
    const snapped = Math.round(value / step) * step;
    // Close means within 2 percent and never more than a fiftieth of the unit.
    if (snapped > 0 && close(value, snapped, tolerance) && Math.abs(value - snapped) <= 0.02)
      return snapped;
  }
  return null;
}
const roundTo = (value, step) => Math.max(step, Math.round(value / step + 1e-9) * step);
// No spoon or jigger measures 3/8, 5/8 or 7/8. Under one unit those print as a scant or
// heaping measure of the nearest spoon ("scant 1/2 tsp"). From one unit up, quarters are close
// enough. A part may carry that word as its third element: [0.5, 'tsp', 'scant'].
function eighths(value, unit) {
  if (value >= 1 - 1e-9) return [[roundTo(value, 1 / 4), unit]];
  const count = Math.max(1, Math.round(value * 8 + 1e-9));
  if (count === 3) return [[1 / 2, unit, 'scant']];
  if (count === 5) return [[1 / 2, unit, 'heaping']];
  if (count === 7) return [[1, unit, 'scant']];
  return [[count / 8, unit]];
}
// The number of one part as it prints: "1 1/2", or "scant 1/2".
export const partNumber = ([value, , word]) => (word ? word + ' ' : '') + formatQuantity(value);
function teaspoons(t) {
  if (t < 0.11) return [['pinch']];
  return eighths(t, 'tsp');
}
function tablespoons(T) {
  if (T < 1 - 1e-9) return teaspoons(T * 3);
  if (T >= 4) return [[roundTo(T, 1 / 2), 'tbsp']];
  const half = snapTo(T, [1 / 2]);
  if (half) return [[half, 'tbsp']];
  const whole = Math.floor(T);
  const rest = Math.round((T - whole) * 3 * 2) / 2;
  if (rest === 0) return [[whole, 'tbsp']];
  if (rest === 3) return [[whole + 1, 'tbsp']];
  if (rest === 1.5) return [[whole + 0.5, 'tbsp']];
  return [
    [whole, 'tbsp'],
    [rest, 'tsp'],
  ];
}
function cups(c) {
  const nice = c >= 0.24 ? snapTo(c, [1 / 4, 1 / 3]) : null;
  if (nice) return [[nice, 'cup']];
  if (c * 16 < 3.5) return tablespoons(c * 16);
  if (c * 16 < 6.5) return [[Math.round(c * 16), 'tbsp']];
  // Between the quarter cups, name the odd tablespoons: 1 cup plus 1 tbsp.
  const base = Math.floor(c * 4 + 1e-9) / 4;
  const rest = Math.round((c - base) * 16);
  if (rest === 0) return [[base, 'cup']];
  if (rest === 4) return [[base + 0.25, 'cup']];
  return [
    [base, 'cup'],
    [rest, 'tbsp'],
  ];
}
function metric(value, unit) {
  if (close(value, Math.round(value), 0.001) && value >= 0.5) return [[Math.round(value), unit]];
  if (value < 20) return [[roundTo(value, 1 / 2), unit]];
  return [[value < 100 ? Math.round(value) : Math.round(value / 5) * 5, unit]];
}
// A pound or more of something solid reads in pounds when it is a tidy quarter pound (1 lb,
// not 16 oz). Liquids stay in ounces,
// because "oz" on a drink or a broth is a fluid measure.
function ounces(oz, solid = false) {
  if (oz >= 16 - 1e-9) {
    // Only a tidy quarter pound steps up. 18 oz stays 18 oz.
    const lb = solid ? snapTo(oz / 16, [1 / 4], 0.001) : null;
    return lb ? [[lb, 'lb']] : [[roundTo(oz, 1 / 2), 'oz']];
  }
  return eighths(oz, 'oz');
}
const LIQUID =
  /\b(?:water|broth|stock|juice|milk|cream(?! cheese)|buttermilk|half-and-half|oil|vinegar|wine|beer|ale|stout|lager|cider|gin|vodka|rum|tequila|mezcal|whiske?y|bourbon|rye|scotch|brandy|cognac|liqueur|vermouth|amaro|aperol|campari|bitters|syrup|soda|tonic|seltzer|champagne|prosecco|cava|sake|mirin|sauce|coffee|espresso|tea|lemonade|pur[eé]e|nectar|kombucha|cordial|schnapps|cura[cç]ao|sec|chartreuse|absinthe|port|sherry|marsala|madeira|pinot|chardonnay|sauvignon|riesling|merlot|cabernet|grenadine|honey|molasses|extract|liquid|fl)\b/i;
// True when an ingredient measured in ounces is weighed, going by its name.
export const isSolid = (name) => !LIQUID.test(name || '');
function pounds(lb) {
  const nice = lb >= 0.24 ? snapTo(lb, [1 / 4, 1 / 3]) : null;
  if (nice) return [[nice, 'lb']];
  if (lb < 1) return ounces(lb * 16);
  if (lb >= 5) return [[roundTo(lb, 1 / 4), 'lb']];
  // Between the quarter pounds, name the odd ounces: 1 lb plus 10 oz.
  const whole = Math.floor(lb);
  const rest = Math.round((lb - whole) * 16);
  if (rest === 0) return [[whole, 'lb']];
  if (rest === 16) return [[whole + 1, 'lb']];
  return [
    [whole, 'lb'],
    [rest, 'oz'],
  ];
}
export function kitchenParts(value, unit, { solid = false } = {}) {
  if (!Number.isFinite(value) || value <= 0) return [];
  if (unit === 'cup') return cups(value);
  if (unit === 'tbsp') return tablespoons(value);
  if (unit === 'tsp') return teaspoons(value);
  if (unit === 'g' || unit === 'ml') return metric(value, unit);
  // Metric amounts that are not a tidy quarter read better one unit down (2100 g, not 2.1 kg).
  if ((unit === 'kg' || unit === 'l') && (value < 1 || !snapTo(value, [1 / 4], 0.001)))
    return metric(value * 1000, unit === 'kg' ? 'g' : 'ml');
  if (unit === 'oz') return ounces(value, solid);
  if (unit === 'lb') return pounds(value);
  return [[value, unit]];
}
// A range keeps one unit for both ends, the unit that suits its smaller end.
const perCup = { cup: 1, tbsp: 16, tsp: 48 };
const perPound = { lb: 1, oz: 16 };
const perBase = { kg: 1, g: 1000, l: 1, ml: 1000 };
export function kitchenRange(values, unit, options = {}) {
  let parts = values.map((value) => kitchenParts(value, unit, options));
  if (parts.length < 2) return parts;
  // Both ends of a range are plain numbers, so a scant or heaping measure drops its word.
  parts = parts.map((p) => p.map(([value, key]) => (key ? [value, key] : [value])));
  const single = parts.every((p) => p.length === 1 && p[0][0] !== 'pinch');
  if (single && parts.every((p) => p[0][1] === parts[0][0][1])) return parts;
  const first = parts[0][0];
  const target = first[0] === 'pinch' ? 'tsp' : parts[0].at(-1)[1];
  const table = [perCup, perPound, perBase].find((t) => unit in t && target in t);
  if (!table) return values.map((value) => [[value, unit]]);
  const steps = { cup: 1 / 4, tbsp: 1 / 2, tsp: 1 / 4, oz: 1 / 4, lb: 1 / 4, g: 1, ml: 1 };
  return values.map((value) => [
    [roundTo((value * table[target]) / table[unit], steps[target]), target],
  ]);
}
// Whole eggs go to the nearest half, with a note on how to measure half an egg.
export function kitchenEggs(value) {
  if (close(value, Math.round(value), 0.001) && value >= 0.5)
    return { count: Math.round(value), note: '' };
  const count = Math.max(0.5, Math.round(value * 2 + 1e-9) / 2);
  const notes = [];
  if (!Number.isInteger(count))
    notes.push(count < 1 ? 'beat an egg and use half' : 'beat the last egg and use half');
  if (!close(value, count, 0.001)) notes.push(count > value ? 'rounded up' : 'rounded down');
  return { count, note: notes.join(', ') };
}
// Legacy prose has both recipe amounts and fixed descriptions. Only these
// grammatical quantity positions are scalable; arbitrary embedded numbers are not.
const measuredUnit =
  '(?:fl\\s+oz|oz|ounces?|lbs?|pounds?|g|grams?|kg|kilograms?|cups?|tablespoons?|teaspoons?|tbsp|tsp|ml|l|liters?|litres?|quarts?|pints?|barspoons?)';
const countUnit =
  '(?:(?:small|medium|large|whole|regular|full)\\s+)*(?:egg\\s+(?:whites?|yolks?)|eggs?|cloves?|cans?|bottles?|sticks?|packs?|packages?|jars?|bags?|heads?|pieces?|breast\\s+halves|thighs?|drumsticks?|wings?|celery\\s+stalks?|star\\s+anise(?:\\s+pods?)?|bay\\s+leaves?|bay\\s+leaf|Earl\\s+Grey\\s+Tea\\s+Bags?|lemons?|limes?|carrots?|onions?|scallions?|cucumbers?)';
const supportedAmount = new RegExp(
  `^(${number})(?:(?:\\s*[–—-]\\s*|\\s+to\\s+)(${number}))?(\\s+(?:(?:\uE000\\d+\uE001|\\([^)]*\\))\\s+)?(?:${measuredUnit}|${countUnit})\\b)`,
  'i'
);
const measuredAtStart = new RegExp(`^\\s*(?:${measuredUnit}|sticks?)\\b`, 'i');

// The measure words legacy lines use, keyed to the units kitchenParts understands.
const unitKeys = [
  ['cup', /^cups?$/i, 'cup', 'cups', 'cup', 'cups'],
  ['tbsp', /^(?:tablespoons?|tbsps?)$/i, 'tbsp', 'tbsp', 'tablespoon', 'tablespoons'],
  ['tsp', /^(?:teaspoons?|tsps?)$/i, 'tsp', 'tsp', 'teaspoon', 'teaspoons'],
  ['g', /^(?:g|grams?)$/i, 'g', 'g', 'gram', 'grams'],
  ['kg', /^(?:kg|kilograms?)$/i, 'kg', 'kg', 'kilogram', 'kilograms'],
  ['ml', /^ml$/i, 'ml', 'ml', 'ml', 'ml'],
  ['oz', /^(?:oz|ounces?)$/i, 'oz', 'oz', 'ounce', 'ounces'],
  ['lb', /^(?:lbs?|pounds?)$/i, 'lb', 'lb', 'pound', 'pounds'],
  ['l', /^(?:l|liters?|litres?)$/i, 'L', 'L', 'liter', 'liters'],
];
const leadingUnit =
  /^(\s+)(cups?|tablespoons?|tbsps?|teaspoons?|tsps?|grams?|g|kilograms?|kg|ml|ounces?|oz|pounds?|lbs?|liters?|litres?|l)\b/i;
const leadingEgg =
  /^(\s+(?:(?:small|medium|large|extra-large|jumbo|whole)\s+)*eggs?)\b(?!\s+(?:whites?|yolks?|noodles?|rolls?|wash|wrappers?))/i;
function unitWord(key, value, long) {
  const row = unitKeys.find((entry) => entry[0] === key);
  return row[(long ? 4 : 2) + (value <= 1 ? 0 : 1)];
}
export function formatParts(parts, word) {
  return parts
    .map(([value, unit, qualifier]) =>
      value === 'pinch' ? 'a pinch' : `${partNumber([value, unit, qualifier])} ${word(unit, value)}`
    )
    .join(' plus ');
}

function scaleLeading(text, factor, supportedOnly = false) {
  if (supportedOnly && /\b(?:each|per)\b/i.test(text.split(/[,;]/)[0])) return text;
  text = text.replace(/^(\d[\d,]*(?:\.\d+)?)(g|kg|ml|oz)\b/i, '$1 $2');
  const match = text.match(supportedOnly ? supportedAmount : leading);
  if (!match) return text;
  const values = [match[1], match[2]].filter(Boolean).map(numeric);
  if (values.some((value) => value === null)) return text;
  // supportedAmount also captures the unit; leave it available for inflection.
  const length = supportedOnly ? match[0].length - match[3].length : match[0].length;
  const rest = text.slice(length);
  const scaled = values.map((value) => value * factor);
  const unit = rest.match(leadingUnit);
  const row = unit && unitKeys.find((entry) => entry[1].test(unit[2]));
  if (row) {
    // Step the measure down to one a cook can use: cups to tbsp to tsp, then a pinch.
    const after = rest.slice(unit[0].length);
    const parts = kitchenRange(scaled, row[0], { solid: isSolid(after) });
    const same = parts.every((p) => p.length === 1 && p[0][1] === row[0]);
    if (same)
      return (
        parts.map((p) => partNumber(p[0])).join('–') +
        inflectLeadingUnit(rest, Math.max(...parts.map((p) => p[0][0])))
      );
    const long = unit[2].length > 4 && row[0] !== 'cup';
    const word = (key, value) => unitWord(key, value, long);
    if (parts.at(-1)[0][0] === 'pinch')
      return 'a pinch' + (/^\s+[a-z]/i.test(after) ? ' of' : '') + after;
    if (parts.length === 1) return formatParts(parts[0], word) + after;
    const top = parts[1][0];
    const low = parts[0][0][0] === 'pinch' ? 1 / 8 : parts[0][0][0];
    return `${formatQuantity(low)}–${formatQuantity(top[0])} ${word(top[1], top[0])}${after}`;
  }
  const egg = scaled.length === 1 && rest.match(leadingEgg);
  if (egg) {
    const { count, note } = kitchenEggs(scaled[0]);
    return (
      formatQuantity(count) +
      inflectLeadingUnit(egg[0], count) +
      (note ? ` (${note})` : '') +
      rest.slice(egg[0].length)
    );
  }
  return (
    scaled.map((value) => formatQuantity(value)).join('–') +
    inflectLeadingUnit(rest, Math.max(...scaled))
  );
}

function scaleCompound(text, factor, { primary = true, allocations = false } = {}) {
  const separators =
    /((?:[,;:]|\b(?:and|or|plus)(?:\s+up\s+to)?|\+|\b(?:mixed|thinned)\s+with)\s+)(?=\d)/gi;
  // Process from original text once so compounds and equivalents never double-scale.
  let result = text.replace(separators, (separator, prefix, offset) => {
    // A comma can introduce a fixed size ('1 fish, 1.5 lbs'), not another
    // ingredient. Only count-led lists or explicitly divided allocations use it.
    if (!allocations && /^[,:]/.test(separator)) {
      const next = text.slice(offset + separator.length).match(supportedAmount);
      if (next && measuredAtStart.test(next[3])) return separator;
    }
    return prefix + '\u0001';
  });
  result = result
    .split('\u0001')
    .map((part, index) =>
      index === 0 ? (primary ? scaleLeading(part, factor) : part) : scaleLeading(part, factor, true)
    )
    .join('');
  return result;
}

function mapParentheses(text, transform) {
  let result = '',
    start = 0;
  for (let index = 0; index < text.length; index++) {
    if (text[index] !== '(') continue;
    let depth = 1,
      end = index + 1;
    for (; end < text.length && depth; end++) {
      if (text[end] === '(') depth++;
      if (text[end] === ')') depth--;
    }
    if (depth) break;
    result +=
      text.slice(start, index) +
      transform(text.slice(index + 1, end - 1), text.slice(0, index), text.slice(end));
    start = end;
    index = end - 1;
  }
  return result + text.slice(start);
}

export function scaleIngredient(text, factor) {
  if (!Number.isFinite(factor) || factor <= 0 || factor === 1) return text;
  const normalized = text
    .replace(/(\d)([¼½¾⅓⅔⅛⅜⅝⅞])/g, '$1 $2')
    .replace(/[¼½¾⅓⅔⅛⅜⅝⅞]/g, (ch) => fractions[ch])
    .replace(/^(\d[\d,]*(?:\.\d+)?)(g|kg|ml|oz)\b/i, '$1 $2');
  const prefix =
    normalized.match(/^(?:(?:zest(?: and juice)?|juice) of |Filling [A-Z]: |Optional: )/i)?.[0] ||
    '';
  // An explicit fixed-count instruction is not an optional scalable ingredient.
  if (/keep whole at any batch size/i.test(normalized)) return text;
  const body = normalized.slice(prefix.length);
  const match = body.match(leading);
  const finishedYield = /^(.*\bbring the finished sauce to )(.+)$/i.exec(body);
  if (!match)
    return finishedYield
      ? prefix + finishedYield[1] + scaleLeading(finishedYield[2], factor, true)
      : text;
  if ([match[1], match[2]].filter(Boolean).some((value) => numeric(value) === null)) return text;
  const isMeasured = measuredAtStart.test(body.slice(match[0].length));
  const parentheses = [];
  const protectedBody = mapParentheses(body, (content, before, after) => {
    let scaled = content;
    const local = before
      .split(/(?:\b(?:or|plus)(?:\s+up\s+to)?|\+|\b(?:mixed|thinned)\s+with)\s+/i)
      .at(-1);
    const localLeading = local.match(leading);
    const localMeasured = localLeading
      ? measuredAtStart.test(local.slice(localLeading[0].length))
      : isMeasured;
    // Package sizes, per-item sizes, and original-batch notes are immutable.
    // Count-leading aggregate equivalents must say "total" explicitly.
    const packageSize =
      /\b(?:cans?|bottles?|packs?|packages?|jars?|bags?)\s*$/i.test(before) ||
      (/\d\s*$/.test(before) &&
        /^\s*(?:cans?|bottles?|packs?|packages?|jars?|bags?)\b/i.test(after));
    if (packageSize) {
      // Fixed size of the preceding/following counted package.
    } else if (/^(?:or|plus)(?:\s+up\s+to)?\s+/i.test(content)) {
      scaled = content.replace(/^(?:or|plus)(?:\s+up\s+to)?\s+/i, (prefix) => prefix + '\u0002');
      const [prefix, alternative] = scaled.split('\u0002');
      scaled =
        prefix +
        (leading.test(alternative)
          ? scaleIngredient(alternative, factor)
          : scaleCompound(alternative, factor));
    } else if (/^divided:\s*/i.test(content)) {
      scaled = content.replace(/^divided:\s*/i, (prefix) => prefix + '\u0002');
      const [prefix, allocation] = scaled.split('\u0002');
      scaled = prefix + scaleCompound(allocation, factor, { allocations: true });
    } else if (localMeasured || /\btotal\b/i.test(content)) {
      // A descriptive prefix may precede a measured equivalent (e.g. pasta shape).
      const [description, equivalent] = content.includes('; about ')
        ? [
            content.slice(0, content.indexOf('; about ') + 2),
            content.slice(content.indexOf('; about ') + 2),
          ]
        : ['', content];
      const qualifier = equivalent.match(/^(?:about\s+)?/i)[0];
      const amount = equivalent
        .slice(qualifier.length)
        .replace(/^(\d[\d,]*(?:\.\d+)?)(g|kg|ml|oz)\b/i, '$1 $2');
      const perItem = /\b(?:each|per|original batch)\b/i.test(amount);
      // "1 jar, 32 oz each" is a package-count equivalent with a fixed size.
      const packageEquivalent = new RegExp(
        `^${number}\\s+(?:full\\s+)?jars?,\\s*${number}\\s+${measuredUnit}\\s+each$`,
        'i'
      ).test(amount);
      const sizeEquivalent = new RegExp(`^${number}\\s+(?:small|medium|large)$`, 'i').test(amount);
      if ((!perItem || packageEquivalent) && (supportedAmount.test(amount) || sizeEquivalent)) {
        // Comma-separated quantities may be size descriptions. Require an
        // explicit divided: label rather than partially scaling an allocation.
        const unclearAllocation = new RegExp(`[,;]\\s+${number}\\s+${measuredUnit}\\b`, 'i').test(
          amount
        );
        if (packageEquivalent) scaled = description + qualifier + scaleLeading(amount, factor);
        else if (!unclearAllocation)
          scaled = description + qualifier + scaleIngredient(amount, factor);
      }
    }
    const token = `\uE000${parentheses.length}\uE001`;
    parentheses.push(`(${scaled})`);
    return token;
  });
  let result = scaleCompound(protectedBody, factor);
  // Drained package totals and explicitly labeled approximate totals are batch
  // quantities, unlike the package specification in the protected parentheses.
  const drained = new RegExp(
    `((?:about|approx)\\s+)(${number})(\\s+(?:g\\s+(?:drained\\s+total|total\\s+drained)|cups?\\s+total))\\b`,
    'gi'
  );
  result = result.replace(drained, (whole, qualifier, amount, suffix) => {
    const value = numeric(amount);
    return value === null
      ? whole
      : qualifier + formatQuantity(value * factor) + inflectLeadingUnit(suffix, value * factor);
  });
  return prefix + result.replace(/\uE000(\d+)\uE001/g, (_, index) => parentheses[Number(index)]);
}

// Preserve text-node boundaries around inline links. Scale the complete ingredient
// once so a trailing equivalent retains its leading measure's semantic context.
export function scaleIngredientParts(parts, factor) {
  let boundary = '\uE100';
  while (parts.some((part) => part.includes(boundary))) boundary += '\uE100';
  return scaleIngredient(parts.join(boundary), factor).split(boundary);
}

// Yield nouns have their own vocabulary; do not apply ingredient or generic
// English suffix rules to arbitrary recipe prose.
const yieldForms = [
  ['loaf', 'loaves'],
  ['batch', 'batches'],
  ['portion', 'portions'],
  ['serving', 'servings'],
  ['person', 'people'],
  ...[
    'cup',
    'quart',
    'muffin',
    'cake',
    'slider',
    'pancake',
    'cocktail',
    'piece',
    'bite',
    'ball',
    'cookie',
    'dumpling',
    'truffle',
    'slice',
    'wrapper',
    'pie',
    'pita',
    'smoothie',
    'bowl',
    'pinwheel',
    'bread',
    'roll',
    'square',
    'biscuit',
    'cupcake',
    'pop',
    'fritter',
  ].map((word) => [word, word + 's']),
];
const yieldNoun = new RegExp(
  `^(\\s+(?:(?:small|large|mini|jumbo|generous|modest|light|side|main|dessert|salad|soup|dip|taco|condiment|appetizer|pasta|noodle|filled|bundt|silver dollar|vegetable-main|vegetable-forward|soup-and-sandwich)\\s+)*)(${yieldForms
    .flat()
    .sort((a, b) => b.length - a.length)
    .join('|')})(?=\\s|,|$)`,
  'i'
);
function inflectYield(suffix, count) {
  return suffix.replace(yieldNoun, (_match, prefix, word) => {
    const forms = yieldForms.find((pair) => pair.includes(word.toLowerCase()));
    let result = forms[count <= 1 ? 0 : 1];
    if (word === word.toUpperCase()) result = result.toUpperCase();
    else if (word[0] === word[0].toUpperCase()) result = result[0].toUpperCase() + result.slice(1);
    return prefix + result;
  });
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
      return suffix.trim()
        ? `${scaled}${inflectYield(suffix, Math.max(...values) * factor)}`
        : `Serves ${scaled}`;
    }
  }
  return `Original yield: ${text}${factor === 1 ? '' : ` · ${factor}× ingredients`}`;
}
