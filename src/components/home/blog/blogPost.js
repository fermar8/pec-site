import { Box, useMediaQuery } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

function blogPost() {
  const isMobile = useMediaQuery("(max-width: 480px)");
  if (isMobile) {
    return (
      <>
        <Box
          w={[138, null, null, null, null, null]}
          ml={["16px", null, null, null, null, null]}
          display="flex"
          flexDirection="column"
          fontSize="14px"
          fontWeight="light"
        >
          <Box w={[138, null, null, null, null, null]}>
            <p>Eudald Capellades</p>
          </Box>
          <Box w={[138, null, null, null, null, null]} color="brand.grey">
            <p>16/12/2022</p>
          </Box>
        </Box>
        <Box
          w={["70px", null, null, null, null, null]}
          h={["24px", null, null, null, null, null]}
          display="flex"
          alignItems="center"
        >
          <TimeIcon />
          <Box
            fontSize="14px"
            fontWeight="light"
            ml={["8px", null, null, null, null, null]}
          >
            <p>3 min</p>
          </Box>
        </Box>
      </>
    );
  }
}

export default blogPost;
