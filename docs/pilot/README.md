# Measured recipe-review pilot

The manifest freezes 24 pending recipes at the recorded commit, four from each of six actual cooking-method families. Frozen full-text inputs are immutable comparison fixtures, not public recipe copies. The selection spans straightforward and complex preparations; it is purposive, not a random population sample. None has been newly marked reviewed.

## Execution order

1. Two strong reviewers independently establish reference findings for disjoint groups of twelve, without viewing worker output. Root checks and seals the reference files. Reference uncertainty is retained, not converted into ground truth by assertion.
2. Assemble concise primary-source family packets from those references, excluding recipe-specific reference findings. Record each claim's applicability and exceptions.
3. Run bounded lightweight workers against the frozen recipes and packets. Capture model, timestamps and supplied usage fields; unavailable dollars/tokens remain null. Do not send entire conversation history. Start with one family to verify output quality before launching the remainder.
4. Root adjudicates exact proposed edits and checks every reference defect against worker detection. Count accepted edits, corrected/rejected edits, false alarms, unsupported additions and missed material defects separately. Disagreement requires resolution rather than automatic preference for the reference.
5. Evaluate the 90% routine-edit acceptance target and expert-time savings. No extrapolated cost claim without actual comparable usage. Apply accepted changes only after complete-recipe review and ordinary release checks.

`node scripts/check-pilot.mjs` checks the frozen cohort and computes metrics from recorded decisions. Null acceptance means no adjudicated proposals; zero recorded misses does not mean none exist. Evaluation remains incomplete until all 24 have complete worker/reference/adjudication records and reviewer sign-off. The script does not approve culinary content or authorize publication.

## Timing and cost

Record timestamps per assignment and reviewer session. Wall time includes waiting and is not equal to active expert time. Record active review intervals separately; do not infer them from message spacing. Worker-reported estimates are not billing evidence. Existing reviews from before this pilot are not included in its efficiency denominator.

## Current state

Cohort frozen; blind reference reviews commissioned. Worker evaluation, method packets, adjudication and recipe changes remain pending. Existing curry/fajita proposals are preserved outside this pilot and must not be counted as pilot wins.
