# Knowledge Preservation & Future Guidance

**For Automated Assistants Reading This Repository**

This document explains how to access and follow the established development practices, standards, and testing procedures for this project.

---

## 🎯 Quick Start for New Contributors

### 1. Read These First (In Order)

1. **[README.md](./README.md)** - Project overview and features
2. **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Content/recipe guidelines
3. **[CODE_PRACTICES.md](./CODE_PRACTICES.md)** - Development standards & best practices
4. **[DEPLOYMENT.md](./DEPLOYMENT.md)** - How to deploy changes safely

### 2. Understand Our Philosophy

- **Keep it simple:** Only create components when truly reusable
- **Tailwind only:** No additional CSS files
- **Test before deploying:** Use `npm run qa` every time
- **Document changes:** Clear commit messages, update relevant guides

### 3. Key Rules to Follow

**Component Architecture:**

- Reusable components go in `/src/components/` (must be used in 2+ places)
- Only 8-10 components total for this project size
- Use props interface for clarity

**Styling:**

- Tailwind CSS only (classes inline in components)
- Color mapping for tags is consistent across all components
- No new CSS files without approval

**Recipe Data:**

- Frontmatter must be complete (title, origin, cuisines, difficulty, etc.)
- Use `npm run validate-recipes` to verify
- Auto-generated fields: cookingMethods, dietary, occasions, flavorProfile

**Testing & Deployment:**

- **Always** run `npm run qa` before major changes
- **Always** test: homepage search/filters, recipe detail page, mobile layout
- **Never** skip the manual testing checklist
- **Always** check if 475 pages build successfully

---

## 📚 Project Knowledge Base

### Standards Documentation

- **[CODE_PRACTICES.md](./CODE_PRACTICES.md)**
  - Component architecture rules (when to create, when not to)
  - Styling conventions and Tailwind patterns
  - Data structure & recipe frontmatter schema
  - Testing & QA procedures
  - Git practices and commit message format

- **[DEPLOYMENT.md](./DEPLOYMENT.md)**
  - Pre-deployment checklist
  - Manual testing procedures with specific test cases
  - Deployment steps for different hosting scenarios
  - Post-deployment verification
  - Rollback procedures

- **[CONTRIBUTING.md](./CONTRIBUTING.md)**
  - Recipe naming conventions
  - Frontmatter fields and required values
  - Tagging best practices
  - How to add new recipes

### Automation & Validation

- **[/scripts/validate-recipes.mjs](./scripts/validate-recipes.mjs)**
  - Validates all 474+ recipes for correctness
  - Checks required frontmatter fields
  - Detects common issues automatically
  - Run: `npm run validate-recipes`

- **[/scripts/qa-test.mjs](./scripts/qa-test.mjs)**
  - Complete QA test suite (21 tests)
  - Checks: build, validation, structure, components, content, docs
  - Run: `npm run qa`
  - Exit codes: 0 = pass, 1 = fix needed

### Knowledge Codex

- **[/src/knowledge/codex/](./src/knowledge/codex/)**
  - `recipe-validation-rules.json` - Recipe validation constraints
  - `architecture-standards.json` - Architectural standards for future models
  - `tagging-rules.json` - Tag detection and suggestion rules

---

## 🔍 How to Access Established Practices

### For Development Standards

```javascript
// Read: src/knowledge/codex/architecture-standards.json
// Contains: component architecture, styling rules, testing procedures
// Key sections:
//   - component-architecture: when to create components
//   - styling: Tailwind conventions, color mapping
//   - tag-colors: consistent tag color scheme
//   - deployment: pre-deployment checklist
//   - testing: primary features to test
```

### For Recipe Schema

```yaml
# Read: CONTRIBUTING.md (Section 7: Content Standards)
# Also: src/knowledge/codex/recipe-validation-rules.json
# Required fields:
title, origin, cuisines, difficulty, role, vibe
prepTime, cookTime, totalTime, servings
ingredients (array)
# Auto-generated:
cookingMethods, dietary, occasions, flavorProfile
```

### For Tagging System

```markdown
# Read: src/knowledge/TAGGING_GUIDE.md

# 6-category system:

1. Cooking Methods (bake, roast, fry, steam, slow-cook)
2. Cuisines (Italian, Thai, Chinese, etc.)
3. Dietary (vegetarian, vegan, gluten-free, dairy-free)
4. Occasions (weeknight, entertaining, holiday, comfort-food)
5. Flavor Profile (spicy, sweet, savory, acidic, umami, fresh)
6. Difficulty (easy, intermediate, advanced)
```

---

## 🚀 Before Making Any Changes

### Workflow Checklist

```bash
# 1. Understand what we're changing
# (read relevant section in CODE_PRACTICES.md)

# 2. Make changes following established patterns

# 3. Run QA suite
npm run qa
# Must see: "Tests Passed: 21/23 (91%)"

# 4. Build verify
npm run build
# Must see: "[build] 475 page(s) built"

# 5. Test manually
# - Homepage: search, filters, sort
# - Recipe detail: all 6 tag categories
# - Mobile layout: responsive

# 6. Commit with descriptive message
git add .
git commit -m "type: description of changes

More details about why this change was made."

# 7. Deployment
npm run deploy
# (when ready to push to production)
```

---

## 🎓 Learning Path

### If You're New to the Project

1. Build the project: `npm run build`
2. Start dev server: `npm run dev`
3. Explore the site at `http://localhost:4321/silton-mise/`
4. Read: CODE_PRACTICES.md (sections 1-2)
5. Add a small feature (e.g., modify SearchBar styling)
6. Run: `npm run qa`

### If You're Adding Recipes

1. Read: CONTRIBUTING.md
2. Create: new `.md` file in `/src/content/recipes/`
3. Follow: frontmatter template (all 14 fields)
4. Run: `npm run validate-recipes`
5. Test: recipe appears on homepage, detail page works

### If You're Modifying Components

1. Read: CODE_PRACTICES.md (sections 1, 2)
2. Check: if component is reused (2+ locations)
3. Update: component in `/src/components/`
4. Build & test: `npm run build` then manual testing
5. Run QA: `npm run qa`

### If You're Deploying

1. Read: DEPLOYMENT.md (complete document)
2. Run: `npm run qa` (all tests must pass)
3. Manual test: use checklist in DEPLOYMENT.md
4. Commit & push to main
5. Production goes live automatically

---

## 🔄 What Happens During Deployment

```
1. `npm run qa` runs 21 automated tests
   ├─ Build verification (475 pages compile)
   ├─ Recipe validation (all frontmatter correct)
   ├─ File structure (all components exist)
   ├─ Component integrity (imports correct)
   ├─ Content quality (sample recipes valid)
   ├─ Documentation (guides complete)
   └─ Build performance (size check)

2. `npm run build` generates /dist/ directory
   └─ 475 static HTML files ready

3. Manual testing of:
   ├─ Homepage: search, 5 filters, sorting
   ├─ Recipe detail: all 6 tag categories
   ├─ Cross-site: links work, mobile responsive
   └─ Console: no errors

4. Git commit with descriptive message

5. Push to main branch (production deployment)
```

---

## 📝 Standards Summary

### Component Rules

✅ **DO CREATE** if:

- Used in 2+ pages/contexts
- Self-contained with clear purpose
- Reduces code duplication

❌ **DON'T CREATE** if:

- Single-use only
- Just wraps 1-2 HTML elements
- Scatters related code

### Component Count

- **Current:** 8 components (SearchBar, FilterPanel, RecipeCard, etc.)
- **Max:** ~12 before considering redesign
- **Target:** Keep simple

### Testing Before Deploy

| Feature | Test Case       | Expected     |
| ------- | --------------- | ------------ |
| Search  | "chicken"       | ~20 results  |
| Filter  | difficulty=easy | only easy    |
| Combine | vegan + pasta   | vegan pasta  |
| Sort    | prepTime        | ascending    |
| Tags    | Recipe page     | 6 categories |
| Mobile  | 375px width     | responsive   |

### Git Commits

```
feat: add new feature
fix: resolve bug
refactor: reorganize code
docs: update documentation
```

---

## 🆘 If Something Breaks

### Debugging Steps

**Build fails?**

```bash
npm install
npm run build
# Check error message
# Usually: missing import or TypeScript error
```

**QA tests fail?**

```bash
npm run qa
# Review failed tests
# Fix issues it highlights
# Rerun: npm run qa
```

**Recipe doesn't appear?**

```bash
npm run validate-recipes
# Check frontmatter fields
# Ensure: title, cuisines, difficulty, origin present
```

**Filters don't work?**

```bash
# Verify FilterPanel component loads
# Check browser console for JS errors
# Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
# Rebuild: npm run build
```

---

## 📖 Documentation Map

```
ROOT
├── README.md                 ← Start here: project overview
├── CONTRIBUTING.md           ← How to add recipes
├── CODE_PRACTICES.md         ← Development standards (THIS IS KEY)
├── DEPLOYMENT.md             ← Deployment workflow
├── KNOWLEDGE_PRESERVATION.md ← This file
│
├── src/
│   ├── components/
│   │   ├── SearchBar.astro          ← Simple input component
│   │   ├── FilterPanel.astro        ← Complex filter logic
│   │   ├── RecipeCard.astro         ← Grid card display
│   │   ├── RecipeHeader.astro       ← Detail page metadata
│   │   ├── TagBadge.astro           ← Tag color mapping
│   │   └── TagSection.astro         ← Tag category display
│   │
│   ├── knowledge/
│   │   ├── TAGGING_GUIDE.md         ← Tag system documentation
│   │   └── codex/
│   │       ├── architecture-standards.json
│   │       ├── recipe-validation-rules.json
│   │       └── tagging-rules.json
│   │
│   └── content/recipes/
│       └── [474+ recipe files]
│
├── scripts/
│   ├── validate-recipes.mjs          ← Recipe validation
│   └── qa-test.mjs                   ← QA test suite
│
└── package.json
    ├── npm run dev                   ← Start dev server
    ├── npm run build                 ← Build site
    ├── npm run validate-recipes      ← Check recipes
    ├── npm run qa                    ← Run QA tests
    └── npm run deploy                ← Deploy to prod
```

---

## 🎯 Key Takeaways for Future Models

1. **Read CODE_PRACTICES.md first** - it's the source of truth
2. **Always run `npm run qa` before changes** - non-negotiable
3. **Test manually using the checklist** - QA automation can't catch everything
4. **Keep components simple and reusable** - don't over-engineer
5. **Document decisions** - update guides when changing architecture
6. **Commit messages matter** - future models read the git history
7. **Deploy only after verification** - no exceptions
8. **Recipes are data** - validate them constantly
9. **Components are structure** - keep them minimal
10. **Tests are truth** - if QA passes, ship with confidence

---

**Last Updated:** January 4, 2026  
**Status:** Production-ready with comprehensive testing & deployment automation
