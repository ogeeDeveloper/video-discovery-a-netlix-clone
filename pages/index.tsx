import type { NextPage } from 'next'
import Head from 'next/head'

import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import SectionCards from '../components/SectionCards'
import {getVideos} from "../lib/videos"

export async function getServerSideProps() {
    const disneyVideos = await getVideos('disney%20trailer')
    const TravelVideos = await getVideos('Travel')
    const ProducivityVideos = await getVideos('Productivity')
    // const PopularVideos = await getVideo('disney trailer')

   // Pass the disneyVideos as props to our home page
    return {props: {disneyVideos, TravelVideos, ProducivityVideos}}
}

const Home: NextPage = ({disneyVideos,TravelVideos, ProducivityVideos}:any) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Video Discovery:Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar username="ogeedev@mail.com" />
      <Banner title="Shrek 5" subtitle="The last air bender" imgURL="/image/Shrek-5.jpg" />
      <div className='mt-6'>
        <SectionCards title='Disney' videos={disneyVideos} size="large" />
        <SectionCards title='Travel' videos={TravelVideos} size="small" />
        <SectionCards title='Productivity' videos={ProducivityVideos} size="medium" />
        <SectionCards title='Popular' videos={[]} size="small" />
      </div>
      {/* <Card imgUrl="/image/avatar.jpg" size="medium"/>
      <Card imgUrl="/image/avatar.jpg" size="small"/> */}
    </div>
  )
}

export default Home