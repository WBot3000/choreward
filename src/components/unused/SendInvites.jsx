import React from 'react'
import TopNav from '../TopNav'
import BottomNav from '../BottomNav'
import ViewMembers from '../../ViewMembers'

function SendInvites() {
  return (
    <div>
      <TopNav/>
      <h1 className="justify-center items-center mt-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Add <span className="text-blue-600 dark:text-blue-500"> Family Members!</span></h1>
      <form className='mr-10 ml-10'>
      <div className="mb-6">
        <label htmlFor="sendingInvites" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Send Invitation</label>
        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send Invite To Jessica" required/>
    </div> 
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
      </form>
      

      {/* <div id="marketing-banner" tabindex="-1" className="fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600 w-10">
    <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">MemberName was added</p>
    </div>
    <div className="flex items-center flex-shrink-0">
        <button data-dismiss-target="#marketing-banner" type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>
</div> */}
<h1>View Members</h1>
{/* <ViewMembers/> */}
<BottomNav/>
    </div>
  )
}

export default SendInvites
