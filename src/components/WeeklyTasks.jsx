import React, { useState } from 'react'
import useLoginCheck from './hooks/useLoginCheck'
import BottomNav from './BottomNav'
import TopNav from './TopNav'
import TrashIcon from "../assets/images/trash.svg"
import BedIcon from "../assets/images/bed.svg"

import PortalModal from './modals/PortalModal'
import WeeklyTasksUploadModal from './modals/WeeklyTasksUploadModal'


//TODO: Eventually get weekly tasks from the database
const tempTasks = [
    {
        TaskType: "Take Out Trash",
        icon: TrashIcon,
    },
    {
        TaskType: "Make the Bed",
        icon: BedIcon,
    }
]


function WeeklyTasks() {

    const [selectedWeeklyTaskType, setSelectedWeeklyTaskType] = useState(null);
    const [portalIsOpen, setPortalIsOpen] = useState(false);
    const [uploadIsOpen, setUploadIsOpen] = useState(false);

    const {userName} = useLoginCheck({
        redirect: "/Login"
    });

    function openPortalModal(type) {
        setSelectedWeeklyTaskType(type);
        setPortalIsOpen(true);
    }

    function closePortalModal() {
        setPortalIsOpen(false);
        setSelectedWeeklyTaskType(null);
    }

    function openUploadModal(type) {
        setSelectedWeeklyTaskType(type);
        setUploadIsOpen(true);
    }

    function closeUploadModal() {
        setUploadIsOpen(false);
        setSelectedWeeklyTaskType(null);
    }

    //console.log(userName)

    return (userName &&
        <div>
            <TopNav/>
            
            <h1 className="flex justify-center items-center">.</h1>
            <h3 className="text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white flex justify-center items-center">Weekly Tasks</h3>
            <div className="flex justify-center items-center">

                {tempTasks.map(task => (
                    <div key={task.TaskType} className="m-20 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={task.icon} alt={`${task.TaskType} Icon`}/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{task.TaskType}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Task</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => {openUploadModal(task.TaskType)}}>Post</button>
                                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                    onClick={() => {openPortalModal(task.TaskType)}}>View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <BottomNav/>
            <PortalModal isOpen={selectedWeeklyTaskType != null && portalIsOpen} onClose={() => {closePortalModal()}}
                title={selectedWeeklyTaskType} filter={selectedWeeklyTaskType}/>
            <WeeklyTasksUploadModal isOpen={selectedWeeklyTaskType != null && uploadIsOpen} onClose={() => {closeUploadModal()}}
                submissionFor={selectedWeeklyTaskType}/>
        </div>
    )
}

export default WeeklyTasks
