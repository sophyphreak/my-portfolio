# Dependency Upgrade Notes

## What Changed Recently

The dependency security work upgraded the runtime to:

- `next@^16.2.6`
- `react@^19.2.6`
- `react-dom@^19.2.6`

Tooling now includes:

- `eslint@9.39.4`
- `eslint-config-next@^16.2.6`
- `typescript@^6.0.3`
- `tailwindcss@3.4.17`
- `postcss@^8.5.14`

FontAwesome was migrated away from deprecated `@fortawesome/fontawesome-free-brands` to:

- `@fortawesome/free-brands-svg-icons`
- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/react-fontawesome`

The GitHub icon import in `components/Projects/SingleProject.js` uses `@fortawesome/free-brands-svg-icons`.

## Resolutions

`package.json` has Yarn resolutions for patched transitive packages:

- `postcss`
- `minimatch`
- `picomatch`
- `brace-expansion`
- `flatted`

These were added to get `yarn audit --json` to zero vulnerabilities while keeping compatible upstream packages.

## Tailwind 4 Warning

Tailwind 4 was tried and reverted. It caused pages to render mostly unstyled at runtime. The symptom was a large dark page with missing responsive layout and much of the intended spacing/typography. Tailwind 3.4.17 restored the design.

If a future session upgrades Tailwind:

1. Run `yarn build`.
2. Start the site locally.
3. Verify generated CSS contains responsive utilities such as `md\:py-24`, `sm\:flex-row`, `lg\:grid-cols`, arbitrary max-width classes, and the custom `.display-1` / `.cta` classes.
4. Visually inspect `/`, `/resume`, and `/contact`.

