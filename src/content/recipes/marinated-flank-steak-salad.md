---
miseId: 0393c18d-711f-4a3d-8d8d-fec1ebea75f0
title: Marinated Flank Steak Salad
difficulty: easy
role: main
vibe: nutritious
prepTime: 20 min
cookTime: 10 min or longer
totalTime: 2 hr 40 min minimum
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
usesBase:
  - crispy-shallots
pairsWith:
  - crispy-shallots
ingredients:
  - '--- Steak and Marinade ---'
  - 1 1/4 lb flank steak
  - '1/4 cup extra-virgin olive oil, for the marinade'
  - '3 tbsp soy sauce, or gluten-free tamari'
  - 1 tbsp Dijon mustard
  - '2 garlic cloves, minced'
  - 1 tbsp fresh lemon juice
  - '1 tbsp neutral cooking oil, or shallot oil, for searing'
  - '--- Salad and Toppings ---'
  - '1 large head romaine lettuce, washed and torn'
  - '1 head butter lettuce, washed and torn'
  - '1 English cucumber, washed and sliced'
  - '1 avocado, washed before cutting, then diced'
  - '4 radishes, washed and shaved thinly'
  - 1/4 cup toasted pepitas
  - '[Crispy Shallots](/mise/recipes/crispy-shallots), for topping'
  - '--- Lemon Vinaigrette ---'
  - 1/3 cup extra-virgin olive oil
  - 3 tbsp fresh lemon juice
  - 1 tsp Dijon mustard
  - '1 small shallot, finely minced'
  - 1/2 tsp kosher salt
  - 1/4 tsp freshly ground black pepper
formula:
  version: 1
  yield:
    amount: 3
    unit: portion
  components:
    - id: steak
      name: Steak and Marinade
      ingredients:
        - id: flank
          key: flank
          name: flank steak
          quantity:
            amount: 1.25
            unit: lb
          uses:
            - step: sear
              share: 1
        - id: olive-oil
          key: olive-oil
          name: extra-virgin olive oil
          quantity:
            amount: 1/4
            unit: cup
          role: discarded
          preparation: for the marinade
          uses:
            - step: marinate
              share: 1
        - id: soy
          key: soy
          name: soy sauce
          quantity:
            amount: 3
            unit: tbsp
          preparation: or gluten-free tamari
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
          name: neutral cooking oil
          quantity:
            amount: 1
            unit: tbsp
          preparation: 'or shallot oil, for searing'
          uses:
            - step: sear
              share: 1
    - id: salad
      name: Salad and Toppings
      ingredients:
        - id: romaine
          key: romaine
          name: large head romaine lettuce
          quantity:
            amount: 1
            unit: count
          plural: large heads romaine lettuce
          preparation: washed and torn
          uses:
            - step: assemble
              share: 1
        - id: butter-lettuce
          key: butter-lettuce
          name: head butter lettuce
          quantity:
            amount: 1
            unit: count
          plural: heads butter lettuce
          preparation: washed and torn
          uses:
            - step: assemble
              share: 1
        - id: cucumber
          key: cucumber
          name: English cucumber
          quantity:
            amount: 1
            unit: count
          plural: English cucumbers
          preparation: washed and sliced
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
          preparation: 'washed before cutting, then diced'
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
          preparation: washed and shaved thinly
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
          name: '[Crispy Shallots](/mise/recipes/crispy-shallots)'
          allowance: for topping
          role: garnish
          uses:
            - step: finish
              share: 1
    - id: dressing
      name: Lemon Vinaigrette
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
          name: freshly ground black pepper
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: dressing
              share: 1
  steps:
    - id: score
      title: Score the Steak
      text: >-
        Lightly score both sides of {{name:steak.flank}} in a shallow diagonal
        diamond pattern, about 1/8 inch deep. Keep the cuts superficial; do not
        cut through the steak. Use separate equipment for the raw meat and
        ready-to-eat salad.
    - id: marinate
      title: Marinate
      text: >-
        Whisk {{ingredients}} in a nonreactive dish or food-storage bag and add
        the steak. Seal and refrigerate for at least 2 hours, or up to 12 hours.
    - id: dry
      title: Dry the Surface
      text: >-
        Take the steak from the refrigerator when ready to cook. Lift it from
        the marinade and pat the surface dry. Discard the used marinade; keep it
        away from the dressing and salad.
    - id: dressing
      title: Make the Vinaigrette
      text: >-
        Shake or whisk {{ingredients}} together. Keep the washed salad and
        toppings cold while the meat cooks.
    - id: sear
      title: Sear the Steak
      text: >-
        Use {{ingredients}}: heat the oil in a cast-iron skillet over
        medium-high to high heat until shimmering. Lay the steak flat without
        crowding. Begin checking around 4–5 minutes per side for the original
        cut, adjusting heat if the surface is burning; continue until the
        thickest part reaches at least 145°F before removing it. For more
        steaks, use additional suitable pans or complete cooking batches,
        dividing all the measured searing oil among them. Cut thickness and
        starting temperature change the clock.
    - id: rest
      title: Rest
      text: >-
        Transfer to a clean cutting board and let the steak rest for 10 minutes,
        exceeding the minimum 3-minute rest after the 145°F endpoint. Keep the
        meat and cooked juices separate from the raw-meat equipment.
    - id: slice
      title: Slice
      text: >-
        Slice as thinly as possible across the grain with the carving knife
        angled about 45 degrees. Keep the salad cold until assembly.
    - id: assemble
      title: Assemble
      text: >-
        Bring {{ingredients}} to the serving bowl. Toss both lettuces with half
        of the prepared vinaigrette. Arrange the cucumber, avocado and radishes
        over the greens, add all the sliced steak, and drizzle with all the
        remaining vinaigrette.
    - id: finish
      title: Finish
      text: >-
        Scatter {{ingredients}} over the top just before serving so the toppings
        stay crisp.
learning:
  focus: Keeping a steak salad crisp while cooking and slicing flank steak.
  outcome: >-
    Thin beef slices lie across crisp, lightly dressed leaves, with the full
    vinaigrette and crunchy toppings distributed through the salad.
  techniques:
    - browning
    - temperature
    - cold-preparation
  before:
    - >-
      Allow the full 2–12-hour refrigerator marinade; have separately prepared
      crispy shallots ready, or allow the linked recipe’s additional cooking and
      cooling time.
    - >-
      Choose a skillet that holds the steak flat. Several steaks need enough
      pans or successive fully cooked batches and proportional shares of the
      listed searing oil; temperatures and cut thickness do not scale.
    - >-
      Keep raw meat and used marinade away from the washed salad, dressing,
      serving board and toppings. Keep the marinade olive oil, dressing olive
      oil and searing oil separate.
  checkpoints:
    - step: 3
      cue: >-
        The steak is surface-dry and the used marinade is set aside for
        disposal.
      why: >-
        The marinade has contacted raw beef; it does not belong in the
        ready-to-eat dressing.
    - step: 5
      cue: A browned surface accompanies at least 145°F in the thickest part.
      why: 'Time, crust and pinkness alone do not establish the whole-cut endpoint.'
    - step: 8
      cue: >-
        Half the prepared vinaigrette coats the leaves and the entire remainder
        goes over the assembled salad.
      why: >-
        This proportional split works at smaller and larger ingredient scales
        without losing the dressing.
  troubleshooting:
    - problem: The exterior darkens before the center reaches 145°F.
      cause: >-
        The heat is too high for the cut’s thickness or the seasoned marinade
        remains wet on its surface.
      fix: >-
        Lower the heat and continue cooking to the measured endpoint. Dry the
        next steak carefully rather than cooking it to a lower temperature.
    - problem: The salad becomes limp.
      cause: >-
        The leaves were wet, the dressing sat on them too long or hot meat was
        added immediately.
      fix: >-
        Dry washed leaves, retain the meat’s ten-minute rest and dress
        immediately before serving. Already wilted dressed lettuce cannot be
        made crisp again.
  substitutions:
    - ingredient: Soy sauce
      alternative: Gluten-free tamari
      effect: Check the product label; the measured marinade amount remains the same.
    - ingredient: Neutral searing oil
      alternative: Oil from separately prepared crispy shallots
      effect: >-
        Use the measured searing amount, keeping it distinct from both olive-oil
        supplies.
    - ingredient: Kosher salt
      alternative: The same crystal type for repeatable dressing
      effect: >-
        The listed half-teaspoon does not establish an equal-volume fine-salt
        replacement.
  timing: >-
    Plan at least 2 hours 40 minutes from scratch: 20 minutes preparation, the
    minimum 2-hour refrigerator marinade, about 10 minutes or longer to cook and
    10 minutes rest. Salad and dressing work can overlap the marinade. Cook the
    surface-dried steak directly from the refrigerator; the endpoint may extend
    searing. A 12-hour marinade, extra batches or making crispy shallots adds
    elapsed time.
  storage: >-
    Serve immediately after dressing. Refrigerate cooked beef and undressed
    salad/dressing separately at 40°F or below within 2 hours, or 1 hour above
    90°F; use cooked beef within 3–4 days. Reheat saved beef to 165°F if serving
    it hot. Dressed leaves and crisp toppings lose texture, so assemble only the
    portions being eaten.
  sources:
    - title: 'FDA: Safe Food Handling'
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: 'FoodSafety.gov: Safe Minimum Internal Temperatures'
      url: >-
        https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures
    - title: 'FoodSafety.gov: Cold Food Storage Chart'
      url: 'https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts'
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Flank steak’s long grain makes the direction of slicing especially important. This soy-Dijon and lemon version keeps a rich vinaigrette, pepitas and crisp shallots around the sliced beef. Dry the marinated surface before searing, keep the salad away from raw meat and marinade, and dress the leaves just before serving.

## Directions

1. **Score the Steak:** Lightly score both sides of flank steak in a shallow diagonal diamond pattern, about 1/8 inch deep. Keep the cuts superficial; do not cut through the steak. Use separate equipment for the raw meat and ready-to-eat salad.
2. **Marinate:** Whisk extra-virgin olive oil, soy sauce, Dijon mustard, garlic cloves, and fresh lemon juice in a nonreactive dish or food-storage bag and add the steak. Seal and refrigerate for at least 2 hours, or up to 12 hours.
3. **Dry the Surface:** Take the steak from the refrigerator when ready to cook. Lift it from the marinade and pat the surface dry. Discard the used marinade; keep it away from the dressing and salad.
4. **Make the Vinaigrette:** Shake or whisk extra-virgin olive oil, fresh lemon juice, Dijon mustard, small shallot, kosher salt, and freshly ground black pepper together. Keep the washed salad and toppings cold while the meat cooks.
5. **Sear the Steak:** Use flank steak and neutral cooking oil: heat the oil in a cast-iron skillet over medium-high to high heat until shimmering. Lay the steak flat without crowding. Begin checking around 4–5 minutes per side for the original cut, adjusting heat if the surface is burning; continue until the thickest part reaches at least 145°F before removing it. For more steaks, use additional suitable pans or complete cooking batches, dividing all the measured searing oil among them. Cut thickness and starting temperature change the clock.
6. **Rest:** Transfer to a clean cutting board and let the steak rest for 10 minutes, exceeding the minimum 3-minute rest after the 145°F endpoint. Keep the meat and cooked juices separate from the raw-meat equipment.
7. **Slice:** Slice as thinly as possible across the grain with the carving knife angled about 45 degrees. Keep the salad cold until assembly.
8. **Assemble:** Bring large head romaine lettuce, head butter lettuce, English cucumber, avocado, and radishes to the serving bowl. Toss both lettuces with half of the prepared vinaigrette. Arrange the cucumber, avocado and radishes over the greens, add all the sliced steak, and drizzle with all the remaining vinaigrette.
9. **Finish:** Scatter toasted pepitas and [Crispy Shallots](/mise/recipes/crispy-shallots) over the top just before serving so the toppings stay crisp.
