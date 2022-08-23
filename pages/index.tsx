import type { NextPage } from 'next'
import Head from 'next/head'

import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import SectionCards from '../components/SectionCards'
import {getVideo} from "../lib/videos"

export async function getServerSideProps() {
    const disneyVideos = getVideo()
    // Pass the disneyVideos as props to our home page
    return {props: {disneyVideos}}
}

const Home: NextPage = ({disneyVideos}:any) => {
  // Dummydata for populating card
//   const disneyVideos = [
//     {imgUrl: "/image/avatar.jpg"},
//     {imgUrl: "/image/avatar.jpg"},
//     {imgUrl: "/image/avatar.jpg"}
//   ]

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Video Discovery:Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar username="ogeedev@mail.com" />
      <Banner title="Shrek 5" subtitle="The last air bender" imgURL="/image/Shrek-5.jpg" />
      <div className='mt-6'>
        <SectionCards title='Disney' videos={disneyVideos} size="large" />
      </div>
      {/* <Card imgUrl="/image/avatar.jpg" size="medium"/>
      <Card imgUrl="/image/avatar.jpg" size="small"/> */}
    </div>
  )
}

export default Home