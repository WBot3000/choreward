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

    //For most Portal modals
    //Function to get all the threads of a certain Task Type
    //Task Type is either a constant string (for Weekly Tasks like "Make the Bed"), or the ID of the challenge it belongs to (for Family Fights)
    const getThreadsByTaskType = (taskType) => {
        const filteredThreads = []
        if(taskType != null) { //Don't bother if there's no task type
            for(let thread of threads) {
                if(thread.TaskType == taskType) {
                    filteredThreads.push(thread);
                }
            }
        }
        return filteredThreads; //Should be all threads that match the criteria
    }

    //For Recent Uploads section
    const getThreadsByFamily = (familyData) => {
        const filteredThreads = []
        if(familyData != null) { //Don't bother if there's no data
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
      await API.graphql(graphqlOperation(createThread, { input: thread }));
      fetchThreads();
    } catch (err) {
      console.error('Error creating a thread:', err);
    }
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return { threads, getThreadsByTaskType, getThreadsByFamily, addThread };
};

export default useFetchThreads;