import Head from 'next/head'
import Link from 'next/link'

import { getAllPostsFromWordPress } from '../../lib/posts';

export default function Blog({ allPosts }) {
  return (
    <div>
      <Head>
        <title>aTitle</title>
        <meta name="description" content="aContent"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>BLOG</h1>

        <p>Nuestro blog</p>

        <ul >
          {allPosts && allPosts.length > 0 && allPosts.map(post => {
            return (
              <li key={post.node.slug}>
                <Link href={`/blog/${post.node.slug}`}>
                  <a>
                    <h3 dangerouslySetInnerHTML={{
                      __html: post.node.title
                    }} />
                  </a>
                </Link>
                <div dangerouslySetInnerHTML={{
                  __html: post.node.excerpt
                }} />
              </li>
            );
          })}

          {!allPosts || allPosts.length === 0 && (
            <li>
              <p>
                Oops, no posts found!
              </p>
            </li>
          )}
        </ul>
      </main>
    </div>
  )
}


export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsFromWordPress(preview)

  return {
    props: { allPosts: allPosts.edges, preview },
    revalidate: 10,
  }
}

