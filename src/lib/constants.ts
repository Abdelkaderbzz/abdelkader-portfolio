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
  experience: [
    {
      title: 'Mid-Level Frontend Developer',
      company: 'SOFTYLINES',
      period: '2024-Present',
      achievements: [
        'Built a scalable customer service platform using React.js, TypeScript, SCSS, driving 50K+ monthly active users in the first quarter.',
        'Streamlined UI components, improving usability and increasing user satisfaction scores.',
        'Led collaboration between development and product teams, enhancing design usability by 40% based on user feedback.',
        'Optimized Agile workflows with Git, CI/CD pipelines, reducing deployment time by 20% and improving project efficiency.',
        'Implemented IndexedDB caching, cutting endpoint requests by 30% and boosting app speed by 25%.',
        'Developed a secure authentication system using Socket.io, JWT, and Auth0, increasing user engagement by 40%.',
        'Designed & deployed a real-time notification system serving 50K+ users, boosting interaction rates by 25%.',
        'Engineered an in-app messaging banner system, improving engagement by 40% and retention by 15%.',
        'Built a push notification service with Service Workers & Firebase, delivering real-time alerts to 10K+ active users.',
        'Launched a custom product tour service, reducing new user onboarding time by 25%.',
        'Created a detailed SDK installation guide, decreasing setup time by 30% and enhancing the developer experience.',
        'Implemented a monolithic modular architecture, improving scalability by 30% and reducing maintenance efforts by 25%.',
      ],
    },
    {
      title: 'Junior Frontend Developer',
      company: 'SOFTYLINES',
      period: '2022-2024',
      achievements: [
        'Engineered a robust back office for a multilingual educational app, enhancing user engagement by 30% through efficient content management features.',
        'Facilitated a 25% reduction in missed appointments by enabling doctors to schedule and manage meetings directly through the app.',
        'Developed a robust back office for a multilingual educational app, enhancing authentication and quiz creation processes, boosting user retention by 40%.',
        'Created onQ, a real-time chat application using React.js and Socket.io, delivering a 40% increase in user engagement and collaboration efficiency.',
      ],
    },
  ],
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
