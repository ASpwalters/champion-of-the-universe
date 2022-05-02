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
        'rounded border-8 bg-gray-50 relative aspect-card min-w-[250px] min-h-[350px] bg-no-repeat bg-cover bg-center print:h-[3.5in] print:w-[2.5in] break-inside-avoid print:inline-block print:mx-4 print:my-1',
        legendary ? 'border-legendary' : 'border-gray-900',
        className,
      )}
      style={{ backgroundImage: image ? `url(${image})` : undefined }}
    >
      {children}
    </div>
  )
}
