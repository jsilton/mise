---
miseId: 73c1b175-ee98-459f-9484-99d15c38eb85
title: Shrimp & Mango Tacos
difficulty: intermediate
cookingMethods:
  - fry
  - saute
  - no-cook
occasions:
  - weeknight
flavorProfile:
  - spicy
  - sweet
  - acidic
cuisines:
  - Mexican
role: main
vibe: quick
prepTime: About 15–20 min active preparation
cookTime: About 8–12 min pan cooking
totalTime: About 25–35 min; steaming tortillas adds a 15 min covered stand
pairsWith:
  - mexican-street-corn-salad
  - guacamole
  - cilantro-lime-rice
ingredients:
  - '--- Shrimp and mango filling ---'
  - 2 tbsp neutral oil
  - '1 lb small shrimp, raw, peeled, deveined and patted dry'
  - 'salt, to taste for the shrimp'
  - '2 garlic cloves, sliced'
  - '2 tsp cumin seeds, lightly toasted and ground'
  - '2 serrano chilies, minced'
  - '1 large ripe mango, peeled, pit removed and finely chopped'
  - '1/4 cup fresh cilantro, washed and chopped'
  - 5 tbsp fresh lime juice
  - 'salt, to taste after cooking'
  - '--- Tortillas ---'
  - 8 corn tortillas
  - 'water, enough for the steamer below the basket, if steaming, optional'
origin: Mexico
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: poor
servings: 4 portions
source: Adapted from cooking.nytimes.com
sourceUrl: 'https://cooking.nytimes.com/recipes/1013581-shrimp-and-mango-tacos?smid=ck-recipe-iOS-share'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: filling
      name: Shrimp and mango filling
      ingredients:
        - id: oil
          key: oil
          name: neutral oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sear
              share: 1
        - id: shrimp
          key: shrimp
          name: small shrimp
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: sear
              share: 1
          preparation: 'raw, peeled, deveined and patted dry'
        - id: salt
          key: salt
          name: salt
          allowance: to taste for the shrimp
          uses:
            - step: sear
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 2
            unit: count
          uses:
            - step: sear
              share: 1
          plural: garlic cloves
          preparation: sliced
        - id: cumin
          key: cumin
          name: cumin seeds
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: spice
              share: 1
          preparation: lightly toasted and ground
        - id: chili
          key: chili
          name: serrano chili
          quantity:
            amount: 2
            unit: count
          uses:
            - step: spice
              share: 1
          plural: serrano chilies
          preparation: minced
        - id: mango
          key: mango
          name: large ripe mango
          quantity:
            amount: 1
            unit: count
          uses:
            - step: mango
              share: 1
          plural: large ripe mangoes
          preparation: 'peeled, pit removed and finely chopped'
        - id: cilantro
          key: cilantro
          name: fresh cilantro
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: mango
              share: 1
          preparation: washed and chopped
        - id: lime
          key: lime
          name: fresh lime juice
          quantity:
            amount: 5
            unit: tbsp
          uses:
            - step: finish
              share: 1
        - id: finish-salt
          key: finish-salt
          name: salt
          allowance: to taste after cooking
          uses:
            - step: finish
              share: 1
    - id: serve
      name: Tortillas
      ingredients:
        - id: tortilla
          key: tortilla
          name: corn tortilla
          quantity:
            amount: 8
            unit: count
          uses:
            - step: warm
              share: 1
          plural: corn tortillas
        - id: steam-water
          key: steam-water
          name: water
          allowance: 'enough for the steamer below the basket, if steaming'
          uses:
            - step: warm
              share: 1
          role: cooking-water
          optional: true
  steps:
    - id: prep
      title: Prepare
      text: 'Prepare all the filling ingredients before heating the pan. If the cumin is not already toasted, stir the seeds in a dry pan over moderate heat until fragrant, then cool briefly and grind. Keep the measured cumin total unchanged.'
    - id: warm
      title: Warm the tortillas
      text: 'Warm {{ingredients}}: heat tortillas in a towel in short microwave intervals until flexible, starting around 45–60 seconds for the original batch, or char them briefly on a hot dry skillet, turning as needed. For direct-flame warming: use tongs to turn each tortilla briefly over a gas flame until lightly charred and flexible. Keep wrapped and warm. For steaming, set the wrapped tortillas above about 1 inch of boiling water, cover and steam for 1 minute, then turn off the heat and leave covered for 15 minutes; water must not touch the tortillas. More tortillas may need separate loads.'
    - id: sear
      title: Start the shrimp
      text: 'Use {{ingredients}}. Heat the measured oil in a large heavy skillet or wok over medium-high heat. Add shrimp and the shrimp-seasoning salt. Stir about 1–2 minutes until they begin to color, adding all the garlic during the last 30–45 seconds so it does not scorch. Use a pan that lets you move the shrimp freely, or divide the whole filling across batches.'
    - id: spice
      title: Add cumin and chili
      text: 'Stir in {{ingredients}} and cook about 1 minute until fragrant, reducing heat if the garlic is darkening. Continue cooking shrimp as needed rather than using pink edges as the final test.'
    - id: mango
      title: Add mango and cilantro
      text: 'Fold in {{ingredients}} and cook about 1 minute, until the mango edges soften but pieces remain. Cook until the thickest shrimp are firm, pearly and opaque throughout; FDA guidance is 145°F for seafood when checking with a suitable thermometer. Pink color or a fixed minute count alone does not establish doneness.'
    - id: finish
      title: Finish and serve
      text: 'Off heat, stir in {{ingredients}}, adding the finishing salt only as needed after tasting cooked filling. Divide all the filling among all the warm tortillas; the original batch provides eight tortillas for four planning portions. Serve promptly, with separately prepared [Mexican Red Rice](/mise/recipes/mexican-red-rice) if wanted.'
learning:
  focus: Cook shrimp through while keeping mango pieces distinct
  outcome: 'Cooked shrimp and softened-edge mango in warm, pliable tortillas.'
  techniques:
    - gentle-proteins
    - seasoning
  before:
    - 'Use raw, peeled, deveined shrimp. Thaw frozen shrimp in the refrigerator, or sealed in a bag in cold water and cook promptly. Keep raw-contact dishes and utensils away from cooked food.'
    - Prepare mango and herbs separately from raw shrimp. Toast/grind cumin before the pan cooking starts.
    - 'Use additional pan batches when scaling; allocate the full oil and filling across batches, rather than repeating the whole amounts per pan.'
  checkpoints:
    - step: 3
      cue: Garlic is fragrant rather than dark; shrimp are still being cooked.
      why: Garlic added late needs less pan time than the shrimp.
    - step: 5
      cue: Shrimp centers are cooked and mango pieces have softened edges.
      why: A one-minute fruit stage does not override shrimp doneness.
  troubleshooting:
    - problem: Garlic scorches before shrimp cook
      cause: The pan is too hot or garlic entered too early.
      fix: Reduce heat and finish shrimp cooking; badly burnt garlic cannot be repaired by more lime.
  substitutions:
    - ingredient: Serrano chilies
      alternative: 'For the original four-portion batch, two bird chilies or one large jalapeño instead; scale this branch proportionally'
      effect: Different chilies vary in heat; all enter the cumin stage.
    - ingredient: Corn tortillas
      alternative: The same listed count of flour tortillas
      effect: Warm until pliable; larger tortillas change the filled size.
    - ingredient: Five tablespoons lime juice
      alternative: 'For the original four-portion batch, use four to five tablespoons instead; scale this range proportionally'
      effect: 'Use this separate finish range instead of the listed total, not in addition.'
  timing: 'About 15–20 min active preparation; About 8–12 min pan cooking; About 25–35 min; steaming tortillas adds a 15 min covered stand. Planning ranges assume peeled, thawed shrimp and prepared ingredients; additional loads or side dishes add time.'
  storage: 'Refrigerate promptly in shallow covered containers at 40°F or below, within 2 hours (1 hour above 90°F). Use within 3–4 days and reheat hot leftovers to 165°F throughout. Shrimp can become firmer with reheating; these times describe handling, not a promise of unchanged texture.'
  sources:
    - title: Adapted from cooking.nytimes.com
      url: 'https://cooking.nytimes.com/recipes/1013581-shrimp-and-mango-tacos?smid=ck-recipe-iOS-share'
    - title: FDA — Selecting and serving seafood safely
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely'
    - title: USDA — Handling leftovers safely
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

Mango stays in small pieces rather than being cooked down into a smooth glaze. Toasted cumin seasons the shrimp, and the full lime juice goes in after cooking. Warm the tortillas before the filling is ready so the shrimp can be served promptly.

## Directions

1. **Prepare:** Prepare all the filling ingredients before heating the pan. If the cumin is not already toasted, stir the seeds in a dry pan over moderate heat until fragrant, then cool briefly and grind. Keep the measured cumin total unchanged.
2. **Warm the tortillas:** Warm corn tortillas and water (if using): heat tortillas in a towel in short microwave intervals until flexible, starting around 45–60 seconds for the original batch, or char them briefly on a hot dry skillet, turning as needed. For direct-flame warming: use tongs to turn each tortilla briefly over a gas flame until lightly charred and flexible. Keep wrapped and warm. For steaming, set the wrapped tortillas above about 1 inch of boiling water, cover and steam for 1 minute, then turn off the heat and leave covered for 15 minutes; water must not touch the tortillas. More tortillas may need separate loads.
3. **Start the shrimp:** Use neutral oil, small shrimp, salt, and garlic cloves. Heat the measured oil in a large heavy skillet or wok over medium-high heat. Add shrimp and the shrimp-seasoning salt. Stir about 1–2 minutes until they begin to color, adding all the garlic during the last 30–45 seconds so it does not scorch. Use a pan that lets you move the shrimp freely, or divide the whole filling across batches.
4. **Add cumin and chili:** Stir in cumin seeds and serrano chilies and cook about 1 minute until fragrant, reducing heat if the garlic is darkening. Continue cooking shrimp as needed rather than using pink edges as the final test.
5. **Add mango and cilantro:** Fold in large ripe mango and fresh cilantro and cook about 1 minute, until the mango edges soften but pieces remain. Cook until the thickest shrimp are firm, pearly and opaque throughout; FDA guidance is 145°F for seafood when checking with a suitable thermometer. Pink color or a fixed minute count alone does not establish doneness.
6. **Finish and serve:** Off heat, stir in fresh lime juice and salt, adding the finishing salt only as needed after tasting cooked filling. Divide all the filling among all the warm tortillas; the original batch provides eight tortillas for four planning portions. Serve promptly, with separately prepared [Mexican Red Rice](/mise/recipes/mexican-red-rice) if wanted.
