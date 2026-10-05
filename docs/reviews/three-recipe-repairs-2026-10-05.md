# Three narrow recipe repairs — October 5, 2026

Independent source review and local validation, based on `cb9437bb211b1c40dd51b38fbe3dd46fc32ce384` (newer than the supplied `a340156c` base). The intervening Paprika verification changes and all existing attribution are preserved. This is a limited ingredient/method repair, not complete source restoration or a physical kitchen test.

## Findings

- Shrimp with black bean sauce: the [Woks of Life source](https://thewoksoflife.com/shrimp-black-bean-sauce/) confirms the missing oil, garlic and ginger amounts and the 2 1/2 tbsp starch to 2 tbsp water slurry. Add slurry incrementally, with dilution if necessary. Blanching is explicitly followed immediately by further cooking, and the next step correctly calls the pork blanched rather than cooked.
- Herby chicken meatball bowl: the [Palatable Life source](https://www.thepalatablelife.com/herby-chicken-meatball-bowl/) supports the restored component oil/spice quantities, keeping kale for assembly, and portioning all filling at approximately 2 tbsp each. Twelve logs would leave substantial mixture unused. The two roasting components now have separate texture endpoints; sweet potatoes should be tender, not merely described as crispy.
- General Tso's tofu: the [Woks of Life source](https://thewoksoflife.com/general-tsos-tofu/) confirms 1 1/2 tbsp slurry starch with 1 tbsp water, 1/2 tsp sesame oil, 1/2 tbsp wine and 1/3 cup frying oil. One tablespoon is reused after frying, not withheld before frying. The small slurry water quantity is faithful to the source; incremental thickening avoids assuming it must all be used. Broccoli tenderness is checked before returning the crisp tofu.
- [FoodSafety.gov](https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures) independently supports 165°F / 74°C for ground poultry, 160°F / 71°C for ground pork and egg dishes, and pearly/white opaque shrimp flesh. The egg-setting time and initial pork blanch are not substitutes for the final endpoints.

## Limits and preserved adaptations

Existing nutrition estimates were not recomputed or certified. These are not exact copies of the cited recipes: the bowl retains its existing simplified dressing, omitted seasonings and other adaptations; the tofu retains its larger ginger dose and extra-firm tofu; the shrimp retains other omitted seasonings. No unrelated recipe, family yield, scaling mode, attribution, published review status or completed-review count is changed. No kitchen-tested claim is made. No commit, push, GitHub mutation or publication is part of this local review.

The proposed changes are covered by `scripts/tests/three-recipe-repairs.test.mjs`. Final command results are recorded separately with the local validation deliverable.

## Final local verification

- 208/208 Node tests pass, including three new targeted regressions.
- Validation reads all 643 current Markdown recipes; no recipe validation failures. The older 608 count is not the current checkout count.
- Aggregate QA: 30/30 checks pass. Standalone Astro build passes.
- Built-link check: 758 HTML pages, 11,770 internal anchors, zero missing destinations. The three built recipe pages contain the corrected ingredients and methods.
- Formula compilation check: all 10 structured recipes current. These three repairs do not change structured formulas.
- Three targeted recipe lints pass. Repository ESLint has zero errors and two pre-existing warnings in unrelated files. Culinary QA runs successfully but still reports corpus-wide advisory findings; it is not a clean culinary certification.
- JSON-LD, Paprika and combined-text exports validate against all 643 recipes. JSON-LD changes only the three target objects. Paprika regeneration normally creates fresh UIDs; the candidate preserves all prior UIDs and unchanged entry bytes, with only the three repaired entries changed. Existing verified native Paprika library and sync records are untouched.
- Initial install/build attempts hit nonexistent cloud home directories. Writable temporary package/config locations and disabled telemetry resolved this; the final build and aggregate QA passed without production configuration changes.
