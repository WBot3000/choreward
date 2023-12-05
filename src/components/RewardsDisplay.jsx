import { useState, useEffect } from "react";
import React from 'react'
import RewardsForm from "./RewardsForm";
import useFetchFamilies from "./hooks/useFetchFamily";

function RewardsDisplay() {
  const { families, fetchFamilies,fetchFamilyById } = useFetchFamilies();
  const [data, setData] = useState(null);
  const [Reward, setRewards] = useState("");

  useEffect(() => {
    // Assuming fetchData is a function that returns a Promise
    const fetchData = async () => {
      try {
        const result = await fetchFamilyById("0699d2a6-38cb-4955-96ee-9978dc20d195");
        // console.log("fetchByID", result)
        // setData(result.getFamilies);
        setRewards(result.getFamilies.Rewards)
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

    const {RewardName, RewardCost} = Reward
    // console.log("rewards HERE", RewardName, RewardCost)

    const items = [
        {
          text: 'Ice-cream',
          points:500,
          viewButton: <button>Redeem</button>,
        },
        {
          text: 'Video Game',
          points:2500,
          viewButton: <button>Redeem</button>,
        }
        ,
        {
          text: RewardName,
          points:RewardCost,
          viewButton: <button>Redeem</button>,
        },
  ];

    const [formOpen, setFormOpen] = useState(false);
  
    const openForm = () => {
      setFormOpen(true);
    };
  
    const closeForm = () => {
      setFormOpen(false);
    };

  return (
    <div>
      <div className="flex">
      <h2 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white ml-10 mt-10">Rewards</h2>
      <link></link>
      <button onClick={openForm}>Add Rewards</button>
      <button className="ml-10" onClick={closeForm}> X </button>
      </div>
      {formOpen && (
      <div>
          <div>
          <RewardsForm/>
          </div>
        </div>)}


    <div className="flex pb-40">
    {items.map((item,index) => (
    <article key={index}>
           <div className="flex justify-center items-center pt-10 pl-10">
 <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
     <div className="flex flex-col justify-between p-4 leading-normal">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.text}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.points} points</p>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Redeem</button>
     </div>
    </a>
    </div>
  </article>
    ))}
    </div>
    </div>
  )
}

export default RewardsDisplay
