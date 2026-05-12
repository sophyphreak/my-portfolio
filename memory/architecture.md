# Architecture Notes

## Main Pages

- `pages/index.tsx` renders `components/App.js`.
- `pages/resume.tsx` is the resume page.
- `pages/contact.tsx` is the contact form page.
- `pages/_document.tsx` includes font links, favicon links, theme color, and the hidden Netlify form.

## Main Components

- `components/App.js`: homepage shell and section order.
- `components/StatusBar.tsx`: sticky top identity/nav bar.
- `components/AboutMe/AboutMe.js`: hero/about section and primary CTAs.
- `components/Online/Online.js`: social links.
- `components/FeaturedProjects.js`: current project showcase.
- `components/ExperienceHighlights.js`: summarized roles.
- `components/Technologies.tsx`: skill/technology presentation.
- `components/Projects/Projects.js`: appendix link to GitHub, not the old full archive UI.
- `components/portfolioContent.js`: central content for profile, skills, featured projects, and experience highlights.

## Styling

- Global styling is in `styles/globals.css`.
- Tailwind config is in `tailwind.config.js`.
- PostCSS config uses Tailwind 3 syntax:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Do not switch this to `@tailwindcss/postcss` unless also doing a deliberate Tailwind 4 migration with full visual regression checks.

## Legacy Files

There are old project archive files under `components/Projects/**/individualProjects`. They still exist and trigger anonymous-default-export lint warnings, but the current homepage does not render the full old archive. Avoid large cleanups there unless explicitly asked.

