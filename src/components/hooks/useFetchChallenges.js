import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listChallenges,getChallenges } from '../../graphql/queries'; // Import the query
import { createChallenges, updateChallenges, deleteChallenges } from '../../graphql/mutations'; // Import the mutation

const useFetchChallenges = () => {
  const [challenges, setChallenges] = useState([]);

  const fetchChallenges = async () => {
    try {
      const challengeData = await API.graphql(graphqlOperation(listChallenges));
      setChallenges(challengeData.data.listChallenges.items);
    } catch (err) {
      console.error('Error fetching challenges:', err);
    }
  };

  //Split challenges up into those the family is participating in, and those that they aren't
  const splitChallenges = (familyName) => {
    if(!familyName) {
        return [[], challenges];
    }
    const myChallenges = []
    const otherChallenges = []
        for(let challenge of challenges) {
            if(challenge.Family1 == familyName || challenge.Family2 == familyName) {
                myChallenges.push(challenge);
            }
            else {
                otherChallenges.push(challenge);
            }
        }
    return [myChallenges, otherChallenges]; //Returns sorted challenges
  }

  const addChallenge = async (challenge) => {
    try {
      const result = await API.graphql(graphqlOperation(createChallenges, { input: challenge }));
      const newId = result.data.createChallenges.id;
      fetchChallenges();
      return newId;
    } catch (err) {
      console.error('Error creating a challenge:', err);
      return null;
    }
  };
  const fetchChallengeById = async (id) => {
    try {
      const challengeData = await API.graphql(graphqlOperation(getChallenges, { id: id }));
      return challengeData.data.getChallenges;
    } catch (err) {
      console.error('Error fetching challenge by ID:', err);
    }
  };
  const updateChallengeById = async (id, newData) => {
    try {
      const currentChallengeData = await fetchChallengeById(id);
      const updatedChallenge = { ...currentChallengeData, ...newData };
      delete updatedChallenge.createdAt;
      delete updatedChallenge.updatedAt;
      delete updatedChallenge.__typename;
      await API.graphql(graphqlOperation(updateChallenges, { input: updatedChallenge }));
      fetchChallenges(); // Refresh the challenges list
    } catch (err) {
      console.error('Error updating challenge:', err);
    }
  };
  const deleteChallengeById = async (id) => {
    try {
      await API.graphql(graphqlOperation(deleteChallenges, { input: { id } }));
      fetchChallenges(); // Refresh the challenges list after deletion
    } catch (err) {
      console.error('Error deleting challenge:', err);
    }
  };

  // listChallenges inside return of this function find the ID that we want
  // newData ={
  //   "id": "keep the same id",
  //   "name": "keep save name",
  //   "description": "keep save description",
  //   "ChallengeList": {2,3,1}

  // }
  // updateChallengeById(id, newData )
   
  useEffect(() => {
    fetchChallenges();
  }, []);

  return { challenges, splitChallenges, addChallenge, fetchChallenges, updateChallengeById,fetchChallengeById,deleteChallengeById };
};

export default useFetchChallenges;