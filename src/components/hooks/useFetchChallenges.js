import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listChallenges,getChallenges } from '../../graphql/queries'; // Import the query
import { createChallenge,updateChallenges,deleteChallenges } from '../../graphql/mutations'; // Import the mutation

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

  const addChallenge = async (challenge) => {
    try {
      await API.graphql(graphqlOperation(createChallenge, { input: challenge }));
      fetchChallenges();
    } catch (err) {
      console.error('Error creating a challenge:', err);
    }
  };
  const fetchChallengeById = async (id) => {
    try {
      const challengeData = await API.graphql(graphqlOperation(getChallenges, { id: id }));
      return challengeData.data.getChallenge;
    } catch (err) {
      console.error('Error fetching challenge by ID:', err);
    }
  };
  const updateChallengeById = async (id, newData) => {
    try {
      const currentChallengeData = await fetchChallengeById(id);
      const updatedChallenge = { ...currentChallengeData, ...newData };
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

  // ... (rest o

  useEffect(() => {
    fetchChallenges();
  }, []);

  return { challenges, addChallenge,updateChallengeById,fetchChallengeById,deleteChallengeById };
};

export default useFetchChallenges;