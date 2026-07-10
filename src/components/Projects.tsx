import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useAnimateOnScroll } from '@/lib/animations';
import { useProjects } from '@/hooks/useProjects';
import { getCaseStudy } from '@/lib/caseStudies';
import { Project } from '@/types/project';
import SectionHeader from '@/components/SectionHeader';

const getDisplayTitle = (slug: string, title: string) =>
  slug === 'thekey' ? 'The Key' : title;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, isVisible } = useAnimateOnScroll<HTMLAnchorElement>({
    threshold: 0.15,
  });
  const banner = getCaseStudy(project.slug)?.banner;
  const heroImage = banner ?? project.images[0]?.fields?.file?.url;
  const displayTitle = getDisplayTitle(project.slug, project.title);

  return (
    <Link
      to={`/work/${project.slug}`}
      ref={ref}
      className={`group block ${isVisible ? 'reveal' : 'opacity-0'}`}
      style={{ animationDelay: `${(index % 2) * 0.1}s` }}
    >
      <div
        className={`relative overflow-hidden rounded-xl border border-border bg-muted ${
          banner ? 'aspect-[869/217]' : 'aspect-[4/3]'
        }`}
      >
        {heroImage ? (
          <img
            src={heroImage}
            alt={displayTitle}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform group-hover:scale-[1.02]"
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
};

const Projects = () => {
  const { projects, loading } = useProjects();

  return (
    <section id="projects" className="section-padding">
      <div className="container-tight">
        <SectionHeader
          index="04"
          label="Selected Work"
          title="Projects"
          description="Products I've helped design and build. Each opens into a detailed case study."
        />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[869/217] rounded-xl bg-muted" />
                <div className="mt-5 h-7 w-1/2 rounded bg-muted" />
                <div className="mt-3 h-4 w-full rounded bg-muted" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-20">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
