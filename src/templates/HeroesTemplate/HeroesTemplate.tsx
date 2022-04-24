import React from 'react'
import { Container } from '@/atoms/Container'
import { HeroesGrid } from '@/organisms/HeroesGrid'
import { Hero } from '@/services/HeroesService'

interface HeroesTemplateProps {
  heroes: Hero[]
}

export const HeroesTemplate: React.FC<HeroesTemplateProps> = ({ heroes }) => {
  return (
    <div>
      <header>
        <Container>
          <h1 className="text-xl text-center">Heroes of the Universe!</h1>
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
