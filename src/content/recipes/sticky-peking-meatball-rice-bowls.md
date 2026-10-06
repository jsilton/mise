---
miseId: 8f6522be-850b-4ba8-b19f-4f6fc2943373
title: Sticky Peking Meatball Rice Bowls
role: main
vibe: comfort
difficulty: easy
prepTime: 15 min
cookTime: 'About 30 min, governed by cooker and meatball package'
totalTime: About 45 min planning; cooker/package/batches may take longer
servings: 5 portions
cookingMethods:
  - simmer
  - saute
categories: []
source: Saved Paprika recipe
ingredients:
  - '--- Recipe ---'
  - '1 1/2 cups jasmine rice, dry; rinse and drain'
  - '1 can (13 1/2 oz) coconut milk, shake/stir smooth'
  - 1/2 cup water
  - >-
    1 1/2 lb fully cooked frozen meatballs, approximately 24–28 in the original
    batch; actual piece weight varies
  - 1 tsp oil
  - 1/3 cup hoisin sauce
  - 1/3 cup Peking duck sauce
  - 2 tbsp rice vinegar or apple cider vinegar
  - 3 tbsp water
  - '1 1/2 tbsp fresh ginger, grated'
  - '4 garlic cloves, minced'
  - '1 bunch of kale, stems removed, roughly chopped'
  - '3 carrots, peeled and sliced into coins or ribbons'
  - '2 garlic cloves, thinly sliced'
  - '1/2 lemon, juiced, or use the separate unmeasured vinegar finish instead'
  - 'black pepper, to taste'
  - 1 tsp neutral oil
  - 'water, a small splash for vegetables if needed'
  - 'water, a splash only if glaze becomes too thick'
  - 'vinegar, a splash instead of lemon juice if chosen, optional'
rating: 5
cuisines:
  - Chinese
origin: Saved Paprika recipe
formula:
  version: 1
  yield:
    amount: 5
    unit: portion
  components:
    - id: main
      name: Recipe
      ingredients:
        - id: rice
          key: rice
          name: jasmine rice
          quantity:
            amount: 1.5
            unit: cup
          preparation: dry; rinse and drain
          uses:
            - step: rice
              share: 1
        - id: coconut
          key: coconut
          name: coconut milk
          quantity:
            amount: 1
            unit: can
          preparation: shake/stir smooth
          uses:
            - step: rice
              share: 1
          packageSize:
            amount: 13.5
            unit: oz
        - id: rice-water
          key: rice-water
          name: water
          quantity:
            amount: 0.5
            unit: cup
          uses:
            - step: rice
              share: 1
        - id: meatballs
          key: meatballs
          name: fully cooked frozen meatballs
          quantity:
            amount: 1.5
            unit: lb
          preparation: >-
            approximately 24–28 in the original batch; actual piece weight
            varies
          uses:
            - step: meatballs
              share: 1
        - id: meat-oil
          key: meat-oil
          name: oil
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: meatballs
              share: 1
        - id: hoisin
          key: hoisin
          name: hoisin sauce
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: glaze
              share: 1
        - id: duck
          key: duck
          name: Peking duck sauce
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: glaze
              share: 1
        - id: vinegar
          key: vinegar
          name: rice vinegar or apple cider vinegar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: glaze
              share: 1
        - id: glaze-water
          key: glaze-water
          name: water
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: glaze
              share: 1
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1.5
            unit: tbsp
          preparation: grated
          uses:
            - step: aromatics
              share: 1
        - id: meat-garlic
          key: meat-garlic
          name: garlic clove
          quantity:
            amount: 4
            unit: count
          preparation: minced
          uses:
            - step: aromatics
              share: 1
          plural: garlic cloves
        - id: kale
          key: kale
          name: bunch of kale
          quantity:
            amount: 1
            unit: count
          preparation: 'stems removed, roughly chopped'
          uses:
            - step: vegetables
              share: 1
          plural: bunches of kale
        - id: carrots
          key: carrots
          name: carrot
          quantity:
            amount: 3
            unit: count
          preparation: peeled and sliced into coins or ribbons
          uses:
            - step: vegetables
              share: 1
          plural: carrots
        - id: veg-garlic
          key: veg-garlic
          name: garlic clove
          quantity:
            amount: 2
            unit: count
          preparation: thinly sliced
          uses:
            - step: vegetables
              share: 1
          plural: garlic cloves
        - id: lemon
          key: lemon
          name: lemon
          quantity:
            amount: 0.5
            unit: count
          preparation: 'juiced, or use the separate unmeasured vinegar finish instead'
          uses:
            - step: finish
              share: 1
          plural: lemons
        - id: pepper
          key: pepper
          name: black pepper
          allowance: to taste
          uses:
            - step: finish
              share: 1
        - id: veg-oil
          key: veg-oil
          name: neutral oil
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: vegetables
              share: 1
        - id: veg-water
          key: veg-water
          name: water
          allowance: a small splash for vegetables if needed
          uses:
            - step: vegetables
              share: 1
          role: cooking-water
        - id: glaze-extra-water
          key: glaze-extra-water
          name: water
          allowance: a splash only if glaze becomes too thick
          uses:
            - step: glaze
              share: 1
          role: cooking-water
        - id: finish-vinegar
          key: finish-vinegar
          name: vinegar
          allowance: a splash instead of lemon juice if chosen
          uses:
            - step: finish
              share: 1
          optional: true
  steps:
    - id: rice
      title: Start coconut rice
      text: >-
        Use {{ingredients}} for this stage. Combine the rinsed and drained rice,
        all the stirred coconut milk and this component’s measured water in a
        rice cooker that permits the mixture and load. Follow its instructions.
        If the manual disallows this mixture, use a separately verified
        coconut-rice method with the full listed rice, coconut milk and water.
    - id: meatballs
      title: Heat meatballs
      text: >-
        Use {{ingredients}} for this stage. Heat the fully cooked frozen
        meatballs according to their package until centers reach 165°F / 74°C,
        checking several of the largest. Brown the heated meatballs in a roomy
        skillet using their full one-teaspoon oil for the original batch, or the
        listed scaled amount. Work in batches without assuming 24–28 pieces at
        every scale.
    - id: aromatics
      title: Add aromatics
      text: >-
        Reduce heat to medium. Add {{ingredients}} around the heated meatballs
        and stir for about 30 seconds, without scorching the garlic.
    - id: glaze
      title: Glaze
      text: >-
        Use {{ingredients}} for this stage. Add the hoisin, duck sauce, vinegar
        and measured three-tablespoon glaze water for the original batch,
        following the scaled list for other quantities. Simmer gently about 5
        minutes, stirring until glaze clings; use the separate small-water
        allowance only if the glaze becomes too thick. Keep this water separate
        from the rice water.
    - id: vegetables
      title: Cook greens and carrots
      text: >-
        Use {{ingredients}} for this stage. In another skillet heat the full
        vegetable oil. Cook carrots about 2 minutes, then add kale and sliced
        garlic. Turn through the pan and continue until carrots and greens are
        tender, beginning checks after 3–5 minutes more. Use the small
        vegetable-water allowance if needed; lower heat if garlic burns. More
        pan batches change this time.
    - id: finish
      title: Finish the vegetables
      text: >-
        Use {{ingredients}} for this stage. Season with the black-pepper
        allowance and all the juice from the listed lemon portion, or the
        separate vinegar splash instead. Do not add both acid options
        automatically.
    - id: serve
      title: Assemble
      text: >-
        Let the rice finish its permitted cooker cycle and any manual-required
        rest; check grains are tender. Divide all the rice, glazed meatballs and
        vegetables among the listed portions rather than fixing five meatballs
        per person at every scale. Serve promptly; actual total follows rice,
        meatball package and batches.
equipment:
  - rice-cooker
  - skillet
  - food-thermometer
learning:
  focus: Coordinate three pans without mixing their liquid or oil allocations
  outcome: >-
    Rice is tender, fully cooked meatballs have hot 165°F centers and clinging
    glaze, and carrots and kale are tender.
  techniques:
    - temperature
  before:
    - >-
      Use labeled fully cooked frozen meatballs and follow their package heating
      instructions; check several of the largest centers at 165°F / 74°C.
    - >-
      Choose a rice cooker whose manual permits coconut milk/fatty liquids and
      the intended load; its cooked-rice cup capacity is not automatically a
      dry-rice measure. Do not use a cooker that disallows this mixture.
    - >-
      Wash and drain kale and carrots; trim kale stems and slice carrots
      consistently. Extra batches need their own shares of each full ingredient
      amount.
  checkpoints:
    - step: 2
      cue: >-
        Several of the largest fully cooked meatballs reach 165°F / 74°C at
        their centers after package-directed heating.
      why: >-
        A browned surface does not establish that frozen meatball centers are
        hot.
  troubleshooting:
    - problem: Glaze becomes thick before the meal is ready
      cause: It reduced while the rice or vegetables needed longer.
      fix: >-
        Lower heat and use only the separate glaze-water allowance if needed.
        Keep the rice water and vegetable oil separate from the glaze.
  substitutions:
    - ingredient: Lemon juice
      alternative: The separate vinegar splash allowance instead
      effect: >-
        Use the vinegar splash instead of the lemon juice to finish the
        vegetables.
    - ingredient: Rice vinegar in glaze
      alternative: The same listed apple cider vinegar measure
      effect: >-
        This vinegar choice belongs to the glaze; choose the vegetable acid
        separately.
  timing: >-
    About 45 min planning; cooker/package/batches may take longer; 15 min.
    Additional pans/batches change elapsed time; no linear clock scaling is
    implied.
  storage: >-
    Refrigerate leftovers promptly in shallow containers at 40°F / 4°C or below,
    within 2 hours (1 hour above 90°F / 32°C). Use within 3–4 days or freeze;
    reheat leftovers to 165°F / 74°C throughout. Prompt cooling matters for
    cooked grains as well as meat; reheating is not a substitute for proper
    storage.
  sources:
    - title: FoodSafety.gov — Cooking temperatures
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

Hoisin and duck sauce glaze fully cooked meatballs while coconut rice and garlicky greens cook separately. Keep each component’s oil and water separate. The rice-cooker instructions and meatball package determine the working schedule.

## Directions

1. **Start coconut rice:** Use jasmine rice, coconut milk, and water for this stage. Combine the rinsed and drained rice, all the stirred coconut milk and this component’s measured water in a rice cooker that permits the mixture and load. Follow its instructions. If the manual disallows this mixture, use a separately verified coconut-rice method with the full listed rice, coconut milk and water.
2. **Heat meatballs:** Use fully cooked frozen meatballs and oil for this stage. Heat the fully cooked frozen meatballs according to their package until centers reach 165°F / 74°C, checking several of the largest. Brown the heated meatballs in a roomy skillet using their full one-teaspoon oil for the original batch, or the listed scaled amount. Work in batches without assuming 24–28 pieces at every scale.
3. **Add aromatics:** Reduce heat to medium. Add fresh ginger and garlic cloves around the heated meatballs and stir for about 30 seconds, without scorching the garlic.
4. **Glaze:** Use hoisin sauce, Peking duck sauce, rice vinegar or apple cider vinegar, water, and water for this stage. Add the hoisin, duck sauce, vinegar and measured three-tablespoon glaze water for the original batch, following the scaled list for other quantities. Simmer gently about 5 minutes, stirring until glaze clings; use the separate small-water allowance only if the glaze becomes too thick. Keep this water separate from the rice water.
5. **Cook greens and carrots:** Use bunch of kale, carrots, garlic cloves, neutral oil, and water for this stage. In another skillet heat the full vegetable oil. Cook carrots about 2 minutes, then add kale and sliced garlic. Turn through the pan and continue until carrots and greens are tender, beginning checks after 3–5 minutes more. Use the small vegetable-water allowance if needed; lower heat if garlic burns. More pan batches change this time.
6. **Finish the vegetables:** Use lemon, black pepper, and vinegar (if using) for this stage. Season with the black-pepper allowance and all the juice from the listed lemon portion, or the separate vinegar splash instead. Do not add both acid options automatically.
7. **Assemble:** Let the rice finish its permitted cooker cycle and any manual-required rest; check grains are tender. Divide all the rice, glazed meatballs and vegetables among the listed portions rather than fixing five meatballs per person at every scale. Serve promptly; actual total follows rice, meatball package and batches.

## Cooking Notes

Fresh ginger is a prominent part of the glaze. Leftover coconut rice can be used for fried rice; refrigerate it promptly in shallow containers and reheat thoroughly. The written rice liquid is coconut milk and water.
