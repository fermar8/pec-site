import { Box, Text, Heading, useMediaQuery } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import BlogPost from "./blogPost";

import Image from "next/image";

export default function CardBlog(props) {
  const opacityChange = (loaded) => {
    let opacity;
    opacity = loaded ? 1 : 0;
    return opacity;
  };

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1280px)"
  );
  if (isMobile) {
    return (
      <Box
        h={[418, 346, null, null, null, null]}
        w={[320, 440, null, null, null, null]}
        display="flex"
        flexDirection="column"
        opacity={opacityChange(props.loaded)}
        transition="1s"
      >
        <Box
          h={[146, 146, null, null, null, null]}
          mb={["16px", "16px", null, null, null, null]}
          position="relative"
          borderRadius="9px 9px 0px 0px"
        >
          <Image
            layout="fill"
            src="/img/Placeholder1128x280.jpg"
            alt="home-image"
          ></Image>
        </Box>
        <Box
          w={[280, 432, null, null, null, null]}
          mb={["16px", null, null, null, null, null]}
          ml={["8px", null, null, null, null, null]}
        >
          <Heading as="h4" fontSize="18px">
            Trabajo y salud mental, un delicado equilibrio
          </Heading>
        </Box>
        <Box
          w={[280, 432, null, null, null, null]}
          mb={["24px", null, null, null, null, null]}
          ml={["8px", null, null, null, null, null]}
          lineHeight="16px"
        >
          <Text fontSize="16px">
            El trabajo es algo que nos ocupa mucho tiempo de nuestra vida, y a
            veces el equilibrio entre salud mental y trabajo no es fácil.
          </Text>
        </Box>
        <BlogPost selectedAuthor={props.selectedAuthor} />
      </Box>
    );
  } else if (isTablet) {
    return (
      <Box
        h={[null, null, 434, 418, null, null]}
        w={[null, null, 728, 952, null, null]}
        display="flex"
        flexDirection="column"
        opacity={opacityChange(props.loaded)}
        transition="1s"
      >
        <Box
          w={[null, null, 352, 464, null, null]}
          h={[null, null, 146, 146, null, null]}
          mb={[null, null, "32px", "32px", null, null]}
          position="relative"
          borderRadius="9px 9px 0px 0px"
        >
          <Image
            layout="fill"
            src="/img/Placeholder1128x280.jpg"
            alt="home-image"
          ></Image>
        </Box>
        <Box
          w={[null, null, 352, 464, null, null]}
          mb={[null, null, "16px", "16px", null, null]}
          lineHeight={[null, null, "16px", "16px", null, null]}
        >
          <Heading as="h4" fontSize={[null, null, "18px", "18px", null, null]}>
            Trabajo y salud mental, un delicado equilibrio
          </Heading>
        </Box>
        <Box
          w={[null, null, 352, 464, null, null]}
          h={[null, null, "64px", "64px", null, null]}
          mb={[null, null, "24px", "24px", null, null]}
          lineHeight={[null, null, "16px", "16px", null, null]}
        >
          <Text fontSize={[null, null, "18px", "18px", null, null]}>
            El trabajo es algo que nos ocupa mucho tiempo de nuestra vida, y a
            veces el equilibrio entre salud mental y trabajo no es fácil.
          </Text>
        </Box>
        <BlogPost selectedAuthor={props.selectedAuthor} />
      </Box>
    );
  } else {
    return (
      <Box h="378px" w="359px" display="flex" flexDirection="column">
        <Box
          h="146px"
          w="359"
          position="relative"
          borderRadius="9px 9px 0px 0px"
        >
          <Image
            layout="fill"
            src="/img/Placeholder1128x280.jpg"
            alt="home-image"
          ></Image>
        </Box>
        <Box h="32px"></Box>
        <Box h="32px">
          <Heading
            as="h4"
            fontSize="18px"
            fontWeight="semibold"
            lineHeight="16px"
          >
            Trabajo y salud mental, un delicado equilibrio
          </Heading>
        </Box>
        <Box h="16px"></Box>
        <Box h="64px">
          <Text lineHeight="16px">
            El trabajo es algo que nos ocupa mucho tiempo de nuestra vida, y a
            veces el equilibrio entre salud mental y trabajo no es fácil.
          </Text>
        </Box>
        <Box h="24px"></Box>
        <Box
          h="64px"
          w="360px"
          display="flex"
          alignItems="center"
          borderTop="1px"
          borderBottom="1px"
          borderColor="brand.grey"
        >
          <Box w="16px"></Box>
          <Box w="215px" h="48px" display="flex">
            <Box
              w="48px"
              h="48px"
              display="flex"
              position="relative"
              borderRadius="50%"
            >
              <Image
                layout="fill"
                src="/img/Placeholder1128x280.jpg"
                alt="home-image"
              ></Image>
            </Box>
            <Box w="16px"></Box>
            <Box
              w="151px"
              display="flex"
              flexDirection="column"
              fontSize="14px"
              fontWeight="light"
            >
              <Box w="151px">
                <p>Eudald Capellades</p>
              </Box>
              <Box w="151px" color="brand.grey">
                <p>16 de desembre 2022</p>
              </Box>
            </Box>
          </Box>
          <Box w="38px"></Box>
          <Box
            w="70px"
            h="24px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <TimeIcon />
            <Box fontSize="14px" fontWeight="light">
              <Text>3 min</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
