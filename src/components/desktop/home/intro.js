
import {
    Text,
    Box,
    Flex,
    Heading,
    VStack,
  } from "@chakra-ui/react";
  import dynamic from "next/dynamic";
  
  const ButtonContactWithUs = dynamic(() => import("components/general/buttons/buttonContactWithUs"), {
    ssr: false,
  });
  
  import Image from "next/image";
function desktopHomeIntro(props) {
const { title, subtitle, text, buttonText } = props;
  return (
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
        <Box marginLeft="140px" width="256px" height="256px">
          <Image
            width={256}
            height={256}
            src={`${process.env.basePath}/img/digital-workplace.png`}
            alt="Trabajadores ON LINE Marketing Digital"
            placeholder="blur"
            blurDataURL="url"
          ></Image>
        </Box>
        </Flex>
  )
}

export default desktopHomeIntro;