# Lightweight pilot worker

Use one assigned family of four frozen recipes. Read only its input files, supplied family evidence packet and this contract. Do not read reference findings, old proposal packages or other worker outputs. Do not browse independently unless root explicitly assigns a missing source. Do not edit recipes or publish.

For each recipe return a JSON object with `slug`, `inputSha256`, `ingredientLedger`, `process`, `findings`, `proposedEdits`, `unresolved`, and `identityPreserved`.

- `ingredientLedger`: one entry per original ingredient line, with exact text and the numbered method destinations. Flag absent, ambiguous or duplicate allocations. Never silently assign an unknown quantity.
- `process`: ordered stages with stated minutes, dependencies, whether attention is required and stated equipment. Unknown times/capacities are null. Distinguish elapsed overlap from addition; do not invent a total from guesses.
- `findings`: stable IDs, exact supporting input text, category, severity (`critical`, `material`, `minor`), applicable packet evidence IDs, and a concise explanation. Absence of an evidence ID means an internal inconsistency or unresolved question, not a verified external claim.
- `proposedEdits`: stable IDs, exact original text, exact replacement, `routine` boolean, finding IDs and explanation. Routine edits are only mechanically supported link/label/duplicate-word/presentation changes. All edible quantities, substitutions, timing, cooking endpoints, provenance, yield and scientific claims require stronger review.
- `unresolved`: precise questions and effects, not invented answers. Nominate potential duplicates only; never merge.
- `identityPreserved`: explicitly list defining ingredients/techniques/attribution kept intact. Do not reduce fats or seasonings to match another recipe.

Read the complete recipe before writing findings. Check every ingredient destination, method sequence, temperature/texture endpoint, source attribution, scaling implications, proportions, serving yield, timing, equipment, substitutions and actual relationships. Do not assume every category has a defect. Do not add generic educational filler or prohibited recipe panels. No manufacturer promotion or physical-test claims.

Return one `worker.json` containing `model`, `startedAt`, `finishedAt`, `usage` (actual input/output tokens and USD when tool supplied; otherwise null), `recipes`, and `limitations`. Preserve exact source bytes and hashes. Report partial completion explicitly. Keep explanations short enough for efficient adjudication; never omit a material finding to meet a length target.

## Revision after the internal-only baseline

Examine frontmatter as well as prose. Include `coverage` with explicit findings, no-issue reasoning or unresolved questions for timing, equipment, proportions, yield, scaling, substitutions, attribution, relationships and nutrition plausibility. Do not invent nutrition calculations. Give exact routine replacement text when a supported metadata or presentation correction is identified; findings alone are not proposed edits. In process records distinguish `statedEquipment` from `inferredEquipment`; never label inferred tools as source facts. Do not infer that absent evidence means a category passed.

Use only observed clock timestamps; if not observed, report null. Use the assigned model identifier, not a guessed model name. Unverifiable nutrition, unknown elapsed time, and absent attribution are unresolved questions unless you identify specific evidence of a defect. Approved canonical method labels: assemble, bake, blend, boil, braise, broil, char, fry, griddle, grill, infuse, marinate, mix, no-cook, pan-fry, poach, raw, roast, saute, sear, shape, simmer, slow-cook, smoke, steam, stir-fry, toast, toss. New taxonomy requires escalation.
