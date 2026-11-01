# Mise batch 04 — review images

49 exact-named PNGs, each 1536 × 1024. Planned review branch: `images/mise-batch-04-2026-11-01`.

## Review result

All 49 images were reviewed in full frame and middle-half crops (x=384–1152). All food and complete vessels fit. No steam, decorative props or cutlery were found. Required food skewers are retained for the two kebab recipes.

**45 accepted images and four smaller-scale review candidates:**

- `chicken-pot-pie-ix.png`: combined pie and removed slice about 38% of frame width.
- `chinese-sausage-fried-rice.png`: bowl about 36% of frame width.
- `chocolate-chip-walnut-cookies.png`: plate about 36% of frame width.
- `classic-wonton-soup.png`: bowl about 39% of frame width.

These are crop-safe but smaller than the requested roughly half-width. A targeted enlargement of the first three overshot the crop, so the earlier crop-safe versions were retained rather than silently called exact scale matches.

Additional minor note: Manhattan and Martini glasses are about 80–81% of frame height rather than about 75%; complete glass and garnish remain within the crop. Backdrops are visually even generated approximations of requested hex colors, not colorimetric guarantees. Natural contact shadows remain.

Recipe-specific checks include three skewers each; four quesadilla wedges; whole fish with heads/tails; five muffins including the split muffin; six walnut cookies including the split cookie; seven crinkle cookies; two carrot-cake layers; eight wontons; and the correct cocktail garnishes.

## Production and provenance

85 built-in calls: 49 initial calls plus 36 remakes. Original margarita reference attached to every built-in image generation call. Supplemental accepted images were sometimes attached for composition. Final PNGs are unchanged generator outputs; Python was used only for dimension/hash checks and review sheets.

Production and coordinator QA began at 18:23 UTC on 2026-11-01. Generation/QA wall time was approximately 23 minutes, with concurrent workers and no intentional pause. This is not a sum of model-call durations. Independent review, Library packaging and Git persistence are separate stages.

Source: [batch 04 at pinned commit](https://github.com/jsilton/mise/blob/3be7beb8d529161e69d7dbc9ce44c27110d6618c/docs/image-prompts/batch-04.md). Exact source and reference hashes: `source-provenance.json`. Final hashes/QA status: `qa-manifest.json`. Exact attempt prompts and selected-attempt records: `prompts/` and `generation-provenance.json`.

The source README/directory were checked at this batch boundary: no new unfulfilled redo manifest. Prior completed batches were not regenerated. Historical QA remains unchanged.

## Contents and boundaries

- `images/`: final 49 PNGs.
- `review/`: full-frame sheets and matching middle-half crops, numbered in source order.
- `source.md`, `shared-style.txt`, `prompts/`: source brief and exact prompts.

Review assets only. No recipe mapping, PR, merge, deployment or production change. Before the next batch, report this branch and recheck README/new redo manifests.
