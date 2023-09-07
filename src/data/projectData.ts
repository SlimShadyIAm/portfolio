export interface ProjectData {
  title: string;
  brief: string;
  category: string;
  description: string;
  tools: string[];
  softSkills?: string[];
  displayImage: string;
  demoImages?: string[];
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
    category: 'Web app',
    description: `This was my Bachelor graduation design project. It was a dashboard created for Esports Team Twente, our university's Esports team, who wanted a centralized dashboard where you could upload replay files from game, run them through a data analysis pipeline, and store and display statistics from matches. We created the frontend, backend, API and database implementation to solve their use case.`,
    displayImage: 'ett-dashboard/01.png',
    tools: ['React', 'TypeScript', 'MaterialUI', 'SWR', 'Cypress'],
    softSkills: ['UX Testing Methodology', 'Agile Scrum'],
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
    category: 'Research',
    description:
      'Beginning as my Bachelor thesis project, it was then partially rewritten and submitted to SPLASH conference on Software Language Engineering, and subsequently accepted for publication. This paper explores the concept of "pythonicity" and the so-called "pythonic-idioms" — in other words, what makes good Python code good. We conducted a literature review, detected uses of the idioms in open source code, and commented on idiom usage trends over time. One of the products of this research is my Pythonic idiom catalog.',
    tools: ['Python', 'Kotlin'],
    softSkills: ['Literature review'],
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
      {
        text: 'GitHub (automated detectors)',
        url: 'https://github.com/SlimShadyIAm/DetectYourZen',
      },
    ],
  },
  {
    title: 'Reading The Reader',
    brief:
      "My master's thesis project, which I am currently working on, is a research project that will attempt to help people suffering from central vision loss improve their reading",
    category: 'Research',
    description:
      "In this project, we are designing an interface that will help people suffering from central vision loss improve their reading performance by making fine-grained adjustments the text presentation style. We will perform user studies to test this interface with readers. In future, this will integrate with an eye-tracking device and AI to help predict adjustments to text presentation styles that based on the user's reading patterns to help improve reading performance.",
    tools: ['Figma', 'React'],
    softSkills: [
      'Requirements engineering',
      'UX Testing Methodology',
      'Project management',
    ],
    displayImage: 'reading-the-reader/image0.jpeg',
    links: [
      {
        text: 'Project overview',
        url: 'https://www.compute.dtu.dk/english/news/2023/01/artificial-intelligence-will-help-people-with-impaired-vision-to-read-better',
      },
    ],
  },
  {
    title: 'GIR (Discord bot)',
    brief:
      'My biggest open-source project, a Discord bot which is widely used in several technology-related servers, providing moderation commands, message filtering, an XP system, and other useful utilities for users and moderators.',
    category: 'Open source software',
    description:
      'An open-source Discord bot used in many large technology related Discord servers, totalling over 100,000 members. This bot handles moderation commands, as well as message filtering, an XP system and various other utilities for users and moderators.',
    tools: ['Python', 'MongoDB', 'Discord.py', 'REST APIs', 'Docker'],
    displayImage: 'gir/image0.png',
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/DiscordGIR/GIRRewrite',
      },
    ],
  },
  {
    title: 'EZ-Sign',
    brief:
      'Human-Computer Interaction course project, which was designed as a hi-fi prototype to help translate sign language into English',
    category: 'Hi-Fi Prototype',
    description:
      "This web app, created as a high fidelity proof of concept for a human-computer interaction course, serves as a non-functional prototype designed to facilitate communication between sign language users and non-sign language users through a smart sign language translation app utilizing the phone's camera.",
    tools: ['VueJS', 'Figma', 'Bulma'],
    softSkills: ['UX Testing Methodology'],
    displayImage: 'ezsign/0.png',
    demoImages: [
      'ezsign/1.png',
      'ezsign/2.png',
      'ezsign/4.png',
      'ezsign/5.png',
      'ezsign/6.png',
      'ezsign/7.png',
      'ezsign/8.png',
    ],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/SlimShadyIAm/ezsign',
      },
      {
        text: 'Demo',
        url: 'https://ezsign.slim.rocks',
      },
    ],
  },
  {
    title: 'Portfolio',
    brief: 'The portfolio website you\'re currently looking at :)',
    category: 'Web app',
    tools: ['Next.js', 'React', 'TailwindCSS', 'Figma', 'ESLint', 'Prettier'],
    description: 'This is my latest iteration of my portfolio. In this iteration, I strove to make as much information available about me and my work experience as concise as I could, while also trying to make the design aesthetically pleasing, drawing inspiration from designers such as @jamesm.',
    displayImage: 'portfolio/portfolio0.png',
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/SlimShadyIAm/portfolio-react'
      },
      {
        text: '@jamesm (Inspiration)',
        url: 'https://twitter.com/jamesm'
      },
      {
        text: '@brandonsaldan (Inspiration)',
        url: 'https://brandons.place'
      },
      {
        text: 'Prettyfolio (Inspiration)',
        url: 'https://www.prettyfolio.com/'
      }
    ]
  }
];
