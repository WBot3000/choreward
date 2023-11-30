import React, { useState } from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import useFetchFamilies from './hooks/useFetchFamily'; // Importing the fetch family hook
import { Link } from 'react-router-dom';

function NotFamily() {
    const [isCreateFormVisible, setCreateFormVisibility] = useState(false);
    const { addFamily, fetchFamilies} = useFetchFamilies();

    const toggleVisibility = () => {
        setCreateFormVisibility(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await addFamily(familyData);
          setFamilyData({
            FamilyName: "",
            Head: "",
            Members: "",
            Rewards: [{RewardName: "", RewardCost: 0 }],
            ThreadsID: "",
            OnChanllengesID: "",
            EarnedPoints: "",
          });
        } catch (error) {
          console.error("Error adding family:", error);
        }
      };
    const [familyData, setFamilyData] = useState({
      FamilyName: "",
      Head: "",
      Members: "",
      Rewards: [{RewardName: "", RewardCost: 0 }],
      ThreadsID: "",
      OnChanllengesID: "",
      EarnedPoints: "",
    });

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(familyData)
      if (name.includes("Rewards.")) {
        const field = name.split(".")[1];
        setFamilyData((prevState) => ({
          ...prevState,
          Rewards: {
            ...prevState.Rewards,
            [field]: value,
          },
        }));
      } else {
        setFamilyData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    };
   
    return (
        <>
            <TopNav/>
            <div className='mt-10'>
                <h1 className="flex justify-center items-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Not part of a <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500 ml-2 mr-2">family</mark> yet?</h1>
                <p className="flex justify-center items-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Create your own Choreward family and send invites now...</p>
                {/* <div className="flex justify-center items-center">
                    <a onClick={toggleVisibility} href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Create
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div> */}


                {/* Display the form when isCreateFormVisible is true */}
                {isCreateFormVisible && <CreateForm onSubmit={handleSubmit} />}
            </div>
    <form onSubmit={handleSubmit} class="p-10">
            <div class="mb-6" >
      <label for="family-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Your Family</label>
      <input onChange={handleChange}  name="FamilyName"
          value={familyData.FamilyName}
          type="first-name" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Awesome Fam" required/>
    </div>
    <div class="mb-6">
      <label for="family-head" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Family Head</label>
      <input onChange={handleChange} type="text"
          name="Head"
          value={familyData.Head} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
    </div>
    
    <div class="flex justify-center item-center ">
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
    
    <Link to="/MyFamily">
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
    </Link>
    </div>
    
    </form> 
            <BottomNav/>
        </>
    )
}

// const CreateForm = ({ onSubmit }) => {
//     return (
//     <div class justify-center items-center>
//     <form class="mr-20 ml-20" onSubmit={onSubmit} >
//     {/* form inputs */}
//     <div class="mb-6">
//       <label for="family-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Your Family</label>
//       <input name="FamilyName"
//           value={familyData.FamilyName}
//           type="first-name" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Awesome Fam" required/>
//     </div>
//     <div class="mb-6">
//       <label for="family-head" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Family Head</label>
//       <input type="text"
//           name="Head"
//           value={familyData.Head} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
//     </div>
//     <div class="flex items-start mb-6">
//     </div>
//     <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//   </form>
//   </div>
//     );
//   };


export default NotFamily