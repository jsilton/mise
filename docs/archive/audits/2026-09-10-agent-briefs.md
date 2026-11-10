# Mise baseline audit: bounded parallel assignments

Prepared 2026-09-10 against commit `1c84b8bd9758f1f3d0bfdd18d6a745edbb118cd0`.
Existing working-tree changes: deleted package-lock.json; untracked pnpm-lock.yaml and pnpm-workspace.yaml. Preserve these changes.

## Launch status and cost constraint

Dispatched three agents after the user said “Okay, proceed” following the explicit launcher-tier warning. Saved configuration was confirmed as service_tier = "default", but the collaboration tool still advertises only priority and has no service-tier parameter. Standard subagent billing could not be guaranteed, and that limitation was restated at dispatch. No exact spending or savings estimate is established. Actual assignments: Terra/medium website, Sol/high recipes, Luna/medium corpus; fresh minimal-context prompts, no history forks.

Planned model assignments below are task-fit judgments based on available model descriptions, not measured quality or pricing benchmarks. Use fresh minimal-context prompts, with the shared contract and only the relevant assignment. No history forks, additional agents, or automatic replacement queues.

## Shared contract

Assess the current website, recipes, and collection; do not implement fixes, publish, alter review status, or claim cooking tests. Write only your assigned audit output under docs/audits/2026-09-10/. Use local deterministic extraction before reading recipe prose. Do not load the entire corpus into model context. Read docs/RECIPE_STANDARD.md and docs/HOUSEHOLD_PREFERENCES.md once. Preserve family identity and meaningful variations.

Every finding must include severity, confirmed/candidate/unknown status, exact file and line or URL, observed evidence, user consequence, confidence, and next action. Distinguish current source, fresh built output, and live production. Absence of a warning is not proof of correctness. Report scope and limitations. Return at most eight material findings and a compact coverage summary; preserve supporting data in your assigned file. Do not manufacture findings to meet a quota.

The lead owns npm test, one full npm run qa, read-only editorial triage, prior-audit reconciliation, and synthesis. Workers must not repeat these shared suites. Shared checks are necessary evidence, not a substitute for browser or culinary review.

## Agent 1: website quality

Planned model: GPT-5.6 Terra, medium reasoning, Standard speed.
Output: website.md and optional website-evidence.json.

Inspect shared templates, navigation, search/filter implementation, scaling controls, shopping view, cook mode, accessibility, metadata, and print CSS. Crawl fresh built pages once for broken internal destinations, required metadata, and template anomalies, distinguishing redirects. Reuse the lead's successful build. Test bounded browser journeys: find a chicken weeknight meal using combined filters and recover from no results; scale/reset a legacy recipe and a structured recipe; check shopping view, checklists and reload persistence; enter/exit cook mode; inspect a composed meal and lesson navigation. Use desktop and narrow mobile views, keyboard focus, and print where tooling supports it. Inspect visual hierarchy and mobile overflow. Compare a few live pages with local output and record whether version equivalence can be established. For performance, follow the web-perf skill and report only measured results; explicitly mark unavailable metrics rather than inventing a Lighthouse score. Stop after representative shared-template coverage; no per-recipe browser campaign. Do not audit culinary correctness or corpus coverage.

## Agent 2: recipe integrity

Planned model: GPT-5.6 Sol, high reasoning, Standard speed.
Output: recipes.md and sample.json.

Select and document a reproducible 24-recipe sample before detailed reading: four recipes from each of six actual method families, balancing editorially reviewed and pending entries where available. Include both structured-format recipes and at least six deterministically selected recipes without substantive existing audit flags. Record selection rationale and source hashes. The sample is diagnostic, not a statistically representative defect-rate estimate.

Read each sampled recipe completely. Use one rubric: ingredient destinations and allocations; method dependencies; quantities, yield and equipment consistency; realistic active/elapsed timing; observable cues; practical substitutions; attribution and recipe identity. Record pass/concern/unknown per dimension, with compact evidence for concerns. Distinguish internal contradictions from unsupported culinary judgments. Reuse relevant existing source packets; browse primary authoritative sources only when needed for a material safety/science claim. Do not research every dish or rewrite recipes. Escalate cooking-dependent questions as unknown. Identify where existing automated triage missed a confirmed defect. Do not repeat historical audit reconciliation owned by the lead.

## Agent 3: corpus usefulness

Planned model: GPT-5.6 Luna, medium reasoning, Standard speed.
Output: corpus.md and corpus-metrics.json.

Use scripts to inventory all canonical recipes, aliases, composed meals, lessons, and review records. Report explicit denominators for food versus excluded craft entries, original versus added recipes, canonical versus redirected pages, and reviewed versus pending work. Compute distributions by role, cuisine, method, difficulty, dietary tags, elapsed time, and review status; measure missing/ambiguous values rather than coercing them to zero. Check recipe/meal/lesson relationships and base reuse. Nominate near-duplicate candidates with transparent title/ingredient overlap measures and inspect at most six pairs; never call similar dishes duplicates without evidence. Screen dietary-tag conflicts as candidates and inspect at most six explicit examples, preserving alternative ingredient context. Interpret collection balance against recorded household preferences and practical meal composition. Do not equate numeric diversity with quality or invent preferences. Report useful strengths as well as gaps. No whole-recipe review campaign or external research.

## Lead integration

Reconcile the 2026-09-07 consistency audit with the structured recipe release and current source. Verify workers' highest-consequence findings against exact evidence; do not reread all passing sample recipes. Combine duplicate findings into a single register. Produce a dated state report, separate evidence-backed assessments of website usability, recipe integrity and corpus usefulness, and at most ten ranked next actions using consequence, reach, confidence and effort. Keep fixes as a subsequent phase. Record actual coverage and available usage telemetry without inferring per-task cost from account-wide usage.

## Shared checks completed before dispatch

On 2026-09-10, npm test passed 44/44 tests and npm run qa passed 29/29 automated checks, including its production build. These do not include the printed manual-browser checklist. Logs: /tmp/mise-audit-tests-2026-09-10.log and /tmp/mise-audit-qa-2026-09-10.log. QA regenerated the meal register with formatting-only differences; verified semantic equality and restored the original formatting.
