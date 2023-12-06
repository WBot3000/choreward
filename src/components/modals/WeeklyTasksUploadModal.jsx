import { useState, useEffect } from "react";
import Modal from "./Modal";
import { Storage } from "aws-amplify";
import useFetchThreads from "../hooks/useFetchThreads";
import useFetchFamilies from "../hooks/useFetchFamily";

import useLoginCheck from "../hooks/useLoginCheck";

function WeeklyTasksUploadModal({ isOpen, onClose, submissionFor }) {
  
  const [uploadName, setUploadName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatusMessage, setUploadStatusMessage] = useState("");
  const {
    addThread,
  } = useFetchThreads();
  const {
    families,
    getFamilyByUser,
    fetchFamilyById, 
    updateFamilyById,
  } = useFetchFamilies();
  const [userFamily, setUserFamily] = useState(null);

  //Used so we don't have to drill the username, redirect shouldn't ever occur, but here just in case
  const {userName} = useLoginCheck({
    redirect: "/Login",
  });

  useEffect(() => {
    async function getFamily() {
        if(userName && families !== null) {
            const family = getFamilyByUser(userName);
            if(family) {
                setUserFamily(family);
            }
        }
    }

    getFamily();
  }, [families, userName]);

  //Function responsible for closing the modal, also nullifies the currently selected file
  function closeModal() {
    setSelectedFile("");
    onClose();
  }

  //Responsible for uploading the file
  //TODO: Connect to backend and provide any possible safety checks (ex. file type validation)
  async function uploadFile(event) {
    event.preventDefault();
    if (!selectedFile) {
      setUploadStatusMessage("Please provide a file to upload.");
    } else {
      const filename = `${Date.now()}-${selectedFile.name}`;

      try {
        await Storage.put(filename, selectedFile, {
          contentType: selectedFile.type,
        });

        try {
          //TODO: We're going to need to store the file using S3 Buckets
          const uploadID = await addThread({
            ThreadTitles: uploadName.trim(),
            ThreadTypes: submissionFor,
            UserID: userName,
            Likes: 0,
            LikedUsers: "",
            VideoURL: filename, //TODO: Update this with actual video data
            Description: "",
            Comments: "",
          });

          if(!uploadID) {
            throw new Error("Upload metadata could not be created");
          }

          const upToDateFamilyData = await fetchFamilyById(userFamily.id);
          let newThreadsID = upToDateFamilyData.ThreadsID;
          if(!newThreadsID) {
            newThreadsID = uploadID;
          }
          else {
            newThreadsID += `,${uploadID}`;
          }
          console.log(upToDateFamilyData);
          console.log(newThreadsID);
          await updateFamilyById(upToDateFamilyData.id, {ThreadsID: newThreadsID});

          setUploadStatusMessage("File sent to upload.");
        } catch (e) {
          setUploadStatusMessage(e.message);
        }
      } catch (error) {
        console.error("Error uploading video:", error);
        setUploadStatusMessage("Error uploading video: " + error.message)
      }
    }
  }

  //Responsible for uploading the file
  //TODO: Connect to backend and provide any possible safety checks (ex. file type validation)
  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  }

  return (
    <Modal
      title={`Upload for ${submissionFor}`}
      isOpen={isOpen}
      onClose={closeModal}
    >
      {/* <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={uploadFile}>Upload Video</button> */}
      <div>
        <form className="flex flex-col gap-y-4">
          <div>
            <span>
              <label htmlFor="upload_name" className="mr-4">
                Upload Name
              </label>
              <input
                type="text"
                name="upload_name"
                id="upload_name"
                value={uploadName}
                onChange={(e) => {
                  setUploadName(e.target.value);
                }}
              />
            </span>
            <span>
              <label htmlFor="upload_file" className="ml-8 mr-4">
                File
              </label>
              <input
                type="file"
                name="upload_file"
                id="upload_file"
                accept="video/*"
                onChange={handleFileChange}
              />
            </span>
          </div>
          <div>
            <button
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => {
                uploadFile(e);
              }}
              disabled={!userFamily}
            >
              Upload Video
            </button>
            <button
              className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
        {uploadStatusMessage && <p>{uploadStatusMessage}</p>}
      </div>
    </Modal>
  );
}

export default WeeklyTasksUploadModal;
