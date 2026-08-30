'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSite } from '@/components/site-context';
import CVPreview from './CVPreview';

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Volunteering', href: '/#volunteering' },
  { name: 'Teaching', href: '/#teaching' },
  { name: 'Work', href: '/#projects' },
  { name: 'Writing', href: '/#articles' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { cvUrl } = useSite();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 z-50 w-full transition-all duration-300',
          isScrolled || !isHome
            ? 'bg-background/80 backdrop-blur-md border-b border-[hsl(var(--paper-line))]'
            : 'bg-transparent'
        )}
      >
        <div className="container-tight flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg tracking-tight leading-none"
          >
            Abdelkader
            <span className="text-brand">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors"
            >
              CV
            </button>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-1.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-brand hover:text-brand-foreground px-4 py-2 rounded-full transition-all"
            >
              Let's talk
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </nav>

          <button
            className="lg:hidden p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden border-t border-[hsl(var(--paper-line))] bg-background px-5 py-5">
            <div className="flex flex-col">
              {navItems.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between py-3 border-b border-[hsl(var(--paper-line))] font-display text-2xl"
                >
                  {item.name}
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsPreviewOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-between py-3 border-b border-[hsl(var(--paper-line))] font-display text-2xl text-left"
              >
                CV
                <span className="font-mono text-xs text-muted-foreground">
                  0{navItems.length + 1}
                </span>
              </button>
              <Link
                href="/#contact"
                className="btn-primary mt-5 w-full"
              >
                Let's talk
              </Link>
            </div>
          </nav>
        )}
      </header>

      <CVPreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        cvUrl={cvUrl}
      />
    </>
  );
};

export default Navbar;
