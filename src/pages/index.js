import {
  Button,
  Box,
  Center,
  Flex,
  Image,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../components/layout";
import { WavingHand } from "../components/icons";
import Link from "next/link";
import dynamic from "next/dynamic";
const CardServices = dynamic(() => import("../components/home/cardServices"))

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
          h="586px"
          align="stretch"
          spacing="0px"
        >
          <Box h="82px">
            <Heading as="h1" fontSize="21px" fontWeight="normal">
              Pàgines web web web web web
            </Heading>
            <Heading as="h2" fontSize="38px">
              Agencia Marketing Digital y Diseño Web Barcelona
            </Heading>
          </Box>
          <Box h="280px" boxShadow="0px 4px 50px rgba(0, 0, 0, 0.1)">
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
            boxShadow="0px 4px 50px rgba(0, 0, 0, 0.1)"
          >
            <Box
              h="200px"
              w="608px"
              display="flex"
              p="24px 0px 24px 0px"
              flexDirection="column"
            >
              <Heading as="h3" fontSize="18px" fontWeight="light" pb="24px">
                Dissenyem i desenvolupem pàgines webs ràpides, visualment
                atractives i amb una bona presència en línia.
              </Heading>
              <Heading as="h4" fontSize="18px" fontWeight="bold" pb="24px">
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
      <Flex justify="center" alignItems="center" bg="brand.pureWhite">
        <VStack
          mb="80px"
          w={[280, 280, 728, 952, 1128]}
          h="1228px"
          align="stretch"
        >
          <Box
            w="821px"
            h="136px"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Heading
              as="h5"
              fontSize="32px"
              fontWeight="semi-bold"
              color="brand.red"
            >
              Serveis web per a petites i mitjanes empreses
            </Heading>
            <Heading as="h6" fontSize="22px" fontWeight="light">
              Que vulguin començar de zero o millorar la seva pàgina web
              existent, captar nous clients, conèixer als existents i millorar
              la conversió de venda en pàgina.
            </Heading>
          </Box>
          <Box
            h="940px"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Box
              h="422px"
              w="1128px"
              padding="48px 0 48px 0"
              display="flex"
              justifyContent="space-between"
            >
              <CardServices />
              <CardServices />
              <CardServices />
            </Box>
            <Box
              h="374px"
              w="1128px"
              display="flex"
              justifyContent="space-between"
            >
              <CardServices />
              <CardServices />
              <CardServices />
            </Box>
            <Box
              h="144px"
              w="1128px"
              display="flex"
              justifyContent="space-between"
            ></Box>
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
