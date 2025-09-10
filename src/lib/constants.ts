import {
  Code,
  Globe,
  Database,
  GitBranch,
  Figma,
  LucideIcon,
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

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
}


export const skillsIcons: LucideIcon[] = [
  Code,
  Globe,
  Database,
  GitBranch,
  Figma,
];
