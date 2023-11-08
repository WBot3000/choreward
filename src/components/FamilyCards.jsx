import React from 'react'

function FamilyCards() {
    const items = [
        {
          id: 1,
          text: 'Family Fight 1 VS Family Fight 2',
        //   trashIcon: <FaClock />,
          viewButton: <button>View Video</button>,
        },
        {
          id: 2,
          text: 'Family Fight 1 VS Family Fight 2',
        //   trashIcon:     <FaClock />,
          viewButton: <button>View Video</button>,
        },
  ];
  return (
    <div>
    {items.map((item) => (
    <article key={item.id}>
           <div class="flex justify-center items-center pt-10">
 <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
     <div class="flex flex-col justify-between p-4 leading-normal">
         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.text}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">00:00:0000</p>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View</button>
     </div>
    </a>
    </div>
  </article>
    ))}
    </div>
  )
}

export default FamilyCards
