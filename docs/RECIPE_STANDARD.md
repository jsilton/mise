# Mise recipe development standard

The site teaches cooking through recipes. A polished page, rich metadata, or a passing script is not evidence of a delicious or tested recipe.

## Recipe development contract

Each recipe needs individual review through practicality, cultural context, food science, and flavor balance. Preserve source and family attribution. Do not invent origins, claim authenticity without justification, or replace useful specificity with generic “chef” language.

The `learning` schema requires:

- `focus` and `outcome`: one transferable skill and concrete sensory success criteria.
- `techniques`: deliberately chosen lesson slugs from `src/data/techniques.ts`.
- `before`: preparation and equipment decisions that must happen before cooking starts.
- `checkpoints`: a valid numbered method step, an observable `cue`, and a specific `why`. The page places these beside the relevant step.
- `troubleshooting`: `problem`, likely `cause`, and actionable `fix`, including irreversibility where appropriate.
- `substitutions`: ingredient, alternative, and the effect on texture, flavor, timing, or dietary suitability.
- `timing`: honest elapsed time, dependencies, parallel work, batch capacity, and whether marinating, chilling, or resting is included.
- `storage`: preparation-specific storage and reheating guidance, sourced where safety is involved.
- `sources`: direct links supporting the actual scientific and safety claims, not merely prestigious publications or a generic home page.
- `review`: status and date. `kitchen-tested` requires a substantive `testNotes` record.

Reviewed recipes and individual findings are recorded in `docs/reviews/` and `docs/recipe-review-register.json`. They have been edited against written sources and checked for internal consistency; no kitchen test is claimed. The baseline nutrition fields were removed from reviewed recipes where ingredient quantities or formulas changed. Legacy nutrition data remains in other source files for review but is withheld from the public recipe template.

## Kitchen test record

Record date, cook, ingredient brands and weights, exact cut and dimensions, equipment and pan dimensions, starting conditions, actual active and elapsed times, measured temperatures where relevant, finished yield, sensory results, failures, adjustments, and whether the written version reproduces the result. Repeat in a second kitchen or with a second cook before making a strong reproducibility claim. An editorial review alone cannot advance a recipe to kitchen-tested.

## Working review queue

Run `npm run editorial-audit` to regenerate `docs/recipe-editorial-audit.json`. It covers every Markdown recipe and flags broken references, missing teaching detail, time inconsistencies, unsupported test labels, nutrition verification, and selected science or poultry-endpoint review signals. These are triage rules with false positives and false negatives. Review the ingredient and method context before editing. Absence of a warning does not certify safety or quality.

Prioritize:

1. Specific food safety and contradictory method claims, especially raw poultry, raw seafood, eggs, storage, and raw-contact marinades.
2. Ratios, yields, timing, allergen tags, and ingredient use.
3. Complete recipe-specific teaching and justified substitutions.
4. Actual kitchen tests, iterations, and photography of the real prepared dish.

Do not bulk-fill learning fields to raise a completion score. The internal `src/knowledge/technique-index.json` is now rebuilt only from explicitly reviewed examples in `technique-links.json`; its former broad keyword matches were discarded. Empty example lists represent unfinished review, not absent culinary coverage. The public lesson system uses explicit recipe links and exact cooking-method matches only. The legacy technique articles themselves still require scientific review.

## Validation

- `npm test`: regression checks for quantities, durations, editorial integrity, and review claims.
- `npm run editorial-audit`: full collection triage; integrity errors fail, unresolved reviews remain visible in the report.
- `npm run validate-recipes`: existing collection rules.
- `npm run qa`: production build and existing repository checks; any failed check now returns a failure exit code.
- Browser: search and combined filters, sorting reset, empty state recovery, recipe scaling, ingredient and step checklists, reload persistence, visible cook-mode exit, lesson links, disclosure controls, mobile overflow, keyboard focus, and print output.

The serving control intentionally leaves method prose unchanged. It scales recognized leading ingredient amounts and simple equivalent weights/alternatives, preserves package sizes and cut dimensions, and tells cooks that pan size, temperatures, and timing do not multiply. More complex ingredient strings still require judgment; migrate toward structured ingredient quantities as the collection is individually reviewed.

## Consolidation and coverage

`docs/recipe-review-baseline.json` preserves the original 612 recipe slugs. A removed duplicate must have an explicit alias, a working static redirect, an individual consolidation record, and no stale internal recipe or meal references. `node scripts/check-recipe-aliases.mjs` verifies those requirements against a completed build. `node scripts/recipe-review-register.mjs` refreshes the per-original-recipe status register. A merged original counts as considered only with a written decision; it does not become an additional reviewed canonical recipe.

Newly authored recipes are tracked in the register separately from the original baseline. Each needs its own individual review record; it must not reduce the original pending count.

## Batch publication and delegation

The user authorizes committing, pushing and deploying coherent verified batches throughout the project. Do not wait for the full collection. Give parallel reviewers bounded recipes and relationships, require source evidence and individual decisions, and evaluate their complete proposals before integration. Proposal files alone do not count as completed reviews. Verify local checks and the resulting production deployment for every release.

## Composed meal review

A meal review examines complete component recipes, amounts actually needed for the planned diners, included starch/sauce/vegetables, shared equipment, preparation dependencies, elapsed versus hands-on time, and flavor/texture balance. Record it under docs/meal-reviews. All required recipe components must have individual reviews before assigning the meal editorial label. The meal baseline preserves all 88 originals; check-meal-reviews.mjs refreshes the register and enforces structural prerequisites after building. Passing it does not replace the considered meal review or a physical service test.

Composed meal consolidation uses `src/data/meal-aliases.json`, a static meal redirect, and a considered decision in `docs/meal-reviews/<original-slug>.md`. All 88 original meal slugs remain in the immutable baseline. The register separates canonical editorial reviews, considered consolidations and pending originals. The meal check rejects missing originals, duplicate live sources, invalid targets or chains, unreviewed canonical destinations, missing records, stale content references and broken built redirects; it also verifies exclusion from the meal index and sitemap. A calendar-link correction does not count as an individual calendar review.

Recipes written for a fixed whole-bird size can declare `scaling: { mode: fixed, reason: ... }`. They display the stated batch and a recipe-specific reason instead of arithmetic quantity buttons. The reason also prints. This is an explicit geometry/equipment decision, not a substitute for reviewing yields or an automatic rule for every meat recipe.
