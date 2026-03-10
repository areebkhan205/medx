# ECOMEDx — React + Vite + Tailwind CSS

This is the ECOMEDx project converted from Next.js to **React + Vite + Tailwind CSS v3**.

## Stack

- **React 19** (no Next.js)
- **Vite 6** (replaces Next.js dev server / build)
- **Tailwind CSS v3** (with custom theme tokens matching the original design)
- **TypeScript**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **React Simple Maps** (network map)

## Getting Started

```bash
# 1. Install dependencies
npm install
# or
pnpm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Key Migration Notes

| Next.js | Vite / React |
|---|---|
| `next/dynamic` with `ssr: false` | `React.lazy` + `<Suspense>` |
| `@/` path alias (next.config) | Vite `resolve.alias` in `vite.config.ts` |
| `app/layout.tsx` | `index.html` + `src/main.tsx` |
| `app/globals.css` (`@import 'tailwindcss'`) | `src/index.css` (`@tailwind base/components/utilities`) |
| `"use client"` directives | Removed (all React in Vite is client-side) |
| `next/font/google` | Google Fonts via `<link>` in `index.html` |
| `@vercel/analytics` | Removed (add back manually if needed) |
| `next-themes` | Removed (add back if dark mode toggle needed) |
| Tailwind v4 `@theme inline` | Tailwind v3 `tailwind.config.js` `theme.extend` |

## Project Structure

```
src/
├── components/
│   ├── auth-modal.tsx
│   ├── chat-workstation.tsx
│   ├── cta-section.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── navbar.tsx
│   ├── network-map-section.tsx
│   ├── payment-modal.tsx
│   ├── services-section.tsx
│   ├── specialists-section.tsx
│   └── trust-bar.tsx
├── lib/
│   └── utils.ts
├── App.tsx
├── index.css
└── main.tsx
public/
├── images/
│   └── hero-bg.jpg
└── icon.svg
```
