---
miseId: e368bcb0-60bb-4d1e-9fbd-8ac531f4360d
title: Skillet Biscuits with Berries
difficulty: easy
cookingMethods:
  - simmer
  - boil
  - steam
  - broil
  - no-cook
dietary:
  - vegetarian
occasions:
  - entertaining
  - weekend-project
  - comfort-food
seasons:
  - summer
nutritionalDensity: hearty
leftovers: good
equipment:
  - deep-broiler-safe-skillet
  - skillet-lid
flavorProfile:
  - sweet
  - acidic
  - rich
cuisines:
  - American
role: dessert
vibe: comfort
prepTime: 10 min
cookTime: 30 min
totalTime: About 50 min (includes heating and brief cooling)
servings: 8 portions
ingredients:
  - '--- Biscuit dough ---'
  - 1 1/2 cups all-purpose flour
  - 2 tbsp light brown sugar
  - 1 1/2 tsp baking powder
  - 1/2 tsp salt
  - '12 tbsp (1 1/2 sticks) unsalted butter, cold, cut into small cubes'
  - 3/8 cup (6 tbsp) half-and-half
  - '--- Berries and sauce ---'
  - 12 oz raspberries
  - 12 oz blackberries
  - 3/4 cup granulated sugar
  - 1 cup water
  - 1 1/2 tsp finely grated orange zest
  - 1 cinnamon stick
  - '--- Topping and serving ---'
  - 'additional granulated sugar, for sprinkling'
  - 'sweetened whipped cream, for serving'
origin: United States
pairsWith:
  - apple-cider-cream-pie
  - apple-pie
  - blackout-chocolate-cake
  - classic-peach-ice-cream
source: Adapted from Foodandwine.com
sourceUrl: 'http://www.foodandwine.com/recipes/skillet-biscuits-berries'
formula:
  version: 1
  yield:
    amount: 8
    unit: portion
  components:
    - id: dough
      name: Biscuit dough
      ingredients:
        - id: flour
          key: all-purpose-flour
          name: all-purpose flour
          quantity:
            amount: 1 1/2
            unit: cup
          uses:
            - step: dry
              share: 1
        - id: sugar
          key: sugar
          name: light brown sugar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: dry
              share: 1
        - id: baking-powder
          key: baking-powder
          name: baking powder
          quantity:
            amount: 1 1/2
            unit: tsp
          uses:
            - step: dry
              share: 1
        - id: salt
          key: salt
          name: salt
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: dry
              share: 1
        - id: butter
          key: unsalted-butter
          name: unsalted butter
          quantity:
            amount: 12
            unit: tbsp
          equivalents:
            - amount: 1 1/2
              unit: stick
          preparation: 'cold, cut into small cubes'
          uses:
            - step: butter
              share: 1
        - id: half-and-half
          key: half-and-half
          name: half-and-half
          quantity:
            amount: 3/8
            unit: cup
          equivalents:
            - amount: 6
              unit: tbsp
          uses:
            - step: dough
              share: 1
    - id: berries
      name: Berries and sauce
      ingredients:
        - id: raspberries
          key: raspberries
          name: raspberries
          quantity:
            amount: 12
            unit: oz
          uses:
            - step: berries
              share: 1
        - id: blackberries
          key: blackberries
          name: blackberries
          quantity:
            amount: 12
            unit: oz
          uses:
            - step: berries
              share: 1
        - id: sugar
          key: sugar
          name: granulated sugar
          quantity:
            amount: 3/4
            unit: cup
          uses:
            - step: berries
              share: 1
        - id: water
          key: water
          name: water
          quantity:
            amount: 1
            unit: cup
          role: cooking-water
          uses:
            - step: berries
              share: 1
        - id: zest
          key: zest
          name: finely grated orange zest
          quantity:
            amount: 1 1/2
            unit: tsp
          uses:
            - step: berries
              share: 1
        - id: cinnamon
          key: cinnamon
          name: cinnamon stick
          plural: cinnamon sticks
          quantity:
            amount: 1
            unit: count
          role: discarded
          uses:
            - step: berries
              share: 1
    - id: finish
      name: Topping and serving
      ingredients:
        - id: sugar
          key: sugar
          name: additional granulated sugar
          allowance: for sprinkling
          uses:
            - step: broil
              share: 1
        - id: cream
          key: cream
          name: sweetened whipped cream
          allowance: for serving
          uses:
            - step: serve
              share: 1
  steps:
    - id: dry
      title: Mix the dough ingredients
      text: 'In a large bowl combine the dough’s {{ingredients}}.'
    - id: butter
      title: Cut in the butter
      text: >-
        Cut the {{ingredients}} into the dry mixture with a pastry blender or fingertips until the
        mixture is coarse with small pieces of butter still visible.
    - id: dough
      title: Shape the mounds
      text: >-
        Stir in the {{ingredients}} just until evenly moistened. Scoop one loose mound per listed
        portion, keeping the mounds approximately the original size; the original batch makes eight.
        Set them on a parchment-lined tray and keep the dough cool while the berries cook.
    - id: berries
      title: Simmer the berries
      text: >-
        Position an oven rack about 6 inches below the broiler and preheat the broiler according to
        its instructions. In a large, deep skillet approved for broiling, combine the berries’
        {{ingredients}}. Bring to a vigorous boil, then reduce to a moderate simmer and cook,
        stirring occasionally, for about 10 minutes until the berries are juicy and just broken
        down.
    - id: steam
      title: Steam the biscuits
      text: >-
        Arrange the dough mounds over the bubbling fruit in a single layer with room to expand. The
        original batch uses eight mounds; for a different quantity use a suitably smaller skillet or
        additional skillets rather than crowding or increasing mound size. Cover with a fitting lid
        and simmer over very low heat for about 15 minutes, until the biscuit tops are springy and
        the centers are cooked through. Check a center biscuit for moist crumb rather than raw
        dough; if needed, cover and continue simmering before broiling.
    - id: broil
      title: Brown the tops
      text: >-
        Remove the lid and sprinkle the biscuits with {{ingredients}}. Broil about 6 inches from the
        heat for up to 5 minutes, watching continuously and shifting the pan as needed, until
        lightly browned in spots. Stop sooner if they brown quickly; broiling does not replace
        cooking the centers.
    - id: serve
      title: Cool slightly and serve
      text: >-
        Let the skillet cool slightly, remove and discard the cinnamon stick, then serve biscuits
        and berries warm with {{ingredients}}. Handle the hot skillet and handle with oven mitts.
learning:
  focus: Steam a biscuit topping through before browning its surface.
  outcome: >-
    Springy, cooked biscuit centers with lightly browned tops over juicy berries, without raw dough
    or scorched syrup.
  techniques:
    - leavening
    - temperature
  before:
    - >-
      Use a large, deep skillet with a fitting lid and handles approved for the broiler’s
      temperature. Oven-safe does not automatically mean broiler-safe.
    - >-
      The original batch makes eight loose mounds. For a different quantity, make one similarly
      sized mound per listed portion and choose suitably smaller or additional broiler-safe skillets
      with lids so the mounds stay in one layer with room to expand. Do not increase mound size or
      shorten steaming time in direct proportion to servings.
    - >-
      Keep butter cold and handle the dough briefly. Prepare the broiler rack before the skillet
      becomes hot.
  checkpoints:
    - step: 4
      cue: Berries are juicy and just beginning to break down after the moderate simmer.
      why: >-
        An extended vigorous boil evaporates water faster and can leave too little liquid for the
        covered biscuit stage.
    - step: 5
      cue: 'Biscuits are springy, with moist cooked crumb in the center rather than sticky raw dough.'
      why: >-
        The covered simmer cooks the centers; surface browning alone would conceal undercooked
        dough.
    - step: 6
      cue: Tops are lightly browned in spots before the sugar blackens.
      why: >-
        Broilers vary in intensity, so continuous observation matters more than the five-minute
        ceiling.
  troubleshooting:
    - problem: Tops brown while the centers remain raw
      cause: The covered cooking stage ended too early.
      fix: >-
        Verify the centers before broiling. If they are still doughy, cover and continue the
        very-low simmer; do not try to cook them through with longer broiling.
    - problem: Fruit scorches during the covered stage
      cause: Heat is too high or the fruit was over-reduced.
      fix: >-
        Lower the heat immediately. Do not scrape burnt syrup into the sauce; badly scorched fruit
        cannot be repaired.
    - problem: Biscuits are tough
      cause: Dough was overworked after the half-and-half went in.
      fix: >-
        Stop stirring as soon as the dough is evenly moistened and scoop loose mounds. Extra liquid
        after cooking will not reverse toughness.
  substitutions:
    - ingredient: Raspberries and blackberries
      alternative: Keep the written berry mix for this batch
      effect: >-
        Different fruit sizes and water content change breakdown and sauce volume; a frozen-fruit or
        stone-fruit version needs its own timing check.
  timing: >-
    Allow about 50 minutes: around 10 minutes dough preparation, time to bring the fruit to a boil,
    a 10-minute moderate simmer, roughly 15 minutes covered cooking, up to 5 minutes broiling and
    brief cooling. Preheat the broiler during berry cooking. Additional covered time may be needed
    if the biscuit centers are still doughy.
  storage: >-
    Serve the biscuits warm for the best contrast. Refrigerate leftover biscuits and fruit in a
    shallow covered container within 2 hours, or 1 hour above 90°F, at 40°F or below; use within 3–4
    days. Store whipped cream separately and keep it cold. Reheat the fruit and biscuits to 165°F;
    the biscuit tops will soften during storage.
  sources:
    - title: Food & Wine — Skillet Biscuits with Berries
      url: 'https://www.foodandwine.com/recipes/skillet-biscuits-berries'
    - title: 'Nicolet College — Professional Baking: Quick Breads'
      url: 'https://nicoletcollege.pressbooks.pub/professionalbaking/chapter/quick-breads/'
    - title: FDA — Are You Storing Food Safely?
      url: 'https://www.fda.gov/consumers/consumer-updates/are-you-storing-food-safely'
    - title: USDA FSIS — Keep Food Safe! Food Safety Basics
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/steps-keep-food-safe
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

These butter-rich biscuit mounds steam over berries before a brief broiler finish. Keep the lid on over very low heat until the biscuit centers are cooked, then watch the broiler closely for lightly browned tops against the soft fruit.

## Directions

1. **Mix the dough ingredients:** In a large bowl combine the dough’s all-purpose flour, light brown sugar, baking powder, and salt.
2. **Cut in the butter:** Cut the unsalted butter into the dry mixture with a pastry blender or fingertips until the mixture is coarse with small pieces of butter still visible.
3. **Shape the mounds:** Stir in the half-and-half just until evenly moistened. Scoop one loose mound per listed portion, keeping the mounds approximately the original size; the original batch makes eight. Set them on a parchment-lined tray and keep the dough cool while the berries cook.
4. **Simmer the berries:** Position an oven rack about 6 inches below the broiler and preheat the broiler according to its instructions. In a large, deep skillet approved for broiling, combine the berries’ raspberries, blackberries, granulated sugar, water, finely grated orange zest, and cinnamon stick. Bring to a vigorous boil, then reduce to a moderate simmer and cook, stirring occasionally, for about 10 minutes until the berries are juicy and just broken down.
5. **Steam the biscuits:** Arrange the dough mounds over the bubbling fruit in a single layer with room to expand. The original batch uses eight mounds; for a different quantity use a suitably smaller skillet or additional skillets rather than crowding or increasing mound size. Cover with a fitting lid and simmer over very low heat for about 15 minutes, until the biscuit tops are springy and the centers are cooked through. Check a center biscuit for moist crumb rather than raw dough; if needed, cover and continue simmering before broiling.
6. **Brown the tops:** Remove the lid and sprinkle the biscuits with additional granulated sugar. Broil about 6 inches from the heat for up to 5 minutes, watching continuously and shifting the pan as needed, until lightly browned in spots. Stop sooner if they brown quickly; broiling does not replace cooking the centers.
7. **Cool slightly and serve:** Let the skillet cool slightly, remove and discard the cinnamon stick, then serve biscuits and berries warm with sweetened whipped cream. Handle the hot skillet and handle with oven mitts.
