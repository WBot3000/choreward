import { useState, useEffect } from "react";
import useFetchFamilies from "./hooks/useFetchFamily";
import { getFamilies } from "../graphql/queries";

function Members({ familyId, isHead }) {
  const { fetchFamilyById } = useFetchFamilies();

  const [newMember, setNewMember] = useState("");
  // const [familyMembers, setFamilyMembers] = useState();

  //const [data, setData] = useState(null);
  const [FamilyMember, setFamilyMember] = useState("");
  const [famName, setFamName] = useState(null);

  useEffect(() => {
    // Assuming fetchData is a function that returns a Promise
    const fetchData = async () => {
      try {
        const result = await fetchFamilyById(familyId);
        console.log("fetchByID", result);
        //setData(result.getFamilies);
        setFamilyMember(result.Members);
        setFamName(result.FamilyName);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };

    if (familyId) {
      fetchData();
    }
  }, [familyId]);

  // const {RewardName, RewardCost} = Rewards
  // console.log("famMembers", FamilyMember, "rewards", RewardName, RewardCost)
  // console.log("USE THIS",FamilyMember.split(','))
  const members = FamilyMember.split(",");
  const familyname = famName;
  console.log(familyname);
  const handleAddMember = (e) => {
    e.preventDefault();
    console.log("val", e);
    if (newMember.trim() !== "") {
      setFamilyMember([...members, newMember]);
      setNewMember("");
    }
  };
  console.log("members", members);

  const handleSubmit = () => {
    console.log(FamilyMember);
  };
  console.log("45", FamilyMember);

  function Card({ person }) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
        <div className="font-bold text-xl mb-2">{person}</div>
        {/* Add more content here if needed, like an image or additional info */}
      </div>
    );
  }
  return (
    <div>
      <h1 className=" mt-10 mb-10 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white flex justify-center items-center">
        {familyname}
      </h1>

      <div className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-2xl px-4 py-10 lg:max-w-7xl lg:px-8">
          <h2 className="mb-10 justify-center items-center text-2xl font-bold tracking-tight text-gray-900">
            Family Members
          </h2>

          <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative p-4 border border-gray-200 rounded-lg shadow-sm"
              >
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {member}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          {isHead && (
            <form className="mt-10 ml-20 mr-20" onSubmit={handleAddMember}>
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Add Members
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add Members"
                  value={newMember}
                  onChange={(e) => setNewMember(e.target.value)}
                  required
                />
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Members;
