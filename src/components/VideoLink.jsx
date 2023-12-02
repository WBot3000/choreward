function VideoLink({ setFn, videoData }) {
    return <div className="w-64 h-36 mx-8 my-4" onClick={() => {setFn(videoData)}}>
        <div className="w-64 h-36 bg-blue-200"/>
        <p className="inline-block max-w-xs font-bold whitespace-nowrap overflow-hidden text-ellipsis">{videoData.title}</p>
    </div>
}

export default VideoLink;