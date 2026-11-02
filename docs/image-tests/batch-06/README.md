# Mise batch 06 — review images

49 generated PNGs at 1536 × 1024. Images are review assets only: not merged, deployed or mapped into recipes.

## Review result

All 49 food arrangements and complete vessels fit the middle-half crop (x384–1152). Full frames and crops were visually checked for ingredient/count accuracy, steam, props, centering and backdrop consistency. There are **46 accepted without material flags and 3 retained with flags** after correction attempts:

- **falafel.png**: the crust and crumb remain coarse/kernel-like rather than ideally finely ground after two texture correction attempts. Six falafel including the broken one are present.
- **garlic-butter-shrimp.png**: roughly ten discernible overlapping shrimp against an approximate-dozen description, after a count correction; the bowl is approximately 38.2% of the frame width.
- **general-tsos-cauliflower.png**: bowl approximately 39.1% of frame width after a framing correction, slightly smaller than the half-width target.

Minor notes: French toast and pappardelle are around 40% width. Farfel muffins, fattoush and kale have narrow but complete crop margins. Elderberry syrup retains the dried berries and cinnamon explicitly listed on the plate in its source description; no additional props were added. Backdrop hex colors are visual generated approximations and natural soft shadows remain, not pixel-flat color guarantees.

## Provenance and evidence

Source: [batch-06.md](https://github.com/jsilton/mise/blob/4510f5f3cc6024d63b298f96d35d8f1f7c3027bf/docs/image-prompts/batch-06.md), blob `1dacba61c6f44273e0a381f57fc7cf62906156be`. Boundary README explicitly closes earlier redos; no new redo manifest was present. Previously delivered batch05 was not duplicated despite its stale source-table status.

Original [margarita reference](https://github.com/jsilton/mise/blob/images/mise-style-tests-2026-10-31/docs/image-tests/2026-10-31/images/margarita-01-cookbook.png) attached to every built-in imagegen call. No external generation API was used. Finals are unchanged generated image bytes; only QA crops and sheets were derived.

94 calls produced 49 selected finals (45 remakes), across three concurrent groups: 29, 34 and 31 calls. Generation and coordinator QA ran approximately 20:07–20:37 UTC on 2026-11-01; this includes tool waits, with no intentional pause. Review-branch persistence is a separate checkpoint, not implementation or publication.

`prompts/` retains exact attempted prompts. `generation-provenance.json` preserves selected attempts and reference evidence; `qa-manifest.json` records hashes and final checks. `review/full-frame-01.png` through `03.png` and corresponding `middle-half` sheets show entries 1–17, 18–33 and 34–49. Root independently reviewed all six sheets at 20:38 UTC and accepted this package for review-branch saving with the three flags disclosed.
