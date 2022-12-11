import {
  Button,
  ButtonGroup,
  Box,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { OnlineLogo, WavingHand } from "./icons";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex
      justify="center"
      alignItems="center"
      borderBottom="1px"
      borderBottomColor="brand.grey"
      h="56px"
    >
      <Box width={[280, 280, 728, 952, 1128]}>
        <HStack gap="24px">
          <Flex justify="space-between" alignItems="center" gap="24px">
            <OnlineLogo />
            <Box h="24px" w="1px" bg="brand.grey"></Box>
          </Flex>
          {isDesktop ? (
            <Flex justify="space-between" flex="1">
              <ButtonGroup gap="24px">
                <Box
                  as="button"
                  color="brand.black"
                  _hover={{ color: "brand.red" }}
                >
                  Inici
                </Box>
                <Box
                  as="button"
                  color="brand.black"
                  _hover={{ color: "brand.red" }}
                >
                  Serveis
                </Box>
                <Box
                  as="button"
                  color="brand.black"
                  _hover={{ color: "brand.red" }}
                >
                  Nosaltres
                </Box>
                <Box
                  as="button"
                  color="brand.black"
                  _hover={{ color: "brand.red" }}
                >
                  Blog
                </Box>
              </ButtonGroup>
              <HStack>
                <Button
                  bg="brand.red"
                  color="brand.white"
                  w="168px"
                  h="36px"
                  verticalAlign="text-bottom"
                  borderRadius="999"
                  rightIcon={<WavingHand />}
                >
                  Contacta
                </Button>
              </HStack>
            </Flex>
          ) : (
            <Flex justify="flex-end" flex="1">
              <IconButton
                variant="ghost"
                icon={<HamburgerIcon h="32px" w="32px" color="brand.red" />}
                aria-label="Open Menu"
              />
            </Flex>
          )}
        </HStack>
      </Box>
    </Flex>
  );
}
