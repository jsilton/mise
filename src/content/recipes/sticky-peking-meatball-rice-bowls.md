---
miseId: 8f6522be-850b-4ba8-b19f-4f6fc2943373
title: Sticky Peking Meatball Rice Bowls
role: main
vibe: comfort
difficulty: easy
prepTime: 15 min
cookTime: 35 min
totalTime: 50 min
servings: 5 portions
cookingMethods:
  - simmer
  - saute
categories: []
pairsWith:
  - smashed-cucumber-salad
pairingNotes:
  smashed-cucumber-salad: 'Cool, tangy crunch beside the sweet glaze.'
ingredients:
  - '1 1/2 cups jasmine rice, rinsed and drained'
  - '1 can (13 1/2 oz) coconut milk, stirred smooth'
  - 1/2 cup water
  - 3/4 tsp kosher salt
  - 1 1/2 lb frozen fully cooked meatballs
  - 1 tsp oil
  - 1/3 cup hoisin sauce
  - 1/3 cup Peking duck sauce
  - 2 tbsp rice vinegar
  - 3 tbsp water
  - '1 1/2 tbsp fresh ginger, grated'
  - 4 minced garlic cloves
  - 1 tsp neutral oil
  - '3 carrots, peeled and sliced into coins'
  - '1 bunch of kale, stems removed, roughly chopped'
  - 2 thinly sliced garlic cloves
  - '1/2 lemon, juiced'
  - 'black pepper, to taste'
rating: 5
cuisines:
  - Chinese
origin: Chinese-American-inspired home cooking
occasions:
  - weeknight
  - family-meal
seasons:
  - year-round
flavorProfile:
  - sweet
  - savory
  - tangy
formula:
  version: 1
  yield:
    amount: 5
    unit: portion
  components:
    - id: main
      name: Recipe
      ingredients:
        - id: rice
          key: rice
          name: jasmine rice
          quantity:
            amount: 1 1/2
            unit: cup
          preparation: rinsed and drained
          uses:
            - step: rice
              share: 1
        - id: coconut
          key: coconut
          name: coconut milk
          quantity:
            amount: 1
            unit: can
          preparation: stirred smooth
          uses:
            - step: rice
              share: 1
          packageSize:
            amount: 13.5
            unit: oz
        - id: rice-water
          key: rice-water
          name: water
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: rice
              share: 1
        - id: rice-salt
          key: kosher-salt
          name: kosher salt
          quantity:
            amount: 3/4
            unit: tsp
          uses:
            - step: rice
              share: 1
        - id: meatballs
          key: meatballs
          name: frozen fully cooked meatballs
          quantity:
            amount: 1 1/2
            unit: lb
          uses:
            - step: meatballs
              share: 1
        - id: meat-oil
          key: meat-oil
          name: oil
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: meatballs
              share: 1
        - id: hoisin
          key: hoisin
          name: hoisin sauce
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: glaze
              share: 1
        - id: duck
          key: duck
          name: Peking duck sauce
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: glaze
              share: 1
        - id: vinegar
          key: vinegar
          name: rice vinegar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: glaze
              share: 1
        - id: glaze-water
          key: glaze-water
          name: water
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: glaze
              share: 1
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1 1/2
            unit: tbsp
          preparation: grated
          uses:
            - step: aromatics
              share: 1
        - id: meat-garlic
          key: meat-garlic
          name: minced garlic clove
          quantity:
            amount: 4
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: minced garlic cloves
        - id: veg-oil
          key: veg-oil
          name: neutral oil
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: carrots
              share: 1
        - id: carrots
          key: carrots
          name: carrot
          quantity:
            amount: 3
            unit: count
          preparation: peeled and sliced into coins
          uses:
            - step: carrots
              share: 1
          plural: carrots
        - id: kale
          key: kale
          name: bunch of kale
          quantity:
            amount: 1
            unit: count
          preparation: 'stems removed, roughly chopped'
          uses:
            - step: kale
              share: 1
          plural: bunches of kale
        - id: veg-garlic
          key: veg-garlic
          name: thinly sliced garlic clove
          quantity:
            amount: 2
            unit: count
          uses:
            - step: kale
              share: 1
          plural: thinly sliced garlic cloves
        - id: lemon
          key: lemon
          name: lemon
          quantity:
            amount: 1/2
            unit: count
          preparation: juiced
          uses:
            - step: finish
              share: 1
          plural: lemons
        - id: pepper
          key: pepper
          name: black pepper
          allowance: to taste
          uses:
            - step: kale
              share: 1
  steps:
    - id: rice
      title: Cook the coconut rice
      text: 'Put {{ingredients}} in a rice cooker. Stir once and cook on the white rice setting.'
    - id: meatballs
      title: Brown the meatballs
      text: >-
        Heat {{ingredients}} in a large skillet over medium heat. Cover and cook, turning now and
        then, until browned and hot in the center, 12 to 15 minutes.
    - id: aromatics
      title: Add the aromatics
      text: >-
        Lower the heat to medium-low. Add the {{ingredients}} and stir until fragrant, about 30
        seconds.
    - id: glaze
      title: Glaze the meatballs
      text: >-
        Stir in {{ingredients}}. Simmer, stirring, until the glaze thickens and clings to the
        meatballs, about 5 minutes. Add a splash of water if it gets too thick.
    - id: carrots
      title: Cook the carrots
      text: >-
        While the glaze simmers, heat {{ingredients}} in another skillet over medium-high heat and
        cook, stirring, until the carrots start to soften, about 2 minutes.
    - id: kale
      title: Wilt the kale
      text: >-
        Add the {{ingredients}}. Cook, tossing, until the kale is tender and the carrots are cooked
        through, 3 to 5 minutes. Add a splash of water if the pan gets dry.
    - id: finish
      title: Season the greens
      text: 'Take the pan off the heat and stir in the juice of the {{ingredients}}.'
    - id: serve
      title: Build the bowls
      text: Fluff the rice and divide it among bowls. Top with the glazed meatballs and the greens.
equipment:
  - rice-cooker
  - skillet
learning:
  techniques:
    - temperature
  substitutions:
    - ingredient: rice vinegar
      alternative: Apple cider vinegar
      effect: A little fruitier and sharper. Use the same amount.
    - ingredient: Stovetop
      alternative: Simmer the rice in a covered pot
      effect: >-
        Bring the rice, coconut milk, water and salt to a boil, cover and cook on low for 18
        minutes. Rest 10 minutes off the heat.
  storage: Keeps 4 days in the fridge. Reheat the meatballs and rice covered with a splash of water.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

A weeknight shortcut bowl. Frozen meatballs get a sticky glaze of hoisin and duck sauce with plenty of fresh ginger and garlic. Salted coconut rice and lemony garlic kale with carrots balance the sweetness.

## Directions

1. **Cook the coconut rice:** Put jasmine rice, coconut milk, water, and kosher salt in a rice cooker. Stir once and cook on the white rice setting.
2. **Brown the meatballs:** Heat frozen fully cooked meatballs and oil in a large skillet over medium heat. Cover and cook, turning now and then, until browned and hot in the center, 12 to 15 minutes.
3. **Add the aromatics:** Lower the heat to medium-low. Add the fresh ginger and minced garlic cloves and stir until fragrant, about 30 seconds.
4. **Glaze the meatballs:** Stir in hoisin sauce, Peking duck sauce, rice vinegar, and water. Simmer, stirring, until the glaze thickens and clings to the meatballs, about 5 minutes. Add a splash of water if it gets too thick.
5. **Cook the carrots:** While the glaze simmers, heat neutral oil and carrots in another skillet over medium-high heat and cook, stirring, until the carrots start to soften, about 2 minutes.
6. **Wilt the kale:** Add the bunch of kale, thinly sliced garlic cloves, and black pepper. Cook, tossing, until the kale is tender and the carrots are cooked through, 3 to 5 minutes. Add a splash of water if the pan gets dry.
7. **Season the greens:** Take the pan off the heat and stir in the juice of the lemon.
8. **Build the bowls:** Fluff the rice and divide it among bowls. Top with the glazed meatballs and the greens.
