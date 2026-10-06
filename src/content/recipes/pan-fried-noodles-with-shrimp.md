---
miseId: 3bde7cd7-5ff0-4074-b042-7cbdb1914528
title: Pan Fried Noodles with Shrimp
difficulty: easy
cookingMethods:
  - fry
  - boil
occasions:
  - weeknight
  - weekend-project
  - comfort-food
flavorProfile:
  - spicy
  - savory
  - umami
cuisines:
  - Chinese
role: main
vibe: technical
prepTime: About 35 min
cookTime: About 25 min; longer for extra pan loads
totalTime: About 1 hour; longer for extra pan loads
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: good
equipment:
  - wok
pairsWith:
  - steamed-bok-choy-with-oyster-sauce
  - smashed-cucumber-salad
ingredients:
  - '--- Noodle cake and greens ---'
  - '8 oz fresh Hong Kong-style egg noodles, check whether the package is raw or already cooked'
  - 'cooking water, enough to cook noodles and blanch greens'
  - 2 tbsp vegetable oil for the noodle cake
  - '4 oz yu choy or bok choy, washed; separate thicker stems from tender leaves if needed'
  - '--- Shrimp and gravy ---'
  - '1 lb large shrimp, raw, peeled and deveined; fully thawed if frozen'
  - '1/4 tsp baking soda, for the shrimp treatment; rinse it off'
  - 'shrimp-rinsing water, as needed to rinse off the baking soda'
  - 1 1/2 cups chicken stock
  - 2 tsp oyster sauce
  - 1 tbsp soy sauce
  - 1/2 tsp toasted sesame oil
  - 1/4 tsp white pepper
  - '2 tbsp cornstarch for the slurry, prepare the full slurry; add only as much as the gravy needs'
  - 2 tbsp water for the slurry
  - '1/2 cup sliced carrots and mushrooms, combined volume; slice carrots thinly'
  - 'vegetable oil for the wok, as needed for a light cooking film'
  - '1 tbsp ginger, julienned'
  - '2 garlic cloves, minced'
  - 1 tbsp Shaoxing wine
source: Adapted from thewoksoflife.com
sourceUrl: 'https://thewoksoflife.com/seafood-pan-fried-noodles/'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: noodles
      name: Noodle cake and greens
      ingredients:
        - id: noodles
          key: hk-egg-noodles
          name: fresh Hong Kong-style egg noodles
          quantity:
            amount: 8
            unit: oz
          uses:
            - step: noodles
              share: 1
          preparation: check whether the package is raw or already cooked
        - id: water
          key: water
          name: cooking water
          allowance: enough to cook noodles and blanch greens
          uses:
            - step: noodles
              share: 1
          role: cooking-water
        - id: cake-oil
          key: vegetable-oil
          name: vegetable oil for the noodle cake
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: cake
              share: 1
        - id: greens
          key: yu-choy-or-bok-choy
          name: yu choy or bok choy
          quantity:
            amount: 4
            unit: oz
          uses:
            - step: greens
              share: 1
          preparation: washed; separate thicker stems from tender leaves if needed
    - id: gravy
      name: Shrimp and gravy
      ingredients:
        - id: shrimp
          key: shrimp
          name: large shrimp
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: shrimp
              share: 1
          preparation: 'raw, peeled and deveined; fully thawed if frozen'
        - id: soda
          key: baking-soda
          name: baking soda
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: shrimp
              share: 1
          preparation: for the shrimp treatment; rinse it off
          role: discarded
        - id: rinse-water
          key: water
          name: shrimp-rinsing water
          allowance: as needed to rinse off the baking soda
          uses:
            - step: shrimp
              share: 1
          role: cooking-water
        - id: stock
          key: chicken-stock
          name: chicken stock
          quantity:
            amount: 1 1/2
            unit: cup
          uses:
            - step: sauce
              share: 1
        - id: oyster
          key: oyster-sauce
          name: oyster sauce
          quantity:
            amount: 2
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: soy
          key: soy-sauce
          name: soy sauce
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sauce
              share: 1
        - id: sesame
          key: toasted-sesame-oil
          name: toasted sesame oil
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: pepper
          key: white-pepper
          name: white pepper
          quantity:
            amount: 1/4
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: starch
          key: cornstarch
          name: cornstarch for the slurry
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: slurry
              share: 1
          preparation: prepare the full slurry; add only as much as the gravy needs
        - id: slurry-water
          key: water
          name: water for the slurry
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: slurry
              share: 1
          role: cooking-water
        - id: vegetables
          key: carrots-and-mushrooms
          name: sliced carrots and mushrooms
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: vegetables
              share: 1
          preparation: combined volume; slice carrots thinly
        - id: wok-oil
          key: vegetable-oil
          name: vegetable oil for the wok
          allowance: as needed for a light cooking film
          uses:
            - step: vegetables
              share: 1
        - id: ginger
          key: ginger
          name: ginger
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: aromatics
              share: 1
          preparation: julienned
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 2
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: wine
          key: shaoxing-wine
          name: Shaoxing wine
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: sear
              share: 1
  steps:
    - id: shrimp
      title: Prepare the shrimp
      text: >-
        Have {{ingredients}} ready. Toss the shrimp with the baking soda and refrigerate for 5
        minutes, then rinse thoroughly with the rinsing water and pat dry. Keep nearby food and
        clean utensils away from splashes; clean the sink and work surface after rinsing. Keep the
        shrimp refrigerated while preparing the noodles.
    - id: sauce
      title: Mix the gravy base
      text: 'Combine {{ingredients}} in a bowl and set beside the stove.'
    - id: slurry
      title: Mix the slurry
      text: >-
        Mix {{ingredients}} in a separate bowl. The slurry will settle; stir it again immediately
        before adding it to the hot gravy.
    - id: noodles
      title: Prepare the noodles
      text: >-
        Use {{ingredients}} to prepare the noodles according to their package until just tender. For
        fresh raw Hong Kong-style noodles, start checking at about 1 minute rather than assuming
        every product has the same cooking time. Rinse cool, drain thoroughly and shake off surface
        water. Keep or refresh the boiling water for the greens.
    - id: cake
      title: Fry the first side
      text: >-
        Heat {{ingredients}} in a nonstick pan over heat permitted by its instructions. Spread the
        drained noodles into a thin, even cake. Fry undisturbed, checking the underside at about 5
        minutes; it should release with a golden, crisp bottom. Use more cakes or pan loads if the
        measured noodles cannot fit in a thin layer, dividing the measured cake oil proportionally
        among them.
    - id: flip
      title: Crisp the second side
      text: >-
        Loosen and flip the cake, in sections if needed. Crisp the other side in the oil already in
        the pan until golden, then transfer to a serving platter.
    - id: greens
      title: Blanch the greens
      text: >-
        Blanch {{ingredients}} in the boiling water, starting to check at 30 seconds. Continue until
        the stems are tender enough to eat; thicker stems may take longer than leaves. Drain and
        arrange around the noodle cake.
    - id: vegetables
      title: Cook carrots and mushrooms
      text: >-
        Have {{ingredients}} ready. Heat the oil in a wok or skillet, then stir-fry the carrots and
        mushrooms until the carrots lose their hard raw center and the mushrooms soften. Work in
        manageable batches if needed; gather all the vegetables for the gravy.
    - id: aromatics
      title: Add the aromatics
      text: >-
        Add {{ingredients}} to the vegetables and stir briefly until fragrant, about 30 seconds.
        Keep the garlic moving so it does not burn.
    - id: sear
      title: Sear the shrimp
      text: >-
        Add the prepared shrimp to the hot wok in a manageable layer, moving vegetables aside or
        cooking shrimp in batches if necessary. Start checking at about 1 minute per side, then add
        {{ingredients}}. The gravy step completes cooking; continue directly to it.
    - id: gravy
      title: Finish the gravy
      text: >-
        Pour in the prepared gravy base and bring it to a boil. Stir the slurry again and add it
        gradually, letting each addition thicken before adding more. Stop when the gravy lightly
        coats a spoon; the entire prepared slurry may not be needed. Cook until every shrimp is
        firm, pearly and opaque, and all the carrots are tender. Do not judge doneness from the
        searing time alone. Discard any unused slurry.
    - id: serve
      title: Serve immediately
      text: >-
        Pour all the hot shrimp, vegetables and gravy over the center of the noodle cake, leaving
        some edges uncovered for crunch. Divide among the portions and serve immediately.
learning:
  focus: Crisp a drained noodle cake before finishing a shrimp gravy
  outcome: >-
    Golden noodle edges surround a softer center, with tender vegetables, fully cooked shrimp and a
    glossy gravy that coats rather than floods the cake.
  techniques:
    - starch
    - browning
    - gentle-proteins
  before:
    - >-
      Check the fresh noodle package for its cooking state. Drain well before frying; water carried
      into the pan delays crust formation.
    - >-
      Use a nonstick pan within its permitted heat range. The noodles need a thin layer; larger
      batches require more cakes and more time. A separate wok or skillet lets you finish the gravy
      while the cake stays on its platter.
    - >-
      Have the sauce and slurry mixed before searing shrimp. The combined half-cup
      carrot-and-mushroom measure has no prescribed split; keep that total and cut carrots thinly.
  checkpoints:
    - step: 5
      cue: The underside is golden and releases as a crisp cake or sections.
      why: Surface moisture must leave before the noodles brown; turning too early tears a wet cake.
    - step: 11
      cue: 'Gravy coats a spoon and every shrimp is firm, pearly and opaque.'
      why: >-
        Slurry thickening and shrimp doneness are separate checks; a thick sauce does not establish
        that shrimp are cooked.
  troubleshooting:
    - problem: The noodle cake stays pale and soft
      cause: The noodles retained water or the layer is too thick.
      fix: >-
        Keep frying within the pan’s permitted heat range until the underside dries and browns. For
        remaining noodles, drain more thoroughly and use thinner cakes; do not force a large wet
        mound into one pan.
    - problem: The gravy becomes a stiff gel
      cause: More slurry was added than the gravy needed.
      fix: >-
        Stop adding slurry as soon as the gravy coats a spoon. Add it gradually while stirring; the
        measured stock is the complete gravy base, so do not rely on an unlisted extra stock dose.
  storage: >-
    Refrigerate in shallow containers within 2 hours, or 1 hour above 90°F / 32°C; keep at 40°F /
    4°C or colder and use within 3–4 days. Reheat leftovers to 165°F / 74°C throughout, turning and
    stirring for even heating. Store the cake separately from the gravy when possible; reheating
    will soften it. USDA additionally recommends bringing leftover sauces and gravies to a rolling
    boil: stir the gravy for even heat and keep that boil brief, since prolonged heating thickens
    the gravy and toughens shrimp.
  timing: >-
    Plan about 1 hour for the original batch: roughly 35 minutes for shrimp treatment, vegetable
    preparation and noodle draining, and about 25 minutes for both cake faces, greens and gravy.
    Preparation can overlap the refrigerated 5-minute treatment. Package cooking, large stems and
    extra cakes or shrimp loads extend elapsed time; the two sides of a cake are sequential.
  sources:
    - title: The Woks of Life — Seafood pan-fried noodles
      url: 'https://thewoksoflife.com/seafood-pan-fried-noodles/'
    - title: FDA — Selecting and serving seafood safely
      url: >-
        https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely
    - title: FDA — Safe food handling
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling'
    - title: USDA FSIS — Leftovers and food safety
      url: >-
        https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

This Cantonese-style noodle cake is crisp at the edges and softer beneath its shrimp gravy. Drain the fresh egg noodles well, brown both faces, and pour the glossy gravy over the center just before serving.

## Directions

1. **Prepare the shrimp:** Have large shrimp, baking soda, and shrimp-rinsing water ready. Toss the shrimp with the baking soda and refrigerate for 5 minutes, then rinse thoroughly with the rinsing water and pat dry. Keep nearby food and clean utensils away from splashes; clean the sink and work surface after rinsing. Keep the shrimp refrigerated while preparing the noodles.
2. **Mix the gravy base:** Combine chicken stock, oyster sauce, soy sauce, toasted sesame oil, and white pepper in a bowl and set beside the stove.
3. **Mix the slurry:** Mix cornstarch for the slurry and water for the slurry in a separate bowl. The slurry will settle; stir it again immediately before adding it to the hot gravy.
4. **Prepare the noodles:** Use fresh Hong Kong-style egg noodles and cooking water to prepare the noodles according to their package until just tender. For fresh raw Hong Kong-style noodles, start checking at about 1 minute rather than assuming every product has the same cooking time. Rinse cool, drain thoroughly and shake off surface water. Keep or refresh the boiling water for the greens.
5. **Fry the first side:** Heat vegetable oil for the noodle cake in a nonstick pan over heat permitted by its instructions. Spread the drained noodles into a thin, even cake. Fry undisturbed, checking the underside at about 5 minutes; it should release with a golden, crisp bottom. Use more cakes or pan loads if the measured noodles cannot fit in a thin layer, dividing the measured cake oil proportionally among them.
6. **Crisp the second side:** Loosen and flip the cake, in sections if needed. Crisp the other side in the oil already in the pan until golden, then transfer to a serving platter.
7. **Blanch the greens:** Blanch yu choy or bok choy in the boiling water, starting to check at 30 seconds. Continue until the stems are tender enough to eat; thicker stems may take longer than leaves. Drain and arrange around the noodle cake.
8. **Cook carrots and mushrooms:** Have sliced carrots and mushrooms and vegetable oil for the wok ready. Heat the oil in a wok or skillet, then stir-fry the carrots and mushrooms until the carrots lose their hard raw center and the mushrooms soften. Work in manageable batches if needed; gather all the vegetables for the gravy.
9. **Add the aromatics:** Add ginger and garlic cloves to the vegetables and stir briefly until fragrant, about 30 seconds. Keep the garlic moving so it does not burn.
10. **Sear the shrimp:** Add the prepared shrimp to the hot wok in a manageable layer, moving vegetables aside or cooking shrimp in batches if necessary. Start checking at about 1 minute per side, then add Shaoxing wine. The gravy step completes cooking; continue directly to it.
11. **Finish the gravy:** Pour in the prepared gravy base and bring it to a boil. Stir the slurry again and add it gradually, letting each addition thicken before adding more. Stop when the gravy lightly coats a spoon; the entire prepared slurry may not be needed. Cook until every shrimp is firm, pearly and opaque, and all the carrots are tender. Do not judge doneness from the searing time alone. Discard any unused slurry.
12. **Serve immediately:** Pour all the hot shrimp, vegetables and gravy over the center of the noodle cake, leaving some edges uncovered for crunch. Divide among the portions and serve immediately.
