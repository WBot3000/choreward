import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getThreads } from '../../graphql/queries'; // Import the query from your Amplify generated files
import { createThreads } from '../../graphql/mutations'; // Import the mutation from your Amplify generated files

//Videos = Threads
const useFetchVideos = (queryVariables) => {
  const [videos, setVideos] = useState([]);

  // Function to fetch videos
  const fetchVideos = async () => {
    try {
      const videoData = await API.graphql(graphqlOperation(getThreads, queryVariables));
      setFamilies(videoData.data.getThreads.items);
      console.log(videoData)
    } catch (err) {
      console.error('Error fetching videos:', err);
    }
  };

  // Function to add a new family
  // NOTE: Should come with a TaskType that's either a string or a FamilyFights ID
  const addVideo = async (video) => {
    try {
      await API.graphql(graphqlOperation(createThreads, { input: video }));
      fetchVideos(); // Refresh the list after adding
    } catch (err) {
      console.error('Error creating a video:', err);
    }
  };

  const likeVideo = async (videoId) => {
    //TODO
  }

  const unlikeVideo = async (videoId) => {
    //TODO
  }

  const postCommentToVideo = async (videoId, commentData) => {

  }

  // Fetch videos on component mount
  useEffect(() => {
    fetchVideos();
  }, []);

  return { videos, addVideo, likeVideo, unlikeVideo, postCommentToVideo };
};

export default useFetchVideos;