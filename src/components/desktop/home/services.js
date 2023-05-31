import { Box, Flex, Heading, VStack, chakra } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const ButtonContactWithUs = dynamic(
    () => import("../../general/buttons/buttonContactWithUs"),
    { ssr: false }
  );
const CardService = dynamic(
    () => import("../../home/services/cardService"),
    { ssr: false }
  );
export default function desktopServicesHome(props) {
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
      } = props.props;
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
              <CardService
                title={seoTitle}
                text={seoText}
                image="seo"
                link="/servicios/seo"
              />
            </Box>
            <Box
              h={[null, null, null, null, 326, null]}
              w={[null, null, null, null, 1128, null]}
              mb={[null, null, null, null, "48px", null]}
              display="flex"
              justifyContent="space-between"
            >
              <CardService
                title={semTitle}
                text={semText}
                image="sem"
                link="/servicios/sem"
              />
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
          <Box alignSelf="center">
            <ButtonContactWithUs buttonText={buttonText} />
          </Box>
        </VStack>
      </Flex>
  )
}