# Mise image batch 02 — review assets

49 generated cookbook-style recipe images, matching the supplied batch-02 filenames. All are PNG, 1536 × 1024 (3:2). This folder is a review deliverable, not a site implementation.

## Current two-image redo · 1 November 2026

On this review branch, `images/anelletti-al-forno.png` and `images/banana-egg-oat-pancakes.png` are replacement candidates. [Current redo notes, exact prompts and proof](redos/2026-11-01/README.md) and [replacement hashes](redos/2026-11-01/qa.json) supersede the original records for these two files. The original full-batch contact sheets, manifest and QA below are retained as historical evidence and show the prior versions. Other 47 image files are unchanged. Pancakes passed review; Anelletti remains flagged for thick, regular ring bands. No production use is implied.

## Original batch review

**48 images passed review; 1 remains flagged:** `anelletti-al-forno.png` shows short thick tubes rather than true tiny thin pasta rings despite repeated fresh generations and targeted corrections. It is retained as a clearly flagged candidate, not claimed fully compliant. This image needs user review before use. The chicken-tender image passed with a minor styling caveat: interior fibers remain slightly overdefined.

Each selected image was checked full-frame and in the tall central-half crop (x=384…1152, y=0…1024). Contact sheets are in `review/`; checksums and dimensions are in `manifest.json`. Images were regenerated or edited with built-in image generation when framing, food details, garnish, or backdrop failed review. Final image pixels were not manually retouched. Review sheets are cropped/resized derivatives only.

The cookbook margarita reference was attached to generation/edit calls. The user’s latest shared template takes priority over its props and background shading. Exact requested prompts, generation/edit prompts, provenance and QA records accompany this set.

## Caveats

These are AI-generated representations, not photographs of cooked recipe tests. Visual review is not a guarantee of culinary or pixel-perfect accuracy. Background hex colours and lens/lighting language are approximate visual targets, not calibrated measurements. Corner-colour checks only help detect global gradients; short local contact shadows remain intentional.

No recipe mappings, production code, website configuration, merge, deployment or hosted QA is included. Review-branch persistence is separate from main and from application to the site.
