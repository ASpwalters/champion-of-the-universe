import { gql } from '@apollo/client'
import { client } from '@/services/ApolloClient'

const GetHeroes = gql`
  query getHeroes {
    heroCollection(order: [name_ASC]) {
      items {
        name
        ability
        image {
          url
        }
        maxHealth
      }
    }
  }
`

export interface Hero {
  name: string
  maxHealth: number
  ability: string[]
  image?: {
    url?: string
  }
}

interface GetHeroesResponse {
  heroes: Hero[]
}

export const getHeroes = async (): Promise<GetHeroesResponse> => {
  const { data } = await client.query({ query: GetHeroes })

  return {
    heroes: data?.heroCollection?.items,
  }
}
