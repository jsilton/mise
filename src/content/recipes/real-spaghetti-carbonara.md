---
miseId: 13b1c33d-e6dd-492a-ab73-8eac6c1b3281
title: Spaghetti Carbonara
difficulty: intermediate
cookingMethods:
  - saute
  - boil
occasions:
  - weeknight
  - date-night
  - comfort-food
flavorProfile:
  - umami
  - rich
cuisines:
  - Italian
role: main
vibe: quick
prepTime: 5 min
cookTime: 15 min
totalTime: 'About 20 min, plus pasta-water heating that does not overlap preparation'
servings: 4 portions
seasons:
  - year-round
nutritionalDensity: hearty
leftovers: poor
pairsWith:
  - avocado-kale-caesar-salad
  - garlic-bread
ingredients:
  - '--- Pasta and sauce ---'
  - 1 lb spaghetti or rigatoni
  - '--- Egg and pork sauce ---'
  - '4 oz guanciale or pancetta, thickly diced; check the product cooking instructions'
  - 2 large pasteurized whole eggs
  - 2 large pasteurized egg yolks
  - '1 cup Pecorino Romano or Parmesan, freshly grated'
  - 1 tsp freshly cracked black pepper
  - 'water, enough to cook the pasta; reserve some before draining'
  - 'salt, for the pasta water'
  - 'additional Pecorino, as desired at serving, separate from the measured sauce cheese'
  - 'additional black pepper, as desired at serving, separate from the measured sauce pepper'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: main
      name: Pasta and sauce
      ingredients:
        - id: pasta
          key: spaghetti-or-rigatoni
          name: spaghetti or rigatoni
          quantity:
            amount: 1
            unit: lb
          uses:
            - step: pasta
              share: 1
    - id: sauce
      name: Egg and pork sauce
      ingredients:
        - id: pork
          key: guanciale-or-pancetta
          name: guanciale or pancetta
          quantity:
            amount: 4
            unit: oz
          uses:
            - step: render
              share: 1
          preparation: thickly diced; check the product cooking instructions
        - id: eggs
          key: pasteurized-egg
          name: large pasteurized whole egg
          quantity:
            amount: 2
            unit: count
          uses:
            - step: warm
              share: 1
          plural: large pasteurized whole eggs
        - id: yolks
          key: pasteurized-egg-yolk
          name: large pasteurized egg yolk
          quantity:
            amount: 2
            unit: count
          uses:
            - step: warm
              share: 1
          plural: large pasteurized egg yolks
        - id: cheese
          key: pecorino-or-parmesan
          name: Pecorino Romano or Parmesan
          quantity:
            amount: 1
            unit: cup
          uses:
            - step: warm
              share: 1
          preparation: freshly grated
        - id: pepper
          key: black-pepper
          name: freshly cracked black pepper
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: warm
              share: 1
        - id: water
          key: water
          name: water
          allowance: enough to cook the pasta; reserve some before draining
          uses:
            - step: pasta
              share: 1
          role: cooking-water
        - id: salt
          key: salt
          name: salt
          allowance: for the pasta water
          uses:
            - step: pasta
              share: 1
        - id: extra-cheese
          key: pecorino
          name: additional Pecorino
          allowance: 'as desired at serving, separate from the measured sauce cheese'
          uses:
            - step: serve
              share: 1
          role: garnish
        - id: extra-pepper
          key: black-pepper
          name: additional black pepper
          allowance: 'as desired at serving, separate from the measured sauce pepper'
          uses:
            - step: serve
              share: 1
          role: garnish
  steps:
    - id: pasta
      title: Cook pasta
      text: 'Use {{ingredients}}. First bring the cooking water to a boil and salt it, then add the pasta. Begin checking the pasta 1 minute before its package time; continue until al dente rather than draining a still-hard center. Prepare the sauce while the pasta cooks.'
    - id: render
      title: Render pork
      text: 'Cook {{ingredients}} in a roomy skillet over medium heat until the fat renders and the pieces are crisp, following any product-specific cooking instructions. Remove the skillet from the heat and retain all the rendered fat and pork for the pasta.'
    - id: warm
      title: Warm sauce
      text: 'Whisk {{ingredients}} in a heatproof stainless-steel or glass bowl that sits securely over the pasta pot with its base above the boiling water. Use a mitt and whisk continuously, beginning checks after about 1 minute, just until warm and the cheese begins to soften. Remove the bowl if eggs start to set; this interval does not verify a fully cooked egg endpoint.'
    - id: reserve
      title: Reserve water
      text: 'Before draining, reserve starchy cooking water in a heatproof container: the original 1 lb pasta batch reserves 1 cup. Keep a proportional reserve for other batches, but add only what the sauce needs. Drain the al dente pasta.'
    - id: toss
      title: Combine off heat
      text: 'Keep the pork skillet off the heat. Add all the hot pasta to all the pork and rendered fat, then add all the warm egg-and-cheese mixture. Toss immediately.'
    - id: emulsify
      title: Adjust sauce
      text: 'Toss vigorously, beginning with about ¼ cup of the reserved pasta water for the original 1 lb batch and proportionally smaller or larger additions for another batch. The heat thickens the pasteurized egg mixture into a glossy coating, but appearance alone does not verify a fully cooked egg endpoint. Add more of the reserve only as needed until the sauce coats the pasta without a pool of water.'
    - id: serve
      title: Serve
      text: 'Serve immediately with {{ingredients}} if desired. Do not put the egg sauce back over high direct heat to hold it.'
learning:
  focus: Combine a rich egg-and-cheese sauce off direct heat
  outcome: Al dente pasta with crisp pork and a glossy coating rather than curds or watery sauce.
  techniques:
    - emulsions
    - temperature
  before:
    - Prepare the complete egg/cheese/pepper mixture and heatproof reserve container before draining. Use a bowl that rests securely above boiling water and handle it with a mitt.
    - Both whole eggs and separate yolks must be pasteurized for this lightly heated method. Read actual pork and egg-product labels.
    - Use a skillet large enough to toss the listed pasta with all the pork fat and sauce; divide complete proportionate loads if necessary.
  checkpoints:
    - step: 3
      cue: The mixture is warm and cheese softens without egg curds forming.
      why: The brief gentle warming helps blending; a fixed minute does not certify egg cooking.
    - step: 5
      cue: The skillet is off direct heat before all the egg mixture is added.
      why: Hot direct heat can set the eggs faster than they spread through the pasta.
    - step: 6
      cue: The sauce coats the pasta with no loose pool and no curds.
      why: Small water additions loosen the full cheese-and-fat mixture without diluting it at once.
  troubleshooting:
    - problem: The egg sauce becomes grainy or scrambled
      cause: 'The bowl or skillet was too hot, or tossing was delayed.'
      fix: 'Remove direct heat immediately. A small water addition may loosen the coating, but fully set egg curds cannot be returned to a smooth emulsion.'
    - problem: The sauce is thin and pools
      cause: Too much reserved water was added at once.
      fix: Keep tossing briefly with the hot pasta off heat. Do not add extra unlisted cheese or boil the egg sauce to force it thick; a badly diluted coating cannot be repaired by the original formula alone.
  timing: 'The 5-minute preparation/15-minute cooking plan assumes the cooking and rendering work overlap. Water heating that does not overlap preparation, actual package times, bowl warming and extra pan loads extend elapsed time. This is an immediate-service sauce, not a holding plan.'
  storage: 'Serve promptly. If keeping leftovers, refrigerate in shallow containers within 2 hours, or 1 hour above 90°F / 32°C, at 40°F / 4°C or below, and use within 3–4 days. Reheat leftovers to 165°F / 74°C throughout; their eggs will set further and the fresh silky texture may not return. That leftover endpoint is separate from the first-cook pasteurized-egg method.'
  sources:
    - title: FDA pasteurized eggs for raw/lightly cooked dishes
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety'
    - title: USDA leftovers
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety'
  review:
    status: editorial-review
    date: '2026-10-06'
  substitutions:
    - ingredient: Guanciale
      alternative: Same listed full amount of pancetta
      effect: Render the chosen pork following its product instructions and retain all the fat for the same complete sauce.
    - ingredient: Pecorino Romano
      alternative: Same listed full amount of Parmesan
      effect: Use the complete measured cheese in the pasteurized egg mixture and adjust with reserved water by the same coating cue.
---

## Chef's Note

Rendered guanciale or pancetta, the full grated cheese and pasteurized eggs make this egg-and-cheese sauce. Keep the skillet off direct heat when the egg mixture goes in, then use reserved starchy water in small additions to turn it into a glossy coating. This lightly heated sauce uses pasteurized eggs rather than relying on its appearance as evidence that ordinary raw eggs have cooked.

## Directions

1. **Cook pasta:** Use spaghetti or rigatoni, water, and salt. First bring the cooking water to a boil and salt it, then add the pasta. Begin checking the pasta 1 minute before its package time; continue until al dente rather than draining a still-hard center. Prepare the sauce while the pasta cooks.
2. **Render pork:** Cook guanciale or pancetta in a roomy skillet over medium heat until the fat renders and the pieces are crisp, following any product-specific cooking instructions. Remove the skillet from the heat and retain all the rendered fat and pork for the pasta.
3. **Warm sauce:** Whisk large pasteurized whole eggs, large pasteurized egg yolks, Pecorino Romano or Parmesan, and freshly cracked black pepper in a heatproof stainless-steel or glass bowl that sits securely over the pasta pot with its base above the boiling water. Use a mitt and whisk continuously, beginning checks after about 1 minute, just until warm and the cheese begins to soften. Remove the bowl if eggs start to set; this interval does not verify a fully cooked egg endpoint.
4. **Reserve water:** Before draining, reserve starchy cooking water in a heatproof container: the original 1 lb pasta batch reserves 1 cup. Keep a proportional reserve for other batches, but add only what the sauce needs. Drain the al dente pasta.
5. **Combine off heat:** Keep the pork skillet off the heat. Add all the hot pasta to all the pork and rendered fat, then add all the warm egg-and-cheese mixture. Toss immediately.
6. **Adjust sauce:** Toss vigorously, beginning with about ¼ cup of the reserved pasta water for the original 1 lb batch and proportionally smaller or larger additions for another batch. The heat thickens the pasteurized egg mixture into a glossy coating, but appearance alone does not verify a fully cooked egg endpoint. Add more of the reserve only as needed until the sauce coats the pasta without a pool of water.
7. **Serve:** Serve immediately with additional Pecorino and additional black pepper if desired. Do not put the egg sauce back over high direct heat to hold it.

## Cooking Notes

Use shell eggs labeled pasteurized, or a suitable pasteurized egg product following its label, for both the whole-egg and yolk supplies. For fractional quantities, use the corresponding fraction of a beaten pasteurized egg or yolk rather than rounding. A glossy sauce does not establish a measured 160°F egg-dish endpoint; diners requiring a fully cooked egg dish need that separate preparation.
