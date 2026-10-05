# Bounded recipe repair batch — October 5, 2026

Base: `cb9437bb211b1c40dd51b38fbe3dd46fc32ce384`. Eighteen recipes reviewed: fifteen narrow repair candidates, two no-change dispositions, one held recipe excluded from the cooking-content diff. This does not promote any recipe to a completed editorial status or change the review register. The current corpus has 643 recipes, not the historical 608.

## Accepted targeted repairs

The first three recipes and their safety/source checks are documented in [the companion review](three-recipe-repairs-2026-10-05.md): shrimp with black bean sauce, herby chicken meatball bowl and General Tso's tofu.

### Baking and sweets: four changes, one no-change

- **Apple cider cream pie:** [Food & Wine](https://www.foodandwine.com/recipes/apple-cider-cream-pie) supports both blind-bake stages at 425°F before the 350°F custard bake. Ingredient allocations and the reduction claim are clarified. Independent review also removes ambiguity about leaving custard at room temperature for hours: refrigerate promptly, then finish chilling. Legacy cookTime includes inactive time and the 225-minute total is not kitchen-validated; timing cleanup remains outside this narrow repair.
- **Strawberry cheesecake overnight oats:** [Wholefully](https://wholefully.com/strawberry-cheesecake-overnight-oats-recipe/) supports the listed maple syrup. The method now uses it; the pre-existing optional garnish is listed. Refrigerated hydration is retained.
- **Strawberry rhubarb shortcake:** [Baking the Goods](https://bakingthegoods.com/strawberry-rhubarb-shortcake-with-whipped-mascarpone/) supports the rectangle, six squares, chill and bake window. The 90-minute plan explicitly overlaps fruit roasting and chilling; it is an estimate.
- **Vegetable muffins:** [The Natural Nurturer](https://thenaturalnurturer.com/healthy-chocolate-muffins-with-veggies/) supports advance oven/pan preparation, alternatives and rack cooling. The unsupported three-month “perfectly” guarantee is replaced by the source's one-month freezing guidance. Existing packed greens and omitted carrots/vanilla are adaptations; yield and bake performance remain untested. Extra batches extend the clock.
- **Tomato/goat-cheese tart, no change:** the current repaired allocations and geometry align with [Food & Wine](https://www.foodandwine.com/recipes/tomato-and-goat-cheese-tart). The existing timing relies on overlap; no additional material repair was established in this pass.

### Vegetables, sides and soups: five changes

- **Fennel and carrot soup:** restore two carrots, supported by both [saved original](https://github.com/jsilton/mise/blob/045e5ba2/src/content/recipes/fennel-and-carrot-soup.md) and [Bon Appétit](https://www.bonappetit.com/recipe/fennel-and-carrot-soup). Butter allocation, herb timing, hot-blender precautions and elapsed-time allowance are clarified. Changed formula means old nutrition is removed rather than recomputed.
- **Fall harvest salad:** [publisher](https://munchingwithmariyah.com/roasted-fall-harvest-salad/) supports measured squash/kale and the missing toppings. Current spices and chickpea can remain adaptations. The 200 g cubed squash is a practical weighed target; original whole-versus-trimmed weight is unclear. Four side portions are not a claim of four main portions. Oil remains as-needed, dressing is optional at service, and stale nutrition is removed.
- **Sweet/white potato gratin:** the [saved original](https://github.com/jsilton/mise/blob/045e5ba2/src/content/recipes/sweet-and-white-potato-gratin.md) supplies the omitted rosemary/salt/pepper and mixed cream method without unlisted butter. Preserve all cream, potato and cheese amounts and Kaitlin Gwock attribution. Add rest time to the estimate and protect the top if it browns before the center is tender. Salt crystal type remains unspecified; old nutrition is removed.
- **Potato-leek soup:** retain the one-pound potato quantity in the [saved original](https://github.com/jsilton/mise/blob/045e5ba2/src/content/recipes/instant-pot-potato-leek-soup.md), although the [current publisher](https://www.simplyhappyfoodie.com/instant-pot-potato-leek-soup/) differs. Restore white leek parts and resolve the contradictory browning instruction. Existing full natural release, device instructions and recent attribution notes are preserved. Total time includes pressure buildup/release as a variable allowance.
- **Smashed potatoes:** the complete existing method itself establishes a timing omission: water heat-up, boiling, drying and roasting cannot reliably fit the old clock. The revised allowance is explicitly variable. Preserve quantities and avoid crowded trays; no original author is invented.

### Proteins: three changes, one no-change, one hold

- **Chicken/white-bean enchiladas:** [Skinnytaste](https://www.skinnytaste.com/chicken-and-white-bean-enchiladas-with/) supports cumin and eight 8-inch flour tortillas. Prepare sauce before allocating it to filling/base/top. Current shortcut sauce and larger chicken amount remain adaptations. The filling center, not bubbling sauce alone, must reach 165°F. A corn-tortilla option needs separate size/capacity testing.
- **Japchae:** repair the existing ingredient ledger (cornstarch, sesame-oil division, remaining garlic, scallions) without inventing provenance. [Maangchi](https://www.maangchi.com/recipe/japchae) is an independent technique comparison, not this recipe's source. Beef is cooked before the brief final toss; storage and reheating are bounded. Estimated timing and physical yield remain untested.
- **Abruzzi-style lamb sauce:** the [saved original](https://github.com/jsilton/mise/blob/045e5ba2/src/content/recipes/pasta-with-abruzzi-style-lamb-sauce.md) establishes the oil and serving cheese. Retain its lamb/wine amounts rather than imposing the later [publisher version](https://www.foodandwine.com/recipes/pasta-abruzzi-style-lamb-sauce). Pasta overlaps the simmer and firm shoulder gets additional simmering time.
- **Beef tenderloin dogs, no change:** the current recipe already states 145°F plus five-minute rest. The historical safety finding is resolved. This disposition does not endorse the unrelated Chef's Note mustard-seed mismatch.
- **Pressure-cooker Bolognese, held and unchanged:** the saved Richard Blais source uses a stovetop pressure cooker; current Mise silently uses generic electric Sauté/High Pressure. Added oil or a longer time estimate cannot validate the thick-sauce conversion. Model, operating pressure, minimum liquid and burn behavior remain unresolved. No guessed water amount, compatibility claim or revised cooking method is included in this batch. A separate restoration may correct the equipment identity while still retaining a compatibility hold.

## Safety, preservation and confidence

[FoodSafety.gov's cooking chart](https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures) supports the temperature endpoints. [USDA safe handling](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/steps-keep-food-safe) supports prompt refrigeration and 165°F reheating; primary indexed text was used when a direct USDA page failed.

Confidence is high for the narrow missing-ingredient, allocation, source-restoration and safety-wording repairs. Planning times, finished yields, texture, salt and adapted formulas still require cooking. No nutrition, taste or kitchen-testing certification is made. Existing source fields, unrelated recipes, native Paprika verification records and prior export UIDs are preserved. No publication is part of this local review.

## Integrated validation

- 215/215 Node tests pass. Seven additional batch regressions accompany the first three targeted tests. The old soup-attribution assertion now checks the preserved contributor attribution rather than claiming the grandfather as the reader's.
- Aggregate QA passes 30/30, including the production build. All 643 recipes validate; all 15 changed recipes pass focused recipe lint. Formula compilation checks all 10 structured recipes.
- ESLint has zero errors and the same two unrelated warnings. Culinary QA runs successfully with existing corpus-wide advisories; it is not an all-recipes culinary sign-off.
- Built-link QA checks 758 pages and 11,770 internal anchors with zero missing destinations. All 15 affected recipe pages contain their updated methods and ingredients.
- All three exports validate against 643 recipes. Exactly 15 JSON-LD objects and 15 Paprika archive entries change semantically; every prior Paprika UID and unaffected entry payload is preserved. The held Bolognese, both no-change recipes and all other recipe files remain byte-identical to the base.
- Full changed-file formatting and diff-whitespace checks pass. No dependencies, production configuration, website code or schema are changed.
