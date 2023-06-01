import { useMediaQuery } from "@chakra-ui/media-query";
import { Flex, VStack, Box, Heading } from "@chakra-ui/layout";
import Image from "next/image";
import dynamic from "next/dynamic";
const ButtonContactWithUs = dynamic(
  () => import("components/general/buttons/buttonContactWithUs"),
  { ssr: false }
);

export default function Intro(props) {
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
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              height="154px"
              mb="8px"
            >
              <Image
                width={154}
                height={154}
                src={`${process.env.basePath}/img/digital-workplace.webp`}
                alt="Trabajadores ON LINE Marketing Digital"
                placeholder="blur"
                blurDataURL="url"
                priority={true}
              ></Image>
            </Box>
            <Heading
              as="h2"
              fontSize="22px"
              fontWeight="bold"
              color="brand.main"
              lineHeight="1"
              mb="8px"
            >
              {title}
            </Heading>
            <Heading
              as="h1"
              fontSize="24px"
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
              as="h2"
              fontSize="22px"
              fontWeight="bold"
              color="brand.main"
              lineHeight="1"
              mb="8px"
            >
              {title}
            </Heading>
            <Heading
              as="h1"
              fontSize="24px"
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
        <Box marginLeft="140px" width="256px" height="256px">
          <Image
            width={256}
            height={256}
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
