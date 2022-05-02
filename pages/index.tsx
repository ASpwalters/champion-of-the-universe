import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '@/atoms/Container'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Champion of the Universe!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center">
        <Container>
          <h1 className="text-xl text-center leading-none">
            Champion
            <br /> of the Universe!
          </h1>
          <p className="text-lg text-gray-500">An original game by Joseph McKenna</p>
        </Container>
      </main>
    </div>
  )
}

export default Home
