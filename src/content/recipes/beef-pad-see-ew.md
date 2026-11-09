---
miseId: ce45f7eb-1de2-4a74-8d73-47abe5de6632
title: Beef Pad See Ew
role: main
vibe: technical
difficulty: easy
prepTime: 20 min
cookTime: 15 min
totalTime: 35 min
servings: 3 portions
cookingMethods:
  - stir-fry
categories: []
source: Adapted from The Woks of Life
ingredients:
  - '--- Beef ---'
  - '8 oz flank steak, thinly sliced across the grain'
  - 1 tsp soy sauce
  - 1 tsp vegetable oil
  - 1 tsp cornstarch
  - '--- Sauce ---'
  - 1 tbsp oyster sauce
  - 1/2 tsp sugar
  - 2 tsp Thai thin soy sauce or light soy sauce
  - 1 tbsp Thai black soy sauce
  - 1 tsp fish sauce
  - 'ground white pepper, a pinch'
  - '--- Noodles ---'
  - 1 lb fresh wide rice noodles
  - '4 tbsp vegetable oil, divided'
  - '3 garlic cloves, thinly sliced'
  - '3 cups Chinese broccoli (gai lan), cut into 2-inch pieces, thick stems halved'
  - '2 large eggs, lightly beaten'
  - '--- To serve ---'
  - 'chili oil, for serving, optional'
sourceUrl: 'https://thewoksoflife.com/pad-see-ew/'
pairsWith:
  - thai-mango-salad
pairingNotes:
  thai-mango-salad: 'A bright, sour salad against the sweet, dark noodles.'
cuisines:
  - Thai
formula:
  version: 1
  yield:
    amount: 3
    unit: portion
  components:
    - id: marinade
      name: Beef
      ingredients:
        - id: beef
          key: beef
          name: flank steak
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: marinate
              share: 1
          preparation: thinly sliced across the grain
        - id: soy
          key: soy
          name: soy sauce
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: marinade-oil
          key: oil
          name: vegetable oil
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: starch
          key: starch
          name: cornstarch
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: marinate
              share: 1
    - id: sauce
      name: Sauce
      ingredients:
        - id: oyster
          key: oyster
          name: oyster sauce
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
            amount: 0.5
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: thin-soy
          key: thin-soy
          name: Thai thin soy sauce or light soy sauce
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: dark-soy
          key: dark-soy
          name: Thai black soy sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: fish
          key: fish
          name: fish sauce
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: pepper
          key: pepper
          name: ground white pepper
          allowance: a pinch
          uses:
            - step: sauce
              share: 1
    - id: pan
      name: Noodles
      ingredients:
        - id: noodles
          key: noodles
          name: fresh wide rice noodles
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: noodles
              share: 1
        - id: oil
          key: oil
          name: vegetable oil
          quantity:
            amount: 4
            unit: tbsp
          uses:
            - step: beef
              share: 0.25
            - step: vegetables
              share: 0.25
            - step: egg
              share: 0.5
          preparation: divided
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: vegetables
              share: 1
          plural: garlic cloves
          preparation: thinly sliced
        - id: broccoli
          key: broccoli
          name: Chinese broccoli (gai lan)
          quantity:
            amount: 3
            unit: cup
          uses:
            - step: vegetables
              share: 1
          preparation: 'cut into 2-inch pieces, thick stems halved'
        - id: egg
          key: egg
          name: large egg
          quantity:
            amount: 2
            unit: count
          uses:
            - step: egg
              share: 1
          plural: large eggs
          preparation: lightly beaten
    - id: finish
      name: To serve
      ingredients:
        - id: chili
          key: chili
          name: chili oil
          allowance: for serving
          uses:
            - step: serve
              share: 1
          optional: true
  steps:
    - id: marinate
      title: Marinate the beef
      text: >-
        Toss {{ingredients}} in a bowl until the beef is coated. Let it sit while you prepare
        everything else.
    - id: sauce
      title: Mix the sauce
      text: 'In a small bowl, stir {{ingredients}} until the sugar dissolves.'
    - id: noodles
      title: Loosen the noodles
      text: >-
        If {{ingredients}} are cold and stiff, rinse them briefly under hot water. Separate them
        gently into ribbons and drain well.
    - id: beef
      title: Sear the beef
      text: >-
        Heat {{ingredients}} in a wok over high heat until it shimmers. Spread the beef in a single
        layer and sear until browned, about 1 minute per side. Move it to a plate.
    - id: vegetables
      title: Cook the gai lan
      text: >-
        Add {{ingredients}} to the wok. Stir-fry until the stems are bright green and just tender, 2
        to 3 minutes. If the stems are still tough, add a splash of water and cover for 1 minute.
    - id: fry
      title: Sear the noodles
      text: >-
        Add the noodles and the sauce and spread them out. Let them sit until they char in spots,
        about 30 seconds, then fold gently. Repeat for 2 to 3 minutes.
    - id: egg
      title: Scramble the eggs
      text: >-
        Push the noodles to one side. Add {{ingredients}} to the empty side and scramble until just
        set, about 1 minute. Fold the egg through the noodles.
    - id: combine
      title: Return the beef
      text: 'Return the beef and its juices and toss until everything is hot, about 1 minute.'
    - id: serve
      title: Serve
      text: 'Serve hot, with {{ingredients}} at the table.'
learning:
  techniques:
    - stir-frying
    - temperature
  substitutions:
    - ingredient: Chinese broccoli (gai lan)
      alternative: Broccolini
      effect: Use the same amount. It is sweeter and milder and cooks a little faster.
    - ingredient: Thai black soy sauce
      alternative: Chinese dark soy sauce plus 1/2 tsp sugar
      effect: 'Add the extra sugar to the sauce. Kecap manis also works, with no extra sugar.'
    - ingredient: Fresh wide rice noodles
      alternative: 8 oz dried wide rice noodles
      effect: >-
        Cook them by the package directions until just tender, drain well and toss with a little of
        the oil.
  storage: Best eaten right away. Leftovers keep 2 days in the fridge and reheat in a hot skillet.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

Pad see ew is Thai street food: wide rice noodles seared in a hot wok with Chinese broccoli, egg and a sweet, dark soy sauce. Thai black soy sauce gives the noodles their color and caramel sweetness. Let them sit against the pan long enough to char in spots. That smoky edge is the point of the dish.

## Directions

1. **Marinate the beef:** Toss flank steak, soy sauce, vegetable oil, and cornstarch in a bowl until the beef is coated. Let it sit while you prepare everything else.
2. **Mix the sauce:** In a small bowl, stir oyster sauce, sugar, Thai thin soy sauce or light soy sauce, Thai black soy sauce, fish sauce, and ground white pepper until the sugar dissolves.
3. **Loosen the noodles:** If fresh wide rice noodles are cold and stiff, rinse them briefly under hot water. Separate them gently into ribbons and drain well.
4. **Sear the beef:** Heat 1/4 of the vegetable oil in a wok over high heat until it shimmers. Spread the beef in a single layer and sear until browned, about 1 minute per side. Move it to a plate.
5. **Cook the gai lan:** Add 1/4 of the vegetable oil, garlic cloves, and Chinese broccoli (gai lan) to the wok. Stir-fry until the stems are bright green and just tender, 2 to 3 minutes. If the stems are still tough, add a splash of water and cover for 1 minute.
6. **Sear the noodles:** Add the noodles and the sauce and spread them out. Let them sit until they char in spots, about 30 seconds, then fold gently. Repeat for 2 to 3 minutes.
7. **Scramble the eggs:** Push the noodles to one side. Add 1/2 of the vegetable oil and large eggs to the empty side and scramble until just set, about 1 minute. Fold the egg through the noodles.
8. **Return the beef:** Return the beef and its juices and toss until everything is hot, about 1 minute.
9. **Serve:** Serve hot, with chili oil (if using) at the table.
