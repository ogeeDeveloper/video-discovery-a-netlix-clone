import videoData from "../data/test-data.json"

export const getVideo = () => {
    return videoData.items.map(item=>{
        return {
            title: item.snippet.title,
            imgUrl: item.snippet.thumbnails.high.url,
            id: item?.id?.videoId
        }
    })
}