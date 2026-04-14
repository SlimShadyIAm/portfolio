'use client';

import React, { Fragment, ReactNode } from 'react';

import {
  Dialog as HeadlessDialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { X } from 'lucide-react';

type ModalProps = {
  show: boolean;
  children: ReactNode;
  closeModal: () => void;
};

const Dialog = ({ children, show, closeModal }: ModalProps) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <HeadlessDialog
        as="div"
        className="relative z-10"
        open={show}
        onClose={closeModal}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-full max-w-5xl transform overflow-hidden rounded-2xl bg-slate-900 p-6 text-left align-middle shadow-xl transition-all">
                <button
                  type="button"
                  className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/75 text-2xl text-slate-200 md:invisible"
                  onClick={closeModal}
                >
                  <X />
                </button>
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  );
};

export default Dialog;
