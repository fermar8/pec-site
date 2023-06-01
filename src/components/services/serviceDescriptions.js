import { Text, Box } from "@chakra-ui/react";

export default function ServiceDescription(props) {
  const { number, subtitle, subText } = props;
  return (
    <Box display="flex" mt="16px">
      <Box display="flex" alignItems="center" minWidth="50px">
        <Text
          color="brand.whiteBackground"
          fontSize="80px"
          fontWeight="bold"
          textShadow="-1px 1px 0 #B1150D,
				  1px 1px 0 #B1150D,
				 1px -1px 0 #B1150D,
				-1px -1px 0 #B1150D"
        >
          {number}
        </Text>
      </Box>
      <Box display="flex" flexDirection="column" ml="16px">
        <Text color="brand.main" fontSize="18px" fontWeight="bold">
          {subtitle}
        </Text>
        <Text fontSize="16px" fontWeight="light" lineHeight="28px" mb="16px">
          {subText}
        </Text>
      </Box>
    </Box>
  );
}
