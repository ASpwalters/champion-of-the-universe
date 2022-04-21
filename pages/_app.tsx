import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StandardLayout } from '@/layouts/StandardLayout'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultLayout = (page: any) => {
  return <StandardLayout>{page}</StandardLayout>
}

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const getLayout = Component.getLayout || defaultLayout

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
