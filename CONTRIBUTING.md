# Contributing to Mise

This document defines the operational mandates and best practices for working on the `mise` project. Adherence ensures consistency, quality, and stability.

## 1. Safety & Verification (CRITICAL)

- **Verify First:** NEVER commit code without successfully running `npm run build`. If the build fails, the task is not complete.
- **Read First:** ALWAYS read a file's current content before editing to ensure context is accurate. Do not overwrite code based on assumptions.
- **No Secrets:** Never hardcode secrets, keys, or passwords.

## 2. Git Workflow

**CRITICAL: Always follow this sequence after making changes:**

```bash
# 1. Verify changes work
npm run build

# 2. If build succeeds, immediately commit and push
git add -A
git commit -m "Clear, descriptive commit message"
git push origin main
```

- **Atomic Commits:** Create small, focused commits with descriptive messages (e.g., "Fix: YAML escaping", "Feat: Add nutrition parser").
- **Push Immediately:** Push to `origin` immediately after completing a logical unit of work. Do not accumulate large stacks of unpushed commits.
- **Never Skip Commit:** After a successful build, ALWAYS commit and push. This ensures GitHub Actions deploys changes immediately.
- **Clean Workspace:** Delete temporary scripts, logs, or debug files before committing.

**Why this matters:** Changes only deploy when pushed to GitHub. A successful local build means nothing if the code isn't committed.

## 3. Code Quality & Formatting

- **Automated Formatting:** Run `npm run format` to automatically format code using Prettier before committing.
- **Verify Locally:** Run `npm run build` to ensure changes build successfully before opening a PR.
- **No Placeholders:** Never leave "TODO", "lorem ipsum", or stubbed logic in committed code.
- **Dependency Awareness:** Check `package.json` before installing new packages to avoid redundancy.

## 4. The Culinary Standard (Recipe Guidelines)

Every recipe in this library must be a "Keeper." We prioritize flavor layering, texture, and reliability.

### A. Taxonomy (The "Composable Menu")

Recipes are components, not just isolated instructions. Our metadata enables intelligent meal planning and constraint-based selection.

**Core Identity Fields:**

- **Role:** Every dish must have a role (`main`, `side`, `base`, `dessert`, `drink`, `condiment`).
- **Vibe:** Every dish must have a context (`quick`, `nutritious`, `comfort`, `technical`, `holiday`).
- **Difficulty:** Skill level required (`easy`, `intermediate`, `medium`, `hard`).

**Planning Metadata:**

- **Occasions:** Multiple tags allowed for time-based, social, seasonal, and nutritional contexts.
- **Seasons:** When the dish is best (`spring`, `summer`, `fall`, `winter`, `year-round`).
- **Nutritional Density:** How heavy the meal feels (`light`, `moderate`, `hearty`).
- **Leftovers:** Reheating quality (`poor`, `good`, `excellent`).
- **Advance Prep:** Special requirements (`marinate-overnight`, `make-ahead-sauce`, `dough-rest`, etc.).
- **Equipment:** Special tools needed (`grill`, `slow-cooker`, `instant-pot`, `stand-mixer`, etc.).

**Occasion Tags Architecture:**

_Time-Based Constraints:_

- `weeknight` - 45 min or less, minimal cleanup, reliable
- `weekend-project` - leisurely cooking, multiple steps, learning experience
- `quick-lunch` - 30 min or less, often single-pot
- `meal-prep` - makes ahead, scales well, reheats excellently

_Social Context:_

- `entertaining` - impressive for guests, plating matters
- `date-night` - special but not overwhelming, romantic
- `kids-approved` - family-friendly, not too adventurous
- `potluck` - travels well, serves a crowd, room temperature okay

_Seasonal/Calendar:_

- `holiday` - Thanksgiving, Christmas, Passover, etc.
- `summer` - uses summer produce, grilling, refreshing
- `winter` - hearty, warming, root vegetables
- `spring` - light, fresh, bright flavors
- `fall` - comfort, squash, apples, cinnamon

_Nutritional Intent:_

- `comfort-food` - indulgent, soul-satisfying, rich
- `light-and-fresh` - lighter proteins, lots of vegetables, bright
- `post-workout` - protein-forward, nutrient-dense
- `indulgent` - celebration, special treat, no compromises

### B. Cuisine Tagging Rules

Cuisine tags identify the cultural origin of a recipe. Follow these rules for consistency:

**Core Principles:**

- Use the actual cuisine name, not hybrid descriptors
- Never create compound tags (no "Chinese-American", "Italian-American", "German-American")
- Never use "Fusion" as a tag - instead tag with both source cuisines
- A recipe can have multiple cuisine tags if it genuinely blends traditions
- Use consistent capitalization and spacing

**Valid Cuisine Tags:**

- `American`, `Southern`
- `Chinese`, `Japanese`, `Korean`, `Thai`, `Vietnamese`, `Indian`
- `Italian`, `French`, `Spanish`, `Greek`, `Swiss`, `Belgian`
- `Mexican`, `Caribbean`
- `Middle Eastern`, `Israeli`, `Lebanese`, `Turkish`, `Persian`
- `Mediterranean`
- `Jewish`
- `Hawaiian`, `Brazilian`, `German`, `British`

**Examples:**

- General Tso's Chicken → `Chinese` (it's Chinese-American food, but tag as Chinese)
- Chicken Tikka Masala → `Indian, British` (two tags showing fusion)
- Spaghetti and Meatballs → `Italian, American` (Italian dish with American adaptation)
- Korean BBQ Tacos → `Korean, Mexican` (clear fusion of both)
- Brisket with Carrots → `Jewish` (traditional Jewish preparation, distinct from general American or European)
- Shrimp and Grits → `Southern` (distinct regional American cuisine)
- Falafel → `Middle Eastern` (broadly Middle Eastern, not specific to one country)
- Chicken Shawarma → `Middle Eastern` or `Lebanese` (can be specific or broad)

**What NOT to do:**

- ❌ `Chinese-American` → Use `Chinese` or `Chinese, American`
- ❌ `Asian-Fusion` → Use specific cuisines like `Thai, Chinese`
- ❌ `Middle-Eastern` (hyphenated) → Use `Middle Eastern` (two words)
- ❌ `Italian-American` → Use `Italian` or `Italian, American`

### C. The 7 Core Culinary Techniques

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

## 5. Batch Scripts for Recipe Improvements

The project includes several automated scripts to improve recipes at scale. Always run with `--dry-run` first to preview changes.

### batch-technique.mjs

Improves technique precision across recipes in three ways:

1. **Temperature additions:** Finds cooking steps that mention "sear", "fry", "sauté", "brown", or "caramelize" without explicit temperature, and adds inline temperatures (e.g., "high heat (400-450°F)").
2. **Visual doneness cues:** Replaces vague phrases like "cook until done" with specific visual cues (e.g., "until golden brown and crispy", "until sauce coats the back of a spoon").
3. **Resting instructions:** Adds resting steps to meat-based main dishes with sear/roast/grill/bake methods if one isn't already present.

**Usage:**

```bash
# Dry run (preview first 10 recipes):
npm run batch-technique:dry

# Or with options:
node scripts/batch-technique.mjs --dry-run --verbose --limit 20

# Apply all changes:
npm run batch-technique
```

**Options:**

- `--dry-run` — Preview changes without writing files
- `--verbose` — Show detailed output for each recipe modified
- `--limit N` — Process only first N recipes (default: 10 for dry-run, unlimited otherwise)

**What it modifies:**

- Only steps with numbered headers (e.g., `1. **Sear:**`)
- Skips steps that already have temperatures or good visual cues
- Skips rest instructions for recipes that already mention resting
- Non-destructive: only adds detail, never removes existing content

**After running:**

```bash
npm run build      # Verify the build succeeds
npm run validate-recipes  # Validate all recipe metadata
git add -A && git commit -m "refactor: improve technique precision"
git push origin main
```

## 6. Documentation

- **Keep it Fresh:** If you change the architecture, scripts, or usage commands, update `README.md` immediately.

## 7. Internal Linking & Aliases 🔗

- **Use wiki-links** for internal recipe references when authoring: `[[banana-bread]]` or `[[Banana Bread]]`. The validator will resolve these to the canonical `/recipes/<slug>` URL when checking links.
- **Aliases for safe renames:** If you rename a recipe file, add `aliases: ['old-slug']` to its frontmatter so old links continue to work.
- **Run the validator before PRs:** Run `npm run validate:recipes` locally; the project will also run this check in CI for every PR (it generates `public/recipes/index.json` for tooling).
- **Images & metadata:** Add `image:` and short `description:` frontmatter where possible so recipes have good social previews and structured data.

## Omnivore's Codex (KB)

We maintain a small, human-editable knowledge base of culinary rules and heuristics at `src/knowledge/codex/`. These rules power automated, transparent suggestions that appear during PR validation.

- **Edit via PRs:** Add or change rules by creating or updating a JSON file in `src/knowledge/codex/`. Keep rules small and focused; include `examples` and a short rationale when possible.
- **Severity guidance:** Use `fail` only for safety-critical issues (e.g., poultry low-temp notes). Use `warn` for important structural issues and `hint` for soft editorial suggestions.
- **Testing:** After editing rules, run `npm run validate:recipes` to see the updated suggestions in `public/recipes/validation-report.json`.
- **Changelog:** Document notable KB changes in `src/knowledge/kb-CHANGELOG.md` so reviewers can track rule evolution.

### Audience & KB overrides

- **Audience frontmatter:** Add `audience: "kids"` or `audience: ["kids","family"]` to indicate the intended eater(s). Rules can opt-out for specific audiences (e.g., plating suggestions for children's food).
- **Suppress a rule for a specific recipe:** Add `kb: { disable: ["kb.plating-suggestion"] }` in frontmatter to silence a KB rule when you intentionally deviate.
- **When in doubt:** Prefer adding a short rationale in the recipe `## Chef's Note` explaining special context (e.g., "made for toddlers; keep toppings simple and nut-free").

## 8. Recipe Tagging & Classification 🏷️

All recipes use a standardized tagging system to enable discovery, filtering, and contextual suggestions. See [TAGGING_GUIDE.md](src/knowledge/TAGGING_GUIDE.md) for the complete schema and examples.

### Six Tag Categories:

1. **cookingMethods** (array): Techniques used (`bake`, `roast`, `fry`, `steam`, `slow-cook`, etc.)
2. **cuisines** (array): Cultural/regional origin(s) (`Italian`, `Chinese`, `Thai`, `American`, etc.)
3. **dietary** (array): Restrictions/attributes (`vegetarian`, `vegan`, `gluten-free`, `dairy-free`, etc.)
4. **occasions** (array): When/why to make it (`weeknight`, `entertaining`, `holiday`, `comfort-food`, etc.)
5. **flavorProfile** (array): Taste characteristics (`spicy`, `sweet`, `savory`, `acidic`, `umami`, `fresh`, etc.)
6. **difficulty** (single): Skill level (`easy`, `intermediate`, `advanced`)

### Example Frontmatter:

```yaml
---
title: Chicken Parmesan
origin: Italy
cuisines: [Italian]
role: main
vibe: comfort
difficulty: intermediate
cookingMethods: [fry, bake]
flavorProfile: [savory, rich, acidic]
dietary: []
occasions: [weeknight, comfort-food]
prepTime: 15 min
cookTime: 25 min
totalTime: 40 min
---
```

### Best Practices:

- **Use exact tag names:** Tags are case-sensitive and standardized; refer to `TAGGING_GUIDE.md` for approved values.
- **Empty arrays:** Use `[]` for tags with no applicable values (e.g., `dietary: []` for unrestricted recipes).
- **Be thorough:** Add all applicable tags; a recipe can have multiple cuisines, occasions, and flavor profiles.
- **Lean on `vibe`:** For quick context, `vibe` captures tone (quick, comfort, technical, etc.); tags provide granular filtering.
