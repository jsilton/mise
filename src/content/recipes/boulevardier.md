---
miseId: 2dcf81dc-bfd6-4460-ac6d-7a19590362ac
title: Boulevardier
prepTime: 5 min
cookTime: 0 min
totalTime: 5 min
servings: 1 portion
role: drink
vibe: technical
difficulty: easy
cuisines:
  - American
  - French
occasions:
  - entertaining
  - date-night
  - comfort-food
seasons:
  - year-round
  - fall
  - winter
flavorProfile:
  - bitter
  - sweet
  - rich
nutritionalDensity: light
leftovers: poor
equipment:
  - mixing-glass
  - bar-spoon
  - jigger
  - strainer
  - cocktail-glass-or-rocks-glass
cookingMethods:
  - no-cook
pairsWith:
  - marinated-korean-ribeye
  - fresh-egg-pasta
ingredients:
  - '--- Boulevardier ---'
  - 'ice and water, as needed to chill the serving glass, optional'
  - 1 1/2 oz bourbon or rye whiskey
  - 1 oz red Italian bitter aperitif
  - 1 oz sweet vermouth
  - 'ice cubes, as needed for stirring'
  - '--- Serving ---'
  - 'large fresh ice cube, as needed for rocks service, optional'
  - 'orange peel, for each serving'
origin: 'Paris, France'
description: 'Whiskey, red Italian bitter aperitif and sweet vermouth, stirred and finished with orange peel.'
formula:
  version: 1
  yield:
    amount: 1
    unit: portion
  components:
    - id: drink
      name: Boulevardier
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
          name: bourbon or rye whiskey
          quantity:
            amount: 1 1/2
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: aperitif
          key: aperitif
          name: red Italian bitter aperitif
          quantity:
            amount: 1
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
          allowance: as needed for rocks service
          optional: true
          role: cooking-water
          uses:
            - step: strain
              share: 1
        - id: orange
          key: orange
          name: orange peel
          allowance: for each serving
          role: garnish
          uses:
            - step: garnish
              share: 1
  steps:
    - id: prep
      title: Choose the serving style
      text: >-
        Use {{ingredients}} if the serving glass is not already chilled. Set out a coupe for service
        without ice, or a rocks glass large enough for the drink plus a fresh cube. Empty the
        chilling ice water before straining. All ounce measures are fluid ounces.
    - id: mix
      title: Combine
      text: >-
        Add {{ingredients}} to a mixing glass with room for the spoon to move. Measure the same
        whiskey-to-aperitif-to-vermouth ratio for a scaled batch; use small batches if the vessel
        becomes crowded.
    - id: stir
      title: Stir and check
      text: >-
        Stir smoothly until the whiskey, aperitif and vermouth are well chilled. Taste a small
        sample with a clean spoon: the finish should be bitter-sweet with distinct whiskey, rather
        than warm and sharply alcoholic. Continue briefly if needed, then strain; different ice and
        bottles change the time.
    - id: strain
      title: Strain
      text: >-
        For rocks service, put {{ingredients}} in each rocks glass and strain in the corresponding
        portion. For up service, omit the fresh cube and strain into the chilled coupe. Keep the
        used mixing ice out of the serving glass. Divide a scaled batch among the corresponding
        glasses.
    - id: garnish
      title: Express orange
      text: >-
        Use {{ingredients}}: twist a peel over each drink to release its oils, then add it as
        garnish. Serve immediately.
learning:
  focus: 'Balance whiskey, bitter aperitif and vermouth through stirred service'
  outcome: A chilled bitter-sweet drink with distinct whiskey flavor and fresh orange aroma.
  techniques:
    - seasoning
  before:
    - >-
      Choose up or rocks service before stirring, and check glass space for the drink and any
      serving cube.
    - >-
      Use a red Italian bitter aperitif rather than a sweeter orange spritz aperitif for the first
      comparison. Opened vermouth belongs capped in the refrigerator.
  checkpoints:
    - step: 3
      cue: A small sample tastes cold while whiskey and bitter-sweet flavors remain distinct.
      why: A time alone does not establish balance with different bottles and ice.
    - step: 4
      cue: Mixing ice stays behind; a rocks drink has a fresh cube and headroom.
      why: 'Serving ice adds further dilution while you sip, so up and rocks service evolve differently.'
  troubleshooting:
    - problem: Bitter aperitif overwhelms the drink
      cause: 'The chosen bottle is unusually bitter, or the whiskey is less assertive.'
      fix: >-
        Check chilling and dilution first. Compare the two-parts-whiskey variation in a separate
        drink; extra syrup is not part of this formula.
    - problem: Drink warms quickly when served up
      cause: The glass started warm or the cocktail waited after straining.
      fix: >-
        Use a chilled glass and serve promptly; choose the rocks option if continued cooling is
        wanted.
  substitutions:
    - ingredient: Bourbon
      alternative: Rye whiskey
      effect: >-
        Whiskey flavor and perceived sweetness change; keep the 1½:1:1 ratio for the first
        comparison.
    - ingredient: Red Italian bitter aperitif
      alternative: A sweeter orange aperitif
      effect: >-
        A less bitter, differently flavored variation; it is not an identical replacement for the
        original red bitter style.
  timing: >-
    About five minutes for one drink, chilling the glass with ice water while setting out measures.
    No heating or required rest. Start the glass ahead if using the freezer instead. Multiple drinks
    require more glasses and possibly small stirring batches; do not multiply a stirring duration by
    the serving count.
  storage: >-
    Serve the mixed drink promptly. For preparation ahead, keep only the measured liquid ingredients
    together in a covered refrigerated container, without ice or garnish, and stir small portions
    over ice at serving. Keep opened vermouth capped and refrigerated, following its label; discard
    used mixing ice.
  sources:
    - title: International Bartenders Association — Boulevardier
      url: 'https://iba-world.com/iba-cocktail/boulevardier/'
    - title: 'Harry McElhone — Barflies and Cocktails (1927), p. 80'
      url: 'https://euvs-vintage-cocktail-books.cld.bz/1927-Barflies-and-Cocktails/80/'
    - title: 'Barflies and Cocktails (1927), Boulevardier advertisement, p. 111'
      url: 'https://euvs-vintage-cocktail-books.cld.bz/1927-Barflies-and-Cocktails/111/'
    - title: 'Dave Arnold — Cocktail Science: stirring, ice and dilution'
      url: 'https://www.cookingissues.com/index.html%3Fp=4585.html'
    - title: 'MARTINI — Vermouth guide, storage after opening'
      url: 'https://www.martini.com/be/fr/category/histoire/'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

The Boulevardier brings whiskey into the bitter-aperitif-and-vermouth family. Erskine Gwynne’s drink appears in the Paris book Barflies and Cocktails in 1927; this version gives the whiskey a little more room than the equal-parts formula printed there. Serve it up for a steady stirred balance, or over a fresh large cube for a drink that continues to dilute as you sip.

## Directions

1. **Choose the serving style:** Use ice and water (if using) if the serving glass is not already chilled. Set out a coupe for service without ice, or a rocks glass large enough for the drink plus a fresh cube. Empty the chilling ice water before straining. All ounce measures are fluid ounces.
2. **Combine:** Add bourbon or rye whiskey, red Italian bitter aperitif, sweet vermouth, and ice cubes to a mixing glass with room for the spoon to move. Measure the same whiskey-to-aperitif-to-vermouth ratio for a scaled batch; use small batches if the vessel becomes crowded.
3. **Stir and check:** Stir smoothly until the whiskey, aperitif and vermouth are well chilled. Taste a small sample with a clean spoon: the finish should be bitter-sweet with distinct whiskey, rather than warm and sharply alcoholic. Continue briefly if needed, then strain; different ice and bottles change the time.
4. **Strain:** For rocks service, put large fresh ice cube (if using) in each rocks glass and strain in the corresponding portion. For up service, omit the fresh cube and strain into the chilled coupe. Keep the used mixing ice out of the serving glass. Divide a scaled batch among the corresponding glasses.
5. **Express orange:** Use orange peel: twist a peel over each drink to release its oils, then add it as garnish. Serve immediately.

## Ratio Variations

For the equal-parts version, use equal volumes of whiskey, bitter aperitif and sweet vermouth. For a more whiskey-forward option, use two parts whiskey to one part of each of the other liquids. Stir and taste either variation on its own; extra whiskey changes strength and bitter-sweet balance rather than removing bitterness. These are alternatives to the 1½:1:1 recipe, not additional ingredients.
