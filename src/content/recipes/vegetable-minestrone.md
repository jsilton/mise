---
miseId: c67b8a1a-d893-4279-a8d5-2ec422c61366
title: Vegetable Minestrone
origin: Italy
cuisines:
  - Italian
categories:
  - Italian
  - Soup
  - Main Course
role: main
vibe: comfort
difficulty: easy
description: >-
  A substantial Italian soup of white beans, small pasta and seasonal vegetables, with rosemary,
  tomatoes and a rich aromatic broth.
prepTime: 25 min
cookTime: 1 hr 15 min
totalTime: 1 hr 40 min
source: 'Adapted from J. Kenji López-Alt, Serious Eats'
sourceUrl: 'https://www.seriouseats.com/the-best-minestrone-soup-recipe'
cookingMethods:
  - saute
  - simmer
dietary:
  - vegetarian-option
  - dairy-free-option
  - gluten-free-option
occasions:
  - family-meal
  - make-ahead
  - meal-prep
  - comfort-food
seasons:
  - year-round
flavorProfile:
  - savory
  - herbaceous
nutritionalDensity: hearty
leftovers: excellent
advancePrep:
  - make-ahead
  - freeze-ahead
equipment:
  - large-heavy-soup-pot
  - wooden-spoon
  - fine-mesh-strainer
  - optional-pasta-pot
  - shallow-storage-containers
pairsWith:
  - garlic-bread
  - everyday-arugula-salad
pairingNotes:
  garlic-bread: For dunking in the broth.
  everyday-arugula-salad: 'A crisp, lemony salad beside the warm soup.'
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: soup
      name: Minestrone
      ingredients:
        - id: olive-oil
          key: olive-oil
          name: extra-virgin olive oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: pancetta
              share: 1
        - id: pancetta
          key: pancetta
          name: pancetta
          quantity:
            amount: 4
            unit: oz
          preparation: cut into 1/4-inch dice
          optional: true
          uses:
            - step: pancetta
              share: 1
        - id: onion
          key: onion
          name: medium onion
          plural: medium onions
          quantity:
            amount: 1
            unit: count
          preparation: finely chopped
          uses:
            - step: soffritto
              share: 1
        - id: carrot
          key: carrot
          name: medium carrot
          plural: medium carrots
          quantity:
            amount: 1
            unit: count
          preparation: peeled and finely diced
          uses:
            - step: soffritto
              share: 1
        - id: celery-stalk
          key: celery-stalk
          name: celery stalk
          plural: celery stalks
          quantity:
            amount: 2
            unit: count
          preparation: finely diced
          uses:
            - step: soffritto
              share: 1
        - id: rosemary
          key: rosemary
          name: fresh rosemary
          quantity:
            amount: 1
            unit: tbsp
          preparation: finely chopped
          uses:
            - step: soffritto
              share: 1
        - id: garlic-clove
          key: garlic-clove
          name: garlic clove
          plural: garlic cloves
          quantity:
            amount: 2
            unit: count
          preparation: minced
          uses:
            - step: tomatoes
              share: 1
        - id: whole-peeled-tomato-can
          key: whole-peeled-tomato-can
          name: whole peeled tomatoes
          quantity:
            amount: 1
            unit: can
          packageSize:
            amount: 14
            unit: oz
          preparation: 'crushed by hand, with their juices'
          uses:
            - step: tomatoes
              share: 1
        - id: cooked-cannellini
          key: cooked-cannellini
          name: canned cannellini beans
          quantity:
            amount: 2
            unit: cup
          preparation: drained and rinsed
          uses:
            - step: broth
              share: 1
        - id: vegetable-stock
          key: vegetable-stock
          name: vegetable stock
          quantity:
            amount: 2
            unit: quart
          uses:
            - step: broth
              share: 1
        - id: parmesan-rind
          key: parmesan-rind
          name: Parmesan rind
          plural: Parmesan rinds
          quantity:
            amount: 1
            unit: count
          optional: true
          role: discarded
          uses:
            - step: broth
              share: 1
        - id: salt
          key: salt
          name: kosher salt
          allowance: to taste
          uses:
            - step: broth
              share: 1
        - id: small-pasta
          key: small-pasta
          name: ditalini or other small pasta
          stepName: pasta
          quantity:
            amount: 3 1/2
            unit: oz
          uses:
            - step: pasta
              share: 1
        - id: zucchini
          key: zucchini
          name: zucchini
          quantity:
            amount: 4
            unit: oz
          preparation: cut into 1/2-inch pieces
          uses:
            - step: pasta
              share: 1
        - id: summer-squash
          key: summer-squash
          name: yellow summer squash
          quantity:
            amount: 4
            unit: oz
          preparation: cut into 1/2-inch pieces
          uses:
            - step: pasta
              share: 1
        - id: green-beans
          key: green-beans
          name: green beans
          quantity:
            amount: 4
            unit: oz
          preparation: trimmed and cut into 1/2-inch lengths
          uses:
            - step: pasta
              share: 1
        - id: spinach
          key: spinach
          name: spinach
          quantity:
            amount: 4
            unit: oz
          preparation: roughly chopped
          uses:
            - step: greens
              share: 1
        - id: fresh-herbs
          key: fresh-herbs
          name: fresh basil or parsley
          stepName: herbs
          allowance: 'chopped, for serving'
          role: garnish
          uses:
            - step: finish
              share: 1
        - id: black-pepper
          key: black-pepper
          name: black pepper
          allowance: to taste
          uses:
            - step: finish
              share: 1
        - id: serving-olive-oil
          key: serving-olive-oil
          name: extra-virgin olive oil
          allowance: for drizzling
          role: garnish
          uses:
            - step: serve
              share: 1
        - id: grated-parmesan
          key: grated-parmesan
          name: Parmigiano-Reggiano
          allowance: 'grated, for serving'
          optional: true
          role: garnish
          uses:
            - step: serve
              share: 1
  steps:
    - id: pancetta
      title: Render the pancetta
      text: >-
        Warm {{ingredients}} in a large, heavy soup pot over medium heat. Cook, stirring, until the
        pancetta fat melts and the pancetta is soft but not browned, about 4 minutes. Without
        pancetta, heat the oil until it shimmers.
    - id: soffritto
      title: Soften the vegetables
      text: >-
        Add {{ingredients}}. Cook, stirring often, until the vegetables are soft but not browned, 10
        to 15 minutes.
    - id: tomatoes
      title: Cook down the tomatoes
      text: >-
        Stir in {{ingredients}}. Cook, stirring along the bottom, until the tomatoes break down and
        most of their liquid cooks off so the mixture sizzles in the oil, 5 to 10 minutes.
    - id: broth
      title: Simmer the broth
      text: >-
        Add {{ingredients}}, starting with a little salt. Bring to a boil, then lower the heat and
        simmer, partly covered, for 30 minutes, until the broth tastes of the vegetables and
        rosemary.
    - id: pasta
      title: Cook the pasta and squash
      text: >-
        Add {{ingredients}}. Simmer, stirring often so the pasta doesn't stick, until the pasta is
        al dente and the green beans are tender, 10 to 12 minutes. Add a splash of water if the soup
        gets too thick.
    - id: greens
      title: Wilt the spinach
      text: 'Stir in {{ingredients}} and cook until wilted, about 2 minutes. Fish out the Parmesan rind.'
    - id: finish
      title: Season the soup
      text: 'Take the pot off the heat. Stir in {{ingredients}}, then taste and add more salt.'
    - id: serve
      title: Serve
      text: 'Ladle into warm bowls and finish with {{ingredients}}.'
learning:
  techniques:
    - seasoning
    - starch
    - temperature
  substitutions:
    - ingredient: vegetable stock
      alternative: Chicken stock
      effect: 'Use the same amount for a richer, non-vegetarian soup.'
    - ingredient: pancetta
      alternative: Unsmoked bacon
      effect: 'Bacon works, but smoked bacon adds a smoky taste.'
    - ingredient: spinach
      alternative: Lacinato kale
      effect: 'Slice it thin and add it with the squash, since it needs longer to soften.'
    - ingredient: Pasta cooked in the soup
      alternative: Pasta cooked separately
      effect: >-
        For leftovers, boil the pasta in salted water and spoon it into each bowl. The stored soup
        stays brothy.
  storage: >-
    Keeps 4 days in the fridge and freezes for 3 months. The pasta soaks up broth as it sits, so
    loosen the soup with water when you reheat it.
  review:
    status: editorial-review
    date: '2026-11-09'
ingredients:
  - 2 tbsp extra-virgin olive oil
  - '4 oz pancetta, cut into 1/4-inch dice, optional'
  - '1 medium onion, finely chopped'
  - '1 medium carrot, peeled and finely diced'
  - '2 celery stalks, finely diced'
  - '1 tbsp fresh rosemary, finely chopped'
  - '2 garlic cloves, minced'
  - '1 can (14 oz) whole peeled tomatoes, crushed by hand, with their juices'
  - '2 cups canned cannellini beans, drained and rinsed'
  - 2 quarts vegetable stock
  - '1 Parmesan rind, optional'
  - 'kosher salt, to taste'
  - 3 1/2 oz ditalini or other small pasta
  - '4 oz zucchini, cut into 1/2-inch pieces'
  - '4 oz yellow summer squash, cut into 1/2-inch pieces'
  - '4 oz green beans, trimmed and cut into 1/2-inch lengths'
  - '4 oz spinach, roughly chopped'
  - 'fresh basil or parsley, chopped, for serving'
  - 'black pepper, to taste'
  - 'extra-virgin olive oil, for drizzling'
  - 'Parmigiano-Reggiano, grated, for serving, optional'
servings: 6 portions
---

## Chef's Note

Minestrone is the everyday vegetable soup of Italian home kitchens, built on beans, seasonal vegetables and a little pasta. This one, after J. Kenji López-Alt, gets its depth from a slow soffritto, tomatoes cooked down in olive oil and a Parmesan rind simmered in the broth. The squash and spinach go in late so they stay fresh and green.

## Directions

1. **Render the pancetta:** Warm the pancetta (if using) and 2 tbsp of the olive oil in a large, heavy soup pot over medium heat. Cook, stirring, until the pancetta fat melts and the pancetta is soft but not browned, about 4 minutes. Without pancetta, heat the oil until it shimmers.
2. **Soften the vegetables:** Add the onion, carrot, celery, and rosemary. Cook, stirring often, until the vegetables are soft but not browned, 10 to 15 minutes.
3. **Cook down the tomatoes:** Stir in the garlic and tomatoes. Cook, stirring along the bottom, until the tomatoes break down and most of their liquid cooks off so the mixture sizzles in the oil, 5 to 10 minutes.
4. **Simmer the broth:** Add the cannellini beans, vegetable stock, Parmesan rind (if using), and salt, starting with a little salt. Bring to a boil, then lower the heat and simmer, partly covered, for 30 minutes, until the broth tastes of the vegetables and rosemary.
5. **Cook the pasta and squash:** Add the pasta, zucchini, yellow summer squash, and green beans. Simmer, stirring often so the pasta doesn't stick, until the pasta is al dente and the green beans are tender, 10 to 12 minutes. Add a splash of water if the soup gets too thick.
6. **Wilt the spinach:** Stir in the spinach and cook until wilted, about 2 minutes. Fish out the Parmesan rind.
7. **Season the soup:** Take the pot off the heat. Stir in the herbs and pepper, then taste and add more salt.
8. **Serve:** Ladle into warm bowls and finish with the olive oil and Parmigiano-Reggiano (if using).
