# Mise batch 03 — review images

49 PNG images, each 1536 × 1024. Review branch: `images/mise-batch-03-2026-11-01`.

## Review result

All 49 final images were reviewed in full frame and in the middle half (x=384–1152). All food remains visible. **46 images pass the complete-vessel crop check; three are flagged review candidates**, not unqualified passes:

- `charred-asparagus-with-parmesan.png`: outer plate rim is slightly clipped.
- `chicken-and-white-bean-enchiladas-with-creamy-green-chile-sauce.png`: approximately 52.3%-wide plate leaves a small rim crop. Two filled rolls are present; cheese ridges may visually suggest extra divisions.
- `chicken-fingers.png`: approximately 50.7%-wide plate has a tiny rim crop.

Each flagged image received a targeted correction attempt. The remaining rim caveats are disclosed rather than silently labeled passes. No food is clipped.

The spinach-pasta ingredient was corrected after independent review: the final shows broad flat spinach leaves and clears the crop.

Other review notes: brown-butter carrot cake has a somewhat coarse, hearty crumb after texture remakes. The fondue recipe's requested fork conflicts with the shared no-cutlery rule; the fork and suspended bread were omitted, while bread and apple remain on the serving plate. Backdrops are visually even approximations of the requested colors, not colorimetric guarantees. Natural contact shadows remain.

## Production and provenance

84 built-in image generation calls: 49 initial calls plus 35 remakes. Original margarita reference was attached to every call; selected images were sometimes also attached for composition guidance. Final PNGs are unchanged generator outputs. Python was used only for checks and review sheets, not for editing final images.

Production and coordinator QA ran from 16:52 to approximately 17:22 UTC on 2026-11-01, about 30 minutes wall time with concurrent generation and review; this is not a sum of active model-call time. No intentional production pause occurred. Library packaging, independent review and Git persistence are separate stages.

Source: [batch 03 at pinned source commit](https://github.com/jsilton/mise/blob/5968fd776dabbd8a52a6c362a9c11b8a190d5c5f/docs/image-prompts/batch-03.md). Exact hashes are in `source-provenance.json`. Exact attempt prompts and selected attempts are retained in `prompts/` and `generation-provenance.json`; final image hashes and review status are in `qa-manifest.json`.

## Contents

- `images/`: 49 final named PNGs.
- `review/`: three full-frame sheets and matching middle-half crop sheets, numbered in source order.
- `source.md`, `shared-style.txt`: source recipe prompts and shared style.
- `prompts/`: exact generation and correction prompts.

Review assets only. No recipe mapping, merge, deployment or production-site change is included. Next batch must wait for this branch to be reported, then README and new redo manifests must be checked again.

## Current replacement review — 2026-11-01

Three images on this redo branch replace the original asparagus, enchiladas and chicken fingers candidates. All three now retain the full plate rim in the middle-half crop. Chicken fingers remain slightly larger than nominal (49% versus 45% width). See [redo review and exact evidence](redos/2026-11-01/README.md) and [current replacement hashes and QA](redos/2026-11-01/qa-manifest.json). The other 46 images are unchanged.

The original batch review sheets, generation records and root QA manifest below are historical evidence for the original versions of these three images; they are not current hashes or crop results for the replacements. The scoped redo evidence is authoritative for these three files. No recipe mapping or deployment.
