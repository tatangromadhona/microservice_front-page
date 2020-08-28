import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>Online Course</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Ini Halaman Utama</h1>
        <Link href="/random"><a>Ini Ke Halaman Random</a></Link>
      </main>
    </div>
  )
}
