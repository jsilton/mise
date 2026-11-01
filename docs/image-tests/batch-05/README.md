# Mise batch 05 — review images

49 exact-named PNGs, each 1536 × 1024. Planned branch: `images/mise-batch-05-2026-11-01`.

## QA result

48 complete-vessel middle-half crop passes and one flagged candidate. All food remains visible. Every final was reviewed in full frame and actual x384–1152 crop. No steam, decorative props or cutlery observed.

- **Flag: `cu-chao-mian.png`** retains approximately four pixels of left-rim clipping after four framing corrections. Correct thick noodles and all food remain intact; this is not labeled a strict crop pass.
- `creamy-spinach-lemon-chicken-dinnner.png` is about 40.5% frame width, at the smaller end of the brief.
- Whole-wheat macaroni's brown color is mostly concealed by cheddar sauce.
- Sliders, chicken lo mein and turkey meatballs have narrow but complete rim margins. The Dutch baby skillet and handle fit; popsicle sticks are integral to the food, not added props.

Backdrops are visually even generated approximations of requested colors, not exact colorimetric guarantees. Natural contact shadows remain.

Recipe-specific checks included eight dumplings; four cornbread squares; four blueberry pancakes; two spinach chicken cutlets; six duck slices; three sliders; seven smashed potatoes; broad flat drunken-noodle ribbons; nine meatballs including cut ninth; three popsicles; six toast sticks; four pumpkin pancakes; and nine truffles including cut ninth. Dressing was corrected to show a clearly scooped cavity. Salad mozzarella was corrected to show halved faces.

The slow-cooker macaroni's requested lifted scoop is shown as a supported mound to honor no-cutlery/no-hands. Cut casserole portions rest on the dish rather than floating or using a utensil.

## Production and sources

102 built-in generation calls: 49 initial plus 53 remakes. Original margarita reference attached every time; supplemental composition references sometimes used. Final PNGs are unchanged tool outputs. Python was used only for QA crops/sheets, dimensions and hashes.

Production/coordinator review ran from 19:07 to approximately 19:35 UTC on 2026-11-01, about 28 minutes wall time with concurrent workers and no intentional pause. This is not a sum of model-call time. Independent review, Library saves and Git persistence are separate stages.

Source: [batch 05 at pinned commit](https://github.com/jsilton/mise/blob/0f24396524ffb2eb6fe4d5d96fe74fe183a74cdb/docs/image-prompts/batch-05.md). Exact source/reference hashes in `source-provenance.json`; final hashes/status in `qa-manifest.json`; exact prompts and selected attempts in `prompts/` and `generation-provenance.json`.

At this boundary no new unfulfilled redo was present. Prior batches 01–04 and their redos are user-accepted/closed; historical notes remain intact and did not trigger regeneration.

## Contents and boundaries

`images/` holds the 49 final PNGs. `review/` holds three full-frame sheets and matching middle-half sheets, in source order. Source brief and exact prompts are retained.

Review assets only: no PR, merge, deployment or recipe mapping. Report this branch and recheck source README/new unfulfilled redos before starting batch 06.
