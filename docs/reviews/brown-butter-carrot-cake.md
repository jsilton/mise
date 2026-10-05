# Brown Butter Carrot Cake: whole-recipe editorial review

Date: 2026-10-05. Status: accepted after independent challenge and complete root inspection; production verification pending. Input commit: `e922e95ee275aee6289e7225914045d273154791`; SHA-256: `6947c313c7c788829f19fd07c55a37b5b6687f844f3b6a52876b9beea48df7c6`. No physical cooking test occurred.

## Decision and four-lens review

Practicality: grating, butter cooling and layer cooling earn a project schedule. Tradition: retain the current carrot-cake variation and its real publication link. Technique: brown milk solids without burning, aerate eggs before liquid fat and cool cake before cream-cheese frosting. Balance: preserve all richness and ginger/cinnamon/nutmeg with frosting tang.

## Consequential findings

- **Brown-butter quantity.** Before: “3/4 cup … browned and cooled” can read as final volume, while method melts the listed butter. After: “3/4 cup unsalted butter, measured before browning”; use the complete resulting butter and solids without topping up. Evidence/applicability: 9002a113 method explicitly says “Melt the 3/4 cup butter”; same method in 9bbe8f25. BB establishes water loss, not a new amount. Confidence/limits: High for historical starting measurement; adapted fat balance is untested.

- **Aeration sequence.** Before: Beat brown butter, sugars and eggs together for four minutes. After: Beat eggs/sugars/vanilla until pale and thick, then stream in lukewarm brown butter. Evidence/applicability: C’s staged egg/fat sequence; current adaptation retains all fat and liquids. Confidence/limits: Moderate: same egg/sugar base, different fat; validate crumb in the kitchen.

- **Salt density.** Before: 1 1/2 tsp generic kosher salt. After: Keep 1 1/2 tsp and specify light, hollow-flake kosher salt; warn against an equal-volume dense/fine substitution. Evidence/applicability: C current density-specific alternatives; existing Mise salt review documents flake/dense difference. Confidence/limits: High for avoiding equal spoon interchange; target weight is not supplied.

- **Preparation/cooling.** Before: No explicit oven preheat or pan greasing; bake only says “Cool completely.” After: Prepare oven and grease/parchment first; add center tester, ten-minute pan cooling, release and complete rack cooling. Evidence/applicability: Current ledger; saved original/C sequence. Confidence/limits: High for clear process; no new pan dimensions.

- **Attribution claim.** Before: “Bravetart Upgrade” implies a source not actually linked or established. After: Remove that unsupported attribution from Chef’s Note; retain the existing Bon Appétit source and brown-butter title/alias. Evidence/applicability: Committed rewrite establishes an internal adaptation, not a Stella Parks recipe. Confidence/limits: High.

Full exact before/after authored fields and method, ingredient ledger, confidence and unresolved questions are in [the complete review JSON](brown-butter-carrot-cake.json). Source IDs and applicability are in [the primary-source packet](../editorial-campaign/2026-10-05/baking-sources.md).

## Complete frozen-input ingredient ledger

Every measured input is accounted for below; compound entries are split without guessing quantities. The recipe-specific JSON records the proposed shares and preparation strings.

| Exact input quantity/preparation            | Current method destination                         | Proposed ingredient references       |
| ------------------------------------------- | -------------------------------------------------- | ------------------------------------ |
| 3/4 cup Unsalted Butter, browned and cooled | browning, step 1; returned in step 2               | cake.butter                          |
| 1 lb Carrots, finely grated                 | fold, step 3                                       | cake.carrots                         |
| 1 cup Buttermilk                            | fold, step 3                                       | cake.buttermilk                      |
| 4 large Eggs, room temperature              | beat, step 2                                       | cake.eggs                            |
| 1 cup Granulated Sugar                      | beat, step 2                                       | cake.sugar                           |
| 3/4 cup Light Brown Sugar                   | beat, step 2                                       | cake.brown-sugar                     |
| 2 1/2 cups All-Purpose Flour                | dry/fold, step 3                                   | cake.flour                           |
| 2 tsp Cinnamon + 2 tsp Ginger               | dry/fold, step 3                                   | cake.cinnamon; cake.ginger           |
| 1/2 tsp Nutmeg                              | dry/fold, step 3                                   | cake.nutmeg                          |
| 2 tsp Baking Powder + 3/4 tsp Baking Soda   | dry/fold, step 3                                   | cake.baking-powder; cake.baking-soda |
| 1 1/2 tsp Kosher Salt                       | dry/fold, step 3                                   | cake.salt                            |
| 12 oz Cream Cheese, softened                | frosting, step 5                                   | frosting.cream-cheese                |
| 3/4 cup Butter, softened                    | frosting, step 5                                   | frosting.butter                      |
| 4 cups Powdered Sugar                       | frosting, step 5                                   | frosting.sugar                       |
| 2 tsp Vanilla Extract, for the cake         | beat, step 2; prior allocation repair retained     | cake.vanilla                         |
| 1 tsp Vanilla Extract, for the frosting     | frosting, step 5; prior allocation repair retained | frosting.vanilla                     |

Additional explicit entries:

- cake.pan-fat: for greasing the pans and parchment; destination prepare. Previously implied preparation/garnish allowance; no new measured edible quantity.

All proposed measured amounts have a single consuming stage or a documented proportional allocation, with no unassigned or multiply consumed amount. Serving allowances remain unmeasured.

## Ratios, yield, pan capacity and scaling

Retain starting 3/4 cup butter, 1 lb carrots, 1 cup buttermilk, four eggs, 1 cup white sugar, 3/4 cup light brown sugar, 2 1/2 cups flour and all listed spices/leaveners. Brown butter is an existing distinct adaptation of an oil formula; its lower final fat yield is a test question, not grounds to add guessed butter or water. Keep finely grated carrots and current light-brown-sugar identity. Restore no nuts/rum/raisins into this distinct version. Preserve the 12 oz cream cheese, 3/4 cup frosting butter, 4 cups powdered sugar and separate 2 tsp/1 tsp vanilla. Two 9-inch layers and twelve portions remain.

Written for two 9-inch round cake layers and their frosting. Make separate batches to preserve layer depth; pan dimensions and cooking time do not scale with portions.

## Process and timing graph

Oven/pans → brown measured starting butter → transfer/cool while grating and mixing dry/carrot components → beat eggs/sugars/vanilla → stream lukewarm butter → alternate dry/carrot-buttermilk → divide → 35–45-minute bake → ten-minute pan cool → rack cooling → frosting/assembly. Frosting overlaps layer cooling. Three-hour estimate assumes ready softened ingredients and two pans in one oven load.

Storage is preparation-specific in the proposed learning fields. Perishable frosting/cream handling uses FDA limits; conservative refrigerated leftover allowances use USDA general guidance, not a formula-specific shelf-life study. Plain muffin guidance does not apply FDA perishable rules indiscriminately.

## Source disagreements and preserved history

C is an oil-based cake with coarser carrots, dark brown sugar, walnuts and optional raisins/rum; Mise is a retained brown-butter, fine-carrot, light-brown-sugar variant. No formula averaging, oil restoration, nuts or water compensation is proposed. The source’s salt density distinction narrows the meaning of the unchanged spoon quantity. No claim that Stella Parks authored or tested this adaptation survives.

miseId preserved; title preserved; source preserved; sourceUrl preserved; pairsWith preserved; aliases preserved. Defining ingredients and deliberate richness remain; accepted prior allocation, ingredient and broiler repairs survive. Baseline nutrition is removed, never recalculated. No other recipe or variant is consolidated.

## Relationships and validation

All original pairsWith links are preserved and resolve. Their many dessert-on-dessert links are weak serving suggestions rather than evidence of a composed menu. No composed meal source contains any of these six slugs; there is no dependent meal certification to change. Structured formula schema, exact ingredient shares, generated ingredients/yield/directions, checkpoint ranges, internal links and focused recipe lint passed. Full build/export/native-library checks are root’s integration work. Proposal fields do not count as an accepted review or kitchen-tested recipe.

## Kitchen questions

- Weigh starting and finished brown butter and record solids transfer; assess whether the inherited oil-to-butter adaptation gives the intended moist crumb.
- Record the actual salt product/density and mass for the written light-flake spoon measure.
- Check fine-carrot moisture, layer depth and whether the revised staged aeration changes rise or tenderness.

## Independent scaling correction

Original ingredient quantities, formula yield, identity, pan dimensions and recovered additions preserved. Authored formula steps and/or learning.before were corrected before regenerating ingredients, yield and complete directions together. See per-recipe JSON findings for exact text. Candidate SHA-256: e84583288402fdf87e3f043fdfb8de16a9d009b63acea8f232419f642c7ae184. Ingredient/yield arithmetic unchanged; original counts are context rather than a forced scaled count. No kitchen test.

## Integration acceptance

Independent final challenge: [six-recipe acceptance](../editorial-campaign/2026-10-05/baking-independent.md). Root inspected complete source diffs, retained native/Git originals, ratios, ingredient preparation/allocation/destinations, geometry, doneness, elapsed time, storage, scaling and linked meals. Accepted source SHA-256: `a252f966544234e4cce25f2e772a2b8189ffa5d3dfaf20e1937a5877be3a7d36`. Implementation and production verification are tracked separately in the coverage matrix. No physical kitchen testing.

Root preserves the existing ingredient quantity controls. The proposed fixed override is not accepted; pan/layer/mound capacity cautions remain, and dimensions, heat and time do not multiply. [Exact root correction](./brown-butter-carrot-cake.json).
