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
