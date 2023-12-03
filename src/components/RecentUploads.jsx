import React, { useState } from 'react'
import VideoLink from './VideoLink'
import VideoModal from './modals/VideoModal'

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

const videoNames = ["Upload 1", "Upload 2", "Upload 3", "Upload 4", "Upload 5"]

const generatedVidData = [];
for(let i = 0; i < videoNames.length; i++) {
    generatedVidData.push({
        id: `${i}`,
        title: videoNames[i],
        poster: "JohnDoe",
        comments: placeholderComments
    })
}

function RecentUploads() {

    const [selectedVidData, setSelectedVidData] = useState(null);

    return (
    <div>
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Recent Family Uploads</h2>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {generatedVidData.map(vd => <VideoLink key={vd.id} setFn={setSelectedVidData} videoData={vd}/>)}
        </ul>
        <VideoModal isOpen={selectedVidData != null} onClose={() => {setSelectedVidData(null)}}
            videoData={selectedVidData}/>
    </div>
    )
}

export default RecentUploads