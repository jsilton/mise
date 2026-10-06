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
prepTime: About 15–25 min active preparation
cookTime: 'About 15–20 min cooking, with overlapping water preparation'
totalTime: About 30–45 min
servings: 4 portions
pairsWith:
  - miso-soup
  - dashi-japanese-sea-stock
  - steamed-edamame
ingredients:
  - '--- Sauce ---'
  - 1/2 cup Chicken or vegetable stock
  - 1 tbsp Soy sauce
  - 1 tbsp Shaoxing wine
  - '1 tbsp Fresh ginger, minced'
  - '1 tbsp Garlic, minced'
  - 1/2 tsp Sugar
  - 'Salt, to taste in the sauce'
  - '--- Noodles and blanching ---'
  - '1/2 lb Baby broccoli, florets and stems sliced to cook evenly'
  - 'Boiling water, enough for blanching the broccoli'
  - 'Ice water, for cooling the blanched broccoli, then discarded'
  - 8 oz Soba noodles
  - 'Water, enough to cook the noodles per package instructions'
  - 2 tsp Toasted sesame oil
  - '--- Pan and finish ---'
  - '1/2 lb Extra-firm tofu, drained, patted dry and diced'
  - 2 tbsp Neutral oil
  - 1/2 tsp Red pepper flakes
  - '6 oz Fresh shiitake mushrooms, tough stems removed, caps sliced'
  - '1 Bunch of scallions, sliced, light and dark-green parts kept separate'
  - '1/2 cup Fresh cilantro, chopped'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from cooking.nytimes.com
sourceUrl: >-
  https://cooking.nytimes.com/recipes/1016016-soba-noodles-with-shiitakes-broccoli-and-tofu?smid=ck-recipe-iOS-share
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
          name: Chicken or vegetable stock
          quantity:
            amount: 0.5
            unit: cup
          uses:
            - step: sauce
              share: 1
        - id: soy
          key: soy
          name: Soy sauce
          quantity:
            amount: 1
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
          name: Fresh ginger
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
          preparation: minced
        - id: garlic
          key: garlic
          name: Garlic
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
          preparation: minced
        - id: sugar
          key: sugar
          name: Sugar
          quantity:
            amount: 0.5
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: salt
          key: salt
          name: Salt
          allowance: to taste in the sauce
          uses:
            - step: sauce
              share: 1
    - id: noodles
      name: Noodles and blanching
      ingredients:
        - id: broccoli
          key: broccoli
          name: Baby broccoli
          quantity:
            amount: 0.5
            unit: lb
          uses:
            - step: blanch
              share: 1
          preparation: florets and stems sliced to cook evenly
        - id: blanch-water
          key: blanch-water
          name: Boiling water
          allowance: enough for blanching the broccoli
          uses:
            - step: blanch
              share: 1
          role: cooking-water
        - id: ice-water
          key: ice-water
          name: Ice water
          allowance: 'for cooling the blanched broccoli, then discarded'
          uses:
            - step: blanch
              share: 1
          role: cooking-water
        - id: noodles
          key: noodles
          name: Soba noodles
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: noodles
              share: 1
        - id: noodle-water
          key: noodle-water
          name: Water
          allowance: enough to cook the noodles per package instructions
          uses:
            - step: noodles
              share: 1
          role: cooking-water
        - id: sesame
          key: sesame
          name: Toasted sesame oil
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: noodles
              share: 0.5
            - step: vegetables
              share: 0.5
    - id: pan
      name: Pan and finish
      ingredients:
        - id: tofu
          key: tofu
          name: Extra-firm tofu
          quantity:
            amount: 0.5
            unit: lb
          uses:
            - step: tofu
              share: 1
          preparation: 'drained, patted dry and diced'
        - id: oil
          key: oil
          name: Neutral oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: tofu
              share: 0.5
            - step: vegetables
              share: 0.5
        - id: flakes
          key: flakes
          name: Red pepper flakes
          quantity:
            amount: 0.5
            unit: tsp
          uses:
            - step: vegetables
              share: 1
        - id: mushrooms
          key: mushrooms
          name: Fresh shiitake mushrooms
          quantity:
            amount: 6
            unit: oz
          uses:
            - step: vegetables
              share: 1
          preparation: 'tough stems removed, caps sliced'
        - id: scallions
          key: scallions
          name: Bunch of scallions
          quantity:
            amount: 1
            unit: count
          uses:
            - step: vegetables
              share: 1
          plural: Bunches of scallions
          preparation: 'sliced, light and dark-green parts kept separate'
        - id: cilantro
          key: cilantro
          name: Fresh cilantro
          quantity:
            amount: 0.5
            unit: cup
          uses:
            - step: vegetables
              share: 1
          preparation: chopped
  steps:
    - id: sauce
      title: Mix the sauce
      text: >-
        Whisk {{ingredients}} together. This is the garlic-and-ginger-in-sauce
        route; set aside.
    - id: blanch
      title: Blanch the broccoli
      text: >-
        Use {{ingredients}}. Add broccoli to boiling water and start checking
        after about 1 minute; cook until just crisp-tender. Transfer to the ice
        water, then drain thoroughly and pat dry. Discard the cooling water.
    - id: noodles
      title: Cook and rinse the soba
      text: >-
        Use {{ingredients}}. Cook noodles according to their package
        instructions, checking for a just-tender bite. Drain, rinse under cold
        running water to remove surface starch, then drain thoroughly. Toss with
        this step’s sesame-oil allocation.
    - id: tofu
      title: Cook the tofu
      text: >-
        Use {{ingredients}}. Heat this step’s neutral-oil allocation in a large
        wok or skillet over medium-high heat; it should shimmer without smoking.
        Add tofu in a manageable single layer and cook, turning, until it begins
        to color, starting checks after 2 minutes. Transfer to a clean plate.
    - id: vegetables
      title: Finish the stir-fry
      text: >-
        Have {{ingredients}} ready. Add the remaining neutral-oil allocation and
        red pepper flakes to the pan, then the mushrooms and light scallion
        parts; stir-fry until the mushrooms soften, about 2–3 minutes. Add
        drained broccoli, cooked noodles, tofu and all the prepared sauce.
        Reduce heat to medium and toss gently until evenly coated and hot, about
        1–2 minutes, without requiring a syrupy reduction. Fold in the dark
        scallion greens, cilantro and remaining sesame oil during the last 30–60
        seconds.
    - id: serve
      title: Serve
      text: >-
        Serve immediately. Keep scaled pan loads small enough to turn the
        noodles without crushing them.
learning:
  focus: >-
    Cook the noodles to their package’s texture cue, then rinse and drain well
    before they reach the pan
  outcome: >-
    Just-tender noodles, tofu and vegetables evenly coated with the finishing
    stock.
  techniques:
    - stir-frying
    - temperature
  before:
    - >-
      Have the sauce and all sliced ingredients ready before heating the wok.
      For the original batch, the saved method uses a 14-inch flat-bottomed wok;
      a large skillet works only if there is room to toss, otherwise cook
      smaller batches.
    - >-
      Two teaspoons sesame oil is the total for the original batch: half coats
      the cooked noodles and half finishes the dish. Neutral oil is a separate
      two-tablespoon total, divided equally between tofu and vegetables.
    - >-
      Scale measured ingredients together; keep noodle doneness and manageable
      pan loads rather than multiplying stir-fry times. Linked Dashi is a
      separate pairing, not an automatic replacement for the listed chicken or
      vegetable stock.
  checkpoints:
    - step: 3
      cue: >-
        Noodles are just cooked to their package cue, rinsed and thoroughly
        drained.
      why: >-
        Different soba formulas need different clocks; wet noodles dilute the
        finishing stock.
    - step: 5
      cue: Vegetables remain crisp-tender and noodles are evenly coated and hot.
      why: >-
        Moderate finishing heat avoids scorching aromatics and over-reducing the
        small stock amount.
  troubleshooting:
    - problem: Noodles clump or the pan steams heavily
      cause: Noodles were poorly drained or the pan was overcrowded
      fix: >-
        Drain thoroughly and use smaller pan loads. Toss gently with the listed
        finishing stock to loosen noodles; do not force a syrup reduction.
  substitutions:
    - ingredient: Shaoxing wine
      alternative: Use the same listed amount of dry sherry.
      effect: Dry sherry changes the flavor without changing the liquid allocation.
    - ingredient: Garlic and ginger sauce route
      alternative: >-
        Keep garlic and ginger out of the sauce; stir them with the flakes in
        the vegetable oil for no more than 10 seconds before adding mushrooms.
      effect: >-
        This moves garlic and ginger to the brief hot-oil stage; all prepared
        sauce is still added at the finish.
    - ingredient: Split sesame-oil route
      alternative: >-
        Toss the full listed sesame-oil total with the cooked noodles and omit
        finishing sesame oil.
      effect: All sesame oil goes on the noodles; omit the finishing dose.
    - ingredient: Red pepper flakes
      alternative: >-
        For the original batch, use ¼–½ tsp flakes or 1–2 chopped serrano or
        Thai chiles instead of the listed flakes.
      effect: >-
        Separate heat options, not an asserted equal-heat conversion; scale the
        chosen option with the batch.
    - ingredient: Seasoning the sauce and blanching water
      alternative: >-
        For an extra-seasoning option, add salt to taste to the broccoli
        blanching water before the broccoli, and use additional soy sauce to
        taste after the finished stir-fry is hot.
      effect: >-
        These are separate unmeasured allowances: blanching salt belongs to the
        cooking water and additional soy belongs to the finished dish. They do
        not change the measured soy amount or force salted blanching into the
        main route.
  storage: >-
    Refrigerate promptly in shallow containers at 40°F or below, within 2 hours
    (1 hour above 90°F). Use within 3–4 days. Reheat to 165°F throughout. The
    noodles soften in storage.
  timing: >-
    About 15–25 min active preparation; About 15–20 min cooking, with
    overlapping water preparation; About 30–45 min.
  sources:
    - title: 'NYT Cooking — Soba Noodles with Shiitakes, Broccoli and Tofu'
      url: >-
        https://cooking.nytimes.com/recipes/1016016-soba-noodles-with-shiitakes-broccoli-and-tofu?smid=ck-recipe-iOS-share
    - title: FoodSafety.gov — Safe minimum internal temperatures
      url: >-
        https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures
    - title: USDA — Leftovers and food safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

Cook the noodles to their package’s texture cue, then rinse and drain well before they reach the pan. Soba can contain wheat as well as buckwheat. Keep the tofu and mushrooms in manageable batches; the finishing stock warms and loosens the noodles rather than needing to become a reduced syrup.

## Directions

1. **Mix the sauce:** Whisk Chicken or vegetable stock, Soy sauce, Shaoxing wine, Fresh ginger, Garlic, Sugar, and Salt together. This is the garlic-and-ginger-in-sauce route; set aside.
2. **Blanch the broccoli:** Use Baby broccoli, Boiling water, and Ice water. Add broccoli to boiling water and start checking after about 1 minute; cook until just crisp-tender. Transfer to the ice water, then drain thoroughly and pat dry. Discard the cooling water.
3. **Cook and rinse the soba:** Use Soba noodles, Water, and 1/2 of the Toasted sesame oil. Cook noodles according to their package instructions, checking for a just-tender bite. Drain, rinse under cold running water to remove surface starch, then drain thoroughly. Toss with this step’s sesame-oil allocation.
4. **Cook the tofu:** Use Extra-firm tofu and 1/2 of the Neutral oil. Heat this step’s neutral-oil allocation in a large wok or skillet over medium-high heat; it should shimmer without smoking. Add tofu in a manageable single layer and cook, turning, until it begins to color, starting checks after 2 minutes. Transfer to a clean plate.
5. **Finish the stir-fry:** Have 1/2 of the Toasted sesame oil, 1/2 of the Neutral oil, Red pepper flakes, Fresh shiitake mushrooms, Bunch of scallions, and Fresh cilantro ready. Add the remaining neutral-oil allocation and red pepper flakes to the pan, then the mushrooms and light scallion parts; stir-fry until the mushrooms soften, about 2–3 minutes. Add drained broccoli, cooked noodles, tofu and all the prepared sauce. Reduce heat to medium and toss gently until evenly coated and hot, about 1–2 minutes, without requiring a syrupy reduction. Fold in the dark scallion greens, cilantro and remaining sesame oil during the last 30–60 seconds.
6. **Serve:** Serve immediately. Keep scaled pan loads small enough to turn the noodles without crushing them.
