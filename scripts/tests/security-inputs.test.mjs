import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import matter from '../../src/lib/frontmatter.mjs';
import { loadRecipes } from '../lib/recipe-exports.mjs';

test('frontmatter cannot execute JavaScript, including aliases and repeated inputs', () => {
  for (const language of ['js', 'javascript', 'JS', 'JavaScript']) {
    const input = `---${language}\n(globalThis.__miseSecurityProbe = true, {title: 'probe'})\n---\nbody`;
    for (let i = 0; i < 2; i++) {
      assert.throws(() => matter(input), /JavaScript frontmatter is not allowed/);
      assert.equal(globalThis.__miseSecurityProbe, undefined);
    }
  }
  assert.deepEqual(matter('---\ntitle: Safe\n---\nbody').data, { title: 'Safe' });
  assert.deepEqual(matter('---json\n{"title":"Safe"}\n---\nbody').data, { title: 'Safe' });
  assert.equal(matter(matter.stringify('body', { title: 'Safe' })).data.title, 'Safe');
});

test('recipe export loader rejects executable metadata before reading identities', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'mise-frontmatter-'));
  try {
    await fs.writeFile(
      path.join(dir, 'probe.md'),
      "---js\n(globalThis.__miseSecurityProbe = true, {title: 'probe'})\n---\nbody"
    );
    await assert.rejects(loadRecipes(dir), /JavaScript frontmatter is not allowed/);
    assert.equal(globalThis.__miseSecurityProbe, undefined);
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
});

test('batch guard preserves shell metacharacters and whitespace as literal filenames', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'mise-batch-guard-'));
  const run = (program, args) => execFileSync(program, args, { cwd: dir, encoding: 'utf8' });
  const filenames = [
    'src/content/recipes/$(touch security-probe).md',
    'src/content/recipes/space and\nnewline.md',
  ];
  try {
    await fs.mkdir(path.join(dir, 'scripts'), { recursive: true });
    await fs.mkdir(path.join(dir, 'src/content/recipes'), { recursive: true });
    await fs.copyFile('scripts/batch-guard.mjs', path.join(dir, 'scripts/batch-guard.mjs'));
    await fs.writeFile(
      path.join(dir, 'scripts/lint-recipe.mjs'),
      "import fs from 'node:fs'; fs.writeFileSync('args.json', JSON.stringify(process.argv.slice(2)));"
    );
    await fs.writeFile(
      path.join(dir, 'change.mjs'),
      `import fs from 'node:fs'; for (const file of ${JSON.stringify(filenames)}) fs.appendFileSync(file, 'changed\\n');`
    );
    for (const file of filenames) await fs.writeFile(path.join(dir, file), 'original\n');
    run('git', ['init', '-q']);
    run('git', ['add', '.']);
    run('git', [
      '-c',
      'user.name=Security Fixture',
      '-c',
      'user.email=fixture@example.invalid',
      '-c',
      'commit.gpgsign=false',
      'commit',
      '-qm',
      'fixture',
    ]);
    run(process.execPath, ['scripts/batch-guard.mjs', 'node change.mjs', '--auto-accept']);
    const actual = JSON.parse(await fs.readFile(path.join(dir, 'args.json'), 'utf8'));
    await assert.rejects(fs.stat(path.join(dir, 'security-probe')), { code: 'ENOENT' });
    assert.deepEqual(actual.sort(), filenames.sort());
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
});

test('development server blocks private Paprika paths and keeps ordinary assets readable', async () => {
  const { createRequire } = await import('node:module');
  const { pathToFileURL } = await import('node:url');
  const { default: config } = await import('../../astro.config.mjs');
  const require = createRequire(import.meta.url);
  const astroRequire = createRequire(require.resolve('astro/package.json'));
  const { createServer } = await import(pathToFileURL(astroRequire.resolve('vite')));
  assert.equal(config.server.host, '127.0.0.1');
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'mise-private-serving-'));
  let server;
  try {
    const privateFiles = [
      '.mise/sentinel.txt',
      'tmp/paprika-sync-fixture/decoded.json',
      'unexpected/native.paprikarecipes',
      '.env',
      '.git/sentinel',
    ];
    for (const file of [...privateFiles, 'ordinary.txt']) {
      await fs.mkdir(path.dirname(path.join(root, file)), { recursive: true });
      await fs.writeFile(path.join(root, file), 'HARMLESS_LOCAL_SENTINEL');
    }
    server = await createServer({
      ...config.vite,
      configFile: false,
      root,
      logLevel: 'silent',
      server: { ...config.vite.server, host: config.server.host, port: 0, watch: null },
    });
    await server.listen();
    const base = `http://127.0.0.1:${server.httpServer.address().port}`;
    for (const file of privateFiles) {
      for (const suffix of ['', '?raw']) {
        const response = await fetch(`${base}/${file}${suffix}`);
        assert.equal(response.status, 403, file + suffix);
        assert.ok(!(await response.text()).includes('HARMLESS_LOCAL_SENTINEL'));
      }
    }
    assert.equal(await (await fetch(base + '/ordinary.txt')).text(), 'HARMLESS_LOCAL_SENTINEL');
  } finally {
    await server?.close();
    await fs.rm(root, { recursive: true, force: true });
  }
});

test('privacy gate rejects tracked native archives outside conventional export folders', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'mise-private-gate-'));
  const { pathToFileURL } = await import('node:url');
  const checker = pathToFileURL(path.resolve('scripts/check-paprika-privacy.mjs')).href;
  try {
    await fs.mkdir(path.join(dir, 'docs/paprika-sync/drafts'), { recursive: true });
    for (const slug of ['stuffed-shells-gemini', 'veggie-quesadillas', 'yinyins-wontons'])
      await fs.writeFile(path.join(dir, `docs/paprika-sync/drafts/${slug}.md`), 'fixture');
    await fs.mkdir(path.join(dir, 'unexpected'));
    await fs.writeFile(path.join(dir, 'unexpected/native.paprikarecipes'), 'harmless fixture');
    execFileSync('git', ['init', '-q'], { cwd: dir });
    execFileSync('git', ['add', '.'], { cwd: dir });
    const { spawnSync } = await import('node:child_process');
    const result = spawnSync(
      process.execPath,
      [
        '--input-type=module',
        '-e',
        `import {checkPublicPaprikaEvidence} from ${JSON.stringify(checker)}; await checkPublicPaprikaEvidence();`,
      ],
      { cwd: dir, encoding: 'utf8' }
    );
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /unexpected\/native.paprikarecipes: private Paprika artifact/);
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
});
