export interface DummyProjectDetail {
  contributors: string[];
  longDescription: string;
  technologies: string[];
  functionality: string[];
  assets: string[];
  videoUrl: string;
}

const CONTRIBUTORS = [
  ['Abdelkader Bouzomita', 'Sara El Idrissi', 'Yassine Lahlou'],
  ['Abdelkader Bouzomita', 'Nora Benali', 'Anas Chraibi', 'Lina Berrada'],
  ['Abdelkader Bouzomita', 'Hamza El Fassi'],
];

const LONG_DESCRIPTIONS = [
  'This project was built as a full product simulation to demonstrate end-to-end engineering quality. It focuses on robust UX patterns, responsive performance, and maintainable architecture while handling realistic business flows and complex edge cases.',
  'This project explores a modern web platform experience with strong emphasis on scalability and clarity. The implementation combines a modular front-end architecture, predictable state transitions, and production-oriented engineering practices.',
  'This project is a portfolio-grade showcase of practical software craftsmanship. It demonstrates iterative feature delivery, clean component boundaries, and resilient integrations across data, UI interactions, and deployment constraints.',
];

const TECHNOLOGY_STACKS = [
  ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Query', 'Contentful'],
  ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
  ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'Vercel'],
];

const FUNCTIONALITY_SETS = [
  [
    'Authentication and role-based access control',
    'Advanced filtering, search, and pagination',
    'Dashboard analytics with KPI cards',
    'Asset management and media previews',
    'Notification system with optimistic updates',
  ],
  [
    'Multi-step onboarding and guided setup',
    'Project workspace with collaborative editing',
    'Real-time status updates and activity timeline',
    'Admin controls and environment toggles',
    'Export and reporting workflows',
  ],
  [
    'Reusable UI blocks for rapid page composition',
    'Content ingestion and structured rendering',
    'SEO-ready route-level metadata handling',
    'Responsive media galleries and embeds',
    'Error boundaries and graceful fallback states',
  ],
];

const ASSET_SETS = [
  ['User-flow wireframes', 'UI kit', 'Brand icon set', 'Feature walkthrough screenshots'],
  ['Data model diagram', 'API contract docs', 'Admin dashboard screenshots', 'Release notes'],
  ['Interaction prototypes', 'Marketing visuals', 'Performance audit report', 'Demo checklist'],
];

const VIDEO_URLS = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'https://www.youtube.com/watch?v=jNQXAC9IVRw',
];

const hash = (value: string): number => {
  return Array.from(value).reduce(
    (acc, char) => (acc + char.charCodeAt(0)) % 100000,
    0
  );
};

export const getDummyProjectDetail = (
  projectId: string,
  projectTitle?: string
): DummyProjectDetail => {
  const index = hash(projectId || projectTitle || 'project') % 3;

  return {
    contributors: CONTRIBUTORS[index],
    longDescription: `${projectTitle || 'This project'} - ${LONG_DESCRIPTIONS[index]}`,
    technologies: TECHNOLOGY_STACKS[index],
    functionality: FUNCTIONALITY_SETS[index],
    assets: ASSET_SETS[index],
    videoUrl: VIDEO_URLS[index],
  };
};
