import React from 'react';
import { featuredProjects } from './portfolioContent';

const projectYears = [
  '2025 — present',
  '2020 — 2021',
  '2019',
  '2019',
];

const projectStatuses = [
  'private repo · interview discussion',
  'public frontend/backend repos',
  'archived · public repo',
  'archived · public repo',
];

const FeaturedProjects = () => (
  <section id="featured-work" className="section">
    <div className="flex items-baseline gap-3">
      <span className="num">§1.0 · Featured work</span>
      <span className="rule h-px flex-1" />
      <span className="eyebrow">4 entries</span>
    </div>

    <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:gap-16">
      <div className="max-w-[60ch]">
        <h2 className="display-2">
          Selected projects worth a<br className="hidden sm:inline" />{' '}
          hiring manager&apos;s time.
        </h2>
        <p className="lede mt-6">
          Real user problems, frontend/backend decisions, testing, deployment,
          architecture. Lead entry is the most current and most unusual.
        </p>
      </div>
      <p className="spec lg:pt-3">
        Each entry has a brief prose summary and a mono spec block: stack, year,
        status, and (where public) repository links. The lead project is private
        — available to walk through in interviews.
      </p>
    </div>

    <ol className="mt-12 grid gap-0">
      {featuredProjects.map((project, index) => (
        <li
          key={project.title}
          className="grid gap-8 border-t border-hairline py-10 lg:grid-cols-[1.5fr_0.9fr] lg:gap-12"
        >
          {/* Prose */}
          <article>
            <p className="num">
              N&deg; {String(index + 1).padStart(2, '0')} &middot; {project.eyebrow}
            </p>
            <h3 className="display-3 mt-3">{project.title}</h3>
            <p className="mt-4 max-w-[60ch] font-serif text-[1.05rem] leading-relaxed text-bone/85">
              {project.summary}
            </p>
            <ul className="mt-5 grid gap-2.5">
              {project.highlights.map(highlight => (
                <li key={highlight} className="grid grid-cols-[0.8rem_1fr] gap-2 font-serif text-[0.98rem] leading-relaxed text-bone/80">
                  <span className="text-caution pt-0.5">&rsaquo;</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Mono spec block */}
          <aside className="lg:pt-7">
            <p className="num">Spec</p>
            <dl className="mt-3 grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-2 spec">
              <dt>Year</dt>
              <dd>{projectYears[index] || '—'}</dd>
              <dt>Status</dt>
              <dd>{projectStatuses[index] || '—'}</dd>
              <dt>Stack</dt>
              <dd>
                {project.stack.map((t, i) => (
                  <span key={t}>
                    {t}
                    {i < project.stack.length - 1 && (
                      <span className="text-halftone"> · </span>
                    )}
                  </span>
                ))}
              </dd>
              {project.links.length > 0 && (
                <>
                  <dt>Links</dt>
                  <dd className="flex flex-wrap gap-x-3">
                    {project.links.map(link => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-bone underline decoration-bone/30 underline-offset-2 transition-colors hover:text-caution hover:decoration-caution"
                      >
                        {link.label.toLowerCase()}
                      </a>
                    ))}
                  </dd>
                </>
              )}
            </dl>
          </aside>
        </li>
      ))}
    </ol>
  </section>
);

export default FeaturedProjects;
