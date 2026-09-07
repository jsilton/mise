# Scaling measured additions written with plus signs

Input baseline: `3fbdee81`. This is a shared arithmetic correction, not a culinary review or a claim that every larger batch fits its original pan.

The existing scaler recognized additions written as “plus” but omitted additions written as “+”. Thus “1 cup + 2 tbsp sugar” doubled to “2 cups + 2 tbsp sugar”, changing the proportion. The same defect affected separate combined ingredients such as beef + pork and mixed spices.

The shared parser now scales clearly measured amounts following a plus sign using its existing recognized units. Repeated additions and explicit parenthetical “or” alternatives scale together. Plus amounts inside package specifications stay fixed: doubling two cans changes the number of cans, not a can's bonus size. Unmeasured pinches, inch dimensions and unrecognized count descriptions are unchanged rather than guessed.

A baseline comparison found 48 changed ingredient lines across 44 recipes when doubled. Exact input/before/after examples are recorded in [scaling-plus-impact.json](scaling-plus-impact.json). These are corrected arithmetic outputs, not 44 reviewed recipes. No ingredient formula or review status changes through this fix. Tests cover halving, doubling, repeated mixed additions, alternative liquids, package sizes, pinches and cut geometry; an independent bounded audit checked twelve actual ingredient lines at half and double size. Its mixed bay-leaf/oregano counterexample led to a guard: a parenthetical alternative must start with a supported measured quantity before later plus amounts scale. Unsupported count alternatives stay unchanged.

The previously held Strawberry Summer Cake sugar expression now scales arithmetically, but its fixed method amounts and pan/yield still require a recipe decision. Do not mark that whole recipe reviewed. Modified egg-count phrases such as “2 large Eggs + 2 large Egg Yolks” remain outside this measure-only repair and must be handled explicitly during review.
