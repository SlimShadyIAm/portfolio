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
    brief: 'A dashboard for Esports Team Twente, allowing them to upload and analyze replay files from games and display match statistics.',
    description: '',
    displayImage: '/images/projects/covers/ett.png',
    skills: ['React', 'TypeScript', 'MaterialUI', 'SWR'],
  },
];
