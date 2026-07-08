import { ArrowDownRight } from 'lucide-react';

const Hero = ({ personalDetails }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Atmospheric background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(120% 90% at 12% 0%, hsl(34 30% 93%) 0%, hsl(var(--background)) 55%)',
        }}
      />
      <div
        className="absolute -z-10 right-[-10%] top-[8%] h-[420px] w-[420px] rounded-full blur-[120px] opacity-[0.16]"
        style={{ background: 'hsl(var(--brand))' }}
      />

      <div className="container-tight w-full pt-32 pb-20">
        {/* Meta row */}
        <div
          className="reveal flex items-center justify-between flex-wrap gap-4 mb-14 pb-6 border-b border-[hsl(var(--paper-line))]"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Available for work
          </span>
          <span className="eyebrow hidden sm:block">
            {personalDetails?.location ?? 'Remote'} · {new Date().getFullYear()}
          </span>
        </div>

        {/* Headline */}
        <h1 className="display-title text-[13vw] leading-[0.95] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          <span className="reveal block" style={{ animationDelay: '0.12s' }}>
            Building
          </span>
          <span
            className="reveal block italic text-brand"
            style={{ animationDelay: '0.22s' }}
          >
            thoughtful
          </span>
          <span className="reveal block" style={{ animationDelay: '0.32s' }}>
            digital products
          </span>
        </h1>

        {/* Sub row */}
        <div className="mt-12 grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <p
            className="reveal text-body max-w-lg"
            style={{ animationDelay: '0.42s' }}
          >
            {personalDetails?.bio ??
              'Software engineer crafting clean, responsive, and user-focused web experiences.'}
          </p>

          <div
            className="reveal flex flex-col sm:flex-row gap-3"
            style={{ animationDelay: '0.5s' }}
          >
            <a href="#projects" className="btn-primary group">
              View projects
              <ArrowDownRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Bottom marquee-ish name line */}
      <div className="container-tight w-full pb-8">
        <div
          className="reveal flex items-center justify-between eyebrow border-t border-[hsl(var(--paper-line))] pt-5"
          style={{ animationDelay: '0.58s' }}
        >
          <span>{personalDetails?.name ?? 'Abdelkader Bouzomita'}</span>
          <span className="text-muted-foreground/60">
            {personalDetails?.title ?? 'Software Engineer'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
