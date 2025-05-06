import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { personalInfo } from '@/lib/constants';
import CVPreview from './CVPreview';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Articles', href: '#articles' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create a shorter version of the name for the logo
  const firstName = personalInfo.name.split(' ')[0];
  const lastName = personalInfo.name.split(' ')[1];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out',
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className='container-tight flex h-16 items-center justify-between'>
          <a
            href='#home'
            className='text-xl font-semibold tracking-tight cursor-pointer'
          >
            <span className='text-primary'>{firstName}.</span>
            {lastName}
          </a>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-6'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline'
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setIsPreviewOpen(true)}
              className='inline-flex items-center gap-2 border border-input bg-background/60 backdrop-blur-sm hover:bg-secondary transition-colors text-foreground px-4 py-2 rounded-md text-sm font-medium'
            >
              <Download size={16} />
              Resume
            </button>
            <a
              href='#contact'
              className='bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-all hover:opacity-90'
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden text-foreground'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={cn(
            'lg:hidden absolute left-0 w-full bg-white/95 backdrop-blur-md shadow-md px-4 py-5 transition-all duration-300 ease-in-out',
            isMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-full pointer-events-none'
          )}
        >
          <div className='flex flex-col gap-5'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className='text-base font-medium text-foreground border-b border-border pb-2'
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsPreviewOpen(true);
                setIsMenuOpen(false);
              }}
              className='inline-flex items-center justify-center gap-2 border border-input bg-background/60 backdrop-blur-sm hover:bg-secondary transition-colors text-foreground px-4 py-2 rounded-md text-base font-medium'
            >
              <Download size={16} />
              Download Resume
            </button>
            <a
              href='#contact'
              onClick={() => setIsMenuOpen(false)}
              className='bg-primary text-primary-foreground px-4 py-2 rounded-md text-center font-medium transition-all hover:opacity-90'
            >
              Let's Talk
            </a>
          </div>
        </nav>
      </header>

      <CVPreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
};

export default Navbar;
