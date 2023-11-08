import { useState, useEffect } from "react";
import Modal from "./Modal"
import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline"


//This'll probably become the basis for the Portal Modal
function VideoModal({ isOpen, onClose, videoData }) {
    //Used to resize the video based on the window size
    //TODO: Maybe find less arbitrary numbers
    const [vidWidth, setVidWidth] = useState(window.innerWidth > 600 ? 550 : window.innerWidth - 25);
    const [isLeavingComment, setIsLeavingComment] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [commentError, setCommentError] = useState("");
    const [comments, setComments] = useState([]);

    //Comments that are intiially displayed should be from the passed video data. However, if the user adds their own comment, this should be added to the display
    useEffect(() => {
        setComments(videoData?.comments ?? []);
    }, [])

    //Changes video size when the window is resized
    useEffect(() => {
        let resizeFunction = () => {
            setVidWidth(window.innerWidth > 600 ? 550 : window.innerWidth - 25);
        }
        window.addEventListener("resize", resizeFunction);

        return () => window.removeEventListener("resize", resizeFunction);
    });

    //Used when you don't actually want to leave a comment
    function closeCommentView(event) {
        event?.preventDefault();
        setIsLeavingComment(false);
        setCommentText("");
        setCommentError("");
    }

    //Used to post comments to videos
    //TODO: Update this on the backend
    //TODO 2: Maybe add clientside filter?
    function postComment(event) {
        event.preventDefault();
        //Add the poster's new comment to the top of the list
        const fixedCommentText = commentText.trim();
        if(!fixedCommentText) {
            setCommentError("Unable to post blank comments.");
        }
        else {
            const newComments = [{
                poster: "User1",
                comment: fixedCommentText
            }]
            for(let comment of comments) {
                newComments.push(comment);
            }
            setComments(newComments);
            closeCommentView();
        }
    }


    return <Modal title={videoData?.title + " by " + videoData?.poster} isOpen={isOpen} onClose={onClose}>
        <div className="flex flex-wrap flex-col lg:flex-row">
            <iframe className="m-2" src="https://www.youtube.com/watch?v=8lM7f3O3Mko"
                width={vidWidth} height={vidWidth*(9/16)}/>
            <div className="lg:w-1/2 grow m-2 bg-zinc-300 rounded border-2 border-zinc-400 overflow-y-scroll max-h-80">
                {comments.map((cData) => <Comment key={cData.id} poster={cData.poster} comment={cData.comment}/>)}
            </div>
        </div>
        <div>
            <button className="m-1 w-12 h-12 rounded-full">
                <HeartIcon className="w-6"/>
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
                    <button className='ml-4' onClick={(e) => {postComment(e)}}>Post Comment</button>
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