---
miseId: dbf98393-f7fa-4629-a6fe-b18f0a12771c
title: Old Fashioned
prepTime: 5 min
cookTime: 0 min
totalTime: 5 min
servings: 1 portion
role: drink
vibe: technical
difficulty: easy
cuisines:
  - American
occasions:
  - entertaining
  - date-night
  - comfort-food
seasons:
  - year-round
flavorProfile:
  - sweet
  - aromatic
  - rich
nutritionalDensity: light
leftovers: poor
equipment:
  - rocks-glass
  - bar-spoon
  - jigger
  - muddler
cookingMethods:
  - no-cook
ingredients:
  - '--- Drink ---'
  - 1 sugar cube
  - 2–3 dashes of Angostura bitters
  - 'water, a splash'
  - 2 oz bourbon or rye whiskey
  - 1 large ice cube
  - '--- Garnish ---'
  - 1 strip of orange peel
  - '1 maraschino cherry, optional'
origin: United States
description: 'Bourbon or rye with dissolved sugar, aromatic bitters, a large ice cube and orange peel.'
formula:
  version: 1
  yield:
    amount: 1
    unit: portion
  components:
    - id: drink
      name: Drink
      ingredients:
        - id: sugar
          key: sugar
          name: sugar cube
          plural: sugar cubes
          quantity:
            amount: 1
            unit: count
          uses:
            - step: sweeten
              share: 1
        - id: bitters
          key: bitters
          name: dash of Angostura bitters
          plural: dashes of Angostura bitters
          quantity:
            amount: 2
            max: 3
            unit: count
          uses:
            - step: sweeten
              share: 1
        - id: water
          key: water
          name: water
          allowance: a splash
          role: cooking-water
          uses:
            - step: sweeten
              share: 1
        - id: whiskey
          key: whiskey
          name: bourbon or rye whiskey
          quantity:
            amount: 2
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: ice
          key: ice
          name: large ice cube
          plural: large ice cubes
          quantity:
            amount: 1
            unit: count
          uses:
            - step: mix
              share: 1
    - id: finish
      name: Garnish
      ingredients:
        - id: orange
          key: orange
          name: strip of orange peel
          plural: strips of orange peel
          quantity:
            amount: 1
            unit: count
          role: garnish
          uses:
            - step: garnish
              share: 1
        - id: cherry
          key: cherry
          name: maraschino cherry
          plural: maraschino cherries
          quantity:
            amount: 1
            unit: count
          optional: true
          role: garnish
          uses:
            - step: cherry
              share: 1
  steps:
    - id: sweeten
      title: Dissolve the sugar
      text: 'Put the {{ingredients}} in a rocks glass. Muddle until the sugar has dissolved.'
    - id: mix
      title: Add the whiskey
      text: 'Add the {{ingredients}}. Stir gently until the drink is cold, about 30 seconds.'
    - id: garnish
      title: Add the orange
      text: >-
        Twist the {{ingredients}} over the drink to release its oils. Rub it around the rim and drop
        it in.
    - id: cherry
      title: Serve
      text: 'Add the {{ingredients}} and serve right away.'
learning:
  techniques:
    - seasoning
  substitutions:
    - ingredient: sugar cube
      alternative: 1/4 oz simple syrup
      effect: Skip the water and the muddling. Stir the syrup and bitters straight into the whiskey.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

The Old Fashioned is the original cocktail: whiskey, sugar, water and bitters. In the 1880s, drinkers who didn't want fruit and fancy liqueurs asked for a whiskey cocktail made the old-fashioned way. Dissolve the sugar fully before the ice goes in, and use one big cube so the drink chills without watering down.

## Directions

1. **Dissolve the sugar:** Put the sugar cube, Angostura bitters, and water in a rocks glass. Muddle until the sugar has dissolved.
2. **Add the whiskey:** Add the bourbon or rye whiskey and ice cube. Stir gently until the drink is cold, about 30 seconds.
3. **Add the orange:** Twist the orange peel over the drink to release its oils. Rub it around the rim and drop it in.
4. **Serve:** Add the maraschino cherry (if using) and serve right away.
