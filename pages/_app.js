import Head from 'next/head'
import '../styles/index.scss'

import { Navbar } from '../src/components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ fontFamily: 'Cabin' }}>
      <Head>
        <title>Lucas Santos - Web Development</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
