import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Volunteering from '@/components/Volunteering';
import Teaching from '@/components/Teaching';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Articles from '@/components/Articles';
import { contentfulClient } from '@/lib/contentfulClient';

const Index = () => {
  const [personalDetails, setPersonalDetails] = useState([]);
  const location = useLocation();

  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: 'personalInfo' })
      .then((response) => {
        const items = response.items?.[0]?.fields;
        setPersonalDetails(items);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  }, [location.hash]);

  useEffect(() => {
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
    <MainLayout>
      <Hero personalDetails={personalDetails} />
      <About personalDetails={personalDetails} />
      <Volunteering />
      <Teaching />
      <Projects />
      <Articles />
      <Skills />
      <Contact personalDetails={personalDetails} />
    </MainLayout>
  );
};

export default Index;
