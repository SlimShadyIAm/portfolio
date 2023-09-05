'use client';
import React, { Fragment, ReactNode } from 'react';

import { Dialog as HeadlessDialog, Transition } from '@headlessui/react';

type ProjectDialogProps = {
  show: boolean;
  children: ReactNode;
  closeModal: () => void;
};

const Dialog = ({ children, show, closeModal }: ProjectDialogProps) => {
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
              <HeadlessDialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-slate-900 p-6 text-left align-middle shadow-xl transition-all">
                {children}
              </HeadlessDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  );
};

export default Dialog;
