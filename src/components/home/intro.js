import { useMediaQuery } from "@chakra-ui/media-query";
import { Flex, VStack, Box, Heading } from "@chakra-ui/layout";
import Image from "next/image";
import ButtonContactWithUs from "components/general/buttons/buttonContactWithUs";

export default function Intro(props) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isMobileOrTablet] = useMediaQuery("(max-width: 1280px)");
  const { title, subtitle, text, buttonText } = props;

  if (isMobileOrTablet) {
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
          <div>
            <Box height={isMobile ? 125 : 250} display="flex" justifyContent="center">
              <Box
                display="flex"
                justifyContent="center"
                width={isMobile ? 188 : 375}
                position="relative"
                height={isMobile ? 125 : 250}
                mb="8px"
              >
                <Image
                  fill
                  src={`${process.env.basePath}/img/digital-workplace.webp`}
                  alt="Trabajadores ON LINE Marketing Digital"
                  placeholder="blur"
                  blurDataURL="url"
                  priority={true}
                ></Image>
              </Box>
            </Box>
            <Heading
              as="h1"
              fontSize="24px"
              fontWeight="bold"
              color="brand.main"
              lineHeight="1"
              mb="8px"
            >
              {title}
            </Heading>
            <Heading
              as="h2"
              fontSize="26px"
              fontWeight="bold"
              color="brand.text"
              lineHeight="1"
              mb="16px"
            >
              {subtitle}
            </Heading>
            <Box pb="30px">
              <p>{text}</p>
            </Box>
          </div>
          <ButtonContactWithUs buttonText={buttonText} />
        </VStack>
      </Flex>
    );
  } else {
    return (
      <Flex
        justify="center"
        bg="brand.warmBackground"
        minHeight="500px"
        alignItems="center"
        flexDirection="row"
      >
        <VStack
          w="520px"
          minHeight="320px"
          align="stretch"
          justifyContent="space-around"
          spacing="0px"
        >
          <div>
            <Heading
              as="h1"
              fontSize="24px"
              fontWeight="bold"
              color="brand.main"
              lineHeight="1"
              mb="8px"
            >
              {title}
            </Heading>
            <Heading
              as="h2"
              fontSize={["26px", null, null, null, "36px", null]}
              fontWeight="bold"
              color="brand.text"
              lineHeight="1"
            >
              {subtitle}
            </Heading>
          </div>
          <p>{text}</p>
          <div>
            <ButtonContactWithUs buttonText={buttonText} />
          </div>
        </VStack>
        <Box marginLeft="140px" width="375px" height="250px">
          <Image
            width={375}
            height={250}
            src={`${process.env.basePath}/img/digital-workplace.webp`}
            alt="Trabajadores ON LINE Marketing Digital"
            placeholder="blur"
            blurDataURL="url"
            priority={true}
          ></Image>
        </Box>
      </Flex>
    );
  }
}
