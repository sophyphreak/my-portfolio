import type { NextPage } from 'next';
import { coreSkills } from './portfolioContent';

const Technologies: NextPage = () => (
  <section id="skills" className="section">
    <div className="flex items-baseline gap-3">
      <span className="num">§3.0 · Skills</span>
      <span className="rule h-px flex-1" />
      <span className="eyebrow">{coreSkills.length} groups</span>
    </div>

    <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:gap-16">
      <div className="max-w-[60ch]">
        <h2 className="display-2">Core technologies.</h2>
        <p className="lede mt-6">
          The tools I&apos;d expect to use on a modern full-stack team, in
          rough order of how often I reach for them.
        </p>
      </div>
      <p className="spec lg:pt-3">
        Comma-separated, no logos, no proficiency bars. If it&apos;s on this list,
        I&apos;ve shipped or tested production code with it.
      </p>
    </div>

    <dl className="mt-12 grid gap-0">
      {coreSkills.map((group, i) => (
        <div
          key={group.name}
          className="grid gap-4 border-t border-hairline py-6 sm:grid-cols-[10rem_1fr] sm:gap-10 sm:py-7"
        >
          <dt>
            <p className="num">N&deg; {String(i + 1).padStart(2, '0')}</p>
            <p
              className="mt-2 font-serif text-[1.4rem] leading-tight"
              style={{ fontVariationSettings: "'opsz' 36, 'wght' 500" }}
            >
              {group.name}
            </p>
          </dt>
          <dd className="spec self-center">
            {group.items.map((item, idx) => (
              <span key={item}>
                <span className="text-bone">{item}</span>
                {idx < group.items.length - 1 && (
                  <span className="text-halftone"> &middot; </span>
                )}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Technologies;
