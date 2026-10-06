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

function scaleLeading(text, factor, supportedOnly = false) {
  if (supportedOnly && /\b(?:each|per)\b/i.test(text.split(/[,;]/)[0])) return text;
  text = text.replace(/^(\d[\d,]*(?:\.\d+)?)(g|kg|ml|oz)\b/i, '$1 $2');
  const match = text.match(supportedOnly ? supportedAmount : leading);
  if (!match) return text;
  const values = [match[1], match[2]].filter(Boolean).map(numeric);
  if (values.some((value) => value === null)) return text;
  // supportedAmount also captures the unit; leave it available for inflection.
  const length = supportedOnly ? match[0].length - match[3].length : match[0].length;
  return (
    values.map((value) => formatQuantity(value * factor)).join('–') +
    inflectLeadingUnit(text.slice(length), Math.max(...values) * factor)
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
