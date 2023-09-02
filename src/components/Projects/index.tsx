'use client';
import React, { useState } from 'react';
import ProjectPreview from './ProjectPreview';
import ProjectDialog from './ProjectDialog';
import { ProjectData, projects } from './projectData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    ProjectData | undefined
  >();

  const closeModal = () => setSelectedProject(undefined);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-slate-200">Projects</h1>;
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
