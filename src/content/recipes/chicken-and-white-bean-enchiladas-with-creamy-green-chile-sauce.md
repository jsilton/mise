---
miseId: 321e7346-599d-49ec-9211-15bdeafd5522
title: Chicken and White Bean Enchiladas
difficulty: easy
cookingMethods:
  - bake
  - poach
  - no-cook
  - blend
occasions:
  - comfort-food
  - meal-prep
flavorProfile:
  - rich
cuisines:
  - Mexican
role: main
vibe: nutritious
prepTime: About 20–25 min active preparation with already-cooked chicken
cookTime: Start checking after 20–25 min baking; allow about 25–40 min
totalTime: 'About 50–70 min, including oven heating and brief serving rest'
servings: 8 pieces
pairsWith:
  - cilantro-lime-rice
  - queso-fundido-with-chorizo
  - roasted-sweet-potatoes
ingredients:
  - '--- Creamy green sauce ---'
  - 12 oz tomatillo salsa or enchilada sauce
  - 1/2 cup light sour cream or Greek yogurt
  - 1 can (4 oz) diced green chiles
  - '1/2 cup fresh cilantro, washed'
  - '--- Filled rolls ---'
  - '1 lb cooked shredded chicken, poached or rotisserie; cooled and stored safely if prepared ahead'
  - '1 can (15 oz) navy or cannellini beans, fully cooked canned beans, rinsed and drained'
  - 1 tsp ground cumin
  - 8 flour tortillas (8-inch)
  - '1 cup Mexican cheese blend, shredded'
  - '--- Optional garnish ---'
  - 'additional fresh cilantro, washed and chopped, as wanted for garnish, optional'
  - 'pickled red onions, as wanted for garnish, optional'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from Skinnytaste.com
sourceUrl: 'https://www.skinnytaste.com/chicken-and-white-bean-enchiladas-with/'
formula:
  version: 1
  yield:
    amount: 8
    unit: piece
  components:
    - id: sauce
      name: Creamy green sauce
      ingredients:
        - id: salsa
          key: salsa
          name: tomatillo salsa or enchilada sauce
          quantity:
            amount: 12
            unit: oz
          uses:
            - step: sauce
              share: 1
        - id: cream
          key: cream
          name: light sour cream or Greek yogurt
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: sauce
              share: 1
        - id: chiles
          key: chiles
          name: diced green chiles
          quantity:
            amount: 1
            unit: can
          uses:
            - step: sauce
              share: 1
          packageSize:
            amount: 4
            unit: oz
          plural: cans of diced green chiles
        - id: cilantro
          key: cilantro
          name: fresh cilantro
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: sauce
              share: 1
          preparation: washed
    - id: rolls
      name: Filled rolls
      ingredients:
        - id: chicken
          key: chicken
          name: cooked shredded chicken
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: fill
              share: 1
          preparation: poached or rotisserie; cooled and stored safely if prepared ahead
        - id: beans
          key: beans
          name: navy or cannellini beans
          quantity:
            amount: 1
            unit: can
          uses:
            - step: fill
              share: 1
          packageSize:
            amount: 15
            unit: oz
          plural: cans of navy or cannellini beans
          preparation: 'fully cooked canned beans, rinsed and drained'
        - id: cumin
          key: cumin
          name: ground cumin
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: fill
              share: 1
        - id: tortillas
          key: tortillas
          name: flour tortilla (8-inch)
          quantity:
            amount: 8
            unit: count
          uses:
            - step: assemble
              share: 1
          plural: flour tortillas (8-inch)
        - id: cheese
          key: cheese
          name: Mexican cheese blend
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: top
              share: 1
          preparation: shredded
    - id: finish
      name: Optional garnish
      ingredients:
        - id: cilantro
          key: cilantro
          name: additional fresh cilantro
          allowance: 'washed and chopped, as wanted for garnish'
          uses:
            - step: serve
              share: 1
          optional: true
        - id: onions
          key: onions
          name: pickled red onions
          allowance: as wanted for garnish
          uses:
            - step: serve
              share: 1
          optional: true
  steps:
    - id: sauce
      title: Blend sauce
      text: 'Preheat the oven to 375°F. Blend {{ingredients}} smooth in a blender suited to this cold sauce. The full measured salsa and dairy belong in this mixture; garnish cilantro is separate.'
    - id: fill
      title: Mix filling
      text: 'Toss {{ingredients}} with sauce from the blended batch. At the original eight-roll batch, use 1/4 cup blended sauce here; scale this sauce portion proportionally with the filling, not as an additional salsa or dairy dose.'
    - id: assemble
      title: Roll
      text: 'Use {{ingredients}}. At the original batch, spread 1/2 cup of the blended sauce on the bottom of a 9×13-inch baking dish, scaling that sauce portion proportionally. Divide all the filling evenly among all tortillas, roll and place seam-side down. Use additional or suitably smaller dishes for altered batches; preserve roll size and room for sauce rather than multiplying pan dimensions.'
    - id: top
      title: Top
      text: 'Pour all remaining blended sauce over the rolls, then cover with {{ingredients}}. The filling, bottom layer and topping together use the whole sauce once.'
    - id: bake
      title: Bake
      text: 'Bake at 375°F, starting to check after 20–25 minutes, until the center of the filling reaches 165°F / 74°C and the sauce is bubbling. Cover loosely with foil if the cheese browns before the center is hot; chilled filling may take longer.'
    - id: serve
      title: Finish
      text: 'Let stand briefly until manageable to portion, then garnish with {{ingredients}} if wanted. [Quick Pickled Red Onions](/mise/recipes/pickled-red-onions) are a separately prepared recipe. Serve all rolls; the original planning yield is eight enchiladas, one per serving with separately prepared sides.'
learning:
  focus: Reserve sauce and fill every tortilla before the casserole bake
  outcome: 'Filled rolls with creamy green sauce and a hot center, using the whole chicken-and-bean filling.'
  techniques:
    - gentle-proteins
  before:
    - 'Start with already-cooked poultry and fully cooked canned beans. Raw chicken poaching/rotisserie preparation is additional work, not part of the stated clock.'
    - 'The original sauce reservations are 1/4 cup in filling and 1/2 cup under rolls; scale these from the finished blended sauce, then use all remainder on top.'
    - Use the original 9×13-inch roll geometry as a reference; more rolls need suitable additional dishes and oven space.
  checkpoints:
    - step: 4
      cue: 'All sauce is accounted for in filling, base and topping.'
      why: 'At the original eight-roll batch, the 12 oz salsa is only one ingredient in the larger blended sauce.'
    - step: 5
      cue: Center filling 165°F and bubbling sauce are both checked.
      why: A browned cheese surface can precede a hot chilled filling center.
  troubleshooting:
    - problem: Cheese browns before the center heats
      cause: Filling started cold or the dish is crowded.
      fix: Cover loosely with foil and continue until the filling reaches 165°F; do not serve by surface color alone.
  substitutions:
    - ingredient: Light sour cream
      alternative: The listed Greek yogurt at the same listed dairy volume
      effect: Acidity and texture differ; preserve the full dairy measure.
    - ingredient: Navy beans
      alternative: The listed cannellini beans at the same listed canned quantity; each full can is 15 oz
      effect: Drain and rinse either; dried beans are not a direct substitute.
  timing: 'About 20–25 min active preparation with already-cooked chicken; Start checking after 20–25 min baking; allow about 25–40 min; About 50–70 min, including oven heating and brief serving rest. Planning ranges assume thawed poultry and do not include cooking separate side dishes.'
  storage: 'Refrigerate promptly in shallow covered containers at 40°F or below, within 2 hours (1 hour above 90°F). Use within 3–4 days, or freeze portions for later. Reheat hot leftovers to 165°F throughout. These handling limits do not promise unchanged texture.'
  sources:
    - title: Adapted from Skinnytaste.com
      url: 'https://www.skinnytaste.com/chicken-and-white-bean-enchiladas-with/'
    - title: FoodSafety.gov — Safe minimum cooking temperatures
      url: 'https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures'
    - title: USDA — Leftovers and food safety
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

The creamy green sauce uses prepared salsa, green chiles and all the listed sour cream or yogurt. Reserve sauce for the filling and dish before topping the rolls, and divide the full chicken-and-bean filling among all tortillas. Bubbling edges and brown cheese are useful cues, but check the center filling temperature as well.

## Directions

1. **Blend sauce:** Preheat the oven to 375°F. Blend tomatillo salsa or enchilada sauce, light sour cream or Greek yogurt, diced green chiles, and fresh cilantro smooth in a blender suited to this cold sauce. The full measured salsa and dairy belong in this mixture; garnish cilantro is separate.
2. **Mix filling:** Toss cooked shredded chicken, navy or cannellini beans, and ground cumin with sauce from the blended batch. At the original eight-roll batch, use 1/4 cup blended sauce here; scale this sauce portion proportionally with the filling, not as an additional salsa or dairy dose.
3. **Roll:** Use flour tortillas (8-inch). At the original batch, spread 1/2 cup of the blended sauce on the bottom of a 9×13-inch baking dish, scaling that sauce portion proportionally. Divide all the filling evenly among all tortillas, roll and place seam-side down. Use additional or suitably smaller dishes for altered batches; preserve roll size and room for sauce rather than multiplying pan dimensions.
4. **Top:** Pour all remaining blended sauce over the rolls, then cover with Mexican cheese blend. The filling, bottom layer and topping together use the whole sauce once.
5. **Bake:** Bake at 375°F, starting to check after 20–25 minutes, until the center of the filling reaches 165°F / 74°C and the sauce is bubbling. Cover loosely with foil if the cheese browns before the center is hot; chilled filling may take longer.
6. **Finish:** Let stand briefly until manageable to portion, then garnish with additional fresh cilantro (if using) and pickled red onions (if using) if wanted. [Quick Pickled Red Onions](/mise/recipes/pickled-red-onions) are a separately prepared recipe. Serve all rolls; the original planning yield is eight enchiladas, one per serving with separately prepared sides.
