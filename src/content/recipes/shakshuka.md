---
miseId: 288bd72f-73f5-48aa-9dc0-f8ce054dfc92
title: Shakshuka
difficulty: easy
cookingMethods:
  - saute
  - simmer
dietary:
  - vegetarian
  - dairy-free
occasions:
  - weekend-brunch
  - weeknight
  - comfort-food
flavorProfile:
  - savory
  - acidic
  - spicy
  - umami
cuisines:
  - Middle Eastern
  - Mediterranean
role: main
vibe: comfort
prepTime: 10 min
cookTime: 'About 25 min, longer if needed to set the eggs'
totalTime: 'About 35 min, plus any extra skillet batches'
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: poor
advancePrep:
  - make-ahead
equipment:
  - skillet
pairsWith:
  - tahini-sauce
ingredients:
  - '--- Shakshuka ---'
  - 2 tbsp olive oil
  - '1 medium yellow onion, diced'
  - '1 red bell pepper, stemmed, seeded and diced'
  - '4 garlic cloves, thinly sliced'
  - 1 tsp ground cumin
  - 1 tsp smoked paprika
  - 1/2 tsp ground coriander
  - '1/4 tsp cayenne pepper, or adjust to taste'
  - '1 can (28 oz) crushed tomatoes, with their juices'
  - 1 tsp sugar
  - 1 tsp kosher salt
  - '6 large eggs, refrigerated; pasteurized shell eggs for the soft-yolk option'
  - '1/4 cup fresh cilantro or parsley, washed and chopped'
  - '2 tbsp crumbled feta, optional'
  - 'crusty bread, for serving'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: main
      name: Shakshuka
      ingredients:
        - id: oil
          key: olive-oil
          name: olive oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: base
              share: 1
        - id: onion
          key: yellow-onion
          name: medium yellow onion
          quantity:
            amount: 1
            unit: count
          uses:
            - step: base
              share: 1
          plural: medium yellow onions
          preparation: diced
        - id: pepper
          key: red-bell-pepper
          name: red bell pepper
          quantity:
            amount: 1
            unit: count
          uses:
            - step: base
              share: 1
          plural: red bell peppers
          preparation: 'stemmed, seeded and diced'
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 4
            unit: count
          uses:
            - step: spices
              share: 1
          plural: garlic cloves
          preparation: thinly sliced
        - id: cumin
          key: ground-cumin
          name: ground cumin
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: spices
              share: 1
        - id: paprika
          key: smoked-paprika
          name: smoked paprika
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: spices
              share: 1
        - id: coriander
          key: ground-coriander
          name: ground coriander
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: spices
              share: 1
        - id: cayenne
          key: cayenne
          name: cayenne pepper
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: spices
              share: 1
          preparation: or adjust to taste
        - id: tomatoes
          key: crushed-tomatoes
          name: crushed tomatoes
          quantity:
            amount: 1
            unit: can
          uses:
            - step: sauce
              share: 1
          packageSize:
            amount: 28
            unit: oz
          preparation: with their juices
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: salt
          key: kosher-salt
          name: kosher salt
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: eggs
          key: eggs
          name: large egg
          quantity:
            amount: 6
            unit: count
          uses:
            - step: wells
              share: 1
          plural: large eggs
          preparation: refrigerated; pasteurized shell eggs for the soft-yolk option
        - id: herbs
          key: cilantro-or-parsley
          name: fresh cilantro or parsley
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: finish
              share: 1
          preparation: washed and chopped
        - id: feta
          key: feta
          name: crumbled feta
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: finish
              share: 1
          optional: true
        - id: bread
          key: crusty-bread
          name: crusty bread
          allowance: for serving
          uses:
            - step: finish
              share: 1
  steps:
    - id: base
      title: Soften vegetables
      text: >-
        Have {{ingredients}} ready. Warm the olive oil in a large 10–12-inch
        skillet with a lid over medium heat, then add the onion and pepper. Cook
        about 5–6 minutes until softened and the onion is translucent. For
        larger batches, divide the whole sauce and egg supplies proportionally
        among enough covered skillets; smaller batches need a suitably smaller
        pan to avoid a thin, quickly drying sauce.
    - id: spices
      title: Bloom spices
      text: >-
        Have {{ingredients}} ready. Add the cumin, paprika, coriander and
        cayenne first and stir for about 1 minute until fragrant, lowering the
        heat if they threaten to scorch. Add the sliced garlic and cook another
        30–45 seconds until fragrant.
    - id: sauce
      title: Reduce sauce
      text: >-
        Add {{ingredients}}. Bring to a gentle simmer and cook uncovered for
        about 10 minutes, stirring occasionally, until a spoon drawn through the
        sauce briefly reveals the pan. Continue until it is thick enough to
        cradle the eggs, rather than relying on the clock alone.
    - id: wells
      title: Add eggs
      text: >-
        Make one shallow well for each of the listed {{ingredients}}. Crack each
        egg into a small clean cup, then slide it into its well without letting
        shell fragments enter the sauce. Space the wells across the pan rather
        than crowding them together.
    - id: poach
      title: Cover and poach
      text: >-
        Cover, reduce to medium-low and begin checking at about 5 minutes. For
        ordinary shell eggs, continue until both whites and yolks are firm; the
        sauce and egg dish should reach 160°F / 71°C. The original 5–8-minute
        range is a first-check window, not a guaranteed endpoint. For the
        intentionally runny or jammy yolk option, use pasteurized shell eggs and
        check that the whites have set; this retains a softer texture and does
        not turn the clock into a safety guarantee.
    - id: finish
      title: Serve
      text: >-
        Take the skillet off the heat. Finish with {{ingredients}} and serve
        immediately. Omit the feta for a dairy-free preparation.
learning:
  focus: Reduce sauce before adding delicate eggs
  outcome: Egg whites set in separate wells above a thick sauce that remains moist.
  techniques:
    - gentle-proteins
    - temperature
  before:
    - >-
      Use a skillet with a well-fitting lid and enough surface area for one well
      per egg. Scale the complete sauce and eggs together; pan geometry does not
      multiply automatically.
    - >-
      Keep eggs refrigerated and prepare herbs with clean tools before handling
      shells. Select pasteurized shell eggs in advance for deliberately soft
      yolks.
    - >-
      Feta is an optional dairy finish. Without it, check bread/hummus labels as
      applicable for a dairy-free serving.
  checkpoints:
    - step: 3
      cue: A spoon briefly exposes the skillet through the thickened sauce.
      why: >-
        A thin sauce lets the whites spread, while over-reduction can scorch
        beneath the eggs.
    - step: 5
      cue: >-
        Ordinary eggs have firm whites and yolks; the dish reaches the measured
        endpoint.
      why: >-
        An opaque white alone does not establish a fully cooked yolk. The
        pasteurized soft-yolk option is a separate texture choice.
  troubleshooting:
    - problem: The sauce scorches while the egg tops stay unset
      cause: >-
        Heat is too high beneath a reduced sauce or the lid does not retain
        steam.
      fix: >-
        Lower the heat and cover properly. Do not stir through the eggs; finish
        the egg endpoint before serving. Burnt sauce cannot be repaired by
        mixing it through.
  timing: >-
    Allow about 35 minutes for the original main batch: 10 minutes preparation
    and about 25 minutes of softening, spices, simmering and egg cooking. Firm
    eggs can need longer. The distinct hummus version starts with a longer
    10–12-minute softening and 15-minute reduction, so allow roughly 45 minutes
    or longer; extra skillets/batches extend the schedule.
  storage: >-
    The egg-free tomato base can be made ahead for a 3-day refrigerator plan:
    promptly chill in shallow containers at 40°F / 4°C or below. Reheat it to
    165°F throughout and bring the separately reheated sauce briefly to a
    rolling boil before reducing to a simmer and adding fresh eggs. Cooked eggs
    are best freshly served; if keeping leftovers, divide cooked leftovers into
    shallow portions and refrigerate within 2 hours, or 1 hour above 90°F /
    32°C, at 40°F / 4°C or below. Use within 3–4 days or freeze promptly; reheat
    to 165°F / 74°C throughout, checking the center and more than one portion.
    Reheating will firm a previously soft yolk.
  sources:
    - title: FDA egg cooking and pasteurized egg choices
      url: >-
        https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety
    - title: USDA leftovers and reheated sauces
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
    - title: 'Shakshuka: cultural and sauce context'
      url: >-
        https://www.seriouseats.com/shakshuka-north-african-shirred-eggs-tomato-pepper-recipe
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Shakshuka brings together eggs and spiced tomato sauce in a dish with North African roots and a broad place in Middle Eastern cooking, including Israeli tables. Reduce the sauce enough to hold shallow egg wells, then cover gently so the whites set without scorching the bottom. Cilantro or parsley and optional feta finish the pan.

## Directions

1. **Soften vegetables:** Have olive oil, medium yellow onion, and red bell pepper ready. Warm the olive oil in a large 10–12-inch skillet with a lid over medium heat, then add the onion and pepper. Cook about 5–6 minutes until softened and the onion is translucent. For larger batches, divide the whole sauce and egg supplies proportionally among enough covered skillets; smaller batches need a suitably smaller pan to avoid a thin, quickly drying sauce.
2. **Bloom spices:** Have garlic cloves, ground cumin, smoked paprika, ground coriander, and cayenne pepper ready. Add the cumin, paprika, coriander and cayenne first and stir for about 1 minute until fragrant, lowering the heat if they threaten to scorch. Add the sliced garlic and cook another 30–45 seconds until fragrant.
3. **Reduce sauce:** Add crushed tomatoes, sugar, and kosher salt. Bring to a gentle simmer and cook uncovered for about 10 minutes, stirring occasionally, until a spoon drawn through the sauce briefly reveals the pan. Continue until it is thick enough to cradle the eggs, rather than relying on the clock alone.
4. **Add eggs:** Make one shallow well for each of the listed large eggs. Crack each egg into a small clean cup, then slide it into its well without letting shell fragments enter the sauce. Space the wells across the pan rather than crowding them together.
5. **Cover and poach:** Cover, reduce to medium-low and begin checking at about 5 minutes. For ordinary shell eggs, continue until both whites and yolks are firm; the sauce and egg dish should reach 160°F / 71°C. The original 5–8-minute range is a first-check window, not a guaranteed endpoint. For the intentionally runny or jammy yolk option, use pasteurized shell eggs and check that the whites have set; this retains a softer texture and does not turn the clock into a safety guarantee.
6. **Serve:** Take the skillet off the heat. Finish with fresh cilantro or parsley, crumbled feta (if using), and crusty bread and serve immediately. Omit the feta for a dairy-free preparation.

## Hummus and Cumin-Seed Version

For an original batch of four planned portions, this complete version uses 4 large eggs, ½ cup prepared hummus, 2 tablespoons olive oil, 1 large red bell pepper sliced into thin strips, 1 small yellow onion thinly sliced, 3 sliced garlic cloves, 1 teaspoon cumin seeds, 1 teaspoon smoked paprika, ¼ teaspoon cayenne, one 28-ounce can whole peeled tomatoes crushed by hand with its juices, 1 tablespoon tomato paste, salt and black pepper to taste, and chopped cilantro and crumbled feta as desired. Scale these supplies proportionally together. It uses no ground coriander, added sugar or bread supply.

Soften the pepper and onion in the oil over medium heat for about 10–12 minutes. Stir in the garlic, tomato paste, cumin seeds, paprika and cayenne and cook about 2 minutes until fragrant, lowering the heat if needed to avoid scorched garlic. Add the tomatoes and juices, simmer uncovered about 15 minutes until thick and season with the salt and pepper. Make one well per egg and use the covered egg-cooking and pasteurized soft-yolk choice above. Divide all the hummus among the portions, ladle the sauce and eggs on top, and finish with the cilantro and optional feta. This is a separate complete formula, rather than additional ingredients for the main sauce.
