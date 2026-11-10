---
miseId: ddae4dbd-54a6-49bb-b1aa-560dfb68fa27
title: Hot and Sour Soup
origin: China
difficulty: easy
cookingMethods:
  - saute
  - simmer
  - boil
occasions:
  - comfort-food
  - weekend-project
  - meal-prep
flavorProfile:
  - spicy
  - savory
  - acidic
  - umami
cuisines:
  - Chinese
role: main
vibe: comfort
prepTime: 30 min
cookTime: 25 min
totalTime: 55 min
servings: 6 portions
seasons:
  - year-round
  - winter
  - fall
nutritionalDensity: moderate
leftovers: excellent
advancePrep:
  - make-ahead
pairsWith:
  - har-gow-dim-sum-shrimp-dumplings
  - smashed-cucumber-salad
pairingNotes:
  har-gow-dim-sum-shrimp-dumplings: Delicate shrimp dumplings for a dim sum night.
  smashed-cucumber-salad: 'A cool, crunchy side for the hot soup.'
ingredients:
  - '--- Soup ---'
  - 1 oz dried wood ear mushrooms
  - 'boiling water, to cover'
  - 2 tbsp canola oil
  - '1 tsp fresh ginger, grated'
  - 1 tbsp sambal oelek
  - '1/4 lb char siu (Chinese barbecue pork), shredded'
  - '1/2 cup bamboo shoots, sliced'
  - '2 quarts [unsalted chicken stock](/mise/recipes/homemade-chicken-stock)'
  - 1/4 cup soy sauce
  - 1 tsp ground white pepper
  - 1 tsp salt
  - 'sugar, a pinch'
  - '8 oz firm tofu, drained, cut into 1/4-inch strips'
  - 3 tbsp cornstarch
  - 1/4 cup cold water
  - '1 large egg, lightly beaten'
  - 1/3 cup Chinkiang black vinegar
  - '--- To finish ---'
  - 'toasted sesame oil, for drizzling'
  - 'scallions, thinly sliced'
  - 'fresh cilantro, chopped'
source: Adapted from Food Network
sourceUrl: 'https://www.foodnetwork.com/recipes/tyler-florence/hot-and-sour-soup-recipe-1914206'
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: soup
      name: Soup
      ingredients:
        - id: mushrooms
          key: mushrooms
          name: dried wood ear mushrooms
          quantity:
            amount: 1
            unit: oz
          uses:
            - step: soak
              share: 1
        - id: soak-water
          key: soak-water
          name: boiling water
          allowance: to cover
          uses:
            - step: soak
              share: 1
          role: cooking-water
        - id: oil
          key: oil
          name: canola oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: infuse
              share: 1
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: infuse
              share: 1
          preparation: grated
        - id: chili
          key: chili
          name: sambal oelek
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: infuse
              share: 1
        - id: pork
          key: pork
          name: char siu (Chinese barbecue pork)
          quantity:
            amount: 1/4
            unit: lb
          uses:
            - step: pork
              share: 1
          preparation: shredded
        - id: bamboo
          key: bamboo
          name: bamboo shoots
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: pork
              share: 1
          preparation: sliced
        - id: stock
          key: stock
          name: '[unsalted chicken stock](/mise/recipes/homemade-chicken-stock)'
          quantity:
            amount: 2
            unit: quart
          uses:
            - step: boil
              share: 1
        - id: soy
          key: soy
          name: soy sauce
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: season
              share: 1
        - id: pepper
          key: pepper
          name: ground white pepper
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: season
              share: 1
        - id: salt
          key: salt
          name: salt
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: season
              share: 1
        - id: sugar
          key: sugar
          name: sugar
          allowance: a pinch
          uses:
            - step: season
              share: 1
        - id: tofu
          key: tofu
          name: firm tofu
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: tofu
              share: 1
          preparation: 'drained, cut into 1/4-inch strips'
        - id: starch
          key: starch
          name: cornstarch
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: thicken
              share: 1
        - id: slurry-water
          key: slurry-water
          name: cold water
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: thicken
              share: 1
        - id: egg
          key: egg
          name: large egg
          quantity:
            amount: 1
            unit: count
          uses:
            - step: egg
              share: 1
          plural: large eggs
          preparation: lightly beaten
        - id: vinegar
          key: vinegar
          name: Chinkiang black vinegar
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: sour
              share: 1
    - id: finish
      name: To finish
      ingredients:
        - id: sesame
          key: sesame
          name: toasted sesame oil
          allowance: for drizzling
          uses:
            - step: serve
              share: 1
          role: garnish
        - id: scallions
          key: scallions
          name: scallions
          allowance: thinly sliced
          uses:
            - step: serve
              share: 1
          role: garnish
        - id: cilantro
          key: cilantro
          name: fresh cilantro
          allowance: chopped
          uses:
            - step: serve
              share: 1
          role: garnish
  steps:
    - id: soak
      title: Soak the wood ears
      text: >-
        Put {{ingredients}} in a heatproof bowl and soak until soft, about 30 minutes. Drain, rinse,
        cut out any hard centers and slice thin.
    - id: infuse
      title: Bloom the aromatics
      text: >-
        Heat {{ingredients}} in a large pot over medium heat. Cook, stirring, until fragrant, about
        1 minute.
    - id: pork
      title: Add the pork
      text: >-
        Add the sliced wood ears along with {{ingredients}}. Stir to coat in the chile oil, about 1
        minute.
    - id: boil
      title: Simmer the broth
      text: 'Pour in {{ingredients}}. Bring to a boil, then lower the heat and simmer for 10 minutes.'
    - id: season
      title: Season
      text: 'Stir in {{ingredients}}. Taste and add more salt if the broth needs it.'
    - id: tofu
      title: Add the tofu
      text: 'Slide in {{ingredients}} and simmer gently until heated through, about 3 minutes.'
    - id: thicken
      title: Thicken
      text: >-
        Stir {{ingredients}} together until smooth. Pour the slurry slowly into the simmering soup,
        stirring, and simmer until the broth turns glossy and slightly thick, about 2 minutes.
    - id: egg
      title: Swirl in the egg
      text: >-
        Take the pot off the heat and stir the soup in one direction to make a current. Stop
        stirring and slowly pour the beaten {{ingredients}} into the soup in a thin stream. Let it
        sit for 1 minute so the ribbons set.
    - id: sour
      title: Add the vinegar
      text: >-
        Stir in {{ingredients}} off the heat, which keeps its sharp, malty aroma. Taste and add a
        little more if you want it more sour.
    - id: serve
      title: Serve
      text: 'Ladle into bowls and finish with {{ingredients}}.'
learning:
  techniques:
    - starch
    - temperature
  substitutions:
    - ingredient: unsalted chicken stock
      alternative: Low-sodium boxed chicken broth
      effect: Saltier than homemade stock. Taste the soup before adding the salt.
    - ingredient: Chinkiang black vinegar
      alternative: Rice vinegar
      effect: 'Sharper and cleaner, without the malty depth and dark color.'
    - ingredient: dried wood ear mushrooms
      alternative: Dried shiitake mushrooms
      effect: "More savory and softer, without the wood ears' crunch."
    - ingredient: char siu (Chinese barbecue pork)
      alternative: 'Leftover roast pork, shredded'
      effect: Milder and less sweet. Add an extra pinch of sugar to the broth.
  storage: >-
    Keeps 3 days in the fridge. Reheat over medium heat, stirring, and add a splash of vinegar to
    brighten it.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

The Chinese restaurant classic, peppery and sour. The heat comes from white pepper, not just chile, and the sourness from Chinkiang black vinegar, a malty rice vinegar from eastern China. Stir the vinegar in at the very end, off the heat, so it stays bright.

## Directions

1. **Soak the wood ears:** Put dried wood ear mushrooms and boiling water in a heatproof bowl and soak until soft, about 30 minutes. Drain, rinse, cut out any hard centers and slice thin.
2. **Bloom the aromatics:** Heat canola oil, fresh ginger, and sambal oelek in a large pot over medium heat. Cook, stirring, until fragrant, about 1 minute.
3. **Add the pork:** Add the sliced wood ears along with char siu (Chinese barbecue pork) and bamboo shoots. Stir to coat in the chile oil, about 1 minute.
4. **Simmer the broth:** Pour in [unsalted chicken stock](/mise/recipes/homemade-chicken-stock). Bring to a boil, then lower the heat and simmer for 10 minutes.
5. **Season:** Stir in soy sauce, ground white pepper, salt, and sugar. Taste and add more salt if the broth needs it.
6. **Add the tofu:** Slide in firm tofu and simmer gently until heated through, about 3 minutes.
7. **Thicken:** Stir cornstarch and cold water together until smooth. Pour the slurry slowly into the simmering soup, stirring, and simmer until the broth turns glossy and slightly thick, about 2 minutes.
8. **Swirl in the egg:** Take the pot off the heat and stir the soup in one direction to make a current. Stop stirring and slowly pour the beaten large egg into the soup in a thin stream. Let it sit for 1 minute so the ribbons set.
9. **Add the vinegar:** Stir in Chinkiang black vinegar off the heat, which keeps its sharp, malty aroma. Taste and add a little more if you want it more sour.
10. **Serve:** Ladle into bowls and finish with toasted sesame oil, scallions, and fresh cilantro.
