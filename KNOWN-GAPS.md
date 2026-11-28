# Known gaps

This file lists what the repo knows it does not have: work no one has reviewed, things this checkout cannot open, checks that do not run and docs that disagree. Missing recipe coverage is a separate wishlist in the [Known Gaps section of CLAUDE.md](CLAUDE.md#known-gaps).

## Not reviewed

- No recipe or meal has a kitchen test. Both `kitchenTested` counts are 0 in `docs/recipe-review-register.json` and `docs/meal-review-register.json`. The four plans in `docs/kitchen-tests/` have no results.
- 429 of 673 recipes still use the legacy format with no `formula` (`docs/STRUCTURED_RECIPE_AUTHORING.md`).
- `docs/recipe-editorial-audit.json` flags at least 23 recipes, such as `chili` and `lo-mein`, for raw-poultry review because no 165°F / 74°C endpoint was found. The audit misses the 8 newest recipes, and some of those use poultry too.
- Four recipes keep hidden legacy nutrition until someone verifies it. `tarragon-potatoes` is a preserved original with no times or servings (`src/data/recipe-preservations.json`). The two playdough craft recipes need a decision on whether they belong.
- No record shows that the 672 dish photos were checked against their recipes (`src/data/dish-visuals.ts`).
- Five of nine entries in `src/knowledge/technique-index.json` have no example recipes. `docs/RECIPE_STANDARD.md` says the technique articles still need scientific review.
- 49 of 54 remote branches are not in main's history. Squash merges look the same, so no one has sorted out which still hold work main lacks. One is `agent-search-pilot`, which would route a Cloudflare Worker on `jordansilton.com/.well-known/search`. Whether it was deployed is not known.

## Can't open or verify from here

- The live site at `https://jordansilton.com/mise/` and whether it matches main. GitHub Pages settings, branch protection and past Actions runs.
- Private Paprika data. `.mise/` is not in this checkout, so `npm run pin:paprika -- --check` and `npm run export:paprika` cannot run.
- 394 outside links on 177 sites in recipes and meals. None were opened, and no check looks for broken outside links.
- Photo sources. `docs/image-prompts/`, which `src/data/dish-visuals.ts` points to, exists only on image branches. Full-size originals are not in the repo.

## Untested

- Without installed packages, `npm run validate-recipes`, `culinary-qa`, `qa` and the build cannot run. `npm test` passes 66 of 96 results, and all 30 failures are missing packages.
- CI runs `pnpm test`, the copy and editorial checks, the build, the link and alias checks and `validate-recipes`. It does not run `culinary-qa`, `qa`, ESLint, Prettier or any browser test. ESLint, Prettier and `lint-recipe` run only in the local pre-commit hook.
- Every push to main deploys to production, and no check visits the live site afterward. `docs/REVIEW_PROGRESS.md` lists mobile and print rendering as unverified.
- Pull request checks skip changes that touch only `public/`, most of `src/components/`, `src/layouts/`, `src/styles/`, `src/knowledge/`, `src/pages/` outside recipes and meals, `astro.config.mjs` or most of `scripts/`, including scripts every build runs (`.github/workflows/validate-recipes.yml`). Those get their first check in the deploy run on main.

## Stale or conflicting docs

- `docs/RECIPE_STANDARD.md` says the user authorizes committing, pushing and deploying verified batches. Since a push to main deploys to production, an agent that reads it may deploy without asking. Nothing records whether that grant still stands, and `docs/RECIPE_REVIEW_PIPELINE.md` and `docs/RESOURCE_LIMITED_RELEASE.md` add rules that partly replace it.
- `docs/REVIEW_PROGRESS.md` stacks many "current" checkpoints. The top one counts 651 recipe sources, while the repo has 673. `AGENTS.md` sends agents to that checkpoint.
- `CONTRIBUTING.md` and `.github/copilot-instructions.md` say to push to main after every build, while the workflows are built around pull requests. `DEPLOYMENT.md` calls continuous deployment future work.
- `CLAUDE.md`, `CONTRIBUTING.md` and `src/knowledge/TAGGING_GUIDE.md` list difficulty `advanced` and occasion `kids-approved`. `src/lib/tag-vocabulary.mjs` allows neither, so the build rejects both.
- Contributor docs name a `validate:recipes` script that doesn't exist, an `image:` field the schema rejects, npm commands with no `package-lock.json` (CI uses pnpm) and missing files such as `code-practices.md` and `maillard-note.json`. `.github/copilot-instructions.md` still has Directions written by hand instead of compiled from a `formula`.
- Recipe counts in `README.md`, `.github/copilot-instructions.md` and `DEPLOYMENT.md` don't match the 673 recipe files. `docs/VISUAL_IDENTITY.md` describes watercolor paintings, but the site uses photos made from image prompts.
- 9 of 2,272 relative Markdown links are broken. Five point to `docs/audits/`, which moved to `docs/archive/audits/`.
- `tmp/pdfs/`, `output/pdf/`, `chunks.json` and `scripts/find_exact.py` are tracked leftovers that nothing references.

When you close a gap or find a new one, update this file in the same change.
