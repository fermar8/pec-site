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
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex justify="center" alignItems="center" bg="brand.beige">
      <VStack
        mt={["20px", "20px", "40px", "80px", null, null]}
        mb={[null, "40px", "80px", "80px", null, null]}
        w={[320, 440, 728, 952, null, null]}
        h={[508, 651, 600, 624, null, null]}
        align="stretch"
        spacing="0px"
      >
        <Box
          h={[184, 169, "96px", 124, null, null]}
          mb={["16px", "16px", "16px", "16px", null, null]}
        >
          <Heading
            as="h1"
            fontSize={["18px", "21px", "21px", "21px", null, null]}
            fontWeight="normal"
            mb={["16px", "16px", "16px", "16px", null, null]}
          >
            Pàgines web web web web web
          </Heading>
          <Heading
            as="h2"
            fontSize={["30px", "36px", "30px", "38px", null, null]}
            lineHeight={["133%", "120%", "120%", "120%", null, null]}
          >
            Agencia Marketing Digital y Diseño Web Barcelona
          </Heading>
        </Box>
        <Box
          h={[140, 280, 280, 280, null, null]}
          boxShadow="0px 4px 50px rgba(0, 0, 0, 0.1)"
        >
          <Image
            w={[320, 440, 728, 952, null, null]}
            h={[140, 280, 280, 280, null, null]}
            src="img/Placeholder1128x280.jpg"
            alt="home-image"
            borderRadius="9px 9px 0px 0px"
          ></Image>
        </Box>
        <Box
          h={[152, 130, 208, 208, null, null]}
          w={[320, 440, 728, 952, null, null]}
          display="flex"
          flexDirection="column"
          align="center"
          bg="brand.white"
          borderRadius="0px 0px 9px 9px"
          boxShadow="0px 4px 50px rgba(0, 0, 0, 0.1)"
        >
          <Heading
            as="h3"
            fontSize={["16px", "16px", "18px", "18px", null, null]}
            fontWeight="light"
            mt={["24px", "24px", "24px", "24px", null, null]}
            mb={["24px", "24px", "24px", "24px", null, null]}
          >
            Dissenyem i desenvolupem pàgines webs ràpides, visualment atractives
            i amb una bona presència en línia.
          </Heading>
          {!isMobile ? (
            <Heading as="h4" fontSize={[null, null, "18px", "18px", null, null]} fontWeight="bold" mb="24px">
              Comença de zero o contacta'ns per a millorar la teva pàgina web.
            </Heading>
          ) : (
            <></>
          )}
          <Button
            bg="brand.red"
            color="brand.white"
            mb={["32px", "32px", "32px", "32px", null, null]}
            w={[204, 204, 204, 204, null, null]}
            h={["32px", "32px", "32px", "32px", null, null]}
            fontSize={["14px", "14px", "14px", "14px", null, null]}
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
