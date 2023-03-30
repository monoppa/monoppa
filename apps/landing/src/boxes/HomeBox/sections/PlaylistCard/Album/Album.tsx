import React, { useState } from 'react'
import Image from 'next/image'
import { useSpring, a } from '@react-spring/web'
import Disc from './Disc/Disc'
import { ALBUM_SIZE } from './Album.constants'

const AnimatedImage = a(Image)

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
        <AnimatedImage
          src={albumCoverImg}
          width={ALBUM_SIZE}
          height={ALBUM_SIZE}
          alt='album-artwork'
          style={{
            transform: coverSpring.transform,
          }}
        />
      </div>

      {hover && (
        <div className='absolute inset-0 z-30 flex items-center justify-center'>
          <div className='px-4 py-2 bg-neutral-900 text-neutral-50 rounded-3xl'>
            Open on Spotify
          </div>
        </div>
      )}

      <Disc hover={hover} discBackground={discBackground} />
    </div>
  )
}

export default Album
