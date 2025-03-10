import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API,  SEARCH_RESULT_API } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const selectedQuery = useSelector((store)=>store.search.selectedQuery)  

  console.log(videos);
  

  useEffect(() => {
    getVideos();
  }, [selectedQuery]);

  const getVideos = async () => {
    const apiUrl = selectedQuery? `${SEARCH_RESULT_API}&q=${selectedQuery}`: YOUTUBE_VIDEOS_API;
    const data = await fetch( apiUrl );
    const json = await data.json();    
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.etag} to={"/watch?v="+video.id.videoId || video.id}><VideoCards info={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
