interface Props {
    // any props that come into the component
    username:string,
}

const Navbar: React.FunctionComponent<Props> = ({username}) => {
  return (
    <div className="text-white10 fixed top-0 w-full z-50">
        <div className="flex px-4 p-5 md:px-16 md:flex-row md:items-center">
            <a className="flex font-medium text-md items-center text-white10 mb-4 md:mb-0" href="/">
                <div className="text-red w-32">
                    Logo
                </div>
            </a>

        <ul className="flex flex-row w-2/4 ml-4 text-lg list none md:ml-12">
            <li className="font-semibold text-md cursor-pointer mr-3 md:mr-5">Home</li>
            <li className="cursor-pointer">My List</li>
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
                        <a className="transition duration-200 block px-1 rounded-sm cursor-pointer hover:no-underline">Sign Out</a>
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