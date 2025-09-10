import { useAnimateOnScroll } from '@/lib/animations';
import { useEffect, useState } from 'react';
import { contentfulClient } from '@/lib/contentfulClient';

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
  date: string; // Format: "Month YYYY - Month YYYY"
}

const About = ({ personalDetails }) => {
  const { isVisible: isVisible1, ref: ref1 } = useAnimateOnScroll();
  const { isVisible: isVisible2, ref: ref2 } = useAnimateOnScroll({
    threshold: 0.2,
  });
  const { isVisible: isVisible3, ref: ref3 } = useAnimateOnScroll({
    threshold: 0.3,
  });
  const { isVisible: isVisible4, ref: ref4 } = useAnimateOnScroll({
    threshold: 0.3,
  });
  const [experience, setExperience] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: 'experience' })
      .then((response) => {
        const items = response.items.map((item) => {
          const fields = item.fields as unknown as Experience;
          return {
            id: item.sys.id,
            ...fields,
          };
        });
        setExperience(items);
      })
      .catch(console.error);
    contentfulClient
      .getEntries({ content_type: 'education' })
      .then((response) => {
        const items = response.items.map((item) => {
          const fields = item.fields as unknown as Education;
          return {
            id: item.sys.id,
            ...fields,
          };
        });
        setEducation(items);
      })
      .catch(console.error);
  }, []);
  return (
    <section id='about' className='section-padding bg-secondary'>
      <div className='container-tight'>
        <div
          ref={ref1}
          className={`mb-12 ${isVisible1 ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2 className='text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2'>
            About Me
          </h2>
          <h3 className='text-3xl md:text-4xl font-bold'>Get to know me</h3>
        </div>

        <div className='split'>
          <div
            ref={ref2}
            className={`${isVisible2 ? 'animate-slide-in' : 'opacity-0'}`}
          >
            <div className='aspect-square overflow-hidden rounded-2xl relative'>
              <div className='absolute inset-0 bg-black/10 z-10'></div>
              <img
                src='/images/avatar.png'
                alt={personalDetails?.name}
                className='object-cover w-full h-full'
              />
            </div>
          </div>

          <div
            className={`space-y-6 flex flex-col justify-center ${
              isVisible2 ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <div>
              <h3 className='text-2xl font-bold mb-2'>
                {personalDetails?.name}
              </h3>
              <p className='text-muted-foreground'>
                {personalDetails?.title} based in {personalDetails?.location}
              </p>
            </div>

            <p className='text-base md:text-lg'>{personalDetails?.longBio}</p>
          </div>
        </div>

        <div
          ref={ref3}
          className={`mt-20 ${isVisible3 ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h3 className='text-2xl font-bold mb-6'>Experience</h3>

          <div className='space-y-10'>
            {experience?.map((job, index) => (
              <div
                key={index}
                className='border-l-2 border-primary/20 pl-6 relative'
              >
                <div className='absolute w-4 h-4 rounded-full bg-primary top-0 -left-[9px]'></div>
                <div className='mb-2'>
                  <h4 className='text-xl font-semibold'>{job.title}</h4>
                  <p className='text-muted-foreground'>
                    {job.company} | {job.date}
                  </p>
                </div>
                <ul className='space-y-2 mt-4'>
                  {job.responsibilities.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground before:content-['•'] before:mr-2 before:text-primary"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={ref4}
          className={`mt-20 ${isVisible4 ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h3 className='text-2xl font-bold mb-6'>Education</h3>

          <div className='space-y-10'>
            {education?.map((edu, index) => (
              <div
                key={index}
                className='border-l-2 border-primary/20 pl-6 relative'
              >
                <div className='absolute w-4 h-4 rounded-full bg-primary top-0 -left-[9px]'></div>
                <div className='mb-2'>
                  <h4 className='text-xl font-semibold'>{edu.institution}</h4>
                  <p className='text-muted-foreground'>{edu.degree}</p>
                  <p className='text-sm text-muted-foreground'>
                    {edu.location} | {edu.date}
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
