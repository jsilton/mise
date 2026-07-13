import re

filepath = "public/recipes/all-recipes-combined.txt"
with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

recipes = text.split("======================================================================")

def get_name(r):
    m = re.search(r"RECIPE:\s*(.*)", r)
    return m.group(1).strip() if m else "Unknown"

for r in recipes:
    if not r.strip(): continue
    name = get_name(r)
    lower = r.lower()
    
    # 1. Culinary Chemistry & Burn Risks
    # High-Sugar Searing
    if any(s in lower for s in ["honey", "molasses", "brown sugar", "maple syrup", "sweet dark soy sauce"]):
        if any(h in lower for h in ["sear", "grill", "smoking hot pan", "high heat"]):
            if "marin" in lower:
                if not any(w in lower for w in ["wipe", "batch", "lower", "medium"]):
                    print(f"1A: {name}")

    # Aromatics Timing
    if re.search(r'sauté.*garlic.*(1|2|3|one|two|three) minut', lower) or re.search(r'garlic.*sauté.*(1|2|3|one|two|three) minut', lower):
        print(f"1B: {name}")

    # Spice Blooming
    if any(s in lower for s in ["curry powder", "turmeric", "cumin", "paprika", "garam masala"]):
        if re.search(r'(add|stir).*water.*(curry|turmeric|cumin|paprika|garam masala)', lower) or \
           re.search(r'(add|stir).*(curry|turmeric|cumin|paprika|garam masala).*water', lower):
           print(f"1C: {name}")

    # 2. Sauce Emulsification & Temperature Control
    # Starch Emulsions
    if any(p in lower for p in ["alfredo", "carbonara", "ricotta", "pesto"]):
        if "pasta" in lower and "reserve" not in lower and "cooking water" not in lower and "pasta water" not in lower:
            print(f"2A: {name}")

    # Dairy Curdling
    if any(d in lower for d in ["sour cream", "yogurt", "cream cheese", "ricotta"]):
        if re.search(r'stir.*(sour cream|yogurt|cream cheese|ricotta).*high heat', lower) and "off the heat" not in lower:
            print(f"2B: {name}")
            
    # 3. Meat Preparation & Texture Mechanics
    # Tempering
    if any(t in lower for t in ["steak", "whole chicken breast", "pork tenderloin", "roast"]):
        if "sear" in lower or "grill" in lower:
            if "room temperature" not in lower and "temper" not in lower:
                print(f"3A: {name}")

    # Resting
    if ("roast" in lower or "sear" in lower) and "slice" in lower:
        if "rest" not in lower:
            print(f"3B: {name}")

    # Velveting
    if "stir-fry" in lower or "stir fry" in lower:
        if "chicken breast" in lower or "beef" in lower:
            if "cornstarch" not in lower and "velvet" not in lower:
                print(f"3C: {name}")
                
    # 4. Portion, Ratio, and Scaling Sanity
    # Ingredient-to-Serving Discrepancies
    if re.search(r'serves (4|5|6|8)', lower):
        if "1 chicken breast" in lower or "1/2 cup rice" in lower or "1/2 cup of rice" in lower:
            print(f"4A: {name}")

    # Liquid-to-Starch Ratios
    if "1 cup rice" in lower and "4 cups water" in lower and "steam" not in lower:
        print(f"4B: {name}")

    # 5. Cross-Linking & Sourcing Omissions
    # Unlinked Base Recipes
    for base in ["sushi rice", "crispy shallots", "naan", "tomato soup"]:
        if base in lower and "recipe:" not in lower and "master-" + base.replace(" ", "-") not in lower:
            if "[/mise/recipes" not in lower:
                print(f"5A: {name}")

    # Double-Seasoning Risks
    if "seasoned sushi rice" in lower and ("vinegar" in lower or "sugar" in lower):
        print(f"5B: {name}")
        
    # 6. Vague Instructions & Textual Typos
    if "until done" in lower or "until finished" in lower:
        print(f"6A: {name}")

    if " the the " in lower:
        print(f"6B: {name}")
    if re.search(r'[a-z]\.\s\s[a-zA-Z]', r):
        print(f"6C: {name}")
    if re.search(r'[a-zA-Z]\n\d\.', r): # lacking terminal periods on steps
        print(f"6D: {name}")

