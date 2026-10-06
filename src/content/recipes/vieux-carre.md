---
miseId: d6fa4483-c1a1-4b94-95e8-fb459bfa7c03
title: Vieux Carré
difficulty: easy
cookingMethods:
  - no-cook
  - mix
occasions:
  - date-night
  - entertaining
seasons:
  - year-round
nutritionalDensity: light
leftovers: poor
equipment:
  - mixing-glass
  - bar-spoon
  - jigger
  - strainer
  - measuring-spoon
  - rocks-glass-or-coupe
  - cocktail-shaker-for-variation
flavorProfile:
  - sweet
  - herbaceous
  - aromatic
cuisines:
  - American
role: drink
vibe: technical
prepTime: 5 min
cookTime: 0 min
totalTime: '10 min, including glass chilling'
servings: 1 portion
ingredients:
  - '--- Vieux Carré ---'
  - 3/4 oz rye whiskey
  - '3/4 oz Cognac, VSOP preferred'
  - 3/4 oz rich sweet red vermouth
  - 1/2 tsp French honeyed herbal liqueur (40% ABV)
  - 2 dashes of aromatic bitters
  - 2 dashes of New Orleans-style anise-forward bitters
  - 'ice cubes, as needed for stirring'
  - '--- Serving ---'
  - 'large fresh ice cube, for each rocks serving, optional'
  - 1 lemon twist or maraschino cherry
origin: United States
pairsWith:
  - avocado-kale-caesar-salad
  - beef-tenderloin-dogs-with-corn-relish
  - brownie-baked-oatmeal
  - chicken-apple-and-butternut-stew
description: >-
  Equal measured rye, Cognac and sweet vermouth with French honeyed herbal liqueur and two styles of
  bitters.
formula:
  version: 1
  yield:
    amount: 1
    unit: portion
  components:
    - id: drink
      name: Vieux Carré
      ingredients:
        - id: rye
          key: rye
          name: rye whiskey
          quantity:
            amount: 3/4
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: cognac
          key: cognac
          name: Cognac
          quantity:
            amount: 3/4
            unit: oz
          preparation: VSOP preferred
          uses:
            - step: mix
              share: 1
        - id: vermouth
          key: vermouth
          name: rich sweet red vermouth
          quantity:
            amount: 3/4
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: liqueur
          key: liqueur
          name: French honeyed herbal liqueur (40% ABV)
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: mix
              share: 1
        - id: aromatic-bitters
          key: aromatic-bitters
          name: dash of aromatic bitters
          plural: dashes of aromatic bitters
          quantity:
            amount: 2
            unit: count
          uses:
            - step: mix
              share: 1
        - id: new-orleans-bitters
          key: new-orleans-bitters
          name: dash of New Orleans-style anise-forward bitters
          plural: dashes of New Orleans-style anise-forward bitters
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
      name: Serving
      ingredients:
        - id: serving-ice
          key: serving-ice
          name: large fresh ice cube
          allowance: for each rocks serving
          optional: true
          role: cooking-water
          uses:
            - step: strain
              share: 1
        - id: garnish
          key: garnish
          name: lemon twist or maraschino cherry
          plural: lemon twists or maraschino cherries
          quantity:
            amount: 1
            unit: count
          role: garnish
          uses:
            - step: garnish
              share: 1
  steps:
    - id: prep
      title: Choose and chill the glass
      text: >-
        Chill a freezer-safe rocks glass or coupe for about 5 minutes before mixing. Choose rocks
        service with a fresh cube or service without ice. Set out a glass with room for the drink,
        headroom and any serving cube. All ounce measures are fluid ounces.
    - id: mix
      title: Combine over ice
      text: >-
        Add {{ingredients}} to a mixing glass with room for the spoon to move. Use the measured
        teaspoon amount for the herbal liqueur rather than assuming every barspoon has the same
        capacity. Use small batches if the scaled amount crowds the vessel.
    - id: stir
      title: Stir and check
      text: >-
        Stir smoothly until the mixture is cold. Taste a small sample with a clean spoon: rye and
        Cognac should remain distinct beneath the vermouth, liqueur and bitters. Continue briefly if
        still warm or harsh, then strain before it becomes thin. Ice and starting temperature change
        the stirring time.
    - id: strain
      title: Strain
      text: >-
        Use {{ingredients}} for each chilled rocks glass, then strain the corresponding portions
        over the fresh cubes. For service without ice, strain into the chilled coupe and omit the
        serving cube. Keep the used mixing ice behind.
    - id: garnish
      title: Finish either garnish
      text: >-
        Use {{ingredients}}: express a lemon twist over each drink and drop it in, or add the cherry
        if that is the chosen garnish. Serve promptly.
learning:
  focus: Keep a small herbal-liqueur dose distinct in a stirred drink
  outcome: >-
    A cold, smooth blend of rye, Cognac and vermouth with a restrained herbal finish and the
    selected garnish.
  techniques:
    - seasoning
  before:
    - >-
      Use a measuring spoon for the half-teaspoon liqueur amount; barspoons are not assumed to be
      identical.
    - >-
      Choose rocks or ice-free service and check the glass capacity. The original base is 2¼ fluid
      ounces plus half a teaspoon of liqueur and bitters before dilution.
    - Chill the freezer-safe glass before mixing and keep opened vermouth refrigerated.
  checkpoints:
    - step: 2
      cue: The herbal liqueur is measured separately and both bitters are included.
      why: A small strongly aromatic ingredient can dominate if free-poured or accidentally doubled.
    - step: 4
      cue: 'Mixing ice stays behind; rocks service uses a fresh cube, while coupe service has none.'
      why: >-
        The two serving styles develop differently after straining because serving ice keeps
        melting.
    - step: 5
      cue: The chosen garnish has actually been used.
      why: Lemon oil and a cherry give different aromas; either garnish belongs at service.
  troubleshooting:
    - problem: Herbal liqueur dominates
      cause: The half-teaspoon amount was free-poured or a large barspoon was assumed equivalent.
      fix: Use the stated teaspoon measure next time; an already mixed liqueur cannot be removed.
    - problem: Bitters drown out the spirits
      cause: Dash volume changed with the bottle or pour.
      fix: >-
        Use the measured two dashes of each for the first comparison and keep the same bottles. Do
        not invent a teaspoon conversion for a dash.
  substitutions:
    - ingredient: Lemon twist
      alternative: Maraschino cherry
      effect: Adds fruit sweetness/aroma instead of fresh lemon oil; add it whole at service.
    - ingredient: Stirred method
      alternative: Shaken rocks variation
      effect: >-
        Produces a different, more aerated presentation; keep the same measured ingredients and use
        fresh serving ice.
  timing: >-
    About ten minutes from an unchilled glass: the five-minute freezer chill plus roughly five
    minutes for measuring, stirring, straining and garnish. Chilling can be done ahead, reducing
    service work. No heating or required rest. Extra glasses and small batches extend service time
    rather than requiring one long multiplied stir.
  storage: >-
    Serve the mixed drink promptly. For preparation ahead, keep only the measured liquid ingredients
    together in a covered refrigerated container, without ice or garnish, and stir small portions
    over ice at serving. Keep opened vermouth capped and refrigerated, following its label; discard
    used mixing ice.
  sources:
    - title: International Bartenders Association — Vieux Carré
      url: 'https://iba-world.com/iba-cocktail/vieux-carre/'
    - title: Hotel Monteleone — Walter Bergeron and the Vieux Carré
      url: 'https://www.hotelmonteleone.com/our-hotel/our-story/'
    - title: 'Dave Arnold — Cocktail Science: stirring, ice and dilution'
      url: 'https://www.cookingissues.com/index.html%3Fp=4585.html'
    - title: 'Dave Arnold — Cocktail Science: balance and batching'
      url: 'https://www.cookingissues.com/index.html%3Fp=4601.html'
    - title: 'MARTINI — Vermouth guide, storage after opening'
      url: 'https://www.martini.com/be/fr/category/histoire/'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

The Vieux Carré combines rye, Cognac and sweet vermouth with a little honeyed herbal liqueur and two bitters. Hotel Monteleone credits Walter Bergeron with the drink in the 1930s. Stir this version for a clear, smooth presentation, then choose fresh ice in a rocks glass or service without ice in a coupe. Both the lemon twist and the cherry option have a place at the finish.

## Directions

1. **Choose and chill the glass:** Chill a freezer-safe rocks glass or coupe for about 5 minutes before mixing. Choose rocks service with a fresh cube or service without ice. Set out a glass with room for the drink, headroom and any serving cube. All ounce measures are fluid ounces.
2. **Combine over ice:** Add rye whiskey, Cognac, rich sweet red vermouth, French honeyed herbal liqueur (40% ABV), dashes of aromatic bitters, dashes of New Orleans-style anise-forward bitters, and ice cubes to a mixing glass with room for the spoon to move. Use the measured teaspoon amount for the herbal liqueur rather than assuming every barspoon has the same capacity. Use small batches if the scaled amount crowds the vessel.
3. **Stir and check:** Stir smoothly until the mixture is cold. Taste a small sample with a clean spoon: rye and Cognac should remain distinct beneath the vermouth, liqueur and bitters. Continue briefly if still warm or harsh, then strain before it becomes thin. Ice and starting temperature change the stirring time.
4. **Strain:** Use large fresh ice cube (if using) for each chilled rocks glass, then strain the corresponding portions over the fresh cubes. For service without ice, strain into the chilled coupe and omit the serving cube. Keep the used mixing ice behind.
5. **Finish either garnish:** Use lemon twist or maraschino cherry: express a lemon twist over each drink and drop it in, or add the cherry if that is the chosen garnish. Serve promptly.

## Shaken Variation

For a shaken variation, combine the same measured liquids and bitters in a shaker with mixing ice, shake until cold, then strain onto fresh ice in a rocks glass. Express the lemon twist and add it, or use the cherry option. Shaking gives a different texture and can leave fine ice; it does not ruin the ingredients. This is an alternative to the stirred method, not another mixing step.
