# Current recipe and meal presentation check

Checked the current shared rendering and built HTML on 6 September 2026. No repository files changed. This is a bounded presentation check, not a culinary review or recipe certification.

## Disposition

No material regression found against the requested presentation requirements. No removal of cooking cues or legitimate source attribution is recommended.

## Direct evidence

- Read the rendering portions of `src/components/RecipeHeader.astro`, `src/components/RecipeLearning.astro`, `src/pages/recipes/[slug].astro`, `src/pages/meals/[slug].astro`, `src/layouts/Layout.astro`, and the checkpoint/outcome relocation in `src/lib/recipe-page.ts`.
- Parsed the actual built `<main>` and `<footer>` of **605 recipe pages and 86 meal pages** under `dist/recipes/*/index.html` and `dist/meals/*/index.html`. Removed scripts, styles, templates and explicitly hidden elements from the prose scan; retained closed-details content because a reader can expand it. These counts are pages with a main element, not claims about review status.
- Across those **691 built pages**, found no “The skill you take away”, “What success looks like”, “Sources & recipe notes”, household-preference wording, or per-page review/testing disclosure matching the requested exclusions. A second, broader contextual scan of `household`, `review`, `test`, `editorial`, `verified`, `validation` and `approval` produced 57 occurrences. These describe such things as cooking a test falafel, checking tenderness or temperature, household pan/freezer limitations, and named external attribution; they are not the removed editorial-status notices.
- All 691 pages retain an actual standards link inside `<footer>`. None has a standards/review-policy link inside `<main>`. The current shared link is `How we review recipes` to `/mise/standards` (`src/layouts/Layout.astro:397`).
- The recipe template does not render `learning.sources` or `learning.review`. Its concise `Recipe source:` attribution remains (`src/pages/recipes/[slug].astro:373` onward). The meal template renders its meal body without introducing a review badge or notice.
- Useful outcomes remain plain paragraphs under the existing “What to watch for” section in static HTML (`src/pages/recipes/[slug].astro:305`). The page script moves that paragraph directly below Directions and moves checkpoints into their associated steps; it hides the emptied checkpoint section only after relocation (`src/lib/recipe-page.ts:43`). This preserves cooking guidance without restoring either rejected summary panel.
- The inspected mint HTML was built at 11:53:41 on 6 September; its source file was last modified at 10:04:53. The built text agrees with the current source. This check inspected built HTML and script behavior; it did not run a new browser interaction or deployment.

## Mint wording and placement

The parent supplied the exact wording the user quoted from the rejected layout. Its first paragraph begins “Thick Greek yogurt with crisp diced cucumber…”; its second begins “Cool, spoonable yogurt with distinct tiny cucumber pieces…”. Treating that quotation as the rejected layout content, rather than an instruction to reproduce both paragraphs, is appropriate.

The current description keeps the first paragraph, including its lamb-pita and grilled-food serving suggestions (`src/content/recipes/mint-tzatziki.md:49`). The second quoted paragraph is **not repeated verbatim** beneath it. Instead:

- Chef’s Note explains diced-cucumber crunch, yogurt/oil texture and restrained honey (`src/content/recipes/mint-tzatziki.md:125`).
- The method’s plain outcome is now the shorter “Aim for a soft mound on the spoon, crisp cucumber pieces and a tangy finish.” (`src/content/recipes/mint-tzatziki.md:56`).
- The Food & Wine adaptation credit remains a separate concise source attribution. The dill alternative remains practical recipe guidance, without a household-preference explanation.

There is some ordinary repetition of cucumber texture between the description, Chef’s Note and finish cue, but no longer the awkward paired introductory summaries quoted by the user. The shorter method cue has a useful purpose while cooking. This is not a material regression and does not justify deleting the cue or changing the preferred mint identity. No mint copy correction is required for this bounded check.

## Scope limits

Internal review metadata and documentation are not public per-page review notices. External author/source claims, recipe formulas, food-safety details and pending recipes’ culinary accuracy were not certified by this presentation pass. The findings apply to the inspected working tree and built output; they do not independently confirm a deployed version.
