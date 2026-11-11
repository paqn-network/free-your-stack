# Changelog

## 1.0.1 (2026-11-11)

- Security: upgraded the build and test toolchain (Vite 7, Vitest 4, @vitejs/plugin-react 5) to clear advisories in development-only dependencies (esbuild dev server, Vitest). The published app was not affected. `npm audit` now reports 0 vulnerabilities.

## 1.0.0 (2026-11-11)

- First public release, extracted from paqn.network.
- 12 categories of paid tools with open-source alternatives and effort levels.
- Copy or download your checklist as Markdown. Runs fully in the browser.
- Unit tests, CI (typecheck, tests, build) and CodeQL static analysis.
