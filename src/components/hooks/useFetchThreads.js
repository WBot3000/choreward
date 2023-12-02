import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listThreads,getThreads } from '../../graphql/queries'; // Import the query
import { updateThreads,deleteThreads } from '../../graphql/mutations'; // Import the mutation

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
  const fetchThreadById = async (id) => {
    try {
      const ThreadData = await API.graphql(graphqlOperation(getThreads, { id: id }));
      return ThreadData.data.getThread;
    } catch (err) {
      console.error('Error fetching Thread by ID:', err);
    }
  };
  const updateThreadById = async (id, newData) => {
    try {
      const currentThreadData = await fetchThreadById(id);
      const updatedThread = { ...currentThreadData, ...newData };
      await API.graphql(graphqlOperation(updateThreads, { input: updatedThread }));
      fetchThreads(); // Refresh the Threads list
    } catch (err) {
      console.error('Error updating Thread:', err);
    }
  };
  const deleteThreadById = async (id) => {
    try {
      await API.graphql(graphqlOperation(deleteThreads, { input: { id } }));
      fetchThreads(); // Refresh the Threads list after deletion
    } catch (err) {
      console.error('Error deleting Thread:', err);
    }
  };


  useEffect(() => {
    fetchThreads();
  }, []);

  return { threads, addThread,fetchThreads, updateThreadById,fetchThreadById,deleteThreadById  };
};

export default useFetchThreads;