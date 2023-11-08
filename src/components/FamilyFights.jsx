import React, {useState} from 'react'
import { AuthContext } from '../AuthContext'
import useLoginCheck from '../useLoginCheck'
import BottomNav from './BottomNav'
import TopNav from './TopNav'
import FamilyCard from './FamilyCard'

import PortalModal from './modals/PortalModal'

const tempFights = [
    {
      id: "1",
      text: 'Family Fight 1 VS Family Fight 2',
    //   trashIcon: <FaClock />,
    //  viewButton: <button>View Video</button>,
    },
    {
      id: "2",
      text: 'Family Fight 1 VS Family Fight 2',
    //   trashIcon:     <FaClock />,
    //  viewButton: <button>View Video</button>,
    },
    {
        id: "3",
        text: "Family Fight 1 vs Family Fight 3"
    },
    {
        id: "4",
        text: "Family Fight 3 vs Family Fight 4"
    }
];

//TODO: Incorporate functionality for upload modals
function FamilyFights() {

    const [selectedFamilyFight, setSelectedFamilyFight] = useState(null);
    const [portalIsOpen, setPortalIsOpen] = useState(false);

    useLoginCheck({
        authContext: AuthContext,
        failureRedirect: "/Login"
    });

    function openPortalModal(fight) {
        setSelectedFamilyFight(fight);
        setPortalIsOpen(true);
    }

    function closePortalModal() {
        setPortalIsOpen(false);
        setSelectedFamilyFight(null);
    }
    
    //Need to figure out the size of the Family Fights container
    return (
        <div>
            <TopNav/>
            
            <h1 className="flex justify-center items-center">.</h1>
            <h1 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white flex justify-center items-center">Family Fights</h1>
            <div className="rounded-md mr-10 ml-10">
            <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full">
                    <a href="#" className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">My Fights</a>
                </li>
                <li className="w-full">
                    <a href="#" className="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Other Fights</a>
                </li>
            </ul>
            </div>

            <div className='overflow-y-auto h-96'>
                {tempFights.map(fight => (
                    <FamilyCard key={fight.id} fightData={fight} portalOpenFunc={() => {openPortalModal(fight)}}/>
                ))}
            </div>
            {/* <FamilyCard/> */}
            <BottomNav/>

            <PortalModal isOpen={selectedFamilyFight != null && portalIsOpen} onClose={closePortalModal}
                title={selectedFamilyFight?.text} videos={[]}/>
        </div>
    )
}

export default FamilyFights
