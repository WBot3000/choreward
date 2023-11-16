import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listChallenges } from '../../graphql/queries'; // Import the query
import { createChallenge } from '../../graphql/mutations'; // Import the mutation

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

  useEffect(() => {
    fetchChallenges();
  }, []);

  return { challenges, addChallenge };
};

export default useFetchChallenges;