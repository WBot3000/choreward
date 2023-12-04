import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

//NOTE: This component is meant to be a utility for all the other modals in the application, it should never be used by itself
function Modal(props) {
    return <Dialog open={props.isOpen} onClose={props.onClose} className="relative z-50">
        <div className='fixed inset-0 flex items-center justify-center'>
            <Dialog.Panel className="flex flex-col gap-y-2 w-full max-w-7xl max-h-screen rounded bg-slate-200 p-4 shadow-xl">
                <Dialog.Title className="text-3xl font-extrabold leading-none tracking-tight border-b-2 border-b-black">
                    {props.title}
                    <XMarkIcon className="float-right w-10" onClick={props.onClose}/>
                </Dialog.Title>
                {props.children}
            </Dialog.Panel>
        </div>
    </Dialog>
}

export default Modal;