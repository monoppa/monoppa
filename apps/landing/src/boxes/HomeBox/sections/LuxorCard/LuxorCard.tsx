import React from 'react'
import Image from 'next/image'
import HomeCard from '../../elements/HomeCard'
import SideBlock from './SideBlock/SideBlock'

const LuxorCard = () => {
  return (
    <HomeCard variant='luxor'>
      <div className='flex flex-col px-8'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-2'>
            <p className='font-semibold text-3xl text-[#E8BC50]'>Luxor,</p>

            <p className='text-3xl text-gray-200'>Software Engineer</p>
          </div>
        </div>

        <p className='text-base text-gray-200'>2021 - Present</p>
      </div>

      <div className='flex items-center justify-between mt-8 gap-x-6'>
        <SideBlock variant='left' />

        <div className='p-4 rounded-md shrink-0 bg-[#1C1D1F]'>
          <Image
            src='/img/luxor-card-hero.png'
            alt='luxor dashboard'
            width={334}
            height={220}
          />
        </div>

        <SideBlock variant='right' />
      </div>
    </HomeCard>
  )
}

export default LuxorCard
