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
  - Israeli
role: main
vibe: technical
prepTime: 'Mixing, kneading and shaping, plus about 2½ hr rising'
cookTime: 35–40 min per oven load
totalTime: 'About 3½ hr or longer, plus complete cooling'
servings: 2 loaves
pairsWith:
  - naan
  - peach-salad-with-tomatoes-and-beets
  - roasted-sunchokes-with-brown-butter-cider-vinaigrette
ingredients:
  - '--- Yeast mixture ---'
  - 1 1/2 tbsp active dry yeast
  - 1 tbsp granulated sugar
  - '1 3/4 cups water, lukewarm, not hot'
  - '--- Dough ---'
  - 1/2 cup vegetable oil
  - 4 large eggs
  - 1/2 cup granulated sugar
  - 1 tbsp kosher salt
  - 8–8 1/2 cups all-purpose flour
  - 'all-purpose flour, only as needed for the kneading surface, separate from the measured dough flour'
  - 'vegetable oil, a light coating for the rising bowl and baking sheets'
  - '--- Finish ---'
  - '1 large egg, for preparing the egg wash used for both coatings'
  - 'poppy or sesame seeds, as desired for sprinkling'
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from cooking.nytimes.com
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
          name: water
          quantity:
            amount: 1 3/4
            unit: cup
          uses:
            - step: activate
              share: 1
          preparation: 'lukewarm, not hot'
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
          allowance: 'only as needed for the kneading surface, separate from the measured dough flour'
          uses:
            - step: knead
              share: 1
        - id: grease
          key: vegetable-oil
          name: vegetable oil
          allowance: a light coating for the rising bowl and baking sheets
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
          preparation: for preparing the egg wash used for both coatings
        - id: seeds
          key: poppy-or-sesame-seeds
          name: poppy or sesame seeds
          allowance: as desired for sprinkling
          uses:
            - step: bake
              share: 1
  steps:
    - id: activate
      title: Activate yeast
      text: 'Dissolve {{ingredients}} in a large bowl. Begin checking after about 10 minutes for a foamy surface. If the yeast remains inactive, replace it before adding the remaining supplies.'
    - id: enrich
      title: Enrich
      text: 'Whisk {{ingredients}} into the yeast mixture, beating in the dough eggs one at a time.'
    - id: flour
      title: Add flour
      text: 'Gradually incorporate {{ingredients}}, beginning with the lower end of the listed range and adding from the remaining measured allowance only as needed until the dough holds together. Do not automatically add the maximum if the dough is already workable.'
    - id: knead
      title: Knead
      text: 'Use {{ingredients}} to lightly dust the surface, then knead the dough until smooth and elastic, starting to check after about 10 minutes. A mixer with a dough hook is an alternative: use its actual capacity and instructions, or divide into complete proportionate dough loads rather than overloading it.'
    - id: first-rise
      title: First rise
      text: 'Use {{ingredients}} to grease the cleaned rising bowl and sheets. Put the dough in the bowl, cover and let rise in a gently warm, draft-free place until almost doubled, about 1 hour as a guide. Keep the separately greased sheets ready for shaping.'
    - id: second-rise
      title: Rise again
      text: 'Gently deflate the dough, cover and let it rise again for about half an hour before shaping.'
    - id: shape
      title: Shape and braid
      text: 'For the original two-loaf batch, divide the dough in half and each half into six equal pieces. Roll each piece into a strand about 12 inches long and 1½ inches wide, then braid using the pattern below. Tuck the ends under for straight loaves, or form each braid into a ring and pinch its ends together. Use enough greased baking-sheet space to keep original-size loaves at least 2 inches apart. Make additional similar loaves when scaling up; a batch smaller than one original-size loaf makes a smaller braid whose dimensions and baking time will differ.'
    - id: wash
      title: Prepare wash and final rise
      text: 'Beat {{ingredients}} in a clean small bowl to prepare the whole wash. Brush a light coating onto the braided loaves, then cover and refrigerate the remaining wash for the second coating; no fixed division between coatings is required. Loosely cover the loaves and let them become puffy, about 1 hour as a guide. Begin preheating the oven to 375°F during this rise.'
    - id: bake
      title: Bake
      text: 'Brush the risen loaves with the remaining egg wash and sprinkle with {{ingredients}}. Load only once the oven reaches 375°F. Bake in the middle of the oven, beginning checks after 35 minutes; the original 35–40 minute range is a guide. Look for golden-brown crust, color in the seams between strands and a loaf that feels set. If the washed surface darkens before the loaf is baked, loosely shield it with oven-safe foil and continue checking. Separate oven loads add time.'
    - id: cool
      title: Cool
      text: Transfer to racks and cool completely before slicing. Discard any unused egg wash; do not use raw wash as a serving sauce.
learning:
  focus: 'Judge an enriched dough through rising, braiding and baking'
  outcome: 'An evenly risen braid with colored seams, a set interior and a soft crumb after cooling.'
  techniques:
    - leavening
    - temperature
  before:
    - The original batch makes two loaves and uses four eggs in the dough plus one egg to prepare both washes. Follow the listed amounts for other batches.
    - 'Choose mixer, bowl and baking-sheet capacity before mixing. The original braid dimensions apply to full-size loaves; fractional loaves need a different shape and earlier observation.'
    - Kosher-salt crystal densities differ. Keep the stated salt type; do not substitute a denser fine salt by the same spoon volume.
  checkpoints:
    - step: 3
      cue: The dough holds together before all of the flour-range maximum has necessarily been added.
      why: Humidity and flour measurement affect how much of the listed range the dough needs; forcing the upper limit can make it dry.
    - step: 8
      cue: The final braid looks puffy without tight strands restraining expansion.
      why: 'The rise is a dough-state decision, not a guarantee from elapsed minutes.'
    - step: 9
      cue: The paler braid seams have taken on color and the loaf feels set.
      why: Egg glaze browns readily and can darken before the interior is baked.
  troubleshooting:
    - problem: The dough is dry and hard to knead
      cause: Too much flour was incorporated or the surface was heavily dusted.
      fix: Stop adding flour from the listed range and keep dusting light. A finished dry dough cannot be corrected by additional proofing alone.
    - problem: The top is dark but the loaf feels underbaked
      cause: The egg-washed surface has browned faster than the thicker center.
      fix: Loosely shield the surface with oven-safe foil and continue baking and checking the loaf.
  timing: 'The fresh route includes the existing 10-minute yeast check, kneading, about 1 hour first rise, another half-hour rise, about 1 hour final rise and 35–40 minutes baking. Mixing, shaping, actual proof conditions, extra oven loads and complete cooling extend elapsed time; about 3½ hours or longer before cooling is a planning estimate. Frozen shaped loaves have a separate approximately five-hour thaw/rise plan, not an additional fresh final rise.'
  storage: 'Cool completely before wrapping. Keep plain baked bread well wrapped at room temperature for several days for quality, or freeze for longer storage; discard moldy bread. Refrigerate raw egg wash promptly and follow its product limits. The shaped-dough freezer option has its own thaw/rise process above.'
  sources:
    - title: Saved My Favorite Challah source
      url: 'https://cooking.nytimes.com/recipes/7199-my-favorite-challah'
    - title: King Arthur enriched-bread shaping and storage
      url: 'https://www.kingarthurbaking.com/blog/2018/01/03/classic-challah-bakealong-2'
    - title: King Arthur baked-loaf cues
      url: 'https://www.kingarthurbaking.com/blog/2023/05/31/how-to-tell-if-bread-is-done'
    - title: FDA raw-flour handling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/handling-flour-safely-what-you-need-know'
    - title: FDA egg handling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety'
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Challah is a braided bread traditionally served for the Jewish Sabbath and holidays. This egg-and-oil dough needs room to expand and time for its rises; braid evenly without pulling the strands tightly. The egg wash gives the crust its color, so check the paler seams as well as the glazed surface.

## Directions

1. **Activate yeast:** Dissolve active dry yeast, granulated sugar, and water in a large bowl. Begin checking after about 10 minutes for a foamy surface. If the yeast remains inactive, replace it before adding the remaining supplies.
2. **Enrich:** Whisk vegetable oil, large eggs, granulated sugar, and kosher salt into the yeast mixture, beating in the dough eggs one at a time.
3. **Add flour:** Gradually incorporate all-purpose flour, beginning with the lower end of the listed range and adding from the remaining measured allowance only as needed until the dough holds together. Do not automatically add the maximum if the dough is already workable.
4. **Knead:** Use all-purpose flour to lightly dust the surface, then knead the dough until smooth and elastic, starting to check after about 10 minutes. A mixer with a dough hook is an alternative: use its actual capacity and instructions, or divide into complete proportionate dough loads rather than overloading it.
5. **First rise:** Use vegetable oil to grease the cleaned rising bowl and sheets. Put the dough in the bowl, cover and let rise in a gently warm, draft-free place until almost doubled, about 1 hour as a guide. Keep the separately greased sheets ready for shaping.
6. **Rise again:** Gently deflate the dough, cover and let it rise again for about half an hour before shaping.
7. **Shape and braid:** For the original two-loaf batch, divide the dough in half and each half into six equal pieces. Roll each piece into a strand about 12 inches long and 1½ inches wide, then braid using the pattern below. Tuck the ends under for straight loaves, or form each braid into a ring and pinch its ends together. Use enough greased baking-sheet space to keep original-size loaves at least 2 inches apart. Make additional similar loaves when scaling up; a batch smaller than one original-size loaf makes a smaller braid whose dimensions and baking time will differ.
8. **Prepare wash and final rise:** Beat large egg in a clean small bowl to prepare the whole wash. Brush a light coating onto the braided loaves, then cover and refrigerate the remaining wash for the second coating; no fixed division between coatings is required. Loosely cover the loaves and let them become puffy, about 1 hour as a guide. Begin preheating the oven to 375°F during this rise.
9. **Bake:** Brush the risen loaves with the remaining egg wash and sprinkle with poppy or sesame seeds. Load only once the oven reaches 375°F. Bake in the middle of the oven, beginning checks after 35 minutes; the original 35–40 minute range is a guide. Look for golden-brown crust, color in the seams between strands and a loaf that feels set. If the washed surface darkens before the loaf is baked, loosely shield it with oven-safe foil and continue checking. Separate oven loads add time.
10. **Cool:** Transfer to racks and cool completely before slicing. Discard any unused egg wash; do not use raw wash as a serving sauce.

## Cooking Notes

### Six-strand braid

Line up six strands and pinch their top ends together. Move the outside right strand over two strands. Move the second strand from the left to the far right. Move the outside left strand over two. Move the second strand from the right to the far left. Repeat from the outside right strand until braided, then tuck or join the ends. If a strand resists rolling, briefly let it relax before stretching it again.

### Make ahead

The shaped, first-washed loaves can be frozen instead of taking their final rise. For frozen loaves of the original size, allow about 5 hours before baking for thawing and rising; actual room conditions and loaf size affect the interval. Keep them loosely covered as they thaw and rise, and bake only when thawed and puffy, using the same 375°F oven and baked-loaf cues. Keep any reserved egg wash refrigerated and within its product handling limits. Freezing and this thaw/rise interval are additional to the fresh-loaf plan.

For a gently warm proofing spot, an oven may be warmed to 150°F and then switched off. Let it cool to a gentle warmth before placing the dough inside; never leave the heat on for proofing. A draft-free room-temperature spot is also suitable, with rising judged by the dough rather than the clock.

For seed clusters instead of a scattered topping, place seeds onto the individual mounds of the braid while the wash is wet, using a clean utensil.

For fractional egg quantities, beat an egg and measure the requested fraction rather than rounding the amount to a whole egg.
