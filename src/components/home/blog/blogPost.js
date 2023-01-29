import { Box, Image, useMediaQuery } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

function blogPost(props) {
  const opacityChange = (loaded) => {
    console.log('loaded', loaded)
    let opacity;
    opacity = loaded ? 1 : 0;
    console.log(opacity);
    return opacity;
  }
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <>
        <Box
          w={[320, 440, null, null, null, null]}
          h={["64px", "64px", null, null, null, null]}
          borderTop="1px"
          borderBottom="1px"
          borderColor="brand.grey"
          opacity={opacityChange(props.loaded)}
          transition="1s"
          display="flex"
          alignItems="center"
        >
          <Box
            w="48px"
            h="48px"
            display="flex"
            ml={["16px", null, null, null, null, null]}
          >
            <Image
              w="48px"
              h="48px"
              src="img/Placeholder1128x280.jpg"
              alt="home-image"
              borderRadius="50%"
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
              <p>{props.selectedAuthor}</p>
            </Box>
            <Box w={[138, 258, null, null, null, null]} color="brand.grey">
              <p>16/12/2022</p>
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
              <p>3 min</p>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default blogPost;
