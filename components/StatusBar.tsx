import Link from 'next/link';

const StatusBar = () => (
  <div className="sticky top-0 z-40 border-b border-hairline bg-ink/85 backdrop-blur supports-[backdrop-filter]:bg-ink/70">
    <div className="container flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="mono text-[0.78rem] leading-tight text-bone">
        <span className="text-caution">$</span>{' '}
        <span className="text-bone/90">andrew.horn</span>
        <span className="hidden text-bone/40 sm:inline"> &nbsp;—&nbsp; </span>
        <span className="text-bone/55 sm:hidden"> · </span>
        <span className="text-bone/80">Senior Full-Stack Engineer</span>
        <span className="text-bone/40"> · </span>
        <span className="text-bone/80">Amherst, NH</span>
        <span className="hidden text-bone/40 min-[420px]:inline"> · </span>
        <span className="hidden text-bone/80 min-[420px]:inline">Open to remote roles</span>
        <span className="caret" aria-hidden="true" />
      </p>
      <nav className="flex items-center gap-5">
        <Link href="/">
          <a className="nav-link mono text-[0.66rem] uppercase tracking-[0.18em] text-bone/55 transition-colors hover:text-caution focus-visible:text-caution">
            ~/work
          </a>
        </Link>
        <Link href="/resume">
          <a className="nav-link mono text-[0.66rem] uppercase tracking-[0.18em] text-bone/55 transition-colors hover:text-caution focus-visible:text-caution">
            ~/resume
          </a>
        </Link>
        <Link href="/contact">
          <a className="nav-link mono text-[0.66rem] uppercase tracking-[0.18em] text-bone/55 transition-colors hover:text-caution focus-visible:text-caution">
            ~/contact
          </a>
        </Link>
      </nav>
    </div>
  </div>
);

export default StatusBar;
