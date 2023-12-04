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

function ViewInvites() {
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
                <h2 className="flex justify-center items-center mt-4 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">My Invites</h2>
                <ul className='flex flex-col ml-96 mr-96 gap-y-5 overflow-y-scroll border-gray-200 border-2'>
                    {currentInvites.map(inv => <InviteListItem key={inv.id} inviteData={inv} onAccept={() => {acceptInvite(inv)}} onDecline={() => {declineInvite(inv)}}/>)}
                </ul>
            </div>
            <BottomNav/>
        </>
    )
}


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

export default ViewInvites
