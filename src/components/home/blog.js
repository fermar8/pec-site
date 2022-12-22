import { Box, Flex, VStack } from "@chakra-ui/react";
import CardBlog from "./cardBlog";

export default function blog() {
  return (
    <Flex justify="center" alignItems="center" bg="brand.pureWhite">
      <VStack
        w={[280, 280, 728, 952, 1128]}
        h="570px"
        display="flex"
        flexDirection="column"
        align="stretch"
        spacing="0px"
      >
        <Box h="64px"></Box>
        <Box h="40px" fontSize="32px" color="brand.red" fontWeight="semibold">
          <h6>Blog</h6>
        </Box>
        <Box h="24px"></Box>
        <Box h="378px" display="flex" justifyContent="space-between">
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </Box>
      </VStack>
    </Flex>
  );
}
