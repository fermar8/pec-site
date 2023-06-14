import Layout from "components/layout";

import {
  Text,
  Box,
  Flex,
  Heading,
  VStack,
  HStack,
  chakra,
  useMediaQuery,
} from "@chakra-ui/react";

import CardBlog from "../../components/home/blog/cardBlog";
import Head from "next/head";
import Image from "next/image";

export default function Blog({ page }) {
  const { blogInfo } = page;
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery("(max-width: 1280px)");

  if (isMobile) {
    return (
      <Layout isBlog={true}>
        <Head>
          <title>ON LINE | Blog</title>
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
          <Flex
            justify="center"
            alignItems="center"
            bg="brand.pureWhite"
            mb="32px"
          >
            <VStack
              w={[320, 480, null, null, null, null]}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              spacing={4}
            >
              <Box
                w={[320, 440, null, null, null, null]}
                mt="40px"
                fontSize={["24px", null, null, null, null, null]}
                color="brand.main"
                fontWeight="bold"
                lineHeight="1"
              >
                <Heading
                  as="h1"
                  color="brand.main"
                  fontSize={["24px", null, null, null, null, null]}
                  lineHeight="1"
                >
                  On Line
                </Heading>
                <Heading
                  as="h2"
                  mb="24px"
                  color="brand.text"
                  fontSize={["36px", null, null, null, null, null]}
                  lineHeight="1"
                >
                  Blog
                </Heading>
              </Box>
              {blogInfo.map((post, i) => (
                <Box
                  key={i}
                  backgroundColor={i === 0 ? "brand.warmBackground" : null}
                  padding={i === 0 ? "24px 8px 0px 8px" : null}
                  borderRadius={i === 0 ? "9px 9px 9px 9px" : null}
                  border={i === 0 ? "1px solid #FFE2DC" : null}
                >
                  <CardBlog loaded={true} blogInfo={post} />
                </Box>
              ))}
            </VStack>
          </Flex>
        </>
      </Layout>
    );
  } else if (isTablet) {
    return (
      <Layout isBlog={true}>
        <Head>
          <title>ON LINE | Blog</title>
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
          <Flex justify="center" alignItems="center" bg="brand.pureWhite">
            <VStack
              w={[null, null, 720, null, null, null]}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              spacing={4}
            >
              <Box
                w={[null, null, 720, null, null, null]}
                mt="40px"
                fontSize={["24px", null, null, null, null, null]}
                color="brand.main"
                fontWeight="bold"
                lineHeight="1"
              >
                <Heading
                  as="h1"
                  color="brand.main"
                  fontSize={["24px", null, null, null, null, null]}
                  lineHeight="1"
                >
                  On Line
                </Heading>
                <Heading
                  as="h2"
                  mb="24px"
                  color="brand.text"
                  fontSize={["36px", null, null, null, null, null]}
                  lineHeight="1"
                >
                  Blog
                </Heading>
              </Box>
              <Box
                display="flex"
                flexWrap="wrap"
                width="100%"
                overflow="hidden"
              >
                {blogInfo.map((post, i) => (
                  <Box
                    key={i}
                    backgroundColor={i === 0 ? "brand.warmBackground" : null}
                    padding={i === 0 ? "24px 0px 24px 0px" : null}
                    width={i === 0 ? "720px" : "360px"}
                    borderRadius={i === 0 ? "9px 9px 9px 9px" : null}
                    border={i === 0 ? "1px solid #FFE2DC" : null}
                    display="inline-block"
                    mb="40px"
                  >
                    <CardBlog
                      loaded={true}
                      blogInfo={post}
                      isFirstPost={i === 0 ? true : false}
                    />
                  </Box>
                ))}
              </Box>
            </VStack>
          </Flex>
        </>
      </Layout>
    );
  } else {
    return (
      <Layout isBlog={true}>
        <Head>
          <title>ON LINE | Blog</title>
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
          <Flex justify="center" alignItems="center" bg="brand.pureWhite">
            <VStack
              w={[null, null, null, null, 1128, null]}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              spacing={4}
            >
              <Box
                w={[null, null, null, null, 1128, null]}
                mt="40px"
                fontSize={["24px", null, null, null, null, null]}
                color="brand.main"
                fontWeight="bold"
                lineHeight="1"
              >
                <Heading
                  as="h1"
                  color="brand.main"
                  fontSize={["24px", null, null, null, null, null]}
                  lineHeight="1"
                >
                  On Line
                </Heading>
                <Heading
                  as="h2"
                  mb="24px"
                  color="brand.text"
                  fontSize={["36px", null, null, null, null, null]}
                  lineHeight="1"
                >
                  Blog
                </Heading>
              </Box>
              <Box
                display="flex"
                flexWrap="wrap"
                width="100%"
                overflow="hidden"
              >
                {blogInfo.map((post, i) => (
                  <Box
                    key={i}
                    backgroundColor={i === 0 ? "brand.warmBackground" : null}
                    padding={i === 0 ? "64px 0px 64px 0px" : null}
                    width={i === 0 ? "1128px" : "370px"}
                    borderRadius={i === 0 ? "9px 9px 9px 9px" : null}
                    border={i === 0 ? "1px solid #FFE2DC" : null}
                    display="inline-block"
                    mb="80px"
                  >
                    <CardBlog
                      loaded={true}
                      blogInfo={post}
                      isFirstPost={i === 0 ? true : false}
                    />
                  </Box>
                ))}
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
    blogInfo: [
      {
        mainImageSrc: `${process.env.basePath}/img/blog/3-La-importancia-de-las-redes-sociales.jpg`,
        title: "La importancia de las redes sociales",
        summary:
          "En el panorama digital actual, una buena gestión del Social Media se ha vuelto crucial para el éxito de las empresas.",
        authorImgSrc: `${process.env.basePath}/img/social-media/onlineLogo.svg`,
        author: "Online Digital",
        date: "4 de junio de 2023",
        timestamp: 1685875800000,
        url: "blog/la-importancia-de-las-redes-sociales",
        tags: ["Social Media"],
      },
      {
        mainImageSrc: `${process.env.basePath}/img/blog/4-Campañas-SEM-Potenciando-tu-presencia-en-línea.jpg`,
        title: "Campañas SEM. Potencia tu presencia en línea",
        summary:
          "Las campañas SEM se han convertido en una herramienta fundamental en el mundo del marketing digital.",
        authorImgSrc: `${process.env.basePath}/img/social-media/onlineLogo.svg`,
        author: "Online Digital",
        date: "27 de mayo de 2023",
        timestamp: 1685184600000,
        url: "blog/potenciando-tu-presencia-en-linea",
        tags: ["SEM", "Social Media"],
      },
      {
        mainImageSrc: `${process.env.basePath}/img/blog/2-Como-realizar-una-auditoría-SEO.jpg`,
        title: "Cómo realizar una auditoría SEO",
        summary:
          "Realizar una auditoría SEO es un paso crucial para asegurarte de que tu sitio web esté optimizado para los motores de búsqueda",
        authorImgSrc: `${process.env.basePath}/img/social-media/onlineLogo.svg`,
        author: "Online Digital",
        date: "19 de mayo 2023",
        timestamp: 1684493400000,
        url: "blog/como-realizar-una-auditoria-seo",
        tags: ["SEO"],
      },
      {
        mainImageSrc: `${process.env.basePath}/img/blog/1-Que-es-el-Posicionamiento-SEO.jpg`,
        title: "¿Qué es el posicionamiento SEO?",
        summary:
          "El Posicionamiento SEO es un conjunto de técnicas y estrategias enfocadas en mejorar la visibilidad de un sitio web",
        authorImgSrc: `${process.env.basePath}/img/social-media/onlineLogo.svg`,
        author: "Online Digital",
        date: "13 de mayo de 2023",
        timestamp: 1684002003000,
        url: "blog/que-es-el-posicionamiento-seo",
        tags: ["SEO"],
      },
    ],
  };

  return {
    props: {
      page,
    },
  };
}
