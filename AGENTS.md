# Repository Guidelines

## Project Overview

Astro 5 static portfolio and blog for Oliver Modesto. Pages are prerendered to `dist/`; no server adapter is configured.

## Architecture & Data Flow

- `src/pages/` defines routes and composes layouts and sections. The homepage assembles hero, about, skills, portfolio, blog, and footer components.
- Blog Markdown in `src/content/blog/` is loaded and validated by `src/content.config.ts`. The blog index sorts collection entries by publication date; `src/pages/blog/[...slug].astro` renders each entry and passes its metadata/body to `BlogLayout`.
- Portfolio entries flow from `src/components/data/portfolioData.js` through `getPortafolioData` into `Portfolio` and `CardPortfolio`; project-specific demo/repository links belong with those entries.
- `src/components/Icon.astro` renders build-time inline SVGs from the locally installed `@iconify-json/*` collections. Add icon names from a collection already registered there.
- Browser interactivity is a plain Astro `<script>` in `src/components/hero/Hero.astro`, with DOM utilities in `src/utils/animations/hero-animation.js`. No React/Vue islands or `client:*` hydration pattern is configured.

## Key Directories

- `src/pages/` — homepage, about, 404, and blog routes.
- `src/layouts/` — document shells and blog post wrapper.
- `src/components/` — page sections and reusable UI; `data/` holds menu/portfolio data, while `atoms/` holds small UI components.
- `src/content/blog/` — blog Markdown and frontmatter.
- `src/config/` — shared site metadata and external profile links (`site.js`).
- `src/styles/` — global tokens, reset, and site-wide styles.
- `src/utils/` — browser-side helpers such as hero animation.
- `public/` — static images, icons, and other files copied to the output; reference them by root-relative URL, e.g. `/img/code2.webp`.

## Development Commands

Run from the repository root with pnpm:

| Command | Purpose |
| --- | --- |
| `pnpm dev` or `pnpm start` | Start Astro development server |
| `pnpm build` | Generate the static site in `dist/` |
| `pnpm preview` | Serve the built output locally |
| `pnpm check` | Run `astro check` diagnostics |
| `pnpm lint` | Check Prettier formatting for source files |
| `pnpm format` | Rewrite formatting for source files |

## Code Conventions & Common Patterns

- Use Astro frontmatter for component imports, props, and build-time data; use Astro content APIs in page frontmatter for collection-driven pages.
- Keep shared tokens/reset/base rules in `src/styles/global.css`; put component styles in the component's scoped `<style>`. Use narrow `:global(...)` selectors only for Markdown-rendered content or child-component markup.
- Read shared site URL, default description, booking, GitHub, and social links from `src/config/site.js`. Keep per-project URLs in `portfolioData.js`.
- TypeScript is strict, but JavaScript is enabled. Preserve the local export/file naming when changing callers; existing names mix camelCase/kebab-case and include `getPortafolioData`.
- Keep browser-only behavior in Astro client scripts and guard DOM lookups before using nodes. `Icon.astro` throws for unknown icon sets or names; preserve explicit failures rather than silently emitting a missing icon.
- There is no repository-wide dependency-injection, client state-management, or error-handling convention; avoid introducing a framework or abstraction for isolated static pages.

## Important Files

- `package.json` — scripts, dependencies, and pinned package manager.
- `astro.config.mjs` — Astro integrations and canonical site URL.
- `src/config/site.js` — shared site metadata and links.
- `src/content.config.ts` — blog collection schema and loader.
- `src/pages/index.astro`, `src/pages/blog/index.astro`, `src/pages/blog/[...slug].astro` — primary route entry points.
- `src/components/data/portfolioData.js` — portfolio card source data.
- `src/components/Icon.astro` — local icon set registry and SVG renderer.
- `src/styles/global.css` — global design tokens and base rules.

## Runtime/Tooling Preferences

- `package.json` pins `pnpm@9.15.9`; use pnpm and `pnpm-lock.yaml`. A `package-lock.json` is also present, so avoid switching package managers or updating a second lockfile unintentionally.
- No Node version file or `engines` field is set. The locked Astro compiler requires Node `^20.19.0` or `>=22.12.0`.
- `pnpm-workspace.yaml` allows install scripts for `esbuild` and `sharp`; retain these build approvals when updating workspace configuration.
- Prettier 3 with `prettier-plugin-astro` is the formatter. `.prettierrc` uses tabs, width 4, and single quotes.

## Testing & QA

- No test framework, test files, coverage setup, or CI test workflow is configured.
- For source changes, run `pnpm check` and `pnpm build`; inspect the relevant page in a browser for visible behavior changes.
- `pnpm lint` is a Prettier check, not ESLint. `pnpm format` modifies files and only covers `src/**/*.{astro,js,ts,css}`.
