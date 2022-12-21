
import {
    Box
  } from "@chakra-ui/react";
  import Link from "next/link";

export default function cardServices() {
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
        <Box h="16px" display="flex" justifyContent="center" fontWeight="bold">
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
