---
miseId: 56e364c9-dc5e-489c-86b7-fd4dd904c8cc
title: Yaki Udon
difficulty: easy
cookingMethods:
  - saute
  - boil
  - steam
occasions:
  - weeknight
  - quick-lunch
flavorProfile:
  - spicy
  - sweet
  - savory
  - acidic
  - umami
cuisines:
  - Japanese
role: main
vibe: comfort
prepTime: About 15–25 min preparation
cookTime: 'About 15–25 min cooking, longer if batches are needed'
totalTime: About 30–50 min
servings: 4 portions
pairsWith:
  - miso-soup
  - dashi-japanese-sea-stock
  - steamed-edamame
ingredients:
  - '--- Dark-soy sauce ---'
  - 2 tbsp Dark soy sauce
  - 2 tbsp Low-sodium soy sauce
  - 2 tbsp Oyster sauce
  - 1 tbsp Mirin
  - 1 tbsp Rice vinegar
  - 1 tbsp Sugar
  - '--- Noodles ---'
  - 1 lb Frozen udon noodles
  - 'Water, enough to cook noodles according to package instructions'
  - >-
    Toasted sesame oil, a drizzle to coat drained noodles; about 1 tsp for the
    original batch
  - '--- Protein and vegetables ---'
  - 1/2 lb Ground pork or thinly sliced whole-muscle beef
  - 2 tbsp Neutral vegetable oil
  - '1 Small yellow onion, sliced'
  - '1 cup Mushrooms, sliced'
  - '1 Carrot, thin matchsticks'
  - '1 Small bunch of bok choy, sliced, stems and leaves separated'
  - '3 Garlic cloves, chopped'
  - '3 Scallions, cut into roughly 2-inch pieces'
  - '--- Optional finish ---'
  - 'Chopped scallion greens, for serving, if desired, optional'
  - 'Red pepper flakes, to taste, if desired, optional'
  - 'Sesame seeds or furikake, for serving, if desired, optional'
  - 'Chili oil, for serving, if desired, optional'
origin: Japan
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from cooking.nytimes.com
sourceUrl: 'https://cooking.nytimes.com/recipes/1024643-yaki-udon?smid=ck-recipe-iOS-share'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: sauce
      name: Dark-soy sauce
      ingredients:
        - id: dark-soy
          key: dark-soy
          name: Dark soy sauce
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: soy
          key: soy
          name: Low-sodium soy sauce
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: oyster
          key: oyster
          name: Oyster sauce
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: mirin
          key: mirin
          name: Mirin
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: vinegar
          key: vinegar
          name: Rice vinegar
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: sugar
          key: sugar
          name: Sugar
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
    - id: noodles
      name: Noodles
      ingredients:
        - id: noodles
          key: noodles
          name: Frozen udon noodles
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: noodles
              share: 1
        - id: water
          key: water
          name: Water
          allowance: enough to cook noodles according to package instructions
          uses:
            - step: noodles
              share: 1
          role: cooking-water
        - id: sesame
          key: sesame
          name: Toasted sesame oil
          allowance: >-
            a drizzle to coat drained noodles; about 1 tsp for the original
            batch
          uses:
            - step: noodles
              share: 1
    - id: pan
      name: Protein and vegetables
      ingredients:
        - id: meat
          key: meat
          name: Ground pork or thinly sliced whole-muscle beef
          quantity:
            amount: 0.5
            unit: lb
          uses:
            - step: meat
              share: 1
        - id: oil
          key: oil
          name: Neutral vegetable oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: meat
              share: 0.5
            - step: vegetables
              share: 0.5
        - id: onion
          key: onion
          name: Small yellow onion
          quantity:
            amount: 1
            unit: count
          uses:
            - step: vegetables
              share: 1
          plural: Small yellow onions
          preparation: sliced
        - id: mushrooms
          key: mushrooms
          name: Mushrooms
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: vegetables
              share: 1
          preparation: sliced
        - id: carrot
          key: carrot
          name: Carrot
          quantity:
            amount: 1
            unit: count
          uses:
            - step: vegetables
              share: 1
          plural: Carrots
          preparation: thin matchsticks
        - id: bok
          key: bok
          name: Small bunch of bok choy
          quantity:
            amount: 1
            unit: count
          uses:
            - step: vegetables
              share: 1
          plural: Small bunches of bok choy
          preparation: 'sliced, stems and leaves separated'
        - id: garlic
          key: garlic
          name: Garlic clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: vegetables
              share: 1
          plural: Garlic cloves
          preparation: chopped
        - id: scallions
          key: scallions
          name: Scallion
          quantity:
            amount: 3
            unit: count
          uses:
            - step: vegetables
              share: 1
          plural: Scallions
          preparation: cut into roughly 2-inch pieces
    - id: finish
      name: Optional finish
      ingredients:
        - id: extra-scallions
          key: extra-scallions
          name: Chopped scallion greens
          allowance: 'for serving, if desired'
          uses:
            - step: serve
              share: 1
          optional: true
          role: garnish
        - id: red-pepper
          key: red-pepper
          name: Red pepper flakes
          allowance: 'to taste, if desired'
          uses:
            - step: serve
              share: 1
          optional: true
          role: garnish
        - id: sesame-seeds
          key: sesame-seeds
          name: Sesame seeds or furikake
          allowance: 'for serving, if desired'
          uses:
            - step: serve
              share: 1
          optional: true
          role: garnish
        - id: chili-oil
          key: chili-oil
          name: Chili oil
          allowance: 'for serving, if desired'
          uses:
            - step: serve
              share: 1
          optional: true
          role: garnish
  steps:
    - id: sauce
      title: Mix one sauce route
      text: >-
        Whisk {{ingredients}} together until the sugar dissolves. If choosing
        the lighter alternative, mix that complete sauce instead and omit these
        base sauce amounts.
    - id: noodles
      title: Prepare the frozen noodles
      text: >-
        Use {{ingredients}}. Cook frozen noodles according to the package,
        separating gently; separation alone is not sufficient if the product
        calls for further cooking. Drain, rinse briefly under cold water and
        drain well, then toss with a light drizzle of sesame oil.
    - id: meat
      title: Cook the protein
      text: >-
        Use {{ingredients}}. Heat this step’s neutral-oil allocation over
        medium-high heat. For ground pork, break into small pieces and cook
        through to 160°F, starting checks around 5 minutes. For thinly sliced
        whole-muscle beef, cook to 145°F and rest at least 3 minutes on a clean
        plate while the vegetables cook. Browning is a useful texture cue, not
        the safety endpoint. Keep raw-contact utensils away from finished food.
    - id: vegetables
      title: Cook vegetables and combine
      text: >-
        Have {{ingredients}} ready for the dark-soy sauce route; omit onion,
        garlic and cooking scallions if choosing the lighter variation. For the
        dark-soy sauce route, add the remaining neutral-oil allocation. Cook
        onion and mushrooms over medium-high heat until beginning to soften,
        about 2–3 minutes. Add carrot, bok choy stems and garlic; stir until
        stems are crisp-tender, starting checks after about 3 minutes. Add the
        scallion pieces. For the lighter variation, cook mushrooms and carrot in
        the remaining neutral-oil allocation, then add bok choy stems and cook
        until crisp-tender. In either route, add cooked meat, drained noodles
        and all the chosen sauce. Reduce heat if the sauce catches and fold
        until evenly coated and hot. Add reserved bok choy leaves at the end and
        cook just until wilted.
    - id: serve
      title: Finish
      text: 'Divide among bowls and offer {{ingredients}}.'
learning:
  focus: >-
    Prepare the sauce before heating the pan and cook the frozen noodles to
    their package instructions
  outcome: >-
    Chewy udon and staged vegetables with fully cooked protein and one chosen
    sauce.
  techniques:
    - stir-frying
    - temperature
  before:
    - >-
      The original batch makes four planning portions. Use a large wok or
      skillet with room to turn the noodles; scaling may require more pans or
      batches rather than proportionally longer high-heat cooking.
    - >-
      The base sauce uses both dark soy and low-sodium soy. Choose either this
      sauce or the complete lighter variation below, not both.
    - >-
      Frozen udon is the listed noodle state. Shelf-stable or dried products
      require their own package preparation, not the frozen noodle clock. Linked
      Dashi remains a separate pairing.
  checkpoints:
    - step: 3
      cue: >-
        Ground pork reaches 160°F; whole-muscle beef reaches 145°F with a
        3-minute rest on a clean plate.
      why: Brown color alone does not establish the state-specific endpoint.
    - step: 4
      cue: 'Stems are crisp-tender, leaves just wilted and noodles evenly coated.'
      why: Staged vegetables avoid treating the thin leaves like firm stems.
  troubleshooting:
    - problem: Sauce scorches or noodles break while tossing
      cause: 'Pan is too hot, crowded or the noodles were overcooked'
      fix: >-
        Reduce heat after the sauce enters and fold gently. Cook noodles to
        their product instructions and work in smaller pan loads.
  substitutions:
    - ingredient: Lighter variation
      alternative: >-
        For the original batch, use 2 tbsp soy sauce, 1 tbsp oyster sauce, 1
        tbsp mirin, 1 tsp rice vinegar and 1 tsp sugar instead of every base
        sauce amount. Omit the onion, garlic and cooking scallions; keep the
        listed mushrooms, carrot, bok choy and protein. Cook mushrooms and
        carrot first, add bok choy stems and cook until crisp-tender, then
        combine with the properly cooked noodles, protein and chosen sauce. Add
        bok choy leaves last.
      effect: >-
        Scale all five chosen sauce amounts with the batch. Keep the written
        package cooking and protein temperature/rest checks. This variation
        omits the extra aromatics; optional serving toppings remain separate.
    - ingredient: Ground pork
      alternative: 'Use the same listed weight of ground beef, chicken or turkey.'
      effect: >-
        Ground beef needs 160°F; ground chicken or turkey needs 165°F. These are
        separate from the whole-muscle beef route at 145°F plus a 3-minute rest.
    - ingredient: Vegetable purchase measures
      alternative: >-
        For the original batch, use 4 oz white or cremini mushrooms, 1 large
        carrot and 1 medium head of bok choy instead of the listed vegetable
        purchase measures.
      effect: >-
        This is a separate purchase option, not an exact cup-to-weight or
        bunch-to-head conversion. Keep staged stem/leaf cooking and all other
        ingredients.
  storage: >-
    Refrigerate promptly in shallow containers at 40°F or below, within 2 hours
    (1 hour above 90°F). Use within 3–4 days. Reheat to 165°F throughout. The
    noodles soften in storage.
  timing: >-
    About 15–25 min preparation; About 15–25 min cooking, longer if batches are
    needed; About 30–50 min.
  sources:
    - title: NYT Cooking — Yaki Udon
      url: >-
        https://cooking.nytimes.com/recipes/1024643-yaki-udon?smid=ck-recipe-iOS-share
    - title: FoodSafety.gov — Safe minimum internal temperatures
      url: >-
        https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures
    - title: USDA — Leftovers and food safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

Prepare the sauce before heating the pan and cook the frozen noodles to their package instructions. Cook the protein separately so its doneness can be checked, then return it when the vegetables and noodles are ready. Keep bok choy stems and leaves separate so the stems soften before the leaves wilt.

## Directions

1. **Mix one sauce route:** Whisk Dark soy sauce, Low-sodium soy sauce, Oyster sauce, Mirin, Rice vinegar, and Sugar together until the sugar dissolves. If choosing the lighter alternative, mix that complete sauce instead and omit these base sauce amounts.
2. **Prepare the frozen noodles:** Use Frozen udon noodles, Water, and Toasted sesame oil. Cook frozen noodles according to the package, separating gently; separation alone is not sufficient if the product calls for further cooking. Drain, rinse briefly under cold water and drain well, then toss with a light drizzle of sesame oil.
3. **Cook the protein:** Use Ground pork or thinly sliced whole-muscle beef and 1/2 of the Neutral vegetable oil. Heat this step’s neutral-oil allocation over medium-high heat. For ground pork, break into small pieces and cook through to 160°F, starting checks around 5 minutes. For thinly sliced whole-muscle beef, cook to 145°F and rest at least 3 minutes on a clean plate while the vegetables cook. Browning is a useful texture cue, not the safety endpoint. Keep raw-contact utensils away from finished food.
4. **Cook vegetables and combine:** Have 1/2 of the Neutral vegetable oil, Small yellow onion, Mushrooms, Carrot, Small bunch of bok choy, Garlic cloves, and Scallions ready for the dark-soy sauce route; omit onion, garlic and cooking scallions if choosing the lighter variation. For the dark-soy sauce route, add the remaining neutral-oil allocation. Cook onion and mushrooms over medium-high heat until beginning to soften, about 2–3 minutes. Add carrot, bok choy stems and garlic; stir until stems are crisp-tender, starting checks after about 3 minutes. Add the scallion pieces. For the lighter variation, cook mushrooms and carrot in the remaining neutral-oil allocation, then add bok choy stems and cook until crisp-tender. In either route, add cooked meat, drained noodles and all the chosen sauce. Reduce heat if the sauce catches and fold until evenly coated and hot. Add reserved bok choy leaves at the end and cook just until wilted.
5. **Finish:** Divide among bowls and offer Chopped scallion greens (if using), Red pepper flakes (if using), Sesame seeds or furikake (if using), and Chili oil (if using).
