---
miseId: 9e1f4164-4c44-4f6b-bf3e-3bd1d3a3fbe4
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
cookTime: 1 hr
totalTime: '1 hr 45 min, plus 19 hr rising'
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
  - avocado-kale-caesar-salad
pairingNotes:
  everyday-arugula-salad: Peppery greens to eat between slices.
  avocado-kale-caesar-salad: 'A creamy Caesar, the pizza-night classic.'
ingredients:
  - '--- Dough ---'
  - 500 g all-purpose flour
  - '350 g water, at room temperature'
  - 16 g fine sea salt
  - 1 g (1/4 tsp) active-dry yeast
  - 'flour, for dusting'
  - 'olive oil, for the pans'
  - '--- Sauce ---'
  - '1 can (28 oz) whole peeled tomatoes, crushed by hand, with their juices'
  - 2 tbsp olive oil
  - '3 garlic cloves, minced'
  - 1/2 tsp fine salt
  - '1/4 tsp red pepper flakes, optional'
  - '--- Toppings ---'
  - '12 oz fresh mozzarella, torn small and blotted dry'
  - '1 oz Parmesan, finely grated'
  - 'pizza toppings, as desired, such as pepperoni, sliced peppers or mushrooms, optional'
  - 'fresh basil, for serving, optional'
description: >-
  Overnight no-knead dough, tomato sauce and a mozzarella-Parmesan topping bar, baked as four
  personal pizzas.
scaling:
  mode: fixed
  reason: >-
    The dough makes four 10-inch pizzas, and the rise and bake times are set for that batch. Make
    the full recipe.
source: Dough adapted from Jim Lahey via Serious Eats
sourceUrl: 'https://www.seriouseats.com/jim-laheys-no-knead-pizza-dough-recipe'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: dough
      name: Dough
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
        - id: portion-flour
          key: flour
          name: flour
          allowance: for dusting
          uses:
            - step: portion
              share: 1
        - id: pan-oil
          key: pan-oil
          name: olive oil
          allowance: for the pans
          uses:
            - step: oven
              share: 1
    - id: sauce
      name: Sauce
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
          preparation: 'crushed by hand, with their juices'
        - id: olive-oil
          key: olive-oil
          name: olive oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: garlic
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: garlic
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
    - id: assembly
      name: Toppings
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
          preparation: torn small and blotted dry
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
        - id: prepared-toppings
          key: prepared-toppings
          name: pizza toppings
          allowance: as desired
          uses:
            - step: top
              share: 1
          optional: true
          preparation: 'such as pepperoni, sliced peppers or mushrooms'
        - id: finishing-basil
          key: finishing-basil
          name: fresh basil
          allowance: for serving
          uses:
            - step: finish
              share: 1
          optional: true
  steps:
    - id: mix
      title: Mix the dough
      text: >-
        In a large bowl, stir {{ingredients}} until no dry flour remains. The dough will be sticky.
        Cover the bowl. There is no need to knead.
    - id: ferment
      title: Let it rise
      text: 'Leave the dough at room temperature until bubbly and more than doubled, about 18 hours.'
    - id: portion
      title: Shape the balls
      text: >-
        Turn the dough out onto a surface dusted with {{ingredients}} and cut it into four pieces.
        Fold the edges under to make four balls. Cover and let them rest until soft and easy to
        stretch, about 1 hour.
    - id: oven
      title: Heat the oven
      text: >-
        Heat the oven to 500°F with a rack in the middle. Lightly coat two pizza pans or baking
        sheets with {{ingredients}}.
    - id: garlic
      title: Start the sauce
      text: >-
        Warm {{ingredients}} in a medium saucepan over medium-low heat until the garlic is fragrant
        but not browned, 30 to 45 seconds.
    - id: sauce
      title: Simmer the sauce
      text: >-
        Stir in {{ingredients}}. Simmer, stirring now and then, until thick enough to spread, 10 to
        15 minutes. Let it cool. The sauce makes more than the pizzas need, so refrigerate the rest.
    - id: shape
      title: Stretch the dough
      text: >-
        Stretch one ball into a 10-inch round with a slightly thicker rim and set it on a cool pan.
        If it springs back, cover it and let it rest 10 minutes more.
    - id: top
      title: Top the pizza
      text: >-
        Divide {{ingredients}} into four portions. Spread a thin layer of sauce on the dough,
        leaving a 1/2-inch rim. Scatter on half of one portion's mozzarella, then a single sparse
        layer of its toppings, then the rest of its mozzarella and its Parmesan.
    - id: bake
      title: Bake
      text: >-
        Bake until the bottom is browned, the rim is golden and the cheese is bubbling, 12 to 15
        minutes. Shape and top the next pizza on the second pan while the first one bakes.
    - id: finish
      title: Finish and serve
      text: >-
        Scatter {{ingredients}} over the hot pizza. Let it rest 2 minutes, then slice and serve.
        Repeat with the rest of the dough, letting each pan cool before you stretch dough on it
        again.
learning:
  techniques:
    - leavening
    - browning
  substitutions:
    - ingredient: Fresh mozzarella
      alternative: 'Low-moisture mozzarella, grated'
      effect: 'Use the same weight. It melts more evenly and gives off less water, but is less creamy.'
    - ingredient: Sauce
      alternative: Store-bought pizza sauce
      effect: Use about 3/4 cup of a thick sauce and skip making it.
    - ingredient: Pizza stone
      alternative: Bake on a preheated stone
      effect: >-
        Heat the stone in the oven for 1 hour. Build each pizza on a floured peel and slide it onto
        the stone for a crisper bottom.
  storage: >-
    Portioned dough balls keep 3 days in the fridge. Let them sit out 2 to 3 hours before
    stretching. Leftover sauce keeps 5 days in the fridge or 3 months in the freezer.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

Pizza night starts the day before with Jim Lahey's no-knead dough. A long, slow rise does the work, so the dough stretches easily and bakes up crisp and chewy. Set out the toppings and let everyone build their own, but keep them sparse so each pizza bakes through.

## Directions

1. **Mix the dough:** In a large bowl, stir the all-purpose flour, water, fine sea salt, and active-dry yeast until no dry flour remains. The dough will be sticky. Cover the bowl. There is no need to knead.
2. **Let it rise:** Leave the dough at room temperature until bubbly and more than doubled, about 18 hours.
3. **Shape the balls:** Turn the dough out onto a surface dusted with the flour and cut it into four pieces. Fold the edges under to make four balls. Cover and let them rest until soft and easy to stretch, about 1 hour.
4. **Heat the oven:** Heat the oven to 500°F with a rack in the middle. Lightly coat two pizza pans or baking sheets with the olive oil.
5. **Start the sauce:** Warm the garlic and 2 tbsp of the olive oil in a medium saucepan over medium-low heat until the garlic is fragrant but not browned, 30 to 45 seconds.
6. **Simmer the sauce:** Stir in the tomatoes, fine salt, and red pepper flakes (if using). Simmer, stirring now and then, until thick enough to spread, 10 to 15 minutes. Let it cool. The sauce makes more than the pizzas need, so refrigerate the rest.
7. **Stretch the dough:** Stretch one ball into a 10-inch round with a slightly thicker rim and set it on a cool pan. If it springs back, cover it and let it rest 10 minutes more.
8. **Top the pizza:** Divide the mozzarella, Parmesan, and pizza toppings (if using) into four portions. Spread a thin layer of sauce on the dough, leaving a 1/2-inch rim. Scatter on half of one portion's mozzarella, then a single sparse layer of its toppings, then the rest of its mozzarella and its Parmesan.
9. **Bake:** Bake until the bottom is browned, the rim is golden and the cheese is bubbling, 12 to 15 minutes. Shape and top the next pizza on the second pan while the first one bakes.
10. **Finish and serve:** Scatter the basil (if using) over the hot pizza. Let it rest 2 minutes, then slice and serve. Repeat with the rest of the dough, letting each pan cool before you stretch dough on it again.
