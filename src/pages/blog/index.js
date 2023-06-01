import Thumbnail from '../../components/blog/thumbnail';
import Link from 'next/link'
import { getAllPosts } from "../../utils/mdxUtils";


// component render function
const Blog = ({ posts }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Technical articles</h1>

      <div className="space-y-12">
        {posts.map((post) => (
          <div key={post.slug}>
            <div className="mb-4">
              <Thumbnail
                slug={post.slug}
                title={post.title}
                src={post.thumbnail}
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">
              <Link href={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </h2>

            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog

// get posts from serverside at build time
export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'slug',
    'date',
    'description',
    'thumbnail'
  ]);

  // retunr the posts props
  return { props: { posts } }
}
