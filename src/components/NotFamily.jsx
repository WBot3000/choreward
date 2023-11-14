import React, { useState } from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'


function NotFamily() {
    const [isComponentVisible, setComponentVisibility] = useState(false);

    const toggleVisibility = () => {
        setComponentVisibility(true);
    };

  return (
    <>
    <TopNav/>
    <div class='mt-10'>
        {/* <h1 className="flex justify-center items-center">.</h1> */}
      {/* <h1 class="flex justify-center items-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1> */}
      <h1 class="flex justify-center items-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Not part of a <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500 ml-2 mr-2">family</mark> yet?</h1>
<p class="flex justify-center items-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Create your own Choreward family and send invites now...</p>
<div class="flex justify-center items-center">
<a onClick={toggleVisibility} href="#" class="flex inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Create
    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>
</div>

<form class='flex justify-center items-center'>
{isComponentVisible && <MyComponent />}
    
</form>
    </div>
    <BottomNav/>
    </>
  )
}

const MyComponent = () => {
    return     <div>
        <div class="mt-5 flex grid gap-6 mb-6 md:grid-cols-2">
    <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Your Family</label>
        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Awesome Family" required />
    </div>
        <button type="submit" class=" mb-6 mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

    
    <div>
    </div>
</div>
</div>
  }; 

export default NotFamily
