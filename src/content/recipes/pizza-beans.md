---
miseId: 0ea82f97-8835-412e-b891-9a4df030042f
title: Pizza Beans
difficulty: easy
cookingMethods:
  - saute
  - simmer
  - bake
occasions:
  - comfort-food
flavorProfile:
  - umami
  - rich
cuisines:
  - American
  - Italian
role: main
vibe: comfort
prepTime: About 15–20 min
cookTime: 'About 30–40 min, plus 5 min rest'
totalTime: About 50–65 min
servings: 4 portions
pairsWith:
  - everyday-arugula-salad
ingredients:
  - '--- Ingredients ---'
  - 1 tbsp Extra-virgin olive oil
  - '1 Yellow onion, diced'
  - '2 Garlic cloves, minced'
  - 'Red pepper flakes, to taste, optional'
  - '1 Lacinato kale bunch, washed, tough stems removed and leaves chopped'
  - 1 can (28 oz) Crushed tomatoes
  - >-
    2 cans (15 oz) Cooked canned giant white beans (butter or gigante), rinsed
    and drained; not dry beans
  - 1 tsp Dried oregano
  - 'Salt, to taste'
  - 'Black pepper, to taste'
  - '8 oz Mozzarella cheese, shredded'
  - '1/3 cup Parmesan cheese, grated'
  - 'Crusty bread, for serving, optional'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
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
          name: Extra-virgin olive oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: base
              share: 1
        - id: onion
          key: onion
          name: Yellow onion
          quantity:
            amount: 1
            unit: count
          uses:
            - step: base
              share: 1
          plural: Yellow onions
          preparation: diced
        - id: garlic
          key: garlic
          name: Garlic clove
          quantity:
            amount: 2
            unit: count
          uses:
            - step: garlic
              share: 1
          plural: Garlic cloves
          preparation: minced
        - id: flakes
          key: flakes
          name: Red pepper flakes
          allowance: to taste
          uses:
            - step: garlic
              share: 1
          optional: true
        - id: kale
          key: kale
          name: Lacinato kale bunch
          quantity:
            amount: 1
            unit: count
          uses:
            - step: greens
              share: 1
          plural: Lacinato kale bunches
          preparation: 'washed, tough stems removed and leaves chopped'
        - id: tomatoes
          key: tomatoes
          name: Crushed tomatoes
          quantity:
            amount: 1
            unit: can
          uses:
            - step: simmer
              share: 1
          packageSize:
            amount: 28
            unit: oz
        - id: beans
          key: beans
          name: Cooked canned giant white beans (butter or gigante)
          quantity:
            amount: 2
            unit: can
          uses:
            - step: simmer
              share: 1
          packageSize:
            amount: 15
            unit: oz
          preparation: rinsed and drained; not dry beans
        - id: oregano
          key: oregano
          name: Dried oregano
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: simmer
              share: 1
        - id: salt
          key: salt
          name: Salt
          allowance: to taste
          uses:
            - step: simmer
              share: 1
        - id: pepper
          key: pepper
          name: Black pepper
          allowance: to taste
          uses:
            - step: simmer
              share: 1
        - id: mozzarella
          key: mozzarella
          name: Mozzarella cheese
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: top
              share: 1
          preparation: shredded
        - id: parmesan
          key: parmesan
          name: Parmesan cheese
          quantity:
            amount: 0.3333333333333333
            unit: cup
          uses:
            - step: top
              share: 1
          preparation: grated
        - id: bread
          key: bread
          name: Crusty bread
          allowance: for serving
          uses:
            - step: serve
              share: 1
          optional: true
  steps:
    - id: base
      title: Heat oven and soften onion
      text: >-
        Heat the oven to 450°F. Use an oven-safe skillet and handles rated for
        that temperature, with room for all beans, tomatoes and kale without
        overflow. Heat {{ingredients}} over medium heat, adding onion to the
        warm oil. Cook about 8 minutes until softened.
    - id: garlic
      title: Add garlic
      text: >-
        Add {{ingredients}} and stir about 1 minute until fragrant; stop before
        garlic darkens.
    - id: greens
      title: Wilt kale
      text: >-
        Add {{ingredients}} in manageable handfuls and stir until the leaves
        collapse and start to soften. The subsequent simmer and bake continue
        cooking them; bright green alone is not a promise of tenderness.
    - id: simmer
      title: Simmer the bean base
      text: >-
        Stir in {{ingredients}}. Bring to a steady simmer and cook about 5
        minutes, stirring so the bottom does not stick; the canned beans should
        be hot and the tomato base saucy.
    - id: top
      title: Add the full cheese topping
      text: >-
        Distribute {{ingredients}} across the base. If the skillet is too full,
        transfer the hot base to a suitable oven-safe baking dish or divide
        between pans, dividing the full cheese amount rather than adding another
        dose.
    - id: bake
      title: Bake and rest
      text: >-
        Bake, beginning checks after 15 minutes, until the base is hot and
        bubbling through the center, the center reaches 165°F /74°C, and the
        cheese has golden spots, usually about 15–20 minutes for the original
        batch. If the top darkens before the center is hot, shield it loosely
        with foil and continue cooking. Use protected handles and rest 5
        minutes.
    - id: serve
      title: Serve
      text: 'Scoop into bowls and offer {{ingredients}} if desired.'
learning:
  focus: Coordinate a hot bean-and-kale base with a browned cheese topping
  outcome: Saucy white beans beneath the full mozzarella and Parmesan topping
  techniques:
    - temperature
    - seasoning
  before:
    - >-
      Use fully cooked canned beans, drained after rinsing. Dry gigante or
      butter beans require a separate complete cooking method before this
      recipe.
    - >-
      When scaling, divide the base between suitably rated pans with headroom
      and a similar depth; pan dimensions and baking time do not scale with the
      ingredient controls.
  checkpoints:
    - step: 6
      cue: >-
        The center base is hot and bubbling, measures 165°F /74°C, and the
        cheese develops golden spots.
      why: A fixed interval or surface color cannot establish the center condition.
  troubleshooting:
    - problem: Cheese darkens while the bean center is not bubbling
      cause: A deep or crowded pan heats its center more slowly
      fix: >-
        Shield the top loosely with foil and continue baking until the center is
        hot. Next time divide the full ingredient batch between pans with
        comparable depth rather than add cheese or force the timer.
  substitutions: []
  timing: >-
    Allow about 50–65 minutes including 15–20 minutes preparation, onion and
    garlic sautéing, kale wilting, a five-minute simmer, roughly 15–20 minutes
    baking and a five-minute rest. Heat the oven while preparing ingredients.
    Additional pans or serial oven loads extend elapsed time; center heat and
    cheese condition determine the bake finish.
  storage: >-
    Divide leftovers into shallow containers and refrigerate within 2 hours, or
    1 hour above 90°F /32°C, at 40°F /4°C or below. Use refrigerated leftovers
    within 3–4 days or freeze promptly. Reheat the portion served to 165°F /74°C
    throughout, checking several places including the center. Cover while
    reheating so the center heats before the cheese overbrowns. Do not leave a
    large pot out to cool overnight.
  sources:
    - title: USDA — cooling and reheating leftovers
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

White beans and kale sit beneath a full mozzarella–Parmesan topping in this tomato skillet bake. Drain the rinsed beans and soften the kale before baking; cheese browning alone cannot show that the center is hot. Keep the tomato base saucy enough to scoop and allow the written five-minute rest before serving.

## Directions

1. **Heat oven and soften onion:** Heat the oven to 450°F. Use an oven-safe skillet and handles rated for that temperature, with room for all beans, tomatoes and kale without overflow. Heat Extra-virgin olive oil and Yellow onion over medium heat, adding onion to the warm oil. Cook about 8 minutes until softened.
2. **Add garlic:** Add Garlic cloves and Red pepper flakes (if using) and stir about 1 minute until fragrant; stop before garlic darkens.
3. **Wilt kale:** Add Lacinato kale bunch in manageable handfuls and stir until the leaves collapse and start to soften. The subsequent simmer and bake continue cooking them; bright green alone is not a promise of tenderness.
4. **Simmer the bean base:** Stir in Crushed tomatoes, Cooked canned giant white beans (butter or gigante), Dried oregano, Salt, and Black pepper. Bring to a steady simmer and cook about 5 minutes, stirring so the bottom does not stick; the canned beans should be hot and the tomato base saucy.
5. **Add the full cheese topping:** Distribute Mozzarella cheese and Parmesan cheese across the base. If the skillet is too full, transfer the hot base to a suitable oven-safe baking dish or divide between pans, dividing the full cheese amount rather than adding another dose.
6. **Bake and rest:** Bake, beginning checks after 15 minutes, until the base is hot and bubbling through the center, the center reaches 165°F /74°C, and the cheese has golden spots, usually about 15–20 minutes for the original batch. If the top darkens before the center is hot, shield it loosely with foil and continue cooking. Use protected handles and rest 5 minutes.
7. **Serve:** Scoop into bowls and offer Crusty bread (if using) if desired.
