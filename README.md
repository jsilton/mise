# Mise (The Kitchen Standard)

The version-controlled culinary standard for the Master Kitchen.

## Overview

**Mise** is a high-performance, static recipe codex built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). It represents a curated collection of family heritage and technical "Kitchen Standard" recipes, professionalized, validated, and discoverable.

### What is Mise?

A searchable, filterable recipe repository with 550+ family recipes organized by:

- **Cuisine** (Italian, Thai, Chinese, American, Mediterranean, etc.)
- **Difficulty** (Easy, Intermediate, Advanced)
- **Cooking Methods** (Bake, Roast, Fry, Steam, Slow-Cook, etc.)
- **Dietary** (Vegetarian, Vegan, Gluten-Free, Dairy-Free, etc.)
- **Occasions** (Weeknight, Entertaining, Holiday, Comfort-Food, etc.)
- **Flavor Profile** (Spicy, Sweet, Savory, Acidic, Umami, Fresh, etc.)

## The Kitchen Standard

Every recipe adheres to the Kitchen Standard:

- **Versatility:** Common bases (sauces, stocks, rubs) are separated for reuse.
- **Textural Balance:** Technical methods like "Bone-Dry Standard" or "Staged Roasting" ensure perfect mouthfeel.
- **Modern Interpretation:** Traditional family recipes updated with culinary science while honoring their roots.
- **The Finishing Touch:** Every dish is balanced with acid, salt, or aromatic to bridge flavor profiles.

## Features

### For Cooks

- 🔍 **Search** by recipe name or ingredients
- 🏷️ **Filter** by difficulty, cuisine, dietary, cooking method, occasion
- 📊 **Sort** by alphabetical, prep time, or difficulty
- 📱 **Responsive** design works on phone, tablet, desktop
- 📝 **Detailed** recipes with ingredients, chef's notes, directions

### For Developers

- ⚡ **Blazing Fast** - Static site generation for instant loads
- 🏗️ **Component-Driven** - Reusable, maintainable Astro components
- 🧪 **Validated** - Automated recipe validation and quality checks
- 📚 **Well-Documented** - Code practices, standards, and deployment guides
- 🚀 **QA Testing** - Pre-deployment verification suite

## Technical Stack

- **Framework:** Astro 5 (Static Site Generator)
- **Styling:** Tailwind CSS (Utility-First)
- **Data:** Markdown with YAML frontmatter
- **Validation:** Custom Node.js recipe validator
- **Testing:** Automated QA suite

## Development

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Opens: http://localhost:4321/mise/

# Run linting
npm run lint

# Format code
npm run format

# Validate all recipes
npm run validate-recipes

# Run QA tests (before deployment)
npm run qa

# Build production site
npm run build
```

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── SearchBar.astro
│   ├── FilterPanel.astro
│   ├── RecipeCard.astro
│   ├── RecipeHeader.astro
│   ├── TagBadge.astro
│   └── TagSection.astro
├── content/
│   └── recipes/         # 600+ recipes in Markdown
├── layouts/
│   └── Layout.astro     # Base page layout
├── pages/
│   ├── index.astro      # Homepage with search/filter
│   └── recipes/
│       └── [slug].astro # Recipe detail pages
└── knowledge/
    └── codex/           # Validation rules & standards
scripts/
├── validate-recipes.mjs # Recipe validation
└── qa-test.mjs          # QA test suite
```

### Key Documentation

- **[Review progress and handoff](docs/REVIEW_PROGRESS.md)** - Current audit repairs, validation evidence, and remaining work
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment workflow and checklist
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to contribute recipes
- **[LICENSE](LICENSE)** - MIT License for code, usage terms for recipes
- **[src/knowledge/TAGGING_GUIDE.md](./src/knowledge/TAGGING_GUIDE.md)** - Recipe tagging best practices
- **[src/knowledge/NAMING_STANDARDS.md](./src/knowledge/NAMING_STANDARDS.md)** - Naming conventions for recipe content

2.  **Fire the Oven (Dev):**

    ```bash
    npm run dev
    ```

3.  **Service (Build):**
    ```bash
    npm run build
    ```

## Adding Recipes

New recipes are added as `.md` files in `src/content/recipes/`.

### Frontmatter Schema (Mandatory)

```yaml
---
title: 'Recipe Name (The [X] Standard)'
role: 'main | side | dessert | base | drink | condiment'
vibe: 'nutritious | comfort | technical | holiday | quick'
prepTime: '15 min'
cookTime: '20 min'
totalTime: '35 min'
servings: '4'
ingredients:
  - '--- Section Header ---'
  - 'Item 1'
  - '[Related Recipe](/mise/recipes/related-slug)'
---
```

### Content Structure

Every file **must** include a `## Chef's Note` explaining the technical techniques applied and a `## Directions` section with bolded step headers.

```markdown
## Chef's Note

The key to this dish is **Culinary Technique** through **The [Method Name]**.

## Directions

1. **The Prep:** Step details...
2. **The Sear:** Step details...

## Serving Suggestions

- [Everyday Arugula Salad](/mise/recipes/everyday-arugula-salad)
```

## The learning kitchen

Mise now connects recipes to public lessons in browning, emulsions, eggs, braising, stir-frying, starch, seasoning, and temperature. Reviewed recipes show preparation decisions, step-specific cues and explanations, troubleshooting, substitutions, storage, and direct sources. The public recipe standard distinguishes editorial review from documented kitchen testing.

Read [the recipe development standard](docs/RECIPE_STANDARD.md). Run `npm test` and `npm run editorial-audit` for the new integrity checks and the full collection review queue. Automated checks are not a substitute for cooking the recipe.

## Recipe exports and integrity checks

The site JSON-LD, JSON export and Paprika export share a CommonMark/GFM instruction parser in `src/lib/recipe-content.mjs`. Only ordered-list items inside `## Directions` become steps. Subsections remain `HowToSection` objects; equipment preambles remain section descriptions rather than extra steps. Nested lists stay inside their parent step. Paprika keeps the full method prose, other body sections and original source links, with internal body links resolved against each canonical page. Paprika ingredient links also become absolute while retaining their labels, quantities and intended targets; legacy `/recipes/` targets receive the same `/mise/` base used by the site. Recognized `--- Section ---` ingredient dividers become colon-ended Paprika headings (`Section:`); unrecognized labels retain the existing policy. The combined text retains the existing record markers, full authored ingredients and Markdown, plus selected canonical URL, source attribution and source-URL lines when available. It does not dump every legacy frontmatter field.

After approved source changes, regenerate and validate the three artifacts:

```bash
npm run export:jsonld
npm run export:paprika
npm run export:text
npm run export:check
```

Each exporter accepts an optional output filename as its first argument for isolated previews. Paprika defaults to the ignored `.mise/paprika-exports/mise-recipes.paprikarecipes`; JSON and text retain their existing destinations. `export:check` checks that private Paprika archive by default, or a supplied export directory for isolated previews. No exporter publishes files or changes deployment settings. Export failure exits nonzero and leaves the previous output intact. The Paprika exporter requires `zip` and `unzip` on `PATH`; it checks the archive CRCs, exact recipe membership, pinned identities, gzip payloads and every recipe's content before replacing the output. Container verification is not an in-app import test. Paprika's [official format guide](https://www.paprikaapp.com/help/ipad/) describes the ZIP/gzipped-JSON container.

Exports use the current complete recipe collection, including existing craft entries such as playdough; this does not certify those entries as food. Any separate food/craft classification needs an explicit content policy. Source credits are preserved without assuming that a place, publisher or Git author is the recipe author. Legacy nutrition remains withheld in both structured exports, matching the site. No publication date or substitute nutrient estimate is invented. Unrecognized ingredient-section labels remain a separate source-model issue.

`npm test` includes parser, recipe-set, serialization, failed-packaging and deployment-base regressions. Run `node scripts/check-built-links.mjs dist` after building to reject same-origin links outside the configured deployment base. The default base remains `/mise/`; intentional same-host links outside this app would require an explicitly scoped checker exception.

For the existing Paprika library, use the [October 5, 2026 reconciliation](docs/paprika-sync/2026-10-05.md) and its merged archive, which retains original recipe identities, photos and ratings. Replay that reviewed baseline with `node scripts/sync-paprika.mjs '/path/to/My Recipes.zip'`; the script requires Python 3, `zip` and `unzip`. A changed Paprika export stops replay and needs a new comparison. Test one existing recipe before the full import, then compare a fresh native export with `node scripts/verify-paprika-sync.mjs '/path/to/fresh-export.paprikarecipes'`. File verification alone does not establish that the live Paprika library was updated.

The October 5 baseline import and fresh-export comparison are complete: 653 Paprika identities matched the reconciled library, including cooking text, ratings and photos. Three later mise repair commits changed 37 recipes; the private update file still needs importing and a fresh-export check. Follow the [current handoff](docs/paprika-sync/2026-10-05.md#current-handoff), which supplies the latest expected archive explicitly rather than using the verifier’s historical default. The unmodified fresh export is retained privately under `.mise/paprika-exports/retained-2026-10-05/paprika-sync-2026-10-05/`; redacted verification evidence remains in `exports/paprika-sync-2026-10-05/`. Category membership is compared as a set; repeated native category labels are reported separately.

## Private Paprika identities

Every complete recipe has a permanent internal `miseId`. The ignored `.mise/paprika-identities.json` binds those IDs to all 653 verified Paprika identities: 643 primary recipe IDs, seven additional saved identities and three drafts. Paprika IDs live only in that private registry. Keep `miseId` when renaming a recipe; a new variant must receive its own ID. The site schema omits these internal fields, and generated analysis context removes them. CI checks the built assets before deployment.

`npm run new-recipe -- "Recipe Name"` registers an identity once. For a newly authored recipe, use `npm run pin:paprika -- src/content/recipes/new-recipe.md`; remove a copied recipe's `miseId` first when creating a distinct variant. `npm run pin:paprika -- --check` verifies every complete recipe has a valid private binding. Missing private data stops Paprika export rather than creating replacement identities. Both Paprika exporters use the saved primary IDs; the sync exporter also retains the seven extra saved identities across filename changes. Its new output defaults to the private `.mise/paprika-exports/sync/` directory. The ordinary export still does not carry native Paprika photos, so use the merged sync archive for the existing library.

Back up `.mise/paprika-identities.json` privately; Git deliberately excludes it. Recovery from a verified export uses `npm run pin:paprika -- --from '/path/to/verified.paprikarecipes'`, matching explicit mise recipe links, declared aliases and the three reviewed drafts. Unmapped recipes or changed existing primary IDs stop recovery for review. A clean clone can build the website without the private registry, but Paprika export requires it. Run `npm run check:paprika-privacy` after building to check all generated assets for private IDs and native Paprika archives.

Public sync decisions use SHA-256 references to native identities; the actual IDs are bound from the supplied native export, never inferred from similar titles. The exact three draft identities are recovered by these references. Source-content digests still stop replay if the original export changed. Native archives and exact native HTML/photo references remain in ignored private storage, including the retained October 5 files under `.mise/paprika-exports/retained-2026-10-05/` and `.mise/recipe-sources/`. They are not available in a clean clone; restore a privately backed-up verified export for recovery. The privacy command also checks public review/sync evidence and rejects tracked native archives. Stable `miseId` fields remain in authored recipe and draft sources.
