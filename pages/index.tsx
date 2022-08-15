import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Video Discovery app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Banner title="Avatar" subtitle="The last air bender" imgURL="/image/avatar.jpg" />
    </div>
  )
}

export default Home
