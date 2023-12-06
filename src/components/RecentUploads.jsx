import React, { useState, useEffect } from 'react'
import VideoLink from './VideoLink'
import VideoModal from './modals/VideoModal'
import useFetchThreads from './hooks/useFetchThreads'



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



function RecentUploads() {

    const { threads, addThread,fetchThreads, updateThreadById,fetchThreadById,deleteThreadById  } = useFetchThreads();
    const [selectedVidData, setSelectedVidData] = useState(null);
    //const [thread, setThread] = useState([])

    const threadList = threads


    useEffect(() => {
        // Assuming fetchData is a function that returns a Promise
        const fetchData = async () => {
          try {
            const data = await useFetchThreads();          
            //setThread(data);
          } catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
          }
        };
        
        fetchData();
      }, []);
      
      console.log("Here", threadList)

      
    return (
    <div>
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Recent Family Uploads</h2>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {generatedVidData.map(vd => <VideoLink key={vd.id} setFn={setSelectedVidData} videoData={vd}/>)}``
        </ul>


        <VideoModal isOpen={selectedVidData != null} onClose={() => {setSelectedVidData(null)}}
            videoData={selectedVidData}/>



        {/* <ul>
                {threadList.map((item, index) => (
                <li key={index}>
                    <p>ID: {item.id}</p>
                    <p>Thread Titles: {item.ThreadTitles}</p>
                    <p>Thread Types: {item.ThreadTypes}</p>
                    <p>User ID: {item.UserID}</p>
                    <p>Link: {item.VideoURL}</p>
                    <p>Likes: {item.Likes}</p>
                    <p></p>
                </li>
                ))}
            </ul> */}


    </div>
    

    )
}

export default RecentUploads