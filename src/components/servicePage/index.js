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
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("components/layout"), {
  ssr: false,
});
const ServiceDescription = dynamic(
  () => import("components/services/serviceDescriptions"),
  {
    ssr: false,
  }
);
const ButtonContactWithUs = dynamic(
  () => import("components/general/buttons/buttonContactWithUs"),
  {
    ssr: false,
  }
);

export default function ServicePage(props) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const {
    title,
    image,
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
                top={["4%", null, null, null, null]}
                left={["40%", null, null, null, null]}
                width="100px"
                height="100px"
              >
                <Image
                  width={100}
                  height={100}
                  src={`${process.env.basePath}/img/services/${image}.svg`}
                  alt="home-image"
                  priority={true}
                ></Image>
              </Box>
              <Box>
                <Text
                  fontSize={["24px", null, null, null, null, null]}
                  fontWeight="bold"
                  color="brand.main"
                >
                  Servicios
                </Text>
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
              pb="32px"
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
                  textShadow="-1px 1px 0 #B1150D,
				  1px 1px 0 #B1150D,
				 1px -1px 0 #B1150D,
				-1px -1px 0 #B1150D"
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
            </VStack>
            <ButtonContactWithUs buttonText="Contacta con nosotros" />
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
              w={[null, null, 720, null, 1128, null]}
              h={[null, null, 440, null, null, null]}
              justify="space-around"
              align="center"
              spacing="0px"
            >
              <Box>
                <Text
                  fontSize={[null, null, "24px", null, null, null]}
                  fontWeight="bold"
                  color="brand.main"
                  lineHeight="100%"
                >
                  Servicios
                </Text>
                <Heading
                  as="h1"
                  fontSize={[null, null, "36px", null, null, null]}
                  fontWeight="bold"
                  lineHeight="100%"
                >
                  {title}
                </Heading>
                <Heading
                  as="h2"
                  lineHeight="100%"
                  mt="16px"
                  fontSize="16px"
                  fontWeight="light"
                  maxWidth="500px"
                >
                  {mainText}
                </Heading>
              </Box>
              <Box width="200px" height="200px">
              <Image
                  width={200}
                  height={200}
                  src={`${process.env.basePath}/img/services/${image}Big.svg`}
                  alt="home-image"
                  priority={true}
                ></Image>
              </Box>
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
              mb="32px"
              display="flex"
              flexDirection="column"
              justify="space-around"
              align="stretch"
              spacing="0px"
            >
              <Box mb="32px">
                <Text
                  color="brand.whiteBackground"
                  fontSize="30px"
                  lineHeight="36px"
                  fontWeight="bold"
                  textShadow="-1px 1px 0 #B1150D,
				  1px 1px 0 #B1150D,
				 1px -1px 0 #B1150D,
				-1px -1px 0 #B1150D"
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
            </VStack>
            <Box pb="20px">
              <ButtonContactWithUs buttonText="Contacta con nosotros" />
            </Box>
          </Flex>
        </>
      </Layout>
    );
  }
}
