---
miseId: 1e732dec-2ad3-4a1b-bff8-32a40e1034c7
title: Shrimp with Black Bean Sauce
difficulty: easy
cookingMethods:
  - fry
  - saute
  - simmer
  - boil
  - steam
occasions:
  - weeknight
  - quick-lunch
flavorProfile:
  - sweet
  - savory
  - umami
cuisines:
  - Chinese
role: main
vibe: quick
prepTime: 20 min
cookTime: 15 min
totalTime: 35 min
servings: 2 portions
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
equipment:
  - wok
pairsWith:
  - steamed-white-rice
  - smashed-cucumber-salad
pairingNotes:
  steamed-white-rice: Plain rice to soak up the dark gravy.
  smashed-cucumber-salad: 'Cool, garlicky crunch against the salty black beans.'
ingredients:
  - '--- Shrimp and pork ---'
  - '12 oz shrimp, 21 to 25 count, peeled and deveined'
  - 4 oz ground pork
  - 'water, for blanching the pork'
  - 2 tbsp vegetable oil
  - '1 garlic clove, minced'
  - '1/4 tsp fresh ginger, minced'
  - '1 1/2 tbsp fermented black beans (douchi), rinsed and lightly mashed'
  - '1/4 cup green bell pepper, finely diced'
  - 1 tbsp Shaoxing wine
  - '--- Stock mixture ---'
  - '1 1/2 cups chicken stock, hot'
  - 1 tbsp oyster sauce
  - 1 tsp dark soy sauce
  - 1/2 tsp toasted sesame oil
  - 1/4 tsp sugar
  - 1/8 tsp white pepper
  - '--- Slurry ---'
  - 2 tbsp cornstarch
  - 3 tbsp cold water
  - '--- Egg and scallion ---'
  - '1 large egg, beaten'
  - '1 scallion, chopped'
origin: China
source: Adapted from The Woks of Life
sourceUrl: 'https://thewoksoflife.com/shrimp-black-bean-sauce/'
formula:
  version: 1
  yield:
    amount: 2
    unit: portion
  components:
    - id: base
      name: Shrimp and pork
      ingredients:
        - id: shrimp
          key: shrimp
          name: shrimp
          quantity:
            amount: 12
            unit: oz
          uses:
            - step: shrimp
              share: 1
          preparation: '21 to 25 count, peeled and deveined'
        - id: pork
          key: pork
          name: ground pork
          quantity:
            amount: 4
            unit: oz
          uses:
            - step: blanch
              share: 1
        - id: blanch-water
          key: blanch-water
          name: water
          allowance: for blanching the pork
          uses:
            - step: boil
              share: 1
          role: cooking-water
        - id: oil
          key: oil
          name: vegetable oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sear
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 1
            unit: count
          uses:
            - step: sear
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: sear
              share: 1
          preparation: minced
        - id: beans
          key: beans
          name: fermented black beans (douchi)
          quantity:
            amount: 3/2
            unit: tbsp
          uses:
            - step: sear
              share: 1
          preparation: rinsed and lightly mashed
        - id: pepper
          key: pepper
          name: green bell pepper
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: sear
              share: 1
          preparation: finely diced
        - id: wine
          key: wine
          name: Shaoxing wine
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: shrimp
              share: 1
    - id: sauce
      name: Stock mixture
      ingredients:
        - id: stock
          key: stock
          name: chicken stock
          quantity:
            amount: 3/2
            unit: cup
          uses:
            - step: prep
              share: 1
          preparation: hot
        - id: oyster
          key: oyster
          name: oyster sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: prep
              share: 1
        - id: dark
          key: dark
          name: dark soy sauce
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: prep
              share: 1
        - id: sesame
          key: sesame
          name: toasted sesame oil
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: prep
              share: 1
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: prep
              share: 1
        - id: white-pepper
          key: white-pepper
          name: white pepper
          quantity:
            amount: 1/8
            unit: tsp
          uses:
            - step: prep
              share: 1
    - id: slurry
      name: Slurry
      ingredients:
        - id: starch
          key: starch
          name: cornstarch
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: bind
              share: 1
        - id: water
          key: water
          name: cold water
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: bind
              share: 1
          role: cooking-water
    - id: finish
      name: Egg and scallion
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
          name: scallion
          quantity:
            amount: 1
            unit: count
          uses:
            - step: serve
              share: 1
          plural: scallions
          preparation: chopped
  steps:
    - id: prep
      title: Mix the sauce
      text: 'Whisk {{ingredients}} in a bowl and set it by the stove.'
    - id: boil
      title: Boil the water
      text: 'Bring {{ingredients}} to a boil in the wok.'
    - id: blanch
      title: Blanch the pork
      text: >-
        Add {{ingredients}} and break it into small crumbles. Boil until it is no longer pink, about
        1 minute. Drain the pork and wipe the wok dry. Blanching keeps the sauce clear.
    - id: sear
      title: Fry the aromatics
      text: >-
        Heat the wok over medium-high heat. Add {{ingredients}}, then the blanched pork. Stir-fry
        until fragrant, about 30 seconds.
    - id: shrimp
      title: Add the shrimp
      text: 'Add {{ingredients}} and stir-fry for 30 seconds.'
    - id: bind
      title: Thicken the sauce
      text: >-
        Pour in the sauce and bring it to a boil. Stir {{ingredients}} together until smooth, then
        stir it into the boiling sauce a little at a time until the sauce coats a spoon. You may not
        need all of it. If the sauce gets too thick, add a splash of water.
    - id: egg
      title: Make the egg ribbons
      text: >-
        Lower the heat to a gentle simmer. Drizzle the beaten {{ingredients}} across the surface and
        let it set for 10 seconds, then fold once or twice. Simmer until the shrimp are opaque all
        the way through, about 1 minute.
    - id: serve
      title: Serve
      text: 'Scatter {{ingredients}} over the top and serve right away.'
learning:
  techniques:
    - starch
    - gentle-proteins
  substitutions:
    - ingredient: fermented black beans (douchi)
      alternative: 2 tbsp jarred black bean garlic sauce
      effect: >-
        Easier to find and already mashed, with garlic and salt added. Cut the oyster sauce to 2 tsp
        when you use it.
    - ingredient: Shaoxing wine
      alternative: Dry sherry
      effect: 'Use the same amount. Skip cooking sherry, which is salted.'
    - ingredient: dark soy sauce
      alternative: Molasses
      effect: >-
        Use the same amount. It gives the same dark color with a little more sweetness and less
        salt.
  storage: 'Keeps 3 days in the fridge. Reheat gently over medium-low heat, stirring, until hot through.'
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

This is The Woks of Life's take on a Cantonese restaurant classic. Fermented black beans fried with garlic and ginger give the gravy its deep, salty savor, and a beaten egg drizzled in at the end sets into silky ribbons. Blanching the pork first keeps the sauce clean instead of cloudy.

## Directions

1. **Mix the sauce:** Whisk chicken stock, oyster sauce, dark soy sauce, toasted sesame oil, sugar, and white pepper in a bowl and set it by the stove.
2. **Boil the water:** Bring water to a boil in the wok.
3. **Blanch the pork:** Add ground pork and break it into small crumbles. Boil until it is no longer pink, about 1 minute. Drain the pork and wipe the wok dry. Blanching keeps the sauce clear.
4. **Fry the aromatics:** Heat the wok over medium-high heat. Add vegetable oil, garlic clove, fresh ginger, fermented black beans (douchi), and green bell pepper, then the blanched pork. Stir-fry until fragrant, about 30 seconds.
5. **Add the shrimp:** Add shrimp and Shaoxing wine and stir-fry for 30 seconds.
6. **Thicken the sauce:** Pour in the sauce and bring it to a boil. Stir cornstarch and cold water together until smooth, then stir it into the boiling sauce a little at a time until the sauce coats a spoon. You may not need all of it. If the sauce gets too thick, add a splash of water.
7. **Make the egg ribbons:** Lower the heat to a gentle simmer. Drizzle the beaten large egg across the surface and let it set for 10 seconds, then fold once or twice. Simmer until the shrimp are opaque all the way through, about 1 minute.
8. **Serve:** Scatter scallion over the top and serve right away.
