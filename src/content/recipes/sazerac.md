---
miseId: 11ded034-b32a-4df6-b89d-0762912afbb5
title: Sazerac
prepTime: 7 min
cookTime: 0 min
totalTime: 7 min
servings: 1 portion
role: drink
vibe: technical
difficulty: intermediate
cuisines:
  - American
occasions:
  - entertaining
  - date-night
  - comfort-food
seasons:
  - year-round
  - fall
  - winter
flavorProfile:
  - herbaceous
  - aromatic
  - spicy
nutritionalDensity: light
leftovers: poor
equipment:
  - rocks-glass
  - mixing-glass
  - bar-spoon
  - jigger
  - strainer
cookingMethods:
  - no-cook
pairsWith:
  - honey-glazed-carrots
  - old-fashioned-strawberry-ice-cream
  - roasted-sunchokes-with-brown-butter-cider-vinaigrette
  - the-new-england-express
ingredients:
  - '--- Glass preparation ---'
  - 'ice and water, as needed to chill the serving glass, optional'
  - >-
    absinthe or dry anise-flavored spirit, about ¼ fluid ounce per glass, enough
    to coat; discard excess
  - '--- Sazerac ---'
  - 2 oz rye whiskey or Cognac
  - 1/4 oz simple syrup
  - 3 dashes of New Orleans-style anise-forward bitters
  - '1–2 dashes of aromatic bitters, optional'
  - 'ice cubes, as needed for stirring'
  - '--- Lemon ---'
  - 'lemon peel, for each serving'
origin: United States
description: >-
  Rye or Cognac stirred with syrup and bitters, served without ice in an
  anise-rinsed glass.
formula:
  version: 1
  yield:
    amount: 1
    unit: portion
  components:
    - id: glass
      name: Glass preparation
      ingredients:
        - id: chill
          key: chill
          name: ice and water
          allowance: as needed to chill the serving glass
          optional: true
          role: cooking-water
          uses:
            - step: prep
              share: 1
        - id: rinse
          key: rinse
          name: absinthe or dry anise-flavored spirit
          allowance: 'about ¼ fluid ounce per glass, enough to coat; discard excess'
          role: discarded
          uses:
            - step: rinse
              share: 1
    - id: drink
      name: Sazerac
      ingredients:
        - id: spirit
          key: spirit
          name: rye whiskey or Cognac
          quantity:
            amount: 2
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: syrup
          key: syrup
          name: simple syrup
          quantity:
            amount: 1/4
            unit: oz
          uses:
            - step: mix
              share: 1
        - id: new-orleans-bitters
          key: new-orleans-bitters
          name: dash of New Orleans-style anise-forward bitters
          plural: dashes of New Orleans-style anise-forward bitters
          quantity:
            amount: 3
            unit: count
          uses:
            - step: mix
              share: 1
        - id: aromatic-bitters
          key: aromatic-bitters
          name: dash of aromatic bitters
          plural: dashes of aromatic bitters
          quantity:
            amount: 1
            max: 2
            unit: count
          optional: true
          uses:
            - step: mix
              share: 1
        - id: mixing-ice
          key: mixing-ice
          name: ice cubes
          allowance: as needed for stirring
          role: cooking-water
          uses:
            - step: mix
              share: 1
    - id: finish
      name: Lemon
      ingredients:
        - id: lemon
          key: lemon
          name: lemon peel
          allowance: for each serving
          role: garnish
          uses:
            - step: garnish
              share: 1
  steps:
    - id: prep
      title: Chill the serving glass
      text: >-
        Use {{ingredients}} if the rocks glass is not already chilled in the
        freezer. Let it chill while measuring the drink. Use a glass with room
        for the stirred liquid and headroom; serving is without ice. All ounce
        measures are fluid ounces.
    - id: mix
      title: Combine
      text: >-
        Add {{ingredients}} to a mixing glass with room to stir. Use the
        optional aromatic bitters only if wanted in this version; keep the New
        Orleans-style bitters in the drink. Dash size varies with bottle and
        pouring motion.
    - id: stir
      title: Stir and check
      text: >-
        Stir smoothly until the whiskey or Cognac mixture is well chilled. Taste
        a small sample with a clean spoon for a rounded spirit-and-bitters
        finish, and continue briefly if still warm or harsh. Stop before it
        becomes thin. The anise rinse is added in the serving glass after this
        check.
    - id: rinse
      title: Rinse the glass
      text: >-
        Discard any chilling ice water. Add {{ingredients}}, swirl to coat the
        inside of the glass and pour away the excess, leaving a thin aromatic
        film. The stated allowance is for rinsing, not a measured amount to
        leave in the finished drink.
    - id: strain
      title: Strain without ice
      text: >-
        Strain the mixed drink into the rinsed glass, keeping the mixing ice
        behind. For scaled service, rinse each glass and divide the drink among
        them; use small mixing batches as needed.
    - id: garnish
      title: Express lemon
      text: >-
        Use {{ingredients}}: twist peel over each drink to release its oils,
        then discard it or rest it on the rim, as preferred. Serve immediately
        without a serving cube.
learning:
  focus: Apply an aromatic rinse while keeping the drink balanced
  outcome: >-
    A chilled whiskey or Cognac drink with a light anise aroma and lemon oil,
    served without ice.
  techniques:
    - seasoning
  before:
    - >-
      Choose rye or Cognac, then decide whether to include the optional aromatic
      bitters.
    - >-
      Chill the serving glass and set out a separate mixing glass. Keep the
      rinse separate from the drink’s measured liquids; most rinse spirit is
      discarded.
  checkpoints:
    - step: 4
      cue: 'A thin film coats the glass, with no visible pool left at the bottom.'
      why: >-
        The rinse provides aroma; leaving the whole allowance changes the
        finished formula.
    - step: 5
      cue: The chilled drink is in the rinsed glass with no mixing or serving ice.
      why: >-
        Ice used for stirring contributes dilution, while this serving style
        avoids continued melting in the glass.
  troubleshooting:
    - problem: Anise overwhelms the drink
      cause: Too much rinse spirit remained in the glass.
      fix: >-
        Before straining the drink, pour away any visible pool of rinse spirit
        so only a thin film remains. Once excess anise spirit is mixed into the
        drink, transferring it to another rinsed glass cannot remove that
        flavor; remake it with a thinner rinse if the balance is unacceptable.
    - problem: The drink warms before service
      cause: The prepared glass or stirred mixture waited.
      fix: >-
        Finish the rinse close to straining and serve immediately. Make further
        portions to order instead of holding finished glasses.
  substitutions:
    - ingredient: Rye whiskey
      alternative: Cognac
      effect: >-
        Changes the base aroma and flavor while retaining the same measured
        amount; check the chilled balance with the selected spirit.
    - ingredient: Absinthe
      alternative: Dry anise-flavored spirit
      effect: >-
        Different botanical intensity changes the rinse aroma. Coat and drain
        the glass; do not substitute a sweet anise liqueur as if it were
        identical.
  timing: >-
    About seven minutes for one drink, chilling the serving glass with ice water
    while measuring and stirring. A freezer-chilled glass can be prepared ahead.
    No heating or required rest. Rinsing and garnishing every glass add work to
    scaled batches; the stirring interval is judged by the drink rather than
    multiplied.
  storage: >-
    Serve promptly, without ice. Keep a mixture prepared ahead covered and
    refrigerated without mixing ice, rinse spirit or lemon; stir small portions
    at service and rinse each glass then. Follow the simple syrup’s own storage
    instructions, since no syrup strength or homemade storage deadline is
    defined here. Discard used mixing ice and excess rinse spirit.
  sources:
    - title: International Bartenders Association — Sazerac
      url: 'https://iba-world.com/iba-cocktail/sazerac/'
    - title: Sazerac House — New Orleans cocktail history
      url: >-
        https://www.sazerachouse.com/inspiration/stories/how-the-sazerac-became-the-official-cocktail-of-new-orleans/
    - title: Sazerac Company — Historical timeline
      url: 'https://www.sazerac.com/our-company/our-story/'
    - title: 'Dave Arnold — Cocktail Science: stirring, ice and dilution'
      url: 'https://www.cookingissues.com/index.html%3Fp=4585.html'
  review:
    status: editorial-review
    date: '2026-10-05'
---

## Chef's Note

The Sazerac belongs to New Orleans’s nineteenth-century coffee-house tradition and became the city’s official cocktail in 2008. Cognac and rye versions both belong to its history; here either spirit can be used with this syrup-and-bitters formula. Swirl the anise spirit around the chilled glass, pour away the excess, then strain in the cold stirred drink. The thin rinse gives aroma without a pool of absinthe dominating the finish.

## Directions

1. **Chill the serving glass:** Use ice and water (if using) if the rocks glass is not already chilled in the freezer. Let it chill while measuring the drink. Use a glass with room for the stirred liquid and headroom; serving is without ice. All ounce measures are fluid ounces.
2. **Combine:** Add rye whiskey or Cognac, simple syrup, dashes of New Orleans-style anise-forward bitters, dashes of aromatic bitters (if using), and ice cubes to a mixing glass with room to stir. Use the optional aromatic bitters only if wanted in this version; keep the New Orleans-style bitters in the drink. Dash size varies with bottle and pouring motion.
3. **Stir and check:** Stir smoothly until the whiskey or Cognac mixture is well chilled. Taste a small sample with a clean spoon for a rounded spirit-and-bitters finish, and continue briefly if still warm or harsh. Stop before it becomes thin. The anise rinse is added in the serving glass after this check.
4. **Rinse the glass:** Discard any chilling ice water. Add absinthe or dry anise-flavored spirit, swirl to coat the inside of the glass and pour away the excess, leaving a thin aromatic film. The stated allowance is for rinsing, not a measured amount to leave in the finished drink.
5. **Strain without ice:** Strain the mixed drink into the rinsed glass, keeping the mixing ice behind. For scaled service, rinse each glass and divide the drink among them; use small mixing batches as needed.
6. **Express lemon:** Use lemon peel: twist peel over each drink to release its oils, then discard it or rest it on the rim, as preferred. Serve immediately without a serving cube.
