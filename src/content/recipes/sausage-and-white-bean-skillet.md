---
miseId: 8ab2ad8b-0998-4311-a54f-4a1514efa5e4
title: Sausage and White Bean Skillet
difficulty: easy
cookingMethods:
  - saute
  - simmer
occasions:
  - weeknight
  - meal-prep
flavorProfile:
  - savory
  - herbaceous
  - rich
cuisines:
  - Italian
  - American
role: main
vibe: quick
prepTime: About 10–15 min
cookTime: About 20–30 min
totalTime: About 30–45 min
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: excellent
equipment:
  - large-skillet
pairsWith:
  - everyday-arugula-salad
  - cornbread
  - avocado-kale-caesar-salad
ingredients:
  - '--- Ingredients ---'
  - >-
    1 lb Raw Italian pork sausage, sweet or spicy, bulk, or links sliced into
    about 1-inch rounds
  - 1 tbsp Extra-virgin olive oil
  - '1 Onion, diced'
  - '4 Garlic cloves, minced'
  - 2 tbsp Tomato paste
  - 1 tsp Dried oregano
  - 1 tsp Dried thyme
  - 1/4 tsp Red pepper flakes
  - >-
    2 cans (15 oz) Cannellini or Great Northern beans, drained and rinsed, fully
    cooked canned beans
  - 1 cup Chicken stock
  - 1/2 tsp Kosher salt
  - 1/4 tsp Black pepper
  - '1/2 Lemon, juice only'
  - 'Fresh parsley, for garnish, washed and chopped'
  - 'Parmesan cheese, for serving, grated'
  - 'Crusty bread, for serving, optional'
  - 'Water, a splash as needed when reheating, optional'
  - 'Chicken stock, a splash as needed when reheating, optional'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: dish
      name: Ingredients
      ingredients:
        - id: sausage
          key: sausage
          name: 'Raw Italian pork sausage, sweet or spicy'
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: sausage
              share: 1
          preparation: 'bulk, or links sliced into about 1-inch rounds'
        - id: oil
          key: oil
          name: Extra-virgin olive oil
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: aromatics
              share: 1
        - id: onion
          key: onion
          name: Onion
          quantity:
            amount: 1
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: Onions
          preparation: diced
        - id: garlic
          key: garlic
          name: Garlic clove
          quantity:
            amount: 4
            unit: count
          uses:
            - step: garlic
              share: 1
          plural: Garlic cloves
          preparation: minced
        - id: paste
          key: paste
          name: Tomato paste
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: paste
              share: 1
        - id: oregano
          key: oregano
          name: Dried oregano
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: paste
              share: 1
        - id: thyme
          key: thyme
          name: Dried thyme
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: paste
              share: 1
        - id: flakes
          key: flakes
          name: Red pepper flakes
          quantity:
            amount: 0.25
            unit: tsp
          uses:
            - step: paste
              share: 1
        - id: beans
          key: beans
          name: Cannellini or Great Northern beans
          quantity:
            amount: 2
            unit: can
          uses:
            - step: simmer
              share: 1
          packageSize:
            amount: 15
            unit: oz
          preparation: 'drained and rinsed, fully cooked canned beans'
        - id: stock
          key: stock
          name: Chicken stock
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: simmer
              share: 1
        - id: salt
          key: salt
          name: Kosher salt
          quantity:
            amount: 0.5
            unit: tsp
          uses:
            - step: finish
              share: 1
        - id: pepper
          key: pepper
          name: Black pepper
          quantity:
            amount: 0.25
            unit: tsp
          uses:
            - step: finish
              share: 1
        - id: lemon
          key: lemon
          name: Lemon
          quantity:
            amount: 0.5
            unit: count
          uses:
            - step: finish
              share: 1
          plural: Lemons
          preparation: juice only
        - id: parsley
          key: parsley
          name: Fresh parsley
          allowance: for garnish
          uses:
            - step: serve
              share: 1
          preparation: washed and chopped
        - id: parmesan
          key: parmesan
          name: Parmesan cheese
          allowance: for serving
          uses:
            - step: serve
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
        - id: water
          key: water
          name: Water
          allowance: a splash as needed when reheating
          optional: true
          role: cooking-water
          uses:
            - step: reheat
              share: 1
        - id: reheat-stock
          key: stock
          name: Chicken stock
          allowance: a splash as needed when reheating
          optional: true
          uses:
            - step: reheat
              share: 1
  steps:
    - id: sausage
      title: Brown sausage
      text: >-
        Heat a large skillet over medium-high heat and add {{ingredients}} to
        the dry pan. For bulk sausage, break into crumbles; for sliced links,
        turn to brown several faces. Begin checks around 5 minutes, allowing
        longer as needed. Transfer to a raw-contact plate; browning does not
        establish that it is cooked through. Keep the plate and utensils
        separate from serving dishes.
    - id: aromatics
      title: Soften onion
      text: >-
        Reduce heat to medium and add {{ingredients}} to the same pan, adding
        onion to the oil and rendered sausage fat. Cook about 3–5 minutes until
        softened; allow longer as needed. Keep usable brown bits, but do not
        scrape burnt residue into the sauce.
    - id: garlic
      title: Add garlic
      text: >-
        Stir in {{ingredients}} for about 30–45 seconds until fragrant, without
        darkening.
    - id: paste
      title: Cook paste and herbs
      text: >-
        Add {{ingredients}} and stir about 1 minute; the paste should coat the
        mixture without burning.
    - id: simmer
      title: Return sausage and simmer
      text: >-
        Add {{ingredients}}, scraping up browned bits, then return all sausage
        and its plate juices. Bring to a simmer, reduce to medium-low and cook
        about 8–10 minutes to a thickened but saucy mixture. Continue until
        several thicker pork-sausage pieces or clusters measure at least 160°F
        /71°C. Do not taste raw-contact sauce before that endpoint; allow longer
        as needed.
    - id: finish
      title: Add seasoning and lemon
      text: >-
        Once the sausage is fully cooked, remove from heat and add
        {{ingredients}}. Use the listed kosher salt; different crystal types
        need different spoon volumes.
    - id: serve
      title: Serve
      text: >-
        Spoon into bowls and finish with {{ingredients}}. Serve promptly; store
        leftovers as described below.
    - id: reheat
      title: Reheat stored portions
      text: >-
        For leftovers only, choose one of {{ingredients}} for a splash if the
        sauce has tightened. Reheat the portion served on the stove to 165°F
        /74°C throughout, stirring and checking several places; a splash loosens
        the sauce but does not replace the endpoint.
learning:
  focus: Brown sausage and check its doneness in saucy beans
  outcome: >-
    Cooked sausage with tender canned beans, a saucy tomato base and the full
    lemon finish
  techniques:
    - temperature
    - seasoning
  before:
    - >-
      Add the listed olive oil with the onion after browning the sausage; keep
      the rendered sausage fat in the pan.
    - >-
      Use enough skillet area for browning and room for both cans of beans and
      stock. Scaled batches may need additional pans or loads; divide ingredient
      totals rather than use a full dose per pan.
    - >-
      The main uses raw pork sausage. If the chosen Italian-style sausage
      contains poultry, cook it to 165°F /74°C instead; follow product handling
      instructions.
  checkpoints:
    - step: 5
      cue: Several thicker pork-sausage pieces measure 160°F before tasting.
      why: A fixed interval or surface color cannot establish the center condition.
  troubleshooting:
    - problem: The sauce tightens before sausage is cooked through
      cause: Evaporation or strong heat outpaces the thicker pieces
      fix: >-
        Lower heat and continue gentle cooking with the written sausage
        endpoint. Do not sample a raw-contact sauce because its surface has
        browned; use adequate pan capacity and monitor reduction.
  substitutions:
    - ingredient: Dried oregano
      alternative: >-
        Use 1 tbsp fresh oregano in place of the listed 1 tsp dried for the
        original batch.
      effect: >-
        Scale the chosen fresh or dried oregano amount with the batch and add it
        at the paste-and-herb stage; use one option.
  timing: >-
    Allow about 30–45 minutes including 10–15 minutes preparation and 20–30
    minutes for browning, aromatics, paste, heating and simmering. Most skillet
    work needs attention; scaled batches may require additional browning loads.
    Continue until the chosen sausage reaches its stated endpoint, even if that
    extends the plan.
  storage: >-
    Divide leftovers into shallow containers and refrigerate within 2 hours, or
    1 hour above 90°F /32°C, at 40°F /4°C or below. Use refrigerated leftovers
    within 3–4 days or freeze promptly. Reheat the portion served to 165°F /74°C
    throughout, stirring and checking several places. USDA additionally
    recommends a rolling boil for reheated sauces and gravies; bring this dish’s
    sauce to that stage with stirring, without prolonging the boil and
    concentrating it unnecessarily. Do not leave a large pot out to cool
    overnight.
  sources:
    - title: USDA — cooling and reheating leftovers
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
    - title: FoodSafety.gov — sausage and seafood endpoints
      url: >-
        https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

Sausage, white beans and tomato paste cook into a saucy skillet with oregano, thyme and the full measured olive oil. Brown the sausage for flavor, then check its cooking temperature before tasting the finished sauce. Lemon, parsley and Parmesan finish this formula without requiring the sauce to cook dry.

## Directions

1. **Brown sausage:** Heat a large skillet over medium-high heat and add Raw Italian pork sausage, sweet or spicy to the dry pan. For bulk sausage, break into crumbles; for sliced links, turn to brown several faces. Begin checks around 5 minutes, allowing longer as needed. Transfer to a raw-contact plate; browning does not establish that it is cooked through. Keep the plate and utensils separate from serving dishes.
2. **Soften onion:** Reduce heat to medium and add Extra-virgin olive oil and Onion to the same pan, adding onion to the oil and rendered sausage fat. Cook about 3–5 minutes until softened; allow longer as needed. Keep usable brown bits, but do not scrape burnt residue into the sauce.
3. **Add garlic:** Stir in Garlic cloves for about 30–45 seconds until fragrant, without darkening.
4. **Cook paste and herbs:** Add Tomato paste, Dried oregano, Dried thyme, and Red pepper flakes and stir about 1 minute; the paste should coat the mixture without burning.
5. **Return sausage and simmer:** Add Cannellini or Great Northern beans and Chicken stock, scraping up browned bits, then return all sausage and its plate juices. Bring to a simmer, reduce to medium-low and cook about 8–10 minutes to a thickened but saucy mixture. Continue until several thicker pork-sausage pieces or clusters measure at least 160°F /71°C. Do not taste raw-contact sauce before that endpoint; allow longer as needed.
6. **Add seasoning and lemon:** Once the sausage is fully cooked, remove from heat and add Kosher salt, Black pepper, and Lemon. Use the listed kosher salt; different crystal types need different spoon volumes.
7. **Serve:** Spoon into bowls and finish with Fresh parsley, Parmesan cheese, and Crusty bread (if using). Serve promptly; store leftovers as described below.
8. **Reheat stored portions:** For leftovers only, choose one of Water (if using) and Chicken stock (if using) for a splash if the sauce has tightened. Reheat the portion served on the stove to 165°F /74°C throughout, stirring and checking several places; a splash loosens the sauce but does not replace the endpoint.
