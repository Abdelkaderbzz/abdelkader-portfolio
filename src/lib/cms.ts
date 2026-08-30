import 'server-only';

import { contentfulClient } from '@/lib/contentfulClient';
import { slugify } from '@/lib/slugify';
import { caseStudies, getCaseStudy } from '@/lib/caseStudies';
import { assetUrl } from '@/lib/format';
import { ContentfulImage, Project } from '@/types/project';
import {
  Article,
  Education,
  Experience,
  PersonalInfo,
  SkillCategory,
  Social,
} from '@/types/content';

function fieldsOf(item: { fields?: unknown }) {
  return (item.fields ?? {}) as Record<string, unknown>;
}

function maybeAssetUrl(value: unknown): string | undefined {
  if (typeof value === 'string') return assetUrl(value);
  if (value && typeof value === 'object' && 'fields' in value) {
    const url = (value as ContentfulImage).fields?.file?.url;
    return assetUrl(url);
  }
  return undefined;
}

function normalizeProject(item: {
  sys: { id: string };
  fields: Record<string, unknown>;
}): Project {
  const fields = item.fields as Omit<Project, 'id' | 'slug'>;
  const title = String(fields.title ?? '');
  return {
    id: item.sys.id,
    slug: slugify(title),
    ...fields,
    title,
    description: String(fields.description ?? ''),
    tags: (fields.tags as string[]) ?? [],
    images: (fields.images as Project['images']) ?? [],
    link: fields.link as string | undefined,
    github: fields.github as string | undefined,
  };
}

export async function getProjects(): Promise<Project[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'project',
  });
  const items = response.items.map((item) =>
    normalizeProject(
      item as { sys: { id: string }; fields: Record<string, unknown> }
    )
  );
  const uniqueById = Array.from(
    new Map(items.map((it) => [String(it.id), it])).values()
  );
  return uniqueById.reverse();
}

export function findProject(
  projects: Project[],
  slug: string
): Project | undefined {
  const direct = projects.find((p) => p.slug === slug);
  if (direct) return direct;

  const requested = getCaseStudy(slug);
  if (!requested) return undefined;

  return projects.find((p) => {
    const cs = getCaseStudy(p.slug);
    return Boolean(cs && cs.overview === requested.overview);
  });
}

export async function getAllWorkSlugs(): Promise<string[]> {
  const projects = await getProjects();
  const slugs = new Set(projects.map((p) => p.slug));
  for (const key of Object.keys(caseStudies)) {
    if (findProject(projects, key)) slugs.add(key);
  }
  return [...slugs];
}

export function getAdjacentProjects(
  projects: Project[],
  currentSlug: string
): { prev: Project | null; next: Project | null } {
  const resolved = findProject(projects, currentSlug);
  const index = resolved
    ? projects.findIndex((p) => p.id === resolved.id)
    : -1;
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export async function getPersonalInfo(): Promise<PersonalInfo | null> {
  const response = await contentfulClient.getEntries({
    content_type: 'personalInfo',
  });
  return (response.items?.[0]?.fields as PersonalInfo) ?? null;
}

const experienceOverrides: Record<
  string,
  Partial<Pick<Experience, 'date' | 'logo' | 'companyUrl' | 'company'>>
> = {
  thekey: {
    company: 'thekey',
    date: 'Dec 2025 – Jul 2026',
    logo: '/images/thekey-logo.png',
    companyUrl: 'https://thekey.sa/',
  },
  softylines: {
    company: 'Softylines',
    logo: '/images/softylines-logo.jpg',
    companyUrl: 'https://www.softylines.com/',
  },
};

function companyKey(company: string) {
  return company.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

export async function getExperience(): Promise<Experience[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'experience',
  });
  return response.items
    .map((item) => {
      const fields = fieldsOf(item);
      const company = String(fields.company ?? '');
      const override = experienceOverrides[companyKey(company)];
      return {
        id: item.sys.id,
        title: String(fields.title ?? ''),
        company: override?.company ?? company,
        date: override?.date ?? String(fields.date ?? ''),
        responsibilities: (fields.responsibilities as string[]) ?? [],
        logo: override?.logo ?? maybeAssetUrl(fields.logo),
        companyUrl: override?.companyUrl,
        employmentType: fields.employmentType
          ? String(fields.employmentType)
          : undefined,
        location: fields.location ? String(fields.location) : undefined,
      } satisfies Experience;
    })
    .filter((job) => !/instructor/i.test(job.title ?? ''));
}

export async function getEducation(): Promise<Education[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'education',
  });
  return response.items.map((item) => {
    const fields = fieldsOf(item);
    return {
      id: item.sys.id,
      institution: String(fields.institution ?? ''),
      degree: String(fields.degree ?? ''),
      location: String(fields.location ?? ''),
      date: String(fields.date ?? ''),
    } satisfies Education;
  });
}

export async function getArticles(): Promise<Article[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'article',
  });
  return response.items.map((item) => {
    const fields = fieldsOf(item);
    return {
      id: item.sys.id,
      title: String(fields.title ?? ''),
      description: String(fields.description ?? ''),
      link: String(fields.link ?? ''),
      date: String(fields.date ?? ''),
      platform: (fields.platform as Article['platform']) ?? 'medium',
      image: fields.image as ContentfulImage | undefined,
      readTime: String(fields.readTime ?? ''),
      authorName: fields.authorName ? String(fields.authorName) : undefined,
      authorImage: fields.authorImage as ContentfulImage | undefined,
    } satisfies Article;
  });
}

export async function getSkills(): Promise<SkillCategory[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'skills',
  });
  return response.items.map((item) => {
    const fields = fieldsOf(item);
    return {
      id: item.sys.id,
      name: String(fields.name ?? ''),
      skills: (fields.skills as string[]) ?? [],
    } satisfies SkillCategory;
  });
}

export async function getSocials(): Promise<Social[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'socials',
  });
  return response.items.map((item) => {
    const fields = fieldsOf(item);
    return {
      id: item.sys.id,
      name: String(fields.name ?? ''),
      url: String(fields.url ?? ''),
    } satisfies Social;
  });
}

export async function getCVUrl(): Promise<string> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'cv',
    });
    const url = maybeAssetUrl(
      (response.items?.[0]?.fields as { cv?: unknown } | undefined)?.cv
    );
    if (url) return url;
  } catch (error) {
    console.error('Failed to load CV from Contentful', error);
  }
  return '/Abdelkader-bouzomita_CV.pdf';
}
