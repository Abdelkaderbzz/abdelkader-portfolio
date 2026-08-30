import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const mafazaStack = ['React.js', 'TypeScript', 'Expo', 'Tailwind CSS'];

const Volunteering = () => {
  return (
    <section
      id="volunteering"
      className="section-padding border-t border-[hsl(var(--paper-line))]"
    >
      <div className="container-tight">
        <SectionHeader
          index="02"
          label="Community"
          title="Volunteering"
          description="Giving time to mission-driven work that serves people, not just products."
        />

        <div className="space-y-16 border-t border-[hsl(var(--paper-line))] pt-10">
          {/* ITQAN */}
          <div className="grid md:grid-cols-[64px_1fr] gap-5 md:gap-8">
            <a
              href="https://itqan.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border bg-[#0d3d2e] transition-opacity hover:opacity-80"
              aria-label="Visit ITQAN"
            >
              <Image
                src="/images/itqan-logo.jpg"
                alt="ITQAN logo"
                fill
                sizes="64px"
                className="object-cover"
              />
            </a>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-2xl md:text-3xl tracking-[-0.02em]">
                  Open Source Project Maintainer
                </h3>
                <a
                  href="https://itqan.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-brand transition-colors"
                >
                  ITQAN · مجتمع إتقان لتقنيات القرآن
                </a>
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-brand border border-brand/40 rounded-full px-2 py-0.5">
                  Education
                </span>
              </div>

              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Mar 2026 – Apr 2026 · 2 mos
              </p>

              <p className="text-body mt-5 max-w-2xl">
                Contributed to open-source Quranic and Islamic projects within
                the Itqan community. Maintained{' '}
                <a
                  href="https://ramadantracker.tech/ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent underline underline-offset-4 decoration-brand/40"
                >
                  RamadhanTracker.tech
                </a>
                , collaborated on other community projects, reviewed and
                approved pull requests, and worked with contributors to build
                impactful technology for the Muslim community.
              </p>

              <a
                href="https://itqan.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground hover:text-brand transition-colors"
              >
                Visit ITQAN
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* Mafaza */}
          <div className="grid md:grid-cols-[64px_1fr] gap-5 md:gap-8 border-t border-[hsl(var(--paper-line))] pt-16">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border bg-[#0f4c6b]">
              <Image
                src="/images/mafaza-logo.png"
                alt="Mafaza logo"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-2xl md:text-3xl tracking-[-0.02em]">
                  Frontend Developer
                </h3>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Mafaza · مفازا
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-brand border border-brand/40 rounded-full px-2 py-0.5">
                  Part-time
                </span>
              </div>

              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Jul 2025 – Sep 2025 · 3 mos
                <span className="mx-2 text-muted-foreground/40">/</span>
                Cairo, Egypt · Remote
              </p>

              <p className="text-body mt-5 max-w-2xl">
                Contributing to mission-driven projects at Mafaza as a Frontend
                Developer, building scalable and responsive web and mobile
                applications. Key work includes developing the{' '}
                <Link
                  href="/work/aina-salsabila"
                  className="link-accent underline underline-offset-4 decoration-brand/40"
                >
                  Aynā Salsabīl
                </Link>{' '}
                project, a platform for safe internet browsing, using React.js,
                TypeScript, Expo, and Tailwind CSS. Collaborating with a
                distributed team across the Arab world to deliver impactful
                solutions that serve the Muslim community.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {mafazaStack.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-background/60 text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/work/aina-salsabila"
                className="group mt-7 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground hover:text-brand transition-colors"
              >
                View the case study
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
