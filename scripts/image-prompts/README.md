# Recipe image prompts

Prompts for an outside image AI, in the bright cookbook style chosen on 31 October 2026.

For each batch of about 50 recipes:

1. Write a short brief for each recipe in `briefs.json`: what the finished dish looks like, its texture, colours, serving dish and garnish. The script fills in the rest, but the prompts it fills on its own are too plain to use as they are.
2. Fill the prompts:
   `node scripts/image-prompts/fill.mjs --template photo --batch batch-02 --out docs/image-prompts/batch-02.md`
3. Generate one image per prompt with `margarita-01-cookbook.png` attached as the style reference.
4. Even out the backdrops to the exact cook-time colours:
   `python3 scripts/image-prompts/even_backdrop.py IN_DIR OUT_DIR`
5. Check every image on the phone card before using it.

Batches are plain lists of recipe file names in `batches/`. Batch 1 (20 recipes) is done; `batch-01-redo` holds the two to make again; batches 2 to 14 hold the other 631 recipes.
