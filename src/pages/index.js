import { Box } from "@chakra-ui/react";

import Head from "next/head";
import Layout from "../components/layout";

import Intro from "../components/home/intro";
import Services from "../components/home/services";
import About from "../components/home/about";
import Blog from "../components/home/blog";

export default function Home({ page }) {
  const { title, description } = page;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Services />
      <About />
      {/*<Blog /> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const page = {
    title: "Home title",
    description: "Home description",
  };

  return {
    props: {
      page,
    },
  };
}
