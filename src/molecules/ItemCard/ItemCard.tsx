import React from 'react'
import { Card } from '@/atoms/Card'
import { RangedIcon } from '@/icons/RangedIcon'
import { ShieldIcon } from '@/icons/ShieldIcon'
import { StarIcon } from '@/icons/StarIcon'
import { SwordIcon } from '@/icons/SwordIcon'

export interface Item {
  name: string
  attack: number
  defense: number
  magic: string
  legendary?: boolean
  image?: string
  damageType?: 'ranged' | 'melee'
  abilities?: string[]
}

export const ItemCard: React.FC<Item> = ({
  name,
  attack,
  defense,
  magic,
  legendary = false,
  damageType = 'melee',
  abilities = [],
}) => {
  return (
    <Card legendary={legendary} className="text-white bg-gray-700">
      <div className="h-1/8 relative p-2 bg-gray-700">
        <div className="font-bold">{name}</div>
        {legendary && <div className="text-legendary">Legendary</div>}
      </div>
      <div className="h-3/8 w-full flex flex-col bg-gray-700 mt-auto">
        <div className="mt-auto overflow-y-auto p-4 w-full text-gray-50">
          <ul>
            {abilities.map((ability) => (
              <li key={ability}>{ability}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-1/4 min-h-1/4 flex-grow-0 w-full bg-magic text-black relative text-center flex">
        <StarIcon className="mx-auto" color="white" width="50%" height={null} />
        <div className="absolute top-2 left-2 bottom-2 right-2 flex">
          <div className="relative w-full my-auto">{magic}</div>
        </div>
      </div>
      <div className="h-1/4 max-h-1/4 w-full flex shrink-0">
        <div className="w-1/2 text-[6rem] relative bg-gray-700">
          {damageType === 'melee' && <SwordIcon color="attack" size={null} className="rotate-90" />}
          {damageType === 'ranged' && <RangedIcon color="attack" size={null} />}
          <div className="top-0 left-0 bottom-0 right-0 absolute flex flex-col">
            <div className="h-fit w-fit m-auto leading-none">{attack}</div>
          </div>
        </div>
        <div className="w-1/2 text-[6rem] relative bg-gray-700">
          <ShieldIcon color="defense" size={null} />
          <div className="flex flex-col top-0 left-0 bottom-0 right-0 absolute">
            <div className="h-fit w-fit m-auto leading-none">{defense}</div>
          </div>
        </div>
      </div>
    </Card>
  )
}
