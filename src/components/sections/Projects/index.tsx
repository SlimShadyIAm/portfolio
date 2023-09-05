'use client';
import React, { useState } from 'react';
import ProjectPreview from '@/components/ProjectPreview';
import ProjectDialog from '@/components/ProjectDialog';
import { ProjectData, projects } from '@/data/projectData';
import HeaderText from '@/components/HeaderText';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    ProjectData | undefined
  >();

  const closeModal = () => setSelectedProject(undefined);

  return (
    <div className="mt-12">
      <HeaderText>Projects</HeaderText>
      <ProjectDialog project={selectedProject} closeModal={closeModal} />
      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <>
            <ProjectPreview
              setSelectedProject={() => setSelectedProject(project)}
              project={project}
            />
            {i < projects.length - 1 && (
              <div className="relative flex h-[1px] w-48 justify-center self-center bg-gradient-to-r from-slate-950 via-indigo-500 to-slate-950">
                <div className="absolute top-0 h-1 w-24 bg-gradient-to-r from-slate-950 via-indigo-500 to-slate-950 blur-md" />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
