---
miseId: 61213c23-52f5-43c8-8efe-8c34d03e2dd5
title: Cu Chao Mian (Shanghai Fried Noodles)
origin: China
difficulty: easy
cookingMethods:
  - fry
  - saute
occasions:
  - weeknight
  - quick-lunch
  - kid-friendly
flavorProfile:
  - sweet
  - savory
  - acidic
  - umami
cuisines:
  - Chinese
role: main
vibe: comfort
prepTime: 'About 15–25 min preparation, including the 10-minute marinade'
cookTime: >-
  About 15–20 min cooking, plus any separate noodle or dried-mushroom
  preparation
totalTime: About 30–45 min with prepared noodles and fresh mushrooms
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: excellent
equipment:
  - wok
pairsWith:
  - smashed-cucumber-salad
  - steamed-broccoli
ingredients:
  - '--- Pork and marinade ---'
  - '6 oz Pork tenderloin, thin strips'
  - 3/4 tsp Cornstarch
  - 1 tsp Shaoxing wine
  - 1/2 tsp Light soy sauce for the marinade
  - 1/8 tsp Dark soy sauce for the marinade
  - 1/8 tsp Sugar for the marinade
  - '--- Pan and noodle glaze ---'
  - 3 tbsp Neutral oil
  - '8 Fresh shiitake mushrooms, tough stems removed, caps sliced'
  - >-
    1 lb Japanese-style udon or thick egg noodles, prepare per actual product
    instructions before pan cooking
  - 'Water, for noodle preparation only if the package requires it'
  - 2 1/2 tsp Dark soy sauce for the noodles
  - 2 1/2 tsp Light soy sauce for the noodles
  - 1/4 tsp Sugar for the noodles
  - >-
    1 Bunch of baby bok choy, washed, trimmed and sliced; stems and leaves
    separated
  - >-
    Additional dark soy sauce, a little more for color, only if desired,
    optional
  - '--- Optional table finish ---'
  - 'Chinese black vinegar, a few drops at the table, if desired, optional'
source: Adapted from thewoksoflife.com
sourceUrl: 'https://thewoksoflife.com/shanghai-fried-noodles/'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: marinade
      name: Pork and marinade
      ingredients:
        - id: pork
          key: pork
          name: Pork tenderloin
          quantity:
            amount: 6
            unit: oz
          uses:
            - step: marinate
              share: 1
          preparation: thin strips
        - id: starch
          key: starch
          name: Cornstarch
          quantity:
            amount: 0.75
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: wine
          key: wine
          name: Shaoxing wine
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: light-soy
          key: light-soy
          name: Light soy sauce for the marinade
          quantity:
            amount: 0.5
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: dark-soy
          key: dark-soy
          name: Dark soy sauce for the marinade
          quantity:
            amount: 0.125
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: sugar
          key: sugar
          name: Sugar for the marinade
          quantity:
            amount: 0.125
            unit: tsp
          uses:
            - step: marinate
              share: 1
    - id: pan
      name: Pan and noodle glaze
      ingredients:
        - id: oil
          key: oil
          name: Neutral oil
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: pork
              share: 0.3333333333333333
            - step: noodles
              share: 0.6666666666666666
        - id: mushroom
          key: mushroom
          name: Fresh shiitake mushroom
          quantity:
            amount: 8
            unit: count
          uses:
            - step: noodles
              share: 1
          plural: Fresh shiitake mushrooms
          preparation: 'tough stems removed, caps sliced'
        - id: noodles
          key: noodles
          name: Japanese-style udon or thick egg noodles
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: prepare
              share: 1
          preparation: prepare per actual product instructions before pan cooking
        - id: water
          key: water
          name: Water
          allowance: for noodle preparation only if the package requires it
          uses:
            - step: prepare
              share: 1
          role: cooking-water
        - id: dark-soy
          key: dark-soy
          name: Dark soy sauce for the noodles
          quantity:
            amount: 2.5
            unit: tsp
          uses:
            - step: finish
              share: 1
        - id: light-soy
          key: light-soy
          name: Light soy sauce for the noodles
          quantity:
            amount: 2.5
            unit: tsp
          uses:
            - step: finish
              share: 1
        - id: sugar
          key: sugar
          name: Sugar for the noodles
          quantity:
            amount: 0.25
            unit: tsp
          uses:
            - step: finish
              share: 1
        - id: bok
          key: bok
          name: Bunch of baby bok choy
          quantity:
            amount: 1
            unit: count
          uses:
            - step: finish
              share: 1
          plural: Bunches of baby bok choy
          preparation: 'washed, trimmed and sliced; stems and leaves separated'
        - id: extra-dark-soy
          key: dark-soy
          name: Additional dark soy sauce
          allowance: 'a little more for color, only if desired'
          optional: true
          uses:
            - step: finish
              share: 1
    - id: serve
      name: Optional table finish
      ingredients:
        - id: vinegar
          key: vinegar
          name: Chinese black vinegar
          allowance: 'a few drops at the table, if desired'
          uses:
            - step: serve
              share: 1
          optional: true
  steps:
    - id: marinate
      title: Marinate the pork
      text: >-
        Toss {{ingredients}} until coated. Keep refrigerated for about 10
        minutes while preparing the other ingredients.
    - id: prepare
      title: Prepare the noodles
      text: >-
        Use {{ingredients}}. Follow the actual package’s cooking or reheating
        instructions and drain thoroughly if water was used. Loosen noodles on a
        clean board or in a bowl before they reach the hot wok; use cooking
        chopsticks or tongs in the pan.
    - id: pork
      title: Cook the pork
      text: >-
        Heat {{ingredients}} over medium-high heat in a wok or large skillet
        until shimmering, without smoking the oil. Add marinated pork in a thin
        layer and stir-fry, starting checks after about 2 minutes, until the
        thickest pieces reach 145°F /63°C. Transfer to a clean plate and rest at
        least 3 minutes while cooking mushrooms; keep raw-contact utensils
        separate.
    - id: noodles
      title: Cook mushrooms and noodles
      text: >-
        Use {{ingredients}}. Reduce heat to medium, add the remaining oil
        allocation and cook mushrooms until softened, starting checks after 2
        minutes. Add prepared noodles and lift gently until loosened and hot.
    - id: finish
      title: Coat noodles and cook greens
      text: >-
        Have {{ingredients}} ready. Add both NOODLE soy amounts and the noodle
        sugar, leaving the already-used marinade amounts separate. Fold until
        evenly dark and coated. If a deeper color is wanted, add
        {{name:pan.extra-dark-soy}} a little at a time and toss; this also
        increases saltiness. Add bok choy stems and the cooked, rested pork;
        stir until stems are crisp-tender, then fold in the leaves until wilted.
        Use more time if the stems are still tough rather than relying on a
        fixed 1-minute finish.
    - id: serve
      title: Serve
      text: 'Serve hot and offer {{ingredients}} separately.'
learning:
  focus: >-
    Cu chao mian keeps thick noodles, pork and greens together in a dark-soy
    coating
  outcome: >-
    Thick noodles, cooked pork and tender stems with separate marinade and glaze
    allocations.
  techniques:
    - stir-frying
    - temperature
  before:
    - >-
      For the original batch, use one pound of Japanese-style udon for four
      planning portions. Prepare the actual product before stir-frying; frozen,
      refrigerated and dried noodles need different preparation. Thick egg
      noodles follow their own package instructions and may give a different
      cooked quantity.
    - >-
      Scale measured ingredients together, keep pork strips thin and use
      manageable pan batches. The ten-minute marinade and doneness endpoint do
      not multiply with quantity.
    - >-
      For the original batch, the oil total is 3 tbsp: one-third for pork and
      two-thirds for mushrooms and noodles. The marinade’s dark soy and sugar
      are separate from the noodle-glaze amounts.
  checkpoints:
    - step: 3
      cue: Pork reaches 145°F and rests 3 minutes on a clean plate.
      why: Brown appearance alone is not the whole-muscle pork endpoint.
    - step: 5
      cue: >-
        Noodles are evenly coated and bok choy stems crisp-tender with leaves
        wilted.
      why: >-
        Split stems and leaves within the final stage so a fixed minute does not
        leave tough stems.
  troubleshooting:
    - problem: Noodles clump or sauce burns
      cause: Noodles were not prepared/loosened or the final heat is too high
      fix: >-
        Follow the product preparation before pan cooking, drain well and use
        smaller loads. Reduce to medium after cooking pork, and lift gently
        while coating noodles.
  substitutions:
    - ingredient: Pork tenderloin
      alternative: 'Use the same listed weight of thinly sliced pork shoulder, butt or loin.'
      effect: >-
        The cuts differ in tenderness; slice thinly and retain 145°F plus a
        3-minute rest.
    - ingredient: Shaoxing wine
      alternative: Use the same listed amount of dry cooking sherry.
      effect: This replaces the Shaoxing wine without adding a second marinade liquid.
    - ingredient: Baby bok choy
      alternative: Use the same listed bunch count of choy sum.
      effect: >-
        A distinct purchase option, not a weight conversion; use stem tenderness
        and wilted leaves as cues.
    - ingredient: Fresh shiitake mushrooms
      alternative: >-
        Use the same listed count of dried shiitake mushrooms, fully
        reconstituted and sliced.
      effect: >-
        Follow the product soaking instructions in advance; keep prolonged
        soaking refrigerated, drain well and exclude that separate task from the
        fresh-mushroom clock.
    - ingredient: Udon
      alternative: Use thick egg noodles at the listed purchase weight.
      effect: >-
        Follow that product’s instructions; dried and fresh products may give
        different cooked quantities, so use pan batches without claiming an
        equivalent finished yield.
  storage: >-
    Refrigerate promptly in shallow containers at 40°F or below, within 2 hours
    (1 hour above 90°F). Use within 3–4 days. Reheat leftovers to 165°F
    throughout; noodles soften in storage.
  timing: >-
    About 15–25 min preparation, including the 10-minute marinade; About 15–20
    min cooking, plus any separate noodle or dried-mushroom preparation; About
    30–45 min with prepared noodles and fresh mushrooms. Plan for extra time if
    the actual pan loads or component preparation take longer.
  sources:
    - title: The Woks of Life — Shanghai Fried Noodles
      url: 'https://thewoksoflife.com/shanghai-fried-noodles/'
    - title: FoodSafety.gov — state-specific minimum cooking temperatures
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

Cu chao mian keeps thick noodles, pork and greens together in a dark-soy coating. The small marinade and finishing sauce are separate: do not spend the marinade soy again in the noodle glaze. Loosen prepared noodles before they enter the hot pan, then lift and fold with chopsticks or tongs.

## Directions

1. **Marinate the pork:** Toss Pork tenderloin, Cornstarch, Shaoxing wine, Light soy sauce for the marinade, Dark soy sauce for the marinade, and Sugar for the marinade until coated. Keep refrigerated for about 10 minutes while preparing the other ingredients.
2. **Prepare the noodles:** Use Japanese-style udon or thick egg noodles and Water. Follow the actual package’s cooking or reheating instructions and drain thoroughly if water was used. Loosen noodles on a clean board or in a bowl before they reach the hot wok; use cooking chopsticks or tongs in the pan.
3. **Cook the pork:** Heat 1/3 of the Neutral oil over medium-high heat in a wok or large skillet until shimmering, without smoking the oil. Add marinated pork in a thin layer and stir-fry, starting checks after about 2 minutes, until the thickest pieces reach 145°F /63°C. Transfer to a clean plate and rest at least 3 minutes while cooking mushrooms; keep raw-contact utensils separate.
4. **Cook mushrooms and noodles:** Use 2/3 of the Neutral oil and Fresh shiitake mushrooms. Reduce heat to medium, add the remaining oil allocation and cook mushrooms until softened, starting checks after 2 minutes. Add prepared noodles and lift gently until loosened and hot.
5. **Coat noodles and cook greens:** Have Dark soy sauce for the noodles, Light soy sauce for the noodles, Sugar for the noodles, Bunch of baby bok choy, and Additional dark soy sauce (if using) ready. Add both NOODLE soy amounts and the noodle sugar, leaving the already-used marinade amounts separate. Fold until evenly dark and coated. If a deeper color is wanted, add Additional dark soy sauce a little at a time and toss; this also increases saltiness. Add bok choy stems and the cooked, rested pork; stir until stems are crisp-tender, then fold in the leaves until wilted. Use more time if the stems are still tough rather than relying on a fixed 1-minute finish.
6. **Serve:** Serve hot and offer Chinese black vinegar (if using) separately.
