import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
//import { listFamilies } from '../../graphql/queries'; // Import the query from your Amplify generated files
//import { createFamilies } from '../../graphql/mutations'; // Import the mutation from your Amplify generated files

import useFetchFamilies from './useFetchFamilies';

const useFetchUserFamily = (userId) => {
  const {allFamilies, addFamily} = useFetchFamilies();
  const [isFamilyHead, setIsFamilyHead] = useState(false);
  const [userFamilyData, setUserFamilyData] = useState(null);

  // Function to fetch families
  const getUserFamily = async () => {
    try {
        for(let family of allFamilies) {
            if(family.Head == userId) {
                setIsFamilyHead(true);
                userFamilyData(family);
            }
            else if(family.Members.includes(userId)) {
                setIsFamilyHead(false);
                userFamilyData(family);
            }
        }
    //   const familyData = await API.graphql(graphqlOperation(listFamilies));
    //   setFamilies(familyData.data.listFamilies.items);
    //   console.log(familyData)
    } catch (err) {
      console.error(`Error fetching user's family:`, err);
    }
  };

  // Fetch families on component mount
  useEffect(() => {
    getUserFamily();
  }, [allFamilies, userId]);

  return { isFamilyHead, userFamilyData };
};

export default useFetchUserFamily;
