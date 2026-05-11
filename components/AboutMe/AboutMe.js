import React from 'react';
import Link from 'next/link';

const AboutMe = () => (
  <section id="about-me" className="border-b border-hairline">
    <div className="container py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:gap-16">
        {/* Editorial column */}
        <div>
          <p className="num reveal reveal-1">§0.0 · About</p>
          <h1 className="display-1 mt-6 reveal reveal-2">
            A full-stack engineer<br className="hidden sm:inline" />{' '}
            who turns messy operational<br className="hidden sm:inline" />{' '}
            workflows into{' '}
            <span className="italic" style={{ fontVariationSettings: "'opsz' 60, 'wght' 480" }}>
              maintainable
            </span>{' '}
            software.
          </h1>
          <div className="mt-6 h-px w-24 bg-bone/40 reveal reveal-3" />
          <p className="lede mt-6 max-w-[60ch] reveal reveal-3">
            I&apos;m Andrew Horn — based in Amherst, New Hampshire. Strongest work
            is tested React/TypeScript interfaces, FastAPI and Node services,
            data-backed features, and codebases teams can safely extend.
          </p>
          <p className="mt-5 max-w-[60ch] font-serif text-[1.02rem] leading-relaxed text-bone/75 reveal reveal-3">
            Recent professional work: React/TypeScript and Python/FastAPI systems
            at MMIT, frontend architecture and review at CarePathRx, and React
            integration inside Centene&apos;s ASP.NET MVC provider portal.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4 reveal reveal-4">
            <Link href="/resume">
              <a className="cta">
                View resume
                <span aria-hidden="true">&rarr;</span>
              </a>
            </Link>
            <Link href="/contact">
              <a className="ulink">
                Contact me <span className="ulink__arrow" aria-hidden="true">&rarr;</span>
              </a>
            </Link>
            <a href="#featured-work" className="ulink">
              See work <span className="ulink__arrow" aria-hidden="true">&darr;</span>
            </a>
          </div>
        </div>

        {/* Marginalia column */}
        <aside className="grid gap-10 lg:pt-2">
          <div className="reveal reveal-3">
            <p className="num">Currently</p>
            <ul className="mt-4 grid gap-3 spec">
              <li className="grid grid-cols-[5.5rem_1fr] gap-3">
                <span className="text-halftone uppercase tracking-[0.14em] text-[0.66rem] pt-0.5">Building</span>
                <span>People Counter Dashboard — hardware → FastAPI → React, with version markers across the pipeline.</span>
              </li>
              <li className="grid grid-cols-[5.5rem_1fr] gap-3">
                <span className="text-halftone uppercase tracking-[0.14em] text-[0.66rem] pt-0.5">Reading</span>
                <span>Crafting Interpreters, Nystrom &mdash; chapter on tree-walk interpreters.</span>
              </li>
              <li className="grid grid-cols-[5.5rem_1fr] gap-3">
                <span className="text-halftone uppercase tracking-[0.14em] text-[0.66rem] pt-0.5">Open to</span>
                <span>Senior / staff full-stack roles, remote, US-based.</span>
              </li>
              <li className="grid grid-cols-[5.5rem_1fr] gap-3">
                <span className="text-halftone uppercase tracking-[0.14em] text-[0.66rem] pt-0.5">Likes</span>
                <span>Strict TypeScript, MSW, tabular nums, code review as teaching.</span>
              </li>
            </ul>
          </div>

          <div className="reveal reveal-4">
            <p className="num">Manifest</p>
            <dl className="mt-4 grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-2 spec">
              <dt>Location</dt><dd>Amherst, N.H.</dd>
              <dt>Years</dt><dd>6+ in production</dd>
              <dt>Stack</dt><dd>TypeScript &middot; Python</dd>
              <dt>Frontend</dt><dd>React &middot; Next.js &middot; Redux</dd>
              <dt>Backend</dt><dd>FastAPI &middot; Node &middot; Django REST</dd>
              <dt>Testing</dt><dd>RTL &middot; Jest &middot; MSW &middot; Playwright</dd>
              <dt>Shipped</dt><dd>Healthcare &middot; pharma research &middot; civic</dd>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default AboutMe;
