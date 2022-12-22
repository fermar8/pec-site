import { Button, Box, Flex, Heading, VStack } from "@chakra-ui/react";

import { WavingHand } from "../../components/icons";
import CardService from "./cardService";

export default function services() {
  return (
    <Flex justify="center" alignItems="center" bg="brand.pureWhite">
      <VStack
        mt="64px"
        mb="64px"
        w={[280, 280, 728, 952, 1128]}
        h="1100px"
        align="stretch"
      >
        <Box
          w="821px"
          h="136px"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Heading
            as="h5"
            fontSize="32px"
            fontWeight="semi-bold"
            color="brand.red"
          >
            Serveis web per a petites i mitjanes empreses
          </Heading>
          <Heading as="h6" fontSize="22px" fontWeight="light">
            Que vulguin començar de zero o millorar la seva pàgina web existent,
            captar nous clients, conèixer als existents i millorar la conversió
            de venda en pàgina.
          </Heading>
        </Box>
        <Box
          h="940px"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Box
            h="422px"
            w="1128px"
            mt="48px"
            mb="48px"
            display="flex"
            justifyContent="space-between"
          >
            <CardService />
            <CardService />
            <CardService />
          </Box>
          <Box
            h="374px"
            w="1128px"
            mb="48px"
            display="flex"
            justifyContent="space-between"
          >
            <CardService />
            <CardService />
            <CardService />
          </Box>
          <Box
            h="144px"
            w="1128px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              h="80px"
              w="821px"
              textAlign="center"
              fontSize="22px"
              fontWeight="light"
            >
              <p>
                {" "}
                Que vulguin començar de zero o millorar la seva pàgina web
                existent, captar nous clients, conèixer als existents i millorar
                la conversió de venda en pàgina.
              </p>
            </Box>
            <Box h="40px" w="212px">
              <Button
                bg="brand.red"
                color="brand.white"
                w="204px"
                h="32px"
                fontSize="14px"
                verticalAlign="text-bottom"
                borderRadius="999"
                rightIcon={<WavingHand />}
              >
                Contacta amb nosaltres
              </Button>
            </Box>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
}
