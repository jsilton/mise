# One-time consistency audit — 7 September 2026

**The most economical next fixes are shared scaling corrections, followed by specific ingredient/method contradictions.** This audit changes no recipes, code, build configuration or review status. It does not restart the exhaustive review goal.

Snapshot: commit `40e2c0527c37469d57103bef3a54a908d356323c`. Detailed evidence and dispositions: [audit data](2026-09-07-one-time-consistency.json).

## What was checked

- All **604 canonical recipes**, **6,801 ingredient lines**, and **86 composed meals**.
- Ingredient outputs at quarter, half, original, double and triple scale: **34,005 executions**. Checked exact reset, numeric lines that fail to change, and selected parenthesized equivalent formats. This is not 34,005 independent proofs of correct arithmetic.
- A finite vocabulary of common ingredient terms screened in both directions, followed by contextual review of missing-ingredient candidates and selected consequential unused-ingredient candidates.
- Recipe/meal metadata references; exact normalized ingredient-list duplication; meal time versus component time; complex yield fallback behavior.
- Four live pages: Anadama bread, breakfast carrot cake, banana nut bread and aloo gobi. Checked ingredient checkboxes, scaling/reset, cooking-mode toggle, mobile overflow and print heading visibility. These are focused interaction checks, not a full visual/accessibility audit.

No new agents, outside research or full build were needed. Temporary audit programs stayed outside the repository. No audit was added to CI or the build.

## 1. Confirmed shared scaling defects

### Compact units: six lines in five recipes

The parser leaves `250g` unchanged while neighboring ingredients double. A space between number and unit changes whether the quantity scales.

- [breakfast-carrot-cake](https://jordansilton.com/mise/recipes/breakfast-carrot-cake/): `250g Carrots (2 large), finely grated`.
- [classic-wonton-soup](https://jordansilton.com/mise/recipes/classic-wonton-soup/): `300g Ground Pork`.
- [korean-mung-bean-sprouts-salad](https://jordansilton.com/mise/recipes/korean-mung-bean-sprouts-salad/): `350g (0.8 lbs) Fresh Mung Bean Sprouts`.
- [shrimp-wonton-soup](https://jordansilton.com/mise/recipes/shrimp-wonton-soup/): `200g Ground Pork`.
- [shrimp-wonton-soup](https://jordansilton.com/mise/recipes/shrimp-wonton-soup/): `100g Shrimp, minced`.
- [simply-seasoned-korean-spinach-salad](https://jordansilton.com/mise/recipes/simply-seasoned-korean-spinach-salad/): `250g (0.5 lbs) Fresh English Spinach`.

**Repair boundary:** accept compact measured units, preserving exact reset and counted package sizes. Do not apply the same substitution to `2-inch piece ginger`: that expression mixes purchase count and dimensions and needs separate handling.

### Equivalent measures: 31 lines in 30 recipes

The leading amount changes while its equivalent remains unchanged. Examples:

- Banana nut bread: `1/2 cup (1 stick)` → `1 cup (1 stick)` at double.
- Mom’s chocolate cake: `1 stick (1/2 cup)` → `2 stick (1/2 cup)`.
- Salmon with black bean and corn salad: `2.25 lb (about 1,020 g)` → `4 1/2 lb (about 1,020 g)`; the comma prevents equivalent parsing.
- Parmigiano cheesecake: `40 oz (5 packs)` → `80 oz (5 packs)`.

Every affected line and observed double output is in the audit data. These quantities are totals expressed two ways. By contrast, `2 (14 oz) cans` must keep each can at 14 oz. Poultry portion weights, cinnamon-stick lengths and package specifications were excluded from this defect count. A shared fix must distinguish equivalent totals from per-item dimensions; removing all parentheses would hide useful information.

**Priority: high.** These defects can change the actual proportions a cook uses, unlike cosmetic pluralization alone.

## 2. Confirmed ingredient-list/method contradictions

Twenty recipes contain 24 screened ingredient mentions required by their method but absent under the stated name or a supported synonym. This confirms inconsistency, not whether the ingredient should be added or the method corrected. Recover source evidence before inventing an amount.

| Recipe                                                                                                                                                                    | Unlisted method ingredient(s)      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [chicken-and-white-bean-enchiladas-with-creamy-green-chile-sauce](https://jordansilton.com/mise/recipes/chicken-and-white-bean-enchiladas-with-creamy-green-chile-sauce/) | cumin                              |
| [double-chocolate-layer-cake](https://jordansilton.com/mise/recipes/double-chocolate-layer-cake/)                                                                         | vanilla                            |
| [general-tsos-cauliflower](https://jordansilton.com/mise/recipes/general-tsos-cauliflower/)                                                                               | sesame oil                         |
| [general-tsos-tofu](https://jordansilton.com/mise/recipes/general-tsos-tofu/)                                                                                             | sesame oil                         |
| [herby-chicken-meatball-bowl](https://jordansilton.com/mise/recipes/herby-chicken-meatball-bowl/)                                                                         | cumin, cinnamon, garlic, olive oil |
| [instant-pot-butternut-squash-soup](https://jordansilton.com/mise/recipes/instant-pot-butternut-squash-soup/)                                                             | celery                             |
| [japchae-korean-glass-noodle-stir-fry](https://jordansilton.com/mise/recipes/japchae-korean-glass-noodle-stir-fry/)                                                       | cornstarch                         |
| [pasta-with-abruzzi-style-lamb-sauce](https://jordansilton.com/mise/recipes/pasta-with-abruzzi-style-lamb-sauce/)                                                         | olive oil                          |
| [pressure-cooker-bolognase](https://jordansilton.com/mise/recipes/pressure-cooker-bolognase/)                                                                             | olive oil                          |
| [roasted-butternut-squash-mac-and-cheese](https://jordansilton.com/mise/recipes/roasted-butternut-squash-mac-and-cheese/)                                                 | olive oil                          |
| [sheet-pan-pineapple-shrimp-tacos](https://jordansilton.com/mise/recipes/sheet-pan-pineapple-shrimp-tacos/)                                                               | garlic                             |
| [shrimp-and-corn-chowder](https://jordansilton.com/mise/recipes/shrimp-and-corn-chowder/)                                                                                 | garlic                             |
| [shrimp-with-black-bean-sauce](https://jordansilton.com/mise/recipes/shrimp-with-black-bean-sauce/)                                                                       | garlic, ginger                     |
| [skillet-biscuits-with-berries](https://jordansilton.com/mise/recipes/skillet-biscuits-with-berries/)                                                                     | baking powder                      |
| [spaghetti-and-tofu-meatballs](https://jordansilton.com/mise/recipes/spaghetti-and-tofu-meatballs/)                                                                       | olive oil                          |
| [strawberry-cheesecake-overnight-oatmeal](https://jordansilton.com/mise/recipes/strawberry-cheesecake-overnight-oatmeal/)                                                 | honey                              |
| [strozzapreti-with-spinach-and-preserved-lemon](https://jordansilton.com/mise/recipes/strozzapreti-with-spinach-and-preserved-lemon/)                                     | olive oil                          |
| [sweet-and-white-potato-gratin](https://jordansilton.com/mise/recipes/sweet-and-white-potato-gratin/)                                                                     | butter                             |
| [yaki-udon](https://jordansilton.com/mise/recipes/yaki-udon/)                                                                                                             | sesame oil                         |
| [yellow-cake-with-chocolate-frosting](https://jordansilton.com/mise/recipes/yellow-cake-with-chocolate-frosting/)                                                         | baking powder                      |

Particularly clear examples:

- **Yellow cake:** dry mix requests baking powder; the ingredient list has none. Creaming butter is not an additional missing cream ingredient.
- **Skillet biscuits:** dough requests baking powder; none is listed.
- **Strawberry cheesecake oatmeal:** the list specifies maple syrup, but step 1 uses honey. Resolve the sweetener identity; do not add a second sweetener automatically.
- **Herby chicken meatball bowl:** roasting requests oil, garlic powder, cinnamon and cumin; none is listed. The same step also mentions Italian seasoning, outside the scanner vocabulary. Thus the 24 count is not a complete count of missing ingredients.
- **Shrimp chowder:** the method’s shrimp marinade requests garlic and scallions; neither is listed. Scallions were outside this pass’s vocabulary.

## 3. Missing destinations and incomplete composition

These were checked against actual ingredient lists and directions:

- **Blackout chocolate cake:** 1 1/2 tsp baking powder is listed but omitted from the enumerated dry mix.
- **Vegetable muffin:** 1 tsp baking powder is listed but omitted from the enumerated dry mix; that mix instead requests unlisted salt.
- **Tomato and goat cheese tart:** baking powder has no stated crust destination; thyme is requested in both crust and filling without allocation.
- **Brown butter carrot cake:** one teaspoon vanilla is listed, but both batter and frosting call for it without division. Allocation needs resolution; do not simply double it.
- **Sweet and white potato gratin:** directions jump from buttering the dish and adding 1/2 cup cream to arranging the top layer. The intervening potato, cheese and remaining-cream assembly is missing.
- **Shrimp wonton soup:** filling takes “all seasonings,” then bowls receive additional soy sauce and sesame oil without division. Wrappers are linked from the method but missing from the ingredient list.

The unused-term screen produced 537 raw nonmentions. **That is not 537 defects.** “Dry ingredients,” “wet ingredients,” “aromatics” and “dried fruit” account for legitimate destinations; “baking powder, not baking soda” must not create an unused baking-soda defect. Only the specifically reviewed findings above are confirmed. Remaining nonmentions are not an action queue.

## 4. Meals: mismatches versus advance preparation

The mechanical time comparison found 32 component/meal mismatches, not 32 confirmed broken meals. It compares stated component elapsed time with meal total, or prep plus cook where total is missing; it cannot infer advance preparation or overlapping tasks.

Confirmed examples:

- **Beef Stew Night:** meal budgets 140 minutes versus the component’s 240. Its method also adds carrots/potatoes earlier than the reviewed stew method.
- **Chicken Parmesan Night:** meal budgets 45 minutes but references 110-minute fresh egg pasta without allowing for making it ahead. Its schedule starts at boiling pasta water.
- **Chicken Lettuce Wrap Night:** meal budgets 20 minutes versus 30 for the main and 25 for the cucumber salad; no prepared-component assumption explains this.
- **Coq au Vin Dinner:** meal budgets 80 minutes versus its 150-minute main, with a shorter braise in the meal instructions.

Dismissed or qualified:

- **BBQ Pulled Pork Spread:** explicitly uses previously cooked pork. Comparing its 50-minute service against raw pork’s 690-minute recipe is a false positive.
- **Korean BBQ Night:** ribs and kimchi explicitly require advance preparation. Those durations are not automatically same-day defects. Its 40-minute rice start still needs alignment with the linked 65-minute rice recipe.
- Other time flags remain labeled candidates in the data. They have not been upgraded to confirmed defects just because the numbers differ.

Meal corrections should reference actual component portions and equipment, not replace every meal time with the longest component’s time. Do not claim full meal review from this comparison.

## 5. Behavior that should not be “fixed” automatically

- Nine complex yields deliberately retain original-yield wording plus an ingredient multiplier. Examples contain alternative serving counts, pan sizes or two linked yields. This avoids displaying a confidently wrong multiplied pan size. Improving these needs structured yield data, not a blanket text replacement.
- Six ginger length expressions remain unchanged. Identify counted pieces and their sizes explicitly before deciding what scales.
- “Cream the butter,” “consistency of heavy cream,” a linked side dish and optional serving suggestions are not proof of missing recipe ingredients.
- No broken metadata recipe/component references or exact normalized ingredient-list duplicates were found. This does **not** establish that all body links work or that near-duplicates do not exist. No consolidation is proposed.
- The live interaction checks passed. They reproduced the compact-unit and butter-equivalent problems, demonstrating that those are visible user-facing defects rather than unused code paths.

## Recommended order of work

1. Fix the shared compact-unit and equivalent-total parsing boundaries together; inspect their collection-wide impact and a small representative browser sample.
2. Resolve leavening omissions, gratin assembly and contradictory sweetener/allocation instructions using existing original-source evidence. Group repeated omission patterns; do not rewrite entire recipes.
3. Repair the four confirmed meal schedules against components, then triage the remaining timing candidates only if more scope is authorized.
4. Defer optional garnish completeness, complex-yield redesign, broad prose changes, imagery and speculative near-duplicate work.

This is an audit deliverable, not an implementation batch or a kitchen test. No production changes were made.
