import React, {useState} from 'react'
import useLoginCheck from './hooks/useLoginCheck'
import BottomNav from './BottomNav'
import TopNav from './TopNav'
// import SelectedFamily from './SelectedFamily'
import RecentUploads from './RecentUploads'
import Rewards from './Rewards'
import FamilyManagementModal from "./modals/FamilyManagementModal"


function MyFamily() {

    //NOTE: This state is just for testing purposes. When backend integration is done, this'll probably just be gotten from the user object (since whether or not you're the family head doesn't change, with the exception of a user creating a new family)
    const [isFamilyHead, setIsFamilyHead] = useState(false);

    const [mgmtIsOpen, setMgmtIsOpen] = useState(false);

    useLoginCheck({
        redirect: "/Login"
    });

  return (
    <div>
        <TopNav/>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {setIsFamilyHead(!isFamilyHead)}}>Family Head Toggle For Testing</button>
        <h1 className="flex justify-center items-center">.</h1>
        <h1 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white flex justify-center items-center">My Family</h1>
        {isFamilyHead && <>
            <div className="flex ml-10 mt-10 justify-left">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => {setMgmtIsOpen(true)}}>Manage Family Members</button>
            </div>
            <FamilyManagementModal isOpen={mgmtIsOpen} onClose={() => {setMgmtIsOpen(false)}}/>
            </>
        }
        {/* <div className="flex justify-center items-center"><SelectedFamily/></div> */}
        <div className="flex ml-10 mt-10 justify-left"><RecentUploads/></div>
        
        <Rewards isFamilyHead={isFamilyHead}/> {/*TODO: Remove prop-drilling here since this is just for testing purposes */}
        <BottomNav/>
    </div>
  )
}

export default MyFamily
