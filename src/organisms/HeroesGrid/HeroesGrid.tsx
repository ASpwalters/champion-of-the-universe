import React from 'react'
import { Grid } from '@/atoms/Grid'
import { HeroCard } from '@/molecules/HeroCard'
import { Hero } from '@/services/HeroesService'

interface HeroesGridProps {
  heroes: Hero[]
}

export const HeroesGrid: React.FC<HeroesGridProps> = ({ heroes }) => {
  return (
    <Grid className="print:block">
      {heroes.map((hero) => (
        <HeroCard key={hero.name} {...hero} />
      ))}
    </Grid>
  )
}
