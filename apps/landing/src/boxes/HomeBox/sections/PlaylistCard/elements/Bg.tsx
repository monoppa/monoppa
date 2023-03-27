import React from 'react'

const Bg = () => {
  return (
    <div
      className='bg-[rgba(0,0,0,0.05)] absolute inset-0 z-0 rounded-md block'
      style={{ backdropFilter: 'blur(3px)' }}
    ></div>
  )
}

export default Bg
