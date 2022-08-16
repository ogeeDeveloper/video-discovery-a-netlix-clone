import React from 'react'
import Image from "next/image"

interface Props {
    // any props that come into the component
    imgUrl:string,
    size:string
}

const Card: React.FunctionComponent<Props> = ({imgUrl, size}) => {
    // style map
    const styleMap:any = {
        large: 'relative w-[218px] min-w-[218px] h-[434px] min-h-434px]',
        medium: 'relative w-[158px] min-w-[158px] h-[280px] min-h-[280px]',
        small: 'relative w-[300px] min-w-[300px] h-[170px] min-h-[170px]'
    }
  return (
    <div className='mr-1  cursor-pointer'>
        <div className={styleMap[size]}>
            <Image src={imgUrl} alt='image' layout='fill' className='block top-0 right-0 bottom-0 left-0 rounded-md object-cover object-center max-w-full' />
        </div>
    </div>
  )
}

export default Card