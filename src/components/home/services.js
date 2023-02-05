import {
  Button,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import { WavingHand } from "../../components/icons";
import CardService from "./services/cardService";

export default function services(props) {
  const {
    title,
    mainText,
    buttonText,
    webTitle,
    webText,
    designTitle,
    designText,
    uxTitle,
    uxText,
    seoTitle,
    seoText,
    semTitle,
    semText,
    socialTitle,
    socialText,
  } = props;
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
              {title}
            </Heading>
            <Heading
              as="h6"
              fontSize={["18px", "18px", null, null, null, null]}
              lineHeight={["40px", "40px", null, null, null, null]}
              fontWeight="light"
            >
              {mainText}
            </Heading>
          </Box>
          <Box
            h={[1136, 1096, null, null, null, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <CardService title={webTitle} text={webText} />
            <CardService title={designTitle} text={designText} />
            <CardService title={uxTitle} text={uxText} />
            <CardService title={seoTitle} text={seoText} />
            <CardService title={semTitle} text={semText} />
            <CardService title={socialTitle} text={socialText} />

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
                <Text>{mainText}</Text>
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
                  {buttonText}
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
          mt={[null, null, "64px", "64px", null, null]}
          mb={[null, null, "64px", "64px", null, null]}
          w={[null, null, 728, 952, null, null]}
          h={[null, null, 1474, 1474, null, null]}
          align="stretch"
        >
          <Box
            w={[null, null, 728, 952, null, null]}
            h={[null, null, "136px", "136px", null, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Heading
              as="h5"
              fontSize={[null, null, "24px", "24px", null, null]}
              fontWeight="semi-bold"
              color="brand.red"
            >
              {title}
            </Heading>
            <Heading
              as="h6"
              fontSize={[null, null, "18px", "18px", null, null]}
              lineHeight={[null, null, "40px", "40px", null, null]}
              fontWeight="light"
            >
              {mainText}
            </Heading>
          </Box>
          <Box
            h={[null, null, 1314, 1314, null, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Box
              h={[null, null, 422, 422, null, null]}
              w={[null, null, 728, 952, null, null]}
              mt={[null, null, "48px", "48px", null, null]}
              mb={[null, null, "48px", "48px", null, null]}
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <CardService title={webTitle} text={webText} />
              <CardService title={designTitle} text={designText} />
            </Box>
            <Box
              h={[null, null, 422, 422, null, null]}
              w={[null, null, 728, 952, null, null]}
              mb={[null, null, "48px", "48px", null, null]}
              display="flex"
              justifyContent="space-between"
            >
              <CardService title={uxTitle} text={uxText} />
              <CardService title={seoTitle} text={seoText} />
            </Box>
            <Box
              h={[null, null, 422, 422, null, null]}
              w={[null, null, 728, 952, null, null]}
              mb={[null, null, "48px", "48px", null, null]}
              display="flex"
              justifyContent="space-between"
            >
              <CardService title={semTitle} text={semText} />
              <CardService title={socialTitle} text={socialText} />
            </Box>
            <Box
              minHeight={[null, null, 144, 144, null, null]}
              h={[null, null, 144, 144, null, null]}
              w={[null, null, 728, 952, null, null]}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                h={[null, null, "80px", "80px", null, null]}
                w={[null, null, 728, 952, null, null]}
                textAlign="center"
                fontSize={[null, null, "16px", "16px", null, null]}
                lineHeight={[null, null, "40px", "40px", null, null]}
                fontWeight="light"
              >
                <Text>{mainText}</Text>
              </Box>
              <Box
                h={[null, null, "32px", "32px", null, null]}
                w={[null, null, 204, 204, null, null]}
              >
                <Button
                  bg="brand.red"
                  color="brand.white"
                  w={[null, null, 204, 204, null, null]}
                  h={[null, null, "32px", "32px", null, null]}
                  fontSize={[null, null, "14px", "14px", null, null]}
                  verticalAlign="text-bottom"
                  borderRadius="999"
                  rightIcon={<WavingHand />}
                >
                  {buttonText}
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
          mt={[null, null, null, null, "64px", null]}
          mb={[null, null, null, null, "64px", null]}
          w={[null, null, null, null, 1128, null]}
          h={[null, null, null, null, 1100, null]}
          align="stretch"
        >
          <Box
            w={[null, null, null, null, 1000, null]}
            h={[null, null, null, null, 136, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Heading
              as="h5"
              fontSize={[null, null, null, null, "32px", null]}
              fontWeight="semi-bold"
              color="brand.red"
            >
              {title}
            </Heading>
            <Heading
              as="h6"
              fontSize={[null, null, null, null, "22px", null]}
              fontWeight="light"
            >
              {mainText}
            </Heading>
          </Box>
          <Box
            h={[null, null, null, null, 940, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Box
              h={[null, null, null, null, 422, null]}
              w={[null, null, null, null, 1128, null]}
              mt={[null, null, null, null, "48px", null]}
              mb={[null, null, null, null, "48px", null]}
              display="flex"
              justifyContent="space-between"
            >
              <CardService title={webTitle} text={webText} />
              <CardService title={designTitle} text={designText} />
              <CardService title={uxTitle} text={uxText} />
            </Box>
            <Box
              h={[null, null, null, null, 326, null]}
              w={[null, null, null, null, 1128, null]}
              mb={[null, null, null, null, "48px", null]}
              display="flex"
              justifyContent="space-between"
            >
              <CardService title={seoTitle} text={seoText} />
              <CardService title={semTitle} text={semText} />
              <CardService title={socialTitle} text={socialText} />
            </Box>
            <Box
              minHeight={[null, null, null, null, 144, null]}
              h={[null, null, null, null, 144, null]}
              w={[null, null, null, null, 1128, null]}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                h={[null, null, null, null, "80px", null]}
                w={[null, null, null, null, 821, null]}
                textAlign="center"
                fontSize={[null, null, null, null, "22px", null]}
                fontWeight="light"
              >
                <Text>
                  {mainText}
                </Text>
              </Box>
              <Box
                h={[null, null, null, null, "40px", null]}
                w={[null, null, null, null, "212px", null]}
              >
                <Button
                  bg="brand.red"
                  color="brand.white"
                  mt={[null, null, null, null, "24px", null]}
                  w={[null, null, null, null, 204, null]}
                  h={[null, null, null, null, "32px", null]}
                  fontSize={[null, null, null, null, "14px", null]}
                  verticalAlign="text-bottom"
                  borderRadius="999"
                  rightIcon={<WavingHand />}
                >
                  {buttonText}
                </Button>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Flex>
    );
  }
}
