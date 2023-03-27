import * as React from 'react'

const MusicIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    viewBox='0 0 24 24'
    strokeWidth={2}
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M0 0h24v24H0z' stroke='none' />
    <path d='M3 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0M13 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0' />
    <path d='M9 17V4h10v13M9 8h10' />
  </svg>
)

export default MusicIcon
