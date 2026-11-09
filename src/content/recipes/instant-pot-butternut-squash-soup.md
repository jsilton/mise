---
miseId: 8a8a9de8-b7f1-43fd-9e68-16123f0a2364
title: Pressure-Cooker Butternut Squash Soup
difficulty: easy
cookingMethods:
  - saute
  - steam
  - blend
  - simmer
occasions:
  - comfort-food
flavorProfile:
  - sweet
  - savory
  - acidic
  - umami
  - rich
cuisines:
  - American
role: main
vibe: comfort
prepTime: 20 min
cookTime: 55 min
totalTime: 1 hr 15 min
servings: 8 cups
pairsWith:
  - avocado-kale-caesar-salad
  - cast-iron-buttermilk-biscuits
pairingNotes:
  avocado-kale-caesar-salad: 'A sharp, crunchy salad against the creamy soup.'
  cast-iron-buttermilk-biscuits: Warm biscuits for dunking.
ingredients:
  - '4 oz bacon, about 4 slices, diced'
  - '1/2 sweet onion, diced'
  - '3 garlic cloves, minced'
  - '4 fresh sage leaves, minced'
  - 3 fresh thyme sprigs
  - '1 Granny Smith apple, cored and chopped'
  - '2 1/2 lb butternut squash, peeled, seeded and cut into 1-inch cubes'
  - '3 large carrots, cut into 1-inch pieces'
  - '1 celery stalk, cut into 1-inch pieces'
  - 4 cups chicken stock
  - '1 tsp kosher salt, plus more to taste'
  - '1/2 tsp black pepper, plus more to taste'
  - 1/3 cup heavy cream
  - '2 tbsp fresh chives, chopped'
origin: United States
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from Damn Delicious
sourceUrl: 'https://damndelicious.net/2019/12/29/instant-pot-butternut-squash-soup/'
equipment:
  - electric-pressure-cooker
  - immersion-blender
formula:
  version: 1
  yield:
    amount: 8
    unit: cup
  components:
    - id: soup
      name: Soup
      ingredients:
        - id: bacon
          key: bacon
          name: bacon
          quantity:
            amount: 4
            unit: oz
          uses:
            - step: render
              share: 1
          preparation: 'about 4 slices, diced'
        - id: onion
          key: sweet-onion
          name: sweet onion
          quantity:
            amount: 1/2
            unit: count
          uses:
            - step: onion
              share: 1
          plural: sweet onions
          preparation: diced
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: herbs
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: sage
          key: fresh-sage
          name: fresh sage leaf
          quantity:
            amount: 4
            unit: count
          uses:
            - step: herbs
              share: 1
          plural: fresh sage leaves
          preparation: minced
        - id: thyme
          key: fresh-thyme
          name: fresh thyme sprig
          quantity:
            amount: 3
            unit: count
          uses:
            - step: herbs
              share: 1
          plural: fresh thyme sprigs
        - id: apple
          key: granny-smith-apple
          name: Granny Smith apple
          quantity:
            amount: 1
            unit: count
          uses:
            - step: stock
              share: 1
          plural: Granny Smith apples
          preparation: cored and chopped
        - id: squash
          key: whole-butternut-squash
          name: butternut squash
          quantity:
            amount: 2 1/2
            unit: lb
          uses:
            - step: stock
              share: 1
          preparation: 'peeled, seeded and cut into 1-inch cubes'
        - id: carrots
          key: carrot
          name: large carrot
          quantity:
            amount: 3
            unit: count
          uses:
            - step: stock
              share: 1
          plural: large carrots
          preparation: cut into 1-inch pieces
        - id: celery
          key: celery
          name: celery stalk
          quantity:
            amount: 1
            unit: count
          uses:
            - step: stock
              share: 1
          plural: celery stalks
          preparation: cut into 1-inch pieces
        - id: stock
          key: chicken-stock
          name: chicken stock
          quantity:
            amount: 4
            unit: cup
          uses:
            - step: stock
              share: 1
        - id: salt
          key: kosher-salt
          name: kosher salt
          quantity:
            amount: 1
            unit: tsp
          preparation: plus more to taste
          uses:
            - step: stock
              share: 1
        - id: pepper
          key: black-pepper
          name: black pepper
          quantity:
            amount: 1/2
            unit: tsp
          preparation: plus more to taste
          uses:
            - step: stock
              share: 1
        - id: cream
          key: heavy-cream
          name: heavy cream
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: blend
              share: 1
        - id: chives
          key: fresh-chives
          name: fresh chives
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: serve
              share: 1
          preparation: chopped
          role: garnish
  steps:
    - id: render
      title: Crisp the bacon
      text: >-
        Set the pressure cooker to sauté on high. Add {{ingredients}} and cook, stirring, until
        brown and crisp, 6 to 8 minutes. Move the bacon to a plate lined with paper towels and leave
        the fat in the pot.
    - id: onion
      title: Soften the onion
      text: >-
        Lower the sauté heat to medium. Add {{ingredients}} to the bacon fat and cook, stirring,
        until translucent, 2 to 3 minutes.
    - id: herbs
      title: Add the aromatics
      text: 'Stir in {{ingredients}} and cook until fragrant, 30 to 60 seconds.'
    - id: stock
      title: Add the vegetables
      text: 'Add {{ingredients}}. Stir and scrape up any browned bits from the bottom of the pot.'
    - id: pressure
      title: Pressure-cook
      text: >-
        Turn off the sauté setting. Lock the lid, close the valve and cook at high pressure for 12
        minutes.
    - id: release
      title: Release naturally
      text: >-
        Let the pressure come down on its own until the float valve drops, 15 to 30 minutes. Open
        the lid and discard the thyme sprigs. The squash and carrots should be soft enough to crush
        with a spoon.
    - id: blend
      title: Blend
      text: >-
        Stir in {{ingredients}}. Blend in the pot with an immersion blender until completely smooth.
        Taste and season with more salt and pepper.
    - id: serve
      title: Serve
      text: 'Ladle into bowls and top with {{ingredients}} and the crisp bacon.'
learning:
  techniques:
    - browning
    - seasoning
    - temperature
  storage: >-
    Keeps 4 days in the fridge and freezes for 3 months. Store the bacon separately and reheat the
    soup gently, stirring.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

A smooth fall soup with a smoky, savory backbone. Bacon gives up its fat for cooking the onion, sage and garlic, then comes back as the crisp topping. A tart Granny Smith apple cooked into the purée keeps the squash from tasting too sweet.

## Directions

1. **Crisp the bacon:** Set the pressure cooker to sauté on high. Add bacon and cook, stirring, until brown and crisp, 6 to 8 minutes. Move the bacon to a plate lined with paper towels and leave the fat in the pot.
2. **Soften the onion:** Lower the sauté heat to medium. Add sweet onion to the bacon fat and cook, stirring, until translucent, 2 to 3 minutes.
3. **Add the aromatics:** Stir in garlic cloves, fresh sage leaves, and fresh thyme sprigs and cook until fragrant, 30 to 60 seconds.
4. **Add the vegetables:** Add Granny Smith apple, butternut squash, large carrots, celery stalk, chicken stock, kosher salt, and black pepper. Stir and scrape up any browned bits from the bottom of the pot.
5. **Pressure-cook:** Turn off the sauté setting. Lock the lid, close the valve and cook at high pressure for 12 minutes.
6. **Release naturally:** Let the pressure come down on its own until the float valve drops, 15 to 30 minutes. Open the lid and discard the thyme sprigs. The squash and carrots should be soft enough to crush with a spoon.
7. **Blend:** Stir in heavy cream. Blend in the pot with an immersion blender until completely smooth. Taste and season with more salt and pepper.
8. **Serve:** Ladle into bowls and top with fresh chives and the crisp bacon.
