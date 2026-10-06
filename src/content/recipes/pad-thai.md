---
miseId: 40012e06-96a2-4ceb-906e-7c8d1c569cf1
title: Pad Thai
difficulty: intermediate
cookingMethods:
  - fry
  - saute
  - boil
occasions:
  - comfort-food
flavorProfile:
  - spicy
  - sweet
  - acidic
cuisines:
  - Thai
role: main
vibe: comfort
prepTime: About 40 min including noodle soaking; product-dependent
cookTime: About 20 min; longer for extra pan loads
totalTime: About 1 hour; longer if noodles or pan loads need it
servings: 3 portions
pairsWith:
  - steamed-bok-choy-with-oyster-sauce
  - cantonese-wonton-broth
ingredients:
  - '--- Noodles and sauce ---'
  - >-
    1/2 package (1 lb) (8 oz) dried wide rice noodles (bánh phở), check the package’s soaking
    instructions
  - 'noodle-soaking water, enough to cover the noodles'
  - >-
    2 tbsp tamarind paste made from pulp and water, ready to use; not a dry block or undiluted
    stronger concentrate
  - '2 tbsp palm sugar or granulated sugar, finely chopped if solid palm sugar'
  - 4 tsp fish sauce
  - 'water for finishing the noodles, as needed, added one tablespoon at a time'
  - '--- Stir-fry and garnish ---'
  - 2 tbsp cooking oil
  - '1/3 cup extra-firm tofu, drained, patted dry and julienned'
  - '1 shallot, minced'
  - '3 garlic cloves, minced'
  - 1/2 tsp ground dried chili
  - 1 large egg
  - '1/4 lb shrimp, raw, peeled and deveined; fully thawed if frozen'
  - '1 1/3 cups fresh bean sprouts, washed and drained'
  - '1 1/2 cups Chinese chives or green onions, cut into short pieces'
  - '1/2 cup peanuts, already toasted and crushed'
  - '1/2 lime, cut into wedges'
origin: Thailand
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: good
source: Adapted from Thaitable.com
sourceUrl: 'http://www.thaitable.com/thai/recipe/pad-thai'
formula:
  version: 1
  yield:
    amount: 3
    unit: portion
  components:
    - id: noodles
      name: Noodles and sauce
      ingredients:
        - id: noodles
          key: wide-rice-noodles
          name: dried wide rice noodles (bánh phở)
          quantity:
            amount: 1/2
            unit: package
          uses:
            - step: soak
              share: 1
          packageSize:
            amount: 1
            unit: lb
          equivalents:
            - amount: 8
              unit: oz
          preparation: check the package’s soaking instructions
        - id: soak-water
          key: water
          name: noodle-soaking water
          allowance: enough to cover the noodles
          uses:
            - step: soak
              share: 1
          role: cooking-water
        - id: tamarind
          key: tamarind-pulp
          name: tamarind paste made from pulp and water
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
          preparation: ready to use; not a dry block or undiluted stronger concentrate
        - id: sugar
          key: palm-or-granulated-sugar
          name: palm sugar or granulated sugar
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: sauce
              share: 1
          preparation: finely chopped if solid palm sugar
        - id: fish-sauce
          key: fish-sauce
          name: fish sauce
          quantity:
            amount: 4
            unit: tsp
          uses:
            - step: sauce
              share: 1
        - id: toss-water
          key: water
          name: water for finishing the noodles
          allowance: 'as needed, added one tablespoon at a time'
          uses:
            - step: noodles
              share: 1
          role: cooking-water
    - id: stir-fry
      name: Stir-fry and garnish
      ingredients:
        - id: oil
          key: cooking-oil
          name: cooking oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: tofu
              share: 1/2
            - step: aromatics
              share: 1/2
        - id: tofu
          key: extra-firm-tofu
          name: extra-firm tofu
          quantity:
            amount: 1/3
            unit: cup
          uses:
            - step: tofu
              share: 1
          preparation: 'drained, patted dry and julienned'
        - id: shallot
          key: shallot
          name: shallot
          quantity:
            amount: 1
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: shallots
          preparation: minced
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 3
            unit: count
          uses:
            - step: aromatics
              share: 1
          plural: garlic cloves
          preparation: minced
        - id: chili
          key: ground-dried-chili
          name: ground dried chili
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: aromatics
              share: 1
        - id: egg
          key: egg
          name: large egg
          quantity:
            amount: 1
            unit: count
          uses:
            - step: egg
              share: 1
          plural: large eggs
        - id: shrimp
          key: shrimp
          name: shrimp
          quantity:
            amount: 1/4
            unit: lb
          uses:
            - step: shrimp
              share: 1
          preparation: 'raw, peeled and deveined; fully thawed if frozen'
        - id: sprouts
          key: bean-sprouts
          name: fresh bean sprouts
          quantity:
            amount: 1 1/3
            unit: cup
          uses:
            - step: sprouts
              share: 1
          preparation: washed and drained
        - id: chives
          key: chinese-chives-or-green-onions
          name: Chinese chives or green onions
          quantity:
            amount: 1 1/2
            unit: cup
          uses:
            - step: chives
              share: 1
          preparation: cut into short pieces
        - id: peanuts
          key: peanuts
          name: peanuts
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: serve
              share: 1
          preparation: already toasted and crushed
        - id: lime
          key: lime
          name: lime
          quantity:
            amount: 1/2
            unit: count
          uses:
            - step: serve
              share: 1
          plural: limes
          preparation: cut into wedges
  steps:
    - id: soak
      title: Soak the noodles
      text: >-
        Use {{ingredients}} to soak the dry noodles according to the package’s stir-fry guidance,
        checking for strands that bend but remain firm rather than fully expanded and soft. Lukewarm
        or room-temperature soaking is appropriate for Thai rice sticks; wide noodles can take
        longer. Drain when flexible. Prepare the remaining ingredients during the soak.
    - id: sauce
      title: Mix the sauce
      text: >-
        Combine {{ingredients}}, stirring to dissolve the sugar. Have the sauce ready before the wok
        gets hot.
    - id: tofu
      title: Fry the tofu
      text: >-
        Have {{ingredients}} ready. Heat this half of the measured cooking oil in a wok or large
        skillet and fry the tofu until golden and firm, then remove to a plate. Keep the already
        toasted peanuts for serving.
    - id: aromatics
      title: 'Bloom garlic, shallot and chili'
      text: >-
        Have {{ingredients}} ready. Heat the remaining measured oil in the wok, then add the
        shallot, garlic and dried chili. Stir about 30 seconds until fragrant, keeping the garlic
        and chili moving so they do not scorch.
    - id: noodles
      title: Toss the noodles and sauce
      text: >-
        Add the drained noodles and prepared sauce. Stir-fry over high heat, lifting and turning to
        coat the noodles. Use {{ingredients}} only if the strands remain too firm: add a tablespoon
        at a time, letting each addition absorb, until the noodles are tender and chewy. Use
        manageable loads if needed and divide all ingredients proportionally; do not force a thick
        wet mound into one pan.
    - id: egg
      title: Set the egg
      text: >-
        Push the noodles aside. Add {{ingredients}} to the cleared space, scramble until set, then
        fold into the noodles.
    - id: shrimp
      title: Cook the shrimp
      text: >-
        Add {{ingredients}} and all the cooked tofu. Toss, starting to check at about 2 minutes, and
        continue until every shrimp is firm, pearly and opaque. Pink color and the short time alone
        are not doneness checks.
    - id: sprouts
      title: Cook the sprouts
      text: >-
        Fold in {{ingredients}}. Start checking at about 15 seconds, but continue until thoroughly
        cooked rather than lightly warmed, especially when serving children or other diners
        vulnerable to foodborne illness.
    - id: chives
      title: Finish with chives
      text: >-
        Fold in {{ingredients}} and toss briefly, just until they soften. The noodles should be
        chewy and coated, without a pool of loose sauce.
    - id: serve
      title: Serve
      text: >-
        Divide the noodles among the portions and top with all the {{ingredients}}. Serve
        immediately; squeeze the lime over the noodles at the table.
learning:
  focus: Judge noodle hydration before and during a fast Pad Thai stir-fry
  outcome: >-
    Chewy, evenly seasoned rice noodles with set egg, fully cooked shrimp, tofu and sprouts,
    finished with the full peanut garnish and lime.
  techniques:
    - starch
    - stir-frying
    - seasoning
  before:
    - >-
      The original batch uses half of a 1-pound package, or 8 ounces. At any batch size, follow
      the listed noodle weight if your package has a different size. Wide bánh phở noodles need
      their own soaking cues; the thinner Thai rice-stick route uses noodles about the width of
      linguine.
    - >-
      Use ready-to-use tamarind pulp-and-water paste for the measured sauce. A dry block or
      undiluted stronger concentrate is not the same measured ingredient; check the product’s form
      and strength.
    - >-
      Have the sauce mixed, aromatics minced and tofu dried before heating the wok. The peanuts are
      already toasted and go on the finished noodles.
  checkpoints:
    - step: 1
      cue: A drained strand bends without being fully expanded and soft.
      why: >-
        It will absorb sauce and any small additions of water in the pan; oversoaked noodles can
        lose their chew.
    - step: 5
      cue: The noodles are tender and chewy without free liquid pooling in the wok.
      why: >-
        Their remaining hydration need varies by width and product; adding water gradually avoids
        flooding the measured sauce.
    - step: 7
      cue: 'Every shrimp is firm, pearly and opaque.'
      why: >-
        A pink surface can appear before a thick shrimp is fully cooked, and more pan loads change
        the clock.
  troubleshooting:
    - problem: Noodles remain hard
      cause: The soak was too short for their width or they need more hydration in the wok.
      fix: >-
        Use the listed finishing-water allowance one tablespoon at a time, tossing and letting it
        absorb before another addition. Taste a noodle for tenderness before adding more water.
    - problem: Noodles break into a soft mass
      cause: They were oversoaked or aggressively stirred.
      fix: >-
        Lift and turn gently; a broken, overhydrated strand cannot regain its original structure.
        For the next batch, stop soaking when strands bend but remain firm.
  substitutions:
    - ingredient: Chinese chives
      alternative: Green onions
      effect: >-
        Green onions give a sharper onion flavor; cut the thicker white parts finely enough to
        soften in the brief final toss.
  storage: >-
    Refrigerate in shallow containers within 2 hours, or 1 hour above 90°F / 32°C; keep at 40°F /
    4°C or colder and use within 3–4 days. Reheat leftovers to 165°F / 74°C throughout, turning and
    stirring for even heating. Rice noodles soften and peanuts lose crunch against sauce; keep any
    garnish intended for leftovers separate.
  timing: >-
    Allow about 1 hour for the original batch, with roughly 40 minutes of noodle soaking and
    overlapping preparation and about 20 minutes at the stove. The soak is governed by the actual
    noodle package and bending cue, not a mandatory 40 minutes. Longer soaking, thoroughly cooking
    sprouts and extra pan loads extend elapsed time.
  sources:
    - title: ThaiTable — Pad Thai
      url: 'https://www.thaitable.com/recipes/pad-thai'
    - title: ThaiTable — Thai rice noodles
      url: 'https://www.thaitable.com/ingredients/thai-rice-noodles'
    - title: ThaiTable — Tamarind
      url: 'https://www.thaitable.com/ingredients/tamarind'
    - title: FDA — Selecting and serving seafood safely
      url: >-
        https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely
    - title: FDA — Selecting and serving produce safely
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-produce-safely'
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

Pad Thai combines tamarind, fish sauce and sugar with chewy rice noodles, shrimp, tofu, lime and peanuts. This version keeps wide noodles and a generous toasted-peanut garnish. Have everything ready before frying so you can judge noodle hydration as you toss. For less heat, omit the dried chili.

## Directions

1. **Soak the noodles:** Use dried wide rice noodles (bánh phở) and noodle-soaking water to soak the dry noodles according to the package’s stir-fry guidance, checking for strands that bend but remain firm rather than fully expanded and soft. Lukewarm or room-temperature soaking is appropriate for Thai rice sticks; wide noodles can take longer. Drain when flexible. Prepare the remaining ingredients during the soak.
2. **Mix the sauce:** Combine tamarind paste made from pulp and water, palm sugar or granulated sugar, and fish sauce, stirring to dissolve the sugar. Have the sauce ready before the wok gets hot.
3. **Fry the tofu:** Have 1/2 of the cooking oil and extra-firm tofu ready. Heat this half of the measured cooking oil in a wok or large skillet and fry the tofu until golden and firm, then remove to a plate. Keep the already toasted peanuts for serving.
4. **Bloom garlic, shallot and chili:** Have 1/2 of the cooking oil, shallot, garlic cloves, and ground dried chili ready. Heat the remaining measured oil in the wok, then add the shallot, garlic and dried chili. Stir about 30 seconds until fragrant, keeping the garlic and chili moving so they do not scorch.
5. **Toss the noodles and sauce:** Add the drained noodles and prepared sauce. Stir-fry over high heat, lifting and turning to coat the noodles. Use water for finishing the noodles only if the strands remain too firm: add a tablespoon at a time, letting each addition absorb, until the noodles are tender and chewy. Use manageable loads if needed and divide all ingredients proportionally; do not force a thick wet mound into one pan.
6. **Set the egg:** Push the noodles aside. Add large egg to the cleared space, scramble until set, then fold into the noodles.
7. **Cook the shrimp:** Add shrimp and all the cooked tofu. Toss, starting to check at about 2 minutes, and continue until every shrimp is firm, pearly and opaque. Pink color and the short time alone are not doneness checks.
8. **Cook the sprouts:** Fold in fresh bean sprouts. Start checking at about 15 seconds, but continue until thoroughly cooked rather than lightly warmed, especially when serving children or other diners vulnerable to foodborne illness.
9. **Finish with chives:** Fold in Chinese chives or green onions and toss briefly, just until they soften. The noodles should be chewy and coated, without a pool of loose sauce.
10. **Serve:** Divide the noodles among the portions and top with all the peanuts and lime. Serve immediately; squeeze the lime over the noodles at the table.

## Sprout variation

For a raw-sprout garnish, reserve half the measured sprouts before frying and cook the other half with the noodles; the reserved half replaces part of the cooked sprouts. Children, older adults, pregnant people and people with weakened immune systems should avoid raw or lightly cooked sprouts; use the fully cooked route for them.
