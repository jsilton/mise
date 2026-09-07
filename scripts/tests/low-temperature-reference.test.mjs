import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  hasLowTemperatureReference,
  hasPoultryMeatReference,
} from '../../src/lib/low-temperature-reference.mjs';
const rule = JSON.parse(
  fs.readFileSync(
    new URL('../../src/knowledge/codex/low-temp-poultry-safety.json', import.meta.url),
    'utf8'
  )
);
const words = rule.detection.find((clause) => clause.type === 'low_temperature_reference').words;

test('temperature tokens do not match inside higher oven settings', () => {
  for (const temperature of ['160°C', '163°C', '165°C', '165 ° C']) {
    assert.equal(
      hasLowTemperatureReference(`Heat oven to ${temperature}. Cook turkey to 165°F.`, words),
      false
    );
  }
  for (const temperature of ['60°C', '63°C', '65°C', '155°F']) {
    assert.equal(
      hasLowTemperatureReference(
        `Cook turkey at ${temperature}. Reheat leftovers to 165°F.`,
        words
      ),
      true
    );
  }
});

test('finished poultry followed by explicit hot holding is not a low-temperature cooking instruction', () => {
  assert.equal(
    hasLowTemperatureReference(
      'Reheat chicken to 165°F / 74°C. For a buffet, keep cooked meat at 140°F / 60°C or above.',
      words
    ),
    false
  );
  assert.equal(
    hasLowTemperatureReference('Check 165 ° F. Hold hot food at least 140 ° F / 60 ° C.', words),
    false
  );
});
test('hot holding does not conceal separate low-temperature cooking or named methods', () => {
  for (const instruction of [
    'Cook chicken to 140°F.',
    'Cook turkey to 155°F.',
    'Use a sous-vide bath.',
    'Check the pasteurization time.',
  ]) {
    assert.equal(
      hasLowTemperatureReference(
        `${instruction} Reheat leftovers to 165°F. Keep cooked meat at 140°F / 60°C or above.`,
        words
      ),
      true,
      instruction
    );
  }
});
test('ambiguous holding and missing finished endpoints remain flagged', () => {
  assert.equal(hasLowTemperatureReference('Keep cooked meat at 140°F / 60°C.', words), true);
  assert.equal(
    hasLowTemperatureReference('Cook to 165°F. Keep raw chicken at 140°F.', words),
    true
  );
  assert.equal(hasLowTemperatureReference('Cook to 165°F. Hold it at 145°F.', words), true);
});

test('sliced pork with a three-minute wait is distinct from its poultry alternative', () => {
  const pork =
    'Check sliced pork reaches at least 145°F / 63°C; give it at least 3 minutes before serving.';
  assert.equal(
    hasLowTemperatureReference(`${pork} Chicken must reach 165°F / 74°C.`, words),
    false
  );
  assert.equal(
    hasLowTemperatureReference('Check sliced pork reaches 145°F. Chicken must reach 165°F.', words),
    true
  );
  assert.equal(
    hasLowTemperatureReference(
      `${pork} Cook raw chicken to 145°F. Reheat leftovers to 165°F.`,
      words
    ),
    true
  );
  assert.equal(
    hasLowTemperatureReference(
      'Ground pork reaches 145°F; give it at least 3 minutes before serving. Chicken must reach 165°F.',
      words
    ),
    true
  );
});

test('cooling brine in an ice bath is separate from water-bath cooking', () => {
  const words = ['water bath', 'sous vide', '150°F'];
  assert.equal(
    hasLowTemperatureReference(
      'Cool the saucepan in an ice-water bath, then refrigerate the brine.',
      words
    ),
    false
  );
  assert.equal(hasLowTemperatureReference('Chill brine in an ice water bath.', words), false);
  assert.equal(
    hasLowTemperatureReference(
      'Cool the saucepan in an ice-water bath. Cook poultry in a water bath at 150°F.',
      words
    ),
    true
  );
  assert.equal(hasLowTemperatureReference('Cook chicken in an ice-water bath.', words), true);
});

test('poultry liquids alone do not trigger meat rules, but separate meat remains visible', () => {
  assert.equal(rule.detection[0].type, 'poultry_meat_reference');
  assert.equal(
    hasPoultryMeatReference(
      ['4 lb pork shoulder', '1 cup chicken stock'],
      'Add chicken stock. Cook pork to 145°F.'
    ),
    false
  );
  for (const ingredients of [
    ['1 cup chicken stock', '2 chicken thighs'],
    ['2 chicken thighs plus 1 cup chicken stock'],
    ['1 whole turkey', '2 cups turkey broth'],
    ['raw chicken in broth'],
  ])
    assert.equal(hasPoultryMeatReference(ingredients), true);
  assert.equal(
    hasPoultryMeatReference(['1 cup chicken broth'], 'Alternatively cook chicken to 145°F.'),
    true
  );
});
