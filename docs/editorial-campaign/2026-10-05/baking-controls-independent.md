# Baking 01: preserved ingredient controls acceptance

All six final source files reread against frozen originals, author candidates and refreshed accepted-baking-six.json. Accept the four scaling-override removals: no original source had this override; RecipeScaler treats only explicit scaling.mode=fixed as fixed. Removing it restores the existing arithmetic controls. Root owns rendered UI verification.

- Accept yellow-cake-with-chocolate-frosting a00c6f5988a640d3bdff9a4017e19962864d0344ebcf15e84b8ef8ce8ba7ba60.
- Accept blackout-chocolate-cake 740967258adee32b9985be61ada8686edc1b8799e6c877e1c3ba345e1addc270.
- Accept brown-butter-carrot-cake a74dbabfdbd1e9c7b0f837513d765fa884d3f77d02d05b432586f7db07dbc91f.
- Accept skillet-biscuits-with-berries c9169ff7dd4121ab7b4ab2c0d2058b3f3752380d229d33cdca679f7db942e5f5.
- Accept frozen-blueberry-muffins 23ddc495c1875a0308e62e27f67b1c322a71514094032cd2e1afdc23ba56619e.
- Accept bakery-style-chocolate-chip-muffins 4da4fa0a8448abefcfc8e8bfcdadb51ca88faa47e9b494cae6e5fcc1ae29a4b9.

All six exact final hashes match the accepted manifest. All authored formulas, generated ingredients/yield/directions and full cooking body are identical to independently reviewed candidates. Identities survive. Four manual learning.before notes remain identical: original-size multiple cake layers, appropriately smaller pans with earlier checks, no proportional pan/time promise; biscuit same-size per-portion mounds with suitably smaller/additional skillets and no proportional steaming clock. Half/original/double ingredient arithmetic and yields retained in companion JSON. UI arithmetic is not a validated pan-dimension or cooking-time conversion.

Frozen blueberry before[0] still says: Start with softened butter and room-temperature eggs; warming those ingredients is extra to the listed preparation time.

Frozen blueberry before[2] now says: At the original batch size, measure 2 cups sugar for the batter and a separate 2 tbsp for the topping; keep these ingredients separate when scaling.

These indices are correct; warming guidance was not overwritten. Original-context sugar quantities do not remain universal when controls scale.

Bakery first troubleshooting fix is plain prose: Cool the melted butter to lukewarm and check the flour and liquid measurements before mixing the next batch. Formula and cooking body unchanged, no added ingredient or quantity.

No source/Git writes by independent challenger, no physical kitchen testing or publication claim. No further concerns for this bounded preservation gate.
