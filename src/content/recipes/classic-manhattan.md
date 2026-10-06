---
miseId: 2efbb636-2acc-49cc-a788-142e6e87f3d3
title: Classic Manhattan
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
  - mixing-glass
  - bar-spoon
  - jigger
  - strainer
  - cocktail-glass
cookingMethods:
  - no-cook
pairsWith:
  - marinated-korean-ribeye
ingredients:
  - '--- Manhattan ---'
  - 'ice and water, as needed to chill the serving glass, optional'
  - 2 oz rye whiskey or bourbon
  - 1 oz sweet vermouth
  - 2 dashes of aromatic bitters
  - 'ice cubes, as needed for stirring'
  - '--- Garnish ---'
  - 'maraschino cherry, for each serving'
  - 'orange peel, for each serving, optional'
origin: United States
description: 'Rye or bourbon and sweet vermouth in a 2:1 ratio, stirred with aromatic bitters and a cherry.'
formula:
  version: 1
  yield:
    amount: 1
    unit: portion
  components:
    - id: drink
      name: Manhattan
      ingredients:
        - id: glass-chill
          key: glass-chill
          name: ice and water
          allowance: as needed to chill the serving glass
          optional: true
          role: cooking-water
          uses:
            - step: prep
              share: 1
        - id: whiskey
          key: whiskey
          name: rye whiskey or bourbon
          quantity:
            amount: 2
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: vermouth
          key: vermouth
          name: sweet vermouth
          quantity:
            amount: 1
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: bitters
          key: bitters
          name: dash of aromatic bitters
          plural: dashes of aromatic bitters
          quantity:
            amount: 2
            unit: count
          uses:
            - step: mix
              share: 1
        - id: mixing-ice
          key: mixing-ice
          name: ice cubes
          allowance: as needed for stirring
          role: cooking-water
          uses:
            - step: mix
              share: 1
    - id: finish
      name: Garnish
      ingredients:
        - id: cherry
          key: cherry
          name: maraschino cherry
          allowance: for each serving
          role: garnish
          uses:
            - step: garnish
              share: 1
        - id: orange
          key: orange
          name: orange peel
          allowance: for each serving
          optional: true
          role: garnish
          uses:
            - step: garnish
              share: 1
  steps:
    - id: prep
      title: Chill and measure
      text: >-
        Use {{ingredients}} if the cocktail glass is not already chilled. Set out a glass with room
        for the stirred drink and headroom; the original recipe begins with 3 fluid ounces plus
        bitters before ice melts. All ounce measures are fluid ounces.
    - id: mix
      title: Combine
      text: >-
        Add {{ingredients}} to a mixing glass. Leave room for stirring; use small batches instead of
        filling the vessel to the rim. Dash size depends on the bottle, so keep the same bottle and
        pouring motion for comparisons.
    - id: stir
      title: Stir and check
      text: >-
        Stir smoothly until the whiskey-vermouth mixture is well chilled. Taste a small sample with
        a clean spoon for a rounded finish with distinct whiskey and vermouth; continue briefly if
        still warm or harsh. Strain promptly once balanced. Ice size and starting temperature change
        the stirring time.
    - id: strain
      title: Strain
      text: >-
        Empty the serving glass of any chilling ice water and strain in the drink, keeping mixing
        ice out. Divide a scaled batch among the corresponding chilled glasses.
    - id: garnish
      title: Finish
      text: >-
        Use {{ingredients}}: add a cherry to each drink and, if using orange peel, twist it over the
        surface to express its oils. Serve immediately.
learning:
  focus: Judge the whiskey-vermouth balance after chilling
  outcome: 'A cold, clear Manhattan with recognizable whiskey, sweet vermouth and aromatic bitters.'
  techniques:
    - seasoning
  before:
    - >-
      Use sweet vermouth, and refrigerate its opened bottle. Dry vermouth makes a distinct
      variation.
    - >-
      Have a chilled glass with room for the original 3-fluid-ounce base plus meltwater. Use the
      same bitters bottle when comparing ratios; fractional dashes are approximate, not standardized
      volumes.
  checkpoints:
    - step: 3
      cue: 'A small sample tastes chilled and rounded, rather than warm and sharply alcoholic.'
      why: >-
        Starting conditions and dilution affect perceived balance even with the same 2:1 liquid
        ratio.
    - step: 5
      cue: 'Cherry is in the glass, and optional orange oil is on the surface.'
      why: The garnish contributes aroma at service rather than changing the stirring ratio.
  troubleshooting:
    - problem: Drink tastes flat
      cause: 'Opened vermouth may have lost its fresh aroma, or the drink is overly diluted.'
      fix: >-
        Taste the vermouth separately and use a sound bottle. Dilution already added cannot be
        removed; check earlier with fresh ice next time.
    - problem: Bitters dominate
      cause: Dash size differs between bottles or pouring styles.
      fix: >-
        Keep the two-dash starting formula and compare with the same bottle. Do not assume a dash
        equals a specified teaspoon amount.
  substitutions:
    - ingredient: Rye whiskey
      alternative: Bourbon
      effect: >-
        Changes the whiskey’s aroma and perceived sweetness; it does not change the vermouth’s sugar
        or the measured 2:1 ratio.
    - ingredient: Optional orange peel
      alternative: Omit it
      effect: Keeps the cherry finish with less citrus aroma; no replacement citrus juice is needed.
  timing: >-
    About five minutes for one drink with ice-water glass chilling during setup. No heating,
    steeping or rest is required. A freezer-chilled glass can be prepared ahead. Scale the liquids
    and garnishes, allow more stirring batches as needed, and do not multiply the stirring time.
  storage: >-
    Serve the mixed drink promptly. For preparation ahead, keep only the measured liquid ingredients
    together in a covered refrigerated container, without ice or garnish, and stir small portions
    over ice at serving. Keep opened vermouth capped and refrigerated, following its label; discard
    used mixing ice.
  sources:
    - title: International Bartenders Association — Manhattan
      url: 'https://iba-world.com/iba-cocktail/manhattan/'
    - title: 'Jerry Thomas — The Bar-Tender’s Guide (1887), Manhattan'
      url: 'https://euvs-vintage-cocktail-books.cld.bz/1887-The-bar-tender-s-guide/24/'
    - title: 'Dave Arnold — Cocktail Science: stirring, ice and dilution'
      url: 'https://www.cookingissues.com/index.html%3Fp=4585.html'
    - title: 'MARTINI — Vermouth guide, storage after opening'
      url: 'https://www.martini.com/be/fr/category/histoire/'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

The Manhattan’s whiskey-and-vermouth pairing was already in print by 1887. This version uses two parts whiskey to one part sweet vermouth, with aromatic bitters and a cherry. Rye and bourbon give different expressions of the same drink; the vermouth amount stays the same for either. Stir and taste before serving so the finish is rounded while the whiskey remains distinct.

## Directions

1. **Chill and measure:** Use ice and water (if using) if the cocktail glass is not already chilled. Set out a glass with room for the stirred drink and headroom; the original recipe begins with 3 fluid ounces plus bitters before ice melts. All ounce measures are fluid ounces.
2. **Combine:** Add rye whiskey or bourbon, sweet vermouth, dashes of aromatic bitters, and ice cubes to a mixing glass. Leave room for stirring; use small batches instead of filling the vessel to the rim. Dash size depends on the bottle, so keep the same bottle and pouring motion for comparisons.
3. **Stir and check:** Stir smoothly until the whiskey-vermouth mixture is well chilled. Taste a small sample with a clean spoon for a rounded finish with distinct whiskey and vermouth; continue briefly if still warm or harsh. Strain promptly once balanced. Ice size and starting temperature change the stirring time.
4. **Strain:** Empty the serving glass of any chilling ice water and strain in the drink, keeping mixing ice out. Divide a scaled batch among the corresponding chilled glasses.
5. **Finish:** Use maraschino cherry and orange peel (if using): add a cherry to each drink and, if using orange peel, twist it over the surface to express its oils. Serve immediately.

## A Drier Ratio

For a 3:1 variation, use three parts whiskey to one part sweet vermouth. This changes the balance and amount of vermouth; it is an alternative to the 2:1 recipe. Compare it in a separate drink rather than adding whiskey to an already diluted glass.
