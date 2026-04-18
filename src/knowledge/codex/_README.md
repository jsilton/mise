# Omnivore's Codex (KB)

This folder contains small, human-editable JSON rule files for the culinary knowledge base. Each file is a rule object with:

- id: unique id
- title
- category
- severity: "hint" | "warn" | "fail" | "disabled"
- description
- appliesToTags: optional array of tags (method, vibe, role) to narrow applicability
- detection: non-empty array of detection clauses (see existing rules for examples)
- suggestionTemplate: string to present to contributors
- examples: optional example notes

Keep rules short and referencable; add tests/examples where useful.

## Rules for adding files to this folder

The validator (`scripts/validate-recipes.mjs`) loads **every** `*.json` file here as a rule. To prevent false-positive suggestions:

- **Every rule must have a non-empty `detection` array.** A rule without detection clauses will be skipped by the validator.
- **Do not put documentation-style JSON here.** Architecture/standards documents that aren't detection rules belong elsewhere (e.g., root-level `.md` files or `src/knowledge/` root).
- **Deprecating a rule:** Prefer deleting the file outright. If you must keep a tombstone for history, set `severity: "disabled"` or `_deprecated: true` — both are respected by the validator, which will skip them.
- **Log changes** in `src/knowledge/kb-CHANGELOG.md` with a YYYY-MM-DD entry.
