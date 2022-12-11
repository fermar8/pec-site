import {
  Button,
  ButtonGroup,
  Box,
  Center,
  Flex,
  Image,
  Heading,
  HStack,
  VStack,
  StackDivider,
  IconButton,
} from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../components/layout";
import { WavingHand } from "../components/icons";
import styles from "../styles/Home.module.scss";

export default function Home({ page }) {
  const { title, description } = page;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex justify="center" alignItems="center" bg="brand.beige">
        <VStack
          mt="80px"
          mb="80px"
          w={[280, 280, 728, 952, 1128]}
          h="586.5px"
          align="stretch"
        >
          <Box h="82px">
            <Heading as="h1" fontSize="21px" fontWeight="normal">
              Pàgines web web web web web
            </Heading>
            <Heading as="h2" fontSize="38px">
              Agencia Marketing Digital y Diseño Web Barcelona
            </Heading>
          </Box>
          <Box h="280px">
            <Image
              w="1128px"
              h="280px"
              src="img/Placeholder1128x280.jpg"
              alt="home-image"
              borderRadius="9px 9px 0px 0px"
            ></Image>
          </Box>
          <Center
            align="center"
            bg="brand.white"
            borderRadius="0px 0px 9px 9px"
          >
            <Box
              h="152.5px"
              w="608px"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Heading as="h3" fontSize="18px" fontWeight="light">
                Dissenyem i desenvolupem pàgines webs ràpides, visualment
                atractives i amb una bona presència en línia.
              </Heading>
              <Heading as="h4" fontSize="18px" fontWeight="bold">
                Comença de zero o contacta'ns per a millorar la teva pàgina web.
              </Heading>
              <Button
                bg="brand.red"
                color="brand.white"
                w="212.5px"
                h="40.5px"
                verticalAlign="text-bottom"
                borderRadius="999"
                rightIcon={<WavingHand />}
                alignSelf="center"
              >
                Contacta amb nosaltres
              </Button>
            </Box>
          </Center>
        </VStack>
      </Flex>
      <Flex justify="center" alignItems="center" bg="brand.white">
        <VStack
          mb="80px"
          w={[280, 280, 728, 952, 1128]}
          h="1228.5px"
          align="stretch"
        >
          <Box w="821px" h="136px" display="flex" flexDirection="column" justifyContent="space-around">
            <Heading as="h5" fontSize="32px" fontWeight="semi-bold" color="brand.red">
              Serveis web per a petites i mitjanes empreses
            </Heading>
            <Heading as="h6" fontSize="22px" fontWeight="light">
              Que vulguin començar de zero o millorar la seva pàgina web
              existent, captar nous clients, conèixer als existents i millorar
              la conversió de venda en pàgina.
            </Heading>
          </Box>
          <Box h="940px" display="flex" justifyContent="space-around">
            <Box h="422px">

            </Box>
            <Box h="374px">

            </Box>
            <Box h="144.5px">

            </Box>
          </Box>
        </VStack>
      </Flex>
    </Layout>
  );
}

export async function getStaticProps() {
  const page = {
    title: "Home title",
    description: "Home description",
  };

  return {
    props: {
      page,
    },
  };
}
