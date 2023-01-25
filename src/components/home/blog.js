import { Box, Flex, VStack, useMediaQuery } from "@chakra-ui/react";
import CardBlog from "./blog/cardBlog";

export default function blog() {
  const isMobile = useMediaQuery("(max-width: 480px)");
  if (isMobile) {
    return (
      <Flex
        justify="center"
        alignItems="center"
        bg="brand.pureWhite"
        w={[360, null, null, null, null, null]}
        h={[610, null, null, null, null, null]}
      >
        <VStack
          w={[320, null, null, null, null, null]}
          h={[482, null, null, null, null, null]}
          mt={["64px", null, null, null, null, null]}
          mb={["89px", null, null, null, null, null]}
          display="flex"
          flexDirection="column"
          align="stretch"
          spacing="0px"
        >
          <Box
            h={["40px", null, null, null, null, null]}
            w={[320, null, null, null, null, null]}
            mb={["24px", null, null, null, null, null]}
            fontSize={["32px", null, null, null, null, null]}
            color="brand.red"
            fontWeight="semibold"
          >
            <h6>Blog</h6>
          </Box>
          <CardBlog />
          <Box
            w={[320, null, null, null, null, null]}
            h={["24px", null, null, null, null, null]}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              mt={["16px", null, null, null, null, null]}
              w={["108px", null, null, null, null, null]}
              h={["24px", null, null, null, null, null]}
              display="flex"
              justifyContent="space-between"
            >
              <Box as="button"
                h={["24px", null, null, null, null, null]}
                w={["24px", null, null, null, null, null]}
                borderRadius="50%"
                bg="brand.red"
              ></Box>
              <Box as="button"
                h={["24px", null, null, null, null, null]}
                w={["24px", null, null, null, null, null]}
                borderRadius="50%"
                bg="brand.grey"
              ></Box>
              <Box as="button"
                h={["24px", null, null, null, null, null]}
                w={["24px", null, null, null, null, null]}
                borderRadius="50%"
                bg="brand.grey"
              ></Box>
              <Box as="button"
                h={["24px", null, null, null, null, null]}
                w={["24px", null, null, null, null, null]}
                borderRadius="50%"
                bg="brand.grey"
              ></Box>
            </Box>
          </Box>
        </VStack>
      </Flex>
    );
  } else {
    return (
      <Flex justify="center" alignItems="center" bg="brand.pureWhite">
        <VStack
          w={[320, 280, 728, 952, 1128]}
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
}
