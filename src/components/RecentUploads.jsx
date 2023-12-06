import React, { useState, useEffect } from 'react'
import VideoLink from './VideoLink'
import VideoModal from './modals/VideoModal'
import useFetchThreads from './hooks/useFetchThreads'
import useFetchFamilies from './hooks/useFetchFamily'



const placeholderComments = [
    {
        id: "1",
        poster: "WBot3000",
        comment: "This is awesome!"
    },
    {
        id: "2",
        poster: "MamaCat",
        comment: "Give me food!"
    }
]

const videoNames = ["Upload 1", "Upload 2", "Upload 3"]

const generatedVidData = [];
for(let i = 0; i < videoNames.length; i++) {
    generatedVidData.push({
        id: `${i}`,
        ThreadTitles: videoNames[i],
        poster: "JohnDoe",
        comments: placeholderComments
    })
}



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
            const allVideoData = [];
            for(let tID in (result?.ThreadsID ?? [])) {
                const vidData = await fetchThreadById(tID);
                if(vidData) {
                    allVideoData.push(vidData);
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
    <div className="flex ml-10 mt-10  justify-left">
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Recent Family Uploads</h2>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {familyVidData.map(vd => <VideoLink key={vd.id} setFn={setSelectedVidData} videoData={vd}/>)}``
        </ul>

        <VideoModal isOpen={selectedVidData != null} onClose={() => {setSelectedVidData(null)}}
            videoId={selectedVidData?.id}/>
    </div>
    

    )
}

export default RecentUploads