import React from 'react'
import { Container } from '@/atoms/Container'
import { PrintButton } from '@/molecules/PrintButton'
import { HeroesGrid } from '@/organisms/HeroesGrid'
import { Hero } from '@/services/HeroesService'

interface HeroesTemplateProps {
  heroes: Hero[]
}

export const HeroesTemplate: React.FC<HeroesTemplateProps> = ({ heroes }) => {
  return (
    <div>
      <header className="print:hidden">
        <Container>
          <h1 className="text-xl text-center leading-none">Heroes of the Universe!</h1>
          <PrintButton />
        </Container>
      </header>
      <main>
        <Container>
          <HeroesGrid heroes={heroes} />
        </Container>
      </main>
    </div>
  )
}
