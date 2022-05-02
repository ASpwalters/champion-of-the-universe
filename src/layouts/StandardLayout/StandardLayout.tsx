import React from 'react'
import { ApolloProvider } from '@apollo/client'
import Link from 'next/link'
import { client } from '@/services/ApolloClient'

interface StandardLayoutProps {
  children: React.ReactNode
}

export const StandardLayout: React.FC<StandardLayoutProps> = ({ children }) => {
  return (
    <div>
      <nav className="print:hidden">
        <ul className="flex space-x-4 justify-center my-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/heroes">Heroes</Link>
          </li>
          <li>
            <Link href="/items">Items</Link>
          </li>
          <li>
            <Link href="/rules">Rules</Link>
          </li>
        </ul>
      </nav>
      <ApolloProvider client={client}>{children}</ApolloProvider>
      <footer className="mt-8 py-8 print:hidden" />
    </div>
  )
}
