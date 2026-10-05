# Baking 01: preserved ingredient controls acceptance

All six final source files reread against frozen originals, author candidates and refreshed accepted-baking-six.json. Accept the four scaling-override removals: no original source had this override; RecipeScaler treats only explicit scaling.mode=fixed as fixed. Removing it restores the existing arithmetic controls. Root owns rendered UI verification.

- Accept yellow-cake-with-chocolate-frosting 94db3006ddca9b74fd63c11e8ebf83ceb157ee1482107f9ed9b2f7482db9e867.
- Accept blackout-chocolate-cake ce2aa9ed58ca9d862f3332d780212712ee832fa8b76057465d7d482a25743f5e.
- Accept brown-butter-carrot-cake e84583288402fdf87e3f043fdfb8de16a9d009b63acea8f232419f642c7ae184.
- Accept skillet-biscuits-with-berries 87fc356634c302370f3af67c9d37ecc1675892e74bdad3cc31eabba6751d7565.
- Accept frozen-blueberry-muffins bba24897143925a129d6d1cba635f077b4e3c3e4d7a4ddccc82b77e788a17e7e.
- Accept bakery-style-chocolate-chip-muffins b52d25a753a75762cd2d3e785f4b20d9c6ce53be5c237a5fbdacc957baca1473.

All six exact final hashes match the accepted manifest. All authored formulas, generated ingredients/yield/directions and full cooking body are identical to independently reviewed candidates. Identities survive. Four manual learning.before notes remain identical: original-size multiple cake layers, appropriately smaller pans with earlier checks, no proportional pan/time promise; biscuit same-size per-portion mounds with suitably smaller/additional skillets and no proportional steaming clock. Half/original/double ingredient arithmetic and yields retained in companion JSON. UI arithmetic is not a validated pan-dimension or cooking-time conversion.

Frozen blueberry before[0] still says: Start with softened butter and room-temperature eggs; warming those ingredients is extra to the listed preparation time.

Frozen blueberry before[2] now says: At the original batch size, measure 2 cups sugar for the batter and a separate 2 tbsp for the topping; keep these ingredients separate when scaling.

These indices are correct; warming guidance was not overwritten. Original-context sugar quantities do not remain universal when controls scale.

Bakery first troubleshooting fix is plain prose: Cool the melted butter to lukewarm and check the flour and liquid measurements before mixing the next batch. Formula and cooking body unchanged, no added ingredient or quantity.

No source/Git writes by independent challenger, no physical kitchen testing or publication claim. No further concerns for this bounded preservation gate.

Required formatting changed only serialization/blank lines. Root reconstructed the six approved author candidates plus exact root corrections and verified every parsed field and complete cooking text unchanged before refreshing final SHA-256 values.
