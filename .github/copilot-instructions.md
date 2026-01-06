# Mise Copilot Instructions

**Mise** is a statically generated recipe codex (474+ recipes) built with **Astro 5** and **Tailwind CSS**.

## Architecture

- **Data Flow**: Markdown recipes (`src/content/recipes/*.md`) → Astro Content Collections (`src/content/config.ts`) → Static pages
- **Components**: Astro components in `src/components/` — UI components are stateless/props-driven (`TagBadge.astro`, `RecipeCard.astro`), logical components manage state (`FilterPanel.astro`)
- **Styling**: Tailwind only—no external CSS except `src/styles/print.css`
- **Validation**: `scripts/validate-recipes.mjs` enforces schema and runs knowledge base rules; `scripts/qa-test.mjs` runs pre-deploy checks

## Critical Workflows

### After ANY recipe or schema change

```bash
npm run validate-recipes
```

### Before deployment (required sequence)

```bash
npm run qa && npm run build && git add -A && git commit -m "message" && git push
```

**Never leave changes uncommitted**—CI/CD deploys on push. Build failures block deployment.

### Adding a New Recipe

1. Create `src/content/recipes/recipe-name.md` (kebab-case filename)
2. Add required frontmatter (see below)
3. Write Chef's Note explaining the "why" and any technique tips
4. Add numbered Directions with bold step names (e.g., `1. **The Sear:**`)
5. Run `npm run validate-recipes` to catch missing fields or tagging issues

### Renaming a Recipe

1. Rename the file
2. Add `aliases: ['old-slug']` to frontmatter so old links resolve
3. Run `npm run validate-recipes` to verify no broken internal links

### Handling Validation Failures

The validator checks: required fields, valid enum values, internal link resolution, and knowledge base rules.

- **Missing required field**: Add the field to frontmatter
- **Invalid enum value**: Check `src/content/config.ts` for allowed values
- **Broken internal link**: Use wiki-links `[[recipe-slug]]` or verify the target exists
- **KB suggestion**: Review the suggestion; suppress with `kb: { disable: ['kb.rule-id'] }` if intentionally deviating

## Recipe Frontmatter

### Required Fields

```yaml
title: Recipe Name
role: main | side | base | dessert | drink | condiment
vibe: quick | nutritious | comfort | technical | holiday
difficulty: easy | intermediate | medium | hard
```

### Common Optional Fields

```yaml
cuisines: [Italian, American] # Cultural origins (array)
occasions: [weeknight, entertaining] # When to make it
dietary: [vegetarian, gluten-free] # Restrictions
cookingMethods: [roast, braise] # Techniques used
flavorProfile: [savory, acidic] # Taste characteristics
prepTime: 20 min
cookTime: 45 min
totalTime: 65 min
servings: '4'
ingredients: ['1 cup flour', '2 eggs']
pairsWith: [basmati-rice, roasted-asparagus] # Suggested accompaniments
advancePrep: [marinate-overnight] # Special prep requirements
equipment: [slow-cooker, stand-mixer]
```

See `src/content/config.ts` for the complete schema.

## Cuisine Tagging Rules

- Use atomic tags: `Chinese`, `Italian`, `American`—never `Chinese-American`
- For fusion: use multiple tags `cuisines: [Korean, Mexican]`
- Valid: `Middle Eastern` (two words), invalid: `Middle-Eastern` (hyphenated)
- Common cuisines: `American`, `Italian`, `Chinese`, `Japanese`, `Korean`, `Thai`, `Vietnamese`, `Indian`, `Mexican`, `French`, `Greek`, `Middle Eastern`, `Jewish`, `Southern`

## Component Conventions

- **Props**: Define TypeScript interface for all component props
- **Tag Colors** (in `TagBadge.astro`): cuisine=`purple`, dietary=`green`, occasion=`amber`, flavor=`rose`, difficulty=`slate`
- **New components**: Only create if reused in 2+ locations or encapsulates significant logic

## Key Files

| Purpose              | File                             |
| -------------------- | -------------------------------- |
| Recipe schema        | `src/content/config.ts`          |
| Validation logic     | `scripts/validate-recipes.mjs`   |
| QA suite             | `scripts/qa-test.mjs`            |
| Tagging reference    | `src/knowledge/TAGGING_GUIDE.md` |
| Knowledge base rules | `src/knowledge/codex/*.json`     |
| Code standards       | `CODE_PRACTICES.md`              |
| Workflow rules       | `CONTRIBUTING.md`                |

## Recipe Analysis (Multi-Lens Critique)

When improving or reviewing recipes, apply three perspectives:

### 1. Food Scientist (Technique)

- Is there a sear step for proteins? Is surface drying mentioned?
- Are spices bloomed in fat before adding liquid?
- Is temperature specified where it matters (e.g., "475°F for the crust, reduce to 375°F")?
- Does braised meat get the low-and-slow time it needs?

**Example from char-siu.md:** "Roast at 475°F for 10 minutes to set the crust... Reduce oven to 375°F" — staged roasting for crust then gentle cooking.

### 2. Flavor Architect (Balance)

- Where is the acid? Rich dishes need brightness (lemon, vinegar, tomato).
- Is there enough fat to carry flavors?
- Is there texture contrast (crispy vs. creamy, fresh vs. cooked)?
- Does it finish with something (herbs, flaky salt, zest)?

**Example from chicken-tikka-masala.md:** "Crush the Kasuri Methi between your palms to release its oils" — aromatic finishing touch plus cold butter for gloss.

### 3. Purist (Authenticity)

- Is this in season? (Asparagus in winter is a red flag)
- Does it honor the dish's roots while updating technique?
- Are shortcuts undermining the result?

**Example from brisket-with-carrots-and-onions.md:** Chef's Note explains Jewish-American culinary history and the "why" of slicing against the grain.

## Knowledge Base (KB) Rules

The `src/knowledge/codex/` directory contains JSON rules that automatically flag common issues during validation:

- `missing-acid.json` — Suggests acid for rich/starchy dishes lacking lemon, vinegar, etc.
- `maillard-note.json` — Reminds to dry proteins and avoid overcrowding for browning
- `low-temp-poultry-safety.json` — Flags poultry recipes without safe temperature notes

To suppress a rule for a specific recipe: `kb: { disable: ['kb.missing-acid'] }`

## Collection Operations

- **Gap Analysis**: Scan `public/recipes/kitchen-context/*.json` for metadata patterns (cuisines, roles, seasons)
- **Meal Planning**: Build around a Main; pair by vibe (weeknight < 45min active); match or complement cuisines
- **Validation Report**: Check `public/recipes/validation-report.json` for current issues across all recipes
