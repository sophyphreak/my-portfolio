# Site Content Notes

## Positioning

The site should present Andrew as a full-stack engineer for senior or staff roles, with emphasis on:

- React / TypeScript interfaces.
- Python / FastAPI and Node services.
- Testing with Jest, React Testing Library, MSW, Cypress, and Playwright.
- Operational workflow software and codebases teams can extend.

## Contact

Do not expose an email address publicly. The site uses a Netlify contact form at `/contact`.

The visible form posts to `/` with `form-name=contact`. `_document.tsx` contains a hidden Netlify form for form detection.

## Projects

Current featured projects live in `components/portfolioContent.js`.

Important project rules:

- People Counter Dashboard is private. It is OK to describe it and say it is available to discuss in interviews.
- Do not add a public repo link for People Counter Dashboard.
- Registration Renewal Location Finder has public frontend/backend GitHub repo links.
- The old freeCodeCamp profile link was removed because the URL returned `404`.
- Avoid re-adding `mailto:` links or public email text.

## Favicon

The current favicon came from:

`/home/andrew/Downloads/nano-banana-2-kn72mgm8pkz6kqqxyygpyqr5vh86kncb.png`

Generated assets:

- `public/favicon.ico`
- `public/favicon.png`
- `public/apple-touch-icon.png`

`pages/_document.tsx` explicitly links all three.

