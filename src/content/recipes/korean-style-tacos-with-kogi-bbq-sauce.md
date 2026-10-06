---
miseId: 54c04db9-baa3-438f-86b1-9c71d33180a9
title: Korean Style Tacos
difficulty: easy
cookingMethods:
  - no-cook
  - saute
  - toast
occasions:
  - weeknight
flavorProfile:
  - spicy
  - sweet
  - savory
  - acidic
  - umami
cuisines:
  - Korean
  - Mexican
role: main
prepTime: 15 min
cookTime: 'About 5–10 min from cooked meat, longer with extra loads'
totalTime: 'About 1 hr 20 min, including the cucumber chill'
advancePrep:
  - components-ahead
  - make-ahead-sauce
pairsWith:
  - mexican-street-corn-salad
  - roasted-sweet-potatoes
  - guacamole
ingredients:
  - '--- Quick cucumber pickle ---'
  - '1 large English cucumber, washed and sliced paper-thin'
  - 2 tbsp rice vinegar
  - 1/2 tsp sugar
  - '1/2 tsp fresh chili pepper, washed and finely minced'
  - 'sea salt, a generous pinch'
  - '--- Kogi sauce ---'
  - 2 tbsp gochujang
  - 3 tbsp granulated sugar
  - 2 tbsp soy sauce
  - 1 tsp rice vinegar
  - 2 tsp toasted sesame oil
  - '--- Meat and tortillas ---'
  - >-
    1 lb cooked [Pulled Pork](/mise/recipes/pulled-pork) or cooked shredded chicken, fully cooked
    before starting; chilled leftovers must be handled within their storage limit
  - 12 corn tortillas
  - 'scallions, as wanted for topping, washed and sliced'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: poor
servings: 4 portions
source: Adapted from Steamykitchen.com
sourceUrl: 'http://steamykitchen.com/4474-korean-style-tacos-with-kogi-bbq-sauce.html'
equipment:
  - large-skillet
  - covered-pickle-container
  - food-thermometer
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: pickle
      name: Quick cucumber pickle
      ingredients:
        - id: cucumber
          key: cucumber
          name: large English cucumber
          plural: large English cucumbers
          quantity:
            amount: 1
            unit: count
          preparation: washed and sliced paper-thin
          uses:
            - step: pickle
              share: 1
        - id: vinegar
          key: vinegar
          name: rice vinegar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: pickle
              share: 1
        - id: sugar
          key: sugar
          name: sugar
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: pickle
              share: 1
        - id: chili
          key: chili
          name: fresh chili pepper
          quantity:
            amount: 1/2
            unit: tsp
          preparation: washed and finely minced
          uses:
            - step: pickle
              share: 1
        - id: salt
          key: salt
          name: sea salt
          allowance: a generous pinch
          uses:
            - step: pickle
              share: 1
    - id: sauce
      name: Kogi sauce
      ingredients:
        - id: gochujang
          key: gochujang
          name: gochujang
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: sugar
          key: sugar
          name: granulated sugar
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: soy
          key: soy
          name: soy sauce
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: vinegar
          key: vinegar
          name: rice vinegar
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: sesame-oil
          key: sesame-oil
          name: toasted sesame oil
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: sauce
              share: 1
    - id: tacos
      name: Meat and tortillas
      ingredients:
        - id: meat
          key: meat
          name: 'cooked [Pulled Pork](/mise/recipes/pulled-pork) or cooked shredded chicken'
          quantity:
            amount: 1
            unit: lb
          preparation: >-
            fully cooked before starting; chilled leftovers must be handled within their storage
            limit
          uses:
            - step: heat
              share: 1
        - id: tortillas
          key: tortillas
          name: corn tortilla
          plural: corn tortillas
          quantity:
            amount: 12
            unit: count
          uses:
            - step: warm
              share: 1
        - id: scallions
          key: scallions
          name: scallions
          allowance: as wanted for topping
          preparation: washed and sliced
          role: garnish
          uses:
            - step: assemble
              share: 1
  steps:
    - id: pickle
      title: Start the cucumber pickle
      text: >-
        Toss {{ingredients}} in a covered food-safe container. Refrigerate at 40°F or below for
        about 1 hour before assembly. Up to about 3 hours is the shorter texture plan; a longer
        refrigerated hold softens the cucumber rather than creating a precise safety deadline.
    - id: sauce
      title: Mix the full sauce
      text: >-
        Whisk {{ingredients}} until the sugar dissolves and the mixture is smooth. Keep this whole
        sauce supply separate from the cucumber’s vinegar, sugar and chili.
    - id: heat
      title: Heat the already cooked meat
      text: >-
        Use {{ingredients}}. Reheat chilled meat in a skillet over heat adjusted to warm it evenly
        without burning, stirring and checking until it reaches 165°F throughout. Do not depend on a
        3–4-minute clock or crispy edges to establish its temperature. Keep all the meat’s cooking
        juices and fat that came with the listed supply. Extra loads extend time; raw pork or
        chicken needs its separate complete cooking process before this recipe begins.
    - id: coat
      title: Coat with the sauce
      text: >-
        Take the hot meat off direct high heat and toss it with the entire prepared Kogi sauce until
        evenly coated. The separate seared quarter-cup sauce variation below uses a different
        application sequence.
    - id: warm
      title: Warm the tortillas
      text: >-
        Warm {{ingredients}} over a controlled open flame or in a dry pan, turning until hot and
        flexible with charred spots if wanted. Work in loads without multiplying heat or promising
        the same elapsed time.
    - id: assemble
      title: Fill and finish
      text: >-
        Divide all coated meat among the measured tortillas. Top with chilled cucumber pickle and
        {{ingredients}}, then serve promptly. Lift the cucumber with a clean utensil, allowing
        excess pickle liquid to drain back into its container rather than soaking every tortilla.
learning:
  focus: Keep a cold pickle separate from cooked-meat reheating
  outcome: 'Hot sauce-coated meat and flexible tortillas with cool, crunchy cucumber.'
  techniques:
    - temperature
    - seasoning
  before:
    - >-
      Begin the pickle about an hour before assembly. The listed cooked meat must already be fully
      cooked; linked pulled pork has its own much longer preparation clock.
    - >-
      Make the sauce and cucumber dressing in separate bowls so their distinct vinegar and sugar
      measures keep their full destinations. Four portions and twelve tortillas are original-batch
      planning, not measured taco capacity.
  checkpoints:
    - step: 3
      cue: Reheated meat reaches 165°F throughout when checked after stirring.
      why: A hot pan and browned edges do not establish the center temperature of chilled pulled meat.
    - step: 6
      cue: Cucumber is cold and drained as it goes onto a warm tortilla.
      why: >-
        The contrast comes from separate temperatures and textures; pooling pickle liquid softens
        the tortilla.
  troubleshooting:
    - problem: Sauce scorches during meat reheating.
      cause: The sugar-rich glaze was cooked over fierce heat while chilled meat was still warming.
      fix: >-
        Reheat the meat first and toss in the full sauce off direct high heat. Burnt sugar cannot be
        restored.
  substitutions:
    - ingredient: Full sauce tossed with hot cooked meat
      alternative: Seared quarter-cup sauce route
      effect: >-
        For the original 1 lb meat batch, measure 1/4 cup from the fully mixed sauce and add it with
        the cooked meat in an uncrowded hot skillet; scale this taken portion with the whole batch.
        Toss, beginning checks around 3–4 minutes for browned edges, lowering heat if the glaze
        catches and continuing until reheated meat reaches 165°F throughout. Serve the remaining
        clean sauce separately as wanted, or refrigerate it covered; it has never contacted raw
        meat. This is a portion taken from the same prepared sauce, not an extra sauce dose, and no
        finished sauce yield or fractional ingredient split is assumed.
    - ingredient: Corn tortillas and English cucumber
      alternative: Flour tortillas or Japanese cucumbers
      effect: >-
        Use the same listed tortilla count if choosing flour tortillas. For the original cucumber
        supply, use 2 Japanese cucumbers instead of 1 large English cucumber, scaling count with the
        batch; keep the full pickle vinegar, sugar, chili and salt supply. Actual cucumber and
        tortilla sizes affect filling and texture.
    - ingredient: Fresh chili pepper in the cucumber pickle
      alternative: Extra minced fresh chili pepper to taste
      effect: >-
        For more heat, add extra washed, minced fresh chili pepper to the pickle as wanted, in
        addition to its listed amount. Keep the vinegar, sugar, salt and cucumber supply unchanged;
        this alters the pickle’s heat without changing the Kogi sauce.
  timing: >-
    Allow about 1 hour 20 minutes from fully cooked meat, including about 15 minutes active
    preparation, about 1 hour cucumber refrigeration and reheating, tortilla warming and assembly.
    Sauce preparation can overlap the cucumber chill. More pan or tortilla loads extend time;
    cooking the linked pulled pork or raw chicken is separate.
  storage: >-
    Refrigerate cooked leftovers promptly in shallow containers within 2 hours, or 1 hour above
    90°F, at 40°F or below. Use within 3–4 days and reheat to 165°F throughout. Keep cucumber
    pickle, clean unused sauce and tortillas separate from cooked meat; use the meat’s existing
    leftover deadline rather than restarting it. If reheating stored sauce on its own, FDA
    recommends bringing it to a boil and USDA additionally recommends a rolling boil; stir and keep
    boiling brief rather than concentrating the sweet glaze through prolonged heating. Keep the
    cucumber cold.
  sources:
    - title: Steamy Kitchen — Korean Style Tacos with Kogi BBQ Sauce
      url: 'https://steamykitchen.com/4474-korean-style-tacos-with-kogi-bbq-sauce.html'
    - title: FDA — Safe food handling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: USDA — Cooked leftovers
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

These Korean-Mexican tacos pair a gochujang sauce with cooked pulled pork or shredded chicken and tortillas. Roy Choi created the Kogi sauce for Steamy Kitchen’s smoky-pork taco adaptation; the chilled cucumber pickle supplies a cool, tangy contrast. Start the cucumber ahead and keep the cooked-meat preparation separate from the time needed to make pulled pork or chicken.

## Directions

1. **Start the cucumber pickle:** Toss large English cucumber, rice vinegar, sugar, fresh chili pepper, and sea salt in a covered food-safe container. Refrigerate at 40°F or below for about 1 hour before assembly. Up to about 3 hours is the shorter texture plan; a longer refrigerated hold softens the cucumber rather than creating a precise safety deadline.
2. **Mix the full sauce:** Whisk gochujang, granulated sugar, soy sauce, rice vinegar, and toasted sesame oil until the sugar dissolves and the mixture is smooth. Keep this whole sauce supply separate from the cucumber’s vinegar, sugar and chili.
3. **Heat the already cooked meat:** Use cooked [Pulled Pork](/mise/recipes/pulled-pork) or cooked shredded chicken. Reheat chilled meat in a skillet over heat adjusted to warm it evenly without burning, stirring and checking until it reaches 165°F throughout. Do not depend on a 3–4-minute clock or crispy edges to establish its temperature. Keep all the meat’s cooking juices and fat that came with the listed supply. Extra loads extend time; raw pork or chicken needs its separate complete cooking process before this recipe begins.
4. **Coat with the sauce:** Take the hot meat off direct high heat and toss it with the entire prepared Kogi sauce until evenly coated. The separate seared quarter-cup sauce variation below uses a different application sequence.
5. **Warm the tortillas:** Warm corn tortillas over a controlled open flame or in a dry pan, turning until hot and flexible with charred spots if wanted. Work in loads without multiplying heat or promising the same elapsed time.
6. **Fill and finish:** Divide all coated meat among the measured tortillas. Top with chilled cucumber pickle and scallions, then serve promptly. Lift the cucumber with a clean utensil, allowing excess pickle liquid to drain back into its container rather than soaking every tortilla.
