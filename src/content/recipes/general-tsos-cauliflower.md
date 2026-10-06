---
miseId: 43fc7510-bccf-4b25-ba92-5bdef1f8ac50
title: General Tso's Cauliflower
difficulty: easy
cookingMethods:
  - fry
  - saute
  - simmer
  - steam
dietary:
  - vegetarian
occasions:
  - weeknight
  - meal-prep
  - comfort-food
flavorProfile:
  - spicy
  - sweet
  - savory
  - acidic
  - umami
cuisines:
  - Chinese
role: main
vibe: nutritious
prepTime: 30 min
cookTime: 30–45 min
totalTime: About 60–80 min
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: excellent
equipment:
  - large-skillet
pairsWith:
  - basmati-rice
  - steamed-broccoli
ingredients:
  - '--- Cauliflower and batter ---'
  - '1 cauliflower head, washed, well drained and cut into bite-sized florets'
  - 1/2 cup all-purpose flour
  - 1/3 cup cornstarch
  - 3/4 tsp baking powder
  - 1 tsp salt
  - 2 large eggs
  - 3 tbsp soy sauce
  - 1 tbsp rice vinegar
  - 'water, as needed to thin overly stiff batter'
  - '1/2 cup peanut or vegetable oil, for shallow frying'
  - '--- Sauce ---'
  - 2 tsp sesame oil
  - '6 scallions, washed; whites finely sliced and greens cut into 1-inch pieces, reserved'
  - '3 garlic cloves, minced'
  - '1 tbsp fresh ginger, minced'
  - '5 small dried red chilies, optional'
  - 1/4 cup vegetable broth
  - 1/4 cup soy sauce
  - 3 tbsp rice vinegar
  - 2 tbsp mirin
  - 3 tbsp granulated sugar
  - 1 tbsp cornstarch
  - 'sesame seeds, for garnish, if wanted, optional'
source: Adapted from purewow.com
sourceUrl: 'https://www.purewow.com/recipes/General-Tsos-Cauliflower'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: batter
      name: Cauliflower and batter
      ingredients:
        - id: cauliflower
          key: cauliflower
          name: cauliflower head
          quantity:
            amount: 1
            unit: count
          uses:
            - step: fry
              share: 1
          plural: cauliflower heads
          preparation: 'washed, well drained and cut into bite-sized florets'
        - id: flour
          key: flour
          name: all-purpose flour
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: batter
              share: 1
        - id: starch
          key: cornstarch
          name: cornstarch
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: batter
              share: 1
        - id: powder
          key: powder
          name: baking powder
          quantity:
            amount: 3/4
            unit: tsp
          uses:
            - step: batter
              share: 1
        - id: salt
          key: salt
          name: salt
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: batter
              share: 1
        - id: eggs
          key: eggs
          name: large egg
          quantity:
            amount: 2
            unit: count
          uses:
            - step: batter
              share: 1
          plural: large eggs
        - id: soy
          key: soy
          name: soy sauce
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: batter
              share: 1
        - id: vinegar
          key: vinegar
          name: rice vinegar
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: batter
              share: 1
        - id: thinning-water
          key: thinning-water
          name: water
          allowance: as needed to thin overly stiff batter
          uses:
            - step: batter
              share: 1
          role: cooking-water
        - id: frying-oil
          key: frying-oil
          name: peanut or vegetable oil
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: fry
              share: 1
          preparation: for shallow frying
    - id: sauce
      name: Sauce
      ingredients:
        - id: sesame-oil
          key: sesame-oil
          name: sesame oil
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: aromatics
              share: 1
        - id: scallions
          key: scallions
          name: scallion
          quantity:
            amount: 6
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: scallions
          preparation: 'washed; whites finely sliced and greens cut into 1-inch pieces, reserved'
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: aromatics
              share: 1
          preparation: minced
        - id: chilies
          key: chilies
          name: small dried red chili
          quantity:
            amount: 5
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: small dried red chilies
          optional: true
        - id: broth
          key: broth
          name: vegetable broth
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: soy
          key: soy
          name: soy sauce
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: vinegar
          key: vinegar
          name: rice vinegar
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: simmer
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
        - id: sugar
          key: sugar
          name: granulated sugar
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: temper
              share: 1
        - id: starch
          key: cornstarch
          name: cornstarch
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: temper
              share: 1
        - id: sesame-seeds
          key: sesame-seeds
          name: sesame seeds
          allowance: 'for garnish, if wanted'
          uses:
            - step: serve
              share: 1
          optional: true
          role: garnish
  steps:
    - id: batter
      title: Mix the batter
      text: >-
        For the batter, use {{ingredients}}. Whisk the flour, coating cornstarch, baking powder and
        salt. Separately whisk the eggs, batter soy sauce and batter vinegar, then pour into the dry
        mixture while whisking. If too stiff to coat a floret, stir in a little of the
        thinning-water allowance until thick but dip-able. Do not taste raw egg/flour batter.
    - id: fry
      title: Fry the cauliflower
      text: >-
        Use {{ingredients}} for this stage. For the measured-oil route, heat the full listed frying
        oil in a skillet suitable for shallow frying. The separate oil-to-depth option uses a
        different, unmeasured frying supply. A small drop of batter should sizzle and float promptly
        without burning. Dip florets and fry in uncrowded rounds, turning until golden on all sides,
        starting checks around 4–5 minutes per original-size round. Cut a large sample: the coating
        should be set without wet batter and the center tender. Check 160°F in large coated pieces
        with a thin probe from the side; color alone is not an egg-batter endpoint. Lift onto
        absorbent paper towels; do not pour unused raw batter into the sauce.
    - id: aromatics
      title: Start the sauce
      text: >-
        Have {{ingredients}} ready. Heat the sesame oil over medium heat in a saucepan with room for
        the finished dish. Stir scallion whites, garlic, ginger and optional chilies about 30
        seconds until fragrant, lowering heat if garlic browns. Keep all the scallion greens aside
        for the thickened sauce.
    - id: simmer
      title: Simmer the sauce liquids
      text: >-
        Add {{ingredients}}, bring to a simmer and cook about 5 minutes over medium heat. The
        distinct batter and sauce soy/vinegar measures are both used.
    - id: temper
      title: Disperse the sauce starch
      text: >-
        Whisk {{ingredients}} together in a small bowl. For the original batch, gradually whisk
        about 1/4 cup of hot sauce from the saucepan into this mixture until smooth; for a scaled
        batch take the corresponding proportional amount from that same sauce supply. Return all
        this mixture to the pot, bring to a simmer and add all the reserved scallion greens. This is
        recirculated sauce, not extra broth.
    - id: thicken
      title: Finish thickening
      text: >-
        Cook, stirring occasionally, about 7–9 minutes more, checking for a glossy sauce that clings
        to a spoon without scorching. Lower heat as needed; do not treat the clock as a requirement
        to boil a nearly dry pot.
    - id: glaze
      title: Glaze the cauliflower
      text: >-
        Add all the fried cauliflower and fold gently until coated and rewarmed, starting checks
        around 4–5 minutes for the original batch. Use enough uncrowded vessels for larger batches,
        dividing the entire batter, frying oil and sauce quantities proportionally. Serve promptly;
        extended holding softens the coating.
    - id: serve
      title: Serve
      text: 'Garnish with {{ingredients}} and serve with separately prepared steamed rice.'
learning:
  focus: Separate batter seasoning from sauce seasoning
  outcome: 'Tender florets with a set golden coating, scallion greens and a clinging glaze.'
  techniques:
    - starch
    - temperature
  before:
    - >-
      Prepare washed, drained florets of similar size. Both sets of soy sauce, vinegar and
      cornstarch belong to distinct components; do not combine the batter and sauce measures.
    - >-
      The listed half-cup frying oil belongs to the original batch and scales with the ingredient
      list; pan depth depends on geometry. Use additional rounds or suitable separate pans, without
      multiplying the temperature or promising the same clock.
  checkpoints:
    - step: 2
      cue: A cut large floret is tender with set coating; checked coated pieces reach 160°F.
      why: >-
        A dark exterior does not prove the egg-containing coating and thick piece have cooked
        through.
    - step: 5
      cue: The starch-sugar mixture is smooth before it returns to the saucepan.
      why: >-
        Whisking with a portion of the actual sauce disperses starch; it is not a second liquid
        dose.
  troubleshooting:
    - problem: Sauce has lumps.
      cause: Dry starch reached the hot pot without first being dispersed.
      fix: >-
        Use the tempering or complete cold-premix route next time; do not add more dry starch
        directly to hot sauce.
    - problem: Coating is golden but the floret center is firm.
      cause: Pieces were too large for their frying round.
      fix: >-
        Continue cooking at controlled heat and check a cut large piece; use smaller, similar
        florets next time.
  substitutions:
    - ingredient: Tempered sauce route
      alternative: Cold-premixed sauce route
      effect: >-
        Instead of simmering, tempering and thickening as steps 4–6, whisk all listed sauce broth,
        sauce soy, sauce vinegar, mirin, sugar and sauce cornstarch together cold. Re-stir
        immediately before pouring into the cooked aromatics. Bring to a simmer, stirring; begin
        checking around 5–7 minutes, until thick enough to coat a spoon without scorching. Add all
        scallion greens. Fold in all the fried cauliflower gently, beginning checks around 30
        seconds and continuing until coated and hot, then garnish and serve promptly; this replaces
        step 7’s longer rewarming route. Keep batter soy/vinegar/starch separate and use the same
        complete sauce oil, aromatics and garnish quantities. Choose either the measured-oil frying
        route or the separate oil-to-depth option; do not combine their frying supplies.
    - ingredient: Measured shallow-frying oil
      alternative: Half-inch oil-to-depth frying route
      effect: >-
        Instead of the measured frying-oil supply, use enough peanut oil for a 1/2-inch layer in the
        cast-iron skillet being used. This is an unmeasured alternative supply whose volume depends
        on the skillet; do not add it to or equate it with the listed half cup. Heat until a small
        batter drop sizzles promptly, then fry in uncrowded rounds, turning and starting checks
        around 4–5 minutes until the coating is set and florets are tender. Keep the 160°F
        coated-piece check and raw-batter separation in step 2. Keep the full separate sesame oil,
        aromatics and sauce supplies; the cold-premixed sauce option provides the quick glaze
        finish.
  timing: >-
    Allow about 60–80 minutes: around 30 minutes preparation and 30–45 minutes frying, sauce
    simmering, tempering/thickening and reheating, with some sauce work alongside frying. Extra
    rounds and different floret sizes extend the plan.
  storage: >-
    Refrigerate promptly in shallow containers at 40°F or below, within 2 hours, or 1 hour above
    90°F. Use cooked leftovers within 3–4 days and reheat to 165°F throughout. Bring stored sauce or
    stew to a boil when reheating, stirring so the center heats too; this is separate from the
    first-cook instructions.
  sources:
    - title: PureWow Editors — General Tso’s Cauliflower
      url: 'https://www.purewow.com/recipes/General-Tsos-Cauliflower'
    - title: FDA — Egg safety
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety'
    - title: FDA — Safe food handling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: FDA — Produce preparation
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-produce-safely'
    - title: USDA FSIS — Leftovers and food safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

This vegetarian General Tso adaptation brings a Chinese-American takeout sauce to cauliflower. The cauliflower gets an egg-and-starch coating and a separate soy, vinegar and mirin glaze. Fry uncrowded florets until the coating is set and their centers are tender, then coat them only when the sauce is ready. The coating softens in sauce; serving promptly matters more than promising lasting crunch.
For kids, serve the heat on the side or reduce or omit the spicy elements.

## Directions

1. **Mix the batter:** For the batter, use all-purpose flour, cornstarch, baking powder, salt, large eggs, soy sauce, rice vinegar, and water. Whisk the flour, coating cornstarch, baking powder and salt. Separately whisk the eggs, batter soy sauce and batter vinegar, then pour into the dry mixture while whisking. If too stiff to coat a floret, stir in a little of the thinning-water allowance until thick but dip-able. Do not taste raw egg/flour batter.
2. **Fry the cauliflower:** Use cauliflower head and peanut or vegetable oil for this stage. For the measured-oil route, heat the full listed frying oil in a skillet suitable for shallow frying. The separate oil-to-depth option uses a different, unmeasured frying supply. A small drop of batter should sizzle and float promptly without burning. Dip florets and fry in uncrowded rounds, turning until golden on all sides, starting checks around 4–5 minutes per original-size round. Cut a large sample: the coating should be set without wet batter and the center tender. Check 160°F in large coated pieces with a thin probe from the side; color alone is not an egg-batter endpoint. Lift onto absorbent paper towels; do not pour unused raw batter into the sauce.
3. **Start the sauce:** Have sesame oil, scallions, garlic cloves, fresh ginger, and small dried red chilies (if using) ready. Heat the sesame oil over medium heat in a saucepan with room for the finished dish. Stir scallion whites, garlic, ginger and optional chilies about 30 seconds until fragrant, lowering heat if garlic browns. Keep all the scallion greens aside for the thickened sauce.
4. **Simmer the sauce liquids:** Add vegetable broth, soy sauce, rice vinegar, and mirin, bring to a simmer and cook about 5 minutes over medium heat. The distinct batter and sauce soy/vinegar measures are both used.
5. **Disperse the sauce starch:** Whisk granulated sugar and cornstarch together in a small bowl. For the original batch, gradually whisk about 1/4 cup of hot sauce from the saucepan into this mixture until smooth; for a scaled batch take the corresponding proportional amount from that same sauce supply. Return all this mixture to the pot, bring to a simmer and add all the reserved scallion greens. This is recirculated sauce, not extra broth.
6. **Finish thickening:** Cook, stirring occasionally, about 7–9 minutes more, checking for a glossy sauce that clings to a spoon without scorching. Lower heat as needed; do not treat the clock as a requirement to boil a nearly dry pot.
7. **Glaze the cauliflower:** Add all the fried cauliflower and fold gently until coated and rewarmed, starting checks around 4–5 minutes for the original batch. Use enough uncrowded vessels for larger batches, dividing the entire batter, frying oil and sauce quantities proportionally. Serve promptly; extended holding softens the coating.
8. **Serve:** Garnish with sesame seeds (if using) and serve with separately prepared steamed rice.
