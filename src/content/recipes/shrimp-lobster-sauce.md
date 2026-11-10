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
prepTime: 15 min
cookTime: 15 min
totalTime: 30 min
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
equipment:
  - wok
pairsWith:
  - steamed-white-rice
  - steamed-bok-choy-with-oyster-sauce
pairingNotes:
  steamed-white-rice: Plain rice to soak up the egg-ribbon sauce.
  steamed-bok-choy-with-oyster-sauce: A crisp green to balance the savory sauce.
ingredients:
  - '--- Pan base ---'
  - 1 tbsp neutral oil
  - 1/4 lb ground pork
  - '2 garlic cloves, minced'
  - '1 tbsp fermented black beans (douchi), rinsed, drained and mashed'
  - '1 lb shrimp, peeled and deveined'
  - 1 tbsp Shaoxing wine
  - '--- Sauce ---'
  - 1 cup chicken stock
  - 1 tbsp soy sauce
  - 1 tsp dark soy sauce
  - 1/2 tsp sugar
  - 1/4 tsp ground white pepper
  - '--- Slurry ---'
  - 1 tbsp cornstarch
  - 2 tbsp cold water
  - '--- Finish ---'
  - '1 large egg, beaten'
  - 'green onions, chopped, for garnish'
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
          preparation: 'rinsed, drained and mashed'
        - id: shrimp
          key: shrimp
          name: shrimp
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: shrimp
              share: 1
          preparation: peeled and deveined
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
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: simmer
              share: 1
        - id: white-pepper
          key: white-pepper
          name: ground white pepper
          quantity:
            amount: 1/4
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
          allowance: 'chopped, for garnish'
          uses:
            - step: serve
              share: 1
  steps:
    - id: prep
      title: Mix the slurry
      text: 'Whisk {{ingredients}} in a small bowl until smooth.'
    - id: pork
      title: Brown the pork
      text: >-
        Heat a wok over medium-high heat. Add {{ingredients}} and break the pork into small
        crumbles. Cook until browned and a little crisp, about 5 minutes.
    - id: aromatics
      title: Add the aromatics
      text: 'Add {{ingredients}} and stir until fragrant, about 1 minute.'
    - id: shrimp
      title: Stir-fry the shrimp
      text: >-
        Turn the heat to high. Add {{ingredients}}, pouring the wine around the hot edge of the wok.
        Stir-fry until the shrimp turn pink on the outside, about 2 minutes.
    - id: simmer
      title: Thicken the sauce
      text: >-
        Pour in {{ingredients}} and bring to a boil. Stir the slurry again and stir it in. Simmer
        until the sauce turns glossy and coats a spoon, about 1 minute.
    - id: egg
      title: Make the egg ribbons
      text: >-
        Lower the heat so the sauce barely simmers. Drizzle the beaten {{ingredients}} in a thin
        stream over the surface and let the ribbons set for 30 seconds before folding them in
        gently. The shrimp should be opaque all the way through.
    - id: serve
      title: Serve
      text: 'Scatter {{ingredients}} over the top and serve right away.'
learning:
  techniques:
    - gentle-proteins
    - starch
  substitutions:
    - ingredient: Shaoxing wine
      alternative: Dry sherry
      effect: 'Use the same amount. Skip cooking sherry, which is salted.'
    - ingredient: fermented black beans (douchi)
      alternative: 1 1/2 tbsp jarred black bean garlic sauce
      effect: >-
        Easier to find and already mashed, with garlic and salt added. Cut the soy sauce to 2 tsp
        when you use it.
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

Shrimp with lobster sauce is a Chinese-American classic, named for the Cantonese sauce once spooned over lobster. There is no lobster in it. This is the darker East Coast style, built on ground pork and fermented black beans and finished with silky ribbons of egg.

## Directions

1. **Mix the slurry:** Whisk the cornstarch and cold water in a small bowl until smooth.
2. **Brown the pork:** Heat a wok over medium-high heat. Add the oil and ground pork and break the pork into small crumbles. Cook until browned and a little crisp, about 5 minutes.
3. **Add the aromatics:** Add the garlic and fermented black beans and stir until fragrant, about 1 minute.
4. **Stir-fry the shrimp:** Turn the heat to high. Add the shrimp and Shaoxing wine, pouring the wine around the hot edge of the wok. Stir-fry until the shrimp turn pink on the outside, about 2 minutes.
5. **Thicken the sauce:** Pour in the chicken stock, soy sauce, dark soy sauce, sugar, and white pepper and bring to a boil. Stir the slurry again and stir it in. Simmer until the sauce turns glossy and coats a spoon, about 1 minute.
6. **Make the egg ribbons:** Lower the heat so the sauce barely simmers. Drizzle the beaten egg in a thin stream over the surface and let the ribbons set for 30 seconds before folding them in gently. The shrimp should be opaque all the way through.
7. **Serve:** Scatter the green onions over the top and serve right away.
