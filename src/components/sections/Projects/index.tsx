'use client';
import React, { useState } from 'react';
import ProjectPreview from './ProjectPreview';
import ProjectDialog from './ProjectDialog';
import { ProjectData, projects } from './projectData';
import HeaderText from '@/components/HeaderText';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    ProjectData | undefined
  >();

  const closeModal = () => setSelectedProject(undefined);

  return (
    <div>
      <HeaderText>Projects</HeaderText>
      <ProjectDialog project={selectedProject} closeModal={closeModal} />
      <div className="flex gap-4">
        {projects.map((project) => (
          <ProjectPreview
            setSelectedProject={() => setSelectedProject(project)}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
