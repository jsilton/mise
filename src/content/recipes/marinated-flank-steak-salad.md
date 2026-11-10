---
miseId: 0393c18d-711f-4a3d-8d8d-fec1ebea75f0
title: Marinated Flank Steak Salad
difficulty: easy
role: main
vibe: nutritious
prepTime: 20 min
cookTime: 10 min
totalTime: '40 min, plus 2 hr marinating'
servings: 3 portions
kb:
  disable:
    - kb.acid-metal-reactivity
cuisines:
  - American
cookingMethods:
  - marinate
  - sear
  - toss
dietary:
  - dairy-free
  - gluten-free-option
occasions:
  - weeknight
  - everyday
  - kid-friendly
flavorProfile:
  - acidic
  - bright
  - savory
  - clean
  - crispy
  - umami
seasons:
  - summer
  - year-round
nutritionalDensity: moderate
leftovers: poor
advancePrep:
  - marinate-overnight
  - dressing-ahead
equipment:
  - cast-iron-skillet
  - instant-read-thermometer
usesBase:
  - crispy-shallots
pairsWith:
  - crispy-smashed-potatoes
pairingNotes:
  crispy-smashed-potatoes: 'Hot, crisp potatoes turn the salad into dinner.'
ingredients:
  - '--- Steak and marinade ---'
  - 1 1/4 lb flank steak
  - 1/4 cup extra-virgin olive oil
  - 3 tbsp soy sauce
  - 1 tbsp Dijon mustard
  - '2 garlic cloves, minced'
  - 1 tbsp fresh lemon juice
  - 1 tbsp neutral oil
  - '--- Salad and toppings ---'
  - '1 large head of romaine, washed and torn'
  - '1 head of butter lettuce, washed and torn'
  - '1 English cucumber, sliced'
  - '1 avocado, diced'
  - '4 radishes, thinly shaved'
  - 1/4 cup toasted pepitas
  - '[crispy shallots](/mise/recipes/crispy-shallots), for topping'
  - '--- Lemon vinaigrette ---'
  - 1/3 cup extra-virgin olive oil
  - 3 tbsp fresh lemon juice
  - 1 tsp Dijon mustard
  - '1 small shallot, finely minced'
  - 1/2 tsp kosher salt
  - 1/4 tsp black pepper
formula:
  version: 1
  yield:
    amount: 3
    unit: portion
  components:
    - id: steak
      name: Steak and marinade
      ingredients:
        - id: flank
          key: flank
          name: flank steak
          quantity:
            amount: 1 1/4
            unit: lb
          uses:
            - step: score
              share: 1
        - id: olive-oil
          key: olive-oil
          name: extra-virgin olive oil
          quantity:
            amount: 1/4
            unit: cup
          role: discarded
          uses:
            - step: marinate
              share: 1
        - id: soy
          key: soy
          name: soy sauce
          quantity:
            amount: 3
            unit: tbsp
          role: discarded
          uses:
            - step: marinate
              share: 1
        - id: mustard
          key: mustard
          name: Dijon mustard
          quantity:
            amount: 1
            unit: tbsp
          role: discarded
          uses:
            - step: marinate
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 2
            unit: count
          plural: garlic cloves
          preparation: minced
          role: discarded
          uses:
            - step: marinate
              share: 1
        - id: lemon
          key: lemon
          name: fresh lemon juice
          quantity:
            amount: 1
            unit: tbsp
          role: discarded
          uses:
            - step: marinate
              share: 1
        - id: sear-oil
          key: sear-oil
          name: neutral oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sear
              share: 1
    - id: salad
      name: Salad and toppings
      ingredients:
        - id: romaine
          key: romaine
          name: large head of romaine
          quantity:
            amount: 1
            unit: count
          plural: large heads of romaine
          preparation: washed and torn
          uses:
            - step: greens
              share: 1
        - id: butter-lettuce
          key: butter-lettuce
          name: head of butter lettuce
          quantity:
            amount: 1
            unit: count
          plural: heads of butter lettuce
          preparation: washed and torn
          uses:
            - step: greens
              share: 1
        - id: cucumber
          key: cucumber
          name: English cucumber
          quantity:
            amount: 1
            unit: count
          plural: English cucumbers
          preparation: sliced
          uses:
            - step: assemble
              share: 1
        - id: avocado
          key: avocado
          name: avocado
          quantity:
            amount: 1
            unit: count
          plural: avocados
          preparation: diced
          uses:
            - step: assemble
              share: 1
        - id: radish
          key: radish
          name: radish
          quantity:
            amount: 4
            unit: count
          plural: radishes
          preparation: thinly shaved
          uses:
            - step: assemble
              share: 1
        - id: pepitas
          key: pepitas
          name: toasted pepitas
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: finish
              share: 1
        - id: crispy-shallots
          key: crispy-shallots
          name: '[crispy shallots](/mise/recipes/crispy-shallots)'
          allowance: for topping
          role: garnish
          uses:
            - step: finish
              share: 1
    - id: dressing
      name: Lemon vinaigrette
      ingredients:
        - id: olive-oil
          key: olive-oil
          name: extra-virgin olive oil
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: dressing
              share: 1
        - id: lemon
          key: lemon
          name: fresh lemon juice
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: dressing
              share: 1
        - id: mustard
          key: mustard
          name: Dijon mustard
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: dressing
              share: 1
        - id: shallot
          key: shallot
          name: small shallot
          quantity:
            amount: 1
            unit: count
          plural: small shallots
          preparation: finely minced
          uses:
            - step: dressing
              share: 1
        - id: kosher-salt
          key: kosher-salt
          name: kosher salt
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: dressing
              share: 1
        - id: pepper
          key: pepper
          name: black pepper
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: dressing
              share: 1
  steps:
    - id: score
      title: Score the steak
      text: >-
        Lightly score both sides of the {{ingredients}} in a diamond pattern, about 1/8 inch deep,
        so it doesn't curl in the pan.
    - id: marinate
      title: Marinate
      text: >-
        Whisk {{ingredients}} in a shallow dish or zip-top bag. Add the steak, turn to coat, seal
        and refrigerate for 2 to 12 hours.
    - id: dressing
      title: Make the vinaigrette
      text: >-
        While the steak marinates, shake {{ingredients}} in a jar until creamy. Refrigerate until
        needed.
    - id: sear
      title: Sear the steak
      text: >-
        Lift the steak from the marinade, discard the marinade and pat the steak dry. Heat a
        cast-iron skillet over high heat until it smokes. Add {{ingredients}} and lay in the steak.
        Sear without moving it until deeply browned and the thickest part reaches 130°F for
        medium-rare, 4 to 5 minutes per side.
    - id: slice
      title: Rest and slice
      text: >-
        Rest the steak on a cutting board for 10 minutes. Slice it as thinly as you can across the
        grain, holding the knife at a 45-degree angle.
    - id: greens
      title: Dress the greens
      text: 'Toss the leaves of the {{ingredients}} with half the vinaigrette in a large serving bowl.'
    - id: assemble
      title: Top the salad
      text: >-
        Arrange {{ingredients}} over the greens. Lay the steak on top and drizzle with the rest of
        the vinaigrette.
    - id: finish
      title: Finish
      text: 'Scatter {{ingredients}} over the top and serve right away, while they''re still crisp.'
learning:
  techniques:
    - browning
    - temperature
    - cold-preparation
  substitutions:
    - ingredient: Soy sauce
      alternative: Gluten-free tamari
      effect: Tastes the same and makes the dish gluten-free.
    - ingredient: Neutral oil
      alternative: Shallot oil
      effect: 'The oil left from making crispy shallots gives the crust a sweet, toasty flavor.'
  storage: Store leftover steak apart from the salad for up to 3 days. Dressed greens don't keep.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

A weeknight steak salad: flank steak marinated in soy, Dijon and lemon, seared hard in cast iron and sliced thin over two lettuces with a lemon-shallot vinaigrette. Slicing thinly across the grain keeps flank steak tender, and pepitas and crispy shallots add crunch.

## Directions

1. **Score the steak:** Lightly score both sides of the flank steak in a diamond pattern, about 1/8 inch deep, so it doesn't curl in the pan.
2. **Marinate:** Whisk the soy sauce, garlic, 1/4 cup of the olive oil, 1 tbsp of the Dijon mustard, and 1 tbsp of the lemon juice in a shallow dish or zip-top bag. Add the steak, turn to coat, seal and refrigerate for 2 to 12 hours.
3. **Make the vinaigrette:** While the steak marinates, shake the shallot, salt, pepper, 1/3 cup of the olive oil, 3 tbsp of the lemon juice, and 1 tsp of the Dijon mustard in a jar until creamy. Refrigerate until needed.
4. **Sear the steak:** Lift the steak from the marinade, discard the marinade and pat the steak dry. Heat a cast-iron skillet over high heat until it smokes. Add the neutral oil and lay in the steak. Sear without moving it until deeply browned and the thickest part reaches 130°F for medium-rare, 4 to 5 minutes per side.
5. **Rest and slice:** Rest the steak on a cutting board for 10 minutes. Slice it as thinly as you can across the grain, holding the knife at a 45-degree angle.
6. **Dress the greens:** Toss the leaves of the romaine and butter lettuce with half the vinaigrette in a large serving bowl.
7. **Top the salad:** Arrange the English cucumber, avocado, and radishes over the greens. Lay the steak on top and drizzle with the rest of the vinaigrette.
8. **Finish:** Scatter the pepitas and [crispy shallots](/mise/recipes/crispy-shallots) over the top and serve right away, while they're still crisp.
