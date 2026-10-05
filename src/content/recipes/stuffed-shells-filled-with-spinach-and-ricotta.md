---
title: Spinach & Ricotta Stuffed Shells
difficulty: intermediate
cookingMethods:
  - bake
  - boil
  - saute
dietary:
  - vegetarian-option
occasions:
  - comfort-food
  - weekend-project
  - entertaining
  - potluck
flavorProfile:
  - umami
  - herbaceous
cuisines:
  - Italian
  - American
role: main
vibe: comfort
prepTime: 35 min
cookTime: 45 min
totalTime: 90 min
servings: 6 portions
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: excellent
advancePrep:
  - make-ahead
equipment:
  - two-shallow-2-quart-baking-dishes
  - large-pot
  - skillet
  - instant-read-thermometer
pairsWith:
  - garlic-bread
  - avocado-kale-caesar-salad
  - everyday-arugula-salad
ingredients:
  - '--- Pasta ---'
  - 12 oz jumbo pasta shells
  - 1 tbsp extra-virgin olive oil
  - 'water, enough to boil the shells freely'
  - 'salt, for the pasta water, to taste'
  - '--- Spinach ---'
  - 5 oz fresh baby spinach
  - 1 tbsp olive oil
  - '1 garlic clove, smashed'
  - '--- Filling and cheese topping ---'
  - '15 oz whole-milk ricotta, drain any freely pooling whey'
  - '8 oz low-moisture block mozzarella, freshly shredded'
  - '2 oz Parmigiano-Reggiano, finely grated'
  - '1 lemon, zest only; save the juice for another use'
  - 1/4 tsp ground nutmeg
  - '2 tbsp fresh chives or basil, minced'
  - 'salt, to taste'
  - 'black pepper, to taste'
  - '1 large egg, beaten'
  - '--- Prepared sauce ---'
  - 4 cups prepared marinara or tomato pasta sauce
origin: Italian-American home cooking
description: >-
  Jumbo shells with a spinach, ricotta and mozzarella filling, baked under tomato sauce and a
  browned cheese topping.
scaling:
  mode: fixed
  reason: >-
    Written for a full 12 oz pasta batch and six portions. Shell sizes vary: use enough shallow
    dishes for one layer, keeping the full filling and sauce allocation together.
source: 'Adapted from NYT Cooking, Stuffed Shells Filled With Spinach and Ricotta'
sourceUrl: 'https://cooking.nytimes.com/recipes/1013942-stuffed-shells-filled-with-spinach-and-ricotta'
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: pasta
      name: Pasta
      ingredients:
        - id: jumbo-shells
          key: jumbo-shells
          name: jumbo pasta shells
          quantity:
            amount: 12
            unit: oz
          uses:
            - step: pasta
              share: 1
        - id: pasta-oil
          key: pasta-oil
          name: extra-virgin olive oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: pasta
              share: 1
        - id: cooking-water
          key: cooking-water
          name: water
          allowance: enough to boil the shells freely
          uses:
            - step: pasta
              share: 1
          role: cooking-water
        - id: pasta-salt
          key: pasta-salt
          name: salt
          allowance: 'for the pasta water, to taste'
          uses:
            - step: pasta
              share: 1
    - id: greens
      name: Spinach
      ingredients:
        - id: baby-spinach
          key: baby-spinach
          name: fresh baby spinach
          quantity:
            amount: 5
            unit: oz
          uses:
            - step: spinach
              share: 1
        - id: spinach-oil
          key: spinach-oil
          name: olive oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: spinach
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 1
            unit: count
          uses:
            - step: spinach
              share: 1
          plural: garlic cloves
          preparation: smashed
          role: discarded
    - id: filling
      name: Filling and cheese topping
      ingredients:
        - id: ricotta
          key: ricotta
          name: whole-milk ricotta
          quantity:
            amount: 15
            unit: oz
          uses:
            - step: filling
              share: 1
          preparation: drain any freely pooling whey
        - id: mozzarella
          key: mozzarella
          name: low-moisture block mozzarella
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: filling
              share: 2/3
            - step: arrange
              share: 1/3
          preparation: freshly shredded
        - id: parmigiano
          key: parmigiano
          name: Parmigiano-Reggiano
          quantity:
            amount: 2
            unit: oz
          uses:
            - step: filling
              share: 2/3
            - step: arrange
              share: 1/3
          preparation: finely grated
        - id: lemon
          key: lemon
          name: lemon
          quantity:
            amount: 1
            unit: count
          uses:
            - step: filling
              share: 1
          plural: lemons
          preparation: zest only; save the juice for another use
        - id: nutmeg
          key: nutmeg
          name: ground nutmeg
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: filling
              share: 1
        - id: herbs
          key: herbs
          name: fresh chives or basil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: filling
              share: 1
          preparation: minced
        - id: filling-salt
          key: filling-salt
          name: salt
          allowance: to taste
          uses:
            - step: filling
              share: 1
        - id: black-pepper
          key: black-pepper
          name: black pepper
          allowance: to taste
          uses:
            - step: filling
              share: 1
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
    - id: sauce
      name: Prepared sauce
      ingredients:
        - id: marinara
          key: marinara
          name: prepared marinara or tomato pasta sauce
          quantity:
            amount: 4
            unit: cup
          uses:
            - step: dishes
              share: 1/4
            - step: arrange
              share: 3/4
  steps:
    - id: setup
      title: Prepare the oven and ingredients
      text: >-
        Heat the oven to 375°F. Plan on two shallow 2-quart oven-safe dishes, or enough shallow
        dishes to hold the cooked shells in one layer without stacking. Check that the dishes fit in
        the oven with space for heat to circulate. Capacity alone does not guarantee enough surface
        area. Bring a large pot of water toward a boil while preparing the spinach. Divide both
        grated cheeses into two-thirds for filling and one-third for topping.
    - id: spinach
      title: Wilt and drain the spinach
      text: >-
        Use {{ingredients}}. Warm the oil in a skillet over medium heat; add the smashed garlic for
        30–45 seconds, then the spinach. Cook 2–3 minutes until wilted. Discard the garlic. Let the
        spinach cool enough to handle, squeeze out excess liquid in a clean towel and chop finely.
    - id: pasta
      title: Cook the shells short of tender
      text: >-
        Use {{ingredients}}. Salt the boiling water and cook the shells for the package’s
        baked-pasta time, or about 2–3 minutes short of its fully cooked time. They should be
        pliable enough to fill but still firm. Drain, spread out carefully and coat lightly with the
        measured oil. Let cool enough to handle; do not add pasta water to the filling.
    - id: filling
      title: Mix and season the filling
      text: >-
        Combine {{ingredients}}, using only the lemon’s zest, with the prepared spinach. The cheese
        shares here are two-thirds of each full batch; keep the rest for the topping. Fold by hand
        until evenly mixed and scoopable, retaining some ricotta texture. Taste and adjust the salt
        and pepper now, before adding the egg.
    - id: egg
      title: Add the egg
      text: >-
        Fold {{ingredients}} into the seasoned filling. Do not taste the filling after adding the
        raw egg.
    - id: dishes
      title: Coat the dishes
      text: >-
        Distribute {{ingredients}} across the bottoms of the baking dishes: 1 cup total for the
        whole batch. This sauce layer keeps the pasta from sitting against a dry dish.
    - id: arrange
      title: 'Fill, sauce and top'
      text: >-
        Divide all the filling among the intact cooked shells rather than filling the first ones
        heavily. Arrange them opening-up in a single layer; use another shallow dish if needed.
        Distribute {{ingredients}} over all the dishes: 3 cups sauce total and the reserved
        one-third of each cheese. Coat exposed pasta edges with sauce. Do not stack shells to force
        them into one pan.
    - id: bake
      title: Bake to the center
      text: >-
        Cover the dishes with foil, tenting it away from the cheese, and bake for about 25 minutes.
        Uncover and bake another 15–20 minutes until the sauce bubbles and the cheese has golden
        spots. Check representative filled shells in the center of each dish with a thermometer: the
        filling and casserole must reach 165°F / 74°C. Extend the time when needed; if the top
        colors before the center is hot, cover loosely again. Rotate dishes if heating is uneven.
        Refrigerator-cold assembly takes longer.
    - id: rest
      title: Rest and serve
      text: >-
        Let the dishes rest for at least 10 minutes so the filling settles, then divide the full
        batch into six portions. If serving with garlic bread, the rest can overlap its separate
        400°F bake; serve promptly once the bread is ready.
learning:
  focus: Control filling moisture and account for divided cheese
  outcome: >-
    Tender shells holding creamy spinach and cheese, surrounded by tomato sauce with a lightly
    browned topping.
  techniques:
    - starch
    - temperature
    - seasoning
  before:
    - >-
      Measure 4 cups of already prepared pasta sauce. A jar’s weight in ounces is not its volume in
      fluid ounces; buy enough and measure rather than assuming one 32 oz jar supplies four cups.
    - >-
      Use enough shallow baking-dish area for all the pasta in a single layer. Shell size and shape
      vary, so an exact filled-shell count is not promised.
    - >-
      Drain freely pooling whey from the ricotta. The two-thirds/one-third cheese split uses all 8
      oz mozzarella and all 2 oz Parmigiano.
  checkpoints:
    - step: 4
      cue: 'The filling is evenly combined and scoopable, with no pool of free liquid.'
      why: >-
        Squeezing the spinach and draining watery ricotta controls dilution without adding starch
        water.
    - step: 7
      cue: All filling is shared across the shells and the full sauce and cheese allocations are used.
      why: >-
        An early oversized scoop can leave the last shells empty; dividing by the actual cooked
        count avoids guessing a universal shell size.
    - step: 8
      cue: Central filled shells in each dish reach 165°F / 74°C.
      why: >-
        Bubbling sauce and browned cheese do not establish the temperature of the egg-containing
        filling.
  troubleshooting:
    - problem: Filling is loose
      cause: Ricotta or spinach retained excess liquid.
      fix: >-
        Before adding the egg, drain any pooling liquid and make sure the spinach is squeezed. Do
        not add pasta water automatically. Once baked, rest before lifting portions; extra baking is
        not a reliable cure for a watery filling.
    - problem: Shells do not fit the dish
      cause: Shell dimensions vary or the dish has too little flat area.
      fix: >-
        Use another shallow oven-safe dish and divide the existing sauce and topping across the full
        batch. If the oven cannot accommodate the dishes together, bake in separate rounds and allow
        the extra time.
  substitutions:
    - ingredient: 5 oz spinach
      alternative: '10 oz spinach, wilted, squeezed and chopped'
      effect: A greener filling with more volume; use the same cheese batch and check dish fit.
    - ingredient: Parmigiano-Reggiano
      alternative: The same weight of a hard grating cheese made with vegetarian rennet
      effect: >-
        For a vegetarian version, also check the ricotta, mozzarella and sauce. Flavor and saltiness
        will vary.
  timing: >-
    About 1 hour 30 minutes using prepared sauce: allow roughly 35 minutes to prepare and fill,
    40–45 minutes baking, and at least 10 minutes resting. This is a planning estimate, not a
    guaranteed clock. Cold assembly, a slow oven, large shells or separate oven rounds can take
    longer. Sauce made from scratch is additional.
  storage: >-
    For next-day assembly, cover and refrigerate promptly at 40°F / 4°C or below; follow the
    bakeware maker’s instructions for refrigerator-to-oven transitions. Allow extra baking time and
    verify the same 165°F / 74°C center endpoint. Refrigerate perishable leftovers within 2 hours,
    or 1 hour above 90°F / 32°C, in shallow covered containers at 40°F / 4°C or below. Use within
    3–4 days or freeze; reheat to 165°F / 74°C throughout.
  sources:
    - title: NYT Cooking — Saved original stuffed-shell recipe
      url: 'https://cooking.nytimes.com/recipes/1013942-stuffed-shells-filled-with-spinach-and-ricotta'
    - title: Daniel Gritzer — Stuffed-shell moisture control and cheese allocation
      url: 'https://www.seriouseats.com/classic-italian-american-stuffed-shells'
    - title: J. Kenji López-Alt — Ricotta texture and spinach moisture in lasagna
      url: 'https://www.seriouseats.com/food-lab-creamy-cheesy-ultimate-spinach-lasagna-recipe'
    - title: 'FDA Food Code 2026 — Section 3-401.11(A)(3), stuffed pasta'
      url: 'https://www.fda.gov/media/194741/download?attachment='
    - title: USDA FSIS — Leftovers and food safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

Jumbo shells hold a creamy spinach-and-three-cheese filling beneath tomato sauce and a browned mozzarella topping. Squeeze excess liquid from the cooked greens and drain watery ricotta so the filling stays inside the pasta. Divide the cheeses before mixing, and arrange the shells in one layer so they heat evenly.

## Directions

1. **Prepare the oven and ingredients:** Heat the oven to 375°F. Plan on two shallow 2-quart oven-safe dishes, or enough shallow dishes to hold the cooked shells in one layer without stacking. Check that the dishes fit in the oven with space for heat to circulate. Capacity alone does not guarantee enough surface area. Bring a large pot of water toward a boil while preparing the spinach. Divide both grated cheeses into two-thirds for filling and one-third for topping.
2. **Wilt and drain the spinach:** Use fresh baby spinach, olive oil, and garlic clove. Warm the oil in a skillet over medium heat; add the smashed garlic for 30–45 seconds, then the spinach. Cook 2–3 minutes until wilted. Discard the garlic. Let the spinach cool enough to handle, squeeze out excess liquid in a clean towel and chop finely.
3. **Cook the shells short of tender:** Use jumbo pasta shells, extra-virgin olive oil, water, and salt. Salt the boiling water and cook the shells for the package’s baked-pasta time, or about 2–3 minutes short of its fully cooked time. They should be pliable enough to fill but still firm. Drain, spread out carefully and coat lightly with the measured oil. Let cool enough to handle; do not add pasta water to the filling.
4. **Mix and season the filling:** Combine whole-milk ricotta, 2/3 of the low-moisture block mozzarella, 2/3 of the Parmigiano-Reggiano, lemon, ground nutmeg, fresh chives or basil, salt, and black pepper, using only the lemon’s zest, with the prepared spinach. The cheese shares here are two-thirds of each full batch; keep the rest for the topping. Fold by hand until evenly mixed and scoopable, retaining some ricotta texture. Taste and adjust the salt and pepper now, before adding the egg.
5. **Add the egg:** Fold large egg into the seasoned filling. Do not taste the filling after adding the raw egg.
6. **Coat the dishes:** Distribute 1/4 of the prepared marinara or tomato pasta sauce across the bottoms of the baking dishes: 1 cup total for the whole batch. This sauce layer keeps the pasta from sitting against a dry dish.
7. **Fill, sauce and top:** Divide all the filling among the intact cooked shells rather than filling the first ones heavily. Arrange them opening-up in a single layer; use another shallow dish if needed. Distribute 1/3 of the low-moisture block mozzarella, 1/3 of the Parmigiano-Reggiano, and 3/4 of the prepared marinara or tomato pasta sauce over all the dishes: 3 cups sauce total and the reserved one-third of each cheese. Coat exposed pasta edges with sauce. Do not stack shells to force them into one pan.
8. **Bake to the center:** Cover the dishes with foil, tenting it away from the cheese, and bake for about 25 minutes. Uncover and bake another 15–20 minutes until the sauce bubbles and the cheese has golden spots. Check representative filled shells in the center of each dish with a thermometer: the filling and casserole must reach 165°F / 74°C. Extend the time when needed; if the top colors before the center is hot, cover loosely again. Rotate dishes if heating is uneven. Refrigerator-cold assembly takes longer.
9. **Rest and serve:** Let the dishes rest for at least 10 minutes so the filling settles, then divide the full batch into six portions. If serving with garlic bread, the rest can overlap its separate 400°F bake; serve promptly once the bread is ready.

## Make ahead and variations

This six-portion batch takes about 1 hour 30 minutes with prepared sauce: roughly 35 minutes to prepare and fill, 40–45 minutes baking and at least 10 minutes resting. A cold pan or separate oven rounds adds time.

For next-day assembly, cover and refrigerate promptly at 40°F / 4°C or below. Follow the bakeware maker’s instructions for refrigerator-to-oven transitions, allow additional baking time and check the same 165°F / 74°C center endpoint.

For more greens, use 10 oz spinach instead of 5 oz, still wilted and well squeezed; the filling will have more volume. For a vegetarian version, replace the Parmigiano with the same weight of a suitable vegetarian-rennet hard cheese, and check the other cheeses and sauce.

Refrigerate perishable leftovers within 2 hours, or 1 hour above 90°F / 32°C, at 40°F / 4°C or below. Use within 3–4 days or freeze; reheat to 165°F / 74°C throughout. Divide a large leftover casserole into shallow containers for cooling.
