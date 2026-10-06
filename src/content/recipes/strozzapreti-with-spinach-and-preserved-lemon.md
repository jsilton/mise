---
miseId: 71021dca-48b1-457c-beae-fe7ff8585e1c
title: Strozzapreti with Preserved Lemon & Spinach
difficulty: easy
cookingMethods:
  - fry
  - saute
  - boil
dietary:
  - vegetarian
occasions:
  - weeknight
  - quick-lunch
  - light-and-fresh
flavorProfile:
  - savory
  - acidic
  - rich
cuisines:
  - Italian
role: main
vibe: nutritious
prepTime: 10 min
cookTime: 15–25 min
totalTime: 25–35 min
servings: 4 portions
seasons:
  - spring
  - summer
  - year-round
nutritionalDensity: moderate
leftovers: good
pairsWith:
  - vietnamese-grilled-chicken
  - roasted-root-vegetables
ingredients:
  - '--- Pasta and crumbs ---'
  - 12 oz fresh strozzapreti OR cavatappi
  - 8 tbsp (1 stick) unsalted butter
  - '1 tbsp preserved lemon peel, minced'
  - 1 tbsp fresh lemon juice
  - '2 bunches of flat-leaf spinach, trimmed, washed, drained; larger leaves torn'
  - 3/4 cup panko breadcrumbs
  - '1 garlic clove, crushed'
  - 1/2 tsp red pepper flakes
  - 1 tsp lemon zest
  - 2 tbsp olive oil
  - 'kosher salt and black pepper for crumbs, as needed'
  - 'water and salt for boiling pasta, as needed'
  - 'kosher salt and black pepper for finishing, as needed'
  - 'additional preserved lemon peel for optional finishing, as needed, optional'
  - 'additional lemon juice for optional finishing, as needed, optional'
source: Adapted from Bonappetit.com
sourceUrl: 'http://www.bonappetit.com/recipe/strozzapreti-with-spinach-and-preserved-lemon'
formula:
  version: 1
  yield:
    amount: 4
    unit: portion
  components:
    - id: main
      name: Pasta and crumbs
      ingredients:
        - id: pasta
          key: pasta
          name: fresh strozzapreti OR cavatappi
          quantity:
            amount: 12
            unit: oz
          uses:
            - step: boil
              share: 1
        - id: butter
          key: butter
          name: unsalted butter
          quantity:
            amount: 8
            unit: tbsp
          uses:
            - step: crumbs
              share: 1/4
            - step: wilt
              share: 3/4
          equivalents:
            - amount: 1
              unit: stick
        - id: peel
          key: peel
          name: preserved lemon peel
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: combine
              share: 1
          preparation: minced
        - id: juice
          key: juice
          name: fresh lemon juice
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: combine
              share: 1
        - id: spinach
          key: spinach
          name: bunch of flat-leaf spinach
          quantity:
            amount: 2
            unit: count
          uses:
            - step: wilt
              share: 1/2
            - step: combine
              share: 1/2
          plural: bunches of flat-leaf spinach
          preparation: 'trimmed, washed, drained; larger leaves torn'
        - id: panko
          key: panko
          name: panko breadcrumbs
          quantity:
            amount: 3/4
            unit: cup
          uses:
            - step: crumbs
              share: 1
        - id: garlic
          key: garlic
          name: garlic clove
          quantity:
            amount: 1
            unit: count
          uses:
            - step: crumbs
              share: 1
          plural: garlic cloves
          preparation: crushed
        - id: flakes
          key: flakes
          name: red pepper flakes
          quantity:
            amount: 1/2
            unit: tsp
          uses:
            - step: crumbs
              share: 1/2
            - step: combine
              share: 1/2
        - id: zest
          key: zest
          name: lemon zest
          quantity:
            amount: 1
            unit: tsp
          uses:
            - step: crumbs
              share: 1
        - id: oil
          key: oil
          name: olive oil
          quantity:
            amount: 2
            unit: tbsp
          uses:
            - step: crumbs
              share: 1
        - id: crumb-season
          key: crumb-season
          name: kosher salt and black pepper for crumbs
          allowance: as needed
          optional: false
          uses:
            - step: crumbs
              share: 1
        - id: water
          key: water
          name: water and salt for boiling pasta
          allowance: as needed
          optional: false
          uses:
            - step: boil
              share: 1
          role: cooking-water
        - id: finish-season
          key: finish-season
          name: kosher salt and black pepper for finishing
          allowance: as needed
          optional: false
          uses:
            - step: combine
              share: 1
        - id: extra-peel
          key: extra-peel
          name: additional preserved lemon peel for optional finishing
          allowance: as needed
          optional: true
          uses:
            - step: combine
              share: 1
        - id: extra-juice
          key: extra-juice
          name: additional lemon juice for optional finishing
          allowance: as needed
          optional: true
          uses:
            - step: combine
              share: 1
  steps:
    - id: crumbs
      title: Toast crumbs
      text: >-
        Make the topping with {{ingredients}} in a wide skillet: melt the butter
        with the oil over medium heat. Add garlic and pepper flakes; as they
        become fragrant, stir in the panko and stir until golden and crisp,
        checking after about 2 minutes. Stir in the zest, season with the listed
        crumb seasoning and transfer all the crumbs to a dry plate. Wipe out
        stray crumbs from the pan before browning butter.
    - id: boil
      title: Boil
      text: >-
        Cook {{ingredients}} until al dente according to the actual fresh or
        dried pasta package; the source’s roughly 5-minute fresh-pasta reference
        is not a dried-cavatappi clock. Drain.
    - id: wilt
      title: Brown and wilt
      text: >-
        Use {{ingredients}} for the first wilt: melt the butter in the cleaned
        skillet over medium heat, swirling until golden and nutty rather than
        dark or black. Add this spinach portion and toss until wilted.
    - id: combine
      title: Combine
      text: >-
        Finish with {{ingredients}} and all the drained pasta: add the measured
        peel and juice, remaining flakes and spinach, then toss until the
        spinach wilts and the pasta is coated, checking after about 1 minute
        rather than assuming 30 seconds works for every load. Season to taste,
        using additional peel or juice only if desired.
    - id: serve
      title: Serve
      text: >-
        Divide all the pasta and spinach among bowls and distribute all the
        reserved crumbs over the top.
learning:
  focus: Keep the crumb and pasta allocations distinct
  outcome: Wilted spinach and pasta under crisp golden crumbs.
  techniques:
    - browning
    - starch
  before:
    - >-
      Wash the trimmed spinach and drain it; tear larger leaves. Two bunches in
      the source are about 8 cups at original scale, but bunch size varies. Use
      the listed scaled bunch count and enough pan space to turn and wilt it.
    - >-
      Divide the butter one quarter for crumbs and three quarters for the sauce,
      and the source flakes equally between those stages. More pasta requires
      more boiling and skillet capacity, not darker butter or a multiplied
      browning clock.
  checkpoints:
    - step: 1
      cue: 'Crumbs are golden and crisp, not dark or soft.'
      why: They will not become crisper in the finished wet pasta.
    - step: 3
      cue: 'Butter is nutty and golden, then the first spinach portion collapses.'
      why: Burned butter cannot be repaired by adding spinach.
    - step: 4
      cue: All spinach has wilted and the pasta still has a little bite.
      why: Leaf size and pan loading govern this stage.
  troubleshooting:
    - problem: Crumbs turn wet
      cause: The topping sat in wet pasta before serving.
      fix: Keep the topping on a dry plate until the bowls are ready.
  substitutions:
    - ingredient: Pepper-flake allocation
      alternative: >-
        For the current all-flakes-in-crumbs variation, put the entire listed
        red-pepper-flake amount into step 1 and omit it from step 4; all other
        amounts and stages are unchanged.
      effect: >-
        This preserves the current allocation separately from the saved
        half-in-crumbs, half-in-pasta route.
    - ingredient: Finishing citrus
      alternative: >-
        Use a little of the optional additional preserved peel or lemon juice
        only if wanted after tasting the finished pasta.
      effect: >-
        These source allowances are separate from the full measured peel and
        juice; no acid addition is mandatory.
    - ingredient: Crumbs ahead
      alternative: >-
        Prepare the crumb topping up to one day ahead and keep it in an airtight
        container at room temperature.
      effect: >-
        This is the publisher’s plain crumb preparation plan, not a shelf-life
        test of assembled pasta.
  storage: >-
    Refrigerate leftovers promptly in shallow containers within 2 hours, or 1
    hour above 90°F / 32°C, at 40°F / 4°C or below. Use within 3–4 days and
    reheat throughout to 165°F / 74°C. Thaw frozen portions in the refrigerator.
    Keep the plain crumb topping separate from wet pasta; use its one-day
    preparation plan above.
  timing: >-
    Plan about 25–35 minutes for washing/prep, heating water, crumbs and butter,
    and pasta/wilting; some tasks overlap. Larger loads or dried pasta extend
    it.
  sources:
    - title: Bon Appétit — Preserved lemon spinach pasta
      url: >-
        http://www.bonappetit.com/recipe/strozzapreti-with-spinach-and-preserved-lemon
    - title: 'FoodSafety.gov — Clean, separate, cook and chill'
      url: 'https://www.foodsafety.gov/keep-food-safe/4-steps-to-food-safety'
    - title: FoodSafety.gov — Leftover handling
      url: 'https://www.foodsafety.gov/blog/game-day-food-safety-tips'
    - title: Emilia-Romagna Region — Traditional strozzapreti
      url: >-
        https://agricoltura.regione.emilia-romagna.it/dop-igp/altri-regimi-di-qualita/prodotti-tradizionali/pat-suddivisi-per-categoria/paste-fresche-panetteria-biscotteria-pasticceria-e-confetteria/strozzapreti-strozaprit
    - title: 'Nargisse Benkabbou — Moroccan preserved lemons, cultural use'
      url: 'https://www.mymoroccanfood.com/home/2015/6/24/preserved-lemons'
  review:
    status: editorial-review
    date: '2026-10-06'
---

## Chef's Note

Strozzapreti ("priest stranglers") is a hand-rolled pasta shape associated with Romagna. Preserved lemon, used in Moroccan tagines and salads, contributes salt as well as citrus. Make the crumbs first and keep them dry while cooking the pasta. Brown the remaining butter only to golden and nutty, then wilt the spinach in two additions. The measured preserved peel, juice and zest each have a separate destination; the crisp topping carries half the pepper flakes in the source route.

## Directions

1. **Toast crumbs:** Make the topping with 1/4 of the unsalted butter, panko breadcrumbs, garlic clove, 1/2 of the red pepper flakes, lemon zest, olive oil, and kosher salt and black pepper for crumbs in a wide skillet: melt the butter with the oil over medium heat. Add garlic and pepper flakes; as they become fragrant, stir in the panko and stir until golden and crisp, checking after about 2 minutes. Stir in the zest, season with the listed crumb seasoning and transfer all the crumbs to a dry plate. Wipe out stray crumbs from the pan before browning butter.
2. **Boil:** Cook fresh strozzapreti OR cavatappi and water and salt for boiling pasta until al dente according to the actual fresh or dried pasta package; the source’s roughly 5-minute fresh-pasta reference is not a dried-cavatappi clock. Drain.
3. **Brown and wilt:** Use 3/4 of the unsalted butter and 1/2 of the bunches of flat-leaf spinach for the first wilt: melt the butter in the cleaned skillet over medium heat, swirling until golden and nutty rather than dark or black. Add this spinach portion and toss until wilted.
4. **Combine:** Finish with preserved lemon peel, fresh lemon juice, 1/2 of the bunches of flat-leaf spinach, 1/2 of the red pepper flakes, kosher salt and black pepper for finishing, additional preserved lemon peel for optional finishing (if using), and additional lemon juice for optional finishing (if using) and all the drained pasta: add the measured peel and juice, remaining flakes and spinach, then toss until the spinach wilts and the pasta is coated, checking after about 1 minute rather than assuming 30 seconds works for every load. Season to taste, using additional peel or juice only if desired.
5. **Serve:** Divide all the pasta and spinach among bowls and distribute all the reserved crumbs over the top.
