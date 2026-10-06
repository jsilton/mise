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
pairsWith:
  - avocado-kale-caesar-salad
  - classic-manhattan
  - easy-homemade-pumpkin-pancakes
  - homemade-sugar-free-ketchup
ingredients:
  - '--- Sugar-cube Old Fashioned ---'
  - 1 sugar cube
  - 2–3 dashes of aromatic bitters
  - 'plain water, a splash, just enough to dissolve the sugar'
  - 2 oz bourbon or rye whiskey
  - 'large fresh ice cube, for each serving'
  - '--- Garnish ---'
  - 'orange peel, for each serving'
  - 'maraschino cherry, for each serving, optional'
  - '--- Syrup alternative — replaces sugar cube and water ---'
  - '1/4 oz simple syrup, optional'
origin: United States
description: 'Bourbon or rye with dissolved sugar, aromatic bitters, a large ice cube and orange peel.'
formula:
  version: 1
  yield:
    amount: 1
    unit: portion
  components:
    - id: drink
      name: Sugar-cube Old Fashioned
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
          name: dash of aromatic bitters
          plural: dashes of aromatic bitters
          quantity:
            amount: 2
            max: 3
            unit: count
          uses:
            - step: sweeten
              share: 1
        - id: water
          key: water
          name: plain water
          allowance: 'a splash, just enough to dissolve the sugar'
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
          name: large fresh ice cube
          allowance: for each serving
          role: cooking-water
          uses:
            - step: mix
              share: 1
    - id: finish
      name: Garnish
      ingredients:
        - id: orange
          key: orange
          name: orange peel
          allowance: for each serving
          role: garnish
          uses:
            - step: garnish
              share: 1
        - id: cherry
          key: cherry
          name: maraschino cherry
          allowance: for each serving
          optional: true
          role: garnish
          uses:
            - step: garnish
              share: 1
    - id: syrup-option
      name: Syrup alternative — replaces sugar cube and water
      ingredients:
        - id: syrup
          key: syrup
          name: simple syrup
          quantity:
            amount: 1/4
            unit: oz
          optional: true
          uses:
            - step: sweeten
              share: 1
  steps:
    - id: prep
      title: Set out the glasses
      text: >-
        Use a rocks glass with room for the drink, a large cube and the spoon. All ounce measures
        are fluid ounces. For a scaled recipe, build each portion in its own glass rather than
        muddling a crowded group of cubes together.
    - id: sweeten
      title: Dissolve the sugar
      text: >-
        Set out {{ingredients}} and choose one sweetening route. For the sugar-cube route, saturate
        the sugar with bitters and the small splash of water, then muddle and stir until dissolved.
        Use just enough water to dissolve it. For the syrup route, omit the sugar cube and water,
        add the measured syrup and bitters directly, and skip muddling. Do not use both sweeteners
        together.
    - id: mix
      title: Add whiskey and ice
      text: >-
        Add {{ingredients}}. Stir gently around the cube until the mixture tastes chilled and the
        sweetness is evenly distributed. A large cube can chill slowly; continue as needed until the
        drink is cold and evenly sweet.
    - id: garnish
      title: Express orange and serve
      text: >-
        Use {{ingredients}}: twist orange peel over each drink, rub it around the rim and drop it
        in. Add a cherry if using. Serve promptly; the cube keeps diluting the drink as it sits.
learning:
  focus: Dissolve sugar before chilling a built cocktail
  outcome: >-
    Even sweetness through a cold whiskey drink, with orange aroma and no gritty sugar at the
    bottom.
  techniques:
    - seasoning
  before:
    - >-
      Choose the sugar-cube or simple-syrup route before starting. Their sweetness is not
      automatically identical.
    - >-
      Use a rocks glass large enough for the cube and spoon; make scaled portions in separate
      glasses. A dash is bottle-dependent.
  checkpoints:
    - step: 2
      cue: The sugar is dissolved before the ice goes in.
      why: Sugar trapped under cold ice is harder to distribute evenly through the drink.
    - step: 3
      cue: The drink tastes cold and consistently sweet from a small stirred sample.
      why: >-
        One large cube and a short fixed stir do not guarantee the same cooling or dilution in every
        glass.
  troubleshooting:
    - problem: Sugar is gritty at the bottom
      cause: The cube was not fully dissolved before adding ice.
      fix: >-
        Stir gently to dissolve it if possible; next time complete the bitters-water dissolution
        first or use the syrup route.
    - problem: The drink tastes weak after waiting
      cause: Serving ice has continued to melt.
      fix: >-
        Serve fresh; excess dilution cannot be removed. Use a fresh large cube that fits the glass
        for the next drink.
  substitutions:
    - ingredient: One sugar cube
      alternative: ¼ fluid ounce simple syrup
      effect: >-
        Omit the dissolution water and muddling. Cube mass and syrup strength vary; compare
        sweetness rather than claim exact sugar equivalence.
    - ingredient: Bourbon
      alternative: Rye whiskey
      effect: Changes whiskey aroma and perceived sweetness while preserving the measured spirit amount.
  timing: >-
    About five minutes for one glass, including dissolving the cube, measuring, stirring and
    garnish. No required chill interval or rest. Scale the portions by building separate glasses;
    judge the chill and balance separately in each glass.
  storage: >-
    Serve promptly and keep ice out of any liquid mixture prepared ahead. Store unused syrup
    according to its own recipe or label; this drink does not supply a homemade syrup formula or a
    validated storage deadline. Discard used serving ice rather than returning it to the supply.
  sources:
    - title: International Bartenders Association — Old Fashioned
      url: 'https://iba-world.com/iba-cocktail/old-fashioned/'
    - title: 'Jerry Thomas — The Bar-Tender’s Guide (1887), whiskey cocktail'
      url: 'https://euvs-vintage-cocktail-books.cld.bz/1887-The-bar-tender-s-guide'
    - title: 'Dave Arnold — Cocktail Science: stirring, ice and dilution'
      url: 'https://www.cookingissues.com/index.html%3Fp=4585.html'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

Whiskey, sugar, bitters and water place the Old Fashioned in the nineteenth-century plain whiskey-cocktail family. Dissolve the sugar before adding the whiskey and ice so the sweetness is evenly distributed instead of sitting in the bottom of the glass. Orange oil supplies the fresh aroma; the optional cherry stays a garnish rather than a muddled fruit ingredient.

## Directions

1. **Set out the glasses:** Use a rocks glass with room for the drink, a large cube and the spoon. All ounce measures are fluid ounces. For a scaled recipe, build each portion in its own glass rather than muddling a crowded group of cubes together.
2. **Dissolve the sugar:** Set out sugar cube, dashes of aromatic bitters, plain water, and simple syrup (if using) and choose one sweetening route. For the sugar-cube route, saturate the sugar with bitters and the small splash of water, then muddle and stir until dissolved. Use just enough water to dissolve it. For the syrup route, omit the sugar cube and water, add the measured syrup and bitters directly, and skip muddling. Do not use both sweeteners together.
3. **Add whiskey and ice:** Add bourbon or rye whiskey and large fresh ice cube. Stir gently around the cube until the mixture tastes chilled and the sweetness is evenly distributed. A large cube can chill slowly; continue as needed until the drink is cold and evenly sweet.
4. **Express orange and serve:** Use orange peel and maraschino cherry (if using): twist orange peel over each drink, rub it around the rim and drop it in. Add a cherry if using. Serve promptly; the cube keeps diluting the drink as it sits.

## Simple-Syrup Variation

Use ¼ fluid ounce of simple syrup in place of each sugar cube. Omit the dissolution water and muddling: put the syrup and the measured bitters in the serving glass, add the whiskey and ice, then stir and garnish as directed. Sugar-cube size and syrup concentration vary, so the two routes can differ in sweetness. Follow the syrup’s storage instructions.
