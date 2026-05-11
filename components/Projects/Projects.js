import React from 'react';

const ARCHIVE_HREF = 'https://github.com/sophyphreak';

const Projects = () => (
  <section id="archive" className="border-t border-hairline pt-10 pb-16">
    <p className="num">Appendix A</p>
    <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-10">
      <p className="font-serif text-[1rem] leading-relaxed text-bone/75">
        Earlier practice work &mdash; roughly 50&#8239;+ freeCodeCamp and coursework
        exercises (React, Node, Flask, Go, full-stack apps) shipped between
        2018 and 2019. Kept for archeological completeness; the featured projects
        above are the current representation of my engineering profile.
      </p>
      <a
        href={ARCHIVE_HREF}
        target="_blank"
        rel="noreferrer"
        className="ulink justify-self-start sm:justify-self-end"
      >
        See on GitHub
        <span className="ulink__arrow" aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </section>
);

export default Projects;
