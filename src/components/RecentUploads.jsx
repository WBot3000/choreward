import React, { useState, useEffect } from 'react'
import VideoLink from './VideoLink'
import VideoModal from './modals/VideoModal'
import useFetchThreads from './hooks/useFetchThreads'
import useFetchFamilies from './hooks/useFetchFamily'


function RecentUploads({familyId}) {

    const {fetchFamilyById} = useFetchFamilies();
    const { fetchThreadById } = useFetchThreads();
    const [familyVidData, setFamilyVidData] = useState([])
    const [selectedVidData, setSelectedVidData] = useState(null);

    useEffect(() => {
        // Assuming fetchData is a function that returns a Promise
        const fetchData = async () => {
          try {
            const result = await fetchFamilyById(familyId);
            const allVideoData = result?.ThreadsID.split(",");
            for(let tID of (allVideoData ?? [])) {
                if(tID != null && tID != "") {
                    //console.log(tID)
                    const vidData = await fetchThreadById(tID);
                    //console.log("VIDEO DATA", vidData)
                    if(vidData) {
                        allVideoData.push(vidData);
                    }
                }
            }
            setFamilyVidData(allVideoData);
          } catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
          }
        };
        
        if(familyId) {
            fetchData();
        }
      }, [familyId]);


      
    return (
      <div className="border-b border-t border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-10 mt-4">
          <h2 className="text-2xl font-bold leading-6 text-gray-900">Recent Family Uploads</h2>
          <p className="mt-1 text-mid text-gray-500">
            Recent shared video by your Family is here
          </p>
        </div>
        <div >
        <ul className="flex flex-wrap text-sm fon t-medium text-center text-gray-500 dark:text-gray-400">
            {familyVidData?.map(vd => <VideoLink key={vd.id} setFn={setSelectedVidData} videoData={vd}/>)}
        </ul>
        {familyVidData.length == 0 && <p className='font-bold mx-4 my-auto'>No videos posted yet!</p>}

        <VideoModal isOpen={selectedVidData != null} onClose={() => {setSelectedVidData(null)}}
            videoId={selectedVidData?.id}/>
    </div>
      </div>
    </div>
      
    
    

    )
}

export default RecentUploads