import Head from 'next/head'
import Layout from "../components/layout";
import styles from '../styles/Home.module.scss'

export default function Home({ page }) {
  const { title, description } = page;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        HOME
      </main>
    </Layout>
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
