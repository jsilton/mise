# Mise batch 03 redos

Three replacement review images, exact filenames and 1536 × 1024 PNG. Planned branch: `images/mise-batch-03-redos-2026-11-01`.

## QA

All three pass full-frame and middle-half crop review: complete food and plate rims remain within x384–1152. No steam, props or cutlery observed.

- Asparagus: six short spears; plate about 43% width.
- Enchiladas: two short rolls facing the camera; round plate about 43% width.
- Chicken fingers: four intact plus one broken finger, ramekin on plate; plate about 49% width rather than nominal 45%, but its complete rim fits (approximately x389–1138).

No remaining rim-loss flag. Generated backdrop colors remain visual approximations; natural contact shadows remain. These are review assets, not a claim of perfect styling.

## Production

Nine built-in generation calls (three initial, six remakes), original margarita reference attached each time. Final PNG bytes are unchanged tool outputs. Full and actual middle-half crops were inspected; Python was used only for QA sheets, hashes and dimensions. Production/QA ran approximately 18:52–19:01 UTC, about nine minutes wall time with concurrent work and no intentional pause. Packaging and Git persistence are separate stages.

Source: [batch 03 redo brief](https://github.com/jsilton/mise/blob/ca1e0328668134ead3f67070a702d049278e0c71/docs/image-prompts/batch-03-redo.md). Source/reference hashes are in `source-provenance.json`; final hashes in `qa-manifest.json`; exact prompts and attempt records in `prompts/` and `generation-provenance.json`.

New redo brief was found at the boundary after batch 04 was delivered, before batch 05 generation. Redos were prioritized. Historical batch 03 and batch 04 originals remain untouched. No merge, PR, deployment or recipe mapping.
