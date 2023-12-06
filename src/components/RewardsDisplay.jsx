import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { Fragment, useState } from 'react'
import React from "react";
import useFetchFamilies from "./hooks/useFetchFamily";
import useFetchRewards from "./hooks/useFetchRewards"

function RewardsDisplay({ familyId }) {
  const { families, fetchFamilies, fetchFamilyById } = useFetchFamilies();
  const [data, setData] = useState(null);
  const [Reward, setRewards] = useState("");
  const [EarnedPoints, setEarnedPoints] = useState(null);
  const [FamilyData,setFamilyData] = useState({})
  const { addReward } = useFetchRewards()
  const updatedItems = null;
  // const [UpdatedRewardList, setUpdatedRewardList] = useState();

  useEffect(() => {
    // Assuming fetchData is a function that returns a Promise
    const fetchData = async () => {
      try {
        const result = await fetchFamilyById(
          familyId
        );
        console.log(result.id);
        setFamilyData(result)
        console.log("result",FamilyData.id)
        // console.log("fetchByID", result)
        // setData(result.getFamilies);
        setRewards(result.Rewards);
        setEarnedPoints(result.EarnedPoints);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };

    if (familyId) {
      fetchData();
    }
  }, [familyId]);

  
  const { RewardName, RewardCost } = Reward;
  const PointsEarned = EarnedPoints;
  // console.log("These are the points",PointsEarned)
  // console.log("rewards HERE", RewardName, RewardCost)

  const items = [
    {
      text: "Ice-cream",
      points: 500,
    },
    {
      text: "Video Game",
      points: 2500,
    },
    {
      text: RewardName,
      points: RewardCost,
    },
  ];
  const [UpdatedRewardList, setUpdatedRewardList] = useState(items);
  const [newReward, setNewReward] = useState({
    RewardName: "",
    RewardCost: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("These are the new rewards", name, value);
    setNewReward({ ...newReward, [name]: value });
  };


  const handleAddReward = async () => {
    const { RewardName, RewardCost } = newReward;
    const rewardData = {
      RewardName: "Xbox",
      RewardCost: 1000
    };
  
    try {
      const newRewardId = await addReward(rewardData);
      if (newRewardId) {
        console.log('Reward added successfully with ID:', newRewardId);
      }
      
    } catch (error) {
      console.error('Failed to add reward:', error);
    }
  };
  console.log("THESE ARE UPDATED reward list", UpdatedRewardList);

  let [isOpen, setIsOpen] = useState(false);
  let [isClose, setIsClose] = useState(true);

  function closeModal() {
    setIsOpen(false);
    setIsClose(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // const handleRedeem = (points) => {
  //   //TODO: Prevent people from spending points they don't have
  //   const updatedPoints = parseInt(EarnedPoints) - points; // Update earned points
  //   setEarnedPoints(updatedPoints);
  // };
  return (
    <div>
      {/* <button type="button" className="ml-10 mt-10 mb-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-10 py-5 text-center me-2 mb-2">Earned Points {parseInt(EarnedPoints)+1000}</button> */}
      <button
        type="button"
        className="ml-10 mt-10 mb-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-10 py-5 text-center me-2"
      >
        Earned Points {parseInt(EarnedPoints)}
      </button>
      <div className="flex">
        <h2 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white ml-10 mt-10">
          Rewards
        </h2>
      </div>

      <div className="pb-10">
        <div className="flex pb-10">
          {UpdatedRewardList.map((item, index) => (
            <article key={index}>
              <div className="flex justify-center items-center pt-10 pl-10">
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.text}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.points} points
                    </p>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => handleRedeem(item.points)}
                    >
                      Redeem
                    </button>
                  </div>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="ml-10 pb-10">
          <button
            onClick={openModal}
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            className="mb-50 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-100 pb-100"
            type="button"
            id="addRewardButton"
          >
            Add Reward
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Rewards
                  </Dialog.Title>
                  <form className="space-y-4 mt-5" action="#">
                    <div>
                      <label
                        htmlFor="RewardName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Reward Name
                      </label>
                      <input
                        value={newReward.RewardName}
                        onChange={handleInputChange}
                        type="text"
                        name="RewardName"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Xbox"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="RewardCost"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Reward Cost
                      </label>
                      <input
                        value={newReward.RewardCost}
                        onChange={handleInputChange}
                        type="text"
                        name="RewardCost"
                        id="cost"
                        placeholder="2500"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                  </form>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleAddReward}
                    >
                      Add
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default RewardsDisplay;
