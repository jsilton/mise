---
miseId: ff7c47ce-d855-495c-a558-653bd4921e39
title: Shrimp with Lobster Sauce
difficulty: easy
cookingMethods:
  - fry
  - saute
  - simmer
  - boil
occasions:
  - comfort-food
  - weeknight
  - quick-lunch
flavorProfile:
  - savory
  - umami
cuisines:
  - Chinese
role: main
vibe: comfort
prepTime: About 15–20 min active preparation
cookTime: About 10–15 min cooking
totalTime: About 25–35 min; rice prepared separately
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
equipment:
  - wok
pairsWith:
  - basmati-rice
  - steamed-broccoli
ingredients:
  - '--- Pan base ---'
  - 1 tbsp neutral oil
  - 1/4 lb ground pork
  - '2 garlic cloves, minced'
  - '1 tbsp fermented black beans (douchi), quickly rinsed, drained and mashed'
  - '1 lb shrimp, raw, peeled and deveined'
  - '--- Sauce ---'
  - 1 cup chicken stock
  - 1 tbsp soy sauce
  - 1 tsp dark soy sauce
  - '--- Slurry ---'
  - 1 tbsp cornstarch
  - 2 tbsp cold water
  - '--- Finish ---'
  - '1 large egg, beaten'
  - 'green onions, washed and chopped, as wanted for garnish'
origin: China
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: pan
      name: Pan base
      ingredients:
        - id: oil
          key: oil
          name: neutral oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: pork
              share: 1
        - id: pork
          key: pork
          name: ground pork
          quantity:
            amount: 1/4
            unit: lb
          uses:
            - step: pork
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 2
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: beans
          key: beans
          name: fermented black beans (douchi)
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: aromatics
              share: 1
          preparation: 'quickly rinsed, drained and mashed'
        - id: shrimp
          key: shrimp
          name: shrimp
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: shrimp
              share: 1
          preparation: 'raw, peeled and deveined'
    - id: sauce
      name: Sauce
      ingredients:
        - id: stock
          key: stock
          name: chicken stock
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: soy
          key: soy
          name: soy sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: simmer
              share: 1
        - id: dark
          key: dark
          name: dark soy sauce
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: simmer
              share: 1
    - id: slurry
      name: Slurry
      ingredients:
        - id: starch
          key: starch
          name: cornstarch
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: prep
              share: 1
        - id: water
          key: water
          name: cold water
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: prep
              share: 1
          role: cooking-water
    - id: finish
      name: Finish
      ingredients:
        - id: egg
          key: egg
          name: large egg
          quantity:
            amount: 1
            unit: count
          uses:
            - step: egg
              share: 1
          plural: large eggs
          preparation: beaten
        - id: scallion
          key: scallion
          name: green onions
          allowance: 'washed and chopped, as wanted for garnish'
          uses:
            - step: serve
              share: 1
  steps:
    - id: prep
      title: Prepare slurry
      text: 'Whisk {{ingredients}} smooth in a small bowl. Have the prepared beans, garlic, shrimp and beaten egg ready before cooking.'
    - id: pork
      title: Cook pork
      text: 'Cook {{ingredients}}: warm the oil in a wok or large skillet over medium-high heat, add pork and break it into small crumbles. Cook until browned, beginning to check around 5 minutes; a crisp surface or disappearance of pink is not the final endpoint. Keep cooking promptly through the following steps.'
    - id: aromatics
      title: Add aromatics
      text: 'Stir in {{ingredients}} and cook about 1 minute until fragrant, reducing heat before the garlic scorches.'
    - id: shrimp
      title: Start shrimp
      text: 'Add {{ingredients}} and stir-fry about 2 minutes until the outside changes color. The shrimp continue cooking in sauce; pink alone is not the endpoint.'
    - id: simmer
      title: Simmer and thicken
      text: 'Pour in {{ingredients}} and bring to a simmer. Re-stir the prepared slurry and stir all of it into the simmering sauce. Simmer about 1 minute, until the starch is cooked and the sauce coats a spoon; continue as needed rather than promising immediate gloss.'
    - id: egg
      title: Set egg ribbons
      text: 'Keep the sauce at a gentle simmer. Pour {{ingredients}} in a thin stream over the surface; let the ribbons begin to set before folding gently. Continue cooking until the pork and egg sauce reach 160°F / 71°C and the thickest shrimp have firm, pearly, opaque centers. Keep heat on as needed; a 30-second off-heat stand does not certify cooking.'
    - id: serve
      title: Serve
      text: 'Garnish with {{ingredients}} and serve promptly over separately prepared white rice if wanted.'
learning:
  focus: Set egg ribbons in a hot pork-and-black-bean sauce
  outcome: Cooked shrimp in a spoon-coating sauce with distinct egg ribbons.
  techniques:
    - gentle-proteins
    - starch
  before:
    - 'Use raw, peeled, deveined shrimp. Thaw frozen shrimp in the refrigerator, or sealed in a bag in cold water and cook promptly. Keep raw-contact dishes and utensils away from cooked food.'
    - 'Prepare the measured cool slurry before cooking, then re-stir before adding.'
    - Use adequate pan capacity when scaling; divide all ingredients among complete loads and beat a fractional egg before measuring its portion.
  checkpoints:
    - step: 5
      cue: Sauce coats a spoon after the slurry has simmered.
      why: Cornstarch settles in its bowl and needs stirring and heat.
    - step: 6
      cue: Ribbons hold their shape and the pork/egg temperature and shrimp-center checks are met.
      why: Egg texture alone and residual warmth do not establish the full cooking endpoint.
  troubleshooting:
    - problem: Egg becomes tiny flecks
      cause: It was stirred vigorously before ribbons set.
      fix: 'Pour in a thin stream, let ribbons begin to set, then fold gently while maintaining the required cooking endpoint.'
  substitutions:
    - ingredient: Dark soy sauce
      alternative: The same listed teaspoon amount of molasses instead of dark soy sauce
      effect: 'Changes sweetness and salt as well as color; replaces dark soy, not ordinary soy sauce. Do not claim an identical flavor.'
  timing: 'About 15–20 min active preparation; About 10–15 min cooking; About 25–35 min; rice prepared separately. Planning ranges assume peeled, thawed shrimp and prepared ingredients; additional loads or side dishes add time.'
  storage: 'Refrigerate promptly in shallow covered containers at 40°F or below, within 2 hours (1 hour above 90°F). Use within 3–4 days. Reheat while stirring gently for even heating and check 165°F / 74°C throughout. USDA additionally recommends bringing leftover sauces and gravies to a rolling boil; stir so heat reaches the whole sauce and stop after that brief boil rather than reducing it for a long time. Prolonged boiling can concentrate the sauce and firm the shrimp and egg ribbons. These are handling recommendations, not a promise of unchanged texture.'
  sources:
    - title: FDA — Selecting and serving seafood safely
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely'
    - title: FoodSafety.gov — Safe minimum cooking temperatures
      url: 'https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures'
    - title: USDA — Handling leftovers safely
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

This dark, pork-and-douchi version follows a Boston-Chinese style; it contains shrimp, not lobster. Pour beaten egg over gently simmering sauce and give the ribbons time to form before folding. Keep heat available until the pork and egg sauce reach their cooking endpoint.

## Directions

1. **Prepare slurry:** Whisk cornstarch and cold water smooth in a small bowl. Have the prepared beans, garlic, shrimp and beaten egg ready before cooking.
2. **Cook pork:** Cook neutral oil and ground pork: warm the oil in a wok or large skillet over medium-high heat, add pork and break it into small crumbles. Cook until browned, beginning to check around 5 minutes; a crisp surface or disappearance of pink is not the final endpoint. Keep cooking promptly through the following steps.
3. **Add aromatics:** Stir in garlic cloves and fermented black beans (douchi) and cook about 1 minute until fragrant, reducing heat before the garlic scorches.
4. **Start shrimp:** Add shrimp and stir-fry about 2 minutes until the outside changes color. The shrimp continue cooking in sauce; pink alone is not the endpoint.
5. **Simmer and thicken:** Pour in chicken stock, soy sauce, and dark soy sauce and bring to a simmer. Re-stir the prepared slurry and stir all of it into the simmering sauce. Simmer about 1 minute, until the starch is cooked and the sauce coats a spoon; continue as needed rather than promising immediate gloss.
6. **Set egg ribbons:** Keep the sauce at a gentle simmer. Pour large egg in a thin stream over the surface; let the ribbons begin to set before folding gently. Continue cooking until the pork and egg sauce reach 160°F / 71°C and the thickest shrimp have firm, pearly, opaque centers. Keep heat on as needed; a 30-second off-heat stand does not certify cooking.
7. **Serve:** Garnish with green onions and serve promptly over separately prepared white rice if wanted.
