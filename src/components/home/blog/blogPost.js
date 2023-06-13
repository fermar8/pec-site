import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

import Image from "next/image";

export default function BlogPost(props) {
  const { selectedAuthor, imageSrc, date, timePassed } = props;

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1280px)"
  );
  if (isMobile) {
    return (
      <>
        <Box
          w={[320, 440, null, null, null, null]}
          minHeight={["64px", "64px", null, null, null, null]}
          borderTop="1px"
          borderBottom="1px"
          borderColor="brand.grey"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
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
              width={48}
              height={48}
              src={imageSrc}
              alt="online-icon"
              placeholder="blur"
              blurDataURL="url"
            ></Image>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            fontSize="14px"
            fontWeight="light"
          >
            <Box>
              <Text>{selectedAuthor}</Text>
            </Box>
            <Box color="brand.grey">
              <Text>{date}</Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <TimeIcon />
            <Box
              fontSize="14px"
              fontWeight="light"
              ml={["8px", null, null, null, null, null]}
            >
              <Text>{timePassed}</Text>
            </Box>
          </Box>
        </Box>
      </>
    );
  } else if (isTablet) {
    return (
      <>
        <Box
          w={props.isFirstPost ? "680px" : "352px"}
          minHeight={[null, null, "64px", "64px", null, null]}
          borderTop="1px"
          borderBottom="1px"
          borderColor="brand.grey"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
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
              width={48}
              height={48}
              src={imageSrc}
              alt="online-logo"
              placeholder="blur"
              blurDataURL="url"
            ></Image>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            fontSize="14px"
            fontWeight="light"
          >
            <Box>
              <Text>{selectedAuthor}</Text>
            </Box>
            <Box color="brand.grey">
              <Text>{date}</Text>
            </Box>
          </Box>
          <Box
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
              <Text>{timePassed}</Text>
            </Box>
          </Box>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box
          w={props.isFirstPost ? "1100px" : "352px"}
          minHeight={[null, null, "64px", "64px", null, null]}
          borderTop="1px"
          borderBottom="1px"
          borderColor="brand.grey"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
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
              width={48}
              height={48}
              src={imageSrc}
              alt="online-logo"
              placeholder="blur"
              blurDataURL="url"
            ></Image>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            fontSize="14px"
            fontWeight="light"
          >
            <Box>
              <Text>{selectedAuthor}</Text>
            </Box>
            <Box color="brand.grey">
              <Text>{date}</Text>
            </Box>
          </Box>
          <Box
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
              <Text>{timePassed}</Text>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}
