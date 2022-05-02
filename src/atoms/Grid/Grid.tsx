import React from 'react'
import classNames from 'classnames'

interface GridProps {
  children: React.ReactNode
  className?: string
}

export const Grid: React.FC<GridProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 sm:px-0 gap-4 justify-center',
        className,
      )}
    >
      {children}
    </div>
  )
}
