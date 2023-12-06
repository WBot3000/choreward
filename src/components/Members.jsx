import { useState, useEffect } from "react";
import useFetchFamilies from "./hooks/useFetchFamily";
import { getFamilies } from "../graphql/queries";

function Members() {
    const { families, fetchFamilies,fetchFamilyById } = useFetchFamilies();
    
    const [newMember, setNewMember] = useState("");
    // const [familyMembers, setFamilyMembers] = useState();
    
    const [data, setData] = useState(null);
    const [FamilyMember, setFamilyMember] = useState("")
    const [famName, setFamName] = useState(null);

    useEffect(() => {
      // Assuming fetchData is a function that returns a Promise
      const fetchData = async () => {
        try {
          const result = await fetchFamilyById("0699d2a6-38cb-4955-96ee-9978dc20d195");
          console.log("fetchByID", result)
          setData(result.getFamilies);
          setFamilyMember(result.Members)
          setFamName(result.FamilyName)
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
    const members = FamilyMember.split(',')
    const familyname = famName
    console.log(familyname)
    const handleAddMember = (e) => {
        e.preventDefault();
        console.log("val",e)
        if (newMember.trim() !== "") {
          setFamilyMembers([...members, newMember]);
          setNewMember("");
        }
      };
      console.log("members",members)

      const handleSubmit = () => {
        console.log(FamilyMember)
      }
      console.log("45",FamilyMember)
  return (
    
    <div>
      
    <h1 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white flex justify-center items-center">
        {familyname}
    </h1>

    <form class='ml-20 mr-20' onSubmit={handleAddMember}>   
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Add Members</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        </div>
        <input type="text" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Members" value={newMember}
            onChange={(e) => setNewMember(e.target.value)} required />
        <button onClick={handleSubmit} type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
    </div>
</form>
<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white flex justify-center pt-10">Family Members: </h2>
<div class="flex justify-center">

    <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
        {members.map((person, index) => (
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