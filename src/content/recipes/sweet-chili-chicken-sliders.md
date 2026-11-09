---
miseId: a6c4ed6a-d3cf-4a47-9f6c-0e7c3301526e
title: Sweet Chili Chicken Sliders
role: main
vibe: comfort
difficulty: easy
cuisines:
  - Thai
  - American
occasions:
  - entertaining
  - game-day
  - weeknight
cookingMethods:
  - broil
flavorProfile:
  - sweet
  - spicy
  - savory
  - umami
prepTime: 15 min
cookTime: 15 min
totalTime: '30 min, plus 30 min marinating'
advancePrep:
  - marinate
servings: 12 pieces
pairsWith:
  - steamed-edamame
  - smashed-cucumber-salad
pairingNotes:
  steamed-edamame: Salty edamame to snack on alongside.
  smashed-cucumber-salad: 'Cool, garlicky cucumbers against the sweet heat.'
equipment:
  - sheet-pan
ingredients:
  - '--- Chicken and marinade ---'
  - 2 lb boneless skinless chicken thighs
  - 2 tbsp soy sauce
  - 1 tbsp sesame oil
  - '3 garlic cloves, minced'
  - '1 tsp fresh ginger, grated'
  - '--- Glaze ---'
  - 1/2 cup Thai sweet chili sauce
  - 1 tbsp soy sauce
  - 1 tbsp rice vinegar
  - '--- Rolls, slaw and mayo ---'
  - '12 Hawaiian rolls, split'
  - 1 Asian chopped salad kit
  - 1/4 cup mayonnaise
  - 1 tbsp Sriracha
  - '2 tbsp butter, melted'
  - 'sesame seeds, for topping'
  - 'fresh cilantro, for topping, chopped, optional'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
formula:
  version: 1
  yield:
    amount: 12
    unit: piece
  components:
    - id: chicken
      name: Chicken and marinade
      ingredients:
        - id: thighs
          key: thighs
          name: boneless skinless chicken thighs
          quantity:
            amount: 2
            unit: lb
          uses:
            - step: marinate
              share: 1
        - id: soy
          key: soy
          name: soy sauce
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: marinate
              share: 1
        - id: sesame-oil
          key: sesame-oil
          name: sesame oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: marinate
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: marinate
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: ginger
          key: ginger
          name: fresh ginger
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: marinate
              share: 1
          preparation: grated
    - id: glaze
      name: Glaze
      ingredients:
        - id: chili
          key: chili
          name: Thai sweet chili sauce
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: glaze
              share: 1
        - id: soy
          key: soy
          name: soy sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: glaze
              share: 1
        - id: vinegar
          key: vinegar
          name: rice vinegar
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: glaze
              share: 1
    - id: assembly
      name: 'Rolls, slaw and mayo'
      ingredients:
        - id: rolls
          key: rolls
          name: Hawaiian roll
          quantity:
            amount: 12
            unit: count
          uses:
            - step: assemble
              share: 1
          plural: Hawaiian rolls
          preparation: split
        - id: kit
          key: kit
          name: Asian chopped salad kit
          quantity:
            amount: 1
            unit: count
          uses:
            - step: slaw
              share: 1
          plural: Asian chopped salad kits
        - id: mayo
          key: mayo
          name: mayonnaise
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: mayo
              share: 1
        - id: sriracha
          key: sriracha
          name: Sriracha
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: mayo
              share: 1
        - id: butter
          key: butter
          name: butter
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: toast
              share: 1
          preparation: melted
        - id: sesame
          key: sesame
          name: sesame seeds
          allowance: for topping
          uses:
            - step: garnish
              share: 1
          role: garnish
        - id: cilantro
          key: cilantro
          name: fresh cilantro
          allowance: for topping
          uses:
            - step: garnish
              share: 1
          preparation: chopped
          optional: true
          role: garnish
  steps:
    - id: marinate
      title: Marinate the chicken
      text: >-
        Toss {{ingredients}} in a bowl. Cover and refrigerate for at least 30 minutes or up to 4
        hours.
    - id: glaze
      title: Mix the glaze
      text: 'Whisk {{ingredients}} in a small bowl.'
    - id: mayo
      title: Mix the mayo
      text: 'Stir {{ingredients}} together and refrigerate until serving.'
    - id: broil
      title: Broil the chicken
      text: >-
        Heat the broiler with a rack 6 inches from the heat. Lift the thighs from the marinade,
        shake off the excess and lay them flat on a sheet pan. Broil until charred in spots and
        165°F in the thickest part, 6 to 7 minutes per side.
    - id: lacquer
      title: Glaze the chicken
      text: >-
        Brush the hot chicken with all the glaze and broil until sticky and caramelized, 1 to 2
        minutes. Watch closely so it doesn't burn. Let the chicken rest 5 minutes.
    - id: toast
      title: Toast the rolls
      text: >-
        While the chicken rests, brush the cut sides of the rolls with {{ingredients}}. Broil cut
        side up on a clean pan until golden, 1 to 2 minutes.
    - id: slaw
      title: Dress the slaw
      text: 'Empty the {{ingredients}} into a bowl and toss with its dressing and toppings.'
    - id: slice
      title: Slice the chicken
      text: Slice the chicken into slider-size pieces.
    - id: assemble
      title: Build the sliders
      text: 'Spread the Sriracha mayo on the toasted {{ingredients}}. Fill with the chicken and slaw.'
    - id: garnish
      title: Garnish and serve
      text: 'Sprinkle with {{ingredients}} and serve.'
learning:
  techniques:
    - temperature
  substitutions:
    - ingredient: Sriracha
      alternative: 'Plain mayo, with Sriracha at the table'
      effect: Milder for kids. The sweet chili glaze still has a little heat.
    - ingredient: Asian chopped salad kit
      alternative: Shredded cabbage with bottled sesame dressing and crispy wonton strips
      effect: The same crunch and sesame flavor from separate parts.
  storage: 'Store the chicken, slaw and rolls separately. The chicken keeps 3 days in the fridge.'
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

Sticky, sweet and a little spicy, these sliders are made for game day. A soy, sesame and ginger marinade seasons the chicken thighs, and Thai sweet chili glaze goes on under the broiler at the end. Sriracha mayo, crunchy sesame slaw and buttery toasted Hawaiian rolls finish them.

## Directions

1. **Marinate the chicken:** Toss boneless skinless chicken thighs, soy sauce, sesame oil, garlic cloves, and fresh ginger in a bowl. Cover and refrigerate for at least 30 minutes or up to 4 hours.
2. **Mix the glaze:** Whisk Thai sweet chili sauce, soy sauce, and rice vinegar in a small bowl.
3. **Mix the mayo:** Stir mayonnaise and Sriracha together and refrigerate until serving.
4. **Broil the chicken:** Heat the broiler with a rack 6 inches from the heat. Lift the thighs from the marinade, shake off the excess and lay them flat on a sheet pan. Broil until charred in spots and 165°F in the thickest part, 6 to 7 minutes per side.
5. **Glaze the chicken:** Brush the hot chicken with all the glaze and broil until sticky and caramelized, 1 to 2 minutes. Watch closely so it doesn't burn. Let the chicken rest 5 minutes.
6. **Toast the rolls:** While the chicken rests, brush the cut sides of the rolls with butter. Broil cut side up on a clean pan until golden, 1 to 2 minutes.
7. **Dress the slaw:** Empty the Asian chopped salad kit into a bowl and toss with its dressing and toppings.
8. **Slice the chicken:** Slice the chicken into slider-size pieces.
9. **Build the sliders:** Spread the Sriracha mayo on the toasted Hawaiian rolls. Fill with the chicken and slaw.
10. **Garnish and serve:** Sprinkle with sesame seeds and fresh cilantro (if using) and serve.
