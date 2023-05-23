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
import Image from "next/image";

export default function AboutPage() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return (
      <Layout isAbout={true}>
        <Head>
          <title>ON LINE | Quiénes Somos</title>
          <meta
            name="description"
            content="ON LINE es una Agencia de Marketing Digital basada en Barcelona que ofrece todo lo que necesitas: posicionamiento SEO, SEM, Desarrollo Web, Diseño Web"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <>
          <Flex justify="center" bg="brand.white">
            <VStack
              w={[320, null, null, null, null, null]}
              h={[648, null, null, null, null, null]}
              align="stretch"
              spacing="0px"
            >
              <Box
                h={[648, null, null, null, null, null]}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Box
                  alignSelf="center"
                  display="flex"
                  justifyContent="center"
                  borderRadius="50%"
                  overflow="hidden"
                  alignItems="center"
                  w="174px"
                  h="174px"
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
                    color="brand.red"
                    lineHeight="1"
                  >
                    Sobre
                  </Heading>
                  <Heading
                    as="h2"
                    fontSize={["36px", null, null, null, null, null]}
                    fontWeight="bold"
                    lineHeight="1"
                  >
                    Nosotros
                  </Heading>
                </Box>
                <Text
                  lineHeight="28px"
                  fontSize="16px"
                  fontWeight="light"
                  mb="16px"
                >
                  El talento humano es la columna vertebral de ON LINE. Formado
                  por expertos en distintos ámbitos, nuestro equipo dispone de
                  un gran talento multidisciplinar con años de experiencia
                  delante de las pantallas.
                </Text>
                <Text lineHeight="28px" fontSize="16px" fontWeight="light">
                  Somos una Agencia Digital completa formada por consultores
                  SEO, SEM, UX/UI, diseñadores gráficos, Programadores Web y
                  Community Managers.
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
            justify="space-between"
            alignItems="center"
          >
            <VStack
              w={[320, null, null, null, null, null]}
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
                    as="h5"
                    fontSize={["36px", null, null, null, null, null]}
                    fontWeight="bold"
                    color="brand.red"
                  >
                    Nuestra misión
                  </Heading>
                </Box>
                <Text
                  lineHeight="28px"
                  fontSize="16px"
                  fontWeight="light"
                  mb="16px"
                >
                  At the heart of everything we do is our mission to empower
                  woman and black people.
                </Text>
                <Text
                  lineHeight="28px"
                  fontSize="16px"
                  fontWeight="light"
                  mb="24px"
                >
                  We strive to make a difference in the lives of our customers
                  and the communities we serve. With a strong commitment to
                  quality, integrity, and innovation, we are driven to create a
                  better future for all.
                </Text>
              </Box>
              <Box mb="16px" display="flex" flexDirection="column">
                <Text
                  color="brand.white"
                  fontSize="40px"
                  lineHeight="36px"
                  fontWeight="bold"
                  textShadow="0 0 2px #F55951"
                  mb="16px"
                >
                  Nuestros valores
                </Text>
                <ServiceDescription
                  number={1}
                  subtitle="Compromiso"
                  subText="Mejora tu posicionamiento como anunciante en los motores de búsqueda "
                />
                <ServiceDescription
                  number={2}
                  subtitle="Dedicación"
                  subText="Mejora tu posicionamiento como anunciante en los motores de búsqueda"
                />
                <ServiceDescription
                  number={3}
                  subtitle="Gay"
                  subText="Mejora tu posicionamiento como anunciante en los motores de búsqueda"
                />
                <Box alignSelf="center" mt="16px">
                  <ButtonContactWithUs buttonText="Contacta con nosotros" />
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
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <>
          <Flex justify="center" bg="brand.white">
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
                  color="brand.red"
                  lineHeight="1"
                >
                  Sobre
                </Heading>
                <Heading
                  as="h2"
                  fontSize={[null, null, "36px", null, null, null]}
                  fontWeight="bold"
                  lineHeight="1"
                  mb="16px"
                >
                  Nosotros
                </Heading>
                <Text
                  lineHeight="28px"
                  fontSize="16px"
                  fontWeight="light"
                  mb="16px"
                >
                  El talento humano es la columna vertebral de ON LINE. Formado
                  por expertos en distintos ámbitos, nuestro equipo dispone de
                  un gran talento multidisciplinar con años de experiencia
                  delante de las pantallas.
                </Text>
                <Text lineHeight="28px" fontSize="16px" fontWeight="light">
                  Somos una Agencia Digital completa formada por consultores
                  SEO, SEM, UX/UI, diseñadores gráficos, Programadores Web y
                  Community Managers.
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
                    as="h5"
                    fontSize={["36px", null, null, null, null, null]}
                    fontWeight="bold"
                    color="brand.red"
                  >
                    Nuestra misión
                  </Heading>
                </Box>
                <Text
                  lineHeight="28px"
                  fontSize="16px"
                  fontWeight="light"
                  mb="16px"
                >
                  At the heart of everything we do is our mission to empower
                  woman and black people.
                </Text>
                <Text
                  lineHeight="28px"
                  fontSize="16px"
                  fontWeight="light"
                  mb="24px"
                >
                  We strive to make a difference in the lives of our customers
                  and the communities we serve. With a strong commitment to
                  quality, integrity, and innovation, we are driven to create a
                  better future for all.
                </Text>
              </Box>
              <Box mb="16px" display="flex" flexDirection="column">
                <Text
                  color="brand.white"
                  fontSize="40px"
                  lineHeight="36px"
                  fontWeight="bold"
                  textShadow="0 0 2px #F55951"
                  mb="16px"
                >
                  Nuestros valores
                </Text>
                <ServiceDescription
                  number={1}
                  subtitle="Compromiso"
                  subText="Mejora tu posicionamiento como anunciante en los motores de búsqueda "
                />
                <ServiceDescription
                  number={2}
                  subtitle="Dedicación"
                  subText="Mejora tu posicionamiento como anunciante en los motores de búsqueda"
                />
                <ServiceDescription
                  number={3}
                  subtitle="Gay"
                  subText="Mejora tu posicionamiento como anunciante en los motores de búsqueda"
                />
                <Box alignSelf="center" mt="16px">
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
