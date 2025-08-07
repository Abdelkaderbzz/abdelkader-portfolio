import {
  LucideIcon,
  Code,
  Layout,
  Palette,
  Smartphone,
  Globe,
  Database,
  Server,
  GitBranch,
  Figma,
  MessageSquare,
  BookOpen,
  Calendar,
} from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  link: string;
  github?: string;
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
}


export const personalInfo = {
  name: 'Abdelkader Bouzomita',
  title: 'Frontend Developer',
  email: 'abdelkader.bouzomita@gmail.com',
  location: 'Sousse, Tunisia',
  bio: 'Frontend Developer with three years of experience in creating user-centric web applications. Skilled in designing intuitive interfaces, optimizing performance, and collaborating with backend teams to deliver seamless digital experiences.',
  longBio: `Frontend Developer with 3 years of experience in building user-centric web applications. Skilled in designing intuitive interfaces, optimizing performance, and collaborating with backend teams. Experienced in developing scalable customer service platforms, improving usability with streamlined UI components, and implementing performance optimizations like IndexedDB caching and real-time notifications. Currently a Mid-Level Frontend Developer at SOFTYLINES, with a background as a Junior Frontend Developer at the same company.
`,
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/Abdelkaderbzz',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bouzomita-abdelkader-928953234/',
    },
  ],
  phone: '(216) 58627016',
  education: [
    {
      institution: 'HORIZON UNIVERSITY',
      degree: "Bachelor's Degree in Computer Science",
      location: 'Sousse/Tunisia',
      period: '2022-2025',
    },
    {
      institution: 'EL CHABI HIGH SCHOOL',
      degree: 'Distinguished High School Diploma with Honors',
      location: 'Medenine/Tunisia',
      period: '2018-2022',
    },
  ],
  expertise: {
    frontendDevelopment: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Redux',
    ],
    stylingAndUI: ['Tailwind CSS', 'SCSS', 'Ant Design', 'MUI'],
    testingAndPerformance: [
      'Jest',
      'Cypress',
      'Vitest',
      'Lighthouse',
      'IndexedDB',
    ],
    backendAndDevOps: ['Node.js', 'Express.js', 'Docker', 'Firebase', 'CI/CD'],
    areasOfFocus: [
      'Performance optimization',
      'Scalable frontend architectures',
      'UI/UX best practices',
      'Real-time applications',
    ],
  },
};


export const skillsData: SkillCategory[] = [
  {
    name: 'Frontend Development',
    icon: Code,
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'React',
      'Vue.js',
      'Next.js',
      'Tailwind CSS',
      'Zustand',
      'React Query',
      'Redux Toolkit',
      'SCSS',
    ],
  },
  {
    name: 'Web Technologies',
    icon: Globe,
    skills: [
      'RESTful APIs',
      'GraphQL',
      'WebSockets',
      'Performance Optimization',
      'SEO',
    ],
  },
  {
    name: 'Backend & Database',
    icon: Database,
    skills: [
      'Node.js',
      'Express',
      'MongoDB',
      'Firebase',
      'SQL Basics',
      'Supabase',
      'Strapi',
    ],
  },
  {
    name: 'Version Control',
    icon: GitBranch,
    skills: [
      'Git',
      'GitHub',
      'GitLab',
      'Conventional Commits',
      'Branching Strategies',
    ],
  },
  {
    name: 'Tools & Workflow',
    icon: Figma,
    skills: [
      'VS Code',
      'npm/yarn',
      'Webpack',
      'Vite',
      'Jest',
      'Testing Library',
      'Agile Methodology',
    ],
  },
];
