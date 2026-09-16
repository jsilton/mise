# Targeted follow-up — September 15, 2026

This batch repairs the outstanding recipe issues identified in the September 10 audit and aligns recipe-validation CI with the existing pnpm deployment. The original audit remains a historical snapshot. No complete-review or kitchen-tested status was added, and nothing was deployed in this turn.

## Handoff — September 16, 2026

**State: paused before release.** The September 15 batch remains in the working tree, uncommitted and unpublished by this task. At wrap-up, HEAD is `96cec4c6257ad3d84086a00c80308e890d833a9c` (potatoes and Spanish rice). The September 10 [audit](../../audits/2026-09-10/state-report.md) and [first repair report](../2026-09-10/report.md) are tracked historical records; their unresolved lists are superseded only where this follow-up documents a repair. Validation below was performed September 15, not rerun during this documentation-only wrap-up.

### Browser decision and evidence

The user explicitly requires Codex's built-in browser for further website checks. Do not reinstall or require Chrome DevTools MCP. It was briefly configured, then removed by the user; `codex mcp get chrome-devtools` confirmed no such server. This supersedes earlier instructions to install it or await configuration approval. No further terminal action is needed for that setup.

Built-in browser checks on the public site confirmed Breakfast Carrot Cake loads without captured error-level console messages and homepage search returns that recipe. The homepage's Reset button left the text query intact; check whether it is intentionally filter-only before proposing a change. Print activation exposed no inspectable preview, so printed pagination remains unverified. These public-site checks do not verify deployment of the uncommitted repair batch.

Before the tool switch, one incomplete Chrome DevTools pass observed homepage LCP 272 ms and CLS 0.00 on an unthrottled reload after prior navigation; this was not a verified cold-cache load or representative mobile/field measurement. No INP or CrUX data was obtained. A mobile Lighthouse run returned accessibility, best-practices and SEO scores of 100, but that does not establish comprehensive accessibility. The partial trace identified 7,593 DOM elements, including 604 recipe-grid children, with 106 ms style recalculation and 41 ms layout. The local homepage renders all recipe cards at once. This is a candidate for a future measured performance task, not evidence that pagination should be implemented now. No new performance changes were made.

### Next actions

1. Verify a clean `pnpm@10` frozen-lockfile install and the validation workflow. The earlier bootstrap did not finish; current local test results alone do not establish clean CI installation. Check `pnpm-workspace.yaml` build-script settings if installation reports a problem, without broadly upgrading dependencies.
2. Review the bounded diff and, with release authorization, commit/publish it and inspect the deployed changes. Do not include unrelated work. No commit or deployment is authorized merely by this wrap-up.
3. Use the built-in browser for further website inspection. Keep print output, comprehensive keyboard accessibility and representative performance measurement marked incomplete until actually observed; no additional browser installation is required.
4. Perform the physical trials described in the [first repair report](../2026-09-10/report.md), including measuring unresolved Chana Begoon oil and taco yields. Do not upgrade review labels or invent kitchen-test results.

Preserve public recipe presentation rules in [HOUSEHOLD_PREFERENCES.md](../../HOUSEHOLD_PREFERENCES.md): review dates, private editing history and kitchen-test disclosures stay off recipe/meal pages. Do not restart a corpus-wide audit or spawn more agents merely to resume this bounded batch.

## Implementation

- Validation now installs pnpm 10, caches its store, and runs `pnpm install --frozen-lockfile`. Package manifests and pnpm configuration now trigger validation. Setup follows the [pnpm action's v4 instructions](https://github.com/pnpm/action-setup/tree/v4).
- Tomato-goat-cheese tart: restored water, oil, salt, pepper, leavening and the crust/filling cheese split; allocated thyme; restored cooling instructions and replaced malformed rest prose. Foil replaces unspecified parchment at the 450°F blind bake because common parchment is rated only to 425°F ([manufacturer guidance](https://www.reynoldsbrands.com/products/parchment-paper/parchment-paper-rolls)).
- Brown-butter carrot cake: recovered 2 tsp cake vanilla plus 1 tsp frosting vanilla from its original `bas-best-carrot-cake.md` identity.
- Shrimp tacos: recovered 4 tbsp total oil split among shrimp, slaw, onion and pineapple, and onion water. Clearly separated the two lime allocations. Original toppings and tortillas were unmeasured, so they remain explicitly as-needed/to-taste, without an invented taco yield.
- Shrimp wonton soup: separated filling and bowl soy/sesame oil, included egg white explicitly, listed prepared wrappers and four cups prepared broth, and made the 40-minute assumption explicit. Greens and garnish remain as desired. Cook wontons in separate water to match the broth component and keep it clear; check the pork filling reaches 160°F, rather than treating floating as proof of doneness ([minimum-temperature guidance](https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures)). Existing vinegar is explicitly an optional table condiment. The source's additional bowl salt was not added to an already-seasoned broth.
- Chana Begoon: listed oil, salt, water and separate finishing ingredients, with coating/sautéing and to-taste instructions. Its earliest repository version also lacks measured oil; no measured formula was invented.
- Dietary claims: Patatas Bravas now has a vegan option requiring vegan mayonnaise; Cauliflower Alfredo is a dairy-free option requiring all three substitutions; miso cauliflower separates its non-vegan honey variation from its mirin default; Golden Veil no longer claims vegan status. Minestrone already identifies its non-vegetarian stock variation, so it was not rewritten. The two plant-based control examples were left alone.
- Reviewed all 18 listed generic rest candidates. Removed irrelevant/garbled appendices; retained explicit five-minute rests for kalbi ribs and two whole-cut chicken dishes. Tart cooling is now in its method. Disabled automatic rest insertion in the legacy batch-technique script so substring matching cannot recreate “Cold Butt” from “Cold Butter.” Other script behavior is unchanged.
- Removed stale nutrition from four recipes whose missing ingredients were restored (tart, carrot cake, wonton soup, Chana Begoon); no replacement estimates were invented.
- The existing meal-register generator also detected a stale lo-mein component list. Kept its accurate addition of scallion-shallot oil, without changing review status, and discarded unrelated formatting churn.

Quantities above were recovered from repository commit `045e5ba2`; Chana Begoon's missing-amount limitation was confirmed at `b244f4b2`. The source recovery does not establish that later adapted formulas have been cooked successfully. The complete implementation file list is in [changed-files.json](changed-files.json).

## Validation

- 46 tests passed.
- 30/30 QA checks passed, including production build.
- 721 generated HTML pages; 11,293 internal anchors; zero missing destinations.
- All 26 changed recipes passed the targeted recipe linter.
- ESLint passed for the modified batch script; `git diff --check` passed.
- Tests used the existing local installation. A separate pnpm 10 bootstrap did not complete and was stopped; a clean GitHub-hosted dependency install has not been executed from here. Local pnpm is version 12.3.4; the workflow deliberately matches deployment's pnpm 10 instead.

Unrelated household-preference and potato-recipe work was not edited. No new print/performance or physical cooking claims are made. Precise Chana Begoon oil quantities, taco yield/topping quantities, cooking times and taste still need physical trials. Other corpus-wide nutrition, source, and recipe-review gaps are not closed by this batch.
