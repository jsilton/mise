---
title: Pizza
difficulty: intermediate
cookingMethods:
  - bake
dietary: []
occasions:
  - weeknight
  - kid-friendly
  - entertaining
  - comfort-food
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
flavorProfile:
  - savory
  - sweet
  - rich
cuisines:
  - Italian
  - American
role: main
vibe: comfort
prepTime: 20 min
cookTime: 30 min
totalTime: 70 min
servings: 4 portions
pairsWith:
  - avocado-kale-caesar-salad
  - garlic-bread
ingredients:
  - '--- Dough and handling ---'
  - '600 g prepared, risen pizza dough, at stretching temperature; divide into two equal balls'
  - 'flour, for dusting the work surface and peel, as needed'
  - 'olive oil, for lightly oiling the pans, if using the pan route, optional'
  - '--- Toppings for both pizzas ---'
  - 1 cup thick pizza sauce
  - '12 oz whole-milk low-moisture mozzarella, grated'
  - 60 g ready-to-eat pepperoni slices
  - '120 g fresh pineapple, cut into small pieces and blotted dry'
  - '40 g baby spinach, washed if needed and dried thoroughly'
origin: Italian-American home cooking
description: >-
  Two generously topped 12-inch pizzas with pepperoni, pineapple, spinach and whole-milk mozzarella,
  starting with prepared dough.
equipment:
  - two-12-inch-pizza-pans-rated-for-500f
  - oven
  - pizza-stone-and-peel-optional
scaling:
  mode: fixed
  reason: >-
    Written for two 12-inch pizzas, baked one at a time. Keep the dough portions and topping shares
    together; make another full batch for more pizzas.
source: Family recipe
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: base
      name: Dough and handling
      ingredients:
        - id: prepared-pizza-dough
          key: prepared-pizza-dough
          name: 'prepared, risen pizza dough'
          quantity:
            amount: 600
            unit: g
          uses:
            - step: shape
              share: 1
          preparation: at stretching temperature; divide into two equal balls
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
    - id: toppings
      name: Toppings for both pizzas
      ingredients:
        - id: pizza-sauce
          key: pizza-sauce
          name: thick pizza sauce
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: top
              share: 1
        - id: mozzarella
          key: mozzarella
          name: whole-milk low-moisture mozzarella
          quantity:
            amount: 12
            unit: oz
          uses:
            - step: top
              share: 1
          preparation: grated
        - id: pepperoni
          key: pepperoni
          name: ready-to-eat pepperoni slices
          quantity:
            amount: 60
            unit: g
          uses:
            - step: top
              share: 1
        - id: pineapple
          key: pineapple
          name: fresh pineapple
          quantity:
            amount: 120
            unit: g
          uses:
            - step: top
              share: 1
          preparation: cut into small pieces and blotted dry
        - id: spinach
          key: spinach
          name: baby spinach
          quantity:
            amount: 40
            unit: g
          uses:
            - step: bake
              share: 1
          preparation: washed if needed and dried thoroughly
  steps:
    - id: heat
      title: Choose the baking route
      text: >-
        Start with fully risen dough that is relaxed enough to stretch. Follow its recipe or package
        for thawing, proofing and warming before this schedule. Heat the oven to 500°F with a middle
        rack. For the pan route, keep two metal pans with enough flat area for 12-inch pizzas at
        room temperature; check that they are rated for 500°F. For the stone route, put a suitably
        rated stone in the cold oven and heat it for 1 hour; have a peel that fits the pizza ready.
        Neither route uses parchment.
    - id: divide
      title: Divide the toppings
      text: >-
        Make two equal sets of toppings before shaping. Each pizza gets 1/2 cup sauce, 6 oz
        mozzarella, 30 g pepperoni, 60 g pineapple and 20 g spinach. Cut pineapple into
        approximately 1/4-inch pieces and blot away surface liquid. Keep the second set of
        perishable toppings refrigerated until needed.
    - id: shape
      title: Shape on a cool surface
      text: >-
        Have {{ingredients}} ready. Divide the dough into two 300 g balls. Cover one while
        stretching the other to a 12-inch round with a slightly thicker rim. If it springs back,
        cover and rest 10 minutes. Transfer the bare round to a lightly oiled room-temperature pan,
        or to a lightly floured peel for the stone route. On a peel, check that it slides freely
        before topping.
    - id: top
      title: Top one pizza
      text: >-
        Use one half each of {{ingredients}} on the first pizza. Spread its sauce leaving a 3/4-inch
        border, then distribute the cheese, pepperoni and pineapple evenly. Reserve the spinach. If
        using a peel, check that the pizza still moves freely and launch promptly; do not leave a
        dressed pizza waiting on the peel.
    - id: bake
      title: Bake and wilt the spinach
      text: >-
        Reserve one half of {{ingredients}} for this pizza and the other half for the second. Put
        the pan on the oven rack, or slide the pizza directly from the peel onto the stone. Start
        checking after 10 minutes; allow roughly 12–15 minutes total. When the rim is nearly browned
        and the cheese is bubbling, pull the pizza out safely with its pan or peel, scatter on its
        spinach portion and return it for the final 1–2 minutes. The spinach should wilt and the
        underside should be browned, with a set center that supports a slice. Check underneath with
        a spatula or peel; a dark rim alone does not establish doneness. Extend the bake if needed.
    - id: serve
      title: Serve and repeat
      text: >-
        Move the first pizza to a rack for 2 minutes, then slice and serve. Keep the oven on; let a
        stone recover for about 5 minutes between pizzas. Shape and top the second pizza on its own
        room-temperature pan or prepared peel, using the remaining topping portions, and repeat the
        bake. Never assemble dough directly on a hot pan or reach over a hot stone.
learning:
  focus: Control topping moisture and bottom heat
  outcome: >-
    A browned, supporting base beneath melted cheese, juicy pineapple, pepperoni and lightly wilted
    spinach.
  techniques:
    - browning
    - starch
  before:
    - >-
      The clock starts with prepared dough already risen and ready to stretch. Cold or frozen dough
      needs its own additional preparation.
    - >-
      Use two pans so the second pizza can be assembled on a cool surface. A stone is optional and
      requires a peel and an hour of preheating.
  checkpoints:
    - step: 3
      cue: 'The dough stretches without tearing and, on a peel, slides before topping.'
      why: 'Rest reduces spring-back; a stuck, fully dressed pizza is difficult to transfer safely.'
    - step: 5
      cue: 'The bottom is browned and the center is set, not just the rim.'
      why: Wet toppings can leave the center soft even when exposed edges have browned.
  troubleshooting:
    - problem: Base is pale or floppy
      cause: 'Wet toppings, a cool baking surface or insufficient baking.'
      fix: >-
        Continue baking and check underneath. Next time blot the pineapple thoroughly and allow the
        oven or stone to reach its full preheat.
    - problem: Dough springs back
      cause: The dough is cold or needs to relax after handling.
      fix: >-
        Cover and rest for another 10 minutes before stretching; allow more warming time if it still
        feels cold.
  substitutions:
    - ingredient: Pepperoni
      alternative: Omit it for a meat-free version
      effect: >-
        The pizza loses its peppery, salty accent. For a vegetarian result also check that the
        dough, sauce and cheese are suitable.
  timing: >-
    Allow about 60–70 minutes for the pan route: oven heating overlaps 20 minutes of preparation,
    followed by two separate 12–15-minute bakes and handling. With a stone, allow about 1 hour 40
    minutes including its full hour preheat and recovery. These are planning estimates with
    ready-to-stretch dough; dough preparation and extra rests add time. Serve the pizzas in rounds.
  storage: >-
    Refrigerate perishable leftovers within 2 hours, or 1 hour above 90°F / 32°C, in shallow covered
    containers at 40°F / 4°C or below. Use within 3–4 days or freeze; reheat to 165°F / 74°C
    throughout.
  sources:
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

Pepperoni, pineapple and spinach bring salty, sweet and fresh contrasts to a generous cheese pizza. Keep the toppings dry and check the underside before serving: a browned rim can hide a soft center. This batch makes two 12-inch pizzas for four portions, served as each pizza comes out of the oven.

## Directions

1. **Choose the baking route:** Start with fully risen dough that is relaxed enough to stretch. Follow its recipe or package for thawing, proofing and warming before this schedule. Heat the oven to 500°F with a middle rack. For the pan route, keep two metal pans with enough flat area for 12-inch pizzas at room temperature; check that they are rated for 500°F. For the stone route, put a suitably rated stone in the cold oven and heat it for 1 hour; have a peel that fits the pizza ready. Neither route uses parchment.
2. **Divide the toppings:** Make two equal sets of toppings before shaping. Each pizza gets 1/2 cup sauce, 6 oz mozzarella, 30 g pepperoni, 60 g pineapple and 20 g spinach. Cut pineapple into approximately 1/4-inch pieces and blot away surface liquid. Keep the second set of perishable toppings refrigerated until needed.
3. **Shape on a cool surface:** Have prepared, risen pizza dough, flour, and olive oil (if using) ready. Divide the dough into two 300 g balls. Cover one while stretching the other to a 12-inch round with a slightly thicker rim. If it springs back, cover and rest 10 minutes. Transfer the bare round to a lightly oiled room-temperature pan, or to a lightly floured peel for the stone route. On a peel, check that it slides freely before topping.
4. **Top one pizza:** Use one half each of thick pizza sauce, whole-milk low-moisture mozzarella, ready-to-eat pepperoni slices, and fresh pineapple on the first pizza. Spread its sauce leaving a 3/4-inch border, then distribute the cheese, pepperoni and pineapple evenly. Reserve the spinach. If using a peel, check that the pizza still moves freely and launch promptly; do not leave a dressed pizza waiting on the peel.
5. **Bake and wilt the spinach:** Reserve one half of baby spinach for this pizza and the other half for the second. Put the pan on the oven rack, or slide the pizza directly from the peel onto the stone. Start checking after 10 minutes; allow roughly 12–15 minutes total. When the rim is nearly browned and the cheese is bubbling, pull the pizza out safely with its pan or peel, scatter on its spinach portion and return it for the final 1–2 minutes. The spinach should wilt and the underside should be browned, with a set center that supports a slice. Check underneath with a spatula or peel; a dark rim alone does not establish doneness. Extend the bake if needed.
6. **Serve and repeat:** Move the first pizza to a rack for 2 minutes, then slice and serve. Keep the oven on; let a stone recover for about 5 minutes between pizzas. Shape and top the second pizza on its own room-temperature pan or prepared peel, using the remaining topping portions, and repeat the bake. Never assemble dough directly on a hot pan or reach over a hot stone.

## Timing and leftovers

With ready-to-stretch dough, allow about 60–70 minutes for the pan route or 1 hour 40 minutes for the stone route. Oven heating overlaps topping preparation; two pizzas still need two baking rounds. Cold or frozen dough needs its own preparation before this schedule.

Refrigerate perishable leftovers within 2 hours, or 1 hour above 90°F / 32°C, at 40°F / 4°C or below. Use within 3–4 days or freeze; reheat to 165°F / 74°C throughout.
