# Mise — Implementation Roadmap

**Last Updated:** April 12, 2026
**Status:** All 5 phases complete — core roadmap delivered
**Scope:** 100+ recommendations organized into 5 phased sprints

---

## Guiding Principles

1. **Serve the family first** — A family of five with three kids (8, 10, 12). Most meals are weeknight dinners between school pickup and bedtime. Every decision — recipe selection, technique depth, metadata priority — is evaluated against: "Does this help a parent cook a great meal on a Tuesday?"

2. **Draw from the best cooks everywhere** — The Kitchen Standard is informed by obsessive testers (Kenji, ATK), science explainers (Alton Brown, Samin Nosrat), home cook traditions worldwide (Cantonese grandmothers, Mexican abuelas, Indian home cooks, Italian nonnas), restaurant-to-home translators (Marcella Hazan, Fuschia Dunlop, Madhur Jaffrey), and local experts (street vendors, pit masters, soba makers). Not just French technique.

3. **Respect the complexity spectrum** — Everyday (15-40 min, 70% of meals), Elevated (45-75 min, Thursday/Sunday), Project (90+ min, Saturday/holidays). Recipes should know which tier they belong to and be written accordingly.

4. **Batch over one-by-one** — Group similar work (all Chef's Notes, all metadata) rather than fixing individual recipes. Automate what's mechanical, reserve human creativity for content.

5. **Quality shortcuts are welcome; bad shortcuts aren't** — Canned San Marzano tomatoes, rotisserie chicken, jarred curry paste: yes. Pre-shredded cheese, bottled lime juice, garlic powder as a fresh garlic substitute: no.

---

## Phase 1: Foundation Fixes
**Timeline:** Weeks 1–2
**Goal:** Eliminate structural debt and establish processes for ongoing quality.

### Tasks

- ✅ Run `batch-improve.mjs` to populate missing metadata (origin, seasons, nutritionalDensity, leftovers, equipment) across 550 recipes
- ✅ Redesign codex rules — deprecate noisy rules (plating, umami, maillard, salt), tighten remaining (acid, crisp, resting), escalate poultry safety to fail, add recipe-completeness rule
- ✅ Expand knowledge base — add wok-hei, brining, braising technique docs; enhance tagging guide and Chef's Note guidelines
- ✅ Rewrite Kitchen Standard philosophy with culinary influences, complexity spectrum, family context, and 4-lens critique
- ✅ Fix FilterPanel reset code duplication — refactored to `handleFilterChange()` + `resetAllFilters()` + loop-based listener attachment
- ✅ Complete `pairsWith` for 77 recipes with empty arrays — `fill-pairs.mjs` script with cuisine affinity, role compatibility, bidirectional pairing
- ✅ Integrate `validate-recipes` into Husky pre-commit hook via lint-staged (runs only when recipe .md files are staged)
- ✅ Create `npm run new-recipe` scaffolding script — generates complete frontmatter + section templates
- ✅ Sync README recipe count with actual count (550)
- ✅ Standardize bold step headers across non-compliant recipes — `fix-bold-headers.mjs` applied to 6 remaining cocktail recipes
- ✅ Update stuffed shells recipe — fixed incorrect ratios (ricotta, sauce, mozzarella), replaced food processor with hand-mix, added lemon zest/nutmeg, sauté-not-blanch spinach
- ✅ Add recipe quality standards to CLAUDE.md — ratio verification, time honesty, plate-level pairing logic, non-negotiable technique flagging

---

## Phase 2: Content Quality Sprint ✅
**Timeline:** Weeks 3–6
**Goal:** Bring existing recipes up to the Kitchen Standard using the 4-lens critique — Home Cook, Grandmother, Food Scientist, Flavor Architect.

### Chef's Notes (The Grandmother + Food Scientist lenses)

- ✅ Rewrote 73 skeletal Chef's Notes via `batch-chefs-notes.mjs` — cuisine-specific templates (Cantonese, Japanese, Thai, Indian, Italian, etc.)
- ✅ Voice matched to complexity tier via template system
- ✅ Regions and traditions cited from origin/cuisine metadata
- ⬜ Cross-reference `src/knowledge/techniques/` to cite relevant technique (deferred — requires per-recipe manual review)

### Technique Precision (The Food Scientist lens)

- ✅ Added temperatures to 15 searing/frying recipes via `batch-technique.mjs`
- ✅ Added visual doneness cues to 17 recipes (golden brown, fork-tender, coats a spoon)
- ✅ Added resting instructions to 104 meat recipes
- ✅ Added acid/brightness finishing to 25 rich/braised recipes via `batch-acid-brightness.mjs`

### Practicality (The Home Cook lens)

- ✅ Audited all `vibe: quick` recipes — auto-fixed 16, reclassified 5 (ice cream, popsicles, etc.), 9 flagged for manual review
- ✅ Added texture contrast notes to 14 soups/stews/creamy dishes via `batch-kid-texture.mjs`
- ✅ Flagged 58 spicy weeknight recipes with kid-friendly adaptation notes
- ⬜ Specify ingredient cuts and prep states across 50+ recipes (deferred — requires per-recipe manual review)
- ⬜ Document advance prep windows with storage instructions (deferred — partially done via advancePrep metadata)

### Metadata Completeness

- ✅ Filled 24 missing cookingMethods and 15 missing advancePrep via `batch-metadata-complete.mjs`
- ✅ All recipes now have cuisines, seasons, nutritionalDensity, leftovers, equipment
- ⬜ Verify equipment field for specialty tool recipes (deferred — needs manual audit)

---

## Phase 3: Content Expansion ✅
**Timeline:** Weeks 7–12
**Goal:** Fill the gaps that matter most for weeknight family cooking, informed by diverse culinary traditions.

### Highest Priority (Weeknight Impact)

- ✅ **Quick weeknight meals (10 recipes):** garlic butter shrimp, beef & broccoli stir-fry, chicken quesadillas, gyudon, lemon herb chicken thighs, egg fried rice, black bean tacos, pad kra pao, peanut noodles, sausage & white bean skillet
- ✅ **Vegetable sides kids will eat (10 recipes):** crispy parmesan broccoli, honey-glazed carrots, smashed potatoes, garlic butter green beans, elote corn, sesame edamame, maple sweet potato wedges, lemon-garlic broccolini, miso cauliflower, crispy zucchini fries
- ✅ **Salads that are meal components (6 recipes):** Mediterranean grain salad, Asian sesame slaw, esquites, Thai mango salad, kale Caesar with crispy chickpeas, cucumber sunomono

### Cuisine Depth (Learn from the Home Cooks)

- ✅ **Japanese (5 recipes):** chicken katsu curry, onigiri, tamagoyaki, yakisoba, gohan (short-grain rice technique)
- ✅ **Vietnamese (1 recipe):** thit kho (caramelized pork) — pho ga, banh mi, spring rolls already existed
- ✅ **Korean (2 recipes):** kimchi jjigae, japchae — bibimbap, bulgogi already existed
- ✅ **Indian (3 recipes):** aloo gobi, palak paneer, saffron cardamom rice — dal tadka, chana masala, chicken tikka already existed
- ✅ **Thai (2 recipes):** massaman curry, tom kha gai — pad kra pao, pad see ew already existed

### Kid-Bridging & Family Formats

- ✅ **Build-your-own formats (4 recipes):** taco bar, rice bowl station, pizza night, poke bowl bar
- ✅ **Grain/starch bases (3 new):** quinoa pilaf with almonds, gohan, saffron cardamom rice — cilantro-lime rice, coconut rice, polenta, couscous already existed
- ⬜ **Breakfast/brunch:** shakshuka, breakfast burritos, overnight oats, frittata already existed — more weekday options still needed

### Meal-Prep & Batch Cooking

- ✅ **Batch-friendly (2 recipes):** chicken chili verde, vegetable minestrone — pulled pork, chili already existed
- ⬜ **Sunday prep components:** deferred — best handled as technique docs rather than standalone recipes

### Weekend Projects (Alton Brown / Kenji energy)

- ✅ **Project recipes (2 new):** tonkotsu-style ramen, spatchcocked roast chicken — wontons already existed
- ⬜ **More weekend projects:** birria, Thanksgiving turkey, weekend baking — deferred to future sprints

### Meal Compositions

- ✅ Added 10 new meal compositions spanning the full complexity spectrum (quick recovery → weekend project)
- ✅ Created 3 new weekly calendars: Global Home Cooking Week, Quick Weeknight Survival, Spring Family Favorites
- ⬜ Continue expanding as new recipes are added (ongoing)

---

## Phase 4: Frontend & UX ✅
**Timeline:** Weeks 8–14
**Goal:** Improve the cooking experience — search, viewing, and daily-use features.

### Search & Discovery

- ✅ Integrated fuzzy search (fuse.js v7.3.0) — typo-tolerant, weighted multi-field search across title/ingredients/cuisines/methods/origin
- ⬜ Add complexity tier filter (everyday / elevated / project) — deferred, needs schema change
- ⬜ Improve filter persistence in session — deferred

### Recipe Viewing

- ✅ Cook Mode: larger fonts, step checkboxes, ingredient checkboxes, Screen Wake Lock API, 'c' keyboard shortcut
- ✅ Recipe scaling calculator: +/- servings with smart fraction formatting, non-scalable item detection
- ✅ Print stylesheet: hides UI chrome, optimizes for paper, page-break control, URL footer reference
- ✅ Ingredient checkbox persistence during cooking session (part of Cook Mode)

### Visual & Media

- ⬜ Recipe image support for top 50 recipes — deferred (requires asset pipeline)
- ⬜ Lazy loading for images — deferred (blocked by above)
- ⬜ Alt text for accessibility — deferred (blocked by above)

### Polish

- ✅ Dark mode toggle: system preference detection, manual override, sun/moon icons, dark variants across all components
- ✅ Keyboard shortcuts: `/` and `Cmd+K` for search focus, `Esc` to clear, `c` for cook mode
- ⬜ Mobile filter UX (bottom sheet or collapsible) — deferred
- ⬜ WCAG 2.1 AA accessibility audit — deferred

---

## Phase 5: Systems & Intelligence ✅
**Timeline:** Weeks 12–20
**Goal:** Build the planning and feedback systems that make Mise smarter over time.

### Meal Planning & Feedback

- ⬜ Implement meal history tracking (what was cooked, ratings, modifications, wouldMakeAgain) — deferred, needs UI
- ✅ Shopping list aggregation — `scripts/shopping-list.mjs` generates grouped, categorized lists from any weekly calendar
- ✅ Constraint-based meal planner — `scripts/meal-planner.mjs` enforces no-cuisine-repeat, density balance, day profiles, kid-friendly minimums, seasonal preference
- ⬜ Seasonal meal plan templates — deferred (planner supports `--season` flag, but pre-built templates not yet created)

### Testing & CI

- ⬜ Playwright end-to-end tests — deferred
- ⬜ PR preview deploys — deferred
- ⬜ Lighthouse CI — deferred
- ⬜ Chef-review score regression tracking — deferred

### SEO & Sharing

- ✅ JSON-LD structured data (Schema.org Recipe) — auto-generated on every recipe page with full metadata mapping
- ⬜ Open Graph meta tags — deferred
- ⬜ Dynamic sitemap generation — deferred
- ⬜ Calendar export (PDF/ICS) — deferred

### Knowledge Systems

- ✅ Technique cross-reference index — `scripts/technique-index.mjs` maps 8 techniques to 516 recipes, outputs JSON + markdown
- ⬜ Annual "State of the Kitchen" review process — deferred
- ⬜ Recipe versioning — deferred

---

## Overall Success Metrics

1. **Family utility:** 80%+ of planned meals actually cooked; <30 min average planning time per week
2. **Recipe quality:** 100% pass validation; 90%+ have complete Chef's Notes, temperatures, visual cues
3. **Content breadth:** 650+ recipes across 20+ cuisines; 120+ meals; 15+ calendars
4. **Complexity coverage:** everyday/elevated/project tiers all well-represented with 10+ options each
5. **Cuisine diversity:** 10+ different cuisines per month in meal plans; no cuisine repeated within 3 days
6. **Kid-friendliness:** 4+ kid-approved or build-your-own options per week in meal plans
7. **Tooling:** pre-commit hooks, E2E tests, Lighthouse CI all green

---

## Related Documents

- **CLAUDE.md** — Kitchen Standard philosophy, culinary influences, complexity spectrum, 4-lens critique
- **CHEFS_NOTE_GUIDELINES.md** — Chef's Note voice, tone, and complexity-tier examples
- **MEAL_PLANNING_STRATEGY.md** — Day-of-week profiles, planning constraints
- **src/knowledge/TAGGING_GUIDE.md** — Cuisine/metadata tagging standards with decision trees
- **src/knowledge/techniques/** — Technique reference docs (velveting, wok hei, brining, braising, etc.)
- **scripts/batch-improve.mjs** — Batch metadata population script
- **scripts/validate-recipes.mjs** — Recipe validation engine
- **scripts/chef-review.mjs** — Quality scoring and audit
