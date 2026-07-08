import { useEffect, useState } from 'react';
import { contentfulClient } from '@/lib/contentfulClient';
import SectionHeader from '@/components/SectionHeader';

interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
}

interface Education {
  institution: string;
  degree: string;
  location: string;
  date: string;
}

const About = ({ personalDetails }) => {
  const [experience, setExperience] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: 'experience' })
      .then((response) => {
        setExperience(
          response.items
            .map((item) => ({
              id: item.sys.id,
              ...(item.fields as unknown as Experience),
            }))
            // The teaching role has its own dedicated section
            .filter((job) => !/instructor/i.test(job.title ?? ''))
        );
      })
      .catch(console.error);

    contentfulClient
      .getEntries({ content_type: 'education' })
      .then((response) => {
        const fetched = response.items.map((item) => ({
          id: item.sys.id,
          ...(item.fields as unknown as Education),
        }));
        setEducation(fetched);
      })
      .catch(console.error);
  }, []);

  return (
    <section
      id="about"
      className="section-padding section-muted border-t border-[hsl(var(--paper-line))]"
    >
      <div className="container-tight">
        <SectionHeader index="01" label="About" title="Get to know me" />

        <div className="grid md:grid-cols-[260px_1fr] gap-10 md:gap-16 items-start mb-24">
          <div className="relative">
            <div className="aspect-[4/5] max-w-[260px] overflow-hidden rounded-xl border border-border">
              <img
                src={personalDetails?.image?.fields?.file?.url}
                alt={personalDetails?.name}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute -bottom-3 -right-3 hidden sm:block font-mono text-xs bg-brand text-brand-foreground px-3 py-1.5 rounded-full">
              {personalDetails?.title}
            </span>
          </div>

          <div>
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-[-0.01em] text-foreground/90">
              {personalDetails?.name}, {personalDetails?.title} based in{' '}
              {personalDetails?.location}.
            </p>
            <p className="text-body mt-6">{personalDetails?.longBio}</p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-24">
          <div className="flex items-baseline gap-3 mb-10">
            <h3 className="font-display text-2xl md:text-3xl tracking-[-0.02em]">
              Experience
            </h3>
          </div>
          <div>
            {experience.map((job) => (
              <div
                key={job.id}
                className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-10 py-8 border-t border-[hsl(var(--paper-line))] last:border-b"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground pt-1">
                  {job.date}
                </span>
                <div>
                  <h4 className="text-xl font-medium">{job.title}</h4>
                  <p className="text-muted-foreground mb-4">{job.company}</p>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="text-body text-foreground/70 pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-brand"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-baseline gap-3 mb-10">
            <h3 className="font-display text-2xl md:text-3xl tracking-[-0.02em]">
              Education
            </h3>
          </div>
          <div>
            {education.map((edu, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-10 py-8 border-t border-[hsl(var(--paper-line))] last:border-b"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground pt-1">
                  {edu.date}
                </span>
                <div>
                  <h4 className="text-xl font-medium">{edu.institution}</h4>
                  <p className="text-muted-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">
                    {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
