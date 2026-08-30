'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useAnimateOnScroll } from '@/lib/animations';
import { getCaseStudy } from '@/lib/caseStudies';
import { Project } from '@/types/project';
import { assetUrl, getDisplayTitle } from '@/lib/format';

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, isVisible } = useAnimateOnScroll<HTMLAnchorElement>({
    threshold: 0.12,
  });
  const banner = getCaseStudy(project.slug)?.banner;
  const heroImage = banner ?? assetUrl(project.images[0]?.fields?.file?.url);
  const displayTitle = getDisplayTitle(project.slug, project.title);
  const priority = index < 2;

  return (
    <Link
      href={`/work/${project.slug}`}
      ref={ref}
      className={`group block ${isVisible ? 'reveal' : 'opacity-0'}`}
      style={{ animationDelay: `${(index % 2) * 0.1}s` }}
      prefetch={priority}
    >
      <div
        className={`relative overflow-hidden rounded-xl border border-border bg-muted ${
          banner ? 'aspect-[869/217]' : 'aspect-[4/3]'
        }`}
      >
        {heroImage ? (
          <Image
            src={heroImage}
            alt={`${displayTitle} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
            className="object-cover object-center transition-transform group-hover:scale-[1.02]"
            style={{
              transitionDuration: '900ms',
              transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            No preview
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-brand">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-display text-2xl md:text-3xl tracking-[-0.02em] transition-colors group-hover:text-brand">
            {displayTitle}
          </h3>
        </div>
      </div>

      <p className="mt-2 text-muted-foreground leading-relaxed line-clamp-2 max-w-md">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
        {project.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="font-mono text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="font-mono text-xs text-muted-foreground/60">
            +{project.tags.length - 4}
          </span>
        )}
      </div>
    </Link>
  );
}
