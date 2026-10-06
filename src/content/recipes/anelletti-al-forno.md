---
miseId: ba52ad98-8b00-4376-8b3c-24392c10b83b
title: Anelletti Al Forno
aliases:
  - anelletti-al-forno-the-sicilian-pasta-bake
difficulty: easy
cookingMethods:
  - bake
  - fry
  - saute
  - simmer
  - boil
occasions:
  - weekend-project
  - entertaining
  - potluck
  - holiday
flavorProfile:
  - umami
cuisines:
  - Italian
role: main
vibe: technical
prepTime: 45 min
cookTime: 'About 3 hr, plus extra frying or oven rounds'
totalTime: About 4 hr
servings: 8 portions
seasons:
  - year-round
  - fall
  - winter
nutritionalDensity: hearty
leftovers: excellent
advancePrep:
  - make-ahead
pairsWith:
  - everyday-arugula-salad
  - garlic-bread
ingredients:
  - '--- Ragù ---'
  - 2 tbsp extra-virgin olive oil
  - '1 medium carrot, peeled and finely chopped'
  - '1 medium celery stalk, finely chopped'
  - '1/2 medium onion, finely chopped'
  - 'sea salt and freshly ground black pepper, to taste'
  - 8 oz ground beef
  - 8 oz ground pork
  - 1/2 cup dry red wine
  - 1/2 tsp ground cinnamon
  - 'finely grated nutmeg, a pinch'
  - >-
    1 1/2 cans (28 oz) whole peeled tomatoes with their juices, coarsely chop
    tomatoes and reserve all juices
  - 3/4 cup frozen or fresh peas
  - '--- Fried eggplant ---'
  - >-
    1 medium eggplant, about 12 oz for the original batch, cut into 1/2-inch
    cubes
  - 'salt, for draining the eggplant'
  - >-
    vegetable oil, for a 1-inch frying layer in a suitable deep skillet,
    replenished as needed
  - '--- Pasta and layers ---'
  - 2 lb dry anelletti or other small pasta
  - 'water and salt, for boiling pasta'
  - '4 large hard-boiled eggs, coarsely chopped'
  - '6 oz fully cooked deli ham, cut into 1/4-inch cubes'
  - '12 oz primosale or provolone, cut into 1/4-inch cubes'
  - 1/2 cup finely grated caciocavallo or Pecorino Romano
  - 2 tbsp bread crumbs
  - 'olive oil or lard, for greasing the baking dishes'
origin: Italy
source: Adapted from saveur.com
sourceUrl: 'https://www.saveur.com/recipes/anelletti-al-forno-recipe/'
formula:
  version: 1
  yield:
    amount: 8
    unit: portion
  components:
    - id: ragu
      name: Ragù
      ingredients:
        - id: oil
          key: olive-oil
          name: extra-virgin olive oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: ragu
              share: 1
        - id: carrot
          key: carrot
          name: medium carrot
          quantity:
            amount: 1
            unit: count
          uses:
            - step: ragu
              share: 1
          plural: medium carrots
          preparation: peeled and finely chopped
        - id: celery
          key: celery
          name: medium celery stalk
          quantity:
            amount: 1
            unit: count
          uses:
            - step: ragu
              share: 1
          plural: medium celery stalks
          preparation: finely chopped
        - id: onion
          key: onion
          name: medium onion
          quantity:
            amount: 1/2
            unit: count
          uses:
            - step: ragu
              share: 1
          plural: medium onions
          preparation: finely chopped
        - id: seasoning
          key: salt-pepper
          name: sea salt and freshly ground black pepper
          allowance: to taste
          uses:
            - step: ragu
              share: 1
        - id: beef
          key: ground-beef
          name: ground beef
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: ragu
              share: 1
        - id: pork
          key: ground-pork
          name: ground pork
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: ragu
              share: 1
        - id: wine
          key: red-wine
          name: dry red wine
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: ragu
              share: 1
        - id: cinnamon
          key: cinnamon
          name: ground cinnamon
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: ragu
              share: 1
        - id: nutmeg
          key: nutmeg
          name: finely grated nutmeg
          allowance: a pinch
          uses:
            - step: ragu
              share: 1
        - id: tomatoes
          key: whole-tomatoes
          name: whole peeled tomatoes with their juices
          quantity:
            amount: 1 1/2
            unit: can
          uses:
            - step: ragu
              share: 1
          packageSize:
            amount: 28
            unit: oz
          preparation: coarsely chop tomatoes and reserve all juices
        - id: peas
          key: peas
          name: frozen or fresh peas
          quantity:
            amount: 3/4
            unit: cup
          uses:
            - step: ragu
              share: 1
    - id: eggplant
      name: Fried eggplant
      ingredients:
        - id: eggplant
          key: eggplant
          name: medium eggplant
          quantity:
            amount: 1
            unit: count
          uses:
            - step: eggplant
              share: 1
          plural: medium eggplants
          preparation: 'about 12 oz for the original batch, cut into 1/2-inch cubes'
        - id: salt
          key: salt
          name: salt
          allowance: for draining the eggplant
          uses:
            - step: eggplant
              share: 1
        - id: oil
          key: frying-oil
          name: vegetable oil
          allowance: >-
            for a 1-inch frying layer in a suitable deep skillet, replenished as
            needed
          uses:
            - step: eggplant
              share: 1
    - id: bake
      name: Pasta and layers
      ingredients:
        - id: pasta
          key: anelletti
          name: dry anelletti or other small pasta
          quantity:
            amount: 2
            unit: lb
          uses:
            - step: pasta
              share: 1
        - id: water
          key: water
          name: water and salt
          allowance: for boiling pasta
          uses:
            - step: pasta
              share: 1
          role: cooking-water
        - id: eggs
          key: hard-boiled-eggs
          name: large hard-boiled egg
          quantity:
            amount: 4
            unit: count
          uses:
            - step: layer
              share: 1
          plural: large hard-boiled eggs
          preparation: coarsely chopped
        - id: ham
          key: deli-ham
          name: fully cooked deli ham
          quantity:
            amount: 6
            unit: oz
          uses:
            - step: layer
              share: 1
          preparation: cut into 1/4-inch cubes
        - id: cheese
          key: provolone
          name: primosale or provolone
          quantity:
            amount: 12
            unit: oz
          uses:
            - step: layer
              share: 1
          preparation: cut into 1/4-inch cubes
        - id: grating-cheese
          key: grating-cheese
          name: finely grated caciocavallo or Pecorino Romano
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: layer
              share: 1
        - id: crumbs
          key: bread-crumbs
          name: bread crumbs
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: layer
              share: 1
        - id: grease
          key: olive-oil
          name: olive oil or lard
          allowance: for greasing the baking dishes
          uses:
            - step: layer
              share: 1
  steps:
    - id: ragu
      title: Cook the ragù
      text: >-
        Use {{ingredients}} in this sequence. Heat the oil over medium heat in a
        roomy pot, add the carrot, celery and onion with some seasoning, and
        cook about 20 minutes until soft without requiring browned edges. Add
        the beef and pork, season and break up over medium-high heat until
        browned, about 5–8 minutes. Add all wine and scrape the pot; cook until
        most free wine evaporates, often about 6 minutes. Add cinnamon, nutmeg
        and all tomatoes and reserved juices. Bring to a simmer, partially cover
        and cook on low at a bare simmer about 2 hours until the meat is tender
        and sauce thickened, stirring as needed. Confirm ground meat reaches at
        least 160°F before tasting. Stir in all peas, heat through and adjust
        the listed seasoning.
    - id: eggplant
      title: Drain and fry the eggplant
      text: >-
        While the ragù simmers, use {{ingredients}} for the eggplant. Salt and
        toss the cubes in a colander, place a plate and clean weight over them
        and drain for 1 hour. Pat away surface moisture before lowering into hot
        oil. Use a deep skillet and its safe fill/headroom; heat the 1-inch oil
        layer over medium-high until shimmering, not smoking. Fry uncrowded
        rounds, turning until deep golden and tender, starting checks around
        8–10 minutes per original-size round. Lift onto absorbent paper towels
        and repeat with all cubes, adding frying oil only as needed.
    - id: pasta
      title: Cook and dress pasta
      text: >-
        Heat the oven to 350°F. Use {{ingredients}} for pasta cooking, stopping
        at al dente according to the actual package. Drain and return to a roomy
        pot. For the original batch, stir in 4 cups of the finished ragù and all
        the fried eggplant; scale that finished-sauce target proportionally with
        the listed dry pasta. Reserve any extra ragù separately for another use
        rather than forcing it into the baking dish. The cooked ragù volume is a
        source planning target, not a measured output guaranteed by the raw
        ingredient quantities.
    - id: layer
      title: Coat the dishes and layer
      text: >-
        Use {{ingredients}} for the complete layered bake. For the original
        batch the source uses a greased 9-by-13-inch dish; check actual depth
        and headroom and use additional or smaller suitable dishes as needed.
        Coat the greased inside with the full crumb supply, shaking excess into
        a clean bowl to reserve for the top. Spread half the dressed pasta
        across the dishes. Distribute all chopped eggs and ham and half of each
        cheese over it. Cover with the remaining pasta, then all remaining
        cheese and any reserved crumbs. Divide every component between the
        dishes; do not overfill or discard layers to force a fit.
    - id: bake
      title: Bake and check
      text: >-
        Bake at 350°F, beginning checks around 30 minutes for the original-depth
        warm assembly, until cheese is melted and the bake bubbles. Check
        several central locations in every dish reach at least 165°F; a melted
        top alone is not the casserole endpoint. Cold or deeper assemblies can
        take longer.
    - id: rest
      title: Rest and serve
      text: >-
        Rest at least 15 minutes before serving. The layers settle, but the
        degree of clean slicing depends on pasta shape, moisture and dish depth;
        no firm cake-like slice is guaranteed.
learning:
  focus: Build the ragù and layers without losing ingredients
  outcome: >-
    Tender pasta and eggplant with full ham, egg and cheese layers, rested
    before serving.
  techniques:
    - temperature
    - starch
  before:
    - >-
      The original batch uses a 9-by-13-inch dish, but its actual depth matters.
      Use additional dishes when necessary and divide every layer between them.
      Smaller batches need suitable smaller dishes, not an assumption of
      identical baking time.
    - >-
      For the original batch the source mixes 4 cups finished ragù into 2 lb
      pasta, reserving extra sauce. This is a finished-sauce planning target,
      not a guaranteed raw-formula yield.
  checkpoints:
    - step: 5
      cue: Every tested central location reaches 165°F before resting.
      why: >-
        Melted cheese does not establish the temperature through a deep
        assembled casserole.
  troubleshooting:
    - problem: The dressed pasta will not fit the dish
      cause: >-
        Actual dish depth and the volume of pasta and layers differ from the
        source plan.
      fix: >-
        Use another suitable dish and divide all layers between them; do not
        discard ham, egg or cheese to force a fit.
  timing: >-
    Allow about 4 hours including preparation, roughly 2 hours ragù simmering,
    the overlapping 1-hour eggplant drain, frying rounds, pasta cooking,
    assembly, about 30 minutes baking and at least 15 minutes rest. Extra frying
    or oven rounds add elapsed time.
  storage: >-
    Refrigerate promptly in shallow containers within 2 hours, or 1 hour above
    90°F / 32°C, at 40°F / 4°C or below. Use within 3–4 days and reheat the
    portion being served to 165°F / 74°C throughout. Stored pasta softens;
    reheating does not reproduce the first-cook texture.
  substitutions:
    - ingredient: Tomato-and-ham source route
      alternative: Tomato-paste and pancetta-or-ham variation
      effect: >-
        For an original 2 lb dry-pasta batch, use 28 oz whole peeled tomatoes
        with all juices instead of 42 oz, one small onion instead of half a
        medium onion, and brown the same 1/2 lb beef and 1/2 lb pork, deglaze
        with the full 1/2 cup wine, then add 3 tbsp tomato paste. Replace 6 oz
        deli ham with 2 oz ready-to-eat ham, layered with the same four cooked
        eggs, or 2 oz pancetta cooked completely according to its actual package
        first, retaining its fat with the ragù. For this complete variation use
        the source’s 2 tbsp base oil, one carrot, one celery stalk, 1/2 tsp
        cinnamon, pinch nutmeg, 3/4 cup peas and one eggplant. For this
        variation, salt eggplant for 30 minutes, rinse and pat thoroughly dry
        before the same uncrowded frying. Cook the pasta about 2 minutes short
        of its package time. Use 12 oz provolone or caciocavallo plus 1/2 cup
        Parmesan, each half inside and half on top, with the same full 2 tbsp
        crumbs and separate pan grease. Use the same 350°F bake, measured 165°F
        center checks and 15-minute rest. The smaller tomato supply may produce
        less than the original 4-cup ragù target: use its actual finished ragù
        to coat the pasta rather than adding invented liquid or treating the two
        sauces as equal yields. Reserve extra sauce if present. Scale all
        measured variation quantities proportionally; actual sauce coverage and
        dish capacity need checking.
    - ingredient: Ragù olive oil
      alternative: Source lard option
      effect: >-
        Replace the listed 2 tbsp olive oil with the same listed amount of lard.
        All other ragù ingredients and steps remain unchanged; pan grease
        remains a separate allowance.
  sources:
    - title: Saveur
      url: 'https://www.saveur.com/recipes/anelletti-al-forno-recipe/'
    - title: FDAHandling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: FoodSafetyTemp
      url: >-
        https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures
    - title: 'USDA — Leftovers and Food Safety'
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety'
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

The ragù, fried eggplant, eggs, ham and two cheeses each have a place in the layers. The source-rich tomato-and-ham route below is distinct from the tomato-paste and pancetta-or-ham variation; its larger tomato and ham supplies are not equivalent yields. Reserve extra finished ragù rather than forcing every drop into the dish.

## Directions

1. **Cook the ragù:** Use extra-virgin olive oil, medium carrot, medium celery stalk, medium onion, sea salt and freshly ground black pepper, ground beef, ground pork, dry red wine, ground cinnamon, finely grated nutmeg, whole peeled tomatoes with their juices, and frozen or fresh peas in this sequence. Heat the oil over medium heat in a roomy pot, add the carrot, celery and onion with some seasoning, and cook about 20 minutes until soft without requiring browned edges. Add the beef and pork, season and break up over medium-high heat until browned, about 5–8 minutes. Add all wine and scrape the pot; cook until most free wine evaporates, often about 6 minutes. Add cinnamon, nutmeg and all tomatoes and reserved juices. Bring to a simmer, partially cover and cook on low at a bare simmer about 2 hours until the meat is tender and sauce thickened, stirring as needed. Confirm ground meat reaches at least 160°F before tasting. Stir in all peas, heat through and adjust the listed seasoning.
2. **Drain and fry the eggplant:** While the ragù simmers, use medium eggplant, salt, and vegetable oil for the eggplant. Salt and toss the cubes in a colander, place a plate and clean weight over them and drain for 1 hour. Pat away surface moisture before lowering into hot oil. Use a deep skillet and its safe fill/headroom; heat the 1-inch oil layer over medium-high until shimmering, not smoking. Fry uncrowded rounds, turning until deep golden and tender, starting checks around 8–10 minutes per original-size round. Lift onto absorbent paper towels and repeat with all cubes, adding frying oil only as needed.
3. **Cook and dress pasta:** Heat the oven to 350°F. Use dry anelletti or other small pasta and water and salt for pasta cooking, stopping at al dente according to the actual package. Drain and return to a roomy pot. For the original batch, stir in 4 cups of the finished ragù and all the fried eggplant; scale that finished-sauce target proportionally with the listed dry pasta. Reserve any extra ragù separately for another use rather than forcing it into the baking dish. The cooked ragù volume is a source planning target, not a measured output guaranteed by the raw ingredient quantities.
4. **Coat the dishes and layer:** Use large hard-boiled eggs, fully cooked deli ham, primosale or provolone, finely grated caciocavallo or Pecorino Romano, bread crumbs, and olive oil or lard for the complete layered bake. For the original batch the source uses a greased 9-by-13-inch dish; check actual depth and headroom and use additional or smaller suitable dishes as needed. Coat the greased inside with the full crumb supply, shaking excess into a clean bowl to reserve for the top. Spread half the dressed pasta across the dishes. Distribute all chopped eggs and ham and half of each cheese over it. Cover with the remaining pasta, then all remaining cheese and any reserved crumbs. Divide every component between the dishes; do not overfill or discard layers to force a fit.
5. **Bake and check:** Bake at 350°F, beginning checks around 30 minutes for the original-depth warm assembly, until cheese is melted and the bake bubbles. Check several central locations in every dish reach at least 165°F; a melted top alone is not the casserole endpoint. Cold or deeper assemblies can take longer.
6. **Rest and serve:** Rest at least 15 minutes before serving. The layers settle, but the degree of clean slicing depends on pasta shape, moisture and dish depth; no firm cake-like slice is guaranteed.
