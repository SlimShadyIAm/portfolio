'use client';
import React, { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { ProjectData } from '../projectData';
import Image from 'next/image';

type ProjectDialogProps = {
  project?: ProjectData;
  closeModal: () => void;
};

const ProjectDialog = ({ project, closeModal }: ProjectDialogProps) => {
  if (!project) return null;

  return (
    <Transition appear show={!!project} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-slate-950 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-slate-200"
                >
                  {project.title}
                </Dialog.Title>
                <div className="mt-2 flex flex-col gap-2">
                  <div className="flex-1 rounded-lg bg-slate-200">
                    <Image className="rounded-lg" src={project.displayImage} width={1000} height={530} alt="Project image"/>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectDialog;
