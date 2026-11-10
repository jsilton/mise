---
miseId: 56e364c9-dc5e-489c-86b7-fd4dd904c8cc
title: Yaki Udon
difficulty: easy
cookingMethods:
  - saute
  - boil
  - steam
occasions:
  - weeknight
  - quick-lunch
flavorProfile:
  - spicy
  - sweet
  - savory
  - acidic
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
  - miso-soup
pairingNotes:
  japanese-cucumber-sunomono: Cool vinegared cucumber cuts the sweet soy glaze.
  steamed-edamame: A salty snack to set out while the wok heats.
  miso-soup: A light broth to sip alongside the noodles.
ingredients:
  - '--- Sauce ---'
  - 2 tbsp dark soy sauce
  - 2 tbsp low-sodium soy sauce
  - 2 tbsp oyster sauce
  - 1 tbsp mirin
  - 1 tbsp rice vinegar
  - 1 tbsp sugar
  - '--- Noodles and stir-fry ---'
  - '2 lb frozen udon noodles, four 7 to 8 oz packs'
  - 2 tsp toasted sesame oil
  - '2 tbsp neutral oil, divided'
  - 1/2 lb ground pork or thinly sliced beef
  - '1 small yellow onion, sliced'
  - '1 cup shiitake or cremini mushrooms, sliced'
  - '1 carrot, cut into thin matchsticks'
  - '1 bok choy, sliced, stems and leaves kept apart'
  - '3 garlic cloves, chopped'
  - '3 scallions, cut into 2-inch pieces'
  - '--- To serve ---'
  - 'sesame seeds or furikake, for serving, optional'
  - 'chili oil, for serving, optional'
origin: Japan
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from NYT Cooking
sourceUrl: 'https://cooking.nytimes.com/recipes/1024643-yaki-udon'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: sauce
      name: Sauce
      ingredients:
        - id: dark-soy
          key: dark-soy
          name: dark soy sauce
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: soy
          key: soy
          name: low-sodium soy sauce
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: oyster
          key: oyster
          name: oyster sauce
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: mirin
          key: mirin
          name: mirin
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: vinegar
          key: vinegar
          name: rice vinegar
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
            unit: tbsp
          uses:
            - step: sauce
              share: 1
    - id: noodles
      name: Noodles and stir-fry
      ingredients:
        - id: noodles
          key: noodles
          name: frozen udon noodles
          quantity:
            amount: 2
            unit: lb
          uses:
            - step: noodles
              share: 1
          preparation: four 7 to 8 oz packs
        - id: sesame
          key: sesame
          name: toasted sesame oil
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: drain
              share: 1
        - id: oil
          key: oil
          name: neutral oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: meat
              share: 1/2
            - step: soften
              share: 1/2
        - id: meat
          key: meat
          name: ground pork or thinly sliced beef
          quantity:
            amount: 1/2
            unit: lb
          uses:
            - step: meat
              share: 1
        - id: onion
          key: onion
          name: small yellow onion
          plural: small yellow onions
          quantity:
            amount: 1
            unit: count
          uses:
            - step: soften
              share: 1
          preparation: sliced
        - id: mushrooms
          key: mushrooms
          name: shiitake or cremini mushrooms
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: soften
              share: 1
          preparation: sliced
        - id: carrot
          key: carrot
          name: carrot
          plural: carrots
          quantity:
            amount: 1
            unit: count
          uses:
            - step: vegetables
              share: 1
          preparation: cut into thin matchsticks
        - id: bok
          key: bok
          name: bok choy
          plural: bok choy
          quantity:
            amount: 1
            unit: count
          uses:
            - step: vegetables
              share: 1
          preparation: 'sliced, stems and leaves kept apart'
        - id: garlic
          key: garlic
          name: garlic clove
          plural: garlic cloves
          quantity:
            amount: 3
            unit: count
          uses:
            - step: vegetables
              share: 1
          preparation: chopped
        - id: scallions
          key: scallions
          name: scallion
          plural: scallions
          quantity:
            amount: 3
            unit: count
          uses:
            - step: vegetables
              share: 1
          preparation: cut into 2-inch pieces
    - id: finish
      name: To serve
      ingredients:
        - id: sesame-seeds
          key: sesame-seeds
          name: sesame seeds or furikake
          allowance: for serving
          uses:
            - step: serve
              share: 1
          optional: true
          role: garnish
        - id: chili-oil
          key: chili-oil
          name: chili oil
          allowance: for serving
          uses:
            - step: serve
              share: 1
          optional: true
          role: garnish
  steps:
    - id: sauce
      title: Mix the sauce
      text: 'In a small bowl, whisk {{ingredients}} until the sugar dissolves.'
    - id: noodles
      title: Loosen the noodles
      text: >-
        Bring a large pot of water to a boil. Add {{ingredients}} and cook just until they separate
        and are hot through, 1 to 2 minutes.
    - id: drain
      title: Rinse and oil
      text: >-
        Drain the noodles, rinse them under cold water and drain well. Toss with {{ingredients}} so
        they don't stick.
    - id: meat
      title: Brown the meat
      text: >-
        Heat a large wok over high heat. Add {{ingredients}}, breaking up the pork as it cooks.
        Stir-fry until the pork is browned and crisp at the edges, about 5 minutes, or the beef is
        just browned, 2 to 3 minutes. Move it to a plate.
    - id: soften
      title: Soften the onion
      text: >-
        Add {{ingredients}} to the wok. Stir-fry over high heat until they begin to soften, 2 to 3
        minutes.
    - id: vegetables
      title: Add the vegetables
      text: >-
        Add {{ingredients}}, holding back the bok choy leaves. Stir-fry until the stems are
        crisp-tender, about 3 minutes.
    - id: toss
      title: Toss with the sauce
      text: >-
        Return the meat to the wok and add the noodles and sauce. Toss over high heat until the
        noodles are glossy and evenly coated, about 2 minutes. Add the bok choy leaves and toss
        until just wilted. In a 12-inch skillet, toss the noodles in two batches.
    - id: serve
      title: Serve
      text: 'Divide among bowls and top with {{ingredients}}.'
learning:
  techniques:
    - stir-frying
    - temperature
  substitutions:
    - ingredient: Dark soy sauce
      alternative: Regular soy sauce plus molasses
      effect: >-
        Use 1 tsp molasses with each tablespoon of soy sauce. It gives the noodles the same deep
        color and gentle sweetness.
    - ingredient: Frozen udon noodles
      alternative: Vacuum-packed udon
      effect: Softer and less bouncy. Loosen them in hot water as the package directs.
    - ingredient: Ground pork
      alternative: Ground chicken
      effect: Milder and leaner. Brown it well so it doesn't taste flat.
  storage: >-
    Keeps 3 days in the fridge. Reheat in a hot skillet with a splash of water, though the noodles
    soften.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

Yaki udon is a Japanese stir-fry of thick, chewy wheat noodles with pork and vegetables in a sweet soy glaze. Frozen udon has the best bounce, so loosen it in boiling water and pull it fast. A very hot wok and a separate sear for the meat keep everything browned instead of steamed.

## Directions

1. **Mix the sauce:** In a small bowl, whisk the dark soy sauce, low-sodium soy sauce, oyster sauce, mirin, rice vinegar, and sugar until the sugar dissolves.
2. **Loosen the noodles:** Bring a large pot of water to a boil. Add the udon noodles and cook just until they separate and are hot through, 1 to 2 minutes.
3. **Rinse and oil:** Drain the noodles, rinse them under cold water and drain well. Toss with the sesame oil so they don't stick.
4. **Brown the meat:** Heat a large wok over high heat. Add the ground pork or thinly sliced beef and 1 tbsp of the neutral oil, breaking up the pork as it cooks. Stir-fry until the pork is browned and crisp at the edges, about 5 minutes, or the beef is just browned, 2 to 3 minutes. Move it to a plate.
5. **Soften the onion:** Add the yellow onion, shiitake or cremini mushrooms, and the rest of the neutral oil to the wok. Stir-fry over high heat until they begin to soften, 2 to 3 minutes.
6. **Add the vegetables:** Add the carrot, bok choy, garlic, and scallions, holding back the bok choy leaves. Stir-fry until the stems are crisp-tender, about 3 minutes.
7. **Toss with the sauce:** Return the meat to the wok and add the noodles and sauce. Toss over high heat until the noodles are glossy and evenly coated, about 2 minutes. Add the bok choy leaves and toss until just wilted. In a 12-inch skillet, toss the noodles in two batches.
8. **Serve:** Divide among bowls and top with the sesame seeds or furikake (if using) and chili oil (if using).
