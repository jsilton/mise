---
miseId: 067a2bc4-d6da-4835-96ae-14770a2f52a4
title: Smash Burgers
description: >-
  Thin, crisp-edged double cheeseburgers smashed on a hot skillet, with a quick burger sauce on
  toasted potato buns.
origin: United States
role: main
vibe: quick
difficulty: easy
prepTime: 10 min
cookTime: 20 min
totalTime: 30 min
cuisines:
  - American
cookingMethods:
  - griddle
  - sear
dietary:
  - nut-free
occasions:
  - weeknight
  - kid-friendly
  - family-meal
  - game-day
flavorProfile:
  - savory
  - rich
  - crispy
  - tangy
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: poor
advancePrep:
  - make-ahead-sauce
equipment:
  - cast-iron-skillet
  - stiff-metal-spatula
pairsWith:
  - sweet-potato-fries
  - coleslaw
  - elote-style-corn-on-the-cob
pairingNotes:
  sweet-potato-fries: Oven fries that bake while you smash.
  coleslaw: 'Cold, tangy crunch next to the rich beef.'
  elote-style-corn-on-the-cob: Sweet charred corn with lime against the rich beef.
servings: 6 portions
ingredients:
  - '--- Burger sauce ---'
  - 1/4 cup mayonnaise
  - 2 tbsp ketchup
  - 1 tbsp yellow mustard
  - '2 tbsp dill pickles, finely chopped'
  - '--- Burgers ---'
  - '6 soft potato buns, split'
  - '2 tbsp unsalted butter, softened'
  - '1 1/2 lb ground beef (80% lean), divided into loose 2-oz balls'
  - 1 tsp kosher salt
  - 1/2 tsp black pepper
  - 6 American cheese slices
  - '1/2 small white onion, sliced paper-thin'
  - 1/2 cup dill pickle chips
  - '2 cups iceberg lettuce, shredded'
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: sauce
      name: Burger sauce
      ingredients:
        - id: mayo
          key: mayonnaise
          name: mayonnaise
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: sauce
              share: 1
        - id: ketchup
          key: ketchup
          name: ketchup
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: mustard
          key: yellow-mustard
          name: yellow mustard
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: relish
          key: dill-pickles
          name: dill pickles
          quantity:
            amount: 2
            unit: tbsp
          preparation: finely chopped
          uses:
            - step: sauce
              share: 1
    - id: burgers
      name: Burgers
      ingredients:
        - id: buns
          key: potato-buns
          name: soft potato bun
          plural: soft potato buns
          quantity:
            amount: 6
            unit: count
          preparation: split
          uses:
            - step: toast
              share: 1
        - id: butter
          key: unsalted-butter
          name: unsalted butter
          quantity:
            amount: 2
            unit: tbsp
          preparation: softened
          uses:
            - step: butter
              share: 1
        - id: beef
          key: ground-beef-80
          name: ground beef (80% lean)
          quantity:
            amount: 1 1/2
            unit: lb
          preparation: divided into loose 2-oz balls
          uses:
            - step: smash
              share: 1
        - id: salt
          key: kosher-salt
          name: kosher salt
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: flip
              share: 1
        - id: pepper
          key: black-pepper
          name: black pepper
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: flip
              share: 1
        - id: cheese
          key: american-cheese
          name: American cheese slice
          plural: American cheese slices
          quantity:
            amount: 6
            unit: count
          uses:
            - step: cheese
              share: 1
        - id: onion
          key: white-onion
          name: small white onion
          plural: small white onions
          quantity:
            amount: 1/2
            unit: count
          preparation: sliced paper-thin
          uses:
            - step: build
              share: 1
        - id: pickles
          key: dill-pickle-chips
          name: dill pickle chips
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: build
              share: 1
        - id: lettuce
          key: iceberg-lettuce
          name: iceberg lettuce
          quantity:
            amount: 2
            unit: cup
          preparation: shredded
          uses:
            - step: build
              share: 1
  steps:
    - id: sauce
      title: Mix the sauce
      text: 'Stir {{ingredients}} together in a small bowl.'
    - id: butter
      title: Butter the buns
      text: 'Spread the cut sides of the buns with {{ingredients}}.'
    - id: toast
      title: Toast the buns
      text: >-
        Heat a 12-inch cast-iron skillet over medium heat. Toast {{ingredients}} cut side down until
        golden, about 1 minute, then set them aside.
    - id: heat
      title: Heat the pan
      text: >-
        Wipe out the skillet and turn the heat to high. Heat the dry pan until it just starts to
        smoke, about 3 minutes.
    - id: smash
      title: Smash the patties
      text: >-
        Put 2 balls of {{ingredients}} in the pan, spaced well apart. Right away, press each one
        flat with a stiff metal spatula until it is 1/4 inch thick and wider than a bun.
    - id: flip
      title: Season and sear
      text: >-
        Season the top of each patty with a pinch of the {{ingredients}}. Cook without moving until
        the edges are deep brown and lacy and the tops are mostly gray, about 1 1/2 minutes. Scrape
        under each patty with the edge of the spatula so the crust comes up with it, then flip.
    - id: cheese
      title: Melt the cheese
      text: >-
        Lay one of the {{ingredients}} on one patty and stack the other patty on top. Cook until the
        cheese melts, about 30 seconds, then move the stack to a bottom bun. Smash and cook the rest
        of the beef the same way, one burger at a time.
    - id: build
      title: Build the burgers
      text: >-
        Spread the sauce on the top buns. Top each burger with {{ingredients}} and close it with a
        top bun. Serve right away.
learning:
  techniques:
    - browning
  substitutions:
    - ingredient: American cheese slice
      alternative: 'Sharp cheddar, thinly sliced'
      effect: More bite but a slower melt. Cover the pan for 20 seconds after stacking to help it along.
    - ingredient: Soft potato bun
      alternative: Brioche buns
      effect: A little sweeter and richer. Toast them the same way.
  storage: Burgers are best straight from the pan. The sauce keeps 1 week in the fridge.
  review:
    status: editorial-review
    date: '2026-11-10'
---

## Chef's Note

Smash burgers come from Midwestern diners and drive-ins, where cooks pressed balls of ground beef flat on a hot griddle so the whole surface browned. Smashing a loose ball thin in its first seconds on the pan gives a lacy, crisp crust that a thick patty never gets. Scrape hard when you flip so the crust stays on the burger.

## Directions

1. **Mix the sauce:** Stir the mayonnaise, ketchup, yellow mustard, and dill pickles together in a small bowl.
2. **Butter the buns:** Spread the cut sides of the buns with the butter.
3. **Toast the buns:** Heat a 12-inch cast-iron skillet over medium heat. Toast the soft potato buns cut side down until golden, about 1 minute, then set them aside.
4. **Heat the pan:** Wipe out the skillet and turn the heat to high. Heat the dry pan until it just starts to smoke, about 3 minutes.
5. **Smash the patties:** Put 2 balls of ground beef in the pan, spaced well apart. Right away, press each one flat with a stiff metal spatula until it is 1/4 inch thick and wider than a bun.
6. **Season and sear:** Season the top of each patty with a pinch of the salt and pepper. Cook without moving until the edges are deep brown and lacy and the tops are mostly gray, about 1 1/2 minutes. Scrape under each patty with the edge of the spatula so the crust comes up with it, then flip.
7. **Melt the cheese:** Lay one of the American cheese slices on one patty and stack the other patty on top. Cook until the cheese melts, about 30 seconds, then move the stack to a bottom bun. Smash and cook the rest of the beef the same way, one burger at a time.
8. **Build the burgers:** Spread the sauce on the top buns. Top each burger with the white onion, dill pickle chips, and iceberg lettuce and close it with a top bun. Serve right away.
