import { Box, Flex, Heading, VStack, chakra } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const CardService = dynamic(
    () => import("../../home/services/cardService"),
    { ssr: false }
  );
export default function tabletServicesHome(props) {
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
    <Flex
        justify="center"
        alignItems="center"
        bg="brand.whiteBackground"
        pt={[null, null, "64px", "64px", null, null]}
        pb={[null, null, "64px", "64px", null, null]}
      >
        <VStack w={[null, null, 728, 952, null, null]}>
          <Box
            w={[null, null, 728, 952, null, null]}
            display="flex"
            flexDirection="column"
          >
            <Heading
              as="h2"
              fontSize={[null, null, "24px", "24px", null, null]}
              fontWeight="semi-bold"
              color="brand.main"
              mb="16px"
            >
              {title} <br />
              <chakra.span color="brand.text" fontWeight="bold">
                {subtitle}
              </chakra.span>
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
          <Box display="flex" flexDirection="column">
            <Box
              w={[null, null, 728, 952, null, null]}
              mt={[null, null, "48px", "48px", null, null]}
              mb={[null, null, "48px", "48px", null, null]}
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
            >
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
                link="/servicios/diseño"
              />
            </Box>
            <Box
              w={[null, null, 728, 952, null, null]}
              mb={[null, null, "48px", "48px", null, null]}
              display="flex"
              justifyContent="space-between"
            >
              <CardService
                title={seoTitle}
                text={seoText}
                image="seo"
                link="/servicios/seo"
              />
              <CardService
                title={semTitle}
                text={semText}
                image="sem"
                link="/servicios/sem"
              />
            </Box>
            <Box
              w={[null, null, 728, 952, null, null]}
              mb={[null, null, "48px", "48px", null, null]}
              display="flex"
              justifyContent="space-between"
            >
              <CardService
                title={socialTitle}
                text={socialText}
                image="social-media"
                link="/servicios/social-media"
              />
              <CardService
                title={uxTitle}
                text={uxText}
                image="ux-ui"
                link="/servicios/ux-ui"
              />
            </Box>
          </Box>
        </VStack>
      </Flex>
  )
}