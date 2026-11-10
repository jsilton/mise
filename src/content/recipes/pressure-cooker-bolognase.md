---
miseId: a8bd378a-c545-4ded-af3d-ef50e9ed124a
title: Ragù alla Bolognese
difficulty: intermediate
cookingMethods:
  - saute
  - simmer
occasions:
  - comfort-food
  - weekend-project
  - meal-prep
flavorProfile:
  - savory
  - umami
  - rich
cuisines:
  - Italian
role: base
vibe: comfort
prepTime: 20 min
cookTime: 3 hr
totalTime: 3 hr 20 min
servings: 6 portions
pairsWith:
  - fresh-egg-pasta
  - everyday-arugula-salad
pairingNotes:
  fresh-egg-pasta: 'Roll it into tagliatelle, the Bologna way.'
  everyday-arugula-salad: 'Bright, peppery greens after a rich ragù.'
ingredients:
  - '--- Ragù ---'
  - '150 g (5 oz) fresh pork belly, finely chopped'
  - 3 tbsp extra-virgin olive oil
  - '60 g (2 oz) onion, finely chopped'
  - '60 g (2 oz) carrot, finely chopped'
  - '60 g (2 oz) celery, finely chopped'
  - 400 g (14 oz) coarsely ground beef chuck
  - 1/2 cup dry red or white wine
  - 200 g (7 oz) tomato passata
  - 1 tbsp double-concentrated tomato paste
  - '1 cup light low-salt meat broth, hot, plus more as needed'
  - 1/2 cup whole milk
  - 'salt, to taste'
  - 'freshly ground black pepper, to taste'
  - '--- To serve ---'
  - 'egg tagliatelle, for serving, optional'
  - 'Parmigiano-Reggiano, grated, for serving, optional'
origin: Italy
seasons:
  - year-round
nutritionalDensity: moderate
leftovers: excellent
source: Adapted from Accademia Italiana della Cucina
sourceUrl: >-
  https://www.accademiaitalianadellacucina.it/sites/default/files/Rag%C3%B9%20alla%20bolognese%20-%20ricetta%20aggiornata%2020%20aprile%202023.pdf
advancePrep:
  - make-ahead-sauce
  - freeze-ahead
equipment:
  - heavy-casserole-with-lid
  - wooden-spoon
  - kitchen-scale
formula:
  version: 1
  yield:
    amount: 6
    unit: portion
  components:
    - id: ragu
      name: Ragù
      ingredients:
        - id: pancetta
          key: fresh-pork-belly-unsmoked
          name: fresh pork belly
          quantity:
            amount: 150
            unit: g
          equivalents:
            - amount: 5
              unit: oz
          preparation: finely chopped
          uses:
            - step: render
              share: 1
        - id: oil
          key: extra-virgin-olive-oil
          name: extra-virgin olive oil
          quantity:
            amount: 3
            unit: tbsp
          uses:
            - step: render
              share: 1
        - id: onion
          key: yellow-onion
          name: onion
          quantity:
            amount: 60
            unit: g
          equivalents:
            - amount: 2
              unit: oz
          preparation: finely chopped
          uses:
            - step: soffritto
              share: 1
        - id: carrot
          key: carrot
          name: carrot
          quantity:
            amount: 60
            unit: g
          equivalents:
            - amount: 2
              unit: oz
          preparation: finely chopped
          uses:
            - step: soffritto
              share: 1
        - id: celery
          key: celery
          name: celery
          quantity:
            amount: 60
            unit: g
          equivalents:
            - amount: 2
              unit: oz
          preparation: finely chopped
          uses:
            - step: soffritto
              share: 1
        - id: beef
          key: coarsely-ground-beef-chuck
          name: coarsely ground beef chuck
          quantity:
            amount: 400
            unit: g
          equivalents:
            - amount: 14
              unit: oz
          uses:
            - step: beef
              share: 1
        - id: wine
          key: dry-wine
          name: dry red or white wine
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: wine
              share: 1
        - id: passata
          key: plain-tomato-passata
          name: tomato passata
          quantity:
            amount: 200
            unit: g
          equivalents:
            - amount: 7
              unit: oz
          uses:
            - step: tomato
              share: 1
        - id: paste
          key: double-concentrated-tomato-paste
          name: double-concentrated tomato paste
          quantity:
            amount: 1
            unit: tbsp
          uses:
            - step: tomato
              share: 1
        - id: broth
          key: light-low-salt-broth
          name: light low-salt meat broth
          quantity:
            amount: 1
            unit: cup
          preparation: 'hot, plus more as needed'
          uses:
            - step: tomato
              share: 1
        - id: milk
          key: whole-milk
          name: whole milk
          quantity:
            amount: 1/2
            unit: cup
          uses:
            - step: milk
              share: 1
        - id: salt
          key: salt
          name: salt
          allowance: to taste
          uses:
            - step: season
              share: 1
        - id: pepper
          key: black-pepper
          name: freshly ground black pepper
          allowance: to taste
          uses:
            - step: season
              share: 1
    - id: serve
      name: To serve
      ingredients:
        - id: tagliatelle
          key: cooked-egg-tagliatelle
          name: egg tagliatelle
          allowance: for serving
          optional: true
          uses:
            - step: pasta
              share: 1
        - id: cheese
          key: parmigiano-reggiano
          name: Parmigiano-Reggiano
          allowance: 'grated, for serving'
          optional: true
          role: garnish
          uses:
            - step: serve
              share: 1
  steps:
    - id: render
      title: Render the pork belly
      text: >-
        Warm {{ingredients}} in a heavy 10-inch lidded casserole over medium-low heat. Cook,
        stirring, until the fat runs and the pork turns translucent, about 5 minutes. Don't let it
        brown hard.
    - id: soffritto
      title: Soften the vegetables
      text: >-
        Add {{ingredients}}. Cook, stirring often, until soft and sweet but not browned, 8 to 10
        minutes.
    - id: beef
      title: Brown the beef
      text: >-
        Turn the heat to medium and add {{ingredients}}. Break it up and stir until its liquid cooks
        off and the meat sizzles and starts to brown, about 10 minutes.
    - id: wine
      title: Reduce the wine
      text: >-
        Pour in {{ingredients}} and scrape up the browned bits. Simmer until the wine has cooked
        away and no longer smells sharp, 3 to 5 minutes.
    - id: tomato
      title: Add the tomato
      text: >-
        Stir in {{ingredients}}. Bring to a gentle simmer, then lower the heat as far as it goes and
        cover.
    - id: simmer
      title: Simmer the ragù
      text: >-
        Cook at the barest simmer, stirring now and then, for 1 to 1 1/2 hours. Add a splash more
        hot broth if it starts to stick.
    - id: milk
      title: Add the milk
      text: >-
        Stir in {{ingredients}}. Cover and keep simmering until the meat is very tender and the
        sauce is glossy and clings to it, 1 to 1 1/2 hours more. If the sauce is still loose,
        uncover for the last 10 minutes.
    - id: season
      title: Season
      text: 'Season with {{ingredients}}.'
    - id: pasta
      title: Toss with pasta
      text: >-
        Cook {{ingredients}} in well-salted boiling water until al dente. Toss it with the hot ragù
        and a splash of the pasta water until the sauce coats the ribbons.
    - id: serve
      title: Serve
      text: 'Serve with {{ingredients}} at the table.'
learning:
  techniques:
    - browning
    - braising
    - seasoning
    - temperature
  substitutions:
    - ingredient: Fresh pork belly
      alternative: Unsmoked pancetta
      effect: 'The Accademia allows it. It is saltier, so season only at the end.'
    - ingredient: Coarsely ground beef chuck
      alternative: 80/20 ground beef
      effect: The sauce is a little finer and less meaty.
    - ingredient: Light low-salt meat broth
      alternative: Low-sodium chicken or vegetable broth
      effect: A lighter background flavor. Both work.
    - ingredient: Pressure cooker
      alternative: Electric pressure cooker
      effect: >-
        Do the first four steps on Sauté. Add the tomato and broth, cook at high pressure for 45
        minutes and let the pressure release naturally. Stir in the milk and simmer on Sauté until
        the sauce is glossy, about 15 minutes.
  storage: >-
    The ragù keeps 4 days in the fridge and freezes for 3 months. Reheat it gently with a splash of
    broth or water.
  review:
    status: editorial-review
    date: '2026-11-09'
---

## Chef's Note

This is Bologna's ragù as the Accademia Italiana della Cucina records it: finely chopped vegetables, beef and pork belly, a little tomato and a splash of milk, cooked low for hours. It is a meat sauce, not a tomato sauce. Serve it the Bolognese way, on fresh egg tagliatelle.

## Directions

1. **Render the pork belly:** Warm the pork belly and olive oil in a heavy 10-inch lidded casserole over medium-low heat. Cook, stirring, until the fat runs and the pork turns translucent, about 5 minutes. Don't let it brown hard.
2. **Soften the vegetables:** Add the onion, carrot, and celery. Cook, stirring often, until soft and sweet but not browned, 8 to 10 minutes.
3. **Brown the beef:** Turn the heat to medium and add the coarsely ground beef chuck. Break it up and stir until its liquid cooks off and the meat sizzles and starts to brown, about 10 minutes.
4. **Reduce the wine:** Pour in the dry red or white wine and scrape up the browned bits. Simmer until the wine has cooked away and no longer smells sharp, 3 to 5 minutes.
5. **Add the tomato:** Stir in the tomato passata, double-concentrated tomato paste, and light low-salt meat broth. Bring to a gentle simmer, then lower the heat as far as it goes and cover.
6. **Simmer the ragù:** Cook at the barest simmer, stirring now and then, for 1 to 1 1/2 hours. Add a splash more hot broth if it starts to stick.
7. **Add the milk:** Stir in the whole milk. Cover and keep simmering until the meat is very tender and the sauce is glossy and clings to it, 1 to 1 1/2 hours more. If the sauce is still loose, uncover for the last 10 minutes.
8. **Season:** Season with the salt and pepper.
9. **Toss with pasta:** Cook the egg tagliatelle (if using) in well-salted boiling water until al dente. Toss it with the hot ragù and a splash of the pasta water until the sauce coats the ribbons.
10. **Serve:** Serve with the Parmigiano-Reggiano (if using) at the table.
