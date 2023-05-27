import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";

import TagWhiteBg from "../general/buttons/tagWhiteBg";
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
        bg="brand.warmBackground"
        pt="40px"
        pb="40px"
      >
        <VStack
          w={[320, 440, null, null, null, null]}
          display="flex"
          flexDirection="column"
          bg="brand.whiteBackground"
          pb="40px"
        >
          <Box
            h={[227, 227, null, null, null, null]}
            w={[320, 440, null, null, null, null]}
            position="relative"
          >
            <Image
              fill
              src={`${process.env.basePath}/img/home/home-intro.png`}
              alt="home-about"
            ></Image>
          </Box>
          <VStack
            w={[320, 440, null, null, null, null]}
            bg="brand.whiteBackground"
          >
            <Box
              w={[280, 400, null, null, null, null]}
              display="flex"
              flexDirection="column"
            >
              <Box
                w={[199, 199, null, null, null, null]}
                mt={["40px", "40px", null, null, null, null]}
                fontSize={["18px", "18px", null, null, null, null]}
                color="brand.main"
              >
                <Text>{knowUs}</Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
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
                display="flex"
                flexDirection="column"
              >
                <Box
                  mb={["24px", "24px", null, null, null, null]}
                  fontSize={["16px", "16px", null, null, null, null]}
                  fontWeight="light"
                  lineHeight="22px"
                >
                  <Text>{text}</Text>
                </Box>
                <Box
                  w={[247, 372, null, null, null, null]}
                  display="flex"
                  justifyContent="space-between"
                  flexWrap="wrap"
                >
                  <TagWhiteBg tagText={tag} />
                  <TagWhiteBg tagText={tag2} />
                  <TagWhiteBg tagText={tag3} />
                </Box>
                <Box
                  mt={["24px", "54px", null, null, null, null]}
                  fontSize={["16px", null, null, null, null, null]}
                  fontWeight="medium"
                  color="brand.main"
                  textDecoration="underline"
                >
                  <Link href="/about">{knowUs2}</Link>
                </Box>
              </Box>
            </Box>
          </VStack>
        </VStack>
      </Flex>
    );
  } else {
    return (
      <Flex justify="center" alignItems="center" bg="brand.warmBackground">
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
            bg="brand.whiteBackground"
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
                fill
                src={`${process.env.basePath}/img/home/home-intro.png`}
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
                  mb="8px"
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
                  <Text
                    fontSize={[null, null, "16px", "16px", "16px", null]}
                    mb="8px"
                  >
                    {text}
                  </Text>
                  <Text
                    fontSize={[null, null, "16px", "16px", "16px", null]}
                    mb="8px"
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
                    <TagWhiteBg tagText={tag} />
                    <TagWhiteBg tagText={tag2} />
                    <TagWhiteBg tagText={tag3} />
                  </Box>
                  <Box
                    h={[null, null, "20px", "20px", "20px", null]}
                    fontSize={[null, null, "16px", "16px", "16px", null]}
                    fontWeight="medium"
                    color="brand.main"
                    textDecoration="underline"
                  >
                    <Link href="/about">{knowUs2}</Link>
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
