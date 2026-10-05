---
title: Homemade Pizza Night
origin: Italian-American home cooking
difficulty: intermediate
cookingMethods:
  - bake
  - no-cook
  - assemble
dietary:
  - vegetarian-option
occasions:
  - weeknight
  - family-meal
  - kid-friendly
  - entertaining
flavorProfile:
  - savory
  - umami
  - fresh
cuisines:
  - Italian
  - American
role: main
vibe: comfort
prepTime: 45 min
cookTime: 60 min
totalTime: 21 hours
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
advancePrep:
  - rest-dough
  - components-ahead
equipment:
  - kitchen-scale
  - mixing-bowl
  - two-oven-rated-pizza-pans
  - oven
  - pizza-stone-and-peel-optional
pairsWith:
  - everyday-arugula-salad
  - coleslaw
ingredients:
  - '--- Overnight dough ---'
  - 500 g all-purpose flour
  - '350 g water, at room temperature'
  - '16 g fine sea salt, weighed'
  - 1 g (1/4 tsp) active-dry yeast
  - '--- Sauce batch; use part and save the rest ---'
  - '1 can (28 oz) whole peeled tomatoes, crushed by hand with their juices'
  - 2 tbsp olive oil
  - '3 garlic cloves, minced'
  - 1/2 tsp fine salt
  - '1/4 tsp red pepper flakes, optional'
  - 'fresh basil, a few torn leaves, to taste, optional'
  - '--- Cheese, handling and optional toppings ---'
  - '12 oz fresh mozzarella, torn small, drained and blotted dry'
  - '1 oz Parmesan, finely grated'
  - 'flour, for lightly dusting the work surface during portioning'
  - 'flour, for dusting the work surface and peel, as needed'
  - 'olive oil, for lightly oiling the pans, if using the pan route, optional'
  - 'prepared pizza toppings, a sparse single layer, as desired, optional'
  - 'fresh basil, a few leaves, to taste, optional'
description: >-
  Overnight no-knead dough, tomato sauce and a mozzarella-Parmesan topping bar, baked as four
  personal pizzas.
scaling:
  mode: fixed
  reason: >-
    The dough makes four 10-inch pizzas or two 14-inch pizzas with matched topping portions. Use the
    complete batch and its specified geometry; baking and fermentation times do not scale
    arithmetically.
source: 'Dough adapted from Jim Lahey, published by J. Kenji López-Alt in Serious Eats'
sourceUrl: 'https://www.seriouseats.com/jim-laheys-no-knead-pizza-dough-recipe'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: dough
      name: Overnight dough
      ingredients:
        - id: flour
          key: flour
          name: all-purpose flour
          quantity:
            amount: 500
            unit: g
          uses:
            - step: mix
              share: 1
        - id: water
          key: water
          name: water
          quantity:
            amount: 350
            unit: g
          uses:
            - step: mix
              share: 1
          preparation: at room temperature
        - id: fine-sea-salt
          key: fine-sea-salt
          name: fine sea salt
          quantity:
            amount: 16
            unit: g
          uses:
            - step: mix
              share: 1
          preparation: weighed
        - id: active-dry-yeast
          key: active-dry-yeast
          name: active-dry yeast
          quantity:
            amount: 1
            unit: g
          uses:
            - step: mix
              share: 1
          equivalents:
            - amount: 1/4
              unit: tsp
    - id: sauce
      name: Sauce batch; use part and save the rest
      ingredients:
        - id: tomatoes
          key: tomatoes
          name: whole peeled tomatoes
          quantity:
            amount: 1
            unit: can
          uses:
            - step: sauce
              share: 1
          packageSize:
            amount: 28
            unit: oz
          preparation: crushed by hand with their juices
        - id: olive-oil
          key: olive-oil
          name: olive oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: sauce
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: fine-salt
          key: fine-salt
          name: fine salt
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: pepper-flakes
          key: pepper-flakes
          name: red pepper flakes
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: sauce
              share: 1
          optional: true
        - id: sauce-basil
          key: sauce-basil
          name: fresh basil
          allowance: 'a few torn leaves, to taste'
          uses:
            - step: sauce
              share: 1
          optional: true
    - id: assembly
      name: 'Cheese, handling and optional toppings'
      ingredients:
        - id: mozzarella
          key: mozzarella
          name: fresh mozzarella
          quantity:
            amount: 12
            unit: oz
          uses:
            - step: top
              share: 1
          preparation: 'torn small, drained and blotted dry'
        - id: parmesan
          key: parmesan
          name: Parmesan
          quantity:
            amount: 1
            unit: oz
          uses:
            - step: top
              share: 1
          preparation: finely grated
        - id: portion-flour
          key: flour
          name: flour
          allowance: for lightly dusting the work surface during portioning
          uses:
            - step: portion
              share: 1
        - id: dusting-flour
          key: dusting-flour
          name: flour
          allowance: 'for dusting the work surface and peel, as needed'
          uses:
            - step: shape
              share: 1
        - id: pan-oil
          key: pan-oil
          name: olive oil
          allowance: 'for lightly oiling the pans, if using the pan route'
          uses:
            - step: shape
              share: 1
          optional: true
        - id: prepared-toppings
          key: prepared-toppings
          name: prepared pizza toppings
          allowance: 'a sparse single layer, as desired'
          uses:
            - step: top
              share: 1
          optional: true
        - id: finishing-basil
          key: finishing-basil
          name: fresh basil
          allowance: 'a few leaves, to taste'
          uses:
            - step: finish
              share: 1
          optional: true
  steps:
    - id: mix
      title: Mix the dough
      text: >-
        Combine {{ingredients}} until no dry flour remains. The dough will be sticky. Cover the
        bowl; no kneading is needed.
    - id: rise
      title: Ferment overnight
      text: >-
        Let the covered dough rise around 72°F / 22°C until it is bubbly and more than doubled,
        approximately 18 hours. Check earlier in a warm room and allow longer in a cool one. When
        ready, portion it as below; do not extend the room-temperature rise blindly to two days.
    - id: portion
      title: Portion and relax
      text: >-
        Lightly dust the work surface with {{ingredients}}. For four 10-inch pizzas, divide the
        dough into four equal portions, approximately 217 g each. For two 14-inch pizzas, divide
        into two approximately 434 g portions instead. Fold the edges underneath to make rounded
        balls without flattening out all the gas. Cover and rest about 1 hour until pliable.
        Alternatively, cover the risen, portioned dough individually and refrigerate up to 3 days;
        on baking day allow the covered balls about 2–3 hours at room temperature to relax instead
        of the one-hour rest. Prepare the oven and toppings during the last hour.
    - id: heat
      title: Set up the oven
      text: >-
        Heat the oven to 500°F. For the pan route, use two room-temperature metal pans rated for
        that temperature, with enough flat area for the chosen diameter, and bake one at a time on
        the middle rack. A 14-inch round requires a suitably large round pan; do not assume it fits
        a standard baking sheet. For the stone route, put a suitably rated stone in the cold oven
        and preheat it for 1 hour; the stone and peel must fit the chosen diameter. Neither route
        uses parchment. Keep used pans aside to cool before reloading.
    - id: sauce
      title: Cook the sauce batch
      text: >-
        Have {{ingredients}} ready. Warm the oil over medium-low heat, add the garlic and cook 30–45
        seconds until fragrant but not browned. Stir in the tomatoes, salt and optional pepper
        flakes. Simmer 10–15 minutes, stirring, until spreadable without a puddle of loose liquid;
        add the optional basil at the end. Let cool enough to handle. Measure 3/4 cup for the full
        pizza batch and refrigerate the surplus promptly; the whole can is not meant to go onto the
        pizzas. If using prepared sauce instead, omit this entire sauce component and measure 3/4
        cup thick pizza sauce.
    - id: shape
      title: Shape one pizza
      text: >-
        Use {{ingredients}} as needed. Stretch one ball to its chosen 10-inch or 14-inch diameter,
        leaving a thicker rim. Cover and wait another 10 minutes if it springs back. Move the
        untopped round onto a lightly oiled cool pan, or a lightly floured peel and confirm it
        slides. Keep unused dough covered and prepared perishable toppings chilled.
    - id: top
      title: Allocate cheese and toppings
      text: >-
        Divide {{ingredients}} into four sets for small pizzas or two sets for large ones. Each
        10-inch pizza gets 3 tbsp prepared sauce, 3 oz mozzarella and 1/4 oz Parmesan; each 14-inch
        pizza gets 6 tbsp sauce, 6 oz mozzarella and 1/2 oz Parmesan. Spread its sauce leaving a
        1/2- to 3/4-inch rim. Add half of that pizza’s mozzarella, a sparse layer of the chosen
        toppings, then its remaining mozzarella and its full Parmesan portion. On a peel, check
        again that it slides and bake immediately. Use ready-to-eat pepperoni or fully cooked
        sausage, bacon or chicken; thinly slice quick-cooking vegetables, cook and cool mushrooms
        first, and drain wet toppings. Keep perishable toppings chilled until assembly.
    - id: bake
      title: Bake one at a time
      text: >-
        Put the pan on the middle rack, or launch directly onto the stone. Start checking at 10
        minutes; roughly 12–15 minutes is a guide, not a fixed endpoint for every size, cheese and
        baking surface. The underside should be browned, the center set and the rim golden, with
        melted cheese. Rotate safely with the pan or peel if browning is uneven, and allow longer if
        the bottom is pale. Keep the oven on between pizzas and give a stone about 5 minutes to
        recover.
    - id: finish
      title: Finish and serve in rounds
      text: >-
        Add {{ingredients}} after baking. Rest the pizza on a rack for 2–3 minutes, cut and serve.
        Shape, top and bake each remaining pizza separately, using its assigned sauce and cheese.
        Alternate pans and let them cool before reloading; never assemble on a hot pan. Four pizzas
        mean four oven rounds, not one 15-minute bake.
learning:
  focus: 'Match weighed dough, fermentation and pizza size'
  outcome: >-
    An airy, stretchable dough baked into a browned base with melted cheese and evenly distributed
    toppings.
  techniques:
    - leavening
    - browning
  before:
    - >-
      Weigh the dough ingredients. This is a 70% hydration dough; adding water by an unrelated cup
      conversion changes its handling.
    - >-
      Choose four 10-inch pizzas or two 14-inch pizzas before portioning; check the pan or stone
      fits. The total cheese and sauce used remain the same.
    - >-
      Optional toppings: ready-to-eat pepperoni, thin red onion or bell pepper, cooked and cooled
      mushrooms, prepared caramelized onions, fully cooked sausage or bacon, cooked chicken, roasted
      garlic, dry spinach, drained artichokes or a few blotted tomato slices. Choose a sparse layer
      rather than every option. Preparing these is additional unless already done.
  checkpoints:
    - step: 2
      cue: 'Dough is aerated and more than doubled, rather than simply old enough.'
      why: Room temperature changes fermentation speed; the clock alone does not establish readiness.
    - step: 7
      cue: 'Each pizza has its own measured cheese and sauce set, with no pile of wet toppings.'
      why: >-
        Dividing first prevents using the entire batch’s cheese on the first pizza and controls
        moisture.
    - step: 8
      cue: The center is set and the underside browned.
      why: A golden rim can develop before the wetter center has finished baking.
  troubleshooting:
    - problem: Dough is difficult to stretch
      cause: 'It is cold, tight from shaping or has not relaxed enough.'
      fix: >-
        Cover and wait another 10 minutes. Do not tear it wider or force in handfuls of flour;
        refrigerated portions may need their full warming period.
    - problem: Liquid pools on the pizza
      cause: Fresh mozzarella or toppings released excess water.
      fix: >-
        Finish baking to a set base, extending time as needed. Next time drain and blot the cheese
        and wet toppings, or choose the low-moisture cheese option.
  substitutions:
    - ingredient: Fresh mozzarella
      alternative: 'The same weight of whole-milk low-moisture mozzarella, grated'
      effect: Less free moisture and a more even melt; browning and bake time may differ.
    - ingredient: Homemade sauce component
      alternative: 3/4 cup prepared thick pizza sauce for the whole batch
      effect: >-
        Omit the tomatoes, sauce oil, garlic, salt, flakes and sauce basil; there will be no extra
        sauce batch to save.
    - ingredient: Parmesan and other cheese
      alternative: 'Suitable cheeses made with vegetarian rennet, with no meat toppings'
      effect: Makes a vegetarian option when all ingredients are suitable; saltiness and melting vary.
  timing: >-
    Allow about 21 hours on the unrefrigerated route: roughly 18 hours of bulk fermentation, an hour
    of relaxation overlapping oven heating and sauce preparation, then serial baking and serving.
    Four pizzas take roughly 48–60 minutes of baking plus handling and any stone recovery; two
    larger pizzas need two rounds. About 45 minutes is active work, excluding cooking optional
    toppings from scratch. The refrigerated route adds its chosen storage period and uses a 2–3-hour
    warm-up instead of the one-hour rest.
  storage: >-
    Refrigerate perishable leftovers within 2 hours, or 1 hour above 90°F / 32°C, in shallow covered
    containers at 40°F / 4°C or below. Use within 3–4 days or freeze; reheat to 165°F / 74°C
    throughout. Store the raw, fermented dough only by the separate three-day refrigeration
    instructions in step 3. Do not taste raw dough.
  sources:
    - title: 'Jim Lahey, via J. Kenji López-Alt — No-knead pizza dough'
      url: 'https://www.seriouseats.com/jim-laheys-no-knead-pizza-dough-recipe'
    - title: Jim Lahey — No-knead pizza equipment and resting methods
      url: 'https://www.bonappetit.com/recipe/no-knead-pizza-dough'
    - title: J. Kenji López-Alt — New York-style home-oven pizza
      url: 'https://www.seriouseats.com/new-york-style-pizza'
    - title: Reynolds — Parchment temperature restrictions
      url: 'https://www.reynoldsbrands.com/tips-and-how-tos/tips-baking-parchment-paper'
    - title: USDA FSIS — Leftovers and food safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

An overnight rest develops a dough that stretches with little kneading, leaving most of the work for topping and baking. The weighed dough is adapted from Jim Lahey’s no-knead method, published by [J. Kenji López-Alt in Serious Eats](https://www.seriouseats.com/jim-laheys-no-knead-pizza-dough-recipe). This version makes four 10-inch pizzas or two 14-inch pizzas for four portions; divide the cheese and sauce first, then serve the pizzas as they finish.

## Directions

1. **Mix the dough:** Combine all-purpose flour, water, fine sea salt, and active-dry yeast until no dry flour remains. The dough will be sticky. Cover the bowl; no kneading is needed.
2. **Ferment overnight:** Let the covered dough rise around 72°F / 22°C until it is bubbly and more than doubled, approximately 18 hours. Check earlier in a warm room and allow longer in a cool one. When ready, portion it as below; do not extend the room-temperature rise blindly to two days.
3. **Portion and relax:** Lightly dust the work surface with flour. For four 10-inch pizzas, divide the dough into four equal portions, approximately 217 g each. For two 14-inch pizzas, divide into two approximately 434 g portions instead. Fold the edges underneath to make rounded balls without flattening out all the gas. Cover and rest about 1 hour until pliable. Alternatively, cover the risen, portioned dough individually and refrigerate up to 3 days; on baking day allow the covered balls about 2–3 hours at room temperature to relax instead of the one-hour rest. Prepare the oven and toppings during the last hour.
4. **Set up the oven:** Heat the oven to 500°F. For the pan route, use two room-temperature metal pans rated for that temperature, with enough flat area for the chosen diameter, and bake one at a time on the middle rack. A 14-inch round requires a suitably large round pan; do not assume it fits a standard baking sheet. For the stone route, put a suitably rated stone in the cold oven and preheat it for 1 hour; the stone and peel must fit the chosen diameter. Neither route uses parchment. Keep used pans aside to cool before reloading.
5. **Cook the sauce batch:** Have whole peeled tomatoes, olive oil, garlic cloves, fine salt, red pepper flakes (if using), and fresh basil (if using) ready. Warm the oil over medium-low heat, add the garlic and cook 30–45 seconds until fragrant but not browned. Stir in the tomatoes, salt and optional pepper flakes. Simmer 10–15 minutes, stirring, until spreadable without a puddle of loose liquid; add the optional basil at the end. Let cool enough to handle. Measure 3/4 cup for the full pizza batch and refrigerate the surplus promptly; the whole can is not meant to go onto the pizzas. If using prepared sauce instead, omit this entire sauce component and measure 3/4 cup thick pizza sauce.
6. **Shape one pizza:** Use flour and olive oil (if using) as needed. Stretch one ball to its chosen 10-inch or 14-inch diameter, leaving a thicker rim. Cover and wait another 10 minutes if it springs back. Move the untopped round onto a lightly oiled cool pan, or a lightly floured peel and confirm it slides. Keep unused dough covered and prepared perishable toppings chilled.
7. **Allocate cheese and toppings:** Divide fresh mozzarella, Parmesan, and prepared pizza toppings (if using) into four sets for small pizzas or two sets for large ones. Each 10-inch pizza gets 3 tbsp prepared sauce, 3 oz mozzarella and 1/4 oz Parmesan; each 14-inch pizza gets 6 tbsp sauce, 6 oz mozzarella and 1/2 oz Parmesan. Spread its sauce leaving a 1/2- to 3/4-inch rim. Add half of that pizza’s mozzarella, a sparse layer of the chosen toppings, then its remaining mozzarella and its full Parmesan portion. On a peel, check again that it slides and bake immediately. Use ready-to-eat pepperoni or fully cooked sausage, bacon or chicken; thinly slice quick-cooking vegetables, cook and cool mushrooms first, and drain wet toppings. Keep perishable toppings chilled until assembly.
8. **Bake one at a time:** Put the pan on the middle rack, or launch directly onto the stone. Start checking at 10 minutes; roughly 12–15 minutes is a guide, not a fixed endpoint for every size, cheese and baking surface. The underside should be browned, the center set and the rim golden, with melted cheese. Rotate safely with the pan or peel if browning is uneven, and allow longer if the bottom is pale. Keep the oven on between pizzas and give a stone about 5 minutes to recover.
9. **Finish and serve in rounds:** Add fresh basil (if using) after baking. Rest the pizza on a rack for 2–3 minutes, cut and serve. Shape, top and bake each remaining pizza separately, using its assigned sauce and cheese. Alternate pans and let them cool before reloading; never assemble on a hot pan. Four pizzas mean four oven rounds, not one 15-minute bake.

## Toppings and shortcuts

Choose a sparse layer of ready-to-eat pepperoni, thin red onion or bell pepper, cooked and cooled mushrooms, prepared caramelized onions, fully cooked sausage or bacon, cooked chicken, roasted garlic, dry spinach, drained artichokes or a few blotted tomato slices. Optional toppings are additional to the measured cheese; they are not all required. Keep perishable toppings refrigerated until assembly. Fresh basil goes on after baking.

The same weight of whole-milk low-moisture mozzarella can replace fresh mozzarella; it releases less free moisture and browns differently. For prepared sauce, omit the whole sauce-making component and use 3/4 cup thick pizza sauce for all the pizzas. For a vegetarian version, choose suitable cheeses made with vegetarian rennet and omit meat toppings.

## Timing and leftovers

Plan about 21 hours for the overnight route, mostly hands-off. Sauce preparation and oven heating overlap the one-hour dough rest; four separate bakes take roughly 48–60 minutes plus handling and any stone recovery. Preparing optional toppings from scratch adds work. The refrigerated dough route uses the separate 2–3-hour warm-up in step 3. Do not taste raw dough.

Refrigerate perishable leftovers within 2 hours, or 1 hour above 90°F / 32°C, at 40°F / 4°C or below. Use within 3–4 days or freeze; reheat to 165°F / 74°C throughout. Cool and refrigerate surplus sauce promptly in a shallow container. Raw dough follows the separate three-day refrigeration limit in step 3.
