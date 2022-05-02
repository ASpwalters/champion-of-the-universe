import React from 'react'

export const PrintButton: React.FC = () => {
  return (
    <div
      className="mx-auto cursor-pointer rounded p-4 border border-gray-700 w-fit mb-4"
      onClick={() => window.print()}
    >
      Print me
    </div>
  )
}
