import { CaseStudyContent, Contributor } from '@/types/project';

const intejContributors: Contributor[] = [
  {
    name: 'Youssef Zekri',
    image: '/images/contributors/youssef-zekri.png',
    role: 'Developer',
  },
  {
    name: 'Marwen Shili',
    image: '/images/contributors/marwen-shili.png',
    role: 'Developer',
  },
  {
    name: 'Abderahim Selmi',
    image: '/images/contributors/dummy-avatar.svg',
    role: 'Developer',
  },
  {
    name: 'Abdelkader Bouzomita',
    image: '/images/avatar.png',
    role: 'Full-Stack Developer',
  },
];

const intejAdminCaseStudy = {
  overview:
    'Intej (Ntaj) is a goal-tracking and productivity platform built for Personal Productivity Clubs, where members organize tasks, set goals, and track progress together. Instead of treating time management as the goal, the platform focuses on effective task management and community accountability, helping clubs turn ambitions into measurable achievements through structured goal setting, progress dashboards, and collaborative workflows.',
  challenge:
    'Productivity clubs needed more than a generic task app. Leaders had no dedicated way to run clubs, track member progress at scale, or keep people accountable beyond scattered chats and spreadsheets. Members struggled to stay consistent on long-term goals without a system that combined task breakdown, visible progress, and the social structure clubs depend on.',
  solution:
    'We designed and built a club-first admin platform centered on structured goal setting, task organization, and progress visualization. Club leaders can manage members, monitor collective momentum, and run productivity workflows from one surface, while members benefit from clear milestones, shared accountability, and collaboration features that keep engagement high over time.',
  results:
    'Clubs gained a purpose-built system to run their programs with clarity and consistency. Leaders can organize work, track milestones across members, and reinforce community-driven productivity, turning abstract goals into actionable, measurable progress for entire groups.',
};

const intejMemberCaseStudy = {
  overview:
    'The Intej Member App is the member-facing companion to Personal Productivity Clubs, giving individuals a dedicated space to manage tasks, set personal goals, and track progress within their club. Weekly updates, shared accountability, and structured goal tracking help members stay focused and consistent between club sessions.',
  challenge:
    'Club members needed a focused experience separate from the admin tools, but still connected to their club structure. Generic productivity apps lacked the weekly rhythm, peer accountability, and progress rituals that make productivity clubs work, leaving members to track goals in isolation.',
  solution:
    'We built a member-focused app with goal setting, weekly progress updates, and club collaboration features designed around habit formation. The interface prioritizes clarity and momentum, making it easy for members to log updates, reflect on progress, and see how their effort fits into the group\'s shared journey.',
  results:
    'Members gained a structured way to stay accountable within their clubs, with measurable progress tracking and a shared workspace that reinforces community-driven productivity long after each meeting ends.',
};

const ainaSalsabilaCaseStudy = {
  overview:
    'Aynā Salsabīl (عين السبيل) is a digital safety ecosystem for Muslim families, spanning web, mobile, and desktop clients. It combines layered content protection across Windows, Android, and router-level filtering with monitoring dashboards, protection-level controls, and educational resources, helping families build safer online habits through technology that protects, guides, and empowers.',
  challenge:
    'Families needed more than a browser blocker. Inappropriate content reaches users across phones, computers, and home networks, while single-device tools leave gaps and fail to combine filtering, monitoring, and education in one coherent experience. Parents wanted practical, multi-layer protection they could activate across every device in the home.',
  solution:
    'We built a cross-platform ecosystem with device-specific activation flows for Windows, Android, and routers, each explained in clear Arabic-first onboarding. The platform surfaces protection levels, customer support, and educational content from a unified experience, applying multiple security layers rather than promising a single fix. Built with React, TypeScript, Expo, and Tailwind CSS at Mafaza, the product delivers responsive web and mobile interfaces for a distributed team serving the Muslim community.',
  results:
    'Families can activate protection across the devices that matter most, understand how each layer improves safety, and access guidance alongside the tooling itself. The result is a more complete digital safety experience that helps users move from reactive blocking to informed, sustained protection at home.',
};

const onqCaseStudy = {
  overview:
    'onQ is a real-time chat and event management platform that brings messaging, group collaboration, and scheduling into one focused workspace. Users create groups with invite links, chat in shared rooms, plan events from an embedded calendar, and keep files, images, and links accessible alongside the conversation, all without switching between separate chat and calendar tools.',
  challenge:
    'Teams were fragmented across messaging apps, calendars, and shared drives. Planning in one tool and discussing in another meant constant context-switching, while group onboarding, event coordination, and day-to-day communication never lived in the same place.',
  solution:
    'We built a unified platform with real-time messaging, group creation and management, invite-link onboarding, an integrated calendar, and structured event flows with title, description, location, date, time, and duration. Messages and scheduled events share the same timeline, member lists and shared resources stay visible in the sidebar, and notifications keep groups aligned from a single onQ workspace.',
  results:
    'Users communicate and organize from one app, reducing context switching and keeping plans tied to the conversations around them. Groups get a shared home for chat, events, and resources instead of stitching together multiple tools.',
};

export const caseStudies: Record<string, CaseStudyContent> = {
  thekey: {
    subtitle: 'AI-Powered Higher Education Platform for Saudi Arabia',
    role: 'Lead Frontend Engineer',
    year: '2025',
    banner: '/images/thekey-banner.png',
    contributors: [
      {
        name: 'Rayen Mabrouk',
        image: '/images/contributors/rayen-mabrouk.png',
        role: 'Developer',
      },
      {
        name: 'Louay Zouaoui',
        image: '/images/contributors/louay-zouaoui.png',
        role: 'Developer',
      },
      {
        name: 'Olympiah Otenio',
        image: '/images/contributors/dummy-avatar.svg',
        role: 'QA Tester',
      },
      {
        name: 'Ahmed Jazziri',
        image: '/images/contributors/dummy-avatar.svg',
        role: 'DevOps',
      },
      {
        name: 'Abdelkader Bouzomita',
        image: '/images/avatar.png',
        role: 'Lead Frontend Engineer',
      },
    ],
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
    banner: '/images/intej-member-banner.png',
    contributors: intejContributors,
    ...intejMemberCaseStudy,
  },
  'intej-member': {
    subtitle: 'Productivity Club Member Platform',
    role: 'Full-Stack Developer',
    year: '2024',
    banner: '/images/intej-member-banner.png',
    contributors: intejContributors,
    ...intejMemberCaseStudy,
  },
  ntaj: {
    subtitle: 'Goal Tracking & Productivity Platform',
    role: 'Full-Stack Developer',
    year: '2024',
    banner: '/images/intej-banner.png',
    contributors: intejContributors,
    ...intejAdminCaseStudy,
  },
  intej: {
    subtitle: 'Goal Tracking & Productivity Platform',
    role: 'Full-Stack Developer',
    year: '2024',
    banner: '/images/intej-banner.png',
    contributors: intejContributors,
    ...intejAdminCaseStudy,
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
    banner: '/images/ramadan-tracker-banner.png',
    contributors: [
      {
        name: 'Abdelkader Bouzomita',
        image: '/images/avatar.png',
        role: 'Frontend Developer',
      },
      {
        name: 'www-samcom',
        image: '/images/contributors/www-samcom.png',
        role: 'Developer',
      },
    ],
    overview:
      'Ramadan Tracker is a progressive web app built to help Muslims stay consistent with their worship throughout Ramadan. It brings prayer tracking, Quran progress, duas, dhikr, and daily spiritual habits into one calm, focused experience, with clear insights that make it easy to see how the month is going.',
    challenge:
      'During Ramadan, staying on top of worship often means switching between prayer apps, notes, paper logs, and mental checklists. That fragmentation makes it hard to build consistency, reflect on progress, or stay motivated across the full 30 days. Users needed one simple tool that could track their spiritual practices daily without adding friction to an already meaningful month.',
    solution:
      'We designed an intuitive, all-in-one tracking experience centered around daily logging and visible progress. Users can monitor prayers, Quran recitation, duas, dhikr, fasting, and good deeds from a single dashboard, with worship stats, achievement badges, and a Ramadan journey section for goals and reflections. Live prayer times, a Hijri calendar, curated duas, multilingual support (Arabic, English, and French), and installable PWA functionality make the app practical, accessible, and easy to return to every day.',
    results:
      'Users gained a single, focused tool to monitor and improve their Ramadan practices, replacing scattered tracking with one clear system. With daily progress feedback, milestone badges, and reflection tools, the app helps users stay consistent, recognize their effort, and move through Ramadan with greater awareness and motivation.',
  },
  ramadhantracker: {
    subtitle: 'Personal Spiritual Progress Tracker',
    role: 'Frontend Developer',
    year: '2024',
    banner: '/images/ramadan-tracker-banner.png',
    contributors: [
      {
        name: 'Abdelkader Bouzomita',
        image: '/images/avatar.png',
        role: 'Frontend Developer',
      },
      {
        name: 'www-samcom',
        image: '/images/contributors/www-samcom.png',
        role: 'Developer',
      },
    ],
    overview:
      'Ramadan Tracker is a progressive web app built to help Muslims stay consistent with their worship throughout Ramadan. It brings prayer tracking, Quran progress, duas, dhikr, and daily spiritual habits into one calm, focused experience, with clear insights that make it easy to see how the month is going.',
    challenge:
      'During Ramadan, staying on top of worship often means switching between prayer apps, notes, paper logs, and mental checklists. That fragmentation makes it hard to build consistency, reflect on progress, or stay motivated across the full 30 days. Users needed one simple tool that could track their spiritual practices daily without adding friction to an already meaningful month.',
    solution:
      'We designed an intuitive, all-in-one tracking experience centered around daily logging and visible progress. Users can monitor prayers, Quran recitation, duas, dhikr, fasting, and good deeds from a single dashboard, with worship stats, achievement badges, and a Ramadan journey section for goals and reflections. Live prayer times, a Hijri calendar, curated duas, multilingual support (Arabic, English, and French), and installable PWA functionality make the app practical, accessible, and easy to return to every day.',
    results:
      'Users gained a single, focused tool to monitor and improve their Ramadan practices, replacing scattered tracking with one clear system. With daily progress feedback, milestone badges, and reflection tools, the app helps users stay consistent, recognize their effort, and move through Ramadan with greater awareness and motivation.',
  },
  'custom-service-platform': {
    subtitle: 'Customer Service Platform',
    role: 'Full-Stack Developer',
    year: '2024',
    banner: '/images/takipopups-banner.png',
    contributors: [
      {
        name: 'Amir Ben Ahmed',
        image: '/images/contributors/amir-ben-ahmed.png',
        role: 'Developer',
      },
      {
        name: 'Iyed Sbai',
        image: '/images/contributors/iyed-sbai.png',
        role: 'Developer',
      },
      {
        name: 'Aymen Mosrati',
        image: '/images/contributors/aymen-mosrati.png',
        role: 'Developer',
      },
      {
        name: 'Moataz Hjaiji',
        image: '/images/contributors/moataz-hjaiji.png',
        role: 'Developer',
      },
      {
        name: 'Amine Slimani',
        image: '/images/contributors/amine-slimani.png',
        role: 'Developer',
      },
      {
        name: 'Tarek Gzgz',
        image: '/images/contributors/tarek-gzgz.png',
        role: 'Developer',
      },
      {
        name: 'Abdelkader Bouzomita',
        image: '/images/avatar.png',
        role: 'Full-Stack Developer',
      },
    ],
    overview:
      'A scalable customer service platform built with React, TypeScript, and SCSS that unifies real-time chat, custom popups, dynamic banners, product tours, and targeted in-app content in one admin surface. Teams can collaborate across roles, segment and group users, schedule messages, and automate engagement — powering 50K+ monthly active users within the first quarter of launch.',
    challenge:
      'Businesses needed more than a chat widget. Support, product, and marketing teams were juggling separate tools for messaging, onboarding, popups, banners, and user targeting — with no shared way to collaborate, permission workflows, or deliver contextual guidance at scale without slowing the product down.',
    solution:
      'We built a modular customer service platform around real-time messaging, scheduled campaigns, custom popups, in-app banners, and guided product tours — with user targeting, grouping, and role-based permissions from a single dashboard. I revamped 15+ core UI components in React and TypeScript, led cross-functional collaboration between development and product, and implemented IndexedDB caching to cut endpoint requests by 30%. We also shipped a real-time notification system, a push alert service using Service Workers and Firebase, and a monolithic modular architecture with a detailed SDK installation guide to improve developer onboarding and long-term maintainability.',
    results:
      'The platform reached 50K+ monthly active users in its first quarter while improving product quality across the board: user satisfaction scores rose 25% after the UI overhaul, design usability improved 40% from user feedback, and app speed increased 25% through smarter caching. Real-time notifications boosted interaction rates by 25%, the in-app banner system lifted engagement by 40% and retention by 15%, push alerts reached 10K+ active users, and custom product tours cut new-user onboarding time by 25%. SDK setup time dropped 30%, and the modular architecture improved scalability by 30% while reducing maintenance effort by 25%.',
  },
  takipopups: {
    subtitle: 'Customer Service Platform',
    role: 'Full-Stack Developer',
    year: '2024',
    banner: '/images/takipopups-banner.png',
    contributors: [
      {
        name: 'Amir Ben Ahmed',
        image: '/images/contributors/amir-ben-ahmed.png',
        role: 'Developer',
      },
      {
        name: 'Iyed Sbai',
        image: '/images/contributors/iyed-sbai.png',
        role: 'Developer',
      },
      {
        name: 'Aymen Mosrati',
        image: '/images/contributors/aymen-mosrati.png',
        role: 'Developer',
      },
      {
        name: 'Moataz Hjaiji',
        image: '/images/contributors/moataz-hjaiji.png',
        role: 'Developer',
      },
      {
        name: 'Amine Slimani',
        image: '/images/contributors/amine-slimani.png',
        role: 'Developer',
      },
      {
        name: 'Tarek Gzgz',
        image: '/images/contributors/tarek-gzgz.png',
        role: 'Developer',
      },
      {
        name: 'Abdelkader Bouzomita',
        image: '/images/avatar.png',
        role: 'Full-Stack Developer',
      },
    ],
    overview:
      'A scalable customer service platform built with React, TypeScript, and SCSS that unifies real-time chat, custom popups, dynamic banners, product tours, and targeted in-app content in one admin surface. Teams can collaborate across roles, segment and group users, schedule messages, and automate engagement — powering 50K+ monthly active users within the first quarter of launch.',
    challenge:
      'Businesses needed more than a chat widget. Support, product, and marketing teams were juggling separate tools for messaging, onboarding, popups, banners, and user targeting — with no shared way to collaborate, permission workflows, or deliver contextual guidance at scale without slowing the product down.',
    solution:
      'We built a modular customer service platform around real-time messaging, scheduled campaigns, custom popups, in-app banners, and guided product tours — with user targeting, grouping, and role-based permissions from a single dashboard. I revamped 15+ core UI components in React and TypeScript, led cross-functional collaboration between development and product, and implemented IndexedDB caching to cut endpoint requests by 30%. We also shipped a real-time notification system, a push alert service using Service Workers and Firebase, and a monolithic modular architecture with a detailed SDK installation guide to improve developer onboarding and long-term maintainability.',
    results:
      'The platform reached 50K+ monthly active users in its first quarter while improving product quality across the board: user satisfaction scores rose 25% after the UI overhaul, design usability improved 40% from user feedback, and app speed increased 25% through smarter caching. Real-time notifications boosted interaction rates by 25%, the in-app banner system lifted engagement by 40% and retention by 15%, push alerts reached 10K+ active users, and custom product tours cut new-user onboarding time by 25%. SDK setup time dropped 30%, and the modular architecture improved scalability by 30% while reducing maintenance effort by 25%.',
  },
  gorec: {
    subtitle: 'Browser-Based Screen Recording',
    role: 'Frontend Developer',
    year: '2023',
    banner: '/images/gorec-banner.png',
    contributors: [
      {
        name: 'Abdelkader Bouzomita',
        image: '/images/avatar.png',
        role: 'Frontend Developer',
      },
    ],
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
    banner: '/images/aina-salsabila-banner.png',
    contributors: [
      {
        name: 'Ahmed Idrissi Radi',
        image: '/images/contributors/ahmed-idrissi-radi.png',
        role: 'Developer',
      },
      {
        name: 'Mohamed Sabrie',
        image: '/images/contributors/mohamed-sabrie.png',
        role: 'Developer',
      },
      {
        name: 'Ahmed Elbehairy',
        image: '/images/contributors/ahmed-elbehairy.png',
        role: 'Developer',
      },
      {
        name: 'Mazen Gassar',
        image: '/images/contributors/mazen-gassar.png',
        role: 'Developer',
      },
      {
        name: 'Abdelkader Bouzomita',
        image: '/images/avatar.png',
        role: 'Full-Stack Developer',
      },
    ],
    ...ainaSalsabilaCaseStudy,
  },
  chronomanager: {
    subtitle: 'Visual Task Management Application',
    role: 'Frontend Developer',
    year: '2023',
    banner: '/images/chronomanager-banner.png',
    contributors: [
      {
        name: 'Abdelkader Bouzomita',
        image: '/images/avatar.png',
        role: 'Frontend Developer',
      },
    ],
    overview:
      'ChronoManager is a browser-based productivity workspace that unifies task management and deep focus in one place. Organize work into folders and lists, switch fluidly between Kanban, Priority, and Checklist views, and stay in flow with a built-in Pomodoro timer and plant-growth gamification, all running locally with no account required.',
    challenge:
      'Most task managers lock users into a single view and treat focus as an afterthought. Planning, executing, and actually concentrating live in separate tools, forcing constant context-switching and leaving productivity fragmented across apps.',
    solution:
      'I built a flexible, self-contained productivity app that adapts to how people work. Three interchangeable views (Kanban, Priority, Checklist) with drag-and-drop and a folder hierarchy cover everything from sprint planning to daily execution. Role-based templates like Developer, Marketer, Student, and Designer get users productive in seconds, while an integrated Pomodoro timer and plant gamification turn focus sessions into visible progress. Everything persists locally with export/import backups and full dark-mode support.',
    results:
      'Users stay organized and focused without juggling multiple tools. Views adapt to each stage of the workflow, ready-made templates remove setup friction, and the focus timer keeps momentum, making ChronoManager a single home for both planning work and getting it done.',
  },
  onq: {
    subtitle: 'Real-Time Chat & Event Management',
    role: 'Full-Stack Developer',
    year: '2023',
    banner: '/images/onq-banner.png',
    contributors: [
      {
        name: 'Abdelkader Bouzomita',
        image: '/images/avatar.png',
        role: 'Full-Stack Developer',
      },
      {
        name: 'Tarek Gzgz',
        image: '/images/contributors/tarek-gzgz.png',
        role: 'Full-Stack Developer',
      },
    ],
    ...onqCaseStudy,
  },
  arabizzi: {
    subtitle: 'Arabizi to Arabic Chrome Extension & Web App',
    role: 'Frontend Developer',
    year: '2024',
    banner: '/images/arabizzi-banner.png',
    contributors: [
      {
        name: 'Aziz Bacha',
        image: '/images/contributors/aziz-bacha.png',
        role: 'Developer',
      },
      {
        name: 'Abdelkader Bouzomita',
        image: '/images/avatar.png',
        role: 'Frontend Developer',
      },
    ],
    overview:
      'Arabizzi is a free Chrome extension and Next.js web app that instantly converts Arabizi (Arabic written with Latin characters and numbers) into proper Arabic script, Modern Standard Arabic (Fusha), English, or French as you type. It\'s powered by Google Gemini and works with your own free API key, so nothing is stored on a server.',
    challenge:
      'Arabizi (e.g. "3aslema, chneya 7alek?") is everywhere in messaging and social media, but there\'s no clean way to turn it into real Arabic. Bilingual users constantly switch between Latin and Arabic keyboards, which breaks their flow and slows down communication.',
    solution:
      'I built a lightweight Manifest V3 Chrome extension and a companion web app that share the same conversion engine. Users type Arabizi in any text field and get accurate Arabic output instantly, with Fusha and Tunisian dialect modes, one-click copy, conversion history, bookmarks, and a bilingual English/Arabic RTL interface. Zero configuration beyond a free Gemini key.',
    results:
      'Users can now communicate naturally in Arabizi while producing clean, correct Arabic text, removing friction from everyday typing across the web. The project is fully open-source, published on the Chrome Web Store, and live at arabizzi.com.',
  },
  'type-arabizi': {
    subtitle: 'Arabizi to Arabic Chrome Extension & Web App',
    role: 'Frontend Developer',
    year: '2024',
    banner: '/images/arabizzi-banner.png',
    contributors: [
      {
        name: 'Aziz Bacha',
        image: '/images/contributors/aziz-bacha.png',
        role: 'Developer',
      },
      {
        name: 'Abdelkader Bouzomita',
        image: '/images/avatar.png',
        role: 'Frontend Developer',
      },
    ],
    overview:
      'Arabizzi is a free Chrome extension and Next.js web app that instantly converts Arabizi (Arabic written with Latin characters and numbers) into proper Arabic script, Modern Standard Arabic (Fusha), English, or French as you type. It\'s powered by Google Gemini and works with your own free API key, so nothing is stored on a server.',
    challenge:
      'Arabizi (e.g. "3aslema, chneya 7alek?") is everywhere in messaging and social media, but there\'s no clean way to turn it into real Arabic. Bilingual users constantly switch between Latin and Arabic keyboards, which breaks their flow and slows down communication.',
    solution:
      'I built a lightweight Manifest V3 Chrome extension and a companion web app that share the same conversion engine. Users type Arabizi in any text field and get accurate Arabic output instantly, with Fusha and Tunisian dialect modes, one-click copy, conversion history, bookmarks, and a bilingual English/Arabic RTL interface. Zero configuration beyond a free Gemini key.',
    results:
      'Users can now communicate naturally in Arabizi while producing clean, correct Arabic text, removing friction from everyday typing across the web. The project is fully open-source, published on the Chrome Web Store, and live at arabizzi.com.',
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
