# Structured recipe release — 7 September 2026

Implemented component-owned ingredient quantities, explicit step allocations, generated directions/yields, a combined shopping list and compile-time reference/drift validation. Generated Markdown remains compatible with existing exports and search. Two migrated recipes are examples of the format, not newly certified full editorial reviews.

Breakfast carrot cake: preserve all ingredient quantities; make 250 g explicit, treat the original two-carrot approximation as original-batch context, generate dry-mix destinations including both leaveners. Correct 375°F conversion to 190°C; select the existing parchment option instead of introducing unlisted pan grease. Remove the unsupported requirement that all sugar dissolve in the wet mixture; use blending/froth cue. No new culinary formula or test claim.

Chocolate chip cookie cake: preserve full butter/sugar/chocolate/candy quantities, express 2 cups plus 2 tbsp flour exactly as 2 1/8 cups, separate existing 1/2-cup dough candy and 3/4-cup topping allocation, and combine those to 1 1/4 cups in the shopping list. Split the existing cream/add-eggs operation into separate generated steps. Preserve 375°F and 20–25-minute bake. Retain the original 14-inch round pan as the clear starting equipment rather than an unspecified large sheet pan; parchment used without inventing a grease amount. Scaling requires same thickness/additional pans.

Legacy parser compatibility: all six compact-unit lines and all31 conflicting equivalent lines identified in the one-time audit now change correctly at double scale. Added support for compact measured units, thousands-separated numbers, butter-stick equivalents and equivalent package counts; fixed per-package sizes remain unchanged. Unit regression cases distinguish these boundaries.

BBQ Pulled Pork Spread: encode its existing cooked-pork assumption in componentPreparation; sides explicitly start from scratch. The meal time and portions are not re-reviewed or silently changed. No new recipe/meal review status or kitchen-test status.

Remaining missing amounts and uncertain allocations from the audit remain unresolved. The structured model prevents representational drift; it cannot determine a delicious formula or the right culinary allocation. No agents or new research used. Validation and production verification recorded in the release response.

Validation:44 tests passed, including rejection of stale generated directions/ingredients;29/29 full QA checks; targeted lint for both migrated recipes; browser verification of two structured recipes, two legacy recipes and the prepared-pork meal. Combined shopping quantities, scaling/reset, checkboxes, cooking mode, mobile, print and JSON-LD passed. Mobile shopping view visually inspected. No new full editorial reviews or kitchen tests.
