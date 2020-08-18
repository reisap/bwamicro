import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    < div className = "container mx-auto mt4" >
      <Head>
        <title>BWAMICRO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1>Saya halaman utama</h1>
        </div>
      </main>

    </div>
  )
}
