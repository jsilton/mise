# Frozen Blueberry Muffins: whole-recipe editorial review

Date: 2026-10-05. Status: accepted after independent challenge and complete root inspection; production verification pending. Input commit: `e922e95ee275aee6289e7225914045d273154791`; SHA-256: `85b265095dcff4a9c61d69c904f1c37a61e64b28515f2c0bba76d1d0f0cc20e7`. No physical cooking test occurred.

## Decision and four-lens review

Practicality: freezer-friendly baking with an honest two-tin schedule and softened ingredients ready. Tradition: retain the source-linked frozen-blueberry muffin identity. Technique: creaming differs from the melted-butter chip muffins; do not average methods. Balance: retain buttery crumb, berries and nutmeg sugar without reducing sweetness as a generic upgrade.

## Consequential findings

- **Sugar recovery.** Before: 2 cups sugar total: method subtracts 2 tbsp for topping, leaving 1 7/8 cups in batter. After: 2 cups batter sugar plus separate 2 tbsp topping sugar (total 2 1/8 cups). Evidence/applicability: Saved original 045e5ba2 and deletion patch 32afdbad. Direct F access unavailable; suspicious copied-host result excluded. Confidence/limits: High for exact local-source recovery; no claim of current-publisher verification.

- **Intent audit.** Before: January bulk rewrite converts separately listed sugars into a divided 2-cup total. After: Restore the lost 2 tbsp after checking complete later history and preference/review records. Evidence/applicability: Retained file history; no later accepted formula reduction; current register remains pending. Confidence/limits: High for repository history, with undocumented native intent unknown.

- **Mixing and tester.** Before: A few streaks of flour are declared acceptable; toothpick must be entirely clean around juicy berries. After: Finish moistening flour without beating every lump smooth; distinguish berry juice from wet batter. Evidence/applicability: Q mixing guidance and current fruit preparation. Confidence/limits: High for dry-pocket and center distinction; crumb performance untested.

- **Timing/classification.** Before: 10 + 20 = 30 min omits ten-minute pan cooling and existing 20–25-minute bake. “main/quick” mislabels a 24-muffin batch. After: 15 min preparation, 20–25 min bake, about 50 minutes including pan cooling; side/comfort. Evidence/applicability: Complete graph and current tray requirements. Confidence/limits: Moderate planning estimate; high that old total omits a required stage.

- **Nutrition.** Before: Legacy 1 g fat per muffin conflicts with a butter-rich batch and unverified values. After: Remove nutrition rather than replace it with another estimate. Evidence/applicability: Review standard; changed sugar formula. Confidence/limits: High.

Full exact before/after authored fields and method, ingredient ledger, confidence and unresolved questions are in [the complete review JSON](frozen-blueberry-muffins.json). Source IDs and applicability are in [the primary-source packet](../editorial-campaign/2026-10-05/baking-sources.md).

## Complete frozen-input ingredient ledger

Every measured input is accounted for below; compound entries are split without guessing quantities. The recipe-specific JSON records the proposed shares and preparation strings.

| Exact input quantity/preparation           | Current method destination                                         | Proposed ingredient references |
| ------------------------------------------ | ------------------------------------------------------------------ | ------------------------------ |
| 4 cups All-Purpose Flour                   | dry, step 2                                                        | batter.flour                   |
| 2 cups Granulated Sugar (divided)          | current 2-cup total: 30 tbsp batter (15/16), 2 tbsp topping (1/16) | batter.sugar; topping.sugar    |
| 1 cup (2 sticks) Unsalted Butter, softened | cream, step 1                                                      | batter.butter                  |
| 4 large Eggs                               | wet, step 1                                                        | batter.eggs                    |
| 1 cup 2% Milk                              | wet, step 1                                                        | batter.milk                    |
| 2 cups Frozen Unsweetened Blueberries      | fold, step 4                                                       | batter.blueberries             |
| 4 tsp Baking Powder                        | dry, step 2                                                        | batter.baking-powder           |
| 1/2 tsp Sea Salt                           | dry, step 2                                                        | batter.salt                    |
| 2 tsp Vanilla Extract                      | wet, step 1                                                        | batter.vanilla                 |
| 1/2 tsp Ground Nutmeg                      | topping, step 5                                                    | topping.nutmeg                 |

Additional explicit entries:

- batter.pan-fat: for greasing the muffin cups if not using liners; destination prepare. Previously implied preparation/garnish allowance; no new measured edible quantity.

All proposed measured amounts have a single consuming stage or a documented proportional allocation, with no unassigned or multiply consumed amount. Serving allowances remain unmeasured.

## Ratios, yield, pan capacity and scaling

Keep 4 cups flour, 1 cup butter, four eggs, 1 cup milk, 2 cups frozen unsweetened berries, 4 tsp powder and the original nutmeg. Only sugar recovers a proven omission: 2 cups belong in the batter, and 2 tbsp belong in topping. Two 12-cup standard tins target 24 muffins at about two-thirds full; historical yield says about two dozen. Do not claim a measured weight or exact muffin mass. The proposed structured yield retains current 24 portions, while the record preserves its approximation. Frozen fruit is deliberately unthawed; no fruit replacement or claimed “snap” guarantee.

Structured quantities may scale, but cup size, temperature, endpoint and stage times do not. Plan enough matching cups and oven batches; additional batches extend elapsed time.

## Process and timing graph

Ready softened butter/eggs → oven/pans/dry mix → cream butter and 2 cups batter sugar → eggs → milk/vanilla → fold dry → fold frozen berries → divide 24 cups → separate topping → 20–25-minute bake → ten-minute pan cooling → racks. A second oven load and complete rack cooling before packing are additional time; keep batter handling gentle.

Storage is preparation-specific in the proposed learning fields. Perishable frosting/cream handling uses FDA limits; conservative refrigerated leftover allowances use USDA general guidance, not a formula-specific shelf-life study. Plain muffin guidance does not apply FDA perishable rules indiscriminately.

## Source disagreements and preserved history

The available committed original uses 2 cups batter sugar and additional topping sugar; current formula changed this in a broad refinement. Direct Taste of Home access failed, so the recovery relies on Git and makes no claim of fresh primary-page corroboration. The suspicious copied-host search result is not evidence. Source-supplied generic milk identity stays 2%; whole milk is a bounded equal-volume richness alternative. No three-month freezer guarantee is added without readable publisher evidence.

miseId preserved; title preserved; source preserved; sourceUrl preserved; pairsWith preserved; aliases preserved. Defining ingredients and deliberate richness remain; accepted prior allocation, ingredient and broiler repairs survive. Baseline nutrition is removed, never recalculated. No other recipe or variant is consolidated.

## Relationships and validation

All original pairsWith links are preserved and resolve. Their many dessert-on-dessert links are weak serving suggestions rather than evidence of a composed menu. No composed meal source contains any of these six slugs; there is no dependent meal certification to change. Structured formula schema, exact ingredient shares, generated ingredients/yield/directions, checkpoint ranges, internal links and focused recipe lint passed. Full build/export/native-library checks are root’s integration work. Proposal fields do not count as an accepted review or kitchen-tested recipe.

## Kitchen questions

- Measure actual yield and pan fill with the restored 2 cups batter sugar plus topping; record berry size and starting temperature.
- Check actual bake time, center texture and whether both tins bake evenly in the household oven.
- Confirm whether an undocumented native-library change intentionally reduced sugar; no such request appears in the committed record.

## Independent scaling correction

Original ingredient quantities, formula yield, identity, pan dimensions and recovered additions preserved. Authored formula steps and/or learning.before were corrected before regenerating ingredients, yield and complete directions together. See per-recipe JSON findings for exact text. Candidate SHA-256: 088745b1efbcebedeb01fbf4f9464bc728e44b3a71f0e7ed8ff10615be49a840. Ingredient/yield arithmetic unchanged; original counts are context rather than a forced scaled count. No kitchen test.

## Integration acceptance

Independent final challenge: [six-recipe acceptance](../editorial-campaign/2026-10-05/baking-independent.md). Root inspected complete source diffs, retained native/Git originals, ratios, ingredient preparation/allocation/destinations, geometry, doneness, elapsed time, storage, scaling and linked meals. Accepted source SHA-256: `bba24897143925a129d6d1cba635f077b4e3c3e4d7a4ddccc82b77e788a17e7e`. Implementation and production verification are tracked separately in the coverage matrix. No physical kitchen testing.

Root prose clarifications are recorded with exact before/after text in the JSON. Authored measured formula and generated fields remain unchanged by those clarifications.
