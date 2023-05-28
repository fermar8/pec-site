import {
  Box,
  Text,
  Flex,
  Heading,
  VStack,
  chakra
} from "@chakra-ui/react";

import Link from "next/link";

export default function Blog() {
  {
    return (
      <Flex justify="center" alignItems="center" bg="brand.whiteBackground" pb="40px" pt="40px">
        <VStack
          w={[320, 480, 728, 952, 1128, null]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          align="stretch"
          spacing="0px"
        >
          <Box mb="16px">
            <Heading
              as="h2"
              fontSize={["22px", null, null, null, null, null]}
              fontWeight="bold"
              color="brand.main"
              lineHeight="1"
              mb="8px"
            >
              Blog
            </Heading>
            <Heading
              as="h6"
              fontSize={["24px", null, null, null, null, null]}
              fontWeight="bold"
              color="brand.text"
              lineHeight="1"
            >
              Próximamente
            </Heading>
          </Box>
          <Text>
            Bienvenido a <chakra.span color="brand.main"><Link href="/blog">nuestro blog</Link></chakra.span>. Estamos emocionados de poder compartir
            increíble contenido contigo en el futuro.
          </Text>
        </VStack>
      </Flex>
    );
  }
}
