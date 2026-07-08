import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import {
  useProjects,
  getProjectBySlug,
  getAdjacentProjects,
} from '@/hooks/useProjects';
import {
  getCaseStudy,
  generateCaseStudyFromDescription,
} from '@/lib/caseStudies';

const sections = [
  { key: 'overview', label: '01', title: 'Overview' },
  { key: 'challenge', label: '02', title: 'The Challenge' },
  { key: 'solution', label: '03', title: 'Our Solution' },
  { key: 'results', label: '04', title: 'The Results' },
] as const;

const getDisplayTitle = (slug: string, title: string) =>
  slug === 'thekey' ? 'The Key' : title;

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const { projects, loading } = useProjects();

  const project = slug ? getProjectBySlug(projects, slug) : undefined;
  const { prev, next } = slug
    ? getAdjacentProjects(projects, slug)
    : { prev: null, next: null };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="h-7 w-7 border-2 border-border border-t-brand rounded-full animate-spin" />
        </div>
      </MainLayout>
    );
  }

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const caseStudy =
    getCaseStudy(project.slug) ??
    generateCaseStudyFromDescription(project.title, project.description);

  const heroImage = caseStudy.banner ?? project.images[0]?.fields?.file?.url;
  const displayTitle = getDisplayTitle(project.slug, project.title);

  return (
    <MainLayout>
      {/* Editorial title block */}
      <section className="pt-32 pb-14 border-b border-[hsl(var(--paper-line))]">
        <div className="container-tight">
          <Link
            to="/#projects"
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
        </div>
      </section>

      {/* Lead image */}
      {heroImage && (
        <section className="border-b border-[hsl(var(--paper-line))]">
          <div className="container-tight py-14">
            <div className="overflow-hidden rounded-xl border border-border bg-muted">
              <img
                src={heroImage}
                alt={displayTitle}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Narrative */}
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

      {/* Gallery */}
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
                    <div className="overflow-hidden rounded-xl border border-border bg-muted">
                      <img
                        src={img.fields.file.url}
                        alt={caption}
                        className="w-full"
                        loading="lazy"
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

      {/* Prev / Next */}
      <section className="border-t border-[hsl(var(--paper-line))] section-muted">
        <div className="container-tight grid grid-cols-1 md:grid-cols-2">
          {prev ? (
            <Link
              to={`/work/${prev.slug}`}
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
              to={`/work/${next.slug}`}
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
    </MainLayout>
  );
};

export default CaseStudy;
