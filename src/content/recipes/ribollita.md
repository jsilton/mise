---
miseId: 1d5ff614-22ab-4692-9243-bfe48fd1885d
role: main
vibe: comfort
difficulty: intermediate
cuisines:
  - Italian
flavorProfile:
  - savory
  - earthy
  - herbaceous
categories:
  - Italian
  - Main Course
seasons:
  - fall
  - winter
nutritionalDensity: hearty
learning:
  techniques:
    - starch
    - seasoning
    - temperature
  substitutions:
    - ingredient: Dried cannellini beans
      alternative: Four 15-oz cans cannellini
      effect: >-
        Skip the soaking and bean cooking. Rinse the beans and use 4 cups water in place of the bean
        liquid.
    - ingredient: Cavolo nero
      alternative: Curly kale
      effect: Tougher and grassier. Strip the stems and cut it into thin strips.
    - ingredient: Savoy cabbage
      alternative: Green cabbage
      effect: Firmer and a little sharper. Slice it thin.
    - ingredient: Stale Tuscan bread
      alternative: Day-old crusty Italian loaf
      effect: 'Most loaves are salted, so season the soup more lightly before layering.'
  storage: >-
    Keeps 4 days in the fridge and freezes for 3 months. Reheat slowly with a splash of water,
    stirring along the bottom.
  review:
    status: editorial-review
    date: '2026-11-09'
title: Ribollita
origin: Tuscany
description: >-
  Tuscan bread and vegetable soup with cannellini, cavolo nero and olive oil, layered a day ahead
  and simmered again to serve.
source: Adapted from the Accademia Italiana della Cucina
sourceUrl: 'https://www.accademiaitalianadellacucina.it/it/ricette/ricetta/ribollita'
prepTime: 45 min
cookTime: 3 hr 15 min
totalTime: '4 hr, plus soaking and overnight chilling'
cookingMethods:
  - boil
  - saute
  - simmer
dietary:
  - vegan
  - dairy-free
  - egg-free
  - nut-free
occasions:
  - make-ahead
  - meal-prep
  - comfort-food
  - family-meal
leftovers: excellent
advancePrep:
  - overnight-soak
  - cook-ahead
  - freeze-ahead
equipment:
  - large-heavy-soup-pot
  - bean-pot
  - fine-mesh-sieve
  - shallow-heatproof-containers
pairsWith:
  - shaved-fennel-citrus-salad
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: beans
      name: Beans
      ingredients:
        - id: dried-cannellini-beans
          key: dried-cannellini-beans
          name: dried cannellini beans
          quantity:
            amount: 14
            unit: oz
          uses:
            - step: soak
              share: 1
          equivalents:
            - amount: 400
              unit: g
        - id: water
          key: water
          name: water
          allowance: for soaking
          role: cooking-water
          uses:
            - step: soak
              share: 1
    - id: soup
      name: Soup
      ingredients:
        - id: olive-oil
          key: olive-oil
          name: extra-virgin olive oil
          uses:
            - step: sweat
              share: 1
          quantity:
            amount: 1/4
            unit: cup
        - id: onion
          key: onion
          name: onion
          plural: onions
          quantity:
            amount: 2
            unit: count
          preparation: thinly sliced
          uses:
            - step: sweat
              share: 1
        - id: carrot
          key: carrot
          name: carrot
          plural: carrots
          quantity:
            amount: 2
            unit: count
          preparation: thinly sliced
          uses:
            - step: sweat
              share: 1
        - id: celery-rib
          key: celery-rib
          name: celery rib
          plural: celery ribs
          quantity:
            amount: 2
            unit: count
          preparation: thinly sliced
          uses:
            - step: sweat
              share: 1
        - id: tomato
          key: tomato
          name: tomatoes
          quantity:
            amount: 10
            unit: oz
          preparation: chopped
          uses:
            - step: vegetables
              share: 1
          equivalents:
            - amount: 300
              unit: g
        - id: cavolo-nero
          key: cavolo-nero
          name: cavolo nero
          quantity:
            amount: 14
            unit: oz
          preparation: 'stems removed, leaves cut into strips'
          uses:
            - step: vegetables
              share: 1
          equivalents:
            - amount: 400
              unit: g
        - id: savoy-cabbage
          key: savoy-cabbage
          name: savoy cabbage
          quantity:
            amount: 1
            unit: lb
          preparation: cored and cut into strips
          uses:
            - step: vegetables
              share: 1
          equivalents:
            - amount: 500
              unit: g
        - id: chard
          key: chard
          name: Swiss chard
          quantity:
            amount: 7
            unit: oz
          preparation: 'leaves sliced, stems chopped'
          uses:
            - step: vegetables
              share: 1
          equivalents:
            - amount: 200
              unit: g
        - id: potato
          key: potato
          name: potato
          plural: potatoes
          quantity:
            amount: 2
            unit: count
          preparation: peeled and cut into 1/2-inch pieces
          uses:
            - step: vegetables
              share: 1
        - id: salt
          key: salt
          name: kosher salt
          allowance: to taste
          uses:
            - step: simmer
              share: 1
        - id: black-pepper
          key: black-pepper
          name: black pepper
          allowance: to taste
          uses:
            - step: simmer
              share: 1
        - id: stale-bread
          key: stale-bread
          name: stale Tuscan bread
          quantity:
            amount: 1
            unit: lb
          preparation: sliced
          uses:
            - step: layer
              share: 1
          equivalents:
            - amount: 500
              unit: g
    - id: finish
      name: To finish
      ingredients:
        - id: reheating-water
          key: reheating-water
          name: water
          allowance: as needed
          role: cooking-water
          uses:
            - step: reboil
              share: 1
        - id: olive-oil
          key: olive-oil
          name: extra-virgin olive oil
          allowance: for drizzling
          role: garnish
          uses:
            - step: serve
              share: 1
  steps:
    - id: soak
      title: Soak the beans
      text: >-
        The day before, put {{ingredients}} in a large bowl, with the water covering the beans by 3
        inches. Soak 12 hours or overnight, then drain.
    - id: cook-beans
      title: Cook the beans
      text: >-
        Put the beans in a pot and cover by 2 inches with fresh water. Boil hard for 10 minutes,
        then lower the heat and simmer until creamy all the way through, 1 to 2 hours. Top up with
        hot water to keep them covered. Keep them in their liquid.
    - id: sweat
      title: Cook the soffritto
      text: >-
        Warm {{ingredients}} in a large, heavy soup pot over medium-low heat. Cook, stirring, until
        soft but not browned, 10 to 15 minutes.
    - id: vegetables
      title: Wilt the greens
      text: >-
        Add {{ingredients}}, with the chard stems going in before the leaves. Stir in the greens by
        handfuls as they wilt, 5 to 10 minutes.
    - id: puree
      title: Purée half the beans
      text: >-
        Pass about half the beans through a food mill or sieve into their cooking liquid. Keep the
        rest whole.
    - id: simmer
      title: Simmer the soup
      text: >-
        Pour the bean purée and its liquid into the soup pot and season with {{ingredients}}. Simmer
        gently for 1 hour, stirring along the bottom and adding a splash of hot water if it gets too
        thick, until the potatoes are tender and the broth is creamy. Stir in the whole beans and
        season well, since the bread is unsalted.
    - id: layer
      title: Layer with bread
      text: >-
        In a large baking dish, layer half the {{ingredients}}, half the soup, the rest of the bread
        and the rest of the soup. Let it cool, then cover and refrigerate overnight.
    - id: reboil
      title: Boil it again
      text: >-
        Scrape the soup into a heavy pot and warm over medium-low heat, stirring along the bottom
        often. Add {{ingredients}} if it is too thick to stir. Bring to a boil, then simmer gently,
        stirring, until thick and spoonable, about 10 minutes.
    - id: serve
      title: Serve
      text: 'Ladle into bowls and drizzle each one with {{ingredients}}.'
ingredients:
  - '--- Beans ---'
  - 14 oz (400 g) dried cannellini beans
  - 'water, for soaking'
  - '--- Soup ---'
  - 1/4 cup extra-virgin olive oil
  - '2 onions, thinly sliced'
  - '2 carrots, thinly sliced'
  - '2 celery ribs, thinly sliced'
  - '10 oz (300 g) tomatoes, chopped'
  - '14 oz (400 g) cavolo nero, stems removed, leaves cut into strips'
  - '1 lb (500 g) savoy cabbage, cored and cut into strips'
  - '7 oz (200 g) Swiss chard, leaves sliced, stems chopped'
  - '2 potatoes, peeled and cut into 1/2-inch pieces'
  - 'kosher salt, to taste'
  - 'black pepper, to taste'
  - '1 lb (500 g) stale Tuscan bread, sliced'
  - '--- To finish ---'
  - 'water, as needed'
  - 'extra-virgin olive oil, for drizzling'
servings: 6 portions
pairingNotes:
  shaved-fennel-citrus-salad: 'Crisp and bright next to a thick, earthy soup.'
---

## Chef's Note

Ribollita means "reboiled." Tuscan cooks make a big pot of bean and black kale soup, layer it with stale bread overnight and boil it again the next day until it is thick enough to hold a spoon. Finish each bowl with your best olive oil.

## Directions

1. **Soak the beans:** The day before, put the dried cannellini beans and water in a large bowl, with the water covering the beans by 3 inches. Soak 12 hours or overnight, then drain.
2. **Cook the beans:** Put the beans in a pot and cover by 2 inches with fresh water. Boil hard for 10 minutes, then lower the heat and simmer until creamy all the way through, 1 to 2 hours. Top up with hot water to keep them covered. Keep them in their liquid.
3. **Cook the soffritto:** Warm the onions, carrots, celery, and 1/4 cup of the olive oil in a large, heavy soup pot over medium-low heat. Cook, stirring, until soft but not browned, 10 to 15 minutes.
4. **Wilt the greens:** Add the tomatoes, cavolo nero, savoy cabbage, Swiss chard, and potatoes, with the chard stems going in before the leaves. Stir in the greens by handfuls as they wilt, 5 to 10 minutes.
5. **Purée half the beans:** Pass about half the beans through a food mill or sieve into their cooking liquid. Keep the rest whole.
6. **Simmer the soup:** Pour the bean purée and its liquid into the soup pot and season with the salt and pepper. Simmer gently for 1 hour, stirring along the bottom and adding a splash of hot water if it gets too thick, until the potatoes are tender and the broth is creamy. Stir in the whole beans and season well, since the bread is unsalted.
7. **Layer with bread:** In a large baking dish, layer half the stale Tuscan bread, half the soup, the rest of the bread and the rest of the soup. Let it cool, then cover and refrigerate overnight.
8. **Boil it again:** Scrape the soup into a heavy pot and warm over medium-low heat, stirring along the bottom often. Add the water if it is too thick to stir. Bring to a boil, then simmer gently, stirring, until thick and spoonable, about 10 minutes.
9. **Serve:** Ladle into bowls and drizzle each one with the olive oil.
