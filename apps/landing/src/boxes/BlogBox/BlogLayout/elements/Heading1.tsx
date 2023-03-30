import React, { ReactNode } from 'react'

type Heading1Props = {
  children: ReactNode
}

const Heading1 = ({ children }: Heading1Props) => {
  return (
    <h1 className='mb-6 text-5xl font-semibold mt-14 text-neutral-900'>
      {children}
    </h1>
  )
}

export default Heading1
