import Layout from "../../components/layout";

import {
  Text,
  Box,
  Flex,
  Heading,
  VStack,
  chakra,
  useMediaQuery,
} from "@chakra-ui/react";

import Head from "next/head";
import Image from "next/image";

export default function Blog() {
  const [isMobileOrTablet] = useMediaQuery("(max-width: 1280px)");

  if (isMobileOrTablet) {
    return (
      <Layout isBlog={true}>
        <Head>
          <title>ON LINE | Quiénes Somos</title>
          <meta
            name="description"
            content="ON LINE es una Agencia de Marketing Digital basada en Barcelona que ofrece todo lo que necesitas: posicionamiento SEO, SEM, Desarrollo Web, Diseño Web"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <>
          <Flex
            justify="center"
            bg="brand.whiteBackground"
            alignItems="center"
            flexDirection="column"
          >
            <VStack
              w={[320, null, 720, null, null, null]}
              pb="40px"
              pt="40px"
              align="stretch"
              spacing="0px"
            >
              <Box mb="16px">
                <Box marginLeft="140px">
                  <Image
                    width={120}
                    height={120}
                    src={`${process.env.basePath}/img/bookImage.png`}
                    alt="blog-image"
                  ></Image>
                </Box>
                <Heading
                  as="h1"
                  fontSize={["24px", null, null, null, null, null]}
                  fontWeight="bold"
                  color="brand.main"
                  lineHeight="1"
                >
                  Blog
                </Heading>
                <Heading
                  as="h5"
                  fontSize={["36px", null, null, null, null, null]}
                  fontWeight="bold"
                  color="brand.text"
                  lineHeight="1"
                >
                  Próximamente
                </Heading>
              </Box>
              <Box>
                <Text mb="32px">
                  ¡Bienvenidos a nuestra sección de blogs! Estamos emocionados
                  de compartir contenido increíble contigo{" "}
                  <chakra.span fontWeight="bold">
                    en un futuro próximo.
                  </chakra.span>
                  &nbsp; Mientras preparamos nuestra próxima publicaciones de
                  blog, aquí hay una vista previa de lo que puedes esperar:
                </Text>
              </Box>
              <Box>
                <Text mb="16px">
                  <chakra.span fontWeight="bold">
                    {" "}
                    · Guías educacionales y tutoriales:{" "}
                  </chakra.span>
                  Tutoriales y guías paso a paso sobre principios de diseño web,
                  técnicas de programación, mejores prácticas de experiencia de
                  usuario y estrategias de marketing digital.{" "}
                </Text>
              </Box>
              <Box>
              <Text mb="16px">
                <chakra.span fontWeight="bold">
                  {" "}
                  · Análisis de casos de éxito:{" "}
                </chakra.span>
                Ejemplos reales de proyectos exitosos que hemos emprendido.
                &nbsp; Obtendrás información sobre nuestros procesos de diseño y
                desarrollo, decisiones UX/UI y estrategias de marketing que
                condujeron a notables resultados.{" "}
                </Text>
                </Box>
              <Text>
                <chakra.span fontWeight="bold">
                  {" "}
                  · Notícias de la indústria y tendencias:{" "}
                </chakra.span>
                Manténgase actualizado con lo último tendencias, innovaciones y
                avances en diseño web, desarrollo, UX/UI y marketing.
              </Text>
            </VStack>
          </Flex>
        </>
      </Layout>
    );
  } else {
    return (
      <Layout isBlog={true}>
        <Head>
          <title>ON LINE | Quiénes Somos</title>
          <meta
            name="description"
            content="ON LINE es una Agencia de Marketing Digital basada en Barcelona que ofrece todo lo que necesitas: posicionamiento SEO, SEM, Desarrollo Web, Diseño Web"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <>
          <Flex
            justify="center"
            bg="brand.whiteBackground"
            minHeight="600px"
            alignItems="center"
            flexDirection="row"
          >
            <VStack
              w={[320, null, 720, null, 720, null]}
              minHeight={[900, null, 600, null, 500, null]}
              align="stretch"
              justifyContent="space-around"
              spacing="0px"
            >
              <Box>
                <Heading
                  as="h1"
                  fontSize={["24px", null, null, null, null, null]}
                  fontWeight="bold"
                  color="brand.main"
                  lineHeight="1"
                >
                  Blog
                </Heading>
                <Heading
                  as="h5"
                  fontSize={["36px", null, null, null, null, null]}
                  fontWeight="bold"
                  color="brand.text"
                  lineHeight="1"
                >
                  Coming Soon
                </Heading>
              </Box>
              <Text>
                ¡Bienvenidos a nuestra sección de blogs! Estamos emocionados de
                compartir contenido increíble contigo{" "}
                <chakra.span fontWeight="bold">
                  en un futuro próximo.
                </chakra.span>
                &nbsp; Mientras preparamos nuestra próxima publicaciones de
                blog, aquí hay una vista previa de lo que puedes esperar:
              </Text>
              <Text>
                <chakra.span fontWeight="bold">
                  {" "}
                  · Guías educacionales y tutoriales:{" "}
                </chakra.span>
                Tutoriales y guías paso a paso sobre principios de diseño web,
                técnicas de programación, mejores prácticas de experiencia de
                usuario y estrategias de marketing digital.{" "}
              </Text>
              <Text>
                <chakra.span fontWeight="bold">
                  {" "}
                  · Análisis de casos de éxito:{" "}
                </chakra.span>
                Ejemplos reales de proyectos exitosos que hemos emprendido.
                &nbsp; Obtendrás información sobre nuestros procesos de diseño y
                desarrollo, decisiones UX/UI y estrategias de marketing que
                condujeron a notables resultados.{" "}
              </Text>
              <Text>
                <chakra.span fontWeight="bold">
                  {" "}
                  · Notícias de la indústria y tendencias:{" "}
                </chakra.span>
                Manténgase actualizado con lo último tendencias, innovaciones y
                avances en diseño web, desarrollo, UX/UI y marketing.
              </Text>
            </VStack>
            <Box marginLeft="140px">
              <Image
                width={256}
                height={256}
                src={`${process.env.basePath}/img/bookImage.png`}
                alt="about-image"
              ></Image>
            </Box>
          </Flex>
        </>
      </Layout>
    );
  }
}
