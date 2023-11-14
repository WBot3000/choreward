import React, { useState } from 'react'
import useLoginCheck from './hooks/useLoginCheck'
import BottomNav from './BottomNav'
import TopNav from './TopNav'
// import SelectedFamily from './SelectedFamily'
import RecentUploads from './RecentUploads'
import Rewards from './Rewards'
import NotFamily from './NotFamily'


function MyFamily() {

    //For testing purposes
    const [isPartOfFamily, setIsPartOfFamily] = useState(true);

    useLoginCheck({
        redirect: "/Login"
    });

  return (<>
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {setIsPartOfFamily(!isPartOfFamily)}}>Is Part of Family Toggle For Testing</button>
    {isPartOfFamily &&
        <div>
            <TopNav/>
            <h1 className="flex justify-center items-center">.</h1>
            <h1 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white flex justify-center items-center">My Family</h1>
            {/* <div className="flex justify-center items-center"><SelectedFamily/></div> */}
            <div className="flex ml-10 mt-10  justify-left"><RecentUploads/></div>
            
            <Rewards/>
            <BottomNav/>
        </div>
    }
    {!isPartOfFamily &&
        <NotFamily/>
    }
  </>)
}

export default MyFamily
