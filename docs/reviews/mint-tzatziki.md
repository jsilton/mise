# Mint Tzatziki with Honey: individual editorial review and extraction decision

Date: 2026-09-06. Applied after independent challenge and root evaluation; no physical kitchen test.

## Evidence and identity

Read the current lamb burger, its complete individual review, current dill tzatziki and its review, current recipe standard, CLAUDE.md, household preferences, complete Greek Night meal and its individual review, and the four calendars referencing that meal (2026-w02, w05, w06, w07). Searched incoming burger references and all existing tzatziki references. Followed the complete available Markdown history and then deliberately crossed the Astro migration boundary to read the original HTML export and its history. Merely stopping at the review's parent commit would miss the original source attribution and original salt type.

Historical evidence was read into `/tmp/mise-mint-tzatziki-review/history/`; the durable source is the repository history at the commits and paths below:

- `burger-history.patch`: complete available `git log --all --follow -p` for the current burger path, from e956346bb8c94d0302d249fbfb32b92198d5d795 back to 045e5ba276b560e4f7d3d485b4860f610d295bac.
- `first-markdown.md`: full recipe introduced at 045e5ba2.
- `original-export.html`: full pre-migration file from `045e5ba2^:My Recipes/Recipes/Greek-Style Lamb Burgers with Yogurt-Cucumber Sauce.html`.
- `pre-astro-history.patch`: complete available history of that original export, introduced at b7ae012d and removed during migration.

No honey occurs in any of these tracked versions. This cannot prove what the household actually mixed or establish that an untracked earlier recipe had none. The user's current recollection/preference is sufficient to include honey, but its quantity must be recorded as development, not recovery. The original export credits Foodandwine.com and links to https://www.foodandwine.com/recipes/greek-style-lamb-burgers-with-yogurt-cucumber-sauce. It gives no named author. The online page returned a non-retryable tool access error; do not claim that its current text was verified or invent a named source author.

## Formula audit

| Ingredient | Earliest saved export                   | Proposal                                                            | Reason / limit                                                                                                                                                                                                                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Yogurt     | 1 cup plain whole-milk yogurt           | 1 cup (240 g) plain full-fat Greek yogurt                           | User explicitly prefers Greek; carries the current measured cup. Brand-dependent mass remains a practical equivalent.                                                                                                                                     |
| Cucumber   | 1/2 seedless cucumber, finely diced     | 100 g English cucumber, fine dice                                   | Preserves diced texture and the current reviewed weight. This is a chosen consistent portion, not a recovered weight of the original half cucumber.                                                                                                       |
| Mint       | 1 tbsp finely chopped mint              | 1 tbsp                                                              | Preserved.                                                                                                                                                                                                                                                |
| Olive oil  | 2 tbsp extra-virgin olive oil           | 2 tbsp                                                              | Restores original amount; current review halved it without explaining a household flavor preference. Richness is part of this sauce.                                                                                                                      |
| Honey      | Absent                                  | 1 tsp (7 g)                                                         | User-requested ingredient; modest proposed starting quantity, explicitly disclosed. No automatic extra sweetener.                                                                                                                                         |
| Garlic     | 1 clove, minced                         | 1 small clove, finely minced                                        | Preserves preparation; choosing a small clove controls undefined variation without adding acid.                                                                                                                                                           |
| Salt       | 1/2 tsp unspecified kosher salt         | 1/2 tsp Diamond Crystal or 1/4 tsp fine salt, half first then taste | Salt brand was unknown; this is a stated seasoning choice, not an exact original mass conversion. Whole DC allowance is about 1.4 g for roughly 380 g sauce. Later 3fc97dc3 changed original kosher to sea salt; do not treat that as baseline certainty. |
| Pepper     | Freshly ground black pepper, unmeasured | Omitted                                                             | Original pepper really was present; omitting it follows the user's current seven-ingredient preference. It was not solely invented by the recent review.                                                                                                  |
| Lemon      | Absent                                  | Omitted                                                             | Added in the recent editorial review; neither needed to provide all acidity nor requested by the user. Yogurt supplies tang.                                                                                                                              |

Estimated mass is roughly 375–385 g before handling losses: 240 g yogurt + 100 g cucumber + about 27 g oil + 7 g honey + garlic, mint and salt. Approximately 1 1/2 cups is plausible, not physically measured. The honey is under 2% of that estimated mass; the intended taste is savory mint yogurt with restrained sweetness. Do not claim acidity neutralization or a preservation effect. Do not replace the original two tablespoons of oil with a lower quantity as an unrequested health improvement.

Fine dice and towel surface drying preserve the original crunch. No salt-drain/squeeze routine is imported from the grated-cucumber dill sauce; surface drying cannot prevent all water release. Thick strained yogurt is the main consistency decision. The proposal allows immediate use and refrigeration while cooking the meal; no unsupported mandatory thirty-minute flavor wait. Fifteen minutes is an editorial workflow allowance including washing, drying, dicing, chopping, mixing and tasting. It does not include a separate chill requirement.

All seven ingredients are used in the three method steps, with both salt portions accounted for. Recipe contains milk, is vegetarian, and is not dairy-free or vegan. Gluten-free/nut-free refer to listed ingredients; no unsupported nutritional benefit is asserted. Low-fat substitution retains the measured oil and notes milk; Persian cucumber substitution keeps the weighed portion and fine dice. Troubleshooting distinguishes watery sauce from strong garlic and explains that dilution increases yield rather than pretending the seasoning can be reversed invisibly.

## Composability and duplication

Create exactly one new sauce at `mint-tzatziki`, title **Mint Tzatziki with Honey**. Label origin/cuisine Greek-inspired household variation; avoid an authenticity claim or invented regional history. It is distinct from `tzatziki-sauce`: mint, diced cucumber, honey, 240 g yogurt and 2 tbsp oil versus dill, drained grated cucumber, lemon, 480 g yogurt and 2 tbsp oil. Do not merge or redirect either. Rename the existing recipe's display title to **Dill Tzatziki**, retain its slug and formula, and use a cross-link in the new sauce prose for deliberate substitution. A new dill file would be a needless duplicate.

The burger now consumes `1 1/2 cups prepared Mint Tzatziki with Honey, approximately` and declares `usesBase: mint-tzatziki` alongside its pita dependency. Remove all inline sauce ingredients so shopping and preparation do not count them twice. Its first step prepares or measures this one batch; its fifth step stirs/tastes rather than adding lemon absent from the extracted sauce. Preserve the 680 g lamb, four breads, skillet oil, herb amounts, optional toppings, safe endpoints, two-batch workflow and 60-minute allowance. Fifteen-minute sauce preparation is included in the existing preparation allowance; refrigeration overlaps meat work. One full sauce batch yields considerably more than the initial 8–12 tablespoons spread inside four pitas; offer the remainder at the table rather than requiring all of it inside the breads.

The Greek Night meal retains one burger batch and one village salad; the sauce is already included in the main. The proposal adds an explicit link/approximately 1 1/2-cup amount in its explanation and first preparation step, without a second `sauce` frontmatter card. Keep 75-minute elapsed/55-active estimates, existing couscous substitution and four-person portions. Adding a new sauce definition does not create another preparation job. Calendars and incoming burger pairings need no slug edits.

## Science and safety evidence

- https://www.foodsafety.gov/keep-food-safe/4-steps-to-food-safety — accessed in full 2026-09-06; supports washing produce, separating ready-to-eat food from raw meat, refrigeration at 40°F / 4°C or below, and two-hour/one-hour-above-90°F handling limits.
- https://www.foodsafety.gov/blog/food-safety-and-eating-out — accessed in full 2026-09-06; supports general 3–4-day leftover use. The proposed mixed-sauce limit applies that general guidance conservatively, not a validated shelf-life study of this exact yogurt sauce. Earlier ingredient limits still govern, and making burgers later does not restart the sauce date.
- Archived Food & Wine attribution as described above; current online content inaccessible in this tool. Formula recovery relies on local primary historical evidence, not online confirmation.

Sensory balances, approximate yield and workflow time are editorial development, not experimentally established conclusions. No chemistry claims or physical kitchen-test status are introduced.

## Kitchen-test questions

1. With the household's yogurt brand, does 100 g cucumber reproduce the preferred cucumber presence, or was its remembered half cucumber larger? Record actual trimmed weight rather than assuming a conversion.
2. Measure finished mass and volume; verify one batch fills four pitas at 2–3 tbsp each with the expected table extra.
3. Is exactly 1 tsp honey perceptible enough to soften tang without tasting sweet? Compare only through an actual documented tasting; do not describe this proposed amount as the recovered favorite formula.
4. Evaluate the original 2 tbsp oil with full-fat Greek yogurt, and garlic/salt immediately, during the burger's cooking interval and after overnight refrigeration.
5. Record water release and spoonability after the holding period and following day; confirm the fine-dice texture and fifteen-minute active preparation allowance.
6. Verify the unchanged 60-minute burger / 75-minute composed meal workflow with the extracted recipe open alongside the main.

## Root evaluation and final integration

Root read both current sauce/burger recipes, their full individual records, Greek Night and its record, the historical pre-review burger, complete extraction drafts, history findings and independent challenge. Restored the original two tablespoons oil, preserved fine cucumber dice and mint, and implemented the user’s little-honey preference with the explicitly editorial one-teaspoon starting dose. No recovered honey quantity or kitchen-tested favorite formula is claimed. Root independently opened official handling guidance; the recovered Food & Wine URL remained inaccessible.

The sauce yield now starts with a scalable 1 1/2 cups, approximately; four-pita serving guidance stays in the method. Removed unscaled secondary batch and yogurt quantities from the burger’s measured ingredient line. Directions identify the original full-batch relationship. The Greek Night schedule consumes the sauce once through the main’s dependency and retains its existing total. Sauce storage dates run from mixing in sauce, main and meal. Display labels for the existing dill recipe were clarified where explicitly named; its formula and other meal quantities remain intact. Source and kitchen-test limits are preserved.
