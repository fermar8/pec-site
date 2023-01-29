import {
  Button,
  Box,
  Flex,
  Image,
  Text,
  Tag,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import Link from "next/link";

export default function about() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <Flex
        justify="center"
        alignItems="center"
        bg="brand.beige"
        h={[null, 686, null, null, null, null]}
      >
        <VStack
          w={[320, 440, null, null, null, null]}
          h={[689, 606, null, null, null, null]}
          display="flex"
          flexDirection="column"
          spacing="0"
          bg="brand.white"
        >
          <Box
            h={[227, 227, null, null, null, null]}
            w={[320, 440, null, null, null, null]}
          >
            <Image
              w={[320, 440, null, null, null, null]}
              h={[227, 227, null, null, null, null]}
              src="img/Placeholder1128x280.jpg"
              alt="home-image"
            ></Image>
          </Box>
          <VStack
            w={[320, 440, null, null, null, null]}
            bg="brand.white"
            spacing="0"
          >
            <Box
              h={[307, 300, null, null, null, null]}
              w={[280, 400, null, null, null, null]}
              display="flex"
              flexDirection="column"
            >
              <Box
                h={["16px", "16px", null, null, null, null]}
                w={[199, 199, null, null, null, null]}
                mt={["40px", "40px", null, null, null, null]}
                fontSize={["18px", "18px", null, null, null, null]}
              >
                <h6>Coneix el nostre equip</h6>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                h={["40px", "40px", null, null, null, null]}
                w={[185, 185, null, null, null, null]}
                mb={["24px", "24px", null, null, null, null]}
                fontSize={["24px", "24px", null, null, null, null]}
                fontWeight="bold"
              >
                <h5>Sobre nosaltres</h5>
              </Box>
              <Box
                w={[280, 400, null, null, null, null]}
                h={[227, null, null, null, null, null]}
                display="flex"
                flexDirection="column"
              >
                <Box
                  maxH={[132, 148, null, null, null, null]}
                  mb={["24px", "24px", null, null, null, null]}
                  fontSize={["16px", "16px", null, null, null, null]}
                  fontWeight="light"
                  lineHeight="22px"
                >
                  <p>
                    Coneix el nostre equip multidisciplinar format per tres
                    talents europeus en l’àmbit digital: Ferransito_el_dev;
                    Eudald_the_Controller & designzone.
                  </p>
                </Box>
                <Box
                  h={["68px", "30px", null, null, null, null]}
                  w={[247, 372, null, null, null, null]}
                  display="flex"
                  justifyContent="space-between"
                  flexWrap="wrap"
                >
                  <Tag
                    bg="brand.pureWhite"
                    color="brand.red"
                    maxW={["140px", null, null, null, null, null]}
                    h={["30px", null, null, null, null, null]}
                    fontSize="14px"
                    fontWeight="bold"
                    textAlign="center"
                    border="1px"
                    borderColor="brand.red"
                    borderRadius="999"
                  >
                    <p>Multidisciplinar</p>
                  </Tag>
                  <Tag
                    bg="brand.pureWhite"
                    color="brand.red"
                    maxW={["140px", null, null, null, null, null]}
                    h={["30px", null, null, null, null, null]}
                    fontSize="14px"
                    fontWeight="bold"
                    textAlign="center"
                    border="1px"
                    borderColor="brand.red"
                    borderRadius="999"
                  >
                    Àmbit Digital
                  </Tag>
                  <Tag
                    bg="brand.pureWhite"
                    color="brand.red"
                    maxW={["140px", null, null, null, null, null]}
                    h={["30px", null, null, null, null, null]}
                    fontSize="14px"
                    fontWeight="bold"
                    textAlign="center"
                    border="1px"
                    borderColor="brand.red"
                    borderRadius="999"
                  >
                    Emprenedoria
                  </Tag>
                </Box>
                <Box
                  h={["20px", "20px", null, null, null, null]}
                  maxW={["110px", "110px", null, null, null, null]}
                  mt={["54px", "54px", null, null, null, null]}
                  fontSize={["16px", null, null, null, null, null]}
                  fontWeight="medium"
                  color="brand.red"
                  textDecoration="underline"
                >
                  <Link href="/">Veure l'equip</Link>
                </Box>
              </Box>
            </Box>
          </VStack>
        </VStack>
      </Flex>
    );
  } else {
    return (
      <Flex justify="center" alignItems="center" bg="brand.beige">
        <VStack
          w={[null, null, 728, null, null, null]}
          h={[null, null, 640, null, null, null]}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          align="stretch"
          spacing="0px"
        >
          <Box
            h={[null, null, 480, null, null, null]}
            w={[null, null, 728, null, null, null]}
            bg="brand.pureWhite"
            borderRadius="0px 9px 0px 0px"
            display="flex"
          >
            <Box
              h={[null, null, 480, null, null, null]}
              w={[null, null, 346, null, null, null]}
            >
              <Image
                w={[null, null, 346, null, null, null]}
                h={[null, null, 480, null, null, null]}
                src="img/Placeholder1128x280.jpg"
                alt="home-image"
                borderRadius="9px 0px 0px 9px"
              ></Image>
            </Box>
            <Box
              h={[null, null, 480, null, null, null]}
              w={[null, null, 382, null, null, null]}
            >
              <Box
                h={[null, null, 404, null, null, null]}
                w={[null, null, 342, null, null, null]}
                mt={[null, null, "40px", null, null, null]}
                ml={[null, null, "20px", null, null, null]}
                display="flex"
                flexDirection="column"
              >
                <Box
                  h={[null, null, "16px", null, null, null]}
                  w={[null, null, 200, null, null, null]}
                  fontSize={[null, null, "18px", null, null, null]}
                >
                  <h6>Coneix el nostre equip</h6>
                </Box>
                <Box
                  h={[null, null, "40px", null, null, null]}
                  w={[null, null, 186, null, null, null]}
                  fontSize={[null, null, "24px", null, null, null]}
                  fontWeight="bold"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <h5>Sobre nosaltres</h5>
                </Box>
                <Box
                  w={[null, null, 342, null, null, null]}
                  h={[null, null, 348, null, null, null]}
                  mt={[null, null, "24px", null, null, null]}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Text fontSize={[null, null, "16px", null, null, null]}>
                    Coneix el nostre equip multidisciplinar format per tres
                    talents europeus en l’àmbit digital: Ferransito_el_dev;
                    Eudald_the_Controller & designzone
                  </Text>
                  <Text
                    fontSize={[null, null, "16px", null, null, null]}
                    fontWeight="bold"
                  >
                    Comença de zero o contacta'ns per a millorar la teva pàgina
                    web.
                  </Text>
                  <Box
                    h={[null, null, "68px", null, null, null]}
                    w={[null, null, 247, null, null, null]}
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-between"
                  >
                    <Tag
                      bg="brand.pureWhite"
                      color="brand.red"
                      w="129px"
                      h="30px"
                      fontSize="14px"
                      fontWeight="bold"
                      verticalAlign="text-bottom"
                      border="1px"
                      borderColor="brand.red"
                      borderRadius="999"
                      alignSelf="center"
                    >
                      Multidisciplinar
                    </Tag>
                    <Tag
                      bg="brand.pureWhite"
                      color="brand.red"
                      w="110px"
                      h="30px"
                      fontSize="14px"
                      fontWeight="bold"
                      verticalAlign="text-bottom"
                      border="1px"
                      borderColor="brand.red"
                      borderRadius="999"
                      alignSelf="center"
                    >
                      Àmbit Digital
                    </Tag>
                    <Tag
                      bg="brand.pureWhite"
                      color="brand.red"
                      w="117px"
                      h="30px"
                      fontSize="14px"
                      fontWeight="bold"
                      verticalAlign="text-bottom"
                      border="1px"
                      borderColor="brand.red"
                      borderRadius="999"
                      alignSelf="center"
                    >
                      Emprenedoria
                    </Tag>
                  </Box>
                  <Box
                    h="20px"
                    w="94px"
                    fontSize="14px"
                    fontWeight="medium"
                    color="brand.red"
                    textDecoration="underline"
                  >
                    <Link href="/">Veure l'equip</Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Flex>
    );
  }
}
