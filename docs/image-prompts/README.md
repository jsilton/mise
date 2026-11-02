# Mise recipe image prompts

Every recipe has a prompt. Work through the batches below in order, one batch at a time.

| Order | File | Images | Status |
|---|---|---|---|
| 1 | batch-02-redo.md | 2 | Done, both pass |
| 2 | batch-03.md | 49 | Done, all 49 pass after redos |
| 3 | batch-03-redo.md | 3 | Done, all 3 pass |
| 4 | batch-04.md | 49 | Done, all 49 pass, no redos |
| 5 | batch-05.md | 49 | Done, all 49 pass, no redos (Cu Chao Mian rim clip is small enough to keep) |
| 6 | batch-06.md | 49 | Done, all 49 pass, no redos |
| 7 | batch-07.md | 49 | To make |
| 8 | batch-08.md | 49 | To make |
| 9 | batch-09.md | 49 | To make |
| 10 | batch-10.md | 49 | To make |
| 11 | batch-11.md | 49 | To make |
| 12 | batch-12.md | 49 | To make |
| 13 | batch-13.md | 49 | To make |
| 14 | batch-14.md | 43 | To make |

Batches 1 to 6 and the batch 1, 2 and 3 redos are done; don't remake them. There are no open redos; carry on with batch 7.

Claude checks each batch branch as it lands. When some images need another go, a `batch-NN-redo.md` file appears in this folder and gets a row in the table above. Check here before each new batch and make any redos first, on their own branch, `images/mise-batch-NN-redos-YYYY-MM-DD`.

## How to make a batch

- Each file holds one text block: the shared style, then one numbered entry per image (file name, dish, backdrop colour, moment). An image's prompt is the shared style plus its own entry.
- Attach the style reference `docs/image-tests/2026-10-31/images/margarita-01-cookbook.png` on branch `images/mise-style-tests-2026-10-31` to every image.
- 1536 x 1024 PNG, named exactly as the entry says (the recipe slug).
- Use the backdrop colour given for each image: one flat colour edge to edge.
- Check every image before you finish: no steam, no props or cutlery, the dish centred and about half the frame wide, a flat even backdrop, and the dish matching its description. Remake any that fail.
- Put each batch on its own new branch, `images/mise-batch-NN-YYYY-MM-DD`, with the images in `docs/image-tests/batch-NN/images/` and a short README listing anything that still looks off.
- Don't merge, deploy, open a pull request to main, or map images into recipes.

Full single prompts for any batch: `node scripts/image-prompts/fill.mjs --template photo --batch batch-NN`.
