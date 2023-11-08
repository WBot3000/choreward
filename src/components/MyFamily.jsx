import React from 'react'
import BottomNav from './BottomNav'
import TopNav from './TopNav'
import SelectedFamily from './SelectedFamily'
import RecentUploads from './RecentUploads'
import Rewards from './Rewards'
function MyFamily() {
  return (
    <div>
        <TopNav/>
        
        <h1 class="flex justify-center items-center">.</h1>
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white flex justify-center items-center">My Family</h1>
        <div class="flex justify-center items-center"><SelectedFamily/></div>
        <div class="flex ml-10 mt-10  justify-left"><RecentUploads/></div>
        
        <Rewards/>
        <BottomNav/>
    </div>
  )
}

export default MyFamily
