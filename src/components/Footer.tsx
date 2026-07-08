import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[hsl(var(--paper-line))] section-muted">
      <div className="container-tight py-16 md:py-20">
        <div className="flex items-start justify-between gap-6">
          <p className="font-display text-4xl sm:text-6xl md:text-7xl tracking-[-0.03em] leading-[0.9]">
            Let's talk
            <span className="text-brand">.</span>
          </p>
          <a
            href="#home"
            className="group shrink-0 flex h-12 w-12 items-center justify-center rounded-full border border-border hover:bg-brand hover:text-brand-foreground hover:border-brand transition-all"
            aria-label="Back to top"
          >
            <ArrowUp
              size={18}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="mt-16 pt-6 border-t border-[hsl(var(--paper-line))] flex flex-col sm:flex-row justify-between gap-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <span>© {currentYear} Abdelkader Bouzomita</span>
          <span>Software Engineer · Built with care</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
