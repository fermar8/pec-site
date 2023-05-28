import {
  Text,
  Box,
  Flex,
  Heading,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

import Layout from "components/layout";
const ServiceDescription = dynamic(() => import("components/services/serviceDescriptions"), { ssr: false });
const ButtonContactWithUs = dynamic(() => import("components/general/buttons/buttonContactWithUs"), { ssr: false });



export default function AboutPage({ page }) {
  const {
    titleTag,
    description,
    titleTextPart1,
    titleTextPart2,
    introTextPart1,
    introTextPart2,
    missionTitle,
    missionText,
    valuesTitle,
    commitmentTitle,
    commitmentText,
    dedicationTitle,
    dedicationText,
    clientOrientedTitle,
    clientOrientedText,
    buttonText,
  } = page;

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return (
      <Layout isAbout={true}>
        <Head>
          <title>{titleTag}</title>
          <meta name="description" content={description} />
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
            <VStack w={[320, null, null, null, null, null]} pb="40px" pt="40px">
              <Box display="flex" flexDirection="column">
                <Box
                  alignSelf="center"
                  display="flex"
                  justifyContent="center"
                  borderRadius="50%"
                  width={174}
                  height={174}
                  overflow="hidden"
                  mb="16px"
                >
                  <Image
                    width={174}
                    height={174}
                    src={`${process.env.basePath}/img/home/home-intro.png`}
                    alt="about-image"
                  ></Image>
                </Box>
                <Box mb="16px">
                  <Heading
                    as="h5"
                    fontSize={["24px", null, null, null, null, null]}
                    fontWeight="bold"
                    color="brand.main"
                    lineHeight="1"
                  >
                    {titleTextPart1}
                  </Heading>
                  <Heading
                    as="h1"
                    fontSize={["36px", null, null, null, null, null]}
                    fontWeight="bold"
                    lineHeight="1"
                  >
                    {titleTextPart2}
                  </Heading>
                </Box>
                <Text
                  lineHeight="28px"
                  fontSize="16px"
                  fontWeight="light"
                  mb="16px"
                >
                  {introTextPart1}
                </Text>
                <Text lineHeight="28px" fontSize="16px" fontWeight="light">
                  {introTextPart2}
                </Text>
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
            justify="space-between"
            alignItems="center"
          >
            <VStack
              w={[320, null, null, null, null, null]}
              pt="64px"
              pb="64px"
              display="flex"
              flexDirection="column"
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mb="40px"
              >
                <Box mb="16px">
                  <Heading
                    as="h5"
                    fontSize={["36px", null, null, null, null, null]}
                    fontWeight="bold"
                    color="brand.main"
                  >
                    {missionTitle}
                  </Heading>
                </Box>
                <Text
                  lineHeight="28px"
                  fontSize="16px"
                  fontWeight="light"
                  mb="16px"
                >
                  {missionText}
                </Text>
              </Box>
              <Box mb="16px" display="flex" flexDirection="column">
                <Text
                  color="brand.whiteBackground"
                  fontSize="40px"
                  lineHeight="36px"
                  fontWeight="bold"
                  textShadow="-1px 1px 0 #F55951,
				  1px 1px 0 #F55951,
				 1px -1px 0 #F55951,
				-1px -1px 0 #F55951"
                  mb="40px"
                >
                  {valuesTitle}
                </Text>
                <ServiceDescription
                  number={1}
                  subtitle={commitmentTitle}
                  subText={commitmentText}
                />
                <ServiceDescription
                  number={2}
                  subtitle={dedicationTitle}
                  subText={dedicationText}
                />
                <ServiceDescription
                  number={3}
                  subtitle={clientOrientedTitle}
                  subText={clientOrientedText}
                />
                <Box alignSelf="center" mt="30px">
                  <ButtonContactWithUs buttonText={buttonText} />
                </Box>
              </Box>
            </VStack>
          </Flex>
        </>
      </Layout>
    );
  } else {
    return (
      <Layout isAbout={true}>
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
        <>
          <Flex justify="center" bg="brand.whiteBackground">
            <Flex
              w={[null, null, 720, null, null, null]}
              h={[null, null, 500, null, null, null]}
              justify="space-around"
              align="center"
              spacing="0px"
            >
              <Box maxWidth="50%">
                <Heading
                  as="h5"
                  fontSize={[null, null, "24px", null, null, null]}
                  fontWeight="bold"
                  color="brand.main"
                  lineHeight="1"
                >
                  {titleTextPart1}
                </Heading>
                <Heading
                  as="h1"
                  fontSize={[null, null, "36px", null, null, null]}
                  fontWeight="bold"
                  lineHeight="1"
                  mb="16px"
                >
                  {titleTextPart2}
                </Heading>
                <Text
                  lineHeight="28px"
                  fontSize="16px"
                  fontWeight="light"
                  mb="16px"
                >
                  {introTextPart1}
                </Text>
                <Text lineHeight="28px" fontSize="16px" fontWeight="light">
                  {introTextPart2}
                </Text>
              </Box>
              <Box
                width="308px"
                height="308px"
                borderRadius="50%"
                overflow="hidden"
                mb="16px"
              >
                <Image
                  width={308}
                  height={308}
                  src={`${process.env.basePath}/img/home/home-intro.png`}
                  alt="about-image"
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
            justify="space-between"
            alignItems="center"
          >
            <VStack
              w={[720, null, null, null, null, null]}
              mt="64px"
              mb="64px"
              display="flex"
              flexDirection="column"
              justify="space-between"
              align="stretch"
              spacing="0px"
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Box mb="16px">
                  <Heading
                    as="h3"
                    fontSize={["36px", null, null, null, null, null]}
                    fontWeight="bold"
                    color="brand.main"
                  >
                    {missionTitle}
                  </Heading>
                </Box>
                <Text
                  lineHeight="28px"
                  fontSize="16px"
                  fontWeight="light"
                  mb="16px"
                >
                  {missionText}
                </Text>
              </Box>
              <Box mb="16px" display="flex" flexDirection="column">
                <Text
                  color="brand.whiteBackground"
                  fontSize="40px"
                  lineHeight="36px"
                  fontWeight="bold"
                  textShadow="-1px 1px 0 #F55951,
				  1px 1px 0 #F55951,
				 1px -1px 0 #F55951,
				-1px -1px 0 #F55951"
                  mb="16px"
                >
                  {valuesTitle}
                </Text>
                <ServiceDescription
                  number={1}
                  subtitle={commitmentTitle}
                  subText={commitmentText}
                />
                <ServiceDescription
                  number={2}
                  subtitle={dedicationTitle}
                  subText={dedicationText}
                />
                <ServiceDescription
                  number={3}
                  subtitle={clientOrientedTitle}
                  subText={clientOrientedText}
                />
                <Box alignSelf="center" mt="16px">
                  <ButtonContactWithUs buttonText={buttonText} />
                </Box>
              </Box>
            </VStack>
          </Flex>
        </>
      </Layout>
    );
  }
}

export async function getStaticProps() {
  const page = {
    titleTag: "ON LINE | Agencia de Marketing Digital Barcelona",
    description:
      "ON LINE es una Agencia de Marketing Digital basada en Barcelona que ofrece todo lo que necesitas: posicionamiento SEO, SEM, Desarrollo Web, Diseño Web",

    titleTextPart1: "Sobre",
    titleTextPart2: "Nosotros",

    introTextPart1:
      "El talento humano es la columna vertebral de ON LINE. Formado por expertos en distintos ámbitos, nuestro equipo dispone de un gran talento multidisciplinar con años de experiencia delante de las pantallas.",
    introTextPart2:
      "Somos una Agencia de Marketing Digital completa basada en Barcelona formada por consultores SEO, SEM, UX/UI, diseñadores gráficos, Programadores Web y Community Managers.",

    missionTitle: "Nuestra Misión",
    missionText:
      "Como Agencia de Marketing Digital, nuestra misión es adoptar los objetivos de nuestros clientes. En el mundo digital, las necesidades pueden ser muy variadas, desde la creación de tu página web hasta la gestión de las redes sociales. Estas necesidades son las que dan orígen a nuestros servicios, enfocados siempre a cumplir los objetivos de nuestros clientes. Tanto si necesitas mejorar tu presencia en redes como rediseñar por completo o desde cero tu página web, puedes contar con el equipo de expertos de ON LINE.",

    valuesTitle: "Nuestros valores",
    commitmentTitle: "Compromiso",
    commitmentText:
      "Nos esforzamos al máximo para cumplir siempre con nuestros plazos de entrega pero siempre brindando un trabajo de calidad.",
    dedicationTitle: "Dedicación",
    dedicationText:
      "Nuestro equipo vive y respira el Marketing Digital. Tendremos la misma dedicación que tú tendrías en tu negocio.",
    clientOrientedTitle: "Orientación al cliente",
    clientOrientedText:
      "En el Marketing Digital y Desarrollo Web cada cliente es un mundo y tiene unas necesidades específicas. Nos adaptamos al máximo para cubrirlas.",

    buttonText: "Contacta con nosotros",
  };

  return {
    props: {
      page,
    },
  };
}
