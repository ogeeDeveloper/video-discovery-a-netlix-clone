export const getVideo = async (searchQuery:string)=> {
    const YoutubeApiKey = process.env.YOUTUBE_API
  
    // create fetch request that will return a promise
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&type=video&key=${YoutubeApiKey}`)

    // Return the response as json
    const data = await response.json()
 
    return data?.items.map((item:any)=>{
        return {
            title: item.snippet.title,
            imgUrl: item.snippet.thumbnails.high.url,
            id: item?.id?.videoId
        }
    })
}