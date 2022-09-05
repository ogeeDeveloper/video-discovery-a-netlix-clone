import {useRouter} from "next/router"
import Image from "next/image"
import Link from "next/link"
import React, {useState, useEffect} from "react"
import {MdKeyboardArrowDown} from "react-icons/md"

import {magic} from "../lib/magic-client"

interface Props {
    // any props that come into the component
    username:string,
}


const Navbar: React.FunctionComponent<Props> = () => {
    const router=useRouter()
    const [showDropdown, setShowDropdown] = useState(false)
    const [username, setUsername] = useState("")

    useEffect(() => {
        async function getUsername(){
            // Assumes a user is already logged in
            try {
                /* Destructure to get username */
                const {email} = await magic.user.getMetadata()
                if(email){
                    setUsername(email)
                }

            } catch(error) {
                // Handle errors if required!
                console.error("There was an error retrieving the username", error)
            }
        }
        getUsername()
    }, [])


    const handleOnClickHome = (e:React.SyntheticEvent) => {
        e.preventDefault()
        router.push('/')
    }

    const handleClickMyList = (e:React.SyntheticEvent) => {
        e.preventDefault()
        router.push('/browse/my-list')
    }

    const handleShowDropdown = () => {
        setShowDropdown(!showDropdown)
    }
  return (
    <div className="text-white10 fixed top-0 w-full z-50">
        <div className="flex px-4 p-5 md:px-16 md:flex-row md:items-center">
            <a className="flex font-medium text-md items-center text-white10 mb-4 md:mb-0" href="/">
                <div className="text-red w-32">
                    <Image
                        src="/image/netflix.svg"
                        alt="Netflix logo"
                        width="128px"
                        height="34px"
                    />
                </div>
            </a>

        <ul className="flex flex-row w-2/4 ml-4 text-lg list none md:ml-12">
            <li className="font-semibold text-md cursor-pointer mr-3 md:mr-5" onClick={handleOnClickHome}>Home</li>
            <li className="cursor-pointer" onClick={handleClickMyList}>My List</li>
        </ul>

        {/* Drop Down with username */}
        <nav className="flex items-start ml-auto">
            <div>
                <button className="flex items-center overflow-hidden text-white" onClick={handleShowDropdown}>
                    <p className="text-base">{username}</p>
                    {/* Expand more icons */}
                    <MdKeyboardArrowDown />
                </button>
                {showDropdown && (
                    <div className="absolute ml-auto mt-2 py-2 bg-black50 border text-white rounded-lg border-blue shadow">
                        <div>
                            <Link href="/login">
                                <a className="transition duration-200 block px-1 rounded-sm cursor-pointer hover:no-underline">Sign Out</a>
                            </Link>
                            <div className="py-2"></div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    </div>
    </div>
  )
}

export default Navbar