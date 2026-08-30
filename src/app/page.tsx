import HomePage from '@/components/HomePage';
import {
  getArticles,
  getEducation,
  getExperience,
  getPersonalInfo,
  getProjects,
  getSkills,
  getSocials,
} from '@/lib/cms';

export const revalidate = 3600;

export default async function Page() {
  const [
    personalDetails,
    projects,
    experience,
    education,
    articles,
    skills,
    socials,
  ] = await Promise.all([
    getPersonalInfo(),
    getProjects(),
    getExperience(),
    getEducation(),
    getArticles(),
    getSkills(),
    getSocials(),
  ]);

  return (
    <HomePage
      personalDetails={personalDetails}
      projects={projects}
      experience={experience}
      education={education}
      articles={articles}
      skills={skills}
      socials={socials}
    />
  );
}
