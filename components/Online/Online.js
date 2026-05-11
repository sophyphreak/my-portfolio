import React from 'react';
import { profile } from '../portfolioContent';

const links = [
  { label: 'GitHub', href: profile.github, handle: '@sophyphreak' },
  { label: 'LinkedIn', href: profile.linkedin, handle: 'in/andrewrhorn' },
];

const Online = () => (
  <section id="online" className="border-b border-hairline">
    <div className="container py-5">
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
        {links.map(link => (
          <li key={link.href} className="flex items-baseline gap-2">
            <span className="mono text-[0.66rem] uppercase tracking-[0.18em] text-halftone">
              {link.label}
            </span>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="mono text-[0.82rem] text-bone underline decoration-bone/25 underline-offset-4 transition-colors hover:text-caution hover:decoration-caution"
            >
              {link.handle}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Online;
