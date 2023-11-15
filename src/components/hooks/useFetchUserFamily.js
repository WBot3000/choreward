import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
//import { listFamilies } from '../../graphql/queries'; // Import the query from your Amplify generated files
//import { createFamilies } from '../../graphql/mutations'; // Import the mutation from your Amplify generated files

import useFetchFamilies from './useFetchFamilies';

const useFetchUserFamily = (userId) => {
  const {allFamilies} = useFetchFamilies();
  const [isFamilyHead, setIsFamilyHead] = useState(false);
  const [userFamilyData, setUserFamilyData] = useState(null);

  // Function to fetch families
  const getUserFamily = async () => {
    try {
        for(let family of allFamilies) {
            if(family.Head == userId) {
                setIsFamilyHead(true);
                setUserFamilyData(family);
            }
            else if(family.Members.includes(userId)) {
                setIsFamilyHead(false);
                setUserFamilyData(family);
            }
        }
    //   const familyData = await API.graphql(graphqlOperation(listFamilies));
    //   setFamilies(familyData.data.listFamilies.items);
    //   console.log(familyData)
    } catch (err) {
      console.error(`Error fetching user's family:`, err);
    }
  };

  //Function to add family member
  const addMember = async (memberId) => {
    //TODO
  }

  //Function to add family member
  const kickMember = async (memberId) => {
    //TODO
  }

  //Function to add family reward
  const addReward = async (rewardData) => {
    //TODO
  }

  //Function to alter family reward
  const editReward = async (rewardId, newRewardData) => {

  }

  //Function to add family reward
  const deleteReward = async (rewardId) => {
    //TODO
  }

  //Function for when a user redeems a reward
  const redeemReward = async (rewardData) => {
    //TODO
  }


  // Fetch families on component mount
  useEffect(() => {
    getUserFamily();
  }, [allFamilies, userId]);

  return { isFamilyHead, userFamilyData, addMember, kickMember };
};

export default useFetchUserFamily;
