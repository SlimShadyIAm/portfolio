export interface ProjectData {
  title: string;
  brief: string;
  description: string;
  skills: string[];
  displayImage: string;
  demoImages?: string[];
  github?: string;
  demo?: string;
  links?: Link[];
}

interface Link {
  text: string;
  url: string;
}

export const projects: ProjectData[] = [
  {
    title: 'Esports Team Twente Dashboard',
    brief:
      "My bachelor project: a dashboard for my university's Esports team, allowing them to upload and analyze replay files from games and display match statistics.",
    description: `This was my Bachelor graduation design project. It was a dashboard created for Esports Team Twente, our university's Esports team, who wanted a centralized dashboard where you could upload replay files from game, run them through a data analysis pipeline, and store and display statistics from matches. We created the frontend, backend, API and database implementation to solve their use case.`,
    displayImage: 'ett-dashboard/01.png',
    skills: ['React', 'TypeScript', 'MaterialUI', 'SWR'],
    links: [
      {
        text: 'Esports Team Twente',
        url: 'https://esportsteamtwente.nl',
      },
      {
        text: 'Project report',
        url: 'https://bachelorshowcase-eemcs.apps.utwente.nl/content/O4z9FENJ/design_report_group2_final.pdf',
      },
    ],
    demoImages: [
      'ett-dashboard/02.png',
      'ett-dashboard/03.png',
      'ett-dashboard/04.png',
      'ett-dashboard/05.png',
      'ett-dashboard/06.png',
      'ett-dashboard/07.png',
      'ett-dashboard/08.png',
    ],
  },
  {
    title: 'There Is More Than One Way To Zen Your Python',
    brief:
      'My published Bachelor thesis examines "pythonicity" and "pythonic idioms," exploring what constitutes good Python code through a literature review, analysis of open source code, and observations on idiom trends.',
    description:
      'Beginning as my Bachelor thesis project, it was then partially rewritten and submitted to SPLASH conference on Software Language Engineering, and subsequently accepted for publication. This paper explores the concept of "pythonicity" and the so-called "pythonic-idioms" — in other words, what makes good Python code good. We conducted a literature review, detected uses of the idioms in open source code, and commented on idiom usage trends over time. One of the products of this research is my Pythonic idiom catalog.',
    skills: ['Python', 'Kotlin', 'Literature review'],
    github: 'https://github.com/SlimShadyIAm/DetectYourZen',
    displayImage: 'zen-your-python/01.png',
    links: [
      {
        text: 'Published paper',
        url: 'https://dl.acm.org/doi/10.1145/3486608.3486909',
      },
      {
        text: 'Idiom catalog',
        url: 'https://slimshadyiam.github.io/ZenYourPython/',
      },
      {
        text: 'My thesis',
        url: 'http://essay.utwente.nl/86873/1/Farooq_BA_EEMCS.pdf',
      },
    ],
  },
  {
    title: 'GIR',
    brief:
      'My biggest open-source project, a Discord bot which is widely used in several technology-related servers, providing moderation commands, message filtering, an XP system, and other useful utilities for users and moderators.',
    description:
      'A Discord bot used in many large technology related Discord servers, totalling roughly 80,000 members. This bot handles moderation commands, as well as message filtering, an XP system and various other utilities for users and moderators.',
    skills: ['Python', 'MongoDB', 'Discord.py', 'REST APIs'],
    displayImage: 'gir/image0.png',
    github: 'https://github.com/DiscordGIR/GIRRewrite',
  },
];
