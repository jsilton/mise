---
miseId: 6e5b6349-ed55-40c3-a14d-98686f48c662
title: Soba Noodles with Shiitakes & Tofu
difficulty: intermediate
cookingMethods:
  - fry
  - saute
  - boil
occasions:
  - weeknight
  - quick-lunch
flavorProfile:
  - savory
  - umami
cuisines:
  - Japanese
role: main
vibe: comfort
prepTime: 20 min
cookTime: 20 min
totalTime: 40 min
servings: 4 portions
pairsWith:
  - japanese-cucumber-sunomono
  - steamed-edamame
pairingNotes:
  japanese-cucumber-sunomono: 'Cool, tangy cucumbers beside the warm noodles.'
  steamed-edamame: Salty pods to snack on beside the noodles.
ingredients:
  - '--- Sauce ---'
  - 1/2 cup chicken or vegetable stock
  - 3 tbsp soy sauce
  - 1 tbsp Shaoxing wine
  - '1 tbsp fresh ginger, minced'
  - '1 tbsp garlic, minced'
  - 1/2 tsp sugar
  - 'salt, to taste'
  - '--- Noodles ---'
  - '1/2 lb baby broccoli, cut into bite-size pieces'
  - 8 oz soba noodles
  - '2 tsp toasted sesame oil, divided'
  - '--- Stir-fry ---'
  - '2 tbsp neutral oil, divided'
  - '1/2 lb extra-firm tofu, patted dry and diced'
  - 1/2 tsp red pepper flakes
  - '6 oz fresh shiitake mushrooms, stems removed, caps sliced'
  - '6 scallions, sliced, whites and greens kept separate'
  - '1/2 cup fresh cilantro, chopped'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from NYT Cooking
sourceUrl: 'https://cooking.nytimes.com/recipes/1016016-soba-noodles-with-shiitakes-broccoli-and-tofu'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: sauce
      name: Sauce
      ingredients:
        - id: stock
          key: stock
          name: chicken or vegetable stock
          stepName: stock
          quantity:
            amount: 0.5
            unit: cup
          uses:
            - step: sauce
              share: 1
        - id: soy
          key: soy
          name: soy sauce
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: wine
          key: wine
          name: Shaoxing wine
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
          preparation: minced
        - id: garlic
          key: garlic
          name: garlic
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
          preparation: minced
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 0.5
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: salt
          key: salt
          name: salt
          allowance: to taste
          uses:
            - step: sauce
              share: 1
    - id: noodles
      name: Noodles
      ingredients:
        - id: broccoli
          key: broccoli
          name: baby broccoli
          quantity:
            amount: 0.5
            unit: lb
          uses:
            - step: blanch
              share: 1
          preparation: cut into bite-size pieces
        - id: noodles
          key: noodles
          name: soba noodles
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: noodles
              share: 1
        - id: sesame
          key: sesame
          name: toasted sesame oil
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: oil-noodles
              share: 1/2
            - step: finish
              share: 1/2
    - id: pan
      name: Stir-fry
      ingredients:
        - id: oil
          key: oil
          name: neutral oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: tofu
              share: 1/2
            - step: vegetables
              share: 1/2
        - id: tofu
          key: tofu
          name: extra-firm tofu
          quantity:
            amount: 0.5
            unit: lb
          uses:
            - step: tofu
              share: 1
          preparation: patted dry and diced
        - id: flakes
          key: flakes
          name: red pepper flakes
          quantity:
            amount: 0.5
            unit: tsp
          uses:
            - step: vegetables
              share: 1
        - id: mushrooms
          key: mushrooms
          name: fresh shiitake mushrooms
          quantity:
            amount: 6
            unit: oz
          uses:
            - step: vegetables
              share: 1
          preparation: 'stems removed, caps sliced'
        - id: scallions
          key: scallions
          name: scallion
          quantity:
            amount: 6
            unit: count
          uses:
            - step: vegetables
              share: 1
          plural: scallions
          preparation: 'sliced, whites and greens kept separate'
        - id: cilantro
          key: cilantro
          name: fresh cilantro
          quantity:
            amount: 0.5
            unit: cup
          uses:
            - step: finish
              share: 1
          preparation: chopped
  steps:
    - id: sauce
      title: Mix the sauce
      text: 'Whisk {{ingredients}} in a small bowl until the sugar dissolves.'
    - id: blanch
      title: Blanch the broccoli
      text: >-
        Bring a large pot of water to a boil. Add {{ingredients}} and cook until bright green and
        crisp-tender, about 1 minute. Scoop it into a bowl of ice water, then drain and pat dry.
    - id: noodles
      title: Cook the soba
      text: >-
        Return the water to a boil and cook {{ingredients}} as the package directs until just
        tender, usually 4 to 5 minutes. Drain, rinse under cold running water for 1 minute and drain
        well.
    - id: oil-noodles
      title: Oil the noodles
      text: 'Toss the noodles with {{ingredients}} so they do not stick.'
    - id: tofu
      title: Sear the tofu
      text: >-
        Heat a wok or large skillet over medium-high heat. Add {{ingredients}} and sear the tofu in
        a single layer, turning, until golden on several sides, 4 to 5 minutes. Move it to a plate.
    - id: vegetables
      title: Stir-fry the mushrooms
      text: >-
        Add {{ingredients}} to the pan, holding back the scallion greens. Stir-fry until the
        mushrooms soften and brown at the edges, 2 to 3 minutes.
    - id: toss
      title: Toss it together
      text: >-
        Add the broccoli, noodles, tofu and sauce. Lower the heat to medium and toss gently until
        everything is hot and glossy, 1 to 2 minutes.
    - id: finish
      title: Finish and serve
      text: 'Fold in {{ingredients}} along with the scallion greens. Taste for salt and serve right away.'
learning:
  techniques:
    - stir-frying
    - temperature
  substitutions:
    - ingredient: Shaoxing wine
      alternative: Dry sherry
      effect: 'Use the same amount. The flavor is close, a little sharper.'
  storage: >-
    Keeps 3 days in the fridge. The noodles soften as they sit, so eat leftovers cold or warm them
    briefly in a skillet.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

A quick stir-fry of buckwheat soba with tofu, shiitakes and baby broccoli in a garlic, ginger and soy sauce. Rinsing the cooked soba under cold water washes off surface starch, so the noodles stay springy and separate in the hot pan. Searing the tofu and mushrooms hard gives them browned edges and deeper flavor.

## Directions

1. **Mix the sauce:** Whisk the stock, soy sauce, Shaoxing wine, ginger, garlic, sugar, and salt in a small bowl until the sugar dissolves.
2. **Blanch the broccoli:** Bring a large pot of water to a boil. Add the baby broccoli and cook until bright green and crisp-tender, about 1 minute. Scoop it into a bowl of ice water, then drain and pat dry.
3. **Cook the soba:** Return the water to a boil and cook the soba noodles as the package directs until just tender, usually 4 to 5 minutes. Drain, rinse under cold running water for 1 minute and drain well.
4. **Oil the noodles:** Toss the noodles with 1 tsp of the sesame oil so they do not stick.
5. **Sear the tofu:** Heat a wok or large skillet over medium-high heat. Add the extra-firm tofu and 1 tbsp of the neutral oil and sear the tofu in a single layer, turning, until golden on several sides, 4 to 5 minutes. Move it to a plate.
6. **Stir-fry the mushrooms:** Add the red pepper flakes, shiitake mushrooms, scallions, and the rest of the neutral oil to the pan, holding back the scallion greens. Stir-fry until the mushrooms soften and brown at the edges, 2 to 3 minutes.
7. **Toss it together:** Add the broccoli, noodles, tofu and sauce. Lower the heat to medium and toss gently until everything is hot and glossy, 1 to 2 minutes.
8. **Finish and serve:** Fold in the cilantro and the rest of the sesame oil along with the scallion greens. Taste for salt and serve right away.
