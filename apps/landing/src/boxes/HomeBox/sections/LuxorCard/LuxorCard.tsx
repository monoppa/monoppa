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
            <p className='font-semibold text-2xl lg:text-3xl text-[#E8BC50]'>
              Luxor,
            </p>

            <p className='text-xl lg:text-3xl text-neutral-200'>
              Software Engineer
            </p>
          </div>
        </div>

        <p className='text-base text-neutral-200'>2021 - Present</p>
      </div>

      <div className='flex items-center justify-between mt-8 gap-x-4 lg:gap-x-6'>
        <SideBlock variant='left' />

        <div className='p-4 rounded-md overflow-hidden flex-1 h-64 shrink-0 bg-[#1C1D1F] relative'>
          <Image
            src='/img/luxor-card-hero.png'
            alt='luxor dashboard'
            fill
            className='p-4 bg-center bg-cover'
          />
        </div>

        <SideBlock variant='right' />
      </div>
    </HomeCard>
  )
}

export default LuxorCard
