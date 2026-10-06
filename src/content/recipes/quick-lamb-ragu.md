---
miseId: 126f8d98-efc8-411f-869b-e83780dd9764
title: Lamb Ragù
difficulty: intermediate
cookingMethods:
  - fry
  - saute
  - simmer
  - boil
  - braise
occasions:
  - comfort-food
  - weekend-project
  - entertaining
flavorProfile:
  - savory
  - acidic
  - umami
  - rich
  - herbaceous
cuisines:
  - Italian
role: main
vibe: nutritious
prepTime: 10 min
cookTime: 45–55 min
totalTime: 55–65 min
servings: 4 portions
seasons:
  - fall
  - winter
  - year-round
nutritionalDensity: hearty
leftovers: excellent
pairsWith:
  - garlic-bread
  - everyday-arugula-salad
ingredients:
  - '--- Ragù ---'
  - 2 tbsp extra-virgin olive oil
  - '1 medium yellow onion, finely chopped'
  - '4 garlic cloves, minced'
  - 1/4 tsp red pepper flakes
  - 2 anchovy fillets
  - 2 tbsp tomato paste
  - 1 lb ground lamb
  - 1 can (28 oz) crushed tomatoes
  - 1/2 cup water
  - 'salt, to taste for the sauce'
  - 'black pepper, to taste for the sauce'
  - 2 tbsp balsamic vinegar
  - 'fresh oregano or marjoram, for finishing, leaves picked'
  - '--- Pasta and Serving ---'
  - '12 oz dry pasta, penne or shells'
  - 'water, enough to boil the pasta in a suitable pot'
  - 'Parmesan or Pecorino, for grating over the finished dish'
  - 'extra-virgin olive oil, for drizzling at serving'
source: Adapted from cooking.nytimes.com
sourceUrl: 'https://cooking.nytimes.com/recipes/1020022-quick-lamb-ragu?smid=ck-recipe-iOS-share'
rating: 5
equipment:
  - heavy-pot
  - pasta-pot
  - food-thermometer
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: ragu
      name: Ragù
      ingredients:
        - id: oil
          key: oil
          name: extra-virgin olive oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: base
              share: 1
        - id: onion
          key: onion
          name: medium yellow onion
          quantity:
            amount: 1
            unit: count
          plural: medium yellow onions
          preparation: finely chopped
          uses:
            - step: base
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 4
            unit: count
          plural: garlic cloves
          preparation: minced
          uses:
            - step: garlic
              share: 1
        - id: flakes
          key: flakes
          name: red pepper flakes
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: anchovy
              share: 1
        - id: anchovy
          key: anchovy
          name: anchovy fillet
          quantity:
            amount: 2
            unit: count
          plural: anchovy fillets
          uses:
            - step: anchovy
              share: 1
        - id: paste
          key: paste
          name: tomato paste
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: paste
              share: 1
        - id: lamb
          key: lamb
          name: ground lamb
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: lamb
              share: 1
        - id: tomatoes
          key: tomatoes
          name: crushed tomatoes
          quantity:
            amount: 1
            unit: can
          packageSize:
            amount: 28
            unit: oz
          uses:
            - step: simmer
              share: 1
        - id: water
          key: water
          name: water
          quantity:
            amount: 1/2
            unit: cup
          role: cooking-water
          uses:
            - step: simmer
              share: 1
        - id: salt
          key: salt
          name: salt
          allowance: to taste for the sauce
          uses:
            - step: simmer
              share: 1
        - id: pepper
          key: pepper
          name: black pepper
          allowance: to taste for the sauce
          uses:
            - step: simmer
              share: 1
        - id: balsamic
          key: balsamic
          name: balsamic vinegar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: finish
              share: 1
        - id: herbs
          key: herbs
          name: fresh oregano or marjoram
          allowance: for finishing
          preparation: leaves picked
          uses:
            - step: finish
              share: 1
    - id: pasta
      name: Pasta and Serving
      ingredients:
        - id: pasta
          key: pasta
          name: dry pasta
          quantity:
            amount: 12
            unit: oz
          preparation: penne or shells
          uses:
            - step: pasta
              share: 1
        - id: pasta-water
          key: pasta-water
          name: water
          allowance: enough to boil the pasta in a suitable pot
          role: cooking-water
          uses:
            - step: pasta
              share: 1
        - id: cheese
          key: cheese
          name: Parmesan or Pecorino
          allowance: for grating over the finished dish
          role: garnish
          uses:
            - step: serve
              share: 1
        - id: drizzle-oil
          key: drizzle-oil
          name: extra-virgin olive oil
          allowance: for drizzling at serving
          role: garnish
          uses:
            - step: serve
              share: 1
  steps:
    - id: base
      title: Onion Base
      text: >-
        Heat {{ingredients}} in a large heavy pot over medium heat, coating the onion with the full
        measured oil. Cook the onion for 5–8 minutes until softened and golden. Choose enough pot
        capacity for stirring the full lamb and tomato load without spilling; a larger batch may
        need separate pots with the formula divided proportionally.
    - id: garlic
      title: Garlic
      text: 'Add {{ingredients}} and cook for 30–45 seconds until fragrant.'
    - id: anchovy
      title: Anchovy and Chile
      text: >-
        Stir in {{ingredients}} and cook for about 2 minutes until the anchovy breaks down into the
        oil. Keep the heat low enough that the garlic does not burn.
    - id: paste
      title: Tomato Paste
      text: >-
        Stir in {{ingredients}} and cook for about 3 minutes, stirring, until it darkens and smells
        roasted rather than scorched.
    - id: lamb
      title: Brown the Lamb
      text: >-
        Add {{ingredients}}. Increase the heat to medium-high and break it up while cooking, about 8
        minutes for the original batch, until it browns and sizzles in its fat. Retain all the
        rendered fat.
    - id: simmer
      title: Simmer
      text: >-
        Stir in {{ingredients}}, scraping up the browned bits. Bring to a boil, reduce to a gentle
        simmer and cook 25–30 minutes, stirring as needed, until thick and meaty. Check that the
        ground lamb has reached at least 160°F; browned color alone is not the safety endpoint.
        Taste the fully cooked sauce before adjusting its seasoning.
    - id: pasta
      title: Cook the Pasta
      text: >-
        While the sauce simmers, use {{ingredients}} and follow the pasta package’s cooking
        instructions, stopping while it still has a firm center. Drain and keep it ready to finish
        in the sauce; the listed pasta amount is dry weight.
    - id: finish
      title: Finish
      text: >-
        Stir {{ingredients}} into the sauce. Toss with all the hot pasta until it is coated and
        cooked to the firmness you want.
    - id: serve
      title: Serve
      text: >-
        Finish with {{ingredients}}: grate the cheese over the portions and drizzle with the extra
        oil. This oil allowance is separate from the full measured oil already used for the onion
        base.
learning:
  focus: Building a rich lamb-and-tomato sauce through successive pan stages.
  outcome: >-
    The lamb is cooked through in a thick, savory tomato sauce that coats the pasta; cheese, herbs
    and the balsamic or no-balsamic route give distinct finishes.
  techniques:
    - browning
    - seasoning
    - starch
    - temperature
  before:
    - >-
      Have the full measured base oil, tomato paste, lamb and fixed 28 oz tomato cans ready, plus
      the separately measured sauce water. Salt, pepper, serving cheese, fresh herbs and drizzle oil
      are genuine unmeasured allowances.
    - >-
      Use enough heavy-pot and pasta-pot capacity for the batch. More sauce may need additional pots
      and longer thickening; pasta package size and heat settings stay fixed when ingredient amounts
      scale.
    - >-
      Choose the dry-pasta/balsamic route below or the separate cooked-pasta route. Twelve ounces
      cooked pasta is not an equivalent to twelve ounces dry pasta.
  checkpoints:
    - step: 2
      cue: Garlic smells fragrant after 30–45 seconds and is not blackened.
      why: Adding garlic after the onion softens keeps its time in the hot oil brief.
    - step: 4
      cue: Tomato paste darkens while remaining free of burnt specks.
      why: This stage builds roasted tomato flavor before the meat and liquid enter.
    - step: 6
      cue: The sauce is thick and the ground lamb has reached at least 160°F.
      why: >-
        Reduction and browned meat are sensory cues; the ground-meat temperature is the separate
        safety check.
  troubleshooting:
    - problem: The lamb steams and the sauce takes longer to thicken.
      cause: The batch is crowded or the pot has too little evaporating surface.
      fix: >-
        Use more suitable pots or allow longer gentle simmering, keeping all ingredients and fat. Do
        not drain away the lamb fat as a shortcut.
    - problem: The sauce tastes bitter after the base stage.
      cause: Garlic or tomato paste burnt against the pot.
      fix: >-
        Avoid scraping burnt material into the sauce. Severe scorching requires restarting that
        base; more vinegar is not a repair.
  substitutions:
    - ingredient: Dry-pasta and balsamic route
      alternative: Cooked-pasta route with no balsamic
      effect: >-
        Use the same lamb, onion, garlic, tomato paste, fixed 28 oz tomatoes and full measured 2
        tbsp base oil for the original batch. In place of the measured half-cup water, swirl water
        in the tomato can filled halfway; for a scaled batch use the corresponding proportional
        share of that half-can, without treating can weight as fluid volume. Use a pinch of chile
        flakes if wanted, and omit the anchovies if wanted. Keep the short garlic stage; then stir
        in whichever flakes and anchovies you are using and cook as in step 3 before continuing the
        same paste, browning and simmer sequence; season the onion base, lamb and sauce with salt
        and pepper to taste. Serve with 12 oz already cooked pasta for the original batch, scaled
        separately from the dry-pasta amount, and omit the balsamic. Use a small handful of
        marjoram, oregano or thyme leaves if wanted, plus grated cheese and extra oil for drizzling.
        This changes the sauce-to-pasta ratio and leaves the sauce less acidic; portions depend on
        the chosen pasta state and amount.
    - ingredient: Parmesan
      alternative: Pecorino
      effect: 'Both are unmeasured serving cheeses; Pecorino gives a different salty, sheep-milk finish.'
  timing: >-
    Allow about 55–65 minutes for the original batch: 10 minutes preparation and about 45–55 minutes
    of heat and finishing, based on the written onion, garlic, anchovy, paste, lamb and 25–30-minute
    simmer stages. Boil the dry pasta in parallel using its package clock. Extra pots, larger
    batches and sauce reduction can extend this estimate; keep the onion, paste and browning work in
    the plan before the simmer begins.
  storage: >-
    Refrigerate sauce and pasta promptly in shallow containers at 40°F or below, within 2 hours, or
    1 hour above 90°F. Use cooked leftovers within 3–4 days. Keep cheese and fresh herbs separate if
    saving portions. Reheat evenly to 165°F; FDA also recommends bringing reheated sauces to a boil.
    Stir and avoid prolonged boiling that concentrates or scorches this thick sauce.
  sources:
    - title: 'Quick Lamb Ragù, NYT Cooking'
      url: 'https://cooking.nytimes.com/recipes/1020022-quick-lamb-ragu?smid=ck-recipe-iOS-share'
    - title: 'FDA: Safe Food Handling'
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: 'FoodSafety.gov: Safe Minimum Internal Temperatures'
      url: 'https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures'
    - title: 'FoodSafety.gov: Cold Food Storage Chart'
      url: 'https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts'
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

This Italian-style lamb ragù builds a savory base with onion, garlic, tomato paste and anchovy before the meat and tomatoes simmer together. Keep the lamb’s rendered fat in the sauce and let the tomato paste deepen without burning. The balsamic finish suits the current version; cheese and fresh herbs complete either pasta route.

## Directions

1. **Onion Base:** Heat extra-virgin olive oil and medium yellow onion in a large heavy pot over medium heat, coating the onion with the full measured oil. Cook the onion for 5–8 minutes until softened and golden. Choose enough pot capacity for stirring the full lamb and tomato load without spilling; a larger batch may need separate pots with the formula divided proportionally.
2. **Garlic:** Add garlic cloves and cook for 30–45 seconds until fragrant.
3. **Anchovy and Chile:** Stir in red pepper flakes and anchovy fillets and cook for about 2 minutes until the anchovy breaks down into the oil. Keep the heat low enough that the garlic does not burn.
4. **Tomato Paste:** Stir in tomato paste and cook for about 3 minutes, stirring, until it darkens and smells roasted rather than scorched.
5. **Brown the Lamb:** Add ground lamb. Increase the heat to medium-high and break it up while cooking, about 8 minutes for the original batch, until it browns and sizzles in its fat. Retain all the rendered fat.
6. **Simmer:** Stir in crushed tomatoes, water, salt, and black pepper, scraping up the browned bits. Bring to a boil, reduce to a gentle simmer and cook 25–30 minutes, stirring as needed, until thick and meaty. Check that the ground lamb has reached at least 160°F; browned color alone is not the safety endpoint. Taste the fully cooked sauce before adjusting its seasoning.
7. **Cook the Pasta:** While the sauce simmers, use dry pasta and water and follow the pasta package’s cooking instructions, stopping while it still has a firm center. Drain and keep it ready to finish in the sauce; the listed pasta amount is dry weight.
8. **Finish:** Stir balsamic vinegar and fresh oregano or marjoram into the sauce. Toss with all the hot pasta until it is coated and cooked to the firmness you want.
9. **Serve:** Finish with Parmesan or Pecorino and extra-virgin olive oil: grate the cheese over the portions and drizzle with the extra oil. This oil allowance is separate from the full measured oil already used for the onion base.
