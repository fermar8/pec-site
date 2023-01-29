import {
  Button,
  Box,
  Flex,
  Heading,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import { WavingHand } from "../../components/icons";
import CardService from "./services/cardService";

export default function services() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1280px)"
  );
  if (isMobile) {
    return (
      <Flex justify="center" alignItems="center" bg="brand.pureWhite">
        <VStack
          mt={["64px", "64px", null, null, null, null]}
          mb={["64px", "64px", null, null, null, null]}
          w={[320, 440, null, null, null, null]}
          h={[1456, 1376, null, null, null, null]}
          align="stretch"
        >
          <Box
            w={[320, 440, null, null, null, null]}
            h={[296, 256, null, null, null, null]}
            mb={["24px", null, null, null, null, null]}
            display="flex"
            flexDirection="column"
          >
            <Heading
              as="h5"
              fontSize={["24px", "24px", null, null, null, null]}
              lineHeight={["40px", "40px", null, null, null, null]}
              fontWeight="semi-bold"
              color="brand.red"
              mb={["16px", "16px", null, null, null, null]}
            >
              Serveis web per a petites i mitjanes empreses
            </Heading>
            <Heading
              as="h6"
              fontSize={["18px", "18px", null, null, null, null]}
              lineHeight={["40px", "40px", null, null, null, null]}
              fontWeight="light"
            >
              Que vulguin començar de zero o millorar la seva pàgina web
              existent, captar nous clients, conèixer als existents i millorar
              la conversió de venda en pàgina.
            </Heading>
          </Box>
          <Box
            h={[1136, 1096, null, null, null, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <CardService />
            <CardService />
            <CardService />
            <CardService />
            <CardService />
            <CardService />

            <Box
              h={[224, 184, null, null, null, null]}
              w={[320, 440, null, null, null, null]}
              mt={["16px", "16px", null, null, null, null]}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                textAlign="center"
                mb={["24px", "24px", null, null, null, null]}
                fontSize={["16px", "16px", null, null, null, null]}
                lineHeight={["40px", "40px", null, null, null, null]}
                fontWeight="light"
              >
                <p>
                  {" "}
                  Que vulguin començar de zero o millorar la seva pàgina web
                  existent, captar nous clients, conèixer als existents i
                  millorar la conversió de venda en pàgina.
                </p>
              </Box>
              <Box
                h={["40px", "40px", null, null, null, null]}
                w={[212, 212, null, null, null, null]}
              >
                <Button
                  bg="brand.red"
                  color="brand.white"
                  w={[204, 204, null, null, null, null]}
                  h={["32px", "32px", null, null, null, null]}
                  fontSize={["14px", "14px", null, null, null, null]}
                  verticalAlign="text-bottom"
                  borderRadius="999"
                  rightIcon={<WavingHand />}
                >
                  Contacta amb nosaltres
                </Button>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Flex>
    );
  } else if (isTablet) {
    return (
      <Flex justify="center" alignItems="center" bg="brand.pureWhite">
        <VStack
          mt={[null, null, "64px", null, null, null]}
          mb={[null, null, "64px", null, null, null]}
          w={[null, null, 728, null, null, null]}
          h={[null, null, 1474, null, null, null]}
          align="stretch"
        >
          <Box
            w={[null, null, 728, null, null, null]}
            h={[null, null, "136px", null, null, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Heading
              as="h5"
              fontSize={[null, null, "24px", null, null, null]}
              fontWeight="semi-bold"
              color="brand.red"
            >
              Serveis web per a petites i mitjanes empreses
            </Heading>
            <Heading
              as="h6"
              fontSize={[null, null, "18px", null, null, null]}
              lineHeight={[null, null, "40px", null, null, null]}
              fontWeight="light"
            >
              Que vulguin començar de zero o millorar la seva pàgina web
              existent, captar nous clients, conèixer als existents i millorar
              la conversió de venda en pàgina.
            </Heading>
          </Box>
          <Box
            h={[null, null, 1314, null, null, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Box
              h={[null, null, 422, null, null, null]}
              w={[null, null, 728, null, null, null]}
              mt={[null, null, "48px", null, null, null]}
              mb={[null, null, "48px", null, null, null]}
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <CardService />
              <CardService />
            </Box>
            <Box
              h={[null, null, 422, null, null, null]}
              w={[null, null, 728, null, null, null]}
              mb={[null, null, "48px", null, null, null]}
              display="flex"
              justifyContent="space-between"
            >
              <CardService />
              <CardService />
            </Box>
            <Box
              h={[null, null, 422, null, null, null]}
              w={[null, null, 728, null, null, null]}
              mb={[null, null, "48px", null, null, null]}
              display="flex"
              justifyContent="space-between"
            >
              <CardService />
              <CardService />
            </Box>
            <Box
              h={[null, null, 144, null, null, null]}
              w={[null, null, 728, null, null, null]}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                h={[null, null, "80px", null, null, null]}
                w={[null, null, 728, null, null, null]}
                textAlign="center"
                fontSize={[null, null, "16px", null, null, null]}
                fontHeight={[null, null, "40px", null, null, null]}
                fontWeight="light"
              >
                <p>
                  Que vulguin començar de zero o millorar la seva pàgina web
                  existent, captar nous clients, conèixer als existents i
                  millorar la conversió de venda en pàgina.
                </p>
              </Box>
              <Box h={[null, null, "32px", null, null, null]} w={[null, null, 204, null, null, null]}>
                <Button
                  bg="brand.red"
                  color="brand.white"
                  w={[null, null, 204, null, null, null]}
                  h={[null, null, "32px", null, null, null]}
                  fontSize={[null, null, "14px", null, null, null]}
                  verticalAlign="text-bottom"
                  borderRadius="999"
                  rightIcon={<WavingHand />}
                >
                  Contacta amb nosaltres
                </Button>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Flex>
    );
  } else {
    return (
      <Flex justify="center" alignItems="center" bg="brand.pureWhite">
        <VStack
          mt={["64px", null, null, null, null, null]}
          mb={["64px", null, null, null, null, null]}
          w={[320, null, null, null, null, null]}
          h="1100px"
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
              mt="48px"
              mb="48px"
              display="flex"
              justifyContent="space-between"
            >
              <CardService />
              <CardService />
              <CardService />
            </Box>
            <Box
              h="374px"
              w="1128px"
              mb="48px"
              display="flex"
              justifyContent="space-between"
            >
              <CardService />
              <CardService />
              <CardService />
            </Box>
            <Box
              h="144px"
              w="1128px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                h="80px"
                w="821px"
                textAlign="center"
                fontSize="22px"
                fontWeight="light"
              >
                <p>
                  {" "}
                  Que vulguin començar de zero o millorar la seva pàgina web
                  existent, captar nous clients, conèixer als existents i
                  millorar la conversió de venda en pàgina.
                </p>
              </Box>
              <Box h="40px" w="212px">
                <Button
                  bg="brand.red"
                  color="brand.white"
                  w="204px"
                  h="32px"
                  fontSize="14px"
                  verticalAlign="text-bottom"
                  borderRadius="999"
                  rightIcon={<WavingHand />}
                >
                  Contacta amb nosaltres
                </Button>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Flex>
    );
  }
}
