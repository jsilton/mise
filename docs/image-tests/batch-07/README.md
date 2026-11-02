# Mise batch 07 — review images

49 PNGs at 1536 × 1024, for review only. No merge, deployment or recipe mapping.

## QA result

All 49 food arrangements and complete vessels fit the central-half crop (x384–1152). Full-frame and crop checks covered recipe ingredients/counts, no steam or extra props/cutlery, centering and flat backdrop appearance. **48 accepted without material flags; one retained with a recipe-detail flag**:

- **homemade-rice-pilaf.png**: rice remains somewhat short/plump after two targeted long-grain corrections, although white rice and toasted golden orzo are distinct.

Minor notes: the roast turkey platter is about 40.8% of frame width after framing corrections. Pork tenderloin and chicken-meatball bowl have narrow but intact rim margins. Grilled-cheese sandwich halves overlap, with both supported on the soup bowl rim. Drinks retain their requested glass/garnish proportions. Generated backdrop colors are visual approximations of prescribed hex values; natural soft shadows remain rather than a pixel-flat guarantee.

## Provenance

Source [batch-07.md](https://github.com/jsilton/mise/blob/2aef5fb2aeaa91faa86f7dd7d66c336a79ced817/docs/image-prompts/batch-07.md), blob `954c4a56e24329de8061998be226807a046f9c71`. Boundary README closed 01–05 and prior redos; no new redo file existed. Batch 06 was already remotely verified and reported, so its stale source status was not treated as an unfulfilled request. Its historical flags were not overwritten.

Original [margarita reference](https://github.com/jsilton/mise/blob/images/mise-style-tests-2026-10-31/docs/image-tests/2026-10-31/images/margarita-01-cookbook.png) attached to every built-in imagegen call. Final PNG bytes are unchanged generated outputs. Only QA crops and contact sheets are derived; no external generation API used.

90 calls for 49 finals (41 remakes), in three concurrent groups of 31, 26 and 33 calls. Generation and coordinator review ran 01:46–02:20 UTC on 2026-11-02, approximately 34 wall minutes including tool waits, without an intentional pause. Packaging, Library saving and remote Git verification are separate stages, not implementation or publication.

Exact attempted prompts are in `prompts/`; source/reference evidence in `source-provenance.json` and `generation-provenance.json`; final hashes and QA in `qa-manifest.json`. Six sheets in `review/` show full frames and central-half crops for entries 1–17, 18–33, 34–49. Root independently reviewed all six sheets at 02:21 UTC and released this package for review-branch saving with the rice-grain flag disclosed. This is not user acceptance.
