# Team Monitoring

Operations monitoring frontend built with React, TypeScript, and Vite.

## Requirements

- Node.js 20+
- pnpm 9.15.4+

## Install

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

Open the URL printed by Vite. By default the project is configured for `http://localhost:5173`.

## Production build

```bash
pnpm build
```

The generated static files are written to `dist/`.

## Preview production build

```bash
pnpm preview
```

## Project structure

```text
src/
  components/   reusable UI components
  data/         local data access and runtime examples
  styles/       global styles
  App.tsx       application shell and dashboard screen
  main.tsx      browser entry point
```

The application will be expanded incrementally as additional product capabilities are introduced.
