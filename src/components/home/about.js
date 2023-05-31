import { chakra, Flex, VStack, useMediaQuery } from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const TagWhiteBg = dynamic(() => import("../general/buttons/tagWhiteBg"), {
  ssr: false,
});

export default function About({
  knowUs,
  title,
  text,
  text2,
  tag,
  tag2,
  tag3,
  knowUs2,
}) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <Flex
        justify="center"
        alignItems="center"
        bg="brand.warmBackground"
        pt="40px"
        pb="40px"
      >
        <VStack
          w={[320, 440, null, null, null, null]}
          display="flex"
          flexDirection="column"
          bg="brand.whiteBackground"
          pb="40px"
        >
          <chakra.div
            h={[227, 227, null, null, null, null]}
            w={[320, 440, null, null, null, null]}
            position="relative"
          >
            <Image
              fill
              src={`${process.env.basePath}/img/home/home-intro.png`}
              alt="home-about"
              placeholder="blur"
              blurDataURL="url"
            ></Image>
          </chakra.div>
          <VStack
            w={[320, 440, null, null, null, null]}
            bg="brand.whiteBackground"
          >
            <chakra.div
              w={[280, 400, null, null, null, null]}
              display="flex"
              flexDirection="column"
            >
              <chakra.div
                w={[199, 199, null, null, null, null]}
                mt={["40px", "40px", null, null, null, null]}
                fontSize={["18px", "18px", null, null, null, null]}
                color="brand.main"
              >
                <p>{knowUs}</p>
              </chakra.div>
              <chakra.div
                display="flex"
                flexDirection="column"
                justifyContent="center"
                w={[185, 185, null, null, null, null]}
                mb={["24px", "24px", null, null, null, null]}
              >
                <chakra.h3
                  fontSize={["24px", "24px", null, null, null, null]}
                  fontWeight="bold"
                >
                  {title}
                </chakra.h3>
              </chakra.div>
              <chakra.div
                w={[280, 400, null, null, null, null]}
                display="flex"
                flexDirection="column"
              >
                <chakra.div
                  mb={["24px", "24px", null, null, null, null]}
                  fontSize={["16px", "16px", null, null, null, null]}
                  fontWeight="light"
                  lineHeight="22px"
                >
                  <p>{text}</p>
                </chakra.div>
                <chakra.div w="100%" display="flex" flexWrap="wrap">
                  <TagWhiteBg tagText={tag} />
                  <TagWhiteBg tagText={tag2} />
                  <TagWhiteBg tagText={tag3} />
                </chakra.div>
                <chakra.div
                  mt={["24px", "54px", null, null, null, null]}
                  fontSize={["16px", null, null, null, null, null]}
                  fontWeight="medium"
                  color="brand.main"
                  textDecoration="underline"
                >
                  <Link href="/nosotros" prefetch={false}>
                    {knowUs2}
                  </Link>
                </chakra.div>
              </chakra.div>
            </chakra.div>
          </VStack>
        </VStack>
      </Flex>
    );
  } else {
    return (
      <Flex
        justify="center"
        alignItems="center"
        bg="brand.warmBackground"
        pb="80px"
        pt="80px"
      >
        <VStack
          w={[null, null, 728, 952, 1128, null]}
          display="flex"
          flexDirection="column"
        >
          <chakra.div
            w={[null, null, 728, 952, 1128, null]}
            bg="brand.whiteBackground"
            borderRadius="0px 9px 9px 0px"
            display="flex"
          >
            <chakra.div
              h={[null, null, 480, 480, 480, null]}
              w={[null, null, 346, 346, 454, null]}
              position="relative"
              borderRadius="9px 0px 0px 9px"
            >
              <Image
                fill
                src={`${process.env.basePath}/img/home/home-intro.png`}
                alt="home-about"
                placeholder="blur"
                blurDataURL="url"
              ></Image>
            </chakra.div>
            <chakra.div
              h={[null, null, 480, 488, 480, null]}
              w={[null, null, 382, 606, 674, null]}
            >
              <chakra.div
                h={[null, null, 404, 338, 338, null]}
                w={[null, null, 342, 556, 436, null]}
                mt={[null, null, "40px", "40px", "56px", null]}
                ml={[null, null, "20px", "20px", "56px", null]}
                display="flex"
                flexDirection="column"
              >
                <chakra.div w={[null, null, 200, 200, 232, null]} mb="16px">
                  <chakra.p
                    fontSize={[null, null, "18px", "18px", "21px", null]}
                    fontWeight="light"
                  >
                    {knowUs}
                  </chakra.p>
                  <chakra.h3
                    fontSize={[null, null, "24px", "24px", "30px", null]}
                  >
                    {title}
                  </chakra.h3>
                </chakra.div>
                <chakra.div
                  w={[null, null, 342, 566, 436, null]}
                  display="flex"
                  flexDirection="column"
                >
                  <p
                    fontSize={[null, null, "16px", "16px", "16px", null]}
                    mb="8px"
                  >
                    {text}
                  </p>
                  <p
                    fontSize={[null, null, "16px", "16px", "16px", null]}
                    mb="16px"
                    fontWeight="bold"
                  >
                    {text2}
                  </p>
                  <chakra.div w="100%" display="flex" flexWrap="wrap" mb="16px">
                    <TagWhiteBg tagText={tag} />
                    <TagWhiteBg tagText={tag2} />
                    <TagWhiteBg tagText={tag3} />
                  </chakra.div>
                  <chakra.div
                    h={[null, null, "20px", "20px", "20px", null]}
                    fontSize={[null, null, "16px", "16px", "16px", null]}
                    fontWeight="medium"
                    color="brand.main"
                    textDecoration="underline"
                  >
                    <Link href="/nosotros" prefetch={false}>
                      {knowUs2}
                    </Link>
                  </chakra.div>
                </chakra.div>
              </chakra.div>
            </chakra.div>
          </chakra.div>
        </VStack>
      </Flex>
    );
  }
}
