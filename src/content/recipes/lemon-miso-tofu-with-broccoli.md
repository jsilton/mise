---
miseId: 024dad2e-4f51-484d-a6e4-ec77751a895a
title: Lemon-Miso Tofu with Broccoli
difficulty: easy
cookingMethods:
  - fry
  - saute
  - simmer
dietary:
  - vegetarian
occasions:
  - weeknight
  - meal-prep
flavorProfile:
  - sweet
  - savory
  - acidic
  - umami
cuisines:
  - Japanese
role: main
vibe: comfort
prepTime: 20 min
cookTime: 25 min
totalTime: '45 min, plus 20 min pressing'
servings: 4 portions
pairsWith:
  - steamed-white-rice
  - japanese-cucumber-sunomono
pairingNotes:
  steamed-white-rice: Plain rice to soak up the lemon-miso sauce.
  japanese-cucumber-sunomono: 'Cool, tangy cucumbers against the sweet glaze.'
ingredients:
  - '--- Lemon-miso sauce ---'
  - 3/4 cup hot water
  - 2 tbsp white miso
  - 1/4 cup fresh lemon juice
  - 3 tbsp maple syrup
  - 1 tbsp cornstarch
  - 1/2 tsp salt
  - '--- Tofu ---'
  - '14 oz extra-firm tofu, pressed, patted dry and cut into 1-inch cubes'
  - 1/3 cup cornstarch
  - 'salt and black pepper, to taste'
  - '3 tbsp neutral oil, plus more as needed'
  - '--- Vegetables and finish ---'
  - '1 lb broccoli, cut into small florets'
  - 'salt and black pepper, to taste'
  - 2 tsp toasted sesame oil
  - '2 garlic cloves, minced'
  - '1 tbsp fresh ginger, grated'
  - '2 scallions, thinly sliced'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from NYT Cooking
sourceUrl: 'https://cooking.nytimes.com/recipes/1026706-lemon-miso-tofu-with-broccoli'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: sauce
      name: Lemon-miso sauce
      ingredients:
        - id: water
          key: water
          name: hot water
          quantity:
            amount: 3/4
            unit: cup
          uses:
            - step: sauce
              share: 1
        - id: miso
          key: miso
          name: white miso
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: lemon
          key: lemon
          name: fresh lemon juice
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: sauce
              share: 1
        - id: maple
          key: maple
          name: maple syrup
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: starch
          key: starch
          name: cornstarch
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: salt
          key: salt
          name: salt
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: sauce
              share: 1
    - id: tofu
      name: Tofu
      ingredients:
        - id: tofu
          key: tofu
          name: extra-firm tofu
          quantity:
            amount: 14
            unit: oz
          uses:
            - step: coat
              share: 1
          preparation: 'pressed, patted dry and cut into 1-inch cubes'
        - id: starch
          key: starch
          name: cornstarch
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: coat
              share: 1
        - id: seasoning
          key: seasoning
          name: salt and black pepper
          allowance: to taste
          uses:
            - step: coat
              share: 1
        - id: oil
          key: oil
          name: neutral oil
          quantity:
            amount: 3
            unit: tbsp
          preparation: plus more as needed
          uses:
            - step: fry
              share: 1
    - id: vegetables
      name: Vegetables and finish
      ingredients:
        - id: broccoli
          key: broccoli
          name: broccoli
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: broccoli
              share: 1
          preparation: cut into small florets
        - id: veg-seasoning
          key: veg-seasoning
          name: salt and black pepper
          allowance: to taste
          uses:
            - step: broccoli
              share: 1
        - id: sesame
          key: sesame
          name: toasted sesame oil
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: aromatics
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
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: aromatics
              share: 1
          preparation: grated
        - id: scallion
          key: scallion
          name: scallion
          quantity:
            amount: 2
            unit: count
          uses:
            - step: serve
              share: 1
          plural: scallions
          preparation: thinly sliced
  steps:
    - id: sauce
      title: Mix the sauce
      text: 'Whisk {{ingredients}} in a bowl until the miso dissolves and no lumps remain.'
    - id: coat
      title: Coat the tofu
      text: >-
        Toss {{ingredients}} in a bowl until every cube is evenly coated. Shake off the excess
        starch.
    - id: fry
      title: Fry the tofu
      text: >-
        Heat {{ingredients}} in a 12-inch skillet over medium-high heat until it shimmers. Add the
        tofu in one layer and fry, turning, until golden and crisp on all sides, 8 to 10 minutes.
        Move it to a plate.
    - id: broccoli
      title: Brown the broccoli
      text: >-
        Add {{ingredients}} to the same skillet, with a splash more oil if the pan is dry. Cook,
        stirring now and then, until crisp-tender and browned at the edges, 6 to 8 minutes. Add it
        to the tofu plate.
    - id: aromatics
      title: Cook the aromatics
      text: >-
        Lower the heat to medium and wipe out any burnt bits with a paper towel held in tongs. Add
        {{ingredients}} and stir until fragrant, about 30 seconds.
    - id: finish
      title: Thicken the sauce
      text: >-
        Stir the sauce again and pour it into the skillet. Simmer, stirring, until glossy and thick,
        3 to 4 minutes. Gently fold in the tofu and broccoli until coated and hot.
    - id: serve
      title: Serve
      text: 'Sprinkle with {{ingredients}} and serve right away, while the tofu is still crisp.'
learning:
  techniques:
    - starch
    - browning
  substitutions:
    - ingredient: Maple syrup
      alternative: Honey
      effect: Use the same amount. The sauce tastes a little more floral.
  storage: 'Keeps 3 days in the fridge, though the coating softens. Reheat in a skillet over medium heat.'
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

Crisp cornstarch-coated tofu and browned broccoli folded into a glossy, sweet-tart lemon-miso sauce. Pat the pressed tofu very dry before coating so the starch fries into a crisp shell instead of a paste, and serve it right away while it still crunches.

## Directions

1. **Mix the sauce:** Whisk hot water, white miso, fresh lemon juice, maple syrup, cornstarch, and salt in a bowl until the miso dissolves and no lumps remain.
2. **Coat the tofu:** Toss extra-firm tofu, cornstarch, and salt and black pepper in a bowl until every cube is evenly coated. Shake off the excess starch.
3. **Fry the tofu:** Heat neutral oil in a 12-inch skillet over medium-high heat until it shimmers. Add the tofu in one layer and fry, turning, until golden and crisp on all sides, 8 to 10 minutes. Move it to a plate.
4. **Brown the broccoli:** Add broccoli and salt and black pepper to the same skillet, with a splash more oil if the pan is dry. Cook, stirring now and then, until crisp-tender and browned at the edges, 6 to 8 minutes. Add it to the tofu plate.
5. **Cook the aromatics:** Lower the heat to medium and wipe out any burnt bits with a paper towel held in tongs. Add toasted sesame oil, garlic cloves, and fresh ginger and stir until fragrant, about 30 seconds.
6. **Thicken the sauce:** Stir the sauce again and pour it into the skillet. Simmer, stirring, until glossy and thick, 3 to 4 minutes. Gently fold in the tofu and broccoli until coated and hot.
7. **Serve:** Sprinkle with scallions and serve right away, while the tofu is still crisp.
