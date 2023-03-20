import Layout from "components/layout";

import DOMPurify from "isomorphic-dompurify";

import styles from "../../styles/Blog.module.scss";

import { Box, Flex, Text, Image, Heading, VStack } from "@chakra-ui/react";

import Head from "next/head";

import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/posts";

export default function Post({ post, site }) {
  return (
    <div>Blog detail</div>
    /*
    <Layout>
      <Flex
        justify="center"
        flexDirection="column"
        alignItems="center"
        bg="brand.beige"
      >
        <Head>
          <title>{post.title}</title>
          <meta name="description" content={`Read more about ${post.title}`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <VStack w="1200px">
          <Heading as="h1" mb="24px">
            {post.title}
          </Heading>

          <div
            className={styles.singlePost}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.content),
            }}
          />
        </VStack>
      </Flex>
    </Layout>
    */
  );
}

/*

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
*/
