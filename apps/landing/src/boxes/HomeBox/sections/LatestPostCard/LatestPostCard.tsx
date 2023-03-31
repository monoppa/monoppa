import Link from 'next/link'
import React from 'react'
import HomeCard from '../../elements/HomeCard'

const LatestPostCard = () => {
  return (
    <HomeCard variant='latestPost'>
      <div className='relative flex flex-col'>
        <div className='flex justify-center w-full py-4 border-b border-b-neutral-700'>
          <p className='text-lg text-neutral-50'>📝 Latest Post</p>
        </div>

        <div className='flex flex-col px-4 pt-6 lg:px-12 pb-14'>
          <p className='text-2xl font-semibold text-neutral-100'>
            How to dynamically create responsive images with NextJS
          </p>

          <p className='mt-5 text-lg text-neutral-200'>
            There are a couple of existing solutions out there for our image
            transformation needs. Cloudinary for example. Cloudinary may work
            well for low-traffic projects, but not for projects gaining a good
            amount of traffic. Expenses could soon rise as our app quickly gains
            more traffic.
          </p>
        </div>

        <div
          className='absolute bottom-0 left-0 w-full h-1/2'
          style={{
            backgroundImage: 'linear-gradient(to bottom, transparent, black)',
          }}
        >
          <div className='flex items-end justify-center h-full px-4 pt-4 pb-6 lg:px-12'>
            <Link
              className='w-full px-6 py-3 font-semibold text-center rounded-md cursor-pointer bg-neutral-700 text-neutral-50 hover:bg-neutral-600'
              href='/blog'
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </HomeCard>
  )
}

export default LatestPostCard
