# 🍣 Sushi Taimushi Ordering Site

<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/WhatsApp_Order_Flow-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" />
  <img src="https://img.shields.io/badge/Mobile_First-111827?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Mobile First" />
  <img src="https://img.shields.io/badge/RTL-Hebrew-0F172A?style=for-the-badge" alt="RTL Hebrew" />
</div>

<div align="center">
  <p><strong>A fast, mobile-first, RTL sushi ordering experience for Hebrew customers and WhatsApp-based order handling.</strong></p>
  <p>
    <a href="https://sushiteimushi.vercel.app"><strong>Live Website</strong></a>
    ·
    <a href="https://github.com/Dovshmi/Sushiteimushi"><strong>GitHub Repository</strong></a>
  </p>
</div>

---

## Overview

**Sushi Taimushi** is a modern ordering website for a family-run sushi business. It gives customers a clean digital menu, category navigation, smart search, product images, item notes, quantity controls, and a cart that prepares a structured order message for WhatsApp.

The project is intentionally lightweight. It avoids unnecessary backend complexity and keeps the ordering flow practical: customers choose items, add notes, review the cart, and send the order to the business through WhatsApp.

---

## Product Goals

- Make sushi ordering simple and fast from a phone.
- Keep the menu visually clean and easy to browse in Hebrew.
- Support real customer behavior, including custom notes and quantity changes.
- Send orders in a clear WhatsApp format that the business can confirm manually.
- Keep the codebase easy to maintain without a heavy CMS or admin dashboard.

---

## Core Features

### Customer Experience

- **Mobile-first interface** designed for phone-based ordering.
- **Full RTL support** for Hebrew content, alignment, and reading direction.
- **Search and category filters** for quick menu discovery.
- **Sticky discovery controls** so search and categories stay accessible while scrolling.
- **Product cards with WebP images** for a faster and cleaner visual menu.
- **Quantity controls** for adding, removing, and editing cart items.
- **Per-item notes** for customer requests such as preparation changes or preferences.
- **WhatsApp order bridge** that formats the cart into a readable order message.

### Business Experience

- **Single source of truth** for business details and menu content.
- **Simple menu maintenance** through `src/data/menu.ts`.
- **No customer login required** for the current order flow.
- **No backend checkout dependency** in the current version.
- **Vercel-ready deployment** with a simple production build.

### Smart Menu Details

The menu supports labels and special states such as:

- `דג טרי`
- `מטוגן`
- `צמחוני`
- `טבעוני`
- `שתייה`
- `בהתאמה אישית`

It also supports products without a fixed price, such as custom trays or manually confirmed items.

---

## Tech Stack

| Area | Technology |
| :--- | :--- |
| Frontend | React 19 |
| Language | TypeScript 6 |
| Build Tool | Vite 8 |
| Styling | Modern CSS / custom responsive layout |
| Icons | Lucide React |
| Package Manager | npm |
| Quality | ESLint |
| CI | GitHub Actions |
| Deployment | Vercel |
| Runtime Target | Node.js 20+ |

---

## Project Structure

```text
Sushiteimushi/
├── .github/
│   └── workflows/          # CI workflow: install, lint, build
├── public/
│   └── images/             # Static menu and visual assets used by the app
├── src/
│   ├── data/
│   │   └── menu.ts         # Business details, categories, and menu items
│   ├── App.tsx             # Main app state, cart logic, filtering, and UI
│   ├── App.css             # Main responsive styling and RTL layout
│   └── main.tsx            # React entry point
├── index.html              # HTML shell
├── package.json            # Scripts and dependencies
├── package-lock.json       # Locked npm dependency tree
├── eslint.config.js        # Lint configuration
├── vite.config.ts          # Vite configuration
└── README.md
```

---

## Getting Started

### Prerequisites

Use **Node.js 20 or newer**. The CI pipeline is configured with Node.js 20, so using the same version locally is recommended.

### 1. Clone the repository

```bash
git clone https://github.com/Dovshmi/Sushiteimushi.git
cd Sushiteimushi
```

### 2. Install dependencies

```bash
npm ci
```

If the lockfile is not available, use:

```bash
npm install
```

### 3. Start local development

```bash
npm run dev
```

Then open:

```text
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build locally

```bash
npm run preview
```

---

## Available Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Runs TypeScript build checks and creates a production bundle. |
| `npm run lint` | Runs ESLint across the project. |
| `npm run preview` | Serves the production build locally for review. |

---

## Menu and Business Configuration

Most business-facing content is managed from:

```text
src/data/menu.ts
```

This file controls:

- Business name
- Display phone number
- WhatsApp target number
- Pickup or delivery notes
- Order confirmation note
- Menu categories
- Menu item names
- Descriptions
- Prices
- Badges
- Product image paths

When updating the menu, follow these rules:

1. Match item names, descriptions, and prices to the approved business menu.
2. Keep image paths stable unless replacing the image set intentionally.
3. Use `price: null` only for items that require manual pricing or customer selection.
4. Keep Hebrew punctuation and RTL formatting clean.
5. Test the WhatsApp output after any cart-related or text-related change.

---

## Ordering Flow

```text
Customer browses the menu
        ↓
Searches or filters by category
        ↓
Adds items to the cart
        ↓
Adjusts quantities and item notes
        ↓
Clicks the WhatsApp order button
        ↓
Structured order message opens in WhatsApp
        ↓
Business confirms details directly with the customer
```

---

## Version History

| Version | Milestone | Main Updates |
| :--- | :--- | :--- |
| **v1.0.0** | Project Foundation | Initial React and Vite setup, base layout, first menu structure. |
| **v1.1.0** | Basic Cart | Added cart state, item quantities, and order summary logic. |
| **v1.2.0** | WhatsApp Ordering | Added WhatsApp message generation and business order handoff. |
| **v1.3.0** | Menu Discovery | Added category navigation and menu search. |
| **v1.4.0** | Item Notes | Added per-item notes for customer-specific requests. |
| **v1.5.0** | Mobile UX Upgrade | Improved responsive layout, touch behavior, and phone-first ordering flow. |
| **v1.6.0** | Product Images | Added optimized WebP menu images and stronger visual menu cards. |
| **v1.7.0** | Smart Badges | Added menu labels for dietary and preparation indicators. |
| **v1.8.0** | Sticky Discovery | Refined sticky search and category controls for faster long-menu browsing. |
| **v1.9.0** | Documentation Polish | Expanded README, scripts, deployment notes, maintenance checklist, and version history. |

---

## Quality and CI

The repository includes a GitHub Actions workflow that runs on pushes and pull requests to `main`.

The CI pipeline performs:

- Dependency installation
- ESLint checks
- Production build verification

Before pushing changes, run:

```bash
npm run lint
npm run build
```

---

## Deployment

The project is designed to deploy cleanly on **Vercel**.

Recommended Vercel settings:

| Setting | Value |
| :--- | :--- |
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm ci` |

Production URL:

```text
https://sushiteimushi.vercel.app
```

---

## Maintenance Checklist

Use this checklist before publishing updates:

- [ ] Menu prices match the approved business menu.
- [ ] WhatsApp phone number is correct.
- [ ] Product images load correctly on desktop and mobile.
- [ ] Hebrew text is aligned correctly in RTL.
- [ ] Search and category filters work correctly.
- [ ] Sticky controls behave correctly on mobile.
- [ ] Cart quantity changes work correctly.
- [ ] Per-item notes appear in the WhatsApp message.
- [ ] The WhatsApp message format is readable.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.

---

## Important Developer Notes

- **Keep the app lightweight.** Avoid adding large UI libraries unless there is a clear product reason.
- **Preserve the WhatsApp-first workflow.** The current project does not use backend checkout, online payments, or customer accounts.
- **Keep `menu.ts` clean.** It is the main business data layer and should remain easy to edit.
- **Do not break RTL layout.** Test Hebrew content after every layout change.
- **Test on mobile first.** Most real customers will use the site from a phone.
- **Avoid changing image paths casually.** Menu images are part of the live customer experience.

---

## Future Improvements

Potential next steps:

- Add a dedicated order confirmation screen before opening WhatsApp.
- Add optional pickup time selection.
- Add delivery area notes.
- Add basic analytics for popular items and category views.
- Add loading placeholders for product images.
- Add automated image-size validation for new menu images.
- Add a simple admin-friendly menu import format.
- Add optional customer language toggle if needed later.

---

## License

This project is licensed under the **MIT License**.

---

<div align="center">
  Developed for <strong>סושי טָעִימוּשִי</strong><br />
  Built with 🍣, React, TypeScript, and attention to mobile UX.
  By Rony Shmidov
</div>
