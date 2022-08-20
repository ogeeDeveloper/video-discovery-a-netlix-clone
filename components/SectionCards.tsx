import React from 'react'
import Card from './Card'

const SectionCards = ({title}:{title:string}) => {
  return (
    <section className='text-blue20 bg-black50 px-4 md:px-16'>
        <h1 className='text-white10 font-bold text-2xl'>{title}</h1>
        <div className='flex flex-wrap py-4 mt-6 mr-3 overflow-x-auto overflow-y-hidden'>
          <Card imgUrl="/image/avatar.jpg" size="large" id={0} />
          <Card imgUrl="/image/avatar.jpg" size="large" id={1}/>
          <Card imgUrl="/image/avatar.jpg" size="large" id={2}/>
          <Card imgUrl="/image/avatar.jpg" size="large" id={3}/>
          <Card imgUrl="/image/avatar.jpg" size="large" id={4}/>
          <Card imgUrl="/image/avatar.jpg" size="large" id={5}/>
          <Card imgUrl="/image/avatar.jpg" size="large" id={6}/>
          <Card imgUrl="/image/avatar.jpg" size="large" id={7}/>
        </div>
    </section>
  )
}

export default SectionCards