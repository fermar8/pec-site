import Head from 'next/head'

import styles from '../styles/Home.module.scss'

export default function Home({ page }) {
  const { title, description } = page;
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        HOME
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const page = {
    title: 'Home title',
    description: 'Home description'
  }

  return {
    props: {
      page,
    }
  }
}
