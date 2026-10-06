---
miseId: 024dad2e-4f51-484d-a6e4-ec77751a895a
title: Lemon-Miso Tofu with Broccoli
difficulty: easy
cookingMethods:
  - fry
  - saute
  - simmer
dietary:
  - vegetarian
occasions:
  - weeknight
  - meal-prep
flavorProfile:
  - sweet
  - savory
  - acidic
  - umami
cuisines:
  - Japanese
role: main
vibe: comfort
prepTime: About 15–25 min active preparation with already-pressed tofu
cookTime: 'About 25–35 min, longer if the pan needs batches'
totalTime: 'About 45–65 min, excluding pressing tofu'
servings: 4 portions
pairsWith:
  - miso-soup
  - dashi-japanese-sea-stock
  - steamed-edamame
ingredients:
  - '--- Lemon-miso sauce ---'
  - 3/4 cup Hot water
  - 2 tbsp White (shiro) miso paste
  - 1/4 cup Fresh lemon juice
  - 3 tbsp Maple syrup
  - 1 tbsp Cornstarch for the sauce
  - 1/2 tsp Salt for the sauce
  - '--- Tofu ---'
  - '14 oz Extra-firm tofu, pressed dry, cut into roughly 1-inch cubes'
  - 1/3 cup Cornstarch for dredging
  - 'Salt and black pepper, to season the coating'
  - 3 tbsp Neutral frying oil
  - >-
    Neutral frying oil, additional only as needed if the pan dries while frying
    tofu
  - '--- Vegetables and finish ---'
  - '1 lb Fresh broccoli, small florets'
  - 'Salt and black pepper, to season the broccoli'
  - >-
    Neutral frying oil, additional only as needed if the pan dries while cooking
    broccoli
  - 2 tsp Toasted sesame oil
  - '2 Garlic cloves, minced'
  - '1 1-inch piece of fresh ginger, grated'
  - '2 Scallions, chopped'
  - 'Cooked rice, for serving, if desired, optional'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from cooking.nytimes.com
sourceUrl: >-
  https://cooking.nytimes.com/recipes/1026706-lemon-miso-tofu-with-broccoli?smid=ck-recipe-iOS-share
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: sauce
      name: Lemon-miso sauce
      ingredients:
        - id: water
          key: water
          name: Hot water
          quantity:
            amount: 0.75
            unit: cup
          uses:
            - step: sauce
              share: 1
        - id: miso
          key: miso
          name: White (shiro) miso paste
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: lemon
          key: lemon
          name: Fresh lemon juice
          quantity:
            amount: 0.25
            unit: cup
          uses:
            - step: sauce
              share: 1
        - id: maple
          key: maple
          name: Maple syrup
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: starch
          key: starch
          name: Cornstarch for the sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: salt
          key: salt
          name: Salt for the sauce
          quantity:
            amount: 0.5
            unit: tsp
          uses:
            - step: sauce
              share: 1
    - id: tofu
      name: Tofu
      ingredients:
        - id: tofu
          key: tofu
          name: Extra-firm tofu
          quantity:
            amount: 14
            unit: oz
          uses:
            - step: coat
              share: 1
          preparation: 'pressed dry, cut into roughly 1-inch cubes'
        - id: starch
          key: starch
          name: Cornstarch for dredging
          quantity:
            amount: 0.3333333333333333
            unit: cup
          uses:
            - step: coat
              share: 1
        - id: seasoning
          key: seasoning
          name: Salt and black pepper
          allowance: to season the coating
          uses:
            - step: coat
              share: 1
        - id: oil
          key: oil
          name: Neutral frying oil
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: fry
              share: 1
        - id: extra-oil
          key: extra-tofu-oil
          name: Neutral frying oil
          allowance: additional only as needed if the pan dries while frying tofu
          uses:
            - step: fry
              share: 1
    - id: vegetables
      name: Vegetables and finish
      ingredients:
        - id: broccoli
          key: broccoli
          name: Fresh broccoli
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: broccoli
              share: 1
          preparation: small florets
        - id: veg-seasoning
          key: veg-seasoning
          name: Salt and black pepper
          allowance: to season the broccoli
          uses:
            - step: broccoli
              share: 1
        - id: extra-oil
          key: extra-oil
          name: Neutral frying oil
          allowance: additional only as needed if the pan dries while cooking broccoli
          uses:
            - step: broccoli
              share: 1
        - id: sesame
          key: sesame
          name: Toasted sesame oil
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: aromatics
              share: 1
        - id: garlic
          key: garlic
          name: Garlic clove
          quantity:
            amount: 2
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: Garlic cloves
          preparation: minced
        - id: ginger
          key: ginger
          name: 1-inch piece of fresh ginger
          quantity:
            amount: 1
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: 1-inch pieces of fresh ginger
          preparation: grated
        - id: scallion
          key: scallion
          name: Scallion
          quantity:
            amount: 2
            unit: count
          uses:
            - step: serve
              share: 1
          plural: Scallions
          preparation: chopped
        - id: rice
          key: rice
          name: Cooked rice
          allowance: 'for serving, if desired'
          uses:
            - step: serve
              share: 1
          optional: true
  steps:
    - id: sauce
      title: Mix the sauce
      text: >-
        Use {{ingredients}}. Dissolve the miso in the hot water, then whisk in
        lemon juice, maple syrup, sauce starch and sauce salt until smooth. Set
        aside and restir before cooking.
    - id: coat
      title: Coat the tofu
      text: >-
        Use {{ingredients}}. Pat the pressed tofu dry, toss gently in the
        dredging starch and season the coating. Shake off loose starch; discard
        any unused coating mixture.
    - id: fry
      title: Fry the tofu
      text: >-
        Use {{ingredients}}. Heat the measured starting oil in a 12-inch skillet
        over medium-high heat. Add the coated tofu in one layer, working in
        batches if needed. Turn as each face becomes golden, starting checks
        after 2–3 minutes; reduce heat if oil smokes. Add the separate tofu
        frying-oil allowance only if the pan dries between batches. Transfer to
        a plate.
    - id: broccoli
      title: Cook the broccoli
      text: >-
        Have {{ingredients}} ready. Cook the broccoli in the same skillet,
        adding the separate additional frying-oil allowance only if the pan
        dries. Season with the vegetable salt and pepper. Stir and turn until
        crisp-tender with browned edges, starting checks around 6 minutes.
        Transfer to the tofu plate.
    - id: aromatics
      title: Start the glaze
      text: >-
        Have {{ingredients}} ready. Briefly let the pan cool, then wipe out
        loose burnt crumbs using a heatproof spatula or tongs holding a towel;
        keep hands off the hot pan. Set over medium heat, add sesame oil, garlic
        and ginger, and stir for about 30 seconds until fragrant without
        burning.
    - id: finish
      title: Thicken and fold
      text: >-
        Restir the prepared sauce and pour it into the skillet. Gently simmer,
        stirring, for about 3–4 minutes until glossy and evenly thickened. Fold
        in the cooked tofu and broccoli with a broad spatula just until coated
        and hot; vigorous tossing can break the cubes.
    - id: serve
      title: Serve promptly
      text: >-
        Finish with {{ingredients}}. The tofu coating softens in the sauce;
        serve promptly.
learning:
  focus: >-
    Dry the pressed tofu before coating it: wet surfaces turn the starch into
    patches of paste
  outcome: >-
    Golden tofu and crisp-tender broccoli gently coated in glossy lemon-miso
    sauce.
  techniques:
    - starch
    - browning
  before:
    - >-
      The original batch is designed for a 12-inch skillet. Keep the tofu in one
      layer; use batches or more pans when scaling, and keep the cube size
      similar. Timings do not multiply with ingredient quantities.
    - >-
      Start with the listed frying oil and add only the separate as-needed
      allowance if the pan dries. Sesame oil is reserved for the aromatics, not
      counted as frying oil.
    - 'The ¾ cup water belongs to the sauce, not to a linked Dashi pairing.'
  checkpoints:
    - step: 3
      cue: Tofu releases from the pan and has a golden starch coating.
      why: >-
        Dry cubes and adequate space support even frying; reduce heat if oil
        smokes.
    - step: 6
      cue: >-
        The sauce is glossy and coats the vegetables without loose raw-starch
        streaks.
      why: >-
        Restir the sauce before it enters the pan; gentle folding protects the
        tofu.
  troubleshooting:
    - problem: Sauce is lumpy or tofu breaks during coating
      cause: Starch settled or the finished tofu was tossed too vigorously
      fix: >-
        Whisk the sauce again immediately before cooking it. Simmer until evenly
        glossy, then fold the tofu and broccoli with a broad spatula.
  substitutions:
    - ingredient: Maple syrup
      alternative: Use the same listed amount of honey.
      effect: Honey changes flavor and makes the dish non-vegan.
    - ingredient: 14 oz tofu in the original batch
      alternative: >-
        For the original batch, use one 14–16 oz package of extra-firm tofu
        instead of the listed 14 oz.
      effect: >-
        Keep the sauce unchanged for this original-batch package option and
        allow pan batches. Scale the chosen tofu amount with the portions.
  storage: >-
    Refrigerate promptly in shallow containers at 40°F or below, within 2 hours
    (1 hour above 90°F). Use within 3–4 days. Reheat to 165°F throughout. The
    tofu coating softens in storage.
  timing: >-
    About 15–25 min active preparation with already-pressed tofu; About 25–35
    min, longer if the pan needs batches; About 45–65 min, excluding pressing
    tofu.
  sources:
    - title: NYT Cooking — Lemon-Miso Tofu with Broccoli
      url: >-
        https://cooking.nytimes.com/recipes/1026706-lemon-miso-tofu-with-broccoli?smid=ck-recipe-iOS-share
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

Dry the pressed tofu before coating it: wet surfaces turn the starch into patches of paste. Fry the tofu and broccoli separately so both have room in the pan, then fold them gently into the thickened lemon-miso sauce. The coating softens after saucing, so serve promptly rather than relying on a fixed crispness clock.

## Directions

1. **Mix the sauce:** Use Hot water, White (shiro) miso paste, Fresh lemon juice, Maple syrup, Cornstarch for the sauce, and Salt for the sauce. Dissolve the miso in the hot water, then whisk in lemon juice, maple syrup, sauce starch and sauce salt until smooth. Set aside and restir before cooking.
2. **Coat the tofu:** Use Extra-firm tofu, Cornstarch for dredging, and Salt and black pepper. Pat the pressed tofu dry, toss gently in the dredging starch and season the coating. Shake off loose starch; discard any unused coating mixture.
3. **Fry the tofu:** Use Neutral frying oil and Neutral frying oil. Heat the measured starting oil in a 12-inch skillet over medium-high heat. Add the coated tofu in one layer, working in batches if needed. Turn as each face becomes golden, starting checks after 2–3 minutes; reduce heat if oil smokes. Add the separate tofu frying-oil allowance only if the pan dries between batches. Transfer to a plate.
4. **Cook the broccoli:** Have Fresh broccoli, Salt and black pepper, and Neutral frying oil ready. Cook the broccoli in the same skillet, adding the separate additional frying-oil allowance only if the pan dries. Season with the vegetable salt and pepper. Stir and turn until crisp-tender with browned edges, starting checks around 6 minutes. Transfer to the tofu plate.
5. **Start the glaze:** Have Toasted sesame oil, Garlic cloves, and 1-inch piece of fresh ginger ready. Briefly let the pan cool, then wipe out loose burnt crumbs using a heatproof spatula or tongs holding a towel; keep hands off the hot pan. Set over medium heat, add sesame oil, garlic and ginger, and stir for about 30 seconds until fragrant without burning.
6. **Thicken and fold:** Restir the prepared sauce and pour it into the skillet. Gently simmer, stirring, for about 3–4 minutes until glossy and evenly thickened. Fold in the cooked tofu and broccoli with a broad spatula just until coated and hot; vigorous tossing can break the cubes.
7. **Serve promptly:** Finish with Scallions and Cooked rice (if using). The tofu coating softens in the sauce; serve promptly.
