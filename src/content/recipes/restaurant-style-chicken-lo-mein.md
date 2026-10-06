---
miseId: 62d807bf-73d2-4863-9f96-50c7842d0ed6
title: Restaurant-Style Chicken Lo Mein
role: main
vibe: quick
difficulty: easy
prepTime: 20 min
cookTime: 15 min
totalTime: About 35 min with ready-to-stir-fry noodles; extra for raw-noodle preparation or pan loads
servings: 6 portions
cookingMethods:
  - stir-fry
categories:
  - Chinese
  - Dinner
source: thewoksoflife.com
ingredients:
  - '--- Chicken coating and sear ---'
  - '8 oz (225 g) boneless skinless chicken thighs, raw, fully thawed if frozen, cut into thin strips'
  - 2 tsp cornstarch
  - 2 tsp water for the chicken coating
  - 2 tsp oil for the chicken coating
  - 2 tbsp oil for searing the chicken
  - '--- Noodles, vegetables and sauce ---'
  - '16 oz (450 g) fresh lo mein egg noodles, check whether raw or already cooked'
  - 'noodle-preparation water, as needed for the package cooking or hot rinse'
  - 2 tbsp oil for the vegetables
  - '1 garlic clove, minced'
  - '4 cups cabbage, shredded'
  - '2 medium carrots, julienned'
  - 1 tbsp Shaoxing wine or dry sherry cooking wine
  - >-
    1/4 cup water for loosening noodles, about this much if noodles do not separate; add gradually,
    optional
  - 1 tbsp soy sauce
  - 4 tsp dark soy sauce
  - 1 tsp sesame oil
  - 1/8 tsp salt
  - 1/8 tsp sugar
  - '2 cups mung bean sprouts, washed and drained'
  - '2 scallions, julienned'
sourceUrl: 'https://thewoksoflife.com/chicken-lo-mein/'
cuisines:
  - Chinese
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: chicken
      name: Chicken coating and sear
      ingredients:
        - id: chicken
          key: chicken-thighs
          name: boneless skinless chicken thighs
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: coat
              share: 1
          equivalents:
            - amount: 225
              unit: g
          preparation: 'raw, fully thawed if frozen, cut into thin strips'
        - id: starch
          key: cornstarch
          name: cornstarch
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: coat
              share: 1
        - id: water
          key: water
          name: water for the chicken coating
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: coat
              share: 1
          role: cooking-water
        - id: coating-oil
          key: oil
          name: oil for the chicken coating
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: coat
              share: 1
        - id: sear-oil
          key: oil
          name: oil for searing the chicken
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sear
              share: 1
    - id: noodles
      name: 'Noodles, vegetables and sauce'
      ingredients:
        - id: noodles
          key: fresh-lo-mein-egg-noodles
          name: fresh lo mein egg noodles
          quantity:
            amount: 16
            unit: oz
          uses:
            - step: noodles
              share: 1
          equivalents:
            - amount: 450
              unit: g
          preparation: check whether raw or already cooked
        - id: prep-water
          key: water
          name: noodle-preparation water
          allowance: as needed for the package cooking or hot rinse
          uses:
            - step: noodles
              share: 1
          role: cooking-water
        - id: veg-oil
          key: oil
          name: oil for the vegetables
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: vegetables
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 1
            unit: count
          uses:
            - step: vegetables
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: cabbage
          key: cabbage
          name: cabbage
          quantity:
            amount: 4
            unit: cup
          uses:
            - step: vegetables
              share: 1
          preparation: shredded
        - id: carrot
          key: carrot
          name: medium carrot
          quantity:
            amount: 2
            unit: count
          uses:
            - step: vegetables
              share: 1
          plural: medium carrots
          preparation: julienned
        - id: wine
          key: shaoxing-wine-or-dry-sherry
          name: Shaoxing wine or dry sherry cooking wine
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: wine
              share: 1
        - id: loosening-water
          key: water
          name: water for loosening noodles
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: toss
              share: 1
          optional: true
          preparation: about this much if noodles do not separate; add gradually
          role: cooking-water
        - id: soy
          key: soy-sauce
          name: soy sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: dark-soy
          key: dark-soy-sauce
          name: dark soy sauce
          quantity:
            amount: 4
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: sesame
          key: sesame-oil
          name: sesame oil
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: salt
          key: salt
          name: salt
          quantity:
            amount: 1/8
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 1/8
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: sprouts
          key: mung-bean-sprouts
          name: mung bean sprouts
          quantity:
            amount: 2
            unit: cup
          uses:
            - step: finish
              share: 1
          preparation: washed and drained
        - id: scallion
          key: scallion
          name: scallion
          quantity:
            amount: 2
            unit: count
          uses:
            - step: finish
              share: 1
          plural: scallions
          preparation: julienned
  steps:
    - id: noodles
      title: Prepare the noodles
      text: >-
        Prepare {{ingredients}} according to the product’s state. If the fresh noodles are raw, boil
        according to the package until al dente, rinse briefly with warm water and drain thoroughly.
        If already cooked, use a brief hot-water rinse to loosen them, then drain thoroughly. Set
        beside the stove.
    - id: coat
      title: Coat the chicken
      text: >-
        Combine {{ingredients}} in a bowl. Have the vegetables cut and all the seasonings measured
        before heating the wok; keep raw chicken separate from ready-to-eat food.
    - id: sear
      title: Cook the chicken
      text: >-
        Heat {{ingredients}} in a wok over high heat. Spread the coated chicken in a single layer
        and cook, turning as needed, until browned and the thickest strips reach 165°F / 74°C;
        insert a thin-tip thermometer from the side. Transfer to a clean plate. Use extra loads if
        needed and divide the measured searing oil among them; the final toss is brief.
    - id: vegetables
      title: Stir-fry the vegetables
      text: >-
        Have {{ingredients}} ready. Heat the oil in the wok and add garlic; after about 10 seconds,
        add cabbage and carrots. Stir-fry over high heat for about 1 minute, keeping everything
        moving. Use manageable pan loads rather than piling vegetables above the heated cooking
        surface.
    - id: wine
      title: Add the wine
      text: 'Add {{ingredients}} around the perimeter of the wok and toss with the vegetables.'
    - id: toss
      title: Add noodles and chicken
      text: >-
        Return all the cooked chicken and add the prepared noodles. Lift and toss from the bottom
        for about 30 seconds. Use {{ingredients}} only if needed to separate clumped noodles, adding
        it gradually. Cover for about 1 minute, then uncover.
    - id: sauce
      title: Season
      text: >-
        Add {{ingredients}} and stir-fry for about 30 seconds until the noodles are evenly coated.
        If the whole measured batch is too large to toss freely, finish in loads, dividing the
        prepared chicken, noodles, vegetables and seasonings proportionally.
    - id: finish
      title: Finish
      text: >-
        Add {{ingredients}} and toss, starting to check at about 1 minute. Continue until the
        sprouts are thoroughly cooked rather than lightly warmed, especially when serving children
        or other diners vulnerable to foodborne illness. Check chicken for 165°F / 74°C before
        serving. Divide among the portions and serve hot.
learning:
  focus: Prepare the right fresh noodle state before a fast lo mein toss
  outcome: >-
    Separate, evenly seasoned egg noodles with fully cooked chicken, cooked sprouts and vegetables
    that retain some bite.
  techniques:
    - stir-frying
    - starch
    - temperature
  before:
    - >-
      Fresh noodles may be raw or already cooked. Read the package before starting; the wok stage
      cannot replace boiling raw noodles until al dente.
    - >-
      Measure the coating oil, chicken-searing oil and vegetable oil separately. The cooking oil is
      additional to the oil coating the chicken.
    - >-
      The original batch lists six portions; appetites and accompanying dishes affect portion size.
      Use a wok that lets you turn the noodles freely, or finish in loads and divide all ingredients
      proportionally.
  checkpoints:
    - step: 1
      cue: 'Noodles are al dente, loosened and thoroughly drained before entering the wok.'
      why: >-
        Raw noodles need their package cooking step, while excess rinse water dilutes the modest
        sauce.
    - step: 3
      cue: The thickest chicken strips measure 165°F / 74°C before going to a clean plate.
      why: >-
        The covered noodle stage and final toss are short; browning alone does not establish cooked
        chicken.
    - step: 7
      cue: Noodles separate when lifted and have an even brown coating without a puddle beneath them.
      why: Lifting from the bottom distributes the soy-sesame seasoning without crushing the noodles.
  troubleshooting:
    - problem: Noodles clump together
      cause: They were not loosened before frying or have dried into a tight mass.
      fix: >-
        Lift gently from the bottom and use the listed optional loosening water gradually. Do not
        keep adding unmeasured liquid; loosen and drain the next noodle load before it enters the
        wok.
    - problem: The wok steams and is hard to toss
      cause: The batch is too large or the noodles brought in excess water.
      fix: >-
        Finish in smaller loads with proportional shares of every ingredient. Keep the already
        cooked chicken on its clean plate only while the remaining stages are completed.
  storage: >-
    Refrigerate in shallow containers within 2 hours, or 1 hour above 90°F / 32°C; keep at 40°F /
    4°C or colder and use within 3–4 days. Reheat leftovers to 165°F / 74°C throughout, turning and
    stirring for even heating. Noodles soften and sprouts lose crispness after storage; reheat only
    the portion needed.
  timing: >-
    The approximately 35-minute plan uses noodles already prepared for stir-frying: about 20 minutes
    of cutting and measuring, then about 15 minutes at the stove. Raw-noodle package cooking and
    water heating require additional elapsed time if they do not fit within preparation. Extra
    searing or finishing loads and thoroughly cooking sprouts can extend the stove time.
  sources:
    - title: The Woks of Life — Chicken lo mein
      url: 'https://thewoksoflife.com/chicken-lo-mein/'
    - title: FoodSafety.gov — Safe minimum internal temperatures
      url: 'https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures'
    - title: FDA — Safe food handling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: FDA — Selecting and serving produce safely
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-produce-safely'
    - title: USDA FSIS — Leftovers and food safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

Cornstarch lightly coats the sliced chicken while cabbage and carrots provide crunch. Loosen and drain the egg noodles before heating the wok, then lift them from the bottom to distribute the soy-sesame seasoning.

## Directions

1. **Prepare the noodles:** Prepare fresh lo mein egg noodles and noodle-preparation water according to the product’s state. If the fresh noodles are raw, boil according to the package until al dente, rinse briefly with warm water and drain thoroughly. If already cooked, use a brief hot-water rinse to loosen them, then drain thoroughly. Set beside the stove.
2. **Coat the chicken:** Combine boneless skinless chicken thighs, cornstarch, water for the chicken coating, and oil for the chicken coating in a bowl. Have the vegetables cut and all the seasonings measured before heating the wok; keep raw chicken separate from ready-to-eat food.
3. **Cook the chicken:** Heat oil for searing the chicken in a wok over high heat. Spread the coated chicken in a single layer and cook, turning as needed, until browned and the thickest strips reach 165°F / 74°C; insert a thin-tip thermometer from the side. Transfer to a clean plate. Use extra loads if needed and divide the measured searing oil among them; the final toss is brief.
4. **Stir-fry the vegetables:** Have oil for the vegetables, garlic clove, cabbage, and medium carrots ready. Heat the oil in the wok and add garlic; after about 10 seconds, add cabbage and carrots. Stir-fry over high heat for about 1 minute, keeping everything moving. Use manageable pan loads rather than piling vegetables above the heated cooking surface.
5. **Add the wine:** Add Shaoxing wine or dry sherry cooking wine around the perimeter of the wok and toss with the vegetables.
6. **Add noodles and chicken:** Return all the cooked chicken and add the prepared noodles. Lift and toss from the bottom for about 30 seconds. Use water for loosening noodles (if using) only if needed to separate clumped noodles, adding it gradually. Cover for about 1 minute, then uncover.
7. **Season:** Add soy sauce, dark soy sauce, sesame oil, salt, and sugar and stir-fry for about 30 seconds until the noodles are evenly coated. If the whole measured batch is too large to toss freely, finish in loads, dividing the prepared chicken, noodles, vegetables and seasonings proportionally.
8. **Finish:** Add mung bean sprouts and scallions and toss, starting to check at about 1 minute. Continue until the sprouts are thoroughly cooked rather than lightly warmed, especially when serving children or other diners vulnerable to foodborne illness. Check chicken for 165°F / 74°C before serving. Divide among the portions and serve hot.
