import { formatQuantity, isSolid, kitchenEggs, kitchenRange, partNumber } from './quantities.mjs';

export const unitForms = {
  count: ['', ''],
  cup: ['cup', 'cups'],
  tbsp: ['tbsp', 'tbsp'],
  tsp: ['tsp', 'tsp'],
  g: ['g', 'g'],
  kg: ['kg', 'kg'],
  ml: ['ml', 'ml'],
  l: ['L', 'L'],
  oz: ['oz', 'oz'],
  lb: ['lb', 'lb'],
  stick: ['stick', 'sticks'],
  can: ['can', 'cans'],
  package: ['package', 'packages'],
  quart: ['quart', 'quarts'],
  loaf: ['loaf', 'loaves'],
  batch: ['batch', 'batches'],
  portion: ['portion', 'portions'],
  piece: ['piece', 'pieces'],
};
export function amount(value) {
  if (typeof value === 'number') return value;
  if (typeof value !== 'string' || !/^\d+(?: \d+)?\/\d+$/.test(value)) return NaN;
  const parts = value.split(' ');
  const [n, d] = parts.pop().split('/').map(Number);
  return d ? Number(parts[0] || 0) + n / d : NaN;
}
export function createFormulaSchema(z) {
  const positive = z
    .union([z.number(), z.string()])
    .refine(
      (v) => Number.isFinite(amount(v)) && amount(v) > 0,
      'Use a positive number or fraction'
    );
  const quantity = z
    .object({ amount: positive, max: positive.optional(), unit: z.enum(Object.keys(unitForms)) })
    .strict()
    .refine(
      (v) => !v.max || amount(v.max) >= amount(v.amount),
      'Range maximum must not be below minimum'
    );
  const ingredient = z
    .object({
      id: z.string().regex(/^[a-z][a-z0-9-]*$/),
      key: z.string().regex(/^[a-z][a-z0-9-]*$/),
      name: z.string().min(1),
      plural: z.string().min(1).optional(),
      stepName: z.string().min(1).optional(),
      quantity: quantity.optional(),
      allowance: z.string().min(1).optional(),
      equivalents: z.array(quantity).optional(),
      packageSize: quantity.optional(),
      preparation: z.string().min(1).optional(),
      optional: z.boolean().optional(),
      role: z.enum(['ingredient', 'cooking-water', 'garnish', 'discarded']).optional(),
      uses: z
        .array(
          z
            .object({
              step: z.string(),
              share: positive,
              lead: z.boolean().optional(),
              words: z.boolean().optional(),
            })
            .strict()
        )
        .min(1),
    })
    .strict()
    .superRefine((v, ctx) => {
      const issue = (message) => ctx.addIssue({ code: 'custom', message });
      if (!!v.quantity === !!v.allowance)
        issue('Supply either a measured quantity or an explicit allowance');
      if (!v.quantity && (v.equivalents?.length || v.packageSize))
        issue('Equivalents/packages need a measured quantity');
      if (v.packageSize && !['count', 'can', 'package'].includes(v.quantity?.unit))
        issue('Package size requires a counted item');
      if (v.packageSize?.max) issue('A package needs one fixed size');
      if (v.quantity?.unit === 'count' && !v.plural)
        issue('Counted items need an explicit plural name');
      if (Math.abs(v.uses.reduce((n, u) => n + amount(u.share), 0) - 1) > 1e-8)
        issue('Step allocations must sum to one');
      if (new Set(v.uses.map((u) => u.step)).size !== v.uses.length)
        issue('Combine repeated allocations to the same step');
      if (!v.quantity && v.uses.length !== 1)
        issue('An unmeasured allowance must have one destination');
    });
  return z
    .object({
      version: z.literal(1),
      // 'preserved' keeps the plain step wording and list lines of a recipe that must stay
      // exactly as written, such as a family recipe.
      stepText: z.literal('preserved').optional(),
      yield: quantity,
      components: z
        .array(
          z
            .object({
              id: z.string().regex(/^[a-z][a-z0-9-]*$/),
              name: z.string().min(1),
              ingredients: z.array(ingredient).min(1),
            })
            .strict()
        )
        .min(1),
      steps: z
        .array(
          z
            .object({
              id: z.string().regex(/^[a-z][a-z0-9-]*$/),
              title: z.string().min(1),
              text: z.string().min(1),
            })
            .strict()
        )
        .min(1),
    })
    .strict()
    .superRefine((v, ctx) => {
      const issue = (message) => ctx.addIssue({ code: 'custom', message });
      if (new Set(v.components.map((c) => c.id)).size !== v.components.length)
        issue('Duplicate component id');
      if (new Set(v.steps.map((s) => s.id)).size !== v.steps.length) issue('Duplicate step id');
      const entries = formulaEntries(v).filter((x) => !x.divider);
      const ids = new Set(entries.map((x) => x.id));
      if (ids.size !== entries.length) issue('Duplicate ingredient id within component');
      const stepIds = new Set(v.steps.map((s) => s.id));
      for (const x of entries)
        for (const use of x.uses)
          if (!stepIds.has(use.step)) issue(`Unknown destination ${use.step} for ${x.id}`);
      for (const s of v.steps) {
        const tokens = [...s.text.matchAll(/\{\{([^}]+)\}\}/g)].map((m) => m[1]);
        const assigned = entries.some((x) => x.uses.some((u) => u.step === s.id));
        if (tokens.filter((t) => t === 'ingredients').length !== (assigned ? 1 : 0))
          issue(`Step ${s.id} must render its assigned ingredients exactly once`);
        for (const token of tokens)
          if (token !== 'ingredients' && (!token.startsWith('name:') || !ids.has(token.slice(5))))
            issue(`Unknown ingredient reference ${token}`);
      }
    });
}
export function formulaEntries(formula) {
  // A recipe with one component needs no heading over its ingredients.
  const single = formula.components.length === 1;
  return formula.components.flatMap((c) => [
    ...(single ? [] : [{ divider: c.name }]),
    ...c.ingredients.map((i) => ({
      ...i,
      id: `${c.id}.${i.id}`,
      component: c.name,
      ...(formula.stepText === 'preserved' ? { preserved: true } : {}),
    })),
  ]);
}
const unitLabel = (unit, value) => unitForms[unit][value <= 1 ? 0 : 1];
function formatKitchenParts(parts) {
  return parts
    .map((part) =>
      part[0] === 'pinch' ? 'a pinch' : `${partNumber(part)} ${unitLabel(part[1], part[0])}`.trim()
    )
    .join(' plus ');
}
// The authored amount prints as written. A scaled amount is rounded to a kitchen measure:
// small cups become tbsp, small tbsp become tsp, and less than 1/8 tsp is "a pinch".
function formatKitchen(values, unit, name) {
  const parts = kitchenRange(values, unit, { solid: name !== undefined && isSolid(name) });
  if (parts.length === 1) return formatKitchenParts(parts[0]);
  const [low, high] = parts.map((p) => p[0]);
  if (high[0] === 'pinch') return 'a pinch';
  const from = formatQuantity(low[0] === 'pinch' ? 1 / 8 : low[0]);
  return `${from}–${formatQuantity(high[0])} ${unitLabel(high[1], high[0])}`.trim();
}
export function formatMeasure(q, factor = 1, name) {
  const values = [q.amount, ...(q.max ? [q.max] : [])].map((v) => amount(v) * factor);
  if (factor !== 1 && q.unit !== 'count') return formatKitchen(values, q.unit, name);
  // The written batch prints exactly as authored, decimals included.
  return (
    values.map((value) => formatQuantity(value, { exact: factor === 1 })).join('–') +
    (q.unit === 'count' ? '' : ` ${unitLabel(q.unit, Math.max(...values))}`)
  );
}
const wholeEgg = /^(?:(?:small|medium|large|extra-large|jumbo|whole)\s+)*eggs?$/i;
export function formatFormulaIngredient(i, factor = 1, { shopping = false } = {}) {
  if (!Number.isFinite(factor) || factor <= 0) throw new Error('Invalid scale');
  if (i.divider) return `--- ${i.divider} ---`;
  let count =
    i.quantity?.unit === 'count' ? amount(i.quantity.max || i.quantity.amount) * factor : 0;
  let quantity = i.quantity ? formatMeasure(i.quantity, factor, i.name) : '';
  let note = '';
  // A scaled whole egg goes to the nearest half, with a note on how to measure it.
  if (count && factor !== 1 && !i.quantity.max && wholeEgg.test(i.name)) {
    const eggs = kitchenEggs(count);
    count = eggs.count;
    quantity = formatQuantity(count);
    note = eggs.note ? ` (${eggs.note})` : '';
  }
  const name = count > 1 ? i.plural : i.name;
  const packageSize = i.packageSize ? ` (${formatMeasure(i.packageSize)})` : '';
  const equivalent = i.equivalents?.length
    ? ` (${i.equivalents.map((q) => formatMeasure(q, factor)).join(', ')})`
    : '';
  // An ingredient used in more than one step says so in the list.
  const divided =
    !shopping &&
    !i.preserved &&
    i.uses?.length > 1 &&
    !/\bdivided\b/i.test(`${i.name} ${i.preparation || ''}`)
      ? ', divided'
      : '';
  const lead = quantity === 'a pinch' && !packageSize && !equivalent ? 'a pinch of' : quantity;
  return `${lead}${packageSize}${equivalent}${quantity ? ' ' : ''}${name}${i.allowance ? `, ${i.allowance}` : ''}${i.preparation ? `, ${i.preparation}` : ''}${divided}${i.optional ? ', optional' : ''}${note}`;
}
export function formulaIngredients(formula, factor = 1) {
  return formulaEntries(formula).map((i) => formatFormulaIngredient(i, factor));
}
export function formulaYield(formula, factor = 1) {
  return formatMeasure(formula.yield, factor);
}
function joinNames(names) {
  return names.length < 2
    ? names.join('')
    : names.length === 2
      ? names.join(' and ')
      : names.slice(0, -1).join(', ') + ', and ' + names.at(-1);
}

// ---------- Cooking names ----------
// The ingredient list names what to buy ("3 large eggs", "2 garlic cloves", "extra-virgin
// olive oil"). A step names what is in the cook's hand ("the eggs", "the garlic", "the olive
// oil"). cookingName derives the second from the first. An author can set `stepName` on an
// ingredient when the derived name is not the right one.
const SIZE = /^(?:(?:extra-large|small|medium|large|jumbo)\s+)+/i;
const CONTAINER =
  /^(?:\d+-inch\s+)?(?:slices?|dash(?:es)?|heads?|bunch(?:es)?|ears?|strips?|cans?|packages?|balls?|pieces?)\s+(?:of\s+)?(?=\S)/i;
const LEADING = [
  /^fresh(?:ly)?\s+(?:(?:ground|grated|squeezed|cracked)\s+)?/i,
  /^(?:very\s+ripe|overripe|ripe|raw|cooked)\s+/i,
  /^(?:boneless|skinless|bone-in|skin-on),?\s+/i,
  /^(?:low-sodium|low-fat|full-fat|unsalted|extra-virgin|all-purpose|granulated|pure|plain)\s+/i,
  /^(?:store-bought|homemade|canned|jarred|frozen|packed|sifted|unsweetened|toasted|peeled)\s+/i,
  SIZE,
  /^(?:thinly\s+sliced|sliced|diced|chopped|shredded|crumbled|grated)\s+/i,
  /^(?:first-cut|center-cut|block|brick-style|whole-milk|old-fashioned|rolled)\s+/i,
  /^whole\s+(?!milk\b|wheat\b|grain\b|cloves?\b)/i,
  /^cold\s+(?=(?:unsalted\s+)?butter\b)/i,
  /^dried\s+(?=(?:oregano|thyme|basil|parsley|dill|rosemary|sage|marjoram|tarragon|chives)\b)/i,
  /^ground\s+(?=(?:cinnamon|cumin|nutmeg|ginger|cloves|allspice|turmeric|coriander|cardamom|black pepper|white pepper)\b)/i,
  /^(?:light|dark)\s+(?=brown sugar\b)/i,
];
const WHOLE_NAME = [
  [
    /^(?:(?:Diamond Crystal|Morton)\s+)?(?:kosher|sea|fine sea|fine|table|coarse|coarse sea)\s+salt$/i,
    'salt',
  ],
  [/^black pepper$/i, 'pepper'],
  [/^(?:kosher |sea |fine )?salt and (?:freshly ground )?black pepper$/i, 'salt and pepper'],
  [/^(?:vegetable|neutral|neutral high-heat cooking|canola) oil$/i, 'oil'],
  [/^vanilla extract$/i, 'vanilla'],
  [/^panko breadcrumbs$/i, 'panko'],
  [/^Parmesan cheese$/i, 'Parmesan'],
  [/^garlic cloves?$/i, 'garlic'],
  [/^saffron threads?$/i, 'saffron'],
  [/^graham cracker sheets?$/i, 'graham crackers'],
  [/^(.+?)\s+sprigs?$/i, '$1'],
  [/^(celery|lemongrass)\s+(?:stalks?|ribs?)$/i, '$1'],
  [
    /^((?:[A-Z][a-z]+\s+)?(?:basil|sage|cilantro|mint|parsley|thyme|oregano|marjoram))\s+lea(?:f|ves)$/i,
    '$1',
  ],
];
const isCompound = (name) => /\]\(|,|\b(?:or|and)\b/.test(name);
// Size words and parenthetical notes are shopping detail in every case.
function plainName(name) {
  if (name.includes('](')) return name;
  return (
    name
      .replace(/\s*\([^)]*\)/g, '')
      .replace(SIZE, '')
      .trim() || name
  );
}
export function cookingName(name) {
  let short = plainName(name);
  if (name.includes('](')) return short;
  short = short.replace(CONTAINER, '').replace(SIZE, '');
  let previous;
  do {
    previous = short;
    for (const pattern of LEADING) {
      const next = short.replace(pattern, '');
      // "frozen or fresh peas" keeps its first word.
      if (next && !/^(?:or|and)\b/i.test(next)) short = next;
    }
  } while (short !== previous);
  if (!isCompound(short) || /^[a-z ]*salt and [a-z ]*pepper$/i.test(short))
    for (const [pattern, replacement] of WHOLE_NAME) short = short.replace(pattern, replacement);
  return short || name;
}
const lastWords = (text) => text.toLowerCase().replace(/e?s$/, '');
// Chooses the name each ingredient goes by in the steps of this recipe. A short name gives
// way to the fuller one when another ingredient would answer to it too ("the sugar" beside
// brown sugar, "the oil" beside sesame oil). Entries that still share a name, such as the oil
// in a marinade and the oil for the pan, are marked ambiguous so a step prints their amount.
export function formulaStepNames(formula) {
  const entries = formulaEntries(formula).filter((x) => !x.divider);
  const display = (i) =>
    i.quantity?.unit === 'count' && amount(i.quantity.max || i.quantity.amount) > 1
      ? i.plural
      : i.name;
  const rows = entries.map((i) => ({
    id: i.id,
    source: i.name,
    authored: i.stepName,
    short: i.stepName || cookingName(display(i)),
    full: i.stepName || plainName(display(i)),
  }));
  for (const row of rows) {
    const mine = lastWords(row.short);
    row.clash = rows.some((other) => {
      if (other === row || other.source === row.source) return false;
      const theirs = lastWords(other.short);
      return theirs === mine || theirs.endsWith(' ' + mine);
    });
  }
  const names = new Map();
  for (const row of rows) names.set(row.id, { name: row.clash ? row.full : row.short });
  for (const row of rows) {
    const mine = names.get(row.id);
    mine.ambiguous = rows.some(
      (other) => other !== row && names.get(other.id).name.toLowerCase() === mine.name.toLowerCase()
    );
  }
  return names;
}

// ---------- Step text ----------
const shareWords = new Map([
  [1 / 2, 'half of'],
  [1 / 3, 'a third of'],
  [2 / 3, 'two thirds of'],
  [1 / 4, 'a quarter of'],
  [3 / 4, 'three quarters of'],
]);
// An unusual share prints as the author wrote it ("1/9 of"), never rounded.
function shareWord(share) {
  for (const [value, words] of shareWords) if (Math.abs(value - amount(share)) < 1e-6) return words;
  return `${typeof share === 'string' ? share : formatQuantity(share)} of`;
}
// How much of an ingredient one step uses, as a cook would measure it: "2 tbsp", "1 cup plus
// 2 tbsp", or a count such as "2". Returns null when the share is not a real kitchen measure
// at the authored batch (1/3 of 1/4 tsp), so the step falls back to "a third of the ...".
function shareMeasure(i, share, factor) {
  const q = i.quantity;
  const values = [q.amount, ...(q.max ? [q.max] : [])].map((v) => amount(v) * share);
  // Counted things (cans, pieces) are named by number only when the number is whole.
  if (['piece', 'can', 'package', 'loaf', 'batch', 'portion'].includes(q.unit)) {
    if (values.some((v) => Math.abs(v - Math.round(v)) > 1e-6 || v < 1)) return null;
    const scaled = values.map((v) => v * factor);
    return (
      scaled.map((value) => formatQuantity(value)).join('–') +
      ' ' +
      unitLabel(q.unit, Math.max(...scaled))
    );
  }
  if (q.unit === 'count') return null;
  const table = { cup: 48, tbsp: 3, tsp: 1, lb: 16, oz: 1, kg: 1000, g: 1, l: 1000, ml: 1 };
  const measured = kitchenRange(values, q.unit).every((parts, index) => {
    if (parts[0][0] === 'pinch') return false;
    const total = parts.reduce((sum, [value, unit]) => sum + value * (table[unit] || 1), 0);
    const want = values[index] * (table[q.unit] || 1);
    return Math.abs(total - want) <= 0.03 * want;
  });
  if (!measured) return null;
  return formatKitchen(
    values.map((v) => v * factor),
    q.unit,
    i.name
  );
}
// A counted ingredient with no unit (garlic cloves, a jalapeño, dashes of bitters) prints its
// number with the list name, which holds the thing counted, never a bare number before the
// short name. "4 garlic cloves"
// at 1/4 batch is "1 garlic clove", and "1 jalapeño" is "1/4 jalapeño". A part of a divided
// count prints only when it is a whole number at the written batch. The whole of a line can be
// a fraction ("1/2 lemon").
function countPhrase(i, share, factor) {
  const q = i.quantity;
  if (q.unit !== 'count') return null;
  const values = [q.amount, ...(q.max ? [q.max] : [])].map((v) => amount(v) * share);
  if (share !== 1 && values.some((v) => Math.abs(v - Math.round(v)) > 1e-6 || v < 1)) return null;
  const scaled = values.map((v) => v * factor);
  const noun = plainName(Math.max(...scaled) > 1 ? i.plural : i.name);
  return `${scaled.map((value) => formatQuantity(value)).join('–')} ${noun}`;
}
// One entry per ingredient use in each step, in list order. `kind` is:
//   name   the whole ingredient                       "the eggs"
//   amount a measured part, or one of two same-named  "2 tbsp of the oil"
//   words  a part with no clean measure                "half of the onion"
//   rest   the last part of a divided ingredient       "the rest of the oil"
function formulaStepItems(formula, factor = 1) {
  const entries = formulaEntries(formula).filter((x) => !x.divider);
  const names = formulaStepNames(formula);
  const order = new Map(formula.steps.map((s, index) => [s.id, index]));
  return formula.steps.map((s) =>
    entries.flatMap((i) =>
      i.uses
        .filter((u) => u.step === s.id)
        .map((u) => {
          const { name, ambiguous } = names.get(i.id);
          const share = amount(u.share);
          const suffix = i.optional ? ' (if using)' : '';
          const item = { id: i.id, name, suffix, kind: 'name', text: name + suffix, lead: u.lead };
          if (!i.quantity || (share === 1 && !ambiguous)) return item;
          const last = i.uses.every((other) => order.get(other.step) <= order.get(s.id));
          if (share !== 1 && last && !ambiguous)
            return { ...item, kind: 'rest', text: `the rest of the ${name}${suffix}` };
          const counted = countPhrase(i, share, factor);
          if (counted) return { ...item, kind: 'amount', text: counted + suffix };
          // `words: true` keeps a part in words when its rounded measure is awkward
          // ("5 1/4 oz" for two thirds of 8 oz).
          const measure = u.words && share !== 1 ? null : shareMeasure(i, share, factor);
          if (measure)
            return { ...item, kind: 'amount', text: `${measure} of the ${name}${suffix}` };
          if (share === 1) return item;
          return { ...item, kind: 'words', text: `${shareWord(u.share)} the ${name}${suffix}` };
        })
    )
  );
}
// The measured phrases in each step, in the order they print. The page scaler swaps the
// phrase printed at 1x for the same phrase at the chosen batch size.
export function formulaStepAmounts(formula, factor = 1) {
  if (formula.stepText === 'preserved') return formula.steps.map(() => []);
  return formulaStepItems(formula, factor).map((items) =>
    orderItems(items)
      .filter((item) => item.kind === 'amount')
      .map((item) => item.text)
  );
}
// Whole ingredients come first under one "the". Parts follow, each with its own amount, so a
// fraction can never read as applying to the ingredient after it. A use marked `lead: true`
// goes ahead of both, for the oil that has to hit the pan before anything else.
const isLead = (item) => item.lead && item.kind !== 'name';
const orderItems = (items) => [
  ...items.filter(isLead),
  ...items.filter((item) => item.kind === 'name'),
  ...items.filter((item) => item.kind !== 'name' && !isLead(item)),
];
function ingredientPhrase(items) {
  const ordered = orderItems(items);
  const first = ordered.filter(isLead).map((item) => item.text);
  const whole = ordered.filter((item) => item.kind === 'name').map((item) => item.text);
  const parts = ordered.filter((item) => item.kind !== 'name' && !isLead(item));
  if (whole.length) whole[0] = 'the ' + whole[0];
  return joinNames([...first, ...whole, ...parts.map((item) => item.text)]);
}
// Words an author may write straight before {{ingredients}}. After one of these the step
// already says how much or which ("a splash of", "the rest of the", "the beaten", "a little"),
// so the compiler prints the bare names and no amounts.
const TOKEN =
  /(?:\b(?:(the|a|an)\s+()([a-z-]+\s+)?|(of|half|all|both|remaining|little|more|some|enough|any|extra)\s+((?:the\s+)?)((?:[a-z]+(?:ed|en)|cold|hot|warm)\s+)?))?\{\{ingredients\}\}/gi;
// A preserved recipe keeps the wording it was written with: full ingredient names, no added
// articles, and a divided ingredient as its share ("1/2 of the unsalted butter").
function preservedDirections(formula) {
  const entries = formulaEntries(formula).filter((x) => !x.divider);
  return formula.steps
    .map((s, index) => {
      const names = entries.flatMap((i) =>
        i.uses
          .filter((u) => u.step === s.id)
          .map((u) => {
            const share =
              amount(u.share) === 1
                ? ''
                : (typeof u.share === 'string'
                    ? u.share
                    : formatQuantity(amount(u.share), { exact: true })) + ' of the ';
            const plural =
              i.quantity?.unit === 'count' && amount(i.quantity.max || i.quantity.amount) > 1;
            return `${share}${plural ? i.plural : i.name}${i.optional ? ' (if using)' : ''}`;
          })
      );
      const text = s.text
        .replace(/\{\{ingredients\}\}/g, joinNames(names))
        .replace(/\{\{name:([^}]+)\}\}/g, (_, id) => entries.find((i) => i.id === id).name);
      return `${index + 1}. **${s.title}:** ${text}`;
    })
    .join('\n');
}
export function formulaDirections(formula) {
  if (formula.stepText === 'preserved') return preservedDirections(formula);
  const entries = formulaEntries(formula).filter((x) => !x.divider);
  const names = formulaStepNames(formula);
  const stepItems = formulaStepItems(formula);
  return formula.steps
    .map((s, index) => {
      const text = s.text
        .replace(TOKEN, (match, ...groups) => {
          const offset = groups[6];
          const lead = groups[0] || groups[3] || '';
          const adjective = groups[2] || groups[5] || '';
          const items = stepItems[index];
          const bare = joinNames(items.map((item) => item.name + item.suffix));
          if (/^the$/i.test(lead) && !adjective) {
            const phrase = ingredientPhrase(items);
            return /^T/.test(lead) ? phrase[0].toUpperCase() + phrase.slice(1) : phrase;
          }
          if (/^an?$/i.test(lead)) {
            const word = /^[aeiou]/i.test(adjective || bare) ? 'an' : 'a';
            return (/^A/.test(lead) ? 'A' + word.slice(1) : word) + ' ' + adjective + bare;
          }
          if (lead) return match.slice(0, -'{{ingredients}}'.length) + bare;
          const phrase = ingredientPhrase(items);
          const starts = offset === 0 || /[.!?]\s+$/.test(s.text.slice(0, offset));
          return starts ? phrase[0].toUpperCase() + phrase.slice(1) : phrase;
        })
        .replace(
          /\{\{name:([^}]+)\}\}/g,
          (_, id) => names.get(entries.find((i) => i.id === id).id).name
        );
      return `${index + 1}. **${s.title}:** ${text}`;
    })
    .join('\n');
}
// Consolidate only identical identities, units and package/equivalent definitions.
// Different units are retained as separate lines instead of guessed conversions.
export function formulaShoppingList(formula, factor = 1) {
  const groups = new Map();
  for (const i of formulaEntries(formula).filter((x) => !x.divider && x.role !== 'cooking-water')) {
    const key = JSON.stringify([
      i.key,
      i.name,
      i.plural,
      i.quantity?.unit,
      i.equivalents,
      i.packageSize,
      i.allowance,
      i.optional,
      i.role,
    ]);
    const existing = groups.get(key);
    if (
      existing &&
      i.quantity &&
      !i.quantity.max &&
      !existing.quantity.max &&
      !i.equivalents?.length
    ) {
      existing.quantity.amount = amount(existing.quantity.amount) + amount(i.quantity.amount);
    } else
      groups.set(existing ? key + i.id : key, {
        ...i,
        quantity: i.quantity ? { ...i.quantity } : undefined,
        preparation: undefined,
      });
  }
  return [...groups.values()].map((i) => formatFormulaIngredient(i, factor, { shopping: true }));
}
