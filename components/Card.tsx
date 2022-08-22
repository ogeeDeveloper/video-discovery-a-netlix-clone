import React, { useState } from 'react'
import Image from "next/image"
import {motion} from "framer-motion"

interface Props {
    // any props that come into the component
    imgUrl:string,
    size:string,
    id:number
}

const Card: React.FunctionComponent<Props> = ({imgUrl="/image/image-not-found.png", size="medium", id}) => {
    const [imgSrc, setImgSrc] = useState(imgUrl)

    // style map
    const styleMap:any = {
        large: 'relative w-[218px] min-w-[218px] h-[434px] min-h-434px]',
        medium: 'relative w-[158px] min-w-[158px] h-[280px] min-h-[280px]',
        small: 'relative w-[300px] min-w-[300px] h-[170px] min-h-[170px]'
    }

    const handleImageError = () =>{
        console.log("error triggered")
        setImgSrc("/image/image-not-found.png")
    }

    // Checks condition for scaling
    const scale = id === 0 ? {scaleY:1.1} : {scale:1.1}

  return (
    <div className='mr-1 cursor-pointer'>
        <motion.div className={`${styleMap[size]} imgMotionWrapper`} whileHover={{...scale}}>
            <Image src={imgUrl} alt='image' layout='fill' className='block top-0 right-0 bottom-0 left-0 rounded-md object-cover object-center max-w-full' onError={handleImageError} />
        </motion.div>
    </div>
  )
}

export default Card