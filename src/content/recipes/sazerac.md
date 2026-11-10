---
miseId: 11ded034-b32a-4df6-b89d-0762912afbb5
title: Sazerac
prepTime: 5 min
cookTime: 0 min
totalTime: 5 min
servings: 1 portion
role: drink
vibe: technical
difficulty: intermediate
cuisines:
  - American
dietary:
  - vegan
  - gluten-free
occasions:
  - entertaining
  - date-night
seasons:
  - fall
  - winter
flavorProfile:
  - herbaceous
  - aromatic
  - spicy
nutritionalDensity: light
leftovers: poor
equipment:
  - rocks-glass
  - mixing-glass
  - bar-spoon
  - jigger
  - strainer
cookingMethods:
  - no-cook
ingredients:
  - 'ice water, for chilling the glass'
  - 2 oz rye whiskey
  - 1/4 oz simple syrup
  - 3 dashes of Peychaud's bitters
  - '1–2 dashes of Angostura bitters, optional'
  - 'ice cubes, for stirring'
  - 'absinthe or Herbsaint, about 1/4 oz, for rinsing the glass'
  - 'lemon peel, 1 strip, for garnish'
origin: United States
description: 'Rye stirred with syrup and bitters, served without ice in an anise-rinsed glass.'
formula:
  version: 1
  yield:
    amount: 1
    unit: portion
  components:
    - id: drink
      name: Sazerac
      ingredients:
        - id: chill
          key: chill
          name: ice water
          allowance: for chilling the glass
          role: cooking-water
          uses:
            - step: prep
              share: 1
        - id: spirit
          key: spirit
          name: rye whiskey
          quantity:
            amount: 2
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: syrup
          key: syrup
          name: simple syrup
          quantity:
            amount: 1/4
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: new-orleans-bitters
          key: new-orleans-bitters
          name: dash of Peychaud's bitters
          plural: dashes of Peychaud's bitters
          quantity:
            amount: 3
            unit: count
          uses:
            - step: mix
              share: 1
        - id: aromatic-bitters
          key: aromatic-bitters
          name: dash of Angostura bitters
          plural: dashes of Angostura bitters
          quantity:
            amount: 1
            max: 2
            unit: count
          optional: true
          uses:
            - step: mix
              share: 1
        - id: mixing-ice
          key: mixing-ice
          name: ice cubes
          allowance: for stirring
          role: cooking-water
          uses:
            - step: mix
              share: 1
        - id: rinse
          key: rinse
          name: absinthe or Herbsaint
          stepName: absinthe
          allowance: 'about 1/4 oz, for rinsing the glass'
          role: discarded
          uses:
            - step: rinse
              share: 1
        - id: lemon
          key: lemon
          name: lemon peel
          allowance: '1 strip, for garnish'
          role: garnish
          uses:
            - step: garnish
              share: 1
  steps:
    - id: prep
      title: Chill the glass
      text: >-
        Fill a rocks glass with {{ingredients}} so it chills while you mix, or chill the glass in
        the freezer.
    - id: mix
      title: Stir the drink
      text: 'Combine {{ingredients}} in a mixing glass. Stir until very cold, 20 to 30 seconds.'
    - id: rinse
      title: Rinse the glass
      text: >-
        Pour the ice water out of the rocks glass. Add {{ingredients}}, swirl to coat the inside and
        pour out the excess.
    - id: strain
      title: Strain
      text: 'Strain the drink into the rinsed glass, with no ice.'
    - id: garnish
      title: Express the lemon
      text: 'Twist the {{ingredients}} over the drink to release its oils, then discard it.'
learning:
  techniques:
    - seasoning
  substitutions:
    - ingredient: rye whiskey
      alternative: Cognac
      effect: 'The original 1830s spirit. It makes a rounder, fruitier drink.'
    - ingredient: simple syrup
      alternative: A sugar cube
      effect: >-
        The old way. Muddle the cube with the bitters and a few drops of water in the mixing glass
        before adding the whiskey and ice.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

The Sazerac is one of America's oldest cocktails, born in 1830s New Orleans and the city's official cocktail since 2008. It started with Cognac and moved to rye when phylloxera wiped out French vineyards. The absinthe rinse is its signature, leaving just enough anise to frame the whiskey and Peychaud's.

## Directions

1. **Chill the glass:** Fill a rocks glass with the ice water so it chills while you mix, or chill the glass in the freezer.
2. **Stir the drink:** Combine the rye whiskey, simple syrup, Peychaud's bitters, Angostura bitters (if using), and ice cubes in a mixing glass. Stir until very cold, 20 to 30 seconds.
3. **Rinse the glass:** Pour the ice water out of the rocks glass. Add the absinthe, swirl to coat the inside and pour out the excess.
4. **Strain:** Strain the drink into the rinsed glass, with no ice.
5. **Express the lemon:** Twist the lemon peel over the drink to release its oils, then discard it.
