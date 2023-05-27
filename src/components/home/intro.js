import {
  Text,
  Box,
  Flex,
  Heading,
  VStack,
  useMediaQuery,
  chakra,
} from "@chakra-ui/react";

import Image from "next/image";

import ButtonContactWithUs from "components/general/buttons/buttonContactWithUs";

export default function Intro(props) {
  const [isMobileOrTablet] = useMediaQuery("(max-width: 1280px)");
  const { title, subtitle, text, buttonText } = props;

  if (isMobileOrTablet) {
    return (
      <Flex
        justify="center"
        h={["100vh", null, null, null, null, null]}
        bg="brand.warmBackground"
        alignItems="center"
        flexDirection="column"
      >
        <VStack
          w={[320, null, 528, null, null, null]}
          pt={["40px", null, "80px", null, null, null]}
          pb={["40px", null, "80px", null, null, null]}
          justifyContent="space-around"
          align="stretch"
        >
          <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="center" width="100%" mb="8px">
              <Image
                alignSelf="center"
                width={154}
                height={154}
                src={`${process.env.basePath}/img/digital-workplace.png`}
                alt="Trabajadores ON LINE Marketing Digital"
              ></Image>
            </Box>
            <Heading
              as="h2"
              fontSize={["22px", null, null, null, null, null]}
              fontWeight="bold"
              color="brand.main"
              lineHeight="1"
              mb="8px"
            >
              {title}
            </Heading>
            <Heading
              as="h1"
              fontSize={["24px", null, null, null, null, null]}
              fontWeight="bold"
              color="brand.text"
              lineHeight="1"
              mb="16px"
            >
              {subtitle}
            </Heading>
          </Box>
          <Box pb={["20px", null, "30px", null, null, null]}>
            <Text>{text}</Text>
          </Box>
          <ButtonContactWithUs buttonText={buttonText} />
        </VStack>
      </Flex>
    );
  } else {
    return (
      <>
        <Flex
          justify="center"
          bg="brand.warmBackground"
          minHeight="500px"
          alignItems="center"
          flexDirection="row"
        >
          <VStack
            w={[320, null, 528, null, 520, null]}
            minHeight={[480, null, 480, null, 320, null]}
            align="stretch"
            justifyContent="space-around"
            spacing="0px"
          >
            <Box>
              <Heading
                as="h2"
                fontSize={["22px", null, null, null, null, null]}
                fontWeight="bold"
                color="brand.main"
                lineHeight="1"
                mb="8px"
              >
                {title}
              </Heading>
              <Heading
                as="h1"
                fontSize={["24px", null, null, null, null, null]}
                fontWeight="bold"
                color="brand.text"
                lineHeight="1"
              >
                {subtitle}
              </Heading>
            </Box>
            <Text>{text}</Text>
            <Box>
              <ButtonContactWithUs buttonText={buttonText} />
            </Box>
          </VStack>
          <Box marginLeft="140px">
            <Image
              width={256}
              height={256}
              src={`${process.env.basePath}/img/digital-workplace.png`}
              alt="Trabajadores ON LINE Marketing Digital"
            ></Image>
          </Box>
        </Flex>
      </>
    );
  }
}
