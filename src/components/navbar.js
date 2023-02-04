import {
  Button,
  ButtonGroup,
  Box,
  Flex,
  Stack,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { OnlineLogo, WavingHand } from "./icons";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { useState, useEffect } from "react";

import Link from "next/link";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) {
        setShow(false); 
      } else { 
        setShow(true);  
      }

      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <Flex position="fixed" top={show ? "0px" : "-56px"} w="100%" flexDirection="column" bg="brand.white" zIndex={300}>
        <Flex
          as="header"
          justify="center"
          alignItems="center"
          borderBottom={!isOpen ? "1px" : null}
          borderBottomColor="brand.grey"
          h="56px"
        >
          <Box width={[320, 440, 728, 952, 1128, null]}>
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
                      fontSize={[null, null, "16px", "16px", "16px", null]}
                    >
                      <Link href="/">Inici</Link>
                    </Box>
                    <Box
                      as="button"
                      color="brand.black"
                      _hover={{ color: "brand.red" }}
                      fontSize={[null, null, "16px", "16px", "16px", null]}
                    >
                      <Link href="/">Serveis</Link>
                    </Box>
                    <Box
                      as="button"
                      color="brand.black"
                      _hover={{ color: "brand.red" }}
                      fontSize={[null, null, "16px", "16px", "16px", null]}
                    >
                      <Link href="/">Nosaltres</Link>
                    </Box>
                    <Box
                      as="button"
                      color="brand.black"
                      _hover={{ color: "brand.red" }}
                      fontSize={[null, null, "16px", "16px", "16px", null]}
                    >
                      <Link href="/">Blog</Link>
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
                    onClick={isOpen ? onClose : onOpen}
                    variant="ghost"
                    icon={
                      isOpen ? (
                        <CloseIcon h="18px" w="18px" color="brand.red" />
                      ) : (
                        <HamburgerIcon h="32px" w="32px" color="brand.red" />
                      )
                    }
                    aria-label="Open Menu"
                  />
                </Flex>
              )}
            </HStack>
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href="/">Inici</Link>
              <Link href="/">Els nostres serveis</Link>
              <Link href="/">Sobre nosaltres</Link>
              <Link href="/">El nostre blog</Link>
            </Stack>
          </Box>
        ) : null}
      </Flex>
    </>
  );
}
