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
- `stepName` (optional): what the steps call this ingredient, without an article, when the name the compiler derives is not the right one. See "How steps name ingredients" below.
- `quantity`: the measured amount, or `allowance` for genuinely unmeasured instructions such as “to taste.” These are mutually exclusive.
- `equivalents`: other expressions of the same total. They scale together. Two equivalents print with a comma between them. Only supply equivalents already supported by the recipe; the structure does not establish conversion accuracy.
- `packageSize`: fixed size per counted package. Two 14-ounce cans become four 14-ounce cans, not four 28-ounce cans. An equivalent package count attached to a measured total is different.
- `preparation`: softened, chopped, drained, etc. Descriptive sizes stay fixed; an estimate such as “about two carrots” must explicitly say it applies to the original batch or be a supported equivalent.
- `optional` and `role`: distinguish ordinary ingredients, cooking water, garnishes and discarded ingredients. Cooking water is excluded from the combined shopping list; ingredients that are purchased and later discarded remain included.
- `uses`: explicit step destinations and fractional shares, adding to exactly one.

Do not put alternate quantities inside `preparation` or `name`. A mixed amount such as two cups plus two tablespoons may use its exact same-unit equivalent (2 1/8 cups); do not infer a gram weight. Unmeasured allowances need a single destination. If two steps need independent “to taste” allowances, give each a separate ingredient entry.

## Components and destinations

Cake and frosting own their own vanilla quantities. Dough and topping own their own candy quantities. The combined shopping list sums only compatible identities with the same units, names, package specifications and optionality. It does not guess conversions between cups and grams. Component quantities remain separate in the cooking list.

Each step with assigned ingredients must contain `{{ingredients}}` exactly once. The compiler inserts the assigned ingredients automatically, so a newly assigned leavener cannot disappear from an independently typed mixing list. Shares remain proportional at every batch size.

For a non-consuming preparation reference, use `{{name:cake.carrots}}`, for example when grating carrots before their assigned folding step. It prints the same cooking name the steps use, with no article.

## How steps name ingredients

The ingredient list names what to buy: "3 large eggs", "2 garlic cloves, minced", "4 tbsp vegetable oil, divided". A step names what is in the cook's hand: "the eggs", "the garlic", "2 tbsp of the vegetable oil". The compiler writes the step wording from the formula. Do not type ingredient names, articles or amounts around `{{ingredients}}` to make up for it.

**Cooking names.** The compiler shortens each `name` for the steps. It drops size words (large, medium), shopping words (fresh, unsalted, extra-virgin, all-purpose, low-sodium, boneless skinless), parenthetical notes and container words (cloves, sprigs, stalks, "slices of", "head of"). "kosher salt" becomes "the salt", "garlic cloves" becomes "the garlic", "large head of romaine" becomes "the romaine". A name with a choice in it ("butter or neutral oil") loses only its leading shopping words. A linked name keeps its link.

A short name gives way to the fuller one when another ingredient in the recipe would answer to it too. With sesame oil in the recipe, "vegetable oil" stays "the vegetable oil". With brown sugar in the recipe, "granulated sugar" stays "the granulated sugar".

Set `stepName` when the derived name is wrong or unclear. Write it without an article, in the form the step should use:

```yaml
- id: lettuce
  key: romaine
  name: large head of romaine
  plural: large heads of romaine
  stepName: romaine leaves
```

`stepName` is optional and existing formulas compile without it.

**Articles and order.** The list starts with one "the": "Whisk the flour, baking soda, and salt". An ingredient that prints an amount comes last in the list with its own "of the", so the amount cannot read as applying to its neighbor: "Add the eggs and 2 tbsp of the vegetable oil".

**Divided ingredients.** An ingredient with more than one `uses` entry is divided between steps.

- Its list line gains ", divided" (unless the name or preparation already says so). The shopping list does not.
- Each use prints the real amount for that step, in kitchen measures: 1/2 of 4 tbsp prints "2 tbsp of the vegetable oil", 1/3 of 1/4 cup prints "4 tsp of the Shaoxing wine".
- The last use prints "the rest of the vegetable oil".
- A share of a counted item prints its number with the list name when the number is whole ("4 garlic cloves", "2 large eggs") and words when it is not ("half of the onion"). The step never prints a bare number before the short name, so a quarter batch reads "1 garlic clove" and "1/4 jalapeño".
- A share that is not a real measure at the written batch (1/9 of 1/4 tsp) prints as the share ("1/9 of the salt"). Fix the quantities instead of leaving that on a page.

**Two lines with the same name.** When two entries end up with the same cooking name, such as the oil in a marinade and the oil for the wok, or vanilla in a cake and in its frosting, every step prints the amount so the cook knows which line it means: "1 tsp of the vegetable oil". Give one of them a `stepName` if a name reads better than an amount.

**Oil first.** An amount normally comes last in the list. When the order matters to the cook, such as oil that goes into the wok before the garlic, mark that use with `lead: true`:

```yaml
uses:
  - step: beef
    share: 1/4
  - step: vegetables
    share: 1/4
    lead: true
```

The step then reads "Add 1 tbsp of the vegetable oil, the garlic, and Chinese broccoli to the wok". `lead` is optional and applies to that one use.

**A share in words.** When a part rounds to an amount no one measures, such as 5 1/4 oz for two thirds of 8 oz of cheese, mark that use with `words: true`. The step then reads "two thirds of the low-moisture mozzarella". `words` is optional and applies to that one use.

**Words before the list.** The compiler reads the word or two before `{{ingredients}}`:

| Template                                                                                                                       | Output                                              |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| `Add {{ingredients}}` or `Add the {{ingredients}}`                                                                             | "Add the eggs and 2 tbsp of the oil"                |
| `the rest of the {{ingredients}}`, `half the {{ingredients}}`, `a splash of {{ingredients}}`, `a thin film of {{ingredients}}` | names only, no amounts: "a splash of chicken stock" |
| `the beaten {{ingredients}}`, `the softened {{ingredients}}`                                                                   | "the beaten egg"                                    |
| `a {{ingredients}}`, `a little {{ingredients}}`                                                                                | "an ice cube", "a little oil"                       |

After "of", "half", "all", "both", "remaining", "a little", "more", "some", "enough", "any" and "extra" the step already says how much, so the compiler prints bare names and no amounts.

**Scaling.** The amounts the compiler prints in steps scale on the page with the batch buttons. "The rest of" needs no scaling. An amount typed by hand in a step does not scale, and the page then shows "Step amounts are for the original batch." under the scaler. Prefer a divided ingredient to a typed amount.

**Scaled amounts.** The written batch prints exactly as authored. Any other batch size is rounded to what a cook can measure: fractions in eighths and thirds, small cups as tablespoons (1/16 cup is 1 tbsp, 1 1/16 cups is 1 cup plus 1 tbsp), small tablespoons as teaspoons, "a pinch" below 1/8 tsp, grams to the nearest gram or 5 g, and whole eggs to the nearest half with a note ("1/2 large egg (beat an egg and use half)"). The same rules apply to legacy recipes. Unknown references, duplicate IDs, missing destinations and allocation sums other than one fail authoring validation. Free prose still needs judgment: assigning an ingredient to the wrong stage is not something a schema can prove correct. No scaled line prints 3/8, 5/8 or 7/8 of a teaspoon or an ounce, or a third of a teaspoon. Under one teaspoon or one ounce those print as "scant 1/2 tsp", "heaping 1/2 tsp" and "scant 1 tsp". Above that they go to the nearest quarter. Ounces of a solid step up to pounds on a tidy quarter pound ("1 lb", "1 1/2 lb"). Ounces of a liquid stay in ounces.

Working examples:

- `src/content/recipes/breakfast-carrot-cake.md`: numeric gram quantity, count/plural egg, explicit leavening destinations and a preparation reference.
- `src/content/recipes/chocolate-chip-cookie-cake.md`: butter equivalents, separate dough/topping components and combined candy shopping quantity.
- `scripts/tests/recipe-formula.test.mjs`: divided ingredients, counted ingredients split across steps, lead words such as "enough", `lead`, cooking names and `stepName`, cake/frosting vanilla, packages, ranges, optional roles, scaled kitchen measures and invalid definitions. These are software fixtures, not tested culinary recipes.

## Family recipes keep their wording

Family recipes stay exactly as written. A family formula sets one field at the top of the block:

```yaml
formula:
  version: 1
  stepText: preserved
```

With `stepText: preserved` the compiler writes the Directions and the ingredient lines the way it did when the recipe was first structured. Steps name each ingredient as the card names it, with no added article, no added amount and no ", divided" on the list line. The scaler leaves the step text alone. When a step holds a measured amount and the batch changes, it shows "Step amounts are for the original batch."

Use it for every recipe from a family card. Do not use it for a new recipe. The field is optional and `preserved` is its only value.

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
