import Link from 'next/link'
import React from 'react'
import HomeCard from '../../elements/HomeCard'

const LatestPostCard = () => {
  return (
    <HomeCard variant='latestPost'>
      <div className='relative flex flex-col'>
        <div className='flex justify-center w-full py-4 border-b border-b-gray-700'>
          <p className='text-lg text-gray-50'>📝 Latest Post</p>
        </div>

        <div className='flex flex-col pt-6 pl-12 pr-12 pb-14'>
          <p className='text-2xl font-semibold text-gray-100'>
            How to dynamically create responsive images with NextJS
          </p>

          <p className='mt-5 text-lg text-gray-200'>
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
          <div className='flex items-end justify-center h-full pt-4 pb-6 pl-12 pr-12'>
            <Link
              className='w-full px-6 py-3 font-semibold text-center bg-gray-700 rounded-md cursor-pointer text-gray-50 hover:bg-gray-600'
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
