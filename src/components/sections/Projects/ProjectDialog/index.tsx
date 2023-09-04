'use client';

import { ProjectData } from '../projectData';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import Dialog from './Dialog';
import { Dialog as HeadlessDialog } from '@headlessui/react';
import DialogSection from './DialogSection';
import { Link } from 'lucide-react';

type ProjectDialogProps = {
  project?: ProjectData;
  closeModal: () => void;
};

const ProjectDialog = ({ project, closeModal }: ProjectDialogProps) => {
  if (!project) return null;

  return (
    <Dialog closeModal={closeModal} show={!!project}>
      <div className="flex flex-col gap-2">
        <div className="flex-1 rounded-lg">
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
        <HeadlessDialog.Title
          as="h3"
          className="my-2 text-lg font-medium leading-6 text-slate-200"
        >
          {project.title}
        </HeadlessDialog.Title>
        <div className="mt-2 flex flex-1 flex-col gap-2">
          <div className="flex">
            <div className="flex-[0.33]">
              {project.links && (
                <DialogSection title="links">
                  {project.links.map((link) => (
                    <a
                      href={link.url}
                      className="flex flex-row items-center gap-2 text-slate-300 text-sm"
                    >
                      <Link className='text-xs' />
                      {link.text}
                    </a>
                  ))}
                </DialogSection>
              )}
            </div>
            <div className="flex-[0.66]">
              <DialogSection title="description">
                <p>{project.description}</p>
              </DialogSection>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProjectDialog;
