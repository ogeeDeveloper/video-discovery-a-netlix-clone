import videoData from "../data/test-data.json"

export const getVideo = async() => {
    const YoutubeApiKey = process.env.YOUTUBE_API

    // 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=disney%20trailer&key=[YOUR_API_KEY]' \

    // create fetch request that will return a promise
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=disney%20trailer&key=${YoutubeApiKey}`)

    // Return the response as json
    const data = await response.json()
 
    return data?.items.map((item)=>{
        return {
            title: item.snippet.title,
            imgUrl: item.snippet.thumbnails.high.url,
            id: item?.id?.videoId
        }
    })
}