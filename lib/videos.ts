export const getCommonVideos = async (url:string) => {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API;
  
    try {
        // Define the base url
      const BASE_URL = "youtube.googleapis.com/youtube/v3";

      // create fetch request that will return a promise
      const response = await fetch(
        `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
      );
  
      const data = await response.json();

      // Check if their are any error with the YoutubeAPI
      if (data?.error) {
        console.error("Youtube API error", data.error);
        return [];
      }
      console.log({ items: data.items });
      return data?.items.map((item) => {
        console.log({ id: item.id });
        const id = item.id?.videoId || item.id;
        return {
          title: item.snippet.title,
          imgUrl: item.snippet.thumbnails.high.url,
          id,
        };
      });
    } catch (error) {
      console.error("Something went wrong with video library", error);
      return [];
    }
  };
  
  export const getVideos = (searchQuery:string) => {
    const URL = `search?part=snippet&q=${searchQuery}&type=video`;
    return getCommonVideos(URL);
  };