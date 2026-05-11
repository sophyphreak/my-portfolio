import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Online from './Online/Online';
import FeaturedProjects from './FeaturedProjects';
import ExperienceHighlights from './ExperienceHighlights';
import Technologies from './Technologies';
import StatusBar from './StatusBar';

class App extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Andrew Horn · Full-Stack Engineer</title>
          <meta
            name="description"
            content="Andrew Horn is a full-stack engineer focused on React, TypeScript, Python, FastAPI, testing, and production UI systems."
          />
        </Head>
        <StatusBar />
        <main className="min-h-screen">
          <AboutMe />
          <Online />
          <div className="container">
            <FeaturedProjects />
            <ExperienceHighlights />
            <Technologies />
            <Projects />
          </div>

          {/* §∞ — Final hiring CTA */}
          <section id="hiring" className="border-t border-hairline">
            <div className="container py-20 md:py-28">
              <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-end lg:gap-16">
                <div>
                  <p className="num">§∞ · Hiring?</p>
                  <h2 className="display-1 mt-6">
                    Let&apos;s talk about<br className="hidden sm:inline" />{' '}
                    the role.
                  </h2>
                  <p className="lede mt-6 max-w-[60ch]">
                    Open to senior and staff full-stack roles &mdash; remote,
                    US-based. A short note is fine: paste the JD, tell me what
                    you&apos;re trying to ship. Replies within two business days.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-5 lg:justify-end">
                  <Link href="/contact">
                    <a className="cta">
                      Contact me <span aria-hidden="true">&rarr;</span>
                    </a>
                  </Link>
                  <Link href="/resume">
                    <a className="ulink">
                      View resume <span className="ulink__arrow" aria-hidden="true">&rarr;</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <footer className="border-t border-hairline">
            <div className="container py-10">
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <p className="mono text-[0.7rem] uppercase tracking-[0.16em] text-halftone">
                  &copy; {new Date().getFullYear()} Andrew Horn &middot; Amherst, N.H.
                </p>
                <p className="mono text-[0.7rem] uppercase tracking-[0.16em] text-halftone">
                  Set in Newsreader &amp; JetBrains Mono &middot; Built with Next.js
                </p>
              </div>
            </div>
          </footer>
        </main>
      </>
    );
  }
}

export default App;
