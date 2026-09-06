const article = document.querySelector<HTMLElement>('[data-recipe-slug]');
const toggle = document.getElementById('cook-mode-toggle');
const progress = document.getElementById('cook-progress');
let active = false;
let wakeLock: WakeLockSentinel | null = null;
let wakeRequest = false;
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
steps.forEach((step, index) => {
  const copy = document.createElement('div');
  copy.className = 'step-copy';
  while (step.firstChild) copy.appendChild(step.firstChild);
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'step-check';
  checkbox.setAttribute('aria-label', `Mark step ${index + 1} complete`);
  checkbox.dataset.stepCheck = String(index);
  step.append(checkbox, copy);
  document
    .querySelectorAll<HTMLElement>(`[data-checkpoint-step="${index + 1}"]`)
    .forEach((checkpoint) => step.append(checkpoint));
});
const checkpointSection = document.getElementById('checkpoints');
if (checkpointSection && !checkpointSection.querySelector('.checkpoint'))
  checkpointSection.hidden = true;
const checkboxes = Array.from(
  document.querySelectorAll<HTMLInputElement>('[data-step-check], [data-ingredient-check]')
);
function updateProgress() {
  const complete = checkboxes.filter((c) => c.dataset.stepCheck !== undefined && c.checked).length;
  if (progress) progress.textContent = `${complete} of ${steps.length} steps complete`;
  checkboxes.forEach((c) => {
    if (c.dataset.stepCheck !== undefined)
      c.closest('li')?.classList.toggle('completed-step', c.checked);
  });
}
checkboxes.forEach((c) => {
  const key =
    c.dataset.stepCheck !== undefined
      ? `step-${c.dataset.stepCheck}`
      : `ingredient-${c.dataset.ingredientCheck}`;
  c.checked = saved[key] === true;
  c.addEventListener('change', () => {
    saved[key] = c.checked;
    try {
      localStorage.setItem(storageKey, JSON.stringify(saved));
    } catch {
      /* Checklist still works in memory. */
    }
    updateProgress();
  });
});
updateProgress();
function setWakeMessage(message: string) {
  const el = document.getElementById('wake-status');
  if (el) el.textContent = message;
}
async function requestWakeLock() {
  if (!active || document.visibilityState !== 'visible' || wakeLock || wakeRequest) return;
  if (!('wakeLock' in navigator)) {
    setWakeMessage('Screen wake lock is unavailable. Your device may dim.');
    return;
  }
  wakeRequest = true;
  try {
    const lock = await navigator.wakeLock.request('screen');
    if (!active || document.visibilityState !== 'visible') {
      await lock.release();
      return;
    }
    wakeLock = lock;
    setWakeMessage('Keeping your screen awake while cook mode is open.');
    lock.addEventListener('release', () => {
      if (wakeLock === lock) wakeLock = null;
      if (active) setWakeMessage('Screen wake lock released. Your device may dim.');
    });
  } catch {
    setWakeMessage('Screen wake lock is unavailable. Your device may dim.');
  } finally {
    wakeRequest = false;
  }
}
function toggleCookMode() {
  active = !active;
  article?.classList.toggle('cook-mode-active', active);
  toggle?.setAttribute('aria-pressed', String(active));
  if (toggle) toggle.textContent = active ? 'Exit cook mode' : 'Cook mode';
  document.querySelector<HTMLElement>('.cook-progress')?.toggleAttribute('hidden', !active);
  if (active) void requestWakeLock();
  else {
    void wakeLock?.release();
    wakeLock = null;
  }
}
if (toggle && steps.length) {
  toggle.hidden = false;
  toggle.addEventListener('click', toggleCookMode);
}
document.getElementById('reset-progress')?.addEventListener('click', () => {
  saved = {};
  checkboxes.forEach((c) => {
    c.checked = false;
  });
  try {
    localStorage.removeItem(storageKey);
  } catch {
    /* Optional storage. */
  }
  updateProgress();
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
    event.repeat
  )
    return;
  if (
    (event.target as HTMLElement)?.closest(
      'input, textarea, select, button, [contenteditable="true"]'
    )
  )
    return;
  if (steps.length) toggleCookMode();
});
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') void requestWakeLock();
  else {
    void wakeLock?.release();
    wakeLock = null;
  }
});
