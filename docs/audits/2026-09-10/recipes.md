# Recipe-integrity audit — 24-recipe diagnostic sample

Date: 2026-09-10. Source snapshot: `1c84b8bd9758f1f3d0bfdd18d6a745edbb118cd0`.

## Scope and method

I locked the sample from frontmatter and audit metadata before reading prose. It contains four recipes carrying each of six actual method tags (`bake`, `simmer`, `saute`, `roast`, `no-cook`, `grill`), balanced 12 reviewed / 12 pending. Tags overlap and do not identify one primary method. The sample includes both formula-format recipes and 12 deterministic selections with no current audit issues. Selection uses SHA-256 of `mise-recipe-integrity-2026-09-10-v1|family|status|slug`; complete hashes and rubric results are in `sample.json`.

I read all 24 recipes completely and consulted the 12 reviewed recipes' existing review records. Pass means no material internal defect appeared in this reading; it does not establish kitchen testing, flavor quality or safety certification.

| Dimension                    | Pass | Concern | Unknown |
| ---------------------------- | ---: | ------: | ------: |
| Ingredients / allocations    |   19 |       5 |       0 |
| Method dependencies          |   21 |       3 |       0 |
| Quantity / yield / equipment |   20 |       4 |       0 |
| Active / elapsed timing      |   20 |       3 |       1 |
| Observable cues              |   22 |       2 |       0 |
| Practical substitutions      |   13 |       1 |      10 |
| Attribution / identity       |   17 |       0 |       7 |

## Material findings

1. **High; confirmed — intact beef endpoint below federal guidance.** [beef-tenderloin-dogs-with-corn-relish.md:33](/Users/jsilton/Sites/mise/src/content/recipes/beef-tenderloin-dogs-with-corn-relish.md:33) specifies center-cut tenderloin pieces; `:62` directs 125°F plus a five-minute rest, with no validated alternative hold. FoodSafety.gov gives 145°F / 63°C plus three minutes for intact beef ([federal chart](https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures)). **Consequence:** the instruction is below the federal minimum, although this does not mean every execution causes illness. **Confidence:** high. **Next:** use a supported endpoint and kitchen-test texture.

2. **High; confirmed — shrimp formula and doneness cue are incomplete.** [sheet-pan-pineapple-shrimp-tacos.md:27-38](/Users/jsilton/Sites/mise/src/content/recipes/sheet-pan-pineapple-shrimp-tacos.md:27) omits garlic and salt used at `:61` and `:64`; tortillas, avocado and sour cream also lack quantities for six servings (`:22`). Step 3 relies on “pink” at `:63`, while FDA guidance calls for firm, pearly and opaque flesh ([FDA](https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely)). **Consequence:** shopping/scaling are underdefined and color is an incomplete endpoint. **Confidence:** high. **Next:** recover intended component quantities and add the federal observable cue. Time the workflow separately.

3. **High; confirmed — gefilte-fish timing and ingredient list cannot reproduce the method.** Metadata promises 105 minutes at [gefilte-fish-terrine.md:18-20](/Users/jsilton/Sites/mise/src/content/recipes/gefilte-fish-terrine.md:18), but `:66` requires at least four hours chilling. Oil, pepper, 3/4 cup water and lemon juice used at `:60-67` are absent from `:26-39`. **Consequence:** service planning is short by at least four hours and the shopping list is incomplete. **Confidence:** high. **Next:** include chilling in elapsed time and add every method ingredient with an allocation.

4. **Medium; candidate — heated plastic-wrap material is unspecified.** [gefilte-fish-terrine.md:63](/Users/jsilton/Sites/mise/src/content/recipes/gefilte-fish-terrine.md:63) seals food in unspecified plastic wrap for a 325°F water-bath bake. **Consequence:** a cook may choose wrap not approved for this use; this audit does not assert every wrap fails. **Confidence:** medium. **Next:** verify the exact material against primary manufacturer guidance or specify an oven-safe alternative, then test release and moisture retention.

5. **High; confirmed — shortcake adds unlisted or double-allocated ingredients.** [strawberry-rhubarb-shortcake-with-whipped-mascarpone.md:34-47](/Users/jsilton/Sites/mise/src/content/recipes/strawberry-rhubarb-shortcake-with-whipped-mascarpone.md:34) lists one sugar/liqueur measure, consumed by fruit at `:71`; `:73` requires another 1/4 cup sugar and liqueur splash. Salt, coarse sugar and thyme appear at `:69`, `:72` and `:75` without list entries. **Consequence:** the formula cannot be shopped, scaled or reproduced. **Confidence:** high. **Next:** split every component into measured allocations.

6. **Medium; candidate — shortcake elapsed time needs a parallel schedule.** [strawberry-rhubarb-shortcake-with-whipped-mascarpone.md:30-32](/Users/jsilton/Sites/mise/src/content/recipes/strawberry-rhubarb-shortcake-with-whipped-mascarpone.md:30) claims 60 minutes; `:70-72` requires a 30-minute chill, 20-minute fruit roast and 25-minute bake. The roast could overlap the chill, so prose alone does not prove the overrun. **Consequence:** service may be late. **Confidence:** medium. **Next:** document overlaps and time one complete preparation.

7. **Medium; confirmed — Chana Begoon omits cooking fat and seasoning.** [chana-begoon.md:28-39](/Users/jsilton/Sites/mise/src/content/recipes/chana-begoon.md:28) lists no oil or salt, though `:60` requires both; cilantro and lemon share an unmeasured entry at `:39` before `:65`. **Consequence:** roasting, sautéing, scaling and seasoning depend on guesses. **Confidence:** high. **Next:** recover intended oil and garnish quantities, make seasoning guidance explicit, then test coverage.

8. **Medium; candidate — patatas bravas may not satisfy its vegan tag.** [patatas-bravas.md:9-13](/Users/jsilton/Sites/mise/src/content/recipes/patatas-bravas.md:9) says vegan, while `:64` specifies unqualified mayonnaise. **Consequence:** the vegan filter may yield egg-based mayonnaise. **Confidence:** high that wording is ambiguous; medium that default execution conflicts. **Next:** require vegan mayonnaise or remove the tag; label an egg-based variation clearly.

Automated triage missed recipe-specific confirmed defects: [recipe-editorial-audit.json:428-443](/Users/jsilton/Sites/mise/docs/recipe-editorial-audit.json:428) reports only generic teaching/nutrition items for the beef recipe, and `:6594-6609` likewise misses the shrimp cue and ingredients.

## Strengths and limits

All 12 sampled reviewed recipes passed all seven dimensions on internal reading. They allocate divided ingredients, expose elapsed dependencies and capacity, and separate sensory cues from temperature endpoints. Strong examples include turkey checks in both breast sections, kabob raw-marinade handling, poke-bar seafood allocation/sourcing, and do chua's separate massage/brine sugar. Both formula recipes keep rendered ingredients, formula uses and directions aligned, though neither is individually reviewed.

This diagnostic sample covers 24 of 604 canonical recipes and cannot estimate a corpus defect rate. No recipe was cooked; nutrition, unsampled prose, browser output and historical reconciliation were out of scope. Physical yield, texture, flavor and exact active times remain unknown where noted.

- Full sample, hashes and rubric: [sample.json](/Users/jsilton/Sites/mise/docs/audits/2026-09-10/sample.json)
- Assessment: [recipes.md](/Users/jsilton/Sites/mise/docs/audits/2026-09-10/recipes.md)
