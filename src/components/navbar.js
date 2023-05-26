import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  ButtonGroup,
  Box,
  Divider,
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
  const isTablet = useBreakpointValue({ base: false, md: true });

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
        bg="brand.whiteBackground"
        zIndex={300}
        transition="0.3s"
      >
        <Flex
          as="header"
          justify="center"
          alignItems="center"
          borderBottom="1px"
          borderBottomColor="brand.border"
          h="56px"
        >
          <Box width={[320, 440, 728, 952, 1128, null]}>
            <HStack gap="24px">
              <Flex justify="space-between" alignItems="center" gap="24px">
                <OnlineLogo />
                <Divider orientation="vertical" h="24px" w="1px" bg="brand.border"></Divider>
              </Flex>
              {isTablet ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup gap="24px">
                    <Box
                      as="button"
                      color={isHome ? "brand.main" : "brand.text"}
                      textDecoration={isHome ? "underline" : "none"}
                      _hover={{ color: "brand.main" }}
                      fontSize={[null, null, "16px", "16px", "16px", null]}
                    >
                      <Link href="/">Inicio</Link>
                    </Box>
                    <Menu
                      isOpen={isDropdownOpen}
                      backgroundColor="brand.whiteBackground"
                      _selected={{ color: "brand.main", bg: "brand.whiteBackground" }}
                      _focus={{ bg: "brand.whiteBackground" }}
                    >
                      {({ isOpen }) => (
                        <>
                          <MenuButton
                            colorScheme="whiteAlpha"
                            as={Button}
                            fontWeight="normal"
                            backgroundColor="brand.whiteBackground"
                            _hover={{ color: "brand.main" }}
                            color={isService ? "brand.main" : "brand.text"}
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
                              _focus={{ bg: "brand.whiteBackground" }}
                              _hover={{ bg: "brand.whiteBackground" }}
                              color={
                                serviceType === "Desarrollo Web"
                                  ? "brand.main"
                                  : "brand.text"
                              }
                            >
                              <Link href="/services/web">Desarrollo Web</Link>
                            </MenuItem>
                            <MenuItem
                              _hover={{ bg: "brand.whiteBackground" }}
                              color={
                                serviceType === "Diseño Web"
                                  ? "brand.main"
                                  : "brand.text"
                              }
                            >
                              <Link href="/services/design">Diseño Web</Link>
                            </MenuItem>
                            <MenuItem
                              _hover={{ bg: "brand.whiteBackground" }}
                              color={
                                serviceType === "Consultoría UX/UI"
                                  ? "brand.main"
                                  : "brand.text"
                              }
                            >
                              <Link href="/services/ux-ui">
                                Consultoría UX/UI
                              </Link>
                            </MenuItem>
                            <MenuItem
                              _hover={{ bg: "brand.whiteBackground" }}
                              color={
                                serviceType === "Social Media"
                                  ? "brand.main"
                                  : "brand.text"
                              }
                            >
                              <Link href="/services/social-media">
                                Marketing Digital
                              </Link>
                            </MenuItem>
                            <MenuItem
                              _hover={{ bg: "brand.whiteBackground" }}
                              color={
                                serviceType === "Campañas SEM"
                                  ? "brand.main"
                                  : "brand.text"
                              }
                            >
                              <Link href="/services/sem">Campañas SEM</Link>
                            </MenuItem>
                            <MenuItem
                              _hover={{ bg: "brand.whiteBackground" }}
                              color={
                                serviceType === "Posicionamiento SEO"
                                  ? "brand.main"
                                  : "brand.text"
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
                      color={isAbout ? "brand.main" : "brand.text"}
                      textDecoration={isAbout ? "underline" : "none"}
                      _hover={{ color: "brand.main" }}
                      fontSize={[null, null, "16px", "16px", "16px", null]}
                    >
                      <Link href="/about">Nosotros</Link>
                    </Box>
                    <Box
                      as="button"
                      _hover={{ color: "brand.main" }}
                      fontSize={[null, null, "16px", "16px", "16px", null]}
                      color={isBlog ? "brand.main" : "brand.text"}
                      textDecoration={isBlog ? "underline" : "none"}
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
                        <CloseIcon h="18px" w="18px" color="brand.main" />
                      ) : (
                        <HamburgerIcon h="32px" w="32px" color="brand.main" />
                      )
                    }
                    aria-label="Open Menu"
                  />
                </Flex>
              )}
            </HStack>
          </Box>
        </Flex>

        {!isTablet ? (
          <Collapse in={isOpen}>
            <Flex h="calc(100vh - 56px)">
              <Flex>
                <Accordion
                  allowToggle
                  marginTop="16vh"
                  marginLeft="24px"
                  width="100%"
                  backgroundColor="brand.whiteBackground"
                  borderColor="brand.whiteBackground"
                >
                  <AccordionItem backgroundColor="brand.whiteBackground">
                    <h2>
                      <AccordionButton
                        _focus={{ bg: "brand.whiteBackground" }}
                        fontSize="20px"
                        fontWeight="bold"
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          color={isHome ? "brand.main" : "brand.text"}
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
                            _focus={{ bg: "brand.whiteBackground" }}
                            fontSize="20px"
                            fontWeight="bold"
                            onClick={() => setIsAccordionOpen(!isExpanded)}
                          >
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              color={isService ? "brand.main" : "brand.text"}
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
                            backgroundColor="brand.whiteBackground"
                          >
                            <Box
                              as="button"
                              color={
                                serviceType === "Desarrollo Web"
                                  ? "brand.main"
                                  : "brand.text"
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
                                  ? "brand.main"
                                  : "brand.text"
                              }
                              fontSize="16px"
                            >
                              <Link href="/services/design">Diseño Web</Link>
                            </Box>
                            <Box
                              as="button"
                              color={
                                serviceType === "Consultoría UX/UI"
                                  ? "brand.main"
                                  : "brand.text"
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
                                  ? "brand.main"
                                  : "brand.text"
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
                                  ? "brand.main"
                                  : "brand.text"
                              }
                              fontSize="16px"
                            >
                              <Link href="/services/sem">Campañas SEM</Link>
                            </Box>
                            <Box
                              as="button"
                              color={
                                serviceType === "Posicionamiento SEO"
                                  ? "brand.main"
                                  : "brand.text"
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
                  <AccordionItem backgroundColor="brand.whiteBackground">
                    <h2>
                      <AccordionButton
                        _focus={{ bg: "brand.whiteBackground" }}
                        fontSize="20px"
                        fontWeight="bold"
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          color={isAbout ? "brand.main" : "brand.text"}
                          textDecoration={isAbout ? "underline" : "none"}
                        >
                          <Link href="/about">Sobre nosotros</Link>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem backgroundColor="brand.whiteBackground">
                    <h2>
                      <AccordionButton
                        _focus={{ bg: "brand.whiteBackground" }}
                        fontSize="20px"
                        fontWeight="bold"
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          color={isBlog ? "brand.main" : "brand.text"}
                          textDecoration={isBlog ? "underline" : "none"}
                        >
                          <Link href="/blog">Nuestro Blog</Link>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem
                    backgroundColor="brand.whiteBackground"
                    mt="12vh"
                    visibility={isAccordionOpen ? "hidden" : "visible"}
                  >
                    <h2>
                      <AccordionButton
                        _focus={{ bg: "brand.whiteBackground" }}
                        fontSize="16px"
                      >
                        <Box
                          as="span"
                          display="flex"
                          alignItems="center"
                          textAlign="left"
                        >
                          <EmailIcon />
                          <Text ml="16px">mail@mailto.com</Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem backgroundColor="brand.whiteBackground">
                    <h2>
                      <AccordionButton
                        _focus={{ bg: "brand.whiteBackground" }}
                        fontSize="16px"
                        visibility={isAccordionOpen ? "hidden" : "visible"}
                      >
                        <Box
                          as="span"
                          display="flex"
                          alignItems="center"
                          textAlign="left"
                        >
                          <PhoneIcon />
                          <Text ml="16px">933237184</Text>
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                  <AccordionItem backgroundColor="brand.whiteBackground">
                    <h2>
                      <AccordionButton
                        _focus={{ bg: "brand.whiteBackground" }}
                        fontSize="16px"
                        visibility={isAccordionOpen ? "hidden" : "visible"}
                      >
                        <Box
                          as="span"
                          display="flex"
                          alignItems="center"
                          textAlign="left"
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
