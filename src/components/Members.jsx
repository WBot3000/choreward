import React, { useState, useEffect } from "react";
import useFetchFamilies from "./hooks/useFetchFamily";
import { getFamilies } from "../graphql/queries";

function Members() {
    const { families, fetchFamilies,fetchFamilyById } = useFetchFamilies();
    
    const [newMember, setNewMember] = useState([]);
    
    const [data, setData] = useState(null);
    const [FamilyMember, setFamilyMember] = useState("")
    const [famName, setFamName] = useState(null);

    const [inputValue, setInputValue] = useState('');

    // Function to handle input change
    const handleInputChange = (event) => {
      console.log(event.target.value)
      setInputValue(event.target.value);
    };
  
    // Function to handle submitting the value to another function
    const handleSubmit = (event) => {
      // Pass inputValue to another function here
      event.preventDefault();
      anotherFunction(inputValue);
    };
  
    // Another function that receives the value
    const anotherFunction = (value) => {
      // Do something with the value
      console.log('Received value:', value);
      let members = FamilyMember.split(',')
      members.push(value)
      console.log("sep", members)
      let commaSeparatedString = members.join(', ');
      setNewMember([...members]);
      console.log("comma",commaSeparatedString)
      setFamilyMember(commaSeparatedString)
      // You can perform any logic or actions with the received value here
    };
  



    useEffect(() => {
      // Assuming fetchData is a function that returns a Promise
      const fetchData = async () => {
        try {
          

          // Demo if fetchFamilyById not working
          const result = await families[17];
          console.log("fetchByID", result)
          setData(result);
          setFamilyMember(result.Members)
          let mem = result.Members
          let members = mem.split(',')
          setNewMember([...members]);
          setFamName(result.FamilyName)

          //uncomment when fetchFamilyById starts working
          // const result = await fetchFamilyById("0699d2a6-38cb-4955-96ee-9978dc20d195");
          // console.log("fetchByID", result.getFamilies)
          // setData(result.getFamilies);
          // setFamilyMember(result.getFamilies.Members)
          // let mem = result.getFamilies.Members
          // let members = mem.split(',')
          // setNewMember([...members]);
          // setFamName(result.getFamilies.FamilyName)
        } catch (error) {
          // Handle errors
          console.error('Error fetching data:', error);
        }
      };
      
      fetchData();
    }, []);

    // const {RewardName, RewardCost} = Rewards
    // console.log("famMembers", FamilyMember, "rewards", RewardName, RewardCost)
    // console.log("USE THIS",FamilyMember.split(','))
    

    const familyname = famName
    
    // console.log(familyname)
    // const handleAddMember = (e) => {
    //     e.preventDefault();
    //     console.log("val",e.value)
    //     if (newMember.trim() !== "") {
    //       // setFamilyMembers([...members, newMember]);
    //       setNewMember("");
    //     }
    //   };
      // console.log("members",members)

  return (
    
    <div>
      
    <h1 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white flex justify-center items-center">
        {familyname}
    </h1>
    <form class='ml-20 mr-20' onSubmit={handleSubmit}>   
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Add Members</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        </div>
        <input type="text" id="search" onChange={handleInputChange} class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Members" 
            value={inputValue} required />

        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>

    </div>
</form>
<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white flex justify-center pt-10">Family Members: </h2>
<div class="flex justify-center">

    <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
        {newMember.map((person, index) => (
          <li key={index}>
            <span className="font-semibold text-gray-900 dark:text-white">
              {person}
            </span>
          </li>
        ))}
      </ol>
</div>


    </div>
  )
}

export default Members
