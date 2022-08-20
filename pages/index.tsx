import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import SectionCards from '../components/SectionCards'

const Home: NextPage = () => {
  // Dummydata for populating card
  const disneyVideos = [
    {imgUrl: "/image/avatar.jpg"},
    {imgUrl: "/image/avatar.jpg"},
    {imgUrl: "/image/avatar.jpg"}
  ]
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Video Discovery:Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar username="ogeedev@mail.com" />
      <Banner title="Avatar" subtitle="The last air bender" imgURL="/image/avatar.jpg" />
      <div className='mt-6'>
        <SectionCards title='Disney' videos={disneyVideos} size="large" />
      </div>
      {/* <Card imgUrl="/image/avatar.jpg" size="medium"/>
      <Card imgUrl="/image/avatar.jpg" size="small"/> */}
    </div>
  )
}

export default Home
