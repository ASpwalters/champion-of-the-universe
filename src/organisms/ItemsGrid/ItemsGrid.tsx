import React from 'react'
import { Grid } from '@/atoms/Grid'
import { ItemCard } from '@/molecules/ItemCard'
import { Equipment } from '@/services/EquipmentsService'

interface ItemsGridProps {
  items: Equipment[]
}

export const ItemsGrid: React.FC<ItemsGridProps> = ({ items }) => {
  return (
    <Grid>
      {items.map((item) => (
        <ItemCard key={item.name} {...item} />
      ))}
    </Grid>
  )
}
