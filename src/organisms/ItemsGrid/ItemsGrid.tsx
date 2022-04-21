import React from 'react'
import { Grid } from '@/atoms/Grid'
import { HeroCard, Hero } from '@/molecules/HeroCard'

interface HeroesGridProps {
  heroes: Hero[]
}

export const HeroesGrid: React.FC<HeroesGridProps> = ({ heroes }) => {
  return (
    <Grid>
      {heroes.map((hero) => (
        <HeroCard key={hero.name} {...hero} />
      ))}
    </Grid>
  )
}
