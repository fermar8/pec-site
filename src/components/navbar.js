import {
  ButtonGroup,
  Box,
  Collapse,
  Flex,
  Stack,
  Text,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { OnlineLogo, EmailIcon, PhoneIcon, LocationIcon } from "./icons";
import ButtonContact from "./general/buttons/buttonContact";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { useState, useEffect } from "react";

import Link from "next/link";

export default function Navbar({ isHome, isService, isAbout, isBlog }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [isOpen]);

  return (
    <>
      <Flex
        position="fixed"
        top={show ? "0px" : "-56px"}
        w="100%"
        flexDirection="column"
        bg="brand.white"
        zIndex={300}
        transition="0.3s"
      >
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
                      color={isHome ? "brand.red" : "brand.black"}
                      textDecoration={isHome ? "underline" : "none"}
                      _hover={{ color: "brand.red" }}
                      fontSize={[null, null, "16px", "16px", "16px", null]}
                    >
                      <Link href="/">Inici</Link>
                    </Box>
                    <Box
                      as="button"
                      color={isService ? "brand.red" : "brand.black"}
                      textDecoration={isService ? "underline" : "none"}
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
                    <ButtonContact />
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

        {!isDesktop ? (
          <Collapse in={isOpen}>
            <Flex
              h="calc(100vh - 56px)"
              flexDirection="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <Stack
                as={"nav"}
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                fontSize="20px"
                fontWeight="bold"
                h="calc(38vh - 56px)"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  h={[248, 248, null, null, null, null]}
                  w={[320, 440, null, null, null, null]}
                >
                  <Box
                    color={isHome ? "brand.red" : "brand.black"}
                    textDecoration={isHome ? "underline" : "none"}
                    _hover={{ color: "brand.red" }}
                  >
                    <Link href="/">Inici</Link>
                  </Box>
                  <Box
                    color={isService ? "brand.red" : "brand.black"}
                    textDecoration={isService ? "underline" : "none"}
                    _hover={{ color: "brand.red" }}
                  >
                    <Link href="/">Els nostres serveis</Link>
                  </Box>
                  <Box
                    color={isAbout ? "brand.red" : "brand.black"}
                    textDecoration={isAbout ? "underline" : "none"}
                    _hover={{ color: "brand.red" }}
                  >
                    <Link href="/">Sobre nosaltres</Link>
                  </Box>
                  <Box
                    color={isBlog ? "brand.red" : "brand.black"}
                    textDecoration={isBlog ? "underline" : "none"}
                    _hover={{ color: "brand.red" }}
                  >
                    <Link href="/">El nostre blog</Link>
                  </Box>
                </Box>
              </Stack>
              <Stack
                as={"nav"}
                justifyContent="space-between"
                alignItems="center"
                fontSize="16px"
                h="calc(28vh - 56px)"
                w="100%"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  h={[128, 128, null, null, null, null]}
                  w={[320, 440, null, null, null, null]}
                >
                  <Box display="flex" alignItems="center" w="100%">
                    <EmailIcon />
                    <Text ml="16px">mail@mailto.com</Text>
                  </Box>
                  <Box display="flex" alignItems="center" w="100%">
                    <PhoneIcon />
                    <Text ml="16px">933237184</Text>
                  </Box>
                  <Box display="flex" alignItems="center" w="100%">
                    <LocationIcon />
                    <Text ml="16px">C/ Eudald el dèbil, 2n 2a, Gelida</Text>
                  </Box>
                </Box>
              </Stack>
            </Flex>
          </Collapse>
        ) : (
          <></>
        )}
      </Flex>
    </>
  );
}
