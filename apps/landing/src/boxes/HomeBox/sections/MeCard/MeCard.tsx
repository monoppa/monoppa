import React from 'react'
import { RoughNotation } from 'react-rough-notation'
import { blue } from 'tailwindcss/colors'
import Blob1 from './elements/Blob1'
import Blob2 from './elements/Blob2'

const MeCard = () => {
  return (
    <section className='relative z-10 flex-1 px-10 py-12 overflow-hidden rounded-2xl'>
      <div className='flex flex-col justify-between h-full'>
        <div className='z-10'>
          <h1 className='text-4xl font-semibold'>
            <span>{`Hey, I'm`}</span>
            <RoughNotation
              type='underline'
              show
              animationDelay={1500}
              animationDuration={300}
              strokeWidth={2}
              color={blue[600]}
              iterations={2}
              padding={0}
            >
              <span>&nbsp;Mon&nbsp;</span>
            </RoughNotation>
            <span>👋</span>
          </h1>

          <p className='w-5/6 mt-8 text-2xl'>{`I'm a software engineer based from the Philippines🇵🇭, with passion and eye for good UI/UX design. Currently building Bitcoin mining products and services at Luxor.`}</p>
        </div>

        <div className='z-10 flex mt-4 gap-x-4'>
          {[
            {
              href: 'https://www.linkedin.com/in/monquindoza/',
              label: 'LinkedIn',
            },
            {
              href: 'https://github.com/monoppa',
              label: 'Github',
            },
          ].map(({ href, label }) => (
            <a
              key={href}
              target='__blank'
              rel='noreferrer noopener'
              href={href}
              className='text-lg underline'
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* blur-BG */}
      <div
        className='absolute inset-0'
        style={{
          backgroundColor: 'rgba(212,212,212,0.3)',
          backdropFilter: 'blur(30px)',
        }}
      ></div>
      {/* blobs */}
      <Blob1 />
      <Blob2 />
    </section>
  )
}

export default MeCard
