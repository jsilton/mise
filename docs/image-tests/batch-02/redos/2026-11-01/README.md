# Mise batch 2 redos — 2026-11-01

Two replacement candidates at the original filenames. Source: `docs/image-prompts/batch-02-redo.md` on `images/approaches`, commit `a4aa10570381e102596f698254ed7110e1c3f7a0`.

The original margarita cookbook reference was attached on every generation/edit call. Both PNGs are 1536 × 1024. Full-frame and central-half crop checks were performed. Both have no steam, no backdrop props or cutlery, centered plates about half the frame width, and visually even backdrops. Backdrop colours are approximate, not pixel-exact hex values.

- **banana-egg-oat-pancakes.png:** Three thin, overlapping, fanned pancakes with oat flecks, banana slices and syrup. Passed visual review after two attempts.
- **anelletti-al-forno.png:** Ring shapes and holes are now clear; the portion, peas, ragù, cheese and basil are present. Seven attempts improved shape and framing, but the ring bands still look thicker and more regular than the requested tiny delicate flat hoops. **Retain this as a flagged review candidate, not an unqualified pass.**

`review/full-and-middle-half.png` shows both full frames above their middle-half crops. `qa.json` records dimensions, hashes and remaining caveats. `prompts/` contains the source prompt and all actual generation/edit prompts. The banana prompt ending `-01.txt` is the source-only prompt; actual attempts are named `-attempt-01` and `-attempt-02`.

Generated with built-in image generation. Nine calls total. No manual alteration to final image pixels. No merge, deployment, pull request or recipe mapping.
