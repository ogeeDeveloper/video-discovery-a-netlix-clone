import React from 'react'
import Card from './Card'

const SectionCards = ({title}:{title:string}) => {
  return (
    <section className='container'>
        <h1 className='title'>{title}</h1>
        <div className='card-wrapper'>
            <Card imgUrl="/image/avatar.jpg" size="large"/>
        </div>
    </section>
  )
}

export default SectionCards