# Yellow Cake with Chocolate Frosting: whole-recipe editorial review

Date: 2026-10-05. Status: accepted after independent challenge and complete root inspection; production verification pending. Input commit: `e922e95ee275aee6289e7225914045d273154791`; SHA-256: `adaa51bf97d813d848c7c5ffc2d47803a5c98ca62d3fad355f0185474bec3956`. No physical cooking test occurred.

## Decision and four-lens review

Practicality: a celebration project, with cooling explicitly on the clock and frosting prepared during that interval. Tradition: preserve the recognizable yellow-cake/chocolate-frosting identity without inventing family authorship. Technique: separate creaming, liquid incorporation, flour mixing and cooling controls. Balance: retain butter, oil, yolks, cocoa and optional flaky salt; avoid cutting sugar or richness.

## Consequential findings

- **Missing preparation/finish allowances.** Before: Current method lines and optional garnish use grease and flaky salt without ingredient entries. After: List separate unmeasured pan grease and optional flaky-salt allowance. Evidence/applicability: Internal ingredient ledger; saved original greases parchment. Confidence/limits: High; no edible amount guessed.

- **Cooling and bake endpoint.** Before: “Bake for 25 minutes … Let cool completely before inverting.” After: Check from 25 minutes through a 25–35-minute window; cool briefly in pans, release and finish on racks before frosting. Evidence/applicability: Y; CC. Latest Y permits a longer bake; saved original releases after a short pan cool. Confidence/limits: High for the sequence and wet-batter distinction; exact bake/cooling clock needs cooking.

- **Timing.** Before: “45 min plus cooling” After: “About 3 hours (includes cooling and frosting)” with overlap explained. Evidence/applicability: Complete method graph; planning allowance, not measured. Confidence/limits: Moderate for scheduling.

- **Source claims.** Before: Definitive family birthday cake, never-dry guarantee and professional-bakery density claim. After: Describe composition and actionable creaming/final-mixing controls. Evidence/applicability: No recorded source supports the old guarantees. Confidence/limits: High for removing unsupported claims without removing authorship.

Full exact before/after authored fields and method, ingredient ledger, confidence and unresolved questions are in [the complete review JSON](yellow-cake-with-chocolate-frosting.json). Source IDs and applicability are in [the primary-source packet](../editorial-campaign/2026-10-05/baking-sources.md).

## Complete frozen-input ingredient ledger

Every measured input is accounted for below; compound entries are split without guessing quantities. The recipe-specific JSON records the proposed shares and preparation strings.

| Exact input quantity/preparation             | Current method destination    | Proposed ingredient references |
| -------------------------------------------- | ----------------------------- | ------------------------------ |
| 2 2/3 cups All-Purpose Flour                 | dry mix, step 3               | cake.flour                     |
| 2 1/2 tsp Baking Powder                      | dry mix, step 3               | cake.baking-powder             |
| 1 tsp Salt                                   | dry mix, step 3               | cake.salt                      |
| 3/4 cup Unsalted Butter, room temp           | creaming, step 1              | cake.butter                    |
| 1/4 cup Avocado or Canola Oil                | step 1 after creaming         | cake.oil                       |
| 2 cups Granulated Sugar                      | creaming, step 1              | cake.sugar                     |
| 3 large Eggs + 2 large Egg Yolks             | step 2, one at a time         | cake.eggs; cake.yolks          |
| 1 cup Whole Buttermilk                       | alternating additions, step 4 | cake.buttermilk                |
| 1 tbsp Pure Vanilla Extract, for the cake    | step 2                        | cake.vanilla                   |
| 1/2 cup Unsalted Butter, melted              | frosting, step 6              | frosting.butter                |
| 2/3 cup Unsweetened Cocoa Powder             | frosting, step 6              | frosting.cocoa                 |
| 3 cups Confectioners’ Sugar                  | frosting, step 6              | frosting.sugar                 |
| 1/3 cup Whole Milk                           | frosting, step 6              | frosting.milk                  |
| 1 tsp Pure Vanilla Extract, for the frosting | frosting, step 6              | frosting.vanilla               |

Additional explicit entries:

- cake.pan-fat: for greasing the pans and parchment; destination prepare. Previously implied preparation/garnish allowance; no new measured edible quantity.
- frosting.finishing-salt: for finishing; destination assemble. Previously implied preparation/garnish allowance; no new measured edible quantity.

All proposed measured amounts have a single consuming stage or a documented proportional allocation, with no unassigned or multiply consumed amount. Serving allowances remain unmeasured.

## Ratios, yield, pan capacity and scaling

The existing cake keeps 2 2/3 cups flour, 2 cups sugar, 3/4 cup butter, 1/4 cup oil, three eggs plus two yolks and 1 cup buttermilk. Frosting keeps every amount, including its separate vanilla. Richness is deliberate. Two matching 9-inch layers divide the batch; no new batter mass or pan capacity is claimed. Current frosting quantity may give a thinner finish than “heavily” promises, so the method distributes the complete batch without guaranteeing decoration coverage.

Written for two 9-inch round cake pans. Make separate batches to keep the same layer depth; pan size and baking time do not multiply with servings.

## Process and timing graph

Ready softened ingredients → oven/pans and dry mix → butter/sugar creaming → oil → eggs/yolks/vanilla → alternate dry/buttermilk → divide two pans → 25–35-minute bake → roughly 10-minute pan cool → complete rack cooling → assembly. Frosting preparation overlaps rack cooling. Ingredient warming and any second oven batch are extra.

Storage is preparation-specific in the proposed learning fields. Perishable frosting/cream handling uses FDA limits; conservative refrigerated leftover allowances use USDA general guidance, not a formula-specific shelf-life study. Plain muffin guidance does not apply FDA perishable rules indiscriminately.

## Source disagreements and preserved history

Newest publisher includes 1/4 tsp soda and specifies two 8-inch pans; the committed original has baking powder only and permits 8 or 9 inches. Preserve current baking-powder-only formula and two 9-inch pans rather than import a later formula. The historical “about 25 minutes” remains the first check, not a guarantee.

miseId preserved; title preserved; source preserved; sourceUrl preserved; pairsWith preserved; aliases preserved. Defining ingredients and deliberate richness remain; accepted prior allocation, ingredient and broiler repairs survive. Baseline nutrition is removed, never recalculated. No other recipe or variant is consolidated.

## Relationships and validation

All original pairsWith links are preserved and resolve. Their many dessert-on-dessert links are weak serving suggestions rather than evidence of a composed menu. No composed meal source contains any of these six slugs; there is no dependent meal certification to change. Structured formula schema, exact ingredient shares, generated ingredients/yield/directions, checkpoint ranges, internal links and focused recipe lint passed. Full build/export/native-library checks are root’s integration work. Proposal fields do not count as an accepted review or kitchen-tested recipe.

## Kitchen questions

- Record actual layer depth, batter division, center doneness time and complete-cooling time in the existing 9-inch pans.
- Check whether the complete frosting amount covers the cake as intended and whether the historical baking-powder-only formula rises evenly.

## Independent scaling correction

Original ingredient quantities, formula yield, identity, pan dimensions and recovered additions preserved. Authored formula steps and/or learning.before were corrected before regenerating ingredients, yield and complete directions together. See per-recipe JSON findings for exact text. Candidate SHA-256: 94db3006ddca9b74fd63c11e8ebf83ceb157ee1482107f9ed9b2f7482db9e867. Ingredient/yield arithmetic unchanged; original counts are context rather than a forced scaled count. No kitchen test.

## Integration acceptance

Independent final challenge: [six-recipe acceptance](../editorial-campaign/2026-10-05/baking-independent.md). Root inspected complete source diffs, retained native/Git originals, ratios, ingredient preparation/allocation/destinations, geometry, doneness, elapsed time, storage, scaling and linked meals. Accepted source SHA-256: `c95da0c8a2574e1affba3151fe5fbca9b2fc46d614bcf023ce872fc4b43ad041`. Implementation and production verification are tracked separately in the coverage matrix. No physical kitchen testing.

Root preserves the existing ingredient quantity controls. The proposed fixed override is not accepted; pan/layer/mound capacity cautions remain, and dimensions, heat and time do not multiply. [Exact root correction](./yellow-cake-with-chocolate-frosting.json).
