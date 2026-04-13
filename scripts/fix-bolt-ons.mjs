import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DRY_RUN = process.argv.includes('--dry-run');
const recipesDir = path.join(__dirname, '../src/content/recipes');

const SIGNIFICANT_HEAT_PATTERNS = [
  /habanero/i,
  /ghost pepper/i,
  /thai chili/i,
  /gochugaru/i,
  /serrano/i,
  /scotch bonnet/i,
  /carolina reaper/i,
  /bhut jolokia/i,
];

function hasSignificantHeat(content) {
  const ingredientsMatch = content.match(/^ingredients:\n([\s\S]*?)(?:^[a-z])/m);
  if (ingredientsMatch === null) return false;
  const ingredientsText = ingredientsMatch[1];

  for (const pattern of SIGNIFICANT_HEAT_PATTERNS) {
    if (pattern.test(ingredientsText)) return true;
  }

  const hasSpiceKeywords = /curry|chili|gochujang|sriracha|wasabi|harissa|piri piri|jerk|szechuan/i.test(content);
  if (hasSpiceKeywords === false) return false;

  const spiceLines = ingredientsText.split('\n');
  for (const line of spiceLines) {
    const isMildHeat = /pinch of.*red pepper|pinch of.*cayenne|dash of/i.test(line);
    if (isMildHeat === true) return false;
  }

  return true;
}

function removeBrightnessStep(content) {
  return content.replace(/^\s+\*\*Brightness:\*\*.*$/gm, '');
}

function removeTextureContrastStep(content) {
  return content.replace(/^\s+\*\*Texture Contrast:\*\*.*$/gm, '');
}

function removeKidsHeatBoilerplate(content) {
  return content.replace(/\nFor kids, serve the heat on the side or reduce\/omit the spicy elements\./, '');
}

function processRecipes() {
  const files = fs.readdirSync(recipesDir)
    .filter(f => f.endsWith('.md'))
    .sort();

  let stats = {
    brightnessBoltOnsRemoved: 0,
    brightnessFilesFixed: 0,
    textureContrastBoltOnsRemoved: 0,
    textureContrastFilesFixed: 0,
    kidsHeatRemovedFromMild: 0,
    kidsHeatKeptOnSpicy: 0,
    filesModified: 0,
  };

  const details = {
    brightnessBoltOns: [],
    textureContrastBoltOns: [],
    kidsHeatRemoved: [],
    kidsHeatKept: [],
  };

  for (const filename of files) {
    const filepath = path.join(recipesDir, filename);
    let content = fs.readFileSync(filepath, 'utf8');
    let modified = false;

    const brightnessBoltOns = content.match(/^\s+\*\*Brightness:\*\*.*$/gm);
    if (brightnessBoltOns !== null) {
      const newContent = removeBrightnessStep(content);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        stats.brightnessBoltOnsRemoved += brightnessBoltOns.length;
        stats.brightnessFilesFixed++;
        details.brightnessBoltOns.push(filename);
      }
    }

    const textureContrastBoltOns = content.match(/^\s+\*\*Texture Contrast:\*\*.*$/gm);
    if (textureContrastBoltOns !== null) {
      const newContent = removeTextureContrastStep(content);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        stats.textureContrastBoltOnsRemoved += textureContrastBoltOns.length;
        stats.textureContrastFilesFixed++;
        details.textureContrastBoltOns.push(filename);
      }
    }

    if (content.includes('For kids, serve the heat on the side')) {
      const originalContent = fs.readFileSync(filepath, 'utf8');
      if (hasSignificantHeat(originalContent)) {
        stats.kidsHeatKeptOnSpicy++;
        details.kidsHeatKept.push(filename);
      } else {
        const newContent = removeKidsHeatBoilerplate(content);
        if (newContent !== content) {
          content = newContent;
          modified = true;
          stats.kidsHeatRemovedFromMild++;
          details.kidsHeatRemoved.push(filename);
        }
      }
    }

    if (modified === true) {
      if (DRY_RUN === false) {
        fs.writeFileSync(filepath, content, 'utf8');
      }
      stats.filesModified++;
    }
  }

  return { stats, details };
}

function printReport(result) {
  const { stats, details } = result;

  console.log('\n📋 BOLT-ON FIX REPORT');
  console.log('='.repeat(60));

  console.log('\n🔆 BRIGHTNESS BOLT-ONS');
  console.log(`   Removed from ${stats.brightnessFilesFixed} recipes`);
  if (details.brightnessBoltOns.length > 0) {
    details.brightnessBoltOns.forEach(f => console.log(`   + ${f}`));
  }

  console.log('\n🎨 TEXTURE CONTRAST BOLT-ONS');
  console.log(`   Removed from ${stats.textureContrastFilesFixed} recipes`);
  if (details.textureContrastBoltOns.length > 0) {
    details.textureContrastBoltOns.forEach(f => console.log(`   + ${f}`));
  }

  console.log('\n🌶️  KIDS HEAT BOILERPLATE');
  console.log(`   Removed from ${stats.kidsHeatRemovedFromMild} mild recipes`);
  if (details.kidsHeatRemoved.length > 0) {
    details.kidsHeatRemoved.slice(0, 10).forEach(f => console.log(`   - ${f}`));
    if (details.kidsHeatRemoved.length > 10) {
      console.log(`   ... and ${details.kidsHeatRemoved.length - 10} more`);
    }
  }

  console.log(`\n   Kept on ${stats.kidsHeatKeptOnSpicy} spicy recipes`);
  if (details.kidsHeatKept.length > 0) {
    details.kidsHeatKept.slice(0, 10).forEach(f => console.log(`   + ${f}`));
    if (details.kidsHeatKept.length > 10) {
      console.log(`   ... and ${details.kidsHeatKept.length - 10} more`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`📝 Total files modified: ${stats.filesModified}`);

  if (DRY_RUN === true) {
    console.log('\n⚠️  DRY RUN: No files were actually modified');
  } else {
    console.log('\n✅ Changes written to disk');
  }

  console.log('='.repeat(60) + '\n');
}

const result = processRecipes();
printReport(result);
