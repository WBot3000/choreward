import React from 'react'
import { AuthContext } from '../AuthContext'
import useLoginCheck from '../useLoginCheck'
import BottomNav from './BottomNav'
import TopNav from './TopNav'
// import SelectedFamily from './SelectedFamily'
import RecentUploads from './RecentUploads'
import Rewards from './Rewards'


function MyFamily() {

    // useLoginCheck({
    //     authContext: AuthContext,
    //     failureRedirect: "/Login"
    // });

  return (
    <div>
        <TopNav/>
        
        <h1 className="flex justify-center items-center">.</h1>
        <h1 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white flex justify-center items-center">My Family</h1>
        {/* <div className="flex justify-center items-center"><SelectedFamily/></div> */}
        <div className="flex ml-10 mt-10  justify-left"><RecentUploads/></div>
        
        <Rewards/>
        <BottomNav/>
    </div>
  )
}

export default MyFamily
