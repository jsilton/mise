import json,pathlib,re,collections
D=pathlib.Path('tmp/paprika-sync-2026-10-05');p=json.loads((D/'paprika.json').read_text());ms=json.loads((D/'matches.json').read_text());byuid={x['uid']:x for x in ms}
# Distinct versions that were hidden by title-only matching.
splits={
 'https://www.yummytoddlerfood.com/chocolate-zucchini-muffins-with-blueberries/':('chocolate-protein-zucchini-muffins','Chocolate Protein Zucchini Muffins'),
 'https://thewoksoflife.com/coconut-curry-shrimp/':('thai-red-curry-shrimp','Thai Red Curry Shrimp'),
 'https://allthehealthythings.com/sausage-breakfast-casserole/':('sweet-potato-sausage-breakfast-casserole','Sweet Potato Sausage Breakfast Casserole'),
 'http://damndelicious.net/2016/12/09/slow-cooker-chicken-wild-rice-soup/':('creamy-slow-cooker-chicken-and-wild-rice-soup','Creamy Slow-Cooker Chicken and Wild Rice Soup'),
 'https://food52.com/recipes/33481-key-lime-pie':('key-lime-pie-with-lime-zest','Key Lime Pie with Lime Zest'),
 'https://thewoksoflife.com/pad-see-ew/':('beef-pad-see-ew','Beef Pad See Ew')
}
renames={
 'Basic Crêpes':('basic-crepes','Basic Crêpes'),
 'Best Chocolate Chip Cookies':('chocolate-chip-walnut-cookies','Chocolate Chip Walnut Cookies'),
 'Best Slow Cooker Pulled Pork':('orange-and-paprika-pulled-pork','Orange and Paprika Pulled Pork'),
 'In the Park':('in-the-park','In the Park'),
 'Macaroni and Cheese':('gwock-family-macaroni-and-cheese','Gwock Family Macaroni and Cheese'),
 "My Grandma's Fluffy Cast Iron Biscuits":('cast-iron-buttermilk-biscuits','Cast-Iron Buttermilk Biscuits'),
 'Paleo Roasted Red Pepper Sweet Potato Soup':('roasted-red-pepper-and-sweet-potato-soup','Roasted Red Pepper and Sweet Potato Soup'),
 'Quick Cauliflower Alfredo Sauce':('cheesy-cauliflower-sauce','Cheesy Cauliflower Sauce'),
 'Sticky Peking Meatballs & Coconut Jasmine Rice':('sticky-peking-meatball-rice-bowls','Sticky Peking Meatball Rice Bowls'),
 'Strawberry Ice Cream':('eggless-strawberry-ice-cream','Eggless Strawberry Ice Cream'),
 'Stuffed Shells':('eggless-spinach-and-ricotta-stuffed-shells','Eggless Spinach and Ricotta Stuffed Shells'),
 'The ONLY DUMPLING RECIPE YOU’LL EVER NEED':('pork-and-greens-dumplings','Pork and Greens Dumplings'),
 'Doc Chey’s Chinese Lomein':('doc-cheys-chicken-lo-mein','Doc Chey’s Chicken Lo Mein'),
 'Stuffed Shells (Gemini)':('stuffed-shells-gemini','Stuffed Shells (Gemini)'),
 'Veggie Quesadillas':('veggie-quesadillas','Veggie Quesadillas'),
 "YinYin's Wontons":('yinyins-wontons',"YinYin’s Wontons")
}
rows=[]
for r in p:
 if r.get('source_url') in splits:
  slug,title=splits[r['source_url']];action='add'
 elif r['uid'] in byuid:
  slug=byuid[r['uid']]['slug'];title=None;action='shared'
 else:
  slug,title=renames.get(r['name'],(re.sub('[^a-z0-9]+','-',r['name'].lower()).strip('-'),r['name']));action='add'
 if r['name'] in ('Stuffed Shells (Gemini)','Veggie Quesadillas',"YinYin's Wontons"):
  action='draft'
 rows.append(dict(uid=r['uid'],paprikaName=r['name'],slug=slug,action=action,**({'title':title} if title else {})))
pathlib.Path('docs/paprika-sync').mkdir(exist_ok=True)
plan={'date':'2026-10-05','source':'My Recipes.zip / My Recipes.paprikarecipes','sourceRecipeCount':450,'recipes':rows}
pathlib.Path('docs/paprika-sync/2026-10-05-plan.json').write_text(json.dumps(plan,ensure_ascii=False,indent=2)+'\n')
print(collections.Counter(r['action'] for r in rows));print('New:',[(r['slug'],r['title']) for r in rows if r['action']=='add'])
