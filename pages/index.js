import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ManualHeader from '../components/ManualHeader'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Loterry</title>
        <meta name="description" content="smart contract" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ManualHeader></ManualHeader>
      Hello World!
    </div>
  )
}
