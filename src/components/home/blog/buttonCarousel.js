import { Box, useMediaQuery } from "@chakra-ui/react";
function buttonCarousel(props) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <Box
        onClick={() => props.selectButton(props.index)}
        as="button"
        h={["24px", "24px", null, null, null, null]}
        w={["24px", "24px", null, null, null, null]}
        borderRadius="50%"
        bg="brand.grey"
      ></Box>
    );
  }
}

export default buttonCarousel;
