import { Box, Flex, Heading, VStack, useMediaQuery } from "@chakra-ui/react";
import CardBlog from "./blog/cardBlog";
import ButtonCarousel from "./blog/buttonCarousel";

import React, { useState } from "react";

export default function blog() {
  const provBlogAuthors = [
    "Eudald Capellades",
    "Victor López",
    "Ferran Martínez",
    "Rarulicius",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(true);

  const selectNewAuthor = (buttonIndex, provBlogAuthors) => {
    setLoaded(false);
    setTimeout(() => {
      setSelectedIndex(buttonIndex);
      setLoaded(true);
    }, 500);
  };

  const selectButton = (buttonIndex) => {
    selectNewAuthor(buttonIndex);
  };

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1280px)"
  );
  if (isMobile) {
    return (
      <Flex justify="center" alignItems="center" bg="brand.pureWhite">
        <VStack
          w={[320, 480, null, null, null, null]}
          h={[610, 578, null, null, null, null]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          spacing="0px"
        >
          <Box
            h={["40px", null, null, null, null, null]}
            w={[320, 440, null, null, null, null]}
            mb={["24px", null, null, null, null, null]}
            fontSize={["32px", null, null, null, null, null]}
            color="brand.red"
            fontWeight="semibold"
          >
            <Heading as="h6">Blog</Heading>
          </Box>
          <CardBlog
            loaded={loaded}
            onLoad={() => setLoaded(true)}
            selectedAuthor={provBlogAuthors[selectedIndex]}
            selectedIndex={selectedIndex}
          />
          <Box
            w={[320, 440, null, null, null, null]}
            h={["24px", null, null, null, null, null]}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              mt={["16px", "16px", null, null, null, null]}
              w={["108px", "108px", null, null, null, null]}
              h={["24px", "24px", null, null, null, null]}
              display="flex"
              justifyContent="space-between"
            >
              <ButtonCarousel
                selectButton={selectButton}
                index={0}
                selectedIndex={selectedIndex}
              />
              <ButtonCarousel
                selectButton={selectButton}
                index={1}
                selectedIndex={selectedIndex}
              />
              <ButtonCarousel
                selectButton={selectButton}
                index={2}
                selectedIndex={selectedIndex}
              />
              <ButtonCarousel
                selectButton={selectButton}
                index={3}
                selectedIndex={selectedIndex}
              />
            </Box>
          </Box>
        </VStack>
      </Flex>
    );
  } else if (isTablet) {
    return (
      <Flex justify="center" alignItems="center" bg="brand.pureWhite">
        <VStack
          w={[null, null, 768, 992, null, null]}
          h={[null, null, 626, 610, null, null]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          spacing="0px"
        >
          <Box
            h={[null, null, "40px", "40px", null, null]}
            w={[null, null, 728, 952, null, null]}
            mb={[null, null, "24px", "24px", null, null]}
            fontSize={[null, null, "32px", "32px", null, null]}
            color="brand.red"
            fontWeight="semibold"
          >
            <Heading as="h6">Blog</Heading>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            w={[null, null, 728, 952, null, null]}
          >
            <CardBlog
              loaded={loaded}
              onLoad={() => setLoaded(true)}
              selectedAuthor={provBlogAuthors[selectedIndex]}
            />
            {provBlogAuthors[selectedIndex + 1] ? (
              <CardBlog
                loaded={loaded}
                onLoad={() => setLoaded(true)}
                selectedAuthor={provBlogAuthors[selectedIndex + 1]}
              />
            ) : null}
          </Box>
          <Box
            w={[null, null, 728, 952, null, null]}
            h={[null, null, "24px", "24px", null, null]}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              mt={[null, null, "16px", "16px", null, null]}
              w={[null, null, "108px", "108px", null, null]}
              h={[null, null, "24px", "24px", null, null]}
              display="flex"
              justifyContent="space-between"
            >
              <ButtonCarousel
                selectButton={selectButton}
                index={0}
                selectedIndex={selectedIndex}
              />
              <ButtonCarousel
                selectButton={selectButton}
                index={1}
                selectedIndex={selectedIndex}
              />
              <ButtonCarousel
                selectButton={selectButton}
                index={2}
                selectedIndex={selectedIndex}
              />
            </Box>
          </Box>
        </VStack>
      </Flex>
    );
  } else {
    return (
      <Flex justify="center" alignItems="center" bg="brand.pureWhite">
        <VStack
          w={[null, null, null, null, 1128, null]}
          h={[null, null, null, null, 570, null]}
          display="flex"
          flexDirection="column"
          align="stretch"
          spacing="0px"
        >
          <Box h={[null, null, null, null, "64px", null]}></Box>
          <Box h={[null, null, null, null, "40px", null]}>
            <Heading
              as="h6"
              fontSize={[null, null, null, null, "32px", null]}
              color="brand.red"
              fontWeight="semibold"
            >
              Blog
            </Heading>
          </Box>
          <Box h={[null, null, null, null, "24px", null]}></Box>
          <Box
            h={[null, null, null, null, "378px", null]}
            display="flex"
            justifyContent="space-between"
          >
            <CardBlog />
            <CardBlog />
            <CardBlog />
          </Box>
        </VStack>
      </Flex>
    );
  }
}
