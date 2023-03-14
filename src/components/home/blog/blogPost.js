import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

import Image from "next/image";

export default function BlogPost(props) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1280px)"
  );
  if (isMobile) {
    return (
      <>
        <Box
          w={[320, 440, null, null, null, null]}
          h={["64px", "64px", null, null, null, null]}
          borderTop="1px"
          borderBottom="1px"
          borderColor="brand.grey"
          display="flex"
          alignItems="center"
        >
          <Box
            w="48px"
            h="48px"
            display="flex"
            ml={["16px", null, null, null, null, null]}
            position="relative"
            borderRadius="50%"
          >
            <Image
              layout="fill"
              src="img/Placeholder1128x280.jpg"
              alt="home-image"
            ></Image>
          </Box>
          <Box
            w={[138, 258, null, null, null, null]}
            ml={["16px", "16px", null, null, null, null]}
            display="flex"
            flexDirection="column"
            fontSize="14px"
            fontWeight="light"
          >
            <Box w={[138, 258, null, null, null, null]}>
              <Text>{props.selectedAuthor}</Text>
            </Box>
            <Box w={[138, 258, null, null, null, null]} color="brand.grey">
              <Text>16/12/2022</Text>
            </Box>
          </Box>
          <Box
            w={["70px", "70px", null, null, null, null]}
            h={["24px", "24px", null, null, null, null]}
            display="flex"
            alignItems="center"
          >
            <TimeIcon />
            <Box
              fontSize="14px"
              fontWeight="light"
              ml={["8px", null, null, null, null, null]}
            >
              <Text>3 min</Text>
            </Box>
          </Box>
        </Box>
      </>
    );
  } else if (isTablet) {
    return (
      <>
        <Box
          w={[null, null, 352, 464, null, null]}
          h={[null, null, "64px", "64px", null, null]}
          borderTop="1px"
          borderBottom="1px"
          borderColor="brand.grey"
          display="flex"
          alignItems="center"
        >
          <Box
            w={[null, null, "48px", "48px", null, null]}
            h={[null, null, "48px", "48px", null, null]}
            display="flex"
            ml={[null, null, "16px", "16px", null, null]}
            position="relative"
            borderRadius="50%"
          >
            <Image
              layout="fill"
              src="img/Placeholder1128x280.jpg"
              alt="home-image"
            ></Image>
          </Box>
          <Box
            w={[null, null, 151, 151, null, null]}
            ml={[null, null, "16px", "16px", null, null]}
            display="flex"
            flexDirection="column"
            fontSize="14px"
            fontWeight="light"
          >
            <Box w={[null, null, 151, 151, null, null]}>
              <Text>{props.selectedAuthor}</Text>
            </Box>
            <Box w={[null, null, 151, 151, null, null]} color="brand.grey">
              <Text>16/12/2022</Text>
            </Box>
          </Box>
          <Box
            w={[null, null, "70px", "70px", null, null]}
            h={[null, null, "24px", "24px", null, null]}
            display="flex"
            alignItems="center"
          >
            <TimeIcon />
            <Box
              fontSize={[null, null, "14px", "14px", null, null]}
              fontWeight="light"
              ml={[null, null, "8px", "8px", null, null]}
            >
              <Text>3 min</Text>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}
