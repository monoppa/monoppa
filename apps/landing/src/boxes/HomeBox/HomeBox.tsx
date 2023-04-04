import React from 'react'
import Image from 'next/image'
import MeCard from './sections/MeCard/MeCard'
import TorabelCard from './sections/TorabelCard/TorabelCard'
import LuxorCard from './sections/LuxorCard/LuxorCard'
import LatestPostCard from './sections/LatestPostCard/LatestPostCard'
import PlaylistCard from './sections/PlaylistCard/PlaylistCard'
import StatsCard from './sections/StatsCard/StatsCard'

const IMAGE_WIDTH = 300
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.25

const HomeBox = () => {
  return (
    <div className='bg-neutral-100'>
      <div className='max-w-5xl px-4 py-8 mx-auto'>
        <header className='flex justify-between gap-x-4'>
          <MeCard />
          <Image
            src='/img/hero_img.png'
            alt='Mon is hiking'
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className='hidden lg:block'
          />
        </header>

        <section className='flex flex-col mt-4 lg:flex-row gap-x-4 lg:gap-y-0 gap-y-4'>
          {/* left column */}
          <div className='flex flex-col flex-1 w-full lg:w-1/2 gap-y-4'>
            <TorabelCard />
            <StatsCard />
            <LatestPostCard />
          </div>

          {/* right column */}
          <div className='flex flex-col flex-1 w-full lg:w-1/2 gap-y-4'>
            <LuxorCard />
            <PlaylistCard />
          </div>
        </section>

        <footer className='flex flex-col items-center text-center my-14'>
          <p>Made with ♥️ from 🇵🇭 - © Mon Quindoza 2023</p>
          <p>
            Built with NextJS. Styled with TailwindCSS. Animations by
            react-spring
          </p>
        </footer>
      </div>
    </div>
  )
}

export default HomeBox
