const GOOGLE_API_KEY = "AIzaSyB7e4PTd-b0bw9npueheUaT7NqmCtSsj-w";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const SEARCH_RESULT_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key="+GOOGLE_API_KEY