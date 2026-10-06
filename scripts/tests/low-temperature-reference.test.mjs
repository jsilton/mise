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
  const shrimp =
    'Cook the shrimp separately until firm, pearly and opaque throughout; check thick centers for 145°F.';
  assert.equal(
    hasLowTemperatureReference(
      shrimp + ' Raw chicken sausage needs a separate complete method to 165°F.',
      words
    ),
    false
  );
  for (const unsafe of [
    'Cook raw chicken to 145°F.',
    'Cook turkey to 140°F.',
    'Use a sous-vide bath.',
  ]) {
    assert.equal(
      hasLowTemperatureReference(shrimp + ' ' + unsafe + ' Reheat leftovers to 165°F.', words),
      true
    );
  }
  assert.equal(
    hasLowTemperatureReference('Cook shrimp to 145°F. Chicken reaches 165°F.', words),
    true
  );
  assert.equal(
    hasLowTemperatureReference(
      'Cook shrimp and chicken until opaque at 145°F. Reheat leftovers to 165°F.',
      words
    ),
    true
  );
  assert.equal(
    hasLowTemperatureReference('Cook shrimp until opaque at 140°F. Chicken reaches 165°F.', words),
    true
  );
  assert.equal(hasLowTemperatureReference(shrimp, words), true);
  for (const ambiguous of [
    'Cook shrimp until still translucent, not opaque; check thick centers for 145°F. Chicken reaches 165°F.',
    'Cook shrimp at 145°F for 30 minutes until opaque. Chicken reaches 165°F.',
    'Cook shrimp at 145°F for 30 minutes, then continue until firm, pearly and opaque throughout; check thick centers for 145°F. Chicken reaches 165°F.',
  ]) {
    assert.equal(hasLowTemperatureReference(ambiguous, words), true, ambiguous);
  }
  const actual = fs
    .readFileSync(
      new URL('../../src/content/recipes/crispy-sheet-pan-gnocchi-and-veggies.md', import.meta.url),
      'utf8'
    )
    .split(/^---\s*$/m)
    .slice(2)
    .join('---');
  assert.equal(hasLowTemperatureReference(actual, words), false);
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

test('explicit shallow-vessel stock cooling bath is separate from cooking', () => {
  const actual = fs
    .readFileSync(
      new URL('../../src/content/recipes/homemade-chicken-stock.md', import.meta.url),
      'utf8'
    )
    .split(/^---\s*$/m)
    .slice(2)
    .join('---');
  assert.match(actual, /attached chicken meat for 165°F \/ 74°C before tasting or straining/);
  assert.match(
    actual,
    /Cool promptly in those shallow vessels\. An ice-water bath with occasional clean stirring can speed cooling; keep bath water out of the stock\./
  );
  assert.equal(hasLowTemperatureReference(actual, words), false);
  const cooling =
    'Cool promptly in those shallow vessels. An ice-water bath with occasional clean stirring can speed cooling; keep bath water out of the stock.';
  for (const instruction of [
    cooling,
    cooling.replace('stock.', 'broth.'),
    cooling.replace('ice-water', 'ice water'),
  ]) {
    assert.equal(
      hasLowTemperatureReference(
        'Check attached chicken meat reaches 165°F. ' + instruction,
        words
      ),
      false,
      instruction
    );
  }
});

test('stock cooling recognition does not hide mixed cooking or ambiguous bath methods', () => {
  const cooling =
    'Cool promptly in those shallow vessels. An ice-water bath with occasional clean stirring can speed cooling; keep bath water out of the stock.';
  const finished = 'Check attached chicken meat reaches 165°F. ';
  for (const unsafe of [
    'Cook chicken in a water bath.',
    'Cook raw chicken to 145°F.',
    'Cook turkey at 150°F.',
    'Use a sous-vide bath.',
    'Use an immersion circulator.',
    'Vacuum-seal raw poultry before cooking.',
    'Check the pasteurization time.',
  ]) {
    assert.equal(
      hasLowTemperatureReference(finished + cooling + ' ' + unsafe, words),
      true,
      unsafe
    );
    assert.equal(
      hasLowTemperatureReference(unsafe + ' ' + finished + cooling, words),
      true,
      unsafe
    );
  }
  for (const ambiguous of [
    cooling,
    finished + cooling.replace('Cool promptly in those shallow vessels. ', ''),
    finished + cooling.replace('can speed cooling', 'can speed cooking'),
    finished + cooling.replace('with occasional clean stirring', 'with occasional stirring'),
    finished +
      cooling.replace('keep bath water out of the stock', 'keep bath water out of the chicken'),
    finished + 'Cool promptly in those shallow vessels. Cook chicken in an ice-water bath.',
    finished +
      cooling.replace('can speed cooling;', 'can speed cooling and cook poultry at 145°F;'),
    finished + cooling + ' A water bath is another option.',
  ])
    assert.equal(hasLowTemperatureReference(ambiguous, words), true, ambiguous);
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
