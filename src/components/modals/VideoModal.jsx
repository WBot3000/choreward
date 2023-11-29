import { useState, useEffect } from "react";
import Modal from "./Modal"
import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid"
import useFetchThreads from "../hooks/useFetchThreads";
import useLoginCheck from "../hooks/useLoginCheck";


//TODO: Need to have thread editing support from hook in order to have proper likeFn and commentFn
function VideoModal({ isOpen, onClose, videoData }) {

    const userId = useLoginCheck();
    const { updateThreadById } = useFetchThreads();

    //Used to resize the video based on the window size
    const [vidWidth, setVidWidth] = useState(window.innerWidth > 600 ? 550 : window.innerWidth - 25);
    const [isLiked, setIsLiked] = useState(false);
    const [isLeavingComment, setIsLeavingComment] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [commentError, setCommentError] = useState("");
    const [comments, setComments] = useState([]);

    //Comments that are intiially displayed should be from the passed video data. However, if the user adds their own comment, this should be added to the display
    useEffect(() => {
        setComments(videoData?.comments ?? []);
    }, []);

    //TODO: Set isLiked to a value based on whether or not the user has actually liked the video
    useEffect(() => {
        const likesOnVideo = selectedVidData?.Likes?.split(",");
        if(!likesOnVideo || !likesOnVideo.includes(userId)) {
            setIsLiked(false);
        }
        else {
            setIsLiked(true);
        }
    }, [selectedVidData]);

    //Changes video size when the window is resized
    useEffect(() => {
        let resizeFunction = () => {
            setVidWidth(window.innerWidth > 600 ? 550 : window.innerWidth - 25);
        }
        window.addEventListener("resize", resizeFunction);

        return () => window.removeEventListener("resize", resizeFunction);
    });

    async function setLikedStatus() {
        try {
            const newVidData = {...selectedVidData};
            let newLikedList = selectedVidData?.Likes?.split(",");
            if(isLiked) { //Unlike the video by removing the user's name from the list
                const idxOfUser = newLikedList.indexOf(userId);
                newLikedList.splice(idxOfUser, 1);
            }
            else {
                newLikedList.push(userId);
            }
            newVidData.Likes = newLikedList.join(",");

            await updateThreadById(selectedVidData.id, newVidData);
            setIsLiked(!isLiked);
        }
        catch(e) {
            console.log("Error switching liked status on video:", e);
        }
    }

    //Used when you don't actually want to leave a comment
    function closeCommentView(event) {
        event?.preventDefault();
        setIsLeavingComment(false);
        setCommentText("");
        setCommentError("");
    }

    //Used to post comments to videos
    async function postComment(event) {
        event.preventDefault();
        //Add the poster's new comment to the top of the list
        const fixedCommentText = commentText.trim();
        if(!fixedCommentText) {
            setCommentError("Unable to post blank comments.");
        }
        else {
            try {
                const newVidData = {...selectedVidData};
                let newCommentsList = JSON.parse(selectedVidData?.Comments ?? "[]");
                newCommentsList.unshift({
                    Date: new Date().toISOString(),
                    UserID: userId,
                    Content: fixedCommentText
                });
                newVidData.Comments = JSON.stringify(newCommentsList);
                await updateThreadById(selectedVidData.id, newVidData);

                const newComments = [{
                    poster: userId,
                    comment: fixedCommentText
                }]
                for(let comment of comments) {
                    newComments.push(comment);
                }
                setComments(newComments);
            }
            catch(e) {
                console.log("Error adding comment to video:", e);
            }
            closeCommentView();
        }
    }


    return <Modal title={videoData?.title + " by " + videoData?.poster} isOpen={isOpen} onClose={onClose}>
        <div className="flex flex-wrap flex-col lg:flex-row">
            <iframe className="m-2" src="https://www.youtube.com/watch?v=8lM7f3O3Mko"
                width={vidWidth} height={vidWidth*(9/16)}/>
            <div className="lg:w-1/2 grow m-2 bg-zinc-300 rounded border-2 border-zinc-400 overflow-y-scroll h-80">
                {comments.map((cData) => <Comment key={cData.id} poster={cData.poster} comment={cData.comment}/>)}
            </div>
        </div>
        <div>
            <button className="m-1 w-12 h-12 rounded-full"
                onClick={async () => {await setLikedStatus()}}>
                {isLiked && <HeartIconFilled className="w-6"/>}
                {!isLiked && <HeartIcon className="w-6"/>}
            </button>
            <button className="m-1 w-12 h-12 rounded-full"
                onClick={() => {setIsLeavingComment(true)}}>
                <ChatBubbleLeftIcon className="w-6"/>
            </button>
        </div>
        {isLeavingComment &&
            <div>
                <form>
                    <input type="text" name="comment_text"
                        onChange={e => {setCommentText(e.target.value)}}/>
                    <button className='ml-4' onClick={async (e) => {await postComment(e)}}>Post Comment</button>
                    <button className='ml-4' onClick={(e) => {closeCommentView(e)}}>Don't Post</button>
                </form>
                {commentError && <p>{commentError}</p>}
            </div>
        }
    </Modal>
}

function Comment(props) {
    return <div className="m-2">
        <p className="font-bold">{props.poster}</p>
        <p className="break-words">{props.comment}</p>
    </div>
}

export default VideoModal;