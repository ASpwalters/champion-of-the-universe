import React from 'react'
import { Grid } from '@/atoms/Grid'
import { ItemCard, Item } from '@/molecules/ItemCard'

interface HeroesGridProps {
  items: Item[]
}

export const ItemsGrid: React.FC<HeroesGridProps> = ({ items }) => {
  return (
    <Grid>
      {items.map((item) => (
        <ItemCard key={item.name} {...item} />
      ))}
    </Grid>
  )
}
