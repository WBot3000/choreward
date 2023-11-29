import { useEffect, useState } from 'react'
import Modal from './Modal'
import VideoModal from './VideoModal'
import VideoLink from '../VideoLink';
import useFetchThreads from '../hooks/useFetchThreads';

// const placeholderComments = [
//     {
//         id: "1",
//         poster: "WBot3000",
//         comment: "This is awesome!"
//     },
//     {
//         id: "2",
//         poster: "MamaCat",
//         comment: "Give me food!"
//     }
// ]

// const videoNames = ["Name 1", "Name 2", "Hello World", "Super Duper Ultra Masterfully Long Name Lol!", "Name 5", "Name 6", "Help Me!" , "I love cats", "Name 9", "Name 10", "Name 11", "Ultimate Video Fan", "Wahoo", "Name Last"]

// const generatedVidData = [];
// for(let i = 0; i < videoNames.length; i++) {
//     generatedVidData.push({
//         id: `${i}`,
//         title: videoNames[i],
//         poster: "JohnDoe",
//         comments: placeholderComments
//     })
// }

//This'll probably become the basis for the Portal Modal
function PortalModal({ isOpen, onClose, title="Portal" }) {

    const { getThreadsByTaskType } = useFetchThreads();
    const [allVideos, setAllVideos] = useState([])
    const [selectedVidData, setSelectedVidData] = useState(null);

    useEffect(() => {
        const vidsInCategory = getThreadsByTaskType(title);
        setAllVideos(vidsInCategory)
    }, [title])

    // console.log(selectedVidData)

    // function VideoLink({ videoData }) {
    //     return <div className="w-64 h-36 mx-8 my-4" onClick={() => {setSelectedVidData(videoData)}}>
    //         <div className="w-64 h-36 bg-blue-200"/>
    //         <p className="inline-block max-w-xs font-bold whitespace-nowrap overflow-hidden text-ellipsis">{videoData.title}</p>
    //     </div>
    // }

    //Responsible for closing the modal. 
    //Makes sure that if the selected video data ISN'T null, you just close the video modal
    function closeModal() {
        if(selectedVidData == null) {
            onClose();   
        }
    }

    return <>
    <Modal title={title} isOpen={isOpen} onClose={closeModal}>
        <div className="m-4 flex flex-wrap justify-center overflow-y-scroll border-b-2 border-slate-400">
            {allVideos.map(vd => <VideoLink key={vd.id} setFn={setSelectedVidData} videoData={vd}/>)}
        </div>
    </Modal>

    <VideoModal isOpen={selectedVidData != null} onClose={() => {setSelectedVidData(null)}}
        videoData={selectedVidData}/>
    </>
}

export default PortalModal;