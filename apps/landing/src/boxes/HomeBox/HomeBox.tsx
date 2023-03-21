import React from 'react'
import Image from 'next/image'
import MeCard from './sections/MeCard/MeCard'

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
      </div>
    </div>
  )
}

export default HomeBox
