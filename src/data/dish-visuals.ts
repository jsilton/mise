// Recipe photos made by Frederick in batches 1 to 15 (docs/image-prompts on images/approaches).
// Each file is 960 x 640 WebP in public/images/dishes, named for its recipe slug.
export const dishVisuals: Record<
  string,
  { title: string; alt: string; file?: string; studyFile?: string }
> = {
  'air-fryer-chicken-tenders': {
    file: 'air-fryer-chicken-tenders.webp',
    title: 'Air Fryer Chicken Tenders',
    alt: 'Five golden, panko-crusted chicken tenders stacked loosely on a plate beside a small white ramekin of creamy honey mustard dipping sauce.',
  },
  'almond-zucchini-bread': {
    file: 'almond-zucchini-bread.webp',
    title: 'Almond Zucchini Bread',
    alt: 'A small golden loaf of almond-flour zucchini bread with two thick slices cut and leaning against it, the moist crumb flecked with fine green shreds of zucchini.',
  },
  'aloo-gobi-potato-cauliflower-curry': {
    file: 'aloo-gobi-potato-cauliflower-curry.webp',
    title: 'Aloo Gobi (Potato Cauliflower Curry)',
    alt: 'A wide bowl of potato cubes and cauliflower florets in a thick golden tomato-spice masala, garnished with chopped cilantro.',
  },
  'anadama-bread': {
    file: 'anadama-bread.webp',
    title: 'Anadama Bread',
    alt: 'A tall, domed sandwich loaf with a glossy deep brown crust, one end sliced off and a single slice lying flat in front, showing a soft, tan crumb.',
  },
  'anelletti-al-forno': {
    file: 'anelletti-al-forno.webp',
    title: 'Anelletti Al Forno',
    alt: 'A tall square portion of baked Sicilian timballo made of anelletti, tiny pasta rings bound with meat ragù, peas and melted cheese, with a golden crisp top and a few loose rings on the plate.',
  },
  'apple-banana-and-carrot-muffin': {
    file: 'apple-banana-and-carrot-muffin.webp',
    title: 'Apple Banana and Carrot Muffins',
    alt: 'Three domed golden muffins grouped together, one broken in half to show a moist crumb flecked with orange carrot and pale apple.',
  },
  'apple-chai-oatmeal-cups': {
    file: 'apple-chai-oatmeal-cups.webp',
    title: 'Apple Chai Oatmeal Cups',
    alt: 'Four round baked oatmeal cups, muffin-sized, golden on top, showing whole rolled oats and small pieces of apple, one turned on its side.',
  },
  'apple-cider-cream-pie': {
    file: 'apple-cider-cream-pie.webp',
    title: 'Apple Cider Cream Pie',
    alt: 'One neat slice of pie with a flaky golden crust, a smooth, pale caramel-colored apple cider custard filling and a thick layer of softly whipped cinnamon cream on top.',
  },
  'apple-pie': {
    file: 'apple-pie.webp',
    title: 'Apple Pie',
    alt: 'A triangular wedge of double-crust apple pie with a flaky, sugared golden top crust and layers of tender sliced apples in the cut side.',
  },
  'arugula-feta-salad': {
    file: 'arugula-feta-salad.webp',
    title: 'Arugula & Feta Salad with Strawberry Vinaigrette',
    alt: 'A loose, airy pile of peppery baby arugula with sliced red strawberries, white crumbled feta and toasted sunflower seeds, lightly dressed with a pink strawberry vinaigrette.',
  },
  'asian-glazed-meatballs': {
    file: 'asian-glazed-meatballs.webp',
    title: 'Hoisin-Glazed Meatballs',
    alt: 'About eight round meatballs piled in a bowl, coated in a thin, glossy, deep amber hoisin glaze.',
  },
  'asian-sesame-slaw': {
    file: 'asian-sesame-slaw.webp',
    title: 'Napa Slaw with Edamame and Crispy Wontons',
    alt: 'A tall, fluffy mound of finely shredded pale napa cabbage and orange carrot matchsticks with bright green edamame, lightly dressed, topped with a handful of crisp golden wonton strips.',
  },
  'asian-slaw': {
    file: 'asian-slaw.webp',
    title: 'Cabbage Slaw with Peanuts and Sesame',
    alt: 'A colorful heap of finely shredded green and purple cabbage with orange carrot matchsticks, lightly dressed, scattered with chopped roasted peanuts.',
  },
  'authentic-roman-alfredo': {
    file: 'authentic-roman-alfredo.webp',
    title: 'Authentic Roman Alfredo (Fettuccine al Burro)',
    alt: 'A neat twirled nest of fettuccine in a glossy, pale, silky butter and Parmigiano sauce that coats every ribbon, with no cream and no extra sauce pooling.',
  },
  'avgolemono-soup': {
    file: 'avgolemono-soup.webp',
    title: 'Avgolemono',
    alt: 'A bowl of creamy, pale yellow, opaque lemon and egg soup with tender shredded chicken and soft grains of rice.',
  },
  'avocado-kale-caesar-salad': {
    file: 'avocado-kale-caesar-salad.webp',
    title: 'Avocado Kale Caesar Salad',
    alt: 'A mound of finely shredded dark green lacinato kale tossed in a creamy pale green avocado dressing, topped with diced avocado, shaved Parmesan and toasted pepitas.',
  },
  'avocado-toast': {
    file: 'avocado-toast.webp',
    title: 'Avocado Toast',
    alt: 'Two thick slices of toasted sourdough topped with roughly smashed bright green avocado, a drizzle of olive oil, red pepper flakes and flaky salt.',
  },
  'babys-first-smash-cake': {
    file: 'babys-first-smash-cake.webp',
    title: 'Baby’s First Smash Cake',
    alt: 'A small, round, two-layer cake about 6 inches across, covered in smooth white cream cheese frosting, simple and homemade with soft swoops on top.',
  },
  'baked-chicken-parmesan': {
    file: 'baked-chicken-parmesan.webp',
    title: 'Baked Chicken Parmesan',
    alt: 'A golden, crumb-coated chicken cutlet topped with bubbling melted mozzarella and a stripe of red marinara, resting on a small twirl of spaghetti in tomato sauce.',
  },
  'baked-cod-with-lemon-panko': {
    file: 'baked-cod-with-lemon-panko.webp',
    title: 'Cod with Lemon Panko',
    alt: 'A thick white cod fillet topped with a crisp, golden, parsley-flecked panko crust, sitting in a little shiny pool of lemon-garlic butter.',
  },
  'baked-creamy-mac-and-pimento-cheese': {
    file: 'baked-creamy-mac-and-pimento-cheese.webp',
    title: 'Baked Creamy Macaroni and Pimento Cheese',
    alt: 'A generous scoop of baked macaroni in a creamy orange cheddar sauce with red pimento pieces, under a golden, crunchy Parmesan and panko top.',
  },
  'bakery-style-chocolate-chip-muffins': {
    file: 'bakery-style-chocolate-chip-muffins.webp',
    title: 'Bakery Style Chocolate Chip Muffins',
    alt: 'Three tall muffins with big, high, golden domed tops studded with chocolate chips and a light crunch of sugar, one torn open to show a soft crumb with melted chips.',
  },
  'balsamic-peach-pork': {
    file: 'balsamic-peach-pork.webp',
    title: 'Balsamic Peach Pork Chops',
    alt: 'A thick, bone-in pork chop with a deep golden sear, glazed with a glossy dark balsamic and honey reduction, topped with soft caramelized peach slices and crumbled feta.',
  },
  'banana-egg-oat-pancakes': {
    file: 'banana-egg-oat-pancakes.webp',
    title: 'Banana Egg Oat Pancakes',
    alt: 'Three small, rustic banana-oat pancakes laid overlapping in a fan, speckled with flecks of oat and mashed banana.',
  },
  'banana-nut-bread': {
    file: 'banana-nut-bread.webp',
    title: 'Banana Nut Bread',
    alt: 'One thick, neat slice of banana bread standing upright on its edge, its cut face turned to the camera, in front of the cut end of the loaf, with chopped walnuts in the crumb and on the domed, cracked top.',
  },
  'banana-oat-greek-yogurt-muffins': {
    file: 'banana-oat-greek-yogurt-muffins.webp',
    title: 'Banana Oat Greek Yogurt Muffins',
    alt: 'Three golden muffins with rounded tops dotted with dark chocolate chips, one broken in half to show a moist, oaty crumb.',
  },
  'banana-pancakes': {
    file: 'banana-pancakes.webp',
    title: 'Banana Pancakes',
    alt: 'A tall stack of five fluffy, golden buttermilk banana pancakes topped with fresh banana slices and maple syrup dripping down the sides.',
  },
  'banana-pudding': {
    file: 'banana-pudding.webp',
    title: 'Banana Pudding',
    alt: 'A clear glass bowl or tall glass showing distinct layers of creamy pale yellow pudding, banana slices and vanilla wafers, topped with a smooth layer of whipped cream and a few whole wafers.',
  },
  'basic-crepes': {
    file: 'basic-crepes.webp',
    title: 'Basic Crêpes',
    alt: 'Three thin, delicate golden crêpes folded into quarters and fanned on a plate, with lacy golden-brown spots on the surface.',
  },
  'basmati-rice': {
    file: 'basmati-rice.webp',
    title: 'Basmati Rice',
    alt: 'A neat mound of long, separate, fluffy white basmati grains in a bowl, with a few cumin seeds and one bay leaf.',
  },
  'bbq-chicken-sliders': {
    file: 'bbq-chicken-sliders.webp',
    title: 'BBQ Chicken Sliders',
    alt: 'Three small sliders on soft, golden, shiny Hawaiian rolls, each filled with glossy BBQ-glazed chicken thigh, melted sharp cheddar, dill pickle chips and crispy fried onions.',
  },
  'beef-and-broccoli-stir-fry': {
    file: 'beef-and-broccoli-stir-fry.webp',
    title: 'Beef and Broccoli Stir-Fry',
    alt: 'Tender strips of seared sirloin and bright green broccoli tossed in a glossy dark soy and oyster sauce, piled generously in the center of the platter.',
  },
  'beef-chow-fun': {
    file: 'beef-chow-fun.webp',
    title: 'Beef Chow Fun',
    alt: 'A heap of very wide, flat, glossy rice noodles with a smoky, browned sear, tossed with slices of tender beef, bean sprouts and scallion lengths in a thin soy coating.',
  },
  'beef-pad-see-ew': {
    file: 'beef-pad-see-ew.webp',
    title: 'Beef Pad See Ew',
    alt: 'A plate of wide, flat rice noodles darkened and caramelized with sweet soy, tossed with thin slices of beef, deep green Chinese broccoli and soft bits of scrambled egg.',
  },
  'beef-tenderloin-dogs-with-corn-relish': {
    file: 'beef-tenderloin-dogs-with-corn-relish.webp',
    title: 'Beef Hot Dogs with Corn Relish',
    alt: 'Two split brioche buns each holding a seared strip of beef tenderloin, topped with a colorful relish of charred corn, red pepper, red onion and herbs.',
  },
  'beef-with-snow-peas': {
    file: 'beef-with-snow-peas.webp',
    title: 'Beef with Snow Peas',
    alt: 'A heap of thin, tender slices of flank steak and bright green snow peas tossed in a glossy brown soy-ginger sauce, beside a small mound of white rice.',
  },
  'best-cinnamon-roll-recipe-cinnabon-copycat': {
    file: 'best-cinnamon-roll-recipe-cinnabon-copycat.webp',
    title: 'Cinnamon Rolls',
    alt: 'One large, tall, soft cinnamon roll with a visible brown cinnamon-sugar spiral, generously topped with thick, melting white cream cheese frosting.',
  },
  'best-homemade-brownies': {
    file: 'best-homemade-brownies.webp',
    title: 'Brownies',
    alt: 'Three thick, fudgy square brownies stacked slightly offset, with a shiny, crackly paper-thin top and dense, dark, fudgy cut sides.',
  },
  bibimbap: {
    file: 'bibimbap.webp',
    title: 'Bibimbap',
    alt: 'A wide bowl of white rice topped with neat sections of sliced marinated beef, seasoned spinach, bean sprouts and cucumber slices, with a fried egg in the center and a dab of red gochujang sauce.',
  },
  'big-batch-chicken-chili-verde': {
    file: 'big-batch-chicken-chili-verde.webp',
    title: 'Big-Batch Chicken Chili Verde',
    alt: 'A bowl of thick, rich green chili of tender chicken thigh pieces and a few white beans in a roasted tomatillo and poblano sauce.',
  },
  'black-bean-tacos-with-lime-crema': {
    file: 'black-bean-tacos-with-lime-crema.webp',
    title: 'Soft Black Bean Tacos with Lime Crema',
    alt: 'Three soft corn tortillas filled with black beans, shredded cabbage, diced tomato and cilantro, drizzled with white lime crema, with a lime wedge.',
  },
  'blackout-chocolate-cake': {
    file: 'blackout-chocolate-cake.webp',
    title: 'Blackout Chocolate Cake',
    alt: 'One tall slice of very dark, three-layer chocolate cake with thick layers of glossy dark chocolate frosting between the layers and all over, showing a moist, near-black crumb.',
  },
  'blistered-shishito-peppers': {
    file: 'blistered-shishito-peppers.webp',
    title: 'Blistered Shishito Peppers',
    alt: 'A generous heap of whole, bright green shishito peppers with their stems on, blistered and charred in spots, shiny with a little oil.',
  },
  'blueberry-baked-oatmeal': {
    file: 'blueberry-baked-oatmeal.webp',
    title: 'Blueberry Oatmeal',
    alt: 'A neat square portion of golden baked oatmeal dotted with burst blueberries and toasted seeds, with a spoonful of white yogurt beside it.',
  },
  'blueberry-banana-pancake-muffins': {
    file: 'blueberry-banana-pancake-muffins.webp',
    title: 'Blueberry Banana Pancake Muffins',
    alt: 'Four small, golden, mini-muffin-sized pancake bites dotted with blueberries, one cut in half to show a soft, fluffy, pancake-like inside.',
  },
  'blueberry-date-oatmeal': {
    file: 'blueberry-date-oatmeal.webp',
    title: 'Blueberry Date Oatmeal',
    alt: 'A bowl of creamy, thick rolled-oat porridge swirled with purple from blueberries, topped with chopped dates and a few whole blueberries.',
  },
  'blueberry-oat-breakfast-bars': {
    file: 'blueberry-oat-breakfast-bars.webp',
    title: 'Blueberry Oat Breakfast Bars',
    alt: 'Three neat rectangular oat bars stacked slightly offset, golden and chewy, dotted with whole blueberries.',
  },
  'blueberry-pancakes': {
    file: 'blueberry-pancakes.webp',
    title: 'Blueberry Pancakes',
    alt: 'A short stack of four thick, fluffy golden pancakes studded with burst blueberries, topped with a pat of butter and a drizzle of maple syrup.',
  },
  'boston-style-peking-ravioli': {
    file: 'boston-style-peking-ravioli.webp',
    title: 'Boston-Style Peking Ravioli',
    alt: 'Eight plump, pleated dumplings arranged in a neat row, their bottoms browned and crisp, with a small dish of dark soy dipping sauce.',
  },
  boulevardier: {
    file: 'boulevardier.webp',
    title: 'Boulevardier',
    alt: 'A short rocks glass of deep ruby-red Boulevardier over one large clear ice cube, finished with a thin twist of orange peel.',
  },
  'braised-french-lentils': {
    file: 'braised-french-lentils.webp',
    title: 'Braised French Lentils',
    alt: 'A bowl of small, glossy, dark green French lentils that hold their shape, braised with tiny diced carrot, celery and onion.',
  },
  'brasato-al-barolo': {
    file: 'brasato-al-barolo.webp',
    title: 'Brasato al Barolo',
    alt: 'Three thick slices of fork-tender braised beef fanned on a plate, generously spooned with a glossy, deep burgundy wine sauce.',
  },
  'breakfast-burrito': {
    file: 'breakfast-burrito.webp',
    title: 'Breakfast Burrito',
    alt: 'A large flour tortilla burrito cut in half on the diagonal, the halves stacked to show the cut face packed with fluffy scrambled eggs, melted cheddar, bacon pieces and diced peppers.',
  },
  'breakfast-carrot-cake': {
    file: 'breakfast-carrot-cake.webp',
    title: 'Breakfast Carrot Cake',
    alt: 'A neat square slice of moist, wholesome carrot cake flecked with orange carrot, topped with a thin layer of creamy Greek yogurt frosting.',
  },
  'breakfast-egg-cups': {
    file: 'breakfast-egg-cups.webp',
    title: 'Breakfast Egg Cups',
    alt: 'Four round, puffed baked egg cups, muffin-sized, with red pepper, green spinach and melted cheddar visible on top, one cut in half to show the fluffy inside.',
  },
  'breakfast-protein-biscuits': {
    file: 'breakfast-protein-biscuits.webp',
    title: 'Breakfast Protein Biscuits',
    alt: 'Three tall, rustic, golden drop biscuits flecked with green spinach, chives, pink ham and orange cheddar, one split open to show a soft, tender inside.',
  },
  'breakfast-quesadilla': {
    file: 'breakfast-quesadilla.webp',
    title: 'Breakfast Quesadilla',
    alt: 'A golden, crisp flour tortilla quesadilla cut into four wedges and fanned out, showing fluffy scrambled egg and stretchy melted cheddar inside, with a small spoonful of salsa and sour cream on the plate.',
  },
  'brisket-with-carrots-and-onions': {
    file: 'brisket-with-carrots-and-onions.webp',
    title: 'Brisket with Carrots and Onions',
    alt: 'Several thick slices of tender braised brisket overlapping on a plate with soft carrot chunks and silky braised onions, spooned with a little red tomato braising sauce.',
  },
  'broccoli-all-agro': {
    file: 'broccoli-all-agro.webp',
    title: "Broccoli all'Agro",
    alt: 'A mound of bright green broccoli florets glistening with olive oil and fine threads of lemon zest.',
  },
  'broccoli-cheddar-quinoa-bites': {
    file: 'broccoli-cheddar-quinoa-bites.webp',
    title: 'Broccoli Cheddar Quinoa Bites',
    alt: 'Eight small, round, golden baked quinoa bites, crisp-edged and flecked with green broccoli and melted cheddar, piled loosely on a plate.',
  },
  'broccolini-chicken-sausage-and-orzo-skillet': {
    file: 'broccolini-chicken-sausage-and-orzo-skillet.webp',
    title: 'Broccolini, Chicken Sausage, and Orzo Skillet',
    alt: 'A shallow bowl of creamy, Parmesan-coated orzo with bright green broccolini pieces and golden seared rounds of chicken sausage.',
  },
  'brown-butter-carrot-cake': {
    file: 'brown-butter-carrot-cake.webp',
    title: 'Brown Butter Carrot Cake',
    alt: 'One tall slice of three-layer carrot cake with thick layers of creamy white cream cheese frosting, the moist crumb flecked with orange carrot.',
  },
  'brown-butter-chocolate-souffle': {
    file: 'brown-butter-chocolate-souffle.webp',
    title: 'Brown Butter-Chocolate Soufflé',
    alt: 'A single white ramekin of dark chocolate soufflé risen high above the rim with a cracked, domed top, dusted with powdered sugar.',
  },
  'brownie-baked-oatmeal': {
    file: 'brownie-baked-oatmeal.webp',
    title: 'Brownie Oatmeal',
    alt: 'A small oval baking dish of dark, fudgy chocolate baked oatmeal with melted dark chocolate chips on top and a few flakes of sea salt.',
  },
  'brownie-protein-balls': {
    file: 'brownie-protein-balls.webp',
    title: 'Brownie Protein Balls',
    alt: 'Seven round, dark chocolate no-bake balls piled in a small pyramid, a few rolled in cocoa, one cut in half to show a dense, fudgy inside.',
  },
  'build-your-own-taco-bar': {
    file: 'build-your-own-taco-bar.webp',
    title: 'Cooked-Chicken Taco Bar',
    alt: 'Three soft tortillas filled with shredded seasoned chicken, crisp shredded cabbage, diced tomato, onion and cilantro, standing upright side by side.',
  },
  'buttered-egg-noodles': {
    file: 'buttered-egg-noodles.webp',
    title: 'Buttered Egg Noodles',
    alt: 'A twirled mound of wide golden egg noodles glossy with melted butter, flecked with chopped parsley and black pepper.',
  },
  'buttermilk-baked-chicken': {
    file: 'buttermilk-baked-chicken.webp',
    title: 'Buttermilk Cornflake Baked Chicken',
    alt: 'Three pieces of bone-in baked chicken, a drumstick, a thigh and a breast, with a very craggy, golden cornflake and Parmesan crust.',
  },
  'buttermilk-waffles': {
    file: 'buttermilk-waffles.webp',
    title: 'Buttermilk Waffles',
    alt: 'Two crisp, golden Belgian-style waffles overlapping on a plate, topped with fresh berries, a pat of melting butter and a drizzle of maple syrup.',
  },
  'butternut-squash-fettuccine-alfredo': {
    file: 'butternut-squash-fettuccine-alfredo.webp',
    title: 'Butternut Squash Fettuccine Alfredo',
    alt: 'A twirled nest of fettuccine in a silky, velvety, pale orange butternut squash cream sauce.',
  },
  'cantonese-fish': {
    file: 'cantonese-fish.webp',
    title: 'Cantonese Steamed Fish',
    alt: 'A whole flat white fish fillet on an oval plate, topped with a neat pile of fine julienned ginger, green scallion and cilantro, sitting in a shallow pool of light soy sauce glistening with a little oil.',
  },
  'cantonese-shrimp-and-pork-wontons': {
    file: 'cantonese-shrimp-and-pork-wontons.webp',
    title: 'Cantonese Shrimp and Pork Wontons',
    alt: 'About eight plump wontons with thin, silky, translucent wrappers in loose ruffled tails, the pink shrimp filling showing through, in a shallow bowl with a little clear broth.',
  },
  'cantonese-shumai-siu-mai': {
    file: 'cantonese-shumai-siu-mai.webp',
    title: 'Shumai',
    alt: 'Six open-topped, cylindrical shumai dumplings in thin yellow wrappers pleated around a pink pork and shrimp filling, each topped with a dot of bright orange carrot.',
  },
  'cantonese-wonton-broth': {
    file: 'cantonese-wonton-broth.webp',
    title: 'Cantonese Wonton Broth',
    alt: 'A white bowl of clear, light golden broth you can see through, with a few lengths of scallion and thin slices of ginger floating in it.',
  },
  caponata: {
    file: 'caponata.webp',
    title: 'Caponata',
    alt: 'A shallow bowl heaped with glossy cubes of fried eggplant, celery, green olives and capers in a sweet and sour tomato coating.',
  },
  'caramelized-black-pepper-chicken': {
    file: 'caramelized-black-pepper-chicken.webp',
    title: 'Caramelized Black Pepper Chicken',
    alt: 'Bite-size pieces of chicken thigh in a sticky, glossy, deep amber caramel glaze speckled with coarse black pepper, next to a small mound of white rice.',
  },
  'carnitas-bowl': {
    file: 'carnitas-bowl.webp',
    title: 'Carnitas Bowl',
    alt: 'A wide bowl with neat sections of crispy, golden-edged shredded pork carnitas, white rice, black beans and charred corn with creamy elote dressing.',
  },
  'cast-iron-buttermilk-biscuits': {
    file: 'cast-iron-buttermilk-biscuits.webp',
    title: 'Cast-Iron Buttermilk Biscuits',
    alt: 'Tall, flaky buttermilk biscuits baked close together in a black cast-iron skillet, tops deep golden and brushed with butter, one pulled apart to show soft, layered insides.',
  },
  'cauliflower-alfredo-sauce': {
    file: 'cauliflower-alfredo-sauce.webp',
    title: 'Cauliflower Alfredo',
    alt: 'A twirled nest of fettuccine coated in a smooth, creamy white cauliflower Alfredo sauce.',
  },
  'cauliflower-rice': {
    file: 'cauliflower-rice.webp',
    title: 'Cauliflower Rice',
    alt: 'A mound of fluffy, rice-sized grains of cauliflower, lightly golden in spots, flecked with fresh herbs.',
  },
  'chana-begoon': {
    file: 'chana-begoon.webp',
    title: 'Chana Begoon',
    alt: 'A bowl of tender chickpeas and soft cubes of eggplant in a thick, rich, spiced tomato masala.',
  },
  'chana-masala': {
    file: 'chana-masala.webp',
    title: 'Chana Masala',
    alt: 'A bowl of whole, tender chickpeas in a thick, deeply colored onion and tomato masala, with a slit green chile on top.',
  },
  'char-siu': {
    file: 'char-siu.webp',
    title: 'Char Siu (Chinese BBQ Pork)',
    alt: 'Thick slices of char siu pork fanned on a plate, with a lacquered, sticky red glaze and charred edges, the cut sides showing juicy pale meat.',
  },
  'charred-asparagus-with-parmesan': {
    file: 'charred-asparagus-with-parmesan.webp',
    title: 'Charred Asparagus with Parmesan',
    alt: 'A small, neat bundle of six or seven short, bright green asparagus spears laid side by side with charred spots, showered with finely grated Parmesan and lemon zest.',
  },
  'charred-broccoli-with-garlic': {
    file: 'charred-broccoli-with-garlic.webp',
    title: 'Charred Broccoli with Garlic',
    alt: 'A heap of broccoli florets with deep brown charred edges, golden slices of garlic and a sprinkle of red pepper flakes.',
  },
  'charred-guacamole-with-pomegranate': {
    file: 'charred-guacamole-with-pomegranate.webp',
    title: 'Charred Guacamole with Pomegranate',
    alt: 'A bowl of chunky green guacamole flecked with charred tomato and jalapeño, topped with ruby pomegranate seeds and cilantro.',
  },
  'cheese-fondue': {
    file: 'cheese-fondue.webp',
    title: 'Cheese Fondue',
    alt: 'A small white enamel fondue pot of smooth, glossy melted Gruyère cheese, with a cube of bread on a long fork lifted out trailing a ribbon of cheese, and a few bread cubes and green apple slices beside the pot.',
  },
  'cheesy-cauliflower-sauce': {
    file: 'cheesy-cauliflower-sauce.webp',
    title: 'Cheesy Cauliflower Sauce',
    alt: 'A twirled nest of linguine in a smooth, creamy, golden cheddar-yellow cauliflower cheese sauce.',
  },
  'chef-krigers-recipe-shabbat-brisket': {
    file: 'chef-krigers-recipe-shabbat-brisket.webp',
    title: 'Chef Kriger’s Recipe Shabbat Brisket',
    alt: 'Thick slices of tender braised brisket, cut across the grain and overlapping on a platter, glazed with a glossy dark red-brown sweet-savory sauce, with soft baby carrots and onion.',
  },
  'chewy-chocolate-meringues': {
    file: 'chewy-chocolate-meringues.webp',
    title: 'Chewy Chocolate Meringues',
    alt: 'Five large, crackly meringue cookies piled loosely, glossy and crisp on the outside with dark chocolate chips, one broken open to show a chewy, marshmallowy inside.',
  },
  'chicken-and-spinach-skillet-pasta-with-lemon-and-parmesan': {
    file: 'chicken-and-spinach-skillet-pasta-with-lemon-and-parmesan.webp',
    title: 'Chicken & Spinach Pasta with Lemon',
    alt: 'A shallow bowl of penne in a light, glossy lemon-Parmesan sauce with golden pieces of chicken breast and wilted green spinach.',
  },
  'chicken-and-white-bean-enchiladas-with-creamy-green-chile-sauce': {
    file: 'chicken-and-white-bean-enchiladas-with-creamy-green-chile-sauce.webp',
    title: 'Chicken and White Bean Enchiladas',
    alt: 'Two rolled chicken and white bean enchiladas covered in creamy pale green chile sauce, bubbling golden-spotted cheese and a little chopped cilantro.',
  },
  'chicken-and-wild-rice-soup': {
    file: 'chicken-and-wild-rice-soup.webp',
    title: 'Chicken and Wild Rice Soup',
    alt: 'A bowl of light, brothy golden soup with long dark grains of wild rice, tender chicken pieces, and diced carrot and celery.',
  },
  'chicken-apple-and-butternut-stew': {
    file: 'chicken-apple-and-butternut-stew.webp',
    title: 'Chicken, Apple, and Butternut Stew',
    alt: 'A bowl of hearty stew with cubes of orange butternut squash, pieces of tender chicken thigh, parsnip and tart apple in a light golden cider broth.',
  },
  'chicken-biryani': {
    file: 'chicken-biryani.webp',
    title: 'Hyderabadi-style Chicken Biryani',
    alt: 'A generous mound of long, separate grains of basmati rice in saffron yellow, orange and white, with pieces of spiced chicken, topped with crisp fried onions and fresh mint.',
  },
  'chicken-chile-enchiladas': {
    file: 'chicken-chile-enchiladas.webp',
    title: 'Chicken Chile Enchiladas',
    alt: 'Two rolled corn tortilla enchiladas covered in deep red chile sauce and bubbling melted cheese.',
  },
  'chicken-coq-au-vin': {
    file: 'chicken-coq-au-vin.webp',
    title: 'Coq au Vin with Chicken Thighs',
    alt: 'Two bone-in chicken thighs with burnished skin in a glossy, deep burgundy red wine sauce with mushrooms, bacon lardons and small onions.',
  },
  'chicken-fingers': {
    file: 'chicken-fingers.webp',
    title: 'Chicken Fingers',
    alt: 'Five baked chicken fingers with a fine, golden, buttery Ritz cracker crumb crust, stacked loosely on a white plate.',
  },
  'chicken-galbi-noodle-salad': {
    file: 'chicken-galbi-noodle-salad.webp',
    title: 'Korean-inspired Chicken Glass-Noodle Salad',
    alt: 'A tangle of glossy, translucent sweet-potato glass noodles tossed with savory ground chicken, thin strips of crisp bell pepper and scallions.',
  },
  'chicken-katsu-curry': {
    file: 'chicken-katsu-curry.webp',
    title: 'Chicken Katsu Curry',
    alt: 'A golden panko-crusted chicken cutlet sliced into strips and laid over a mound of white rice, with thick, glossy brown Japanese curry with carrot, potato and peas spooned alongside.',
  },
  'chicken-lettuce-wraps': {
    file: 'chicken-lettuce-wraps.webp',
    title: 'Chicken Lettuce Wraps',
    alt: 'Three cupped butter lettuce leaves filled with glossy hoisin-ginger ground chicken, water chestnuts, shiitake mushrooms and scallion.',
  },
  'chicken-marsala': {
    file: 'chicken-marsala.webp',
    title: 'Chicken Marsala',
    alt: 'Two golden chicken cutlets covered in a glossy brown Marsala wine sauce with thick slices of mushroom.',
  },
  'chicken-milanese': {
    file: 'chicken-milanese.webp',
    title: 'Chicken Milanese',
    alt: 'A large, thin, golden, crisp breaded chicken cutlet topped with a small pile of freshly dressed arugula and shaved Parmesan.',
  },
  'chicken-pho': {
    file: 'chicken-pho.webp',
    title: 'Phở Gà (Chicken Pho)',
    alt: 'A large bowl of clear, light golden chicken broth you can see into, with flat, wide, translucent white rice noodles (bánh phở) folded in ribbons beneath slices of tender poached chicken, topped with fresh herbs.',
  },
  'chicken-piccata-unfried': {
    file: 'chicken-piccata-unfried.webp',
    title: 'Chicken Piccata',
    alt: 'Three thin golden-seared chicken cutlets overlapping on a plate, spooned with a glossy pale lemon-butter pan sauce dotted with capers.',
  },
  'chicken-pot-pie-ix': {
    file: 'chicken-pot-pie-ix.webp',
    title: 'Chicken Pot Pie',
    alt: 'A round double-crust pie with a deep golden, flaky top crust and a vented center, one wedge lifted out and set beside it to show a creamy filling of chicken, diced carrot, celery and onion.',
  },
  'chicken-quesadillas-with-quick-pico': {
    file: 'chicken-quesadillas-with-quick-pico.webp',
    title: 'Chicken Quesadillas with Quick Pico',
    alt: 'Four golden, crisp quesadilla wedges stacked in a fan, melted cheese and shredded chicken visible at the cut edges, with a small mound of fresh diced tomato pico de gallo on the side.',
  },
  'chicken-sausage-pasta': {
    file: 'chicken-sausage-pasta.webp',
    title: 'Chicken Sausage Pasta',
    alt: 'A twirled nest of linguine tossed with a chunky red tomato sauce, browned coins of chicken sausage, strips of bell pepper and wilted spinach, finished with grated Parmesan.',
  },
  'chicken-scaloppine-with-tomato-and-white-wine': {
    file: 'chicken-scaloppine-with-tomato-and-white-wine.webp',
    title: 'Chicken Scaloppine with Tomato & White Wine',
    alt: 'Flattened golden chicken pieces in a light rosy tomato and white wine pan sauce, with glossy wilted spinach alongside.',
  },
  'chicken-shawarma': {
    file: 'chicken-shawarma.webp',
    title: 'Shawarma-style Roast Chicken',
    alt: 'Sliced spiced chicken thighs with deep golden, browned edges piled on a platter and drizzled with creamy tahini sauce.',
  },
  'chicken-souvlaki': {
    file: 'chicken-souvlaki.webp',
    title: 'Chicken Souvlaki',
    alt: 'Three skewers of chunky grilled chicken pieces with browned, lightly charred edges laid side by side on a platter with lemon wedges.',
  },
  'chicken-thigh-kebabs-with-chile-yogurt-sauce': {
    file: 'chicken-thigh-kebabs-with-chile-yogurt-sauce.webp',
    title: 'Paprika Chicken Kebabs with Chile-Yogurt Sauce',
    alt: 'Three skewers of skin-on chicken thigh pieces with crisp, brick-red paprika skin and grill marks, laid on a platter beside a small pool of creamy white yogurt sauce flecked with cayenne.',
  },
  'chicken-tikka-masala': {
    file: 'chicken-tikka-masala.webp',
    title: 'Chicken Tikka Masala',
    alt: 'A bowl of charred, tender chunks of chicken in a rich, creamy orange-red tomato sauce with a swirl of cream.',
  },
  'chicken-tinga': {
    file: 'chicken-tinga.webp',
    title: 'Chicken Tinga',
    alt: 'A generous mound of shredded chicken coated in a rich, rusty-red chipotle-tomato sauce with soft onion half-moons, in a shallow bowl.',
  },
  'chicken-tortilla-soup-iii': {
    file: 'chicken-tortilla-soup-iii.webp',
    title: 'Chicken Tortilla Soup III',
    alt: 'A bowl of creamy, pale orange chicken soup with shredded chicken and corn, topped with a small pile of crisp tortilla strips.',
  },
  'chicken-with-snow-peas-stir-fry': {
    file: 'chicken-with-snow-peas-stir-fry.webp',
    title: 'Chicken with Snow Peas Stir-Fry',
    alt: 'A heap of thin, silky chicken slices and bright green snow peas lightly coated in a glossy, translucent garlic sauce on a plate.',
  },
  chili: {
    file: 'chili.webp',
    title: 'Turkey and Sweet Potato Chili',
    alt: 'A bowl of thick, rich tomato chili with browned ground turkey, orange sweet potato cubes and black beans, topped with a small spoon of sour cream and scallions.',
  },
  chimichurri: {
    file: 'chimichurri.webp',
    title: 'Chimichurri',
    alt: 'Five slices of grilled steak with a pink center fanned on a plate, spooned generously with a bright green, herb-flecked chimichurri sauce.',
  },
  'chinese-chicken': {
    file: 'chinese-chicken.webp',
    title: 'Chicken & Broccoli with Lap Cheong Rice',
    alt: 'A mound of jasmine rice studded with glossy slices of red Chinese sausage, topped with savory chicken pieces, broccoli florets and onion in a glossy brown sauce.',
  },
  'chinese-chicken-broccoli': {
    file: 'chinese-chicken-broccoli.webp',
    title: 'Chicken and Broccoli Stir-Fry',
    alt: 'A heap of tender sliced chicken and bright green broccoli florets coated in a glossy dark oyster sauce on a platter.',
  },
  'chinese-eggplant-with-garlic-sauce': {
    file: 'chinese-eggplant-with-garlic-sauce.webp',
    title: 'Chili-Bean Eggplant with Pork',
    alt: 'A heap of soft, glossy eggplant pieces in a rich red chili-bean sauce with crumbles of ground pork, scattered with sliced scallions.',
  },
  'chinese-garlic-sauce-base': {
    file: 'chinese-garlic-sauce-base.webp',
    title: 'Garlic-Ginger Stir-Fry Sauce',
    alt: 'A heap of bright green beans glazed in a glossy, translucent amber garlic-ginger sauce with visible flecks of minced garlic and ginger.',
  },
  'chinese-sausage-fried-rice': {
    file: 'chinese-sausage-fried-rice.webp',
    title: 'Chinese Sausage Fried Rice',
    alt: 'A bowl of fried jasmine rice with slices of red Chinese sausage, egg, peas, green onion and red chili.',
  },
  'chinese-steamed-fish': {
    file: 'chinese-steamed-fish.webp',
    title: 'Steamed Fish',
    alt: 'A whole snapper on an oval platter, its skin glistening, topped with a neat pile of fine ginger and scallion threads and cilantro, sitting in a shallow pool of light soy sauce.',
  },
  'chinese-style-snapper': {
    file: 'chinese-style-snapper.webp',
    title: 'Chinese-Style Snapper',
    alt: 'A large whole snapper on an oval platter, glossy with soy and sesame, topped with long shredded scallion threads, fine ginger shreds and cilantro.',
  },
  'chipotle-pork-and-sweet-corn-tamale-bowls': {
    file: 'chipotle-pork-and-sweet-corn-tamale-bowls.webp',
    title: 'Chipotle Pork Bowls',
    alt: 'A bowl of creamy golden polenta topped with a rich red chipotle ground-pork sauce with diced red pepper, a scoop of charred sweet corn and crumbled cotija.',
  },
  'chocolate-blended-oats-with-raspberry-chia-jam': {
    file: 'chocolate-blended-oats-with-raspberry-chia-jam.webp',
    title: 'Chocolate Blended Oats with Raspberry Chia Jam',
    alt: 'A short glass showing a bottom layer of bright raspberry chia jam, a thick layer of smooth chocolate blended oats and a thin set dark chocolate cap on top.',
  },
  'chocolate-bread-pudding-with-vanilla-ice-cream': {
    file: 'chocolate-bread-pudding-with-vanilla-ice-cream.webp',
    title: 'Chocolate Bread Pudding',
    alt: 'A square portion of dark chocolate brioche bread pudding with a crisp top and pockets of melted white chocolate, topped with a scoop of vanilla ice cream just beginning to melt.',
  },
  'chocolate-chia-pudding': {
    file: 'chocolate-chia-pudding.webp',
    title: 'Chocolate Chia Pudding',
    alt: 'A small bowl of thick, glossy chocolate chia pudding, topped with a few fresh berries and a scattering of chocolate chips.',
  },
  'chocolate-chip-beet-muffins': {
    file: 'chocolate-chip-beet-muffins.webp',
    title: 'Chocolate Chip Beet Muffins',
    alt: 'Five domed, dark chocolate-colored muffins with chocolate chips on top, one broken open to show a moist, deep cocoa-red crumb.',
  },
  'chocolate-chip-cookie-cake': {
    file: 'chocolate-chip-cookie-cake.webp',
    title: 'Chocolate Chip Cookie Cake',
    alt: 'A large round, golden chocolate chip cookie cake studded with chocolate discs and colorful candy-coated chocolates, with one wedge cut and pulled slightly away.',
  },
  'chocolate-chip-muffins-with-zucchini': {
    file: 'chocolate-chip-muffins-with-zucchini.webp',
    title: 'Chocolate Chip Zucchini Muffins',
    alt: 'Five domed buckwheat muffins with chocolate chips on top, one broken in half to show a tender brown crumb flecked with green zucchini.',
  },
  'chocolate-chip-walnut-cookies': {
    file: 'chocolate-chip-walnut-cookies.webp',
    title: 'Chocolate Chip Walnut Cookies',
    alt: 'A plate of golden chocolate chip walnut cookies, one broken in half to show chocolate chips and walnut pieces.',
  },
  'chocolate-crinkle-cookies': {
    file: 'chocolate-crinkle-cookies.webp',
    title: 'Chocolate Crinkle Cookies',
    alt: 'Seven round dark chocolate cookies coated in powdered sugar with deep cracks showing the fudgy chocolate inside, arranged in a loose pile.',
  },
  'chocolate-pie': {
    file: 'chocolate-pie.webp',
    title: 'Chocolate Pie',
    alt: 'A slice of chocolate cream pie on a plate showing a flaky golden crust, a thick glossy dark chocolate pudding filling and a swirl of whipped cream topped with shaved chocolate.',
  },
  'chocolate-protein-zucchini-muffins': {
    file: 'chocolate-protein-zucchini-muffins.webp',
    title: 'Chocolate Protein Zucchini Muffins',
    alt: 'Five domed dark chocolate muffins, one broken open to show a moist, fudgy cocoa crumb with faint green zucchini flecks.',
  },
  'chocolate-souffle': {
    file: 'chocolate-souffle.webp',
    title: 'Chocolate Soufflé',
    alt: 'A single chocolate soufflé risen tall and proud above the rim of its ramekin, with a cracked dark top dusted with powdered sugar.',
  },
  'chocolate-vanilla-swirl-layer-cake': {
    file: 'chocolate-vanilla-swirl-layer-cake.webp',
    title: 'Chocolate Vanilla Swirl Layer Cake',
    alt: 'A tall slice of three-layer marbled chocolate and vanilla cake with glossy dark chocolate ganache between the layers and over the top and sides.',
  },
  'cilantro-lime-rice': {
    file: 'cilantro-lime-rice.webp',
    title: 'Cilantro-Lime Rice',
    alt: 'A fluffy mound of jasmine rice flecked throughout with chopped green cilantro and lime zest in a shallow bowl, a lime wedge tucked at the side.',
  },
  'cinnamon-sweet-potatoes': {
    file: 'cinnamon-sweet-potatoes.webp',
    title: 'Sweet Potatoes with Cinnamon',
    alt: 'A single layer of overlapping orange sweet potato rounds with caramelized browned edges, glossy with a honey-cinnamon glaze.',
  },
  'classic-beef-stew': {
    file: 'classic-beef-stew.webp',
    title: 'Beef Stew',
    alt: 'A bowl of beef stew with chunks of braised beef, carrot, celery, potato and green peas in a glossy deep brown red-wine gravy.',
  },
  'classic-carrot-cake': {
    file: 'classic-carrot-cake.webp',
    title: 'Classic Carrot Cake',
    alt: 'A tall slice of two-layer carrot cake on a plate, the moist spiced crumb flecked with grated carrot, with thick cream cheese frosting between the layers and on top.',
  },
  'classic-chocolate-chip-cookies': {
    file: 'classic-chocolate-chip-cookies.webp',
    title: 'Classic Chocolate Chip Cookies',
    alt: 'Five large golden-brown chocolate chip cookies with crinkled edges, pools of melted chocolate and a few sunflower seeds, sprinkled with flaky sea salt, stacked loosely.',
  },
  'classic-french-toast': {
    file: 'classic-french-toast.webp',
    title: 'Classic French Toast',
    alt: 'Three thick slices of golden brioche French toast stacked and slightly offset, dusted with powdered sugar, topped with fresh berries and a drizzle of maple syrup.',
  },
  'classic-guacamole': {
    file: 'classic-guacamole.webp',
    title: 'Classic Guacamole',
    alt: 'A chunky bowl of guacamole with visible diced onion, tomato, jalapeño and cilantro, with a few corn chips tucked into one side.',
  },
  'classic-manhattan': {
    file: 'classic-manhattan.webp',
    title: 'Classic Manhattan',
    alt: 'A stirred Manhattan in a chilled coupe, deep amber-red and crystal clear, with a maraschino cherry resting at the bottom and an orange peel on the rim.',
  },
  'classic-martini': {
    file: 'classic-martini.webp',
    title: 'Martini',
    alt: 'A crystal-clear gin martini in a frosted, chilled V-shaped martini glass, with a long twist of lemon peel draped over the rim.',
  },
  'classic-peach-ice-cream': {
    file: 'classic-peach-ice-cream.webp',
    title: 'Classic Peach Ice Cream',
    alt: 'Three round scoops of pale peach ice cream studded with small pieces of peach, in a small bowl.',
  },
  'classic-wonton-soup': {
    file: 'classic-wonton-soup.webp',
    title: 'Classic Wonton Soup',
    alt: 'A bowl of clear golden broth holding eight silky pork wontons with soft, frilly wrappers, a halved baby bok choy and a scattering of sliced scallions.',
  },
  'coconut-chicken-curry': {
    file: 'coconut-chicken-curry.webp',
    title: 'Slow-Cooker Coconut Chicken Curry',
    alt: 'A bowl of creamy golden coconut curry with chicken pieces, red and green pepper and carrot, beside a neat mound of white rice and a few cubes of fresh mango.',
  },
  'coconut-chickpea-curry': {
    file: 'coconut-chickpea-curry.webp',
    title: 'Coconut Chickpea Curry',
    alt: 'A bowl of chickpeas in a creamy orange coconut-tomato sauce, with a swirl of coconut milk and a scattering of fresh cilantro.',
  },
  'coconut-curry-shrimp': {
    file: 'coconut-curry-shrimp.webp',
    title: 'Coconut Curry Shrimp',
    alt: 'A bowl of large plump pink shrimp with zucchini half-moons and sliced mushrooms in a creamy golden coconut curry sauce, topped with torn basil leaves.',
  },
  'coconut-jasmine-rice': {
    file: 'coconut-jasmine-rice.webp',
    title: 'Coconut Jasmine Rice',
    alt: 'A fluffy domed mound of glossy, ivory coconut jasmine rice in a shallow bowl.',
  },
  'coconut-rice-and-peas': {
    file: 'coconut-rice-and-peas.webp',
    title: 'Jamaican Rice and Peas (Kidney Beans)',
    alt: 'A fluffy mound of coconut rice speckled with dark red kidney beans, with a sprig of thyme and a whole Scotch bonnet pepper resting on top.',
  },
  coleslaw: {
    file: 'coleslaw.webp',
    title: 'Classic Creamy Coleslaw',
    alt: 'A heaped mound of very finely shredded green cabbage and grated orange carrot lightly coated in a creamy white dressing, flecked with celery seed.',
  },
  'coq-au-vin-slow-cooker-v2': {
    file: 'coq-au-vin-slow-cooker-v2.webp',
    title: 'Slow-Cooker Coq au Vin',
    alt: 'Tender chicken thigh pieces with sliced cremini mushrooms, carrot pieces and whole pearl onions in a glossy, deep brown wine sauce, spooned over a mound of white rice.',
  },
  'corn-bread-dressing': {
    file: 'corn-bread-dressing.webp',
    title: 'Corn Bread Dressing',
    alt: 'A baking dish of golden cornbread dressing with crisp, browned exposed edges and a moist center, one corner scooped out to show soft pieces of cornbread with mushrooms, celery and herbs.',
  },
  'corn-casserole': {
    file: 'corn-casserole.webp',
    title: 'Corn Casserole',
    alt: 'A baking dish of golden, puffed corn casserole with whole corn kernels visible on top, one square portion lifted out to show a soft, spoonable, pudding-like inside.',
  },
  'corn-shrimp-dumplings': {
    file: 'corn-shrimp-dumplings.webp',
    title: 'Corn-Shrimp Dumplings',
    alt: 'Eight tender, translucent pleated dumplings arranged in a ring, one cut open to show pink shrimp and yellow corn inside, with a small pile of bright pink pickled red onions and a small pool of soy and chili oil.',
  },
  cornbread: {
    file: 'cornbread.webp',
    title: 'Buttermilk Cornbread',
    alt: 'Four square pieces of golden cornbread stacked slightly offset, one with a pat of melting butter on top, showing a tender yellow crumb.',
  },
  'cottage-cheese-banana-oatmeal-protein-pancakes': {
    file: 'cottage-cheese-banana-oatmeal-protein-pancakes.webp',
    title: 'Cottage Cheese Banana Oatmeal Protein Pancakes',
    alt: 'A stack of four small, golden, fluffy oat pancakes studded with blueberries, topped with a spoon of Greek yogurt and a few fresh blueberries.',
  },
  'cranberry-crunch': {
    file: 'cranberry-crunch.webp',
    title: 'Cranberry Apple Crunch',
    alt: 'A generous scoop of baked apple and cranberry fruit with a crumbly golden oat and pecan topping, the jammy ruby fruit bubbling up at the edges.',
  },
  'cream-of-mushroom-soup': {
    file: 'cream-of-mushroom-soup.webp',
    title: 'Cream of Mushroom Soup',
    alt: 'A bowl of smooth, velvety light brown mushroom soup with a swirl of cream on top and a few golden sautéed mushroom slices.',
  },
  'creamy-avocado-pasta': {
    file: 'creamy-avocado-pasta.webp',
    title: 'Avocado Pasta',
    alt: 'A twirled nest of spaghetti coated in a smooth, bright green avocado-basil sauce, topped with halved cherry tomatoes and Parmesan shavings.',
  },
  'creamy-garlicky-shrimp-skillet': {
    file: 'creamy-garlicky-shrimp-skillet.webp',
    title: 'Garlicky Shrimp Fettuccine',
    alt: 'A twirled nest of fettuccine in a rich, creamy Parmesan sauce tinted pale orange with paprika, with plump pink shrimp and strips of roasted red pepper.',
  },
  'creamy-polenta': {
    file: 'creamy-polenta.webp',
    title: 'Creamy Polenta',
    alt: 'A soft, spoonable pool of creamy golden polenta in a shallow bowl, with a melting knob of butter, grated Parmesan and cracked black pepper.',
  },
  'creamy-slow-cooker-chicken-and-wild-rice-soup': {
    file: 'creamy-slow-cooker-chicken-and-wild-rice-soup.webp',
    title: 'Creamy Slow-Cooker Chicken and Wild Rice Soup',
    alt: 'A bowl of creamy soup with dark wild rice grains, shredded chicken, diced carrot, celery and sliced mushrooms.',
  },
  'creamy-spinach-lemon-chicken-dinnner': {
    file: 'creamy-spinach-lemon-chicken-dinnner.webp',
    title: 'Spinach Lemon Chicken',
    alt: 'Two golden-seared chicken cutlets on a plate in a light, creamy yogurt-lemon sauce with wilted spinach, flecked with oregano.',
  },
  'creamy-whole-wheat-mac-and-cheese': {
    file: 'creamy-whole-wheat-mac-and-cheese.webp',
    title: 'Whole-Wheat Mac and Cheese',
    alt: 'A bowl of whole-wheat elbow macaroni coated in a creamy, golden cheddar sauce, finished with black pepper.',
  },
  'crisp-skin-duck-breast-with-orange-pan-sauce': {
    file: 'crisp-skin-duck-breast-with-orange-pan-sauce.webp',
    title: 'Crisp-Skin Duck Breast with Orange Pan Sauce',
    alt: 'A duck breast sliced and fanned on a plate, each slice showing crisp golden skin over a rosy pink center, with glossy amber orange sauce beside it.',
  },
  'crispy-baked-chicken-sliders': {
    file: 'crispy-baked-chicken-sliders.webp',
    title: 'Crispy Baked Chicken Sliders',
    alt: 'Three slider sandwiches lined up on a platter, each a soft golden sweet bun filled with a crisp panko-coated chicken piece, mayonnaise and dill pickle chips.',
  },
  'crispy-black-bean-tacos': {
    file: 'crispy-black-bean-tacos.webp',
    title: 'Roasted Black Bean Tacos with Avocado Crema',
    alt: 'Three soft tortillas folded side by side, filled with crisp-edged roasted black beans and drizzled with pale green avocado crema.',
  },
  'crispy-gold-potatoes-with-lemon-garlic-butter': {
    file: 'crispy-gold-potatoes-with-lemon-garlic-butter.webp',
    title: 'Crispy Gold Potatoes with Smoked Salt and Paprika',
    alt: 'A pile of halved petite gold potatoes with deeply browned, crisp cut faces, glossy with melted garlic butter, dusted with sweet paprika and flaky salt.',
  },
  'crispy-oven-zucchini-fries': {
    file: 'crispy-oven-zucchini-fries.webp',
    title: 'Crispy Oven Zucchini Fries',
    alt: 'A loose pile of about twelve golden panko-and-Parmesan coated zucchini sticks beside a small pool of marinara and a lemon wedge.',
  },
  'crispy-pancetta-sweet-pea-lemon-ricotta-pasta': {
    file: 'crispy-pancetta-sweet-pea-lemon-ricotta-pasta.webp',
    title: 'Crispy Pancetta, Sweet Pea & Lemon Ricotta Pasta',
    alt: 'A bowl of orecchiette coated in a creamy pale lemon-ricotta sauce with bright green sweet peas and crisp golden cubes of pancetta, finished with lemon zest and Parmesan.',
  },
  'crispy-parmesan-roasted-broccoli': {
    file: 'crispy-parmesan-roasted-broccoli.webp',
    title: 'Crispy Parmesan Roasted Broccoli',
    alt: 'A pile of broccoli florets with flat, deeply browned cut sides and a golden, lacy crust of Parmesan.',
  },
  'crispy-shallots': {
    file: 'crispy-shallots.webp',
    title: 'Crispy Shallots',
    alt: 'A loose heap of thin, golden, crisp fried shallot rings in a small bowl.',
  },
  'crispy-sheet-pan-gnocchi-and-veggies': {
    file: 'crispy-sheet-pan-gnocchi-and-veggies.webp',
    title: 'Sheet Pan Gnocchi & Veggies',
    alt: 'A platter of golden, crisp-edged potato gnocchi roasted with blistered cherry tomatoes, chunks of mini bell pepper and red onion, finished with Parmesan and basil.',
  },
  'crispy-smashed-potatoes': {
    file: 'crispy-smashed-potatoes.webp',
    title: 'Smashed Potatoes',
    alt: 'Seven baby potatoes smashed flat into rough rounds with craggy, crisp golden edges, sprinkled with herbs and flaky sea salt.',
  },
  'crock-pot-hot-chocolate': {
    file: 'crock-pot-hot-chocolate.webp',
    title: 'Hot Chocolate',
    alt: 'A mug filled to the top with rich, thick dark drinking chocolate, topped with a few marshmallows and shaved chocolate.',
  },
  'crockpot-mac-and-cheese': {
    file: 'crockpot-mac-and-cheese.webp',
    title: 'Slow-Cooker Mac and Cheese',
    alt: 'A bowl of elbow macaroni in a thick, creamy, bright golden cheddar sauce, with a lifted scoop showing the clinging cheese.',
  },
  'crockpot-vegetarian-chili': {
    file: 'crockpot-vegetarian-chili.webp',
    title: 'Slow-Cooker Three-Bean Vegetable Chili',
    alt: 'A bowl of thick tomato chili with kidney beans, chickpeas, black beans, orange sweet potato cubes and diced peppers, topped with a little sour cream, avocado and cilantro.',
  },
  'crustless-sausage-and-spinach-quiche': {
    file: 'crustless-sausage-and-spinach-quiche.webp',
    title: 'Crustless Sausage & Spinach Quiche',
    alt: 'A round crustless quiche with a puffed golden top, one wedge cut and pulled out to show a set, custardy egg filling with crumbled sausage and dark green spinach.',
  },
  'crustless-spinach-quiche': {
    file: 'crustless-spinach-quiche.webp',
    title: 'Crustless Spinach & Gruyère Quiche',
    alt: 'One thick wedge of crustless quiche on a plate, golden and lightly puffed on top, its cut side showing tender pale custard layered with dark green spinach and soft onion.',
  },
  'cu-chao-mian': {
    file: 'cu-chao-mian.webp',
    title: 'Cu Chao Mian (Shanghai Fried Noodles)',
    alt: 'A heap of thick, chewy noodles glazed a glossy deep brown with soy, tossed with thin pork strips, sliced shiitake mushrooms and greens.',
  },
  'cucumber-raita': {
    file: 'cucumber-raita.webp',
    title: 'Cucumber Raita',
    alt: 'A bowl of thick white yogurt mixed with fine grated cucumber, sprinkled with toasted cumin seeds and chopped fresh herbs.',
  },
  'curried-carrot-and-apple-soup': {
    file: 'curried-carrot-and-apple-soup.webp',
    title: 'Curried Carrot and Apple Soup',
    alt: 'A bowl of smooth, vivid orange carrot soup with a swirl of cream and a few thyme leaves on top.',
  },
  'custard-mac-and-pimento-cheese': {
    file: 'custard-mac-and-pimento-cheese.webp',
    title: 'Custard Macaroni and Pimento Cheese',
    alt: 'A baking dish of baked macaroni with a golden, bubbly browned cheese top, one square portion lifted out to show set, custardy cheesy pasta flecked with red pimento.',
  },
  'custard-peach-ice-cream': {
    file: 'custard-peach-ice-cream.webp',
    title: 'Custard Peach Ice Cream',
    alt: 'Three round scoops of rich, pale golden peach custard ice cream with flecks of peach, in a small bowl.',
  },
  'dal-tadka': {
    file: 'dal-tadka.webp',
    title: 'Dal Tadka',
    alt: 'A wide bowl of smooth, creamy golden mung dal with a glossy red-orange swirl of spiced ghee spooned over the center.',
  },
  'dan-dan-noodles': {
    file: 'dan-dan-noodles.webp',
    title: 'Dan Dan Noodles',
    alt: 'A bowl of noodles sitting in a red chili-oil and sesame sauce, topped with a mound of crisp, browned seasoned pork and preserved greens, sliced scallions and crushed peanuts.',
  },
  'dashi-japanese-sea-stock': {
    file: 'dashi-japanese-sea-stock.webp',
    title: 'Dashi',
    alt: 'A bowl of clear, pale golden dashi broth with a few thin slices of scallion floating on the surface.',
  },
  'doc-cheys-chicken-lo-mein': {
    file: 'doc-cheys-chicken-lo-mein.webp',
    title: 'Doc Chey’s Chicken Lo Mein',
    alt: 'A heap of glossy brown egg noodles tossed with thin chicken strips, sliced carrot, onion, bok choy and green edamame.',
  },
  'double-chocolate-cookies': {
    file: 'double-chocolate-cookies.webp',
    title: 'Double Chocolate Cookies',
    alt: 'Five thick, very dark chocolate cookies with crinkled tops and melted chocolate discs pooling on the surface, one broken open to show a fudgy center.',
  },
  'double-chocolate-layer-cake': {
    file: 'double-chocolate-layer-cake.webp',
    title: 'Double Chocolate Layer Cake',
    alt: 'A tall slice of dark chocolate layer cake on a plate showing moist, deep brown sponge layers with thick chocolate frosting between and over them.',
  },
  'drunken-noodles-pad-kee-mao': {
    file: 'drunken-noodles-pad-kee-mao.webp',
    title: 'Pad Kee Mao (Drunken Noodles)',
    alt: 'A heap of wide, glossy, dark-sauced rice noodles stir-fried with chicken, shallots, baby corn, red chiles and wilted holy basil.',
  },
  'dutch-baby-pancake': {
    file: 'dutch-baby-pancake.webp',
    title: 'Dutch Baby Pancake',
    alt: 'A large puffed Dutch baby pancake in a cast-iron skillet, its golden edges risen high and curled around a custardy center, dusted with powdered sugar with lemon wedges.',
  },
  'easy-baked-turkey-meatballs': {
    file: 'easy-baked-turkey-meatballs.webp',
    title: 'Turkey Meatballs',
    alt: 'Golden-browned turkey meatballs on an oval platter, one cut in half to show a fully cooked, pale interior.',
  },
  'easy-breakfast-yogurt-popsicles': {
    file: 'easy-breakfast-yogurt-popsicles.webp',
    title: 'Yogurt Popsicles',
    alt: 'Three creamy white Greek yogurt popsicles on sticks lying side by side, studded with whole berries and with a crunchy granola base.',
  },
  'easy-chia-pudding': {
    file: 'easy-chia-pudding.webp',
    title: 'Chia Pudding',
    alt: 'A small bowl of thick, creamy chia pudding topped with fresh berries, a spoon of granola and a drizzle of almond butter.',
  },
  'easy-chopped-pesto-salad-with-cannellini-beans': {
    file: 'easy-chopped-pesto-salad-with-cannellini-beans.webp',
    title: 'Easy Chopped Pesto Salad with Cannellini Beans',
    alt: 'A bowl of halved cherry tomatoes, diced cucumber, halved mozzarella balls, white cannellini beans and thin shallot slices tossed in a bright green pesto dressing.',
  },
  'easy-cinnamon-french-toast-sticks': {
    file: 'easy-cinnamon-french-toast-sticks.webp',
    title: 'Cinnamon French Toast Sticks',
    alt: 'Six golden cinnamon-dusted French toast sticks stacked log-cabin style, with fresh berries and a small pool of maple syrup on the plate.',
  },
  'easy-homemade-pumpkin-pancakes': {
    file: 'easy-homemade-pumpkin-pancakes.webp',
    title: 'Pumpkin Pancakes',
    alt: 'A stack of four fluffy, warm orange-golden pumpkin pancakes topped with a pat of melting butter and a drizzle of maple syrup.',
  },
  'easy-oreo-truffles': {
    file: 'easy-oreo-truffles.webp',
    title: 'Chocolate Sandwich Cookie Truffles',
    alt: 'Nine round truffles with a glossy, smooth dark chocolate shell arranged in rows, one cut in half to show a dark cookie-and-cream-cheese center, a few topped with flaky sea salt.',
  },
  'easy-pan-seared-chicken-breasts': {
    file: 'easy-pan-seared-chicken-breasts.webp',
    title: 'Pan-Seared Chicken Breasts',
    alt: 'Three golden, lightly floured seared chicken cutlets overlapping on a plate, one sliced to show a juicy white center, with lemon wedges.',
  },
  'easy-spinach-gnocchi': {
    file: 'easy-spinach-gnocchi.webp',
    title: 'Spinach Gnocchi',
    alt: 'About a dozen small, soft green spinach-ricotta gnocchi pillows piled loosely in a bowl, glossed with nutty brown butter and topped with crisp fried sage leaves and grated Parmesan.',
  },
  'egg-fried-rice': {
    file: 'egg-fried-rice.webp',
    title: 'Egg Fried Rice',
    alt: 'A generous mound of separate, lightly golden rice grains tossed with soft scraps of scrambled egg, green peas, diced carrot and sliced scallion.',
  },
  'egg-in-a-hole': {
    file: 'egg-in-a-hole.webp',
    title: 'Egg in a Hole',
    alt: 'Two thick slices of golden, butter-toasted bread on a plate, each with a round hole cut from the center holding a fried egg with a glossy, runny yellow yolk.',
  },
  'egg-roll-in-a-bowl': {
    file: 'egg-roll-in-a-bowl.webp',
    title: 'Pork and Cabbage Skillet (Egg Roll in a Bowl)',
    alt: 'A generous serving of browned ground pork tossed with tender shredded green cabbage and fine carrot matchsticks, glossy with soy and sesame, topped with sliced scallion and sesame seeds.',
  },
  'eggless-spinach-and-ricotta-stuffed-shells': {
    file: 'eggless-spinach-and-ricotta-stuffed-shells.webp',
    title: 'Eggless Spinach and Ricotta Stuffed Shells',
    alt: 'Four jumbo pasta shells filled with creamy green-flecked spinach ricotta, nestled in red marinara and topped with melted, lightly browned pecorino.',
  },
  'eggless-strawberry-ice-cream': {
    file: 'eggless-strawberry-ice-cream.webp',
    title: 'Eggless Strawberry Ice Cream',
    alt: 'Three round scoops of pale pink strawberry ice cream stacked in a small bowl, the edges just beginning to soften.',
  },
  'eggplant-with-garlic-sauce': {
    file: 'eggplant-with-garlic-sauce.webp',
    title: 'Garlic-Ginger Eggplant',
    alt: 'A heap of tender purple-skinned eggplant batons coated in a glossy, dark garlic-ginger sauce, scattered with sliced scallion.',
  },
  'elderberry-syrup': {
    file: 'elderberry-syrup.webp',
    title: 'Elderberry Syrup',
    alt: 'A small clear glass jar filled with deep purple-black elderberry syrup, a few dried elderberries and a cinnamon stick resting beside it on a small plate.',
  },
  'elote-style-corn-on-the-cob': {
    file: 'elote-style-corn-on-the-cob.webp',
    title: 'Elote-Style Corn on the Cob',
    alt: 'Three ears of charred corn on the cob brushed with creamy crema, rolled in crumbled queso fresco and dusted with chili powder and chopped cilantro, a lime wedge alongside.',
  },
  'enchilada-skillet': {
    file: 'enchilada-skillet.webp',
    title: 'Enchilada Skillet',
    alt: 'A generous serving of seasoned ground beef with zucchini, yellow squash, corn and black beans, layered with soft corn tortilla pieces and red enchilada sauce under melted cheese.',
  },
  'enchiladas-suizas': {
    file: 'enchiladas-suizas.webp',
    title: 'Enchiladas Suizas',
    alt: 'Three rolled corn tortilla enchiladas filled with shredded chicken, blanketed in a creamy pale green tomatillo sauce and topped with melted, lightly browned cheese.',
  },
  'everyday-arugula-salad': {
    file: 'everyday-arugula-salad.webp',
    title: 'Everyday Arugula Salad',
    alt: 'A loose, airy pile of peppery baby arugula lightly glossed with lemon and olive oil, topped with wide shavings of Parmesan.',
  },
  'extraordinary-chocolate-chip-cookie': {
    file: 'extraordinary-chocolate-chip-cookie.webp',
    title: 'Extraordinary Chocolate Chip Cookie',
    alt: 'Three large, thick chocolate chip cookies with golden crinkled edges and pools of melted semisweet chocolate, one broken in half to show a soft, chewy center.',
  },
  falafel: {
    file: 'falafel.webp',
    title: 'Falafel',
    alt: 'Six small round falafel with a deep golden-brown crust piled on a plate, one broken open to show a bright green herb-flecked center.',
  },
  'farfel-muffins': {
    file: 'farfel-muffins.webp',
    title: 'Farfel Muffins',
    alt: 'Four golden, craggy savory muffins made from small matzo pieces bound with egg, one split open with a pat of melting salted butter.',
  },
  'fattoush-salad': {
    file: 'fattoush-salad.webp',
    title: 'Fattoush Salad',
    alt: 'A colorful tumble of chopped tomato, cucumber, radish, romaine, scallion and fresh herbs, topped with crisp golden pieces of toasted pita and dusted with deep red sumac.',
  },
  'favorite-cream-cheese-frosting': {
    file: 'favorite-cream-cheese-frosting.webp',
    title: 'Cream Cheese Frosting',
    alt: 'Three vanilla cupcakes, each crowned with a tall, smooth swirl of thick, creamy white cream cheese frosting.',
  },
  'favorite-pumpkin-oatmeal-muffins': {
    file: 'favorite-pumpkin-oatmeal-muffins.webp',
    title: 'Pumpkin Oatmeal Muffins',
    alt: 'Four domed orange-brown pumpkin oat muffins dotted with dark chocolate chips, one broken open to show a moist, tender crumb.',
  },
  'fennel-and-carrot-soup': {
    file: 'fennel-and-carrot-soup.webp',
    title: 'Fennel and Carrot Soup',
    alt: 'A bowl of smooth, velvety bright orange soup with a swirl of crème fraîche on top and a small scatter of chopped roasted chestnuts and thyme leaves.',
  },
  'flourless-chocolate-cake': {
    file: 'flourless-chocolate-cake.webp',
    title: 'Flourless Chocolate Cake',
    alt: 'One neat wedge of dense, dark flourless chocolate cake under a glossy, smooth chocolate glaze, with a soft dollop of whipped cream beside it.',
  },
  'fluffy-scrambled-eggs': {
    file: 'fluffy-scrambled-eggs.webp',
    title: 'Soft Scrambled Eggs',
    alt: 'A soft mound of small, moist pale yellow scrambled egg curds sprinkled with snipped chives and black pepper.',
  },
  'freezer-banana-bread': {
    file: 'freezer-banana-bread.webp',
    title: 'Freezer Banana Bread',
    alt: 'Two thick slices of moist whole-wheat banana bread, cut from a domed loaf with a deep brown crust, leaning against each other.',
  },
  'freezer-date-cookies': {
    file: 'freezer-date-cookies.webp',
    title: 'Freezer Date Cookies',
    alt: 'Six soft, chunky round oat cookies flecked with sticky date pieces, one broken to show a chewy inside.',
  },
  'french-dip-sandwiches': {
    file: 'french-dip-sandwiches.webp',
    title: 'Slow Cooker French Dip Sandwiches',
    alt: 'French dip sandwiches piled with shredded beef and melted provolone, with a small white ramekin of dark beef jus on the plate.',
  },
  'french-toast': {
    file: 'french-toast.webp',
    title: 'French Toast',
    alt: 'Three thick golden slices of challah French toast stacked slightly offset, drizzled with maple syrup and topped with fresh berries.',
  },
  'fresh-cabbage-cucumber-and-radish-kimchi': {
    file: 'fresh-cabbage-cucumber-and-radish-kimchi.webp',
    title: 'Fresh Cabbage, Cucumber and Radish Kimchi',
    alt: 'A generous heap of napa cabbage pieces, cucumber slices, daikon cubes and quartered radishes coated in a bright red chile paste.',
  },
  'fresh-egg-pasta': {
    file: 'fresh-egg-pasta.webp',
    title: 'Fresh Egg Pasta',
    alt: 'A loose twirled nest of golden, yolk-rich fresh tagliatelle ribbons glossed with butter and finished with grated Parmesan.',
  },
  'fresh-pasta-dough': {
    file: 'fresh-pasta-dough.webp',
    title: 'Pasta Dough',
    alt: 'A twirled nest of wide fresh pappardelle ribbons lightly coated in a simple red tomato sauce.',
  },
  'fresh-strawberry-vinaigrette-salad-dressing': {
    file: 'fresh-strawberry-vinaigrette-salad-dressing.webp',
    title: 'Strawberry Vinaigrette',
    alt: 'A light pile of baby spinach leaves with sliced fresh strawberries, drizzled with a glossy rosy-pink strawberry vinaigrette.',
  },
  'fresh-wonton-wrappers': {
    file: 'fresh-wonton-wrappers.webp',
    title: 'Wonton Wrappers',
    alt: 'Six plump wontons with thin, silky homemade wrappers floating in a clear golden broth, scattered with sliced scallion.',
  },
  'fried-plantains': {
    file: 'fried-plantains.webp',
    title: 'Fried Sweet Plantains (Maduros)',
    alt: 'About ten thick diagonal slices of ripe plantain fried until deeply caramelized, arranged in a loose overlapping row.',
  },
  'frozen-blueberry-muffins': {
    file: 'frozen-blueberry-muffins.webp',
    title: 'Frozen Blueberry Muffins',
    alt: 'Four tall, domed blueberry muffins with a sparkling nutmeg-sugar crust, one broken open to show a fluffy crumb streaked with purple-blue berries.',
  },
  'funfetti-cake-from-scratch-and-an-unbirthday': {
    file: 'funfetti-cake-from-scratch-and-an-unbirthday.webp',
    title: 'Funfetti Cake',
    alt: 'One tall slice of layered vanilla cake speckled with colorful sprinkles throughout, with smooth white frosting between the layers and over the outside.',
  },
  'gambas-al-ajillo': {
    file: 'gambas-al-ajillo.webp',
    title: 'Gambas al Ajillo',
    alt: 'Plump shrimp with tails on in a shallow pool of golden garlic olive oil tinted with smoked paprika, with thin slices of golden garlic and pieces of dried red chile.',
  },
  'garlic-bread': {
    file: 'garlic-bread.webp',
    title: 'Garlic Bread',
    alt: 'Five thick slices of crusty Italian bread spread with garlic-parsley butter and Parmesan, baked until the edges are crisp and golden, overlapping in a row.',
  },
  'garlic-butter-couscous': {
    file: 'garlic-butter-couscous.webp',
    title: 'Garlic Butter Pearl Couscous',
    alt: 'A soft mound of round, glossy pearl couscous tossed with garlic butter and flecked with chopped parsley and lemon zest.',
  },
  'garlic-butter-green-beans': {
    file: 'garlic-butter-green-beans.webp',
    title: 'Garlic Butter Green Beans',
    alt: 'A loose heap of bright green beans glossed in butter with thinly sliced golden garlic and toasted sliced almonds.',
  },
  'garlic-butter-roasted-salmon-with-potatoes-and-asparagus': {
    file: 'garlic-butter-roasted-salmon-with-potatoes-and-asparagus.webp',
    title: 'Garlic Butter Salmon with Potatoes and Asparagus',
    alt: 'A thick salmon fillet glossed with garlic-lemon butter beside a small pile of golden roasted halved baby potatoes and a bundle of tender roasted asparagus spears.',
  },
  'garlic-butter-shrimp': {
    file: 'garlic-butter-shrimp.webp',
    title: 'Garlic Butter Shrimp',
    alt: 'About a dozen plump pink shrimp in a glossy garlic-butter and white wine pan sauce, flecked with parsley and lemon zest.',
  },
  'garlic-honey-lime-shrimp': {
    file: 'garlic-honey-lime-shrimp.webp',
    title: 'Garlic Honey Lime Shrimp',
    alt: 'About a dozen large shrimp coated in a sticky, glossy golden honey-lime glaze, scattered with chopped cilantro.',
  },
  'garlic-mashed-mock-potatoes': {
    file: 'garlic-mashed-mock-potatoes.webp',
    title: 'Garlic Mashed "Mock" Potatoes',
    alt: 'A soft, swirled mound of creamy white mashed cauliflower topped with a melting pat of butter and chopped chives.',
  },
  'garlic-mashed-red-potatoes': {
    file: 'garlic-mashed-red-potatoes.webp',
    title: 'Garlic Mashed Red Potatoes',
    alt: 'A rustic mound of creamy mashed potatoes flecked with bits of red skin, with a small well of melted butter on top.',
  },
  'garlic-parmesan-chicken-potatoes': {
    file: 'garlic-parmesan-chicken-potatoes.webp',
    title: 'Chicken and Potatoes with Garlic Parmesan Cream',
    alt: 'Two golden seared chicken thighs in a creamy garlic-Parmesan sauce with wilted spinach, beside a small pile of crisp roasted quartered baby potatoes.',
  },
  'garlic-paste-toum-the-washington-post': {
    file: 'garlic-paste-toum-the-washington-post.webp',
    title: 'Toum',
    alt: 'A generous swirl of fluffy, bright white whipped garlic sauce spread on a plate, with a few triangles of warm pita bread tucked alongside.',
  },
  'garlic-roasted-potatoes': {
    file: 'garlic-roasted-potatoes.webp',
    title: 'Garlic Roasted Potatoes',
    alt: 'A generous pile of golden roasted potato chunks with crisp browned cut faces, tossed with minced garlic and fresh parsley.',
  },
  'garlic-sauteed-green-beans': {
    file: 'garlic-sauteed-green-beans.webp',
    title: 'Garlic Sauteed Green Beans',
    alt: 'A loose heap of green beans with browned blistered patches, tossed with thin golden slices of garlic and a few red pepper flakes.',
  },
  'garlic-sesame-spinach': {
    file: 'garlic-sesame-spinach.webp',
    title: 'Sigeumchi Namul (Sesame Spinach)',
    alt: 'A neat, compact mound of tender dark green seasoned spinach, glossy with sesame oil and scattered with toasted sesame seeds.',
  },
  'garlicky-lemon-kale-with-carrots': {
    file: 'garlicky-lemon-kale-with-carrots.webp',
    title: 'Garlicky Lemon Kale with Carrots',
    alt: 'A tumble of tender, glossy chopped kale with thin orange carrot coins and minced garlic, finished with a squeeze of lemon.',
  },
  'gefilte-fish-terrine': {
    file: 'gefilte-fish-terrine.webp',
    title: 'Gefilte Fish Terrine',
    alt: 'Two neat slices of a pale, layered fish terrine flecked with carrot and dill, with a small fresh herb salad beside them.',
  },
  'general-tsos-cauliflower': {
    file: 'general-tsos-cauliflower.webp',
    title: "General Tso's Cauliflower",
    alt: "A heap of crisp battered cauliflower florets coated in a glossy, sticky red-brown General Tso's sauce, scattered with sliced scallion and sesame seeds.",
  },
  'general-tsos-tofu': {
    file: 'general-tsos-tofu.webp',
    title: "General Tso's Tofu",
    alt: 'Crisp golden cubes of sesame-crusted tofu tossed with bright green broccoli florets, red bell pepper slices and a few dried red chilies in a glossy, sticky sauce.',
  },
  'glazed-carrots': {
    file: 'glazed-carrots.webp',
    title: 'Glazed Carrots',
    alt: 'A tidy pile of carrot matchsticks with a glossy buttery brown sugar glaze and a few fresh thyme leaves.',
  },
  'glazed-chicken-and-broccoli-sheet-pan-dinner': {
    file: 'glazed-chicken-and-broccoli-sheet-pan-dinner.webp',
    title: 'Glazed Chicken & Broccoli Sheet Pan Dinner',
    alt: 'Two roasted chicken drumsticks with a glossy dark teriyaki-ginger glaze, beside golden halved fingerling potatoes and roasted broccoli florets with browned edges.',
  },
  'gluten-free-lemon-cupcakes': {
    file: 'gluten-free-lemon-cupcakes.webp',
    title: 'Gluten-Free Lemon Cupcakes',
    alt: 'Three golden lemon cupcakes topped with tall swirls of pale lemon buttercream.',
  },
  'gnocchi-with-zucchini-ribbons-and-parsley-brown-butter': {
    file: 'gnocchi-with-zucchini-ribbons-and-parsley-brown-butter.webp',
    title: 'Gnocchi with Zucchini Ribbons & Brown Butter',
    alt: 'Golden pan-browned potato gnocchi tossed with soft ribbons of zucchini and halved cherry tomatoes in nutty brown butter, topped with parsley and grated Parmesan.',
  },
  'golden-veil': {
    file: 'golden-veil.webp',
    title: 'Golden Veil',
    alt: 'A coupe glass filled with a pale golden, gently sparkling cocktail with fine bubbles rising and a thin lemon twist on the rim.',
  },
  'good-eats-roast-turkey': {
    file: 'good-eats-roast-turkey.webp',
    title: 'Brined Roast Turkey, Inspired by Good Eats',
    alt: 'A whole roast turkey with burnished, crisp golden-brown skin, legs tucked, resting on a large platter.',
  },
  'grandmommys-pecan-pie': {
    file: 'grandmommys-pecan-pie.webp',
    title: 'Grandmommy’s Pecan Pie',
    alt: 'A slice of pecan pie on a plate: a glossy top of toasted pecan halves over a dark amber, set filling, with a golden flaky crust.',
  },
  'grandmommys-pound-cake': {
    file: 'grandmommys-pound-cake.webp',
    title: 'Grandmommy’s Pound Cake',
    alt: 'Two thick slices of golden pound cake with a crisp, deep golden crust and a dense, fine, buttery yellow crumb.',
  },
  'grandmommys-turkey-dressing': {
    file: 'grandmommys-turkey-dressing.webp',
    title: 'Grandmommy’s Turkey Dressing',
    alt: 'A shallow bowl of soft cornbread dressing with a golden, lightly crisp top and flecks of celery and onion.',
  },
  granola: {
    file: 'granola.webp',
    title: 'Executive Granola',
    alt: 'A generous mound of golden clustered granola with oats, chopped nuts, seeds and dried cranberries and raisins.',
  },
  'grapefruit-basil-gin-fizz': {
    file: 'grapefruit-basil-gin-fizz.webp',
    title: 'Grapefruit-Basil Gin Fizz',
    alt: 'A tall glass of pale pink grapefruit and gin fizz over large clear ice cubes, with a few flecks of chopped basil and a fresh basil sprig on top.',
  },
  'greek-style-lamb-burgers-with-yogurt-cucumber-sauce': {
    file: 'greek-style-lamb-burgers-with-yogurt-cucumber-sauce.webp',
    title: 'Greek-Style Lamb Burgers with Mint Yogurt',
    alt: 'Two herbed lamb patties tucked into warm, soft pita, topped with thick cucumber-mint yogurt sauce, sliced red onion and tomato.',
  },
  'greek-turkey-meatball-gyro-with-tzatziki': {
    file: 'greek-turkey-meatball-gyro-with-tzatziki.webp',
    title: 'Greek-Style Turkey Meatball Pitas',
    alt: 'Two warm pitas filled with browned turkey meatballs, cucumber-yogurt sauce, sliced tomato, cucumber and red onion.',
  },
  'greek-village-salad': {
    file: 'greek-village-salad.webp',
    title: 'Greek Village Salad (Horiatiki)',
    alt: 'Large chunks of ripe tomato, thick cucumber half-moons, green pepper strips, red onion and Kalamata olives topped with a thick slab of feta and a sprinkle of oregano, glistening with olive oil.',
  },
  'greek-yogurt-bowl': {
    file: 'greek-yogurt-bowl.webp',
    title: 'Greek Yogurt Bowl',
    alt: 'A bowl of thick, creamy white Greek yogurt topped in neat sections with granola, mixed fresh berries, banana slices, chia seeds and sliced almonds, drizzled with honey.',
  },
  'green-beans-with-shallots-and-lemon': {
    file: 'green-beans-with-shallots-and-lemon.webp',
    title: 'Green Beans with Shallots and Lemon',
    alt: 'A loose pile of bright green beans glossed with butter and softened golden shallots, finished with fine lemon zest.',
  },
  'green-curry-chicken': {
    file: 'green-curry-chicken.webp',
    title: 'Thai Green Curry with Chicken',
    alt: 'A bowl of pale green coconut curry with tender chicken pieces, eggplant slices, red pepper strips and bamboo shoots, topped with Thai basil leaves.',
  },
  'green-smoothie-for-kids-with-2-hidden-veggies': {
    file: 'green-smoothie-for-kids-with-2-hidden-veggies.webp',
    title: 'Green Smoothie',
    alt: 'A tall glass filled with a thick, smooth, bright green banana-mango-spinach smoothie.',
  },
  'grilled-cheese-and-tomato-soup': {
    file: 'grilled-cheese-and-tomato-soup.webp',
    title: 'Grilled Cheese and Tomato Soup',
    alt: "A wide bowl of creamy orange-red tomato soup with a grilled cheese sandwich cut in half and resting on the bowl's rim, melted cheese and avocado peeking from the golden bread.",
  },
  'grilled-chicken-with-herbed-corn-salsa': {
    file: 'grilled-chicken-with-herbed-corn-salsa.webp',
    title: 'Chicken with Herbed Corn Salsa',
    alt: 'Two bone-in chicken thighs with crisp golden skin, topped with bright green basil-mint sauce and golden corn kernels.',
  },
  'grilled-corn-salad-with-feta': {
    file: 'grilled-corn-salad-with-feta.webp',
    title: 'Grilled Corn Salad with Feta',
    alt: 'A mound of charred golden corn kernels tossed with chopped red onion, crumbled white feta and fresh herbs.',
  },
  'grilled-pork-and-peaches': {
    file: 'grilled-pork-and-peaches.webp',
    title: 'Pork and Peaches',
    alt: 'Several slices of grilled pork shoulder with a golden garlic-rosemary crust fanned out beside three caramelized, buttery peach halves.',
  },
  'grilled-pork-banh-mi': {
    file: 'grilled-pork-banh-mi.webp',
    title: 'Banh Mi',
    alt: 'Two crusty baguette sandwiches stuffed with caramelized lemongrass pork, pickled carrot and daikon, cucumber spears, sliced chilies and fresh cilantro.',
  },
  'grilled-zucchini-with-mint': {
    file: 'grilled-zucchini-with-mint.webp',
    title: 'Grilled Zucchini with Mint and Lemon',
    alt: 'Long planks of zucchini with golden grill marks laid overlapping on a platter, drizzled with olive oil and scattered with torn mint and lemon zest.',
  },
  guacamole: {
    file: 'guacamole.webp',
    title: 'Guacamole',
    alt: 'A generous mound of chunky green guacamole studded with diced tomato, red onion and cilantro.',
  },
  'gwock-family-macaroni-and-cheese': {
    file: 'gwock-family-macaroni-and-cheese.webp',
    title: 'Gwock Family Macaroni and Cheese',
    alt: 'A square portion of baked macaroni and cheese with a golden, bubbly browned top and a creamy, custardy inside showing elbow macaroni and pockets of melted cheese.',
  },
  'ham-and-cheese-green-bean-casserole': {
    file: 'ham-and-cheese-green-bean-casserole.webp',
    title: 'Ham & Cheese Green Bean Casserole',
    alt: 'A generous spoonful of creamy green bean casserole with diced ham and melted golden cheese on top.',
  },
  'ham-and-cheese-quiche': {
    file: 'ham-and-cheese-quiche.webp',
    title: 'Ham & Cheese Quiche',
    alt: 'One wedge of deep-dish quiche with a flaky golden crust and a set, golden custard filling showing cubes of ham, green spinach and melted cheese.',
  },
  hamantaschen: {
    file: 'hamantaschen.webp',
    title: 'Hamantaschen',
    alt: 'Five triangular hamantaschen with pinched corners in a loose circle, each filled with glossy orange apricot jam.',
  },
  'har-gow-dim-sum-shrimp-dumplings': {
    file: 'har-gow-dim-sum-shrimp-dumplings.webp',
    title: 'Har Gow (Shrimp Dumplings)',
    alt: 'Four plump, pleated dumplings with thin translucent wrappers showing pink shrimp inside, arranged in a small group.',
  },
  'harvest-sheet-pan-gnocchi-with-crispy-kale': {
    file: 'harvest-sheet-pan-gnocchi-with-crispy-kale.webp',
    title: 'Harvest Sheet Pan Gnocchi with Kale',
    alt: 'Golden roasted cauliflower gnocchi tossed with browned apple chicken sausage rounds, caramelized butternut squash cubes and crisp kale, sprinkled with Parmesan.',
  },
  'healthy-apple-muffins': {
    file: 'healthy-apple-muffins.webp',
    title: 'Apple Muffins',
    alt: 'Four domed whole wheat apple muffins with a crunchy sparkling turbinado sugar top, one broken open to show moist crumb with apple pieces.',
  },
  'healthy-banana-bread': {
    file: 'healthy-banana-bread.webp',
    title: 'Banana Bread',
    alt: 'One thick, neat slice of banana bread standing upright on its edge, its cut face turned to the camera, in front of the cut end of the loaf; the slice shows a moist, tender crumb speckled with dark chocolate chips and a deep golden-brown crust.',
  },
  'healthy-carrot-cake-muffins-with-cream-cheese-glaze': {
    file: 'healthy-carrot-cake-muffins-with-cream-cheese-glaze.webp',
    title: 'Carrot Cake Muffins',
    alt: 'Four spiced carrot cake muffins flecked with orange carrot, each drizzled with a thin white cream cheese glaze.',
  },
  'heirloom-tomato-pesto-and-ricotta-galette': {
    file: 'heirloom-tomato-pesto-and-ricotta-galette.webp',
    title: 'Heirloom Tomato & Pesto Galette',
    alt: 'A round, rustic free-form galette with a golden pleated butter crust folded over the edges, filled with overlapping slices of red, yellow and orange heirloom tomatoes over pesto and ricotta.',
  },
  'herb-marinated-pork-tenderloins': {
    file: 'herb-marinated-pork-tenderloins.webp',
    title: 'Herb Pork Tenderloin',
    alt: 'Six slices of pork tenderloin with a browned herb crust and juicy, faintly pink centers, fanned out on a platter.',
  },
  'herby-chicken-meatball-bowl': {
    file: 'herby-chicken-meatball-bowl.webp',
    title: 'Herby Chicken Meatball Bowl',
    alt: 'A bowl with sections of golden herby chicken meatball logs, roasted orange sweet potato cubes and crisp Parmesan chickpeas over fresh greens.',
  },
  'homemade-chicken-stock': {
    file: 'homemade-chicken-stock.webp',
    title: 'Homemade Chicken Stock',
    alt: 'A bowl of clear, golden chicken broth with a few drops of fat glinting on the surface.',
  },
  'homemade-chili-oil': {
    file: 'homemade-chili-oil.webp',
    title: 'Homemade Chili Oil',
    alt: 'Six plump boiled dumplings in a shallow bowl, drizzled with glossy red chili oil full of crisp chili flakes and sesame seeds.',
  },
  'homemade-enchilada-sauce': {
    file: 'homemade-enchilada-sauce.webp',
    title: 'Enchilada Sauce',
    alt: 'Two rolled enchiladas smothered in a smooth brick-red enchilada sauce and topped with melted cheese.',
  },
  'homemade-pizza-night': {
    file: 'homemade-pizza-night.webp',
    title: 'Homemade Pizza Night',
    alt: 'One round personal pizza with a puffy, blistered crust, red tomato sauce and melted mozzarella and Parmesan, cut into four slices.',
  },
  'homemade-rice-pilaf': {
    file: 'homemade-rice-pilaf.webp',
    title: 'Rice & Orzo Pilaf',
    alt: 'A fluffy mound of long-grain basmati rice mixed with a smaller amount of toasted orzo, flecked with parsley.',
  },
  'homemade-sugar-free-ketchup': {
    file: 'homemade-sugar-free-ketchup.webp',
    title: 'Ketchup',
    alt: 'A pile of golden oven fries with a generous pool of thick, glossy deep red homemade ketchup on the same plate.',
  },
  'honey-chipotle-lime-chicken-bowls': {
    file: 'honey-chipotle-lime-chicken-bowls.webp',
    title: 'Honey-Chipotle Chicken and Lime Rice Bowls',
    alt: 'A bowl of cilantro-lime rice topped with sliced glazed chipotle chicken cutlets, fresh greens, halved cherry tomatoes and avocado slices.',
  },
  'honey-garlic-butter-shrimp-and-broccoli': {
    file: 'honey-garlic-butter-shrimp-and-broccoli.webp',
    title: 'Honey Garlic Butter Shrimp & Broccoli',
    alt: 'Plump pink shrimp and bright green broccoli florets coated in a glossy, sticky honey-garlic butter glaze.',
  },
  'honey-glazed-carrots': {
    file: 'honey-glazed-carrots.webp',
    title: 'Honey-Glazed Carrots',
    alt: 'A neat pile of roasted carrot batons with caramelized edges, glossy with honey butter and sprinkled with fresh thyme and flaky salt.',
  },
  'honey-glazed-spareribs': {
    file: 'honey-glazed-spareribs.webp',
    title: 'Honey-Glazed Spareribs',
    alt: 'A stack of three-rib sections of pork spareribs with a dark, sticky, lacquered honey-hoisin glaze and caramelized edges.',
  },
  'honey-lime-chicken-thighs': {
    file: 'honey-lime-chicken-thighs.webp',
    title: 'Honey-Lime Chicken Thighs for Tacos',
    alt: 'Three small corn tortillas filled with sliced glazed honey-lime chicken thighs, topped with chopped onion and cilantro, standing side by side.',
  },
  'honey-sesame-chicken': {
    file: 'honey-sesame-chicken.webp',
    title: 'Honey Sesame Chicken',
    alt: 'Bite-sized pieces of golden chicken thigh in a light, glossy honey-soy glaze, scattered with toasted sesame seeds and sliced scallion.',
  },
  'honey-sriracha-salmon-bowls': {
    file: 'honey-sriracha-salmon-bowls.webp',
    title: 'Honey Sriracha Salmon Bowls',
    alt: 'A bowl of jasmine rice topped with glazed honey-sriracha salmon cubes, sliced cucumber, avocado slices and green edamame, drizzled with spicy mayonnaise.',
  },
  'hot-and-sour-soup': {
    file: 'hot-and-sour-soup.webp',
    title: 'Hot and Sour Soup',
    alt: 'A bowl of dark amber, slightly thickened soup with silky egg ribbons, shredded pork, sliced wood ear mushrooms and bamboo shoots, topped with sliced scallion.',
  },
  'hot-mulled-apple-cider': {
    file: 'hot-mulled-apple-cider.webp',
    title: 'Hot Mulled Apple Cider',
    alt: 'A clear glass mug filled with deep amber mulled cider, a cinnamon stick standing in it and a clove-studded orange wedge resting on the rim.',
  },
  'how-to-make-frittatas-stovetop-or-baked': {
    file: 'how-to-make-frittatas-stovetop-or-baked.webp',
    title: 'Frittata',
    alt: 'A round golden frittata with one wedge cut and pulled slightly away, showing a fluffy egg interior flecked with spinach, zucchini and red pepper, melted Gruyère browned on top.',
  },
  'in-the-park': {
    file: 'in-the-park.webp',
    title: 'In the Park',
    alt: 'A pale blush-pink grapefruit and gin cocktail over ice in a rocks glass, with a single fresh basil leaf floating on top.',
  },
  'instant-pot-baingan-bharta-mashed-spiced-eggplant': {
    file: 'instant-pot-baingan-bharta-mashed-spiced-eggplant.webp',
    title: 'Pressure-Cooker Baingan Bharta',
    alt: 'A generous mound of glossy, rustic spiced eggplant mash with visible onion and tomato, scattered with chopped cilantro and a small lemon wedge at the side.',
  },
  'instant-pot-butternut-squash-soup': {
    file: 'instant-pot-butternut-squash-soup.webp',
    title: 'Pressure-Cooker Butternut Squash Soup',
    alt: 'A bowl of smooth, velvety bright orange squash soup topped with a small cluster of crisp diced bacon and a few fried sage leaves.',
  },
  'instant-pot-potato-leek-soup': {
    file: 'instant-pot-potato-leek-soup.webp',
    title: 'Pressure-Cooker Potato Leek Soup',
    alt: 'A bowl of smooth pale potato leek soup with a swirl of cream, sliced chives and cracked black pepper.',
  },
  'israeli-style-hummus': {
    file: 'israeli-style-hummus.webp',
    title: 'Israeli-Style Hummus',
    alt: 'A wide, smooth swirl of creamy hummus spread across a plate with a deep well in the center filled with golden olive oil, a few whole chickpeas and a dusting of paprika.',
  },
  'italian-kale-and-sausage-stuffing': {
    file: 'italian-kale-and-sausage-stuffing.webp',
    title: 'Sausage, Kale and Ciabatta Stuffing',
    alt: 'A generous scoop of baked bread stuffing with golden crisp ciabatta cubes on top, browned sausage crumbles and dark green ribbons of kale through a moist interior.',
  },
  'japanese-beef-rice-bowl-gyudon': {
    file: 'japanese-beef-rice-bowl-gyudon.webp',
    title: 'Gyudon (Japanese Beef and Rice Bowls)',
    alt: 'A bowl of white rice topped with thin, glossy slices of simmered beef and soft golden onion, an egg yolk in the center and sliced scallions.',
  },
  'japanese-chicken-curry-kare-raisu': {
    file: 'japanese-chicken-curry-kare-raisu.webp',
    title: 'Japanese Chicken Curry',
    alt: 'A bowl with white rice on one side and thick golden-brown Japanese curry with chunks of chicken, carrot and potato on the other.',
  },
  'japanese-cucumber-sunomono': {
    file: 'japanese-cucumber-sunomono.webp',
    title: 'Japanese Cucumber Sunomono',
    alt: 'A small neat mound of paper-thin translucent cucumber slices glistening with rice vinegar dressing, sprinkled with toasted sesame seeds.',
  },
  'japanese-style-trout-with-dashi': {
    file: 'japanese-style-trout-with-dashi.webp',
    title: 'Japanese-Style Trout with Dashi',
    alt: 'A skin-on trout fillet resting on a small mound of white sushi rice in a shallow pool of clear amber dashi broth, topped with fine julienned carrot and leek and a little crumbled nori.',
  },
  'japchae-korean-glass-noodle-stir-fry': {
    file: 'japchae-korean-glass-noodle-stir-fry.webp',
    title: 'Japchae (Korean Glass Noodle Stir-Fry)',
    alt: 'A loose tangle of glossy, translucent glass noodles tossed with thin strips of beef, carrot matchsticks, red bell pepper strips, sliced shiitake, onion, scallion and wilted spinach, sprinkled with sesame seeds.',
  },
  'jeris-lentil-soup': {
    file: 'jeris-lentil-soup.webp',
    title: "Jeri's Lentil Soup",
    alt: 'A bowl of hearty lentil soup in a tomato broth, studded with round carrot coins, finished with chopped parsley.',
  },
  'jerk-pork-shoulder': {
    file: 'jerk-pork-shoulder.webp',
    title: 'Jerk Pork Shoulder',
    alt: 'A pile of tender shredded jerk pork with dark, caramelized spiced edges, glistening with juices, with a lime wedge at the side.',
  },
  'kachumber-salad': {
    file: 'kachumber-salad.webp',
    title: 'Kachumber Salad',
    alt: 'A heap of finely diced cucumber, tomato and red onion tossed with chopped cilantro and mint, flecked with toasted cumin.',
  },
  'kalbi-grilled-korean-style-short-ribs': {
    file: 'kalbi-grilled-korean-style-short-ribs.webp',
    title: 'Kalbi',
    alt: 'Five thin flanken-cut short ribs, each a strip of meat with three small cross-cut bones, glossy with caramelized soy glaze and grill marks, overlapping on a platter.',
  },
  'kale-caesar-with-crispy-chickpeas': {
    file: 'kale-caesar-with-crispy-chickpeas.webp',
    title: 'Kale Caesar with Crispy Chickpeas',
    alt: 'A tall pile of shredded dark lacinato kale coated in creamy Caesar dressing, scattered with golden roasted chickpeas and shaved Parmesan.',
  },
  'kale-salad-with-mango-avocado-and-feta': {
    file: 'kale-salad-with-mango-avocado-and-feta.webp',
    title: 'Kale Salad with Mango, Avocado and Feta',
    alt: 'Finely chopped curly kale tossed with cubes of bright mango, diced avocado, crumbled feta, red onion and toasted pumpkin seeds.',
  },
  'katharine-hepburns-brownies': {
    file: 'katharine-hepburns-brownies.webp',
    title: 'Katharine Hepburn’s Brownies',
    alt: 'Four square, fudgy brownies stacked loosely, one cut to show a dense, moist chocolate interior studded with chopped walnuts.',
  },
  'keto-egg-muffins': {
    file: 'keto-egg-muffins.webp',
    title: 'Keto Egg Muffins',
    alt: 'Five golden baked egg muffins piled loosely, one halved to show fluffy egg dotted with red chorizo, scallion and melted cheddar.',
  },
  'key-lime-pie': {
    file: 'key-lime-pie.webp',
    title: 'Key Lime Pie',
    alt: 'One neat wedge of key lime pie with a golden graham cracker crust, a smooth pale yellow-green custard filling and a crown of whipped cream.',
  },
  'key-lime-pie-ice-cream': {
    file: 'key-lime-pie-ice-cream.webp',
    title: 'Key Lime Pie Ice Cream',
    alt: 'Three round scoops of pale creamy lime ice cream with swirls of crushed graham cracker, a lime wedge at the side.',
  },
  'key-lime-pie-with-lime-zest': {
    file: 'key-lime-pie-with-lime-zest.webp',
    title: 'Key Lime Pie with Lime Zest',
    alt: 'A slice of lime pie with a golden graham crust and a smooth pale yellow filling, topped with a large dollop of whipped cream and flecked with bright green zest.',
  },
  'kimchi-jjigae-kimchi-stew': {
    file: 'kimchi-jjigae-kimchi-stew.webp',
    title: 'Kimchi Jjigae (Kimchi Stew)',
    alt: 'A bowl of deep red-orange kimchi stew with tender slices of pork belly, soft kimchi, sliced mushrooms, onion and whole slices of medium-firm tofu in a rich, spicy broth, topped with chopped scallions and sesame seeds.',
  },
  'korean-gochujang-wings': {
    file: 'korean-gochujang-wings.webp',
    title: 'Gochujang-Glazed Oven Wings',
    alt: 'Seven crisp roasted chicken wings, drumettes and flats, coated in a glossy red gochujang glaze, piled on a platter.',
  },
  'korean-mung-bean-sprouts-salad': {
    file: 'korean-mung-bean-sprouts-salad.webp',
    title: 'Sukju Namul',
    alt: 'A neat mound of tender mung bean sprouts glistening with sesame oil, sprinkled with sesame seeds and a little chopped scallion.',
  },
  'korean-pickled-cucumbers': {
    file: 'korean-pickled-cucumbers.webp',
    title: 'Oi Muchim (Korean Cucumber Salad)',
    alt: 'A small pile of sliced cucumber rounds tossed in red gochugaru chile flakes, sesame and sliced scallions.',
  },
  'korean-style-tacos-with-kogi-bbq-sauce': {
    file: 'korean-style-tacos-with-kogi-bbq-sauce.webp',
    title: 'Korean Style Tacos',
    alt: 'Three small corn tortillas filled with pulled pork in red gochujang kogi sauce, topped with thin cucumber pickle and sliced scallion.',
  },
  'lamb-keema-matar': {
    file: 'lamb-keema-matar.webp',
    title: 'Lamb Keema Matar',
    alt: 'A generous serving of saucy spiced minced lamb dotted with bright green peas, scattered with cilantro, with a lemon wedge at the edge.',
  },
  'lavender-london-fog-cocktail': {
    file: 'lavender-london-fog-cocktail.webp',
    title: 'Lavender London Fog Cocktail',
    alt: 'A stemmed coupe of pale, milky Earl Grey cocktail under a thin layer of silky foam.',
  },
  'lemon-basil-shrimp-risotto': {
    file: 'lemon-basil-shrimp-risotto.webp',
    title: 'Lemon Basil Shrimp Risotto',
    alt: 'A creamy mound of risotto topped with four large plump pink shrimp, finished with fine ribbons of basil and lemon zest.',
  },
  'lemon-broccoli-tortellini': {
    file: 'lemon-broccoli-tortellini.webp',
    title: 'Lemon Broccoli Tortellini',
    alt: 'A bowl of plump cheese tortellini tossed with roasted broccoli florets with browned edges and wilted spinach, glossy with lemon butter and grated Parmesan.',
  },
  'lemon-chicken-orzo-soup': {
    file: 'lemon-chicken-orzo-soup.webp',
    title: 'Lemon Chicken Orzo Soup',
    alt: 'A bowl of lightly thickened golden broth with diced chicken, small orzo, carrot and celery, finished with chopped parsley.',
  },
  'lemon-garlic-broccolini': {
    file: 'lemon-garlic-broccolini.webp',
    title: 'Lemon-Garlic Broccolini',
    alt: 'A neat bundle of bright green broccolini spears laid in one direction, glistening with olive oil, with golden garlic slices and red pepper flakes, lemon wedges at the side.',
  },
  'lemon-herb-couscous': {
    file: 'lemon-herb-couscous.webp',
    title: 'Lemon and Herb Instant Couscous',
    alt: 'A fluffy mound of fine couscous flecked with chopped parsley and mint and lemon zest, with a little crumbled feta on top.',
  },
  'lemon-herb-quinoa': {
    file: 'lemon-herb-quinoa.webp',
    title: 'Lemon Herb Quinoa',
    alt: 'A fluffy mound of quinoa flecked with chopped parsley, mint and dill, glistening with olive oil and lemon.',
  },
  'lemon-miso-tofu-with-broccoli': {
    file: 'lemon-miso-tofu-with-broccoli.webp',
    title: 'Lemon-Miso Tofu with Broccoli',
    alt: 'Golden crisp tofu cubes and bright broccoli florets coated in a glossy pale lemon-miso glaze.',
  },
  'lemon-pepper-wings': {
    file: 'lemon-pepper-wings.webp',
    title: 'Lemon Pepper Oven Wings',
    alt: 'Seven crisp golden roasted wings, drumettes and flats, glossed with lemon butter and speckled with coarse black pepper and lemon zest, a lemon wedge at the side.',
  },
  'lemon-ricotta-pasta': {
    file: 'lemon-ricotta-pasta.webp',
    title: 'Lemon Ricotta Pasta',
    alt: 'A twirled nest of bucatini coated in a creamy ricotta and Pecorino sauce, topped with torn basil, lemon zest and a pinch of red pepper flakes.',
  },
  'lemony-broccoli-pasta': {
    file: 'lemony-broccoli-pasta.webp',
    title: 'Lemony Broccoli Pasta',
    alt: 'A twirl of spaghetti tossed with small broccoli florets and sweet peas, glossy with olive oil and grated Parmesan.',
  },
  'lime-and-honey-glazed-salmon-with-warm-black-bean-and-corn-salad': {
    file: 'lime-and-honey-glazed-salmon-with-warm-black-bean-and-corn-salad.webp',
    title: 'Lime & Honey Glazed Salmon',
    alt: 'A glazed salmon fillet resting on a bed of fresh spinach topped with warm black beans, charred corn and diced peppers, finished with cilantro and toasted pepitas.',
  },
  'lo-mein': {
    file: 'lo-mein.webp',
    title: 'Chicken Lo Mein with Shiitake and Bok Choy',
    alt: 'A tangle of glossy egg noodles tossed with sliced chicken, shiitake mushrooms and bright green bok choy.',
  },
  'loaded-baked-omelet-muffins': {
    file: 'loaded-baked-omelet-muffins.webp',
    title: 'Omelet Muffins',
    alt: 'Five golden egg muffins piled loosely, one halved to show fluffy egg with bacon, spinach, tomato, pepper and cheddar.',
  },
  'made-in-the-pan-chocolate-cake': {
    file: 'made-in-the-pan-chocolate-cake.webp',
    title: 'Made-In-The-Pan Chocolate Cake',
    alt: "Two square slices of moist dark chocolate snack cake dusted lightly with confectioners' sugar, a few chocolate chips visible on top.",
  },
  'mandarinpineapple-organge-salad': {
    file: 'mandarinpineapple-organge-salad.webp',
    title: 'Mandarin/Pineapple Orange Salad',
    alt: 'Three neat squares of set, creamy pale orange gelatin salad with mandarin segments and crushed pineapple visible inside.',
  },
  'mango-cabbage-slaw': {
    file: 'mango-cabbage-slaw.webp',
    title: 'Mango Cabbage Slaw',
    alt: 'A heap of finely shredded green and red cabbage with mango matchsticks, red pepper strips, red onion, cilantro and scallions, glistening with lime dressing.',
  },
  'mango-rita-green-smoothie': {
    file: 'mango-rita-green-smoothie.webp',
    title: 'Mango-Rita Green Smoothie',
    alt: 'A tall glass filled with a thick, bright green smoothie with a lime wheel on the rim.',
  },
  'maple-roasted-sweet-potato-wedges': {
    file: 'maple-roasted-sweet-potato-wedges.webp',
    title: 'Maple-Roasted Sweet Potato Wedges',
    alt: 'About ten skin-on sweet potato wedges with caramelized, browned edges, glossy with maple glaze and sprinkled with flaky salt.',
  },
  'mapo-tofu': {
    file: 'mapo-tofu.webp',
    title: 'Mapo Tofu',
    alt: 'Soft white tofu cubes and minced pork in a glossy, deep red chili bean sauce with a sheen of red chili oil, topped with sliced green onion and ground Sichuan pepper.',
  },
  'marinated-flank-steak-salad': {
    file: 'marinated-flank-steak-salad.webp',
    title: 'Marinated Flank Steak Salad',
    alt: 'A bed of torn romaine and butter lettuce with cucumber slices, topped with six thin slices of seared flank steak fanned across the middle, pink in the center.',
  },
  'marinated-korean-ribeye': {
    file: 'marinated-korean-ribeye.webp',
    title: 'Bulgogi',
    alt: 'A pile of thin, tender caramelized ribeye slices glossy with sweet soy marinade, beside a mound of white rice, sprinkled with sesame seeds and green onion.',
  },
  'massaman-curry': {
    file: 'massaman-curry.webp',
    title: 'Massaman Curry',
    alt: 'Tender cubes of beef and chunks of potato and onion in a rich, reddish-gold coconut curry, scattered with whole roasted peanuts.',
  },
  'master-sushi-rice': {
    file: 'master-sushi-rice.webp',
    title: 'Sushi Rice (Shari)',
    alt: 'A small white bowl of glossy white short-grain sushi rice in a rounded mound.',
  },
  'mediterranean-chicken-bowls': {
    file: 'mediterranean-chicken-bowls.webp',
    title: 'Mediterranean Chicken Bowls',
    alt: 'A bowl arranged in sections: golden yellow rice, sliced lemon-oregano chicken thighs, diced cucumber, halved cherry tomatoes and a generous scoop of hummus.',
  },
  'mediterranean-chicken-thighs': {
    file: 'mediterranean-chicken-thighs.webp',
    title: 'Lemon-Oregano Chicken with Roasted Peppers',
    alt: 'Three golden roasted chicken thighs beside a pile of soft roasted bell pepper strips and red onion with browned edges.',
  },
  'mediterranean-grain-salad': {
    file: 'mediterranean-grain-salad.webp',
    title: 'Mediterranean Grain Salad',
    alt: 'A bowl of chewy farro salad tossed with diced cucumber, tomato, red pepper and red onion, halved Kalamata olives and crumbled feta, flecked with fresh herbs.',
  },
  'mediterranean-pinwheels-vegetarian-appetizer-vegan-and-low-carb-options': {
    file: 'mediterranean-pinwheels-vegetarian-appetizer-vegan-and-low-carb-options.webp',
    title: 'Mediterranean Pinwheels',
    alt: 'Seven round tortilla pinwheels cut side up in a loose row, showing spirals of cream cheese with sun-dried tomato, spinach, feta and basil.',
  },
  'mediterranean-salmon-with-lemon-herb-emulsion': {
    file: 'mediterranean-salmon-with-lemon-herb-emulsion.webp',
    title: 'Mediterranean Salmon with Lemon-Herb Emulsion',
    alt: 'A crisp-skinned salmon fillet on a bed of herbed orzo with chickpeas, halved cherry tomatoes and crumbled feta, drizzled with a golden lemon and oregano dressing.',
  },
  'melon-daiquiri': {
    file: 'melon-daiquiri.webp',
    title: 'Melon Daiquiri',
    alt: 'A pale green frozen honeydew daiquiri in a coupe, with a sugar cane skewer of orange cantaloupe cubes resting across the rim.',
  },
  'mexican-red-rice': {
    file: 'mexican-red-rice.webp',
    title: 'Arroz Rojo',
    alt: 'A fluffy mound of tomato-tinted long-grain rice with separate grains, topped with a sprig of cilantro.',
  },
  'mexican-street-corn-salad': {
    file: 'mexican-street-corn-salad.webp',
    title: 'Skillet Esquites (Mexican Corn Salad)',
    alt: 'A heap of golden corn kernels with browned edges in a light creamy lime dressing, topped with crumbled white cotija, a dusting of ancho chile, scallions and cilantro.',
  },
  'middle-eastern-style-grilled-chicken-kabobs': {
    file: 'middle-eastern-style-grilled-chicken-kabobs.webp',
    title: 'Yogurt-Marinated Chicken and Onion Kabobs',
    alt: 'Three skewers of golden, charred yogurt-marinated chicken pieces alternating with thin red onion layers, laid side by side.',
  },
  'mini-shell-pasta-with-creamy-smoked-bacon-and-peas': {
    file: 'mini-shell-pasta-with-creamy-smoked-bacon-and-peas.webp',
    title: 'Mini-Shell Pasta with Bacon and Peas',
    alt: 'A bowl of small pasta shells in a glossy, creamy Parmesan sauce with crisp bacon slivers and bright green peas, topped with chopped mint.',
  },
  'mint-tzatziki': {
    file: 'mint-tzatziki.webp',
    title: 'Mint Tzatziki with Honey',
    alt: 'A swirl of thick white Greek yogurt dip speckled with finely diced cucumber and chopped mint, a drizzle of golden olive oil and honey on top.',
  },
  'miriams-melt-in-your-mouth-rosh-hashanah-brisket': {
    file: 'miriams-melt-in-your-mouth-rosh-hashanah-brisket.webp',
    title: 'Miriam’s Melt-In-Your-Mouth Rosh Hashanah Brisket',
    alt: 'Five thick slices of tender braised brisket fanned on a platter over soft caramelized onion rounds, glossy with a dark balsamic-honey sauce.',
  },
  'misir-wot': {
    file: 'misir-wot.webp',
    title: 'Misir Wot (Ethiopian Red Lentil Stew)',
    alt: 'A bowl of thick, deep red-orange spiced red lentil stew, glossy with spiced butter.',
  },
  'miso-glazed-roasted-cauliflower': {
    file: 'miso-glazed-roasted-cauliflower.webp',
    title: 'Miso-Glazed Roasted Cauliflower',
    alt: 'A pile of roasted cauliflower florets with deeply caramelized edges, coated in a glossy amber miso glaze and sprinkled with sesame seeds and sliced scallion.',
  },
  'miso-mashed-potatoes': {
    file: 'miso-mashed-potatoes.webp',
    title: 'Miso-Mashed Potatoes',
    alt: 'A generous swirl of creamy pale golden mashed potatoes with a melting pat of butter in the center and sliced scallions on top.',
  },
  'miso-salmon-with-bok-choy': {
    file: 'miso-salmon-with-bok-choy.webp',
    title: 'Miso Salmon with Bok Choy',
    alt: 'A glossy caramelized miso salmon fillet on jasmine rice beside two halved baby bok choy, topped with sliced scallions.',
  },
  'miso-sesame-dense-bean-salad': {
    file: 'miso-sesame-dense-bean-salad.webp',
    title: 'Miso Sesame Dense Bean Salad',
    alt: 'A hearty pile of chickpeas and bright green edamame tossed with shredded cabbage, carrot and green onion in a creamy miso sesame dressing, topped with chopped peanuts.',
  },
  'miso-soup': {
    file: 'miso-soup.webp',
    title: 'Miso Soup',
    alt: 'A bowl of cloudy golden miso broth with small cubes of silky tofu, dark green wakame and sliced green onion floating on top.',
  },
  'mm-cookies': {
    file: 'mm-cookies.webp',
    title: 'Candy-Coated Chocolate Cookies',
    alt: 'Five round, golden chewy cookies studded with colorful candy-coated chocolate pieces, stacked loosely.',
  },
  'mommas-healthy-meatloaf': {
    file: 'mommas-healthy-meatloaf.webp',
    title: 'Momma’s Turkey and Vegetable Meatloaf',
    alt: 'Three thick slices of turkey meatloaf with flecks of carrot, zucchini and pepper inside and a thin glossy ketchup glaze on top, overlapping on a plate.',
  },
  'moms-famous-chocolate-cake': {
    file: 'moms-famous-chocolate-cake.webp',
    title: 'Chocolate Cake',
    alt: 'A neat square slice of moist dark chocolate cake with a thin, glossy layer of fudgy chocolate frosting set on top.',
  },
  'mongolian-beef': {
    file: 'mongolian-beef.webp',
    title: 'Mongolian Beef with Ginger and Scallions',
    alt: 'Strips of browned flank steak in a glossy dark soy glaze tossed with long lengths of scallion and slivers of ginger.',
  },
  'mongolian-chicken': {
    file: 'mongolian-chicken.webp',
    title: 'Mongolian Chicken',
    alt: 'Crisp pieces of chicken in a glossy dark soy and brown sugar glaze, tossed with diagonal scallion pieces.',
  },
  'moroccan-carrot-salad': {
    file: 'moroccan-carrot-salad.webp',
    title: 'Moroccan-Inspired Carrot Salad with Orange and Mint',
    alt: 'A loose heap of coarsely grated bright orange carrots glistening with citrus dressing, dusted with cumin and paprika and scattered with torn mint.',
  },
  'moroccan-chicken-tagine-apricot-chickpea': {
    file: 'moroccan-chicken-tagine-apricot-chickpea.webp',
    title: 'Moroccan-Inspired Chicken with Apricots, Chickpeas and Almonds',
    alt: 'Three golden bone-in chicken thighs nestled in a golden spiced sauce with soft onions, plump apricots and chickpeas, scattered with toasted almonds.',
  },
  'my-favorite-challah': {
    file: 'my-favorite-challah.webp',
    title: 'Challah',
    alt: 'One whole glossy braided challah loaf with a deep golden, shiny crust, two slices cut from one end showing a soft, fluffy yellow crumb.',
  },
  naan: {
    file: 'naan.webp',
    title: "Meera Sodha's Naan",
    alt: 'Three soft naan breads loosely stacked and overlapping, puffed with browned bubbles and brushed with garlic butter.',
  },
  'nana-ruths-applesauce': {
    file: 'nana-ruths-applesauce.webp',
    title: 'Nana Ruth’s Applesauce',
    alt: 'A bowl of soft, chunky homemade applesauce with a light dusting of cinnamon on top.',
  },
  'nanas-biscuits': {
    file: 'nanas-biscuits.webp',
    title: 'Nana’s Biscuits',
    alt: 'Five tall, golden buttermilk biscuits piled loosely, one split open to show a fluffy, flaky white interior.',
  },
  'new-york-crunch-roll': {
    file: 'new-york-crunch-roll.webp',
    title: 'New York Crunch Roll',
    alt: 'Eight sushi roll pieces arranged in a loose ring, cut side up, showing rice around red tuna, green avocado and cucumber, the outside coated in crisp golden tempura flakes.',
  },
  'no-cook-playdough': {
    file: 'no-cook-playdough.webp',
    title: 'No-Cook Playdough',
    alt: 'Five smooth balls of homemade playdough in different bright colors, grouped together, one pressed flat to show its soft texture.',
  },
  'noodle-pudding': {
    file: 'noodle-pudding.webp',
    title: 'Noodle Pudding',
    alt: 'A square of baked egg noodle kugel showing creamy custard-set layers of noodles, with a golden, lightly crisp top.',
  },
  'oatmeal-risotto': {
    file: 'oatmeal-risotto.webp',
    title: 'Oatmeal Risotto',
    alt: 'A creamy mound of steel-cut oats in a shallow bowl, topped with plump golden raisins and generous shavings of Parmesan.',
  },
  'old-fashioned': {
    file: 'old-fashioned.webp',
    title: 'Old Fashioned',
    alt: 'A deep amber cocktail in a heavy rocks glass over one large clear ice cube, with a wide strip of orange peel in the glass.',
  },
  'old-fashioned-soft-pumpkin-cookies': {
    file: 'old-fashioned-soft-pumpkin-cookies.webp',
    title: 'Soft Pumpkin Cookies',
    alt: 'Five round, cakey pumpkin cookies with a thin white vanilla glaze, stacked loosely.',
  },
  'old-fashioned-strawberry-ice-cream': {
    file: 'old-fashioned-strawberry-ice-cream.webp',
    title: 'Old-Fashioned Strawberry Ice Cream',
    alt: 'Three round scoops of pale pink strawberry ice cream flecked with real fruit, with a few fresh strawberry slices beside.',
  },
  'old-fashioned-vanilla-ice-cream': {
    file: 'old-fashioned-vanilla-ice-cream.webp',
    title: 'Old-Fashioned Vanilla Ice Cream',
    alt: 'Three round scoops of rich, creamy ivory vanilla ice cream speckled with tiny vanilla seeds.',
  },
  'one-pan-citrus-beets-roasted-chicken': {
    file: 'one-pan-citrus-beets-roasted-chicken.webp',
    title: 'Orange-Rosemary Chicken with Beets and Fennel',
    alt: 'Three golden crisp-skinned chicken thighs among roasted ruby beet half-moons, carrot pieces and caramelized fennel wedges, glossy with orange butter.',
  },
  'one-pan-lemon-herb-chicken-thighs': {
    file: 'one-pan-lemon-herb-chicken-thighs.webp',
    title: 'One-Pan Lemon Herb Chicken Thighs',
    alt: 'Four golden, crisp-skinned chicken thighs in a pool of lemony pan juices with sliced garlic, fresh thyme and oregano and a few lemon slices.',
  },
  'one-pot-chicken-meatballs-with-greens': {
    file: 'one-pot-chicken-meatballs-with-greens.webp',
    title: 'One-Pot Chicken Meatballs with Greens',
    alt: 'Five browned chicken meatballs nestled in a bed of wilted Swiss chard with its colorful stems, in a little lemony broth.',
  },
  'one-pot-chicken-quinoa-mushrooms-and-spinach': {
    file: 'one-pot-chicken-quinoa-mushrooms-and-spinach.webp',
    title: 'One-Pot Chicken, Quinoa & Mushrooms',
    alt: 'A golden browned chicken thigh on a bed of fluffy quinoa with browned sliced cremini mushrooms and wilted spinach.',
  },
  'one-pot-spicy-thai-noodles': {
    file: 'one-pot-spicy-thai-noodles.webp',
    title: 'Spicy Thai Noodles',
    alt: 'A pile of wide, flat rice noodles tossed in a glossy soy-ginger sauce with zucchini half-moons, mushrooms, shredded carrot and egg, topped with crushed peanuts, cilantro and green onion.',
  },
  'onigiri-japanese-rice-balls': {
    file: 'onigiri-japanese-rice-balls.webp',
    title: 'Onigiri (Japanese Rice Balls)',
    alt: 'Three triangular white rice balls standing upright in a row, each wrapped at the base with a strip of crisp dark nori, one with a little filling showing at the top.',
  },
  'orange-and-paprika-pulled-pork': {
    file: 'orange-and-paprika-pulled-pork.webp',
    title: 'Orange and Paprika Pulled Pork',
    alt: 'A generous pile of tender shredded pork with paprika-red caramelized edges, glistening with orange-tinted juices.',
  },
  'oreo-chocolate-cream-cheesecake': {
    file: 'oreo-chocolate-cream-cheesecake.webp',
    title: 'Chocolate Sandwich Cookie Cheesecake',
    alt: 'One tall wedge of dense chocolate cheesecake on a thin dark cookie crust, with chunks of chocolate sandwich cookies visible through the filling and halved cookies on top.',
  },
  'overnight-oats': {
    file: 'overnight-oats.webp',
    title: 'Overnight Oats',
    alt: 'A clear glass jar of creamy layered oats with chia seeds, topped with fresh berries, sliced banana and a little granola.',
  },
  'pad-see-ew-thai-stir-fried-noodles': {
    file: 'pad-see-ew-thai-stir-fried-noodles.webp',
    title: 'Pad See Ew',
    alt: 'A pile of wide, flat rice noodles with dark caramelized soy edges, tossed with sliced chicken, scrambled egg and green Chinese broccoli.',
  },
  'pad-thai': {
    file: 'pad-thai.webp',
    title: 'Pad Thai',
    alt: 'Tamarind-glossed rice noodles with egg, bean sprouts and Chinese chives, topped with crushed peanuts, with a lime wedge at the side.',
  },
  'pad-woon-sen': {
    file: 'pad-woon-sen.webp',
    title: 'Pad Woon Sen',
    alt: 'A tangled mound of glossy, translucent glass noodles stir-fried with soft scrambled egg, napa cabbage, strips of bell pepper, grated carrot and onion, topped with scallions and a few slices of red chile.',
  },
  'paella-valenciana': {
    file: 'paella-valenciana.webp',
    title: 'Paella Valenciana',
    alt: 'A wide steel paella pan of golden saffron rice with browned bone-in chicken and rabbit, flat green beans and large white garrofó beans.',
  },
  'pan-fried-noodles-with-shrimp': {
    file: 'pan-fried-noodles-with-shrimp.webp',
    title: 'Pan Fried Noodles with Shrimp',
    alt: 'A round, crisp golden cake of thin egg noodles topped with plump pink shrimp in a glossy, translucent gravy, with bright green yu choy arranged around the edge.',
  },
  'pan-seared-duck-breasts-with-cherry-and-port-sauce': {
    file: 'pan-seared-duck-breasts-with-cherry-and-port-sauce.webp',
    title: 'Pan-Seared Duck Breasts with Cherry and Port Sauce',
    alt: 'One duck breast sliced on the bias into six slices, fanned out to show rosy pink meat under a thin layer of crisp golden skin, spooned with a glossy, deep red sauce of halved cherries.',
  },
  'panang-curry-with-chicken': {
    file: 'panang-curry-with-chicken.webp',
    title: 'Panang Curry with Chicken',
    alt: 'Thin slices of chicken and strips of red pepper in a small amount of thick, rich, orange-red coconut curry sauce, topped with fine threads of makrut lime leaf and a swirl of coconut cream.',
  },
  'parishs-blueberry-crisp': {
    file: 'parishs-blueberry-crisp.webp',
    title: 'Parish’s Blueberry Crisp',
    alt: 'A generous scoop of blueberry crisp showing jammy, deep purple blueberries under a thick, craggy, golden brown butter crumble, topped with a scoop of vanilla ice cream starting to melt.',
  },
  'parmigiano-reggiano-cheesecake': {
    file: 'parmigiano-reggiano-cheesecake.webp',
    title: 'Parmigiano Reggiano Cheesecake',
    alt: 'One tall, clean-edged wedge of creamy baked cheesecake on a golden graham cracker and Parmesan crust.',
  },
  'passatelli-in-brodo': {
    file: 'passatelli-in-brodo.webp',
    title: 'Passatelli in brodo',
    alt: 'A bowl of clear, golden meat broth holding a tangle of short, thick, rustic pale strands of passatelli, with a little grated Parmigiano on top.',
  },
  'pasta-alla-norma': {
    file: 'pasta-alla-norma.webp',
    title: 'Pasta alla Norma',
    alt: 'A bowl of spaghetti in bright tomato sauce topped with golden fried eggplant, torn basil and grated ricotta salata.',
  },
  'pasta-with-abruzzi-style-lamb-sauce': {
    file: 'pasta-with-abruzzi-style-lamb-sauce.webp',
    title: 'Pasta with Abruzzi-Style Lamb Sauce',
    alt: 'A shallow bowl of penne coated in a chunky tomato sauce with small diced pieces of lamb, pancetta and flecks of rosemary.',
  },
  'pasta-with-sausage-basil-and-mustard': {
    file: 'pasta-with-sausage-basil-and-mustard.webp',
    title: 'Pasta with Sausage, Basil & Mustard',
    alt: 'A shallow bowl of penne in a pale, creamy whole-grain mustard sauce with browned crumbles of spicy Italian sausage and ribbons of fresh basil.',
  },
  'patatas-bravas': {
    file: 'patatas-bravas.webp',
    title: 'Patatas Bravas',
    alt: 'A pile of irregular, crisp golden fried potato chunks spooned with a bright red-orange bravas sauce, with a little aioli drizzled over.',
  },
  'patate-al-forno': {
    file: 'patate-al-forno.webp',
    title: 'Patate al Forno',
    alt: 'A heap of golden roasted Yukon Gold potato chunks, skins on, crisp-edged and flecked with chopped rosemary.',
  },
  'peach-pie-biscuit-bombs': {
    file: 'peach-pie-biscuit-bombs.webp',
    title: 'Peach Pie Biscuit Bombs',
    alt: 'Five round, golden, puffed biscuit balls brushed with brown butter, one torn open to show soft peach pieces and melted Brie inside.',
  },
  'peach-pie-pancakes': {
    file: 'peach-pie-pancakes.webp',
    title: 'Peach Pie Pancakes',
    alt: 'A stack of four fluffy golden pancakes speckled with diced peach, topped with fresh peach slices and a drizzle of maple syrup running down the sides.',
  },
  'peach-salad-with-tomatoes-and-beets': {
    file: 'peach-salad-with-tomatoes-and-beets.webp',
    title: 'Peach Salad with Tomatoes & Beets',
    alt: 'An arrangement of peach slices, ripe tomato wedges and golden beet wedges, scattered with thin shallot rings, crumbled white goat cheese, torn mint and thyme leaves, glistening with dressing.',
  },
  'peanut-noodles': {
    file: 'peanut-noodles.webp',
    title: 'Peanut Noodles',
    alt: 'A twirled mound of noodles coated in a glossy, creamy peanut sauce, topped with sliced green onions, chopped cilantro and sesame seeds.',
  },
  'pear-and-spinach-salad': {
    file: 'pear-and-spinach-salad.webp',
    title: 'Pear & Spinach Salad',
    alt: 'A loose mound of baby spinach leaves with thin slices of Bosc pear and fine rings of red onion, lightly coated in a honey-Dijon dressing.',
  },
  'perfect-cranberry-sauce': {
    file: 'perfect-cranberry-sauce.webp',
    title: 'Whole-Berry Cranberry Sauce',
    alt: 'A small bowl filled with glossy, spoonable deep red cranberry sauce with some whole and burst berries visible, a little thin curl of orange peel on top.',
  },
  'perfect-mashed-potatoes': {
    file: 'perfect-mashed-potatoes.webp',
    title: 'Cream Cheese Mashed Potatoes',
    alt: 'A soft, swirled mound of creamy mashed potatoes with a shallow well holding a melting pat of butter, sprinkled with coarse black pepper.',
  },
  'peruvian-style-beef-empanadas': {
    file: 'peruvian-style-beef-empanadas.webp',
    title: 'Peruvian-Style Beef Empanadas',
    alt: 'Four golden, half-moon baked empanadas with crimped edges, one cut open to show a savory minced beef and onion filling, with two lime wedges on the plate.',
  },
  'pesto-alla-genovese': {
    file: 'pesto-alla-genovese.webp',
    title: 'Pesto alla Genovese',
    alt: 'A mound of short twisted trofie pasta evenly coated in a bright green, creamy basil pesto, with a few whole basil leaves and toasted pine nuts on top.',
  },
  'philly-tuna-roll': {
    file: 'philly-tuna-roll.webp',
    title: 'Philly Tuna Roll',
    alt: 'Eight neat sushi roll pieces with dark nori outside, cut side up in a line, each showing white rice around deep red tuna, a white strip of cream cheese and green cucumber.',
  },
  'pho-bo-beef-pho': {
    file: 'pho-bo-beef-pho.webp',
    title: 'Pho Bo (Beef Pho)',
    alt: 'A deep bowl of clear, amber beef broth over soft rice noodles, topped with thin slices of tender brisket, thinly sliced onion, scallions and cilantro, with a lime wedge and Thai basil on the rim.',
  },
  'pickled-red-onions': {
    file: 'pickled-red-onions.webp',
    title: 'Quick Refrigerator-Pickled Red Onions',
    alt: 'A small clear glass jar packed with thin, glossy, bright magenta-pink half-moons of red onion in clear brine.',
  },
  pizza: {
    file: 'pizza.webp',
    title: 'Pizza',
    alt: 'A whole 12-inch pizza with a golden, puffed crust, melted mozzarella, round pepperoni slices, chunks of pineapple and wilted spinach, cut into eight slices with one slice pulled slightly away.',
  },
  'pizza-beans': {
    file: 'pizza-beans.webp',
    title: 'Pizza Beans',
    alt: 'A shallow baking dish of giant white beans and kale in thick crushed tomato sauce, topped with melted, golden-spotted mozzarella.',
  },
  'play-dough': {
    file: 'play-dough.webp',
    title: 'Play-Dough',
    alt: 'Five smooth, soft balls of homemade play-dough in different bright colors, grouped together, one slightly flattened with a thumbprint.',
  },
  'poke-bowl-bar': {
    file: 'poke-bowl-bar.webp',
    title: 'Poke Bowl Bar',
    alt: 'A bowl of sushi rice topped with neat sections of glossy cubed raw tuna dressed in soy and sesame, sliced avocado, cucumber salad, shredded carrot and edamame, finished with sesame seeds and scallions.',
  },
  'pork-and-greens-dumplings': {
    file: 'pork-and-greens-dumplings.webp',
    title: 'Pork and Greens Dumplings',
    alt: 'Eight plump, half-moon boiled dumplings with pleated edges, arranged in a circle, one bitten open to show a green-flecked pork filling, with a small pool of dark soy-vinegar dipping sauce on the plate.',
  },
  'pressure-cooker-bolognase': {
    file: 'pressure-cooker-bolognase.webp',
    title: 'Ragù alla Bolognese',
    alt: 'A twirled nest of golden egg tagliatelle coated in a thick, rich, finely textured meat ragù.',
  },
  'prohibition-style-gin-lemon-fizz': {
    file: 'prohibition-style-gin-lemon-fizz.webp',
    title: 'Prohibition-Style Gin Lemon Fizz',
    alt: 'A tall glass of pale, cloudy lemon-gold cocktail over ice, topped with sparkling water and fine bubbles, with a lemon peel twist on the rim.',
  },
  'puffy-muffin-chicken-salad': {
    file: 'puffy-muffin-chicken-salad.webp',
    title: 'Puffy Muffin Chicken Salad',
    alt: 'A generous rounded scoop of creamy chicken salad with diced celery, quartered red grapes and red onion, set on a crisp leaf of butter lettuce.',
  },
  'pulled-pork': {
    file: 'pulled-pork.webp',
    title: 'Pulled Pork',
    alt: 'A generous pile of tender, shredded pork shoulder glistening with its cooking juices, with darker caramelized bark pieces mixed through.',
  },
  'pumpkin-breakfast-cookies': {
    file: 'pumpkin-breakfast-cookies.webp',
    title: 'Pumpkin Breakfast Cookies',
    alt: 'Six thick, round oat cookies, orange-tinged from pumpkin, studded with red dried cranberries and green pumpkin seeds, loosely stacked.',
  },
  'pumpkin-cheesecake-cookies': {
    file: 'pumpkin-cheesecake-cookies.webp',
    title: 'Pumpkin Cheesecake Cookies',
    alt: 'Five soft, round, spiced pumpkin cookies each with a smooth, creamy white cheesecake center, one broken to show the soft inside.',
  },
  'purple-rice': {
    file: 'purple-rice.webp',
    title: 'Aromatic Purple Rice',
    alt: 'A rounded bowl of fluffy lavender-tinted rice with dark purple rice grains scattered through it.',
  },
  'quadruple-chocolate-brownies': {
    file: 'quadruple-chocolate-brownies.webp',
    title: 'Quadruple Chocolate Brownies',
    alt: 'Four thick, square fudgy brownies stacked loosely, with chunks of white, milk and bittersweet chocolate visible on top and in the cut sides.',
  },
  'queso-fundido-with-chorizo': {
    file: 'queso-fundido-with-chorizo.webp',
    title: 'Queso Fundido with Chorizo',
    alt: 'A small cast-iron skillet of bubbling melted Oaxaca cheese topped with browned chorizo, roasted poblano and cilantro, with a wedge of warm flour tortilla dipped in at the rim.',
  },
  'quick-and-easy-caprese-pasta': {
    file: 'quick-and-easy-caprese-pasta.webp',
    title: 'Caprese Pasta',
    alt: 'A twirled nest of angel hair pasta tossed with chopped tomatoes, soft melting pieces of fresh mozzarella and torn basil, glistening with olive oil.',
  },
  'quick-and-easy-drop-biscuits': {
    file: 'quick-and-easy-drop-biscuits.webp',
    title: 'Drop Biscuits',
    alt: 'Five rustic, craggy, golden drop biscuits piled loosely, one split open with a pat of butter melting inside.',
  },
  'quick-honey-garlic-shrimp-and-broccoli': {
    file: 'quick-honey-garlic-shrimp-and-broccoli.webp',
    title: 'Honey Garlic Shrimp and Broccoli',
    alt: 'Plump pink shrimp and bright green broccoli florets coated in a glossy amber honey-soy glaze, piled on a plate.',
  },
  'quick-lamb-ragu': {
    file: 'quick-lamb-ragu.webp',
    title: 'Lamb Ragù',
    alt: 'A shallow bowl of rigatoni coated in a thick, rich tomato and ground lamb ragù, finished with fresh oregano leaves.',
  },
  'quick-pickled-carrots-and-daikon': {
    file: 'quick-pickled-carrots-and-daikon.webp',
    title: 'Do Chua (Pickled Carrots and Daikon)',
    alt: 'A small bowl of crisp, glossy matchsticks of orange carrot and white daikon in a little clear sweet-tart brine.',
  },
  'quick-pickled-cucumber-salad': {
    file: 'quick-pickled-cucumber-salad.webp',
    title: 'Quick-Pickled Cucumber Salad',
    alt: 'Thin rounds of cucumber in a glossy soy-sesame dressing, sprinkled with red pepper flakes, sliced scallions and sesame seeds.',
  },
  'quick-seasoned-black-beans': {
    file: 'quick-seasoned-black-beans.webp',
    title: 'Seasoned Black Beans',
    alt: 'A bowl of mostly whole, glossy black beans in a lightly thickened dark sauce, with a squeeze of lime.',
  },
  'quick-wonton-soup': {
    file: 'quick-wonton-soup.webp',
    title: 'Quick Wonton Soup',
    alt: 'A bowl of clear, golden chicken broth with plump wontons, halved baby bok choy, sliced shiitake mushrooms and a scatter of green scallions.',
  },
  'quinoa-pilaf-with-toasted-almonds': {
    file: 'quinoa-pilaf-with-toasted-almonds.webp',
    title: 'Quinoa Pilaf with Toasted Almonds',
    alt: 'A fluffy mound of quinoa with toasted chopped almonds, chopped dried apricots, parsley and dill, and fine flecks of lemon zest.',
  },
  ratatouille: {
    file: 'ratatouille.webp',
    title: 'Ratatouille',
    alt: 'A shallow bowl of evenly diced eggplant, zucchini, yellow squash and bell pepper in a light tomato sauce, glistening with olive oil and topped with torn basil.',
  },
  'real-alfredo-sauce': {
    file: 'real-alfredo-sauce.webp',
    title: 'Alfredo Sauce',
    alt: 'A twirled nest of fettuccine coated in a rich, smooth, ivory butter, cream and Parmesan sauce.',
  },
  'real-spaghetti-carbonara': {
    file: 'real-spaghetti-carbonara.webp',
    title: 'Spaghetti Carbonara',
    alt: 'A loose twirled nest of spaghetti coated in a silky, pale golden egg and Pecorino sauce, studded with crisp browned cubes of guanciale.',
  },
  'red-velvet-cupcakes': {
    file: 'red-velvet-cupcakes.webp',
    title: 'Red Velvet Cupcakes',
    alt: 'Three red velvet cupcakes in white paper cases, each topped with a tall swirl of white cream cheese frosting, one cut in half to show the deep red crumb.',
  },
  'red-zone-margarita': {
    file: 'red-zone-margarita.webp',
    title: 'Red Zone Margarita',
    alt: 'A short glass filled with a deep ruby cranberry margarita over a large clear ice cube with fresh cranberries and blueberries frozen inside, finished with a lime wheel and a sprig of thyme.',
  },
  'restaurant-style-chicken-lo-mein': {
    file: 'restaurant-style-chicken-lo-mein.webp',
    title: 'Restaurant-Style Chicken Lo Mein',
    alt: 'A tangled mound of glossy, soft egg noodles tossed with thin strips of seared chicken thigh, shredded cabbage, carrot and scallions in a dark savory sauce.',
  },
  ribollita: {
    file: 'ribollita.webp',
    title: 'Ribollita',
    alt: 'A bowl of very thick, rustic soup of soft bread, cannellini beans, cavolo nero, cabbage, carrot and tomato, finished with a green-gold drizzle of olive oil.',
  },
  'rice-bowl-station-buddha-bowls': {
    file: 'rice-bowl-station-buddha-bowls.webp',
    title: 'Rice Bowl Station (Buddha Bowls)',
    alt: 'A bowl with a base of rice topped with neat sections of baked tofu cubes, roasted chickpeas, a halved soft-boiled egg, shredded red cabbage, avocado slices and greens, with a drizzle of sauce.',
  },
  'rice-cooker-yellow-rice': {
    file: 'rice-cooker-yellow-rice.webp',
    title: 'Spanish Rice',
    alt: 'A shallow bowl of fluffy golden saffron rice flecked with diced red bell pepper and onion.',
  },
  'ricotta-toast-with-honey': {
    file: 'ricotta-toast-with-honey.webp',
    title: 'Ricotta Toast with Honey',
    alt: 'Two thick slices of golden toasted sourdough spread with thick, fluffy white ricotta, drizzled with runny honey and scattered with chopped green pistachios and flaky salt.',
  },
  'risotto-alla-milanese': {
    file: 'risotto-alla-milanese.webp',
    title: 'Risotto alla Milanese',
    alt: 'A creamy saffron-gold risotto spread across a wide plate, with grated grana on top.',
  },
  'roast-turkey-breast': {
    file: 'roast-turkey-breast.webp',
    title: 'Herb-Roasted Bone-In Turkey Breast',
    alt: 'Five slices of juicy white turkey breast fanned out, each edged with a strip of golden, herb-flecked crisp skin, with a spoonful of glossy pan juices.',
  },
  'roasted-asparagus': {
    file: 'roasted-asparagus.webp',
    title: 'Asparagus',
    alt: 'A neat pile of bright green asparagus spears roasted until tender, with lightly blistered tips, finished with lemon.',
  },
  'roasted-broccolini-with-lemon': {
    file: 'roasted-broccolini-with-lemon.webp',
    title: 'Roasted Broccolini with Lemon',
    alt: 'Long stems of broccolini laid side by side with lightly charred tips, crisp golden garlic slices and caramelized lemon slices, glistening with olive oil.',
  },
  'roasted-brussels-sprouts-with-balsamic': {
    file: 'roasted-brussels-sprouts-with-balsamic.webp',
    title: 'Roasted Brussels Sprouts with Balsamic',
    alt: 'Halved Brussels sprouts roasted cut side down until deeply caramelized, glossy with a dark balsamic-honey glaze and sprinkled with flaky salt.',
  },
  'roasted-butternut-squash-mac-and-cheese': {
    file: 'roasted-butternut-squash-mac-and-cheese.webp',
    title: 'Butternut Squash Mac and Cheese',
    alt: 'A generous scoop of cavatappi corkscrew pasta in a thick, creamy cheddar sauce with golden roasted butternut squash cubes mixed through.',
  },
  'roasted-cauliflower-with-tahini': {
    file: 'roasted-cauliflower-with-tahini.webp',
    title: 'Whole Roasted Cauliflower with Tahini',
    alt: 'A whole, golden-brown roasted cauliflower head with spice-tinted, caramelized florets, drizzled with creamy lemon-garlic tahini sauce and scattered with parsley and pomegranate seeds.',
  },
  'roasted-corn-chowder-robert-irvine': {
    file: 'roasted-corn-chowder-robert-irvine.webp',
    title: 'Roasted Corn Chowder with Lime Shrimp — Robert Irvine',
    alt: 'A bowl of thick, creamy, pale gold corn chowder full of roasted corn kernels and bits of bacon, topped with a small pile of lime-marinated baby shrimp.',
  },
  'roasted-corn-chowder-with-lime-cured-shrimp': {
    file: 'roasted-corn-chowder-with-lime-cured-shrimp.webp',
    title: 'Corn Chowder with Lime Shrimp',
    alt: 'A bowl of creamy corn chowder with diced red-skinned potatoes and roasted corn, topped with lime-cured pink shrimp and crisp bacon bits.',
  },
  'roasted-fall-harvest-salad': {
    file: 'roasted-fall-harvest-salad.webp',
    title: 'Fall Harvest Salad',
    alt: 'A shallow bowl of massaged dark kale and fluffy quinoa topped with golden roasted squash cubes, crisp spiced chickpeas, toasted pepitas and golden raisins, drizzled with creamy tahini dressing.',
  },
  'roasted-green-bean-fries': {
    file: 'roasted-green-bean-fries.webp',
    title: 'Green Bean Fries',
    alt: 'A loose pile of roasted green beans, blistered in spots and coated with golden grated Parmesan.',
  },
  'roasted-red-pepper-and-sweet-potato-soup': {
    file: 'roasted-red-pepper-and-sweet-potato-soup.webp',
    title: 'Roasted Red Pepper and Sweet Potato Soup',
    alt: 'A bowl of smooth, velvety, vivid orange-red soup finished with a swirl of coconut milk and a pinch of red pepper flakes.',
  },
  'roasted-root-vegetables': {
    file: 'roasted-root-vegetables.webp',
    title: 'Root Vegetables',
    alt: 'A colorful heap of roasted carrot, parsnip, sweet potato and beet pieces, caramelized and shiny with a maple-balsamic glaze, with roasted garlic cloves and herb sprigs.',
  },
  'roasted-sunchokes-with-brown-butter-cider-vinaigrette': {
    file: 'roasted-sunchokes-with-brown-butter-cider-vinaigrette.webp',
    title: 'Sunchokes with Brown Butter Vinaigrette',
    alt: 'Golden, crisp-edged roasted sunchoke pieces with roasted garlic cloves and thyme, spooned with a glossy, nutty brown butter cider vinaigrette.',
  },
  'roasted-sweet-potatoes': {
    file: 'roasted-sweet-potatoes.webp',
    title: 'Cumin-Chili Roasted Sweet Potatoes',
    alt: 'A pile of orange sweet potato wedges with spice-coated, caramelized edges, scattered with cilantro and two lime wedges on the plate.',
  },
  'roasted-tomato-basil-soup': {
    file: 'roasted-tomato-basil-soup.webp',
    title: 'Roasted Tomato Basil Soup',
    alt: 'A bowl of smooth, deep red roasted tomato soup with a swirl of cream and a few small basil leaves on top.',
  },
  'rosemary-pork-tenderloin': {
    file: 'rosemary-pork-tenderloin.webp',
    title: 'Pork Tenderloin',
    alt: 'Pork tenderloin medallions with faintly pink centers and a golden mustard and rosemary crust, with crisp bacon pieces and rosemary sprigs alongside.',
  },
  'royal-icing': {
    file: 'royal-icing.webp',
    title: 'Royal Icing',
    alt: 'Five cut-out sugar cookies in simple shapes, flooded with smooth, glossy royal icing in pastel colors and white, with fine piped white outlines and dots.',
  },
  'saag-paneer': {
    file: 'saag-paneer.webp',
    title: 'Saag Paneer',
    alt: 'A bowl of thick, creamy, deep green spinach with golden-browned cubes of paneer, a swirl of cream and a drizzle of red chile ghee.',
  },
  'saffron-cardamom-rice': {
    file: 'saffron-cardamom-rice.webp',
    title: 'Saffron Cardamom Rice',
    alt: 'A fluffy mound of long, separate basmati grains, mostly white with streaks of bright saffron gold, topped with golden fried onion and a couple of green cardamom pods.',
  },
  'sage-brown-butter-sauce-butternut-squash-ravioli': {
    file: 'sage-brown-butter-sauce-butternut-squash-ravioli.webp',
    title: 'Sage Brown Butter Ravioli',
    alt: 'Six plump butternut squash ravioli in a silky golden brown butter cream sauce, topped with crisp fried sage leaves and grated Parmesan.',
  },
  'salsa-verde-chicken-casserole': {
    file: 'salsa-verde-chicken-casserole.webp',
    title: 'Salsa Verde Chicken Casserole',
    alt: 'A square portion of layered casserole of corn tortillas, shredded chicken, green salsa verde and sour cream under melted, golden-spotted Monterey Jack, topped with chopped tomato, cilantro and fanned avocado slices.',
  },
  'san-marzano-tomato-sauce': {
    file: 'san-marzano-tomato-sauce.webp',
    title: 'San Marzano Tomato Sauce',
    alt: 'A twirled nest of spaghetti coated in a bright, smooth San Marzano tomato sauce, topped with a few fresh basil leaves.',
  },
  'sausage-and-white-bean-skillet': {
    file: 'sausage-and-white-bean-skillet.webp',
    title: 'Sausage and White Bean Skillet',
    alt: 'A cast-iron skillet of browned sliced Italian sausage and creamy cannellini beans in a light tomato broth, topped with parsley and grated Parmesan.',
  },
  'sausage-breakfast-casserole': {
    file: 'sausage-breakfast-casserole.webp',
    title: 'Sausage Breakfast Casserole',
    alt: 'A neat square portion of baked egg casserole with a golden hash brown base, crumbled sausage, red bell pepper and melted cheddar, topped with sliced green scallions.',
  },
  'sausage-shrimp-and-quinoa-skillet': {
    file: 'sausage-shrimp-and-quinoa-skillet.webp',
    title: 'Sausage, Shrimp & Quinoa Skillet',
    alt: 'A skillet of fluffy quinoa with browned rounds of chicken sausage, pink shrimp and diced onion, pepper and celery, seasoned with Creole spices and topped with parsley.',
  },
  'sauteed-mushrooms-with-thyme': {
    file: 'sauteed-mushrooms-with-thyme.webp',
    title: 'Sauteed Mushrooms with Thyme',
    alt: 'A mound of golden-brown sautéed mixed mushrooms, cremini, shiitake and oyster, glossy with butter, with thin slices of garlic, thyme leaves and parsley.',
  },
  'savory-oatmeal-with-egg': {
    file: 'savory-oatmeal-with-egg.webp',
    title: 'Savory Oatmeal with Egg',
    alt: 'A bowl of creamy oatmeal topped with a fried egg with a golden runny yolk and crisp lacy edges, sliced scallions, a drizzle of soy and sesame oil and red pepper flakes.',
  },
  'savory-thai-turkey-lettuce-wraps': {
    file: 'savory-thai-turkey-lettuce-wraps.webp',
    title: 'Savory Thai Turkey Lettuce Wraps',
    alt: 'Three crisp lettuce cups filled with savory ground turkey with diced bell pepper, cilantro and mint, with a little drizzle of sriracha and hoisin.',
  },
  sazerac: {
    file: 'sazerac.webp',
    title: 'Sazerac',
    alt: 'A short glass with no ice holding a clear, amber-bronze cocktail, with a twist of lemon peel resting on the rim.',
  },
  'scallion-shallot-oil': {
    file: 'scallion-shallot-oil.webp',
    title: 'Scallion-Shallot Oil with Crisp Alliums',
    alt: 'A nest of plain wheat noodles glossy with golden scallion-shallot oil, topped with a generous pile of crisp golden fried shallots and scallions.',
  },
  'seafood-chorizo-tacos': {
    file: 'seafood-chorizo-tacos.webp',
    title: 'Seafood-Chorizo Tacos',
    alt: 'Three soft corn tortillas filled with red-orange chorizo, pink chopped shrimp and tender squid rings, topped with minced red onion and cilantro, with lime wedges on the plate.',
  },
  'seared-salmon-with-summer-vegetables': {
    file: 'seared-salmon-with-summer-vegetables.webp',
    title: 'Seared Salmon with Summer Vegetables',
    alt: 'Small golden-seared strips of salmon on a bed of garlicky wilted spinach, sweet corn and shiitake mushrooms, spooned with a glossy balsamic butter sauce.',
  },
  'seared-scallops-with-a-corn-bacon-and-avocado-relish': {
    file: 'seared-scallops-with-a-corn-bacon-and-avocado-relish.webp',
    title: 'Seared Scallops with Corn & Avocado Relish',
    alt: 'Four sea scallops with deep golden seared tops on a bed of colorful relish of sweet corn, bacon, avocado and red pepper.',
  },
  'seasoned-bean-sprouts': {
    file: 'seasoned-bean-sprouts.webp',
    title: 'Seasoned Bean Sprouts (Kongnamul Namul)',
    alt: 'A neat mound of soybean sprouts with yellow heads, tossed with sesame oil, minced green onion and toasted sesame seeds.',
  },
  'sesame-roasted-edamame': {
    file: 'sesame-roasted-edamame.webp',
    title: 'Sesame-Roasted Shelled Edamame',
    alt: 'A small mound of shelled edamame beans, lightly browned in spots and glossy with sesame oil, sprinkled with toasted sesame seeds.',
  },
  'sesame-tomato-salad': {
    file: 'sesame-tomato-salad.webp',
    title: 'Sesame Tomato Salad',
    alt: 'Mixed ripe tomatoes, sliced and halved, in red, yellow and orange, glistening in a soy, sesame and olive oil dressing, scattered with chopped basil.',
  },
  shakshuka: {
    file: 'shakshuka.webp',
    title: 'Shakshuka',
    alt: 'A skillet of thick, spiced red tomato and pepper sauce with six eggs nestled in, whites set and yolks glossy and runny, scattered with herbs.',
  },
  'shaved-brussels-sprout-salad-with-apples-and-pecorino': {
    file: 'shaved-brussels-sprout-salad-with-apples-and-pecorino.webp',
    title: 'Shaved Brussels Sprout Salad',
    alt: 'A fluffy mound of paper-thin shaved Brussels sprouts with matchsticks of green apple and a snowy shower of finely grated Pecorino, lightly glossy with honey-cider dressing.',
  },
  'shaved-fennel-citrus-salad': {
    file: 'shaved-fennel-citrus-salad.webp',
    title: 'Shaved Fennel Citrus Salad',
    alt: 'Paper-thin translucent slices of fennel layered with orange and grapefruit segments and rounds, glistening with dressing, topped with shaved Parmesan and feathery fennel fronds.',
  },
  'sheet-pan-chicken-broccoli': {
    file: 'sheet-pan-chicken-broccoli.webp',
    title: 'Roasted Chicken, Broccoli and Cheddar Bake',
    alt: 'A generous portion of roasted chicken pieces and broccoli florets bound in a smooth cheddar sauce under a crisp golden panko topping.',
  },
  'sheet-pan-chicken-fajitas': {
    file: 'sheet-pan-chicken-fajitas.webp',
    title: 'Sheet Pan Chicken Fajitas',
    alt: 'Two soft flour tortillas filled with strips of lime-seasoned roasted chicken, red, yellow and green bell peppers and red onion, topped with cilantro, with a lime wedge on the plate.',
  },
  'sheet-pan-feta-chicken': {
    file: 'sheet-pan-feta-chicken.webp',
    title: 'Balsamic Chicken with Tomatoes and Feta',
    alt: 'Two roasted chicken breasts side by side, each topped with a softened slab of white feta, surrounded by blistered burst cherry tomatoes and wedges of roasted red onion, glazed with a glossy honey-balsamic finish.',
  },
  'sheet-pan-italian-sausage-dinner': {
    file: 'sheet-pan-italian-sausage-dinner.webp',
    title: 'Sheet Pan Italian Sausage Dinner',
    alt: 'Three browned Italian sausage links laid diagonally beside a pile of halved, golden roasted baby potatoes and a cluster of bright green roasted broccoli florets with crisp edges.',
  },
  'sheet-pan-pancakes': {
    file: 'sheet-pan-pancakes.webp',
    title: 'Sheet Pan Pancakes',
    alt: 'Three square slices of thick, fluffy baked pancake stacked slightly apart, each from a different topping section: one swirled with strawberry jam and sliced strawberries, one studded with chocolate chips, one dotted with blueberries.',
  },
  'sheet-pan-pesto-chicken-meal-prep-bowls': {
    file: 'sheet-pan-pesto-chicken-meal-prep-bowls.webp',
    title: 'Sheet Pan Pesto Chicken Bowls',
    alt: 'A bowl of roasted cubed chicken tossed in green basil pesto, with roasted broccoli florets, thick zucchini rounds, browned halved mushrooms and blistered cherry tomatoes, finished with grated Parmesan.',
  },
  'sheet-pan-pineapple-shrimp-tacos': {
    file: 'sheet-pan-pineapple-shrimp-tacos.webp',
    title: 'Sheet Pan Pineapple Shrimp Tacos',
    alt: 'Three soft tortillas side by side, each filled with chili-spiced roasted shrimp, caramelized pineapple pieces and soft red onion, topped with a crisp shredded green cabbage slaw.',
  },
  'sheet-pan-shrimp-fajitas': {
    file: 'sheet-pan-shrimp-fajitas.webp',
    title: 'Sheet Pan Shrimp Fajitas',
    alt: 'A generous pile of spice-dusted roasted jumbo shrimp tangled with soft strips of red and yellow bell pepper and sliced onion, with three folded small corn tortillas tucked at one side.',
  },
  'shoyu-tuna-poke-bowl': {
    file: 'shoyu-tuna-poke-bowl.webp',
    title: 'Shoyu Tuna Poke Bowl',
    alt: 'A bowl of white short-grain rice topped in neat sections with glossy cubes of deep red soy-marinated tuna, sliced cucumber, bright green shelled edamame and fanned avocado slices.',
  },
  'shrimp-and-avocado-summer-rolls': {
    file: 'shrimp-and-avocado-summer-rolls.webp',
    title: 'Shrimp & Avocado Summer Rolls',
    alt: 'Three translucent rice paper rolls, two cut on the diagonal and stood up to show the filling, with pink halved shrimp pressed against the wrapper, avocado slices, rice vermicelli and green herbs, beside a small white ramekin of sweet chile-lime dipping sauce.',
  },
  'shrimp-and-corn-chowder': {
    file: 'shrimp-and-corn-chowder.webp',
    title: 'Shrimp and Corn Chowder',
    alt: 'A bowl of creamy golden-orange chowder full of sweet corn kernels, finely diced red pepper and tomato, with plump pink shrimp resting on the surface.',
  },
  'shrimp-and-grits': {
    file: 'shrimp-and-grits.webp',
    title: 'Shrimp and Grits',
    alt: 'A mound of creamy golden cheddar grits topped with a cluster of tender pink shrimp and crumbled crisp bacon, spooned with buttery scallion-lemon pan juices.',
  },
  'shrimp-and-mango-tacos': {
    file: 'shrimp-and-mango-tacos.webp',
    title: 'Shrimp & Mango Tacos',
    alt: 'Three soft corn tortillas side by side, each filled with small cumin-seasoned sautéed shrimp mixed with finely chopped ripe mango, serrano and cilantro.',
  },
  'shrimp-and-snow-pea-stir-fry': {
    file: 'shrimp-and-snow-pea-stir-fry.webp',
    title: 'Shrimp and Snow Pea Noodles',
    alt: 'A tangle of flat rice linguine noodles glossy with sweet chili sauce, tossed with plump pink shrimp and bright green diagonally sliced snow peas.',
  },
  'shrimp-and-sweet-potato-noodle-stir-fry': {
    file: 'shrimp-and-sweet-potato-noodle-stir-fry.webp',
    title: 'Shrimp & Sweet Potato Noodle Stir-Fry',
    alt: 'A pile of clear, glossy sweet potato glass noodles tossed with velvety pink shrimp, julienned carrot, snow peas and green onion in a savory soy glaze.',
  },
  'shrimp-fettuccine-alfredo': {
    file: 'shrimp-fettuccine-alfredo.webp',
    title: 'Shrimp Fettuccine Alfredo',
    alt: 'A twirled nest of fettuccine coated in a smooth, creamy white Alfredo sauce, topped with five seared jumbo shrimp.',
  },
  'shrimp-linguine-with-fresh-tomato-and-basil': {
    file: 'shrimp-linguine-with-fresh-tomato-and-basil.webp',
    title: 'Shrimp Linguine with Fresh Tomato, White Wine & Basil',
    alt: 'A twirled nest of green spinach linguine in a light fresh tomato and white wine sauce with wilted spinach, topped with plump shrimp, torn basil and a scattering of crisp golden breadcrumbs.',
  },
  'shrimp-lobster-sauce': {
    file: 'shrimp-lobster-sauce.webp',
    title: 'Shrimp with Lobster Sauce',
    alt: 'Plump shrimp and bits of ground pork in a glossy, pale golden sauce with soft ribbons of egg and flecks of black bean, spooned beside a neat mound of white rice.',
  },
  'shrimp-scampi-with-linguini': {
    file: 'shrimp-scampi-with-linguini.webp',
    title: 'Shrimp Scampi with Linguini',
    alt: 'A twirled nest of linguine glossy with lemon, white wine and butter sauce, topped with six plump curled shrimp, chopped parsley and a dusting of grated Parmesan.',
  },
  'shrimp-vodka-pasta': {
    file: 'shrimp-vodka-pasta.webp',
    title: 'Shrimp Vodka Pasta',
    alt: 'Rigatoni in a creamy blush-pink tomato-vodka sauce, tossed with plump shrimp and bite-size broccoli florets, scattered with chopped basil.',
  },
  'shrimp-with-black-bean-sauce': {
    file: 'shrimp-with-black-bean-sauce.webp',
    title: 'Shrimp with Black Bean Sauce',
    alt: 'Plump shrimp and crumbled pork in a glossy, savory brown fermented black bean sauce with small dice of green bell pepper, piled on a plate.',
  },
  'shrimp-wonton-soup': {
    file: 'shrimp-wonton-soup.webp',
    title: 'Shrimp Wonton Soup',
    alt: 'A bowl of clear golden broth holding six plump pork and shrimp wontons with soft, silky trailing wrappers, a few drops of sesame oil on the surface.',
  },
  'shruffs-end': {
    file: 'shruffs-end.webp',
    title: "Shruff's End",
    alt: 'A clear amber stirred cocktail over one large clear ice cube, a twist of orange peel resting on the rim.',
  },
  'sichuan-style-chicken-and-chinese-eggplant': {
    file: 'sichuan-style-chicken-and-chinese-eggplant.webp',
    title: 'Sichuan-Style Chicken & Chinese Eggplant',
    alt: 'A pile of soft, glossy batons of purple Chinese eggplant tossed with bite-size pieces of chicken thigh in a rich reddish-brown chili bean sauce.',
  },
  'silky-zucchini-soup': {
    file: 'silky-zucchini-soup.webp',
    title: 'Zucchini Soup',
    alt: 'A bowl of smooth, pale green blended zucchini soup topped with a small nest of fine raw zucchini matchsticks and a thin drizzle of olive oil.',
  },
  'simple-roast-turkey': {
    file: 'simple-roast-turkey.webp',
    title: 'Dry-Brined Roast Turkey with Cider',
    alt: 'A whole roasted turkey with crisp, deep golden-brown skin on a platter, surrounded by roasted lemon wedges, onion wedges and garlic cloves.',
  },
  'simply-seasoned-korean-spinach-salad': {
    file: 'simply-seasoned-korean-spinach-salad.webp',
    title: 'Korean Spinach Salad (Sigeumchi Namul)',
    alt: 'A small neat mound of tender blanched spinach, lightly squeezed and loosened, glossy with sesame oil and sprinkled with toasted sesame seeds.',
  },
  'skillet-biscuits-with-berries': {
    file: 'skillet-biscuits-with-berries.webp',
    title: 'Skillet Biscuits with Berries',
    alt: 'A cast-iron skillet of glossy jammy raspberries and blackberries in a deep red syrup, topped with six golden, sugar-crusted buttery biscuits.',
  },
  'skinny-baked-broccoli-macaroni-and-cheese': {
    file: 'skinny-baked-broccoli-macaroni-and-cheese.webp',
    title: 'Skinny Broccoli Mac & Cheese',
    alt: 'A generous scoop of baked elbow macaroni in a creamy cheddar sauce studded with bright broccoli florets, under a crisp golden breadcrumb and Parmesan crust.',
  },
  'slow-cooker-cheesy-mushroom-quinoa': {
    file: 'slow-cooker-cheesy-mushroom-quinoa.webp',
    title: 'Slow Cooker Cheesy Mushroom Quinoa',
    alt: 'A bowl of creamy, cheesy quinoa with tender sliced mushrooms and small dice of red bell pepper, topped with chopped green onions.',
  },
  'slow-cooker-chicken-noodle-soup': {
    file: 'slow-cooker-chicken-noodle-soup.webp',
    title: 'Slow-Cooker Chicken Noodle Soup',
    alt: 'A bowl of clear golden chicken broth with shredded chicken, small cubes of carrot and celery and spiral fusilli pasta.',
  },
  'slow-cooker-chicken-ramen-with-bok-choy-and-miso': {
    file: 'slow-cooker-chicken-ramen-with-bok-choy-and-miso.webp',
    title: 'Slow-Cooker Chicken Ramen with Miso',
    alt: 'A deep bowl of creamy pale miso chicken broth with a tangle of fresh ramen noodles, shredded chicken, sliced shiitake mushrooms and a halved baby bok choy, topped with sliced scallion greens.',
  },
  'slow-cooker-cilantro-lime-chicken': {
    file: 'slow-cooker-cilantro-lime-chicken.webp',
    title: 'Slow-Cooker Cilantro Lime Chicken',
    alt: 'Two soft flour tortillas side by side, each filled with juicy shredded chicken mixed with black beans, corn and tomato, topped with chopped fresh cilantro.',
  },
  'slow-cooker-general-tsos-chicken': {
    file: 'slow-cooker-general-tsos-chicken.webp',
    title: 'Slow-Cooker General Tso–Style Chicken',
    alt: 'Braised chicken pieces in a glossy red-brown ginger-chile sauce with whole dried red chilies and sliced scallions, beside a mound of white rice.',
  },
  'slow-cooker-hoisin-garlic-chicken': {
    file: 'slow-cooker-hoisin-garlic-chicken.webp',
    title: 'Slow-Cooker Hoisin Garlic Chicken',
    alt: 'A pile of tender pulled chicken thighs in a glossy dark garlic-hoisin sauce beside a mound of white rice, scattered with thinly sliced scallions.',
  },
  'slow-cooker-korean-beef': {
    file: 'slow-cooker-korean-beef.webp',
    title: 'Slow Cooker Korean Beef',
    alt: 'A bowl of white rice topped with tender cubes of chuck beef in a glossy, thick soy-ginger glaze.',
  },
  'slow-cooker-mongolian-beef': {
    file: 'slow-cooker-mongolian-beef.webp',
    title: 'Slow Cooker Mongolian Beef',
    alt: 'Thin strips of tender flank steak in a glossy brown-sugar soy sauce with green onion pieces, spooned beside a mound of white rice.',
  },
  'slow-cooker-tortellini-soup': {
    file: 'slow-cooker-tortellini-soup.webp',
    title: 'Slow-Cooker Chicken Tortellini Soup',
    alt: 'A bowl of lightly creamy orange-red tomato broth with plump cheese tortellini, shredded chicken and wilted spinach.',
  },
  'slow-cooker-vegetable-korma': {
    file: 'slow-cooker-vegetable-korma.webp',
    title: 'Slow Cooker Vegetable Korma',
    alt: 'A bowl of soft cauliflower florets, carrot half-moons, green beans and peas in a creamy pale golden coconut-almond curry sauce.',
  },
  'slow-cooker-vegetarian-lentil-tortilla-soup': {
    file: 'slow-cooker-vegetarian-lentil-tortilla-soup.webp',
    title: 'Slow Cooker Lentil Tortilla Soup',
    alt: 'A bowl of thick brick-red tomato and lentil soup with black and pinto beans, topped with a pile of crisp tortilla strips, diced avocado and cilantro.',
  },
  'smashed-cucumber-salad': {
    file: 'smashed-cucumber-salad.webp',
    title: 'Smashed Cucumber Salad (Pai Huang Gua)',
    alt: 'Craggy, irregular smashed pieces of bright green cucumber glistening in a dark black-vinegar, soy and sesame dressing.',
  },
  'smoked-salmon-toast': {
    file: 'smoked-salmon-toast.webp',
    title: 'Smoked Salmon Toast',
    alt: 'Two thick slices of toasted sourdough spread with cream cheese, draped with silky folds of pink cured salmon, topped with thin red onion rings, capers and dill.',
  },
  'smoky-spanish-rice-and-chickpeas': {
    file: 'smoky-spanish-rice-and-chickpeas.webp',
    title: 'Spanish Rice and Chickpeas',
    alt: 'A bowl of tender red-orange paprika and tomato rice studded with golden chickpeas and soft diced tomato, topped with chopped parsley.',
  },
  snickerdoodles: {
    file: 'snickerdoodles.webp',
    title: 'Snickerdoodles',
    alt: 'Five round, puffy cookies with crackled tops thickly coated in cinnamon sugar, arranged in a loose overlapping row, one broken open to show a soft pale center.',
  },
  'soba-noodles-with-shiitakes-broccoli-and-tofu': {
    file: 'soba-noodles-with-shiitakes-broccoli-and-tofu.webp',
    title: 'Soba Noodles with Shiitakes & Tofu',
    alt: 'A tangle of gray-brown buckwheat soba noodles in a light ginger-soy sauce, topped with golden cubes of tofu, sliced shiitake mushrooms and bright green baby broccoli.',
  },
  'soft-batch-chocolate-chip-cookies': {
    file: 'soft-batch-chocolate-chip-cookies.webp',
    title: 'Soft Batch Chocolate Chip Cookies',
    alt: 'Five thick, soft chocolate chip cookies arranged in a loose stack, one broken in half to show a soft, gooey center with melting chocolate chips.',
  },
  'soy-ginger-dipping-sauce': {
    file: 'soy-ginger-dipping-sauce.webp',
    title: 'Soy Ginger Dipping Sauce',
    alt: 'Six pan-fried dumplings with crisp golden bottoms arranged in a fan, beside a small white dish of dark soy ginger dipping sauce flecked with grated ginger, garlic and green onion.',
  },
  'soy-sauce-butter-pasta-with-shrimp-and-shiitakes': {
    file: 'soy-sauce-butter-pasta-with-shrimp-and-shiitakes.webp',
    title: 'Soy Sauce Butter Pasta with Shrimp and Shiitakes',
    alt: 'A twirled nest of thin spaghetti glossy with a light brown soy-butter sauce, topped with seared shrimp and browned sliced shiitake mushrooms, finished with parsley and Parmesan.',
  },
  'spaghetti-and-spinach-with-sun-dried-tomato-cream-sauce': {
    file: 'spaghetti-and-spinach-with-sun-dried-tomato-cream-sauce.webp',
    title: 'Sun-Dried Tomato Cream Spaghetti',
    alt: 'A twirled nest of whole-wheat spaghetti in a light, creamy pale orange sauce with wilted spinach, slivers of red sun-dried tomato and soft red onion, dusted with Parmesan.',
  },
  'spaghetti-and-tofu-meatballs': {
    file: 'spaghetti-and-tofu-meatballs.webp',
    title: 'Spaghetti with Tofu Meatballs',
    alt: 'A twirled nest of spaghetti in red tomato sauce topped with four round golden-brown tofu and walnut meatballs.',
  },
  'spaghetti-with-clams': {
    file: 'spaghetti-with-clams.webp',
    title: 'Spaghetti with Clams',
    alt: 'A twirled nest of spaghetti glossy with garlic, olive oil and vermouth sauce, with eight open littleneck clams in their shells nestled around and on top, scattered with parsley.',
  },
  'spaghetti-with-clams-and-braised-greens': {
    file: 'spaghetti-with-clams-and-braised-greens.webp',
    title: 'Spaghetti with Clams & Braised Greens',
    alt: 'A twirled nest of spaghetti in a light coral-orange roasted red pepper and clam sauce, tossed with dark braised Swiss chard and topped with eight open littleneck clams in their shells.',
  },
  'spanish-rice-chorizo': {
    file: 'spanish-rice-chorizo.webp',
    title: 'Spanish Rice with Chorizo and Chickpeas',
    alt: 'A bowl of tender saffron and paprika-tinted rice studded with rounds of red cured Spanish chorizo, golden chickpeas, diced red pepper and plump raisins.',
  },
  'spatchcocked-roast-chicken': {
    file: 'spatchcocked-roast-chicken.webp',
    title: 'Spatchcocked Roast Chicken (The Best Method)',
    alt: 'A whole flattened roast chicken lying breast side up, legs splayed, with crisp deep golden, herb-flecked skin.',
  },
  'spiced-butternut-squash-puree': {
    file: 'spiced-butternut-squash-puree.webp',
    title: 'Butternut Squash Purée',
    alt: 'A generous swirled mound of smooth, bright orange butternut squash purée with a small pool of melting butter in the center and a dusting of grated nutmeg.',
  },
  'spiced-coconut-chicken-rice': {
    file: 'spiced-coconut-chicken-rice.webp',
    title: 'Spiced Coconut Chicken & Rice',
    alt: 'A generous portion of fluffy turmeric-yellow coconut basmati rice mixed with tender pieces of chicken thigh and wilted dark green kale, with a lime wedge at the side.',
  },
  'spicy-peach-and-avocado-salad': {
    file: 'spicy-peach-and-avocado-salad.webp',
    title: 'Spicy Peach and Avocado Salad',
    alt: 'Glossy wedges of ripe peach and avocado gently tumbled together, dotted with thin red Fresno chile slices, torn mint leaves and chopped green pistachios, glistening with chile-lemon dressing.',
  },
  'spicy-thai-red-curry-beef': {
    file: 'spicy-thai-red-curry-beef.webp',
    title: 'Thai Red Curry Beef',
    alt: 'A bowl of thin tender beef slices with red bell pepper strips and onion in a light, orange-red coconut curry broth, topped with plenty of fresh basil leaves.',
  },
  'spicy-tuna-roll': {
    file: 'spicy-tuna-roll.webp',
    title: 'Spicy Tuna Roll',
    alt: 'Eight round slices of nori-wrapped sushi roll arranged in two neat rows, cut sides up showing white rice around a center of chopped pink tuna mixed with spicy mayonnaise and scallion.',
  },
  'spinach-and-mushroom-quiche': {
    file: 'spinach-and-mushroom-quiche.webp',
    title: 'Spinach & Mushroom Quiche',
    alt: 'One tall wedge of quiche with a flaky golden pastry crust, its cut side showing a creamy set egg custard full of spinach, sliced mushrooms and soft onions, the top lightly browned.',
  },
  'spindrift-gin-fizz': {
    file: 'spindrift-gin-fizz.webp',
    title: 'Grapefruit Gin Fizz',
    alt: 'A tall glass of pale pink-blush grapefruit and lime gin sparkler over ice, with fine bubbles rising and a lime wheel on the rim.',
  },
  'starbucks-egg-bites': {
    file: 'starbucks-egg-bites.webp',
    title: 'Starbucks Egg Bites',
    alt: 'Five small round egg bites with pale, smooth, flat tops dotted with bits of bacon, one cut in half to show a velvety, custard-like inside.',
  },
  'steamed-bok-choy-with-oyster-sauce': {
    file: 'steamed-bok-choy-with-oyster-sauce.webp',
    title: 'Bok Choy with Garlic and Oyster Sauce',
    alt: 'Halved baby bok choy laid in a neat overlapping row, cut sides up, glossy with a dark oyster sauce and sliced golden garlic.',
  },
  'steamed-broccoli': {
    file: 'steamed-broccoli.webp',
    title: 'Steamed Broccoli with Garlic Oil',
    alt: 'A pile of evenly cut, vivid green broccoli florets and sliced stems, glistening with golden garlic-infused olive oil and flecked with minced garlic.',
  },
  'steamed-edamame': {
    file: 'steamed-edamame.webp',
    title: 'Edamame with Sea Salt',
    alt: 'A generous pile of bright green edamame pods, lightly glossy and sprinkled with large flakes of sea salt.',
  },
  'steamed-mussels-chorizo': {
    file: 'steamed-mussels-chorizo.webp',
    title: 'Mussels with Chorizo Broth',
    alt: 'A wide bowl piled with open black-shelled mussels in a golden wine broth with soft halved cherry tomatoes and slices of red chorizo, with a slice of toasted country bread tucked at the edge.',
  },
  'steamed-noodles-with-green-beans': {
    file: 'steamed-noodles-with-green-beans.webp',
    title: 'Braised Noodles with Green Beans and Pork',
    alt: 'A pile of soy-tinted medium-thin wheat noodles tossed with tender green beans, slices of pork belly and fine ginger matchsticks.',
  },
  'steamed-white-rice': {
    file: 'steamed-white-rice.webp',
    title: 'Plain Short-Grain White Rice (Gohan)',
    alt: 'A neat rounded mound of glossy, plump short-grain white rice, the grains distinct but cohesive.',
  },
  'steel-cut-oatmeal': {
    file: 'steel-cut-oatmeal.webp',
    title: 'Steel-Cut Oatmeal',
    alt: 'A bowl of creamy, nubbly steel-cut oatmeal topped with fresh berries and a drizzle of maple syrup.',
  },
  'stevens-margs': {
    file: 'stevens-margs.webp',
    title: 'Steven’s Margaritas',
    alt: 'A short rocks glass of pale gold margarita over ice with a lime wedge on the rim.',
  },
  'sticky-miso-salmon-bowl': {
    file: 'sticky-miso-salmon-bowl.webp',
    title: 'Sticky Miso Salmon Bowls',
    alt: 'A bowl of buttered scallion rice topped with a glossy, caramelized miso-glazed salmon fillet, sliced cucumber, fanned avocado and strips of nori.',
  },
  'sticky-peking-meatball-rice-bowls': {
    file: 'sticky-peking-meatball-rice-bowls.webp',
    title: 'Sticky Peking Meatball Rice Bowls',
    alt: 'A bowl of creamy coconut jasmine rice topped with glossy meatballs in a dark, sticky hoisin and duck sauce glaze, with sautéed carrot coins and garlicky wilted kale alongside.',
  },
  'stir-fried-chicken-and-eggplant-with-thai-basil': {
    file: 'stir-fried-chicken-and-eggplant-with-thai-basil.webp',
    title: 'Thai Basil Chicken & Eggplant',
    alt: 'Tender pieces of eggplant and thinly sliced chicken breast in a glossy savory glaze, tossed with whole Thai basil leaves.',
  },
  'stir-fried-shrimp-with-snow-peas-and-ginger': {
    file: 'stir-fried-shrimp-with-snow-peas-and-ginger.webp',
    title: 'Shrimp with Snow Peas and Ginger',
    alt: 'Plump pink shrimp and bright green snow peas tossed in a light, glossy ginger-garlic sauce, piled on a plate.',
  },
  'stovetop-macaroni-and-cheese': {
    file: 'stovetop-macaroni-and-cheese.webp',
    title: 'Stovetop Macaroni & Cheese',
    alt: 'A bowl of elbow macaroni in a thick, glossy, deep orange-yellow sharp cheddar sauce.',
  },
  'strawberry-cheesecake-overnight-oatmeal': {
    file: 'strawberry-cheesecake-overnight-oatmeal.webp',
    title: 'Strawberry Cheesecake Overnight Oats',
    alt: 'Creamy layered overnight oats speckled with chia seeds, topped with a layer of chopped fresh strawberries and a little lemon zest, seen through the side of the jar.',
  },
  'strawberry-congealed-salad': {
    file: 'strawberry-congealed-salad.webp',
    title: 'Strawberry Congealed Salad',
    alt: 'A neat square slice showing a deep red strawberry-pineapple gelatin layer with banana and pecan bits, a creamy white sour cream layer, and another red layer.',
  },
  'strawberry-quinoa-breakfast-bars': {
    file: 'strawberry-quinoa-breakfast-bars.webp',
    title: 'Strawberry Quinoa Breakfast Bars',
    alt: 'Three rectangular baked oat and quinoa bars stacked loosely, studded with pieces of red strawberry and raisins.',
  },
  'strawberry-rhubarb-shortcake-with-whipped-mascarpone': {
    file: 'strawberry-rhubarb-shortcake-with-whipped-mascarpone.webp',
    title: 'Strawberry Rhubarb Shortcake',
    alt: 'One split golden buttermilk shortcake biscuit with a sparkling sugar top, filled and topped with glossy strawberry-rhubarb compote and a generous swirl of whipped mascarpone cream.',
  },
  'strawberry-rhubarb-yogurt-pops': {
    file: 'strawberry-rhubarb-yogurt-pops.webp',
    title: 'Strawberry Rhubarb Yogurt Pops',
    alt: 'Four frozen pink yogurt ice pops on wooden sticks laid side by side, flecked with tiny bits of red strawberry and rhubarb.',
  },
  'strawberry-summer-cake': {
    file: 'strawberry-summer-cake.webp',
    title: 'Strawberry Summer Cake',
    alt: 'One generous wedge of golden butter cake with halved strawberries sunk into its sugary, crackly top, with a spoonful of whipped cream at the side.',
  },
  'strozzapreti-with-spinach-and-preserved-lemon': {
    file: 'strozzapreti-with-spinach-and-preserved-lemon.webp',
    title: 'Strozzapreti with Preserved Lemon & Spinach',
    alt: 'A bowl of twisted strozzapreti pasta glossy with lemony brown butter, tossed with wilted spinach and bits of preserved lemon, topped with a scattering of crisp golden garlic-chili panko crumbs.',
  },
  'stuffed-shells-filled-with-spinach-and-ricotta': {
    file: 'stuffed-shells-filled-with-spinach-and-ricotta.webp',
    title: 'Spinach & Ricotta Stuffed Shells',
    alt: 'Three baked jumbo pasta shells filled with green-flecked ricotta and spinach, nestled in red tomato sauce under a browned layer of melted mozzarella.',
  },
  'sugar-cookie': {
    file: 'sugar-cookie.webp',
    title: 'Sugar Cookies',
    alt: 'Five rolled cut-out sugar cookies in simple shapes (round and star), flat and pale with lightly golden edges, arranged in a loose overlapping row.',
  },
  'sun-dried-tomato-chicken-orzo': {
    file: 'sun-dried-tomato-chicken-orzo.webp',
    title: 'Sun-Dried Tomato Chicken Orzo Bake',
    alt: 'A generous spoonful of creamy baked orzo with pieces of chicken, chopped spinach and red sun-dried tomatoes, swirled with melted garlic-herb cheese.',
  },
  'sun-dried-tomato-pasta-with-chicken-and-mozzarella': {
    file: 'sun-dried-tomato-pasta-with-chicken-and-mozzarella.webp',
    title: 'Sun-Dried Tomato Chicken Pasta',
    alt: 'A bowl of penne in a light pink-tinged cream sauce with tender chicken pieces, wilted spinach and red sun-dried tomatoes, with strands of melted mozzarella and fresh basil.',
  },
  'super-lemony-olive-oil-cake': {
    file: 'super-lemony-olive-oil-cake.webp',
    title: 'Super Lemony Olive Oil Cake',
    alt: 'One tall wedge of golden olive oil cake with a moist, tender yellow crumb and a crackly sugar-crusted top.',
  },
  'sweet-and-spicy-spareribs-with-korean-barbecue-sauce': {
    file: 'sweet-and-spicy-spareribs-with-korean-barbecue-sauce.webp',
    title: 'Sweet and Spicy Spareribs',
    alt: 'A stack of five individual pork spareribs lacquered in a sticky, glossy deep red gochujang-honey glaze, with lime wedges at the side.',
  },
  'sweet-and-white-potato-gratin': {
    file: 'sweet-and-white-potato-gratin.webp',
    title: 'Sweet and White Potato Gratin',
    alt: 'One neat square portion of gratin showing alternating thin layers of orange sweet potato and pale yellow Yukon Gold potato in cream, under a golden-brown crust of Gruyère and Parmesan.',
  },
  'sweet-chili-chicken-sliders': {
    file: 'sweet-chili-chicken-sliders.webp',
    title: 'Sweet Chili Chicken Sliders',
    alt: 'Three small sliders on soft golden Hawaiian rolls, each filled with a glossy sweet chili-glazed chicken thigh and a crunchy Asian-style slaw.',
  },
  'sweet-potato-fries': {
    file: 'sweet-potato-fries.webp',
    title: 'Sweet Potato Fries',
    alt: 'A loose pile of long, crisp-edged orange sweet potato fries dusted with paprika, garlic and sea salt.',
  },
  'sweet-potato-latkes': {
    file: 'sweet-potato-latkes.webp',
    title: 'Potato Latkes',
    alt: 'Four crisp golden-orange sweet potato pancakes fanned in an overlapping row, lacy edges visible, with a spoonful of applesauce at the side.',
  },
  'sweet-potato-sausage-breakfast-casserole': {
    file: 'sweet-potato-sausage-breakfast-casserole.webp',
    title: 'Sweet Potato Sausage Breakfast Casserole',
    alt: 'One square slice of baked egg casserole showing diced orange sweet potato, crumbled sausage, red bell pepper and onion set in fluffy egg, with melted white cheddar on top.',
  },
  'sweet-spinach-muffins': {
    file: 'sweet-spinach-muffins.webp',
    title: 'Spinach Muffins',
    alt: 'Four domed, bright green spinach and banana muffins, one broken open to show a soft, moist green crumb.',
  },
  'szechuan-eggplant-and-tofu': {
    file: 'szechuan-eggplant-and-tofu.webp',
    title: 'Chili-Garlic Eggplant and Tofu',
    alt: 'Cubes of roasted eggplant and golden crisp-edged tofu in a glossy, red-brown sweet-sour chili-garlic sauce, scattered with sesame seeds and fresh herbs.',
  },
  tacos: {
    file: 'tacos.webp',
    title: 'Weeknight Ground-Turkey Tacos',
    alt: 'Three crisp taco shells standing upright side by side, filled with seasoned ground turkey and topped with shredded lettuce, diced tomato and shredded cheese.',
  },
  'tahini-sauce': {
    file: 'tahini-sauce.webp',
    title: 'Tahini Sauce',
    alt: 'Golden roasted cauliflower florets piled on a plate and generously drizzled with a smooth, creamy pale tahini sauce.',
  },
  'tamagoyaki-japanese-rolled-omelet': {
    file: 'tamagoyaki-japanese-rolled-omelet.webp',
    title: 'Tamagoyaki (Japanese Rolled Omelet)',
    alt: 'Five thick slices cut from a rectangular rolled omelet, standing in a neat row to show the fine spiral layers inside.',
  },
  'tarragon-potatoes': {
    file: 'tarragon-potatoes.webp',
    title: 'Tarragon Potatoes',
    alt: 'A pile of golden roasted russet potato chunks glistening with butter and olive oil, flecked with dried tarragon.',
  },
  'thai-basil-chicken-pad-kra-pao': {
    file: 'thai-basil-chicken-pad-kra-pao.webp',
    title: 'Holy Basil Chicken (Pad Kra Pao)',
    alt: 'A mound of white jasmine rice beside a pile of glossy stir-fried ground chicken with holy basil and chiles, topped with a crisp-edged fried egg with a runny yolk.',
  },
  'thai-basil-ginger-spritzer': {
    file: 'thai-basil-ginger-spritzer.webp',
    title: 'Thai Basil-Ginger Spritzer',
    alt: 'A glass of pale golden sparkling Prosecco with fine bubbles, a Thai basil sprig and a lime wedge in the glass.',
  },
  'thai-basil-noodles': {
    file: 'thai-basil-noodles.webp',
    title: 'Thai Basil Noodles',
    alt: 'A pile of wide, glossy dark soy-tinted rice noodles tossed with ground pork, strips of bell pepper, chiles and plenty of Thai basil, with a lime wedge at the side.',
  },
  'thai-chicken-curry': {
    file: 'thai-chicken-curry.webp',
    title: 'Thai Red Chicken Curry',
    alt: 'A shallow bowl of creamy orange-red coconut curry with tender sliced chicken thigh, strips of red bell pepper and pale bamboo shoots, a sheen of red oil on the surface.',
  },
  'thai-inspired-chicken-meatball-soup': {
    file: 'thai-inspired-chicken-meatball-soup.webp',
    title: 'Thai-Inspired Chicken Meatball Soup',
    alt: 'A bowl of creamy pale coconut broth holding five browned chicken meatballs flecked with cilantro, with wilted spinach leaves and a lime wedge at the edge.',
  },
  'thai-mango-salad': {
    file: 'thai-mango-salad.webp',
    title: 'Thai Green Mango Salad',
    alt: 'A loose, tall mound of thin pale green mango matchsticks tossed with scallion, torn Thai basil, mint and cilantro, scattered with chopped roasted peanuts and thin red chili slices.',
  },
  'thai-red-curry-shrimp': {
    file: 'thai-red-curry-shrimp.webp',
    title: 'Thai Red Curry Shrimp',
    alt: 'A shallow bowl of creamy orange-red curry with plump pink shrimp, onion wedges and thin red pepper strips, beside a neat mound of white jasmine rice.',
  },
  'the-best-belgian-waffles': {
    file: 'the-best-belgian-waffles.webp',
    title: 'Belgian Waffles',
    alt: 'Two thick, round deep-pocket Belgian waffles slightly overlapping, golden and crisp, with maple syrup pooling in the squares and a spoonful of ruby cranberry sauce on top.',
  },
  'the-easiest-spinach-lasagna': {
    file: 'the-easiest-spinach-lasagna.webp',
    title: 'Spinach Lasagna',
    alt: 'One neat, tall square slice of lasagna showing layers of pasta, creamy ricotta and green spinach and red marinara, topped with browned, bubbled mozzarella.',
  },
  'the-moistest-chocolate-mug-cake': {
    file: 'the-moistest-chocolate-mug-cake.webp',
    title: 'Chocolate Mug Cake',
    alt: 'A single dark chocolate cake risen just above the rim of a mug, its domed top lightly dusted with powdered sugar.',
  },
  'the-new-england-express': {
    file: 'the-new-england-express.webp',
    title: 'New England Express',
    alt: 'A single tall drink of cloudy amber apple cider punch over ice, topped with a little club soda, a lime slice and a fresh thyme sprig tucked in the glass.',
  },
  'the-original-rice-krispies-treatstm': {
    file: 'the-original-rice-krispies-treatstm.webp',
    title: 'Crisp Rice Marshmallow Treats',
    alt: 'Five neat square crisp rice marshmallow treats stacked loosely, one broken to show the chewy, stretchy marshmallow strands.',
  },
  'thit-kho-vietnamese-caramelized-pork': {
    file: 'thit-kho-vietnamese-caramelized-pork.webp',
    title: 'Thit Kho (Vietnamese Caramelized Pork)',
    alt: 'A shallow bowl of glossy, deep amber caramelized pork cubes with soft halved shallots and whole garlic cloves in a little dark sticky sauce.',
  },
  'three-herb-chicken-and-mushrooms': {
    file: 'three-herb-chicken-and-mushrooms.webp',
    title: 'Three-Herb Chicken & Mushrooms',
    alt: 'Three roasted bone-in chicken thighs with crisp golden skin sitting on top, surrounded by a creamy brown mushroom sauce with quartered cremini mushrooms and green herb flecks.',
  },
  'tom-kha-gai-coconut-chicken-soup': {
    file: 'tom-kha-gai-coconut-chicken-soup.webp',
    title: 'Tom Kha Gai (Galangal Coconut Chicken Soup)',
    alt: 'A bowl of creamy pale coconut broth with tender sliced chicken, mushrooms and tomato wedges, with a few lemongrass pieces, lime leaves and a dried red chile floating on top.',
  },
  'tomato-and-goat-cheese-tart': {
    file: 'tomato-and-goat-cheese-tart.webp',
    title: 'Heirloom Tomato & Goat Cheese Tart',
    alt: 'A round, rustic flaky-crust tart covered with overlapping slices of red, yellow and green heirloom tomatoes over a creamy goat cheese and ricotta layer, one wedge cut and slightly pulled out.',
  },
  'tomato-cobbler-with-cornmeal-cheddar-biscuits': {
    file: 'tomato-cobbler-with-cornmeal-cheddar-biscuits.webp',
    title: 'Tomato Cobbler with Cornmeal-Cheddar Biscuits',
    alt: 'A baking dish of jammy, bubbling-thick cherry tomatoes and red onion, topped with six golden cornmeal-cheddar biscuits, one spoonful scooped out to show the red filling.',
  },
  'tomato-soup': {
    file: 'tomato-soup.webp',
    title: 'Tomato Soup',
    alt: 'A full bowl of rich, smooth, orange-red tomato soup with a swirl of half-and-half on the surface and a little black pepper.',
  },
  'tonkotsu-style-ramen': {
    file: 'tonkotsu-style-ramen.webp',
    title: 'Tonkotsu-Style Ramen (Weekend Project)',
    alt: 'A deep bowl of milky, opaque pork broth with springy noodles, two slices of tender pork, a halved soft-boiled egg with a jammy yolk, a bundle of greens and sliced scallion arranged on top.',
  },
  'tuna-poke-bowls': {
    file: 'tuna-poke-bowls.webp',
    title: 'Tuna Poke Bowls with Chile and Cucumber Salad',
    alt: 'A bowl of white sushi rice topped in neat sections with glossy deep red diced tuna, diced avocado, red-flecked cucumber salad and green edamame, with a few strips of nori tucked in.',
  },
  'turkey-burgers': {
    file: 'turkey-burgers.webp',
    title: 'Turkey Burgers',
    alt: 'One turkey burger on a soft bun with melted Swiss cheese, sliced avocado and baby spinach, the top bun slightly askew to show the layers.',
  },
  'turkey-pan-gravy': {
    file: 'turkey-pan-gravy.webp',
    title: 'Turkey Pan Gravy',
    alt: 'Three slices of roast turkey breast fanned on a plate, generously ladled with smooth, glossy brown gravy pooling around them.',
  },
  'tuscan-spaghetti-squash': {
    file: 'tuscan-spaghetti-squash.webp',
    title: 'Tuscan Spaghetti Squash',
    alt: 'A halved spaghetti squash shell filled with creamy golden squash strands tossed with wilted spinach, halved cherry tomatoes and crisp bacon pieces, topped with grated Parmesan.',
  },
  'tzatziki-sauce': {
    file: 'tzatziki-sauce.webp',
    title: 'Dill Tzatziki',
    alt: 'A shallow bowl of thick white yogurt dip swirled with the back of a spoon, flecked with green cucumber and dill, with a drizzle of olive oil pooling in the swirls.',
  },
  'vanilla-earl-grey-overnight-oats': {
    file: 'vanilla-earl-grey-overnight-oats.webp',
    title: 'Vanilla Earl Grey Overnight Oats',
    alt: 'A bowl of creamy overnight oats with a thin honey drizzle and crumbled stroopwafel pieces.',
  },
  'vegan-caesar-pasta-salad': {
    file: 'vegan-caesar-pasta-salad.webp',
    title: 'Vegan Caesar Pasta Salad',
    alt: 'A generous mound of spiral rotini and chopped romaine coated in creamy Caesar dressing, with roasted chickpeas, halved cherry tomatoes and avocado slices on top.',
  },
  'vegetable-minestrone': {
    file: 'vegetable-minestrone.webp',
    title: 'Vegetable Minestrone',
    alt: 'A full bowl of chunky tomato broth with white beans, small pasta, diced carrot, celery and seasonal vegetables.',
  },
  'vegetable-muffin': {
    file: 'vegetable-muffin.webp',
    title: 'Vegetable Green Muffins',
    alt: 'Four domed, dark cocoa-brown muffins without liners, one broken in half to show a moist crumb flecked with green spinach and orange carrot.',
  },
  'vietnamese-grilled-chicken': {
    file: 'vietnamese-grilled-chicken.webp',
    title: 'Vietnamese-Inspired Lemongrass Chicken',
    alt: 'Two flattened grilled chicken thighs, one sliced into strips, with glossy caramelized char marks, scattered with chopped herbs, a lime wedge on the side.',
  },
  'vietnamese-spring-rolls': {
    file: 'vietnamese-spring-rolls.webp',
    title: 'Vietnamese Fresh Spring Rolls (Goi Cuon)',
    alt: 'Three translucent rice paper rolls, one cut in half on the diagonal, showing pink shrimp halves, vermicelli, lettuce, herbs, carrot and cucumber through the wrapper, beside a small dish of peanut-hoisin sauce.',
  },
  'vieux-carre': {
    file: 'vieux-carre.webp',
    title: 'Vieux Carré',
    alt: 'A stirred, clear deep amber cocktail over one large ice cube with a lemon twist resting on the rim.',
  },
  'warm-pita-bread': {
    file: 'warm-pita-bread.webp',
    title: 'Warm, Soft Pita Bread',
    alt: 'Four soft, round pita breads, two folded in half and stacked over two whole ones, lightly brushed with olive oil.',
  },
  'warm-roasted-veggie-salad-with-maple-dijon-vinaigrette': {
    file: 'warm-roasted-veggie-salad-with-maple-dijon-vinaigrette.webp',
    title: 'Warm Roasted Veggie Salad with Maple-Dijon Vinaigrette',
    alt: 'A loose pile of chopped curly kale topped with caramelized sweet potato cubes, halved roasted Brussels sprouts and soft red onion, glistening with a golden maple-Dijon vinaigrette.',
  },
  'warm-spiced-butternut-squash-soup': {
    file: 'warm-spiced-butternut-squash-soup.webp',
    title: 'Spiced Butternut Squash Soup',
    alt: 'A full bowl of velvety, bright orange butternut squash soup with a small swirl of olive oil and a few thyme leaves.',
  },
  'whipped-feta-with-honey': {
    file: 'whipped-feta-with-honey.webp',
    title: 'Whipped Feta with Honey and Pistachios',
    alt: 'A shallow bowl of fluffy whipped white feta spread in a wide swirl, drizzled with golden honey and olive oil, scattered with chopped green pistachios, dill and a dusting of red paprika.',
  },
  'whiskey-sour': {
    file: 'whiskey-sour.webp',
    title: 'Whiskey Sour',
    alt: 'A rocks glass of pale amber whiskey sour over ice with a thin white foam and drops of bitters, garnished with an orange slice and a cherry.',
  },
  'white-chicken-chili': {
    file: 'white-chicken-chili.webp',
    title: 'White Chicken Chili with Hominy',
    alt: 'A bowl of creamy white chicken chili with shredded chicken, white beans and hominy, topped with sour cream, sliced scallions and a lime wedge.',
  },
  'whole-spelt-pumpkin-muffins': {
    file: 'whole-spelt-pumpkin-muffins.webp',
    title: 'Whole Spelt Pumpkin Muffins',
    alt: 'Four domed, deep orange-brown pumpkin muffins, one broken in half to show a moist, tender spiced crumb.',
  },
  'whole-wheat-muffins-fruit-nut-or-berry': {
    file: 'whole-wheat-muffins-fruit-nut-or-berry.webp',
    title: 'Whole-Wheat Fruit Muffins',
    alt: 'Four golden domed muffins dotted with blueberries, one broken in half to show a tender crumb studded with juicy berries.',
  },
  'yaki-udon': {
    file: 'yaki-udon.webp',
    title: 'Yaki Udon',
    alt: 'Thick glossy udon noodles tossed with browned ground pork, cabbage, carrot matchsticks and scallion.',
  },
  'yakisoba-japanese-stir-fried-noodles': {
    file: 'yakisoba-japanese-stir-fried-noodles.webp',
    title: 'Chicken Yakisoba',
    alt: 'A mound of thin wheat noodles coated in a glossy brown sauce, tossed with sliced chicken, cabbage, carrot matchsticks, onion, mushrooms and scallion lengths.',
  },
  'yellow-cake-with-chocolate-frosting': {
    file: 'yellow-cake-with-chocolate-frosting.webp',
    title: 'Yellow Cake with Chocolate Frosting',
    alt: 'One tall slice of two-layer yellow cake standing upright, showing a tender golden crumb with a thick layer of chocolate frosting between the layers and swirled over the top and side.',
  },
  'yogurt-dipping-sauce': {
    file: 'yogurt-dipping-sauce.webp',
    title: 'Yogurt Dipping Sauce',
    alt: 'A small bowl of smooth, thick white yogurt sauce flecked with green cilantro and parsley, topped with lemon zest and a light pinch of ground cumin.',
  },
  'zucchini-herb-fritters-with-garlic-yogurt': {
    file: 'zucchini-herb-fritters-with-garlic-yogurt.webp',
    title: 'Zucchini Herb Fritters',
    alt: 'Four golden, crisp-edged zucchini and potato fritters stacked slightly overlapping, with a spoonful of mint garlic yogurt on top.',
  },
  'zucchini-noodles-with-avocado-pesto-and-shrimp': {
    file: 'zucchini-noodles-with-avocado-pesto-and-shrimp.webp',
    title: 'Zucchini Noodles with Avocado & Shrimp',
    alt: 'A twirled nest of bright green zucchini noodles coated in creamy pale green avocado pesto, topped with six seared pink shrimp and a few chopped pistachios.',
  },
  'zuppa-toscana': {
    file: 'zuppa-toscana.webp',
    title: 'Zuppa Toscana',
    alt: 'A full bowl of creamy broth with crumbled browned Italian sausage, tender potato cubes and dark green kale.',
  },
};
