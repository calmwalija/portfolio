# Portfolio – Next.js 15

Personal portfolio built with Next.js 15, React 19, Tailwind CSS 4, and shadcn/ui-inspired components. Includes dark mode, responsive sections (hero, projects, skills, experience, education, contact), and reusable UI primitives.

## Tech stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Radix UI primitives and utilities
- TypeScript

## Getting started

1) Install dependencies

Use one of the package managers below.

```bash
# pnpm (recommended)
pnpm install

# npm
npm install

# yarn
yarn install
```

2) Run the development server

```bash
# pnpm
pnpm dev

# npm
npm run dev

# yarn
yarn dev
```

App will start at `http://localhost:3000`.

## Scripts

```bash
dev     # Start Next.js dev server
build   # Build production bundle
start   # Start production server (after build)
lint    # Run Next.js lint
```

## Project structure

- `app/`: App Router pages and layout
- `components/`: UI and section components
- `hooks/`: React hooks
- `lib/`: Utilities
- `public/`: Static assets
- `styles/`: Global styles

## Deployment

Any platform that supports Next.js 15 will work (e.g., Vercel). Typical steps:

1) Set environment variables in your hosting provider if using auth or other integrations
2) Build your project (`next build`)
3) Start the server (`next start`) or use your host’s adapter

