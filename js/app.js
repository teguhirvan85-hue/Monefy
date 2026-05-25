// ============================================================================
//  Monefy — Hash Router + Alpine state
//  Routes are #/dashboard, #/transactions, etc.
//  Each route loads a fragment from /pages/{route}.html into #page-content.
// ============================================================================

const ROUTES = {
  dashboard:    { file: 'pages/dashboard.html',   title: 'Dashboard',    icon: 'ic-home',      label: 'Dashboard' },
  transactions: { file: 'pages/transactions.html', title: 'Transactions', icon: 'ic-switch',    label: 'Transactions' },
  wallet:       { file: 'pages/wallet.html',      title: 'My Wallet',    icon: 'ic-wallet',    label: 'My Wallet' },
  invoices:     { file: 'pages/invoices.html',    title: 'Invoices',     icon: 'ic-clipboard', label: 'Invoices' },
  reports:      { file: 'pages/reports.html',     title: 'Reports',      icon: 'ic-pie',       label: 'Reports' },
  settings:     { file: 'pages/settings.html',    title: 'Settings',     icon: 'ic-settings',  label: 'Settings' },
  help:         { file: 'pages/help.html',        title: 'Help Center',  icon: 'ic-help',      label: 'Help Center' },
};

// Build sidebar groups
const MAIN_MENU = ['dashboard', 'transactions', 'wallet', 'invoices', 'reports'];
const PREFERENCE_MENU = ['settings', 'help'];

function currentRoute() {
  const r = (location.hash || '#/dashboard').replace(/^#\//, '').split('/')[0];
  return ROUTES[r] ? r : 'dashboard';
}

// innerHTML doesn't execute <script> tags — re-create them so they run.
function executeScripts(container) {
  const scripts = container.querySelectorAll('script');
  scripts.forEach(old => {
    const s = document.createElement('script');
    if (old.src) s.src = old.src;
    else s.textContent = old.textContent;
    old.parentNode.replaceChild(s, old);
  });
}

async function loadPage(route) {
  const slot = document.getElementById('page-content');
  if (!slot) return;
  const cfg = ROUTES[route];
  try {
    const res = await fetch(cfg.file, { cache: 'no-cache' });
    if (!res.ok) throw new Error('404');
    let html = await res.text();
    slot.innerHTML = html;
    executeScripts(slot);
    document.title = `Monefy — ${cfg.title}`;
  } catch (e) {
    // Fallback to placeholder for routes whose page file doesn't exist yet
    const res = await fetch('pages/_placeholder.html');
    const html = await res.text();
    slot.innerHTML = html;
    const title = slot.querySelector('[data-page-title]');
    const subtitle = slot.querySelector('[data-page-subtitle]');
    if (title) title.textContent = cfg.title;
    if (subtitle) subtitle.textContent = `Halaman ${cfg.title} sedang disiapkan.`;
    document.title = `Monefy — ${cfg.title}`;
  }
  // Scroll content area to top
  slot.scrollTop = 0;
}

function syncRoute() {
  const route = currentRoute();
  document.documentElement.setAttribute('data-route', route);
  loadPage(route);
}

window.addEventListener('hashchange', syncRoute);
window.addEventListener('DOMContentLoaded', () => {
  if (!location.hash) location.hash = '#/dashboard';
  syncRoute();
});

// ----------------------------------------------------------------------------
//  Toast notification system (global)
// ----------------------------------------------------------------------------
function ensureToastHost() {
  let host = document.getElementById('toast-host');
  if (!host) {
    host = document.createElement('div');
    host.id = 'toast-host';
    host.className = 'fixed bottom-6 right-6 flex flex-col gap-2 z-[100]';
    document.body.appendChild(host);
  }
  return host;
}

function toast(message, opts = {}) {
  const { type = 'success', duration = 3000, action } = typeof opts === 'string' ? { type: opts } : opts;
  const host = ensureToastHost();

  const palette = {
    success: { bg: 'bg-s-300',    text: 'text-white',   icon: '✓' },
    error:   { bg: 'bg-err-200',  text: 'text-white',   icon: '!' },
    info:    { bg: 'bg-white',    text: 'text-g-900',   icon: 'i' },
  };
  const p = palette[type] || palette.info;

  const el = document.createElement('div');
  el.className = `${p.bg} ${p.text} rounded-lg shadow-pop flex items-center gap-3 pl-4 pr-3 py-3 min-w-[280px] max-w-[400px] border ${type === 'info' ? 'border-g-100' : 'border-transparent'} transition-all duration-200 translate-y-2 opacity-0`;
  el.innerHTML = `
    <span class="w-5 h-5 rounded-full ${type==='info' ? 'bg-g-50 text-g-900' : 'bg-white/20'} flex items-center justify-center text-[12px] font-semibold shrink-0">${p.icon}</span>
    <span class="flex-1 text-[13px] font-medium leading-tight">${message}</span>
    ${action ? `<button class="text-[12px] font-semibold underline shrink-0 hover:no-underline" data-toast-action>${action.label}</button>` : ''}
    <button class="opacity-60 hover:opacity-100 shrink-0 text-[14px]" data-toast-close>✕</button>
  `;
  host.appendChild(el);
  requestAnimationFrame(() => { el.classList.remove('translate-y-2', 'opacity-0'); });

  const dismiss = () => {
    el.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => el.remove(), 200);
  };
  if (action) el.querySelector('[data-toast-action]')?.addEventListener('click', () => { action.onClick?.(); dismiss(); });
  el.querySelector('[data-toast-close]')?.addEventListener('click', dismiss);
  if (duration > 0) setTimeout(dismiss, duration);
  return dismiss;
}

// Confirm modal (returns promise)
function confirmDialog(message, opts = {}) {
  return new Promise(resolve => {
    const { title = 'Are you sure?', confirmText = 'Confirm', cancelText = 'Cancel', destructive = false } = opts;
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black/40 z-[100] flex items-center justify-center px-4';
    overlay.innerHTML = `
      <div class="bg-white rounded-2xl shadow-pop max-w-[400px] w-full p-6 flex flex-col gap-3">
        <h2 class="text-[18px] font-semibold text-g-900">${title}</h2>
        <p class="text-[14px] text-g-400">${message}</p>
        <div class="flex items-center gap-2 mt-2">
          <button class="flex-1 h-10 rounded-full border border-g-100 text-[14px] font-semibold text-g-900 hover:bg-g-25 transition-colors" data-cancel>${cancelText}</button>
          <button class="flex-1 h-10 rounded-full ${destructive ? 'bg-err-100 hover:brightness-110 text-white' : 'bg-p-300 hover:bg-p-200 text-s-300'} text-[14px] font-semibold transition-colors" data-confirm>${confirmText}</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    const close = (val) => { overlay.remove(); resolve(val); };
    overlay.addEventListener('click', e => { if (e.target === overlay) close(false); });
    overlay.querySelector('[data-cancel]').addEventListener('click', () => close(false));
    overlay.querySelector('[data-confirm]').addEventListener('click', () => close(true));
    document.addEventListener('keydown', function onEsc(e){ if (e.key === 'Escape') { close(false); document.removeEventListener('keydown', onEsc); } });
  });
}

// Expose helpers for Alpine + pages
window.Monefy = { ROUTES, MAIN_MENU, PREFERENCE_MENU, currentRoute, toast, confirmDialog };
window.toast = toast;
window.confirmDialog = confirmDialog;
