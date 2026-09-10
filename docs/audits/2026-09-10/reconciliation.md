# Historical findings and shared checks

Snapshot: 2026-09-10, source commit `1c84b8bd9758f1f3d0bfdd18d6a745edbb118cd0`. This assessment changed no recipes, application code, or review status. The existing package-lock deletion and new pnpm files are user work. Evidence: reconciliation.json and boilerplate-candidates.json in this directory.

## Shared baseline

- 44/44 regression tests and 29/29 automated QA checks passed, including a fresh production build. The QA script's printed manual browser checklist is not a completed browser test.
- Fresh read-only editorial triage: 604 canonical Markdown recipes, 225 editorial-review, 379 collection, zero kitchen-tested. The 756 flags comprise 379 teaching requests, 374 withheld-nutrition checks, two excluded craft entries, and one missing cookTime. No error or priority flags under these rules.
- QA rewrote the meal register's formatting; semantic equality against the original was verified and original formatting restored.

## H1 — Missing required ingredient information remains open

Status: confirmed examples; high confidence. Severity: high for consequential formula omissions, lower for optional garnishes. Current files for all 24 historically confirmed list/method mismatches across 20 recipes are byte-identical to the September 7 audit snapshot. That preserves the historical evidence but does not independently certify every previous interpretation.

Directly rechecked examples: yellow-cake-with-chocolate-frosting.md:34–45 lists no baking powder or salt, although step 3 at line 70 requires both. skillet-biscuits-with-berries.md:34–42 lists no baking powder, although its dough method requires it at line 64. strawberry-cheesecake-overnight-oatmeal.md:43 specifies maple syrup, while line 66 asks for honey. sweet-and-white-potato-gratin.md:33–43 lists no butter, although line 65 calls for one tablespoon and line 68 calls for buttering the dish.

Consequence: a cook or shopping list cannot determine the intended complete formula. Next action: recover source-supported amounts or correct the method's intended ingredient identity. Do not invent quantities or automatically add a second sweetener.

## H2 — Ingredient destinations and allocations need targeted corrections

Status: confirmed, high confidence; severity: high where a necessary ingredient can be omitted, medium for ambiguous allocation.

blackout-chocolate-cake.md:43 lists baking powder, but its enumerated dry mix at line 68 excludes it. vegetable-muffin.md:48 lists baking powder, but line 68 excludes it and instead requests unlisted salt. tomato-and-goat-cheese-tart.md:33 includes baking powder, absent from its enumerated crust method at line 63; thyme is also used in crust and filling without division. brown-butter-carrot-cake.md:53 provides one teaspoon vanilla, while both batter and frosting require it at lines 72 and 75. shrimp-wonton-soup.md:34–46 lacks wrapper quantity; lines 63–65 use wrappers and assign all seasonings to filling before adding more soy/sesame to serving bowls.

Next action: resolve ingredient destinations and allocations individually from source evidence; then represent explicit allocations where useful. A structured schema can prevent drift after a decision, but cannot infer the right formula.

## H3 — Four composed-meal plans disagree with their components

Status: confirmed current context, high confidence; severity: high for schedule reliability. Meal and component files remain unchanged from the earlier audit.

| Meal                       | Meal prep + cook |     Linked component elapsed | Evidence                                                                                                         |
| -------------------------- | ---------------: | ---------------------------: | ---------------------------------------------------------------------------------------------------------------- |
| Beef Stew Night            |          140 min |                      240 min | meals/beef-stew-night.md:6; recipes/classic-beef-stew.md:20                                                      |
| Chicken Parmesan Night     |           45 min |          110 min fresh pasta | meals/chicken-parmesan-night.md:5; recipes/fresh-egg-pasta.md:34                                                 |
| Chicken Lettuce Wrap Night |           20 min | 30 min filling; 25 min salad | meals/chicken-lettuce-wrap-night.md:6; recipes/chicken-lettuce-wraps.md:23; recipes/smashed-cucumber-salad.md:22 |
| Coq au Vin Dinner          |           80 min |                 150 min main | meals/coq-au-vin-dinner.md:7; recipes/chicken-coq-au-vin.md:22                                                   |

Paths in this table are relative to src/content. These are not just comparisons of independent durations: the Parmesan plan starts from boiling pasta water without allowing for making its linked fresh pasta, and the stew plan adds potatoes before its two-hour braise whereas the component delays vegetables until the meat begins softening. Coq au Vin notes a make-ahead possibility but does not state that its displayed schedule assumes previously cooked chicken. Lettuce wraps supplies no prepared-component assumption.

Next action: align the four actual plans with their components, preparation assumptions, portions and equipment. Do not blindly replace all meal totals with the longest component or label all 32 historic timing candidates broken meals. BBQ Pulled Pork Spread explicitly uses previously cooked pork and remains a valid dismissal of that particular raw-pork timing comparison.

## H4 — Generic editing residue is visible to cooks

Status: confirmed malformed example; wider matches are candidates. Confidence: high. Severity: medium.

tomato-and-goat-cheese-tart.md:72 says “Let Cold Butt rest” and explains that juices redistribute and every piece stays moist. This is a malformed ingredient fragment in the public directions. An exact repeated-prose scan finds 18 recipes with the same trailing explanation, including ground meat, chicken sausage, and shredded-chicken dishes. These 18 matches are not 18 confirmed cooking defects, but they make a small, reviewable cleanup set.

Next action: inspect the matched appended notes in context; remove or replace malformed, irrelevant advice with recipe-specific instructions only when needed. Do not launch a broad stylistic rewrite.

## Resolved and dismissed findings

- All six historical compact-unit examples and all 31 historical equivalent-total examples now produce changed double-scale outputs with the intended leading quantities/equivalents; exact reset holds. Existing tests cover package-size boundaries separately. This does not claim every possible ingredient string is correct. The historic carrot approximation was separately replaced in the structured recipe migration.
- **Dismissed previous audit error:** sweet-and-white-potato-gratin.md:69–71 contains nested instructions for both potato colors, cream and cheese, and repeating layers. They were present in the historic source and remain in fresh built HTML and JSON-LD step 4. The prior claim of missing assembly was false. Its distinct unlisted-butter issue remains.

## Local integration note

The working tree removes package-lock.json and adds pnpm lock/workspace files, while .github/workflows/validate-recipes.yml still runs npm ci at line 45. Before publishing that migration, align the workflow's install command and lockfile strategy. This is an incomplete local migration concern, not evidence that the currently deployed website or committed CI is broken. Existing installed dependencies allowed the local shared checks to pass.
