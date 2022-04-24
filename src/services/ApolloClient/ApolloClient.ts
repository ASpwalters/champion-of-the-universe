import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client'

const createClient = ({ baseUrl }: BaseClientConstructor) => {
  const backend = createHttpLink({
    uri: `${baseUrl}`,
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_KEY}` },
  })
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([backend]),
    cache: new InMemoryCache(),
  })
}

interface BaseClientConstructor {
  baseUrl: string
}

export const client = createClient({
  baseUrl: process.env.NEXT_PUBLIC_CMS as string,
})
