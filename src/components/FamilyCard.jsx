import React from 'react'

function FamilyCard({userFamily, fightData, portalOpenFunc, uploadOpenFunc}) {
    // const items = [
    //     {
    //       id: 1,
    //       text: 'Family Fight 1 VS Family Fight 2',
    //     //   trashIcon: <FaClock />,
    //       viewButton: <button>View Video</button>,
    //     },
    //     {
    //       id: 2,
    //       text: 'Family Fight 1 VS Family Fight 2',
    //     //   trashIcon:     <FaClock />,
    //       viewButton: <button>View Video</button>,
    //     },
    // ];

    function canUpload() {
        return userFamily == fightData.Family1 || userFamily == fightData.Family2
    }

    function getTimeRemainingString() {
        if(!fightData.EndTime) {
            return "Unknown";
        }
        let timeLeft = new Date(fightData.EndTime) - new Date();
        if(timeLeft <= 0) {
            return "00:00:00:00"
        }
        else {
            const msInDay = 1000*60*60*24;
            const msInHour = 1000*60*60;
            const msInMin = 1000*60
            const msInSec = 1000; //Just to keep the pattern going
            let numDays = 0;
            let numHours = 0;
            let numMins = 0;
            let numSecs = 0;

            while(timeLeft >= msInDay) {
                numDays++;
                timeLeft -= msInDay;
            }
            while(timeLeft >= msInHour) {
                numHours++;
                timeLeft -= msInHour;
            }
            while(timeLeft >= msInMin) {
                numMins++;
                timeLeft -= msInMin;
            }
            numSecs = Math.round(timeLeft / msInSec);

            return (numDays < 10 ? "0" : "") + numDays + ":" + (numHours < 10 ? "0" : "") + numHours + ":" + (numMins < 10 ? "0" : "") + numMins + ":" + (numSecs < 10 ? "0" : "") + numSecs
        }
    }


    return (
        <article key={fightData.id}>
            <div className="flex justify-center items-center pt-10">
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${fightData.Family1} vs ${fightData.Family2}`}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{getTimeRemainingString()}</p>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            {canUpload() && <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={uploadOpenFunc}>Post</button>}
                            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                onClick={portalOpenFunc}>View</button>
                        </div>
                    </div>
                </a>
            </div>
        </article>
    )
}

export default FamilyCard
