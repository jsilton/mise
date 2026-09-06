export interface Technique {
  slug: string;
  title: string;
  category: string;
  summary: string;
  principle: string;
  controls: { name: string; action: string; reason: string }[];
  cues: { stage: string; cue: string }[];
  troubleshooting: { problem: string; cause: string; fix: string }[];
  experiment: string;
  sources: { title: string; url: string }[];
  methods: string[];
  recipes: string[];
}

export const techniques: Technique[] = [
  {
    slug: 'browning',
    title: 'Build flavor through browning',
    category: 'Heat & moisture',
    summary: 'Learn to manage the water before you turn up the heat.',
    principle:
      'Maillard browning is a family of reactions between reducing sugars and amino compounds. Heat accelerates it; surface water slows browning because evaporation consumes energy. A hot oven or pan does not mean the wet food surface is equally hot. Browning adds flavor, but it does not seal in juices.',
    controls: [
      {
        name: 'Surface moisture',
        action: 'Pat food dry. Drain washed vegetables thoroughly.',
        reason:
          'Less surface water means less energy spent evaporating it before rapid browning can happen.',
      },
      {
        name: 'Pan capacity',
        action: 'Leave visible space around pieces; use batches when needed.',
        reason:
          'A large load cools the pan and releases more moisture than it can quickly evaporate.',
      },
      {
        name: 'Heat',
        action: 'Start with a hot pan and shimmering oil; lower the heat if the fond turns black.',
        reason: 'Browning is useful. Acrid smoke and scorched residue mean the surface is burning.',
      },
    ],
    cues: [
      { stage: 'Beginning', cue: 'A steady sizzle, with little pooled liquid.' },
      { stage: 'Developing', cue: 'Golden to deep brown patches and a roasted aroma.' },
      {
        stage: 'Too far',
        cue: 'Black residue or bitter, acrid smoke: lower the heat and remove burnt fat.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Food is pale and wet',
        cause: 'Too much moisture or too much food for the pan.',
        fix: 'Cook in smaller batches. Let the pan recover between batches; dry the next batch.',
      },
      {
        problem: 'Brown outside, underdone inside',
        cause: 'Surface heat is outpacing heat moving inward.',
        fix: 'Reduce the heat and finish gently. Measure the center temperature for meat; color is not a safety test.',
      },
    ],
    experiment:
      'Roast equal-sized, well-dried broccoli florets on two trays: one crowded, one with space. Keep oil, temperature, and time the same. Compare browned area and texture. The tray spacing is your variable.',
    sources: [
      {
        title: 'American Chemical Society — The chemistry of grilling',
        url: 'https://www.acs.org/pressroom/reactions/library/grilling.html',
      },
    ],
    methods: ['sear', 'roast', 'grill', 'broil', 'char', 'pan-fry'],
    recipes: ['crispy-parmesan-roasted-broccoli', 'easy-pan-seared-chicken-breasts', 'char-siu'],
  },
  {
    slug: 'emulsions',
    title: 'Make a sauce that stays together',
    category: 'Fat & water',
    summary: 'A glossy sauce is a balance of water, fat, movement, and heat.',
    principle:
      'An emulsion disperses tiny droplets of one liquid in another. Agitation breaks up the fat; emulsifiers help droplets stay separated. Starch-rich water can stabilize pasta sauces by thickening the water phase, but it is not interchangeable with the emulsifiers in egg yolk. Cheese sauces also need enough water and controlled heat to avoid protein aggregation.',
    controls: [
      {
        name: 'Water first',
        action: 'Keep a little water in the sauce and reserve extra before draining pasta.',
        reason: 'Reducing a sauce too far leaves too little water to keep the fat dispersed.',
      },
      {
        name: 'Movement',
        action: 'Whisk or toss as you incorporate fat gradually.',
        reason: 'Movement divides the fat into smaller droplets instead of a visible oil slick.',
      },
      {
        name: 'Gentle heat',
        action: 'Move a pasta pan off the burner before adding finely grated hard cheese.',
        reason:
          'Residual heat can melt the cheese; excessive heat encourages grainy clumps. A heavy pan may need a brief cooling pause.',
      },
    ],
    cues: [
      { stage: 'Coming together', cue: 'The sauce becomes uniform, glossy, and lightly opaque.' },
      { stage: 'Ready', cue: 'It coats the pasta with no clear oil pooling underneath.' },
      {
        stage: 'Tightening',
        cue: 'Pasta sticks together as it cools; loosen with a small splash of warm water.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Oily or split sauce',
        cause: 'Too little water, too much fat at once, or excessive heat.',
        fix: 'Remove from heat, add a tablespoon of warm water, and toss vigorously. Repeat in small additions.',
      },
      {
        problem: 'Rubbery cheese clumps',
        cause: 'Cheese proteins have aggregated in excessive heat or too little water.',
        fix: 'Stop heating. Water and tossing may improve a lightly grainy sauce, but firm clumps will not reliably melt smooth again.',
      },
    ],
    experiment:
      'Shake equal amounts of oil and water in a closed jar. Watch the droplets separate. Repeat with a small dab of mustard and compare separation time. This demonstrates stability, not a recipe ratio.',
    sources: [
      {
        title: 'Exploratorium — Egg science: emulsifiers',
        url: 'https://annex.exploratorium.edu/cooking/eggs/eggscience.html',
      },
      {
        title: 'Mise — Fettuccine al burro, practical application',
        url: '/mise/recipes/authentic-roman-alfredo',
      },
    ],
    methods: [],
    recipes: [
      'authentic-roman-alfredo',
      'real-spaghetti-carbonara',
      'real-alfredo-sauce',
      'lemon-ricotta-pasta',
      'mediterranean-salmon-with-lemon-herb-emulsion',
    ],
  },
  {
    slug: 'gentle-proteins',
    title: 'Use gentle heat for tender eggs',
    category: 'Proteins & temperature',
    summary: 'Understand the difference between setting a protein and squeezing it dry.',
    principle:
      'Heat unfolds egg proteins so they can join into a network that holds water. Continued heating makes that network tighter, which can produce rubbery curds and weeping liquid. Control the rate of cooking and remember that a hot pan keeps transferring heat after the burner is off.',
    controls: [
      {
        name: 'Heat input',
        action: 'Use low to medium-low heat and scrape the bottom and corners.',
        reason: 'Even stirring and gentle heat limit localized overcooking.',
      },
      {
        name: 'Carryover',
        action: 'Transfer cooked eggs from the pan promptly.',
        reason: 'Turning off the burner does not instantly cool the pan or stop cooking.',
      },
      {
        name: 'Safety endpoint',
        action:
          'Cook scrambled eggs until set, with no liquid egg; egg dishes should reach 160°F / 71°C.',
        reason:
          'Gloss and curd size describe texture, not pathogen reduction. For preparations served undercooked, use pasteurized eggs.',
      },
    ],
    cues: [
      { stage: 'Beginning', cue: 'Small curds form where the spatula passes.' },
      { stage: 'Ready', cue: 'Moist, set curds without liquid raw egg pooling.' },
      { stage: 'Overcooked', cue: 'Dry curds and watery seepage.' },
    ],
    troubleshooting: [
      {
        problem: 'Eggs set too quickly',
        cause: 'The pan is holding more heat than the eggs need.',
        fix: 'Lift the pan off the burner, continue scraping, and return at lower heat.',
      },
      {
        problem: 'Dry or rubbery curds',
        cause: 'Too much heat or too long in the hot pan.',
        fix: 'Serve promptly; a little butter can improve mouthfeel but cannot reverse protein coagulation.',
      },
    ],
    experiment:
      'Cook two small batches of scrambled eggs to the same safe endpoint, one over low heat and one over medium. Compare curd size and moisture. Keep the amount of stirring consistent.',
    sources: [
      {
        title: 'Exploratorium — How heat changes eggs',
        url: 'https://annex.exploratorium.edu/cooking/eggs/eggscience.html',
      },
      {
        title: 'FoodSafety.gov — Safe minimum internal temperatures',
        url: 'https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures',
      },
    ],
    methods: [],
    recipes: [
      'fluffy-scrambled-eggs',
      'real-spaghetti-carbonara',
      'classic-french-toast',
      'how-to-make-frittatas-stovetop-or-baked',
      'ham-and-cheese-quiche',
    ],
  },
  {
    slug: 'braising',
    title: 'Turn a tough cut tender',
    category: 'Time & connective tissue',
    summary: 'A simmer cooks the meat. Time transforms its connective tissue.',
    principle:
      'Collagen-rich cuts need sustained moist heat for connective tissue to soften into gelatin. Meanwhile, muscle proteins firm and lose water as they heat. A gentle braise balances those processes; boiling harder does not guarantee a juicier or more tender result. Lean tenderloin cannot replace chuck or shoulder without changing the method.',
    controls: [
      {
        name: 'Choose the cut',
        action: 'Use the collagen-rich cut specified: chuck, shoulder, or shank.',
        reason: 'A lean, already-tender muscle may dry out before a long braise ends.',
      },
      {
        name: 'Gentle liquid',
        action: 'Look for occasional lazy bubbles, not a rolling boil.',
        reason: 'A controlled simmer limits evaporation and vigorous agitation.',
      },
      {
        name: 'Test texture',
        action: 'Probe several pieces with a fork or skewer near the estimated finish.',
        reason:
          'Piece size, animal, and cut affect timing. Tenderness is a separate endpoint from minimum food-safe temperature.',
      },
    ],
    cues: [
      { stage: 'Early', cue: 'Meat is cooked through but still resists a fork.' },
      { stage: 'Ready', cue: 'A skewer enters easily and a fork separates a piece without force.' },
      { stage: 'Sauce', cue: 'Liquid lightly coats a spoon after reduction.' },
    ],
    troubleshooting: [
      {
        problem: 'Meat is still chewy',
        cause: 'The connective tissue may need more time.',
        fix: 'If liquid remains and the cut is suitable, continue at a gentle simmer and check every 20–30 minutes.',
      },
      {
        problem: 'Meat is tender, sauce is thin',
        cause: 'The covered pot retained more water than needed for serving.',
        fix: 'Lift out the meat and reduce the sauce uncovered. Return the meat gently once the sauce coats a spoon.',
      },
    ],
    experiment:
      'During a chuck stew, compare one piece at 90 minutes with another at the final tender stage. Record fork resistance and moisture. Use a thermometer to verify safe cooking before tasting.',
    sources: [
      {
        title: 'Exploratorium — What makes meat juicy and tender?',
        url: 'https://annex.exploratorium.edu/cooking/meat/INT-what-makes-juicy.html',
      },
    ],
    methods: ['braise', 'slow-cook'],
    recipes: ['classic-beef-stew', 'chicken-coq-au-vin', 'brisket-with-carrots-and-onions'],
  },
  {
    slug: 'stir-frying',
    title: 'Cook in the right sequence',
    category: 'Heat & timing',
    summary: 'A home stir-fry succeeds through preparation, small batches, and fast decisions.',
    principle:
      'Food cools a pan when it goes in, and water released from the food consumes heat as it evaporates. A home burner has limited power, so batch size matters as much as the setting on the dial. Separating components lets delicate aromatics, vegetables, and proteins each receive the heat they need.',
    controls: [
      {
        name: 'Preparation',
        action: 'Cut, measure, and mix the sauce before heating the pan.',
        reason: 'The final cooking stages move too quickly to pause for chopping.',
      },
      {
        name: 'Batch size',
        action: 'Cook proteins in a single layer and remove them before vegetables.',
        reason:
          'Smaller loads let the pan recover and keep each ingredient near its ideal texture.',
      },
      {
        name: 'Aromatics last',
        action: 'Add minced garlic briefly, then add sauce or the next ingredient.',
        reason: 'Small pieces can scorch before larger ingredients finish cooking.',
      },
    ],
    cues: [
      {
        stage: 'Pan ready',
        cue: 'Oil shimmers; avoid deliberately smoking it, especially in nonstick cookware.',
      },
      {
        stage: 'Cooking',
        cue: 'A lively sizzle continues rather than turning into a quiet puddle.',
      },
      {
        stage: 'Finish',
        cue: 'Sauce lightly coats the food and vegetables retain their intended bite.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Watery stir-fry',
        cause: 'Crowding, wet vegetables, or excess sauce.',
        fix: 'Remove cooked components and reduce the liquid briefly. Use smaller, well-drained batches next time.',
      },
      {
        problem: 'Bitter garlic',
        cause: 'Garlic scorched before the other ingredients were ready.',
        fix: 'Discard scorched aromatics and start that stage again. Blackened garlic cannot be sweetened back into balance.',
      },
    ],
    experiment:
      'Stir-fry the same total amount of mushrooms once in a crowded pan and once in two batches. Compare time spent releasing water and the amount of browning.',
    sources: [
      {
        title: 'American Chemical Society — Cooking: heat and evaporation',
        url: 'https://www.acs.org/education/students/highschool/chemistryclubs/cooking.html',
      },
    ],
    methods: ['stir-fry'],
    recipes: ['egg-fried-rice', 'beef-and-broccoli-stir-fry', 'chicken-lettuce-wraps'],
  },
  {
    slug: 'starch',
    title: 'Work with starch, not against it',
    category: 'Water & structure',
    summary: 'Use hydration, heat, and agitation to choose the texture you want.',
    principle:
      'With enough water and heat, starch granules swell and some starch molecules move into the surrounding liquid. This gelatinization helps thicken sauces and soften grains. Cooling can let starch molecules reassociate, firming cooked rice. Different starches behave differently; rice, lentils, flour, and cornstarch are not interchangeable thickeners.',
    controls: [
      {
        name: 'Hydration',
        action: 'Keep enough liquid available while grains or pulses soften.',
        reason: 'A dry pan can scorch while the center of the food remains firm.',
      },
      {
        name: 'Agitation',
        action: 'Stir a creamy dal; handle separate-grain rice gently.',
        reason:
          'Breaking softened food disperses more material into the liquid and changes texture.',
      },
      {
        name: 'Slurry',
        action: 'Mix cornstarch with cool water before adding it to hot liquid.',
        reason:
          'Dispersing the granules first helps prevent dry lumps trapped inside a gelled surface.',
      },
    ],
    cues: [
      { stage: 'Hydrating', cue: 'Grains swell while their centers gradually soften.' },
      {
        stage: 'Thickening',
        cue: 'Liquid becomes more viscous; a sauce leaves a trail behind a spoon.',
      },
      { stage: 'Cooling', cue: 'Sauces and dal often thicken further as they stand.' },
    ],
    troubleshooting: [
      {
        problem: 'Dal is too thick',
        cause: 'The lentils absorbed water or the pot evaporated too much.',
        fix: 'Stir in hot water in small additions, then check seasoning again.',
      },
      {
        problem: 'Rice is gummy in the wok',
        cause: 'Surface moisture, overcooked grains, or excessive crushing.',
        fix: 'Stop mashing it. Spread and dry the next batch properly; cooling alone cannot undo overcooking.',
      },
    ],
    experiment:
      'Place a spoonful of cooked dal on a plate while the rest stays warm. Compare consistency after five minutes, then add a teaspoon of hot water to the cooled sample.',
    sources: [
      {
        title: 'Exploratorium — How starch thickens sauces',
        url: 'https://annex.exploratorium.edu/cooking/icooks/3-24-03.html',
      },
    ],
    methods: [],
    recipes: [
      'egg-fried-rice',
      'dal-tadka',
      'authentic-roman-alfredo',
      'creamy-polenta',
      'steamed-white-rice',
      'homemade-rice-pilaf',
    ],
  },
  {
    slug: 'leavening',
    title: 'Make the rise hold',
    category: 'Baking & structure',
    summary: 'Understand what makes gas, what holds it, and why the pan and mixing matter.',
    principle:
      'A quick bread needs both gas and a structure that can hold it. Baking soda reacts with acids in ingredients such as cultured buttermilk to release carbon dioxide. Baking powder contains its own acid and base; double-acting powders release gas when moistened and again as the batter heats. Existing air and water vapor also expand in the oven. Meanwhile, starch and proteins help the crumb set. Gas alone cannot rescue a batter whose balance, mixing or baking conditions prevent that structure from forming.',
    controls: [
      {
        name: 'The right ingredient',
        action: 'Read the label: baking soda and baking powder are different ingredients.',
        reason:
          'They bring different amounts of base and acid. A spoon-for-spoon swap changes both gas production and flavor.',
      },
      {
        name: 'The acidic ingredients',
        action: 'Use the cultured dairy or other acid specified in the recipe.',
        reason:
          'Replacing buttermilk with plain milk changes acidity as well as thickness and flavor. A recipe using both leaveners may rely on each for a different part of the balance.',
      },
      {
        name: 'Dose and distribution',
        action: 'Measure level spoonfuls accurately and whisk the dry ingredients evenly.',
        reason:
          'Extra leavener is not a general solution to a low loaf. Uneven pockets can leave an unpleasant taste; too much gas can exceed what the setting crumb can hold.',
      },
      {
        name: 'Mixing',
        action:
          'For a muffin-method bread such as this cornbread, fold only until dry flour disappears.',
        reason:
          'Excess mixing develops more of the wheat flour network and can make the crumb tough. A few small lumps are acceptable; dry flour pockets are not.',
      },
      {
        name: 'Pan and oven',
        action: 'Use the specified pan size and preheat before wet and dry mixtures meet.',
        reason:
          'Depth changes how quickly the center heats relative to the edges. A larger pan gives a thinner bread; the original baking time may then dry it out.',
      },
      {
        name: 'Time after mixing',
        action: 'Bake promptly unless that particular recipe calls for a rest.',
        reason:
          'Some gas forms as soon as the batter is mixed. The later reaction of double-acting powder does not make every batter suitable for an indefinite wait.',
      },
    ],
    cues: [
      {
        stage: 'Before mixing',
        cue: 'Leaveners are labeled, measured and evenly dispersed; the pan and hot oven are ready.',
      },
      {
        stage: 'In the bowl',
        cue: 'The batter is uniformly moistened, with no dry streaks and no need to beat it smooth.',
      },
      {
        stage: 'In the oven',
        cue: 'The loaf rises and its center gradually sets; a browned top alone does not establish a cooked crumb.',
      },
      {
        stage: 'After cooling',
        cue: 'The crumb supports a slice. Judge it after the recipe’s cooling period rather than compressing it while steaming hot.',
      },
    ],
    troubleshooting: [
      {
        problem: 'A low, dense result',
        cause:
          'Possible causes include inactive leavener, a substitution, excess flour or a cool oven.',
        fix: 'Check the formula, weights, powder condition and oven first. Do not automatically double the leavener; change one cause at a time on the next bake.',
      },
      {
        problem: 'Bitter or soapy pockets',
        cause: 'A measuring error, poorly dispersed leavener or an incompatible acid substitution.',
        fix: 'Review the ingredient labels and dry mixing. The finished loaf cannot be corrected by adding acid on top.',
      },
      {
        problem: 'Brown outside, wet in the middle',
        cause:
          'The pan was deeper than intended, the oven ran hot, or the bread came out too soon.',
        fix: 'Continue baking until its stated center cue is reached, shielding the top loosely with foil if needed. Match the pan and check oven temperature next time.',
      },
      {
        problem: 'A tough, tunnelled crumb',
        cause:
          'The batter may have been heavily mixed; flour quantity and leavener balance can also contribute.',
        fix: 'Use the measured flour and a brief fold for the next batch. This advice is for quick-bread batter, not a yeast dough that requires kneading.',
      },
    ],
    experiment:
      'Use two open heatproof cups. Put 1/4 tsp baking powder in one and 1/4 tsp baking soda in the other, then add 2 tbsp warm water to each. Compare the bubbling. Add 1 tsp vinegar to the soda cup and observe again. Active powder carries its own acid; the soda gets an acid partner from the vinegar. Discard the mixtures. This comparison shows gas formation, not how high a particular loaf will rise.',
    sources: [
      {
        title: 'OpenStax Chemistry 2e — Bicarbonate and carbon dioxide',
        url: 'https://openstax.org/books/chemistry-2e/pages/18-6-occurrence-preparation-and-properties-of-carbonates',
      },
      {
        title: 'Exploratorium — Bread structure and leavening',
        url: 'https://annex.exploratorium.edu/cooking/bread/bread_science.html',
      },
      {
        title: 'King Arthur Baking — Baking soda and baking powder',
        url: 'https://www.kingarthurbaking.com/blog/2021/09/10/baking-soda-vs-baking-powder-substitutions',
      },
      {
        title: 'King Arthur Baking — Comparing leavener activity',
        url: 'https://www.kingarthurbaking.com/blog/2015/11/05/test-yeast-baking-powder-baking-soda-freshness',
      },
    ],
    methods: [],
    recipes: ['cornbread'],
  },
  {
    slug: 'seasoning',
    title: 'Taste, adjust, taste again',
    category: 'Flavor & perception',
    summary: 'Make a small comparison before changing the whole pot.',
    principle:
      'Seasoning is a sensory decision as well as an ingredient quantity. Salt changes how we perceive a dish; acid adds sourness and can balance the experience of richness. Acid does not remove salt or chemically cancel fat. Temperature, dilution, and the ingredients themselves affect what a balanced amount tastes like.',
    controls: [
      {
        name: 'Small additions',
        action: 'Taste a spoonful before seasoning the whole batch.',
        reason: 'A test portion lets you compare the effect without committing the entire dish.',
      },
      {
        name: 'Reduction',
        action: 'Use lightly salted stock and make the final adjustment after reducing.',
        reason: 'Water evaporates; dissolved salt stays behind and becomes more concentrated.',
      },
      {
        name: 'Finish',
        action: 'Add fresh herbs and citrus near serving when brightness is the goal.',
        reason: 'Their fresh aroma can fade during extended cooking.',
      },
    ],
    cues: [
      {
        stage: 'Before',
        cue: 'Notice whether the dish is flat, harsh, too rich, or already salty.',
      },
      {
        stage: 'Compare',
        cue: 'Taste one plain spoonful beside one with a tiny seasoning adjustment.',
      },
      {
        stage: 'Finish',
        cue: 'Ingredients remain recognizable and no single adjustment dominates.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Too salty',
        cause: 'Overseasoning or reduction concentrated the salt.',
        fix: 'Add compatible unsalted ingredients or dilute with unsalted liquid. Acid may change the balance but does not remove sodium.',
      },
      {
        problem: 'Heavy or flat',
        cause: 'The dish may need salt, acidity, or a fresh aroma.',
        fix: 'Test each separately in a spoonful: a few grains of salt, a drop of lemon, or a small pinch of herbs. Scale up only the change that helps.',
      },
    ],
    experiment:
      'Divide a little cooked, unseasoned soup among three cups. Keep one plain, add a little salt to one, and salt plus a drop of lemon to the third. Compare aroma, flavor, and finish.',
    sources: [
      {
        title: 'American Chemical Society — Flavor chemistry',
        url: 'https://www.acs.org/education/whatischemistry/landmarks/usda-flavor-chemistry.html',
      },
    ],
    methods: [],
    recipes: [
      'everyday-arugula-salad',
      'dal-tadka',
      'classic-beef-stew',
      'crispy-parmesan-roasted-broccoli',
    ],
  },
  {
    slug: 'temperature',
    title: 'Know when it is actually done',
    category: 'Temperature & safety',
    summary: 'Time is an estimate. A thermometer measures what is happening inside.',
    principle:
      'Heat moves from the surface toward the center. Thickness, starting temperature, cookware, and burner power all change the time needed. Surface browning is separate from center temperature. Carryover cooking varies, so do not rely on an assumed temperature rise to meet a food-safety endpoint.',
    controls: [
      {
        name: 'Probe placement',
        action: 'Measure the thickest part, away from bone. Insert from the side of a thin cutlet.',
        reason: 'The center can be cooler than the browned surface.',
      },
      {
        name: 'Poultry',
        action: 'Cook poultry to 165°F / 74°C, measured in several thick pieces.',
        reason: 'This is the standard home-cooking minimum temperature.',
      },
      {
        name: 'Other foods',
        action:
          'Whole beef, pork, lamb, and veal cuts: 145°F / 63°C and a 3-minute rest. Ground meats: 160°F / 71°C; ground poultry: 165°F / 74°C. Fish: 145°F / 63°C.',
        reason: 'The appropriate minimum depends on the food and whether it is ground.',
      },
    ],
    cues: [
      { stage: 'Near done', cue: 'Begin measuring before the shortest suggested time ends.' },
      {
        stage: 'Check',
        cue: 'Check more than one piece and reposition the probe if the reading seems inconsistent.',
      },
      {
        stage: 'Store',
        cue: 'Refrigerate perishables in shallow containers within 2 hours, or 1 hour above 90°F / 32°C. Keep the refrigerator at 40°F / 4°C or below.',
      },
    ],
    troubleshooting: [
      {
        problem: 'One piece is done before the others',
        cause: 'Uneven thickness or a hot spot in the pan.',
        fix: 'Remove finished pieces to a clean plate and continue cooking the others.',
      },
      {
        problem: 'The outside is getting dry',
        cause: 'High surface heat is continuing after browning.',
        fix: 'Lower the heat to finish the center more gently. Keep measuring rather than adding an arbitrary extra few minutes.',
      },
    ],
    experiment:
      'For the next batch of chicken cutlets, record thickness, cooking time, and measured final temperature. Compare thin and thick pieces without changing the required safe endpoint.',
    sources: [
      {
        title: 'FoodSafety.gov — Safe minimum internal temperatures',
        url: 'https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures',
      },
      {
        title: 'FoodSafety.gov — Four steps to food safety',
        url: 'https://www.foodsafety.gov/keep-food-safe/4-steps-to-food-safety',
      },
    ],
    methods: [],
    recipes: ['easy-pan-seared-chicken-breasts', 'char-siu', 'fluffy-scrambled-eggs'],
  },
];

// Deliberate links and exact method matches only. Never infer techniques from a word
// appearing in unrelated notes or reuse the legacy bulk-generated technique index.
export function getTechniquesForRecipe(recipe: {
  slug: string;
  data: { cookingMethods?: string[]; learning?: { techniques: string[] } };
}): Technique[] {
  const explicit = recipe.data.learning?.techniques;
  if (explicit)
    return explicit
      .map((slug) => techniques.find((t) => t.slug === slug))
      .filter((t): t is Technique => !!t);
  return techniques
    .filter(
      (t) =>
        t.recipes.includes(recipe.slug) ||
        t.methods.some((m) => recipe.data.cookingMethods?.includes(m))
    )
    .slice(0, 3);
}
