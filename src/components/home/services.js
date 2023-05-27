import {
  Box,
  Flex,
  Heading,
  VStack,
  useMediaQuery,
  chakra,
} from "@chakra-ui/react";

import CardService from "./services/cardService";
import  ButtonContactWithUs from "../../components/general/buttons/buttonContactWithUs";

export default function Services(props) {
  const {
    title,
    subtitle,
    mainText,
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
    buttonText,
  } = props;
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1280px)"
  );
  if (isMobile) {
    return (
      <Flex justify="center" bg="brand.whiteBackground" h={[1800, 1720, null, null, null, null]}>
        <VStack
          mt={["64px", "64px", null, null, null, null]}
          mb={["64px", "64px", null, null, null, null]}
          w={[320, 440, null, null, null, null]}
          h={[1680, 1600, null, null, null, null]}
          align="stretch"
        >
          <Box
            w={[320, 440, null, null, null, null]}
            h={[296, 256, null, null, null, null]}
            mb={["40px", null, null, null, null, null]}
            display="flex"
            flexDirection="column"
          >
            <Heading
              as="h2"
              fontSize={["24px", "24px", null, null, null, null]}
              lineHeight={["40px", "40px", null, null, null, null]}
              fontWeight="semi-bold"
              color="brand.main"
              mb={["16px", "16px", null, null, null, null]}
            >
              {title} <br />
              <chakra.span color="brand.text" fontWeight="bold">{subtitle}</chakra.span>
            </Heading>
            <Heading
              as="h3"
              fontSize={["18px", "18px", null, null, null, null]}
              lineHeight={["40px", "40px", null, null, null, null]}
              fontWeight="light"
            >
              {mainText}
            </Heading>
          </Box>
          <Box
            h={[1600, 1300, null, null, null, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <CardService title={webTitle} text={webText} image="web" link="/services/web"/>
            <CardService title={designTitle} text={designText} image="design" link="services/design" />
            <CardService title={uxTitle} text={uxText} image="ux-ui" link="services/ux-ui"/>
            <CardService title={seoTitle} text={seoText} image="seo" link="services/seo"/>
            <CardService title={semTitle} text={semText} image="sem" link="services/sem"/>
            <CardService title={socialTitle} text={socialText} image="social-media" link="services/social-media"/>
          </Box>
        </VStack>
      </Flex>
    );
  } else if (isTablet) {
    return (
      <Flex justify="center" alignItems="center" bg="brand.whiteBackground">
        <VStack
          mt={[null, null, "64px", "64px", null, null]}
          mb={[null, null, "64px", "64px", null, null]}
          w={[null, null, 728, 952, null, null]}
          h={[null, null, 1330, 1330, null, null]}
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
              as="h2"
              fontSize={[null, null, "24px", "24px", null, null]}
              fontWeight="semi-bold"
              color="brand.main"
            >
              {title} <br />
              <chakra.span color="brand.text" fontWeight="bold">{subtitle}</chakra.span>
            </Heading>
            <Heading
              as="h3"
              fontSize={[null, null, "18px", "18px", null, null]}
              lineHeight={[null, null, "40px", "40px", null, null]}
              fontWeight="light"
            >
              {mainText}
            </Heading>
          </Box>
          <Box
            h={[null, null, 1170, 1170, null, null]}
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
              <CardService title={webTitle} text={webText} image="web" link="/services/web"/>
              <CardService title={designTitle} text={designText} image="design" link="/services/design"/>
            </Box>
            <Box
              h={[null, null, 422, 422, null, null]}
              w={[null, null, 728, 952, null, null]}
              mb={[null, null, "48px", "48px", null, null]}
              display="flex"
              justifyContent="space-between"
            >
              <CardService title={uxTitle} text={uxText} image="ux-ui" link="/services/ux-ui"/>
              <CardService title={seoTitle} text={seoText} image="seo" link="/services/seo"/>
            </Box>
            <Box
              h={[null, null, 422, 422, null, null]}
              w={[null, null, 728, 952, null, null]}
              mb={[null, null, "48px", "48px", null, null]}
              display="flex"
              justifyContent="space-between"
            >
              <CardService title={semTitle} text={semText} image="sem" link="/services/sem"/>
              <CardService title={socialTitle} text={socialText} image="social-media" link="/services/social-media"/>
            </Box>
          </Box>
        </VStack>
      </Flex>
    );
  } else {
    return (
      <Flex justify="center" alignItems="center" bg="brand.whiteBackground">
        <VStack
          mt={[null, null, null, null, "64px", null]}
          mb={[null, null, null, null, "64px", null]}
          w={[null, null, null, null, 1128, null]}
          h={[null, null, null, null, 1000, null]}
          align="stretch"
        >
          <Box
            w={[null, null, null, null, 1000, null]}
            h={[null, null, null, null, 152, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Heading
              as="h2"
              fontSize={[null, null, null, null, "32px", null]}
              fontWeight="bold"
              color="brand.text"
              mb="8px"
            >
              {title} {subtitle}
            </Heading>
            <Heading
              as="h3"
              fontSize={[null, null, null, null, "22px", null]}
              fontWeight="light"
            >
              {mainText}
            </Heading>
          </Box>
          <Box
            h={[null, null, null, null, 844, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box
              h={[null, null, null, null, 422, null]}
              w={[null, null, null, null, 1128, null]}
              mt={[null, null, null, null, "48px", null]}
              mb={[null, null, null, null, "48px", null]}
              display="flex"
              justifyContent="space-between"
            >
              <CardService title={webTitle} text={webText} image="web" link="/services/web"/>
              <CardService title={designTitle} text={designText} image="design" link="/services/design"/>
              <CardService title={uxTitle} text={uxText} image="ux-ui" link="/services/ux-ui"/>
            </Box>
            <Box
              h={[null, null, null, null, 326, null]}
              w={[null, null, null, null, 1128, null]}
              mb={[null, null, null, null, "48px", null]}
              display="flex"
              justifyContent="space-between"
            >
              <CardService title={seoTitle} text={seoText} image="seo" link="/services/seo"/>
              <CardService title={semTitle} text={semText} image="sem" link="/services/sem"/>
              <CardService title={socialTitle} text={socialText} image="social-media" link="/services/social-media"/>
            </Box>
          </Box>
          <ButtonContactWithUs buttonText={buttonText} />
        </VStack>
      </Flex>
    );
  }
}
