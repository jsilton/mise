---
miseId: 22572a40-3480-4a7d-8e4e-2e4cfd2de8da
title: Quick Wonton Soup
difficulty: easy
cookingMethods:
  - simmer
  - boil
occasions:
  - weeknight
  - quick-lunch
  - comfort-food
flavorProfile:
  - savory
  - umami
cuisines:
  - Chinese
role: main
vibe: quick
prepTime: 10 min
cookTime: 'About 15 min, depending on wonton package'
totalTime: 'About 25 min, plus any longer package cooking'
servings: 4 portions
seasons:
  - year-round
  - winter
nutritionalDensity: moderate
leftovers: good
pairsWith:
  - smashed-cucumber-salad
  - steamed-broccoli
ingredients:
  - '--- Main recipe ---'
  - >-
    20 mini frozen wontons, check actual package cooking directions and whether
    filling is raw or fully cooked
  - 6 cups prepared low-sodium chicken broth
  - '1 1-inch piece of fresh ginger, smashed'
  - '1 garlic clove, smashed'
  - '4 baby bok choy, washed and halved lengthwise'
  - '1 1/2 cups shiitake mushrooms, cleaned and sliced; tough stems removed'
  - 1 tbsp soy sauce
  - 1 tsp toasted sesame oil
  - 'scallion greens, sliced, as desired for serving'
  - 'white pepper, a pinch or to taste'
  - >-
    water, as required only if the wonton package calls for a separate
    cooking-water pot, optional
source: Adapted from skinnytaste.com
sourceUrl: 'https://www.skinnytaste.com/wonton-soup/'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: main
      name: Main recipe
      ingredients:
        - id: wontons
          key: mini-frozen-wontons
          name: mini frozen wonton
          quantity:
            amount: 20
            unit: count
          uses:
            - step: wontons
              share: 1
          plural: mini frozen wontons
          preparation: >-
            check actual package cooking directions and whether filling is raw
            or fully cooked
        - id: broth
          key: low-sodium-chicken-broth
          name: prepared low-sodium chicken broth
          quantity:
            amount: 6
            unit: cup
          uses:
            - step: infuse
              share: 1
        - id: ginger
          key: ginger
          name: 1-inch piece of fresh ginger
          quantity:
            amount: 1
            unit: count
          uses:
            - step: infuse
              share: 1
          plural: 1-inch pieces of fresh ginger
          preparation: smashed
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 1
            unit: count
          uses:
            - step: infuse
              share: 1
          plural: garlic cloves
          preparation: smashed
        - id: bok
          key: baby-bok-choy
          name: baby bok choy
          quantity:
            amount: 4
            unit: count
          uses:
            - step: vegetables
              share: 1
          plural: baby bok choy
          preparation: washed and halved lengthwise
        - id: mushrooms
          key: shiitake
          name: shiitake mushrooms
          quantity:
            amount: 1 1/2
            unit: cup
          uses:
            - step: vegetables
              share: 1
          preparation: cleaned and sliced; tough stems removed
        - id: soy
          key: soy-sauce
          name: soy sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: finish
              share: 1
        - id: sesame
          key: toasted-sesame-oil
          name: toasted sesame oil
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: finish
              share: 1
        - id: scallions
          key: scallion-greens
          name: scallion greens
          allowance: 'sliced, as desired for serving'
          uses:
            - step: serve
              share: 1
          role: garnish
        - id: pepper
          key: white-pepper
          name: white pepper
          allowance: a pinch or to taste
          uses:
            - step: finish
              share: 1
        - id: package-water
          key: water
          name: water
          allowance: >-
            as required only if the wonton package calls for a separate
            cooking-water pot
          uses:
            - step: wontons
              share: 1
          optional: true
          role: cooking-water
  steps:
    - id: infuse
      title: Infuse
      text: >-
        Bring {{ingredients}} to a boil in a pot with room for the frozen
        wontons and vegetables plus boiling headroom. Reduce heat and simmer for
        about 5 minutes. Divide all supplies proportionally among additional
        pots or complete batches if needed.
    - id: vegetables
      title: Vegetables
      text: >-
        Add {{ingredients}}. Simmer about 3 minutes, until the mushrooms begin
        to soften, then continue as needed until the bok-choy stalks are tender.
        If the wonton package requires a longer cook, lift the tender vegetables
        into a clean bowl so they can be returned at the finish.
    - id: wontons
      title: Cook wontons
      text: >-
        Use {{ingredients}} for this stage. Cook the mini wontons from frozen
        according to their actual package water-cooking directions, including
        the specified boil/simmer, time and endpoint. If that method permits
        cooking in broth, use this pot; if it requires a separate water pot,
        follow that instruction and drain the cooked wontons before adding them
        to the soup. The original 2–3-minute simmer applies only to a suitable
        mini product, not every raw-filled wonton. Floating alone does not
        establish cooked filling. Raw ground-meat filling needs 160°F / 71°C;
        raw poultry filling needs 165°F / 74°C. Use the higher applicable target
        for mixed filling, and do not assume it is verified when the filling
        cannot be measured reliably.
    - id: finish
      title: Finish
      text: >-
        Return any reserved vegetables and add {{ingredients}}, retaining all
        the measured soy sauce and sesame oil. Heat the vegetables through and
        season with the unmeasured pepper allowance.
    - id: serve
      title: Serve
      text: >-
        Remove the large ginger and garlic pieces if desired. Divide the cooked
        wontons and broth among the portions, then garnish with {{ingredients}}.
        The original 20-wonton, four-portion batch plans five mini wontons per
        bowl; divide the actual scaled count rather than fixing five in every
        scaled batch.
learning:
  focus: Choose the frozen dumpling cook before timing the vegetables
  outcome: Cooked wonton filling and tender bok-choy stalks in ginger-garlic broth.
  techniques:
    - temperature
  before:
    - >-
      Use prepared, ready-to-use broth. Read the frozen mini-wonton label before
      heating the pot; its filling state and water-cooking instructions
      determine the method.
    - >-
      Wash and cut the vegetables before handling any raw-filled product. Choose
      enough pot capacity for the full measured broth and solids, splitting
      every supply proportionally for extra pots.
    - >-
      Four portions and five mini wontons per bowl describe the original
      20-wonton batch. Product size and appetite change portion size; homemade
      wontons need their own filling and cooking method.
  checkpoints:
    - step: 2
      cue: Mushrooms soften and a knife enters the bok-choy stalks readily.
      why: >-
        Halved stalks may need longer than the mushroom clock; reserve tender
        vegetables if the dumplings need a long cook.
    - step: 3
      cue: The actual label’s cook and applicable filling endpoint are completed.
      why: >-
        Skin flotation and a hot broth surface do not measure the filling
        center.
  troubleshooting:
    - problem: Vegetables become soft before the dumplings finish
      cause: >-
        The chosen frozen product needs longer cooking than the original
        mini-wonton estimate.
      fix: >-
        Lift tender vegetables out with a clean utensil and return them at the
        finish; complete the dumpling cook without shortening it.
  timing: >-
    The original prepared-broth/mini-wonton plan is about 25 minutes, including
    about 10 minutes preparation. Heating a large broth batch, longer package
    directions or separate water cooking adds time. The
    sliced-ginger/quartered-bok variation starts its vegetables earlier and may
    take longer.
  storage: >-
    Divide leftovers into shallow containers and refrigerate within 2 hours, or
    1 hour above 90°F / 32°C, at 40°F / 4°C or below; use within 3–4 days or
    freeze promptly. Reheat while stirring to 165°F / 74°C throughout, checking
    more than one place. USDA additionally recommends a rolling boil for
    reheated soup or sauce; reach it briefly rather than boiling for a prolonged
    time. The wonton skins and bok choy soften with storage and reheating; cook
    only the needed number of frozen wontons when practical.
  sources:
    - title: Gina Homolka — Wonton Soup
      url: 'https://www.skinnytaste.com/wonton-soup/'
    - title: FDA handling and meat categories
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: USDA leftovers
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Gina Homolka’s shortcut soup starts with frozen mini wontons and prepared broth. Smashed ginger and garlic flavor the broth while the vegetables cook. Choose the actual wonton package method first, then coordinate the vegetables so their stalks are tender without making them wait through a longer dumpling cook.

## Directions

1. **Infuse:** Bring prepared low-sodium chicken broth, 1-inch piece of fresh ginger, and garlic clove to a boil in a pot with room for the frozen wontons and vegetables plus boiling headroom. Reduce heat and simmer for about 5 minutes. Divide all supplies proportionally among additional pots or complete batches if needed.
2. **Vegetables:** Add baby bok choy and shiitake mushrooms. Simmer about 3 minutes, until the mushrooms begin to soften, then continue as needed until the bok-choy stalks are tender. If the wonton package requires a longer cook, lift the tender vegetables into a clean bowl so they can be returned at the finish.
3. **Cook wontons:** Use mini frozen wontons and water (if using) for this stage. Cook the mini wontons from frozen according to their actual package water-cooking directions, including the specified boil/simmer, time and endpoint. If that method permits cooking in broth, use this pot; if it requires a separate water pot, follow that instruction and drain the cooked wontons before adding them to the soup. The original 2–3-minute simmer applies only to a suitable mini product, not every raw-filled wonton. Floating alone does not establish cooked filling. Raw ground-meat filling needs 160°F / 71°C; raw poultry filling needs 165°F / 74°C. Use the higher applicable target for mixed filling, and do not assume it is verified when the filling cannot be measured reliably.
4. **Finish:** Return any reserved vegetables and add soy sauce, toasted sesame oil, and white pepper, retaining all the measured soy sauce and sesame oil. Heat the vegetables through and season with the unmeasured pepper allowance.
5. **Serve:** Remove the large ginger and garlic pieces if desired. Divide the cooked wontons and broth among the portions, then garnish with scallion greens. The original 20-wonton, four-portion batch plans five mini wontons per bowl; divide the actual scaled count rather than fixing five in every scaled batch.

## Aromatic and vegetable variation

For the sliced-ginger version, thinly slice and then smash all the listed ginger, mince all the garlic, and quarter the bok choy instead of halving it. Cover the broth with the ginger and garlic for about 5 minutes; add the bok choy and cook about 5 minutes before adding the mushrooms and frozen wontons. Follow the actual wonton package as in step 3, then finish with the full measured soy sauce and sesame oil and the scallion greens; omit the main white-pepper allowance for this version. All other quantities stay the same. Its original 2–3-minute wonton finish is a product-dependent first check, not permission to undercook a raw filling.
