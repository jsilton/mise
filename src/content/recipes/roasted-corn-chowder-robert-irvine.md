---
miseId: 0a8c67ca-c323-4a14-bd3d-91fad92c1b84
title: Robert Irvine's Roasted Corn Chowder
difficulty: easy
cookingMethods:
  - roast
  - saute
  - simmer
occasions:
  - comfort-food
flavorProfile:
  - sweet
  - rich
  - smoky
cuisines:
  - American
role: main
vibe: comfort
prepTime: 25 min
cookTime: 55 min
totalTime: 1 hr 20 min
servings: 8 portions
pairsWith:
  - garlic-bread
  - everyday-arugula-salad
ingredients:
  - '1 lb small raw shrimp, peeled and deveined'
  - '1 lime, for the shrimp'
  - '5 cups corn kernels, fresh or thawed frozen'
  - '1/4 cup vegetable oil, divided'
  - '1/2 cup bacon, chopped'
  - '1 red onion, diced'
  - '1/2 cup celery, finely diced'
  - '1 green bell pepper, diced'
  - '1 red bell pepper, diced'
  - '6 garlic cloves, minced'
  - 1/2 cup all-purpose flour
  - 6 cups chicken stock
  - 2 cups heavy cream
  - '1/2 lb Red Bliss potatoes, cut into 1/2-inch dice'
  - '1 tsp kosher salt, plus more to taste'
  - 3 tbsp fresh lime juice
  - '2 tbsp fresh parsley, chopped'
  - 1/4 tsp cayenne pepper
  - '6 scallions, chopped'
  - 'oyster crackers, for serving'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: 'Adapted from Robert Irvine, Food Network'
sourceUrl: >-
  https://www.foodnetwork.com/recipes/robert-irvine/roasted-corn-chowder-with-lime-cured-shrimp-recipe-1947204
equipment:
  - soup-pot
  - rimmed-baking-sheet
  - oven
  - food-thermometer
  - shallow-storage-containers
formula:
  version: 1
  yield:
    amount: 8
    unit: portion
  components:
    - id: irvine
      name: Robert Irvine’s roux-and-cream version
      ingredients:
        - id: shrimp
          key: raw-baby-shrimp
          name: small raw shrimp
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: marinate
              share: 1
          preparation: peeled and deveined
        - id: marinade-lime
          key: lime
          name: lime
          quantity:
            amount: 1
            unit: count
          uses:
            - step: marinate
              share: 1
          plural: limes
          preparation: for the shrimp
        - id: corn
          key: corn-kernels
          name: corn kernels
          quantity:
            amount: 5
            unit: cup
          uses:
            - step: roast
              share: 1
          preparation: fresh or thawed frozen
        - id: oil
          key: vegetable-oil
          name: vegetable oil
          quantity:
            amount: 1/4
            unit: cup
          preparation: divided
          uses:
            - step: roast
              share: 1/2
            - step: bacon
              share: 1/2
        - id: bacon
          key: raw-chopped-bacon
          name: bacon
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: bacon
              share: 1
          preparation: chopped
        - id: onion
          key: red-onion
          name: red onion
          quantity:
            amount: 1
            unit: count
          uses:
            - step: onion
              share: 1
          plural: red onions
          preparation: diced
        - id: celery
          key: celery
          name: celery
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: onion
              share: 1
          preparation: finely diced
        - id: green-pepper
          key: green-bell-pepper
          name: green bell pepper
          quantity:
            amount: 1
            unit: count
          uses:
            - step: peppers
              share: 1
          plural: green bell peppers
          preparation: diced
        - id: red-pepper
          key: red-bell-pepper
          name: red bell pepper
          quantity:
            amount: 1
            unit: count
          uses:
            - step: peppers
              share: 1
          plural: red bell peppers
          preparation: diced
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 6
            unit: count
          uses:
            - step: peppers
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: flour
          key: all-purpose-flour
          name: all-purpose flour
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: flour
              share: 1
        - id: stock
          key: chicken-stock
          name: chicken stock
          quantity:
            amount: 6
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: cream
          key: heavy-cream
          name: heavy cream
          quantity:
            amount: 2
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: potatoes
          key: red-bliss-potatoes
          name: Red Bliss potatoes
          quantity:
            amount: 1/2
            unit: lb
          uses:
            - step: simmer
              share: 1
          preparation: cut into 1/2-inch dice
        - id: salt
          key: kosher-salt
          name: kosher salt
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: simmer
              share: 1
          preparation: plus more to taste
        - id: lime-juice
          key: fresh-lime-juice
          name: fresh lime juice
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: shrimp
              share: 1
        - id: parsley
          key: fresh-parsley
          name: fresh parsley
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: shrimp
              share: 1
          preparation: chopped
        - id: cayenne
          key: cayenne-pepper
          name: cayenne pepper
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: shrimp
              share: 1
        - id: scallions
          key: scallions
          name: scallion
          quantity:
            amount: 6
            unit: count
          uses:
            - step: serve
              share: 1
          plural: scallions
          preparation: chopped
          role: garnish
        - id: crackers
          key: oyster-crackers
          name: oyster crackers
          allowance: for serving
          uses:
            - step: serve
              share: 1
          role: garnish
  steps:
    - id: marinate
      title: Marinate the shrimp
      text: >-
        Put {{ingredients}} in a bowl, squeezing the lime over the shrimp and dropping in the rind.
        Cover and refrigerate while you make the chowder, up to 1 hour.
    - id: roast
      title: Roast the corn
      text: >-
        Heat the oven to 375°F. Toss {{ingredients}} on a rimmed baking sheet and spread in one
        layer. Roast, stirring once, until fragrant and lightly browned, 10 to 15 minutes.
    - id: bacon
      title: Crisp the bacon
      text: >-
        Heat {{ingredients}} in a large, heavy soup pot over medium-low heat. Cook, stirring, until
        the bacon is crisp, about 8 minutes.
    - id: onion
      title: Soften the onion
      text: 'Add {{ingredients}} and cook until soft but not browned, about 5 minutes.'
    - id: peppers
      title: Add the peppers
      text: 'Add {{ingredients}} and the roasted corn. Cook over low heat, stirring, for 5 minutes.'
    - id: flour
      title: Cook the flour
      text: >-
        Stir in {{ingredients}} and cook over low heat, stirring, until it coats the vegetables and
        smells toasty, 6 to 8 minutes.
    - id: simmer
      title: Simmer the chowder
      text: >-
        Gradually stir in {{ingredients}}, adding the stock first so the flour does not lump. Bring
        to a gentle simmer and cook, stirring along the bottom, until the potatoes are tender, about
        20 minutes.
    - id: shrimp
      title: Cook the shrimp
      text: >-
        Drain the shrimp and throw away the lime. Stir the shrimp into the simmering chowder with
        {{ingredients}}. Cook until the shrimp are pink and opaque all the way through, 2 to 3
        minutes. Taste and add more salt.
    - id: serve
      title: Serve
      text: 'Ladle into bowls and top with {{ingredients}}.'
learning:
  techniques:
    - browning
    - gentle-proteins
    - temperature
  storage: >-
    Keeps 3 days in the fridge. Reheat gently over low heat without boiling, so the shrimp stay
    tender.
  review:
    status: editorial-review
    date: '2026-11-09'
pairingNotes:
  garlic-bread: 'Warm, crusty bread for a creamy chowder.'
  everyday-arugula-salad: Peppery greens and lemon cut the cream.
---

## Chef's Note

Robert Irvine roasts the corn before it goes into this chowder, which deepens its sweetness. Bacon, two kinds of pepper and a cream base make it hearty, and the lime-marinated shrimp go in at the very end so they stay tender. Pass oyster crackers at the table.

## Directions

1. **Marinate the shrimp:** Put small raw shrimp and lime in a bowl, squeezing the lime over the shrimp and dropping in the rind. Cover and refrigerate while you make the chowder, up to 1 hour.
2. **Roast the corn:** Heat the oven to 375°F. Toss corn kernels and 1/2 of the vegetable oil on a rimmed baking sheet and spread in one layer. Roast, stirring once, until fragrant and lightly browned, 10 to 15 minutes.
3. **Crisp the bacon:** Heat 1/2 of the vegetable oil and bacon in a large, heavy soup pot over medium-low heat. Cook, stirring, until the bacon is crisp, about 8 minutes.
4. **Soften the onion:** Add red onion and celery and cook until soft but not browned, about 5 minutes.
5. **Add the peppers:** Add green bell pepper, red bell pepper, and garlic cloves and the roasted corn. Cook over low heat, stirring, for 5 minutes.
6. **Cook the flour:** Stir in all-purpose flour and cook over low heat, stirring, until it coats the vegetables and smells toasty, 6 to 8 minutes.
7. **Simmer the chowder:** Gradually stir in chicken stock, heavy cream, Red Bliss potatoes, and kosher salt, adding the stock first so the flour does not lump. Bring to a gentle simmer and cook, stirring along the bottom, until the potatoes are tender, about 20 minutes.
8. **Cook the shrimp:** Drain the shrimp and throw away the lime. Stir the shrimp into the simmering chowder with fresh lime juice, fresh parsley, and cayenne pepper. Cook until the shrimp are pink and opaque all the way through, 2 to 3 minutes. Taste and add more salt.
9. **Serve:** Ladle into bowls and top with scallions and oyster crackers.
