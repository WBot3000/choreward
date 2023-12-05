import { useState, useEffect } from "react";
import Modal from "./Modal";
import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import useLoginCheck from "../hooks/useLoginCheck";
import useFetchThreads from "../hooks/useFetchThreads";
import useFetchComments from "../hooks/useFetchComments";
import { Storage } from "aws-amplify";

//TODO: Need to have thread editing support from hook in order to have proper likeFn and commentFn
function VideoModal({ isOpen, onClose, videoId }) {
  const { userName } = useLoginCheck({ redirect: null });
  const [videoUrl, setVideoUrl] = useState(null);
  const { fetchThreadById, updateThreadById } = useFetchThreads();
  const { addComment, fetchCommentById } = useFetchComments();

  //Used to resize the video based on the window size
  const [vidWidth, setVidWidth] = useState(
    window.innerWidth > 600 ? 550 : window.innerWidth - 25
  );

  const [videoData, setVideoData] = useState(null);
  useEffect(() => {
    async function fetchVideoData() {
      if (!videoId) {
        return;
      }
      const data = await fetchThreadById(videoId);
      if (data) {
        setVideoData(data);
      }
    }
    fetchVideoData();
  }, [videoId]);

  const [isLeavingComment, setIsLeavingComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentError, setCommentError] = useState("");
  const [comments, setComments] = useState(null);
  useEffect(() => {
    async function fetchVideoUrl() {
      if (videoData?.VideoURL) {
        const url = await Storage.get(videoData.VideoURL);
        setVideoUrl(url);
      }
    }
    fetchVideoUrl();
  }, [videoData]);
  useEffect(() => {
    if (!isOpen) {
      setVideoData(null);
      setComments(null);
    }
  }, [isOpen]);

  function commentIDStringToList() {
    return !videoData || !videoData.Comments
      ? []
      : videoData?.Comments?.split(",");
  }

  function likedUsersIDStringToList() {
    return !videoData || !videoData.LikedUsers
      ? []
      : videoData?.LikedUsers?.split(",");
  }

  function userHasLiked() {
    const likesOnVideo = likedUsersIDStringToList();
    if (!likesOnVideo || !likesOnVideo.includes(userName)) {
      return false;
    } else {
      return true;
    }
  }

  function getTitle() {
    if (!videoData) {
      return "Loading Title...";
    }
    return videoData?.ThreadTitles + " by " + videoData?.UserID;
  }

  async function retrieveCommentData() {
    const commentIds = commentIDStringToList();
    const commentData = [];
    console.log(commentIds);
    for (let id of commentIds) {
      if (id) {
        const data = await fetchCommentById(id);
        if (data) {
          commentData.push(data);
        }
      }
    }
    setComments(commentData);
  }

  useEffect(() => {
    if (isOpen) {
      retrieveCommentData();
    }
  }, [videoData]);

  //Changes video size when the window is resized
  useEffect(() => {
    let resizeFunction = () => {
      setVidWidth(window.innerWidth > 600 ? 550 : window.innerWidth - 25);
    };
    window.addEventListener("resize", resizeFunction);

    return () => window.removeEventListener("resize", resizeFunction);
  });

  async function setLikedStatus() {
    try {
      const newVidData = { ...videoData };
      let newLikedList = likedUsersIDStringToList();
      const idxOfUser = newLikedList.indexOf(userName);
      console.log(newLikedList, idxOfUser);
      if (idxOfUser > -1) {
        //Unlike the video by removing the user's name from the list
        newLikedList.splice(idxOfUser, 1);
        newVidData.Likes--;
      } else {
        //Liking the video
        newLikedList.push(userName);
        newVidData.Likes++;
      }
      newVidData.LikedUsers = newLikedList.join(",");
      await updateThreadById(videoData.id, newVidData);
      setVideoData(newVidData);
      //setIsLiked(!isLiked);
    } catch (e) {
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
    if (!fixedCommentText) {
      setCommentError("Unable to post blank comments.");
    } else {
      try {
        const newComment = {
          Date: new Date().toISOString().slice(0, 10),
          UserID: userName,
          Content: fixedCommentText,
        };

        const commentId = await addComment(newComment);

        if (commentId) {
          const newVidData = { ...videoData };
          newVidData.Comments += `,${commentId}`;
          await updateThreadById(videoData.id, newVidData);
          setVideoData(newVidData);
        } else {
          setCommentError("Error occured while adding comment to server");
        }
      } catch (e) {
        console.log("Error adding comment to video:", e);
      }
      closeCommentView();
    }
  }

  const VideoPlayer = ({ videoUrl }) => {
    if (!videoUrl) return <div>Loading Video...</div>;

    return (
      <video height= "400"width="400" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    );
  };

  const isLiked = userHasLiked();

  return (
    <Modal title={getTitle()} isOpen={isOpen} onClose={onClose}>
    <div className="flex flex-wrap flex-col lg:flex-row">
      <VideoPlayer videoUrl={videoUrl} />
        <div className="lg:w-1/2 grow m-2 bg-zinc-300 rounded border-2 border-zinc-400 overflow-y-scroll h-80">
          {comments == null && (
            <div className="m-2">
              <p className="font-bold">Loading comments...</p>
            </div>
          )}
          {comments?.map((cData) => (
            <Comment
              key={cData.id}
              poster={cData.UserID}
              comment={cData.Content}
            />
          ))}
        </div>
      </div>
      <div>
        <button
          className="m-1 w-12 h-12 rounded-full"
          onClick={async () => {
            await setLikedStatus();
          }}
        >
          {isLiked && <HeartIconFilled className="w-6" />}
          {!isLiked && <HeartIcon className="w-6" />}
        </button>
        <button
          className="m-1 w-12 h-12 rounded-full"
          onClick={() => {
            setIsLeavingComment(true);
          }}
        >
          <ChatBubbleLeftIcon className="w-6" />
        </button>
      </div>
      {isLeavingComment && (
        <div>
          <form>
            <input
              type="text"
              name="comment_text"
              onChange={(e) => {
                setCommentText(e.target.value);
              }}
            />
            <button
              className="ml-4"
              onClick={async (e) => {
                await postComment(e);
              }}
            >
              Post Comment
            </button>
            <button
              className="ml-4"
              onClick={(e) => {
                closeCommentView(e);
              }}
            >
              Don't Post
            </button>
          </form>
          {commentError && <p>{commentError}</p>}
        </div>
      )}
    </Modal>
  );
}

function Comment(props) {
  return (
    <div className="m-2">
      <p className="font-bold">{props.poster}</p>
      <p className="break-words">{props.comment}</p>
    </div>
  );
}

export default VideoModal;
