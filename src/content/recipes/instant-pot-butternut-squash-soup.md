---
miseId: 8a8a9de8-b7f1-43fd-9e68-16123f0a2364
title: Pressure-Cooker Butternut Squash Soup
difficulty: easy
cookingMethods:
  - saute
  - steam
  - blend
  - simmer
occasions:
  - comfort-food
flavorProfile:
  - sweet
  - savory
  - acidic
  - umami
  - rich
cuisines:
  - American
role: main
vibe: comfort
prepTime: 15–25 min
cookTime: 45–75 min including pressure buildup and full natural release
totalTime: 60–100 min
servings: 8 cups
pairsWith:
  - avocado-kale-caesar-salad
  - roasted-sunchokes-with-brown-butter-cider-vinaigrette
  - warm-roasted-veggie-salad-with-maple-dijon-vinaigrette
ingredients:
  - '--- Soup ---'
  - '4 slices of bacon, diced; cooked bacon reserved for garnish'
  - '1/2 medium sweet onion, diced'
  - '3 garlic cloves, minced'
  - '4 sage leaves, minced'
  - 3 sprigs of fresh thyme
  - '1 Granny Smith apple, cored and chopped'
  - >-
    2 1/2 lb butternut squash, weighed whole before peeling and seeding; then peeled, seeded and
    cubed into pieces roughly the size of the carrots
  - '3 large carrots, cut into 1-inch pieces'
  - '1 stalk of celery, cut into 1-inch pieces'
  - 4 cups chicken stock
  - 'kosher salt and black pepper, to taste'
  - 1/3 cup heavy cream
  - '2 tbsp fresh chives, chopped'
origin: United States
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from Damn Delicious for the Cuisinart CPC-600
sourceUrl: 'https://damndelicious.net/2019/12/29/instant-pot-butternut-squash-soup/'
equipment:
  - electric-pressure-cooker
  - immersion-blender
formula:
  version: 1
  yield:
    amount: 8
    unit: cup
  components:
    - id: soup
      name: Soup
      ingredients:
        - id: bacon
          key: bacon
          name: slice of bacon
          quantity:
            amount: 4
            unit: count
          uses:
            - step: render
              share: 1
          plural: slices of bacon
          preparation: diced; cooked bacon reserved for garnish
        - id: onion
          key: sweet-onion
          name: medium sweet onion
          quantity:
            amount: 1/2
            unit: count
          uses:
            - step: onion
              share: 1
          plural: medium sweet onions
          preparation: diced
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: herbs
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: sage
          key: fresh-sage
          name: sage leaf
          quantity:
            amount: 4
            unit: count
          uses:
            - step: herbs
              share: 1
          plural: sage leaves
          preparation: minced
        - id: thyme
          key: fresh-thyme
          name: sprig of fresh thyme
          quantity:
            amount: 3
            unit: count
          uses:
            - step: herbs
              share: 1
          plural: sprigs of fresh thyme
        - id: apple
          key: granny-smith-apple
          name: Granny Smith apple
          quantity:
            amount: 1
            unit: count
          uses:
            - step: stock
              share: 1
          plural: Granny Smith apples
          preparation: cored and chopped
        - id: squash
          key: whole-butternut-squash
          name: butternut squash
          quantity:
            amount: 2 1/2
            unit: lb
          uses:
            - step: stock
              share: 1
          preparation: >-
            weighed whole before peeling and seeding; then peeled, seeded and cubed into pieces
            roughly the size of the carrots
        - id: carrots
          key: carrot
          name: large carrot
          quantity:
            amount: 3
            unit: count
          uses:
            - step: stock
              share: 1
          plural: large carrots
          preparation: cut into 1-inch pieces
        - id: celery
          key: celery
          name: stalk of celery
          quantity:
            amount: 1
            unit: count
          uses:
            - step: stock
              share: 1
          plural: stalks of celery
          preparation: cut into 1-inch pieces
        - id: stock
          key: chicken-stock
          name: chicken stock
          quantity:
            amount: 4
            unit: cup
          uses:
            - step: stock
              share: 1
        - id: seasoning
          key: salt-black-pepper
          name: kosher salt and black pepper
          allowance: to taste
          uses:
            - step: stock
              share: 1
        - id: cream
          key: heavy-cream
          name: heavy cream
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: blend
              share: 1
        - id: chives
          key: fresh-chives
          name: fresh chives
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: serve
              share: 1
          preparation: chopped
          role: garnish
  steps:
    - id: render
      title: Render the bacon
      text: >-
        Have the prepared vegetables ready and choose cooker loads before heating. Use a Cuisinart
        CPC-600 with its clean cooking pot, fitted sealing ring and unobstructed pressure valves.
        Keep the combined food and liquid at or below 60% of the pot’s capacity and never above its
        marked limit. At larger scales, divide every ingredient proportionally into complete cooker
        loads before starting; each soup load must contain at least ½ cup of the listed stock or
        broth. Repeat the whole cooking process for each load. Do not multiply the pressure timer.
        Select Browning with MENU and press START. Add {{ingredients}} and cook, stirring, until
        brown and crisp, about 6–8 minutes. Transfer the bacon to a plate for garnish and leave all
        its rendered fat in the pot.
    - id: onion
      title: Soften the onion
      text: >-
        Press START/CANCEL to stop Browning, then select Sauté with MENU and press START. Add
        {{ingredients}} to the bacon fat and cook, stirring, for about 2–3 minutes, until
        translucent.
    - id: herbs
      title: Add the herbs and garlic
      text: 'Stir in {{ingredients}} and cook about 30–60 seconds, until fragrant without burning.'
    - id: stock
      title: Add the vegetables and stock
      text: >-
        Add {{ingredients}}. Stir thoroughly and use a wooden or silicone spoon to loosen any
        browned bits from the bottom without scratching the pot. Keep the apple and squash in pieces
        until after pressure cooking; do not add the cream yet. Check the total food-and-liquid fill
        before sealing.
    - id: pressure
      title: Pressure-cook until soft
      text: >-
        Press START/CANCEL to stop Sauté, and wait 2–3 minutes for the inner pot to cool slightly.
        Fit and lock the lid, set the pressure-limit valve to its closed • position, select High
        Pressure with MENU, set TIME to 12 minutes, then press START/CANCEL. The countdown starts
        only after pressure has built. Do not count pressure buildup as part of those 12 minutes.
    - id: release
      title: Release fully naturally
      text: >-
        When the timer finishes, leave the CPC-600 on its automatic Keep Warm setting while pressure
        falls fully naturally. Wait until the red float is completely down and the lid unlocks; this
        commonly takes 12–30 minutes and can take longer. Then press START/CANCEL to turn off and
        open the lid away from your face. Do not force the lid or release steam manually for this
        recipe. Remove and discard the thyme sprigs. Test the squash and carrots: a fork should pass
        through easily. If firm, select Simmer with the lid off and cook until soft before blending.
    - id: blend
      title: Finish and blend
      text: >-
        Turn off and unplug the cooker. Stir in {{ingredients}}. Use an immersion blender that is
        suitable for hot liquids, protect the nonstick pot, keep its blade guard submerged and stop
        the motor before lifting it out. Blend until smooth, then taste and adjust seasoning.
    - id: serve
      title: Serve with the crisp garnish
      text: >-
        Ladle the soup into bowls. Add {{ingredients}} and the reserved crisp bacon. The creamy
        purée and crisp bacon should stay distinct until serving.
learning:
  focus: Build a creamy squash soup with bacon fat and finish its dairy after pressure cooking.
  outcome: 'Smooth, soft vegetable purée with apple acidity and crisp bacon and chives added at service.'
  techniques:
    - browning
    - seasoning
    - temperature
  before:
    - >-
      Use a Cuisinart CPC-600 with its clean cooking pot, fitted sealing ring and unobstructed
      pressure valves. Keep the combined food and liquid at or below 60% of the pot’s capacity and
      never above its marked limit. At larger scales, divide every ingredient proportionally into
      complete cooker loads before starting; each soup load must contain at least ½ cup of the
      listed stock or broth. Repeat the whole cooking process for each load. Do not multiply the
      pressure timer.
    - >-
      Weigh the squash whole before peeling and seeding. Cube it roughly the size of the listed
      1-inch carrot pieces. The prepared squash weight is smaller than its whole weight.
    - >-
      Have a hot-liquid-rated immersion blender and a wooden or silicone spoon ready. Keep cream out
      of the pressure stage.
  checkpoints:
    - step: 1
      cue: Bacon is crisp and its fat is rendered without blackening.
      why: The fat carries the aromatics; reserved bacon supplies the final crunch.
    - step: 4
      cue: >-
        The pot bottom is free of stuck browned bits and the stock surrounds the unblended
        vegetables.
      why: The pressure stage needs a free-flowing broth and a clean heated surface.
    - step: 6
      cue: The float has dropped and squash and carrot pieces are fork-soft.
      why: 'Pressure release must finish before opening, and soft vegetables blend smoothly.'
  troubleshooting:
    - problem: The vegetable purée is grainy.
      cause: Some pieces were still firm before blending.
      fix: >-
        Before adding cream, simmer the soup uncovered until the remaining pieces are fork-soft,
        then blend.
    - problem: The soup tastes scorched.
      cause: 'Bacon or garlic burned, or browned bits remained stuck to the pot.'
      fix: >-
        Avoid scraping blackened residue into the soup. Burnt flavor cannot be removed; render
        carefully and deglaze completely in the next batch.
  substitutions:
    - ingredient: Granny Smith apple
      alternative: Another tart apple
      effect: >-
        The acidity and sweetness vary by variety; retain an apple to balance the squash rather than
        adding an invented quantity of acid.
  timing: >-
    Plan roughly 60–100 minutes elapsed for one cooker load, with about 25–35 minutes active work.
    This includes about 15–25 minutes preparing vegetables, the bacon and aromatics, the 2–3-minute
    pause before pressure, pressure buildup, 12 minutes at High Pressure, full natural release and
    blending. The CPC-600 manual gives broad buildup and release ranges; cold ingredients, large
    pieces or extra cooker loads extend the total. The stated 8-cup yield is the original recipe’s
    estimate, not a measured finished volume.
  storage: >-
    Divide soup into shallow containers and refrigerate at 40°F / 4°C or below within 2 hours, or 1
    hour above 90°F / 32°C. Use within 3–4 days; freeze portions for longer storage. Thaw in the
    refrigerator. Reheat leftovers to 165°F / 74°C throughout, stirring to distribute heat, and
    bring the soup to a rolling boil; cream soups may separate slightly after freezing.
  sources:
    - title: Damn Delicious — original butternut squash soup
      url: 'https://damndelicious.net/2019/12/29/instant-pot-butternut-squash-soup/'
    - title: >-
        Cuisinart CPC-600 Series instruction and recipe book, IB-7077A-ESP (manufacturer document
        hosted by Home Depot)
      url: 'https://images.thdstatic.com/catalog/pdfImages/9a/9a4d4c57-62cd-4d1c-8773-37325605d4ee.pdf'
    - title: >-
        Cuisinart CPC-600 Series instruction and recipe book, IB-7077G (manufacturer document hosted
        by Best Buy)
      url: >-
        https://files.bbystatic.com/PWoGcrPR1cP%2BPrXUcYCfMQ%3D%3D/D4E80E7B-A7DC-493D-BD9A-B1C4DFE40127.pdf
    - title: 'USDA FSIS — preparation, cooling, leftovers and reheating'
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/steps-keep-food-safe
    - title: 'USDA: Leftovers and Food Safety'
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Crisp bacon supplies both the cooking fat and the garnish. Softening onion, sage and garlic in that rendered fat gives the squash soup a smoky, savory base; a Granny Smith apple adds acidity inside the purée. Add the full heavy-cream amount after pressure cooking, then keep the bacon crisp by adding it at service.

## Directions

1. **Render the bacon:** Have the prepared vegetables ready and choose cooker loads before heating. Use a Cuisinart CPC-600 with its clean cooking pot, fitted sealing ring and unobstructed pressure valves. Keep the combined food and liquid at or below 60% of the pot’s capacity and never above its marked limit. At larger scales, divide every ingredient proportionally into complete cooker loads before starting; each soup load must contain at least ½ cup of the listed stock or broth. Repeat the whole cooking process for each load. Do not multiply the pressure timer. Select Browning with MENU and press START. Add slices of bacon and cook, stirring, until brown and crisp, about 6–8 minutes. Transfer the bacon to a plate for garnish and leave all its rendered fat in the pot.
2. **Soften the onion:** Press START/CANCEL to stop Browning, then select Sauté with MENU and press START. Add medium sweet onion to the bacon fat and cook, stirring, for about 2–3 minutes, until translucent.
3. **Add the herbs and garlic:** Stir in garlic cloves, sage leaves, and sprigs of fresh thyme and cook about 30–60 seconds, until fragrant without burning.
4. **Add the vegetables and stock:** Add Granny Smith apple, butternut squash, large carrots, stalk of celery, chicken stock, and kosher salt and black pepper. Stir thoroughly and use a wooden or silicone spoon to loosen any browned bits from the bottom without scratching the pot. Keep the apple and squash in pieces until after pressure cooking; do not add the cream yet. Check the total food-and-liquid fill before sealing.
5. **Pressure-cook until soft:** Press START/CANCEL to stop Sauté, and wait 2–3 minutes for the inner pot to cool slightly. Fit and lock the lid, set the pressure-limit valve to its closed • position, select High Pressure with MENU, set TIME to 12 minutes, then press START/CANCEL. The countdown starts only after pressure has built. Do not count pressure buildup as part of those 12 minutes.
6. **Release fully naturally:** When the timer finishes, leave the CPC-600 on its automatic Keep Warm setting while pressure falls fully naturally. Wait until the red float is completely down and the lid unlocks; this commonly takes 12–30 minutes and can take longer. Then press START/CANCEL to turn off and open the lid away from your face. Do not force the lid or release steam manually for this recipe. Remove and discard the thyme sprigs. Test the squash and carrots: a fork should pass through easily. If firm, select Simmer with the lid off and cook until soft before blending.
7. **Finish and blend:** Turn off and unplug the cooker. Stir in heavy cream. Use an immersion blender that is suitable for hot liquids, protect the nonstick pot, keep its blade guard submerged and stop the motor before lifting it out. Blend until smooth, then taste and adjust seasoning.
8. **Serve with the crisp garnish:** Ladle the soup into bowls. Add fresh chives and the reserved crisp bacon. The creamy purée and crisp bacon should stay distinct until serving.
