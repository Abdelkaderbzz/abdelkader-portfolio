import { useEffect, useState } from 'react';
import { contentfulClient } from '@/lib/contentfulClient';
import SectionHeader from '@/components/SectionHeader';

interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

const Skills = () => {
  const [skillsItems, setSkills] = useState<SkillCategory[]>([]);

  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: 'skills' })
      .then((response) => {
        setSkills(
          response.items.map((item) => ({
            id: item.sys.id,
            ...(item.fields as SkillCategory),
          }))
        );
      })
      .catch(console.error);
  }, []);

  return (
    <section
      id="skills"
      className="section-padding section-muted border-t border-[hsl(var(--paper-line))]"
    >
      <div className="container-tight">
        <SectionHeader
          index="06"
          label="Capabilities"
          title="What I work with"
          description="Technologies and tools I reach for when building modern web products."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {skillsItems.map((category, i) => (
            <div
              key={category.id}
              className="grid grid-cols-[auto_1fr] gap-6 py-8 border-t border-[hsl(var(--paper-line))]"
            >
              <span className="font-mono text-xs text-brand pt-1.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h4 className="font-display text-xl md:text-2xl tracking-[-0.01em] mb-4">
                  {category.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-background/60 text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
