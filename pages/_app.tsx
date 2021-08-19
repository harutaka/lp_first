import Head from "next/head"
import '../styles/globals.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
