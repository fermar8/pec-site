import {
  Button,
  Box,
  Flex,
  Image,
  Tag,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import Link from "next/link";

export default function about() {
  const isMobile = useMediaQuery("(max-width: 480px)");
  if (isMobile) {
    return (
      <Flex justify="center" alignItems="center" bg="brand.beige">
        <VStack
          w={[320, null, null, null, null, null]}
          h={[689, null, null, null, null, null]}
          display="flex"
          flexDirection="column"
          spacing="0px"
        >
          <Box
            h={[227, null, null, null, null, null]}
            w={[320, null, null, null, null, null]}
          >
            <Image
              w={[320, null, null, null, null, null]}
              h={[227, null, null, null, null, null]}
              src="img/Placeholder1128x280.jpg"
              alt="home-image"
            ></Image>
          </Box>
          <Box
            h={[307, null, null, null, null, null]}
            w={[280, null, null, null, null, null]}
            display="flex"
            flexDirection="column"
          >
            <Box
              h={["16px", null, null, null, null, null]}
              w={[199, null, null, null, null, null]}
              mt={["40px", null, null, null, null, null]}
              fontSize={["18px", null, null, null, null, null]}
            >
              <h6>Coneix el nostre equip</h6>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              h={["40px", null, null, null, null, null]}
              w={[185, null, null, null, null, null]}
              mb={["24px", null, null, null, null, null]}
              fontSize={["24px", null, null, null, null, null]}
              fontWeight="bold"
            >
              <h5>Sobre nosaltres</h5>
            </Box>
            <Box
              w={[280, null, null, null, null, null]}
              h={[227, null, null, null, null, null]}
              display="flex"
              flexDirection="column"
              mb={["55px", null, null, null, null, null]}
            >
              <Box
                maxH={[132, null, null, null, null, null]}
                mb={["27px", null, null, null, null, null]}
                fontSize={["16px", null, null, null, null, null]}
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
                h={["68px", null, null, null, null, null]}
                w={[247, null, null, null, null, null]}
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
            </Box>
            <Box
              h={["20px", null, null, null, null, null]}
              maxW={["110px", null, null, null, null, null]}
              fontSize={["16px", null, null, null, null, null]}
              fontWeight="medium"
              color="brand.red"
              textDecoration="underline"
            >
              <Link href="/">Veure l'equip</Link>
            </Box>
          </Box>
        </VStack>
      </Flex>
    );
  } else {
    return (
      <Flex justify="center" alignItems="center" bg="brand.beige">
        <VStack
          w={[280, 280, 728, 952, 1128]}
          h="640px"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          align="stretch"
          spacing="0px"
        >
          <Box h="480px" w="1128px" bg="brand.pureWhite" display="flex">
            <Box h="480px" w="453px">
              <Image
                w="453px"
                h="480px"
                src="img/Placeholder1128x280.jpg"
                alt="home-image"
                borderRadius="9px 0px 0px 9px"
              ></Image>
            </Box>
            <Box h="480px" w="40px"></Box>
            <Box h="480px" w="435px">
              <Box
                h="284px"
                w="435px"
                mt="56px"
                display="flex"
                flexDirection="column"
              >
                <Box h="16px" w="231px" fontSize="21px">
                  <h6>Coneix el nostre equip</h6>
                </Box>
                <Box
                  h="64px"
                  w="231px"
                  fontSize="30px"
                  fontWeight="bold"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <h5>Sobre nosaltres</h5>
                </Box>
                <Box h="24px"></Box>
                <Box
                  w="435px"
                  h="120px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <p>
                    Coneix el nostre equip multidisciplinar format per tres
                    talents europeus en l’àmbit digital.
                  </p>
                  <Box
                    h="30px"
                    w="372px"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Button
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
                    </Button>
                    <Button
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
                    </Button>
                    <Button
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
                    </Button>
                  </Box>
                </Box>
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
            <Box h="480px" w="200px"></Box>
          </Box>
        </VStack>
      </Flex>
    );
  }
}
