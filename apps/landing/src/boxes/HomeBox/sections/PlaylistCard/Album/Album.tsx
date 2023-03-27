import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import Disc from './Disc/Disc'
import { ALBUM_SIZE } from './Album.constants'

type AlbumProps = {
  albumCoverImg: string
  discBackground: string
}

const Album = (props: AlbumProps) => {
  const { albumCoverImg, discBackground } = props
  const [hover, setHover] = useState(false)

  const coverSpring = useSpring({
    transform: `scale(${hover ? 1.05 : 1})`,
  })

  const onMouseEnter = () => {
    setHover(true)
  }

  const onMouseLeave = () => {
    setHover(false)
  }

  return (
    <div
      className='relative cursor-pointer'
      style={{
        width: ALBUM_SIZE,
        height: ALBUM_SIZE,
        filter:
          'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* album cover */}
      <div className='absolute inset-0 z-20 overflow-hidden border border-neutral-500'>
        {/* album artwork */}
        <a.div
          className='w-full h-full'
          style={{
            background: albumCoverImg,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: coverSpring.transform,
          }}
        />
      </div>

      <Disc hover={hover} discBackground={discBackground} />
    </div>
  )
}

export default Album
