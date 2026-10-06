---
miseId: 11876c48-96ef-455b-9e87-3c263687a26f
title: Spiced Butternut Squash Soup
difficulty: easy
cookingMethods:
  - saute
  - simmer
  - boil
  - blend
dietary:
  - vegetarian
occasions:
  - holiday
  - comfort-food
flavorProfile:
  - acidic
  - rich
cuisines:
  - American
role: main
vibe: comfort
prepTime: 20 min
cookTime: 135 min
totalTime: 155 min
servings: 10 portions
pairsWith:
  - cinnamon-sweet-potatoes
  - green-beans-with-shallots-and-lemon
  - roasted-sunchokes-with-brown-butter-cider-vinaigrette
ingredients:
  - '--- Soup and scrap broth ---'
  - >-
    4 lb whole butternut squash, washed before peeling; reserve peels, seeds and
    trimmings for broth; cube all usable flesh
  - 1/4 cup extra-virgin olive oil
  - 7 cups water
  - 1/2 tsp whole allspice
  - 1/2 tsp whole black peppercorns
  - '6 fresh thyme sprigs, washed'
  - 3 whole cloves
  - >-
    1 cinnamon stick, 3-inch piece per original stick; size stays fixed when
    count scales
  - 1 star anise pod
  - '1 yellow onion, peeled and chopped'
  - 1 1/2 tsp kosher salt
  - 1 tbsp cider vinegar
  - 1/8 tsp crushed red pepper
  - '--- Garnish ---'
  - 1/2 cup pomegranate arils
  - '1/4 cup fresh cilantro, washed and chopped'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from Myrecipes.com
sourceUrl: 'http://www.myrecipes.com/recipe/warm-spiced-butternut-squash-soup'
formula:
  version: 1
  yield:
    amount: 10
    unit: portion
  components:
    - id: soup
      name: Soup and scrap broth
      ingredients:
        - id: squash
          key: squash
          name: whole butternut squash
          quantity:
            amount: 4
            unit: lb
          uses:
            - step: squash
              share: 1
          preparation: >-
            washed before peeling; reserve peels, seeds and trimmings for broth;
            cube all usable flesh
        - id: oil
          key: oil
          name: extra-virgin olive oil
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: scraps
              share: 1/4
            - step: onion
              share: 3/4
        - id: water
          key: water
          name: water
          quantity:
            amount: 7
            unit: cup
          uses:
            - step: stock
              share: 1
          role: cooking-water
        - id: allspice
          key: allspice
          name: whole allspice
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: stock
              share: 1
        - id: pepper
          key: pepper
          name: whole black peppercorns
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: stock
              share: 1
        - id: thyme
          key: thyme
          name: fresh thyme sprig
          quantity:
            amount: 6
            unit: count
          uses:
            - step: stock
              share: 1
          plural: fresh thyme sprigs
          preparation: washed
        - id: cloves
          key: cloves
          name: whole clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: stock
              share: 1
          plural: whole cloves
        - id: cinnamon
          key: cinnamon
          name: cinnamon stick
          quantity:
            amount: 1
            unit: count
          uses:
            - step: stock
              share: 1
          plural: cinnamon sticks
          preparation: 3-inch piece per original stick; size stays fixed when count scales
        - id: anise
          key: anise
          name: star anise pod
          quantity:
            amount: 1
            unit: count
          uses:
            - step: stock
              share: 1
          plural: star anise pods
        - id: onion
          key: onion
          name: yellow onion
          quantity:
            amount: 1
            unit: count
          uses:
            - step: onion
              share: 1
          plural: yellow onions
          preparation: peeled and chopped
        - id: salt
          key: salt
          name: kosher salt
          quantity:
            amount: 1 1/2
            unit: tsp
          uses:
            - step: simmer
              share: 1
        - id: vinegar
          key: vinegar
          name: cider vinegar
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: finish
              share: 1
        - id: red-pepper
          key: red-pepper
          name: crushed red pepper
          quantity:
            amount: 1/8
            unit: tsp
          uses:
            - step: finish
              share: 1
    - id: garnish
      name: Garnish
      ingredients:
        - id: pomegranate
          key: pomegranate
          name: pomegranate arils
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: serve
              share: 1
        - id: cilantro
          key: cilantro
          name: fresh cilantro
          quantity:
            amount: 1/4
            unit: cup
          uses:
            - step: serve
              share: 1
          preparation: washed and chopped
  steps:
    - id: scraps
      title: Prepare and brown scraps
      text: >-
        Wash {{name:soup.squash}} under running water before peeling, then peel
        and seed it, reserving the peels, trimmings and seeds and cubing the
        flesh. Heat {{ingredients}} in a large Dutch oven over medium-high heat.
        Add all the reserved scraps and sauté about 8 minutes until lightly
        browned; reduce heat if they scorch.
    - id: stock
      title: Make scrap broth
      text: >-
        Add {{ingredients}} to the scraps. Bring to a boil, cover, reduce heat
        and simmer about 45 minutes. Strain into a heat-safe bowl large enough
        for the liquid and discard solids. The measured water is the starting
        volume; strain and use all the resulting broth rather than claiming
        seven cups finished yield.
    - id: onion
      title: Soften onion
      text: >-
        Let the emptied pan become safe to handle and wipe it clean. Heat
        {{ingredients}} over medium heat, cover and cook about 5 minutes,
        stirring occasionally.
    - id: squash
      title: Soften squash
      text: >-
        Add all the cubed flesh from {{ingredients}}. Cover and cook about 10
        minutes, stirring occasionally. The flesh and its earlier reserved
        scraps belong to the same measured whole squash; do not add a second
        squash dose.
    - id: simmer
      title: Simmer flesh
      text: >-
        Add all the reserved scrap broth and {{ingredients}}. Bring to a boil,
        cover and simmer about 40 minutes, until squash is very tender and
        collapses under a spoon. Use a vessel with stirring headroom; larger
        batches may need separate pots and longer heating.
    - id: blend
      title: Purée
      text: >-
        Take the pot off the heat. Use an immersion blender approved for this
        load, keeping its head submerged and switching it off before lifting it.
        For a countertop blender, use only a model approved for hot liquids and
        follow its temperature, fill, lid and venting instructions; work in
        batches. If your model requires cold ingredients, cool promptly in
        shallow containers before blending, then reheat the soup. Never seal hot
        soup in a personal blending cup. Blend smooth, working in as many
        permitted loads as needed; return all the purée to a clean pot.
    - id: finish
      title: Finish
      text: 'Stir in all {{ingredients}}. Stir to distribute them through the purée.'
    - id: serve
      title: Garnish
      text: >-
        Divide the soup among the listed portions and distribute all
        {{ingredients}} over them.
equipment:
  - large-pot
  - blender
  - fine-mesh-strainer
learning:
  focus: Account for scrap broth and both oil stages
  outcome: >-
    Tender squash puréed with strained spice broth and finished with pomegranate
    and cilantro.
  techniques:
    - temperature
  before:
    - >-
      The whole squash weight includes peels, seeds and trimmings. Save them for
      the stock before cubing the flesh; stock extraction discards those solids.
    - >-
      Use kosher salt as listed; brand/crystal size affects a volume measure. No
      gram conversion or replacement with table salt is assumed. More stock or
      squash needs enough pot/strainer/receiving-bowl space, not a linear time
      multiplier.
  checkpoints:
    - step: 1
      cue: 'Squash scraps are lightly browned, not blackened.'
      why: The first quarter of the oil belongs to this stock stage.
    - step: 2
      cue: All strained broth is reserved and whole spices and scraps are removed.
      why: 'Seven cups is input water, not guaranteed output stock.'
    - step: 5
      cue: Squash flesh collapses readily under a spoon.
      why: Tenderness determines when puréeing can begin.
  troubleshooting:
    - problem: Purée has firm or grainy pieces
      cause: The vegetables were not thoroughly tender before blending.
      fix: >-
        Continue cooking until the stated tenderness cue is met before blending,
        using an appliance approved for the load.
  storage: >-
    Divide leftover soup into shallow containers and refrigerate within 2 hours,
    or 1 hour above 90°F / 32°C, at 40°F / 4°C or below. Use within 3–4 days.
    Reheat the portion being served, stirring, to 165°F / 74°C throughout and
    bring soup to a rolling boil.
  timing: >-
    Allow about 155 minutes, including 20 minutes preparation and about 135
    minutes cooking/finishing. The recorded stages include 8 minutes scrap
    sauté, 45 minutes stock simmer, 5 minutes covered onion, 10 minutes covered
    squash and 40 minutes soup simmer, plus heating, straining and blending.
    Gentle covered stages mostly are unattended apart from stirring;
    appliance-required cooling and extra loads add elapsed time.
  sources:
    - title: Adapted from Myrecipes.com
      url: 'http://www.myrecipes.com/recipe/warm-spiced-butternut-squash-soup'
    - title: USDA leftover soup handling
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
    - title: FDA produce preparation
      url: >-
        https://www.fda.gov/consumers/consumer-updates/7-tips-cleaning-fruits-vegetables
    - title: Blender manufacturer vessel limits
      url: 'https://www.nutribullet.com/faq/'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

Brown the squash peels, seeds and trimmings briefly, then simmer them with whole spices to make the soup’s strained cooking liquid. All the olive oil has a destination: one-quarter cooks the scraps and three-quarters cook the onion. Cover the squash while it softens, then purée only after it is thoroughly tender and finish with the measured vinegar and red pepper.

## Directions

1. **Prepare and brown scraps:** Wash whole butternut squash under running water before peeling, then peel and seed it, reserving the peels, trimmings and seeds and cubing the flesh. Heat 1/4 of the extra-virgin olive oil in a large Dutch oven over medium-high heat. Add all the reserved scraps and sauté about 8 minutes until lightly browned; reduce heat if they scorch.
2. **Make scrap broth:** Add water, whole allspice, whole black peppercorns, fresh thyme sprigs, whole cloves, cinnamon stick, and star anise pod to the scraps. Bring to a boil, cover, reduce heat and simmer about 45 minutes. Strain into a heat-safe bowl large enough for the liquid and discard solids. The measured water is the starting volume; strain and use all the resulting broth rather than claiming seven cups finished yield.
3. **Soften onion:** Let the emptied pan become safe to handle and wipe it clean. Heat 3/4 of the extra-virgin olive oil and yellow onion over medium heat, cover and cook about 5 minutes, stirring occasionally.
4. **Soften squash:** Add all the cubed flesh from whole butternut squash. Cover and cook about 10 minutes, stirring occasionally. The flesh and its earlier reserved scraps belong to the same measured whole squash; do not add a second squash dose.
5. **Simmer flesh:** Add all the reserved scrap broth and kosher salt. Bring to a boil, cover and simmer about 40 minutes, until squash is very tender and collapses under a spoon. Use a vessel with stirring headroom; larger batches may need separate pots and longer heating.
6. **Purée:** Take the pot off the heat. Use an immersion blender approved for this load, keeping its head submerged and switching it off before lifting it. For a countertop blender, use only a model approved for hot liquids and follow its temperature, fill, lid and venting instructions; work in batches. If your model requires cold ingredients, cool promptly in shallow containers before blending, then reheat the soup. Never seal hot soup in a personal blending cup. Blend smooth, working in as many permitted loads as needed; return all the purée to a clean pot.
7. **Finish:** Stir in all cider vinegar and crushed red pepper. Stir to distribute them through the purée.
8. **Garnish:** Divide the soup among the listed portions and distribute all pomegranate arils and fresh cilantro over them.

## Browned-squash variation

For browned edges on the squash flesh, follow the scrap-broth and onion steps above, then leave the pot uncovered instead of covering it during the squash step. Cook the cubed flesh in the measured onion-stage oil for about 10 minutes, stirring and checking for browned edges and catching. Add all the reserved broth and measured salt, then cover and simmer until very tender as in the main method. Keep the remaining ingredients and finish unchanged. Larger batches may need separate pots and longer heating.
