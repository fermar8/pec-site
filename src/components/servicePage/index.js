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
import ServiceDescription from "components/services/serviceDescriptions";
import ButtonContactWithUs from "components/general/buttons/buttonContactWithUs";
import { OnlineLogoWhite } from "components/icons/onlineLogoWhite";
import { SemIcon } from "components/icons/semIcon";

import { useState, useEffect } from "react";

export default function ServicePage(props) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const {
    title,
    subtitle,
    subtitle2,
    subtitle3,
    mainText,
    subText,
    subText2,
    subText3,
    whyText,
    image,
  } = props;
  console.log(whyText);
  const [imageUrl, setImageUrl] = useState(
    `${process.env.basePath}/img/services/services-web.png`
  );
  const [imageAlt, setImageAlt] = useState(`services-default`);

  useEffect(() => {
    setImageUrl(`${process.env.basePath}/img/services/services-${image}.png`);
    setImageAlt(`services-${image}`);
  }, [image]);

  if (isMobile) {
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
            bg="brand.white"
            h={[440, null, null, null, null, null]}
          >
            <VStack
              mt={["120px", null, null, null, null, null]}
              w={[320, null, null, null, null, null]}
              h={[440, null, null, null, null, null]}
              align="stretch"
              spacing="0px"
            >
              <Box position="absolute" top="76px" left="160px">
                <SemIcon />
              </Box>
              <Box h={["202px", null, null, null, null, null]}>
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
                  fontSize={["36px", null, null, null, null, null]}
                  fontWeight="bold"
                >
                  {title}
                </Heading>
                <Text lineHeight="28px" fontSize="16px" fontWeight="light">
                  {mainText}
                </Text>
              </Box>
            </VStack>
          </Flex>
          <Flex justify="center" w="100%" bg="brand.red">
            <VStack
              w={[320, null, null, null, null, null]}
              h={[192, null, null, null, null, null]}
              display="flex"
              flexDirection="column"
              justify="space-around"
              align="stretch"
              spacing="0px"
            >
              <Box>
                <Text color="brand.white" fontSize="18px" fontWeight="bold">
                  En ON LINE te brindamos estrategias a tu medida, consensuando
                  y adaptándonos a tus objetivos e ideas.
                </Text>
              </Box>
            </VStack>
          </Flex>
          <Flex
            w="100%"
            bg="brand.white"
            flexDirection="column"
            justify="space-around"
            alignItems="center"
          >
            <VStack
              w={[320, null, null, null, null, null]}
              h={[688, null, null, null, null, null]}
              mt="64px"
              mb="64px"
              display="flex"
              flexDirection="column"
              justify="space-between"
              align="stretch"
              spacing="0px"
            >
              <Box>
                <Text
                  color="brand.white"
                  fontSize="30px"
                  lineHeight="36px"
                  fontWeight="bold"
                  textShadow="0 0 2px #F55951"
                >
                  {whyText}
                </Text>
              </Box>
              <ServiceDescription
                number={1}
                subtitle={subtitle}
                subText={subText}
              />
              <ServiceDescription
                number={2}
                subtitle={subtitle2}
                subText={subText2}
              />
              <ServiceDescription
                number={3}
                subtitle={subtitle3}
                subText={subText3}
              />
              <ButtonContactWithUs buttonText="Contacta con nosotros"/>
            </VStack>
          </Flex>
        </>
      </Layout>
    );
  } else {
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
}
