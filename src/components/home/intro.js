import {
  Text,
  Box,
  Flex,
  Heading,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import Image from 'next/image';

import ButtonContactWithUs from "components/general/buttons/buttonContactWithUs";


export default function Intro(props) {
  const { title, subtitle, text, cta, buttonText } = props;
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex justify="center" alignItems="center" bg="brand.beige">
      <VStack
        mt={["20px", "20px", "40px", "80px", "80px", null]}
        mb={[null, "40px", "80px", "80px", "80px", null]}
        w={[320, 440, 728, 952, 1128, null]}
        h={[584, 651, 600, 624, 582, null]}
        align="stretch"
        spacing="0px"
      >
        <Box
          h={[184, 169, "96px", 124, "82px", null]}
          mb={["16px", "16px", "16px", "16px", "16px", null]}
        >
          <Heading
            as="h2"
            fontSize={["18px", "21px", "21px", "21px", "21px", null]}
            fontWeight="normal"
            mb={["16px", "16px", "16px", "16px", "16px", null]}
          >
            {title}
          </Heading>
          <Heading
            as="h1"
            fontSize={["30px", "36px", "30px", "38px", "38px", null]}
            lineHeight={["133%", "120%", "120%", "120%", null, null]}
          >
            {subtitle}
          </Heading>
        </Box>
        <Box
          h={[140, 280, 280, 280, 280, null]}
          boxShadow="0px 4px 50px rgba(0, 0, 0, 0.1)"
          borderRadius="9px 9px 0px 0px"
          position="relative"
        >
          <Image
            layout="fill"
            src="img/home/home-intro.png"
            alt="home-image"
          ></Image>
        </Box>
        <Box
          h={[208, 186, 208, 208, 204, null]}
          w={[320, 440, 728, 952, 1128, null]}
          display="flex"
          flexDirection="column"
          alignItems="center"
          align="center"
          bg="brand.white"
          borderRadius="0px 0px 9px 9px"
          boxShadow="0px 4px 50px rgba(0, 0, 0, 0.1)"
        >
          <Box w={[320, 440, 728, 808, 952, null]}>
            <Text
              fontSize={["16px", "16px", "18px", "18px", "18px", null]}
              fontWeight="light"
              mt={["24px", "24px", "24px", "24px", "24px", null]}
              mb={["24px", "24px", "24px", "24px", "24px", null]}
            >
              {text}
            </Text>
            {!isMobile ? (
              <Text
                fontSize={[null, null, "18px", "18px", "18px", null]}
                fontWeight="bold"
                mb="24px"
              >
                {cta}
              </Text>
            ) : (
              <></>
            )}
            <ButtonContactWithUs buttonText={buttonText} />
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
}
