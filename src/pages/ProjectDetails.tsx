import { useMemo } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { getDummyProjectDetail } from '@/data/projectDetails';

type ProjectSummary = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: Array<{
    fields: {
      file: {
        url: string;
      };
    };
  }>;
  link: string;
  github?: string;
};

const ProjectDetails = () => {
  const { projectId = 'project' } = useParams();
  const location = useLocation();
  const state = location.state as { project?: ProjectSummary } | null;
  const project = state?.project;

  const details = useMemo(
    () => getDummyProjectDetail(projectId, project?.title),
    [projectId, project?.title]
  );

  return (
    <MainLayout>
      <section className='section-padding'>
        <div className='container-tight max-w-5xl'>
          <Link
            to='/#projects'
            className='inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors'
          >
            ← Back to projects
          </Link>

          <header className='mt-6 mb-10'>
            <h1 className='text-3xl md:text-4xl font-bold'>
              {project?.title || 'Project Details'}
            </h1>
            <p className='mt-4 text-muted-foreground'>
              {project?.description ||
                'Detailed project information with dummy content for demonstration.'}
            </p>
          </header>

          {project?.images?.[0]?.fields?.file?.url && (
            <img
              src={project.images[0].fields.file.url}
              alt={project.title}
              className='w-full rounded-2xl mb-10 object-cover max-h-[420px]'
            />
          )}

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='glass rounded-2xl p-6'>
              <h2 className='text-xl font-semibold mb-3'>Description</h2>
              <p className='text-muted-foreground'>{details.longDescription}</p>
            </div>

            <div className='glass rounded-2xl p-6'>
              <h2 className='text-xl font-semibold mb-3'>Contributors</h2>
              <p className='text-muted-foreground mb-2'>
                Number of contributors: {details.contributors.length}
              </p>
              <ul className='space-y-1 text-muted-foreground'>
                {details.contributors.map((contributor) => (
                  <li key={contributor}>• {contributor}</li>
                ))}
              </ul>
            </div>

            <div className='glass rounded-2xl p-6'>
              <h2 className='text-xl font-semibold mb-3'>Technology</h2>
              <div className='flex flex-wrap gap-2'>
                {details.technologies.map((tech) => (
                  <span
                    key={tech}
                    className='px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className='glass rounded-2xl p-6'>
              <h2 className='text-xl font-semibold mb-3'>Functionality</h2>
              <ul className='space-y-2 text-muted-foreground'>
                {details.functionality.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className='glass rounded-2xl p-6 md:col-span-2'>
              <h2 className='text-xl font-semibold mb-3'>Assets</h2>
              <ul className='grid sm:grid-cols-2 gap-2 text-muted-foreground'>
                {details.assets.map((asset) => (
                  <li key={asset}>• {asset}</li>
                ))}
              </ul>
            </div>

            <div className='glass rounded-2xl p-6 md:col-span-2'>
              <h2 className='text-xl font-semibold mb-3'>Video</h2>
              <a
                href={details.videoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary hover:underline'
              >
                Watch demo video
              </a>
            </div>
          </div>

          {project?.tags?.length ? (
            <div className='mt-8'>
              <h3 className='text-sm font-medium mb-3'>Project Tags</h3>
              <div className='flex flex-wrap gap-2'>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </MainLayout>
  );
};

export default ProjectDetails;
