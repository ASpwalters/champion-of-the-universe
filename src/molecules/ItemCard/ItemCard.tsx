import React from 'react'
import { Card } from '@/atoms/Card'
import { RangedIcon } from '@/icons/RangedIcon'
import { ShieldIcon } from '@/icons/ShieldIcon'
import { StarIcon } from '@/icons/StarIcon'
import { SwordIcon } from '@/icons/SwordIcon'
import classNames from "classnames";

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
  image,
}) => {
  return (
    <Card name={name} legendary={legendary} className="text-white">
      <div className="relative p-2 bg-gray-800">
        <div className="font-bold">{name}</div>
        {legendary && <div className="text-legendary">Legendary</div>}
      </div>
      <div className="w-full h-full flex flex-col relative">
        <div className="h-full w-full flex flex-col bg-gray-800">
          <div className="mt-auto overflow-y-auto max-h-full p-4 w-full text-gray-50">
            <ul>
              {abilities.map((ability) => (
                <li key={ability}>{ability}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="h-1/4 flex flex-col bg-magic text-black relative text-center shrink-0">
          <div className="absolute top-2 left-2 bottom-2 right-2">
            <StarIcon color="white" width={null} height={null} />
          </div>
          <div className="relative w-full my-auto">{magic}</div>
        </div>
        <div className="h-1/4 w-full flex">
          <div className="w-1/2 text-xl relative bg-attack">
            {damageType === 'melee' && <SwordIcon color="black" size={null} className="rotate-90" />}
            {damageType === 'ranged' && <RangedIcon color="black" size={null} />}
            <div className="top-0 left-0 bottom-0 right-0 absolute flex flex-col">
              <div className="h-fit w-fit m-auto leading-none">{attack}</div>
            </div>
          </div>
          <div className="w-1/2 text-xl relative bg-defense">
            <ShieldIcon color="black" size={null} />
            <div className="flex flex-col top-0 left-0 bottom-0 right-0 absolute">
              <div className="h-fit w-fit m-auto leading-none">{defense}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
