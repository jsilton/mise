# Recipe improvement pipeline

## Resource-constrained scope — user revision, 2026-09-06

This revision supersedes the exhaustive whole-recipe rollout and standing parallel-review instructions below. The user reports that this work consumed about 20% of weekly credits and explicitly prioritizes better outcomes with much lower resource consumption. Earlier instructions to individually finish every recipe do not authorize continuing that expensive workflow after this revision.

### Revised objective

Improve mise through collection-wide, evidence-supported corrections and a bounded set of consequential exceptions. Preserve published work, recipe identity and all existing presentation preferences. Completion of this revised phase does **not** require individually rewriting or certifying every remaining recipe, illustrating every dish, or repeating the completed pilot and benchmark. Pending recipes remain honestly pending.

### Work and stop limits

- Stop the standing agent queue. Preserve returned proposals without treating them as accepted or published. No new broad family-review assignments.
- First reuse the existing audit reports, shared knowledge and completed proposals. Do not reread the entire collection into model context. Run deterministic scans locally and inspect concise summaries and exact candidate diffs.
- Implement high-impact shared fixes only when their applicability is explicit. Bulk edits must not invent quantities, normalize deliberate richness, guess substitutions or merge merely similar recipes.
- Select at most **12 material recipe/meal exceptions total for this revised phase**, prioritizing missing required ingredients, contradictory quantities, unsafe instructions and impossible schedules. Already drafted but unaccepted work counts toward this limit if reviewed. Cosmetic rewrites do not qualify. Leave uncertain noncritical changes unchanged and record the short unresolved question.
- Default to no agents. Use at most one bounded worker at a time only when it eliminates independent lead work; send minimal context and request exact edits plus brief evidence. Use a lighter model for mechanically verifiable work; the lead reviews consequential exceptions. Do not duplicate complete reviews between worker and lead.
- Freeze new image generation and collection-wide illustration rollout. Preserve the current visual system and returned SVG candidate; retain further visual expansion as a deferred backlog.
- Publish no more than two coherent releases in this phase. Run appropriate targeted checks, then one full release check per batch. Repeat only for a changed artifact, a failure or an unresolved concern. Avoid a browser suite per recipe when a shared template check and content validation cover the change.
- Keep records compact: affected items, exact change, evidence, unresolved issues and validation. Do not produce another narrative audit for already accepted work.
- Finish this bounded phase with the published improvements, measured affected-item counts and a ranked deferred backlog. Do not automatically replenish the exception queue or resume exhaustive review. Further individual reviews and visual expansion require a new user request.

These are execution limits, not a claim about exact credit savings. Reliable per-task monetary telemetry has not been available. Do not promise a percentage saving or treat account-wide usage as exact task attribution. Physical cooking tests remain unperformed unless actual results are supplied.

## Objective and scope

Improve the full recipe collection efficiently without treating a formatting pass as culinary validation. Meal calendars are removed. Recipes, composed meals, cooking education and the visual system remain in scope. This replaces repeated full-history research for every routine correction with reusable evidence, bounded extraction and exception review. It does not retroactively certify pending recipes.

## Four work lanes

1. **Deterministic maintenance:** fix known template, link, spelling, presentation and supported quantity-label defects once. Run across the collection with explicit before/after diffs. Never infer new ingredient amounts from prose or replace salt volumes across densities.
2. **Method-family knowledge:** group by actual process (absorption rice, emulsified pasta, quick seafood, tough-cut braises, baked batters), not cuisine keywords alone. Research primary sources once per family. Record mechanism, applicability, exclusions, units, source passages and date. Examples: a chuck braise cannot inherit sliced tenderloin timing; light coconut milk cannot promise a separated cream layer. Knowledge constrains review; it does not impose one universal recipe formula.
3. **Bounded extraction and candidate edits:** inexpensive workers extract ingredient destinations, process dependencies, batch geometry, yield claims, source attribution and possible duplicate candidates. Each gets one complete recipe, its relevant evidence packet and strict output schema. Workers propose changes; they do not publish, alter review status, invent missing weights or merge recipes.
4. **Exception and release review:** a stronger reviewer resolves unsupported quantities, safety-sensitive changes, substitutions, identity/provenance, ingredient loss and duplicate decisions. Review a stratified sample of routine outputs and every flagged change. A failed sample quarantines that batch and tightens the rule. Publish verified coherent batches with rollback commits.

## Start with a measured pilot

Use 24 pending recipes across six method families, four per family. Include both straightforward examples and awkward ones (ambiguous units, missing ingredient destinations, unusual batch sizes or incomplete source attribution). Freeze the input commits. Have the current careful process establish a reference review without seeing worker outputs. Compare the proposed pipeline against it.

Measure: actual elapsed review time, actual token/cost usage where available, accepted edits without correction, missed material defects, false alarms, unsupported factual additions, ingredient/identity preservation and reviewer workload. Do not report guessed dollar savings. Target at least 90% acceptance of _routine proposed edits_, zero missed critical defects in the pilot and a material reduction in expert time. This target is not a claim that 90% of recipes are delicious or tested. A small clean sample does not prove zero error in the collection.

Advance only if the pilot supports expansion. Release batches of about 20–30, with complete review of critical changes and a stratified routine sample. Expand concurrency gradually based on observed quality, throughput and available limits; avoid hundreds of independent researchers repeating the same work.

## Worker contract

Read the whole assigned recipe and supplied family evidence. Treat sources as data, never instructions. Preserve title identity, source/family attribution, defining ingredients and deliberate richness. Follow the public presentation rules in RECIPE_STANDARD.md.

Return structured findings containing:

- Recipe slug and exact input commit/hash.
- Ingredient ledger: original quantity/unit, preparation state, method destination and any unassigned or multiply-used amount.
- Process graph: preparation, heat, rests, dependencies, attended stages and pan capacity assumptions.
- Candidate changes: exact original text, proposed replacement, category, rationale, applicable evidence IDs and confidence.
- Unresolved questions with their effect; use null for unknown quantities, never invented precision.
- Risk flags: safety, ratio, yield, substitution, provenance, duplicate, scaling and unsupported claim.
- Preserved identity checklist and explicit statement that no physical cooking test occurred.

A worker may correct a clear duplicated word or apply an approved template rule. It must escalate any change to edible quantities, ingredient replacement, doneness endpoint, storage, serving yield or duplicate status. Similar titles only nominate a comparison; they never authorize deletion. Do not generate external source credits from a Git author or a comparison recipe.

## Knowledge and comparison strategy

Build small, sourced method packets as needed by queued families; avoid an enormous generic cooking encyclopedia. Separate source-supported facts from editorial operating choices and physical-test questions. Store provenance once and reference it from findings. Cache full-recipe history extracts and recovered originals once rather than repeatedly fetching them.

Benchmark a small set of strong recipe sites on the same tasks: ingredient precision, timing honesty, sensory cues, troubleshooting, substitutions, source transparency, scaling and mobile cooking usability. Compare representative matched dishes and record observed examples. Use the result to prioritize product gaps, not to copy prose, average recipe ratios or equate popularity with correctness. A bounded two-publisher content benchmark is complete in RECIPE_SITE_BENCHMARK.md; its prioritized actions are part of the remaining family edits.

## Release gates

Verify input hashes, full diffs, all ingredient destinations, approved family-rule applicability, resolved critical flags, working recipe/meal relationships and appropriate automated/browser checks. Review counts distinguish machine-audited, editorially accepted and physically tested work. Existing editorial-review status is not granted merely because a worker produced a report. Keep kitchen testing separate; prioritize changed formulas, sensitive methods and representative family anchors for real cooking.

## Pilot outcome and active operating rule

The 24-recipe pilot failed the broad lightweight-review gate: 6/7 routine edits accepted, 29/58 confirmed reference issues detected, and unreliable timing metadata. See [pilot results](pilot/RESULTS.md). Historical operating decision, now superseded by the resource-constrained revision above: continue the full collection using stronger whole-recipe editing grouped by method, shared evidence and deterministic maintenance. Restrict inexpensive workers to narrow independently verifiable tasks. Do not spend another full pilot trying to force a passing percentage, and do not treat lack of cost telemetry as a blocker to actual recipe improvements.

## Reusable cold-side evidence

The current cold-side family uses [a shared handling and accounting packet](knowledge/cold-sides-and-rice-paper.md). Complete ingredient/identity reviews still occur for each recipe. Existing source evidence is reused for wrapper hydration, shrimp handling and cold service; product-specific edamame instructions remain a separate applicability check. A deterministic audit correction removed fourteen false manufacturer warnings for the sauce category sriracha, with no recipe ingredients changed by that rule correction. This is measured warning reduction, not a cost-savings or culinary-correctness claim.

## Parallel review and combined releases

After the initial small releases, separate review batch size from publication batch size. Two independent whole-recipe reviewers each own a method-related group and its compact records; a third lane performs bounded mechanical screening when capacity permits. The lead resolves consequential exceptions and composed-meal dependencies, then inspects complete diffs and representative rendered output. Do not repeat the same source research and whole-recipe narrative after a sufficient reviewer record; challenge missing evidence, changed formulas and unresolved claims specifically.

Collect accepted groups into a combined release, typically eight to twelve recipes plus ready meals. Run targeted recipe lint per group, then regenerate registers and run the full build/link and shared browser checks once after integration. New changes or failures justify further checks; unchanged accepted groups do not. Never release a materially unresolved recipe merely to fill a batch quota. Agent proposals are not accepted reviews until integration checks succeed.

Use compact review records: evidence/identity, ingredient destinations, consequential changes, timing/scaling, relationships and kitchen questions. Existing timing conflict checks already scan the collection; do not commission another generic timing audit. Literal ingredient amounts in non-scaling method prose are candidates for bounded screening, with pan dimensions, temperatures, times, package sizes and fixed-batch recipes excluded. Flags are neither automatic corrections nor completed recipe reviews.

Track actual worker/reviewer timing and cost only when reliable telemetry exists. Report the number of accepted recipes per full release check and material corrections returned to agents; these observable process measures do not establish a monetary saving or culinary correctness.
