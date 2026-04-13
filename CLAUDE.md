# Mise — The Kitchen Standard

Mise is a culinary knowledge base and AI-assisted cooking system. The static site at `jordansilton.com/mise/` is one output, but the real value is using Claude as a culinary co-pilot — planning meals, improving recipes, learning techniques, and continuously leveling up as a chef.

## What's in the Repo

- **550+ recipes** in `src/content/recipes/*.md` with 30+ metadata fields each
- **23 curated meals** in `src/content/meals/*.md` (multi-recipe compositions)
- **7 weekly calendars** in `src/content/calendars/*.md` (meal plans)
- **Knowledge codex** in `src/knowledge/codex/*.json` (automated quality rules)
- **Technique references** in `src/knowledge/techniques/*.md` (reusable culinary techniques)
- **Astro 5 static site** with search, filtering, and recipe detail pages

## Who This Is For

A family of five — two parents, three kids (ages 8, 10, 12). Most meals are weeknight dinners cooked between school pickup and bedtime, often around sports and activities. The Kitchen Standard exists to serve this family, not to impress other chefs.

That means: health and quality are non-negotiable, but complexity must earn its place. A 90-minute braise is a Saturday project, not a Tuesday expectation. Shortcuts are welcome when they genuinely don't sacrifice the result — canned tomatoes, store-bought stock, pre-washed greens, rotisserie chicken as a base. The question is never "is this restaurant-worthy?" but "would I be proud to feed this to my family on a school night?"

## The Kitchen Standard Philosophy

The Kitchen Standard draws from the best home cooking traditions worldwide — not just French technique or Michelin-star ambition. The most practical weeknight food on earth comes from cultures where families have always eaten together on busy nights: Chinese stir-fries ready in 10 minutes, Japanese donburi from pantry staples, Mexican tacos assembled in parallel, Indian dal that simmers itself, Italian pasta that's done before the water cools.

Every recipe should embody these principles:

1. **Respect the Source** — Learn from the people who actually cook this food daily. A Cantonese grandmother's wok instinct matters more than a food science textbook. A Mexican abuela's salsa knowledge is technique, even when she doesn't call it that. Honor the home cook traditions behind every cuisine.
2. **Practical First** — If a technique adds 30 minutes, it needs to add 30 minutes of flavor. Weeknight meals should be 30-45 minutes max. Reserve technical ambition for weekends and special occasions.
3. **Versatility** — Common bases (sauces, stocks, rubs) are separated for reuse across meals. Sunday prep feeds Tuesday's dinner.
4. **Textural Balance** — Crispy vs. creamy, fresh vs. cooked. Every dish needs contrast. This is universal — a Thai salad has peanuts and herbs, a Japanese curry has pickled ginger, an Italian pasta has breadcrumbs.
5. **The Finishing Touch** — Every dish is balanced with acid, salt, or aromatic to bridge flavors. In Mexican cooking it's lime and cilantro. In Korean it's sesame and scallion. In Indian it's a tadka of bloomed spices. The principle is universal; the expression is cultural.

### Core Cooking Principles

These are worth the effort. They're the techniques that separate "fine" from "great" without adding significant time:

- **Dry proteins** before searing — the single biggest improvement to any seared protein (a Cantonese wok chef would never skip this, and neither should you)
- **Bloom spices in fat** before adding liquid — this is a tadka in Indian cooking, sofrito in Latin cooking, the start of a Chinese stir-fry. Every tradition does it because it works
- **Add brightness** to rich dishes — lemon, vinegar, yogurt, pickled anything. Mexican crema on chili. Japanese pickles with katsu. The specific acid changes; the principle doesn't
- **Rest meat** after cooking — 5-10 minutes minimum. Use this time to make a salad or set the table
- **Taste and adjust** before serving — salt, acid, fat, heat. This is what separates good home cooks from great ones
- Never overcrowd the pan — sear in batches if needed. Steaming isn't searing
- Reserve pasta water — it's a free emulsifier
- Deglaze pans — those brown bits (fond) are pure flavor. A splash of wine or stock turns them into a 30-second sauce

### Shortcuts Worth Taking

Not every shortcut is a compromise. These save real time without sacrificing quality:

- Canned San Marzano tomatoes (often better than fresh out of season)
- Store-bought stock as a base (doctor it with aromatics)
- Pre-washed salad greens and pre-cut vegetables when time is tight
- Rotisserie chicken as a protein base for salads, tacos, bowls, soups
- Frozen vegetables for stir-fries and soups (flash-frozen at peak freshness)
- Jarred curry paste (Mae Ploy, Maesri) as a starter — even Thai home cooks use these
- Instant pot / pressure cooker for beans, stocks, and braises that would otherwise take hours

### Shortcuts That Aren't Worth It

These actually do sacrifice quality:

- Pre-shredded cheese (coated in anti-caking agents, won't melt properly)
- Bottled lemon/lime juice (tastes nothing like fresh)
- Garlic powder when fresh garlic is called for (powder has its place — marinades, rubs — but isn't a substitute)
- Canned beans when the recipe depends on bean texture (though canned is fine for soups and chili)
- Pre-made pie crust when the crust IS the dish (fine for a weeknight quiche)

### Culinary Influences

The Kitchen Standard draws from many traditions. These are the approaches that inform how we think about recipes — not idols to copy, but perspectives to learn from:

**The Obsessive Testers** — Serious Eats (Kenji López-Alt), America's Test Kitchen, Cook's Illustrated. They test 30 versions so you don't have to. When a recipe says "this is the ratio" or "this step actually doesn't matter," it's because someone proved it. We borrow their rigor: understand why a technique works, then decide if it's worth the time for a weeknight.

**The Science Explainers** — Alton Brown (Good Eats), Harold McGee, Samin Nosrat (Salt Fat Acid Heat). They teach the *why* behind cooking so you can improvise. Alton's wonton soup or Thanksgiving turkey aren't just recipes — they're lessons. When we write Chef's Notes, this is the spirit: give people one insight that makes them a better cook, not just a follower of instructions.

**The Home Cook Traditions** — This is the deepest well. Every culture has home cooks who've perfected dishes over generations without ever writing a recipe. A Cantonese grandmother's wok timing. A Mexican abuela's masa technique. An Italian nonna's pasta water instinct. A Korean mother's kimchi jjigae that's never the same twice but always right. An Indian home cook's understanding of when the masala is ready by smell alone. These traditions are technique, even when they don't use that word. We learn from them by paying attention to *how* they actually cook, not just what Western food media says about their cuisine.

**The Restaurant-to-Home Translators** — David Chang, Yotam Ottolenghi, Marcella Hazan, Diana Kennedy, Fuschia Dunlop, Madhur Jaffrey. Chefs and food writers who bridge restaurant-level knowledge and home cooking reality. They respect the source cuisine deeply and make it accessible without dumbing it down. When we adapt a dish, this is the standard: honor the original, explain what we changed and why, and make sure the home version is worth cooking.

**The Local Experts** — Not every great cook is famous. The Thai street vendor who's made pad kra pao 10,000 times. The pit master who's been smoking brisket for 40 years. The Japanese soba maker who trained for a decade. The Oaxacan mole maker who learned from her grandmother. Their knowledge is specific, deep, and earned through repetition. When a recipe involves a specific regional tradition, we try to learn from the people who actually do it, not from someone who visited once and wrote a blog post.

### The Complexity Spectrum

Not every meal needs the same level of ambition. The Kitchen Standard operates on a spectrum that maps to the week:

**Everyday (Monday-Friday weeknights):** 15-40 min active time. Informed by home cook traditions worldwide. The goal is a great meal that respects the ingredients and technique without turning dinner into a project. Stir-fries, pasta, tacos, grain bowls, one-pot meals, sheet-pan dinners. Shortcuts are welcome when they don't sacrifice quality. This is 70% of what we cook.

**Elevated (Thursday date night, Sunday dinner):** 45-75 min. A step up in ambition — maybe a proper braise, a from-scratch sauce, a more composed plate. Informed by the testers and translators. Kenji's approach: "I tested this so you can trust this exact method." A family meal that feels special but isn't stressful.

**Project (Saturday, holidays, special occasions):** 90+ min. This is where Alton Brown's Thanksgiving turkey, handmade wontons, a multi-component Indian feast, or a weekend baking project lives. The kids can help. The process IS the point. Informed by the science explainers and local experts. These recipes earn their complexity with results you can't get any other way.

Every recipe should know which tier it belongs to. A recipe tagged `vibe: quick` should never require 90 minutes of active cooking. A recipe tagged `vibe: technical` should justify every step.

## How to Review Recipes (4-Lens Critique)

When improving or reviewing any recipe, apply all four perspectives:

### Lens 1: The Home Cook (Practicality)

This is the most important lens for weeknight recipes. Ask:

- Can a parent make this on a Tuesday after pickup? What's the actual active time?
- Are the ingredients things you'd reasonably have or can get at a normal grocery store?
- Does it work for kids? Not "dumbed down" — but will an 8-year-old eat it, or at least eat most components?
- Are there smart prep shortcuts (weekend batch prep, make-ahead components)?
- Is the cleanup reasonable? One-pot and sheet-pan meals earn bonus points

### Lens 2: The Grandmother (Cultural Wisdom)

Every cuisine has home cooks who've been making these dishes for decades without measuring or timing. What would they say?

- Does this recipe respect how the dish is actually made in homes (not just restaurants)?
- Is the recipe using the right base technique for its tradition? (A Chinese stir-fry needs high heat and fast tossing. An Indian curry needs time for the masala to develop. These aren't interchangeable.)
- Would someone from this food culture recognize and respect this version?
- Are we learning from the best practitioners of this cuisine, not just adapting it through a Western lens?

### Lens 3: The Food Scientist (Technique)

Applied technique — not for show, but because it makes the food better:

- Is temperature specified where it matters (e.g., "475°F for the crust, reduce to 375°F")?
- Are visual cues provided ("until golden brown," "until sauce coats the back of a spoon")?
- Does the recipe explain why a technique matters, not just what to do?
- Is there a sear step for proteins that need it? Is surface drying mentioned?
- Does braised meat get the low-and-slow time it needs?

### Lens 4: The Flavor Architect (Balance)

Every great food tradition achieves balance — they just achieve it differently:

- Where is the brightness? Rich dishes need acid (lemon, vinegar, tomato, yogurt, pickles, fermented anything)
- Is there texture contrast? (Crispy on soft, fresh on cooked, cold on hot)
- Does it finish with something that ties it together? (Herbs, flaky salt, a drizzle of good oil, toasted sesame)
- Would a bite have enough going on, or is it one-note?

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
  - '--- Sauce ---' # section dividers use triple dashes
```

### Important Optional Fields

```yaml
origin: 'China' # single country
cuisines: [Chinese, Cantonese] # cultural styles (array)
cookingMethods: [roast, braise, sear] # techniques used
dietary: [gluten-free, dairy-free] # restrictions
occasions: [weeknight, entertaining, meal-prep]
flavorProfile: [sweet, savory, umami]
seasons: [fall, winter] # or year-round
nutritionalDensity: light | moderate | hearty
leftovers: poor | good | excellent
advancePrep: [marinate-overnight, make-ahead-sauce]
equipment: [slow-cooker, stand-mixer, grill]
pairsWith: [basmati-rice, everyday-arugula-salad] # must be valid recipe slugs
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
- Chef's Note explains the _why_ (cultural context + technique insight)
- Directions use specific temperatures, times, and visual cues
- Ingredients include quantities, cuts, and substitution notes
- `pairsWith` references real recipe slugs that make flavor sense together (not just "both Italian" — consider plate-level balance: acid cutting richness, texture contrast, bridging ingredients)
- `advancePrep` and `equipment` are filled when relevant
- Ratios verified against yield — enough filling for the pasta, enough sauce for the pan, enough seasoning for the protein weight
- Time estimates are honest: prep + cook + rest = real total time a person will spend
- Non-negotiable techniques are flagged ("turn heat OFF before adding cheese — it will break otherwise") vs. acceptable shortcuts ("store-bought marinara works fine here")

### What Makes a Skeletal Recipe (needs fixing)

- Missing `cuisines`, `cookingMethods`, `occasions`, `pairsWith`
- Chef's Note is one generic sentence ("This is a classic dish")
- Directions say "cook until done" with no temperatures or visual cues
- Ingredients lack quantities or specificity
- No `seasons`, `nutritionalDensity`, or `leftovers` metadata
- Ratios that don't survive scrutiny (e.g., 10 oz ricotta for 12 oz shells — runs out halfway through)
- Food processor for ricotta fillings (destroys texture), pre-shredded cheese where melt quality matters
- Time estimates that don't add up (says "30 min" but prep + cook + rest is actually 60+)

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

Context: Family of 5 (kids ages 8, 10, 12). Weeknights are constrained by school pickup, homework, and extracurriculars. Meals need to work for both adults and kids without making separate dishes.

| Day       | Profile        | Active Time | Density         | Style                                       |
| --------- | -------------- | ----------- | --------------- | ------------------------------------------- |
| Monday    | Quick Recovery | 20-30 min   | Light-moderate  | Comfort but fast — everyone's adjusting      |
| Tuesday   | One-Pot Night  | 25-35 min   | Moderate        | Minimal cleanup, often activity nights       |
| Wednesday | Crowd-Pleaser  | 30-40 min   | Moderate-hearty | Mid-week morale boost, kid-friendly          |
| Thursday  | Adventure Lite | 30-45 min   | Moderate-hearty | Try something new, but keep it approachable  |
| Friday    | Easy / Fun     | 15-25 min   | Any             | Pizza, tacos, build-your-own, or takeout     |
| Saturday  | Project Day    | 60-120 min  | Any             | Learning opportunity, kids can help cook     |
| Sunday    | Prep + Feast   | 45 min cook | Moderate-hearty | Family favorite + batch prep for the week    |

### Planning Constraints

- No cuisine repeated within 3 days
- Balance light/moderate/hearty across the week
- At least 2 different cuisines per 3-day window
- Leftovers from Sunday/Monday can offset Tuesday/Wednesday effort
- **Kid factor**: at least 3-4 nights per week should be broadly kid-friendly (not bland, but not extreme heat or unfamiliar textures without a safe component alongside)
- **Activity nights**: Tuesday and Thursday often have sports/activities — plan for meals that hold well if someone eats late, or that can be assembled individually (bowls, tacos, wraps)
- **Sunday prep**: use Sunday cooking time to prep components for the week (marinate proteins, wash/cut vegetables, make sauces, cook grains)

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
3. Apply the 4-lens critique
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

1. Ask: what day is it (for day-of-week profile), how much time do you have, any constraints (dietary, ingredients on hand, kid preferences)?
2. Filter recipes by active time, season, and preferences — prioritize recipes tagged `weeknight` and `kids-approved` for school nights
3. Suggest 3-5 options with brief reasoning, including at least one "pantry staple" option (things likely already in the house)
4. Offer to compose a full meal around the chosen recipe
5. Consider: will the kids eat this? If adventurous, suggest a safe side alongside

### "Teach me about [technique]"

1. Check `src/knowledge/techniques/` for existing reference
2. Check `src/knowledge/codex/` for related rules
3. Find recipes that demonstrate the technique
4. Explain the why, not just the how

## Key Files

| Purpose                | Path                             |
| ---------------------- | -------------------------------- |
| Recipe schema (Zod)    | `src/content/config.ts`          |
| Recipe validation      | `scripts/validate-recipes.mjs`   |
| Chef quality review    | `scripts/chef-review.mjs`        |
| QA test suite          | `scripts/qa-test.mjs`            |
| Knowledge codex rules  | `src/knowledge/codex/*.json`     |
| Technique references   | `src/knowledge/techniques/*.md`  |
| Tagging guide          | `src/knowledge/TAGGING_GUIDE.md` |
| Chef's Note guidelines | `CHEFS_NOTE_GUIDELINES.md`       |
| Meal planning strategy | `MEAL_PLANNING_STRATEGY.md`      |
| Code practices         | `CODE_PRACTICES.md`              |
| Site config            | `astro.config.mjs`               |
| Tailwind config        | `tailwind.config.mjs`            |

## Cuisine Tagging Rules

- Use atomic tags: `Chinese`, `Italian`, `American` — never `Chinese-American`
- For fusion: use multiple tags `cuisines: [Korean, Mexican]`
- Valid multi-word: `Middle Eastern` (space), invalid: `Middle-Eastern` (hyphen)
- Common cuisines: American, Italian, Chinese, Japanese, Korean, Thai, Vietnamese, Indian, Mexican, French, Greek, Middle Eastern, Jewish, Southern, Mediterranean, Caribbean, Filipino, Brazilian

## Known Gaps (from MEAL_PLANNING_STRATEGY.md)

Areas where more recipes are needed, prioritized by family impact:

- **Quick weeknight meals (under 25 min active time)**: The single most impactful gap. Need stir-fries, sheet-pan meals, pasta dishes, grain bowls, and taco/wrap builds that are genuinely fast
- **Vegetable sides**: Need 30-40 preparations that kids will actually eat — roasted broccoli with parmesan, honey-glazed carrots, crispy smashed potatoes, corn on the cob variations
- **Salads**: Need 20-30 versatile salads, including ones that work as a meal component (not just "side salad")
- **Kid-bridging recipes**: Dishes that work for both adults and kids without making two meals — build-your-own formats (tacos, bowls, pizza), dishes with adjustable heat, familiar proteins with new sauces on the side
- **Grain/starch bases**: More rice variations, quinoa, couscous, polenta — the foundations that make a protein + veg into a complete meal
- **Cuisine depth**: More Cantonese (not just "Chinese"), Sichuan basics, Japanese home cooking (not just sushi), Indian regional (not just "curry"), Thai weeknight staples
- **Breakfast**: Limited weekday morning options — need things that can be prepped ahead
- **Meal-prep friendly**: More options with `leftovers: excellent` that taste good reheated for school lunches or next-day dinners
- **Sunday batch prep**: Components that can be made on Sunday and used across multiple weeknight meals (marinated proteins, cooked grains, washed/cut vegetables, sauces)

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
