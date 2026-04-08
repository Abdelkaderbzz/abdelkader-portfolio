import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

import { useEffect, useState } from 'react';
import Articles from '@/components/Articles';
import { contentfulClient } from '@/lib/contentfulClient';

type PersonalDetails = {
  title?: string;
  bio?: string;
  email?: string;
  phone?: string;
  location?: string;
};

const Index = () => {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails | null>(
    null
  );

  // Smooth scroll for anchor links
  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: 'personalInfo' })
      .then((response) => {
        const items = response.items?.[0]?.fields as PersonalDetails | undefined;
        setPersonalDetails(items);
      })
      .catch(console.error);
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a[href^="#"]');

      if (anchorElement) {
        e.preventDefault();
        const href = anchorElement.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <MainLayout >
      <Hero personalDetails={personalDetails} />
      <Projects />
      <Articles />
      <Skills />
      <Contact personalDetails={personalDetails} />
    </MainLayout>
  );
};

export default Index;
