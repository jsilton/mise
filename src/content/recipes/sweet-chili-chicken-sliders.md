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
totalTime: 'About 1 hr 5 min, including 30 min refrigerated marinating'
advancePrep:
  - marinate
servings: 12 pieces
pairsWith:
  - crockpot-mac-and-cheese
  - classic-guacamole
  - bbq-chicken-sliders
equipment:
  - sheet-pan
ingredients:
  - '--- Chicken and marinade ---'
  - '2 lb boneless skinless chicken thighs, raw; fresh or fully thawed'
  - 2 tbsp soy sauce
  - 1 tbsp sesame oil
  - '3 garlic cloves, peeled and minced'
  - '1 tsp fresh ginger, grated'
  - '--- Clean glaze ---'
  - 1/2 cup Thai sweet chili sauce
  - 1 tbsp soy sauce
  - 1 tbsp rice vinegar
  - '--- Rolls, slaw and mayo ---'
  - '12 Hawaiian rolls, split'
  - >-
    1 bag of chopped Asian-style salad kit, cabbage, crisp toppings and sesame
    dressing; use the complete kit, following its preparation label
  - 1/4 cup mayonnaise
  - 1 tbsp Sriracha
  - '2 tbsp butter, melted'
  - 'sesame seeds, as wanted for topping'
  - 'fresh cilantro, as wanted for topping, washed and chopped, optional'
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
          preparation: raw; fresh or fully thawed
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
          preparation: peeled and minced
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
      name: Clean glaze
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
            - step: toast
              share: 1
          plural: Hawaiian rolls
          preparation: split
        - id: kit
          key: kit
          name: bag of chopped Asian-style salad kit
          quantity:
            amount: 1
            unit: count
          uses:
            - step: slaw
              share: 1
          plural: bags of chopped Asian-style salad kit
          preparation: >-
            cabbage, crisp toppings and sesame dressing; use the complete kit,
            following its preparation label
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
          allowance: as wanted for topping
          uses:
            - step: assemble
              share: 1
          role: garnish
        - id: cilantro
          key: cilantro
          name: fresh cilantro
          allowance: as wanted for topping
          uses:
            - step: assemble
              share: 1
          preparation: washed and chopped
          optional: true
          role: garnish
  steps:
    - id: marinate
      title: Marinate cold
      text: >-
        Toss all {{ingredients}} together. Cover and refrigerate for 30 minutes,
        or up to 4 hours. Keep the separate glaze, mayo and slaw away from raw
        chicken and used utensils. Thaw frozen chicken in the refrigerator
        beforehand.
    - id: glaze
      title: Mix clean glaze
      text: >-
        Whisk all {{ingredients}} in a clean bowl and set aside for the cooked
        chicken. Keep this whole measured glaze separate from the used marinade.
    - id: mayo
      title: Mix mayo
      text: >-
        Use {{ingredients}} for the mayo. For the standard version, mix the full
        mayonnaise and Sriracha together. For a milder version, keep all the
        mayonnaise plain and offer the listed Sriracha separately or omit it.
        Refrigerate until assembly.
    - id: broil
      title: Broil chicken
      text: >-
        Use a broiler-safe metal sheet pan and the rack position allowed by the
        oven, about 6 inches below the element where permitted. Lift thighs from
        the marinade, shake off excess and discard the used marinade. Arrange in
        one layer without overlap; use more loads if needed. Start checking at
        6–7 minutes per side, turning as the surface browns, and continue until
        the thickest part of each thigh reaches 165°F / 74°C. Charred spots do
        not establish the center temperature. Transfer cooked thighs with clean
        utensils.
    - id: lacquer
      title: Glaze
      text: >-
        Brush all the clean glaze over the fully cooked chicken. Broil about 1–2
        minutes, watching closely, until the coating is sticky and lightly
        caramelized; remove before it burns. Use clean brushing/serving
        utensils.
    - id: toast
      title: Rest and toast rolls
      text: >-
        Rest the chicken for 5 minutes. Meanwhile, use all {{ingredients}}:
        brush the roll cut faces with the melted butter, put them cut-side up on
        a clean broiler-safe metal pan and watch for 1–2 minutes until golden.
        Remove promptly; toasting can require separate loads.
    - id: slaw
      title: Finish slaw
      text: >-
        Use the listed {{ingredients}} for the slaw, following the kit's
        preparation label. Toss all the cabbage with all the kit dressing and
        include all its crisp toppings at assembly. Keep ready-to-eat slaw away
        from raw-chicken surfaces.
    - id: assemble
      title: Divide and assemble
      text: >-
        Once the chicken has rested, divide all of it into one bun-sized portion
        for each measured roll. Spread all the mayo across the rolls, add the
        chicken and complete slaw, then add {{ingredients}} as wanted. Serve
        promptly; any Sriracha kept separate goes to the table rather than into
        a second mayo dose.
learning:
  focus: Glaze fully cooked chicken and protect crisp roll faces
  outcome: 'Cooked thighs with a sticky glaze, golden buttered rolls and crisp slaw.'
  techniques:
    - temperature
  before:
    - >-
      Marinate in the refrigerator. Allow at least 30 minutes for marinating in
      addition to preparation, broiling and resting; a longer marinade adds
      elapsed time.
    - >-
      Use the whole listed salad kit, including its dressing and toppings; bag
      sizes/composition vary, so choose one with the listed
      cabbage/crisp-topping/sesame-dressing components. No fixed package weight
      is assumed.
    - >-
      Use an oven-approved broiler position and broiler-safe metal pans, with
      chicken in one layer. The original twelve sliders use twelve rolls; at
      other scales follow the listed roll count and divide all the cooked
      chicken among them.
  checkpoints:
    - step: 4
      cue: Each thigh reaches 165°F / 74°C in the thickest part.
      why: Broiler browning can occur before the center is cooked.
    - step: 5
      cue: Glaze is sticky and lightly browned without broad burnt patches.
      why: >-
        The sweet glaze receives only a short final heat after chicken is
        cooked.
    - step: 6
      cue: Buttered cut faces are golden.
      why: >-
        The upward-facing cut surface receives the broiler heat; enriched rolls
        brown quickly.
  troubleshooting:
    - problem: Chicken or glaze scorches before the next clock check
      cause: >-
        Broiler strength, rack position or coating thickness gives too much
        direct heat.
      fix: >-
        Use a less intense position/setting allowed by the oven and keep
        checking the chicken endpoint. Watch glazing and toasting continuously;
        neither dark sauce nor black skin replaces 165°F.
  substitutions:
    - ingredient: Sriracha mayo
      alternative: >-
        Keep the full listed mayonnaise on the rolls and pass the listed
        Sriracha separately, or omit it for a milder serving.
      effect: >-
        Heat is adjustable without cutting the butter, sweet glaze, chicken or
        slaw; the Thai sweet chili sauce can still contain chile.
  timing: >-
    Allow about 1 hour 5 minutes from fresh or fully thawed chicken: 15 minutes
    preparation/assembly, 30 minutes refrigerated marinating, roughly 15 minutes
    initial broiling/glazing and 5 minutes rest. Some mayo/glaze/slaw work can
    overlap marinating, and roll toasting overlaps resting. Broiling and extra
    loads are active and can extend elapsed time. Up to 4-hour marinating and
    refrigerator thawing are additional advance time.
  storage: >-
    Store chicken, slaw, mayo and rolls separately. Refrigerate in shallow
    containers within 2 hours, or 1 hour above 90°F / 32°C, at 40°F / 4°C or
    below. Use cooked chicken within 3–4 days and reheat to 165°F / 74°C
    throughout before rebuilding sliders. Follow the salad kit's refrigerated
    use instructions; dressed slaw and assembled rolls lose crunch.
  sources:
    - title: FDA safe food handling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: USDA cooked leftovers
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

This slider gets its depth from a quick soy-sesame-garlic marinade that seasons the chicken before it hits the broiler. The sweet chili glaze goes on at the end for that sticky, lacquered finish. Don't skip the sriracha mayo - it bridges the sweet glaze and savory chicken. The store-bought Asian salad kit (cabbage, crispy wontons, sesame dressing) is a legit shortcut that adds crunch, freshness, and another layer of sesame flavor. Toast those Hawaiian rolls - the butter helps them stand up to the juicy chicken.
For kids, serve the heat on the side or reduce/omit the spicy elements.

## Directions

1. **Marinate cold:** Toss all boneless skinless chicken thighs, soy sauce, sesame oil, garlic cloves, and fresh ginger together. Cover and refrigerate for 30 minutes, or up to 4 hours. Keep the separate glaze, mayo and slaw away from raw chicken and used utensils. Thaw frozen chicken in the refrigerator beforehand.
2. **Mix clean glaze:** Whisk all Thai sweet chili sauce, soy sauce, and rice vinegar in a clean bowl and set aside for the cooked chicken. Keep this whole measured glaze separate from the used marinade.
3. **Mix mayo:** Use mayonnaise and Sriracha for the mayo. For the standard version, mix the full mayonnaise and Sriracha together. For a milder version, keep all the mayonnaise plain and offer the listed Sriracha separately or omit it. Refrigerate until assembly.
4. **Broil chicken:** Use a broiler-safe metal sheet pan and the rack position allowed by the oven, about 6 inches below the element where permitted. Lift thighs from the marinade, shake off excess and discard the used marinade. Arrange in one layer without overlap; use more loads if needed. Start checking at 6–7 minutes per side, turning as the surface browns, and continue until the thickest part of each thigh reaches 165°F / 74°C. Charred spots do not establish the center temperature. Transfer cooked thighs with clean utensils.
5. **Glaze:** Brush all the clean glaze over the fully cooked chicken. Broil about 1–2 minutes, watching closely, until the coating is sticky and lightly caramelized; remove before it burns. Use clean brushing/serving utensils.
6. **Rest and toast rolls:** Rest the chicken for 5 minutes. Meanwhile, use all Hawaiian rolls and butter: brush the roll cut faces with the melted butter, put them cut-side up on a clean broiler-safe metal pan and watch for 1–2 minutes until golden. Remove promptly; toasting can require separate loads.
7. **Finish slaw:** Use the listed bag of chopped Asian-style salad kit for the slaw, following the kit's preparation label. Toss all the cabbage with all the kit dressing and include all its crisp toppings at assembly. Keep ready-to-eat slaw away from raw-chicken surfaces.
8. **Divide and assemble:** Once the chicken has rested, divide all of it into one bun-sized portion for each measured roll. Spread all the mayo across the rolls, add the chicken and complete slaw, then add sesame seeds and fresh cilantro (if using) as wanted. Serve promptly; any Sriracha kept separate goes to the table rather than into a second mayo dose.
