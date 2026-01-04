# Contributing to Silton Mise

This document defines the operational mandates and best practices for working on the `silton-mise` project. Adherence ensures consistency, quality, and stability.

## 1. Safety & Verification (CRITICAL)
- **Verify First:** NEVER commit code without successfully running `npm run build`. If the build fails, the task is not complete.
- **Read First:** ALWAYS read a file's current content before editing to ensure context is accurate. Do not overwrite code based on assumptions.
- **No Secrets:** Never hardcode secrets, keys, or passwords.

## 2. Git Workflow
- **Atomic Commits:** Create small, focused commits with descriptive messages (e.g., "Fix: YAML escaping", "Feat: Add nutrition parser").
- **Push Immediately:** Push to `origin` immediately after completing a logical unit of work. Do not accumulate large stacks of unpushed commits.
- **Clean Workspace:** Delete temporary scripts, logs, or debug files before committing.

## 3. Code Quality & Formatting
- **Automated Formatting:** Run `npm run format` to automatically format code using Prettier before committing.
- **No Placeholders:** Never leave "TODO", "lorem ipsum", or stubbed logic in committed code.
- **Dependency Awareness:** Check `package.json` before installing new packages to avoid redundancy.

## 4. The Silton Standard (Recipe Guidelines)

Every recipe in this library must be a "Keeper." We prioritize flavor layering, texture, and reliability over shortcuts.

### A. Categorization (The "Context" Filter)
Every recipe must be tagged with one of the following `category` values:
1.  **`speed` (Weekday Survival):** <30 mins active time. High reliability. Low cleanup. (e.g., Stir-frys, Tacos).
2.  **`fuel` (Clean & Green):** Health focus. Protein-dense, veggie-forward, lighter sauces. (e.g., Poke, Grilled Chicken).
3.  **`comfort` (Family Sunday):** Rich sauces, braises, crowd-pleasers. (e.g., Marsala, Meatloaf).
4.  **`project` (Weekend/Heritage):** Tradition, baking, feasts, cocktails. (e.g., Thanksgiving, Cakes).

### B. The "Complete Meal" Rule
A recipe file is not just instructions for a main dish; it is a **Menu**.
*   **Requirement:** Every recipe MUST have a `## Serving Suggestions` section.
*   **Example:** "Serve with Jasmine Rice and Smashed Cucumber Salad."
*   **Balance:** If the main is heavy (Alfredo), the side MUST be acid/green (Arugula Salad).

### C. Technique & Texture Mandates
*   **No Boiled Meat:** Meat should be seared, roasted, or poached gently. Never boiled in plain water.
*   **The Acid Finish:** Most savory dishes require a hit of acid (lemon, lime, vinegar) at the end to brighten the fat.
*   **Texture Constraints:**
    *   **No Water Chestnuts:** Replace with diced celery or apple.
    *   **No Capers:** Omit or replace with lemon zest/salt.
    *   **No "Mushy" Veg:** Roast veggies instead of steaming/boiling where possible (especially Squash).
    *   **Nut-Free Crunch:** Use seeds (sunflower/sesame) or panko instead of nuts in savory dishes.

### D. Source Authority
*   **Trusted Sources:** Serious Eats (Kenji/Daniel Gritzer), Bon Appétit, Alton Brown, Rick Bayless, Smitten Kitchen.
*   **Avoid:** Generic "content farm" recipes that use cream-of-mushroom soup or seasoning packets.

## 5. Documentation
- **Keep it Fresh:** If you change the architecture, scripts, or usage commands, update `README.md` immediately.