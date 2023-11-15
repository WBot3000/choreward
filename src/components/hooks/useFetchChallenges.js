import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listChanllenges } from '../../graphql/queries'; // Import the query from your Amplify generated files
import { createChanllenges } from '../../graphql/mutations'; // Import the mutation from your Amplify generated files

//AKA Family Fights, was getting concerned that all the hooks were starting to look the same though
const useFetchChallenges = () => {
  const [challenges, setChallenges] = useState([]);

  // Function to fetch challenges
  const fetchChallenges = async () => {
    try {
      const challengeData = await API.graphql(graphqlOperation(listChanllenges));
      setChallenges(challengeData.data.listChanllenges.items);
      console.log(challengeData)
    } catch (err) {
      console.error('Error fetching challenges:', err);
    }
  };

  // Function to add a new challenge
  const addChallenge = async (challenge) => {
    try {
      await API.graphql(graphqlOperation(createChanllenges, { input: challenge }));
      fetchChallenges(); // Refresh the list after adding
    } catch (err) {
      console.error('Error creating a challenge:', err);
    }
  };

  // Fetch families on component mount
  useEffect(() => {
    fetchChallenges();
  }, []);

  return { challenges, addChallenge };
};

export default useFetchChallenges;