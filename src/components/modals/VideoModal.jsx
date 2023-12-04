import { useContext, useState, useEffect } from "react";
import Modal from "./Modal"
import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid"
import useLoginCheck from "../hooks/useLoginCheck";
import { ThreadContext } from "../contexts/ThreadContext";


//TODO: Need to have thread editing support from hook in order to have proper likeFn and commentFn
function VideoModal({ isOpen, onClose, videoData }) {

    const userId = useLoginCheck({redirect:null});
    const { updateThreadById } = useContext(ThreadContext);

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
    }, [videoData]);

    //TODO: Set isLiked to a value based on whether or not the user has actually liked the video
    useEffect(() => {
        const likesOnVideo = videoData?.LikedUsers?.split(",");
        if(!likesOnVideo || !likesOnVideo.includes(userId)) {
            setIsLiked(false);
        }
        else {
            setIsLiked(true);
        }
    }, [videoData]);

    //Changes video size when the window is resized
    useEffect(() => {
        let resizeFunction = () => {
            setVidWidth(window.innerWidth > 600 ? 550 : window.innerWidth - 25);
        }
        window.addEventListener("resize", resizeFunction);

        return () => window.removeEventListener("resize", resizeFunction);
    });

    //TODO: Change this to incorporate Likes (the number value) and LikedUsers (the list as a string that Likes currently is here in this implementation)
    async function setLikedStatus() {
        try {
            const newVidData = {...videoData};
            let newLikedList = videoData?.LikedUsers?.split(",") ?? [];
            if(isLiked) { //Unlike the video by removing the user's name from the list
                const idxOfUser = newLikedList.indexOf(userId);
                if(idxOfUser > -1) {
                    newLikedList.splice(idxOfUser, 1);
                    newVidData.Likes--;
                }
            }
            else { //Liking the video
                newLikedList.push(userId);
                newVidData.Likes++
            }
            newVidData.LikedUsers = newLikedList.join(",");
            console.log(newVidData);
            await updateThreadById(videoData.id, newVidData);
            setIsLiked(!isLiked);
        }
        catch(e) {
            console.log("Error switching liked status on video:", e);
        }
        //console.log(videoData);
        await updateThreadById(videoData.id, videoData)
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
                const newVidData = {...videoData};
                let newCommentsList = JSON.parse(videoData?.Comments ?? "[]"); //Convert JSON string to object

                newCommentsList.unshift({
                    Date: new Date().toISOString(),
                    UserID: userId,
                    Content: fixedCommentText
                });
                newVidData.Comments = JSON.stringify(newCommentsList);
                await updateThreadById(videoData.id, newVidData);

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


    return <Modal title={videoData?.ThreadTitles + " by " + videoData?.UserID} isOpen={isOpen} onClose={onClose}>
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