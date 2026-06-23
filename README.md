# 🍣 Sushi Taimushi Ordering Site

<div align="center">
  <img src="https://img.shields.io/badge/React-2023-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />
</div>

<div align="center">
  <p><strong>A high-performance, mobile-first, RTL ordering platform designed for the modern sushi experience.</strong></p>
  <a href="https://sushiteimushi.vercel.app"><strong>Explore Live Demo 🚀</strong></a>
</div>

---

## 📖 Overview

**Sushi Taimushi** is a specialized e-commerce frontend designed for a family-run sushi business. Unlike traditional platforms, it bridges the gap between a professional digital menu and a personal human touch by routing all final orders directly to **WhatsApp**.

The project focuses on **zero-friction UX**, ensuring that customers in Kibbutz Giborim can browse, customize, and order their favorite rolls in seconds.

## ✨ Key Highlights

### 🍱 Seamless Ordering Experience
- **Precision Cart**: Manage quantities and specific requirements (e.g., *"Salmon in oven"*) per item.
- **Intelligent Filtering**: Rapidly navigate through categories or use the global search to find specific ingredients.
- **WhatsApp Bridge**: Converts a complex cart state into a perfectly structured, readable order message for the business owner.

### 🧠 Engineering Decisions
- **Smart Badging Engine**: A custom logic layer that analyzes product names and descriptions to automatically apply labels:
  - `דג טרי` (Fresh Fish)
  - `מטוגן` (Fried)
  - `צמחוני` (Vegetarian)
  - `טבעוני` (Vegan)
- **RTL First**: Built from the ground up for Hebrew, ensuring perfect alignment and flow.
- **Bespoke Visuals**: Custom CSS "image-wells" and dark-mode gradients to make high-quality food photography pop.

## 🛠 Technical Architecture

### The Stack
- **Frontend**: React 19 + TypeScript
- **Build System**: Vite 8 (Ultra-fast HMR)
- **Styling**: Vanilla Modern CSS (Bespoke layout for maximum performance and zero dependency bloat)
- **Icons**: Lucide React
- **Infrastructure**: Vercel CI/CD pipeline with GitHub Actions

### Project Blueprint
```text
sushi-taimushi/
├── .github/workflows/   # CI Pipeline (Lint & Build)
├── public/
│   └── images/menu/     # Optimized WebP Assets (The "Golden" Set)
├── src/
│   ├── data/
│   │   └── menu.ts      # Single Source of Truth for Business & Menu
│   ├── App.tsx          # Core Application State & UI logic
│   └── App.css          # Master Stylesheet & Responsive Design
├── index.html           # RTL Shell
└── package.json         # Dependency Manifest
```

## 🚀 Quick Start

### 1. Clone and Install
```bash
git clone https://github.com/Dovshmi/Sushiteimushi.git
cd sushi-taimushi
npm install
```

### 2. Local Development
```bash
npm run dev
```
Open `http://localhost:5173` to start browsing.

### 3. Production Build
```bash
npm run build
```

## 🧪 Quality Guardrails

The project employs a strict CI pipeline to ensure production stability. Every push to `main` triggers:

- [x] **ESLint**: Static analysis to prevent bugs.
- [x] **TypeScript**: Type-checking for data integrity.
- [x] **Vite Build**: Production bundling verification.

## 📈 Evolution History

| Version | Milestone | Key Changes |
| :--- | :--- | :--- |
| **v1** | 🏗️ Foundation | Base React setup, basic cart, and WhatsApp link. |
| **v2** | 🔍 Discovery | Added global search, category tabs, and onboarding guide. |
| **v3** | 🛒 Precision | Implemented per-item notes and quantity controls. |
| **v4** | 📱 Mobile-First | Comprehensive UX overhaul for smartphone users. |
| **v5** | 🖼️ Visuals | Integrated professional WebP product imagery. |
| **v6** | 🎯 Final Polish | PDF-driven menu sync, phone updates, and smart dietary badges. |

## 📌 Developer's Manual

- **Image Preservation**: The assets in `public/images/menu/` are manually curated. **Do not** overwrite or regenerate them without explicit approval.
- **Menu Updates**: Always sync `src/data/menu.ts` with the latest approved PDF menu.
- **Performance**: Keep the CSS lean. Avoid adding heavy frameworks to maintain the site's current lightning-fast load speed.

---
<div align="center">
  Developed for <strong>סושי טָעִימוּשִי</strong><br/>
  © 2026 | Built with 🍣 and ❤️
</div>
