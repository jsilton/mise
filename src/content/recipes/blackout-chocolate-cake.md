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
cookTime: 30–35 min
totalTime: 'About 4 hours (includes cooling, assembly and chilling)'
servings: 10 portions
pairsWith:
  - apple-cider-cream-pie
  - apple-pie
  - classic-peach-ice-cream
  - cranberry-crunch
ingredients:
  - '--- Chocolate cake ---'
  - 'butter or neutral oil, for greasing the pans and parchment'
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
  - 1 1/2 tsp sea salt
  - '--- Chocolate cream-cheese frosting ---'
  - '1 1/2 cups butter, softened, not melted'
  - '8 oz cream cheese, softened'
  - 1 1/2 cups unsweetened cocoa powder
  - 1 tbsp vanilla extract
  - 'salt, a pinch'
  - 7 cups powdered sugar
  - 1/4 cup heavy cream
  - '--- Chocolate coating and drizzle ---'
  - 3–4 cups chocolate chips
  - 'additional chocolate, for melting and drizzling, optional'
origin: United States
source: Adapted from Pinchofyum.com
sourceUrl: 'http://pinchofyum.com/blackout-chocolate-cake'
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
          allowance: for greasing the pans and parchment
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
          name: sea salt
          quantity:
            amount: 1 1/2
            unit: tsp
          uses:
            - step: dry
              share: 1
    - id: frosting
      name: Chocolate cream-cheese frosting
      ingredients:
        - id: butter
          key: butter
          name: butter
          quantity:
            amount: 1 1/2
            unit: cup
          preparation: 'softened, not melted'
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
            - step: frosting
              share: 1
        - id: vanilla
          key: vanilla-extract
          name: vanilla extract
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: frosting
              share: 1
        - id: salt
          key: salt
          name: salt
          allowance: a pinch
          uses:
            - step: frosting
              share: 1
        - id: sugar
          key: powdered-sugar
          name: powdered sugar
          quantity:
            amount: 7
            unit: cup
          uses:
            - step: frosting
              share: 1
        - id: cream
          key: cream
          name: heavy cream
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: frosting
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
          name: additional chocolate
          allowance: for melting and drizzling
          optional: true
          role: garnish
          uses:
            - step: drizzle
              share: 1
  steps:
    - id: prepare
      title: Prepare the pans
      text: >-
        Preheat the oven to 350°F. Use {{ingredients}} to grease three 9-inch round cake pans, line
        their bottoms with parchment and grease the parchment. Check that the pans fit in the oven
        with space for air to circulate; if baking in batches, allow extra time.
    - id: bloom
      title: Bloom and cool the cocoa
      text: >-
        Whisk the cake’s {{ingredients}} together in a heatproof bowl until smooth. Let stand
        briefly, then cool until lukewarm before adding the eggs.
    - id: wet
      title: Mix the liquids
      text: 'Whisk the cake’s {{ingredients}} into the cooled cocoa mixture until evenly combined.'
    - id: dry
      title: Mix the dry ingredients
      text: 'In another large bowl, whisk the cake’s {{ingredients}} thoroughly, breaking up lumps.'
    - id: combine
      title: Combine the batter
      text: >-
        Fold the dry mixture into the chocolate mixture just until no dry pockets remain. Divide
        evenly among the prepared pans.
    - id: bake
      title: Bake and cool
      text: >-
        Bake for about 30–35 minutes, until the layers are set, the centers spring back lightly and
        a tester has no wet batter. Cool on racks for about 10 minutes in the pans, loosen the edges
        and turn out carefully. Remove the parchment and let cool completely.
    - id: frosting
      title: Make the frosting
      text: >-
        While the layers cool, beat the frosting’s {{ingredients}} until smooth: cream the softened
        butter and cream cheese first, mix in cocoa, vanilla and salt, then add powdered sugar
        gradually on low speed with the heavy cream. Beat until spreadable.
    - id: assemble
      title: Stack and chill
      text: >-
        Place one completely cooled layer on a cake board or serving plate. Spread frosting between
        the layers and over the top and sides. Refrigerate for 30 minutes to firm the frosting
        before applying the chocolate coating.
    - id: chips
      title: Coat with chocolate chips
      text: >-
        Gently press the {{ingredients}} into the chilled cake’s sides over a tray to catch loose
        chips. Use as much of the listed coating allowance as needed for coverage; the remainder can
        be served alongside or saved separately.
    - id: drizzle
      title: Finish and serve
      text: >-
        Melt {{ingredients}} and drizzle over the top. Let the cake lose its refrigerator chill
        before slicing; for cleaner cuts, slice before a chocolate drizzle hardens.
learning:
  focus: Control temperature while building a cocoa batter and assembling a frosted layer cake.
  outcome: >-
    Three fully set chocolate layers, smooth tangy frosting and a chip coating that adheres without
    sliding.
  techniques:
    - leavening
    - temperature
  before:
    - >-
      Use three matching 9-inch round cake pans, parchment and racks. Check oven space before
      mixing; additional oven batches extend the schedule.
    - >-
      Measure cake cocoa and vanilla separately from frosting cocoa and vanilla. The chip coating
      and optional drizzle are separate chocolate allowances.
    - >-
      For multiples, make separate original-size cakes with the stated number and size of pans so
      layer depth stays the same. A smaller batch needs appropriately smaller pans and earlier
      center checks; do not put a reduced batch into the original pans and assume the original bake
      time. Pan dimensions and baking time do not multiply with portions.
  checkpoints:
    - step: 2
      cue: The cocoa mixture is smooth and has cooled to lukewarm before eggs are added.
      why: >-
        Boiling liquid can set the eggs locally, producing cooked flecks instead of a uniform
        batter.
    - step: 6
      cue: The center is set and the tester has no wet batter.
      why: Dark color makes browning an unreliable doneness cue; check the center of each layer.
    - step: 8
      cue: The layers are cool and the chilled frosting is firm enough to handle gently.
      why: Warm cake melts the frosting; a short assembly chill makes the chip coating easier to apply.
  troubleshooting:
    - problem: Cooked egg flecks appear in the batter
      cause: The cocoa mixture was still too hot when the eggs were added.
      fix: >-
        Do not add more heat. For a smooth layer cake, remake the batter and cool the cocoa mixture
        first; mixing cannot uncook the egg.
    - problem: Chips slide down the sides
      cause: The frosting or cake is too warm.
      fix: >-
        Return the assembled cake to the refrigerator until the frosting firms, then press the chips
        on gently.
    - problem: Cake is dry at the edges but wet in the center
      cause: 'Layers differ in depth, or oven space is too crowded.'
      fix: >-
        Check each layer separately and continue baking any wet center. On the next batch divide
        batter evenly and leave circulation space.
  substitutions:
    - ingredient: Chocolate cream-cheese frosting
      alternative: Rich chocolate ganache
      effect: >-
        The flavor is less tangy and the coating sets differently. Use a separately measured ganache
        formula sized for three 9-inch layers and follow its chilling and storage instructions.
  timing: >-
    Plan about 4 hours from ready ingredients: around 45 minutes active preparation and assembly,
    30–35 minutes baking, complete rack cooling and a 30-minute assembled-cake chill. Make the
    frosting while the layers cool. Cocoa cooling and extra oven batches can extend the schedule.
  storage: >-
    Refrigerate the cream-cheese-frosted cake, covered, at 40°F or below; use within 3–4 days. Count
    frosting-ingredient softening, assembly and service toward a maximum of 2 hours unrefrigerated,
    or 1 hour above 90°F. Let only the portions being served lose their chill; return the rest
    promptly. Freeze individually wrapped slices for longer storage and thaw in the refrigerator.
  sources:
    - title: 'Lindsay Ostrom — Blackout Chocolate Cake, Pinch of Yum'
      url: 'https://pinchofyum.com/blackout-chocolate-cake'
    - title: 'Molly Marzalek-Kelly — Cute and Small Chocolate Cake, King Arthur Baking'
      url: 'https://www.kingarthurbaking.com/recipes/cute-and-small-chocolate-cake-recipe'
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

This three-layer chocolate cake combines cocoa and espresso with tangy Greek yogurt, chocolate cream-cheese frosting and a chocolate-chip coating. Whisk the hot cocoa mixture smooth, then let it cool before the eggs enter; cool the baked layers completely so the frosting holds its shape.

## Directions

1. **Prepare the pans:** Preheat the oven to 350°F. Use butter or neutral oil to grease three 9-inch round cake pans, line their bottoms with parchment and grease the parchment. Check that the pans fit in the oven with space for air to circulate; if baking in batches, allow extra time.
2. **Bloom and cool the cocoa:** Whisk the cake’s boiling water, unsweetened cocoa powder, and instant espresso powder together in a heatproof bowl until smooth. Let stand briefly, then cool until lukewarm before adding the eggs.
3. **Mix the liquids:** Whisk the cake’s plain full-fat Greek yogurt, vegetable oil, large eggs, and vanilla extract into the cooled cocoa mixture until evenly combined.
4. **Mix the dry ingredients:** In another large bowl, whisk the cake’s all-purpose flour, granulated sugar, baking soda, baking powder, and sea salt thoroughly, breaking up lumps.
5. **Combine the batter:** Fold the dry mixture into the chocolate mixture just until no dry pockets remain. Divide evenly among the prepared pans.
6. **Bake and cool:** Bake for about 30–35 minutes, until the layers are set, the centers spring back lightly and a tester has no wet batter. Cool on racks for about 10 minutes in the pans, loosen the edges and turn out carefully. Remove the parchment and let cool completely.
7. **Make the frosting:** While the layers cool, beat the frosting’s butter, cream cheese, unsweetened cocoa powder, vanilla extract, salt, powdered sugar, and heavy cream until smooth: cream the softened butter and cream cheese first, mix in cocoa, vanilla and salt, then add powdered sugar gradually on low speed with the heavy cream. Beat until spreadable.
8. **Stack and chill:** Place one completely cooled layer on a cake board or serving plate. Spread frosting between the layers and over the top and sides. Refrigerate for 30 minutes to firm the frosting before applying the chocolate coating.
9. **Coat with chocolate chips:** Gently press the chocolate chips into the chilled cake’s sides over a tray to catch loose chips. Use as much of the listed coating allowance as needed for coverage; the remainder can be served alongside or saved separately.
10. **Finish and serve:** Melt additional chocolate (if using) and drizzle over the top. Let the cake lose its refrigerator chill before slicing; for cleaner cuts, slice before a chocolate drizzle hardens.

## Cooking Notes

A rich chocolate ganache can replace the cream-cheese frosting. Use a complete ganache recipe with enough coverage for three 9-inch layers; its setting time and storage guidance may differ. The optional chocolate drizzle is additional to the chip coating.
