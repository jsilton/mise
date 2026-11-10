---
miseId: 0ac68da4-5c8b-48cd-9262-e199c6a51424
title: Paella Valenciana
origin: 'Valencia, Spain'
role: main
vibe: technical
difficulty: intermediate
prepTime: 30 min
cookTime: 1 hr 35 min
totalTime: 2 hr 5 min
cookingMethods:
  - saute
  - simmer
occasions:
  - entertaining
  - family-meal
  - weekend-project
flavorProfile:
  - savory
  - rich
  - aromatic
cuisines:
  - Spanish
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: good
equipment:
  - 42-45-cm-paella-pan
  - matched-gas-ring-or-even-wide-heat-source
  - kettle
pairsWith:
  - shaved-fennel-citrus-salad
  - everyday-arugula-salad
pairingNotes:
  shaved-fennel-citrus-salad: 'Crisp fennel and orange, a nod to Valencia.'
  everyday-arugula-salad: 'A simple, peppery salad beside the rich rice.'
source: Adapted from Turisme Comunitat Valenciana
sourceUrl: >-
  https://multimedia.comunitatvalenciana.com/02DE7ACEB70B406FB083C79314A85B50/doc/7791B45ACAB1455ABAB179442017C123/Paella_Valenciana_EN.pdf
scaling:
  mode: fixed
  reason: >-
    One four-portion batch uses a level 42–45 cm pan with even heat. Make additional complete pans
    for more diners. Piling twice the rice into this pan changes its depth and evaporation.
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: paella
      name: Paella Valenciana
      ingredients:
        - id: oil
          key: oil
          name: extra-virgin olive oil
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: brown
              share: 1
        - id: chicken
          key: chicken
          name: bone-in chicken thighs or legs
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: brown
              share: 1
          preparation: cut through the bone into small pieces and patted dry
        - id: rabbit
          key: rabbit
          name: bone-in rabbit
          quantity:
            amount: 3/4
            unit: lb
          uses:
            - step: brown
              share: 1
          preparation: cut into small pieces and patted dry
        - id: green-beans
          key: green-beans
          name: flat green beans (ferraura)
          quantity:
            amount: 7
            unit: oz
          uses:
            - step: beans
              share: 1
          preparation: trimmed and cut into 2-inch lengths
        - id: paprika
          key: paprika
          name: sweet paprika
          quantity:
            amount: 3/4
            unit: tsp
          uses:
            - step: sofrito
              share: 1
        - id: tomatoes
          key: tomatoes
          name: ripe tomato
          plural: ripe tomatoes
          quantity:
            amount: 2
            unit: count
          uses:
            - step: sofrito
              share: 1
          preparation: 'grated on a box grater, skins discarded'
        - id: garrofo
          key: garrofo
          name: fresh or frozen garrofó beans
          quantity:
            amount: 5
            unit: oz
          uses:
            - step: mark
              share: 1
          preparation: shelled
        - id: water
          key: water
          name: water
          quantity:
            amount: 5
            unit: cup
          uses:
            - step: mark
              share: 1
          preparation: to set the broth level
          role: cooking-water
        - id: water-more
          key: water
          name: water
          quantity:
            amount: 6
            unit: cup
          uses:
            - step: broth
              share: 1
          preparation: for simmering
          role: cooking-water
        - id: salt
          key: salt
          name: Diamond Crystal kosher salt
          quantity:
            amount: 18
            unit: g
          equivalents:
            - amount: 2
              unit: tbsp
          uses:
            - step: broth
              share: 1
          preparation: plus more to taste
        - id: saffron
          key: saffron
          name: saffron thread
          plural: saffron threads
          quantity:
            amount: 32
            unit: count
          uses:
            - step: saffron
              share: 1
        - id: rice
          key: rice
          name: Valencian round rice (Senia or Bahía)
          quantity:
            amount: 2
            unit: cup
          equivalents:
            - amount: 400
              unit: g
          uses:
            - step: rice
              share: 1
        - id: hot-water
          key: hot-water
          name: boiling water
          allowance: as needed
          uses:
            - step: cook
              share: 1
          role: cooking-water
  steps:
    - id: brown
      title: Brown the meat
      text: >-
        Set a 17- to 18-inch paella pan over a wide burner or paella ring so the whole base heats
        evenly. Warm {{ingredients}} in the pan over medium heat, spreading the meat in one layer.
        Cook, turning now and then, until golden all over, 20 to 30 minutes.
    - id: beans
      title: Cook the green beans
      text: >-
        Add {{ingredients}} and turn them in the oil until bright green and starting to soften, 3 to
        5 minutes. Push the meat and beans to the edge of the pan.
    - id: sofrito
      title: Make the sofrito
      text: >-
        Lower the heat to medium-low. Stir {{ingredients}} into the oil in the center of the pan,
        the paprika first and the tomato a few seconds later so the paprika doesn't burn. Cook,
        stirring, until the tomato is thick and no longer watery, 5 to 10 minutes.
    - id: mark
      title: Mark the broth level
      text: >-
        Add {{ingredients}}. Stand the handle of a metal spoon upright in the pan and note where the
        liquid reaches. The broth needs to cook back down to this mark before the rice goes in.
    - id: broth
      title: Simmer the broth
      text: >-
        Add {{ingredients}} and bring to a simmer. Cook uncovered until the broth has cooked down to
        the mark and the meat and garrofó are tender, 25 to 45 minutes. If the broth reaches the
        mark first, add a little boiling water and keep simmering. Taste and add more salt if
        needed. The broth should taste a little salty, because the rice soaks it up.
    - id: saffron
      title: Add the saffron
      text: >-
        Crush {{ingredients}} into a small cup and stir in a few spoonfuls of hot broth. Pour it
        back into the pan and bring the broth to a lively boil.
    - id: rice
      title: Spread the rice
      text: >-
        Scatter {{ingredients}} evenly over the boiling broth and spread it once so it lies in a
        flat, even layer. Do not stir it again.
    - id: cook
      title: Cook the rice
      text: >-
        Boil hard for 5 minutes, then over medium heat for 5 minutes, then over low heat until the
        broth is absorbed and the grains are tender with no chalky center, 5 to 8 minutes more. If
        the pan looks dry before the rice is done, sprinkle {{ingredients}} over the dry spots.
    - id: socarrat
      title: Toast the bottom
      text: >-
        For a crisp crust, turn the heat up for the last minute until the rice crackles and smells
        toasty. Take the pan off the heat right away if it smells acrid.
    - id: rest
      title: Rest and serve
      text: Let the paella rest off the heat for 5 minutes. Serve it straight from the pan.
ingredients:
  - 1/2 cup extra-virgin olive oil
  - '1 lb bone-in chicken thighs or legs, cut through the bone into small pieces and patted dry'
  - '3/4 lb bone-in rabbit, cut into small pieces and patted dry'
  - '7 oz flat green beans (ferraura), trimmed and cut into 2-inch lengths'
  - 3/4 tsp sweet paprika
  - '2 ripe tomatoes, grated on a box grater, skins discarded'
  - '5 oz fresh or frozen garrofó beans, shelled'
  - '5 cups water, to set the broth level'
  - '6 cups water, for simmering'
  - '18 g (2 tbsp) Diamond Crystal kosher salt, plus more to taste'
  - 32 saffron threads
  - 2 cups (400 g) Valencian round rice (Senia or Bahía)
  - 'boiling water, as needed'
servings: 4 portions
learning:
  techniques:
    - starch
    - temperature
  substitutions:
    - ingredient: Diamond Crystal kosher salt
      alternative: Morton kosher salt or fine salt
      effect: 'Weigh out the same 18 g, which is 1 tbsp. Both are denser than Diamond Crystal.'
    - ingredient: Bone-in rabbit
      alternative: Bone-in chicken thighs
      effect: >-
        Use the same weight, cut into small pieces. The paella is all chicken, a little richer and
        less gamey.
    - ingredient: Valencian round rice (Senia or Bahía)
      alternative: Bomba or Calasparra rice
      effect: >-
        These absorb more broth and stay firmer, so they take 18 to 20 minutes. Keep boiling water
        ready for dry spots. The grains come out more separate and a little less creamy.
    - ingredient: Fresh or frozen garrofó beans
      alternative: Frozen Fordhook lima beans
      effect: >-
        Use the same weight. Garrofó is a large Valencian lima bean, so frozen limas cook the same
        way.
    - ingredient: Flat green beans (ferraura)
      alternative: Romano or regular green beans
      effect: Regular green beans are thinner and a little less meaty.
  storage: Keeps 3 days in the fridge. Reheat in a covered skillet with a splash of water.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

This is paella as it is made in Valencia, with chicken, rabbit, flat green beans and garrofó, the big local lima bean. The broth builds in the pan from browned meat and tomato, then the rice cooks in a thin layer and is never stirred. Even heat across the whole pan matters more than anything else.

## Directions

1. **Brown the meat:** Set a 17- to 18-inch paella pan over a wide burner or paella ring so the whole base heats evenly. Warm the olive oil, chicken thighs or legs, and rabbit in the pan over medium heat, spreading the meat in one layer. Cook, turning now and then, until golden all over, 20 to 30 minutes.
2. **Cook the green beans:** Add the flat green beans and turn them in the oil until bright green and starting to soften, 3 to 5 minutes. Push the meat and beans to the edge of the pan.
3. **Make the sofrito:** Lower the heat to medium-low. Stir the sweet paprika and tomatoes into the oil in the center of the pan, the paprika first and the tomato a few seconds later so the paprika doesn't burn. Cook, stirring, until the tomato is thick and no longer watery, 5 to 10 minutes.
4. **Mark the broth level:** Add the fresh or frozen garrofó beans and 5 cups of the water. Stand the handle of a metal spoon upright in the pan and note where the liquid reaches. The broth needs to cook back down to this mark before the rice goes in.
5. **Simmer the broth:** Add the salt and 6 cups of the water and bring to a simmer. Cook uncovered until the broth has cooked down to the mark and the meat and garrofó are tender, 25 to 45 minutes. If the broth reaches the mark first, add a little boiling water and keep simmering. Taste and add more salt if needed. The broth should taste a little salty, because the rice soaks it up.
6. **Add the saffron:** Crush the saffron into a small cup and stir in a few spoonfuls of hot broth. Pour it back into the pan and bring the broth to a lively boil.
7. **Spread the rice:** Scatter the Valencian round rice evenly over the boiling broth and spread it once so it lies in a flat, even layer. Do not stir it again.
8. **Cook the rice:** Boil hard for 5 minutes, then over medium heat for 5 minutes, then over low heat until the broth is absorbed and the grains are tender with no chalky center, 5 to 8 minutes more. If the pan looks dry before the rice is done, sprinkle the boiling water over the dry spots.
9. **Toast the bottom:** For a crisp crust, turn the heat up for the last minute until the rice crackles and smells toasty. Take the pan off the heat right away if it smells acrid.
10. **Rest and serve:** Let the paella rest off the heat for 5 minutes. Serve it straight from the pan.
