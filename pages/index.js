import Head from 'next/head';
import Link from 'next/link';

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
          <Link href="/random">
              <a>Bring me to random fetch page</a>
          </Link>
        </div>
      </main>

    </div>
  )
}
