import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import { assetUrl, getDisplayTitle } from '@/lib/format';
import {
  findProject,
  getAdjacentProjects,
  getAllWorkSlugs,
  getProjects,
} from '@/lib/cms';
import {
  getCaseStudy,
  generateCaseStudyFromDescription,
} from '@/lib/caseStudies';
import { caseStudyJsonLd } from '@/lib/seo';
import { SITE_NAME, SITE_URL } from '@/lib/site';

const sections = [
  { key: 'overview', label: '01', title: 'Overview' },
  { key: 'challenge', label: '02', title: 'The Challenge' },
  { key: 'solution', label: '03', title: 'Our Solution' },
  { key: 'results', label: '04', title: 'The Results' },
] as const;

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllWorkSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const projects = await getProjects();
  const project = findProject(projects, slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  const caseStudy =
    getCaseStudy(project.slug) ??
    generateCaseStudyFromDescription(project.title, project.description);
  const displayTitle = getDisplayTitle(project.slug, project.title);
  const description = caseStudy.overview.slice(0, 160);
  const image =
    caseStudy.banner ??
    assetUrl(project.images[0]?.fields?.file?.url);
  const absoluteImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`
    : undefined;

  return {
    title: displayTitle,
    description,
    alternates: {
      canonical: `${SITE_URL}/work/${project.slug}`,
    },
    openGraph: {
      title: `${displayTitle} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/work/${project.slug}`,
      type: 'article',
      images: absoluteImage
        ? [{ url: absoluteImage, alt: displayTitle }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${displayTitle} | ${SITE_NAME}`,
      description,
      images: absoluteImage ? [absoluteImage] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = findProject(projects, slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(projects, project.slug);
  const caseStudy =
    getCaseStudy(project.slug) ??
    generateCaseStudyFromDescription(project.title, project.description);

  const heroImage =
    caseStudy.banner ?? assetUrl(project.images[0]?.fields?.file?.url);
  const displayTitle = getDisplayTitle(project.slug, project.title);
  const absoluteHero = heroImage
    ? heroImage.startsWith('http')
      ? heroImage
      : `${SITE_URL}${heroImage}`
    : undefined;
  const jsonLd = caseStudyJsonLd({
    title: displayTitle,
    description: caseStudy.overview.slice(0, 200),
    slug: project.slug,
    image: absoluteHero,
    datePublished: caseStudy.year ? `${caseStudy.year}-01-01` : undefined,
    keywords: project.tags,
  });

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <article>
      <section className="pt-32 pb-14 border-b border-[hsl(var(--paper-line))]">
        <div className="container-tight">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-brand transition-colors mb-12"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Back to projects
          </Link>

          <p className="eyebrow mb-6">
            <span className="eyebrow-index">Case Study</span>
          </p>
          <h1 className="display-title text-5xl md:text-7xl lg:text-8xl reveal">
            {displayTitle}
          </h1>
          <p
            className="reveal mt-6 font-display italic text-2xl md:text-3xl text-brand max-w-2xl"
            style={{ animationDelay: '0.1s' }}
          >
            {caseStudy.subtitle}
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[hsl(var(--paper-line))] pt-6">
            {caseStudy.role && (
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Role
                </p>
                <p className="text-sm">{caseStudy.role}</p>
              </div>
            )}
            {caseStudy.year && (
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Year
                </p>
                <p className="text-sm">{caseStudy.year}</p>
              </div>
            )}
            {project.link && (
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Live
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm hover:text-brand transition-colors"
                >
                  Visit site
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            )}
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Stack
              </p>
              <p className="text-sm">{project.tags.length} technologies</p>
            </div>
          </div>

          {caseStudy.contributors && caseStudy.contributors.length > 0 && (
            <div className="mt-10 pt-8 border-t border-[hsl(var(--paper-line))]">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-5">
                Contributors
              </p>
              <div className="flex items-center pl-1">
                {caseStudy.contributors.map((contributor, index) => (
                  <div
                    key={contributor.name}
                    className="group relative -ml-3 first:ml-0 transition-[z-index] duration-200 hover:z-50"
                    style={{ zIndex: caseStudy.contributors!.length - index }}
                  >
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-background bg-muted ring-1 ring-border transition-transform duration-200 group-hover:scale-110 group-hover:z-50">
                      <Image
                        src={contributor.image}
                        alt={contributor.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div
                      role="tooltip"
                      className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-50 w-max max-w-[200px] -translate-x-1/2 rounded-lg border border-border bg-card px-3 py-2 text-center opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100"
                    >
                      <p className="text-xs font-medium leading-snug">
                        {contributor.name}
                      </p>
                      {contributor.role && (
                        <p className="mt-0.5 text-[11px] text-muted-foreground leading-snug">
                          {contributor.role}
                        </p>
                      )}
                      <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-border" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {heroImage && (
        <section className="border-b border-[hsl(var(--paper-line))]">
          <div className="container-tight py-14">
            <div className="relative aspect-[16/7] overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={heroImage}
                alt={`${displayTitle} case study banner`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-tight grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <div className="md:sticky md:top-24 h-fit">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              The story
            </p>
          </div>
          <div>
            {sections.map(({ key, label, title }) => (
              <article
                key={key}
                className="pb-12 mb-12 border-b border-[hsl(var(--paper-line))] last:border-0 last:mb-0"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-xs text-brand">{label}</span>
                  <h2 className="font-display text-2xl md:text-3xl tracking-[-0.02em]">
                    {title}
                  </h2>
                </div>
                <p className="text-body text-lg">{caseStudy[key]}</p>
              </article>
            ))}

            {project.tags.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-background/60 text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {project.images.length > 1 && (
        <section className="pb-24 border-t border-[hsl(var(--paper-line))] pt-14">
          <div className="container-tight">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-10">
              Gallery
            </p>
            <div className="space-y-10">
              {project.images.map((img, idx) => {
                const caption =
                  caseStudy.imageCaptions?.[idx] ??
                  `${displayTitle} — screenshot ${idx + 1}`;
                return (
                  <figure key={idx} className="space-y-3">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
                      <Image
                        src={assetUrl(img.fields.file.url) ?? ''}
                        alt={caption}
                        fill
                        sizes="(max-width: 1024px) 100vw, 1152px"
                        className="object-cover object-top"
                      />
                    </div>
                    <figcaption className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {String(idx + 1).padStart(2, '0')} — {caption}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-[hsl(var(--paper-line))] section-muted">
        <div className="container-tight grid grid-cols-1 md:grid-cols-2">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group py-12 md:pr-8 md:border-r border-[hsl(var(--paper-line))]"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-3">
                <ArrowLeft size={13} />
                Previous
              </span>
              <span className="font-display text-2xl md:text-3xl tracking-[-0.02em] group-hover:text-brand transition-colors">
                {getDisplayTitle(prev.slug, prev.title)}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group py-12 md:pl-8 md:text-right"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-3 md:justify-end">
                Next
                <ArrowRight size={13} />
              </span>
              <span className="font-display text-2xl md:text-3xl tracking-[-0.02em] group-hover:text-brand transition-colors">
                {getDisplayTitle(next.slug, next.title)}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
      </article>
    </MainLayout>
  );
}
