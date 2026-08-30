import { ContentfulImage } from './project';

export interface PersonalInfo {
  name?: string;
  title?: string;
  bio?: string;
  longBio?: string;
  location?: string;
  email?: string;
  phone?: string;
  image?: ContentfulImage;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
  logo?: string;
  companyUrl?: string;
  employmentType?: string;
  location?: string;
}

export interface Education {
  id?: string;
  institution: string;
  degree: string;
  location: string;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string;
  platform: 'medium' | 'devto';
  image?: ContentfulImage;
  readTime: string;
  authorName?: string;
  authorImage?: ContentfulImage;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface Social {
  id: string;
  name: string;
  url: string;
}
