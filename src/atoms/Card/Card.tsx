import React from 'react'
import classNames from 'classnames'

interface CardProps {
  legendary?: boolean
  image?: string
  children?: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ legendary = false, image, children, className }) => {
  return (
    <div
      className={classNames(
        'rounded border-8 bg-gray-50 relative aspect-card bg-no-repeat bg-cover bg-center',
        legendary ? 'border-legendary' : 'border-gray-900',
        className,
      )}
      style={{ backgroundImage: image ? `url(${image})` : undefined }}
    >
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-900 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-b from-transparent to-gray-900" />
      {children}
    </div>
  )
}
