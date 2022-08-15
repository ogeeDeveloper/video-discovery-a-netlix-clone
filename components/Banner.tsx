import Image from "next/image"

interface Props {
    // any props that come into the component
    title:string,
    subtitle:string,
    imgURL:string
}

const Banner: React.FunctionComponent<Props> = (props) => {
    const {title, subtitle, imgURL} = props

    const handleOnPlay = ()=>{
        console.log("You clicked the play button")
    }

  return (
    <div className="w-full h-[80vh] relative">
        <div className="absolute w-full h-full z-10">
            <div className="flex flex-col mt-24 justify-start px-16 h-full">
                <div className="flex">
                    <p className="text-5xl font-[800] text-red">N</p>
                    <p className="self-center text-sm text-gray20">S E R I E S</p>
                </div>
                <h3 className="text-2xl font-[800] text-white10 outline-title lg:text-6xl">{title}</h3>
                <h3 className="text-lg outline-subtitle lg:text-2xl">{subtitle}</h3>
                <div className="flex flex-row w-full">
                    <button className="flex items-center justify-center px-5 py-2 mt-5 bg-white10 w-32 rounded-lg" onClick={handleOnPlay}>
                        <span className="font-[600] text-lg pl-1 text-center text-gray40 lg:text-xl">Play</span>
                    </button>
                </div>
            </div>
        </div>

        <div>
            <Image
                src={imgURL} 
                layout="fill"
                objectFit="cover"
                alt="Banner image"
                className="w-full h-full absolute bg-cover bg-center b-0 backgound-image-gradient bg-gradient-to-t from-black"
            />
        </div>
    </div>
  )
}

export default Banner