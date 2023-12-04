import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listComments,getComments } from '../../graphql/queries'; // Import the query
import { createComments, updateComments, deleteComments } from '../../graphql/mutations'; // Import the mutation

const useFetchComments = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const CommentData = await API.graphql(graphqlOperation(listComments));
      setComments(CommentData.data.listComments.items);
    } catch (err) {
      console.error('Error fetching Comments:', err);
    }
  };
  const addComment = async (Comment) => {
    try {
      const result = await API.graphql(graphqlOperation(createComments, { input: Comment }));
      const newId = result.data.createComments.id;
      fetchComments();
      return newId;
    } catch (err) {
      console.error('Error creating a Comment:', err);
      return null;
    }
  };
  const fetchCommentById = async (id) => {
    try {
      const CommentData = await API.graphql(graphqlOperation(getComments, { id: id }));
      return CommentData.data.getComments;
    } catch (err) {
      console.error('Error fetching Comment by ID:', err);
    }
  };
  const updateCommentsById = async (id, newData) => {
    try {
      const currentCommentData = await fetchCommentById(id);
      const updatedComment = { ...currentCommentData, ...newData };
      delete updatedComment.createdAt;
      delete updatedComment.updatedAt;
      delete updatedComment.__typename;
      await API.graphql(graphqlOperation(updateComments, { input: updatedComment }));
      fetchComments(); // Refresh the Comments list
    } catch (err) {
      console.error('Error updating Comment:', err);
    }
  };
  const deleteCommentById = async (id) => {
    try {
      await API.graphql(graphqlOperation(deleteComments, { input: { id } }));
      fetchComments(); // Refresh the Comments list after deletion
    } catch (err) {
      console.error('Error deleting Comment:', err);
    }
  };

  // listComments inside return of this function find the ID that we want
  // newData ={
  //   "id": "keep the same id",
  //   "name": "keep save name",
  //   "description": "keep save description",
  //   "CommentList": {2,3,1}

  // }
  // updateCommentsById(id, newData )
   
  useEffect(() => {
    fetchComments();
  }, []);

  return { comments, addComment, fetchComments, updateCommentsById,fetchCommentById,deleteCommentById };
};

export default useFetchComments;