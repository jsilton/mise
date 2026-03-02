# Mise — The Kitchen Standard

Mise is a culinary knowledge base and AI-assisted cooking system. The static site at `jordansilton.com/mise/` is one output, but the real value is using Claude as a culinary co-pilot — planning meals, improving recipes, learning techniques, and continuously leveling up as a chef.

## What's in the Repo

- **503+ recipes** in `src/content/recipes/*.md` with 30+ metadata fields each
- **23 curated meals** in `src/content/meals/*.md` (multi-recipe compositions)
- **7 weekly calendars** in `src/content/calendars/*.md` (meal plans)
- **Knowledge codex** in `src/knowledge/codex/*.json` (automated quality rules)
- **Technique references** in `src/knowledge/techniques/*.md` (reusable culinary techniques)
- **Astro 5 static site** with search, filtering, and recipe detail pages

## The Kitchen Standard Philosophy

Every recipe should embody these principles:

1. **Versatility** — Common bases (sauces, stocks, rubs) are separated for reuse across meals
2. **Textural Balance** — Crispy vs. creamy, fresh vs. cooked. Every dish needs contrast
3. **Modern Interpretation** — Traditional family recipes updated with culinary science while honoring roots
4. **The Finishing Touch** — Every dish is balanced with acid, salt, or aromatic to bridge flavor profiles

### Core Cooking Principles

- Always **dry proteins** before searing (paper towels, pat bone-dry)
- Always **bloom spices** in fat before adding liquid
- Always **add acid** to rich/starchy dishes (lemon, vinegar, wine)
- Always **rest meat** after cooking (minimum 5-10 min)
- Always **taste and adjust** before serving — salt, acid, fat, heat
- Never overcrowd the pan — sear in batches for proper Maillard reaction
- Use starchy pasta water to emulsify sauces
- Deglaze pans — those brown bits (fond) are pure flavor

## How to Review Recipes (3-Lens Critique)

When improving or reviewing any recipe, apply all three perspectives:

### Lens 1: Food Scientist (Technique)
- Is there a sear step for proteins? Is surface drying mentioned?
- Are spices bloomed in fat before adding liquid?
- Is temperature specified where it matters (e.g., "475°F for the crust, reduce to 375°F")?
- Does braised meat get the low-and-slow time it needs?
- Are visual cues provided ("until golden brown," "until sauce coats the back of a spoon")?

### Lens 2: Flavor Architect (Balance)
- Where is the acid? Rich dishes need brightness (lemon, vinegar, tomato)
- Is there enough fat to carry flavors?
- Is there texture contrast (crispy vs. creamy, fresh vs. cooked)?
- Does it finish with something (herbs, flaky salt, zest, cold butter)?

### Lens 3: Purist (Authenticity)
- Is this in season? (Asparagus in winter is a red flag)
- Does it honor the dish's roots while updating technique?
- Are shortcuts undermining the result?

## Recipe File Structure

Every recipe is a `.md` file in `src/content/recipes/` with this structure:

### Required Frontmatter
```yaml
title: 'Recipe Name'
role: main | side | base | dessert | drink | condiment
vibe: quick | nutritious | comfort | technical | holiday
difficulty: easy | intermediate | advanced
prepTime: '15 min'
cookTime: '20 min'
totalTime: '35 min'
servings: '4'
ingredients:
  - '2 lbs boneless, skinless chicken thighs'
  - '--- Sauce ---'    # section dividers use triple dashes
```

### Important Optional Fields
```yaml
origin: 'China'                              # single country
cuisines: [Chinese, Cantonese]               # cultural styles (array)
cookingMethods: [roast, braise, sear]        # techniques used
dietary: [gluten-free, dairy-free]           # restrictions
occasions: [weeknight, entertaining, meal-prep]
flavorProfile: [sweet, savory, umami]
seasons: [fall, winter]                      # or year-round
nutritionalDensity: light | moderate | hearty
leftovers: poor | good | excellent
advancePrep: [marinate-overnight, make-ahead-sauce]
equipment: [slow-cooker, stand-mixer, grill]
pairsWith: [basmati-rice, everyday-arugula-salad]  # must be valid recipe slugs
```

### Required Content Sections

**## Chef's Note** (2-3 sentences)
- Sentence 1-2: Cultural/historical origin and significance
- Sentence 3: One practical insight (key ingredient, technique, common mistake)
- Tone: conversational, educational, respectful of origins
- AVOID: buzzwords ("Kitchen Standard," "definitive version"), self-promotion, marketing speak
- See `CHEFS_NOTE_GUIDELINES.md` for full guidelines and examples

**## Directions** (numbered, with bold step headers)
```markdown
1. **The Prep:** Detailed step with temperatures and visual cues...
2. **The Sear:** High heat instructions with timing...
```

### What Makes an Exemplary Recipe (reference: `char-siu.md`)
- Complete frontmatter with all relevant fields
- Chef's Note explains the *why* (cultural context + technique insight)
- Directions use specific temperatures, times, and visual cues
- Ingredients include quantities, cuts, and substitution notes
- `pairsWith` references real recipe slugs
- `advancePrep` and `equipment` are filled when relevant

### What Makes a Skeletal Recipe (needs fixing)
- Missing `cuisines`, `cookingMethods`, `occasions`, `pairsWith`
- Chef's Note is one generic sentence ("This is a classic dish")
- Directions say "cook until done" with no temperatures or visual cues
- Ingredients lack quantities or specificity
- No `seasons`, `nutritionalDensity`, or `leftovers` metadata

## Meal Compositions

Meals in `src/content/meals/*.md` compose multiple recipes into a complete dining experience.

### Templates
- **plate** — protein + starch + vegetable (+ optional salad/sauce)
- **bowl** — base + protein + vegetables + sauce + toppings
- **pasta-night** — pasta + sauce + protein/veg + salad
- **soup-and-side** — hearty soup + bread or salad
- **one-pot** — single vessel meal (stew, curry, chili)
- **grazing** — multiple small items for entertaining

### Day-of-Week Profiles (for meal planning)
| Day | Profile | Time | Density | Style |
|-----|---------|------|---------|-------|
| Monday | Recovery | 30-40 min | Light-moderate | Comfort but not heavy |
| Tuesday | Variety | 40-50 min | Moderate | Different from Monday |
| Wednesday | Hump Day | 30-45 min | Moderate-hearty | Crowd-pleaser |
| Thursday | Pre-Weekend | 45-60 min | Hearty | More adventurous OK |
| Friday | Easy Street | 20-30 min | Light-moderate | Simple or special |
| Saturday | Project Day | 60-120 min | Any | Learning opportunity |
| Sunday | Prep + Feast | 30 min cook + prep | Moderate-hearty | Family favorites |

### Planning Constraints
- No cuisine repeated within 3 days
- Balance light/moderate/hearty across the week
- At least 2 different cuisines per 3-day window
- Leftovers from Sunday/Monday can offset Tuesday/Wednesday effort

## Common Claude Code Workflows

### "Plan next week's meals"
1. Check what was recently cooked (calendars, meal history)
2. Consider the season and what's fresh
3. Apply day-of-week profiles
4. Compose meals from existing recipes, create new `meals/*.md` and `calendars/*.md` files
5. Ensure variety in cuisine, density, and cooking method

### "Fix recipes that need work"
1. Run `npm run chef-review` to get the quality report
2. Read the lowest-scoring recipes
3. Apply the 3-lens critique
4. Rewrite Chef's Notes, flesh out Directions, complete frontmatter
5. Run `npm run validate-recipes` to confirm fixes pass

### "Add a new recipe"
1. Create `src/content/recipes/recipe-name.md` (kebab-case)
2. Fill complete frontmatter (all relevant fields)
3. Write Chef's Note following `CHEFS_NOTE_GUIDELINES.md`
4. Write Directions with bold step headers, temperatures, visual cues
5. Add `pairsWith` referencing existing recipe slugs
6. Run `npm run validate-recipes`

### "What should I cook tonight?"
1. Ask about time available, mood, and any constraints
2. Filter recipes by time, season, and preference
3. Suggest 3-5 options with brief reasoning
4. Offer to compose a full meal around the chosen recipe

### "Teach me about [technique]"
1. Check `src/knowledge/techniques/` for existing reference
2. Check `src/knowledge/codex/` for related rules
3. Find recipes that demonstrate the technique
4. Explain the why, not just the how

## Key Files

| Purpose | Path |
|---------|------|
| Recipe schema (Zod) | `src/content/config.ts` |
| Recipe validation | `scripts/validate-recipes.mjs` |
| Chef quality review | `scripts/chef-review.mjs` |
| QA test suite | `scripts/qa-test.mjs` |
| Knowledge codex rules | `src/knowledge/codex/*.json` |
| Technique references | `src/knowledge/techniques/*.md` |
| Tagging guide | `src/knowledge/TAGGING_GUIDE.md` |
| Chef's Note guidelines | `CHEFS_NOTE_GUIDELINES.md` |
| Meal planning strategy | `MEAL_PLANNING_STRATEGY.md` |
| Code practices | `CODE_PRACTICES.md` |
| Site config | `astro.config.mjs` |
| Tailwind config | `tailwind.config.mjs` |

## Cuisine Tagging Rules

- Use atomic tags: `Chinese`, `Italian`, `American` — never `Chinese-American`
- For fusion: use multiple tags `cuisines: [Korean, Mexican]`
- Valid multi-word: `Middle Eastern` (space), invalid: `Middle-Eastern` (hyphen)
- Common cuisines: American, Italian, Chinese, Japanese, Korean, Thai, Vietnamese, Indian, Mexican, French, Greek, Middle Eastern, Jewish, Southern, Mediterranean, Caribbean, Filipino, Brazilian

## Known Gaps (from MEAL_PLANNING_STRATEGY.md)

Areas where more recipes are needed:
- **Salads**: Need 20-30 versatile salads
- **Vegetable sides**: Need 30-40 different preparations
- **Grain/starch bases**: More rice, quinoa, couscous, polenta
- **Quick meals**: More 15-20 min emergency meals
- **Cuisine depth**: More Cantonese, Sichuan, Japanese basics, Indian regional, Thai curries
- **Breakfast**: Limited weekday morning options
- **Meal-prep friendly**: More options with `leftovers: excellent`

## Build & Validation Commands

```bash
npm run dev              # Dev server at localhost:4321/mise/
npm run build            # Production build to /dist/
npm run validate-recipes # Check all recipe frontmatter + structure
npm run chef-review      # Quality audit with culinary scoring
npm run qa               # Full QA test suite
npm run lint             # ESLint
npm run format           # Prettier
```

## Git Conventions

- Commit format: `type: brief description` (feat, fix, refactor, docs, chore)
- Always run `npm run validate-recipes` before committing recipe changes
- CI/CD deploys on push to main — build failures block deployment
