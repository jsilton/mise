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
  - year-round
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
  - American
role: main
vibe: comfort
prepTime: 20 min
cookTime: 40 min
totalTime: 'About 1 hr 30 min, including 1 hr marinating'
servings: 6 portions
pairsWith:
  - roasted-fall-harvest-salad
  - cinnamon-sweet-potatoes
  - green-beans-with-shallots-and-lemon
ingredients:
  - '--- Main recipe ---'
  - '2 lb raw medium shrimp, shelled and deveined; refrigerator-thawed if frozen'
  - '6 garlic cloves, minced'
  - '2 scallions, minced'
  - 2 tbsp fresh lime juice
  - 1 tsp salt
  - 2 cups fresh or thawed frozen corn kernels
  - 2 cups whole milk
  - 2 tbsp prepared annatto oil or olive oil
  - '1/2 cup red onion, finely chopped'
  - '1 red bell pepper, finely chopped'
  - 1 tsp ground cumin
  - '3 plum tomatoes, peeled, seeded and finely chopped'
  - '6 cups fish or chicken stock, canned low-sodium broth is also an option'
  - '1 unripe green plantain, peeled and coarsely grated'
  - 2 tbsp cilantro leaves
  - 1/4 tsp cayenne pepper
  - 'salt, to taste after the shrimp are cooked'
  - 'separately prepared tangy corn salsa, as desired for serving, optional'
source: Adapted from foodandwine.com
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
          preparation: shelled and deveined; refrigerator-thawed if frozen
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
          name: salt
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: marinate
              share: 1
        - id: corn
          key: corn
          name: fresh or thawed frozen corn kernels
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
          name: prepared annatto oil or olive oil
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
          name: fish or chicken stock
          quantity:
            amount: 6
            unit: cup
          uses:
            - step: simmer
              share: 1
          preparation: canned low-sodium broth is also an option
        - id: plantain
          key: green-plantain
          name: unripe green plantain
          quantity:
            amount: 1
            unit: count
          uses:
            - step: simmer
              share: 1
          plural: unripe green plantains
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
          name: salt
          uses:
            - step: finish
              share: 1
          allowance: to taste after the shrimp are cooked
        - id: salsa
          key: corn-salsa
          name: separately prepared tangy corn salsa
          uses:
            - step: finish
              share: 1
          allowance: as desired for serving
          optional: true
          role: garnish
  steps:
    - id: marinate
      title: Marinate
      text: >-
        In a nonreactive bowl, toss together {{ingredients}}. Cover and
        refrigerate for 1 hour; 1–3 hours is also an option. Keep the remaining
        garlic separate for the soup. The lime seasons the shrimp; it does not
        replace cooking.
    - id: corn-milk
      title: Corn milk
      text: >-
        Near the end of the shrimp's refrigerated marinade, puree
        {{ingredients}} in a food processor. Strain through a coarse sieve,
        pressing the corn solids to extract the liquid. Keep that corn milk for
        the soup. Refrigerate it if the soup cooking will not begin promptly.
    - id: base
      title: Base
      text: >-
        Use {{ingredients}} for this stage. In a pot with room for the measured
        stock, milk, vegetables and shrimp plus stirring headroom, heat the
        prepared oil over moderate heat, then add the garlic, onion, pepper and
        cumin. Cook, stirring, until the vegetables soften slightly, about 5
        minutes. Divide all supplies proportionally among enough pots or
        complete batches if the load will not fit.
    - id: tomatoes
      title: Tomatoes
      text: 'Stir in {{ingredients}} and cook about 2 minutes longer.'
    - id: simmer
      title: Simmer
      text: >-
        Add the corn milk and {{ingredients}}. Bring to a boil, then reduce to a
        simmer for about 20 minutes, stirring occasionally, until the grated
        plantain has softened and the soup has thickened.
    - id: refine
      title: Refine
      text: >-
        Blend only a portion of the soup for the chunky texture: about 2 cups in
        the original batch, adjusted with the batch amount. Use a blender whose
        manual explicitly permits this liquid at its actual temperature. Follow
        its hot-liquid fill, venting and speed limits, working in batches. Never
        put hot soup into a sealed blending cup; if the appliance does not allow
        it, cool the liquid to its permitted temperature before blending. Return
        all of this blended portion to the pot and bring the complete soup back
        to a simmer.
    - id: cook-shrimp
      title: Cook shrimp
      text: >-
        Lift the shrimp out of their refrigerated marinade with a utensil
        reserved for raw seafood, letting excess marinade drain back into the
        bowl. Transfer the shrimp to a clean covered bowl and keep them
        refrigerated. Add all the remaining marinade, including its minced
        garlic and scallions, to the soup and bring it to a rapid boil. Reduce
        to a gentle simmer, then add all the shrimp. Start checking after 2–3
        minutes and continue until the shrimp are firm, pearly and opaque
        throughout; check thick centers with a thin probe for 145°F / 63°C. Do
        not taste before the marinade has boiled and the shrimp have cooked.
    - id: finish
      title: Serve
      text: >-
        Use {{ingredients}} for this finish. Stir the cilantro and cayenne into
        the soup, then add finishing salt only to taste. Serve in warmed bowls
        with the optional salsa separately.
learning:
  focus: Grated plantain thickens the corn-and-milk base
  outcome: >-
    A partly pureed chowder with softened plantain and shrimp cooked through at
    the end.
  techniques:
    - temperature
  before:
    - >-
      Keep raw seafood at 40°F / 4°C or below; thaw frozen shrimp in the
      refrigerator before preparing it. Use clean utensils and dishes for the
      finished food.
    - >-
      Mince the garlic and divide it between marinade and soup as listed. Peel
      the plantain before grating, and prepare the tomatoes before cooking. Use
      prepared annatto oil or the listed olive-oil option; making a separate
      annatto-oil batch adds cooling time.
    - >-
      The six portions are the original serving plan. Finished soup volume and
      edible portion weights have not been measured; choose enough vessels for
      the scaled ingredients and headroom.
  checkpoints:
    - step: 5
      cue: >-
        The grated plantain has softened and the soup is thicker after
        simmering.
      why: >-
        Plantain cooks in the liquid; aroma or a fixed twenty-minute clock alone
        does not establish its texture.
    - step: 7
      cue: >-
        Shrimp are firm, pearly and opaque through their thickest part, with a
        measured 145°F / 63°C endpoint.
      why: >-
        Size and starting temperature change cooking time. Refrigerated lime
        marination adds flavor and does not establish doneness. Boil the used
        marinade before adding the shrimp, then reduce to a gentle simmer so the
        shrimp need only their short final cook.
  troubleshooting:
    - problem: The corn-and-plantain base catches on the pot
      cause: The thickening soup can stick if heat is high or stirring is neglected.
      fix: >-
        Reduce the simmer and stir across the bottom while the plantain
        finishes. Use enough pot capacity to stir comfortably.
  substitutions:
    - ingredient: Fresh corn
      alternative: Use the same measured amount of thawed frozen kernels.
      effect: >-
        Keep the milk and corn split unchanged; season and assess texture after
        simmering.
  storage: >-
    Refrigerate promptly in shallow containers within 2 hours, or 1 hour above
    90°F / 32°C, at 40°F / 4°C or below; use within 3–4 days. Reheat while
    stirring until 165°F / 74°C throughout. USDA additionally recommends a
    rolling boil for reheated soup; bring it to that point briefly rather than
    simmering for a prolonged time. Repeated heating can toughen shrimp and
    change the milk’s texture. This reheating guidance does not change the
    initial shrimp finish.
  timing: >-
    Allow about 1½ hours for the original prepared-oil batch, including the
    1-hour refrigerated marinade. Plan the corn milk and soup preparation near
    the end of that refrigerated wait. If preparing corn milk or cooked soup
    base ahead, refrigerate it promptly in shallow containers within 2 hours, or
    1 hour above 90°F / 32°C, at 40°F / 4°C or below. Reheat a refrigerated
    cooked base while stirring to 165°F / 74°C throughout and briefly bring it
    to a rolling boil before continuing with step 7. The 20-minute preparation
    and roughly 40-minute cooking entries are planning estimates, not a measured
    clock. Marinating for up to 3 hours, making annatto oil, cooling liquid for
    an appliance, chilling and reheating a prepared base or using extra
    pots/loads extends elapsed time.
  sources:
    - title: Maricel Presilla — shrimp and corn chowder
      url: 'https://www.foodandwine.com/recipes/shrimp-and-corn-chowder'
    - title: FDA seafood handling
      url: >-
        https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely
    - title: USDA leftovers
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
    - title: FDA refrigerated marination and used-marinade boiling
      url: >-
        https://www.fda.gov/food/buy-store-serve-safe-food/refrigerator-thermometers-cold-facts-about-food-safety
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Adapted from Maricel Presilla’s coastal Ecuadoran chowder. Grated green plantain thickens the corn-and-milk base. The current partly pureed version keeps some whole kernels; add the refrigerated, marinated shrimp only when the soup base is ready, and use their doneness rather than an exact two-minute promise.

## Directions

1. **Marinate:** In a nonreactive bowl, toss together raw medium shrimp, 2/3 of the garlic cloves, scallions, fresh lime juice, and salt. Cover and refrigerate for 1 hour; 1–3 hours is also an option. Keep the remaining garlic separate for the soup. The lime seasons the shrimp; it does not replace cooking.
2. **Corn milk:** Near the end of the shrimp's refrigerated marinade, puree 1/2 of the fresh or thawed frozen corn kernels and whole milk in a food processor. Strain through a coarse sieve, pressing the corn solids to extract the liquid. Keep that corn milk for the soup. Refrigerate it if the soup cooking will not begin promptly.
3. **Base:** Use 1/3 of the garlic cloves, prepared annatto oil or olive oil, red onion, red bell pepper, and ground cumin for this stage. In a pot with room for the measured stock, milk, vegetables and shrimp plus stirring headroom, heat the prepared oil over moderate heat, then add the garlic, onion, pepper and cumin. Cook, stirring, until the vegetables soften slightly, about 5 minutes. Divide all supplies proportionally among enough pots or complete batches if the load will not fit.
4. **Tomatoes:** Stir in plum tomatoes and cook about 2 minutes longer.
5. **Simmer:** Add the corn milk and 1/2 of the fresh or thawed frozen corn kernels, fish or chicken stock, and unripe green plantain. Bring to a boil, then reduce to a simmer for about 20 minutes, stirring occasionally, until the grated plantain has softened and the soup has thickened.
6. **Refine:** Blend only a portion of the soup for the chunky texture: about 2 cups in the original batch, adjusted with the batch amount. Use a blender whose manual explicitly permits this liquid at its actual temperature. Follow its hot-liquid fill, venting and speed limits, working in batches. Never put hot soup into a sealed blending cup; if the appliance does not allow it, cool the liquid to its permitted temperature before blending. Return all of this blended portion to the pot and bring the complete soup back to a simmer.
7. **Cook shrimp:** Lift the shrimp out of their refrigerated marinade with a utensil reserved for raw seafood, letting excess marinade drain back into the bowl. Transfer the shrimp to a clean covered bowl and keep them refrigerated. Add all the remaining marinade, including its minced garlic and scallions, to the soup and bring it to a rapid boil. Reduce to a gentle simmer, then add all the shrimp. Start checking after 2–3 minutes and continue until the shrimp are firm, pearly and opaque throughout; check thick centers with a thin probe for 145°F / 63°C. Do not taste before the marinade has boiled and the shrimp have cooked.
8. **Serve:** Use cilantro leaves, cayenne pepper, salt, and separately prepared tangy corn salsa (if using) for this finish. Stir the cilantro and cayenne into the soup, then add finishing salt only to taste. Serve in warmed bowls with the optional salsa separately.

## Variations and preparation

For the fuller pureed version, replace the measured chopped onion with one large red onion in the original batch; scale that onion count with the rest of the recipe. Puree all the measured corn with all the milk, then strain as in step 2; do not reserve whole kernels. Add all the cilantro and cayenne with the stock and plantain in step 5 instead of at the finish. After simmering, coarsely strain the soup, blend all the strained vegetables in permitted batches and return both the puree and every bit of strained broth to the pot. Use the same appliance controls as step 6, then simmer and finish the shrimp as in step 7. All other measured supplies, including the full milk, stock and oil, stay the same.

To prepare annatto oil separately, combine **1 cup corn oil and ¼ cup annatto seeds** for one original preparation batch. Bring to a simmer over low heat, remove from the heat, cover and cool completely, about 30 minutes, then strain into a jar. Measure only the listed chowder oil from this preparation; the remaining strained oil is separate from the soup. Store that remaining oil in a tightly sealed jar in the refrigerator for up to 2 months. The seed and input-oil amounts do not establish a measured finished oil yield. Adjust this preparation batch separately if more prepared oil is needed.
