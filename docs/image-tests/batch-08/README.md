# Mise batch 08 — review images

49 PNGs at 1536 × 1024, saved as review assets only. No merge, deployment or recipe mapping.

## QA result

All 49 food arrangements fit the middle-half crop (x384–1152). Complete vessels fit in 48; one has a tiny outer-rim caveat. Full frames and crops were checked for recipe accuracy, steam, props/cutlery, centering and backdrop consistency. **44 accepted without material flags, 5 retained with disclosed flags after correction attempts:**

- **lemon-herb-couscous.png**: bowl approximately 38% width, smaller than target after framing correction.
- **loaded-baked-omelet-muffins.png**: a few pixels of outer white plate rim extend past the central-half boundary after correction; all food remains inside. Five muffins total, including the halved one.
- **made-in-the-pan-chocolate-cake.png**: plate approximately 38–39% width; powdered sugar still somewhat granular after texture correction, not icing.
- **mandarinpineapple-organge-salad.png**: targeted texture correction improved the dense creamy gelatin matrix, but the surface remains fruit-granular rather than ideally smooth. Three squares and full plate fit.
- **maple-roasted-sweet-potato-wedges.png**: platter approximately 38–39% width; approximate ten-wedge count is partly obscured by overlap.

Minor notes: jerk pork platter is about 41% width; the lavender coupe is about 83% height rather than nominal 75%, entirely crop-safe. Hummus is slightly grainy; kalbi has five strips and three visible bone sections each, though the bones are somewhat raised/high-contrast. Squash soup includes both sage from the dish description and thyme from its garnish line. Some cast shadows are longer than ideal. Backdrop colors are generated visual approximations, not exact pixel-flat hex guarantees.

## Source and production

Pinned [batch-08.md](https://github.com/jsilton/mise/blob/2930ffa32b71668db713a90b09e9545c3dfa7cda/docs/image-prompts/batch-08.md), blob `74a16706399f1ba774576c25ee21eab3c94f2261`. Boundary README accepted batches 01–06 and prior redos; no new redo file existed. Batch 07 was already verified and reported, so its stale To make row was not repeated. Historical QA remains intact.

The original [margarita reference](https://github.com/jsilton/mise/blob/images/mise-style-tests-2026-10-31/docs/image-tests/2026-10-31/images/margarita-01-cookbook.png) was recovered byte-for-byte from Library after an environment reset, hash verified, and attached to every built-in imagegen call. No accepted assets were regenerated. Finals retain unchanged generated PNG bytes; only QA crops and sheets are derived.

116 calls for 49 selected finals (67 remakes), across three concurrent groups of 35, 36 and 45 calls. Reference restoration/setup took about 3 minutes from 11:35 UTC. Generation and coordinator QA ran 11:38–12:25 UTC on 2026-11-02, about 47 wall minutes including tool waits, with no intentional pause. Library and Git persistence are separate stages, not implementation or publication.

Exact attempted prompts are in `prompts/`; selected outputs and original-reference evidence are in `generation-provenance.json`; hashes and QA are in `qa-manifest.json`. Six `review/` sheets cover full frames and middle-half crops for entries 1–17, 18–33 and 34–49. Root independently reviewed all six sheets at 12:26 UTC and released these review candidates for branch saving with all five flags retained. This is not user acceptance of flagged images.
