import { Box, useMediaQuery } from "@chakra-ui/react";
export default function ButtonCarousel(props) {
  const backgroundColorChange = (buttonIndex, selectedIndex) => {
    let background;
    background = buttonIndex === selectedIndex ? "brand.red" : "brand.grey";
    return background;
  };
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1280px)"
  );
  if (isMobile) {
    return (
      <Box
        onClick={() => props.selectButton(props.index)}
        as="button"
        h={["24px", "24px", null, null, null, null]}
        w={["24px", "24px", null, null, null, null]}
        borderRadius="50%"
        bg={backgroundColorChange(props.index, props.selectedIndex)}
      ></Box>
    );
  } else if (isTablet) {
    return (
      <Box
        onClick={() => props.selectButton(props.index)}
        as="button"
        h={["24px", "24px", null, null, null, null]}
        w={["24px", "24px", null, null, null, null]}
        borderRadius="50%"
        bg={backgroundColorChange(props.index, props.selectedIndex)}
      ></Box>
    );
  }
}
