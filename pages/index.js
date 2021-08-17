import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../component/header'
import Mainvisual from '../component/mainvisual'
import About from '../component/about'
import Bicycle from '../component/bicycle'
import Footer from '../component/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="テキストテキストテキストテキストテキストテキストテキストテキスト" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Mainvisual />
      <About />
      <Bicycle />

      <Footer />
    </>
  )
}
