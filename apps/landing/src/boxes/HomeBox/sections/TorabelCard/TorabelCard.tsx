import React from 'react'
import Image from 'next/image'
import HomeCard from '../../elements/HomeCard'

const TorabelCard = () => {
  return (
    <HomeCard variant='torabel'>
      <div className='flex flex-col p-8 pb-0'>
        <p className='text-2xl font-semibold lg:text-3xl text-neutral-50'>
          Torabel, Maker
        </p>
        <p className='text-base text-neutral-100'>2022 - Present</p>
      </div>

      <div className='w-full relative h-[340px]'>
        <Image
          src='/img/torabel-card-hero.png'
          alt='torabel'
          width={400}
          height={400}
          className='absolute left-[50%] bottom-0 lg:bottom-[-30px]'
          style={{
            transform: 'translateX(-50%) rotate(15deg)',
          }}
        />
      </div>
    </HomeCard>
  )
}

export default TorabelCard
