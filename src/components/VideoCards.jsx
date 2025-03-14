const VideoCards = ({info}) => {
    const{snippet, statistics} = info || {};
    const{channelTitle, thumbnails, title} = snippet || {};
    
  return (
    <div className="p-2 m-2 w-64 h-full flex flex-col overflow-hidden shadow-lg rounded-lg">
        <img className="rounded-lg" alt="thumbnail" src={thumbnails?.medium.url}/>
        <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCards