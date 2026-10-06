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
prepTime: 'About 30 min preparation, including the mushroom soak'
cookTime: About 20–30 min cooking
totalTime: About 55–65 min with prepared stock and cooked pork
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
  - basmati-rice
ingredients:
  - '--- Soup ---'
  - '1 oz Dried wood ear mushrooms, soaked, drained, rinsed and sliced'
  - 'Boiling water, enough to cover the mushrooms'
  - 2 tbsp Canola oil
  - '1 tsp Fresh ginger, grated'
  - 1 tbsp Red chile paste (sambal oelek)
  - '1/4 lb Fully cooked char siu, shredded'
  - '1/2 cup Bamboo shoots, sliced'
  - >-
    2 quarts Prepared [Chinese Chicken
    Stock](/mise/recipes/cantonese-wonton-broth)
  - 1/4 cup Soy sauce
  - 1/4 cup Rice vinegar
  - 1 tsp White pepper
  - 1 tsp Salt
  - 'Sugar, a pinch'
  - '1 Square of firm tofu, drained, cut into ¼-inch strips'
  - 3 tbsp Cornstarch
  - 1/4 cup Water for the cornstarch slurry
  - '1 Large egg, lightly beaten'
  - '--- Finish ---'
  - 'Sesame oil, a drizzle for serving'
  - 'Fresh scallions, for garnish, sliced'
  - 'Fresh cilantro, for garnish, chopped'
source: Adapted from Foodnetwork.com
sourceUrl: >-
  http://www.foodnetwork.com/recipes/tyler-florence/hot-and-sour-soup-recipe-1914206
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
          name: Dried wood ear mushrooms
          quantity:
            amount: 1
            unit: oz
          uses:
            - step: soak
              share: 1
          preparation: 'soaked, drained, rinsed and sliced'
        - id: soak-water
          key: soak-water
          name: Boiling water
          allowance: enough to cover the mushrooms
          uses:
            - step: soak
              share: 1
          role: cooking-water
        - id: oil
          key: oil
          name: Canola oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: infuse
              share: 1
        - id: ginger
          key: ginger
          name: Fresh ginger
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: infuse
              share: 1
          preparation: grated
        - id: chili
          key: chili
          name: Red chile paste (sambal oelek)
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: infuse
              share: 1
        - id: pork
          key: pork
          name: Fully cooked char siu
          quantity:
            amount: 0.25
            unit: lb
          uses:
            - step: infuse
              share: 1
          preparation: shredded
        - id: bamboo
          key: bamboo
          name: Bamboo shoots
          quantity:
            amount: 0.5
            unit: cup
          uses:
            - step: infuse
              share: 1
          preparation: sliced
        - id: stock
          key: stock
          name: >-
            Prepared [Chinese Chicken
            Stock](/mise/recipes/cantonese-wonton-broth)
          quantity:
            amount: 2
            unit: quart
          uses:
            - step: boil
              share: 1
        - id: soy
          key: soy
          name: Soy sauce
          quantity:
            amount: 0.25
            unit: cup
          uses:
            - step: season
              share: 1
        - id: vinegar
          key: vinegar
          name: Rice vinegar
          quantity:
            amount: 0.25
            unit: cup
          uses:
            - step: season
              share: 1
        - id: pepper
          key: pepper
          name: White pepper
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: season
              share: 1
        - id: salt
          key: salt
          name: Salt
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: season
              share: 1
        - id: sugar
          key: sugar
          name: Sugar
          allowance: a pinch
          uses:
            - step: season
              share: 1
        - id: tofu
          key: tofu
          name: Square of firm tofu
          quantity:
            amount: 1
            unit: count
          uses:
            - step: tofu
              share: 1
          plural: Squares of firm tofu
          preparation: 'drained, cut into ¼-inch strips'
        - id: starch
          key: starch
          name: Cornstarch
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: thicken
              share: 1
        - id: slurry-water
          key: slurry-water
          name: Water for the cornstarch slurry
          quantity:
            amount: 0.25
            unit: cup
          uses:
            - step: thicken
              share: 1
        - id: egg
          key: egg
          name: Large egg
          quantity:
            amount: 1
            unit: count
          uses:
            - step: egg
              share: 1
          plural: Large eggs
          preparation: lightly beaten
    - id: finish
      name: Finish
      ingredients:
        - id: sesame
          key: sesame
          name: Sesame oil
          allowance: a drizzle for serving
          uses:
            - step: serve
              share: 1
          role: garnish
        - id: scallions
          key: scallions
          name: Fresh scallions
          allowance: 'for garnish, sliced'
          uses:
            - step: serve
              share: 1
          role: garnish
        - id: cilantro
          key: cilantro
          name: Fresh cilantro
          allowance: 'for garnish, chopped'
          uses:
            - step: serve
              share: 1
          role: garnish
  steps:
    - id: soak
      title: Prepare the wood ears
      text: >-
        Place {{ingredients}} in a heatproof bowl, using enough boiling water to
        cover the mushrooms. Soak for about 30 minutes. Drain and rinse, discard
        any hard clusters in the centers, then slice. Discard the soaking
        liquid.
    - id: infuse
      title: Start the soup
      text: >-
        Have {{ingredients}} ready. In a pot large enough for the stock and
        solids with stirring room, heat the oil over medium heat. Cook the
        ginger and chile paste for about 1 minute, stirring, then add the fully
        cooked pork, drained mushrooms and bamboo.
    - id: boil
      title: Simmer the broth
      text: >-
        Add {{ingredients}}. Bring to a boil, then gently simmer for about 10
        minutes.
    - id: season
      title: Season
      text: >-
        Stir in {{ingredients}}. Taste the broth with a clean spoon before
        adding the egg; stock brands differ in salinity.
    - id: tofu
      title: Warm the tofu
      text: >-
        Add {{ingredients}} and gently simmer for about 3 minutes, keeping the
        strips intact.
    - id: thicken
      title: Thicken
      text: >-
        Mix {{ingredients}} separately until smooth, restir just before use and
        slowly pour into the simmering soup while stirring. Simmer for about 2
        minutes, until evenly thickened and no longer cloudy with raw starch.
    - id: egg
      title: Set the egg ribbons
      text: >-
        Have {{ingredients}} ready. Remove the pot from heat and stir the soup
        in one direction to create a current. Stop stirring and slowly stream in
        the egg. Let the ribbons set, then gently return to heat until fully set
        and the soup measures at least 165°F /74°C.
    - id: serve
      title: Serve
      text: 'Ladle into bowls and finish with {{ingredients}}. Serve hot.'
learning:
  focus: White pepper and rice vinegar supply the hot and sour notes
  outcome: 'Peppery, sour soup with suspended solids and set egg ribbons.'
  techniques:
    - starch
    - temperature
  before:
    - >-
      Measure 2 quarts of finished prepared stock for the original batch. The
      linked stock’s starting water is not its finished yield; make enough stock
      separately rather than assuming one batch supplies this amount.
    - >-
      Use fully cooked char siu and a firm tofu square that holds together in
      thin strips. The listed square is not a specified package weight.
    - >-
      Scale the measured soup ingredients together and use a pot with room above
      the liquid for stirring and boiling. Soaking and simmering times do not
      multiply with portions.
  checkpoints:
    - step: 6
      cue: >-
        Slurry-thickened soup is gently simmering and no longer cloudy with raw
        starch.
      why: Restir settled starch just before pouring so it thickens evenly.
    - step: 7
      cue: Egg ribbons are fully set and the soup reaches 165°F.
      why: >-
        Set appearance alone is not the measured endpoint for a meat-containing
        egg dish.
  troubleshooting:
    - problem: Slurry leaves lumps or the egg forms clumps
      cause: Starch settled or egg was added too quickly to still broth
      fix: >-
        Restir the slurry and pour gradually while stirring. Make a current
        before slowly streaming the beaten egg; then let the ribbons set before
        gently reheating.
  substitutions:
    - ingredient: 1 tsp grated ginger in the original batch
      alternative: >-
        For the original batch, use a 1-inch piece of fresh ginger, peeled and
        grated, instead of the measured teaspoon.
      effect: >-
        Choose one ginger measure and scale it with the batch; an inch-long
        piece is not a teaspoon conversion.
  storage: >-
    Refrigerate promptly in shallow containers at 40°F or below, within 2 hours
    (1 hour above 90°F). Use within 3–4 days. Reheat while gently stirring and
    check 165°F throughout. Bring reheated soup to a rolling boil as USDA
    additionally recommends, then stop boiling; prolonged boiling can
    concentrate the broth and change the egg/tofu texture.
  timing: >-
    About 30 min preparation, including the mushroom soak; About 20–30 min
    cooking; About 55–65 min with prepared stock and cooked pork.
  sources:
    - title: Tyler Florence — Hot and Sour Soup
      url: >-
        http://www.foodnetwork.com/recipes/tyler-florence/hot-and-sour-soup-recipe-1914206
    - title: FoodSafety.gov — Safe minimum internal temperatures
      url: >-
        https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures
    - title: USDA — Leftovers and food safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
    - title: 'CDC — Safer food choices: meat-containing egg dishes'
      url: 'https://www.cdc.gov/food-safety/foods/safer-food-choices.html'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

White pepper and rice vinegar supply the hot and sour notes. Prepare the egg and slurry before starting: the slurry settles while it waits, and the egg forms ribbons most easily in moving broth. Use fully cooked char siu and measure the prepared stock; making either from scratch is a separate task.

## Directions

1. **Prepare the wood ears:** Place Dried wood ear mushrooms and Boiling water in a heatproof bowl, using enough boiling water to cover the mushrooms. Soak for about 30 minutes. Drain and rinse, discard any hard clusters in the centers, then slice. Discard the soaking liquid.
2. **Start the soup:** Have Canola oil, Fresh ginger, Red chile paste (sambal oelek), Fully cooked char siu, and Bamboo shoots ready. In a pot large enough for the stock and solids with stirring room, heat the oil over medium heat. Cook the ginger and chile paste for about 1 minute, stirring, then add the fully cooked pork, drained mushrooms and bamboo.
3. **Simmer the broth:** Add Prepared [Chinese Chicken Stock](/mise/recipes/cantonese-wonton-broth). Bring to a boil, then gently simmer for about 10 minutes.
4. **Season:** Stir in Soy sauce, Rice vinegar, White pepper, Salt, and Sugar. Taste the broth with a clean spoon before adding the egg; stock brands differ in salinity.
5. **Warm the tofu:** Add Square of firm tofu and gently simmer for about 3 minutes, keeping the strips intact.
6. **Thicken:** Mix Cornstarch and Water for the cornstarch slurry separately until smooth, restir just before use and slowly pour into the simmering soup while stirring. Simmer for about 2 minutes, until evenly thickened and no longer cloudy with raw starch.
7. **Set the egg ribbons:** Have Large egg ready. Remove the pot from heat and stir the soup in one direction to create a current. Stop stirring and slowly stream in the egg. Let the ribbons set, then gently return to heat until fully set and the soup measures at least 165°F /74°C.
8. **Serve:** Ladle into bowls and finish with Sesame oil, Fresh scallions, and Fresh cilantro. Serve hot.
