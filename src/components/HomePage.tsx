import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Volunteering from '@/components/Volunteering';
import Teaching from '@/components/Teaching';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Articles from '@/components/Articles';
import { Project } from '@/types/project';
import {
  Article,
  Education,
  Experience,
  PersonalInfo,
  SkillCategory,
  Social,
} from '@/types/content';

type HomePageProps = {
  personalDetails: PersonalInfo | null;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  articles: Article[];
  skills: SkillCategory[];
  socials: Social[];
};

export default function HomePage({
  personalDetails,
  projects,
  experience,
  education,
  articles,
  skills,
  socials,
}: HomePageProps) {
  return (
    <MainLayout>
      <Hero personalDetails={personalDetails} />
      <About
        personalDetails={personalDetails}
        experience={experience}
        education={education}
      />
      <Volunteering />
      <Teaching />
      <Projects projects={projects} />
      <Articles articles={articles} />
      <Skills skills={skills} />
      <Contact personalDetails={personalDetails} socials={socials} />
    </MainLayout>
  );
}
