import React, { useState } from 'react'
import useLoginCheck from './hooks/useLoginCheck'
import BottomNav from './BottomNav'
import TopNav from './TopNav'
import TrashIcon from "../assets/images/trash.svg"
import BedIcon from "../assets/images/bed.svg"

import PortalModal from './modals/PortalModal'
import UploadModal from './modals/UploadModal'

//TODO: Eventually get weekly tasks from the database
const tempTasks = [
    {
        name: "Take Out Trash",
        icon: TrashIcon,
    },
    {
        name: "Make the Bed",
        icon: BedIcon,
    }
]


function WeeklyTasks() {

    const [selectedWeeklyTask, setSelectedWeeklyTask] = useState(null);
    const [portalIsOpen, setPortalIsOpen] = useState(false);
    const [uploadIsOpen, setUploadIsOpen] = useState(false);

    useLoginCheck({
        redirect: "/Login"
    });

    function openPortalModal(task) {
        setSelectedWeeklyTask(task);
        setPortalIsOpen(true);
    }

    function closePortalModal() {
        setPortalIsOpen(false);
        setSelectedWeeklyTask(null);
    }

    function openUploadModal(task) {
        setSelectedWeeklyTask(task);
        setUploadIsOpen(true);
    }

    function closeUploadModal() {
        setUploadIsOpen(false);
        setSelectedWeeklyTask(null);
    }

    return (
        <div>
            <TopNav/>
            
            <h1 className="flex justify-center items-center">.</h1>
            <h3 className="text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white flex justify-center items-center">Weekly Tasks</h3>
            <div className="flex justify-center items-center">

                {tempTasks.map(task => (
                    <div key={task.name} className="m-20 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-end px-4 pt-4">
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span className="sr-only">Open dropdown</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                </svg>
                            </button>
                            {/* <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={task.icon} alt={`${task.name} Icon`}/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{task.name}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Task</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => {openUploadModal(task)}}>Post</a>
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                    onClick={() => {openPortalModal(task)}}>View</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <BottomNav/>
            <PortalModal isOpen={selectedWeeklyTask != null && portalIsOpen} onClose={() => {closePortalModal()}}
                title={selectedWeeklyTask?.name} videos={[]}/>
            <UploadModal isOpen={selectedWeeklyTask != null && uploadIsOpen} onClose={() => {closeUploadModal()}}
                submissionFor={selectedWeeklyTask?.name}/>
        </div>
    )
}

export default WeeklyTasks
