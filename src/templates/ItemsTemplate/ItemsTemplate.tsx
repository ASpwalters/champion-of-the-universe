import React from 'react'
import { Container } from '@/atoms/Container'
import { PrintButton } from '@/molecules/PrintButton'
import { ItemsGrid } from '@/organisms/ItemsGrid'
import { Equipment } from '@/services/EquipmentsService'

interface ItemsTemplateProps {
  items: Equipment[]
}

export const ItemsTemplate: React.FC<ItemsTemplateProps> = ({ items }) => {
  return (
    <div>
      <header className="print:hidden">
        <Container>
          <h1 className="text-xl text-center leading-none">Items of the Universe!</h1>
          <PrintButton />
        </Container>
      </header>
      <main>
        <Container>
          <ItemsGrid items={items} />
        </Container>
      </main>
    </div>
  )
}
