---
miseId: 7d83549c-4969-47b8-943f-953c4be788e8
title: Shrimp and Corn Chowder
difficulty: easy
cookingMethods:
  - saute
  - simmer
  - boil
  - blend
occasions:
  - weeknight
  - comfort-food
  - light-and-fresh
seasons:
  - summer
nutritionalDensity: hearty
leftovers: excellent
equipment:
  - large-pot
  - blender
flavorProfile:
  - spicy
  - acidic
  - rich
cuisines:
  - South American
role: main
vibe: comfort
prepTime: 20 min
cookTime: 40 min
totalTime: '1 hr 45 min, including 1 hr marinating'
servings: 6 portions
pairsWith:
  - cornbread
  - spicy-peach-and-avocado-salad
pairingNotes:
  cornbread: Warm cornbread for dunking.
  spicy-peach-and-avocado-salad: A cool summer salad beside the hot chowder.
ingredients:
  - '2 lb raw medium shrimp, peeled and deveined'
  - '6 garlic cloves, minced, divided'
  - '2 scallions, minced'
  - 2 tbsp fresh lime juice
  - 1 tsp kosher salt
  - '2 cups corn kernels, fresh or thawed frozen, divided'
  - 2 cups whole milk
  - 2 tbsp annatto oil
  - '1/2 cup red onion, finely chopped'
  - '1 red bell pepper, finely chopped'
  - 1 tsp ground cumin
  - '3 plum tomatoes, peeled, seeded and finely chopped'
  - 6 cups fish stock or low-sodium chicken stock
  - '1 green plantain, peeled and coarsely grated'
  - 2 tbsp cilantro leaves
  - 1/4 tsp cayenne pepper
  - 'kosher salt, to taste'
source: Adapted from Food & Wine
sourceUrl: 'https://www.foodandwine.com/recipes/shrimp-and-corn-chowder'
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: main
      name: Main recipe
      ingredients:
        - id: shrimp
          key: shrimp
          name: raw medium shrimp
          quantity:
            amount: 2
            unit: lb
          uses:
            - step: marinate
              share: 1
          preparation: peeled and deveined
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 6
            unit: count
          uses:
            - step: marinate
              share: 2/3
            - step: base
              share: 1/3
          plural: garlic cloves
          preparation: minced
        - id: scallions
          key: scallions
          name: scallion
          quantity:
            amount: 2
            unit: count
          uses:
            - step: marinate
              share: 1
          plural: scallions
          preparation: minced
        - id: lime
          key: lime-juice
          name: fresh lime juice
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: marinate
              share: 1
        - id: salt
          key: salt
          name: kosher salt
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: corn
          key: corn
          name: corn kernels
          preparation: fresh or thawed frozen
          quantity:
            amount: 2
            unit: cup
          uses:
            - step: corn-milk
              share: 1/2
            - step: simmer
              share: 1/2
        - id: milk
          key: whole-milk
          name: whole milk
          quantity:
            amount: 2
            unit: cup
          uses:
            - step: corn-milk
              share: 1
        - id: oil
          key: annatto-or-olive-oil
          name: annatto oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: base
              share: 1
        - id: onion
          key: red-onion
          name: red onion
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: base
              share: 1
          preparation: finely chopped
        - id: pepper
          key: red-bell-pepper
          name: red bell pepper
          quantity:
            amount: 1
            unit: count
          uses:
            - step: base
              share: 1
          plural: red bell peppers
          preparation: finely chopped
        - id: cumin
          key: cumin
          name: ground cumin
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: base
              share: 1
        - id: tomatoes
          key: plum-tomato
          name: plum tomato
          quantity:
            amount: 3
            unit: count
          uses:
            - step: tomatoes
              share: 1
          plural: plum tomatoes
          preparation: 'peeled, seeded and finely chopped'
        - id: stock
          key: fish-or-chicken-stock
          name: fish stock or low-sodium chicken stock
          quantity:
            amount: 6
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: plantain
          key: green-plantain
          name: green plantain
          quantity:
            amount: 1
            unit: count
          uses:
            - step: simmer
              share: 1
          plural: green plantains
          preparation: peeled and coarsely grated
        - id: cilantro
          key: cilantro
          name: cilantro leaves
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: finish
              share: 1
        - id: cayenne
          key: cayenne
          name: cayenne pepper
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: finish
              share: 1
        - id: finishing-salt
          key: salt
          name: kosher salt
          uses:
            - step: finish
              share: 1
          allowance: to taste
  steps:
    - id: marinate
      title: Marinate the shrimp
      text: 'Toss {{ingredients}} in a bowl. Cover and refrigerate for 1 hour.'
    - id: corn-milk
      title: Make the corn milk
      text: >-
        While the shrimp marinate, puree {{ingredients}} in a blender or food processor. Strain
        through a coarse sieve, pressing hard on the solids, and keep the corn milk.
    - id: base
      title: Soften the vegetables
      text: >-
        In a large pot over medium heat, cook {{ingredients}}, stirring, until the vegetables
        soften, about 5 minutes.
    - id: tomatoes
      title: Add the tomatoes
      text: 'Stir in {{ingredients}} and cook for 2 minutes.'
    - id: simmer
      title: Simmer the chowder
      text: >-
        Add the corn milk and {{ingredients}}. Bring to a boil, then simmer, stirring now and then,
        until the plantain is soft and the soup has thickened, about 20 minutes.
    - id: refine
      title: Blend part of the soup
      text: >-
        Ladle a few cups of the soup into a blender, vent the lid and blend until smooth. Stir it
        back into the pot and bring the chowder back to a simmer.
    - id: cook-shrimp
      title: Cook the shrimp
      text: >-
        Add the shrimp and all their marinade. Simmer gently until the shrimp are pink and opaque, 2
        to 3 minutes.
    - id: finish
      title: Season and serve
      text: 'Stir in {{ingredients}}. Taste for salt and serve in warm bowls.'
learning:
  techniques:
    - starch
    - gentle-proteins
  substitutions:
    - ingredient: annatto oil
      alternative: Olive oil
      effect: 'The chowder is paler and loses the earthy, peppery note of annatto.'
    - ingredient: fish stock or low-sodium chicken stock
      alternative: Seafood stock from a carton
      effect: 'A good shortcut. It is often salty, so season at the end.'
  storage: Keeps 2 days in the fridge. Reheat gently over low heat so the shrimp stay tender.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

This is Maricel Presilla's chowder from coastal Ecuador. Grated green plantain melts into the stock and thickens it without flour, and fresh corn milk makes it sweet and creamy. The lime-marinated shrimp go in at the very end and cook in just a few minutes.

## Directions

1. **Marinate the shrimp:** Toss the shrimp, scallions, lime juice, 4 garlic cloves, and 1 tsp of the salt in a bowl. Cover and refrigerate for 1 hour.
2. **Make the corn milk:** While the shrimp marinate, puree the whole milk and 1 cup of the corn kernels in a blender or food processor. Strain through a coarse sieve, pressing hard on the solids, and keep the corn milk.
3. **Soften the vegetables:** In a large pot over medium heat, cook the annatto oil, red onion, red bell pepper, cumin, and the rest of the garlic, stirring, until the vegetables soften, about 5 minutes.
4. **Add the tomatoes:** Stir in the plum tomatoes and cook for 2 minutes.
5. **Simmer the chowder:** Add the corn milk and the fish stock or low-sodium chicken stock, green plantain, and the rest of the corn kernels. Bring to a boil, then simmer, stirring now and then, until the plantain is soft and the soup has thickened, about 20 minutes.
6. **Blend part of the soup:** Ladle a few cups of the soup into a blender, vent the lid and blend until smooth. Stir it back into the pot and bring the chowder back to a simmer.
7. **Cook the shrimp:** Add the shrimp and all their marinade. Simmer gently until the shrimp are pink and opaque, 2 to 3 minutes.
8. **Season and serve:** Stir in the cilantro, cayenne pepper, and salt. Taste for salt and serve in warm bowls.
