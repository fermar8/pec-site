import { Box, Flex, Heading, VStack, chakra } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const CardService = dynamic(
    () => import("../../home/services/cardService"),
    { ssr: false }
  );

export default function mobileServicesHome(props) {
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
      } = props.props;
  return (
    <Flex justify="center" bg="brand.whiteBackground">
      <VStack
        mt={["64px", "64px", null, null, null, null]}
        mb={["64px", "64px", null, null, null, null]}
        w={[320, 440, null, null, null, null]}
        align="stretch"
      >
        <Box
          w={[320, 440, null, null, null, null]}
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
            <chakra.span color="brand.text" fontWeight="bold">
              {subtitle}
            </chakra.span>
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
        <Box display="flex" flexDirection="column">
          <CardService
            title={webTitle}
            text={webText}
            image="web"
            link="/servicios/web"
          />
          <CardService
            title={designTitle}
            text={designText}
            image="design"
            link="servicios/design"
          />
          <CardService
            title={seoTitle}
            text={seoText}
            image="seo"
            link="servicios/seo"
          />
          <CardService
            title={semTitle}
            text={semText}
            image="sem"
            link="servicios/sem"
          />
          <CardService
            title={socialTitle}
            text={socialText}
            image="social-media"
            link="servicios/social-media"
          />
          <CardService
            title={uxTitle}
            text={uxText}
            image="ux-ui"
            link="servicios/ux-ui"
          />
        </Box>
      </VStack>
    </Flex>
  );
}
