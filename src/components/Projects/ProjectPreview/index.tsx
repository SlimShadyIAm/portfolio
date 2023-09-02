import { Expand, Github, Link } from 'lucide-react';
import { ProjectData } from '../projectData';
import ProjectSkillBadge from '../ProjectSkillBadge';

type Props = {
  project: ProjectData;
  setSelectedProject: () => void;
};

const ProjectPreview = ({ project, setSelectedProject }: Props) => {
  return (
    <div className="pretty-ring flex w-full flex-row gap-4 rounded-lg p-2 overflow-hidden">
      <img src={project.displayImage} className="z-10 w-[45%] self-center rounded-md" />
      <div className="relative flex h-full w-full flex-col gap-1 p-2">
        <div className="absolute top-0 z-0 h-6 w-[75%] self-center bg-indigo-500 blur-[100px]" />
        <h2 className="text-xl font-medium text-slate-200">{project.title}</h2>
        <p className="text-md mb-4 text-slate-400">{project.brief}</p>
        <div className="mb-4 flex flex-row flex-wrap gap-4">
          {project.skills.map((skill) => (
            <p className='text-slate-300/90 text-xs uppercase'>{skill}</p>
          ))}
        </div>
        <div className="flex flex-row gap-4 justify-self-end">
          {project.demo && (
            <a
              className="pretty-ring flex flex-row gap-3 self-start rounded-md bg-slate-200 px-4 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-300"
              onClick={setSelectedProject}
              href={project.demo}
            >
              <Link />
              Visit demo
            </a>
          )}
          {project.github && (
            <a
              className="pretty-ring flex flex-row gap-3 self-start rounded-md bg-slate-200 px-4 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-300"
              onClick={setSelectedProject}
              href={project.demo}
            >
              <Github />
              Code
            </a>
          )}
          <button
            className="pretty-ring flex flex-row gap-3 self-start rounded-md bg-slate-900 px-3 py-2 font-medium text-slate-300/75 transition-colors hover:bg-slate-600/10 hover:text-slate-100/75"
            onClick={setSelectedProject}
          >
            <Expand />
            More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
