import {
  Button,
  Box,
  Flex,
  Image,
  Heading,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import { WavingHand } from "../../components/icons";

export default function intro() {
  const isMobile = useMediaQuery("(max-width: 480px)");
  return (
    <Flex justify="center" alignItems="center" bg="brand.beige">
      <VStack
        mt={["20px", null, null, null, null, null]}
        w={[320, null, null, null, null, null]}
        h={[508, null, null, null, null, null]}
        align="stretch"
        spacing="0px"
      >
        <Box h={[184, null, null, null, null, null]}>
          <Heading
            as="h1"
            fontSize={[18, null, null, null, null, null]}
            fontWeight="normal"
            mb={["16px", null, null, null, null, null]}
          >
            Pàgines web web web web web
          </Heading>
          <Heading as="h2" fontSize={[30, null, null, null, null, null]}>
            Agencia Marketing Digital y Diseño Web Barcelona
          </Heading>
        </Box>
        <Box
          h={[140, null, null, null, null, null]}
          boxShadow="0px 4px 50px rgba(0, 0, 0, 0.1)"
        >
          <Image
            w={[320, null, null, null, null, null]}
            h={[140, null, null, null, null, null]}
            src="img/Placeholder1128x280.jpg"
            alt="home-image"
            borderRadius="9px 9px 0px 0px"
          ></Image>
        </Box>
        <Box
          h={[152, null, null, null, null, null]}
          w={[320, null, null, null, null, null]}
          display="flex"
          flexDirection="column"
          align="center"
          bg="brand.white"
          borderRadius="0px 0px 9px 9px"
          boxShadow="0px 4px 50px rgba(0, 0, 0, 0.1)"
        >
          <Heading
            as="h3"
            fontSize={[16, null, null, null, null, null]}
            fontWeight="light"
            mt={["24px", null, null, null, null, null]}
            mb={["24px", null, null, null, null, null]}
          >
            Dissenyem i desenvolupem pàgines webs ràpides, visualment atractives
            i amb una bona presència en línia.
          </Heading>
          {!isMobile ? (
            <Heading as="h4" fontSize="18px" fontWeight="bold" mb="24px">
              Comença de zero o contacta'ns per a millorar la teva pàgina web.
            </Heading>
          ) : (
            <></>
          )}
          <Button
            bg="brand.red"
            color="brand.white"
            mb={["32px", null, null, null, null, null]}
            w={[204, null, null, null, null, null]}
            h={[32, null, null, null, null, null]}
            fontSize={[14, null, null, null, null, null]}
            verticalAlign="text-bottom"
            borderRadius="999px"
            rightIcon={<WavingHand />}
            alignSelf="center"
          >
            Contacta amb nosaltres
          </Button>
        </Box>
      </VStack>
    </Flex>
  );
}
