---
miseId: fcad1fcc-708a-4147-b911-347f409d634f
title: Chocolate Mug Cake
difficulty: intermediate
cookingMethods:
  - mix
dietary:
  - vegetarian
occasions:
  - quick-lunch
  - comfort-food
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: poor
equipment:
  - microwave
flavorProfile:
  - sweet
  - rich
cuisines:
  - American
role: dessert
vibe: technical
prepTime: 1 min
cookTime: 70 sec at 950 W; adjust to the microwave
totalTime: 'About 3 min, plus any additional heating or cooling'
servings: 1 portion
ingredients:
  - '--- Mug-cake batter ---'
  - 1/4 cup all-purpose flour
  - 2 tbsp unsweetened cocoa powder
  - 2 tbsp granulated sugar
  - 1/4 tsp baking powder
  - '5 tbsp milk, the original ¼ cup plus 1 tbsp total'
  - 2 tbsp vegetable oil
  - 1 tbsp chocolate-hazelnut spread
  - 'sea salt, a pinch'
  - '--- Optional extra sweetness and finish ---'
  - '1 tbsp additional granulated sugar, only for the sweeter option, optional'
  - 'powdered sugar, a light dusting after cooking, if desired, optional'
pairsWith:
  - apple-cider-cream-pie
  - apple-pie
  - babys-first-smash-cake
  - best-cinnamon-roll-recipe-cinnabon-copycat
source: Adapted from Tablefortwoblog.com
sourceUrl: 'https://www.tablefortwoblog.com/the-moistest-chocolate-mug-cake/'
formula:
  version: 1
  yield:
    amount: 1
    unit: portion
  components:
    - id: cake
      name: Mug-cake batter
      ingredients:
        - id: flour
          key: flour
          name: all-purpose flour
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: dry
              share: 1
        - id: cocoa
          key: cocoa
          name: unsweetened cocoa powder
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: dry
              share: 1
        - id: sugar
          key: sugar
          name: granulated sugar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: dry
              share: 1
        - id: powder
          key: powder
          name: baking powder
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: dry
              share: 1
        - id: milk
          key: milk
          name: milk
          quantity:
            amount: 5
            unit: tbsp
          uses:
            - step: wet
              share: 1
          preparation: the original ¼ cup plus 1 tbsp total
        - id: oil
          key: oil
          name: vegetable oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: wet
              share: 1
        - id: spread
          key: spread
          name: chocolate-hazelnut spread
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: center
              share: 1
        - id: salt
          key: salt
          name: sea salt
          allowance: a pinch
          uses:
            - step: dry
              share: 1
    - id: options
      name: Optional extra sweetness and finish
      ingredients:
        - id: sugar
          key: sugar
          name: additional granulated sugar
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: dry
              share: 1
          optional: true
          preparation: only for the sweeter option
        - id: powdered
          key: powdered
          name: powdered sugar
          allowance: 'a light dusting after cooking, if desired'
          uses:
            - step: serve
              share: 1
          optional: true
          role: garnish
  steps:
    - id: dry
      title: Mix dry ingredients
      text: >-
        Whisk {{ingredients}} in the microwave-safe mug until evenly combined;
        include the additional sugar only if choosing the sweeter option. For
        the original single-cake batch use a microwave-safe mug with about 14 fl
        oz capacity and enough headspace for rising.
    - id: wet
      title: Add milk and oil
      text: >-
        Whisk in {{ingredients}} with a fork until no flour or cocoa pockets
        remain, including at the bottom of the mug. The listed milk total is 5
        tbsp in the original batch, exactly ¼ cup plus 1 tbsp.
    - id: center
      title: Add the center
      text: >-
        Drop {{ingredients}} in the center on top of the batter. Do not stir it
        through or push it down.
    - id: cook
      title: Microwave
      text: >-
        Microwave one original-size mug on high for the source reference of 70
        seconds at 950 watts. Different power, mug shape or batter volume needs
        adjustment; this is not a universal finishing clock. If using a paper
        towel beneath the mug to catch drips, first confirm that the microwave
        instructions permit it. Check that the cake around the spread has set
        rather than remaining liquid batter; do not confuse melted spread with
        uncooked batter. Continue cooking as needed according to the appliance
        instructions. For multiple cakes, divide into individual original-size
        mugs and cook separately rather than placing doubled batter in this mug.
    - id: stand
      title: Stand
      text: >-
        Remove carefully; the mug can be very hot. Let stand for the listed one
        minute, then check that the cake is cooked through and cool enough to
        eat. The standing minute is additional to the heating time. Smaller
        scaled quantities also change heating behavior; they do not inherit the
        original mug’s clock.
    - id: serve
      title: Serve
      text: >-
        Dust with {{ingredients}} if desired. Eat freshly made; further cooling
        may be needed before serving.
learning:
  focus: >-
    Relating a single-mug heating reference to actual microwave power and cake
    doneness.
  outcome: >-
    A cooked flour cake surrounding its melted chocolate center, with no dry
    pockets or liquid batter.
  techniques:
    - temperature
    - leavening
  before:
    - >-
      Use a microwave-safe mug with enough headspace; the original single-cake
      reference uses about 14 fl oz. Microwave capacity is not a request to fill
      the mug to its rim.
    - >-
      The 70-second reference is for 950 W/high power. Two or more portions need
      individual mugs and separate heating; small scaled quantities also need
      their own checks.
    - >-
      Do not taste raw batter. Wash hands and tools after handling raw flour or
      eggs.
  checkpoints:
    - step: 2
      cue: No dry flour or cocoa pockets at the mug bottom.
      why: >-
        A narrow mug makes it easy to mix the top while leaving unmixed powder
        below.
    - step: 4
      cue: Cake around the melted center is set rather than liquid batter.
      why: >-
        The spread can remain melted even when the surrounding cake is cooked;
        the reference time is appliance-specific.
    - step: 5
      cue: 'One-minute stand, then a cooked-through cake cool enough to eat.'
      why: >-
        The mug and filling can remain hot after microwave heating, and the
        stand extends elapsed time.
  troubleshooting:
    - problem: Center looks liquid after heating.
      cause: >-
        Melted spread may be confused with uncooked flour batter, or heating may
        be insufficient.
      fix: >-
        Check the surrounding cake; continue heating as needed for the actual
        appliance if batter remains liquid. Do not taste raw batter to judge it.
    - problem: Cake is dry or rubbery.
      cause: The original reference overcooked this mug/power/volume.
      fix: >-
        On the next batch adjust heating for that appliance and mug, checking
        the cake rather than treating 70 seconds as a universal clock. Do not
        dilute the full formula to correct an overcooking issue.
  substitutions:
    - ingredient: Chocolate-hazelnut spread
      alternative: 'Same listed amount of mini chocolate chips, or omit the center'
      effect: >-
        Exclusive source center choices; keep the full remaining batter and
        adjust actual microwave checks.
    - ingredient: Sea-salt pinch
      alternative: '⅛ tsp kosher salt in the original batch, proportionally scaled'
      effect: >-
        A distinct measured publisher alternative, not an equal-volume sea-salt
        conversion.
  storage: >-
    Best eaten freshly made after the stand and sufficient cooling. No leftover
    quality or freezer duration is supplied. Follow product instructions for
    milk and any unheated perishable additions; do not keep unused milk batter
    out for prolonged periods.
  timing: >-
    One minute of preparation plus the 70-second source heating reference and
    the existing one-minute stand totals 190 seconds, approximately 3 minutes 10
    seconds. Additional microwave heating and cooling extend that plan. The
    publisher’s two-minute label excludes this version’s separate one-minute
    stand.
  sources:
    - title: 'Table for Two / Julie Chiou — wattage, mug capacity and complete options'
      url: 'https://www.tablefortwoblog.com/the-moistest-chocolate-mug-cake/'
    - title: FDA — cook flour batter and avoid raw tasting
      url: >-
        https://www.fda.gov/food/buy-store-serve-safe-food/handling-flour-safely-what-you-need-know
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

The chocolate-hazelnut spread is dropped onto the center without stirring, while the surrounding flour batter must cook through. The publisher’s 70-second reference is for a 950-watt microwave, and another microwave took 90 seconds. Mug shape and batter volume also matter, so use the reference with the actual appliance instructions and check the cake around the melted center.

## Directions

1. **Mix dry ingredients:** Whisk all-purpose flour, unsweetened cocoa powder, granulated sugar, baking powder, sea salt, and additional granulated sugar (if using) in the microwave-safe mug until evenly combined; include the additional sugar only if choosing the sweeter option. For the original single-cake batch use a microwave-safe mug with about 14 fl oz capacity and enough headspace for rising.
2. **Add milk and oil:** Whisk in milk and vegetable oil with a fork until no flour or cocoa pockets remain, including at the bottom of the mug. The listed milk total is 5 tbsp in the original batch, exactly ¼ cup plus 1 tbsp.
3. **Add the center:** Drop chocolate-hazelnut spread in the center on top of the batter. Do not stir it through or push it down.
4. **Microwave:** Microwave one original-size mug on high for the source reference of 70 seconds at 950 watts. Different power, mug shape or batter volume needs adjustment; this is not a universal finishing clock. If using a paper towel beneath the mug to catch drips, first confirm that the microwave instructions permit it. Check that the cake around the spread has set rather than remaining liquid batter; do not confuse melted spread with uncooked batter. Continue cooking as needed according to the appliance instructions. For multiple cakes, divide into individual original-size mugs and cook separately rather than placing doubled batter in this mug.
5. **Stand:** Remove carefully; the mug can be very hot. Let stand for the listed one minute, then check that the cake is cooked through and cool enough to eat. The standing minute is additional to the heating time. Smaller scaled quantities also change heating behavior; they do not inherit the original mug’s clock.
6. **Serve:** Dust with powdered sugar (if using) if desired. Eat freshly made; further cooling may be needed before serving.

## Cooking Notes

### Center and salt options

Keep the full listed chocolate-hazelnut center for the main version. The same listed amount of mini chocolate chips may replace it, or the center may be omitted; the rest of the full batter stays unchanged. Other spreads are named possibilities without a measured heating plan here.

The sweeter option uses the separate optional sugar amount in the dry mixture. This version uses a pinch of sea salt. The publisher specifies ⅛ tsp kosher salt for its original single-cake batch; scale that measured source alternative proportionally if selected INSTEAD of the sea-salt pinch, not in addition. Do not assume the sea-salt pinch and kosher-salt spoon volume are equal.

The cake is written for microwave cooking. No oven temperature or time is supplied. Self-rising flour is not a recommended replacement for the listed flour and powder. The original bowl-mixing route is also available: whisk all dry ingredients in a bowl, whisk in all milk and oil, pour into the mug, add the center, then use the same microwave checks.
