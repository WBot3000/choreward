import React from 'react'
import { AuthContext } from '../AuthContext'
import useLoginCheck from '../useLoginCheck'
import BottomNav from './BottomNav'
import TopNav from './TopNav'
import FamilyCards from './familyCards'

function FamilyFights() {

    useLoginCheck({
        authContext: AuthContext,
        failureRedirect: "/Login"
    });
    
  return (
    <div>
        <TopNav/>
        
        <h1 class="flex justify-center items-center">.</h1>
        <h1 class="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white flex justify-center items-center">Family Fights</h1>
        <div class="rounded-md mr-10 ml-10">
        <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
    <li class="w-full">
        <a href="#" class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">My Fights</a>
    </li>
    <li class="w-full">
        <a href="#" class="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Other Fights</a>
    </li>
</ul>
</div>

<FamilyCards/>
<BottomNav/>
    </div>
  )
}

export default FamilyFights
