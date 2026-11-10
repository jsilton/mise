---
miseId: e7786c03-2452-4088-b09f-c46653e259cc
title: Banh Mi
origin: Vietnam
difficulty: easy
cookingMethods:
  - grill
  - no-cook
occasions:
  - light-and-fresh
flavorProfile:
  - spicy
  - sweet
  - savory
  - acidic
  - umami
cuisines:
  - Vietnamese
role: main
vibe: nutritious
prepTime: '30 min, plus 2 hr marinating'
cookTime: 10 min
totalTime: '40 min, plus 2 hr marinating'
servings: 4 portions
pairsWith:
  - thai-mango-salad
pairingNotes:
  thai-mango-salad: 'A sour, crunchy salad beside the sandwiches.'
ingredients:
  - '--- Lemongrass pork ---'
  - 1/4 cup fish sauce
  - 2 tbsp sugar
  - 1 tbsp honey
  - '3 garlic cloves, minced'
  - '2 lemongrass stalks, white part only, finely minced'
  - '1 1/2 lb boneless pork butt, thinly sliced'
  - 'neutral oil, for the grill'
  - '--- Sandwiches ---'
  - '2 crusty baguettes, cut in half crosswise and split'
  - 'mayonnaise, for spreading'
  - 'Maggi seasoning, a few drops'
  - 'cucumber spears, for topping'
  - '[Pickled Carrots and Daikon](/mise/recipes/quick-pickled-carrots-and-daikon/), drained'
  - 'fresh cilantro sprigs, for topping'
  - '1 jalapeño, thinly sliced'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: poor
advancePrep:
  - marinate-overnight
source: Adapted from Food & Wine
sourceUrl: 'https://www.foodandwine.com/recipes/grilled-pork-banh-mi'
equipment:
  - grill
  - skewers-or-grill-basket
  - thin-probe-thermometer
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: pork
      name: Lemongrass pork
      ingredients:
        - id: fish-sauce
          key: fish-sauce
          name: fish sauce
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: marinate
              share: 1
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: marinate
              share: 1
        - id: honey
          key: honey
          name: honey
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: marinate
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          plural: garlic cloves
          quantity:
            amount: 3
            unit: count
          preparation: minced
          uses:
            - step: marinate
              share: 1
        - id: lemongrass
          key: lemongrass
          name: lemongrass stalk
          plural: lemongrass stalks
          quantity:
            amount: 2
            unit: count
          preparation: 'white part only, finely minced'
          uses:
            - step: marinate
              share: 1
        - id: pork
          key: pork
          name: boneless pork butt
          quantity:
            amount: 1.5
            unit: lb
          preparation: thinly sliced
          uses:
            - step: toss
              share: 1
        - id: grill-oil
          key: grill-oil
          name: neutral oil
          allowance: for the grill
          uses:
            - step: grill
              share: 1
    - id: sandwich
      name: Sandwiches
      ingredients:
        - id: bread
          key: bread
          name: crusty baguette
          plural: crusty baguettes
          quantity:
            amount: 2
            unit: count
          preparation: cut in half crosswise and split
          uses:
            - step: toast
              share: 1
        - id: mayo
          key: mayo
          name: mayonnaise
          allowance: for spreading
          uses:
            - step: dress
              share: 1
        - id: seasoning
          key: seasoning
          name: Maggi seasoning
          allowance: a few drops
          uses:
            - step: dress
              share: 1
        - id: cucumber
          key: cucumber
          name: cucumber spears
          allowance: for topping
          uses:
            - step: fill
              share: 1
        - id: pickles
          key: pickles
          name: '[Pickled Carrots and Daikon](/mise/recipes/quick-pickled-carrots-and-daikon/)'
          allowance: drained
          uses:
            - step: fill
              share: 1
        - id: cilantro
          key: cilantro
          name: fresh cilantro sprigs
          allowance: for topping
          uses:
            - step: fill
              share: 1
        - id: jalapeno
          key: jalapeno
          name: jalapeño
          plural: jalapeños
          quantity:
            amount: 1
            unit: count
          preparation: thinly sliced
          uses:
            - step: fill
              share: 1
  steps:
    - id: marinate
      title: Make the marinade
      text: 'Whisk {{ingredients}} together in a large bowl until the sugar dissolves.'
    - id: toss
      title: Coat the pork
      text: >-
        Toss the {{ingredients}} in the marinade until coated. Cover and refrigerate for at least 2
        hours or overnight.
    - id: pickles
      title: Make the pickles
      text: >-
        If you haven't already, make the pickled carrots and daikon while the pork marinates. They
        need at least 1 hour in the fridge.
    - id: grill
      title: Grill the pork
      text: >-
        Heat a grill to medium and oil the grates with {{ingredients}}. Lift the pork from the
        marinade, wipe off the excess and thread it onto skewers or spread it in a grill basket.
        Grill until browned and charred at the edges and cooked through, 3 to 4 minutes per side.
        Move it to a cooler spot if the sugar starts to blacken.
    - id: toast
      title: Toast the bread
      text: 'Lay the {{ingredients}} cut side down on the grill until warm and crisp, about 1 minute.'
    - id: dress
      title: Dress the bread
      text: 'Spread {{ingredients}} over the cut sides of the warm bread.'
    - id: fill
      title: Fill the sandwiches
      text: >-
        Pile the pork into the bread, then layer on {{ingredients}}. Serve right away, while the
        bread is crisp.
learning:
  techniques:
    - temperature
    - seasoning
  substitutions:
    - ingredient: Boneless pork butt
      alternative: Pork tenderloin
      effect: Leaner and milder. It cooks a minute or two faster.
    - ingredient: Maggi seasoning
      alternative: Soy sauce
      effect: 'Saltier and less savory, so use just a few drops.'
    - ingredient: Lemongrass stalks
      alternative: Lemongrass paste
      effect: Use 2 tbsp from a tube. The flavor is a little softer.
  storage: >-
    Grilled pork keeps 3 days in the fridge, apart from the bread and toppings. Reheat it in a hot
    skillet.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

This is the Saigon street sandwich: sweet, charred lemongrass pork in a crackly baguette with mayonnaise, a few drops of Maggi, cool cucumber, pickled carrots and daikon, cilantro and jalapeño. Slice the pork thin so the sugary marinade caramelizes before the meat dries out.

## Directions

1. **Make the marinade:** Whisk the fish sauce, sugar, honey, garlic, and lemongrass together in a large bowl until the sugar dissolves.
2. **Coat the pork:** Toss the pork butt in the marinade until coated. Cover and refrigerate for at least 2 hours or overnight.
3. **Make the pickles:** If you haven't already, make the pickled carrots and daikon while the pork marinates. They need at least 1 hour in the fridge.
4. **Grill the pork:** Heat a grill to medium and oil the grates with the oil. Lift the pork from the marinade, wipe off the excess and thread it onto skewers or spread it in a grill basket. Grill until browned and charred at the edges and cooked through, 3 to 4 minutes per side. Move it to a cooler spot if the sugar starts to blacken.
5. **Toast the bread:** Lay the crusty baguettes cut side down on the grill until warm and crisp, about 1 minute.
6. **Dress the bread:** Spread the mayonnaise and Maggi seasoning over the cut sides of the warm bread.
7. **Fill the sandwiches:** Pile the pork into the bread, then layer on the cucumber spears, [Pickled Carrots and Daikon](/mise/recipes/quick-pickled-carrots-and-daikon/), cilantro, and jalapeño. Serve right away, while the bread is crisp.
