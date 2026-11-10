---
miseId: 3bde7cd7-5ff0-4074-b042-7cbdb1914528
title: Pan Fried Noodles with Shrimp
difficulty: easy
cookingMethods:
  - fry
  - boil
occasions:
  - weeknight
  - weekend-project
  - comfort-food
flavorProfile:
  - spicy
  - savory
  - umami
cuisines:
  - Chinese
role: main
vibe: technical
prepTime: 30 min
cookTime: 25 min
totalTime: 55 min
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: good
equipment:
  - wok
pairsWith:
  - smashed-cucumber-salad
pairingNotes:
  smashed-cucumber-salad: 'Cold, garlicky cucumber against the hot, crisp noodles.'
ingredients:
  - '--- Noodle cake and greens ---'
  - 8 oz fresh Hong Kong-style egg noodles
  - 2 tbsp vegetable oil
  - 4 oz yu choy or baby bok choy
  - '--- Shrimp and gravy ---'
  - '1 lb large shrimp, peeled and deveined'
  - 1/4 tsp baking soda
  - 1 1/2 cups chicken stock
  - 1 1/2 tbsp oyster sauce
  - 1 tbsp soy sauce
  - 1 tsp sugar
  - 1/2 tsp toasted sesame oil
  - 1/4 tsp ground white pepper
  - 2 tbsp cornstarch
  - 2 tbsp cold water
  - 1 tbsp vegetable oil
  - 1/2 cup thinly sliced carrots and mushrooms
  - '1 tbsp fresh ginger, cut into thin matchsticks'
  - '2 garlic cloves, minced'
  - 1 tbsp Shaoxing wine
source: Adapted from The Woks of Life
sourceUrl: 'https://thewoksoflife.com/seafood-pan-fried-noodles/'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: noodles
      name: Noodle cake and greens
      ingredients:
        - id: noodles
          key: hk-egg-noodles
          name: fresh Hong Kong-style egg noodles
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: noodles
              share: 1
        - id: cake-oil
          key: vegetable-oil
          name: vegetable oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: cake
              share: 1
        - id: greens
          key: yu-choy-or-bok-choy
          name: yu choy or baby bok choy
          quantity:
            amount: 4
            unit: oz
          uses:
            - step: greens
              share: 1
    - id: gravy
      name: Shrimp and gravy
      ingredients:
        - id: shrimp
          key: shrimp
          name: large shrimp
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: shrimp
              share: 1
          preparation: peeled and deveined
        - id: soda
          key: baking-soda
          name: baking soda
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: shrimp
              share: 1
          role: discarded
        - id: stock
          key: chicken-stock
          name: chicken stock
          quantity:
            amount: 1 1/2
            unit: cup
          uses:
            - step: sauce
              share: 1
        - id: oyster
          key: oyster-sauce
          name: oyster sauce
          quantity:
            amount: 1 1/2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: soy
          key: soy-sauce
          name: soy sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: sesame
          key: toasted-sesame-oil
          name: toasted sesame oil
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: pepper
          key: white-pepper
          name: ground white pepper
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: starch
          key: cornstarch
          name: cornstarch
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: slurry
              share: 1
        - id: slurry-water
          key: water
          name: cold water
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: slurry
              share: 1
          role: cooking-water
        - id: wok-oil
          key: vegetable-oil
          name: vegetable oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: vegetables
              share: 1
        - id: vegetables
          key: carrots-and-mushrooms
          name: thinly sliced carrots and mushrooms
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: vegetables
              share: 1
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: aromatics
              share: 1
          preparation: cut into thin matchsticks
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 2
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: wine
          key: shaoxing-wine
          name: Shaoxing wine
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sear
              share: 1
  steps:
    - id: shrimp
      title: Treat the shrimp
      text: >-
        Toss {{ingredients}} in a bowl and refrigerate for 5 minutes. Rinse the shrimp well and pat
        them dry. The baking soda gives them a snappy texture.
    - id: sauce
      title: Mix the gravy
      text: 'Stir {{ingredients}} in a bowl until the sugar dissolves. Set it beside the stove.'
    - id: slurry
      title: Mix the slurry
      text: 'Stir {{ingredients}} together in a small cup.'
    - id: noodles
      title: Boil the noodles
      text: >-
        Bring a large pot of water to a boil. Cook {{ingredients}} until just tender, about 1
        minute, or as the package directs. Rinse with cold water and drain very well, shaking off as
        much water as you can. Keep the pot boiling for the greens.
    - id: cake
      title: Fry the first side
      text: >-
        Heat {{ingredients}} in a 10- to 12-inch nonstick skillet over medium heat. Spread the
        noodles in a thin, even cake. Fry without moving them until the bottom is golden and crisp,
        about 5 minutes.
    - id: flip
      title: Fry the second side
      text: >-
        Slide the cake onto a plate, flip it back into the pan and fry until the second side is
        golden, about 5 minutes. Move it to a serving platter.
    - id: greens
      title: Blanch the greens
      text: >-
        Drop {{ingredients}} into the boiling water and cook until the stems are just tender, 30
        seconds to 1 minute. Drain and arrange around the noodle cake.
    - id: vegetables
      title: Stir-fry the vegetables
      text: >-
        Heat a wok over high heat and add {{ingredients}}. Stir-fry until the carrots are
        crisp-tender, about 2 minutes.
    - id: aromatics
      title: Add the aromatics
      text: 'Add {{ingredients}} and stir until fragrant, about 30 seconds.'
    - id: sear
      title: Sear the shrimp
      text: >-
        Push the vegetables aside and add the shrimp in one layer. Sear for 1 minute per side, then
        pour {{ingredients}} around the edge of the wok.
    - id: gravy
      title: Thicken the gravy
      text: >-
        Pour in the gravy and bring it to a boil. Stir the slurry and add it a little at a time,
        stirring, until the gravy coats a spoon. You may not need it all. Simmer until the shrimp
        are opaque, about 1 minute. Taste and add a splash of soy sauce if it needs salt.
    - id: serve
      title: Serve
      text: >-
        Pour the shrimp and gravy over the center of the noodle cake, leaving the edges bare so they
        stay crisp. Serve right away.
learning:
  techniques:
    - starch
    - browning
    - gentle-proteins
  substitutions:
    - ingredient: Fresh Hong Kong-style egg noodles
      alternative: Chow mein or thin dried egg noodles
      effect: >-
        Cook them by the package until just tender. Dried noodles make a slightly less lacy cake but
        still crisp well if drained thoroughly.
    - ingredient: Shaoxing wine
      alternative: Dry sherry
      effect: Similar nutty flavor with a little less depth.
  storage: >-
    Best right away, while the noodles are crisp. Keep leftover gravy and noodles separate for up to
    2 days and reheat the gravy gently.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

Cantonese pan-fried noodles are a crisp golden cake of thin egg noodles under a glossy shrimp gravy. Drain the boiled noodles very well so they fry instead of steam. Pour the gravy over the center just before serving and leave the edges bare, so every plate gets crunchy and saucy bites.

## Directions

1. **Treat the shrimp:** Toss the shrimp and baking soda in a bowl and refrigerate for 5 minutes. Rinse the shrimp well and pat them dry. The baking soda gives them a snappy texture.
2. **Mix the gravy:** Stir the chicken stock, oyster sauce, soy sauce, sugar, sesame oil, and white pepper in a bowl until the sugar dissolves. Set it beside the stove.
3. **Mix the slurry:** Stir the cornstarch and cold water together in a small cup.
4. **Boil the noodles:** Bring a large pot of water to a boil. Cook the Hong Kong-style egg noodles until just tender, about 1 minute, or as the package directs. Rinse with cold water and drain very well, shaking off as much water as you can. Keep the pot boiling for the greens.
5. **Fry the first side:** Heat 2 tbsp of the vegetable oil in a 10- to 12-inch nonstick skillet over medium heat. Spread the noodles in a thin, even cake. Fry without moving them until the bottom is golden and crisp, about 5 minutes.
6. **Fry the second side:** Slide the cake onto a plate, flip it back into the pan and fry until the second side is golden, about 5 minutes. Move it to a serving platter.
7. **Blanch the greens:** Drop the yu choy or baby bok choy into the boiling water and cook until the stems are just tender, 30 seconds to 1 minute. Drain and arrange around the noodle cake.
8. **Stir-fry the vegetables:** Heat a wok over high heat and add the carrots and mushrooms and 1 tbsp of the vegetable oil. Stir-fry until the carrots are crisp-tender, about 2 minutes.
9. **Add the aromatics:** Add the ginger and garlic and stir until fragrant, about 30 seconds.
10. **Sear the shrimp:** Push the vegetables aside and add the shrimp in one layer. Sear for 1 minute per side, then pour the Shaoxing wine around the edge of the wok.
11. **Thicken the gravy:** Pour in the gravy and bring it to a boil. Stir the slurry and add it a little at a time, stirring, until the gravy coats a spoon. You may not need it all. Simmer until the shrimp are opaque, about 1 minute. Taste and add a splash of soy sauce if it needs salt.
12. **Serve:** Pour the shrimp and gravy over the center of the noodle cake, leaving the edges bare so they stay crisp. Serve right away.
