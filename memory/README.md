# Memory Handoff

This folder captures repo-specific context for future LLM sessions. Start here, then read the more focused notes as needed.

## Current Goal

This is Andrew Horn's portfolio site, tuned for future employers hiring full-stack engineers. The current direction is a dark editorial / field-notes visual system with shadcn-compatible Tailwind tokens, strong resume/contact CTAs, and a private People Counter Dashboard project that is discussed but not linked.

## Current Stack

- Next.js `16.2.6` using the Pages Router.
- React `19.2.6`.
- Tailwind CSS `3.4.17`.
- ESLint `9.39.4` with `eslint.config.mjs`.
- Yarn v1 lockfile.

Important: Tailwind was intentionally kept on v3. A brief Tailwind 4 upgrade broke the design because existing arbitrary responsive utilities/theme behavior did not compile the same way. Do not upgrade Tailwind to v4 casually.

## Key Commands

```bash
yarn build
yarn lint
yarn audit --json
yarn start -p 3010
```

`yarn lint` currently exits successfully but reports warnings from old archived project data files that use anonymous default exports.

## Current Health

As of the latest checked state:

- `yarn build` passes.
- `yarn audit --json` reports zero vulnerabilities.
- `/`, `/resume`, `/contact`, `/favicon.ico`, and `/favicon.png` returned `200` on local checks.
- Latest pushed commit at time of writing: `aacf4c4 Add custom favicon`.

