import React from 'react'
import HomeCard from '../../elements/HomeCard'

const Star = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className='w-5 h-5 text-emerald-600'
    >
      <path
        fillRule='evenodd'
        d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
        clipRule='evenodd'
      />
    </svg>
  )
}

type StatProps = {
  stat: string
  label: string
}

const Stat = ({ stat, label }: StatProps) => {
  return (
    <div>
      <p className='text-5xl font-medium text-neutral-50'>{stat}</p>
      <p className='text-neutral-300'>{label}</p>
    </div>
  )
}

const StatsCard = () => {
  return (
    <HomeCard variant='stats'>
      <div className='flex items-center justify-center p-8 gap-x-6'>
        <Stat stat='6k' label='Post reads' />

        <Star />

        <Stat stat='30' label='Github stars' />

        <Star />

        <Stat stat='10k' label='Doge coins' />
      </div>
    </HomeCard>
  )
}

export default StatsCard
