import React from 'react'

interface UnorderedListProps {
  children: React.ReactNode
}

export const UnorderedList: React.FC<UnorderedListProps> = ({ children }) => {
  return <ul className="pl-4 ml-4 list-disc">{children}</ul>
}
