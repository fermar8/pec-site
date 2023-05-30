import {
  Text,
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/layout"), {
  ssr: false,
});

import Head from "next/head";
import Image from "next/image";

export default function Custom404() {
  const [isMobileOrTablet] = useMediaQuery("(max-width: 1280px)");

  if (isMobileOrTablet) {
    return (
      <Layout>
        <Head>
          <title>ON LINE | Quiénes Somos</title>
          <meta
            name="description"
            content="ON LINE es una Agencia de Marketing Digital basada en Barcelona que ofrece todo lo que necesitas: posicionamiento SEO, SEM, Desarrollo Web, Diseño Web"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <VStack minHeight="400px" justifyContent="center">
          <Image
            height={140}
            width={140}
            src={`${process.env.basePath}/img/404error.png`}
            alt="error-image"
            placeholder="blur"
          ></Image>
          <Box mb="40px">
            <Heading
              as="h1"
              fontSize={["24px", null, null, null, null, null]}
              fontWeight="bold"
              color="brand.main"
              lineHeight="1"
            >
              Error
            </Heading>
            <Heading
              as="h2"
              fontSize={["36px", null, null, null, null, null]}
              fontWeight="bold"
              color="brand.text"
              lineHeight="1"
            >
              404
            </Heading>
          </Box>
          <Text maxWidth="320px" textAlign="center">
            Oops! Parece que te has desviado de la ruta correcta.
          </Text>
        </VStack>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Head>
          <title>ON LINE | Quiénes Somos</title>
          <meta
            name="description"
            content="ON LINE es una Agencia de Marketing Digital basada en Barcelona que ofrece todo lo que necesitas: posicionamiento SEO, SEM, Desarrollo Web, Diseño Web"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Flex justify="center">
          <HStack
            minHeight="400px"
            width="720px"
            justifyContent="space-around"
            alignSelf="center"
          >
            <Box mb="40px">
              <Heading
                as="h1"
                fontSize={["24px", null, null, null, null, null]}
                fontWeight="bold"
                color="brand.main"
                lineHeight="1"
              >
                Error
              </Heading>
              <Heading
                as="h2"
                fontSize={["36px", null, null, null, null, null]}
                fontWeight="bold"
                color="brand.text"
                lineHeight="1"
              >
                404
              </Heading>

              <Text maxWidth="320px" textAlign="center">
                Oops! Parece que te has desviado de la ruta correcta.
              </Text>
            </Box>
            <Image
              height={140}
              width={140}
              src={`${process.env.basePath}/img/404error.png`}
              alt="error-image"
              placeholder="blur"
            ></Image>
          </HStack>
        </Flex>
      </Layout>
    );
  }
}
