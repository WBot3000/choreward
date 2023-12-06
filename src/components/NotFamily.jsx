import React, { useState, useEffect } from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import useFetchFamilies from './hooks/useFetchFamily';
import useLoginCheck from './hooks/useLoginCheck';
import { Link, useNavigate } from 'react-router-dom';

function NotFamily() {
    const navigate = useNavigate();
    const { statusChecked, userName } = useLoginCheck({ redirect: '/login', shouldBeLoggedOut: false });
    const { addFamily, getFamilyByUser } = useFetchFamilies();

    const [familyNameField, setFamilyNameField] = useState("");

    useEffect(() => {
        if(userName) {
            const userFamily = getFamilyByUser(userName);
            if(userFamily) {
                navigate("/MyFamily");
            }
        }
      }, [userName]);

    
    // const toggleVisibility = () => {
    //     setCreateFormVisibility(true);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const newFamId = await addFamily({
            FamilyName: familyNameField.trim(),
            Head: userName,
            Members: "",
            Rewards: [""],
            ThreadsID: "",
            OnChanllengesID: "",
            EarnedPoints: ""
          });
          if(!newFamId) {
            throw new Error("New family couldn't be created");
          }
          else {
            navigate("/MyFamily");
          }
        } catch (error) {
          console.error("Error adding family:", error);
        }
      };

   
    return (statusChecked &&
        <>
            <TopNav/>
            <div className='mt-10'>
                <h1 className="flex justify-center items-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Not part of a <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500 ml-2 mr-2">family</mark> yet?</h1>
                <p className="flex justify-center items-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Create your own Choreward family and send invites now...</p>
            </div>
    <form onSubmit={(e) => {handleSubmit(e)}} className="p-10">
        <div className="mb-6">
            <label htmlFor="family-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Your Family</label>
            <input onChange={(e) => {setFamilyNameField(e.target.value)}}  name="FamilyName"
                value={familyNameField}
                type="first-name" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Awesome Fam" required/>
        </div>
        <div className="flex justify-center item-center ">
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
        </div>
    </form> 
            <BottomNav/>
        </>
    )
}


export default NotFamily