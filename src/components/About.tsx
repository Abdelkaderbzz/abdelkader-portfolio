import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import { assetUrl } from '@/lib/format';
import { Education, Experience, PersonalInfo } from '@/types/content';

const featuredExperience: Experience = {
  id: 'revixa-founder',
  title: 'Founder',
  company: 'Revixa',
  date: 'Jul 2026 – Present · 2 mos',
  employmentType: 'Part-time',
  location: 'Sousse, Tunisia · On-site',
  logo: '/images/revixa-logo.png',
  companyUrl: 'https://www.revixa.agency/',
  responsibilities: [
    'Founded and led Revixa, a digital agency focused on helping businesses grow through technology and digital marketing.',
    'Develop custom websites and e-commerce solutions',
    'Help businesses improve their online presence and customer experience',
    'Plan and manage digital marketing and Meta Ads campaigns',
    'Build and optimize e-commerce funnels and conversion strategies',
    'Work directly with clients to understand their needs and turn business ideas into digital solutions',
  ],
};

type AboutProps = {
  personalDetails: PersonalInfo | null;
  experience: Experience[];
  education: Education[];
};

function CompanyMark({ job }: { job: Experience }) {
  const logo = job.logo ? (
    <div className="relative h-12 w-12 md:h-14 md:w-14 shrink-0 overflow-hidden rounded-xl border border-border bg-white">
      <Image
        src={job.logo}
        alt={`${job.company} logo`}
        fill
        sizes="56px"
        className="object-contain p-1.5"
      />
    </div>
  ) : null;

  if (!logo) return null;

  if (job.companyUrl) {
    return (
      <a
        href={job.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 transition-opacity hover:opacity-80"
        aria-label={`Visit ${job.company}`}
      >
        {logo}
      </a>
    );
  }

  return logo;
}

function CompanyName({ job }: { job: Experience }) {
  if (job.companyUrl) {
    return (
      <a
        href={job.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-brand transition-colors"
      >
        {job.company}
      </a>
    );
  }

  return <p className="text-muted-foreground">{job.company}</p>;
}

const About = ({ personalDetails, experience, education }: AboutProps) => {
  const jobs = [featuredExperience, ...experience];
  const photo = assetUrl(personalDetails?.image?.fields?.file?.url);

  return (
    <section
      id="about"
      className="section-padding section-muted border-t border-[hsl(var(--paper-line))]"
    >
      <div className="container-tight">
        <SectionHeader index="01" label="About" title="Get to know me" />

        <div className="grid md:grid-cols-[260px_1fr] gap-10 md:gap-16 items-start mb-24">
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-[260px] overflow-hidden rounded-xl border border-border">
              {photo ? (
                <Image
                  src={photo}
                  alt={personalDetails?.name ?? 'Portrait'}
                  fill
                  sizes="260px"
                  priority
                  className="object-cover"
                />
              ) : null}
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

        <div className="mb-24">
          <div className="flex items-baseline gap-3 mb-10">
            <h3 className="font-display text-2xl md:text-3xl tracking-[-0.02em]">
              Experience
            </h3>
          </div>
          <div>
            {jobs.map((job) => (
              <div
                key={job.id}
                className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-10 py-8 border-t border-[hsl(var(--paper-line))] last:border-b"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground pt-1">
                  {job.date}
                </span>
                <div className={job.logo ? 'flex gap-4 md:gap-5' : undefined}>
                  <CompanyMark job={job} />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="text-xl font-medium">{job.title}</h4>
                      {job.employmentType && (
                        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-brand border border-brand/40 rounded-full px-2 py-0.5">
                          {job.employmentType}
                        </span>
                      )}
                    </div>
                    <CompanyName job={job} />
                    {job.location && (
                      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground/70">
                        {job.location}
                      </p>
                    )}
                    <ul className="mt-4 space-y-2">
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
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-baseline gap-3 mb-10">
            <h3 className="font-display text-2xl md:text-3xl tracking-[-0.02em]">
              Education
            </h3>
          </div>
          <div>
            {education.map((edu) => (
              <div
                key={edu.id ?? `${edu.institution}-${edu.date}`}
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
