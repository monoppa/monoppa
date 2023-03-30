import React from 'react'
import cx from 'classnames'

type SideBlockProps = {
  variant: keyof typeof variants
}

const variants = {
  left: 'rounded-l-none rounded-r-md',
  right: 'rounded-l-md rounded-r-none',
}

const SideBlock = (props: SideBlockProps) => {
  const { variant } = props

  return (
    <div
      className={cx('bg-[#141516] w-1/12 h-52', variants[variant], '')}
    ></div>
  )
}

export default SideBlock
