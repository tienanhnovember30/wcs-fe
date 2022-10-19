import React from 'react'
import Image from 'next/image'
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="h-screen">
    <div className="absolute -z-10">
        <Image
            src=""
            layout="fill"
            objectFit="cover"
            quality={100}
        />
    </div>
    <div> Some overlay things go in here </div>
</div>
  )
}

export default Hero