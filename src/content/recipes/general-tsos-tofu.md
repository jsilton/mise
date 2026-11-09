---
miseId: 0f72ea29-7fcd-487b-a44d-99841aaaf100
title: General Tso's Tofu
difficulty: easy
cookingMethods:
  - fry
  - saute
  - simmer
  - boil
dietary:
  - vegetarian
occasions:
  - weeknight
  - quick-lunch
  - meal-prep
flavorProfile:
  - spicy
  - sweet
  - savory
  - acidic
  - umami
cuisines:
  - Chinese
role: main
vibe: comfort
prepTime: 20 min
cookTime: 25 min
totalTime: 45 min
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: excellent
equipment:
  - large-skillet
pairsWith:
  - steamed-white-rice
  - smashed-cucumber-salad
ingredients:
  - '--- Tofu and coating ---'
  - '1 lb extra-firm tofu, pressed and cut into 1-inch cubes'
  - 1 1/2 tbsp honey
  - 2 tsp vinegar-based hot sauce
  - 1 1/2 tbsp sesame seeds
  - 3 tbsp cornstarch
  - '1/3 cup peanut oil, for frying'
  - '--- Sauce and vegetables ---'
  - '1 tbsp fresh ginger, minced'
  - '2 garlic cloves, minced'
  - 7 dried Chinese red chilies
  - '1/2 red bell pepper, sliced'
  - '1 1/2 tsp Shaoxing wine, optional'
  - 1/2 cup vegetable stock
  - 2 cups broccoli florets
  - 1 1/2 tbsp light soy sauce
  - 1 tsp dark soy sauce
  - 1 tbsp rice vinegar
  - 2 tbsp sugar
  - 1/4 tsp salt
  - 1/2 tsp toasted sesame oil
  - '--- Slurry ---'
  - 1 tbsp cornstarch
  - 1 tbsp cold water
source: Adapted from The Woks of Life
sourceUrl: 'https://thewoksoflife.com/general-tsos-tofu/'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: tofu
      name: Tofu and coating
      ingredients:
        - id: tofu
          key: tofu
          name: extra-firm tofu
          quantity:
            amount: 1
            unit: lb
          preparation: pressed and cut into 1-inch cubes
          uses:
            - step: coat
              share: 1
        - id: honey
          key: honey
          name: honey
          quantity:
            amount: 1 1/2
            unit: tbsp
          uses:
            - step: coat
              share: 1
        - id: hot-sauce
          key: hot-sauce
          name: vinegar-based hot sauce
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: coat
              share: 1
        - id: sesame-seeds
          key: sesame-seeds
          name: sesame seeds
          quantity:
            amount: 1 1/2
            unit: tbsp
          uses:
            - step: coat
              share: 1
        - id: coating-starch
          key: cornstarch
          name: cornstarch
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: coat
              share: 1
        - id: frying-oil
          key: frying-oil
          name: peanut oil
          quantity:
            amount: 1/3
            unit: cup
          preparation: for frying
          uses:
            - step: fry
              share: 1
    - id: sauce
      name: Sauce and vegetables
      ingredients:
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1
            unit: tbsp
          preparation: minced
          uses:
            - step: aromatics
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          plural: garlic cloves
          quantity:
            amount: 2
            unit: count
          preparation: minced
          uses:
            - step: aromatics
              share: 1
        - id: chilies
          key: chilies
          name: dried Chinese red chili
          plural: dried Chinese red chilies
          quantity:
            amount: 7
            unit: count
          uses:
            - step: aromatics
              share: 1
        - id: pepper
          key: pepper
          name: red bell pepper
          plural: red bell peppers
          quantity:
            amount: 1/2
            unit: count
          preparation: sliced
          uses:
            - step: pepper
              share: 1
        - id: wine
          key: wine
          name: Shaoxing wine
          quantity:
            amount: 1 1/2
            unit: tsp
          optional: true
          uses:
            - step: pepper
              share: 1
        - id: stock
          key: stock
          name: vegetable stock
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: broccoli
          key: broccoli
          name: broccoli florets
          quantity:
            amount: 2
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: light-soy
          key: light-soy
          name: light soy sauce
          quantity:
            amount: 1 1/2
            unit: tbsp
          uses:
            - step: season
              share: 1
        - id: dark-soy
          key: dark-soy
          name: dark soy sauce
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: season
              share: 1
        - id: vinegar
          key: vinegar
          name: rice vinegar
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: season
              share: 1
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: season
              share: 1
        - id: salt
          key: salt
          name: salt
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: season
              share: 1
        - id: sesame-oil
          key: sesame-oil
          name: toasted sesame oil
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: season
              share: 1
    - id: slurry
      name: Slurry
      ingredients:
        - id: starch
          key: cornstarch
          name: cornstarch
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: thicken
              share: 1
        - id: water
          key: water
          name: cold water
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: thicken
              share: 1
  steps:
    - id: coat
      title: Coat the tofu
      text: 'In a large bowl, gently toss {{ingredients}} until the tofu is lightly and evenly coated.'
    - id: fry
      title: Fry the tofu
      text: >-
        Heat {{ingredients}} in a large skillet over medium-high heat to 350°F. Fry the tofu in a
        single layer, in batches, turning once, until golden and crisp, 4 to 5 minutes per batch.
        Move it to a plate.
    - id: aromatics
      title: Cook the aromatics
      text: >-
        Pour off all but a spoonful of the oil and turn the heat to medium. Add {{ingredients}} and
        stir until fragrant, about 30 seconds.
    - id: pepper
      title: Add the pepper
      text: 'Add {{ingredients}} and stir-fry until the pepper just softens, about 1 minute.'
    - id: simmer
      title: Steam the broccoli
      text: >-
        Pour in {{ingredients}} and bring to a boil. Cover and steam until the broccoli is bright
        green and tender-crisp, about 2 minutes.
    - id: season
      title: Season the sauce
      text: 'Stir in {{ingredients}} and bring the sauce back to a boil.'
    - id: thicken
      title: Thicken the sauce
      text: >-
        Stir {{ingredients}} together in a small cup and pour it into the boiling sauce while
        stirring. Simmer until the sauce is glossy and coats a spoon, 30 to 60 seconds.
    - id: finish
      title: Glaze and serve
      text: 'Return the tofu to the pan and fold gently until coated, about 30 seconds. Serve right away.'
learning:
  techniques:
    - starch
    - temperature
  substitutions:
    - ingredient: Shaoxing wine
      alternative: Dry sherry
      effect: A similar savory wine flavor.
    - ingredient: dark soy sauce
      alternative: More light soy sauce
      effect: 'The sauce is paler and a little saltier, so leave out the salt.'
  storage: Keeps 3 days in the fridge. Reheat in a skillet. The coating softens as it sits.
  review:
    status: editorial-review
    date: '2026-11-09'
pairingNotes:
  steamed-white-rice: Plain rice to catch the sauce.
  smashed-cucumber-salad: 'Cool, garlicky cucumbers against the sweet heat.'
---

## Chef's Note

The Woks of Life gives tofu the General Tso's treatment. A coating of honey, hot sauce and sesame seeds fries into a crisp, sticky crust, and the sweet, sour and spicy sauce cooks with broccoli in the same pan. Fold the tofu in at the very end so it stays crisp.

## Directions

1. **Coat the tofu:** In a large bowl, gently toss extra-firm tofu, honey, vinegar-based hot sauce, sesame seeds, and cornstarch until the tofu is lightly and evenly coated.
2. **Fry the tofu:** Heat peanut oil in a large skillet over medium-high heat to 350°F. Fry the tofu in a single layer, in batches, turning once, until golden and crisp, 4 to 5 minutes per batch. Move it to a plate.
3. **Cook the aromatics:** Pour off all but a spoonful of the oil and turn the heat to medium. Add fresh ginger, garlic cloves, and dried Chinese red chilies and stir until fragrant, about 30 seconds.
4. **Add the pepper:** Add red bell pepper and Shaoxing wine (if using) and stir-fry until the pepper just softens, about 1 minute.
5. **Steam the broccoli:** Pour in vegetable stock and broccoli florets and bring to a boil. Cover and steam until the broccoli is bright green and tender-crisp, about 2 minutes.
6. **Season the sauce:** Stir in light soy sauce, dark soy sauce, rice vinegar, sugar, salt, and toasted sesame oil and bring the sauce back to a boil.
7. **Thicken the sauce:** Stir cornstarch and cold water together in a small cup and pour it into the boiling sauce while stirring. Simmer until the sauce is glossy and coats a spoon, 30 to 60 seconds.
8. **Glaze and serve:** Return the tofu to the pan and fold gently until coated, about 30 seconds. Serve right away.
