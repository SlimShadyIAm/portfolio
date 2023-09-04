'use client';

import { ProjectData } from '../projectData';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import Dialog from './Dialog';

type ProjectDialogProps = {
  project?: ProjectData;
  closeModal: () => void;
};

const ProjectDialog = ({ project, closeModal }: ProjectDialogProps) => {
  if (!project) return null;

  return (
    <Dialog closeModal={closeModal} show={!!project} title={project.title}>
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex-1 rounded-lg bg-slate-200">
          {project.demoImages ? (
            <Carousel images={project.demoImages} />
          ) : (
            <Image
              src={`images/projects/covers/${project.displayImage}`}
              width={1000}
              height={530}
              alt="Project display image"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex">
            <div className="flex-[0.33]"></div>
            <div className="flex-[0.66]">
              <p className=" text-sm text-gray-500">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProjectDialog;
