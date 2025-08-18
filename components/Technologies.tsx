import type { NextPage } from 'next';
import {
  Box,
  Heading,
  SimpleGrid,
  Tag,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

type Category = { name: string; items: string[] };

const categories: Category[] = [
  {
    name: 'Languages',
    items: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Go',
      'Java',
      'SQL',
      'HTML5',
      'CSS3',
    ],
  },
  {
    name: 'Frontend Libraries',
    items: [
      'React',
      'Redux',
      'Redux Thunk',
      'Redux Saga',
      'React Router',
      'React Hook Form',
      'Formik',
    ],
  },
  {
    name: 'Frameworks',
    items: ['Gatsby', 'Next.js', 'Astro', 'Docz', 'Storybook'],
  },
  {
    name: 'UI / Styling',
    items: [
      'Material-UI',
      'Chakra UI',
      'Bootstrap',
      'Reactstrap',
      'Semantic UI React',
      'Emotion',
      'Styled-components',
      'Tailwind CSS',
      'D3',
      'React Data Grid',
      'Sass',
      'SCSS',
      'PostCSS',
    ],
  },
  {
    name: 'Testing',
    items: [
      'Jest',
      'React Testing Library',
      'Mock Service Worker',
      'Cypress',
      'ts-jest',
      'Babel Jest',
      'Playwright',
      'Puppeteer',
    ],
  },
  {
    name: 'Backend / APIs',
    items: [
      'Node.js',
      'Express',
      'Socket.IO',
      'Passport',
      'FastAPI',
      'Flask',
      'Flask-RESTful',
      'Django',
      'Django REST Framework',
    ],
  },
  {
    name: 'Data',
    items: ['MongoDB', 'Mongoose', 'PyMongo', 'Prisma', 'Firebase'],
  },
  { name: 'HTTP / Networking', items: ['Axios', 'node-fetch'] },
  {
    name: 'Tooling',
    items: [
      'Webpack',
      'Babel',
      'ESLint',
      'Prettier',
      'Stylelint',
      'Husky',
      'lint-staged',
      'TypeScript config',
      'Go modules',
      'Gradle',
      'npm',
      'Yarn',
      'pnpm',
    ],
  },
  {
    name: 'CI / DevOps',
    items: ['GitHub Actions', 'Docker', 'Netlify', 'Vercel', 'Heroku'],
  },
  { name: 'AI', items: ['Cursor', 'Claude Code', 'GPT-5'] },
  { name: 'Process', items: ['Agile', 'SAFe', 'Scrum'] },
  { name: 'Versioning', items: ['git', 'Github'] },
  { name: 'Other', items: ['PDF.js'] },
];

const tagColorScheme = 'teal';

const Technologies: NextPage = () => {
  return (
    <section className="tech">
      <h2 className="tech__title">Technologies</h2>
      <div className="tech-container">
        <Box w="100%">
          <SimpleGrid columns={3} spacing={6}>
            {categories.map(category => (
              <Box
                key={category.name}
                borderWidth="1px"
                borderRadius="md"
                p={4}
                boxShadow="sm"
                bg="white"
              >
                <Heading as="h3" size="md" mb={3}>
                  {category.name}
                </Heading>
                <Wrap shouldWrapChildren>
                  {category.items.map(tech => (
                    <WrapItem key={tech}>
                      <Tag size="md" colorScheme={tagColorScheme}>
                        {tech}
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </div>
    </section>
  );
};

export default Technologies;
