# Monefy — Personal Finance Dashboard

A fully interactive, multi-page personal finance dashboard built from a Figma design. Pure HTML + Tailwind CSS (via CDN) + Alpine.js — no build step, no framework.

## ✨ Features

### 📊 7 Routes / Pages
- **Dashboard** — Stats, cash flow chart, bill payments, monthly expense breakdown, recent transactions
- **Transactions** — Filterable table, search, sort, bulk select, detail drawer, CSV export
- **My Wallet** — Card management, transfers, top up/withdraw, spending chart per wallet
- **Reports** — Income vs Expense analytics, category donut, top merchants, AI insights
- **Settings** — 7-tab settings (Profile, Security, Preferences, Notifications, Connected Accounts, Billing, Privacy)
- **Invoices** — Create/manage invoices, status filters, KPI stats, detail drawer
- **Help Center** — Searchable FAQ, topic categories, contact support

### 🎯 Global Components
- **Command Palette** (⌘K / Ctrl+K) — Navigate any page, trigger actions
- **Account Switcher** — Sidebar user card dropdown
- **New Payment Modal** — Send money with schedule support
- **Manage Balance Modal** — Top up / Withdraw
- **Referral Modal** — Earn $90 referral program
- **Notifications Dropdown** — Per-page notification bell
- **Toast System** — Global success/error/info notifications with Undo actions
- **Confirm Dialog** — Destructive action confirmation

### 🎨 Design System
- Inter Tight font (Google Fonts)
- 40+ custom SVG icons (Figma-sourced + custom designs)
- CSS mask-based icon system (colorable via `currentColor`)
- Consistent design tokens: padding, gap, shadow, border-radius
- Reusable patterns: `.qa-btn`, `.popup-menu`, `.tgl` (toggle switch), `.form-input`
- 100% light mode, mobile-first responsive grid

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| **HTML** | Static markup |
| **Tailwind CSS** (CDN) | Utility-first styling with custom design tokens |
| **Alpine.js** (CDN) | Reactive state, transitions, event handling |
| **No build step** | Just open `index.html` |

## 📁 File Structure

```
/index.html              ← Shell (sidebar + router + global modals)
/pages/
  dashboard.html         ← Home dashboard (Figma-faithful)
  transactions.html      ← Full transactions table
  wallet.html            ← Card management
  reports.html           ← Analytics & insights
  settings.html          ← 7-tab settings
  invoices.html          ← Invoice management
  help.html              ← Help center
  _placeholder.html      ← Fallback for unimplemented routes
/js/
  app.js                 ← Hash router + global toast/confirm
  data.js                ← Mock data (transactions, wallets, invoices)
/css/
  style.css              ← Custom CSS (icons, components, design tokens)
/assets/                 ← SVG icons, brand logos, avatars
```

## 🚀 Run Locally

Just open `index.html` in a browser, or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then navigate to `http://localhost:8000`.

## ⌨️ Keyboard Shortcuts

- `⌘K` / `Ctrl+K` — Open Command Palette
- `Esc` — Close any modal/drawer/dropdown
- `↑↓` — Navigate command palette results
- `↵ Enter` — Execute selected command
- `/` — Focus page-specific search (Transactions)

## 🎯 Design Source

Original Home Dashboard ported pixel-perfect from Figma:
[Eblek Workspace Pro — Home V1](https://www.figma.com/design/BUeDCc9uoYke5FX2N1SdQT/Eblek-Workspace-Pro?node-id=265-28585)

Other pages designed in-house to extend the dashboard into a full multi-page application while maintaining design system consistency.

## 📝 License

MIT
