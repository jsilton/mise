---
miseId: 0e836106-b66e-41e1-a992-259a924914cf
title: Whiskey Sour
prepTime: 5 min
cookTime: 0 min
totalTime: 5 min
servings: 1 portion
role: drink
vibe: quick
difficulty: easy
cuisines:
  - American
occasions:
  - entertaining
  - light-and-fresh
seasons:
  - summer
flavorProfile:
  - sweet
  - acidic
  - rich
nutritionalDensity: light
leftovers: poor
equipment:
  - cocktail-shaker
  - strainer
  - rocks-glass-or-coupe
  - jigger
cookingMethods:
  - no-cook
ingredients:
  - 2 oz bourbon or rye whiskey
  - 3/4 oz fresh lemon juice
  - 1/2 oz simple syrup
  - '1/2 oz egg white, optional'
  - 'ice, for shaking'
  - 'fresh ice, for serving'
  - 'Angostura bitters, a few drops, optional'
  - 'maraschino cherry and orange slice, for garnish, optional'
origin: United States
formula:
  version: 1
  yield:
    amount: 1
    unit: portion
  components:
    - id: sour
      name: Whiskey sour
      ingredients:
        - id: whiskey
          key: whiskey
          name: bourbon or rye whiskey
          stepName: whiskey
          quantity:
            amount: 2
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: lemon
          key: lemon
          name: fresh lemon juice
          quantity:
            amount: 3/4
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: syrup
          key: syrup
          name: simple syrup
          quantity:
            amount: 1/2
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: white
          key: white
          name: egg white
          quantity:
            amount: 1/2
            unit: oz
          optional: true
          uses:
            - step: mix
              share: 1
        - id: mix-ice
          key: mix-ice
          name: ice
          allowance: for shaking
          role: discarded
          uses:
            - step: shake
              share: 1
        - id: serve-ice
          key: serve-ice
          name: fresh ice
          allowance: for serving
          role: cooking-water
          uses:
            - step: strain
              share: 1
        - id: bitters
          key: bitters
          name: Angostura bitters
          allowance: a few drops
          optional: true
          role: garnish
          uses:
            - step: garnish
              share: 1
        - id: cherry
          key: cherry
          name: maraschino cherry and orange slice
          allowance: for garnish
          optional: true
          role: garnish
          uses:
            - step: fruit
              share: 1
  steps:
    - id: prep
      title: Chill the glass
      text: Put a rocks glass in the freezer while you mix the drink.
    - id: mix
      title: Dry shake
      text: >-
        Put {{ingredients}} in a cocktail shaker without ice. Shake hard for 15 seconds to whip the
        egg white into foam. Skip this shake if you leave out the egg white.
    - id: shake
      title: Shake with ice
      text: 'Add {{ingredients}} and shake until the shaker is frosty cold, 10 to 15 seconds.'
    - id: strain
      title: Strain
      text: 'Fill the chilled glass with {{ingredients}} and strain the drink over it.'
    - id: garnish
      title: Decorate the foam
      text: 'Dot {{ingredients}} on the foam and drag a toothpick through them to make a pattern.'
    - id: fruit
      title: Garnish and serve
      text: 'Finish with {{ingredients}} and serve right away.'
learning:
  techniques:
    - temperature
  substitutions:
    - ingredient: egg white
      alternative: Pasteurized egg whites
      effect: >-
        Use the same amount from a carton for anyone who avoids raw egg. The foam is a little
        thinner.
    - ingredient: New York Sour
      alternative: Red wine float
      effect: >-
        Pour a little dry red wine slowly over the back of a spoon onto the finished drink so it
        floats in a layer on top.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

The whiskey sour has been on American bar menus since the 1860s, when Jerry Thomas wrote sours into his 1862 Bartender's Guide. Bourbon, fresh lemon and simple syrup make the drink, and an egg white gives it a silky body and a thick foam cap. Shake it once without ice first to build the foam.

## Directions

1. **Chill the glass:** Put a rocks glass in the freezer while you mix the drink.
2. **Dry shake:** Put the whiskey, lemon juice, simple syrup, and egg white (if using) in a cocktail shaker without ice. Shake hard for 15 seconds to whip the egg white into foam. Skip this shake if you leave out the egg white.
3. **Shake with ice:** Add the ice and shake until the shaker is frosty cold, 10 to 15 seconds.
4. **Strain:** Fill the chilled glass with the fresh ice and strain the drink over it.
5. **Decorate the foam:** Dot the Angostura bitters (if using) on the foam and drag a toothpick through them to make a pattern.
6. **Garnish and serve:** Finish with the maraschino cherry and orange slice (if using) and serve right away.
