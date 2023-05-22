import {
  Text,
  Box,
  Flex,
  Heading,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import Head from "next/head";

import Layout from "components/layout";
import ServiceDescription from "components/services/serviceDescriptions";
import ButtonContactWithUs from "components/general/buttons/buttonContactWithUs";

import { SemIcon } from "components/icons/services/semIcon";
import { SemIconBig } from "components/icons/services/semIconBig";
import { DesignIcon } from "components/icons/services/designIcon";
import { DesignIconBig } from "components/icons/services/designIconBig";
import { SeoIcon } from "components/icons/services/seoIcon";
import { SeoIconBig } from "components/icons/services/seoIconBig";
import { SocialMediaIcon } from "components/icons/services/socialMediaIcon";
import { SocialMediaIconBig } from "components/icons/services/socialMediaIconBig";
import { UxUiIcon } from "components/icons/services/uxUiIcon";
import { UxUiIconBig } from "components/icons/services/uxUiIconBig";
import { WebIcon } from "components/icons/services/webIcon";
import { WebIconBig } from "components/icons/services/webIconBig";

import { useEffect, useState } from "react";

export default function ServicePage(props) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [title] = useState(props.title);
  const [smallIcon, setSmallIcon] = useState(SemIcon);
  const [bigIcon, setBigIcon] = useState(SemIconBig);
  
  useEffect(() => {
    if (title === "Campañas SEM") {
      setSmallIcon(SemIcon);
      setBigIcon(SemIconBig);
    } else if (title === "Diseño Web") {
      setSmallIcon(DesignIcon);
      setBigIcon(DesignIconBig);
    } else if (title === "Posicionamiento SEO") {
      setSmallIcon(SeoIcon);
      setBigIcon(SeoIconBig);
    } else if (title === "Social Media") {
      setSmallIcon(SocialMediaIcon);
      setBigIcon(SocialMediaIconBig);
    } else if (title === "Consultoría UX/UI") {
      setSmallIcon(UxUiIcon);
      setBigIcon(UxUiIconBig);
    } else {
      setSmallIcon(WebIcon);
      setBigIcon(WebIconBig);
    }
  }, [title]);

  const {
    subtitle,
    subtitle2,
    subtitle3,
    mainText,
    subText,
    subText2,
    subText3,
    whyText,
  } = props;

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
              <Box
                position="absolute"
                top={["6.5%", null, null, null, null]}
                left={["40%", null, null, null, null]}
              >
                {smallIcon}
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
              <ButtonContactWithUs buttonText="Contacta con nosotros" />
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
            bg="brand.white"
            h={[null, null, 500, null, null, null]}
          >
            <Flex
              mt={[null, null, null, null, null, null]}
              w={[null, null, 720, null, null, null]}
              h={[null, null, 440, null, null, null]}
              justify="center"
              align="center"
              spacing="0px"
            >
              <Box>
                <Heading
                  as="h5"
                  fontSize={[null, null, "24px", null, null, null]}
                  fontWeight="bold"
                  color="brand.red"
                >
                  Servicios
                </Heading>
                <Heading
                  as="h2"
                  fontSize={[null, null, "36px", null, null, null]}
                  fontWeight="bold"
                >
                  {title}
                </Heading>
                <Text lineHeight="28px" fontSize="16px" fontWeight="light">
                  {mainText}
                </Text>
              </Box>
              <Box>
                {bigIcon}
              </Box>
            </Flex>
          </Flex>
          <Flex justify="center" w="100%" bg="brand.red">
            <VStack
              w={[720, null, null, null, null, null]}
              h={[136, null, null, null, null, null]}
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
            justify="center"
            alignItems="center"
          >
            <VStack
              w={[720, null, null, null, null, null]}
              mt="64px"
              mb="64px"
              display="flex"
              flexDirection="column"
              justify="space-around"
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
              <Box padding="16px"></Box>
              <ButtonContactWithUs buttonText="Contacta con nosotros" />
            </VStack>
          </Flex>
        </>
      </Layout>
    );
  } 
}
