import React from 'react'
import Image from 'next/image'
import MeCard from './sections/MeCard/MeCard'
import TorabelCard from './sections/TorabelCard/TorabelCard'
import LuxorCard from './sections/LuxorCard/LuxorCard'

const IMAGE_WIDTH = 300
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.25

const HomeBox = () => {
  return (
    <div className='bg-gray-100'>
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

        <section className='flex mt-4 gap-x-4'>
          {/* left column */}
          <div className='flex flex-col flex-1 w-1/2 gap-y-4'>
            <TorabelCard />
          </div>
          {/* right column */}
          <div className='flex flex-col flex-1 w-1/2 gap-y-4'>
            <LuxorCard />
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomeBox
