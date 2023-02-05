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

export default function intro(props) {
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
            as="h1"
            fontSize={["18px", "21px", "21px", "21px", "21px", null]}
            fontWeight="normal"
            mb={["16px", "16px", "16px", "16px", "16px", null]}
          >
            {title}
          </Heading>
          <Heading
            as="h2"
            fontSize={["30px", "36px", "30px", "38px", "38px", null]}
            lineHeight={["133%", "120%", "120%", "120%", null, null]}
          >
            {subtitle}
          </Heading>
        </Box>
        <Box
          h={[140, 280, 280, 280, 280, null]}
          boxShadow="0px 4px 50px rgba(0, 0, 0, 0.1)"
        >
          <Image
            w={[320, 440, 728, 952, 1128, null]}
            h={[140, 280, 280, 280, 280, null]}
            src="img/Placeholder1128x280.jpg"
            alt="home-image"
            borderRadius="9px 9px 0px 0px"
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
          <Box w={[320, 440, 728, 952, 608, null]}>
            <Heading
              as="h3"
              fontSize={["16px", "16px", "18px", "18px", "18px", null]}
              fontWeight="light"
              mt={["24px", "24px", "24px", "24px", "24px", null]}
              mb={["24px", "24px", "24px", "24px", "24px", null]}
            >
              {text}
            </Heading>
            {!isMobile ? (
              <Heading
                as="h4"
                fontSize={[null, null, "18px", "18px", "18px", null]}
                fontWeight="bold"
                mb="24px"
              >
                {cta}
              </Heading>
            ) : (
              <></>
            )}
            <Button
              bg="brand.red"
              color="brand.white"
              mb={["32px", "32px", "32px", "32px", "32px", null]}
              w={[204, 204, 204, 204, 204, null]}
              h={["32px", "32px", "32px", "32px", "32px", null]}
              fontSize={["14px", "14px", "14px", "14px", "14px", null]}
              verticalAlign="text-bottom"
              borderRadius="999px"
              rightIcon={<WavingHand />}
              alignSelf="center"
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
}
