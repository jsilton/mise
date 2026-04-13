# Export Formats

The Mise repo includes two export scripts for distributing recipes in standard formats.

## Paprika Recipe Manager Export

**Command:** `npm run export:paprika`

**Output:** `exports/mise-recipes.paprikarecipes`

Exports all recipes as a Paprika-compatible archive. Each recipe is:
- Converted to Paprika's JSON schema
- Gzipped individually
- Packaged into a `.paprikarecipes` ZIP archive

**What's included:**
- Recipe name, ingredients, and directions
- Chef's notes (as `notes` field)
- Cooking times (prep, cook, total) in minutes
- Servings and difficulty level
- Categories (role, vibe, cuisines)
- Nutrition information (if available)
- Source URL back to the online recipe

**To import into Paprika:**
1. Open Paprika app
2. Select "Recipes" > "Import"
3. Choose the `.paprikarecipes` file
4. Recipes will be imported into your library

## JSON-LD (Schema.org) Export

**Command:** `npm run export:jsonld`

**Output:** `exports/mise-recipes-schema.json`

Exports all recipes as a single JSON file containing an array of Schema.org Recipe objects. This format is:
- Standards-compliant (Schema.org Recipe type)
- Searchable by recipe aggregators and search engines
- Machine-readable for integration with other tools

**What's included:**
- Complete recipe metadata
- Chef's notes as description
- Full ingredient lists
- Step-by-step instructions
- Nutrition information
- Keywords (dietary restrictions, occasions, flavor profiles)
- Author and publication date

**Use cases:**
- SEO optimization (recipes discoverable by search engines)
- Recipe aggregator integrations
- Knowledge base imports
- Third-party recipe applications

## Metadata Mapping

Both formats extract and transform the recipe markdown:

| Markdown Section      | Paprika Field         | JSON-LD Field          |
| -------------------- | --------------------- | ---------------------- |
| `title`              | `name`                | `name`                 |
| `## Chef's Note`     | `notes`               | `description`          |
| `## Directions`      | `directions`          | `recipeInstructions`   |
| `ingredients`        | `ingredients`         | `recipeIngredient`     |
| `servings`           | `servings`            | `recipeYield`          |
| `prepTime`           | `prep_time` (mins)    | `prepTime` (ISO 8601)  |
| `cookTime`           | `cook_time` (mins)    | `cookTime` (ISO 8601)  |
| `totalTime`          | `total_time` (mins)   | `totalTime` (ISO 8601) |
| `role`               | (in categories)       | `recipeCategory`       |
| `vibe`               | (in categories)       | (in keywords)          |
| `cuisines`           | (in categories)       | `recipeCuisine`        |
| `difficulty`         | `difficulty`          | (in keywords)          |
| `nutrition`          | `nutritional_info`    | `nutrition`            |

## Notes

- Time strings are parsed from "15 min", "1 hr 30 min" formats
- Ingredient dividers (---Sauce---) are converted to section headers
- Direction steps are extracted by parsing numbered/bold headers
- Nutrition fields are only included if data exists in frontmatter
- All exports use UTC dates
