import React from 'react'
import classNames from 'classnames'

interface CardProps {
  name: string
  legendary?: boolean
  image?: string
  children?: React.ReactNode
  className?: string
  headerClasses?: string
}

export const Card: React.FC<CardProps> = ({ name, legendary = false, image, children, className, headerClasses }) => {
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
      <div className={classNames('relative p-2', headerClasses)}>
        <div className="font-bold">{name}</div>
        {legendary && <div className="text-legendary">Legendary</div>}
      </div>
      {children}
    </div>
  )
}
