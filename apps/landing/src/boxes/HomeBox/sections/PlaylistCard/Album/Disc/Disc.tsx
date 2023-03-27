import { useSpring, a } from '@react-spring/web'
import React from 'react'
import { ALBUM_SIZE, DISC_OFFSET, DISC_SIZE } from '../Album.constants'

type DiscProps = {
  hover: boolean
  discBackground: string
}

const Disc = (props: DiscProps) => {
  const { hover, discBackground } = props

  const { transform } = useSpring({
    transform: `translateX(${hover ? ALBUM_SIZE * 0.6 : '0'}px)`,
  })

  return (
    <a.div
      className='absolute left-0 z-10 rounded-full'
      style={{
        transform,
        height: `${DISC_SIZE}px`,
        width: `${DISC_SIZE}px`,
        top: `${DISC_OFFSET / 2}px`,
      }}
    >
      <div
        className={`h-full w-full relative rounded-full animate-spin-disc overflow-hidden bg-cover bg-center`}
        style={{ backgroundImage: discBackground }}
      ></div>
    </a.div>
  )
}

export default Disc
