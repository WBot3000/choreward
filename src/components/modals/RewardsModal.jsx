import { useState } from "react";
import React from 'react'
// import { updateFamilies } from '../../graphql/mutations';
import { updateFamilies } from '../../graphql/mutations';
import useFetchFamilies from "../hooks/useFetchFamily";
import useLoginCheck from "../hooks/useLoginCheck";
import Rewards from "../Rewards";


function RewardsModal() {
    const userId = useLoginCheck({redirect:null});
    

    console.log(userId)

    const [rewardName, setrewardName] = useState("");
    const [rewardCost, setrewardCost] = useState(0);
    
    const [familyData, setFamilyData] = useState({
        FamilyName: "hbjkjb",
        Head: "",
        Members: "",
        Rewards: { RewardName: "", RewardCost: 0 },
        ThreadsID: "",
        OnChanllengesID: "",
        EarnedPoints: "",
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("wer", familyData, name, value)
        if (name.includes("Rewards.")) {
          const field = name.split(".")[1];
          setFamilyData((prevState) => ({
            ...prevState,
            Rewards: {
              ...prevState.Rewards,
              [name]: value
            },
          }));
        } else {
          setFamilyData((prevState) => ({
            ...prevState,
            Rewards: value,
            // Rewards.push({ [rewardName]: "sdfa", [rewardCost]: 0 })
            Rewards: {
                ...prevState.Rewards, 
                [name]: value,  
              }
              
          }));
        }
      };

  return (
    <div className="pl-20 pr-20">
        <p>Add Rewards</p>
        <input  name="RewardName"
          onChange={handleChange} 
          value={familyData.Rewards.rewardName}
          type="name" id="RewardName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Reward Name" required/>
        <p>Reward Price</p>
      <input  name="RewardCost"
                onChange={handleChange} 
                value={familyData.Rewards.rewardCost}
          type="cost" id="RewardCost" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Reward Cost" required/>
          <button>Submit</button>
    </div>

  
  )
}

export default RewardsModal
