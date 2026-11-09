---
miseId: 53bda8d1-8df0-45ac-b7ea-294453bb2bff
title: Challah
difficulty: intermediate
cookingMethods:
  - bake
occasions:
  - weekend-project
  - entertaining
flavorProfile:
  - sweet
  - rich
cuisines:
  - Jewish
role: base
vibe: technical
prepTime: '30 min, plus 2 hr 30 min rising'
cookTime: 40 min
totalTime: '3 hr 40 min, plus cooling'
servings: 2 loaves
pairsWith:
  - chef-krigers-recipe-shabbat-brisket
  - classic-french-toast
pairingNotes:
  chef-krigers-recipe-shabbat-brisket: The Shabbat table's bread and main.
  classic-french-toast: Day-old challah makes the best French toast.
ingredients:
  - '--- Yeast mixture ---'
  - 1 1/2 tbsp active dry yeast
  - 1 tbsp granulated sugar
  - 1 3/4 cups lukewarm water
  - '--- Dough ---'
  - 1/2 cup vegetable oil
  - 4 large eggs
  - 1/2 cup granulated sugar
  - 1 tbsp kosher salt
  - 8–8 1/2 cups all-purpose flour
  - 'all-purpose flour, for kneading'
  - 'vegetable oil, for the bowl and baking sheets'
  - '--- Finish ---'
  - 1 large egg
  - 'poppy or sesame seeds, for sprinkling'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from NYT Cooking
sourceUrl: 'https://cooking.nytimes.com/recipes/7199-my-favorite-challah'
advancePrep:
  - rise-dough
  - freeze-ahead
formula:
  version: 1
  yield:
    amount: 2
    unit: loaf
  components:
    - id: yeast
      name: Yeast mixture
      ingredients:
        - id: yeast
          key: active-dry-yeast
          name: active dry yeast
          quantity:
            amount: 1 1/2
            unit: tbsp
          uses:
            - step: activate
              share: 1
        - id: sugar
          key: granulated-sugar
          name: granulated sugar
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: activate
              share: 1
        - id: water
          key: water
          name: lukewarm water
          quantity:
            amount: 1 3/4
            unit: cup
          uses:
            - step: activate
              share: 1
    - id: dough
      name: Dough
      ingredients:
        - id: oil
          key: vegetable-oil
          name: vegetable oil
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: enrich
              share: 1
        - id: eggs
          key: large-egg
          name: large egg
          quantity:
            amount: 4
            unit: count
          uses:
            - step: enrich
              share: 1
          plural: large eggs
        - id: sugar
          key: granulated-sugar
          name: granulated sugar
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: enrich
              share: 1
        - id: salt
          key: kosher-salt
          name: kosher salt
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: enrich
              share: 1
        - id: flour
          key: all-purpose-flour
          name: all-purpose flour
          quantity:
            amount: 8
            unit: cup
            max: 8 1/2
          uses:
            - step: flour
              share: 1
        - id: dusting
          key: all-purpose-flour
          name: all-purpose flour
          allowance: for kneading
          uses:
            - step: knead
              share: 1
        - id: grease
          key: vegetable-oil
          name: vegetable oil
          allowance: for the bowl and baking sheets
          uses:
            - step: first-rise
              share: 1
    - id: finish
      name: Finish
      ingredients:
        - id: egg
          key: large-egg
          name: large egg
          quantity:
            amount: 1
            unit: count
          uses:
            - step: wash
              share: 1
          plural: large eggs
        - id: seeds
          key: poppy-or-sesame-seeds
          name: poppy or sesame seeds
          allowance: for sprinkling
          uses:
            - step: bake
              share: 1
  steps:
    - id: activate
      title: Proof the yeast
      text: 'Stir {{ingredients}} together in a large bowl. Let stand until foamy, about 10 minutes.'
    - id: enrich
      title: Add the eggs and oil
      text: 'Whisk in {{ingredients}}, adding the eggs one at a time.'
    - id: flour
      title: Add the flour
      text: >-
        Stir in {{ingredients}} a cup at a time until the dough holds together. You may not need all
        of it.
    - id: knead
      title: Knead
      text: >-
        Turn the dough out onto a surface dusted with {{ingredients}}. Knead until smooth and
        elastic, about 10 minutes, or knead in a stand mixer with a dough hook.
    - id: first-rise
      title: First rise
      text: >-
        Grease a large bowl and two baking sheets with {{ingredients}}. Put the dough in the bowl,
        cover and let it rise in a warm, draft-free spot until almost doubled, about 1 hour.
    - id: second-rise
      title: Second rise
      text: 'Punch the dough down, cover and let it rise again for 30 minutes.'
    - id: shape
      title: Roll the strands
      text: >-
        Divide the dough in half, then divide each half into six pieces. Roll each piece into a
        strand about 12 inches long and 1 1/2 inches thick.
    - id: braid
      title: Braid the loaves
      text: >-
        Pinch the tops of six strands together. Move the outside right strand over two strands. Move
        the second strand from the left to the far right. Move the outside left strand over two.
        Move the second strand from the right to the far left. Repeat until braided and tuck the
        ends under, or curve the braid into a ring and pinch the ends together. Braid the second
        loaf and set both on the baking sheets.
    - id: wash
      title: Glaze and proof
      text: >-
        Beat {{ingredients}} in a small bowl. Brush the loaves lightly with the egg and chill the
        rest. Cover the loaves loosely and let them rise until puffy, about 1 hour. Heat the oven to
        375°F.
    - id: bake
      title: Bake
      text: >-
        Brush the loaves again with the rest of the egg and sprinkle with {{ingredients}}. Bake in
        the middle of the oven until deep golden brown, with color in the seams between strands, 35
        to 40 minutes. If the tops darken too fast, cover them loosely with foil.
    - id: cool
      title: Cool
      text: Cool the loaves completely on a rack before slicing.
learning:
  techniques:
    - leavening
    - temperature
  substitutions:
    - ingredient: Freeze ahead
      alternative: Freeze the shaped loaves
      effect: >-
        Freeze the braided loaves after the first egg wash instead of giving them the final rise.
        Thaw and rise them at room temperature until puffy, about 5 hours, then bake as usual.
  storage: 'Wrapped well, it keeps 3 days at room temperature and freezes for 3 months.'
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

Challah is the braided egg bread of the Jewish Sabbath and holidays. This is Joan Nathan's favorite, a rich egg-and-oil dough braided into two six-strand loaves. Braid snugly but don't pull the strands tight, so the loaves have room to rise tall in the oven.

## Directions

1. **Proof the yeast:** Stir active dry yeast, granulated sugar, and lukewarm water together in a large bowl. Let stand until foamy, about 10 minutes.
2. **Add the eggs and oil:** Whisk in vegetable oil, large eggs, granulated sugar, and kosher salt, adding the eggs one at a time.
3. **Add the flour:** Stir in all-purpose flour a cup at a time until the dough holds together. You may not need all of it.
4. **Knead:** Turn the dough out onto a surface dusted with all-purpose flour. Knead until smooth and elastic, about 10 minutes, or knead in a stand mixer with a dough hook.
5. **First rise:** Grease a large bowl and two baking sheets with vegetable oil. Put the dough in the bowl, cover and let it rise in a warm, draft-free spot until almost doubled, about 1 hour.
6. **Second rise:** Punch the dough down, cover and let it rise again for 30 minutes.
7. **Roll the strands:** Divide the dough in half, then divide each half into six pieces. Roll each piece into a strand about 12 inches long and 1 1/2 inches thick.
8. **Braid the loaves:** Pinch the tops of six strands together. Move the outside right strand over two strands. Move the second strand from the left to the far right. Move the outside left strand over two. Move the second strand from the right to the far left. Repeat until braided and tuck the ends under, or curve the braid into a ring and pinch the ends together. Braid the second loaf and set both on the baking sheets.
9. **Glaze and proof:** Beat large egg in a small bowl. Brush the loaves lightly with the egg and chill the rest. Cover the loaves loosely and let them rise until puffy, about 1 hour. Heat the oven to 375°F.
10. **Bake:** Brush the loaves again with the rest of the egg and sprinkle with poppy or sesame seeds. Bake in the middle of the oven until deep golden brown, with color in the seams between strands, 35 to 40 minutes. If the tops darken too fast, cover them loosely with foil.
11. **Cool:** Cool the loaves completely on a rack before slicing.
