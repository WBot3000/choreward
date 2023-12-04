import { useState } from "react";
import Modal from "./Modal";
import { Storage } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { updateThreads } from '../../graphql/mutations'; // import the mutation
import useFetchThreads from '../hooks/useFetchThreads';

function UploadModal() {

    const [uploadName, setUploadName] = useState("")
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatusMessage, setUploadStatusMessage] = useState("");
    const [ threads, addThread,fetchThreads, updateThreadById,fetchThreadById,deleteThreadById] = useFetchThreads();

    function closeModal() {
        setSelectedFile(null);
        onClose();
    }


    async function updateThreadWithVideoURL(videoUrl) {
        const threadDetails = {
            id: '1234', // replace with actual thread ID
            videoURL: videoUrl
        };
    
        try {
            await API.graphql(graphqlOperation(updateThreads, { input: threadDetails }));
            console.log('Thread updated with video URL');
        } catch (error) {
            console.error('Error updating thread:', error);
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

    async function handleVideoUpload() {
        if (!selectedFile) {
            console.error('No file selected');
            return;
        }

        const filename = `${Date.now()}-${selectedFile.name}`;

        try {
            await Storage.put(filename, selectedFile, {
                contentType: selectedFile.type
            });

            const videoUrl = await Storage.get(filename);
            updateThreadWithVideoURL(videoUrl);
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    }

    return (
        <Modal title={`Upload for ${submissionFor}`} isOpen={isOpen} onClose={closeModal}>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={handleVideoUpload}>Upload Video</button>
            {/* ... [rest of your component] */}
        </Modal>
    );
}
        {/* <div>
            <form className="flex flex-col gap-y-4">
                <div>
                    <span>
                        <label htmlFor="upload_name" className="mr-4">Upload Name</label>
                        <input type="text" name="upload_name" id="upload_name" value={uploadName}
                            onChange={e => {setUploadName(e.target.value)}}/>
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
                        onClick={closeModal}>Cancel</button>
                </div>
            </form>
            {uploadStatusMessage && <p>{uploadStatusMessage}</p>}
        </div> */}

export default UploadModal