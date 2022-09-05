import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, {useState} from "react"
import {useRouter} from "next/router"
import { magic } from '../lib/magic-client'

const login = () => {
    const [userMessage, setUserMessage] = useState('')
    const [email, setEmail] = useState('')

    // Invoke useRouter
    const router = useRouter()

    const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setUserMessage('')
        // Check if the email address already exists
        const email:string = event.target.value
        console.log(email)

        // As the users starts typing then setthe emmail in state 
        setEmail(email)
    }

    const handleLogin = async (event: React.MouseEvent)=>{
        event.preventDefault()
        console.log("Handle login button")

        if(email){
            // log in a user by their email
            try {
                const didToken = await magic.auth.loginWithMagicLink({ email });
                console.log({didToken})
                if(didToken){
                    router.push("/")
                }
            } catch(error) {
                // Handle errors if required!
                console.error("Something wenst wrong while logging in", error)
            }
        }else{
            setUserMessage("Please enter a valid email address")
        }
    }
  return (
    <div className='flex flex-col items-center justify-start min-h-screen bg-signinbackround'>
        <Head>
            <title>Netflix Signin</title>
        </Head>

        <header className='flex justify-between w-full py-8'>
            <div className='flex px-4 flex-row'>
                <Link className='flex font-medium items-center text-white10 mb-4' href="/"> 
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
        {/* Container for the contents */}
        <main className='flex relative justify-center w-full h-screen z-10'>
            {/* Main wrapper to aplly space and transparent background */}
            <div className='flex flex-col pb-24 pt-8 bg-black20 h-[33.3333%] px-12 rounded-md min-w-[240px]'>
                <h1 className='text-white10 font-bold text-4xl mb-8'>Sign In</h1>
                <input type="email" className="p-2 color-black30 w-full pb-4 h-12 min-w-[240px] text-lg" placeholder="email address" onChange={handleOnChangeEmail} />
                <p className="">{userMessage}</p>
                <button className='bg-red10 px-12 py-2 text-xl color-white10 w-full rounded-md mt-6' onClick={handleLogin}>Login</button>
            </div>
        </main>
    </div>
  )
}

export default login