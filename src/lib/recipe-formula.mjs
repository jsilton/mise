import { formatQuantity } from './quantities.mjs';

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
      quantity: quantity.optional(),
      allowance: z.string().min(1).optional(),
      equivalents: z.array(quantity).optional(),
      packageSize: quantity.optional(),
      preparation: z.string().min(1).optional(),
      optional: z.boolean().optional(),
      role: z.enum(['ingredient', 'cooking-water', 'garnish', 'discarded']).optional(),
      uses: z.array(z.object({ step: z.string(), share: positive }).strict()).min(1),
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
  return formula.components.flatMap((c) => [
    { divider: c.name },
    ...c.ingredients.map((i) => ({ ...i, id: `${c.id}.${i.id}`, component: c.name })),
  ]);
}
export function formatMeasure(q, factor = 1) {
  const values = [q.amount, ...(q.max ? [q.max] : [])].map((v) => amount(v) * factor);
  return (
    values.map(formatQuantity).join('–') +
    (q.unit === 'count' ? '' : ` ${unitForms[q.unit][Math.max(...values) <= 1 ? 0 : 1]}`)
  );
}
export function formatFormulaIngredient(i, factor = 1) {
  if (!Number.isFinite(factor) || factor <= 0) throw new Error('Invalid scale');
  if (i.divider) return `--- ${i.divider} ---`;
  const plural =
    i.quantity?.unit === 'count' && amount(i.quantity.max || i.quantity.amount) * factor > 1;
  const name = plural ? i.plural : i.name;
  const quantity = i.quantity ? formatMeasure(i.quantity, factor) : '';
  const packageSize = i.packageSize ? ` (${formatMeasure(i.packageSize)})` : '';
  const equivalent = i.equivalents?.length
    ? ` (${i.equivalents.map((q) => formatMeasure(q, factor)).join('; ')})`
    : '';
  return `${quantity}${packageSize}${equivalent}${quantity ? ' ' : ''}${name}${i.allowance ? `, ${i.allowance}` : ''}${i.preparation ? `, ${i.preparation}` : ''}${i.optional ? ', optional' : ''}`;
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
export function formulaDirections(formula) {
  const entries = formulaEntries(formula).filter((x) => !x.divider);
  return formula.steps
    .map((s, index) => {
      const names = entries.flatMap((i) =>
        i.uses
          .filter((u) => u.step === s.id)
          .map(
            (u) =>
              `${amount(u.share) === 1 ? '' : formatQuantity(amount(u.share)) + ' of the '}${i.quantity?.unit === 'count' && amount(i.quantity.max || i.quantity.amount) > 1 ? i.plural : i.name}${i.optional ? ' (if using)' : ''}`
          )
      );
      const text = s.text
        .replace(/\{\{ingredients\}\}/g, joinNames(names))
        .replace(/\{\{name:([^}]+)\}\}/g, (_, id) => entries.find((i) => i.id === id).name);
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
  return [...groups.values()].map((i) => formatFormulaIngredient(i, factor));
}
