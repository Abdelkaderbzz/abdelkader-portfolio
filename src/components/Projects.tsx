'use client';

import { useAnimateOnScroll, useStaggeredAnimation } from '@/lib/animations';
import { contentfulClient } from '@/lib/contentfulClient';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';


// Types
interface Project {
  id: string;
  title: string;
  description: string;
  images: Array<{
    fields: {
      file: {
        url: string;
      };
    };
  }>;
  link: string;
  github?: string;
  tags: string[];
}

interface ProjectsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  projects?: Project[];
  className?: string;
}

// Create a separate ProjectCard component
const ProjectCard = ({
  project,
  animStyle,
}: {
  project: Project;
  animStyle?: React.CSSProperties;
}) => {
  const { isVisible, ref } = useAnimateOnScroll({ threshold: 0.1 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div
      ref={ref}
      className={`group glass rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={animStyle}
    >
      <div className='relative aspect-video overflow-hidden'>
        {/* Image gallery with transition */}
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {project.images.map((img, imgIdx) => (
            <img
              key={imgIdx}
              src={img?.fields?.file?.url}
              alt={`${project.title} screenshot ${imgIdx + 1}`}
              className='object-cover min-w-full h-full'
            />
          ))}
        </div>

        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/60'></div>

        {/* Navigation buttons with improved visibility */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className='absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100'
              aria-label='Previous image'
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className='absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100'
              aria-label='Next image'
            >
              <ChevronRight size={20} />
            </button>

            {/* Enhanced indicator dots */}
            <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 transition-opacity duration-300 opacity-80 group-hover:opacity-100'>
              {project.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(imgIndex);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentImageIndex === imgIndex
                      ? 'bg-primary scale-110'
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`Go to image ${imgIndex + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className='p-6 relative'>
        <div className='flex justify-between items-start mb-3'>
          <h3 className='text-xl font-bold group-hover:text-primary transition-colors duration-300'>
            {project.title}
          </h3>
          <div className='flex gap-3'>
            {project.github && (
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110'
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github size={20} />
              </a>
            )}
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110'
              aria-label={`Visit live demo of ${project.title}`}
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        <p className='text-muted-foreground mb-5 line-clamp-3 group-hover:line-clamp-none transition-all duration-500'>
          {project.description}
        </p>
        <div className='flex flex-wrap gap-2 mt-4'>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className='px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground hover:bg-primary/10 transition-colors duration-300'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = ({
  title = 'Projects',
  subtitle = 'Selected Work',
  description = 'Here are some of my recent projects that showcase my skills and expertise.',
  projects: initialProjects,
  className = '',
}: ProjectsProps) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects || []);
  const { isVisible: headerVisible, ref: headerRef } = useAnimateOnScroll();
  const projectAnimItems = useStaggeredAnimation(projects.length, 0.1);

  useEffect(() => {
      contentfulClient
        .getEntries({ content_type: 'project' })
        .then((response) => {
          const items = response.items.map((item) => {
            const fields = item.fields as unknown as Project;
            return {
              id: item.sys.id,
              ...fields,
            };
          });
          setProjects(items);
        })
        .catch(console.error);
  }, [ initialProjects]);

  return (
    <section id='projects' className={`section-padding ${className}`}>
      <div className='container-tight'>
        <div
          ref={headerRef}
          className={`mb-16 text-center ${
            headerVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className='text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2'>
            {title}
          </h2>
          <h3 className='text-3xl md:text-4xl font-bold mb-4'>{subtitle}</h3>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            {description}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {[...projects].reverse().map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              animStyle={projectAnimItems[index]?.style}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
