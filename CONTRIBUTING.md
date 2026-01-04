# Contributing to Mise

This document defines the operational mandates and best practices for working on the `mise` project. Adherence ensures consistency, quality, and stability.

## 1. Safety & Verification (CRITICAL)

- **Verify First:** NEVER commit code without successfully running `npm run build`. If the build fails, the task is not complete.
- **Read First:** ALWAYS read a file's current content before editing to ensure context is accurate. Do not overwrite code based on assumptions.
- **No Secrets:** Never hardcode secrets, keys, or passwords.

## 2. Git Workflow

- **Atomic Commits:** Create small, focused commits with descriptive messages (e.g., "Fix: YAML escaping", "Feat: Add nutrition parser").
- **Push Immediately:** Push to `origin` immediately after completing a logical unit of work. Do not accumulate large stacks of unpushed commits.
- **Clean Workspace:** Delete temporary scripts, logs, or debug files before committing.

## 3. Code Quality & Formatting

- **Automated Formatting:** Run `npm run format` to automatically format code using Prettier before committing.
- **Verify Locally:** Run `npm run build` to ensure changes build successfully before opening a PR.
- **No Placeholders:** Never leave "TODO", "lorem ipsum", or stubbed logic in committed code.
- **Dependency Awareness:** Check `package.json` before installing new packages to avoid redundancy.

## 4. The Culinary Standard (Recipe Guidelines)

Every recipe in this library must be a "Keeper." We prioritize flavor layering, texture, and reliability.

### A. Taxonomy (The "Composable Menu")

Recipes are components, not just isolated instructions.

- **Role:** Every dish must have a role (`main`, `side`, `base`, `dessert`, `drink`, `condiment`).
- **Vibe:** Every dish must have a context (`quick`, `nutritious`, `comfort`, `technical`, `holiday`).

### B. The 7 Core Culinary Techniques

1.  **Traditional Roots:** Preserve the soul of a dish while updating it for modern equipment and quality ingredients.
2.  **Modern Interpretation:** Preserving family history while replacing legacy shortcuts (e.g., margarine, boiling meat) with professional standards (e.g., butter, searing).
3.  **Acid & Salt Balance:** Every dish must have a "High Note"—a finishing element of acidity or salt that cuts through richness.
4.  **Textural Balance:** Maintaining distinct textures. No overcooked or mushy vegetables; keep components distinct to maintain "pop."
5.  **Component-Based Cooking (Modularity):** Design recipes as versatile building blocks that can be reused across different meals.
6.  **Culinary Science:** Use specific techniques for mouthfeel (e.g., alkaline rinses for shrimp crispness, emulsion for meat texture).
7.  **Thermal Precision:** Using exact temperatures (e.g., 137°F for pork) rather than "until done."

### C. Technique Over Convenience

- **No Boiled Meat:** Meat should be seared, roasted, or poached gently. Never boiled in plain water.
- **Source Authority:** Use Serious Eats, Bon Appétit, Alton Brown, Rick Bayless, Smitten Kitchen.

## 5. Documentation

- **Keep it Fresh:** If you change the architecture, scripts, or usage commands, update `README.md` immediately.

## 6. Internal Linking & Aliases 🔗

- **Use wiki-links** for internal recipe references when authoring: `[[banana-bread]]` or `[[Banana Bread]]`. The validator will resolve these to the canonical `/recipes/<slug>` URL when checking links.
- **Aliases for safe renames:** If you rename a recipe file, add `aliases: ['old-slug']` to its frontmatter so old links continue to work.
- **Run the validator before PRs:** Run `npm run validate:recipes` locally; the project will also run this check in CI for every PR (it generates `public/recipes/index.json` for tooling).
- **Images & metadata:** Add `image:` and short `description:` frontmatter where possible so recipes have good social previews and structured data.
