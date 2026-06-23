# 🍣 Sushi Taimushi Ordering Site

A professional, high-performance, mobile-first ordering platform for **Sushi Taimushi**, a family-run sushi business. The site enables customers to browse a rich menu, customize their orders, and send a formatted order summary directly to the business via WhatsApp.

## 🚀 Features

- **Modern RTL Interface**: Fully optimized for Hebrew (Right-to-Left) with a sleek, dark-themed aesthetic.
- **Dynamic Menu**: Searchable and filterable menu with category tabs.
- **Advanced Cart System**: 
  - Item quantity management.
  - Individual notes per item (e.g., "Salmon in oven", "No sesame").
  - Live total calculation.
- **WhatsApp Integration**: Generates a perfectly formatted order summary including customer details, itemized list, and total.
- **Smart Badging**: Automated dietary and product labels (Fresh Fish, Fried, Vegetarian, Vegan) based on ingredient analysis.
- **Mobile-First Design**: Responsive layout tailored for seamless ordering on smartphones.
- **Optimized Assets**: High-quality WebP images with a branded "image-well" style for consistent visual presentation.

## 🛠 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Custom Modern CSS (Bespoke layout, no utility frameworks for maximum control)
- **Icons**: Lucide React
- **Deployment**: Vercel (CI/CD via GitHub)

## 📁 Project Structure

```text
sushi-taimushi/
├── src/
│   ├── App.tsx          # Main Application logic, Cart state, and UI
│   ├── App.css          # Custom styling & Responsive design
│   └── data/
│       └── menu.ts      # Business configuration and structured menu data
├── public/
│   └── images/
│       └── menu/       # Optimized WebP product and hero images
├── index.html           # HTML5 shell with RTL configuration
├── package.json        # Dependencies and build scripts
└── README.md            # Project documentation
```

## ⚙️ Local Development

### Installation
```bash
npm install
```

### Running the Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

### Building for Production
```bash
npm run build
```
The production build will be generated in the `dist/` directory.

## 🧪 Quality Assurance

To ensure stability and type safety, always run the following before deploying:

```bash
npm run lint
npm run build
```

## 📈 Roadmap & Version History

- **v1**: Initial setup, basic cart, and WhatsApp integration.
- **v2**: Search functionality, category tabs, and "How to Order" guide.
- **v3**: Advanced cart items with individual notes.
- **v4**: Comprehensive mobile UX overhaul and layout fixes.
- **v5**: Integration of real product imagery and hero art.
- **v6**: Full menu synchronization with the latest PDF source, phone number updates, and smart dietary badging.

## 📌 Important Developer Notes

- **Image Assets**: The images in `public/images/menu/` have been manually optimized and approved. **Do not** regenerate or overwrite these files without explicit direction.
- **Menu Updates**: The source of truth for the menu is the latest PDF version. When updating, ensure items not present in the PDF are removed to maintain accuracy.
- **RTL**: The site is strictly Right-to-Left. Ensure any new UI components maintain RTL alignment.
- **Deployment**: The project is linked to Vercel. Any push to the `main` branch triggers an automatic deployment.

---
© 2026 סושי טָעִימוּשִי
