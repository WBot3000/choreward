import React, { useState } from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'

const tempInvites = [
    {
        id: "1",
        name: "Family1"
    },
    {
        id: "2",
        name: "Family2"
    },
    {
        id: "3",
        name: "Family3"
    },
]

function NotFamily() {
    const [isCreateFormVisible, setCreateFormVisibility] = useState(false);
    const [currentInvites, setCurrentInvites] = useState(tempInvites);

    const toggleVisibility = () => {
        setCreateFormVisibility(true);
    };

    //TODO: Backend functionality
    function acceptInvite(inviteToAccept) {
        try {
            //TODO: Backend code
        }
        catch(e) {
            //TODO: Error handling code
        }
    }

    //TODO: Backend functionality
    function declineInvite(inviteToDecline) {
        try {
            //TODO: Backend code
            const newInviteList = [];
            for(let invite of currentInvites) {
                if(invite != inviteToDecline) {
                    newInviteList.push(invite);
                }
            }
            setCurrentInvites(newInviteList);
        }
        catch(e) {
            //TODO: Error handling code
        }

    }

    return (
        <>
            <TopNav/>
            <div className='mt-10'>
                {/* <h1 className="flex justify-center items-center">.</h1> */}
                {/* <h1 className="flex justify-center items-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1> */}
                <h1 className="flex justify-center items-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Not part of a <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500 ml-2 mr-2">family</mark> yet?</h1>
                <p className="flex justify-center items-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Create your own Choreward family and send invites now...</p>
                <div className="flex justify-center items-center">
                    <a onClick={toggleVisibility} href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Create
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>

                {isCreateFormVisible && <CreateForm />}

                <h2 className="flex justify-center items-center mt-4 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">My Invites</h2>
                <ul className='flex flex-col ml-96 mr-96 gap-y-5 overflow-y-scroll border-gray-200 border-2'>
                    {currentInvites.map(inv => <InviteListItem key={inv.id} inviteData={inv} onAccept={() => {acceptInvite(inv)}} onDecline={() => {declineInvite(inv)}}/>)}
                </ul>
            </div>
            <BottomNav/>
        </>
    )
}

const CreateForm = () => {
    return <form className='flex justify-center items-center'>
        <div className="mt-5 flex gap-6 mb-6 md:grid-cols-2">
            <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Your Family</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Awesome Family" required />
            </div>
            <button type="submit" className=" mb-6 mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        <div></div> {/*Empty div */}
        </div>
    </form>
  };

//Component that contains a current invite
function InviteListItem({ inviteData, onAccept, onDecline }) {
return <li className='m-4'>
    <span className='flex gap-x-10'>
        <p className="font-semibold">{inviteData.name}</p>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={onAccept}>Accept</button>
        <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            onClick={onDecline}>Decline</button>
    </span>
</li>;
    }

export default NotFamily
