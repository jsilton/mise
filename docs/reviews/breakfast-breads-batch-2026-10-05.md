# Breakfast and breads: bounded source review — October 5, 2026

Base: `cb9437bb211b1c40dd51b38fbe3dd46fc32ce384`, verified against GitHub main at the start of this pass. Five recipes reviewed, three narrow repair candidates and two no-change dispositions. This is not a kitchen test or promotion to full editorial-review status. The corpus remains 643 recipes. No shared audit/register, export, native Paprika archive, website code or configuration is changed by this patch.

## Evidence and disposition, 5/5

All five recipes have matching named records in the retained original native Paprika archive, `tmp/paprika-sync-2026-10-05/original.paprikarecipes`. Each original's ingredients, directions, notes, source and yield were read. Current publisher pages were checked on October 5 where a URL exists. The saved household version takes precedence when the publisher now differs.

1. **Anadama Bread — no change.** [Behr / Allrecipes](https://www.allrecipes.com/recipe/16245/anadama-bread/) and the saved original agree on all eight ingredient quantities. The current recipe retains cooked cornmeal, lukewarm cooling before yeast contact, two rises, a 9x5-inch pan and the 375°F bake. The current three-hour allowance accommodates its stated method. No material repair was established; this does not certify the inherited nutrition or legend.

2. **Banana Nut Bread — repair.** The saved Hamilton Family record explicitly creams butter and sugar, then adds eggs individually; Mise silently switched to melted butter. Restore the family method and its 9x5x3-inch pan while preserving the current ingredient amounts, author attribution, vanilla and seed option. The latter two remain disclosed adaptations. Include the stated bake range and full cooling in the planning allowance. The original smaller-loaf note remains qualified because dimensions are unknown. No public source was invented for this family recipe.

3. **Blueberry Pancakes — no change.** [PJ Hamel / King Arthur Baking](https://www.kingarthurbaking.com/recipes/blueberry-pancakes-recipe) supports the griddle setting, scoop size, berry allocation and cooking cues. The saved original specifies honey although its copied method says sugar; current Mise already resolves that conflict by mixing honey into the wet ingredients. Do not replace that saved preference with the current publisher's sugar. Twelve tablespoons of berries equals the listed three-quarter cup. The current timing is plausible for a griddle cooking several pancakes together; a small skillet takes longer. No material new repair was established. The existing rating remains untouched.

4. **Buttermilk Waffles — repair.** [Kristyn Merkley / Lil' Luna](https://lilluna.com/buttermilk-waffles/) and the saved original agree on all nine ingredient quantities and a ten-minute batter rest. Preserve those; replace steam-only classification, distinguish portions from machine-dependent waffle count, and budget sequential iron cycles rather than ten minutes for the entire batch. Follow the iron's fill/readiness instructions and check the center; steam alone is not the endpoint. Rack holding follows publisher guidance. The 45–60-minute total is a planning estimate and a small iron can take longer.

5. **Almond Zucchini Bread — repair with geometry limitation.** [Gina Matsoukas / Running to the Kitchen](https://www.runningtothekitchen.com/almond-zucchini-bread-paleo/) and the saved original specify squeezing excess water before measuring, not drying the shreds completely. Restore that distinction and full rack cooling before slicing, add missing author attribution, and treat bake time as a check point with center-doneness cues. Both sources omit pan dimensions, so none is invented. Preserve the inherited ten-slice estimate rather than adopting the current site's eight servings. The three eggs, almond flour and leavening remain unchanged; unknown pan dimensions and high-moisture loaf behavior still need a physical test.

## Scope and confidence

Source restorations are high-confidence. Timing ranges and cooling allowances are estimates, not measured kitchen results. There is no new meat, pressure-cooker or preservation instruction in this batch; uncooked egg/flour batter is not presented as ready to eat. No broad nutrition correction or health claim is made. Existing unverified nutrition remains subject to the site's existing withholding policy. No change was forced into the two recipes whose relevant mechanics already matched the evidence.

## Verification

- All 643 recipe sources pass validation; all three changed recipes pass focused recipe lint.
- Five targeted regression checks cover creaming/geometry, zucchini handling/cooling, waffle batch logic, unchanged ingredient ledgers and unchanged no-change dispositions.
- Native Paprika originals and verified snapshot remain byte-identical; exports are deliberately left for coordinated integration.
- No publication occurred in this review.
