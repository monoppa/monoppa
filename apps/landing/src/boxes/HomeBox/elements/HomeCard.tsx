import React, { ReactNode } from 'react'
import cx from 'classnames'

type HomeCardProps = {
  variant: keyof typeof cardVariants
  children: ReactNode
}

const cardVariants = {
  torabel: 'bg-blue-600',
  luxor: 'bg-[#000000] py-8',
}

const HomeCard = (props: HomeCardProps) => {
  const { variant, children } = props

  return (
    <div
      className={cx(
        'rounded-lg overflow-hidden relative',
        cardVariants[variant]
      )}
    >
      {children}
    </div>
  )
}

export default HomeCard
