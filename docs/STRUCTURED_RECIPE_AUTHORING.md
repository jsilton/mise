# Constructing recipes from quantities and components

New recipes should use `formula` version 1. When substantially changing an existing formula, migrate its ingredients and method together. A spelling fix or other small correction does not require a full migration. Unresolved recipes remain readable in the legacy format; never guess quantities just to convert them.

## One authored source, compatible generated output

Start with `npm run new-recipe -- "Recipe Name"`; its placeholders deliberately cannot pass validation until completed. Author `formula.components`, `formula.steps` and `formula.yield` in recipe frontmatter. Run `npm run recipe:compile -- recipe-slug`. This generates `ingredients`, `servings` and the Markdown Directions section for existing pages, search, print, exports and combined recipe files. Do not edit these generated fields directly. Chef's notes, learning/checkpoints, troubleshooting and attribution remain authored normally; adjust checkpoint step numbers when restructuring steps.

The build checks only structured recipes for valid references, allocations and stale generated output. It does not run the one-time culinary audit or attempt to judge taste. Legacy recipes continue to work. The checked-in generated representation keeps older export tools compatible; it is a compiled artifact, not a second independently maintained recipe.

## Quantities, sizes and names

A quantity is `{ amount: '1/2', unit: cup }`. Whole numbers, decimals, simple fractions and mixed fractions are accepted. Canonical units are singular identifiers; display pluralization is generated. Ranges use `max`, not punctuation embedded in a sentence.

An ingredient has:

- `id`: unique within its component. References use `component-id.ingredient-id`.
- `key`: stable ingredient identity used for shopping consolidation. Keep different ingredient choices/properties distinct; do not group salted and unsalted butter under the same identity.
- `name`: the ingredient itself, without its measured amount. A `count` quantity also requires an explicit `plural` name.
- `quantity`: the measured amount, or `allowance` for genuinely unmeasured instructions such as “to taste.” These are mutually exclusive.
- `equivalents`: other expressions of the same total. They scale together. Only supply equivalents already supported by the recipe; the structure does not establish conversion accuracy.
- `packageSize`: fixed size per counted package. Two 14-ounce cans become four 14-ounce cans, not four 28-ounce cans. An equivalent package count attached to a measured total is different.
- `preparation`: softened, chopped, drained, etc. Descriptive sizes stay fixed; an estimate such as “about two carrots” must explicitly say it applies to the original batch or be a supported equivalent.
- `optional` and `role`: distinguish ordinary ingredients, cooking water, garnishes and discarded ingredients. Cooking water is excluded from the combined shopping list; ingredients that are purchased and later discarded remain included.
- `uses`: explicit step destinations and fractional shares, adding to exactly one.

Do not put alternate quantities inside `preparation` or `name`. A mixed amount such as two cups plus two tablespoons may use its exact same-unit equivalent (2 1/8 cups); do not infer a gram weight. Unmeasured allowances need a single destination. If two steps need independent “to taste” allowances, give each a separate ingredient entry.

## Components and destinations

Cake and frosting own their own vanilla quantities. Dough and topping own their own candy quantities. The combined shopping list sums only compatible identities with the same units, names, package specifications and optionality. It does not guess conversions between cups and grams. Component quantities remain separate in the cooking list.

Each step with assigned ingredients must contain `{{ingredients}}` exactly once. The compiler inserts the assigned ingredient names automatically, so a newly assigned leavener cannot disappear from an independently typed mixing list. A partial allocation generates wording such as “1/2 of the unsalted butter.” Shares remain proportional at every batch size.

For a non-consuming preparation reference, use `{{name:cake.carrots}}`, for example when grating carrots before their assigned folding step. Unknown references, duplicate IDs, missing destinations and allocation sums other than one fail authoring validation. Free prose still needs judgment: assigning an ingredient to the wrong stage is not something a schema can prove correct.

Working examples:

- `src/content/recipes/breakfast-carrot-cake.md`: numeric gram quantity, count/plural egg, explicit leavening destinations and a preparation reference.
- `src/content/recipes/chocolate-chip-cookie-cake.md`: butter equivalents, separate dough/topping components and combined candy shopping quantity.
- `scripts/tests/recipe-formula.test.mjs`: divided ingredients, cake/frosting vanilla, packages, ranges, optional roles and invalid definitions. These are software fixtures, not tested culinary recipes.

## Yield, equipment and time

`formula.yield` contains an amount and unit such as loaf, piece or portion. Pan dimensions belong in equipment/method guidance. Neither equipment dimensions nor cooking times are multiplied by the ingredient scaler. Complex dual yields remain legacy until their actual relationship is decided.

Use recipe `prepTime`, `cookTime`, `totalTime` and teaching timing notes consistently. Total elapsed includes required rests, cooling, soaking and marinating; preparation and cooking may overlap, so they are not universally additive. Do not silently shorten total time to make a recipe look quick. The quantity model intentionally does not calculate a cooking schedule.

For composed meals, `componentPreparation` maps every linked component slug to `state` (`from-scratch`, `prepared-ahead` or `reheat`) and a concrete `note`. Once used, this map must cover every component and cannot reference a missing component. The meal page shows these assumptions before the component links. `bbq-pulled-pork-spread` demonstrates cooked pork with sides made from scratch. Meal elapsed time starts from those declared conditions. Record portions and equipment coordination in the meal strategy; preparation state alone is not a complete meal review.

## Migration discipline

1. Preserve identity, amounts, attribution and deliberate richness.
2. Resolve any genuine ambiguity before creating structured allocations. Do not invent the split of vanilla between cake and frosting or a missing baking-powder amount.
3. Compile and inspect readable ingredients, directions and shopping totals.
4. Verify scale down/up/reset and important package/equivalent cases. Use existing tests for the shared behavior; do not commission a new audit for every recipe.
5. Keep editorial and physical-test status unchanged unless separately warranted.

This is an authoring contract and small structural validity check, not a recurring review campaign. The one-time audit remains a historical finding list.
