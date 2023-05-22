import { Text, Box } from "@chakra-ui/react";

export default function ServiceDescription(props) {
  const { number, subtitle, subText } = props;
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
        <Text
          color="brand.white"
          fontSize="80px"
          fontWeight="bold"
          textShadow="0 0 2px #F55951"
        >
          {number}
        </Text>
      </Box>
      <Box display="flex" flexDirection="column" ml="16px">
        <Text color="brand.red" fontSize="18px" fontWeight="bold">
          {subtitle}
        </Text>
        <Text fontSize="16px" fontWeight="light" lineHeight="28px">
          {subText}
        </Text>
      </Box>
    </Box>
  );
}
