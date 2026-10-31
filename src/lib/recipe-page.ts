const article = document.querySelector<HTMLElement>('[data-recipe-slug]');
const toggle = document.getElementById('cook-mode-toggle');
const directionHeading = document.querySelector('.recipe-method #directions');
const steps: HTMLLIElement[] = [];
let sibling = directionHeading?.nextElementSibling;
while (sibling && sibling.tagName !== 'H2') {
  if (sibling.tagName === 'OL')
    steps.push(...sibling.querySelectorAll<HTMLLIElement>(':scope > li'));
  sibling = sibling.nextElementSibling;
}

// Version the local checklist by method text, so an edited recipe doesn't inherit stale steps.
const signature = [...steps, ...document.querySelectorAll('[data-ingredient-text]')]
  .map((element) => element.textContent)
  .join('|');
let hash = 0;
for (const ch of signature) hash = ((hash << 5) - hash + ch.charCodeAt(0)) | 0;
const storageKey = `mise:checklist:${article?.dataset.recipeSlug}:${hash}`;
let saved: Record<string, boolean> = {};
try {
  const parsed = JSON.parse(localStorage.getItem(storageKey) || '{}');
  saved = parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
} catch {
  /* Storage is optional. */
}
function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(saved));
  } catch {
    /* The checklist still works in memory. */
  }
}

// Each step keeps its own callouts right under it: "Perfect your technique" first, then
// "Back on track" for when things aren't quite right.
steps.forEach((step, index) => {
  const copy = document.createElement('div');
  copy.className = 'step-copy';
  while (step.firstChild) copy.appendChild(step.firstChild);
  step.append(copy);
  document
    .querySelectorAll<HTMLElement>(`[data-checkpoint-step="${index + 1}"]`)
    .forEach((checkpoint) => step.append(checkpoint));
});
steps.forEach((step, index) => {
  const isLast = index === steps.length - 1;
  document.querySelectorAll<HTMLElement>('[data-fix-step]').forEach((fix) => {
    const n = Number(fix.dataset.fixStep);
    if (n === index + 1 || (isLast && fix.closest('#checkpoints'))) step.append(fix);
  });
});
const checkpointSection = document.getElementById('checkpoints');
if (checkpointSection && !checkpointSection.querySelector('.checkpoint, .fix-callout'))
  checkpointSection.hidden = true;

document.querySelectorAll<HTMLInputElement>('[data-ingredient-check]').forEach((c) => {
  const key = `ingredient-${c.dataset.ingredientCheck}`;
  c.checked = saved[key] === true;
  c.addEventListener('change', () => {
    saved[key] = c.checked;
    save();
  });
});

// ---------- Ingredients / Steps / Tips on a phone ----------
const phone = window.matchMedia('(max-width: 760px)');
function showSection(name: string, scroll: boolean) {
  if (!article) return;
  article.dataset.section = name;
  document
    .querySelectorAll<HTMLButtonElement>('.section-switch [data-show]')
    .forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.show === name)));
  if (scroll && phone.matches) {
    const bar = document.querySelector('.recipe-toolbar');
    const top = article.getBoundingClientRect().top + window.scrollY;
    const offset = (bar?.getBoundingClientRect().height || 0) + 72;
    window.scrollTo({ top: top - offset, behavior: 'auto' });
  }
}
document.addEventListener('click', (event) => {
  const button = (event.target as HTMLElement).closest<HTMLElement>('[data-show]');
  if (button) showSection(button.dataset.show!, true);
});
// A link to #tips or #directions opens the matching section first.
function sectionForHash() {
  const id = location.hash.slice(1);
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  if (target.closest('.recipe-tips')) showSection('tips', false);
  else if (target.closest('.recipe-steps')) showSection('steps', false);
  else if (target.closest('.ingredients-panel')) showSection('ingredients', false);
}
window.addEventListener('hashchange', sectionForHash);
sectionForHash();

// ---------- Cook mode: one big step at a time ----------
let wakeLock: WakeLockSentinel | null = null;
let dialog: HTMLDialogElement | null = null;
let index = 0;
let factor = 1;
let opener: HTMLElement | null = null;
document.addEventListener('mise:scaled', (event) => {
  factor = (event as CustomEvent).detail?.factor || 1;
});

async function keepAwake(on: boolean) {
  const note = dialog?.querySelector('.cook-awake');
  if (!on) {
    void wakeLock?.release();
    wakeLock = null;
    return;
  }
  if (!('wakeLock' in navigator)) {
    if (note) note.textContent = 'Your screen may dim. Tap it now and then.';
    return;
  }
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    if (note) note.textContent = 'Your screen stays on while you cook.';
  } catch {
    if (note) note.textContent = 'Your screen may dim. Tap it now and then.';
  }
}

function buildDialog() {
  const title = document.querySelector('h1')?.textContent?.trim() || 'Recipe';
  const d = document.createElement('dialog');
  d.className = 'cook-dialog';
  d.setAttribute('aria-label', `Cook mode: ${title}`);
  d.innerHTML = `
    <div class="cook-inner">
      <header class="cook-head">
        <div><p class="cook-title"></p><p class="cook-awake"></p></div>
        <div class="cook-head-actions">
          <button type="button" class="cook-ings" aria-expanded="false">Ingredients</button>
          <button type="button" class="cook-close">Close</button>
        </div>
      </header>
      <div class="cook-body">
        <div class="cook-ing-panel" hidden><p class="cook-ing-h">Ingredients</p><ul></ul></div>
        <div class="cook-step" aria-live="polite" aria-atomic="true">
          <p class="cook-count"></p>
          <p class="cook-scaled" hidden></p>
          <div class="cook-text"></div>
        </div>
      </div>
      <footer class="cook-foot">
        <button type="button" class="cook-prev">Back</button>
        <button type="button" class="cook-next">Next step</button>
      </footer>
    </div>`;
  d.querySelector('.cook-title')!.textContent = title;
  document.body.appendChild(d);
  d.querySelector('.cook-close')!.addEventListener('click', closeCook);
  d.querySelector('.cook-prev')!.addEventListener('click', () => {
    if (index > 0) {
      index--;
      draw();
    }
  });
  d.querySelector('.cook-next')!.addEventListener('click', () => {
    saved[`step-${index}`] = true;
    save();
    if (index < steps.length - 1) {
      index++;
      draw();
    } else {
      steps.forEach((_, i) => delete saved[`step-${i}`]);
      save();
      closeCook();
    }
  });
  d.querySelector('.cook-ings')!.addEventListener('click', (event) => {
    const button = event.currentTarget as HTMLButtonElement;
    const panel = d.querySelector<HTMLElement>('.cook-ing-panel')!;
    const open = panel.hidden;
    if (open) {
      const list = panel.querySelector('ul')!;
      list.innerHTML = '';
      document.querySelectorAll<HTMLElement>('.ingredient-list > li').forEach((li) => {
        const item = document.createElement('li');
        const label = li.querySelector('[data-ingredient-text]');
        if (label) item.innerHTML = label.innerHTML;
        else {
          item.className = 'divider';
          item.textContent = li.textContent?.trim() || '';
        }
        item.querySelectorAll('a').forEach((a) => a.replaceWith(a.textContent || ''));
        list.appendChild(item);
      });
    }
    panel.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Back to step' : 'Ingredients';
    d.querySelector('.cook-body')!.scrollTop = 0;
  });
  d.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeCook();
  });
  d.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') d.querySelector<HTMLButtonElement>('.cook-next')!.click();
    if (event.key === 'ArrowLeft') d.querySelector<HTMLButtonElement>('.cook-prev')!.click();
  });
  return d;
}

function draw() {
  if (!dialog) return;
  const step = steps[index];
  dialog.querySelector('.cook-count')!.textContent = `Step ${index + 1} of ${steps.length}`;
  const text = dialog.querySelector('.cook-text')!;
  text.innerHTML = '';
  const copy = step.querySelector('.step-copy')?.cloneNode(true);
  if (copy) text.appendChild(copy);
  step
    .querySelectorAll('.checkpoint, .fix-callout')
    .forEach((c) => text.appendChild(c.cloneNode(true)));
  const scaled = dialog.querySelector<HTMLElement>('.cook-scaled')!;
  scaled.hidden = factor === 1;
  scaled.textContent = `You scaled the ingredients to ${factor}×. Amounts written in the steps are for the original recipe.`;
  dialog.querySelector<HTMLButtonElement>('.cook-prev')!.disabled = index === 0;
  dialog.querySelector('.cook-next')!.textContent =
    index === steps.length - 1 ? 'Done' : 'Next step';
  dialog.querySelector('.cook-body')!.scrollTop = 0;
}

function openCook() {
  if (!steps.length) return;
  dialog ||= buildDialog();
  // Pick up where you left off.
  const resume = steps.findIndex((_, i) => !saved[`step-${i}`]);
  index = resume === -1 ? 0 : resume;
  const panel = dialog.querySelector<HTMLElement>('.cook-ing-panel')!;
  panel.hidden = true;
  const ings = dialog.querySelector('.cook-ings')!;
  ings.setAttribute('aria-expanded', 'false');
  ings.textContent = 'Ingredients';
  dialog.showModal();
  document.documentElement.style.overflow = 'hidden';
  draw();
  void keepAwake(true);
  dialog.querySelector<HTMLButtonElement>('.cook-next')!.focus();
}

function closeCook() {
  dialog?.close();
  document.documentElement.style.overflow = '';
  void keepAwake(false);
  (opener || toggle)?.focus();
}

if (steps.length && 'HTMLDialogElement' in window) {
  [toggle, ...document.querySelectorAll<HTMLElement>('[data-cook]')].forEach((button) => {
    if (!button) return;
    button.hidden = false;
    button.addEventListener('click', () => {
      opener = button;
      openCook();
    });
  });
}
document.addEventListener('visibilitychange', () => {
  if (dialog?.open && document.visibilityState === 'visible') void keepAwake(true);
});

const printButton = document.getElementById('print-recipe');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}
document.addEventListener('keydown', (event) => {
  if (
    event.key.toLowerCase() !== 'c' ||
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.repeat ||
    dialog?.open
  )
    return;
  if (
    (event.target as HTMLElement)?.closest(
      'input, textarea, select, button, [contenteditable="true"]'
    )
  )
    return;
  if (steps.length && toggle && !toggle.hidden) openCook();
});
