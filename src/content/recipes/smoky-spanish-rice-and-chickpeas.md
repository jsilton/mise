---
miseId: cc442e15-d7ca-4092-bfc0-fbbb294c25e4
title: Spanish Rice and Chickpeas
difficulty: easy
cookingMethods:
  - fry
  - saute
  - simmer
  - boil
  - steam
occasions:
  - weeknight
  - meal-prep
flavorProfile:
  - savory
  - smoky
cuisines:
  - Spanish
role: base
vibe: nutritious
prepTime: About 10–15 min
cookTime: 'About 30–40 min, plus 6 min covered rest'
totalTime: 'About 45–60 min, longer for optional shrimp cooking'
servings: 4 portions
pairsWith:
  - spanish-rice-chorizo
  - steamed-mussels-chorizo
  - paella-valenciana
ingredients:
  - '--- Ingredients ---'
  - 2 tbsp Olive oil
  - '1 Medium yellow onion, finely chopped'
  - '3 Garlic cloves, minced'
  - 1 tbsp Smoked paprika
  - 1 tbsp Dried oregano
  - 1 cup Dry long-grain white rice
  - '1 can (19 oz) Diced tomatoes, include can liquid; do not drain'
  - '1 can (19 oz) Cooked canned chickpeas, rinsed and drained'
  - 1 1/2 cups Vegetable broth
  - '3/4 tsp Salt, for the salt and parsley variation, optional'
  - 'Fresh parsley, for topping, washed and chopped, optional'
  - 'Fresh spinach, amount as desired, washed and drained, optional'
  - 'Water, as needed for separately poaching optional shrimp, optional'
  - >-
    Raw shrimp, amount as desired, peeled and deveined; thaw in refrigerator if
    frozen, optional
seasons:
  - year-round
nutritionalDensity: light
leftovers: good
source: Adapted from Thekitchenmagpie.com
sourceUrl: 'https://www.thekitchenmagpie.com/smoky-spanish-rice-chickpeas/'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: dish
      name: Ingredients
      ingredients:
        - id: oil
          key: oil
          name: Olive oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: base
              share: 1
        - id: onion
          key: onion
          name: Medium yellow onion
          quantity:
            amount: 1
            unit: count
          uses:
            - step: base
              share: 1
          plural: Medium yellow onions
          preparation: finely chopped
        - id: garlic
          key: garlic
          name: Garlic clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: spice
              share: 1
          plural: Garlic cloves
          preparation: minced
        - id: paprika
          key: paprika
          name: Smoked paprika
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: spice
              share: 1
        - id: oregano
          key: oregano
          name: Dried oregano
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: spice
              share: 1
        - id: rice
          key: rice
          name: Dry long-grain white rice
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: rice
              share: 1
        - id: tomatoes
          key: tomatoes
          name: Diced tomatoes
          quantity:
            amount: 1
            unit: can
          uses:
            - step: liquid
              share: 1
          packageSize:
            amount: 19
            unit: oz
          preparation: include can liquid; do not drain
        - id: chickpeas
          key: chickpeas
          name: Cooked canned chickpeas
          quantity:
            amount: 1
            unit: can
          uses:
            - step: liquid
              share: 1
          packageSize:
            amount: 19
            unit: oz
          preparation: rinsed and drained
        - id: broth
          key: broth
          name: Vegetable broth
          quantity:
            amount: 1.5
            unit: cup
          uses:
            - step: liquid
              share: 1
        - id: salt
          key: salt
          name: Salt
          quantity:
            amount: 0.75
            unit: tsp
          uses:
            - step: liquid
              share: 1
          optional: true
          preparation: for the salt and parsley variation
        - id: parsley
          key: parsley
          name: Fresh parsley
          allowance: for topping
          uses:
            - step: finish
              share: 1
          optional: true
          preparation: washed and chopped
        - id: spinach
          key: spinach
          name: Fresh spinach
          allowance: amount as desired
          uses:
            - step: finish
              share: 1
          optional: true
          preparation: washed and drained
        - id: poaching-water
          key: poaching-water
          name: Water
          allowance: as needed for separately poaching optional shrimp
          uses:
            - step: shrimp
              share: 1
          optional: true
          role: cooking-water
        - id: shrimp
          key: shrimp
          name: Raw shrimp
          allowance: amount as desired
          uses:
            - step: shrimp
              share: 1
          optional: true
          preparation: peeled and deveined; thaw in refrigerator if frozen
  steps:
    - id: base
      title: Soften onion
      text: >-
        Use a large deep skillet with a close-fitting lid and room for rice
        expansion. Heat {{ingredients}} over medium heat, adding onion to the
        warm oil. Cook about 6–7 minutes until softened, allowing longer as
        needed. The full chosen oil amount is for this batch, not each skillet.
    - id: spice
      title: Add aromatics
      text: >-
        Stir in {{ingredients}} and cook about 30–45 seconds until fragrant,
        reducing heat if paprika or garlic starts to darken. Preserve a fragrant
        coating rather than burn it.
    - id: rice
      title: Coat rice
      text: >-
        Stir in {{ingredients}} and cook about 2–3 minutes, stirring
        continuously, until coated in the oil. This is not a finished rice or
        crust endpoint.
    - id: liquid
      title: Add full base liquids
      text: >-
        Add {{ingredients}}, using the salt only if making the salt and parsley
        variation, and stir to distribute. Bring to a simmer, cover and lower
        heat to maintain a gentle simmer.
    - id: cook
      title: Check rice before resting
      text: >-
        Cook covered, beginning checks after 20–22 minutes. Check several rice
        grains: their centers should be tender with no hard chalky core and free
        liquid should be absorbed. If centers are hard while liquid remains,
        continue gently covered and recheck. If the pan is dry while the centers
        remain hard, stop the timed finish and assess hydration before resting;
        extra cooking in a dry pan will not soften the centers.
    - id: rest
      title: Rest covered
      text: >-
        Once the rice is tender, remove from heat and let stand covered for 6
        minutes. Leave the lid on during this rest rather than open it to insert
        raw shrimp.
    - id: shrimp
      title: Cook optional shrimp separately
      text: >-
        For the optional topping, have {{ingredients}} ready. Cook the shrimp
        separately before adding to the finished rice: poach in gently simmering
        water until their flesh is firm, pearly and opaque throughout, checking
        several of the largest pieces. Raw shrimp must not be served after
        merely resting in warm rice. Drain and transfer using clean tools to a
        clean plate; keep raw-contact utensils away from finished rice.
    - id: finish
      title: Fluff and add optional greens
      text: >-
        Fluff gently and add {{ingredients}} if desired. Stir spinach through
        the hot rice until wilted; for an amount that cools the pan or stays
        firm, continue gentle covered heat until hot and wilted. Fold in fully
        cooked shrimp only if prepared by the separate step. Offer parsley at
        serving only if making the salt and parsley variation.
learning:
  focus: Check tomato rice centers before resting and cook optional shrimp separately
  outcome: >-
    Tender rice and chickpeas with fragrant smoked paprika and fully cooked
    optional additions
  techniques:
    - temperature
    - seasoning
  before:
    - >-
      The main retains one 19-oz can of chickpeas, one 19-oz can of tomatoes
      with its liquid and 1½ cups broth for 1 cup dry rice. Do not silently
      replace the measured broth with a rice-cooker fill line.
    - >-
      When scaling, keep enough skillet capacity for the rice and optional
      additions, or cook original-size batches. Depth, burner strength and
      evaporation change the clock.
    - >-
      Choose optional shrimp or spinach before starting so you have room for the
      addition and can plan its cooking. Keep raw shrimp cold until the separate
      cooking step.
  checkpoints:
    - step: 5
      cue: Several grains have tender centers before the covered rest.
      why: A fixed interval or surface color cannot establish the center condition.
  troubleshooting:
    - problem: Rice still has a chalky center at twenty-two minutes
      cause: >-
        Rice product, tomato liquid or pan evaporation differs from the nominal
        schedule
      fix: >-
        If liquid remains, continue a gentle covered simmer and recheck before
        resting. If the pan is dry and the centers are hard, assess hydration
        before continuing; the written finish time no longer applies.
  substitutions:
    - ingredient: Dried oregano
      alternative: Use the same listed amount of freeze-dried oregano.
      effect: >-
        Use the chosen oregano product at the aromatic stage; keep the listed
        amount and assess its fragrance as it cooks.
    - ingredient: Two-tablespoon version
      alternative: >-
        For the original batch, the salt and parsley variation uses 2–3 tbsp
        olive oil in place of the main 2 tbsp. Use the listed ¾ tsp salt, or
        adjust salt to taste, and finish with optional parsley. Freeze-dried
        oregano can replace the same listed amount of ordinary dried oregano.
      effect: >-
        Choose the variation before cooking and scale its selected amounts. The
        main version uses the listed olive oil and ordinary dried oregano and
        omits this salt and parsley option. Both versions keep the measured cans
        of tomatoes and chickpeas and all the measured broth.
  timing: >-
    Allow about 45–60 minutes for preparation, aromatic sautéing, coating rice,
    heating, covered cooking and the six-minute rest. Covered cooking is mostly
    elapsed time with grain checks; preparation, aromatics and finishing need
    attention. Optional shrimp adds work and elapsed time unless coordinated
    separately. Scaled loads change heat-up and evaporation.
  storage: >-
    Divide leftovers into shallow containers and refrigerate within 2 hours, or
    1 hour above 90°F /32°C, at 40°F /4°C or below. Use refrigerated leftovers
    within 3–4 days or freeze promptly. Reheat the portion served to 165°F /74°C
    throughout, stirring for even heating and checking several places. Do not
    leave a large pot out to cool overnight.
  sources:
    - title: USDA — cooling and reheating leftovers
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
    - title: FDA — shrimp cooking and cold handling
      url: >-
        https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely
    - title: The Kitchen Magpie — rice and chickpea base
      url: 'https://www.thekitchenmagpie.com/smoky-spanish-rice-chickpeas/'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

This Spanish-inspired skillet rice uses smoked paprika, oregano, tomatoes and chickpeas. Coating the dry rice in aromatic oil happens before the liquid goes in; it is not the browned bottom crust called socarrat. Keep the tomato liquid in the measured base, check grain centers before resting and cook an optional shrimp topping completely rather than rely on warm rice to cook it.

## Directions

1. **Soften onion:** Use a large deep skillet with a close-fitting lid and room for rice expansion. Heat Olive oil and Medium yellow onion over medium heat, adding onion to the warm oil. Cook about 6–7 minutes until softened, allowing longer as needed. The full chosen oil amount is for this batch, not each skillet.
2. **Add aromatics:** Stir in Garlic cloves, Smoked paprika, and Dried oregano and cook about 30–45 seconds until fragrant, reducing heat if paprika or garlic starts to darken. Preserve a fragrant coating rather than burn it.
3. **Coat rice:** Stir in Dry long-grain white rice and cook about 2–3 minutes, stirring continuously, until coated in the oil. This is not a finished rice or crust endpoint.
4. **Add full base liquids:** Add Diced tomatoes, Cooked canned chickpeas, Vegetable broth, and Salt (if using), using the salt only if making the salt and parsley variation, and stir to distribute. Bring to a simmer, cover and lower heat to maintain a gentle simmer.
5. **Check rice before resting:** Cook covered, beginning checks after 20–22 minutes. Check several rice grains: their centers should be tender with no hard chalky core and free liquid should be absorbed. If centers are hard while liquid remains, continue gently covered and recheck. If the pan is dry while the centers remain hard, stop the timed finish and assess hydration before resting; extra cooking in a dry pan will not soften the centers.
6. **Rest covered:** Once the rice is tender, remove from heat and let stand covered for 6 minutes. Leave the lid on during this rest rather than open it to insert raw shrimp.
7. **Cook optional shrimp separately:** For the optional topping, have Water (if using) and Raw shrimp (if using) ready. Cook the shrimp separately before adding to the finished rice: poach in gently simmering water until their flesh is firm, pearly and opaque throughout, checking several of the largest pieces. Raw shrimp must not be served after merely resting in warm rice. Drain and transfer using clean tools to a clean plate; keep raw-contact utensils away from finished rice.
8. **Fluff and add optional greens:** Fluff gently and add Fresh parsley (if using) and Fresh spinach (if using) if desired. Stir spinach through the hot rice until wilted; for an amount that cools the pan or stays firm, continue gentle covered heat until hot and wilted. Fold in fully cooked shrimp only if prepared by the separate step. Offer parsley at serving only if making the salt and parsley variation.
