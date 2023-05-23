import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  ButtonGroup,
  Box,
  Collapse,
  Flex,
  Text,
  HStack,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { OnlineLogo, EmailIcon, PhoneIcon, LocationIcon } from "./icons";
import ButtonContact from "./general/buttons/buttonContact";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";

import { useState, useEffect } from "react";

import Link from "next/link";

export default function Navbar({
  isHome,
  isService,
  serviceType,
  isAbout,
  isBlog,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isDropdownOpen } = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isTabled = useBreakpointValue({ base: false, md: true });

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
              {isTabled ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup gap="24px">
                    <Box
                      as="button"
                      color={isHome ? "brand.red" : "brand.black"}
                      textDecoration={isHome ? "underline" : "none"}
                      _hover={{ color: "brand.red" }}
                      fontSize={[null, null, "16px", "16px", "16px", null]}
                    >
                      <Link href="/">Inicio</Link>
                    </Box>
                    <Menu
                      isOpen={isDropdownOpen}
                      backgroundColor="brand.white"
                      _selected={{ color: "brand.red", bg: "brand.white" }}
                      _focus={{ bg: "brand.white" }}
                    >
                      {({ isOpen }) => (
                        <>
                          <MenuButton
                            colorScheme="whiteAlpha"
                            as={Button}
                            fontWeight="normal"
                            backgroundColor="brand.white"
                            color={isService ? "brand.red" : "brand.black"}
                            textDecoration={isService ? "underline" : "none"}
                            fontSize={[
                              null,
                              null,
                              "16px",
                              "16px",
                              "16px",
                              null,
                            ]}
                          >
                            Servicios{" "}
                            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                          </MenuButton>
                          <MenuList>
                            <MenuItem
                              _focus={{ bg: "white" }}
                              _hover={{ bg: "brand.white" }}
                              color={
                                serviceType === "Desarrollo Web"
                                  ? "brand.red"
                                  : "brand.black"
                              }
                            >
                              <Link href="/services/web">Desarrollo Web</Link>
                            </MenuItem>
                            <MenuItem
                              _hover={{ bg: "brand.white" }}
                              color={
                                serviceType === "Diseño Web"
                                  ? "brand.red"
                                  : "brand.black"
                              }
                            >
                              <Link href="/services/design">Diseño Web</Link>
                            </MenuItem>
                            <MenuItem
                              _hover={{ bg: "brand.white" }}
                              color={
                                serviceType === "Consultoría UX/UI"
                                  ? "brand.red"
                                  : "brand.black"
                              }
                            >
                              <Link href="/services/ux-ui">
                                Consultoría UX/UI
                              </Link>
                            </MenuItem>
                            <MenuItem
                              _hover={{ bg: "brand.white" }}
                              color={
                                serviceType === "Social Media"
                                  ? "brand.red"
                                  : "brand.black"
                              }
                            >
                              <Link href="/services/social-media">
                                Marketing Digital
                              </Link>
                            </MenuItem>
                            <MenuItem
                              _hover={{ bg: "brand.white" }}
                              color={
                                serviceType === "Campañas SEM"
                                  ? "brand.red"
                                  : "brand.black"
                              }
                            >
                              <Link href="/services/sem">Campañas SEM</Link>
                            </MenuItem>
                            <MenuItem
                              _hover={{ bg: "brand.white" }}
                              color={
                                serviceType === "Posicionamiento SEO"
                                  ? "brand.red"
                                  : "brand.black"
                              }
                            >
                              <Link href="/services/seo">
                                Posicionamiento SEO
                              </Link>
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu>
                    <Box
                      as="button"
                      color={isAbout ? "brand.red" : "brand.black"}
                      textDecoration={isAbout ? "underline" : "none"}
                      _hover={{ color: "brand.red" }}
                      fontSize={[null, null, "16px", "16px", "16px", null]}
                    >
                      <Link href="/about">Nosotros</Link>
                    </Box>
                    <Box
                      as="button"
                      color="brand.black"
                      _hover={{ color: "brand.red" }}
                      fontSize={[null, null, "16px", "16px", "16px", null]}
                    >
                      <Link href="/blog">Blog</Link>
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

        {!isTabled ? (
          <Collapse in={isOpen}>
            <Flex h="calc(100vh - 56px)">
              <Flex>
                <Accordion
                  allowToggle
                  marginTop="16vh"
                  marginLeft="24px"
                  width="100%"
                  backgroundColor="brand.white"
                  borderColor="brand.white"
                >
                  <AccordionItem backgroundColor="brand.white">
                    <h2>
                      <AccordionButton
                        _focus={{ bg: "brand.white" }}
                        fontSize="20px"
                        fontWeight="bold"
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          color={isHome ? "brand.red" : "brand.black"}
                          textDecoration={isHome ? "underline" : "none"}
                        >
                          <Link href="/">Inicio</Link>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton
                            _focus={{ bg: "brand.white" }}
                            fontSize="20px"
                            fontWeight="bold"
                            onClick={() => setIsAccordionOpen(!isExpanded)}
                          >
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              color={isService ? "brand.red" : "brand.black"}
                              textDecoration={isService ? "underline" : "none"}
                            >
                              Nuestros servicios
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <ButtonGroup
                            display="flex"
                            flexDirection="column"
                            alignItems="flex-start"
                            justifyContent="space-between"
                            height="40vh"
                            backgroundColor="brand.white"
                          >
                            <Box
                              as="button"
                              color={
                                serviceType === "Desarrollo Web"
                                  ? "brand.red"
                                  : "brand.black"
                              }
                              fontSize="16px"
                              ml="8px"
                            >
                              <Link href="/services/web">Desarrollo Web</Link>
                            </Box>
                            <Box
                              as="button"
                              color={
                                serviceType === "Diseño Web"
                                  ? "brand.red"
                                  : "brand.black"
                              }
                              fontSize="16px"
                            >
                              <Link href="/services/design">Diseño Web</Link>
                            </Box>
                            <Box
                              as="button"
                              color={
                                serviceType === "Consultoría UX/UI"
                                  ? "brand.red"
                                  : "brand.black"
                              }
                              fontSize="16px"
                            >
                              <Link href="/services/ux-ui">
                                Consultoría UX/UI
                              </Link>
                            </Box>
                            <Box
                              as="button"
                              color={
                                serviceType === "Marketing Digital"
                                  ? "brand.red"
                                  : "brand.black"
                              }
                              fontSize="16px"
                            >
                              <Link href="/services/social-media">
                                Marketing Digital
                              </Link>
                            </Box>
                            <Box
                              as="button"
                              color={
                                serviceType === "Campañas SEM"
                                  ? "brand.red"
                                  : "brand.black"
                              }
                              fontSize="16px"
                            >
                              <Link href="/services/sem">Campañas SEM</Link>
                            </Box>
                            <Box
                              as="button"
                              color={
                                serviceType === "Posicionamiento SEO"
                                  ? "brand.red"
                                  : "brand.black"
                              }
                              fontSize="16px"
                            >
                              <Link href="/services/seo">
                                Posicionamiento SEO
                              </Link>
                            </Box>
                          </ButtonGroup>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem backgroundColor="brand.white">
                    <h2>
                      <AccordionButton
                        _focus={{ bg: "brand.white" }}
                        fontSize="20px"
                        fontWeight="bold"
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          color={isAbout ? "brand.red" : "brand.black"}
                          textDecoration={isAbout ? "underline" : "none"}
                        >
                          <Link href="/about">Sobre nosotros</Link>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem backgroundColor="brand.white">
                    <h2>
                      <AccordionButton
                        _focus={{ bg: "brand.white" }}
                        fontSize="20px"
                        fontWeight="bold"
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          color={isBlog ? "brand.red" : "brand.black"}
                          textDecoration={isBlog ? "underline" : "none"}
                        >
                          <Link href="/blog">Nuestro Blog</Link>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem
                    backgroundColor="brand.white"
                    mt="12vh"
                    visibility={isAccordionOpen ? "hidden" : "visible"}
                  >
                    <h2>
                      <AccordionButton
                        _focus={{ bg: "brand.white" }}
                        fontSize="16px"
                      >
                        <Box
                          as="span"
                          display="flex"
                          alignItems="center"
                          textAlign="left"
                          color={isBlog ? "brand.red" : "brand.black"}
                          textDecoration={isBlog ? "underline" : "none"}
                        >
                          <EmailIcon />
                          <Text ml="16px">mail@mailto.com</Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem backgroundColor="brand.white">
                    <h2>
                      <AccordionButton
                        _focus={{ bg: "brand.white" }}
                        fontSize="16px"
                        visibility={isAccordionOpen ? "hidden" : "visible"}
                      >
                        <Box
                          as="span"
                          display="flex"
                          alignItems="center"
                          textAlign="left"
                          color={isBlog ? "brand.red" : "brand.black"}
                          textDecoration={isBlog ? "underline" : "none"}
                        >
                          <PhoneIcon />
                          <Text ml="16px">933237184</Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem backgroundColor="brand.white">
                    <h2>
                      <AccordionButton
                        _focus={{ bg: "brand.white" }}
                        fontSize="16px"
                        visibility={isAccordionOpen ? "hidden" : "visible"}
                      >
                        <Box
                          as="span"
                          display="flex"
                          alignItems="center"
                          textAlign="left"
                          color={isBlog ? "brand.red" : "brand.black"}
                          textDecoration={isBlog ? "underline" : "none"}
                        >
                          <LocationIcon />
                          <Text ml="16px">
                            C/ Eudald el dèbil, 2n 2a, Gelida
                          </Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </Flex>
          </Collapse>
        ) : (
          <></>
        )}
      </Flex>
    </>
  );
}
