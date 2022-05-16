import React from 'react'
import { Card } from '@/atoms/Card'
import { HeartIcon } from '@/icons/HeartIcon'
import { Hero } from '@/services/HeroesService'

export const HeroCard: React.FC<Hero> = ({ name, maxHealth, ability, image }) => {
  return (
    <Card image={image?.url} className="text-white bg-gray-700">
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-900 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-b from-transparent to-gray-900" />
      <div className="absolute top-2 left-2 bottom-2 right-2">
        <div className="flex relative text-base">
          <div className="font-bold">{name}</div>
          <div className="ml-auto flex items-center">
            {maxHealth}
            <HeartIcon height={35} width={40} color1="black" color2="red" className="ml-1" />
          </div>
        </div>
        <div className="absolute bottom-0 overflow-y-auto max-h-2/3 p-4 w-full text-gray-50 print:max-h-full">
          {ability?.map((a) => (
            <div key={a}>{a}</div>
          ))}
        </div>
      </div>
    </Card>
  )
}
