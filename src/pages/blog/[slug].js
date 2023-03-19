import DOMPurify from 'isomorphic-dompurify';

import { Box, Flex, Text, Image, Heading, VStack } from "@chakra-ui/react";

import Head from "next/head";
import Link from "next/link";

import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/posts";

export default function Post({ post, site }) {
    console.log('content', post.content);
  return (
    <Flex justify="center" alignItems="center" bg="brand.beige">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`Read more about ${post.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <Heading as="h1" mb="24px">
          {post.title}
        </Heading>
   
        <div
          dangerouslySetInnerHTML={{
            __html:  DOMPurify.sanitize(post.content),
          }}
        />

        <p>
          <Link href="/">
            <a>&lt; Back to home</a>
          </Link>
        </p>
      
    </Flex>
  );
}

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: true,
  };
};
