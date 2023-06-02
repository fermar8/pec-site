import { Flex, VStack, useMediaQuery, chakra } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const CardService = dynamic(() => import("./services/cardService"), {
  ssr: false,
});
const ButtonContactWithUs = dynamic(
  () => import("../../components/general/buttons/buttonContactWithUs"),
  { ssr: false }
);

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
      <Flex justify="center" bg="brand.whiteBackground">
        <VStack
          mt={["64px", "64px", null, null, null, null]}
          mb={["64px", "64px", null, null, null, null]}
          w={[320, 440, null, null, null, null]}
          align="stretch"
        >
          <chakra.div
            w={[320, 440, null, null, null, null]}
            mb={["40px", null, null, null, null, null]}
            display="flex"
            flexDirection="column"
          >
            <chakra.h2
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
            </chakra.h2>
            <chakra.h3
              fontSize={["18px", "18px", null, null, null, null]}
              lineHeight={["40px", "40px", null, null, null, null]}
              fontWeight="light"
            >
              {mainText}
            </chakra.h3>
          </chakra.div>
          <chakra.div display="flex" flexDirection="column">
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
          </chakra.div>
        </VStack>
      </Flex>
    );
  } else if (isTablet) {
    return (
      <Flex
        justify="center"
        alignItems="center"
        bg="brand.whiteBackground"
        pt={[null, null, "64px", "64px", null, null]}
        pb={[null, null, "64px", "64px", null, null]}
      >
        <VStack w={[null, null, 728, 952, null, null]}>
          <chakra.div
            w={[null, null, 728, 952, null, null]}
            display="flex"
            flexDirection="column"
          >
            <chakra.h2
              fontSize={[null, null, "24px", "24px", null, null]}
              fontWeight="semi-bold"
              color="brand.main"
              mb="16px"
            >
              {title} <br />
              <chakra.span color="brand.text" fontWeight="bold">
                {subtitle}
              </chakra.span>
            </chakra.h2>
            <chakra.h3
              as="h3"
              fontSize={[null, null, "18px", "18px", null, null]}
              lineHeight={[null, null, "40px", "40px", null, null]}
              fontWeight="light"
            >
              {mainText}
            </chakra.h3>
          </chakra.div>
          <chakra.div display="flex" flexDirection="column">
            <chakra.div
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
            </chakra.div>
            <chakra.div
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
            </chakra.div>
            <chakra.div
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
            </chakra.div>
          </chakra.div>
        </VStack>
      </Flex>
    );
  } else {
    return (
      <Flex justify="center" alignItems="center" bg="brand.whiteBackground"  pt="80px" pb="80px">
        <VStack
          w={[null, null, null, null, 1128, null]}
          align="stretch"
        >
          <chakra.div
            w={[null, null, null, null, 1000, null]}
            h={[null, null, null, null, 152, null]}
            display="flex"
            flexDirection="column"
          >
            <chakra.h2
              fontSize={[null, null, null, null, "32px", null]}
              fontWeight="bold"
              color="brand.text"
              mb="8px"
            >
              {title} {subtitle}
            </chakra.h2>
            <chakra.h3
              fontSize={[null, null, null, null, "22px", null]}
              fontWeight="light"
            >
              {mainText}
            </chakra.h3>
          </chakra.div>
          <chakra.div
            h={[null, null, null, null, 844, null]}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <chakra.div
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
            </chakra.div>
            <chakra.div
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
            </chakra.div>
          </chakra.div>
          <chakra.div alignSelf="center">
            <ButtonContactWithUs buttonText={buttonText} />
          </chakra.div>
        </VStack>
      </Flex>
    );
  }
}
