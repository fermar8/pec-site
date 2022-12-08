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
  const isDesktop = useBreakpointValue({ base: false, md: true, lg: true });
  return (
    <Flex justify="center" alignItems="center">
      <Box width={[280, 280, 728, 952, 1128]}>
        <HStack>
          <OnlineLogo />
          {isDesktop ? (
            <Flex justify="space-between" flex="1">
              <ButtonGroup variant="link" spacing="8">
                <Button>Inici</Button>
                <Button>Serveis</Button>
                <Button>Nosaltres</Button>
                <Button>Blog</Button>
              </ButtonGroup>
              <HStack spacing="3">
                <Button>
                  Contacta
                  <WavingHand />
                </Button>
              </HStack>
            </Flex>
          ) : (
            <IconButton
              variant="ghost"
              icon={<HamburgerIcon fontSize="1.25rem" />}
              aria-label="Open Menu"
            />
          )}
        </HStack>
      </Box>
    </Flex>
  );
}
