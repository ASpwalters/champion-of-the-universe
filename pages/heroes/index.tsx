import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { getHeroes, Hero } from '@/services/HeroesService'
import { HeroesTemplate } from '@/templates/HeroesTemplate'

interface HeroesPageProps {
  heroes: Hero[]
}

export const HeroesPage: NextPage<HeroesPageProps> = ({ heroes }) => {
  return <HeroesTemplate heroes={heroes} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { heroes } = await getHeroes()

  return {
    props: {
      heroes,
    },
    revalidate: 60 * 60,
  }
}

export default HeroesPage
