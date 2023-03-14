import {
  Text,
  Box,
  Flex,
  Heading,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import Image from "next/image";
import Head from "next/head";

import Layout from "components/layout";
import ButtonContactWithUs from "components/general/buttons/buttonContactWithUs";
import { OnlineLogoWhite } from "components/icons/onlineLogoWhite";

import { useState, useEffect } from "react";

export default function ServicePage(props) {
  const { title, mainText, offerText, howText, whatText, image } = props;
  const [imageUrl, setImageUrl] = useState(`./img/services/services-web.png`);
  const [imageAlt, setImageAlt] = useState(`services-default`);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setImageUrl(`./img/services/services-${image}.png`);
    setImageAlt(`services-${image}`)
  }, [image]);

  return (
    <Layout isService={true}>
      <Head>
        <title>ON LINE | Agencia de Marketing Digital Barcelona</title>
        <meta
          name="description"
          content="ON LINE es una Agencia de Marketing Digital basada en Barcelona que ofrece todo lo que necesitas: posicionamiento SEO, SEM, Desarrollo Web"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isMobile ? (
        <>
          <Flex justify="center" alignItems="center" bg="brand.beige">
            <VStack
              mt={["36px", null, null, null, null, null]}
              mb={[null, null, null, null, null, null]}
              w={[320, null, null, null, null, null]}
              h={[396, null, null, null, null, null]}
              align="stretch"
              spacing="0px"
            >
              <Box
                h={["56px", null, null, null, null, null]}
                mb={["16px", null, null, null, null, null]}
              >
                <Heading
                  as="h5"
                  fontSize={["24px", null, null, null, null, null]}
                  fontWeight="bold"
                  color="brand.red"
                >
                  Servicios
                </Heading>
                <Heading
                  as="h2"
                  fontSize={["32px", null, null, null, null, null]}
                >
                  {title}
                </Heading>
              </Box>
              <Box
                h={[140, null, null, null, null, null]}
                boxShadow="0px 4px 50px rgba(0, 0, 0, 0.1)"
                position="relative"
                borderRadius="9px 9px 0px 0px"
              >
                <Image
                  layout="fill"
                  src={imageUrl}
                  alt={imageAlt}
                ></Image>
              </Box>
              <Box
                h={[152, null, null, null, null, null]}
                display="flex"
                flexDirection="column"
                alignItems="center"
                align="center"
                bg="brand.white"
                borderRadius="0px 0px 9px 9px"
                boxShadow="0px 4px 50px rgba(0, 0, 0, 0.1)"
              >
                <Box w={[256, null, null, null, null, null]}>
                  <Heading
                    as="h3"
                    fontSize={["16px", null, null, null, null, null]}
                    fontWeight="light"
                    lineHeight="24px"
                    mt={["8px", null, null, null, null, null]}
                    mb={["8px", null, null, null, null, null]}
                  >
                    {mainText}
                  </Heading>
                  <ButtonContactWithUs buttonText="Contacta con nosotros" />
                </Box>
              </Box>
            </VStack>
          </Flex>
          <Flex justify="center" alignItems="center" bg="brand.white">
            <VStack
              mt={["32px", null, null, null, null, null]}
              w={[320, null, null, null, null, null]}
              h={[718, null, null, null, null, null]}
              align="stretch"
              spacing="0px"
            >
              <Box
                h={["136px", null, null, null, null, null]}
                display="flex"
                justifyContent="center"
              >
                <OnlineLogoWhite />
              </Box>
              <Box h={[564, null, null, null, null, null]}>
                <Text
                  color="brand.red"
                  fontSize={["16px", null, null, null, null, null]}
                  fontWeight="semibold"
                  mb={["8px", null, null, null, null, null]}
                >
                  1. Qué ofrecemos
                </Text>
                <Text
                  mb={["16px", null, null, null, null, null]}
                  fontSize={["16px", null, null, null, null, null]}
                  fontWeight="light"
                  lineHeight="28px"
                >
                  {offerText}
                </Text>
                <Text
                  color="brand.red"
                  fontSize={["16px", null, null, null, null, null]}
                  fontWeight="semibold"
                  mb={["8px", null, null, null, null, null]}
                >
                  2. Cómo lo hacemos
                </Text>
                <Text
                  mb={["16px", null, null, null, null, null]}
                  fontSize={["16px", null, null, null, null, null]}
                  fontWeight="light"
                  lineHeight="28px"
                >
                  {howText}
                </Text>
                <Text
                  color="brand.red"
                  fontSize={["16px", null, null, null, null, null]}
                  fontWeight="semibold"
                  mb={["8px", null, null, null, null, null]}
                >
                  3. Siempre a la última
                </Text>
                <Text
                  fontSize={["16px", null, null, null, null, null]}
                  fontWeight="light"
                  lineHeight="28px"
                >
                  {whatText}
                </Text>
                <Box
                  mt={["32px", null, null, null, null, null]}
                  display="flex"
                  justifyContent="center"
                >
                  <ButtonContactWithUs buttonText="Contacta con nosotros" />
                </Box>
              </Box>
            </VStack>
          </Flex>
        </>
      ) : (
        <></>
      )}
    </Layout>
  );
}
