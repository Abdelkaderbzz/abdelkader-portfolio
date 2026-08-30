import { Project } from '@/types/project';
import SectionHeader from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-tight">
        <SectionHeader
          index="04"
          label="Selected Work"
          title="Projects"
          description="Products I've helped design and build. Each opens into a detailed case study."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
