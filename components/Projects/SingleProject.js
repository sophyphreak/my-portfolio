import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import dynamic from 'next/dynamic';

const Iframe = dynamic(() => import('./Iframe'));

const SingleProject = ({ title, demo, subtitle, github, text }) => (
  <details className="group px-4 py-3">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
      <span>{title}</span>
      <span className="text-muted-foreground transition-transform group-open:rotate-45">
        +
      </span>
    </summary>
    <div className="mt-4 space-y-4 pb-2">
      <p className="leading-7 text-muted-foreground">{subtitle}</p>
      {text ? <p className="text-sm text-muted-foreground">{text}</p> : null}
      <div className="flex flex-wrap gap-3">
        {demo ? (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Demo
          </a>
        ) : null}
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-md border border-input bg-background px-3 text-sm font-medium shadow-sm hover:bg-muted"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        ) : null}
      </div>
      {demo ? (
        <div className="overflow-hidden rounded-md border border-border">
          <Iframe demo={demo} />
        </div>
      ) : null}
    </div>
  </details>
);

export default SingleProject;
