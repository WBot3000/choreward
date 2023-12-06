// import { Fragment } from "react";
import { Dialog, /*Transition*/ } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

//NOTE: This component is meant to be a utility for all the other modals in the application, it should never be used by itself
function Modal({children, isOpen, onClose, title}) {
    //return <Transition appear show={isOpen} as={Fragment}>
    return <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            {/* <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
            > */}
                <div className='fixed inset-0 flex items-center justify-center'>
                    <Dialog.Panel className="flex flex-col gap-y-2 w-full max-w-7xl max-h-screen rounded bg-slate-200 p-4 shadow-xl">
                        <Dialog.Title className="text-3xl font-extrabold leading-none tracking-tight border-b-2 border-b-black">
                            {title}
                            <XMarkIcon className="float-right w-10" onClick={onClose}/>
                        </Dialog.Title>
                        {children}
                    </Dialog.Panel>
                </div>
            {/* </Transition.Child> */}
         </Dialog>
    //</Transition>
}

export default Modal;