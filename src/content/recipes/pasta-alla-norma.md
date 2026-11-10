---
miseId: f91c11d6-e9df-4a36-be37-f73b43ed23c6
title: Pasta alla Norma
role: main
vibe: comfort
difficulty: intermediate
origin: Italy
cuisines:
  - Italian
occasions:
  - entertaining
  - weekend-project
seasons:
  - summer
nutritionalDensity: moderate
leftovers: good
source: Adapted from Accademia Italiana della Cucina
sourceUrl: 'https://www.accademiaitalianadellacucina.it/it/ricette/ricetta/pasta-alla-norma'
cookingMethods:
  - simmer
  - fry
  - boil
  - toss
flavorProfile:
  - acidic
  - rich
  - savory
prepTime: 25 min
cookTime: 1 hr 30 min
totalTime: 1 hr 55 min
equipment:
  - saucepan
  - food-mill
  - heavy-frying-pan
  - pasta-pot
  - slotted-spoon
  - large-serving-bowl
  - wide-saute-pan
pairsWith:
  - shaved-fennel-citrus-salad
  - garlic-bread
pairingNotes:
  shaved-fennel-citrus-salad: 'Fennel and orange, a Sicilian salad, to follow the pasta.'
  garlic-bread: For wiping up the last of the tomato sauce.
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: sauce
      name: Fresh tomato sauce
      ingredients:
        - id: tomatoes
          key: ripe-sauce-tomatoes
          name: ripe plum tomatoes
          quantity:
            amount: 3 1/4
            unit: lb
          equivalents:
            - amount: 1.5
              unit: kg
          preparation: halved
          uses:
            - step: tomatoes
              share: 1
        - id: onion
          key: white-onion
          name: medium white onion
          plural: medium white onions
          quantity:
            amount: 2
            unit: count
          preparation: quartered
          uses:
            - step: tomatoes
              share: 1
        - id: basil-start
          key: fresh-basil
          name: fresh basil leaves
          allowance: a handful
          uses:
            - step: tomatoes
              share: 1
        - id: garlic
          key: fresh-garlic
          name: garlic clove
          plural: garlic cloves
          quantity:
            amount: 2
            unit: count
          preparation: lightly crushed
          uses:
            - step: sauce
              share: 1
        - id: oil
          key: extra-virgin-olive-oil
          name: extra-virgin olive oil
          allowance: for the sauce
          uses:
            - step: sauce
              share: 1
        - id: basil-finish
          key: fresh-basil
          name: fresh basil sprig
          plural: fresh basil sprigs
          quantity:
            amount: 1
            unit: count
          uses:
            - step: simmer
              share: 1
        - id: salt
          key: salt
          name: kosher salt
          allowance: to taste
          uses:
            - step: simmer
              share: 1
    - id: eggplant
      name: Fried eggplant
      ingredients:
        - id: eggplant
          key: medium-violet-eggplant
          name: violet eggplant
          plural: violet eggplants
          quantity:
            amount: 3
            unit: count
          preparation: 'medium, sliced lengthwise about 1/4 inch thick'
          uses:
            - step: fry
              share: 1
        - id: oil
          key: extra-virgin-olive-oil
          name: olive oil
          allowance: for frying
          uses:
            - step: heat-oil
              share: 1
    - id: pasta
      name: Pasta and finish
      ingredients:
        - id: spaghetti
          key: dried-spaghetti
          name: spaghetti
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: pasta
              share: 1
        - id: ricotta
          key: ricotta-salata
          name: ricotta salata
          quantity:
            amount: 10
            unit: oz
          equivalents:
            - amount: 300
              unit: g
          preparation: grated
          uses:
            - step: finish
              share: 1
        - id: basil
          key: fresh-basil
          name: fresh basil leaves
          allowance: for serving
          role: garnish
          uses:
            - step: finish
              share: 1
        - id: pepper
          key: black-pepper
          name: black pepper
          allowance: to taste
          uses:
            - step: finish
              share: 1
  steps:
    - id: tomatoes
      title: Cook the tomatoes
      text: >-
        Put {{ingredients}} in a large saucepan with a splash of water. Cook over medium heat,
        stirring now and then, until the tomatoes and onion are soft and collapsed, about 40
        minutes.
    - id: mill
      title: Mill the tomatoes
      text: >-
        Pass the tomato mixture through a food mill into a bowl. Discard the skins and seeds left in
        the mill.
    - id: sauce
      title: Fry the garlic
      text: >-
        Wipe out the saucepan. Warm {{ingredients}} in it over medium-low heat until the garlic is
        pale gold.
    - id: simmer
      title: Finish the sauce
      text: >-
        Add the milled tomatoes, then {{ingredients}}, going easy on the salt since the cheese is
        salty. Simmer gently, stirring now and then, until the sauce has body, about 20 minutes.
    - id: heat-oil
      title: Heat the frying oil
      text: >-
        While the sauce simmers, heat about 1/2 inch of {{ingredients}} in a heavy frying pan over
        medium-high heat until a slice of eggplant sizzles steadily when dipped in.
    - id: fry
      title: Fry the eggplant
      text: >-
        Pat the slices of {{ingredients}} dry. Fry them in small batches without crowding, turning
        once, until golden and tender, 2 to 3 minutes per side. Drain on paper towels.
    - id: pasta
      title: Boil the spaghetti
      text: 'Bring a large pot of well-salted water to a boil. Cook {{ingredients}} until al dente.'
    - id: warm
      title: Warm the eggplant strips
      text: >-
        While the pasta cooks, cut about a third of the fried eggplant into strips. Warm them in a
        wide pan with a few spoonfuls of the sauce.
    - id: toss
      title: Toss the pasta
      text: Drain the spaghetti and add it to the wide pan. Toss over medium heat for 1 minute.
    - id: finish
      title: Top and serve
      text: >-
        Divide the pasta among plates. Top with the rest of the sauce, the whole eggplant slices and
        {{ingredients}}.
learning:
  techniques:
    - browning
    - starch
    - seasoning
  substitutions:
    - ingredient: Ricotta salata
      alternative: Pecorino Romano
      effect: Sharper and saltier. Use a little less and go easy on the salt in the sauce.
    - ingredient: Ripe plum tomatoes
      alternative: Canned whole peeled tomatoes
      effect: >-
        Out of season, use two 28-oz cans. Pass them through the food mill and go straight to
        finishing the sauce.
    - ingredient: Violet eggplant
      alternative: Globe eggplant
      effect: 'Works the same, with a few more seeds.'
    - ingredient: Spaghetti
      alternative: Rigatoni
      effect: A common choice in Sicily too. The sauce and eggplant settle into the tubes.
  storage: >-
    Keep the sauce and fried eggplant separately in the fridge for up to 4 days. Cook the pasta
    fresh.
  review:
    status: editorial-review
    date: '2026-11-09'
ingredients:
  - '--- Fresh tomato sauce ---'
  - '3 1/4 lb (1 1/2 kg) ripe plum tomatoes, halved'
  - '2 medium white onions, quartered'
  - 'fresh basil leaves, a handful'
  - '2 garlic cloves, lightly crushed'
  - 'extra-virgin olive oil, for the sauce'
  - 1 fresh basil sprig
  - 'kosher salt, to taste'
  - '--- Fried eggplant ---'
  - '3 violet eggplants, medium, sliced lengthwise about 1/4 inch thick'
  - 'olive oil, for frying'
  - '--- Pasta and finish ---'
  - 1 lb spaghetti
  - '10 oz (300 g) ricotta salata, grated'
  - 'fresh basil leaves, for serving'
  - 'black pepper, to taste'
servings: 6 portions
---

## Chef's Note

Pasta alla Norma is the great summer pasta of Catania, named for Bellini's opera Norma. Fresh tomato sauce coats the spaghetti, with fried eggplant on top and plenty of grated ricotta salata, a firm, salted sheep's milk cheese. Fry the eggplant in small batches so it turns golden and creamy instead of greasy.

## Directions

1. **Cook the tomatoes:** Put the plum tomatoes, white onions, and fresh basil leaves in a large saucepan with a splash of water. Cook over medium heat, stirring now and then, until the tomatoes and onion are soft and collapsed, about 40 minutes.
2. **Mill the tomatoes:** Pass the tomato mixture through a food mill into a bowl. Discard the skins and seeds left in the mill.
3. **Fry the garlic:** Wipe out the saucepan. Warm the garlic and extra-virgin olive oil in it over medium-low heat until the garlic is pale gold.
4. **Finish the sauce:** Add the milled tomatoes, then the fresh basil sprig and salt, going easy on the salt since the cheese is salty. Simmer gently, stirring now and then, until the sauce has body, about 20 minutes.
5. **Heat the frying oil:** While the sauce simmers, heat about 1/2 inch of olive oil in a heavy frying pan over medium-high heat until a slice of eggplant sizzles steadily when dipped in.
6. **Fry the eggplant:** Pat the slices of violet eggplants dry. Fry them in small batches without crowding, turning once, until golden and tender, 2 to 3 minutes per side. Drain on paper towels.
7. **Boil the spaghetti:** Bring a large pot of well-salted water to a boil. Cook the spaghetti until al dente.
8. **Warm the eggplant strips:** While the pasta cooks, cut about a third of the fried eggplant into strips. Warm them in a wide pan with a few spoonfuls of the sauce.
9. **Toss the pasta:** Drain the spaghetti and add it to the wide pan. Toss over medium heat for 1 minute.
10. **Top and serve:** Divide the pasta among plates. Top with the rest of the sauce, the whole eggplant slices and the ricotta salata, fresh basil leaves, and pepper.
