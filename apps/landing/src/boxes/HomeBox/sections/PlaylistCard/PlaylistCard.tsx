import Link from 'next/link'
import React from 'react'
import HomeCard from '../../elements/HomeCard'
import Album from './Album/Album'
import Bg from './elements/Bg'
import MusicIcon from './elements/MusicIcon'

const PlaylistCard = () => {
  return (
    <HomeCard variant='playlist'>
      <div className='relative w-full h-full rounded-md'>
        <Bg />

        <div className='relative z-10 p-8 rounded-md '>
          <div className='flex justify-center w-full pb-4'>
            <MusicIcon color='white' style={{ position: 'relative' }} />
            <p className='relative z-10 text-2xl text-center text-neutral-50'>
              Spotify Playlists
            </p>
          </div>

          <div className='grid grid-cols-1 gap-4'>
            <Link
              href='https://open.spotify.com/playlist/3EMynfJ48kTgbRU3Efanvt?si=6eed6d2b73dd40f8'
              target='__blank'
              rel='noreferrer noopener'
            >
              <Album
                albumCoverImg='url(/img/helsinki-cover.png)'
                discBackground='url(/img/helsinki-disc.png)'
              />
            </Link>
            
            <Link
              href='https://open.spotify.com/playlist/2H5vBj8FVndeAJgrjFwIqk?si=19dfc39d679b4fe2'
              target='__blank'
              rel='noreferrer noopener'
            >
              <Album
                albumCoverImg='url(/img/anime-album-cover.png)'
                discBackground='url(/img/tokyo-disc.png)'
                // link='https://open.spotify.com/playlist/2H5vBj8FVndeAJgrjFwIqk?si=19dfc39d679b4fe2'
              />
            </Link>
          </div>
        </div>
      </div>
    </HomeCard>
  )
}

export default PlaylistCard