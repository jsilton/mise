# Mise repair batch — September 10, 2026

This working-tree batch follows the [audit snapshot](../../audits/2026-09-10/state-report.md) at commit `1c84b8bd9758f1f3d0bfdd18d6a745edbb118cd0`. The historical audit remains unchanged. These are scoped editorial repairs, not complete recipe reviews or physical cooking results. No review labels were upgraded. Nothing was deployed during this batch.

## Changes

- Fixed all 10 broken meal-body recipe links across Indian Curry Night, Saag Paneer Dinner and Indian Dal Night.
- Repaired eight recipes: beef tenderloin dogs, pineapple shrimp tacos, gefilte fish terrine, yellow cake, skillet biscuits, blackout cake, vegetable muffins and strawberry-rhubarb shortcake.
- Restored source-backed missing ingredients and component allocations; included listed baking powder in two dry mixes. Removed stale nutrition blocks from the six recipes whose ingredient lists changed, without inventing replacement nutrition.
- Updated beef and shrimp doneness guidance. Replaced unspecified oven plastic wrap with appropriately rated nonstick parchment, and included the terrine's four-hour chill in elapsed time.
- Rebuilt four meal plans around their actual components: beef stew, chicken lettuce wraps, coq au vin and chicken Parmesan. Plans specify starting preparation state, portions, equipment and realistic timing windows. Chicken Parmesan now explicitly includes making and resting fresh pasta and replaces the main recipe's dried pasta instead of doubling it.
- Added `scripts/check-built-links.mjs`, two regression tests, and integration into QA and the recipe validation workflow. It checks quoted anchor destinations in generated Astro HTML. It does not check remote sites, fragment IDs, assets or JavaScript-generated links.

The complete content file list is in [changed-files.json](changed-files.json).

## Evidence

Ingredient quantities were recovered from original repository versions at commit `045e5ba2`, matching each recipe's filename. Recovery was limited to the missing ingredient or allocation; unrelated historical formula differences were not restored wholesale. Baking powder already present in Blackout Chocolate Cake and Vegetable Muffin was added to their enumerated dry mixes.

The beef endpoint follows the [FoodSafety.gov minimum-temperature chart](https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures). Shrimp cues follow the [FDA seafood guidance](https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely). Parchment suitability is supported by [Reynolds' product instructions](https://www.reynoldsbrands.com/products/parchment-paper/parchment-paper-rolls); the recipe requires the actual product to be rated for the oven temperature. Refrigeration and marinating instructions follow [FoodSafety.gov handling guidance](https://www.foodsafety.gov/keep-food-safe/4-steps-to-food-safety). These sources support handling instructions, not taste, set or release performance of this terrine formula.

## Verification

- `npm test`: 46 passed, zero failed.
- `npm run qa`: 30/30 checks passed, including a fresh production build.
- Generated crawl: 719 HTML pages, 11,259 internal anchors, zero missing destinations (previously 10).
- ESLint passed for the new checker, its tests and QA integration.
- Browser checks used the local production preview, not the public deployment.
- Breakfast Carrot Cake: 2× scaling changed 250 g carrots to 500 g and 12 pieces to 24; shopping list agreed. Ingredient checks persisted across reload. Step completion persisted when cook mode was reopened; reset cleared it. Cook mode itself reset on reload. Tab focus visibly reached the scale control and Space activated it.
- Chocolate Chip Cookie Cake: 2× quantities and equivalent butter measures updated; combined candy quantities were 2 1/2 cups, correctly combining the two component allocations. Reset to 1× worked.
- At a 390 × 844 viewport, the sampled carrot-cake ingredient view had a visible focus indicator and no horizontal document overflow (390 px document width). This is a sampled mobile check, not full-site accessibility conformance.
- The repaired Indian Dal Night body link opened Dal Tadka successfully.
- No error-level console entries were returned on the two sampled formula pages.
- The print button was activated, but this browser exposed no print preview/output for inspection. Print pagination remains unverified.
- Chrome DevTools MCP was unavailable. The web-perf skill requires stopping its trace workflow in that situation. Configuration approval was requested; no approval had arrived and no configuration was changed. No performance scores or Core Web Vitals are claimed.

## Audit finding disposition

| Finding                       | Disposition in this batch                                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| A01 doneness                  | Written endpoints/cues corrected in the two identified recipes.                                                              |
| A02 oven wrap                 | Unspecified plastic replaced with rated parchment; physical release/set still untested.                                      |
| A03 missing ingredients       | Partially repaired in the named recipes; corpus-wide closure is not claimed.                                                 |
| A04 elapsed plans             | Terrine and four identified meal plans corrected; cooking times remain estimates.                                            |
| A05 allocations               | Partially repaired: leavening destinations, cake vanilla, terrine oil/lemon and shortcake components. Other examples remain. |
| A06 dietary labels            | Pending individual review.                                                                                                   |
| A07 malformed generic advice  | Pending; tomato-goat-cheese tart and the small candidate set remain to review.                                               |
| A08 kitchen testing           | Pending physical cooking; see the proposed records below.                                                                    |
| A09 browser/print/performance | Representative interaction and mobile checks extended; print, trace and comprehensive accessibility remain open.             |
| A11 broken links              | Corrected and guarded by a generated-link regression check.                                                                  |

Remaining recipe work includes tart ingredient allocations and malformed advice, brown-butter carrot cake vanilla, wonton-soup allocations, Chana Begoon oil, and the shrimp taco's remaining slaw-lime/topping quantities. Some original sources are available; these need a separate contextual pass rather than guessed quantities. Meal components also retain their own existing review gaps; repairing a schedule does not close those gaps.

## Proposed physical cooking records

No cooking has been performed. For each trial record date, cook, source revision, ingredient weights/brands, equipment, actual start/finish times, temperatures, yield, photographs and any deviations before evaluating results.

1. Yellow cake: weigh batter and pan portions; record bake and complete-cooling times, rise, crumb, sweetness and frosting yield. Confirm the restored leavening and separate vanilla allocations reproduce a usable cake.
2. Gefilte fish terrine: record parchment product/rating, pan fill, endpoint checks, cooling/refrigeration times, cold-center temperature, release, slicing and texture after at least four hours chilling.
3. Chicken Parmesan dinner: one cook starts with raw components and dry pasta ingredients. Record dough rest/rolling, oven transitions, chicken endpoints, pasta and bread finish times, serving temperature and actual hands-on/elapsed time.

Existing package-manager migration files were preserved. The workflow still uses `npm ci`, while the working tree has a pre-existing deleted npm lockfile and untracked pnpm files; reconcile that migration before publication. It was not changed as part of this content repair.
