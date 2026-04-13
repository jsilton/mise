# Recipe Classification & Tagging Guide

## Overview

All recipes are now tagged with standardized metadata to enable discovery, filtering, and contextual suggestions. Tags are organized into six categories:

---

## Tag Categories & Values

### 1. **cookingMethods** (Array)

Techniques used in the recipe. Helps users find recipes by cooking method.

- `bake` — oven baking
- `roast` — high-heat roasting
- `grill` — grilling (char/flame)
- `fry` — shallow or deep frying
- `sauté` — pan cooking over medium-high heat
- `simmer` — gentle low heat cooking
- `boil` — cooking in boiling liquid
- `steam` — cooking via steam
- `poach` — cooking in gently simmering liquid
- `braise` — searing then slow-cooking in liquid
- `slow-cook` — low and slow (Crock-Pot, etc.)
- `no-cook` — requires no cooking
- `blend` — blending/food processor
- `assemble` — no cooking, just assembly
- `sous-vide` — precise temperature water bath
- `smoke` — smoking
- `candied` — sugar/syrup preserved

Example: `cookingMethods: [bake, fry]`

---

### 2. **cuisines** (Array)

Cultural/regional origin(s). Supports multiple if fusion.

- `Italian` — Italian cuisine
- `Chinese` — Chinese cuisine
- `Japanese` — Japanese cuisine
- `Indian` — Indian cuisine
- `Mexican` — Mexican cuisine
- `Thai` — Thai cuisine
- `Vietnamese` — Vietnamese cuisine
- `Korean` — Korean cuisine
- `French` — French cuisine
- `Greek` — Greek cuisine
- `Spanish` — Spanish cuisine
- `Middle Eastern` — Middle Eastern cuisine
- `Lebanese` — Lebanese cuisine
- `American` — American cuisine
- `Brazilian` — Brazilian cuisine
- `Israeli` — Israeli cuisine
- `Caribbean` — Caribbean cuisine
- `Filipino` — Filipino cuisine
- `Portuguese` — Portuguese cuisine
- `Fusion` — Fusion/contemporary

Example: `cuisines: [Italian, French]` for a fusion dish

**Note on Origin vs. Cuisines:** See the "Origin vs. Cuisines" section below for detailed guidance on when to use each field.

---

### 3. **dietary** (Array)

Dietary attributes & restrictions.

- `vegetarian` — no meat/fish
- `vegan` — no animal products
- `gluten-free` — no gluten
- `dairy-free` — no dairy
- `nut-free` — no tree nuts or peanuts
- `egg-free` — no eggs
- `low-sugar` — minimal added sugar
- `high-protein` — significant protein content
- `keto-friendly` — low carb
- `paleo` — paleo-compatible ingredients
- `whole-30` — Whole-30 compliant
- `low-sodium` — minimal salt
- `kosher` — kosher certified or compliant
- `halal` — halal-friendly ingredients

Example: `dietary: [vegetarian, gluten-free]`

---

### 4. **occasions** (Array)

When/why you'd make this recipe.

- `weeknight` — quick, no-fuss, family-friendly (under 60 min total)
- `entertaining` — impressive, company-worthy
- `holiday` — holiday/celebration
- `comfort-food` — soul-satisfying, nostalgic
- `date-night` — romantic, elegant
- `meal-prep` — stores well, batch-friendly
- `make-ahead` — can be prepared in advance
- `picnic` — portable, travel-friendly
- `brunch` — breakfast/lunch
- `potluck` — shareable, transport-friendly
- `kids-approved` — child-friendly flavors/textures
- `game-day` — snack/party food

Example: `occasions: [weeknight, comfort-food]`

---

### 5. **flavorProfile** (Array)

Primary taste/sensory characteristics.

- `spicy` — heat/peppers
- `sweet` — sugary/dessert
- `savory` — umami/salty
- `acidic` — bright/tangy (citrus, vinegar)
- `umami` — deep, savory richness
- `rich` — heavy/luxurious (cream, butter, fat)
- `fresh` — light, bright ingredients
- `smoky` — smoke/char flavor
- `herbaceous` — herbs dominant
- `nutty` — nuts or toasted flavor
- `fruity` — fruit-forward
- `earthy` — mushrooms, root vegetables
- `floral` — delicate, fragrant (flowers, herbs)
- `balanced` — no single dominant taste

Example: `flavorProfile: [spicy, savory, umami]`

---

### 6. **difficulty** (Single Value)

Skill level & time commitment.

- `easy` — straightforward, 5-10 steps, beginner-friendly
- `intermediate` — some technique or timing required, 10-20 steps
- `advanced` — precise technique, multiple stages, professional skills

Example: `difficulty: intermediate`

---

### 7. **seasons** (Array)

Best time of year to cook this recipe.

- `spring` — asparagus, peas, spring onions, lamb, lighter dishes
- `summer` — tomatoes, zucchini, berries, corn, grilling, refreshing
- `fall` — squash, apples, sweet potatoes, warming spices
- `winter` — root vegetables, hearty greens, citrus, comfort
- `year-round` — no seasonal dependencies, pantry/frozen ingredients

Example: `seasons: [summer, fall]`

---

### 8. **nutritionalDensity** (Single Value)

Meal weight and perceived heaviness.

- `light` — salads, seafood, veg-forward (<500 cal feel)
- `moderate` — balanced protein + starch + veg (500-700 cal feel)
- `hearty` — pasta, stews, rich sauces, casseroles (>700 cal feel)

Example: `nutritionalDensity: moderate`

---

### 9. **leftovers** (Single Value)

Reheating quality.

- `poor` — texture degrades (crispy, delicate fish, dressed salads)
- `good` — reheats okay, minimal quality loss
- `excellent` — improves with time or perfect reheat (stews, curries)

Example: `leftovers: excellent`

---

### 10. **advancePrep** (Array)

Preparation steps required hours or days before cooking.

- `marinate-overnight` — proteins need 4+ hours
- `make-ahead-sauce` — sauce can be prepped early
- `dough-rest` — needing resting time
- `brine` — require brining
- `pickle` — pickling time
- `chill-overnight` — setting time (desserts)
- `freeze-ahead` — can be frozen before cooking

Example: `advancePrep: [marinate-overnight]`

---

## Origin vs. Cuisines (Field Clarification)

### The Difference

- **`origin`** (single string): The specific country or region where this dish historically originated. Example: "Japan"
- **`cuisines`** (array): The broader culinary traditions or cultural styles the dish belongs to. Can be multiple. Example: `[Japanese, Korean]` for a fusion dish, or just `[Japanese]` for purely Japanese

### When They Differ

A dish's historical birthplace can differ from the culinary traditions it now embodies.

**Example 1: Chicken Tikka Masala**

- `origin: "Britain"` — This dish was invented in Glasgow in the 1960s, not in India
- `cuisines: [Indian]` — It uses Indian technique and flavoring, even if British chefs created it

**Example 2: Pho**

- `origin: "Vietnam"` — Originated in Northern Vietnam in the early 20th century
- `cuisines: [Vietnamese]` — Modern pho is quintessentially Vietnamese

**Example 3: Korean Fried Chicken (Fusion)**

- `origin: "Korea"` — Created in South Korea in the 1980s
- `cuisines: [Korean, American]` — Blends Korean spicing and technique with American deep frying traditions

### Quick Rules

- **Same country origin and cuisine?** Use both: `origin: "Italy"` + `cuisines: [Italian]`
- **Fusion dish?** Use the most specific origin you know, and list all relevant cuisines: `origin: "Thailand"` + `cuisines: [Thai, Chinese]` if it blends both traditions
- **Created in one place, belongs to another tradition?** Use accurate origin + appropriate cuisine: `origin: "Germany"` + `cuisines: [American]` for a German immigrant recipe now considered American comfort food

---

## Decision Trees (Ambiguous Tagging Cases)

### Case 1: Is This Ramen Japanese or Chinese?

**The Question:** Ramen clearly has Chinese origins (lamian) but is quintessentially Japanese now. Where do we tag it?

**The Decision Tree:**

```
Is this a Japanese ramen shop's recipe (tonkotsu, miso, shoyu)?
    → YES: origin: "Japan", cuisines: [Japanese]
    
Is this a Chinese hand-pulled noodle recipe (lamian)?
    → YES: origin: "China", cuisines: [Chinese]
    
Is this a fusion ramen (Korean broth, Japanese technique)?
    → YES: origin: "Japan", cuisines: [Korean, Japanese]
```

**Why:** Modern ramen is codified and distinctive in Japan. Chinese lamian is separate. When they blend, we show both.

---

### Case 2: Is This Item a Main Course, Side, or Base?

**The Question:** Risotto can be a main dish (with protein), a side (with meat), or a base component (in a larger composition). What's the `role`?

**The Decision Tree:**

```
Does this recipe come with sufficient protein to be a full meal?
    → YES (risotto with mushrooms + cheese): role: "main"
    → NO (plain risotto, rice pilaff): role: "base"
    
Is it meant to accompany meat/fish as a starch?
    → YES (risotto as the starch for a chicken dish): role: "base"
    → NO (risotto is hearty and self-sufficient): role: "main"
```

**Why:** Role definition depends on how the recipe is typically served. When in doubt, tag it as the most common use case.

---

### Case 3: Difficulty When a Recipe Has Multiple Techniques

**The Question:** A braise requires searing (easy) + slow cooking (easy) but precise temperature (intermediate) and timing judgment (intermediate). Is it easy or intermediate?

**The Decision Tree:**

```
Can a competent home cook follow this recipe and get good results with minimal instruction?
    → YES: difficulty: "easy"
    
Does this require specialized knowledge (e.g., "braise at 325°F, not 350°F")?
    → YES: difficulty: "intermediate"
    
Does this require deep technique mastery or multiple precision steps?
    → YES (e.g., sous-vide pastry, multi-stage emulsion): difficulty: "advanced"
```

**Why:** Difficulty should reflect what a home cook needs to know, not just the presence of steps. A braise is "easy" because it's forgiving; a hollandaise is "intermediate" because temperature control is critical.

---

### Case 4: Seasonal vs. Year-Round

**The Question:** A recipe calls for asparagus, which is seasonal. But frozen asparagus works fine and is available year-round. How do we tag it?

**The Decision Tree:**

```
Can this recipe be made equally well with out-of-season/frozen/pantry substitutes?
    → YES (tomato soup made with canned tomatoes): seasons: ["year-round"]
    
Does the recipe specifically call for fresh seasonal ingredients?
    → YES (asparagus in a fresh spring salad): seasons: ["spring"]
    
Is it dramatically better in one season but doable in others?
    → YES (pumpkin pie works year-round but tastes best in fall): seasons: ["fall", "year-round"]
```

**Why:** This helps users find recipes for "what's in season" vs. "what I can make anytime."

---

## Common Tagging Mistakes & Corrections

### Mistake 1: Over-Tagging Origin

**Bad:** `origin: "China, Thailand"` or `origin: "East Asian"`

**Why it fails:** `origin` is a single string for one country/region. Multi-region origins belong in `cuisines`.

**Fix:** `origin: "Thailand"` + `cuisines: [Thai, Chinese]` if it's a fusion dish.

---

### Mistake 2: Missing `cookingMethods`

**Bad:** A recipe with no `cookingMethods` array.

**Why it fails:** Users can't find the recipe by method (searching for "sauté" recipes won't show this one).

**Fix:** Always include at least one method. For a raw dish: `cookingMethods: [no-cook]`. For a multi-method dish: `cookingMethods: [sear, braise]`.

---

### Mistake 3: Vague `occasions` Tags

**Bad:** `occasions: [entertaining, weeknight, comfort-food, holiday]` — too many categories dilute the signal.

**Why it fails:** If everything is an occasion, the tag becomes useless. Users can't narrow down.

**Fix:** Limit to 1-2 most accurate occasions. **Weeknight** means it's practical for Tuesday. **Entertaining** means it impresses guests. Pick the primary use case.

---

### Mistake 4: Conflating `role` with `nutritionalDensity`

**Bad:** `role: "light"` or `nutritionalDensity: "main"`

**Why it fails:** `role` describes what the dish is (main, side, base, dessert). `nutritionalDensity` describes how heavy it feels (light, moderate, hearty). A dessert can be light. A side can be hearty.

**Fix:** Separate these concepts. Example: `role: "main"` + `nutritionalDensity: "light"` for a seafood-forward pasta dish.

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
servings: '4'
---
```

---

## Notes

- **origin** (single country) vs. **cuisines** (array of cultural regions): Use `origin` for strict country of origin; use `cuisines` for broader cultural classification or fusion context.
- **Empty arrays**: Use `[]` for no applicable tags (e.g., `dietary: []` for recipes with no special restrictions).
- **No Conflicts**: A recipe CAN be both `vegetarian` AND `comfort-food`. Use all applicable tags.
- **Manual Review**: Some tags (especially `occasions`, `flavorProfile`) require human judgment. Automated detection is a future enhancement.

---

## Maintenance

- Update this guide if new tags are needed.
- Tags are case-sensitive; use exact spelling.
- Add tags to new recipes during submission.
- Use the PR template to ensure tags are included.
