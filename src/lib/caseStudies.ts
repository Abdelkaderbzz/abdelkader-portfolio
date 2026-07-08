import { CaseStudyContent } from '@/types/project';

export const caseStudies: Record<string, CaseStudyContent> = {
  thekey: {
    subtitle: 'AI-Powered Higher Education Platform for Saudi Arabia',
    role: 'Lead Frontend Engineer',
    year: '2025',
    banner: '/images/thekey-banner.png',
    overview:
      'We worked with The Key to shape an AI-powered higher education platform for Saudi Arabia where students take and schedule exams, complete assignments, and learn through an experience tuned to feel as personal as a private tutor — and where faculty and school managers run content, communities, and curriculum with AI sitting underneath every workflow.',
    challenge:
      "Higher education in the region had moved online, but the tools hadn't kept up. Students bounced between LMS portals, messaging apps, and PDFs to get through a single course. Faculty spent weeks building syllabi by hand. School managers ran communities the same way they had a decade ago. The Key needed a single platform where students felt guided, faculty felt supported, and administrators could move at the pace the institution actually demanded.",
    solution:
      'We designed two coordinated experiences sitting on a shared AI layer. For students: a calm, IQ-test-grade interface for taking and scheduling exams, completing assignments, and learning — with prompts, pacing, and feedback that adapt as the student progresses. For faculty and school managers: an admin surface where AI does the slow work — drafting curriculum, structuring courses, moderating community threads, and surfacing the moments that need a human. The hero outcome was making curriculum creation feel like days of work instead of months, without flattening the academic standard the institution is held to.',
    results:
      'The Key gave Saudi higher education an environment where modern student expectations and modern faculty workflow finally meet in the same product. Students engage with their coursework on a platform that respects their time and ability. Faculty ship a full curriculum in a fraction of the calendar they used to need. The institution gets a foundation it can grow on without rebuilding the stack every academic year.',
    imageCaptions: [
      'The Key — student learning surface',
      'The Key — exam-taking flow',
      'The Key — faculty curriculum tools',
      'The Key — admin workflows',
      'The Key — assignment workflow',
      'The Key — content authoring',
    ],
  },
  'ntaj-member': {
    subtitle: 'Productivity Club Member Platform',
    role: 'Full-Stack Developer',
    year: '2024',
    overview:
      'Ntaj Member App is a platform that allows members to manage their tasks, set goals, and track their progress within productivity clubs. It helps users stay accountable through weekly updates, collaboration, and structured goal tracking.',
    challenge:
      'Productivity clubs needed a dedicated space where members could track goals, share progress, and stay accountable — separate from generic task apps that lack the community structure clubs require.',
    solution:
      'Built a member-focused app with goal setting, weekly progress updates, and club collaboration features. The interface prioritizes clarity and habit formation, making it easy for members to log updates and see collective progress.',
    results:
      'Members gained a structured way to stay accountable within their clubs, with measurable progress tracking and a shared workspace that reinforces community-driven productivity.',
  },
  ntaj: {
    subtitle: 'Goal Tracking & Productivity Platform',
    role: 'Full-Stack Developer',
    year: '2024',
    overview:
      'Ntaj is a platform that helps users organize tasks, set goals, and track their progress. It promotes productivity through collaboration and structured goal setting.',
    challenge:
      'Users struggled to maintain momentum on long-term goals without a system that combined task management, progress visualization, and community accountability.',
    solution:
      'Designed and built a platform centered on structured goal setting with task breakdown, progress dashboards, and collaborative features that keep users engaged over time.',
    results:
      'Users can organize their work, track milestones, and collaborate with others — turning abstract goals into actionable, measurable progress.',
  },
  sellfy: {
    subtitle: 'E-Commerce Platform for Digital & Physical Products',
    role: 'Frontend Developer',
    year: '2024',
    overview:
      'Sellfy is a simple and powerful eCommerce platform that lets you sell digital products, physical goods, and subscriptions — all in one place. Launch your store in minutes, accept secure payments, and grow your business.',
    challenge:
      'Creators and small businesses needed a storefront that handles multiple product types without the complexity of enterprise e-commerce platforms.',
    solution:
      'Built a streamlined storefront experience with product management, secure checkout, and subscription support — designed for speed-to-launch and ease of use.',
    results:
      'Sellers can launch a fully functional store in minutes, manage diverse product types from a single dashboard, and focus on growing their business instead of wrestling with tooling.',
  },
  'ramadan-tracker': {
    subtitle: 'Personal Spiritual Progress Tracker',
    role: 'Frontend Developer',
    year: '2024',
    overview:
      'A Ramadan tracking website that helps users monitor their prayers, duas, and Quran recitation, providing insights into their progress throughout the month.',
    challenge:
      'During Ramadan, users wanted a simple way to track spiritual practices across prayers, duas, and Quran recitation — without juggling multiple apps or paper logs.',
    solution:
      'Created an intuitive tracking interface with daily logging, progress visualization, and insights that help users reflect on their spiritual journey throughout the month.',
    results:
      'Users gained a single, focused tool to monitor and improve their Ramadan practices, with clear progress feedback that motivates consistency.',
  },
  'custom-service-platform': {
    subtitle: 'Scalable Customer Support Platform',
    role: 'Full-Stack Developer',
    year: '2024',
    overview:
      'Scalable customer support service with real-time messaging, personalized product tours, dynamic banners, custom popups, and targeted content. Supports team collaboration, permission management, and automation.',
    challenge:
      'Businesses needed a unified support platform that goes beyond chat — combining real-time messaging with in-app guidance, targeted content, and team collaboration at scale.',
    solution:
      'Built a modular support platform with real-time messaging, customizable popups and banners, product tours, role-based permissions, and team workflows — all from a single admin surface.',
    results:
      'Support teams can engage customers in real time while delivering contextual guidance and targeted content, reducing friction and improving resolution rates.',
  },
  gorec: {
    subtitle: 'Browser-Based Screen Recording',
    role: 'Frontend Developer',
    year: '2023',
    banner: '/images/gorec-banner.png',
    overview:
      'The app runs entirely in the browser with no downloads or installations required. Users can start recording instantly with a clean and intuitive interface, ideal for tutorials, demos, and quick captures.',
    challenge:
      'Screen recording tools typically require downloads and complex setup, creating friction for users who need quick captures for tutorials or demos.',
    solution:
      'Built a zero-install browser recorder with instant start, clean controls, and Supabase-backed storage — making recording as simple as opening a tab.',
    results:
      'Users can record and share screen captures instantly without installing software, lowering the barrier for content creation and communication.',
  },
  ntumai: {
    subtitle: 'Multi-Sided Food Delivery Platform',
    role: 'Mobile Developer',
    year: '2023',
    overview:
      'A mobile app with three interfaces for clients, riders, and vendors, enabling seamless food ordering, delivery tracking, and order management.',
    challenge:
      'Food delivery requires coordinating three distinct user types — customers, riders, and vendors — each with different workflows and real-time coordination needs.',
    solution:
      'Developed three tailored interfaces within a single Expo app, with real-time order tracking, vendor management, and rider dispatch — unified by a shared backend.',
    results:
      'Clients order seamlessly, riders manage deliveries efficiently, and vendors handle orders from a dedicated dashboard — all connected in one ecosystem.',
  },
  'aina-salsabila': {
    subtitle: 'Digital Safety Ecosystem for Families',
    role: 'Full-Stack Developer',
    year: '2024',
    overview:
      'A comprehensive ecosystem platform — web, mobile, and desktop — designed to protect Muslims from inappropriate content online. The app provides robust filtering, monitoring, and educational tools.',
    challenge:
      'Families needed a cross-platform solution that combines content filtering, activity monitoring, and educational resources — not just a browser blocker.',
    solution:
      'Built a multi-platform ecosystem with Next.js web, mobile, and desktop clients featuring content filtering, monitoring dashboards, and educational tools for families.',
    results:
      'Families gain comprehensive digital safety across devices, with tools that protect, educate, and empower informed online habits.',
  },
  chronomanager: {
    subtitle: 'Visual Task Management Application',
    role: 'Frontend Developer',
    year: '2023',
    overview:
      'An intuitive task management app featuring folders, lists, drag-and-drop, and three powerful views: Kanban, Priority, and List — designed to keep you organized and in control.',
    challenge:
      'Existing task managers force users into a single view paradigm, making it hard to switch between high-level planning and detailed execution.',
    solution:
      'Built a flexible task manager with Kanban, Priority, and List views, drag-and-drop organization, and folder hierarchy — letting users work the way they think.',
    results:
      'Users stay organized across projects with views that adapt to their workflow, from sprint planning to daily task execution.',
  },
  onq: {
    subtitle: 'Real-Time Chat & Event Management',
    role: 'Full-Stack Developer',
    year: '2023',
    overview:
      'onQ is an innovative chat application that enables real-time messaging, group creation, and event management, streamlining communication and organization for users.',
    challenge:
      'Teams needed messaging and event coordination in one place instead of switching between chat apps and calendar tools.',
    solution:
      'Developed a real-time chat platform with group management, event scheduling, and integrated organization features — keeping communication and planning in sync.',
    results:
      'Users communicate and organize events from a single app, reducing context switching and keeping teams aligned.',
  },
};

export function getCaseStudy(slug: string): CaseStudyContent | null {
  return caseStudies[slug] ?? null;
}

export function generateCaseStudyFromDescription(
  title: string,
  description: string
): CaseStudyContent {
  return {
    subtitle: title,
    overview: description,
    challenge: `The ${title} project addressed a gap where existing tools didn't meet user needs — requiring a purpose-built solution.`,
    solution: `We designed and built a focused platform that delivers on core user workflows with a clean, intuitive interface and reliable performance.`,
    results: `The platform delivers a streamlined experience that helps users accomplish their goals efficiently and reliably.`,
  };
}
