import React from 'react'
import Card from './Card'

const SectionCards = ({title,size,videos}:{title:string, size:string, videos:{imgUrl:string}[]}) => {
  console.log({videos})
  return (
    <section className='text-blue20 bg-black50 px-4 md:px-16'>
        <h1 className='text-white10 font-bold text-2xl'>{title}</h1>
        <div className='flex pt-7 pb-6 mt-6 mr-3 overflow-x-scroll overflow-y-hidden'>
          {videos && videos.map((video,index)=>{
            return <Card key={index} imgUrl={video.imgUrl} size={size} id={index} />
          })}
        </div>
    </section>
  )
}

export default SectionCards