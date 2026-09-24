from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from pypdf import PdfReader
out='output/pdf/coq-au-vin-dinner-for-six-oclock.pdf'
s=getSampleStyleSheet()
for name,font,size,lead,after in [('TitleX','Helvetica-Bold',23,26,5),('SubX','Helvetica',10,13,7),('HeadX','Helvetica-Bold',11,14,5),('BodyX','Helvetica',10,13,6),('SmallX','Helvetica',8,10,4)]:
 s.add(ParagraphStyle(name=name,fontName=font,fontSize=size,leading=lead,spaceAfter=after))
def p(t,style='BodyX'):return Paragraph(t,s[style])
story=[p('Coq au vin with carrots & rice','TitleX'),p('Serves 4 | Start 3:45 p.m. | Serve 6:00 p.m. | Wide 5-6 qt Dutch oven + rice cooker','SubX'),p('INGREDIENTS','HeadX')]
l='''2 lb thawed boneless chicken thighs, left whole<br/>4 oz bacon, cut into small strips<br/>10 oz frozen pearl onions (small round onions)<br/>10 oz mushrooms, quartered<br/>3 medium carrots (about 250 g), in ½-inch pieces<br/>3 garlic cloves, chopped; 1 tbsp tomato paste<br/>½ tsp fine salt; ½ tsp black pepper'''
r='''2 cups dry red wine, preferably Pinot Noir or Gamay<br/>1-1½ cups unsalted chicken stock, ideally gelatin-rich<br/>1 tsp dried thyme; 1 dried bay leaf<br/>2 tbsp cold unsalted butter; neutral oil as needed<br/>Optional thickener: 1 tbsp each soft butter and flour<br/><b>Rice:</b> 1½ US cups dry white rice (about 280 g),<br/>water per cooker directions; butter and salt to taste'''
t=Table([[p(l),p(r)]],colWidths=[270,270]);t.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),8),('BOTTOMPADDING',(0,0),(-1,-1),4)]));story.append(t)
story.append(p('METHOD & DINNER TIMELINE','HeadX'))
for text in [
'<b>3:45 | Prep.</b> Thaw pearl onions per package, drain and dry thoroughly. Cut vegetables. Pat chicken very dry; season with measured salt and pepper. Refrigerate until searing. Dry surfaces brown better; wet food cools the pan and steams.',
'<b>4:00 | Render bacon.</b> Cook over medium heat for 8-10 minutes until browned and fat renders. Lift out. Leave 2 tbsp fat; supplement with oil if needed.',
'<b>4:10 | Brown chicken.</b> Unfold thighs and sear in two uncrowded batches over medium-high heat: 3-4 minutes on the first side, then 2 minutes on the other. Brown the surface; the centers will finish in the braise. Set aside. Keep the pan residue brown, never black; lower heat if needed. Pour off excess fat, leaving 2 tbsp.',
'<b>4:25 | Brown vegetables.</b> Cook mushrooms 10-12 minutes, letting released water evaporate before browning. Add onions and carrots; cook 6-8 minutes, stirring, until lightly colored. Add garlic, tomato paste and thyme; stir 1 minute.',
'<b>4:45 | Reduce wine.</b> Pour in wine and scrape up brown residue. Simmer uncovered about 10-15 minutes, until the wine volume is roughly halved. This concentrates flavor; it does not remove all alcohol. Add 1 cup stock, bay and bacon. Cover and gently simmer the vegetables for 10 minutes to give the carrots a head start.',
'<b>5:10-5:40 | Gentle braise.</b> Nestle chicken and its juices into the sauce; add stock only if needed to reach halfway to two-thirds up the meat. Cover and maintain slow, occasional bubbles. Check after 20 minutes; allow about 25-35 minutes, until the thickest thighs reach at least 165°F and are tender. Lift out cooked pieces promptly. Check carrots with a knife; if still firm, let them simmer while chicken rests.',
'<b>By 4:45 | Rice cooker.</b> Rinse rice and drain. Use the cooker’s water instructions for that rice and quantity; US cups are not cooker cups. Add optional salt/butter. Run the white-rice cycle, then Keep Warm. Start earlier if its cycle exceeds 65 minutes. Rest covered 10 minutes after cooking, then fluff at serving.',
'<b>5:40-5:55 | Adjust sauce.</b> Lift out chicken and vegetables; discard bay. Skim pooled fat. Simmer uncovered 5-15 minutes until sauce lightly coats a spoon. If flavor is already concentrated but sauce stays thin, mash the optional soft butter and flour together; whisk in a little at a time and simmer 5 minutes. If too salty or sharp, loosen with unsalted stock instead of reducing further.',
'<b>5:55-6:00 | Finish and serve.</b> Return chicken and vegetables; keep hot on very low heat. Just before serving, turn off heat, let bubbling stop, and swirl in the 2 tbsp cold butter in pieces for gloss. Taste before adding salt. Do not boil after finishing. Fluff rice and spoon chicken, vegetables and sauce beside or over it.'
]:story.append(p(text))
story.append(p('<b>For this cut:</b> Boneless thighs need a shorter braise than bone-in pieces. Keep them whole and use doneness cues, not the clock alone. With less skin/connective tissue in the pot, gelatin-rich stock or the optional flour thickener helps give the sauce body.','SmallX'))
story.append(p('Adapted from Mise’s coq au vin, with technique comparisons: <link href="https://raymondblanc.com/recipes/coq-au-vin/" color="#333333">Raymond Blanc</link>; <link href="https://www.cordonbleu.edu/news/coq-au-vin-recipe/en" color="#333333">Le Cordon Bleu</link>; <link href="https://www.seriouseats.com/coq-au-vin-chicken-red-wine-braise-recipe" color="#333333">Daniel Gritzer / Serious Eats</link>; <link href="https://www.onceuponachef.com/recipes/coq-au-vin.html" color="#333333">Jenn Segal</link>. Safety: USDA FSIS.','SmallX'))
SimpleDocTemplate(out,pagesize=(612,792),leftMargin=36,rightMargin=36,topMargin=27,bottomMargin=25).build(story)
r=PdfReader(out);print('Pages:',len(r.pages));assert len(r.pages)==1
