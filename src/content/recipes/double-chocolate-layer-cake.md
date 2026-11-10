---
miseId: 20afa4d7-2795-47b7-9f65-3f6637b3c87a
title: Double Chocolate Layer Cake
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
equipment:
  - round-cake-pan
  - stand-mixer
  - saucepan
  - cooling-rack
advancePrep:
  - make-ahead
flavorProfile:
  - sweet
  - rich
cuisines:
  - American
role: dessert
vibe: technical
prepTime: 45 min
cookTime: 1 hr 10 min
totalTime: '2 hr, plus 3 hr cooling and setting'
servings: 12–14 portions
pairsWith:
  - old-fashioned-vanilla-ice-cream
pairingNotes:
  old-fashioned-vanilla-ice-cream: 'A cold scoop beside a dark, rich slice.'
scaling:
  mode: fixed
  reason: >-
    Written for two 10-inch round pans, each 2 inches deep. Make separate batches to preserve batter
    depth and baking time.
ingredients:
  - '--- Cake layers ---'
  - 'butter or neutral oil, for greasing the pans and parchment'
  - '3 oz semisweet chocolate, finely chopped'
  - 1 1/2 cups hot brewed coffee
  - 3 cups granulated sugar
  - 2 1/2 cups all-purpose flour
  - 1 1/2 cups natural cocoa powder (not Dutch-process)
  - 2 tsp baking soda
  - 3/4 tsp baking powder
  - 1 1/4 tsp sea salt
  - 3 large eggs
  - 3/4 cup vegetable oil
  - '1 1/2 cups buttermilk, well-shaken'
  - 3/4 tsp vanilla extract
  - '--- Ganache frosting ---'
  - '1 lb semisweet chocolate, finely chopped'
  - 1 cup heavy cream
  - 2 tbsp granulated sugar
  - 2 tbsp light corn syrup
  - '1/4 cup unsalted butter, cubed'
source: 'Adapted from Ed Kasky, Gourmet'
sourceUrl: 'https://www.epicurious.com/recipes/food/views/double-chocolate-layer-cake-101275'
formula:
  version: 1
  yield:
    amount: 12
    max: 14
    unit: portion
  components:
    - id: cake
      name: Cake layers
      ingredients:
        - id: pan-fat
          key: butter-or-neutral-oil
          name: butter or neutral oil
          stepName: fat for the pans
          allowance: for greasing the pans and parchment
          uses:
            - step: pans
              share: 1
        - id: chocolate
          key: semisweet-chocolate
          name: semisweet chocolate
          quantity:
            amount: 3
            unit: oz
          preparation: finely chopped
          uses:
            - step: chocolate-coffee
              share: 1
        - id: coffee
          key: brewed-coffee
          name: hot brewed coffee
          quantity:
            amount: 1 1/2
            unit: cup
          uses:
            - step: chocolate-coffee
              share: 1
        - id: sugar
          key: granulated-sugar
          name: granulated sugar
          quantity:
            amount: 3
            unit: cup
          uses:
            - step: dry
              share: 1
        - id: flour
          key: all-purpose-flour
          name: all-purpose flour
          quantity:
            amount: 2 1/2
            unit: cup
          uses:
            - step: dry
              share: 1
        - id: cocoa
          key: natural-cocoa-powder
          name: natural cocoa powder (not Dutch-process)
          quantity:
            amount: 1 1/2
            unit: cup
          uses:
            - step: dry
              share: 1
        - id: baking-soda
          key: baking-soda
          name: baking soda
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: dry
              share: 1
        - id: baking-powder
          key: baking-powder
          name: baking powder
          quantity:
            amount: 3/4
            unit: tsp
          uses:
            - step: dry
              share: 1
        - id: salt
          key: sea-salt
          name: sea salt
          quantity:
            amount: 1 1/4
            unit: tsp
          uses:
            - step: dry
              share: 1
        - id: eggs
          key: large-eggs
          name: large egg
          quantity:
            amount: 3
            unit: count
          plural: large eggs
          uses:
            - step: eggs
              share: 1
        - id: oil
          key: vegetable-oil
          name: vegetable oil
          quantity:
            amount: 3/4
            unit: cup
          uses:
            - step: liquids
              share: 1
        - id: buttermilk
          key: buttermilk
          name: buttermilk
          quantity:
            amount: 1 1/2
            unit: cup
          preparation: well-shaken
          uses:
            - step: liquids
              share: 1
        - id: vanilla
          key: vanilla-extract
          name: vanilla extract
          quantity:
            amount: 3/4
            unit: tsp
          uses:
            - step: liquids
              share: 1
    - id: ganache
      name: Ganache frosting
      ingredients:
        - id: chocolate
          key: semisweet-chocolate
          name: semisweet chocolate
          quantity:
            amount: 1
            unit: lb
          preparation: finely chopped
          uses:
            - step: ganache-chocolate
              share: 1
        - id: cream
          key: heavy-cream
          name: heavy cream
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: heat-cream
              share: 1
        - id: sugar
          key: granulated-sugar
          name: granulated sugar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: heat-cream
              share: 1
        - id: corn-syrup
          key: light-corn-syrup
          name: light corn syrup
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: heat-cream
              share: 1
        - id: butter
          key: unsalted-butter
          name: unsalted butter
          quantity:
            amount: 1/4
            unit: cup
          preparation: cubed
          uses:
            - step: finish-ganache
              share: 1
  steps:
    - id: pans
      title: Prepare the pans
      text: >-
        Heat the oven to 300°F. Grease two 10-inch round cake pans, each 2 inches deep, with
        {{ingredients}}. Line the bottoms with parchment and grease the parchment.
    - id: chocolate-coffee
      title: Melt the chocolate
      text: 'Stir {{ingredients}} together in a bowl until smooth. Let it cool.'
    - id: dry
      title: Sift the dry ingredients
      text: 'Sift {{ingredients}} together into a large bowl.'
    - id: eggs
      title: Beat the eggs
      text: >-
        In a stand mixer, beat {{ingredients}} on medium-high until thickened and pale yellow, about
        3 minutes.
    - id: liquids
      title: Add the liquids
      text: >-
        With the mixer running, slowly add the cooled chocolate coffee, then {{ingredients}}. Beat
        until combined.
    - id: combine
      title: Mix the batter
      text: >-
        Add the dry ingredients and beat on medium speed just until combined, scraping the bowl. The
        batter will be thin.
    - id: bake
      title: Bake
      text: >-
        Divide the batter between the pans. Bake in the middle of the oven until a tester in the
        center comes out clean, 60 to 70 minutes.
    - id: cool
      title: Cool the layers
      text: >-
        Cool the layers completely in their pans on a rack, about 2 hours. Run a thin knife around
        the edges, turn the layers out and peel off the parchment.
    - id: heat-cream
      title: Heat the cream
      text: >-
        While the layers cool, bring {{ingredients}} to a boil in a small saucepan over medium-low
        heat, whisking until the sugar dissolves. Take it off the heat.
    - id: ganache-chocolate
      title: Melt the ganache
      text: 'Add {{ingredients}} to the hot cream. Let it sit 5 minutes, then whisk until smooth.'
    - id: finish-ganache
      title: Cool the ganache
      text: >-
        Whisk in {{ingredients}} until glossy. Pour the ganache into a shallow bowl and let it cool,
        stirring now and then, until thick and spreadable, 1 to 2 hours. If it stays loose, chill it
        for a few minutes at a time.
    - id: assemble
      title: Frost the cake
      text: >-
        Set one layer on a plate and spread it with ganache. Top with the second layer and frost the
        top and sides. Let the frosting set for 1 hour before slicing.
learning:
  techniques:
    - temperature
  storage: >-
    Keeps 3 days covered in the fridge. Let slices sit out 30 minutes before serving. The unfrosted
    layers can be baked a day ahead and kept well wrapped at room temperature.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

This towering chocolate cake was a Gourmet favorite from 1999. Chocolate melted into hot coffee gives the layers their deep, dark flavor, and a slow bake at 300°F keeps the thin batter moist and flat on top. A little corn syrup keeps the ganache glossy and soft for days.

## Directions

1. **Prepare the pans:** Heat the oven to 300°F. Grease two 10-inch round cake pans, each 2 inches deep, with the fat for the pans. Line the bottoms with parchment and grease the parchment.
2. **Melt the chocolate:** Stir the hot brewed coffee and 3 oz of the semisweet chocolate together in a bowl until smooth. Let it cool.
3. **Sift the dry ingredients:** Sift the flour, natural cocoa powder, baking soda, baking powder, salt, and 3 cups of the sugar together into a large bowl.
4. **Beat the eggs:** In a stand mixer, beat the eggs on medium-high until thickened and pale yellow, about 3 minutes.
5. **Add the liquids:** With the mixer running, slowly add the cooled chocolate coffee, then the oil, buttermilk, and vanilla. Beat until combined.
6. **Mix the batter:** Add the dry ingredients and beat on medium speed just until combined, scraping the bowl. The batter will be thin.
7. **Bake:** Divide the batter between the pans. Bake in the middle of the oven until a tester in the center comes out clean, 60 to 70 minutes.
8. **Cool the layers:** Cool the layers completely in their pans on a rack, about 2 hours. Run a thin knife around the edges, turn the layers out and peel off the parchment.
9. **Heat the cream:** While the layers cool, bring the heavy cream, light corn syrup, and 2 tbsp of the sugar to a boil in a small saucepan over medium-low heat, whisking until the sugar dissolves. Take it off the heat.
10. **Melt the ganache:** Add 1 lb of the semisweet chocolate to the hot cream. Let it sit 5 minutes, then whisk until smooth.
11. **Cool the ganache:** Whisk in the butter until glossy. Pour the ganache into a shallow bowl and let it cool, stirring now and then, until thick and spreadable, 1 to 2 hours. If it stays loose, chill it for a few minutes at a time.
12. **Frost the cake:** Set one layer on a plate and spread it with ganache. Top with the second layer and frost the top and sides. Let the frosting set for 1 hour before slicing.
