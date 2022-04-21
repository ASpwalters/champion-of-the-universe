import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '@/atoms/Container'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Champions of the Universe!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center">
        <Container>
          <h1 className="text-xl text-center">Champions of the Universe!</h1>
          <p className="text-lg">An original game by Joseph McKenna</p>
        </Container>
      </main>
    </div>
  )
}

export default Home
