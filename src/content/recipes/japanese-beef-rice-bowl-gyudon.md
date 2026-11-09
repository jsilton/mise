---
title: Gyudon (Japanese Beef and Rice Bowls)
origin: Japan
difficulty: easy
cookingMethods:
  - simmer
  - saute
dietary:
  - gluten-free-option
occasions:
  - weeknight
flavorProfile:
  - savory
  - sweet
  - umami
cuisines:
  - Japanese
role: main
vibe: quick
prepTime: 10 min
cookTime: 20 min
totalTime: 30 min
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: good
equipment:
  - large-skillet
  - saucepan
pairsWith:
  - miso-soup
  - japanese-cucumber-sunomono
pairingNotes:
  miso-soup: The classic soup beside a rice bowl.
  japanese-cucumber-sunomono: 'A cool, tangy cucumber salad to cut the rich beef.'
ingredients:
  - '--- Beef and onions ---'
  - 2 tbsp neutral oil
  - '2 medium yellow onions, thinly sliced'
  - '1 lb ribeye or fatty chuck, very thinly sliced across the grain'
  - 2 tbsp sugar
  - 2 tbsp mirin
  - 2 tbsp sake
  - 1/4 cup light soy sauce
  - 1 cup dashi
  - '--- For serving ---'
  - '4 cups cooked short-grain white rice, warm'
  - '4 large eggs, optional'
  - '1 scallion, thinly sliced'
  - '2 tsp toasted sesame seeds, optional'
  - 'shichimi togarashi, to taste, optional'
description: 'Thin beef and softened onions in a sweet soy-mirin broth, served over warm rice.'
advancePrep:
  - components-ahead
source: Adapted from The Woks of Life
sourceUrl: 'https://thewoksoflife.com/gyudon-recipe-beef-rice/'
learning:
  techniques:
    - temperature
    - seasoning
  substitutions:
    - ingredient: ribeye or fatty chuck
      alternative: 'Shaved steak, sold for cheesesteaks'
      effect: Already sliced paper-thin. It cooks in about 2 minutes.
    - ingredient: dashi
      alternative: Low-sodium beef or chicken stock
      effect: 'Meatier and less smoky, without the ocean depth of dashi.'
    - ingredient: shichimi togarashi
      alternative: Red pepper flakes
      effect: 'Plain heat without the orange peel, sesame and seaweed of the Japanese blend.'
    - ingredient: light soy sauce
      alternative: Tamari
      effect: Makes the bowls gluten-free. The flavor is nearly the same.
  storage: >-
    The beef and onions keep 3 days in the fridge, stored apart from the rice. Reheat gently in a
    covered skillet with a splash of water.
  review:
    status: editorial-review
    date: '2026-11-09'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: beef
      name: Beef and onions
      ingredients:
        - id: oil
          key: neutral-oil
          name: neutral oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: onions
              share: 1
        - id: onions
          key: yellow-onion
          name: medium yellow onion
          quantity:
            amount: 2
            unit: count
          uses:
            - step: onions
              share: 1
          plural: medium yellow onions
          preparation: thinly sliced
        - id: beef
          key: beef-ribeye
          name: ribeye or fatty chuck
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: beef
              share: 1
          preparation: very thinly sliced across the grain
        - id: sugar
          key: granulated-sugar
          name: sugar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: simmer
              share: 1
        - id: mirin
          key: mirin
          name: mirin
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: simmer
              share: 1
        - id: sake
          key: sake
          name: sake
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: simmer
              share: 1
        - id: soy
          key: light-soy-sauce
          name: light soy sauce
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: broth
          key: dashi
          name: dashi
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: simmer
              share: 1
    - id: serve
      name: For serving
      ingredients:
        - id: rice
          key: cooked-short-grain-rice
          name: cooked short-grain white rice
          quantity:
            amount: 4
            unit: cup
          uses:
            - step: serve
              share: 1
          preparation: warm
        - id: eggs
          key: egg
          name: large egg
          quantity:
            amount: 4
            unit: count
          uses:
            - step: eggs
              share: 1
          plural: large eggs
          optional: true
        - id: scallion
          key: scallion
          name: scallion
          quantity:
            amount: 1
            unit: count
          uses:
            - step: garnish
              share: 1
          plural: scallions
          preparation: thinly sliced
        - id: sesame
          key: toasted-sesame-seed
          name: toasted sesame seeds
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: garnish
              share: 1
          optional: true
          role: garnish
        - id: shichimi
          key: shichimi-togarashi
          name: shichimi togarashi
          allowance: to taste
          uses:
            - step: garnish
              share: 1
          optional: true
          role: garnish
  steps:
    - id: onions
      title: Soften the onions
      text: >-
        Warm {{ingredients}} in a large skillet over medium heat. Cook, stirring often, until the
        onions wilt and start to soften, about 5 minutes. Lower the heat if the edges darken.
    - id: simmer
      title: Simmer in the sauce
      text: >-
        Add {{ingredients}} and bring to a gentle simmer. Cook, stirring now and then, until the
        onions are tender and sweet and the sauce has reduced slightly, 5 to 8 minutes.
    - id: eggs
      title: Poach the eggs
      text: >-
        While the onions simmer, bring a saucepan of water to a bare simmer. Crack {{ingredients}}
        into the water one at a time and cook until the whites are set and the yolks are still soft,
        3 to 4 minutes. Lift them out with a slotted spoon.
    - id: beef
      title: Cook the beef
      text: >-
        Add {{ingredients}} to the skillet, separating the slices into the sauce. Cook, turning,
        just until no pink remains, 2 to 3 minutes. Take the pan off the heat right away so the beef
        stays tender.
    - id: serve
      title: Fill the bowls
      text: >-
        Divide {{ingredients}} among four bowls. Spoon the beef, onions and sauce over the rice and
        top each bowl with a poached egg, if using.
    - id: garnish
      title: Garnish
      text: 'Sprinkle with {{ingredients}} and serve right away.'
miseId: 066540c6-77bf-42eb-aa44-7650bd4c65a7
---

## Chef's Note

Gyudon is the beef bowl of Japanese fast-food counters and home kitchens alike. Onions simmer in dashi, soy, mirin and sake until soft and sweet. The thin beef goes in only for the last couple of minutes, so it stays tender, and the extra broth soaks into the rice.

## Directions

1. **Soften the onions:** Warm neutral oil and medium yellow onions in a large skillet over medium heat. Cook, stirring often, until the onions wilt and start to soften, about 5 minutes. Lower the heat if the edges darken.
2. **Simmer in the sauce:** Add sugar, mirin, sake, light soy sauce, and dashi and bring to a gentle simmer. Cook, stirring now and then, until the onions are tender and sweet and the sauce has reduced slightly, 5 to 8 minutes.
3. **Poach the eggs:** While the onions simmer, bring a saucepan of water to a bare simmer. Crack large eggs (if using) into the water one at a time and cook until the whites are set and the yolks are still soft, 3 to 4 minutes. Lift them out with a slotted spoon.
4. **Cook the beef:** Add ribeye or fatty chuck to the skillet, separating the slices into the sauce. Cook, turning, just until no pink remains, 2 to 3 minutes. Take the pan off the heat right away so the beef stays tender.
5. **Fill the bowls:** Divide cooked short-grain white rice among four bowls. Spoon the beef, onions and sauce over the rice and top each bowl with a poached egg, if using.
6. **Garnish:** Sprinkle with scallion, toasted sesame seeds (if using), and shichimi togarashi (if using) and serve right away.
