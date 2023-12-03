import { useState, useEffect } from "react";
import React from 'react'
// import { updateFamilies } from '../../graphql/mutations';
import { updateFamilies } from '../../graphql/mutations';
import useFetchFamilies from "../hooks/useFetchFamily";
import useLoginCheck from "../hooks/useLoginCheck";
import Rewards from "../RewardsDisplay";
import { getFamilies } from "../../graphql/queries";


function RewardsModal() {
    const {userId} = useLoginCheck({redirect:null});
    console.log(userId)
    const { families, addFamily, fetchFamilies, updateFamilyById,fetchFamilyById,deleteFamilyById } = useFetchFamilies();
    


    // get families by id
    const [data, setData] = useState(null);

    useEffect(() => {
      // Assuming fetchData is a function that returns a Promise
      const fetchData = async () => {
        try {
          const result = await fetchFamilyById("0699d2a6-38cb-4955-96ee-9978dc20d195");
          console.log("fetchByID", result)
          setData(result);
        } catch (error) {
          // Handle errors
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    
    const [familyData, setFamilyData] = useState();

    const handleSubmit = (e) => {
        let newReward = {
                    rewardName: "NewNewReward",
                    rewardCost: 10
                }
        deleteFamilyById("b250fb30-7850-42e4-a00f-c63145728f6f")
        const result = fetchFamilyById("4023a389-b13f-4dbc-9458-663055ddb70d");
        const fn = result.getFamilies;


        let familyMembers = data.getFamilies.Members.split(",")
        const {RewardName, RewardCost} = data.getFamilies.Rewards
        console.log("famMemebers", familyMembers, "rewards", RewardName, RewardCost)
        
        // console.log("result", data.getFamilies, {...data.getFamilies, ...{Head: "Ruchi"}})
        // updateFamilyById("4023a389-b13f-4dbc-9458-663055ddb70d", {...data.getFamilies, ...{Head: "Ruch"}})
    }

  return (
    <div className="pl-20 pr-20">
        <p>list</p>

        <p>Add Rewards</p>
        <input  name="Rewards.RewardName"
        //   onChange={handleChange} 
        //   value={familyData.Rewards.rewardName}
          type="name" id="RewardName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Reward Name" required/>
        <p>Reward Price</p>
      <input  name="Rewards.RewardCost"
                // onChange={handleChange} 
                // value={familyData.Rewards.rewardCost}
          type="cost" id="RewardCost" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Reward Cost" required/>
          <button onClick={handleSubmit}>Submit</button>
    </div>

  
  )
}

export default RewardsModal
