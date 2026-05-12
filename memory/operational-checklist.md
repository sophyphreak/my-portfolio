# Operational Checklist

Use this checklist before committing portfolio changes.

## Before Edits

```bash
git status --short --branch
```

Do not revert user or tool-generated changes unless explicitly asked.

## Validation

Run:

```bash
yarn build
yarn lint
yarn audit --json
```

Expected:

- Build should pass.
- Audit should report zero vulnerabilities.
- Lint may show archived-project anonymous-default-export warnings, but should have zero errors.

## Local Server

Use:

```bash
yarn start -p 3010
```

Port `3000` is often occupied by an old dev server on Andrew's machine. Port `3010` has been used for portfolio review.

Smoke-test:

```bash
node -e "const http=require('http'); for (const p of ['/', '/resume', '/contact', '/favicon.ico', '/favicon.png']) http.get('http://127.0.0.1:3010'+p,res=>{console.log(p,res.statusCode,res.headers['content-type']||'');res.resume();}).on('error',e=>console.error(p,e.message));"
```

## Commit Style

Recent commits:

- `d59e7ca Refresh portfolio for full-stack roles`
- `957d086 Upgrade portfolio dependencies`
- `626994f Restore Tailwind 3 styling`
- `aacf4c4 Add custom favicon`

Use small direct commit messages for future work.

