import { useState, useEffect } from "react";
import React from "react";
// import { updateFamilies } from '../../graphql/mutations';
import { updateFamilies } from "../graphql/mutations";
import useFetchFamilies from "./hooks/useFetchFamily";
import useLoginCheck from "./hooks/useLoginCheck";
import Rewards from "./RewardsDisplay";
import { getFamilies } from "../graphql/queries";

function RewardsForm() {
  const { userName } = useLoginCheck({ redirect: null });
  console.log(userName);
  const {
    families,
    addFamily,
    fetchFamilies,
    updateFamilyById,
    fetchFamilyById,
    deleteFamilyById,
  } = useFetchFamilies();

  // get families by id
  const [data, setData] = useState(null);

  useEffect(() => {
    // Assuming fetchData is a function that returns a Promise
    const fetchData = async () => {
      try {
        const result = await fetchFamilyById(
          "0699d2a6-38cb-4955-96ee-9978dc20d195"
        );
        console.log("fetchByID", result);
        setData(result);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //const [familyData, setFamilyData] = useState();

  const handleSubmit = (e) => {
    // let newReward = {
    //             rewardName: "NewNewReward",
    //             rewardCost: 10
    //         }
    deleteFamilyById("b250fb30-7850-42e4-a00f-c63145728f6f");
    const result = fetchFamilyById("42be5ffd-bc45-49d3-a5ab-8bcf26faaa09");
    //const fn = result.getFamilies;

    let familyMembers = data.getFamilies.Members.split(",");
    const { RewardName, RewardCost } = data.getFamilies.Rewards;
    const Head = data.getFamilies.Head;
    console.log(
      "famMemebers",
      familyMembers,
      "rewards",
      RewardName,
      RewardCost
    );
    console.log("FamHead", Head);

    // console.log("result", data.getFamilies, {...data.getFamilies, ...{Head: "Ruchi"}})
    updateFamilyById("42be5ffd-bc45-49d3-a5ab-8bcf26faaa09", {
      ...data.getFamilies,
      ...{ Head: "Ruch" },
    });
  };

  return (
    <div className="pl-20 pr-20">
      <p>list</p>

      <p>Add Rewards</p>
      <input
        name="Rewards.RewardName"
        //   onChange={handleChange}
        //   value={familyData.Rewards.rewardName}
        type="name"
        id="RewardName"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="Reward Name"
        required
      />
      <p>Reward Price</p>
      <input
        name="Rewards.RewardCost"
        // onChange={handleChange}
        // value={familyData.Rewards.rewardCost}
        type="cost"
        id="RewardCost"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="Reward Cost"
        required
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default RewardsForm;
