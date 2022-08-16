import React from 'react'
import Image from "next/image"

interface Props {
    // any props that come into the component
    imgUrl:string,
    size:string
}

const Card: React.FunctionComponent<Props> = ({imgUrl, size}) => {
  return (
    <div>
        <Image src={imgUrl} alt='image' width={300} height={300} objectFit="contain" />
    </div>
  )
}

export default Card