import { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import {FaWindowClose} from "react-icons/fa";

export default function useContentModal(title, content) {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const modal = (
    (  
      <>
        <Transition appear show={isOpen}>
          <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close} >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" aria-hidden="true"/>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <TransitionChild
                    enter="ease-out duration-200"
                    enterFrom="opacity-0 transform-[scale(95%)]"
                    enterTo="opacity-100 transform-[scale(100%)]"
                    leave="ease-in duration-300"
                    leaveFrom="opacity-100 transform-[scale(100%)]"
                    leaveTo="opacity-0 transform-[scale(95%)]"
                >
                  <DialogPanel className="w-full max-w-4xl rounded-xl bg-gray-800 p-6">
                    <DialogTitle as="h2" className="text-2xl text-slate-200 font-medium">
                      <div className={'flex justify-between'}>
                        {title}
                        <button onClick={close}>
                          <FaWindowClose size={24} className={'text-purple-600'} />
                        </button>
                      </div>
                    </DialogTitle>
                    <div className="mt-2 text-sm/6 text-slate-200 font-light">
                      {content}
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  );

  return {open, modal};
}
