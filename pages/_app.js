import Head from 'next/head'
import '../styles/index.scss'

import { Navbar } from '../src/components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lucas Santos - Web Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
