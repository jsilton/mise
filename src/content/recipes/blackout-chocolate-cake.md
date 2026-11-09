---
miseId: 3d6265ab-b4f8-456a-8df5-cc1d94bcd1da
title: Blackout Chocolate Cake
difficulty: intermediate
cookingMethods:
  - bake
  - boil
dietary:
  - vegetarian
occasions:
  - holiday
  - entertaining
  - weekend-project
  - comfort-food
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: excellent
advancePrep:
  - make-ahead
flavorProfile:
  - sweet
  - acidic
  - rich
cuisines:
  - American
role: dessert
vibe: technical
prepTime: 45 min
cookTime: 35 min
totalTime: '1 hr 20 min, plus 2 hr cooling and chilling'
servings: 10 portions
pairsWith:
  - old-fashioned-vanilla-ice-cream
pairingNotes:
  old-fashioned-vanilla-ice-cream: Cold vanilla against the dark chocolate.
ingredients:
  - '--- Chocolate cake ---'
  - 'butter or neutral oil, for the pans'
  - 2 cups boiling water
  - 1 1/2 cups unsweetened cocoa powder
  - 1 tbsp instant espresso powder
  - 1 1/2 cups plain full-fat Greek yogurt
  - 1/2 cup vegetable oil
  - 4 large eggs
  - 1 tbsp vanilla extract
  - 3 cups all-purpose flour
  - 3 cups granulated sugar
  - 1 tbsp baking soda
  - 1 1/2 tsp baking powder
  - 1 1/2 tsp fine sea salt
  - '--- Chocolate cream cheese frosting ---'
  - '3 sticks butter, softened'
  - '8 oz cream cheese, softened'
  - 1 1/2 cups unsweetened cocoa powder
  - 1 tbsp vanilla extract
  - 'salt, a pinch'
  - 7 cups powdered sugar
  - 1/4 cup heavy cream
  - '--- Chocolate coating and drizzle ---'
  - 3–4 cups chocolate chips
  - 'chopped chocolate or chocolate chips, for drizzling, optional'
origin: United States
source: Adapted from Pinch of Yum
sourceUrl: 'https://pinchofyum.com/blackout-chocolate-cake'
equipment:
  - cake-pans
  - stand-mixer
  - cooling-rack
formula:
  version: 1
  yield:
    amount: 10
    unit: portion
  components:
    - id: cake
      name: Chocolate cake
      ingredients:
        - id: pan-fat
          key: butter-or-neutral-oil
          name: butter or neutral oil
          allowance: for the pans
          uses:
            - step: prepare
              share: 1
        - id: water
          key: water
          name: boiling water
          quantity:
            amount: 2
            unit: cup
          role: cooking-water
          uses:
            - step: bloom
              share: 1
        - id: cocoa
          key: unsweetened-cocoa-powder
          name: unsweetened cocoa powder
          quantity:
            amount: 1 1/2
            unit: cup
          uses:
            - step: bloom
              share: 1
        - id: espresso
          key: espresso
          name: instant espresso powder
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: bloom
              share: 1
        - id: yogurt
          key: plain-full-fat-greek-yogurt
          name: plain full-fat Greek yogurt
          quantity:
            amount: 1 1/2
            unit: cup
          uses:
            - step: wet
              share: 1
        - id: oil
          key: vegetable-oil
          name: vegetable oil
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: wet
              share: 1
        - id: eggs
          key: eggs
          name: large egg
          plural: large eggs
          quantity:
            amount: 4
            unit: count
          uses:
            - step: wet
              share: 1
        - id: vanilla
          key: vanilla-extract
          name: vanilla extract
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: wet
              share: 1
        - id: flour
          key: all-purpose-flour
          name: all-purpose flour
          quantity:
            amount: 3
            unit: cup
          uses:
            - step: dry
              share: 1
        - id: sugar
          key: sugar
          name: granulated sugar
          quantity:
            amount: 3
            unit: cup
          uses:
            - step: dry
              share: 1
        - id: baking-soda
          key: baking-soda
          name: baking soda
          quantity:
            amount: 1
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
          name: fine sea salt
          quantity:
            amount: 1 1/2
            unit: tsp
          uses:
            - step: dry
              share: 1
    - id: frosting
      name: Chocolate cream cheese frosting
      ingredients:
        - id: butter
          key: butter
          name: butter
          quantity:
            amount: 3
            unit: stick
          preparation: softened
          uses:
            - step: frosting
              share: 1
        - id: cream-cheese
          key: cream-cheese
          name: cream cheese
          quantity:
            amount: 8
            unit: oz
          preparation: softened
          uses:
            - step: frosting
              share: 1
        - id: cocoa
          key: unsweetened-cocoa-powder
          name: unsweetened cocoa powder
          quantity:
            amount: 1 1/2
            unit: cup
          uses:
            - step: frosting-finish
              share: 1
        - id: vanilla
          key: vanilla-extract
          name: vanilla extract
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: frosting-finish
              share: 1
        - id: salt
          key: salt
          name: salt
          uses:
            - step: frosting-finish
              share: 1
          allowance: a pinch
        - id: sugar
          key: powdered-sugar
          name: powdered sugar
          quantity:
            amount: 7
            unit: cup
          uses:
            - step: frosting-finish
              share: 1
        - id: cream
          key: cream
          name: heavy cream
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: frosting-finish
              share: 1
    - id: finish
      name: Chocolate coating and drizzle
      ingredients:
        - id: chips
          key: chips
          name: chocolate chips
          quantity:
            amount: 3
            max: 4
            unit: cup
          uses:
            - step: chips
              share: 1
        - id: drizzle
          key: drizzle
          name: chopped chocolate or chocolate chips
          allowance: for drizzling
          optional: true
          role: garnish
          uses:
            - step: drizzle
              share: 1
  steps:
    - id: prepare
      title: Prepare the pans
      text: >-
        Heat the oven to 350°F. Grease three 9-inch round cake pans with {{ingredients}}. Line the
        bottoms with parchment and grease the parchment.
    - id: bloom
      title: Bloom the cocoa
      text: >-
        Whisk {{ingredients}} together in a large heatproof bowl until smooth. Let it cool until
        just warm to the touch, about 15 minutes, so it does not cook the eggs.
    - id: wet
      title: Whisk in the eggs
      text: 'Whisk {{ingredients}} into the cocoa mixture until smooth.'
    - id: dry
      title: Mix the dry ingredients
      text: 'In another large bowl, whisk {{ingredients}} until no lumps remain.'
    - id: combine
      title: Make the batter
      text: >-
        Fold the dry mixture into the chocolate mixture just until no dry pockets remain. Divide the
        batter evenly among the pans.
    - id: bake
      title: Bake the layers
      text: >-
        Bake until the centers spring back when pressed and a toothpick comes out clean, 30 to 35
        minutes.
    - id: cool
      title: Cool the layers
      text: >-
        Cool the layers in their pans on a rack for 10 minutes. Run a knife around the edges, turn
        them out and peel off the parchment. Let them cool completely, about 1 hour.
    - id: frosting
      title: Beat the butter
      text: >-
        While the layers cool, beat {{ingredients}} in a stand mixer on medium speed until smooth
        and fluffy, about 2 minutes.
    - id: frosting-finish
      title: Finish the frosting
      text: >-
        On low speed, beat in {{ingredients}}, adding the sugar a little at a time. Turn the speed
        to medium and beat until fluffy and spreadable, about 2 minutes.
    - id: assemble
      title: Stack and chill
      text: >-
        Set one layer on a cake plate and spread it with frosting. Stack the other layers, frosting
        between each, then frost the top and sides. Refrigerate until the frosting is firm, about 30
        minutes.
    - id: chips
      title: Coat with chips
      text: 'Hold the cake over a tray and press {{ingredients}} into the sides by the handful.'
    - id: drizzle
      title: Drizzle and serve
      text: >-
        Melt {{ingredients}} in the microwave in short bursts, stirring between each, and drizzle it
        over the top. Let the cake sit out for 30 minutes before slicing so the frosting softens.
learning:
  techniques:
    - leavening
    - temperature
  substitutions:
    - ingredient: Instant espresso powder
      alternative: Instant coffee granules
      effect: >-
        Use the same amount. The coffee flavor is a little softer, and the cake still tastes of
        chocolate, not coffee.
  storage: Keep the cake covered in the fridge for up to 4 days. Wrapped slices freeze for 3 months.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

This is Lindsay Ostrom's three-layer chocolate cake from Pinch of Yum, frosted with chocolate cream cheese and coated in chocolate chips. Blooming the cocoa in boiling water with espresso deepens the chocolate, and Greek yogurt keeps the crumb moist and a little tangy.

## Directions

1. **Prepare the pans:** Heat the oven to 350°F. Grease three 9-inch round cake pans with butter or neutral oil. Line the bottoms with parchment and grease the parchment.
2. **Bloom the cocoa:** Whisk boiling water, unsweetened cocoa powder, and instant espresso powder together in a large heatproof bowl until smooth. Let it cool until just warm to the touch, about 15 minutes, so it does not cook the eggs.
3. **Whisk in the eggs:** Whisk plain full-fat Greek yogurt, vegetable oil, large eggs, and vanilla extract into the cocoa mixture until smooth.
4. **Mix the dry ingredients:** In another large bowl, whisk all-purpose flour, granulated sugar, baking soda, baking powder, and fine sea salt until no lumps remain.
5. **Make the batter:** Fold the dry mixture into the chocolate mixture just until no dry pockets remain. Divide the batter evenly among the pans.
6. **Bake the layers:** Bake until the centers spring back when pressed and a toothpick comes out clean, 30 to 35 minutes.
7. **Cool the layers:** Cool the layers in their pans on a rack for 10 minutes. Run a knife around the edges, turn them out and peel off the parchment. Let them cool completely, about 1 hour.
8. **Beat the butter:** While the layers cool, beat butter and cream cheese in a stand mixer on medium speed until smooth and fluffy, about 2 minutes.
9. **Finish the frosting:** On low speed, beat in unsweetened cocoa powder, vanilla extract, salt, powdered sugar, and heavy cream, adding the sugar a little at a time. Turn the speed to medium and beat until fluffy and spreadable, about 2 minutes.
10. **Stack and chill:** Set one layer on a cake plate and spread it with frosting. Stack the other layers, frosting between each, then frost the top and sides. Refrigerate until the frosting is firm, about 30 minutes.
11. **Coat with chips:** Hold the cake over a tray and press chocolate chips into the sides by the handful.
12. **Drizzle and serve:** Melt chopped chocolate or chocolate chips (if using) in the microwave in short bursts, stirring between each, and drizzle it over the top. Let the cake sit out for 30 minutes before slicing so the frosting softens.
