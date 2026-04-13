# KB Changelog

This changelog documents notable changes to the Omnivore's Codex KB rules (files in `src/knowledge/codex/`). Each entry should be a short note describing what changed and why.

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
