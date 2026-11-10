---
miseId: b248f4da-688a-4420-aea3-87d33c8cad58
title: Spinach & Ricotta Stuffed Shells
difficulty: intermediate
cookingMethods:
  - bake
  - boil
  - saute
dietary:
  - vegetarian-option
occasions:
  - comfort-food
  - weekend-project
  - entertaining
  - potluck
flavorProfile:
  - umami
  - herbaceous
cuisines:
  - Italian
  - American
role: main
vibe: comfort
prepTime: 35 min
cookTime: 45 min
totalTime: 1 hr 30 min
servings: 6 portions
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: excellent
advancePrep:
  - make-ahead
equipment:
  - 9x13-inch-baking-dish
  - large-pot
  - skillet
pairsWith:
  - everyday-arugula-salad
  - garlic-bread
pairingNotes:
  everyday-arugula-salad: Peppery greens to cut the rich cheese.
  garlic-bread: For the sauce left in the dish.
ingredients:
  - '--- Pasta ---'
  - 'kosher salt, for the pasta water'
  - '24 jumbo pasta shells, about 8 oz, plus 4 extra in case some tear'
  - 1 tbsp extra-virgin olive oil
  - '--- Spinach ---'
  - 1 tbsp olive oil
  - '1 garlic clove, smashed'
  - 5 oz fresh baby spinach
  - '--- Filling and topping ---'
  - '15 oz whole-milk ricotta, drained'
  - '8 oz low-moisture mozzarella, shredded from a block'
  - '2 oz Parmigiano-Reggiano, finely grated'
  - '1 tbsp lemon zest, from 1 lemon'
  - 1/4 tsp ground nutmeg
  - '2 tbsp fresh chives or basil, minced'
  - 1/2 tsp kosher salt
  - 'black pepper, a few grinds'
  - '1 large egg, beaten'
  - '--- Sauce ---'
  - 4 cups marinara sauce
origin: Italian-American home cooking
description: >-
  Jumbo shells with a spinach, ricotta and mozzarella filling, baked under tomato sauce and a
  browned cheese topping.
scaling:
  mode: fixed
  reason: 'Written for 24 jumbo shells in one 9x13-inch dish, which makes six portions.'
source: Adapted from NYT Cooking
sourceUrl: 'https://cooking.nytimes.com/recipes/1013942-stuffed-shells-filled-with-spinach-and-ricotta'
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: pasta
      name: Pasta
      ingredients:
        - id: pasta-salt
          key: pasta-salt
          name: kosher salt
          allowance: for the pasta water
          uses:
            - step: setup
              share: 1
          role: cooking-water
        - id: jumbo-shells
          key: jumbo-shells
          name: jumbo pasta shell
          plural: jumbo pasta shells
          quantity:
            amount: 24
            unit: count
          preparation: 'about 8 oz, plus 4 extra in case some tear'
          uses:
            - step: pasta
              share: 1
        - id: pasta-oil
          key: pasta-oil
          name: extra-virgin olive oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: oil-shells
              share: 1
    - id: greens
      name: Spinach
      ingredients:
        - id: spinach-oil
          key: spinach-oil
          name: olive oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: garlic
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 1
            unit: count
          uses:
            - step: garlic
              share: 1
          plural: garlic cloves
          preparation: smashed
          role: discarded
        - id: baby-spinach
          key: baby-spinach
          name: fresh baby spinach
          quantity:
            amount: 5
            unit: oz
          uses:
            - step: spinach
              share: 1
    - id: filling
      name: Filling and topping
      ingredients:
        - id: ricotta
          key: ricotta
          name: whole-milk ricotta
          quantity:
            amount: 15
            unit: oz
          uses:
            - step: filling
              share: 1
          preparation: drained
        - id: mozzarella
          key: mozzarella
          name: low-moisture mozzarella
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: filling
              share: 2/3
            - step: cheese
              share: 1/3
          preparation: shredded from a block
        - id: parmigiano
          key: parmigiano
          name: Parmigiano-Reggiano
          quantity:
            amount: 2
            unit: oz
          uses:
            - step: filling
              share: 2/3
            - step: cheese
              share: 1/3
          preparation: finely grated
        - id: lemon
          key: lemon
          name: lemon zest
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: filling
              share: 1
          preparation: from 1 lemon
        - id: nutmeg
          key: nutmeg
          name: ground nutmeg
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: filling
              share: 1
        - id: herbs
          key: herbs
          name: fresh chives or basil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: filling
              share: 1
          preparation: minced
        - id: filling-salt
          key: filling-salt
          name: kosher salt
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: filling
              share: 1
        - id: black-pepper
          key: black-pepper
          name: black pepper
          allowance: a few grinds
          uses:
            - step: filling
              share: 1
        - id: egg
          key: egg
          name: large egg
          quantity:
            amount: 1
            unit: count
          uses:
            - step: filling
              share: 1
          plural: large eggs
          preparation: beaten
    - id: sauce
      name: Sauce
      ingredients:
        - id: marinara
          key: marinara
          name: marinara sauce
          quantity:
            amount: 4
            unit: cup
          uses:
            - step: dishes
              share: 1/4
            - step: top
              share: 3/4
  steps:
    - id: setup
      title: Heat the oven and water
      text: 'Heat the oven to 375°F. Bring a large pot of water to a boil with {{ingredients}}.'
    - id: garlic
      title: Warm the garlic
      text: >-
        Heat {{ingredients}} in a skillet over medium heat until the garlic sizzles, about 30
        seconds.
    - id: spinach
      title: Wilt the spinach
      text: >-
        Add {{ingredients}} and cook, tossing, until just wilted, 2 to 3 minutes. Discard the garlic
        and let the spinach cool.
    - id: pasta
      title: Parboil the shells
      text: >-
        Add {{ingredients}} to the boiling water and cook 2 to 3 minutes less than the package says,
        until pliable but still firm. Drain.
    - id: oil-shells
      title: Oil the shells
      text: 'Spread the shells on a sheet pan and toss gently with {{ingredients}} so they don''t stick.'
    - id: squeeze
      title: Squeeze the spinach
      text: Wrap the cooled spinach in a clean towel and wring it out until dry. Chop it finely.
    - id: filling
      title: Mix the filling
      text: >-
        In a large bowl, fold {{ingredients}} with the chopped spinach until just combined. Mix by
        hand so the ricotta stays thick and fluffy.
    - id: dishes
      title: Sauce the dish
      text: 'Spread {{ingredients}} over the bottom of a 9x13-inch baking dish.'
    - id: fill
      title: Fill the shells
      text: >-
        Spoon the filling into the shells, sharing it evenly, and set them open side up in a single
        layer in the dish.
    - id: top
      title: Sauce the shells
      text: >-
        Spoon {{ingredients}} over the shells, covering the pasta edges so they don't dry out and
        crisp.
    - id: cheese
      title: Add the cheese
      text: 'Scatter {{ingredients}} over the top.'
    - id: bake
      title: Bake
      text: >-
        Cover with foil, tented so it doesn't touch the cheese, and bake 25 minutes. Uncover and
        bake until the sauce bubbles at the edges and the cheese has golden spots, 15 to 20 minutes
        more.
    - id: rest
      title: Rest and serve
      text: 'Let the shells rest 10 minutes so the filling sets, then serve.'
learning:
  techniques:
    - starch
    - temperature
    - seasoning
  substitutions:
    - ingredient: Parmigiano-Reggiano
      alternative: A vegetarian Parmesan-style cheese
      effect: Parmigiano is made with animal rennet. A vegetarian hard cheese keeps the dish meat-free.
    - ingredient: Fresh baby spinach
      alternative: 10 oz spinach
      effect: 'A greener, fuller filling. Wilt and squeeze it the same way.'
  storage: >-
    Assemble up to a day ahead, refrigerate covered and add 10 to 15 minutes to the covered bake.
    Leftovers keep 4 days in the fridge and freeze for 3 months.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

Stuffed shells are an Italian-American red-sauce classic, jumbo pasta filled with spinach and three cheeses and baked under marinara. Wring the spinach dry and fold the filling by hand so it stays thick and fluffy inside the shells. Parboil the pasta so it finishes cooking in the sauce.

## Directions

1. **Heat the oven and water:** Heat the oven to 375°F. Bring a large pot of water to a boil with kosher salt.
2. **Warm the garlic:** Heat olive oil and garlic clove in a skillet over medium heat until the garlic sizzles, about 30 seconds.
3. **Wilt the spinach:** Add fresh baby spinach and cook, tossing, until just wilted, 2 to 3 minutes. Discard the garlic and let the spinach cool.
4. **Parboil the shells:** Add jumbo pasta shells to the boiling water and cook 2 to 3 minutes less than the package says, until pliable but still firm. Drain.
5. **Oil the shells:** Spread the shells on a sheet pan and toss gently with extra-virgin olive oil so they don't stick.
6. **Squeeze the spinach:** Wrap the cooled spinach in a clean towel and wring it out until dry. Chop it finely.
7. **Mix the filling:** In a large bowl, fold whole-milk ricotta, 2/3 of the low-moisture mozzarella, 2/3 of the Parmigiano-Reggiano, lemon zest, ground nutmeg, fresh chives or basil, kosher salt, black pepper, and large egg with the chopped spinach until just combined. Mix by hand so the ricotta stays thick and fluffy.
8. **Sauce the dish:** Spread 1/4 of the marinara sauce over the bottom of a 9x13-inch baking dish.
9. **Fill the shells:** Spoon the filling into the shells, sharing it evenly, and set them open side up in a single layer in the dish.
10. **Sauce the shells:** Spoon 3/4 of the marinara sauce over the shells, covering the pasta edges so they don't dry out and crisp.
11. **Add the cheese:** Scatter 1/3 of the low-moisture mozzarella and 1/3 of the Parmigiano-Reggiano over the top.
12. **Bake:** Cover with foil, tented so it doesn't touch the cheese, and bake 25 minutes. Uncover and bake until the sauce bubbles at the edges and the cheese has golden spots, 15 to 20 minutes more.
13. **Rest and serve:** Let the shells rest 10 minutes so the filling sets, then serve.
