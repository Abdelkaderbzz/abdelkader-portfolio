import SectionHeader from '@/components/SectionHeader';

const highlights = [
  'Taught programming basics in Python to teens aged 12–16.',
  'Designed engaging lessons and hands-on exercises to make coding fun and accessible.',
  'Guided students through mini-projects to reinforce learning and build confidence.',
  'Supported students individually to help them overcome challenges.',
];

const photos = [
  { src: '/images/teaching/teaching-1.png', alt: 'Student following a Python lesson on input and output' },
  { src: '/images/teaching/teaching-3.png', alt: 'Abdelkader presenting during a Softy Skills session' },
  { src: '/images/teaching/teaching-2.png', alt: 'Students receiving their course completion certificates' },
  { src: '/images/teaching/teaching-5.png', alt: 'Abdelkader with students at the graduation event' },
  { src: '/images/teaching/teaching-4.png', alt: 'Abdelkader with his trainer certificate' },
];

const stack = ['Python', 'Teaching', 'Curriculum design'];

const Teaching = () => {
  return (
    <section
      id="teaching"
      className="section-padding section-muted border-t border-[hsl(var(--paper-line))]"
    >
      <div className="container-tight">
        <SectionHeader
          index="03"
          label="Teaching"
          title="Teaching experience"
          description="Sharing what I know — helping the next generation write their first lines of code."
        />

        <div className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-10 border-t border-[hsl(var(--paper-line))] pt-10">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground pt-1">
            Jul – Aug 2025
          </span>

          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-2xl md:text-3xl tracking-[-0.02em]">
                Python Instructor
              </h3>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Softy Skills
              </span>
            </div>

            <ul className="mt-5 space-y-2 max-w-2xl">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className="text-body text-foreground/70 pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-brand"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-background/60 text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Photo gallery */}
            <div className="mt-10 columns-2 lg:columns-3 gap-3 md:gap-4 [&>figure]:mb-3 md:[&>figure]:mb-4">
              {photos.map((photo) => (
                <figure
                  key={photo.src}
                  className="break-inside-avoid overflow-hidden rounded-xl border border-border bg-muted"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full transition-transform duration-500 hover:scale-[1.03]"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
