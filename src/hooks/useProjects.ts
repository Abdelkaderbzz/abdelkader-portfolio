import { useEffect, useState } from 'react';
import { contentfulClient } from '@/lib/contentfulClient';
import { slugify } from '@/lib/slugify';
import { Project } from '@/types/project';

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

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: 'project' })
      .then((response) => {
        const items = response.items.map(normalizeProject);
        const uniqueById = Array.from(
          new Map(items.map((it) => [String(it.id), it])).values()
        );
        setProjects(uniqueById.reverse());
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading };
}

export function getAdjacentProjects(
  projects: Project[],
  currentSlug: string
): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export function getProjectBySlug(
  projects: Project[],
  slug: string
): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
