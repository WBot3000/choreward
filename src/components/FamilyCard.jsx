import React from 'react'

function FamilyCard({fightData, portalOpenFunc, uploadOpenFunc}) {
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

    return (
        <article key={fightData.id}>
            <div className="flex justify-center items-center pt-10">
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{fightData.text}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">00:00:0000</p>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={portalOpenFunc}>View</button>
                    </div>
                </a>
            </div>
        </article>
    )
}

export default FamilyCard
