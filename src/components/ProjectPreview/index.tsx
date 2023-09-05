import { Expand, Github, Link } from 'lucide-react';
import { ProjectData } from '@/data/projectData';
import ProjectSkillBadges from '@/components/ProjectSkillBadges';

type Props = {
  project: ProjectData;
  setSelectedProject: () => void;
};

const ProjectPreview = ({ project, setSelectedProject }: Props) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-[0.4] items-center justify-center">
        <img
          src={`/images/projects/${project.displayImage}`}
          className="z-10 h-52 max-h-full max-w-full rounded-lg"
        />
      </div>
      <div className="flex h-full w-full flex-[0.6] flex-col justify-center gap-1 p-4">
        <p className="text-xs font-medium uppercase text-indigo-500">
          {project.category}
        </p>
        <h2 className="text-xl font-medium text-slate-200">{project.title}</h2>
        <p className="text-md mb-4 text-slate-400">{project.brief}</p>
        <ProjectSkillBadges skills={project.skills} />
        <div className="flex flex-row gap-4 justify-self-end">
          <button
            className="mt-4 flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm text-slate-300/75 ring ring-slate-800 transition-colors hover:bg-slate-600/30 hover:text-slate-100/75"
            onClick={setSelectedProject}
          >
            <Expand size={18} />
            See details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
