import {useRouter} from "next/router"
import Link from "next/link"
import React from "react"

interface Props {
    // any props that come into the component
    username:string,
}

const Navbar: React.FunctionComponent<Props> = ({username}) => {
    const router=useRouter()

    const handleOnClickHome = (e:React.SyntheticEvent) => {
        e.preventDefault()
        router.push('/')
    }

    const handleClickMyList = (e:React.SyntheticEvent) => {
        e.preventDefault()
        router.push('/browse/my-list')
    }
  return (
    <div className="text-white10 fixed top-0 w-full z-50">
        <div className="flex px-4 p-5 md:px-16 md:flex-row md:items-center">
            <a className="flex font-medium text-md items-center text-white10 mb-4 md:mb-0" href="/">
                <div className="text-red w-32">
                    Netflix
                </div>
            </a>

        <ul className="flex flex-row w-2/4 ml-4 text-lg list none md:ml-12">
            <li className="font-semibold text-md cursor-pointer mr-3 md:mr-5" onClick={handleOnClickHome}>Home</li>
            <li className="cursor-pointer" onClick={handleClickMyList}>My List</li>
        </ul>

        {/* Drop Down with username */}
        <nav className="flex items-start ml-auto">
            <div>
                <button className="flex items-center overflow-hidden text-white">
                    <p className="text-base">{username}</p>
                    {/* Expand more icons */}
                </button>
                <div className="absolute ml-auto mt-2 py-2 bg-black50 border text-white rounded-lg border-blue shadow">
                    <div>
                        <Link href="/login">
                            <a className="transition duration-200 block px-1 rounded-sm cursor-pointer hover:no-underline">Sign Out</a>
                        </Link>
                        <div className="py-2"></div>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    </div>
  )
}

export default Navbar