---
miseId: 34625cff-8fe7-4681-8a58-101d6a8aefb5
title: Kale Caesar with Crispy Chickpeas
difficulty: easy
cookingMethods:
  - bake
  - blend
  - no-cook
dietary:
  - nut-free
occasions:
  - weeknight
  - quick-lunch
  - meal-prep
  - entertaining
flavorProfile:
  - savory
  - umami
  - acidic
  - herbaceous
cuisines:
  - American
  - Mediterranean
role: side
vibe: nutritious
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
advancePrep:
  - components-ahead
  - dressing-ahead
equipment:
  - large-bowl
  - blender
  - sheet-pan
prepTime: 15 min
cookTime: 20–25 min
totalTime: '35–45 min, plus any remaining preheating'
servings: 4 portions
pairsWith:
  - chicken-souvlaki
  - chicken-piccata-unfried
  - san-marzano-tomato-sauce
ingredients:
  - '--- Kale and massage ---'
  - '1 large bunch lacinato kale, washed, dried, tough stems removed and shredded'
  - 1 tsp olive oil
  - 'kosher salt, a pinch'
  - '--- Roasted chickpeas ---'
  - '1 can (15 oz) chickpeas, drained and patted dry'
  - 1 tbsp olive oil
  - 1/2 tsp kosher salt
  - 1/4 tsp paprika
  - 1/4 tsp garlic powder
  - 'black pepper, a pinch'
  - '--- Caesar dressing ---'
  - 1/4 cup extra-virgin olive oil
  - '2 garlic cloves, grated'
  - 2 tbsp fresh lemon juice
  - 1 tsp Dijon mustard
  - '1 tsp white miso or soy sauce, choose one'
  - '1/4 tsp anchovy paste, optional'
  - 1/4 cup water
  - 1/2 tsp kosher salt
  - 1/4 tsp black pepper
  - 'additional water, as needed for thinning, optional'
  - '--- Toppings ---'
  - '1/3 cup Parmesan, shaved or grated'
  - 'lemon zest, to taste'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: kale
      name: Kale and massage
      ingredients:
        - id: leaves
          key: leaves
          name: large bunch lacinato kale
          quantity:
            amount: 1
            unit: count
          uses:
            - step: massage
              share: 1
          plural: large bunches lacinato kale
          preparation: 'washed, dried, tough stems removed and shredded'
        - id: massage-oil
          key: massage-oil
          name: olive oil
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: massage
              share: 1
        - id: massage-salt
          key: massage-salt
          name: kosher salt
          allowance: a pinch
          uses:
            - step: massage
              share: 1
    - id: chickpeas
      name: Roasted chickpeas
      ingredients:
        - id: beans
          key: beans
          name: chickpeas
          quantity:
            amount: 1
            unit: can
          uses:
            - step: roast
              share: 1
          packageSize:
            amount: 15
            unit: oz
          preparation: drained and patted dry
        - id: oil
          key: oil
          name: olive oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: roast
              share: 1
        - id: salt
          key: salt
          name: kosher salt
          quantity:
            amount: 0.5
            unit: tsp
          uses:
            - step: roast
              share: 1
        - id: paprika
          key: paprika
          name: paprika
          quantity:
            amount: 0.25
            unit: tsp
          uses:
            - step: roast
              share: 1
        - id: garlic
          key: garlic
          name: garlic powder
          quantity:
            amount: 0.25
            unit: tsp
          uses:
            - step: roast
              share: 1
        - id: pepper
          key: pepper
          name: black pepper
          allowance: a pinch
          uses:
            - step: roast
              share: 1
    - id: dressing
      name: Caesar dressing
      ingredients:
        - id: oil
          key: oil
          name: extra-virgin olive oil
          quantity:
            amount: 0.25
            unit: cup
          uses:
            - step: blend
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 2
            unit: count
          uses:
            - step: blend
              share: 1
          plural: garlic cloves
          preparation: grated
        - id: lemon
          key: lemon
          name: fresh lemon juice
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: blend
              share: 1
        - id: mustard
          key: mustard
          name: Dijon mustard
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: blend
              share: 1
        - id: miso
          key: miso
          name: white miso or soy sauce
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: blend
              share: 1
          preparation: choose one
        - id: anchovy
          key: anchovy
          name: anchovy paste
          quantity:
            amount: 0.25
            unit: tsp
          uses:
            - step: blend
              share: 1
          optional: true
        - id: water
          key: water
          name: water
          quantity:
            amount: 0.25
            unit: cup
          uses:
            - step: blend
              share: 1
        - id: salt
          key: salt
          name: kosher salt
          quantity:
            amount: 0.5
            unit: tsp
          uses:
            - step: blend
              share: 1
        - id: pepper
          key: pepper
          name: black pepper
          quantity:
            amount: 0.25
            unit: tsp
          uses:
            - step: blend
              share: 1
        - id: extra-water
          key: extra-water
          name: additional water
          allowance: as needed for thinning
          uses:
            - step: blend
              share: 1
          optional: true
    - id: top
      name: Toppings
      ingredients:
        - id: cheese
          key: cheese
          name: Parmesan
          quantity:
            amount: 0.3333333333333333
            unit: cup
          uses:
            - step: finish
              share: 1
          preparation: shaved or grated
        - id: zest
          key: zest
          name: lemon zest
          allowance: to taste
          uses:
            - step: finish
              share: 1
  steps:
    - id: roast
      title: Roast chickpeas
      text: >-
        Preheat to 425°F. Toss {{ingredients}} together on a sheet; spread in
        one layer. Roast about 20–25 minutes, shaking halfway, until golden.
        Cool on the sheet and assess texture after cooling.
    - id: massage
      title: Massage kale
      text: >-
        Use {{ingredients}}: massage the washed shredded leaves with the
        separate oil and salt for about 2 minutes until softened.
    - id: blend
      title: Blend dressing
      text: >-
        Blend {{ingredients}} until smooth, using the additional water only as
        needed for a pourable dressing.
    - id: toss
      title: Toss
      text: Toss all the prepared dressing through the softened kale.
    - id: finish
      title: Finish
      text: 'Add {{ingredients}} and all the cooled roasted chickpeas.'
    - id: rest
      title: Rest and serve
      text: >-
        Rest about 5 minutes, then serve. Refrigerate components promptly when
        holding; keep chickpeas separate for storage.
learning:
  focus: Separate crisp and dressed components
  outcome: >-
    Softened kale with evenly distributed dressing and a chickpea topping added
    near service.
  techniques:
    - seasoning
    - browning
    - cold-preparation
  before:
    - >-
      The extra teaspoon of massage oil in the original-batch method is separate
      from the full tablespoon for chickpeas and quarter cup for dressing; all
      three supplies remain.
    - >-
      Drain each 15 oz chickpea can; the package size stays fixed while the
      number of cans scales. Prepare enough sheets for one layer. Choose miso OR
      soy sauce, not both.
  checkpoints:
    - step: 1
      cue: Chickpeas are golden outside; assess their texture after cooling.
      why: >-
        Wet or crowded chickpeas need longer and do not all become crisp on an
        identical clock.
    - step: 3
      cue: Smooth pourable dressing without chunks of garlic.
      why: The cold dressing should coat the leaves evenly.
  troubleshooting:
    - problem: Chickpeas soften after tossing.
      cause: Moisture from the dressing reaches the roasted surface.
      fix: >-
        Keep remaining chickpeas separate and add at service; do not promise
        that an already dressed topping will remain crisp.
  substitutions: []
  timing: >-
    About 15 minutes hands-on preparation overlaps the 20–25-minute roast.
    Cooling plus the 5-minute final rest makes roughly 35–45 minutes elapsed for
    one load; scaled loads can take longer. The oven must reach 425°F before
    loading; any preheating beyond preparation extends elapsed time.
  storage: >-
    Refrigerate the freshly blended garlic dressing and washed kale promptly at
    40°F / 4°C or below; use dressing within the original 3-day plan.
    Refrigerate cooked chickpeas in a separate shallow container and use within
    3–4 days; their original 2-day make-ahead plan is a quality choice, not
    permission for room-temperature storage. Do not assume lemon juice makes the
    garlic-oil mixture shelf stable. Add chickpeas near service.
  sources:
    - title: FDA produce preparation
      url: >-
        https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-produce-safely
    - title: FoodSafety.gov cold handling and leftovers
      url: 'https://www.foodsafety.gov/blog/game-day-food-safety-tips'
    - title: CDC garlic and herb oils
      url: 'https://www.cdc.gov/botulism/prevention/index.html'
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Dry chickpeas roast more readily than wet ones. Massage the kale until it softens, then toss with the garlic, lemon and miso dressing; add chickpeas near serving so they keep more of their crunch.

## Directions

1. **Roast chickpeas:** Preheat to 425°F. Toss chickpeas, olive oil, kosher salt, paprika, garlic powder, and black pepper together on a sheet; spread in one layer. Roast about 20–25 minutes, shaking halfway, until golden. Cool on the sheet and assess texture after cooling.
2. **Massage kale:** Use large bunch lacinato kale, olive oil, and kosher salt: massage the washed shredded leaves with the separate oil and salt for about 2 minutes until softened.
3. **Blend dressing:** Blend extra-virgin olive oil, garlic cloves, fresh lemon juice, Dijon mustard, white miso or soy sauce, anchovy paste (if using), water, kosher salt, black pepper, and additional water (if using) until smooth, using the additional water only as needed for a pourable dressing.
4. **Toss:** Toss all the prepared dressing through the softened kale.
5. **Finish:** Add Parmesan and lemon zest and all the cooled roasted chickpeas.
6. **Rest and serve:** Rest about 5 minutes, then serve. Refrigerate components promptly when holding; keep chickpeas separate for storage.
