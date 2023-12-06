import useLoginCheck from "./hooks/useLoginCheck";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";
import RecentUploads from "./RecentUploads";
import RewardsDisplay from "./RewardsDisplay";

// import this dependecies to use our hooks
import useFetchFamilies from "./hooks/useFetchFamily";
import { useState, useEffect } from "react";
import Members from "./Members";

import { useNavigate } from 'react-router-dom';



function MyFamily() {
  const navigate = useNavigate()
  const { statusChecked, userName } = useLoginCheck({ redirect: '/login', shouldBeLoggedOut: false });

  const { getFamilyByUser } = useFetchFamilies();
  const [familyId, setFamilyId] = useState("");

  useEffect(() => {
    if(userName) {
        const userFamily = getFamilyByUser(userName);
        if(!userFamily) {
            navigate("/NotFamily");
        }
        else {
            setFamilyId(userFamily.id);
        }
    }
  }, [userName]);


  return (statusChecked &&
    <div>
      <TopNav />
      <Members familyId={familyId}/>
      <RecentUploads familyId={familyId}/>
      <RewardsDisplay familyId={familyId}/>
      <BottomNav />
    </div>
  );

}

export default MyFamily;