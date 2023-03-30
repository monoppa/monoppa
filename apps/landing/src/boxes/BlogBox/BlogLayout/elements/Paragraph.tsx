import React, { ReactNode } from 'react'

type ParagraphProps = {
  children: ReactNode
}

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className='mb-6 text-lg mt-14 text-neutral-900'>{children}</p>
}

export default Paragraph
