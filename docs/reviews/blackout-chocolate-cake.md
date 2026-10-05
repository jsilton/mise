# Blackout Chocolate Cake: whole-recipe editorial review

Date: 2026-10-05. Status: accepted after independent challenge and complete root inspection; production verification pending. Input commit: `e922e95ee275aee6289e7225914045d273154791`; SHA-256: `6d0707bf0d822275053fc815e5ce7e4c0fdf40ccb1a2342381253683f2e45fff`. No physical cooking test occurred.

## Decision and four-lens review

Practicality: this is a rich three-layer project with a real cooling/chilling dependency. Tradition: credit the existing Pinch of Yum source and retain its chocolate-coated identity. Technique: cocoa temperature, complete layer cooling and frosting firmness control assembly. Balance: keep yogurt tang, cocoa, espresso, rich frosting and chip contrast rather than “lighten” them.

## Consequential findings

- **Frosting and coating recovery.** Before: No frosting/chip quantities; step 6 merely requests ganache or cream-cheese frosting. After: Restore 1 1/2 cups butter, 8 oz cream cheese, 1 1/2 cups cocoa, 1 tbsp vanilla, pinch salt, 7 cups powdered sugar, 1/4 cup heavy cream and 3–4 cups chocolate chips as separate components. Evidence/applicability: Saved original 045e5ba2 and deletion patch 9002a113; current B independently matches all recovered quantities. Confidence/limits: High for provenance and exact recovery; physical coverage remains untested.

- **Intent audit.** Before: Automated January refinement deletes the required frosting and chip ingredients. After: Propose recovery because no subsequent individual review or household formula reduction was found. Evidence/applicability: Complete committed history retained; pending register; Oct5 Paprika commit changes attribution/drizzle only. Confidence/limits: High that no later in-repository instruction is present; cannot infer undocumented native edits.

- **Hot-cocoa mixing.** Before: A two-minute bloom is followed directly by eggs with the other wet ingredients. After: Cool the cocoa mixture to lukewarm before adding eggs; retain the existing hot-cocoa variant. Evidence/applicability: Current method heat dependency; CC corroborates warm rather than boiling batter liquid in a different formula. Confidence/limits: High for local egg-setting risk; no exact cooling time invented.

- **Assembly and storage.** Before: “Cool completely” followed by unspecified frosting; no chill/storage plan. After: Restore measured frosting, chill the assembled cake for 30 minutes, press on chips and refrigerate perishable frosting with cumulative handling limits. Evidence/applicability: B/saved original assembly; FDA/USDA handling. Confidence/limits: High for source chill and general handling; shelf allowance is conservative, not validated water-activity testing.

- **Timing/nutrition.** Before: 3 hr and legacy nutrition attached to a cake missing its frosting. After: About 4 hours including complete cooling, assembly and chill; remove unsupported nutrition. Evidence/applicability: Complete graph and formula recovery; no new nutrient calculation. Confidence/limits: Moderate for schedule; high for removing unsupported numbers.

Full exact before/after authored fields and method, ingredient ledger, confidence and unresolved questions are in [the complete review JSON](blackout-chocolate-cake.json). Source IDs and applicability are in [the primary-source packet](../editorial-campaign/2026-10-05/baking-sources.md).

## Complete frozen-input ingredient ledger

Every measured input is accounted for below; compound entries are split without guessing quantities. The recipe-specific JSON records the proposed shares and preparation strings.

| Exact input quantity/preparation                  | Current method destination         | Proposed ingredient references |
| ------------------------------------------------- | ---------------------------------- | ------------------------------ |
| 3 cups All-Purpose Flour                          | dry, step 3                        | cake.flour                     |
| 3 cups Granulated Sugar                           | dry, step 3                        | cake.sugar                     |
| 1 1/2 cups High-Quality Unsweetened Cocoa Powder  | bloom, step 1                      | cake.cocoa                     |
| 1 tbsp Instant Espresso Powder (The depth secret) | bloom, step 1                      | cake.espresso                  |
| 1 tbsp Baking Soda                                | dry, step 3                        | cake.baking-soda               |
| 1 1/2 tsp Baking Powder                           | dry, step 3; prior repair retained | cake.baking-powder             |
| 1 1/2 tsp Sea Salt                                | dry, step 3                        | cake.salt                      |
| 4 large Eggs                                      | wet, step 2                        | cake.eggs                      |
| 1 1/2 cups Full-Fat Greek Yogurt                  | wet, step 2                        | cake.yogurt                    |
| 2 cups Boiling Water (for blooming)               | bloom, step 1                      | cake.water                     |
| 1/2 cup Vegetable Oil                             | wet, step 2                        | cake.oil                       |
| 1 tbsp Vanilla Extract                            | wet, step 2                        | cake.vanilla                   |

Additional explicit entries:

- cake.pan-fat: for greasing the pans and parchment; destination prepare. Previously implied preparation/garnish allowance; no new measured edible quantity.
- frosting.butter: {"amount":"1 1/2","unit":"cup"}; destination frosting. Recovered measured component or preserved drizzle allowance.
- frosting.cream-cheese: {"amount":8,"unit":"oz"}; destination frosting. Recovered measured component or preserved drizzle allowance.
- frosting.cocoa: {"amount":"1 1/2","unit":"cup"}; destination frosting. Recovered measured component or preserved drizzle allowance.
- frosting.vanilla: {"amount":1,"unit":"tbsp"}; destination frosting. Recovered measured component or preserved drizzle allowance.
- frosting.salt: a pinch; destination frosting. Recovered measured component or preserved drizzle allowance.
- frosting.sugar: {"amount":7,"unit":"cup"}; destination frosting. Recovered measured component or preserved drizzle allowance.
- frosting.cream: {"amount":"1/4","unit":"cup"}; destination frosting. Recovered measured component or preserved drizzle allowance.
- finish.chips: {"amount":3,"max":4,"unit":"cup"}; destination chips. Recovered measured component or preserved drizzle allowance.
- finish.drizzle: for melting and drizzling; destination drizzle. Recovered measured component or preserved drizzle allowance.

All proposed measured amounts have a single consuming stage or a documented proportional allocation, with no unassigned or multiply consumed amount. Serving allowances remain unmeasured.

## Ratios, yield, pan capacity and scaling

Cake quantities remain exactly as the frozen input: 3 cups flour, 3 cups sugar, 1 1/2 cups cocoa, 4 eggs, 1 1/2 cups full-fat Greek yogurt, 2 cups water and 1/2 cup oil, with both existing leaveners. The high soda and sugar amounts match the saved/source formula and are not normalized. Restored frosting and 3–4 cups chip coating retain deliberate richness. Ten portions is the frozen-input serving target, not a weighed yield; the publisher originally says 8–10 large slices. Use three matching 9-inch pans. No pan depth or batter mass invented.

Written for three 9-inch round layers and their frosting. Make separate batches to preserve layer depth and coating coverage; do not enlarge the batter in the same pans.

## Process and timing graph

Oven/pans → hot-cocoa mix → cool to lukewarm → wet ingredients and dry mixing → combine/divide → 30–35-minute bake → brief pan cool → complete rack cooling → frost/stack → 30-minute refrigerator chill → chips → optional drizzle/service. Make frosting during rack cooling; 45 minutes is active-work allowance including assembly, not a complete elapsed promise. About four hours assumes all layers bake together; extra batches extend it.

Storage is preparation-specific in the proposed learning fields. Perishable frosting/cream handling uses FDA limits; conservative refrigerated leftover allowances use USDA general guidance, not a formula-specific shelf-life study. Plain muffin guidance does not apply FDA perishable rules indiscriminately.

## Source disagreements and preserved history

B uses ordinary water in a single mixing stage; Mise later introduced boiling-water blooming. Preserve the variant but resolve its temperature dependency. The source rolls cake between foil-wrapped cardboard discs to attach chips; pressing chips directly against the sides preserves the coating without making rolling necessary. Keep the existing ganache alternative and optional drizzle, but identify that ganache needs its own complete formula and coverage. Do not borrow another cake’s ganache quantities.

miseId preserved; title preserved; source preserved; sourceUrl preserved; pairsWith preserved; aliases preserved. Defining ingredients and deliberate richness remain; accepted prior allocation, ingredient and broiler repairs survive. Baseline nutrition is removed, never recalculated. No other recipe or variant is consolidated.

## Relationships and validation

All original pairsWith links are preserved and resolve. Their many dessert-on-dessert links are weak serving suggestions rather than evidence of a composed menu. No composed meal source contains any of these six slugs; there is no dependent meal certification to change. Structured formula schema, exact ingredient shares, generated ingredients/yield/directions, checkpoint ranges, internal links and focused recipe lint passed. Full build/export/native-library checks are root’s integration work. Proposal fields do not count as an accepted review or kitchen-tested recipe.

## Kitchen questions

- Measure actual pan fill, layer yield and doneness in the three existing 9-inch pans.
- Check whether the entire recovered frosting batch gives the intended filling/coating thickness and how much of the 3–4 cup chip allowance adheres.
- Assess the existing boiling-water variant alongside the source’s plain-water method without assuming they produce identical crumb.

## Independent scaling correction

Original ingredient quantities, formula yield, identity, pan dimensions and recovered additions preserved. Authored formula steps and/or learning.before were corrected before regenerating ingredients, yield and complete directions together. See per-recipe JSON findings for exact text. Candidate SHA-256: ce2aa9ed58ca9d862f3332d780212712ee832fa8b76057465d7d482a25743f5e. Ingredient/yield arithmetic unchanged; original counts are context rather than a forced scaled count. No kitchen test.

## Integration acceptance

Independent final challenge: [six-recipe acceptance](../editorial-campaign/2026-10-05/baking-independent.md). Root inspected complete source diffs, retained native/Git originals, ratios, ingredient preparation/allocation/destinations, geometry, doneness, elapsed time, storage, scaling and linked meals. Accepted source SHA-256: `728edbeb16d74965e9fe6fc5db7428afed422f140900102c31283d077e2b972d`. Implementation and production verification are tracked separately in the coverage matrix. No physical kitchen testing.

Root preserves the existing ingredient quantity controls. The proposed fixed override is not accepted; pan/layer/mound capacity cautions remain, and dimensions, heat and time do not multiply. [Exact root correction](./blackout-chocolate-cake.json).
