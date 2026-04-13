#\!/usr/bin/env python3
import os
import json
import re
from pathlib import Path

recipes_dir = Path(__file__).parent.parent / "src" / "content" / "recipes"

generic_phrases = [
    r"^this is a classic",
    r"^a simple",
    r"^a traditional",
    r"^this recipe is",
    r"^this is a",
    r"^a quick",
    r"^an easy",
    r"^this dish",
    r"^here's a",
    r"^try this",
    r"^a great",
    r"^perfect for",
]

def extract_chef_note(content):
    match = re.search(r"##\s+Chef's Note\s*\n([\s\S]*?)(?=\n##|\Z)", content)
    return match.group(1).strip() if match else None

def analyze_note(note):
    if note is None:
        return {"length": 0, "isGeneric": True, "reason": "Missing Chef's Note section"}
    
    length = len(note)
    first_sentence = note.split(".")[0]
    
    if length < 150:
        return {"length": length, "isGeneric": True, "reason": f"Very short ({length} chars)"}
    
    for phrase in generic_phrases:
        if re.match(phrase, first_sentence, re.IGNORECASE):
            return {"length": length, "isGeneric": True, "reason": f'Generic opening: "{first_sentence[:60]}..."'}
    
    cultural_patterns = [
        r"\b(Chinese|Japanese|Italian|Mexican|Indian|Thai|Vietnamese|Korean|French|Greek|Middle Eastern|Cantonese|Sichuan|Mediterranean|Caribbean|Filipino|Brazilian|American|Southern|Jewish|Asian|African|European)\b",
        r"\b(home cooks?|tradition|classic|origins?|culture|heritage|technique|grandmother|abuela|nonna)\b",
        r"\b(indigenous|regional|local|authentic|ancestral)\b",
    ]
    
    has_cultural_markers = any(re.search(pat, note, re.IGNORECASE) for pat in cultural_patterns)
    
    if not has_cultural_markers and length < 250:
        return {"length": length, "isGeneric": True, "reason": "Lacks cultural/regional context and is relatively short"}
    
    return {"length": length, "isGeneric": False, "reason": None}

skeletal_recipes = []

for file in sorted(recipes_dir.glob("*.md")):
    content = file.read_text(encoding="utf-8")
    note = extract_chef_note(content)
    analysis = analyze_note(note)
    
    if analysis["isGeneric"]:
        slug = file.stem
        preview = note[:100].replace("\n", " ") if note else ""
        if note and len(note) > 100:
            preview += "..."
        
        skeletal_recipes.append({
            "slug": slug,
            "length": analysis["length"],
            "preview": preview,
            "reason": analysis["reason"]
        })

skeletal_recipes.sort(key=lambda x: x["length"])
print(json.dumps(skeletal_recipes, indent=2))
