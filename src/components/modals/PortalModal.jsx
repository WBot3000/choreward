/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Modal from "./Modal";
import VideoModal from "./VideoModal";
import VideoLink from "../VideoLink";
import useFetchThreads from "../hooks/useFetchThreads";

function PortalModal({ isOpen, onClose, title, filter }) {
  const [allVideos, setAllVideos] = useState([]);
  const [selectedVidData, setSelectedVidData] = useState(null);

  const { threads, fetchThreads, getThreadsByTaskType } = useFetchThreads();

  useEffect(() => {
    const vidsInCategory = getThreadsByTaskType(filter);
    setAllVideos(vidsInCategory);
  }, [filter, threads]); //Change threads if you're looking at a new category, or new threads have been posted

  useEffect(() => {
    async function updateThreadPool() {
      if (isOpen) {
        await fetchThreads();
      }
    }
    updateThreadPool();
  }, [isOpen]); //Makes it so that the user gets all the most recent threads when they open up the modal

  //Responsible for closing the modal.
  //Makes sure that if the selected video data ISN'T null, you just close the video modal
  function closeModal() {
    if (selectedVidData == null) {
      onClose();
    }
  }
  return (
    <>
      <Modal title={title} isOpen={isOpen} onClose={closeModal}>
        <div className="m-4 flex flex-wrap justify-center overflow-y-scroll border-b-2 border-slate-400">
          {allVideos?.map((vd) => (
            <VideoLink key={vd.id} setFn={setSelectedVidData} videoData={vd} />
          ))}
        </div>
      </Modal>

      <VideoModal
        isOpen={selectedVidData != null}
        onClose={() => {
          setSelectedVidData(null);
        }}
        videoId={selectedVidData?.id}
      />
    </>
  );
}

export default PortalModal;
