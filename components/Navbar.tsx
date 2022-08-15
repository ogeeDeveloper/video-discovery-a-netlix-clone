interface Props {
    // any props that come into the component
    username:string,
}

const Navbar: React.FunctionComponent<Props> = ({username}) => {
  return (
    <div>
        Navbar
        <ul>
            <li>Home</li>
            <li>My List</li>
        </ul>

        {/* Drop Down with username */}
        <div>
            <button>
                <p>{username}</p>
            </button>
            <div>
                <a>Sign Out</a>
            </div>
        </div>
        </div>
  )
}

export default Navbar