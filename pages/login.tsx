import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const login = () => {
  return (
    <div>
        <Head>
        <title>Netflix Signin</title>
      </Head>

      <header>
        <div className=''>
            <Link className='flex font-medium text-base items-center color-white10 mb-4' href="/"> 
                <a>
                    <div className='color-red w-32'>
                        <Image
                            src="/image/netflix.svg"
                            alt="Netflix logo"
                            width="128px"
                            height="34px"
                        />
                    </div>
                </a>
            </Link>
        </div>
      </header>
    </div>
  )
}

export default login