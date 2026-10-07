---
title: Gyudon (Japanese Beef and Rice Bowls)
origin: Japan
difficulty: easy
cookingMethods:
  - simmer
  - saute
dietary:
  - gluten-free-option
occasions:
  - weeknight
flavorProfile:
  - savory
  - sweet
  - umami
cuisines:
  - Japanese
role: main
vibe: quick
prepTime: 10 min
cookTime: 30 min
totalTime: 40 min
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: good
equipment:
  - large-skillet
  - saucepan
  - thin-tip-thermometer
pairsWith:
  - steamed-white-rice
ingredients:
  - '--- Beef and onions ---'
  - 2 tbsp neutral oil
  - '2 medium onions, thinly sliced'
  - '1 lb fatty chuck or ribeye beef, very thinly sliced across the grain'
  - 2 tsp sugar
  - 2 tbsp mirin
  - 2 tbsp light soy sauce
  - '1 cup prepared dashi, beef stock, or chicken stock'
  - '--- For serving ---'
  - '4 cups cooked short-grain white rice, warm; prepared separately'
  - '4 eggs, ordinary eggs fully cooked, or pasteurized shell eggs for a soft yolk, optional'
  - 'water, as needed for poaching the optional eggs, optional'
  - '1 scallion, thinly sliced'
  - '2 tsp toasted sesame seeds, optional'
  - 'shichimi togarashi, to taste, optional'
description: 'Thin beef and softened onions in a sweet soy-mirin broth, served over warm rice.'
advancePrep:
  - components-ahead
source: 'Adapted from Sarah Leung, The Woks of Life'
sourceUrl: 'https://thewoksoflife.com/gyudon-recipe-beef-rice/'
learning:
  focus: Soften the onions before reducing a measured soy-mirin broth
  outcome: Tender thin beef and sweet onions with enough light sauce to moisten the rice.
  techniques:
    - temperature
    - seasoning
  before:
    - >-
      Have the listed cooked rice ready and warm. Making rice from raw is a separate dependency; the
      linked short-grain rice method takes about 65 minutes.
    - >-
      Use actual mirin. Dashi, beef stock, and chicken stock give different flavors; measure the
      prepared broth rather than assuming one stock recipe yields exactly the required amount.
  checkpoints:
    - step: 1
      cue: Onions bend easily and have soft centers.
      why: The onion stage precedes the short reduction with thin beef.
    - step: 3
      cue: A thin sauce remains around the cooked beef; the pan is not dry.
      why: The remaining broth seasons and moistens the rice.
  troubleshooting:
    - problem: Broth disappears before the onions soften
      cause: The pan was too hot or the onions were insufficiently softened first.
      fix: >-
        Lower the heat and add a small splash of hot water to keep the pan moist while the onions
        finish. Check the beef temperature and taste the broth before serving.
  substitutions:
    - ingredient: Light soy sauce
      alternative: Gluten-free tamari
      effect: Check mirin and broth labels too; replacing soy alone does not establish a gluten-free dish.
  storage: >-
    Refrigerate in shallow containers within 2 hours (1 hour above 90°F / 32°C), at 40°F / 4°C or
    below. Use within 3 days, including any earlier storage of cooked components. Reheat leftovers
    to 165°F / 74°C throughout. Keep rice and beef in separate shallow containers if practical.
  timing: >-
    About 40 minutes with cooked rice ready: 10 minutes preparation and about 30 minutes for the
    onion, beef, reduction, and rest stages. Prepare the optional eggs during the simmer. Larger
    batches need a wider pan or separate pans and can take longer.
  sources:
    - title: Sarah Leung — Gyudon
      url: 'https://thewoksoflife.com/gyudon-recipe-beef-rice/'
    - title: FoodSafety.gov — Safe minimum internal temperatures
      url: 'https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures'
    - title: FDA — Egg safety
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety'
    - title: 'FoodSafety.gov — Clean, separate, cook, chill'
      url: 'https://www.foodsafety.gov/keep-food-safe/4-steps-to-food-safety'
    - title: USDA — Leftovers and food safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-06'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: beef
      name: Beef and onions
      ingredients:
        - id: oil
          key: neutral-oil
          name: neutral oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: onions
              share: 1
        - id: onions
          key: yellow-onion
          name: medium onion
          quantity:
            amount: 2
            unit: count
          uses:
            - step: onions
              share: 1
          plural: medium onions
          preparation: thinly sliced
        - id: beef
          key: beef-ribeye
          name: fatty chuck or ribeye beef
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: beef
              share: 1
          preparation: very thinly sliced across the grain
        - id: sugar
          key: granulated-sugar
          name: sugar
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: beef
              share: 1
        - id: mirin
          key: mirin
          name: mirin
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: simmer
              share: 1
        - id: soy
          key: light-soy-sauce
          name: light soy sauce
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: simmer
              share: 1
        - id: broth
          key: dashi
          name: 'prepared dashi, beef stock, or chicken stock'
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: simmer
              share: 1
    - id: serve
      name: For serving
      ingredients:
        - id: rice
          key: cooked-short-grain-rice
          name: cooked short-grain white rice
          quantity:
            amount: 4
            unit: cup
          uses:
            - step: serve
              share: 1
          preparation: warm; prepared separately
        - id: eggs
          key: egg
          name: egg
          quantity:
            amount: 4
            unit: count
          uses:
            - step: eggs
              share: 1
          plural: eggs
          optional: true
          preparation: 'ordinary eggs fully cooked, or pasteurized shell eggs for a soft yolk'
        - id: egg-water
          key: water
          name: water
          allowance: as needed for poaching the optional eggs
          uses:
            - step: eggs
              share: 1
          role: cooking-water
          optional: true
        - id: scallion
          key: scallion
          name: scallion
          quantity:
            amount: 1
            unit: count
          uses:
            - step: serve
              share: 1
          plural: scallions
          preparation: thinly sliced
        - id: sesame
          key: toasted-sesame-seed
          name: toasted sesame seeds
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: serve
              share: 1
          optional: true
          role: garnish
        - id: shichimi
          key: shichimi-togarashi
          name: shichimi togarashi
          allowance: to taste
          uses:
            - step: serve
              share: 1
          optional: true
          role: garnish
  steps:
    - id: onions
      title: Soften the onions
      text: >-
        Heat the {{ingredients}} in a large skillet over medium-high heat, stirring frequently,
        until the onions are soft and beginning to color, about 10 minutes. Start with the oil, then
        add the onions; lower the heat if their edges darken before they soften.
    - id: beef
      title: Brown the beef
      text: >-
        Add the {{ingredients}}. Separate the thin slices and stir until the meat loses its raw
        surface color. This is an intermediate stage; keep cooking in the broth.
    - id: simmer
      title: Reduce the broth
      text: >-
        Add the {{ingredients}} and bring to a gentle simmer. Cook about 10–15 minutes, stirring
        occasionally, until the onions are tender and a thin, lightly reduced sauce remains. Avoid
        boiling it dry. Check a thicker beef slice with a thin-tip thermometer inserted from the
        side: at least 145°F / 63°C. Remove the skillet from the heat and allow at least 3 minutes
        before serving.
    - id: eggs
      title: Prepare the optional eggs
      text: >-
        If using the {{ingredients}}, poach in a separate saucepan while the beef simmers. Cook
        ordinary eggs until both white and yolk are firm. A soft-yolk option requires shell eggs
        labeled pasteurized. Transfer with a clean slotted spoon; warm rice is not a reliable
        egg-cooking method.
    - id: serve
      title: Fill the bowls
      text: >-
        Divide the {{ingredients}} among the bowls, using the sesame and shichimi only if desired.
        Spoon the beef, onions, and remaining broth over the rice, then add the prepared eggs if
        using. Serve promptly.
miseId: 066540c6-77bf-42eb-aa44-7650bd4c65a7
---

## Chef's Note

Thinly sliced fatty beef and well-softened onions carry this bowl. The sauce is sweetened with mirin and a little sugar, then gently reduced so there is broth to spoon over the rice.

## Directions

1. **Soften the onions:** Heat the neutral oil and medium onions in a large skillet over medium-high heat, stirring frequently, until the onions are soft and beginning to color, about 10 minutes. Start with the oil, then add the onions; lower the heat if their edges darken before they soften.
2. **Brown the beef:** Add the fatty chuck or ribeye beef and sugar. Separate the thin slices and stir until the meat loses its raw surface color. This is an intermediate stage; keep cooking in the broth.
3. **Reduce the broth:** Add the mirin, light soy sauce, and prepared dashi, beef stock, or chicken stock and bring to a gentle simmer. Cook about 10–15 minutes, stirring occasionally, until the onions are tender and a thin, lightly reduced sauce remains. Avoid boiling it dry. Check a thicker beef slice with a thin-tip thermometer inserted from the side: at least 145°F / 63°C. Remove the skillet from the heat and allow at least 3 minutes before serving.
4. **Prepare the optional eggs:** If using the eggs (if using) and water (if using), poach in a separate saucepan while the beef simmers. Cook ordinary eggs until both white and yolk are firm. A soft-yolk option requires shell eggs labeled pasteurized. Transfer with a clean slotted spoon; warm rice is not a reliable egg-cooking method.
5. **Fill the bowls:** Divide the cooked short-grain white rice, scallion, toasted sesame seeds (if using), and shichimi togarashi (if using) among the bowls, using the sesame and shichimi only if desired. Spoon the beef, onions, and remaining broth over the rice, then add the prepared eggs if using. Serve promptly.

## Variations and serving notes

**Aromatic variation:** For the original four-portion batch, add 2 minced garlic cloves and 1 tbsp grated fresh ginger during the last minute of the onion stage. Add 2 tbsp sake or dry sherry with the mirin, soy, and broth; simmer to the same thin-sauce cue. You may use 4 sliced scallions instead of 1 for a fuller garnish. All other main-recipe quantities and the egg precautions stay the same. Scale these additions in proportion to the main formula.

**Rice dependency:** Measure 4 cups prepared, warm rice for the original batch. [Plain short-grain rice](/mise/recipes/steamed-white-rice/) has its own soak, cooking, and rest time; its four-side-portion label is not a promise of this measured cooked volume.
