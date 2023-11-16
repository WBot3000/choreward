import { useState } from "react";
import Modal from "./Modal";

const choreTypes = [
    "Take Out Trash",
    "Make the Bed"
]

function FamilyFightsUploadModal({ fightId, isOpen, onClose, submissionFor, addFn }) {

    const [uploadType, setUploadType] = useState("")
    const [selectedFile, setSelectedFile] = useState("");
    const [uploadStatusMessage, setUploadStatusMessage] = useState("");

        //Used so we don't have to drill the username, redirect shouldn't ever occur, but here just in case
        const username = useLoginCheck({
            redirect: "/Login"
        });

    //Function responsible for closing the modal, also nullifies the currently selected file
    function closeModal() {
        setSelectedFile(null);
        onClose();
    }

    //Responsible for uploading the file
    //TODO: Connect to backend and provide any possible safety checks (ex. file type validation)
    function uploadFile(event) {
        event.preventDefault();
        console.log(selectedFile);
        if(!selectedFile) {
            setUploadStatusMessage("Please provide a file to upload.");
        }
        else if (!uploadType) {
            setUploadStatusMessage("Please select the type of chore you want to upload for.")
        }
        else {
            try {
                addFn({
                    ThreadTitles: uploadType + " " + submissionFor,
                    ThreadTypes: fightId,
                    UserID: username,
                    Likes: [],
                    VideoURL: "helloworld",
                    Description: "",
                    Comments: []
                })
                setUploadStatusMessage("File successfully uploaded.");
            }
            catch(e) {
                setUploadStatusMessage(e.message)
            }
        }
    }

    return <Modal title={`Upload for ${submissionFor}`} isOpen={isOpen} onClose={closeModal}>
        <div>
            <form className="flex flex-col gap-y-4">
                <div>
                    <span>
                        <label htmlFor="upload_type" className="mr-4">Chore Type</label>
                        <select name="upload_type" id="upload_type">
                            {choreTypes.map(chore => <option key={chore} value={chore} onSelect={() => {setUploadType(chore)}}>{chore}</option>)}
                        </select>
                        {/* <input type="text" name="upload_name" id="upload_name" value={uploadName}
                            onChange={e => {setUploadName(e.target.value)}}/> */}
                    </span>
                    <span>
                        <label htmlFor="upload_file" className="ml-8 mr-4">File</label>
                        <input type="file" name="upload_file" id="upload_file" accept="image/*, video/*" value={selectedFile}
                            onChange={e => {setSelectedFile(e.target.value)}}/>
                    </span>
                </div>                
                <div>
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={(e) => {uploadFile(e)}}>Post Video</button>
                    <button className='ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700' 
                        onClick={closeModal}>Don't Post</button>
                </div>
            </form>
            {uploadStatusMessage && <p>{uploadStatusMessage}</p>}
        </div>
    </Modal>
}

export default FamilyFightsUploadModal