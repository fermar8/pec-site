import {
  Box,
  Flex,
  Text,
  Heading,
  Tag,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";
export default function About({
  knowUs,
  title,
  text,
  text2,
  tag,
  tag2,
  tag3,
  knowUs2,
}) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <Flex
        justify="center"
        alignItems="center"
        bg="brand.beige"
        h={[686, 686, null, null, null, null]}
      >
        <VStack
          w={[320, 440, null, null, null, null]}
          h={[606, 606, null, null, null, null]}
          display="flex"
          flexDirection="column"
          spacing="0"
          bg="brand.white"
        >
          <Box
            h={[227, 227, null, null, null, null]}
            w={[320, 440, null, null, null, null]}
            position="relative"
          >
            <Image
              layout="fill"
              src="img/home/home-intro.png"
              alt="home-about"
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
                <Text>{knowUs}</Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                h={["40px", "40px", null, null, null, null]}
                w={[185, 185, null, null, null, null]}
                mb={["24px", "24px", null, null, null, null]}
              >
                <Heading
                  as="h3"
                  fontSize={["24px", "24px", null, null, null, null]}
                  fontWeight="bold"
                >
                  {title}
                </Heading>
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
                  <Text>{text}</Text>
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
                    {tag}
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
                    {tag2}
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
                    {tag3}
                  </Tag>
                </Box>
                <Box
                  h={["20px", "20px", null, null, null, null]}
                  mt={["54px", "54px", null, null, null, null]}
                  fontSize={["16px", null, null, null, null, null]}
                  fontWeight="medium"
                  color="brand.red"
                  textDecoration="underline"
                >
                  <Link href="/">{knowUs2}</Link>
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
          w={[null, null, 728, 952, 1128, null]}
          h={[null, null, 640, 640, 640, null]}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          align="stretch"
          spacing="0px"
        >
          <Box
            h={[null, null, 480, 480, 480, null]}
            w={[null, null, 728, 952, 1128, null]}
            bg="brand.pureWhite"
            borderRadius="0px 9px 0px 0px"
            display="flex"
          >
            <Box
              h={[null, null, 480, 480, 480, null]}
              w={[null, null, 346, 346, 454, null]}
              position="relative"
              borderRadius="9px 0px 0px 9px"
            >
              <Image
                layout="fill"
                src="img/home/home-intro.png"
                alt="home-about"
              ></Image>
            </Box>
            <Box
              h={[null, null, 480, 488, 480, null]}
              w={[null, null, 382, 606, 674, null]}
            >
              <Box
                h={[null, null, 404, 338, 338, null]}
                w={[null, null, 342, 556, 436, null]}
                mt={[null, null, "40px", "40px", "56px", null]}
                ml={[null, null, "20px", "20px", "56px", null]}
                display="flex"
                flexDirection="column"
              >
                <Box
                  h={[null, null, "16px", "16px", "16px", null]}
                  w={[null, null, 200, 200, 232, null]}
                >
                  <Text
                    fontSize={[null, null, "18px", "18px", "21px", null]}
                    fontWeight="light"
                  >
                    {knowUs}
                  </Text>
                </Box>
                <Box
                  h={[null, null, "40px", "40px", "64px", null]}
                  w={[null, null, 186, 186, 232, null]}
                  fontWeight="bold"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Heading
                    as="h3"
                    fontSize={[null, null, "24px", "24px", "30px", null]}
                  >
                    {title}
                  </Heading>
                </Box>
                <Box
                  w={[null, null, 342, 566, 436, null]}
                  h={[null, null, 348, 282, 300, null]}
                  mt={[null, null, "24px", "24px", "24px", null]}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Text fontSize={[null, null, "16px", "16px", "16px", null]}>
                    {text}
                  </Text>
                  <Text
                    fontSize={[null, null, "16px", "16px", "16px", null]}
                    fontWeight="bold"
                  >
                    {text2}
                  </Text>
                  <Box
                    h={[null, null, "68px", "68px", "68px", null]}
                    w={[null, null, 247, 247, 372, null]}
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-between"
                  >
                    <Tag
                      bg="brand.pureWhite"
                      color="brand.red"
                      h="30px"
                      fontSize="14px"
                      fontWeight="bold"
                      verticalAlign="text-bottom"
                      border="1px"
                      borderColor="brand.red"
                      borderRadius="999"
                      alignSelf="center"
                    >
                      {tag}
                    </Tag>
                    <Tag
                      bg="brand.pureWhite"
                      color="brand.red"
                      h="30px"
                      fontSize="14px"
                      fontWeight="bold"
                      verticalAlign="text-bottom"
                      border="1px"
                      borderColor="brand.red"
                      borderRadius="999"
                      alignSelf="center"
                    >
                      {tag2}
                    </Tag>
                    <Tag
                      bg="brand.pureWhite"
                      color="brand.red"
                      h="30px"
                      fontSize="14px"
                      fontWeight="bold"
                      verticalAlign="text-bottom"
                      border="1px"
                      borderColor="brand.red"
                      borderRadius="999"
                      alignSelf="center"
                    >
                      {tag3}
                    </Tag>
                  </Box>
                  <Box
                    h={[null, null, "20px", "20px", "20px", null]}
                    fontSize={[null, null, "16px", "16px", "16px", null]}
                    fontWeight="medium"
                    color="brand.red"
                    textDecoration="underline"
                  >
                    <Link href="/">{knowUs2}</Link>
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
