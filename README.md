# Unscode website

Public marketing site for [Unscode](https://unscode.com)—software development. Built with the [Next.js](https://nextjs.org/) App Router, TypeScript, and Tailwind CSS. The UI is oriented toward Portuguese (`lang="pt-br"`).

## Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (ships with Node)

## Scripts

| Command        | Description                    |
| -------------- | ------------------------------ |
| `npm run dev`  | Dev server at `localhost:3000` |
| `npm run build`| Production build               |
| `npm run start`| Serve production build         |
| `npm run lint` | ESLint (Next.js config)        |

## Project layout

- **`src/app/`** — App Router: `layout.tsx`, `page.tsx`, `globals.css`, route assets
- **`src/app/components/`** — Shared UI (e.g. **`components/icons/`** for SVG icons)
- **Path alias** — `@/*` maps to `./src/*` (see `tsconfig.json`)

Typography uses [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) with **Inter**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit `src/app/page.tsx` (and related components) to change the landing page; the dev server hot-reloads.

## Deploy

This is a standard Next.js app and can be deployed on [Vercel](https://vercel.com/) or any host that supports Node.js builds. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
