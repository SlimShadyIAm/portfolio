'use client';

import { ProjectData } from '@/data/projectData';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import Dialog from './Dialog';
import { Dialog as HeadlessDialog } from '@headlessui/react';
import DialogSection from './DialogSection';
import { Link } from 'lucide-react';
import ProjectSkillBadges from '@/components/ProjectSkillBadges';

type ProjectDialogProps = {
  project?: ProjectData;
  closeModal: () => void;
};

const ProjectDialog = ({ project, closeModal }: ProjectDialogProps) => {
  if (!project) return null;

  return (
    <Dialog closeModal={closeModal} show={!!project}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-1 flex-col items-center rounded-sm">
          {project.demoImages ? (
            <Carousel images={project.demoImages} />
          ) : (
            <div className="shrink-0">
              <Image
                src={`/images/projects/${project.displayImage}`}
                width={1000}
                height={530}
                alt="Project display image"
                className="mb-2 max-h-96 w-auto max-w-full shrink-0 rounded-sm md:h-96"
              />
            </div>
          )}
        </div>
        <HeadlessDialog.Title
          as="h3"
          className="my-2 text-xl font-medium leading-6 text-slate-200"
        >
          {project.title}
        </HeadlessDialog.Title>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex w-full flex-[0.33] flex-col gap-1">
              <DialogSection title="Category">
                <ProjectSkillBadges skills={[project.category]} />
              </DialogSection>
              {project.tools && (
                <DialogSection title="Tools Used">
                  <ProjectSkillBadges skills={project.tools} />
                </DialogSection>
              )}
              {project.softSkills && (
                <DialogSection title="Soft Skills Used">
                  <ProjectSkillBadges skills={project.softSkills} />
                </DialogSection>
              )}
              {project.links && (
                <DialogSection title="Links">
                  {project.links.map((link) => (
                    <a
                      href={link.url}
                      className="flex flex-row items-center gap-2 text-sm text-indigo-300 transition-colors hover:text-indigo-500"
                      key={link.url}
                    >
                      <Link size={16} />
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
