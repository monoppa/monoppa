import React, { ReactNode } from 'react'
import cx from 'classnames'

type CardVariantKeys = keyof typeof cardVariants

type HomeCardProps = {
  variant: CardVariantKeys
  children: ReactNode
}

const cardVariants = {
  torabel: {
    classes: 'bg-blue-600',
    style: {},
  },
  luxor: {
    classes: 'bg-[#000000] py-8',
    style: {},
  },
  latestPost: {
    classes: 'bg-neutral-900',
    style: {},
  },
  playlist: {
    classes: 'bg-cover bg-center rounded-md relative',
    style: {},
  },
  stats: {
    classes: 'bg-neutral-900',
    style: {},
  },
}

const HomeCard = (props: HomeCardProps) => {
  const { variant, children } = props

  return (
    <div
      className={cx(
        'rounded-lg overflow-hidden relative',
        cardVariants[variant].classes
      )}
      style={cardVariants[variant].style}
    >
      {children}
    </div>
  )
}

export default HomeCard
