import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listFamilies, getFamilies } from '../../graphql/queries'; // Import the query from your Amplify generated files
import { createFamilies, updateFamilies, deleteFamilies } from '../../graphql/mutations'; // Import the mutation from your Amplify generated files

const useFetchFamilies = () => {
  const [families, setFamilies] = useState([]);

  // Function to fetch families
  const fetchFamilies = async () => {
    try {
      const familyData = await API.graphql(graphqlOperation(listFamilies));
      setFamilies(familyData.data.listFamilies.items);
      console.log(familyData)
    } catch (err) {
      console.error('Error fetching families:', err);
    }
  };

  //Function to get a specific family from the families that have been fetched
  const getFamilyByUser = (userId) => {
    for(let family of families) {
        if(family.Head == userId || family.Members.includes(userId)) {
            return family;
        }
    }
    return null; //User specified not part of a family
  }

  // Function to add a new family
  const addFamily = async (family) => {
    try {
      await API.graphql(graphqlOperation(createFamilies, { input: family }));
      fetchFamilies(); // Refresh the list after adding
    } catch (err) {
      console.error('Error creating a family:', err);
    }
  };
  const fetchFamilyById = async (id) => {
    try {
      const FamilyData = await API.graphql(graphqlOperation(getFamilies, { id: id }));
      return FamilyData.data.getFamily;
    } catch (err) {
      console.error('Error fetching Family by ID:', err);
    }
  };
  const updateFamilyById = async (id, newData) => {
    try {
      const currentFamilyData = await fetchFamilyById(id);
      const updatedFamily = { ...currentFamilyData, ...newData };
      await API.graphql(graphqlOperation(updateFamilies, { input: updatedFamily }));
      fetchFamilies(); // Refresh the Familys list
    } catch (err) {
      console.error('Error updating Family:', err);
    }
  };
  const deleteFamilyById = async (id) => {
    try {
      await API.graphql(graphqlOperation(deleteFamilies, { input: { id } }));
      fetchFamilies(); // Refresh the Familys list after deletion
    } catch (err) {
      console.error('Error deleting Family:', err);
    }
  };

  // Fetch families on component mount
  useEffect(() => {
    fetchFamilies();
  }, []);

  return { families, getFamilyByUser, addFamily, fetchFamilies, updateFamilyById, fetchFamilyById, deleteFamilyById };
};

export default useFetchFamilies;
