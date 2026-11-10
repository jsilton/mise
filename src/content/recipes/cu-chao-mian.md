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
prepTime: 20 min
cookTime: 15 min
totalTime: 35 min
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
pairingNotes:
  smashed-cucumber-salad: 'Cold, garlicky crunch next to the hot noodles.'
  steamed-broccoli: 'A plain green beside the rich, dark noodles.'
ingredients:
  - '--- Pork ---'
  - '6 oz pork tenderloin, cut into thin strips'
  - 3/4 tsp cornstarch
  - 1 tsp Shaoxing wine
  - 1/2 tsp light soy sauce
  - 1/8 tsp dark soy sauce
  - 1/8 tsp sugar
  - '--- Noodles ---'
  - 1 lb fresh Shanghai-style thick wheat noodles (cu mian)
  - '3 tbsp neutral oil, divided'
  - '8 fresh shiitake mushrooms, stems removed, caps sliced'
  - 2 1/2 tsp dark soy sauce
  - 2 1/2 tsp light soy sauce
  - 1/4 tsp sugar
  - '8 oz baby bok choy, trimmed and cut into bite-size pieces, stems and leaves kept apart'
  - '--- To serve ---'
  - 'Chinese black vinegar, for the table, optional'
source: Adapted from The Woks of Life
sourceUrl: 'https://thewoksoflife.com/shanghai-fried-noodles/'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: marinade
      name: Pork
      ingredients:
        - id: pork
          key: pork
          name: pork tenderloin
          quantity:
            amount: 6
            unit: oz
          uses:
            - step: marinate
              share: 1
          preparation: cut into thin strips
        - id: starch
          key: starch
          name: cornstarch
          quantity:
            amount: 3/4
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
          name: light soy sauce
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: dark-soy
          key: dark-soy
          name: dark soy sauce
          quantity:
            amount: 1/8
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 1/8
            unit: tsp
          uses:
            - step: marinate
              share: 1
    - id: pan
      name: Noodles
      ingredients:
        - id: noodles
          key: noodles
          name: fresh Shanghai-style thick wheat noodles (cu mian)
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: prepare
              share: 1
        - id: oil
          key: oil
          name: neutral oil
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: pork
              share: 1/3
            - step: noodles
              share: 2/3
        - id: mushroom
          key: mushroom
          name: fresh shiitake mushroom
          quantity:
            amount: 8
            unit: count
          uses:
            - step: noodles
              share: 1
          plural: fresh shiitake mushrooms
          preparation: 'stems removed, caps sliced'
        - id: dark-soy
          key: dark-soy
          name: dark soy sauce
          quantity:
            amount: 2 1/2
            unit: tsp
          uses:
            - step: glaze
              share: 1
        - id: light-soy
          key: light-soy
          name: light soy sauce
          quantity:
            amount: 2 1/2
            unit: tsp
          uses:
            - step: glaze
              share: 1
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: glaze
              share: 1
        - id: bok
          key: bok
          name: baby bok choy
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: finish
              share: 1
          preparation: 'trimmed and cut into bite-size pieces, stems and leaves kept apart'
    - id: serve
      name: To serve
      ingredients:
        - id: vinegar
          key: vinegar
          name: Chinese black vinegar
          allowance: for the table
          uses:
            - step: serve
              share: 1
          optional: true
  steps:
    - id: marinate
      title: Marinate the pork
      text: 'Toss {{ingredients}} in a bowl until coated. Let stand 10 minutes.'
    - id: prepare
      title: Boil the noodles
      text: >-
        Meanwhile, cook {{ingredients}} in a large pot of boiling water until just tender, 2 to 3
        minutes. Drain, rinse under cold water and shake dry.
    - id: pork
      title: Sear the pork
      text: >-
        Heat {{ingredients}} in a wok over high heat until it shimmers. Add the pork in a single
        layer and stir-fry until browned and just cooked through, about 2 minutes. Move it to a
        plate.
    - id: noodles
      title: Cook the mushrooms
      text: >-
        Lower the heat to medium. Add {{ingredients}} to the wok and stir-fry until the mushrooms
        soften, about 2 minutes. Add the noodles and toss gently with tongs or chopsticks to
        separate them.
    - id: glaze
      title: Glaze the noodles
      text: >-
        Turn the heat to high and add {{ingredients}}. Stir-fry until the noodles are evenly dark
        and glossy, about 3 minutes.
    - id: finish
      title: Add the greens
      text: >-
        Add the stems of {{ingredients}} and the pork. Toss for 1 minute, then add the leaves and
        toss until just wilted, about 30 seconds more. The stems should still crunch.
    - id: serve
      title: Serve
      text: 'Serve hot, with {{ingredients}} at the table for a few drops on each bowl.'
learning:
  techniques:
    - stir-frying
    - temperature
  substitutions:
    - ingredient: fresh Shanghai-style thick wheat noodles (cu mian)
      alternative: Frozen udon or thick egg noodles
      effect: >-
        Udon is the closest match for chew. Cook it by the package directions before it goes in the
        wok.
    - ingredient: Shaoxing wine
      alternative: Dry sherry
      effect: Close in flavor. Use the same amount.
    - ingredient: baby bok choy
      alternative: Choy sum or Napa cabbage
      effect: Choy sum cooks the same way. Napa cabbage is softer and sweeter.
  storage: Keeps 3 days in the fridge. Reheat in a hot skillet with a splash of water.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

Cu chao mian is Shanghai's everyday fried noodle dish: thick, chewy wheat noodles with pork, shiitakes and bok choy. Dark soy sauce is what makes it, coating every noodle a deep, glossy mahogany with a gentle sweetness. A few drops of black vinegar at the table cut the richness.

## Directions

1. **Marinate the pork:** Toss the pork tenderloin, cornstarch, Shaoxing wine, 1/2 tsp of the light soy sauce, 1/8 tsp of the dark soy sauce, and 1/8 tsp of the sugar in a bowl until coated. Let stand 10 minutes.
2. **Boil the noodles:** Meanwhile, cook the Shanghai-style thick wheat noodles in a large pot of boiling water until just tender, 2 to 3 minutes. Drain, rinse under cold water and shake dry.
3. **Sear the pork:** Heat 1 tbsp of the oil in a wok over high heat until it shimmers. Add the pork in a single layer and stir-fry until browned and just cooked through, about 2 minutes. Move it to a plate.
4. **Cook the mushrooms:** Lower the heat to medium. Add the shiitake mushrooms and the rest of the oil to the wok and stir-fry until the mushrooms soften, about 2 minutes. Add the noodles and toss gently with tongs or chopsticks to separate them.
5. **Glaze the noodles:** Turn the heat to high and add 2 1/2 tsp of the dark soy sauce, 2 1/2 tsp of the light soy sauce, and 1/4 tsp of the sugar. Stir-fry until the noodles are evenly dark and glossy, about 3 minutes.
6. **Add the greens:** Add the stems of baby bok choy and the pork. Toss for 1 minute, then add the leaves and toss until just wilted, about 30 seconds more. The stems should still crunch.
7. **Serve:** Serve hot, with the Chinese black vinegar (if using) at the table for a few drops on each bowl.
