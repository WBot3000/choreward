import React from 'react'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'

function TopNav() {

    const navigate = useNavigate();
    
    function logOut() {
        Auth.signOut().then(() => {navigate("/Login")}).catch((e) => console.log("Error logging out: ", e))
    }

    function toggleDropdown() {
        var dropdown = document.getElementById('user-dropdown');
        dropdown.classList.toggle('hidden');
      }

      

    return (
        <div>
            <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Choreward</span>
                    </a>
                    <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false"
                        onClick={toggleDropdown}>
                        {/* <span className="sr-only">Open main menu</span> */}
                        <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    
                </div>

                <div id="user-dropdown" class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                        <div class="px-4 py-3">
                        <span class="block text-sm text-gray-900 dark:text-white">Username</span>
                        <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">userEmail@gmail.com</span>
                        </div>
                        <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Invites</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={logOut}>Sign out</a>
                        </li>
                        </ul>
                    </div>

            </nav>
        </div>
    )
}

export default TopNav
