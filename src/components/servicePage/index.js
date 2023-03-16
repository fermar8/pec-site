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
  const { title, subtitle, subtitle2, subtitle3, mainText, subText, subText2, subText3, image } = props;
  const [imageUrl, setImageUrl] = useState(
    `${process.env.basePath}/img/services/services-web.png`
  );
  const [imageAlt, setImageAlt] = useState(`services-default`);

  useEffect(() => {
    setImageUrl(`${process.env.basePath}/img/services/services-${image}.png`);
    setImageAlt(`services-${image}`);
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
      <>
        <Flex
          justify="center"
          bg="brand.beige"
          h={[420, null, 636, null, 694, null]}
        >
          <VStack
            mt={["32px", null, "40px", null, "80px", null]}
            w={[320, null, 728, null, 1128, null]}
            h={[396, null, 516, null, 533, null]}
            align="stretch"
            spacing="0px"
          >
            <Box
              h={["56px", null, "56px", null, 74, null]}
              mb={["24px", null, "32px", null, "32px", null]}
            >
              <Heading
                as="h5"
                fontSize={["24px", null, "24px", null, "24px", null]}
                fontWeight="bold"
                color="brand.red"
              >
                Servicios
              </Heading>
              <Heading
                as="h2"
                fontSize={["32px", null, "32px", null, "36px", null]}
              >
                {title}
              </Heading>
            </Box>
            <Box
              h={[140, null, 280, null, 280, null]}
              boxShadow="0px 4px 50px rgba(0, 0, 0, 0.1)"
              position="relative"
              borderRadius="9px 9px 0px 0px"
            >
              <Image layout="fill" src={imageUrl} alt={imageAlt}></Image>
            </Box>
            <Box
              h={[152, null, 164, null, 164, null]}
              display="flex"
              flexDirection="column"
              alignItems="center"
              align="center"
              bg="brand.white"
              borderRadius="0px 0px 9px 9px"
              boxShadow="0px 4px 50px rgba(0, 0, 0, 0.1)"
            >
              <Box w={[256, null, 688, null, 608, null]}>
                <Heading
                  as="h3"
                  fontSize={["16px", null, "16px", null, "18px", null]}
                  fontWeight={["light", null, "light", null, "regular", null]}
                  lineHeight="24px"
                  mt={["8px", null, "24px", null, "24px", null]}
                  mb={["8px", null, "24px", null, "24px", null]}
                  letterSpacing="0.4px"
                  textAlign="center"
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
            mt={["32px", null, "64px", null, "64px", null]}
            w={[320, null, 568, null, 728, null]}
            h="100%"
            align="stretch"
            spacing="0px"
          >
            <Box
              h={["136px", null, "136px", null, "136px", null]}
              display="flex"
              justifyContent="center"
            >
              <OnlineLogoWhite />
            </Box>
            <Box h="100%">
              <Text
                color="brand.red"
                fontSize={["16px", null, null, null, null, null]}
                fontWeight="semibold"
                mb={["8px", null, "8px", null, "8px", null]}
              >
                1. {subtitle}
              </Text>
              <Text
                mb={["16px", null, null, null, null, null]}
                fontSize={["16px", null, null, null, null, null]}
                fontWeight="light"
                lineHeight="28px"
              >
                {subText}
              </Text>
              <Text
                color="brand.red"
                fontSize={["16px", null, null, null, null, null]}
                fontWeight="semibold"
                mb={["8px", null, null, null, null, null]}
              >
                2. {subtitle2}
              </Text>
              <Text
                mb={["16px", null, null, null, null, null]}
                fontSize={["16px", null, null, null, null, null]}
                fontWeight="light"
                lineHeight="28px"
              >
                {subText2}
              </Text>
              <Text
                color="brand.red"
                fontSize={["16px", null, null, null, null, null]}
                fontWeight="semibold"
                mb={["8px", null, null, null, null, null]}
              >
                3. {subtitle3}
              </Text>
              <Text
                fontSize={["16px", null, null, null, null, null]}
                fontWeight="light"
                lineHeight="28px"
              >
                {subText3}
              </Text>
              <Box
                mt={["32px", null, "32px", null, "32px", null]}
                mb={["32px", null, "64px", null, "64px", null]}
                display="flex"
                justifyContent="center"
              >
                <ButtonContactWithUs buttonText="Contacta con nosotros" />
              </Box>
            </Box>
          </VStack>
        </Flex>
      </>
    </Layout>
  );
}
