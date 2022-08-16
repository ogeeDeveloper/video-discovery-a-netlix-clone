import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Video Discovery app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar username="ogeedev@mail.com" />
      <Banner title="Avatar" subtitle="The last air bender" imgURL="/image/avatar.jpg" />
      <Card imgUrl="/image/avatar.jpg" size="large"/>
      <Card imgUrl="/image/avatar.jpg" size="medium"/>
      <Card imgUrl="/image/avatar.jpg" size="small"/>
    </div>
  )
}

export default Home
