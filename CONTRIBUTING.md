# Contributing Guide

Thanks for your interest in improving Pensador API! This guide explains how to propose changes, report issues, and submit pull requests with minimal friction.

## Ways To Contribute

- Report bugs and regressions
- Propose or help implement features
- Improve docs and examples
- Triage issues and review PRs

## Code of Conduct

By participating, you agree to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please keep interactions respectful and inclusive.

## Before You Start

- Search existing [issues](https://github.com/hebertcisco/pensador-api/issues) to avoid duplicates.
- For security vulnerabilities, do not open a public issue. Email: <opensource@hotbrains.com.br>

## Development Setup

Prerequisites:

- Node.js 18+ and npm 9+

Steps:

1. Fork the repo and clone your fork
2. Install dependencies: `npm install`
3. Copy env file: `cp .env.example .env.local` and adjust values if needed
4. Start development server: `npm run dev`
5. Build for production: `npm run build`

Common scripts:

- `npm run dev` — runs the API with nodemon for live reload
- `npm run build` — transpiles TypeScript with Sucrase into `dist/`

## Linting and Formatting

We use ESLint (Airbnb + Prettier) and Prettier.

- Check lint: `npx eslint .`
- Fix lint: `npx eslint . --fix`
- Check formatting: `npx prettier --check .`
- Format: `npx prettier --write .`

Please run lint and format before pushing.

## Commit Style

Use Conventional Commits to keep history readable and automate changelogs:

- `feat: add search endpoint`
- `fix: handle empty author`
- `docs: update README with example`
- `refactor: simplify route middleware`
- `chore: bump dependencies`
- `test: add unit tests for parser`

Scope is optional but encouraged, e.g., `feat(api): add quotes list`.

## Pull Requests

1. Create a branch from `main` with a descriptive name (e.g., `feat/quotes-pagination` or `fix/404-on-empty-query`).
2. Ensure your change is focused; avoid mixing unrelated changes.
3. Update documentation and examples if behavior changes.
4. Run build, lint, and formatting locally.
5. Open a PR and fill out the template (what, why, how tested, screenshots/logs when relevant).

PR checklist:

- [ ] Change is scoped and documented
- [ ] `npm run build` succeeds
- [ ] `npx eslint .` passes or is justified
- [ ] `npx prettier --check .` passes
- [ ] Environment or config changes are described

## Reporting Issues

When filing a bug report, include:

- What happened vs. what you expected
- Steps to reproduce (ideally with a minimal request/curl)
- Endpoint(s) affected and example payloads
- Logs or stack traces (sanitize secrets)
- Environment details (Node version, OS, local/Docker/Vercel)

For feature requests, share the problem, who benefits, proposed API changes, and any alternatives considered.

## Project Structure (Quick Reference)

- `src/` — API source (TypeScript)
- `dist/` — build output (generated)
- `.env.example` — example environment variables
- `vercel.json` — deployment config for Vercel

If anything in this guide is unclear, please open a docs issue or PR to improve it. Thank you for helping make Pensador API better!
