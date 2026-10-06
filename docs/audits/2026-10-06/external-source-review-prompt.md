# Comparing culinary heritage sources with Mise

Use this prompt for one organization, or replace the scope with “all six organizations” for a combined comparison. This is a discovery and source-review task. Recipe additions require a subsequent instruction.

```text
Review [ORGANIZATION AND URL, or ALL SIX BELOW] against Mise as it stands on fresh main at https://github.com/jsilton/mise. The live site is https://jordansilton.com/mise/.

First read the current AGENTS.md, CLAUDE.md, docs/RECIPE_STANDARD.md, docs/RECIPE_REVIEW_PIPELINE.md, docs/STRUCTURED_RECIPE_AUTHORING.md, docs/HOUSEHOLD_PREFERENCES.md, the latest docs/REVIEW_PROGRESS.md checkpoint, README export/privacy guidance and the current recipe coverage matrix. Establish the exact main commit and count its actual recipe sources; do not assume an old count is current. Preserve ongoing work. Tiramisù is excluded by household preference.

Assess what the organization actually documents: regional history, named cooks, complete formulas, methods, ingredients, variants, and any stated testing. Reputation, official status and popularity do not establish that a particular recipe is complete, reliable or delicious. Distinguish institutional documentation from an individual author's recipe and explain source disagreements. Use primary sources, retain exact links, and acquire complete recipes only through permitted access; an index entry is not a full formula.

Start with a bounded shortlist of up to 20 promising preparations per organization. Compare them against all current Mise titles and the complete ingredient/method text of plausible matches. Classify each as already covered, a distinct regional variant, a missing reusable component, or a missing complete dish. Show the existing Mise paths and explain meaningful differences. Deduplicate overlapping recommendations across organizations, without collapsing distinct regional or family variants.

Recommend five to ten additions overall, ranked for household cooking value, reuse, variety, ingredient availability, active versus elapsed time and justified project complexity. Include a named source version, why it belongs, the closest existing Mise recipe, source accessibility, formula/method questions, confidence, and the next evidence needed. Preserve defining ingredients and deliberate richness. Do not impose generic acid, browning, searing, health or simplicity rules. Flag consequential safety or formula contradictions before cosmetic gaps; verify safety against applicable primary FDA/USDA guidance. Do not promise absolute risk elimination or manufacture nutrition, yield precision or kitchen-test claims.

For a combined review, delegate disjoint organizations to a small number of read-only reviewers, then have one lead reconcile duplicates and independently challenge the final shortlist. Reuse research and keep the review bounded. Stop recipe-specific work when source evidence is missing; record the blocker rather than guessing.

Deliver a source-quality comparison, a deduplicated gap table, a ranked shortlist, and the first coherent group of about five recipes worth adding. State the commit reviewed, coverage and limitations. Save navigable evidence in the repository's appropriate audit area. Do not edit recipes, change review status, publish, create accounts, bypass access restrictions, expose private identities/native archives/photos, or sync Paprika as part of this review.
```

Organizations:

1. Japan’s Ministry of Agriculture, Forestry and Fisheries — [Our Regional Cuisines](https://www.maff.go.jp/e/policies/market/k_ryouri/index.html).
2. Mexico’s [Fundación Herdez](https://fundacionherdez.com/proyectos-culturales/), including its regional publications and specialist library.
3. Italy’s [Casa Artusi](https://www.casartusi.it/it/).
4. [Accademia del Pizzocchero di Teglio](https://accademiadelpizzocchero.it/la-ricetta/).
5. [Grande Confrérie du Cassoulet de Castelnaudary](https://www.confrerieducassoulet.com/la-recette.html).
6. [Slow Food’s Cooks’ Alliance](https://www.fondazioneslowfood.com/en/what-we-do/slow-food-chefs-alliance/), with Ark of Taste and Presidia as ingredient/tradition references.

The seven approved Italian additions are a separate authorized implementation task. Read fresh main before deciding any of them is still missing; do not duplicate that work or count additions as resolutions of existing holds.
