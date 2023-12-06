import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listRewards,getRewards } from '../../graphql/queries'; // Import the query
import { createRewards, updateRewards, deleteRewards } from '../../graphql/mutations'; // Import the mutation


const useFetchRewards = () => {
    const [Rewards, setRewards] = useState([]);
  
    //console.log(Rewards);
  
    const fetchRewards = async () => {
      try {
        const RewardData = await API.graphql(graphqlOperation(listRewards));
        setRewards(RewardData.data.listRewards.items);
      } catch (err) {
        console.error('Error fetching Rewards:', err);
      }
    };
      //For most Portal modals
      //Function to get all the Rewards of a certain Task Type
      //Task Type is either a constant string (for Weekly Tasks like "Make the Bed"), or the ID of the challenge it belongs to (for Family Fights)
      const getRewardsByTaskType = (taskType) => {
          const filteredRewards = []
          if(taskType != null) { //Don't bother if there's no task type
              for(let Reward of Rewards) {
                  if(Reward.RewardTypes == taskType) {
                      filteredRewards.push(Reward);
                  }
              }
          }
          return filteredRewards; //Should be all Rewards that match the criteria
      }
  
      //For Recent Uploads section
      const getRewardsByFamily = (familyData) => {
          const filteredRewards = []
          if(familyData != null) { //Don't bother if there's no family data
              for(let Reward of Rewards) {
                  if(Reward.UserID == familyData.Head || family.Members.includes(Reward.UserID)) {
                      filteredRewards.push(Reward);
                  }
              }
          }
          return filteredRewards; //Should be all Rewards that have been posted by users in the family data
      }
  
    const addReward = async (Reward) => {
      try {
        const result = await API.graphql(graphqlOperation(createRewards, { input: Reward }));
        const newId = result.data.createRewards.id;
        await fetchRewards();
        return newId;
      } catch (err) {
        console.error('Error creating a Reward:', err);
        return null;
      }
    };
    const fetchRewardById = async (id) => {
      try {
        const RewardData = await API.graphql(graphqlOperation(getRewards, { id: id }));
        //console.log(RewardData);
        return RewardData.data.getRewards;
      } catch (err) {
        console.error('Error fetching Reward by ID:', err);
      }
    };
    const updateRewardById = async (id, newData) => {
      try {
        const currentRewardData = await fetchRewardById(id);
        const updatedReward = { ...currentRewardData, ...newData };
        delete updatedReward.createdAt;
        delete updatedReward.updatedAt;
        delete updatedReward.__typename;
        //console.log("Old Data", currentRewardData)
        //console.log("Updated Data", updatedReward)
        await API.graphql(graphqlOperation(updateRewards, { input: updatedReward }));
        await fetchRewards(); // Refresh the Rewards list
      } catch (err) {
        console.error('Error updating Reward:', err);
      }
    };
    const deleteRewardById = async (id) => {
      try {
        await API.graphql(graphqlOperation(deleteRewards, { input: { id } }));
        await fetchRewards(); // Refresh the Rewards list after deletion
      } catch (err) {
        console.error('Error deleting Reward:', err);
      }
    };
  
    useEffect(() => {
      fetchRewards();
    }, []);
  
    return { Rewards, getRewardsByTaskType, getRewardsByFamily, addReward, fetchRewards, updateRewardById, fetchRewardById, deleteRewardById  };
  };
  
  export default useFetchRewards;