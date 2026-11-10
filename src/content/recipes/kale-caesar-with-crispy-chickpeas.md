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
cookTime: 25 min
totalTime: 40 min
servings: 4 portions
pairsWith:
  - baked-chicken-parmesan
  - chicken-piccata-unfried
  - chicken-souvlaki
pairingNotes:
  baked-chicken-parmesan: 'A sharp, garlicky salad beside cheesy chicken.'
  chicken-piccata-unfried: 'Lemon on lemon, with crunch from the chickpeas.'
  chicken-souvlaki: Hearty greens next to grilled lemony chicken.
ingredients:
  - '--- Kale ---'
  - '1 large bunch lacinato kale, stems removed, leaves thinly sliced'
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
  - '2 oil-packed anchovy fillets, minced'
  - 1/4 cup water
  - 1/4 tsp kosher salt
  - 1/4 tsp black pepper
  - '--- Toppings ---'
  - '1/2 cup Parmesan, shaved or grated, divided'
  - 'lemon zest, to taste'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: kale
      name: Kale
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
          preparation: 'stems removed, leaves thinly sliced'
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
            amount: 1/2
            unit: tsp
          uses:
            - step: roast
              share: 1
        - id: paprika
          key: paprika
          name: paprika
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: roast
              share: 1
        - id: garlic
          key: garlic
          name: garlic powder
          quantity:
            amount: 1/4
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
            amount: 1/4
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
        - id: anchovy
          key: anchovy
          name: oil-packed anchovy fillet
          plural: oil-packed anchovy fillets
          quantity:
            amount: 2
            unit: count
          uses:
            - step: blend
              share: 1
          preparation: minced
        - id: water
          key: water
          name: water
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: blend
              share: 1
        - id: salt
          key: salt
          name: kosher salt
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: blend
              share: 1
        - id: pepper
          key: pepper
          name: black pepper
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: blend
              share: 1
    - id: top
      name: Toppings
      ingredients:
        - id: cheese
          key: cheese
          name: Parmesan
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: blend
              share: 1/4
            - step: finish
              share: 3/4
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
      title: Roast the chickpeas
      text: >-
        Heat the oven to 425°F. Toss {{ingredients}} on a sheet pan and spread them in one layer.
        Roast, shaking the pan halfway, until golden and crisp, 20 to 25 minutes. Let them cool on
        the pan.
    - id: blend
      title: Blend the dressing
      text: >-
        While the chickpeas roast, blend {{ingredients}} until smooth and pourable. Add a splash
        more water if it's too thick. Taste before adding any salt, since the anchovy and cheese are
        salty.
    - id: massage
      title: Massage the kale
      text: >-
        Put {{ingredients}} in a large bowl. Squeeze and rub the kale with your hands until it turns
        darker and softens, about 2 minutes.
    - id: toss
      title: Dress the kale
      text: >-
        Pour the dressing over the kale and toss until every leaf is coated. Let it sit for 5
        minutes to soften a little more.
    - id: finish
      title: Top and serve
      text: 'Scatter {{ingredients}} over the salad, top with the cooled chickpeas and serve.'
learning:
  techniques:
    - seasoning
    - browning
    - cold-preparation
  substitutions:
    - ingredient: Lacinato kale
      alternative: Curly kale
      effect: Chewier and a little more bitter. Massage it a minute longer.
    - ingredient: Oil-packed anchovy fillets
      alternative: 1 tsp anchovy paste
      effect: 'Same savory, briny flavor with nothing to mince.'
    - ingredient: 'Anchovy, for a vegetarian dressing'
      alternative: 1 tsp white miso
      effect: Keeps a savory depth but loses the briny backbone of a true Caesar.
  storage: >-
    Dressed kale keeps 1 day in the fridge and the dressing alone keeps 3 days. Store the chickpeas
    separately, loosely covered at room temperature, for up to 2 days so they stay crisp.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

This Caesar swaps romaine for lacinato kale, which stands up to a garlicky anchovy and Parmesan dressing and even holds a day after dressing. Roasted chickpeas take the place of croutons. Pat them very dry before roasting so they turn crisp instead of chewy.

## Directions

1. **Roast the chickpeas:** Heat the oven to 425°F. Toss the chickpeas, paprika, garlic powder, pepper, 1 tbsp of the olive oil, and 1/2 tsp of the salt on a sheet pan and spread them in one layer. Roast, shaking the pan halfway, until golden and crisp, 20 to 25 minutes. Let them cool on the pan.
2. **Blend the dressing:** While the chickpeas roast, blend the extra-virgin olive oil, garlic, lemon juice, Dijon mustard, oil-packed anchovy fillets, water, 1/4 tsp of the salt, 1/4 tsp of the pepper, and 2 tbsp of the Parmesan until smooth and pourable. Add a splash more water if it's too thick. Taste before adding any salt, since the anchovy and cheese are salty.
3. **Massage the kale:** Put the lacinato kale, salt, and 1 tsp of the olive oil in a large bowl. Squeeze and rub the kale with your hands until it turns darker and softens, about 2 minutes.
4. **Dress the kale:** Pour the dressing over the kale and toss until every leaf is coated. Let it sit for 5 minutes to soften a little more.
5. **Top and serve:** Scatter the lemon zest and the rest of the Parmesan over the salad, top with the cooled chickpeas and serve.
