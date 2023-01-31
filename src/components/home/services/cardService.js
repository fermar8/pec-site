import { Box, Image, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { WavingHand } from "../../icons";

export default function cardService() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1280px)"
  );
  if (isMobile) {
    return (
      <>
        <Box
          w={[320, 440, null, null, null, null]}
          h={[136, 136, null, null, null, null]}
          display="flex"
          flexDirection="column"
          border="1px"
          borderColor="brand.grey"
          borderRadius="9px"
          alignItems="center"
          bg="brand.grey"
        >
          <Box mt={["20px", "24px", null, null, null, null]}>
            <WavingHand
              h={[24, null, null, null, null, null]}
              w={[24, null, null, null, null, null]}
            />
          </Box>
          <Box
            mt={["8px", "8px", null, null, null, null]}
            mb={["8px", "8px", null, null, null, null]}
            h={["16px", "16px", null, null, null, null]}
            display="flex"
            justifyContent="center"
            fontSize={["16px", "16px", null, null, null, null]}
            fontWeight="bold"
          >
            <Heading fontSize={["16px", "16px", null, null, null, null]} as="h6">Desenvolupament Web</Heading>
          </Box>

          <Box
            h={["44px", "44px", null, null, null, null]}
            fontSize={["14px", "14px", null, null, null, null]}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            fontWeight="medium"
            color="brand.red"
            textDecoration="underline"
          >
            <Link href="/">Veure serveis de SEO</Link>
          </Box>
        </Box>
      </>
    );
  } else if (isTablet) {
    return (
      <Box
        w={[null, null, 360, 472, null, null]}
        h={[null, null, 326, 326, null, null]}
        display="flex"
        flexDirection="column"
        border="1px"
        borderColor="brand.red"
        borderRadius="9px"
      >
        <Box
          w={[null, null, 360, 472, null, null]}
          h={[null, null, 146, 146, null, null]}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box
            w={[null, null, 360, 472, null, null]}
            h={[null, null, 146, 146, null, null]}
            display="flex"
            justifyContent="center"
          >
            <Image
              w={[null, null, 360, 472, null, null]}
              h={[null, null, 146, 146, null, null]}
              borderRadiusTop="999"
              src="img/Placeholder1128x280.jpg"
            />
          </Box>
        </Box>
        <Box
          h={[null, null, "48px", "48px", null, null]}
          bg="brand.grey"
          borderTop="1px"
          borderColor="brand.red"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box
            h={[null, null, "16px", "16px", null, null]}
            display="flex"
            justifyContent="center"
            fontWeight="bold"
          >
            <h6>Desenvolupament Web</h6>
          </Box>
        </Box>
        <Box
          h={[null, null, 148, 148, null, null]}
          bg="brand.grey"
          borderBottomRadius="9px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            h={[null, null, "72px", "48px", null, null]}
            w={[null, null, 280, 392, null, null]}
            textAlign="center"
            lineHeight={[null, null, "16px", "16px", null, null]}
          >
            <Text>
              Incrementa les teves vendes en línia i coneix als teus clients.
              Augmenta la teva conversió en pàgina.
            </Text>
          </Box>
          <Box
            h={[null, null, "44px", "44px", null, null]}
            w={[null, null, 176, 176, null, null]}
            fontSize={[null, null, "14px", "14px", null, null]}
            color="brand.red"
            textDecoration="underline"
          >
            <Link href="/">Veure serveis de SEO</Link>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        w="360px"
        h="326px"
        display="flex"
        flexDirection="column"
        border="1px"
        borderColor="brand.red"
        borderRadius="9px"
      >
        <Box
          w="360px"
          h="146px"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box w="180px" h="114px" display="flex" justifyContent="center">
            <img w="180px" h="114px" src="img/Placeholder1128x280.jpg" />
          </Box>
        </Box>
        <Box
          h="48px"
          bg="brand.grey"
          borderTop="1px"
          borderColor="brand.red"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box
            h="16px"
            display="flex"
            justifyContent="center"
            fontWeight="bold"
          >
            <h6>Desenvolupament Web</h6>
          </Box>
        </Box>
        <Box
          h="148px"
          bg="brand.grey"
          borderBottomRadius="9px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box h="72px" w="280px" textAlign="center">
            <p>
              Incrementa les teves vendes en línia i coneix als teus clients.
              Augmenta la teva conversió en pàgina.
            </p>
          </Box>
          <Box
            h="44px"
            w="176px"
            fontWeight="14px"
            color="brand.red"
            textDecoration="underline"
          >
            <Link href="/">Veure serveis de SEO</Link>
          </Box>
        </Box>
      </Box>
    );
  }
}
