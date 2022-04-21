import React from 'react'
import { Container } from '@/atoms/Container'
import heroes from '@/data/heroes.json'
import { HeroesGrid } from '@/organisms/HeroesGrid/HeroesGrid'

export const HeroesTemplate: React.FC = () => {
  return (
    <div>
      <header>
        <h1 className="text-xl text-center">Heroes of the Universe!</h1>
      </header>
      <main>
        <Container>
          <HeroesGrid heroes={heroes} />
        </Container>
      </main>
    </div>
  )
}
