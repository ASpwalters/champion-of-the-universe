import React from 'react'
import { Card } from '@/atoms/Card'
import { HeartIcon } from '@/icons/HeartIcon'

export interface Hero {
  name: string
  maxHealth: number
  abilities: string[]
  image?: string
}

export const HeroCard: React.FC<Hero> = ({ name, maxHealth, abilities, image }) => {
  return (
    <Card image={image} className="text-white">
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-900 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-b from-transparent to-gray-900" />
      <div className="absolute top-2 left-2 bottom-2 right-2">
        <div className="flex relative text-lg">
          <div className="font-bold">{name}</div>
          <div className="ml-auto flex items-center">
            {maxHealth}
            <HeartIcon height={42} width={48} color1="black" color2="red" className="ml-1" />
          </div>
        </div>
        <div className="absolute bottom-0 overflow-y-auto max-h-2/3 p-4 w-full text-gray-50">
          {abilities.map((ability) => (
            <div key={ability}>{ability}</div>
          ))}
        </div>
      </div>
    </Card>
  )
}
