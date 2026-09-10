# Mise state and quality assessment

Date: 10 September 2026. Source revision: `1c84b8bd9758f1f3d0bfdd18d6a745edbb118cd0`, with the user's existing lockfile migration in progress. Assessment only: no recipe, website-code or review-status changes and no deployment.

## Overall assessment

Mise has functioning core website flows and a broad, connected recipe collection, with a confirmed meal-body link defect. Its principal quality risk is uneven recipe and meal-plan reliability: automated checks pass while specific ingredient and scheduling contradictions remain. Review status and rich metadata should not be treated as proof that a recipe works in a kitchen.

| Area                     | Assessment                                                                                                                          | Evidence and limits                                                                                                                                                                                                              |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Website                  | Core sampled flows function; ten meal-body links fail in generated routes; accessibility and performance coverage remain incomplete | Search/filter recovery, legacy scaling, cook mode, checklist persistence, sampled mobile layout and metadata inspected. Structured-format browser coverage is limited to observations explicitly recorded in the website report. |
| Recipe integrity         | Confirmed content defects remain despite passing automation                                                                         | Ingredient omissions, unclear allocations and mismatched meal/component plans; independent recipe sample reported separately.                                                                                                    |
| Corpus usefulness        | Broad coverage and working meal relationships; review depth remains uneven                                                          | 602 food recipes, 86 meals, ten public lessons; no missing meal-component targets in the inventory. Distribution alone does not establish usefulness for every household task.                                                   |
| Culinary reproducibility | Unknown                                                                                                                             | No recipes recorded as kitchen-tested; no physical cooking tests performed in this audit.                                                                                                                                        |

## Current inventory

- 604 canonical recipe records: **602 food recipes and two excluded craft records**.
- **225 editorially reviewed**, 379 pending/collection, zero kitchen-tested. The canonical denominator is 604; reviewed does not mean physically tested.
- **86 canonical meals: 47 reviewed and 39 pending**. Ten recipe aliases and two meal aliases preserve consolidated originals separately from canonical counts.
- Ten public lessons. The nine internal knowledge-technique entries are a separate inventory, not a count of public lessons.
- 589 recipes declare pair suggestions; 17 declare explicit base dependencies. Meals reference 149 unique recipes through 251 component references, with no orphan component targets found.
- Roles across all 604 records: 352 mains, 109 sides, 59 desserts, 43 bases, 22 drinks and 19 condiments. This is a distribution, not a reason to add recipes indiscriminately.

## Evidence that changes the next priorities

**Passing checks do not currently detect enough consequential content errors.** All 44 regression tests and 29 automated QA checks passed, including the production build. Fresh editorial triage reports zero error/priority flags, but the known yellow cake and skillet biscuit methods require baking powder absent from their lists. Those are more actionable than bulk-adding teaching metadata. The 756 generic editorial flags are mostly teaching requests (379) and withheld-nutrition verification (374), plus two craft records and one missing cook-time value.

**Meal plans require their own consistency review.** Beef Stew Night budgets 140 minutes against a 240-minute component; Chicken Parmesan Night starts from boiling water while linking 110-minute fresh pasta; Chicken Lettuce Wrap Night budgets 20 minutes against 30-minute filling and 25-minute salad; Coq au Vin Dinner budgets 80 minutes against a 150-minute main. These plans need explicit preparation assumptions and aligned instructions, not a blanket longest-component calculation.

**Some earlier findings should be retired.** The six historical compact-unit examples and 31 equivalent-total examples now scale correctly at double under the current parser, with exact reset preserved. The prior potato-gratin assembly finding was false: nested layering bullets were already present, and the fresh HTML and JSON-LD preserve them. Its distinct missing-butter issue remains.

**Curation opportunities should stay separate from defects.** Empty dietary tags do not prove a recipe belongs in a dietary category. Six exploratory similarity comparisons found meaningful variations rather than clear merge candidates. Conditional dietary alternatives need a consistent convention, but missing review metadata and sparse internal lesson examples are coverage gaps, not confirmed cooking failures.

**A full generated-link crawl found a shared website defect.** Across 719 HTML pages and 11,248 internal anchor occurrences, ten body links in three meal pages point to nonexistent generated routes from trailing-slash meal URLs. Metadata component links still work, which explains why the corpus relationship scan passed. This is a confirmed static URL-resolution defect; live HTTP status was not independently verified. See the [crawl evidence](/Users/jsilton/Sites/mise/docs/audits/2026-09-10/link-crawl.json).

## Independent recipe sample

The sample was fixed before prose review: 24 recipes, four per method tag across bake, simmer, saute, roast, no-cook and grill; 12 reviewed and 12 pending, including both structured-formula recipes. Tags overlap and are not six mutually exclusive primary cooking methods. All source hashes were verified at integration.

The reviewer found no material internal problems in the 12 reviewed examples. Among pending examples, the strongest findings were incomplete doneness guidance, missing ingredients, omitted terrine chilling, and shortcake ingredient allocations. Shortcake and shrimp-taco timing concerns were retained as candidates where preparation might overlap. Missing equipment metadata was not treated as a defect when the method names the equipment. This small diagnostic sample cannot estimate the collection-wide defect rate or prove reviewed recipes are reproducible.

See the [recipe assessment](/Users/jsilton/Sites/mise/docs/audits/2026-09-10/recipes.md) and [sample with per-dimension outcomes and hashes](/Users/jsilton/Sites/mise/docs/audits/2026-09-10/sample.json).

## Ranked next actions

The order weighs consequence, confirmed evidence, number of affected items and likely work. These are bounded follow-up recommendations, not implemented changes. The [findings register](/Users/jsilton/Sites/mise/docs/audits/2026-09-10/findings.json) keeps confirmed issues, candidates and coverage gaps distinct.

| Rank | Action                                                                               | Reach and effort                                                      |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 1    | Review tenderloin-dog and shrimp-taco doneness guidance                              | Two sampled recipes; focused source-supported decisions               |
| 2    | Verify terrine plastic-wrap suitability for its oven water bath                      | One recipe; product-specific candidate, not a proven material failure |
| 3    | Repair the meal-body URLs resolving under `/mise/meals/recipes/`                     | Ten links on three pages; small deterministic correction              |
| 4    | Resolve required missing ingredients, starting with yellow cake and skillet biscuits | Several confirmed examples; bounded source recovery                   |
| 5    | Correct terrine elapsed time and align four meal/component schedules                 | Five plans; moderate dependency and preparation review                |
| 6    | Resolve leavening destinations and ingredient allocations                            | Targeted examples; source review without invented amounts             |
| 7    | Clarify dietary labels where default and alternative ingredients differ              | Small candidate set; contextual review before changing tags           |
| 8    | Remove malformed generic editing residue                                             | One confirmed malformed example and 18 pattern candidates             |
| 9    | Cook representative recipes and complete meals with documented results               | Physical testing; outside an automated audit                          |
| 10   | Complete structured-page, keyboard, print and performance verification               | Shared templates; unfinished browser and measurement coverage         |

The shrimp recipe's pink-only cue omits the firmness and opacity cues in [FDA seafood guidance](https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely). The beef instruction is confirmed to be below FoodSafety.gov's published guidance for whole beef; the recipe gives no documented alternative time-temperature process. That establishes a guidance discrepancy, not a claim that every serving will cause illness. [Federal temperature guidance](https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures)

## Scope and efficiency

Three agents worked in parallel with fresh, narrow contexts: Terra/medium for the website, Sol/high for recipe integrity, and Luna/medium for corpus inventory. Shared regression and QA suites ran once. The lead reconciled historical evidence and checked consequential conclusions, including correcting a legacy/structured website-sample misclassification and rejecting the old gratin false positive. No further agents, broad recipe rewrites, image generation or external publishing were commissioned.

The saved speed setting was Standard, but the agent launcher continued to advertise priority execution. Dispatch followed the user's subsequent instruction to proceed, with that limitation restated. Actual subagent billing and per-task token/cost totals were not exposed; this report makes no claimed dollar saving or Standard-billing guarantee.

## Supporting evidence

- [Independent recipe assessment](/Users/jsilton/Sites/mise/docs/audits/2026-09-10/recipes.md) and [sample evidence](/Users/jsilton/Sites/mise/docs/audits/2026-09-10/sample.json)
- [Website checks](/Users/jsilton/Sites/mise/docs/audits/2026-09-10/website.md)
- [Corpus assessment](/Users/jsilton/Sites/mise/docs/audits/2026-09-10/corpus.md) and [machine-readable inventory](/Users/jsilton/Sites/mise/docs/audits/2026-09-10/corpus-metrics.json)
- [Historical reconciliation and exact examples](/Users/jsilton/Sites/mise/docs/audits/2026-09-10/reconciliation.md) and [comparison data](/Users/jsilton/Sites/mise/docs/audits/2026-09-10/reconciliation.json)
- [Bounded agent assignments](/Users/jsilton/Sites/mise/docs/audits/2026-09-10-agent-briefs.md)

Live/local equivalence is supported only for the sampled page content and controls, not a verified deployed commit. No field performance, complete accessibility certification, recipe deliciousness or food-safety certification is claimed. Existing local npm-installed dependencies permitted successful tests; the user's pending pnpm migration still needs its CI installation strategy aligned before publication.

Artifact verification: all audit JSON files parse; all local report-link targets exist; all 24 sampled recipe hashes still match. Only audit documents/data were added. No additional full test or build cycle was run after the documentation-only integration.
