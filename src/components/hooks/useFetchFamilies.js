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

  //Function to get a specific family from the families that have been fetched
  const getFamilyByUser = (userId) => {
    for(let family of families) {
        if(family.Head == userId || family.Members.includes(userId)) {
            return family;
        }
    }
    return null; //User specified not part of a family
  }

    const getFamilyByName = (familyName) => {
        for(let family of families) {
            if(family.FamilyName == familyName) {
                return family;
            }
        }
        return null; //Family of that name not found
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

  // Fetch families on component mount
  useEffect(() => {
    fetchFamilies();
  }, []);

  return { families, getFamilyByUser, getFamilyByName, addFamily };
};

export default useFetchFamilies;
