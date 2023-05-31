import {
    Text,
    Box,
    Flex,
    Heading,
    VStack,
  } from "@chakra-ui/react";
  import dynamic from "next/dynamic";
  
  const ButtonContactWithUs = dynamic(() => import("../../general/buttons/buttonContactWithUs"), {
    ssr: false,
  });
  
  import Image from "next/image";

function mobileHomeIntro(props) {
const { title, subtitle, text, buttonText } = props;
  return (
    <Flex
        bg="brand.warmBackground"
        pt="80px"
        pb="80px"
        width="100vw"
        height="100%"
        alignItems="center"
        flexDirection="column"
      >
        <VStack w={[320, null, 528, null, null, null]}>
          <Box>
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              height="154px"
              mb="8px"
            >
              <Image
                width={154}
                height={154}
                src={`${process.env.basePath}/img/digital-workplace.png`}
                alt="Trabajadores ON LINE Marketing Digital"
                placeholder="blur"
                blurDataURL="url"
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
            <Box pb="30px">
              <Text>{text}</Text>
            </Box>
          </Box>
          <ButtonContactWithUs buttonText={buttonText} />
        </VStack>
      </Flex>
  )
}

export default mobileHomeIntro