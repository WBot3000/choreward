import React, { useState } from 'react'
import useLoginCheck from './hooks/useLoginCheck'
import BottomNav from './BottomNav'
import TopNav from './TopNav'
import FamilyCard from './FamilyCard'

import PortalModal from './modals/PortalModal'
import FamilyFightsUploadModal from './modals/FamilyFightsUploadModal'

//Data hooks
import useFetchChallenges from './hooks/useFetchChallenges'
import useFetchFamily from './hooks/useFetchFamily'


//TODO: Incorporate functionality for upload modals
function FamilyFights() {

    const {userName} = useLoginCheck({
        redirect: "/Login"
    });

    const {families, getFamilyByUser, getFamilyByName} = useFetchFamily();
    const {splitChallenges} = useFetchChallenges();

    //const {isFamilyHead, userFamilyData} = useFetchUserFamily(userName);

    //const [myFights, setMyFights] = useState(tempMyFights);
    //const [otherFights, setOtherFights] = useState(tempOtherFights);

    //NOTE: This state is just for testing purposes. When backend integration is done, this'll probably just be gotten from the user object (since whether or not you're the family head doesn't change, with the exception of a user creating a new family)
    //const [isFamilyHead, setIsFamilyHead] = useState(false);

    const [viewingMyFights, setViewingMyFights] = useState(false);

    const [selectedFamilyFight, setSelectedFamilyFight] = useState(null);
    const [portalIsOpen, setPortalIsOpen] = useState(false);
    const [uploadIsOpen, setUploadIsOpen] = useState(false);

    const [familyToChallenge, setFamilyToChallenge] = useState("");
    const [challengeSentStatus, setChallengeSentStatus] = useState("");
    //const [currentChallenges, setCurrentChallenges] = useState(tempChallenges);

    //Effectively disables family fights if the user isn't part of a family
    function switchToMyFights() {
        if(userName != null) {
            setViewingMyFights(true);
        }
    }

    function openPortalModal(fight) {
        setSelectedFamilyFight(fight);
        setPortalIsOpen(true);
    }

    function closePortalModal() {
        setPortalIsOpen(false);
        setSelectedFamilyFight(null);
    }

    function openUploadModal(fight) {
        setSelectedFamilyFight(fight);
        setUploadIsOpen(true);
    }

    function closeUploadModal() {
        setUploadIsOpen(false);
        setSelectedFamilyFight(null);
    }

    function sendChallenge(event) {
        event.preventDefault();
        try {
            const fixedFamilyToChallenge = familyToChallenge?.trim()
            if(fixedFamilyToChallenge == "") {
                throw new Error("Please enter a family head name.")
            }
            else {
                //Backend code, make sure the challenge has been sent
                setChallengeSentStatus("Challenge successfully sent to " + fixedFamilyToChallenge)
            }
        }
        catch(e) {
            setChallengeSentStatus(e.message);
        }
    }

    // //TODO: Backend functionality
    // function acceptChallenge(challengeToAccept) {
    //     try {
    //         //TODO: Backend code
    //     }
    //     catch(e) {
    //         //TODO: Error handling code
    //     }
    // }

    // //TODO: Backend functionality
    // function declineChallenge(challengeToDecline) {
    //     try {
    //         //TODO: Backend code
    //         const newChallengeList = [];
    //         for(let challenge of currentChallenges) {
    //             if(challenge != challengeToDecline) {
    //                 newChallengeList.push(challenge);
    //             }
    //         }
    //         setCurrentChallenges(newChallengeList);
    //     }
    //     catch(e) {
    //         //TODO: Error handling code
    //     }

    // }

    const userFamily = getFamilyByUser(userName);
    const [myChallenges, otherChallenges] = splitChallenges(userFamily);

    
    
    //Need to figure out the size of the Family Fights container
    return (userName &&
        <div>
            <TopNav/>
            {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {setIsFamilyHead(!isFamilyHead)}}>Family Head Toggle For Testing</button> */}
            
            <h1 className="flex justify-center items-center">.</h1>
            <h1 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white flex justify-center items-center">Family Fights</h1>
            <div className="rounded-md mr-10 ml-10">
            <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full">
                    <a href="#" className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" 
                        disabled={!userFamily} onClick={switchToMyFights} aria-current="page">My Fights</a>
                </li>
                <li className="w-full">
                    <a href="#" className="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        onClick={() => {setViewingMyFights(false)}}>Other Fights</a>
                </li>
            </ul>
            </div>

            {userFamily && (userFamily.FamilyHead == userName) && viewingMyFights && <>
                <form className='flex flex-col justify-center gap-y-2 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow md:max-w-xl hover:bg-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800 mx-auto my-5'>
                    <label className="font-bold" htmlFor='family_to_challenge'>Challenge Family</label>
                    <input type="text" name="family_to_challenge" value={familyToChallenge}
                        onChange={e => {setFamilyToChallenge(e.target.value)}}/>
                    {challengeSentStatus &&
                        <p>{challengeSentStatus}</p>
                    }
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800ml-4" 
                        onClick={(e) => {sendChallenge(e)}}>Send Challenge</button>
                </form>

                {/*TODO: DON'T DELETE, will probably come to use later*/}
                {/* <h2 className="flex justify-center items-center mt-4 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">My Challenges</h2>
                <ul className='flex flex-col ml-96 mr-96 gap-y-5 overflow-y-scroll border-gray-200 border-2'>
                    {currentChallenges.map(challenge => <ChallengeListItem key={challenge.id} challengeData={challenge} onAccept={() => {acceptChallenge(challenge)}} onDecline={() => {declineChallenge(challenge)}}/>)}
                </ul> */}
            </>}

            <div className='overflow-y-auto h-96'>
                {viewingMyFights && myChallenges.map(fight => (
                    <FamilyCard key={fight.id} userFamily={userFamily} fightData={fight} portalOpenFunc={() => {openPortalModal(fight)}} uploadOpenFunc={() => {openUploadModal(fight)}}/>
                ))}
                {!viewingMyFights && otherChallenges.map(fight => (
                    <FamilyCard key={fight.id} userFamily={userFamily} fightData={fight} portalOpenFunc={() => {openPortalModal(fight)}}/>
                ))}
            </div>
            {/* <FamilyCard/> */}
            <BottomNav/>

            <PortalModal isOpen={selectedFamilyFight != null && portalIsOpen} onClose={closePortalModal}
                title={`${selectedFamilyFight?.Family1} vs ${selectedFamilyFight?.Family2}`} filter={selectedFamilyFight?.id}/>
            <FamilyFightsUploadModal fightId={selectedFamilyFight?.id} isOpen={selectedFamilyFight != null && uploadIsOpen} onClose={closeUploadModal}
                submissionFor={`${selectedFamilyFight?.Family1} vs ${selectedFamilyFight?.Family2}`}/>
        </div>
    )
}

//TODO: DON'T DELETE, will probably come to use later
//Component that contains a current invite
// function ChallengeListItem({ challengeData, onAccept, onDecline }) {
//     return <li className='m-4'>
//         <span className='flex gap-x-10'>
//             <p className="font-semibold">{challengeData.text}</p>
//             <p>{challengeData.time}</p>
//             <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//                 onClick={onAccept}>Accept!</button>
//             <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
//                 onClick={onDecline}>Decline...</button>
//         </span>
//     </li>;
// }

export default FamilyFights
