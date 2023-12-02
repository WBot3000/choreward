import { useEffect, useState, useContext } from 'react'
import { ThreadContext } from '../contexts/ThreadContext';
import Modal from './Modal'
import VideoModal from './VideoModal'
import VideoLink from '../VideoLink';


function PortalModal({ isOpen, onClose, title, filter }) {

    const [allVideos, setAllVideos] = useState([]);
    const [selectedVidData, setSelectedVidData] = useState(null);

    const {threads, getThreadsByTaskType} = useContext(ThreadContext);

    useEffect(() => {
       const vidsInCategory = getThreadsByTaskType(filter);
       setAllVideos(vidsInCategory)
    }, [filter, threads]) //Change threads if you're looking at a new category, or new threads have been posted


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
            {allVideos?.map(vd => <VideoLink key={vd.id} setFn={setSelectedVidData} videoData={vd}/>)}
        </div>
    </Modal>

    <VideoModal isOpen={selectedVidData != null} onClose={() => {setSelectedVidData(null)}}
        videoData={selectedVidData}/>
    </>
}

export default PortalModal;