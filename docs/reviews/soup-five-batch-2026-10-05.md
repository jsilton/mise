# Five soup recipe reviews — 2026-10-05

Base: `ee9c707878074d7d56dcb3fb737afb537051aba5` (643 recipe files). Five bounded editorial reviews; no kitchen tests, taste certification, nutrition verification, export regeneration, publication, or global review-register changes. The legacy 608-recipe audit was a candidate finder only. Current source files were re-read before making changes.

## Evidence and method

Each recipe was compared with its matching record in the user's saved original Paprika archive (`original.paprikarecipes`, parsed `paprika.json`, the 2026-10-05 import). Recipe names used: Instant Pot Butternut Squash Soup; WONTON SOUP (馄饨汤); Hot and Sour Soup; Cream of Mushroom Soup; Jeri's Lentil Soup. These are historical provenance, not evidence that the present adaptations have been kitchen-tested. Current publisher pages were also read where available. Source differences alone did not trigger formula restoration.

## Pressure-Cooker Butternut Squash Soup

- Confirmed defect: the method requires celery but the ingredient list omits it. Both saved original and [Damn Delicious](https://damndelicious.net/2019/12/29/instant-pot-butternut-squash-soup/) specify one stalk/rib cut into one-inch pieces. Added it; confidence high.
- Removed the inapplicable grill tag. Kept the existing 12-minute pressure stage and full natural release, rather than restoring the original quick release.
- Disclosed pressure-build and full-release overhead in timing and the method instead of promising ready-to-serve soup in 45 minutes. [Instant Pot FAQ](https://instantpot.com/pages/frequently-asked-questions) confirms the countdown starts after pressure builds and natural release is appropriate for soup. Confidence high on the missing overhead; no universal total or measured yield claimed.
- Added controlled immersion-blender handling with the cooker off. Ingredient amounts otherwise preserved. Thickness and the 8-cup yield remain untested.

## Classic Wonton Soup

- Current method called for unlisted salt, white pepper, and chili oil. Both saved original and [Red House Spice](https://redhousespice.com/pork-wonton-soup/) identify broth seasonings and optional chili oil. Added separate broth/garnish entries and sealing water; split soy and wine into separate ingredient lines. Confidence high.
- Did not restore the source's additional filling salt/pepper: the adapted filling already contains soy sauce and this is not an ingredient-method contradiction. Broth salt is explicitly conditional on tasting the already seasoned dependency.
- Replaced float-only doneness with a thermometer endpoint and uncrowded batches; sliced bok choy is cooked to tender-crisp stems rather than assigning whole heads 20 seconds. [FoodSafety.gov](https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures) lists 165°F for stuffing containing meat. The selected 165°F endpoint is conservative for this filled parcel, not a claim that the original source prescribed it.
- Timing now says 40–45 minutes with prepared broth/wrappers and warns that extra batches extend it. This is an editorial planning estimate, not a timed test. The linked broth's separate preparation is excluded explicitly.

## Hot and Sour Soup

- Saved original supplies the missing two tablespoons of canola oil; [Food Network](https://www.foodnetwork.com/recipes/tyler-florence/hot-and-sour-soup-recipe-1914206) corroborates it. Confidence high.
- The saved original included a separate stock-making subrecipe; the current recipe uses prepared stock but retains its old 140-minute cooking time. Set a 25-minute soup cook / 55-minute total, including the 30-minute mushroom soak and excluding stock/char-siu preparation. Confidence high on the mismatch, moderate on the untested replacement estimate.
- Added a fully set egg / 160°F soup check, with a gentle return to heat if needed, using the [FoodSafety.gov egg-dish endpoint](https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures).
- Preserved the already repaired slurry measurement and current seasonings. Source-derived “1 square” tofu remains imprecise and should be weighed in a later kitchen test; no unsupported package-size assumption was introduced.

## Cream of Mushroom Soup

- Saved original has the current 16-ounce cremini / 2/3-cup shiitake / dried-thyme formula. The [current Delish page](https://www.delish.com/cooking/recipe-ideas/recipes/a55765/cream-of-mushroom-soup-recipe/) differs and allows a longer browning stage. Did not impose those changed quantities or remove the adapted sherry finish.
- Added moisture-evaporation and golden-color cues, flexible browning time, and 40–50-minute overall planning time. Confidence high that pan moisture prevents a guaranteed eight-minute sear; exact timing remains untested.
- Replaced unrestricted countertop blending with model-approved hot-liquid temperature, fill and venting limits; prohibited hot soup in sealed personal-blender cups. [Vitamix FAQ](https://www.vitamix.com/us/en_us/owners-resources/product-support/faqs) distinguishes full-size hot-liquid containers from unvented personal cups. Immersion instructions follow the [manufacturer manual](https://www.vitamix.com/content/dam/vitamix/files/product-manuals/Immersion%20Blender%20Owner's%20Manual.pdf): remove from heat, start low, submerge the guard, stop before lifting. Confidence high; users must follow their own model's instructions.

## Jeri's Lentil Soup

- Saved Pat Miller original explicitly specifies five hours on LOW followed by 30 minutes with wine/parsley. Current header omitted the final cooking interval and sauté overhead. Set approximately 5 hours 40 minutes cooking / 5 hours 55 minutes total with clear variable-tenderness language. Confidence high on arithmetic; actual lentil/cooker timing remains variable.
- Removed the unsupported three-hour HIGH shortcut; this does not prove it would fail, only that it is not established by the saved source. Retained the documented LOW route.
- Preserved fresh parsley, finishing acid, optional blending, and the family provenance. Did not force the original dried-parsley formula back into the adaptation.
- Corrected the promise that blending keeps carrot slices intact and supplied off-heat blending handling. No source URL exists for this personal gift recipe; public recipe matching would be weaker evidence than the saved original.

## Limits and verification

Legacy nutrition blocks were not recomputed or certified. These repairs do not establish full teaching-template completion, optimal flavor ratios, accurate portions, or kitchen testing. No previously repaired shrimp-wonton or chicken/wild-rice recipe was changed. Fennel/carrot, potato/leek, ramen, and held Bolognese were excluded.

- Focused regression tests: 5/5 passed.
- Five-file recipe lint: passed.
- Corpus recipe validation: passed (643 recipes); existing missing-image warning remains.
- Full repository test suite: 220/220 passed.
- Formula consistency check: passed (10 structured recipes checked).
- Build, exports, and global review-register commands were not run in this bounded worker.

## Independent integration review

Original Paprika and publisher comparisons corroborated the targeted quantities and methods. The saved family lentil record was read directly rather than matched to an unrelated public recipe. The mushroom source's changed modern formula was not imposed on this saved adaptation.

Two additional wonton corrections emerged: the teaspoon-per-wrapper instruction was not present in the saved source and did not account for all filling; use the full mixture across the small wrappers with secure-seal guidance instead. Small 3.5-inch wrappers match the source's approximate forty-piece yield. The broth is now brought to a boil before bok choy is instructed to cook in it, removing a step-order ambiguity. Exact yield and assembly duration remain variable.

## Combined soup-and-salad integration

Final base: `858ff2c5458cac2663ba21fb8d1867d1986ec346`, after both preceding recipe waves. Ten recipes were considered: nine targeted repair candidates and one kimchi hold. All twenty-eight preceding recipe repairs remain unchanged. Kimchi cooking content remains byte-identical; its separate hold record describes the unresolved source/salt/preservation claims.

Independent inspection of UC ANR Publication 8151, page 1, verified the cooked-sprout endpoint and its particular applicability to mung sprouts. Current FDA guidance still supports thorough cooking and high-risk avoidance of raw/lightly cooked sprouts. The soybean application is conservative guidance, not a validation of this pot/timing combination. A longer cook may soften the original blanch-style texture; no guaranteed pathogen elimination or unchanged sensory result is claimed.

The new salad learning sections originally required an editorial-status field under the existing schema. Their proposed promotions were rejected. Useful timing, storage and source notes were moved into ordinary recipe prose instead; no schema, global register or full-review status changes were made. The initial build failure from the missing required field was diagnosed and corrected before final validation.

Before the identity-scheme rebase, combined validation: 239/239 Node tests, 643-recipe validation, nine focused recipe lints, ten structured-formula checks, and aggregate QA 30/30 including production build pass. Nine rendered-content checks pass. Built-link QA checks 758 pages and 11,769 internal anchors with zero missing destinations. All three exports match 643 recipes; exactly nine JSON-LD objects and nine Paprika entries change, with every prior UID preserved. Formatting and diff-whitespace checks pass. ESLint retains two unrelated warnings; culinary QA retains corpus advisories. No interactive-browser or physical kitchen test, deployment or publication is claimed.

## Identity-scheme rebase

Before publication, main advanced to `322c9b0f250155fb35eabf1c52fa1da17b0a8c79`, adding permanent internal recipe identities and private Paprika export storage. This candidate was rebased again onto that commit. All newly added identity fields are preserved; no registry or identifier is placed in the patch or published assets. The documented recovery command reconstructs the ignored private registry from the repository's verified native export, confirming 643 complete recipes, three drafts and 653 native identities. The new exporter uses those pinned identities directly. The older tracked Paprika archive is unchanged; the new archive stays in ignored private storage, reducing this publication diff to nineteen files.

Final validation on the identity-aware base: 245/245 Node tests, 643-recipe validation, nine focused lints, ten formula checks and aggregate QA 30/30 including build pass. All nine rendered-content checks pass; 758 pages and 11,769 internal anchors have no missing destinations. All three exports validate; the private Paprika archive uses 643 recovered primary IDs. Privacy QA confirms built assets contain no private recipe IDs or native Paprika archives. Every source identity and all 634 non-target recipes are unchanged.
