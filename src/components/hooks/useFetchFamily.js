import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listFamilies } from '../../graphql/queries'; // Import the query from your Amplify generated files
import { createFamilies } from '../../graphql/mutations'; // Import the mutation from your Amplify generated files

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

  // Function to add a new family
  const addFamily = async (family) => {
    try {
      await API.graphql(graphqlOperation(createFamilies, { input: family }));
      fetchFamilies(); // Refresh the list after adding
    } catch (err) {
      console.error('Error creating a family:', err);
    }
  };

  // Fetch families on component mount
  useEffect(() => {
    fetchFamilies();
  }, []);

  return { families, addFamily };
};

export default useFetchFamilies;
