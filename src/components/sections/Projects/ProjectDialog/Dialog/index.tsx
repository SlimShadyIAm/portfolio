'use client';
import React, { Fragment, ReactNode } from 'react';

import { Dialog as HeadlessDialog, Transition } from '@headlessui/react';

type ProjectDialogProps = {
  show: boolean;
  children: ReactNode;
  closeModal: () => void;
  title: string;
};

const Dialog = ({ children, show, closeModal, title }: ProjectDialogProps) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <HeadlessDialog as="div" className="relative z-10" onClose={closeModal}>
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
              <HeadlessDialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-slate-950 p-6 text-left align-middle shadow-xl transition-all">
                <HeadlessDialog.Title
                  as="h3"
                  className="mt-2 text-lg font-medium leading-6 text-slate-200"
                >
                  {title}
                </HeadlessDialog.Title>
                {children}

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </HeadlessDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  );
};

export default Dialog;
