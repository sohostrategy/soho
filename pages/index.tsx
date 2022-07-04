import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Soho Strategy</title>
        <meta name="description" content="SOHO is a high-performance, data-driven product studio based in London, England." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SOHO is not currently accepting new clients.
        </h1>

        <p className={styles.description}>
          If you are a current client looking for support, email
          <code className={styles.code}>support@sohostrategy.com</code>
        </p>

      </main>

      <footer className={styles.footer}>
        Copyright &copy; Soho Strategy
      </footer>
    </div>
  )
}

export default Home
