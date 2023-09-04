export interface ProjectData {
  title: string;
  brief: string;
  description: string;
  skills: string[];
  displayImage: string;
  demoImages?: string[];
  github?: string[];
  demo?: string;
}

export const projects: ProjectData[] = [
  {
    title: 'Esports Team Twente Dashboard',
    brief:
      "My bachelor project: a dashboard for my university's Esports team, allowing them to upload and analyze replay files from games and display match statistics.",
    description: `This was my Bachelor graduation design project. It was a dashboard created for Esports Team Twente, our university's Esports team, who wanted a centralized dashboard where you could upload replay files from game, run them through a data analysis pipeline, and store and display statistics from matches. We created the frontend, backend, API and database implementation to solve their use case.`,
    displayImage: 'ett.png',
    skills: ['React', 'TypeScript', 'MaterialUI', 'SWR'],
    demoImages: [
     'ett-dashboard/02.png',
     'ett-dashboard/03.png',
     'ett-dashboard/04.png',
     'ett-dashboard/05.png',
     'ett-dashboard/06.png',
     'ett-dashboard/07.png',
     'ett-dashboard/08.png',
    ]
  },
];
