import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const dayProfiles = {
  Monday: { name: "Quick Recovery", minTime: 20, maxTime: 30, density: ["light", "moderate"] },
  Tuesday: { name: "One-Pot Night", minTime: 25, maxTime: 35, density: ["moderate"] },
  Wednesday: { name: "Crowd-Pleaser", minTime: 30, maxTime: 40, density: ["moderate", "hearty"] },
  Thursday: { name: "Adventure Lite", minTime: 30, maxTime: 45, density: ["moderate", "hearty"] },
  Friday: { name: "Easy/Fun", minTime: 15, maxTime: 25, density: ["light", "moderate", "hearty"] },
  Saturday: { name: "Project Day", minTime: 60, maxTime: 120, density: ["light", "moderate", "hearty"] },
  Sunday: { name: "Prep + Feast", minTime: 45, maxTime: 90, density: ["moderate", "hearty"] }
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const args = process.argv.slice(2);
const seasonArg = args.find(arg => arg.startsWith("--season="))?.split("=")[1] || null;
const season = seasonArg && ["spring", "summer", "fall", "winter"].includes(seasonArg) ? seasonArg : null;

function parseTime(timeStr) {
  if (timeStr === undefined || timeStr === null || timeStr === "") return 0;
  const match = timeStr.match(/(\d+)\s*min/);
  return match ? parseInt(match[1], 10) : 0;
}

function loadMeals() {
  const mealsDir = path.join(projectRoot, "src/content/meals");
  const files = fs.readdirSync(mealsDir).filter(f => f.endsWith(".md"));

  const meals = files.map(file => {
    const filePath = path.join(mealsDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const parsed = matter(content);
    const data = parsed.data;

    const activeTime = parseTime(data.totalActiveTime || data.totalCookTime || "0");

    return {
      slug: file.replace(".md", ""),
      title: data.title,
      cuisines: data.cuisines || [],
      occasions: data.occasions || [],
      seasons: data.seasons || ["year-round"],
      nutritionalDensity: data.nutritionalDensity || "moderate",
      totalActiveTime: data.totalActiveTime,
      activeTimeMinutes: activeTime,
      bestFor: data.bestFor || [],
      template: data.template,
      difficulty: data.overallDifficulty || data.difficulty
    };
  });

  return meals;
}

function mealMatchesDayProfile(meal, day, profile) {
  const activeTime = meal.activeTimeMinutes || 0;
  if (activeTime < profile.minTime || activeTime > profile.maxTime) return false;
  if (profile.density && profile.density.indexOf(meal.nutritionalDensity) === -1) return false;
  return true;
}

function isKidFriendly(meal) {
  const kidFriendlyOccasions = ["weeknight", "comfort-food"];
  const hasKidFriendlyOccasion = meal.occasions.some(occ => 
    kidFriendlyOccasions.some(kf => occ.toLowerCase().indexOf(kf.toLowerCase()) >= 0)
  );
  const isComfort = meal.difficulty !== "advanced";
  return hasKidFriendlyOccasion || isComfort;
}

function violatesCuisineRule(plan, day, meal) {
  const dayIndex = days.indexOf(day);
  const windowStart = Math.max(0, dayIndex - 3);
  for (let i = windowStart; i < dayIndex; i++) {
    const prevDay = days[i];
    if (plan[prevDay] === undefined || plan[prevDay] === null) continue;
    const prevMeal = plan[prevDay];
    const overlap = meal.cuisines.some(c => prevMeal.cuisines.indexOf(c) >= 0);
    if (overlap) return true;
  }
  return false;
}

function scoreMeal(meal, day, plan, profile, usedSlugs) {
  if (!mealMatchesDayProfile(meal, day, profile)) return -1;
  if (violatesCuisineRule(plan, day, meal)) return -2;
  if (usedSlugs.has(meal.slug)) return -3;

  let score = 0;
  const dayIndex = days.indexOf(day);
  if (meal.bestFor && meal.bestFor.some(d => d.toLowerCase() === day.toLowerCase())) score += 10;
  if (season && meal.seasons.indexOf(season) >= 0) {
    score += 5;
  } else if (meal.seasons.indexOf("year-round") >= 0) {
    score += 2;
  }

  const plannedDensities = [];
  for (let idx = 0; idx < dayIndex; idx++) {
    const d = days[idx];
    if (plan[d]) plannedDensities.push(plan[d].nutritionalDensity);
  }
  const densityFreq = plannedDensities.filter(d => d === meal.nutritionalDensity).length;
  score -= densityFreq * 0.5;

  if (dayIndex < 3 && meal.activeTimeMinutes < 30) score += 2;
  if ((dayIndex === 5 || dayIndex === 6) && meal.activeTimeMinutes > 45) score += 2;

  return score;
}

function planWeek() {
  const meals = loadMeals();
  if (meals.length === 0) {
    console.error("No meals found in src/content/meals/");
    process.exit(1);
  }

  const plan = {};
  const kidFriendlyNights = new Set();
  const usedSlugs = new Set();

  for (const day of days) {
    const profile = dayProfiles[day];
    const eligible = meals.filter(m => {
      const score = scoreMeal(m, day, plan, profile, usedSlugs);
      return score >= -1;
    });

    if (eligible.length === 0) {
      console.warn("Warning: No eligible meals for " + day);
      const unused = meals.find(m => !usedSlugs.has(m.slug));
      if (unused) {
        plan[day] = unused;
        usedSlugs.add(unused.slug);
      } else {
        console.error("Error: Cannot plan " + day);
        process.exit(1);
      }
    } else {
      const scored = eligible.map(m => ({ meal: m, score: scoreMeal(m, day, plan, profile, usedSlugs) })).sort((a, b) => b.score - a.score);
      const winner = scored[0].meal;
      plan[day] = winner;
      usedSlugs.add(winner.slug);
      if (isKidFriendly(winner)) kidFriendlyNights.add(day);
    }
  }

  let violationCount = 0;
  if (kidFriendlyNights.size < 3) {
    console.warn("Warning: Only " + kidFriendlyNights.size + " kid-friendly nights");
    violationCount++;
  }

  for (let i = 1; i < days.length; i++) {
    const day = days[i];
    const meal = plan[day];
    const prevMeal = plan[days[i - 1]];
    if (prevMeal && meal) {
      const overlap = meal.cuisines.some(c => prevMeal.cuisines.indexOf(c) >= 0);
      if (overlap) {
        console.warn("Warning: Cuisine repeat on " + day + " (" + meal.cuisines[0] + ")");
        violationCount++;
      }
    }
  }

  return { plan, kidFriendlyNights, violationCount };
}

function displayPlan(plan, kidFriendlyNights, violationCount) {
  console.log("\n" + "=".repeat(80));
  console.log("WEEKLY MEAL PLAN");
  if (season) console.log("Season: " + season.charAt(0).toUpperCase() + season.slice(1));
  console.log("=".repeat(80) + "\n");

  for (const day of days) {
    const meal = plan[day];
    const kid = kidFriendlyNights.has(day) ? " (kid-friendly)" : "";
    console.log(day.padEnd(10) + " | " + meal.title.padEnd(35) + " | " + meal.nutritionalDensity.padEnd(8) + kid);
    console.log("".padEnd(10) + " | " + meal.cuisines.join(", ").padEnd(35) + " | " + meal.totalActiveTime);
    console.log("");
  }

  console.log("=".repeat(80));
  console.log("Kid-Friendly Nights: " + kidFriendlyNights.size + "/7 (target 3+)");
  if (violationCount === 0) {
    console.log("All constraints satisfied!");
  } else {
    console.log(violationCount + " constraint violations");
  }
  console.log("=".repeat(80) + "\n");
}

const { plan, kidFriendlyNights, violationCount } = planWeek();
displayPlan(plan, kidFriendlyNights, violationCount);
