export const getVideo = async (searchQuery:string)=> {
    const YoutubeApiKey = process.env.YOUTUBE_API
    try{
        // create fetch request that will return a promise
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&type=video&key=${YoutubeApiKey}`)

        // Return the response as json
        const data = await response.json()

        // Check if their are any error with the YoutubeAPI
        if(data?.error){
            console.error("Their was a Youtube API error", data.error)
            return []
        }
    
        return data?.items.map((item:any)=>{
            // Handle the case of no id was found
            const id = item.id?.videoId || item.id
            return {
                title: item.snippet.title,
                imgUrl: item.snippet.thumbnails.high.url,
                id,
            }
        })
    }catch(error){
        console.log("Something when wrong when retrieving videos", error)
        return []
    }
}