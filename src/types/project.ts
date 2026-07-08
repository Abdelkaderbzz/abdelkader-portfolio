export interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  images: ContentfulImage[];
  link?: string;
  github?: string;
  tags: string[];
}

export interface CaseStudyContent {
  subtitle: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  imageCaptions?: string[];
  role?: string;
  year?: string;
}
