import React from 'react'
import { Container } from '@/atoms/Container'
import items from '@/data/items.json'
import { Item } from '@/molecules/ItemCard'
import { ItemsGrid } from '@/organisms/ItemsGrid'

export const ItemsTemplate: React.FC = () => {
  return (
    <div>
      <header>
        <h1 className="text-xl text-center">Items of the Universe!</h1>
      </header>
      <main>
        <Container>
          <ItemsGrid items={items as Item[]} />
        </Container>
      </main>
    </div>
  )
}
