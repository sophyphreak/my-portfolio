import React from 'react';
import { experienceHighlights } from './portfolioContent';

const ExperienceHighlights = () => (
  <section id="experience" className="section">
    <div className="flex items-baseline gap-3">
      <span className="num">§2.0 · Experience</span>
      <span className="rule h-px flex-1" />
      <span className="eyebrow">{experienceHighlights.length} roles</span>
    </div>

    <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:gap-16">
      <div className="max-w-[60ch]">
        <h2 className="display-2">
          Production software in<br className="hidden sm:inline" />{' '}
          healthcare, pharma research,<br className="hidden sm:inline" />{' '}
          and civic technology.
        </h2>
        <p className="lede mt-6">
          Three senior-engineer roles between 2020 and 2023, plus continuing
          independent work since.
        </p>
      </div>
      <p className="spec lg:pt-3">
        Career arc: React-into-.NET portal work at a Fortune-50 healthcare insurer,
        frontend leadership at a specialty pharmacy, founding developer on a
        ground-up pharma rebuild.
      </p>
    </div>

    <ol className="mt-12 grid gap-0">
      {experienceHighlights.map((item, index) => (
        <li
          key={`${item.company}-${item.role}`}
          className="grid gap-8 border-t border-hairline py-10 sm:grid-cols-[10rem_1fr] sm:gap-10"
        >
          <div>
            <p className="num">{item.years}</p>
            <p className="mono mt-2 text-[0.66rem] uppercase tracking-[0.16em] text-halftone">
              Role {String(index + 1).padStart(2, '0')} / {String(experienceHighlights.length).padStart(2, '0')}
            </p>
          </div>
          <article>
            <h3 className="display-3">
              {item.role}
              <span className="text-bone/45">, </span>
              <span className="text-bone/80">{item.company}</span>
            </h3>
            <p className="mt-4 max-w-[60ch] font-serif text-[1.05rem] leading-relaxed text-bone/85">
              {item.summary}
            </p>
            <ul className="mt-5 grid gap-2.5">
              {item.bullets.map(bullet => (
                <li key={bullet} className="grid grid-cols-[0.8rem_1fr] gap-2 font-serif text-[0.98rem] leading-relaxed text-bone/80">
                  <span className="text-caution pt-0.5">&rsaquo;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  </section>
);

export default ExperienceHighlights;
