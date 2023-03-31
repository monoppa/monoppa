import { useSpring, a } from '@react-spring/web'
import React from 'react'
import Image from 'next/image'
import { ALBUM_SIZE, DISC_OFFSET, DISC_SIZE } from '../Album.constants'

type DiscProps = {
  hover: boolean
  discBackground: string
}

const Disc = (props: DiscProps) => {
  const { hover, discBackground } = props

  const { transform, opacity } = useSpring({
    transform: `translateX(${hover ? ALBUM_SIZE * 0.6 : '0'}px)`,
    opacity: hover ? 1 : 0,
  })

  return (
    <a.div
      className='absolute left-0 z-10 rounded-full'
      style={{
        opacity,
        transform,
        height: `${DISC_SIZE}px`,
        width: `${DISC_SIZE}px`,
        top: `${DISC_OFFSET / 2}px`,
      }}
    >
      <Image
        fill
        src={discBackground}
        alt='album-disc'
        className={`h-full w-full relative rounded-full animate-spin-disc overflow-hidden bg-cover bg-center`}
      />
    </a.div>
  )
}

export default Disc
