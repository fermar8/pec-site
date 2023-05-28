import {
  Text,
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

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
          <link rel="icon" type="image/svg+xml" href={`${process.env.basePath}/img/favicon.svg`} />
          <link rel="icon" type="image/png" href={`${process.env.basePath}/img/favicon.png`} />
        </Head>
        <VStack minHeight="400px" justifyContent="center">
          <Image
            height={140}
            width={140}
            src={`${process.env.basePath}/img/404error.png`}
            alt="error-image"
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
          <link rel="icon" type="image/svg+xml" href={`${process.env.basePath}/img/favicon.svg`} />
          <link rel="icon" type="image/png" href={`${process.env.basePath}/img/favicon.png`} />
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
            ></Image>
          </HStack>
        </Flex>
      </Layout>
    );
  }
}
