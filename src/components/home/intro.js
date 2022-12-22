import {
  Button,
  Box,
  Center,
  Flex,
  Image,
  Heading,
  VStack,
} from "@chakra-ui/react";

import { WavingHand } from "../../components/icons";

export default function intro() {
  return (
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
              w="212px"
              h="40px"
              fontSize="14px"
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
  );
}
