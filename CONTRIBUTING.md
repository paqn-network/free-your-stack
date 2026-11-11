# Contributing

Thanks for helping. The most useful contributions are corrections and new tool suggestions.

## Suggesting a tool or a correction

Open an issue using the "Suggest a tool or correction" template, or edit `src/data/stack.ts` and open a pull request. Each tool needs a name, an `https://` link, an effort level (`ready`, `setup` or `managed`) and a one-line reason written in plain English.

We only list tools that are open source or that respect privacy by design, and that a small organisation could realistically adopt.

## Code changes

```bash
npm install
npm test          # unit tests (Vitest)
npm run typecheck # TypeScript
npm run build
```

All three must pass; CI runs them on every pull request. Add or update tests in `src/data/__tests__/` when you change behaviour.

## Reporting bugs

Open a GitHub issue with what you did, what you expected and what happened. For security issues, see [SECURITY.md](SECURITY.md) and email us instead.

## Conduct

Be kind and assume good faith. We will remove comments or contributions that are abusive.

By contributing you agree your contribution is licensed under the AGPL-3.0, the same as the project.
