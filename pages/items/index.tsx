import { GetStaticProps, NextPage } from 'next'
import { Equipment, getEquipments } from '@/services/EquipmentsService'
import { ItemsTemplate } from '@/templates/ItemsTemplate'

interface ItemsPageProps {
  items: Equipment[]
}

export const EquipmentsPage: NextPage<ItemsPageProps> = ({ items }) => {
  return <ItemsTemplate items={items} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { equipments } = await getEquipments()

  return {
    props: {
      items: equipments,
    },
  }
}

export default EquipmentsPage
