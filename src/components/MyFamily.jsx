import useLoginCheck from "./hooks/useLoginCheck";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";
import RecentUploads from "./RecentUploads";
import RewardsDisplay from "./RewardsDisplay";

// import this dependecies to use our hooks
import useFetchFamilies from "./hooks/useFetchFamily";
import { useState } from "react";
import Members from "./Members";



function MyFamily() {
    //TODO:
  const { statusChecked, userName, FamilyName, Head } = useLoginCheck({ redirect: '/login', shouldBeLoggedOut: false });

  const { addFamily, fetchFamilies} = useFetchFamilies();

  
  const [familyData, setFamilyData] = useState({
    FamilyName: "",
    Head: "",
    Members: "",
    Rewards: { RewardName: "", RewardCost: "" },
    ThreadsID: "",
    OnChanllengesID: "",
    EarnedPoints: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addFamily(familyData);
      setFamilyData({
        FamilyName: "",
        Head: "",
        Members: "",
        Rewards: { RewardName: "", RewardCost: "" },
        ThreadsID: "",
        OnChanllengesID: "",
        EarnedPoints: "",
      });
    } catch (error) {
      console.error("Error adding family:", error);
    }
  };

  return (statusChecked &&
    <div>
      <TopNav />
{/*       
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="FamilyName"
          value={familyData.FamilyName}
          onChange={handleChange}
          placeholder="Family Name"
        />
        <input
          type="text"
          name="Head"
          value={familyData.Head}
          onChange={handleChange}
          placeholder="Head of Family"
        />
        <input
          type="text"
          name="Members"
          value={familyData.Members}
          onChange={handleChange}
          placeholder="Members"
        />
        <input
          type="text"
          name="Rewards.RewardName"
          value={familyData.Rewards.RewardName}
          onChange={handleChange}
          placeholder="Reward Name"
        />
        <input
          type="text"
          name="Rewards.RewardCost"
          value={familyData.Rewards.RewardCost}
          onChange={handleChange}
          placeholder="Reward Cost"
        />

        <input
          type="text"
          name="ThreadsID"
          value={familyData.ThreadsID}
          onChange={handleChange}
          placeholder="Threads ID"
        />
        <input
          type="text"
          name="OnChanllengesID"
          value={familyData.OnChanllengesID}
          onChange={handleChange}
          placeholder="On Challenges ID"
        />
        <input
          type="text"
          name="EarnedPoints"
          value={familyData.EarnedPoints}
          onChange={handleChange}
          placeholder="Earned Points"
        />

        <button className="bg-black text-gray-200" type="submit">
          Add Family
        </button>

        
      </form> */}
      <Members/>
      <div className="flex ml-10 mt-10  justify-left">
        <RecentUploads />
      </div>

      <RewardsDisplay />
      <BottomNav />
    </div>
  );

}

export default MyFamily;
