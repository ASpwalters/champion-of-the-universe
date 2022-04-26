import { gql } from '@apollo/client'
import { Document } from '@contentful/rich-text-types'
import { client } from '@/services/ApolloClient'

const GetEquipments = gql`
  query getEquipments {
    equipmentCollection(order: [name_ASC]) {
      items {
        name
        ability
        image {
          url
        }
        attack
        defense
        legendary
        damageType
        magic {
          json
        }
      }
    }
  }
`

export interface Equipment {
  name: string
  ability: string[]
  image?: {
    url?: string
  }
  attack: number
  defense: number
  legendary: boolean
  damageType: 'melee' | 'ranged'
  magic: {
    json: Document
  }
}

interface GetEquipmentsResponse {
  equipments: Equipment[]
}

export const getEquipments = async (): Promise<GetEquipmentsResponse> => {
  const { data } = await client.query({ query: GetEquipments })

  return {
    equipments: data?.equipmentCollection?.items,
  }
}
