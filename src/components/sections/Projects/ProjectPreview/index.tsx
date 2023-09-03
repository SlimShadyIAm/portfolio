import { Expand, Github, Link } from 'lucide-react';
import { ProjectData } from '../projectData';

type Props = {
  project: ProjectData;
  setSelectedProject: () => void;
};

const ProjectPreview = ({ project, setSelectedProject }: Props) => {
  return (
    <div className="flex flex-row gap-2">
      <img
        src={project.displayImage}
        className="z-10 w-[45%] self-center rounded-lg"
      />
      <div className="flex h-full w-full flex-col gap-1 p-4 justify-center">
        <h2 className="text-xl font-medium text-slate-200">{project.title}</h2>
        <p className="text-md mb-4 text-slate-400">{project.brief}</p>
        <div className="mb-4 flex flex-row flex-wrap gap-4">
          {project.skills.map((skill) => (
            <p className="text-xs uppercase text-slate-300/90">{skill}</p>
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
            className="project-button text-slate-300/75 ring ring-slate-900 hover:bg-slate-600/10 hover:text-slate-100/75"
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
