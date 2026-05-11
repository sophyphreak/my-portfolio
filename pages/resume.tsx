import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { coreSkills, experienceHighlights, profile } from '../components/portfolioContent';
import StatusBar from '../components/StatusBar';

const education = [
  'B.A. Economics, cum laude — St. Mary’s College of Maryland',
  'Chinese language studies — HSK 5 certified',
  'Georgia Tech professional certificates — DSA, OOP with Java, intro to Python',
  'Kent C. Dodds — Epic React and Testing JavaScript coursework',
  'freeCodeCamp — frontend, JavaScript, and backend/API certifications',
];

const Resume: NextPage = () => (
  <>
    <Head>
      <title>Andrew Horn · Resume</title>
      <meta
        name="description"
        content="Resume for Andrew Horn, full-stack engineer focused on React, TypeScript, Python, and production UI systems."
      />
    </Head>
    <StatusBar />
    <main className="min-h-screen">
      <article className="container py-16 md:py-24">
        <header>
          <p className="num">§R · Resume</p>
          <h1 className="display-1 mt-6">{profile.name}</h1>
          <div className="mt-6 h-px w-24 bg-bone/40" />
          <p className="lede mt-6 max-w-[62ch]">{profile.role}</p>
          <p className="mt-3 mono text-[0.78rem] uppercase tracking-[0.16em] text-halftone">
            {profile.location} &middot; Open to remote full-stack engineering roles
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact"><a className="cta">Contact me <span aria-hidden="true">&rarr;</span></a></Link>
            <a href={profile.github} target="_blank" rel="noreferrer" className="ulink">
              GitHub <span className="ulink__arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="ulink">
              LinkedIn <span className="ulink__arrow" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </header>

        <section className="mt-20">
          <div className="flex items-baseline gap-3">
            <span className="num">§R.1 · Summary</span>
            <span className="rule h-px flex-1" />
          </div>
          <p className="mt-8 max-w-[68ch] font-serif text-[1.1rem] leading-relaxed text-bone/90">
            Full-stack engineer with professional experience building React,
            TypeScript, Python/FastAPI, MongoDB, SQL-backed, and ASP.NET
            MVC-integrated applications. Strongest in frontend architecture, code
            quality, testing, API integration, and translating messy operational
            workflows into maintainable software.
          </p>
        </section>

        <section className="mt-20">
          <div className="flex items-baseline gap-3">
            <span className="num">§R.2 · Experience</span>
            <span className="rule h-px flex-1" />
            <span className="eyebrow">{experienceHighlights.length} roles</span>
          </div>
          <ol className="mt-10 grid gap-0">
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
                <div>
                  <h3 className="display-3">
                    {item.role}<span className="text-bone/45">, </span><span className="text-bone/80">{item.company}</span>
                  </h3>
                  <p className="mt-4 max-w-[60ch] font-serif text-[1.05rem] leading-relaxed text-bone/85">{item.summary}</p>
                  <ul className="mt-5 grid gap-2.5">
                    {item.bullets.map(bullet => (
                      <li key={bullet} className="grid grid-cols-[0.8rem_1fr] gap-2 font-serif text-[0.98rem] leading-relaxed text-bone/80">
                        <span className="text-caution pt-0.5">&rsaquo;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20">
          <div className="flex items-baseline gap-3">
            <span className="num">§R.3 · Skills</span>
            <span className="rule h-px flex-1" />
          </div>
          <dl className="mt-10 grid gap-0">
            {coreSkills.map((group, i) => (
              <div
                key={group.name}
                className="grid gap-4 border-t border-hairline py-6 sm:grid-cols-[10rem_1fr] sm:gap-10 sm:py-7"
              >
                <dt>
                  <p className="num">N&deg; {String(i + 1).padStart(2, '0')}</p>
                  <p
                    className="mt-2 font-serif text-[1.3rem] leading-tight"
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

        <section className="mt-20">
          <div className="flex items-baseline gap-3">
            <span className="num">§R.4 · Education &amp; training</span>
            <span className="rule h-px flex-1" />
          </div>
          <ul className="mt-8 grid gap-2.5">
            {education.map(line => (
              <li key={line} className="grid grid-cols-[0.8rem_1fr] gap-3 font-serif text-[1rem] leading-relaxed text-bone/85">
                <span className="text-caution pt-0.5">&rsaquo;</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-24 border-t border-hairline pt-6">
          <p className="mono text-[0.7rem] uppercase tracking-[0.16em] text-halftone">
            End of resume &middot; Set in Newsreader &amp; JetBrains Mono
          </p>
        </footer>
      </article>
    </main>
  </>
);

export default Resume;
