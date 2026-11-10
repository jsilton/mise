---
miseId: 8e893d26-fc2d-4c26-b51d-390ac8d00837
title: Chipotle Pork Bowls
difficulty: easy
cookingMethods:
  - fry
  - simmer
occasions:
  - weeknight
  - comfort-food
flavorProfile:
  - spicy
  - sweet
  - acidic
  - smoky
cuisines:
  - Mexican
role: main
vibe: comfort
prepTime: 15 min
cookTime: 35 min
totalTime: 50 min
servings: 4 portions
pairsWith:
  - pickled-red-onions
  - quick-seasoned-black-beans
pairingNotes:
  pickled-red-onions: 'Sharp, bright onions to cut the rich pork.'
  quick-seasoned-black-beans: Black beans on the side make it a fuller plate.
ingredients:
  - '--- Polenta ---'
  - 1 cup polenta or coarse cornmeal
  - 4 cups chicken broth
  - 1/2 tsp ground cumin
  - 2 tbsp unsalted butter
  - '1/4 cup cotija cheese, crumbled'
  - '--- Chipotle pork ---'
  - 1 1/2 lb ground pork
  - '1 red bell pepper, diced'
  - '3 garlic cloves, minced'
  - 1 tsp dried Mexican oregano
  - '2–3 chipotle peppers in adobo, minced'
  - 1 tbsp adobo sauce from the can
  - 1 can (14 1/2 oz) fire-roasted crushed tomatoes
  - 'kosher salt, to taste'
  - 'black pepper, to taste'
  - '--- Toppings ---'
  - 1 cup frozen sweet corn
  - '1 avocado, cubed'
  - '1 cup green cabbage, shredded'
  - '2 tbsp pepitas, toasted'
  - 'sour cream, for serving'
  - '1 lime, cut into wedges'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
rating: 5
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: base
      name: Polenta
      ingredients:
        - id: polenta
          key: polenta
          name: polenta or coarse cornmeal
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: base
              share: 1
        - id: broth
          key: broth
          name: chicken broth
          quantity:
            amount: 4
            unit: cup
          uses:
            - step: base
              share: 1
        - id: cumin
          key: cumin
          name: ground cumin
          quantity:
            amount: 0.5
            unit: tsp
          uses:
            - step: base
              share: 1
        - id: butter
          key: butter
          name: unsalted butter
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: enrich
              share: 1
        - id: cotija
          key: cotija
          name: cotija cheese
          quantity:
            amount: 0.25
            unit: cup
          uses:
            - step: enrich
              share: 1
          preparation: crumbled
    - id: pork
      name: Chipotle pork
      ingredients:
        - id: pork
          key: pork
          name: ground pork
          quantity:
            amount: 1.5
            unit: lb
          uses:
            - step: pork
              share: 1
        - id: pepper
          key: pepper
          name: red bell pepper
          quantity:
            amount: 1
            unit: count
          uses:
            - step: pepper
              share: 1
          plural: red bell peppers
          preparation: diced
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: bloom
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: oregano
          key: oregano
          name: dried Mexican oregano
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: bloom
              share: 1
        - id: chipotle
          key: chipotle
          name: chipotle pepper in adobo
          quantity:
            amount: 2
            max: 3
            unit: count
          uses:
            - step: bloom
              share: 1
          plural: chipotle peppers in adobo
          preparation: minced
        - id: adobo
          key: adobo
          name: adobo sauce from the can
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: bloom
              share: 1
        - id: tomatoes
          key: tomatoes
          name: fire-roasted crushed tomatoes
          quantity:
            amount: 1
            unit: can
          uses:
            - step: sauce
              share: 1
          packageSize:
            amount: 14.5
            unit: oz
        - id: salt
          key: salt
          name: kosher salt
          allowance: to taste
          uses:
            - step: sauce
              share: 1
        - id: black-pepper
          key: black-pepper
          name: black pepper
          allowance: to taste
          uses:
            - step: sauce
              share: 1
    - id: finish
      name: Toppings
      ingredients:
        - id: corn
          key: corn
          name: frozen sweet corn
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: corn
              share: 1
        - id: avocado
          key: avocado
          name: avocado
          quantity:
            amount: 1
            unit: count
          uses:
            - step: serve
              share: 1
          plural: avocados
          preparation: cubed
        - id: cabbage
          key: cabbage
          name: green cabbage
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: serve
              share: 1
          preparation: shredded
        - id: pepitas
          key: pepitas
          name: pepitas
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: serve
              share: 1
          preparation: toasted
        - id: cream
          key: cream
          name: sour cream
          allowance: for serving
          uses:
            - step: serve
              share: 1
        - id: lime
          key: lime
          name: lime
          quantity:
            amount: 1
            unit: count
          uses:
            - step: serve
              share: 1
          plural: limes
          preparation: cut into wedges
  steps:
    - id: base
      title: Simmer the polenta
      text: >-
        Whisk {{ingredients}} together in a medium saucepan. Bring to a boil over medium-high heat,
        whisking, then lower the heat and simmer, whisking often, until thick and no longer gritty,
        15 to 25 minutes.
    - id: enrich
      title: Finish the polenta
      text: 'Stir in {{ingredients}}. Cover and keep warm over the lowest heat.'
    - id: corn
      title: Char the corn
      text: >-
        While the polenta simmers, heat a heavy skillet over high heat. Spread {{ingredients}} in a
        single layer and leave it until charred in spots, about 2 minutes. Stir, char 2 minutes more
        and move the corn to a bowl.
    - id: pork
      title: Brown the pork
      text: >-
        Add {{ingredients}} to the same skillet over high heat. Let it sear without stirring for 3
        minutes to build a crust. Then break up the pork and cook until no pink remains, 5 to 7
        minutes more. Spoon off all but about 1 tablespoon of the fat.
    - id: pepper
      title: Cook the pepper
      text: 'Add {{ingredients}} and cook, stirring, until it starts to soften, about 2 minutes.'
    - id: bloom
      title: Fry the aromatics
      text: >-
        Push the pork to one side. Add {{ingredients}} to the cleared spot and fry until fragrant,
        about 45 seconds. Stir everything together.
    - id: sauce
      title: Simmer the sauce
      text: >-
        Add {{ingredients}} and scrape up the browned bits. Simmer until the sauce is thick enough
        to coat the pork, about 5 minutes. Taste and add more salt if it needs it.
    - id: serve
      title: Build the bowls
      text: >-
        Spoon the polenta into bowls. Top with the pork, the charred corn, {{ingredients}} wedges
        for squeezing.
equipment:
  - heavy-skillet
  - saucepan
learning:
  techniques:
    - temperature
    - seasoning
  substitutions:
    - ingredient: Dried Mexican oregano
      alternative: Dried oregano
      effect: Regular oregano is a little more minty and less citrusy. Use the same amount.
    - ingredient: Cotija cheese
      alternative: Feta
      effect: 'Feta is a little tangier and softer, but it crumbles and salts the polenta the same way.'
  storage: >-
    The pork and polenta keep 4 days in the fridge, stored apart, and the pork freezes for 3 months.
    Reheat the polenta with a splash of broth, whisking until smooth.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

These bowls borrow the flavors of a pork tamale without the steaming. Polenta cooked in broth stands in for the masa, and chipotles in adobo give the pork its smoky heat. Charred corn, crisp cabbage and pepitas on top give every bite some crunch.

## Directions

1. **Simmer the polenta:** Whisk the polenta or coarse cornmeal, chicken broth, and cumin together in a medium saucepan. Bring to a boil over medium-high heat, whisking, then lower the heat and simmer, whisking often, until thick and no longer gritty, 15 to 25 minutes.
2. **Finish the polenta:** Stir in the butter and cotija cheese. Cover and keep warm over the lowest heat.
3. **Char the corn:** While the polenta simmers, heat a heavy skillet over high heat. Spread the sweet corn in a single layer and leave it until charred in spots, about 2 minutes. Stir, char 2 minutes more and move the corn to a bowl.
4. **Brown the pork:** Add the ground pork to the same skillet over high heat. Let it sear without stirring for 3 minutes to build a crust. Then break up the pork and cook until no pink remains, 5 to 7 minutes more. Spoon off all but about 1 tablespoon of the fat.
5. **Cook the pepper:** Add the red bell pepper and cook, stirring, until it starts to soften, about 2 minutes.
6. **Fry the aromatics:** Push the pork to one side. Add the garlic, dried Mexican oregano, chipotle peppers in adobo, and adobo sauce from the can to the cleared spot and fry until fragrant, about 45 seconds. Stir everything together.
7. **Simmer the sauce:** Add the fire-roasted crushed tomatoes, salt, and black pepper and scrape up the browned bits. Simmer until the sauce is thick enough to coat the pork, about 5 minutes. Taste and add more salt if it needs it.
8. **Build the bowls:** Spoon the polenta into bowls. Top with the pork, the charred corn, the avocado, green cabbage, pepitas, sour cream, and lime wedges for squeezing.
