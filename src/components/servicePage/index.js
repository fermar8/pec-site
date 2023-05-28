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
      <Layout isService={true} serviceType={title}>
        <Head>
          <title>ON LINE | Agencia de Marketing Digital Barcelona</title>
          <meta
            name="description"
            content="ON LINE es una Agencia de Marketing Digital basada en Barcelona que ofrece todo lo que necesitas: posicionamiento SEO, SEM, Desarrollo Web"
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
        <>
          <Flex justify="center" bg="brand.whiteBackground">
            <VStack
              pt="120px"
              pb="60px"
              w={[320, null, null, null, null, null]}
            >
              <Box
                position="absolute"
                top={["4.5%", null, null, null, null]}
                left={["40%", null, null, null, null]}
              >
                {smallIcon}
              </Box>
              <Box>
                <Heading
                  as="h5"
                  fontSize={["24px", null, null, null, null, null]}
                  fontWeight="bold"
                  color="brand.main"
                >
                  Servicios
                </Heading>
                <Heading
                  as="h1"
                  fontSize={["36px", null, null, null, null, null]}
                  fontWeight="bold"
                >
                  {title}
                </Heading>
                <Heading
                  as="h2"
                  lineHeight="28px"
                  fontSize="16px"
                  fontWeight="light"
                >
                  {mainText}
                </Heading>
              </Box>
            </VStack>
          </Flex>
          <Flex justify="center" w="100%" bg="brand.main">
            <VStack
              w={[320, null, null, null, null, null]}
              pb="40px"
              pt="40px"
              display="flex"
              flexDirection="column"
              justify="space-around"
              align="stretch"
              spacing="0px"
            >
              <Box textAlign="center">
                <Text
                  color="brand.whiteBackground"
                  fontSize="18px"
                  fontWeight="bold"
                >
                  En ON LINE te brindamos estrategias a tu medida, consensuando
                  y adaptándonos a tus objetivos e ideas.
                </Text>
              </Box>
            </VStack>
          </Flex>
          <Flex
            w="100%"
            bg="brand.whiteBackground"
            flexDirection="column"
            alignItems="center"
          >
            <VStack
              w={[320, null, null, null, null, null]}
              pt="64px"
              pb="64px"
              display="flex"
              flexDirection="column"
              justify="space-between"
              align="stretch"
              spacing="0px"
            >
              <Box mb="32px">
                <Text
                  color="brand.whiteBackground"
                  fontSize="30px"
                  lineHeight="36px"
                  fontWeight="bold"
                  textShadow="-1px 1px 0 #F55951,
				  1px 1px 0 #F55951,
				 1px -1px 0 #F55951,
				-1px -1px 0 #F55951"
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
  } else {
    return (
      <Layout isService={true} serviceType={title}>
        <Head>
          <title>ON LINE | Agencia de Marketing Digital Barcelona</title>
          <meta
            name="description"
            content="ON LINE es una Agencia de Marketing Digital basada en Barcelona que ofrece todo lo que necesitas: posicionamiento SEO, SEM, Desarrollo Web"
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
        <>
          <Flex
            justify="center"
            bg="brand.whiteBackground"
            h={[null, null, 500, null, null, null]}
          >
            <Flex
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
                  color="brand.main"
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
                <Heading
                  as="h2"
                  lineHeight="28px"
                  fontSize="16px"
                  fontWeight="light"
                >
                  {mainText}
                </Heading>
              </Box>
              <Box>{bigIcon}</Box>
            </Flex>
          </Flex>
          <Flex justify="center" w="100%" bg="brand.main">
            <VStack
              w={[720, null, null, null, null, null]}
              h={[136, null, null, null, null, null]}
              display="flex"
              flexDirection="column"
              justify="space-around"
              align="stretch"
              spacing="0px"
            >
              <Box textAlign="center">
                <Text
                  color="brand.whiteBackground"
                  fontSize="18px"
                  fontWeight="bold"
                >
                  En ON LINE te brindamos estrategias a tu medida, consensuando
                  y adaptándonos a tus objetivos e ideas.
                </Text>
              </Box>
            </VStack>
          </Flex>
          <Flex
            w="100%"
            bg="brand.whiteBackground"
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
              <Box mb="16px">
                <Text
                  color="brand.whiteBackground"
                  fontSize="30px"
                  lineHeight="36px"
                  fontWeight="bold"
                  textShadow="-1px 1px 0 #F55951,
				  1px 1px 0 #F55951,
				 1px -1px 0 #F55951,
				-1px -1px 0 #F55951"
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
