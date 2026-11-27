# Agent search

`/.well-known/search` answers recipe questions for AI agents with ranked Markdown, one section
per recipe, each linked to its canonical page on jordansilton.com/mise.

## How it works

- **Index.** `scripts/build-agent-search-index.mjs` writes the index from the recipe sources.
  Each record holds only what the recipe page already shows: title, course, cuisines, diets,
  occasions, times, servings, description, ingredients, Directions steps and pairings.
  Internal fields such as `miseId`, `kb` and review notes are never copied. The site build also
  publishes a copy at `agent-search/index.json` (see `astro.config.mjs`).
- **Reading the question.** `src/lib/agent-search.mjs` reads a whole question.
  - Hard filters: a time limit ("under 30 minutes", "in an hour and a half", "about 20
    minutes"), diets ("vegan", "gluten-free"), a course ("dessert", "side dish", "dinner"),
    and an ingredient count ("5 ingredients", not counting salt, pepper, oil and water).
  - Times that aren't a limit ("marinate for 2 hours", "at least 20 minutes", "20 minutes
    hands on") are ignored.
  - Exclusions: "without", "no", "avoid", "allergic to" and "X-free" leave out recipes that
    list the ingredient in the title, any ingredient line or a linked sub-recipe. Group words
    cover their members ("seafood", "dairy", "nuts", "alcohol", "spicy"). The answer always
    adds a line telling the reader to check labels for a real allergy.
  - Preferences lift matching recipes without hiding the rest: kids, weeknight, make ahead,
    potluck, game day, date night, holidays, lunch, brunch, keto and cuisines.
  - Pairings: "what goes with salmon" or "serve with steak" returns the recipes the matching
    dishes list as pairings, in either direction.
- **Ranking.** The other words are ranked with BM25 across fields: title first, then
  ingredients (the first few count more), tags, description and steps. More matched words rank
  higher. Results scoring under a quarter of the best are dropped. When no recipe uses any of
  the words, the answer says so and returns nothing.
- **Serving.** GitHub Pages can only serve files, so a free-plan Cloudflare Worker
  (`worker/agent-search`) answers the requests. The index is bundled into the Worker and
  prepared once at startup, because the free plan allows 10 ms of CPU per request but a full
  second at startup. A recipe change reaches the Worker only when it is deployed again:
  `pnpm run agent-search:worker` writes `worker/agent-search/index.json`, then
  `npx wrangler deploy` from that folder publishes it.

## Request

`GET /.well-known/search?q=<question>` with optional `max_minutes`, `diet` (repeatable),
`role`, `cuisine`, `limit` (1 to 20, default 5) and `format=json`. With no `q` it returns usage.
`q` is limited to 300 characters.

## Checking a change

`pnpm run agent-search:compare` prints the top five from this search and from the site's
search box for the same questions. `scripts/tests/agent-search.test.mjs` covers the question
parser, the filters, exclusions, pairings, the ranking rules, the record fields and the
Worker's responses.
