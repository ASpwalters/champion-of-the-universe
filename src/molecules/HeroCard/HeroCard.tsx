import React from 'react'

interface HeroCardProps {
  name: string
  maxHealth: number
  ability: string
  image?: string
}

export const HeroCard: React.FC<HeroCardProps> = ({ name, maxHealth, ability, image }) => {
  return (
    <div className="p-4 rounded border border-gray-500 bg-gray-50">
      <img src={image ? image : `https://via.placeholder.com/200x200?text=${name}`} />
      <div>{name}</div>

      {maxHealth}
      {ability}
    </div>
  )
}
