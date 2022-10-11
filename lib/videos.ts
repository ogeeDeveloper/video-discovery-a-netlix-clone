import * as videoTestData from "../data/test-data.json";

const fetchVideos = async (url: string) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API;

  // Define the base url
  const BASE_URL = "youtube.googleapis.com/youtube/v3";

  // create fetch request that will return a promise
  const response = await fetch(
    `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
  );

  return await response.json();
};

export const getCommonVideos = async (url: string) => {
  // Store the response if we are in development mode or not
  // const isDev = process.env.NODE_ENV === "development";
  const isDev = process.env.DEVELOPMENT;

  try {
    const data = isDev ? videoTestData : await fetchVideos(url);

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
        title: item.snippet?.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id,
        publishTime: item.snippet?.publishedAt,
        description: item.snippet?.description,
        statistics: item.statistics ? item.statistics : { viewCount: 0 },
        channelTitle: item.snippet?.channelTitle,
      };
    });
  } catch (error) {
    console.error("Something went wrong with video library", error);
    return [];
  }
};

export const getVideos = (searchQuery: string) => {
  const URL = `search?part=snippet&q=${searchQuery}&type=video`;
  return getCommonVideos(URL);
};

export const getPopularVideos = () => {
  const URL =
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US";
  return getCommonVideos(URL);
};

export const getVideoById = (id: string) => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}`;
  return getCommonVideos(URL);
};
