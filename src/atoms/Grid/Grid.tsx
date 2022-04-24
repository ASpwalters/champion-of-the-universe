import React from 'react'

interface GridProps {
  children: React.ReactNode
}

export const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 sm:px-0 gap-4 justify-center">
      {children}
    </div>
  )
}
