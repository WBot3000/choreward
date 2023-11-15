import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listThreads } from '../../graphql/queries'; // Import the query
import { createThread } from '../../graphql/mutations'; // Import the mutation

const useFetchThreads = () => {
  const [threads, setThreads] = useState([]);

  const fetchThreads = async () => {
    try {
      const threadData = await API.graphql(graphqlOperation(listThreads));
      setThreads(threadData.data.listThreads.items);
    } catch (err) {
      console.error('Error fetching threads:', err);
    }
  };

  const addThread = async (thread) => {
    try {
      await API.graphql(graphqlOperation(createThread, { input: thread }));
      fetchThreads();
    } catch (err) {
      console.error('Error creating a thread:', err);
    }
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return { threads, addThread };
};

export default useFetchThreads;