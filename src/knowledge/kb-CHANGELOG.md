# KB Changelog

This changelog documents notable changes to the Omnivore's Codex KB rules (files in `src/knowledge/codex/`). Each entry should be a short note describing what changed and why.

## 2026-04-18 — Fixed poultry-safety rule over-matching

- **Fixed `low-temp-poultry-safety.json`:** the second detection clause (`sous-vide`/`water bath`/`vacuum`) was marked `optional: true`, which meant the rule fired on _every_ recipe containing chicken/poultry/turkey — 180 false-positive fails against innocuous braises, soups, stir-fries, etc. The rule's own description said it should flag "poultry at low temperatures," but the optional clause effectively disabled that filter. Removed `optional: true` and expanded the low-temp vocabulary: sous vide, water bath, immersion circulator, vacuum seal, 140-155°F, 60-65°C, and "pasteuriz" (catches pasteurization/pasteurize/pasteurized). The rule now fires only on recipes that actually reference low-temperature poultry cooking.
- **Added explicit `kb.disable`** to `roast-turkey-breast.md` with a `disableReason`. This recipe pulls turkey at 155°F and relies on carryover cooking during a 20-minute rest — a well-documented technique that's explained in its Chef's Note. The disable entry makes the exception explicit rather than weakening the rule.
- **Outcome:** `npm run validate-recipes` now returns exit code 0 with zero suggestions (down from 180 fail-severity false positives). Pre-commit hook unblocked.

## 2026-04-18 — Finished 2026-04-12 cleanup

- **Actually deleted the tombstone files** from the 2026-04-12 redesign that had been left in place with `severity: "disabled"`: `plating-suggestion.json`, `insufficient-umami.json`, `maillard-note.json`, `missing-salt.json`, `development-standards.json`. These had `detection: []` and were firing on every recipe as "disabled" noise — 3,030 false suggestions per validation run.
- **Hardened the validator** (`scripts/validate-recipes.mjs`): now skips any rule where `severity === "disabled"`, `_deprecated === true`, or `detection` is missing/empty. Prevents tombstones and documentation-style JSON (like `architecture-standards.json`) from trivially matching every recipe.
- **Updated `_README.md`** in `src/knowledge/codex/` to document that every rule must have a non-empty detection array, and that documentation-style JSON belongs outside this folder.
- **Updated stale references** to `development-standards.json` in `KNOWLEDGE_PRESERVATION.md` — now point to the renamed `architecture-standards.json`.
- **Outcome:** Validation suggestion count drops by ~3,600+ (from 3,815 to the true signal: acid/crisp/resting/completeness hints + poultry-safety fails on recipes that actually trigger them).

## 2026-04-12 — Codex rule system redesign

- **Deleted low-value rules:** `plating-suggestion.json` (too prescriptive about visual garnish), `insufficient-umami.json` (noisy false positives on all savory dishes), `maillard-note.json` (generic pat-dry advice), `missing-salt.json` (nagging, applies too broadly).
- **Escalated severity:** `low-temp-poultry-safety.json` escalated from "warn" to "fail" — poultry pasteurization is a genuine food safety concern.
- **Narrowed detection scopes:**
  - `missing-resting.json` — now only fires for whole cuts (roasts, steaks, chops) via cooking methods + ingredient checks; excludes ground/minced/shredded proteins.
  - `missing-acid.json` — now only applies to braised/stewed proteins (beef, pork, chicken, lamb, etc.) instead of all baked goods and casseroles.
  - `missing-crisp.json` — now only applies to creamy soups/stews (requires cream/milk/coconut milk detection) instead of all soups.
- **New rule added:** `recipe-completeness.json` — Hints when recipes are missing 3+ optional metadata fields (cuisines, cookingMethods, occasions, seasons, nutritionalDensity, leftovers, pairsWith). Improves discoverability without nagging on single fields.
- **Renamed for clarity:** `development-standards.json` → `architecture-standards.json` — More accurately reflects that this documents project architecture rather than recipe rules.
- **Outcome:** Rule signal is now higher-value. Safety rule is appropriately serious. Optional-field suggestions are consolidated into a single thoughtful check rather than scattered nagging.

## 2026-01-04 — Seed KB added

- Added initial set of KB rules: `missing-acid`, `missing-crisp`, `missing-salt`, `low-temp-poultry-safety`, `missing-resting`, `maillard-note`, `insufficient-umami`, `plating-suggestion`.
- Integrated KB into `scripts/validate-recipes.mjs` to emit suggestions and write `public/recipes/validation-report.json` for CI consumption.
- CI will now post sample KB suggestions as a PR comment on recipe PRs.

<!-- When updating: add YYYY-MM-DD — brief note -->
