export const profile = {
  name: 'Andrew Horn',
  role: 'Full-stack engineer focused on React, TypeScript, Python, and production UI systems.',
  location: 'Amherst, New Hampshire',
  github: 'https://github.com/sophyphreak',
  linkedin: 'https://www.linkedin.com/in/andrewrhorn/',
  portfolio: 'https://ahorn.netlify.app/',
};

export const coreSkills = [
  {
    name: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Redux', 'Next.js', 'HTML', 'CSS'],
  },
  {
    name: 'Backend',
    items: ['Python', 'FastAPI', 'Node.js', 'Express', 'Django REST Framework', 'REST APIs'],
  },
  {
    name: 'Data',
    items: ['MongoDB', 'SQL', 'Mongoose', 'PyMongo', 'Web scraping', 'Data modeling'],
  },
  {
    name: 'Quality',
    items: ['Jest', 'React Testing Library', 'Mock Service Worker', 'Cypress', 'Playwright'],
  },
  {
    name: 'Delivery',
    items: ['Git', 'GitHub Actions', 'Docker', 'Netlify', 'Vercel', 'Agile/Scrum'],
  },
];

export const featuredProjects = [
  {
    title: 'People Counter Dashboard',
    eyebrow: 'Full-stack hardware dashboard',
    summary:
      'A local-first trail counter system for municipal or parks-department pilots, connecting Arduino sensor firmware to a Raspberry Pi FastAPI backend and React dashboard.',
    stack: ['React', 'TypeScript', 'FastAPI', 'WebSockets', 'SQLite', 'Arduino'],
    highlights: [
      'Built a runtime flow from PIR sensors through Arduino serial JSON into a FastAPI backend, live dashboard, and CSV/XLSX exports.',
      'Added operational version markers across firmware, backend, and frontend so field data can be traced to a known build.',
      'Documented validation standards, deployment procedure, hardware risks, and reliability gates for a credible pilot.',
      'Private repository; available to discuss architecture, implementation tradeoffs, and field-readiness process in interviews.',
    ],
    links: [],
  },
  {
    title: 'Registration Renewal Location Finder',
    eyebrow: 'Full-stack civic tool',
    summary:
      'A Harris County tool that helps residents find same-day vehicle registration renewal locations using a React frontend and scraped location data.',
    stack: ['React', 'TypeScript', 'Node.js', 'Puppeteer', 'End-to-end testing'],
    highlights: [
      'Built separate frontend and backend repositories around a practical civic data problem.',
      'Used web scraping to turn hard-to-use public information into searchable application data.',
      'Added integration and end-to-end test coverage around the critical user path.',
    ],
    links: [
      { label: 'Frontend', href: 'https://github.com/sophyphreak/car-renewal-frontend' },
      { label: 'Backend', href: 'https://github.com/sophyphreak/car-renewal-backend' },
    ],
  },
  {
    title: 'Word List App',
    eyebrow: 'Collaborative full-stack app',
    summary:
      'A language-learning app that lets users track unfamiliar words while reading, then review words prioritized by frequency.',
    stack: ['React', 'Django', 'Django REST Framework', 'Authentication', 'Netlify'],
    highlights: [
      'Built as part of a two-developer Chingu team with a full backend and frontend workflow.',
      'Implemented account-based CRUD flows for a real user workflow rather than a static demo.',
      'Connected a React client to a Django REST backend with validation and deployment concerns.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/chingu-voyages/v9-bears-team-13' }],
  },
  {
    title: 'Homeless in Houston',
    eyebrow: 'Service-location frontend',
    summary:
      'A React/Gatsby app built with a project partner to help people find nearby homeless services in Houston.',
    stack: ['React', 'Gatsby', 'Geolocation', 'Google Maps links', 'Netlify'],
    highlights: [
      'Sorted service locations by distance from the user to make the interface practical in the field.',
      'Designed around a concrete nonprofit/community use case with map directions for each result.',
      'Delivered as a deployed frontend with real-world service data and a clear user goal.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/sophyphreak/homeless-in-houston' }],
  },
];

export const experienceHighlights = [
  {
    role: 'Senior Software Engineer',
    company: 'MMIT',
    years: '2022-2023',
    summary:
      'Founding developer on a React, TypeScript, Python/FastAPI, and MongoDB rebuild of core pharmaceutical market research services.',
    bullets: [
      'Helped deliver the rebuilt core application in under seven months.',
      'Authored foundational table and form patterns used throughout the application.',
      'Implemented lineage functionality and introduced Jest, React Testing Library, and MSW coverage.',
    ],
  },
  {
    role: 'Senior React Developer',
    company: 'CarePathRx',
    years: '2021',
    summary:
      'Worked on the BioPlusRx portal, raising frontend code quality and mentoring a junior developer.',
    bullets: [
      'Reviewed all frontend code before merge.',
      'Created a frontend style guide and cleaned up dead/commented code.',
      'Built portal features including dashboard and provider portal MVP work.',
    ],
  },
  {
    role: 'React / .NET Developer',
    company: 'Centene',
    years: '2020-2021',
    summary:
      'Led React work inside an ASP.NET MVC provider portal environment for a Fortune 50 healthcare company.',
    bullets: [
      'Led development of the first React application added to the Provider Portal.',
      'Coordinated backend integration and SQL-backed API workflows.',
      'Taught React to the Web Portal team through internal training sessions.',
    ],
  },
];
