import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listThreads,getThreads } from '../../graphql/queries'; // Import the query
import { createThreads, updateThreads, deleteThreads } from '../../graphql/mutations'; // Import the mutation

const useFetchThreads = () => {
  const [threads, setThreads] = useState([]);

  //console.log(threads);

  const fetchThreads = async () => {
    try {
      const threadData = await API.graphql(graphqlOperation(listThreads));
      setThreads(threadData.data.listThreads.items);
    } catch (err) {
      console.error('Error fetching threads:', err);
    }
  };

    //For most Portal modals
    //Function to get all the threads of a certain Task Type
    //Task Type is either a constant string (for Weekly Tasks like "Make the Bed"), or the ID of the challenge it belongs to (for Family Fights)
    const getThreadsByTaskType = (taskType) => {
        const filteredThreads = []
        if(taskType != null) { //Don't bother if there's no task type
            for(let thread of threads) {
                if(thread.ThreadTypes == taskType) {
                    filteredThreads.push(thread);
                }
            }
        }
        return filteredThreads; //Should be all threads that match the criteria
    }

    //For Recent Uploads section
    const getThreadsByFamily = (familyData) => {
        const filteredThreads = []
        if(familyData != null) { //Don't bother if there's no family data
            for(let thread of threads) {
                if(thread.UserID == familyData.Head || family.Members.includes(thread.UserID)) {
                    filteredThreads.push(thread);
                }
            }
        }
        return filteredThreads; //Should be all threads that have been posted by users in the family data
    }

  const addThread = async (thread) => {
    try {
      const result = await API.graphql(graphqlOperation(createThreads, { input: thread }));
      const newId = result.data.createThreads.id;
      await fetchThreads();
      return newId;
    } catch (err) {
      console.error('Error creating a thread:', err);
      return null;
    }
  };
  const fetchThreadById = async (id) => {
    try {
      const ThreadData = await API.graphql(graphqlOperation(getThreads, { id: id }));
      //console.log(ThreadData);
      return ThreadData.data.getThreads;
    } catch (err) {
      console.error('Error fetching Thread by ID:', err);
    }
  };
  const updateThreadById = async (id, newData) => {
    try {
      const currentThreadData = await fetchThreadById(id);
      const updatedThread = { ...currentThreadData, ...newData };
      delete updatedThread.createdAt;
      delete updatedThread.updatedAt;
      delete updatedThread.__typename;
      //console.log("Old Data", currentThreadData)
      //console.log("Updated Data", updatedThread)
      await API.graphql(graphqlOperation(updateThreads, { input: updatedThread }));
      await fetchThreads(); // Refresh the Threads list
    } catch (err) {
      console.error('Error updating Thread:', err);
    }
  };
  const deleteThreadById = async (id) => {
    try {
      await API.graphql(graphqlOperation(deleteThreads, { input: { id } }));
      await fetchThreads(); // Refresh the Threads list after deletion
    } catch (err) {
      console.error('Error deleting Thread:', err);
    }
  };


  useEffect(() => {
    fetchThreads();
  }, []);

  return { threads, getThreadsByTaskType, getThreadsByFamily, addThread, fetchThreads, updateThreadById, fetchThreadById, deleteThreadById  };
};

export default useFetchThreads;